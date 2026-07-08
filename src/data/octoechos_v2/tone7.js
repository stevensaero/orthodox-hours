// src/data/octoechos_v2/tone7.js
// ─────────────────────────────────────────────────────────────────────────────
// Octoechos V2 — Tone 7, DIFFERENTIAL scan (spec §11: templates assumed after
// the tone-3 verification, texts and per-tone facts captured fresh from the
// tone-7 chapters). THIS STEP: core §4.1 + Little Vespers + Great Vespers +
// Nocturns + Sunday Matins + Sunday Liturgy from 7-1.pdf (text layer CLEAN,
// scan July 8 2026); weekday sections merge in next.
//
// GENERATED from the raw pdftotext -layout text by paragraph-grammar walking
// (adapted tone-6 generators, July 8 2026) — nothing hand-retyped. Canonical
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
    "text": "Thou didst destroy death by Thy Cross, * Thou didst open paradise to the thief. * Thou didst change the lamentation of the myrrh-bearers, * and Thou didst command Thine apostles to proclaim * that Thou didst arise, O Christ God, ** granting the world great mercy.",
    "tier": 2,
    "src": {
      "file": "7-1.pdf",
      "locus": "Great Vespers, if-no-Vigil (CANONICAL print, §9.5 convention)"
    },
    "provenance_note": "Verified WORD-identical at all four print sites (LV dismissal, GV no-vigil, Matins God-is-the-Lord, Liturgy); quotation-mark variance at: none; pointing (*/**): Matins; word-level divergence: none. Canonical field stores the GV print per the §9.5 ruling."
  },
  "dismissal_theotokion": {
    "text": "As thou art the treasury of our resurrection, * O all-hymned one, * lead up from the pit and abyss of transgression * those who place their trust in thee, * for thou who hast given birth to our Salvation * hast saved those who are subject to sin. * Thou wast a virgin before giving birth, * and a virgin during child-bearing, ** and thou didst remain a virgin ** even after birthgiving.",
    "tier": 2,
    "src": {
      "file": "7-1.pdf",
      "locus": "Great Vespers, if-no-Vigil (verified identical at the Matins God-is-the-Lord site)"
    }
  },
  "kontakion": {
    "text": "No longer does the might of death * have power to keep mortals captive; * for Christ hath come down, smashing it and destroying its power. * Now that Hades is bound, the prophets with one voice joyously declare, * “The Savior hath appeared to those with faith. ** Come out O ye faithful, to adore the Resurrection!”",
    "tier": 2,
    "src": {
      "file": "7-1.pdf",
      "locus": "Sunday Matins after Ode VI (verified identical at the Liturgy site)"
    }
  },
  "ikos": {
    "text": "All that is beneath the earth, Hades and death, today doth tremble before one of the Trinity; the earth quaked, the gate-keepers of Hades, upon seeing Thee, trembled; all creation, rejoicing with the prophets, doth sing to Thee a song of victory, O our Redeemer and God. Thou hast destroyed the power of death, Let us therefore shout with joy and cry aloud unto Adam and his descendants, “Come out, O ye faithful, to the adoration of the Resurrection!”",
    "tier": 1,
    "src": {
      "file": "7-1.pdf",
      "locus": "Sunday Matins, after Ode VI"
    },
    "sourceLabel": "Ikos"
  },
  "little_vespers": {
    "rubric": "On “Lord, I have cried ...,” 4 Stichera:",
    "lic": [
      {
        "text": "O Come, let us rejoice in the Lord * who hath destroyed the dominion of death * and enlightened the race of mankind, * as we cry aloud with the bodiless powers: ** “Our Creator and Savior, glory be to Thee!”",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Little Vespers, LIC sticheron position 1"
        }
      },
      {
        "text": "O Come, let us rejoice in the Lord * who hath destroyed the dominion of death * and enlightened the race of mankind, * as we cry aloud with the bodiless powers: ** “Our Creator and Savior, glory be to Thee!”",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Little Vespers, LIC sticheron position 2"
        }
      },
      {
        "text": "Thou didst endure the Cross and burial * for our sake, O Christ, * but as God by Thy death Thou hast slain death; * wherefore we worship Thy Resurrection on the third day. ** O Lord, glory be to Thee!",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Little Vespers, LIC sticheron position 3"
        }
      },
      {
        "text": "The apostles were struck with amazement when they saw the Creator’s arising * and they cried aloud the angelic hymn of praise: * “This is the glory of the Church, this is the wealth of the kingdom. ** O Lord, who hath suffered for us, glory be to Thee!”",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Little Vespers, LIC sticheron position 4"
        }
      }
    ],
    "lic_verses": [
      {
        "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Little Vespers, LIC verse 1"
        }
      },
      {
        "text": "For with the Lord there is mercy, and with Him is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Little Vespers, LIC verse 2"
        }
      },
      {
        "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Little Vespers, LIC verse 3"
        }
      },
      {
        "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Little Vespers, LIC verse 4"
        }
      }
    ],
    "lic_theotokion": {
      "text": "Truly fearful and ineffable is the mystery * that hath been wrought in thee, O most pure one; * for surpassing nature and telling Thou hast given birth to the Word, the cause of all things, * Who became incarnate by the Holy Spirit, * taking flesh from thee, while preserving His own nature unchanged. * For when both natures had come together self-subsistent in a single Hypostasis, * He came forth dual in nature, wholly God and wholly man, * displaying the fullness of both natures. * For having endured the Passion in the flesh on the Cross, * He remained impassible in his divinity; * and having reposed as a man He returned to life on the third day as God, * destroying the dominion of death and redeeming the race of mankind from corruption. * O Mother of God, beseech Him as the Redeemer and Savior of our race ** to send down upon us the great mercy of His compassion.",
      "tier": 2,
      "src": {
        "file": "7-1.pdf",
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
          "text": "Thou didst arise from the tomb, * O Savior of the world, * and with Thy flesh * Thou hast raised mankind. ** O Lord, glory be to Thee!",
          "tier": 2,
          "src": {
            "file": "7-1.pdf",
            "locus": "Little Vespers, aposticha Resurrection sticheron (as printed here — differs from the GV print, §2.2)"
          }
        }
      ],
      "theotokos": [
        {
          "text": "O Virgin, Thou hast become the dayspring of the spiritual Sun, * that came upon the sunset of our nature; * but as thou hast boldness, * all-praised Mother of God, ** beseech Him to redeem our souls from our countless offences.",
          "tier": 2,
          "src": {
            "file": "7-1.pdf",
            "locus": "Little Vespers, aposticha Theotokos sticheron 1"
          }
        },
        {
          "text": "Like the rod from Jesse’s root, * thou hast been revealed, O Virgin, * as budding forth with Him, Who wholly uprooted the weeds of deception, * as thou hast boldness towards Him, pray thou ceaselessly, O all-praised one, * to root out the passions of my heart, ** and to plant in it the fear of Him and save me.",
          "tier": 2,
          "src": {
            "file": "7-1.pdf",
            "locus": "Little Vespers, aposticha Theotokos sticheron 2"
          }
        },
        {
          "text": "O gate of God most holy, deliver me from the gates of Hades * and show me also the way of repentance, * by which I may find the gate that leads unto life. * O guide of those who have gone astray, ** watch over the race of thy faithful people and save our souls.",
          "tier": 2,
          "src": {
            "file": "7-1.pdf",
            "locus": "Little Vespers, aposticha Theotokos sticheron 3"
          }
        }
      ],
      "theotokos_verses": {
        "ref": "shared.lv_theotokos_aposticha_verses"
      }
    },
    "aposticha_theotokion": {
      "text": "From thee, all-holy Virgin Theotokos, * Christ our God wast born, * He Who is truly God before the ages, became a man; * Though God omniscient, He hath appeared as man for our sakes. * For in Himself He preserveth the properties of each nature, * causing the one to shine forth with wonders, and confirming the other by sufferings, * wherefore He dieth as a man and riseth as God. * Implore Him, O pure one who knewest not wedlock, ** that our souls may be saved.",
      "tier": 2,
      "src": {
        "file": "7-1.pdf",
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
        "text": "O Come, let us rejoice in the Lord * who hath destroyed the dominion of death * and enlightened the race of mankind, * as we cry aloud with the bodiless powers: ** “Our Creator and Savior, glory be to Thee!”",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Great Vespers, LIC sticheron 1"
        }
      },
      {
        "text": "Thou didst endure the Cross and burial * for our sake, O Christ, * but as God by Thy death Thou hast slain death; * wherefore we worship Thy Resurrection on the third day. ** O Lord, glory be to Thee!",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Great Vespers, LIC sticheron 2"
        }
      },
      {
        "text": "The apostles were struck with amazement when they saw the Creator’s arising * and they cried aloud the angelic hymn of praise: * “This is the glory of the Church, this is the wealth of the kingdom. ** O Lord, who hath suffered for us, glory be to Thee!”",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Great Vespers, LIC sticheron 3"
        }
      },
      {
        "text": "Though Thou wast seized by lawless men, O Christ, * yet Thou art my God, and I am not ashamed; * Thy back was scourged, but I do not deny Thee; * Thou wast nailed to a Cross, but I do not hide from Thee. * I make my boast in Thine arising; * for Thy death is my life. ** All-powerful Lord who lovest mankind, glory be to Thee!",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Great Vespers, LIC sticheron 4"
        },
        "provenance_note": "sub-group \"Other Stichera, by Anatolius\" (§4.3)"
      },
      {
        "text": "Fulfilling David’s prophecy Christ revealed His majesty * to His disciples in Zion, * showing that He was praised and ever glorified with the Father and the Holy Spirit; * at first without flesh as the Word, * afterwards for our sake incarnate and put to death as a man, * and risen with authority ** as the Lover of mankind.",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Great Vespers, LIC sticheron 5"
        },
        "provenance_note": "sub-group \"Other Stichera, by Anatolius\" (§4.3)"
      },
      {
        "text": "By willingly descending into Hades O Christ, * Thou didst despoil death, * and by arising on the third day as God and Lord, * Thou didst raise together with Thyself from the bonds and corruption of Hades, * those who cried aloud: “Glory to Thine all-powerful Resurrection. ** O Lord, glory be to Thee!”",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Great Vespers, LIC sticheron 6"
        },
        "provenance_note": "sub-group \"Other Stichera, by Anatolius\" (§4.3)"
      },
      {
        "text": "Thou wast laid in a tomb, O Lord, as One who sleepeth * and Who hast arisen on the third day as One mighty in strength, * raising with Thyself Adam from the corruption of death, ** as One All-powerful.",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
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
          "file": "7-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 1"
        }
      },
      {
        "text": "The righteous shall wait patiently for me * until Thou shalt reward me.",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 2"
        }
      },
      {
        "text": "Out of the depths have I cried unto Thee, O Lord; * O Lord, hear my voice.",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 3"
        }
      },
      {
        "text": "Let Thine ears be attentive * to the voice of my supplication.",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 4"
        }
      },
      {
        "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 5"
        }
      },
      {
        "text": "For Thy name’s sake have I patiently waited for Thee, O Lord; my soul hath patiently waited for Thy word, * my soul hath hoped in the Lord.",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Great Vespers, LIC ladder verse 6"
        }
      },
      {
        "text": "From the morning watch until night, from the morning watch * let Israel hope in the Lord.",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
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
          "file": "7-1.pdf",
          "locus": "Great Vespers, Menaion-stichera verse 1"
        }
      },
      {
        "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Great Vespers, Menaion-stichera verse 2"
        }
      },
      {
        "text": "For He hath made His mercy to prevail over us, * and the truth of the Lord abideth forever.",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Great Vespers, Menaion-stichera verse 3"
        }
      }
    ],
    "dogmatikon_rubric": "Glory from the Menaion, if appointed. Otherwise: Glory ..., Both now ..., Theotokion Dogmatic:",
    "dogmatikon": {
      "text": "Thou hast been known to have become a mother * in a manner surpassing nature O Theotokos, * and hast remained a virgin in a manner beyond all telling and understanding; * no tongue can expound the wonder of thy birthgiving. * For while thy conceiving O pure one, was most glorious, * the manner of thy birthgiving transcends comprehension; * for where God so willeth, the order of nature is overthrown. * Wherefore, we all, knowing thee to be the Mother of God, * do earnestly entreat thee: ** Pray thou that our souls be saved!",
      "tier": 2,
      "src": {
        "file": "7-1.pdf",
        "locus": "Great Vespers, Glory/Both-now — Theotokion Dogmatic"
      },
      "sourceLabel": "Glory ..., Both now ..., Theotokion Dogmatic"
    },
    "prokeimenon": {
      "ref": "shared.saturday_vespers_prokeimenon"
    },
    "aposticha": [
      {
        "text": "Thou didst arise from the tomb, O Savior of the world, * and with Thy flesh Thou hast raised mankind. ** O Lord, glory be to Thee!",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Great Vespers, aposticha sticheron 1 (unversed)"
        }
      },
      {
        "text": "Come, let us worship Him Who hath arisen from the dead * and enlightened all things; * for He hath delivered us from the tyranny of Hades * through His Resurrection on the third day, * granting us life and great mercy.",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Great Vespers, aposticha sticheron 2"
        }
      },
      {
        "text": "Having descended into Hades O Christ, Thou hast despoiled death, * and by rising on the third day, Thou hast raised us also together with Thyself, * wherefore we glorify Thine all-powerful arising. ** O Lord, glory be to Thee!",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Great Vespers, aposticha sticheron 3"
        }
      },
      {
        "text": "Fearful didst Thou appear, O Lord, as Thou lay in the tomb as One sleeping; * and having arisen on the third day as All-powerful * Thou hast raised Adam together with Thyself, who cried aloud: ** “Glory to Thy Resurrection, O only Lover of mankind.”",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Great Vespers, aposticha sticheron 4"
        }
      }
    ],
    "aposticha_verses": {
      "ref": "shared.saturday_gv_aposticha_verses"
    },
    "aposticha_glory_rubric": "Glory from the Menaion, if appointed, otherwise:",
    "aposticha_theotokion": {
      "text": "Having recourse unto thy protection, O Lady, * all we born of earth cry aloud to thee: * O Theotokos, our hope, deliver us * from our countless transgressions, ** and save thou our souls.",
      "tier": 2,
      "src": {
        "file": "7-1.pdf",
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
      "acrostic": "I praise Thee, O Trinity, Thou sole reigning Essence",
      "heading_rubric": "And then, the Canon to the Holy & Life-creating Trinity, the acrostic whereof is “I praise Thee, O Trinity, Thou sole reigning Essence,” the composition of Metrophanes, in Tone VII:",
      "odes": {
        "1": {
          "irmos": {
            "text": "At thy command O Lord, * the nature of the waters that beforehand flowed freely was transformed * and became like the earth; * whereby Israel having traversed them dryshod * chanted unto Thee a hymn of victory.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 1 irmos"
            }
          },
          "items": [
            {
              "text": "Refrain: O most holy Trinity, our God, glory be to Thee!",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 1"
              },
              "label": "plain"
            },
            {
              "text": "The noetic mouth of my heart and my material lips do Thou open that I may praise Thee, O only thrice-radiant God of all, and that I may chant hymnody of thanksgiving unto Thee, the Bestower of light.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 2"
              },
              "label": "plain"
            },
            {
              "text": "That Thou mightest show forth the abundance of Thy goodness, Thou didst create man, who is the mere image in clay of Thy ruling image, O Creator, Trinity infinite in power.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 3"
              },
              "label": "plain"
            },
            {
              "text": "O beginningless Mind, Who didst beget the coeternal Word and shine forth the equally-beginningless Spirit: Grant that we may worship the one God in three Hypostases, alike in essence.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 4"
              },
              "label": "plain"
            },
            {
              "text": "Theotokion: O Word of God, Thou didst appear to Moses in the bush as a purifying fire which in no wise consumed it, prefiguring Thine incarnation from the Virgin, whereby Thou didst refashion mankind.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 1, item 5"
              },
              "label": "plain"
            }
          ]
        },
        "3": {
          "irmos": {
            "text": "O Lord and Savior, * Who in the beginning established the heavens * by Thine all-powerful Word, * and by the divine and all-accomplishing Spirit * hath granted them all their strength, * do Thou establish me on the unshakeable rock of Thy confession.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 3 irmos"
            }
          },
          "items": [
            {
              "text": "Hymning Thee, the one, thrice-radiant and all-accomplishing Master, O God infinite in power, we beg deliverance from sins and temptations. Disdain not those who with faith glorify Thy goodness.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 1"
              },
              "label": "plain"
            },
            {
              "text": "God the Word appeared from the Father as doth an offshoot from a beginningless root, and He is equal in might with the conjoined and divine Spirit; wherefore, O ye faithful, let us glorify the trinity of Hypostases, the one Dominion.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 2"
              },
              "label": "plain"
            },
            {
              "text": "O ye faithful, let us all glorify the one reigning Trinity, the Essence in three Hypostases, indivisibly and indistinguishably equal in glory and conjoined; and rendering worship, let us ask forgiveness offenses.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 3"
              },
              "label": "plain"
            },
            {
              "text": "Theotokion: O Word of God, having immutably taken on the likeness of man, Thou didst manifestly issue forth from the pure maiden, and didst show unto all the thrice-radiant Godhead of the immutable Hypostases one in essence.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 4"
              },
              "label": "plain"
            },
            {
              "text": "Lord, have mercy! (Thrice)",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 3, item 5"
              },
              "label": "plain"
            }
          ]
        },
        "4": {
          "irmos": {
            "text": "Having never left the bosom of the Father, * Thou didst descend to earth O Christ God, * I have heard of the mystery of Thy dispensation, * and I have glorified Thee, * O only Lover of mankind.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 4 irmos"
            }
          },
          "items": [
            {
              "text": "O sustaining and thrice-radiant Unity, divine and salvific for all, protect now those who hymn Thee, and save them from tribulation, sufferings and every affliction.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 4, item 1"
              },
              "label": "plain"
            },
            {
              "text": "Perplexed by the sayings which signify Thine unapproachable and thrice- radiant divinity, we hymn Thee, O Lord Who lovest mankind, and glorify Thy power.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 4, item 2"
              },
              "label": "plain"
            },
            {
              "text": "With the incorporeal choirs in the heavens, we on earth distinguish between Thy Hypostases, O Unity and Trinity, and with love we glorify Thee as He Who alone hath dominion over all.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 4, item 3"
              },
              "label": "plain"
            },
            {
              "text": "Theotokion: Without leaving the glory of the Father, of Thine own will Thou didst condescend to assume our lowliness, becoming incarnate, O transcendent One; and Thou didst raise it up to divine glory, in that Thou art full of loving- kindness.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 4, item 4"
              },
              "label": "plain"
            }
          ]
        },
        "5": {
          "irmos": {
            "text": "Night is bereft of light * for those without faith, O Christ, * but for the faithful there is enlightenment * in the sweetness of Thy words; * wherefore, I rise early unto Thee * and hymn Thy divinity.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 5 irmos"
            }
          },
          "items": [
            {
              "text": "O Trinity of Hypostases, light-creating Essence, Unity in counsel, glory and worship: Establish us in Thy love.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 5, item 1"
              },
              "label": "plain",
              "repeat": 2
            },
            {
              "text": "Glorifying the Mind, the Word and the Spirit, the divine, three-sunned Essence, we beg deliverance from temptations and all tribulations.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 5, item 2"
              },
              "label": "plain"
            },
            {
              "text": "Theotokion: Taking form in human nature through the holy Virgin, O Word of God, Thou didst teach all to hymn the Trinity in Unity, sharing the same form and co-enthroned.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 5, item 3"
              },
              "label": "plain"
            }
          ]
        },
        "6": {
          "irmos": {
            "text": "Sailing in the tempest of the cares of life, * together with the ship I have been submerged by sins, * and cast to the soul-corrupting beast, * wherefore like Jonah I cry to Thee, O Christ: * Lead me up from the deadly abyss.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 6 irmos"
            }
          },
          "items": [
            {
              "text": "We glorify the Dominion one in glory, the sole reigning Godhead in three Hypostases which are immutably joined One with Another, distinguished only as to the origin of Each.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 1"
              },
              "label": "plain",
              "repeat": 2
            },
            {
              "text": "The noetic ranks of the beauties of the angels praise Thee, O three-sunned Godhead; and with mouths of clay we also faithfully hymn and glorify Thee as the one Creator of all.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 2"
              },
              "label": "plain"
            },
            {
              "text": "Theotokion: At the strange words of the archangel the Word Who was begotten before the ages as another Sun, of the Father Who is the Sun, shone forth from the Virgin in the latter times, and preached the incomprehensible God Who is One in three Hypostases.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 3"
              },
              "label": "plain"
            },
            {
              "text": "Lord, have mercy! (Thrice)",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 4"
              },
              "label": "plain"
            },
            {
              "text": "Glory..., Both now ..., Theotokion:",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 5"
              },
              "label": "plain"
            },
            {
              "text": "More brilliant than light is the mercy of thy grace, O Lady, burning up the sins of all and bedewing the thoughts of those who praise thy mighty works, O most immaculate Theotokos.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 6, item 6"
              },
              "label": "plain"
            }
          ]
        },
        "7": {
          "irmos": {
            "text": "Cast into the fiery furnace, * the venerable children transformed the fire into dew, * crying aloud thus in hymnody: * Blessed art Thou O Lord, the God of our fathers!",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 7 irmos"
            }
          },
          "items": [
            {
              "text": "O Thrice-radiant God, unapproachable and transcendent Unity, ever shining with the splendors of rays of light, save those who piously believe on Thee and worship Thee, O Master.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 7, item 1"
              },
              "label": "plain"
            },
            {
              "text": "Following the sayings of the divine prophets, Thee only, the one God of all in three Hypostases, do we glorify, crying out thus: Blessed art Thou, O Lord God of our fathers!",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 7, item 2"
              },
              "label": "plain"
            },
            {
              "text": "With lips of dust, O Holy Trinity, we, together with the immaterial ranks, hymn Thee with songs crying out to the Unity of Essence: Blessed art Thou, O Lord God of our fathers!",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 7, item 3"
              },
              "label": "plain"
            },
            {
              "text": "Theotokion: That He Who fashioned Adam might fashion him anew, He clearly became incarnate from thee, O all-pure one, deifying mankind, which crieth out thus: Blessed is the Fruit of thy womb, O most pure one!",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 7, item 4"
              },
              "label": "plain"
            }
          ]
        },
        "8": {
          "irmos": {
            "text": "Unconsumed by fire, the bush on Sinai spake unto Moses, * slow of speech and stammering, * and revealed God unto him; * and zeal for God showed forth the three children who chanted hymns * to be unvanquished by the fire. * O all ye His works, praise ye the Lord * and supremely exalt Him throughout all ages.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 8 irmos"
            }
          },
          "items": [
            {
              "text": "Grant that those who hymn Thee may be enlightened with the illumining rays of the thrice-radiant Sun, and may now behold Thy beauty, O Trinity and Unity. And grant this ever, as far as is possible, unto all who with fitting faith hymn Thy greatness throughout all ages.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 8, item 1"
              },
              "label": "plain"
            },
            {
              "text": "Thou dost hold all things, O beginningless Dominion in Trinity and Unity, and dost direct heaven and the earth. Wherefore, keep me ever drawn by Thy love, that I may chant unto Thee: Hymn the Lord, all ye works of the Lord, and supremely exalt Him throughout all ages!",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 8, item 2"
              },
              "label": "plain"
            },
            {
              "text": "Make me a temple of Thy thrice-radiant effulgence, O Benefactor and Lover of mankind, and show me to be immune to communion and fellowship with the invisible foe and the carnal passions, O my God, sole Ruler and Lord of glory, that I may hymn Thee throughout all ages.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 8, item 3"
              },
              "label": "plain"
            },
            {
              "text": "Theotokion: The divine Light Who shone forth from thy womb, O most pure Mother of God, hath illumined the whole world with the light of the threefold Sun, and shown the earth to be another heaven, which singeth: Hymn the Lord, all ye works of the Lord, and supremely exalt Him throughout all ages!",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 8, item 4"
              },
              "label": "plain"
            }
          ]
        },
        "9": {
          "irmos": {
            "text": "O Mother of God and Virgin, * thou hast given birth and yet remained a virgin, * not in accordance with nature, * but by the condescension of God; * wherefore, we ever magnify thee, * who alone wast deemed worthy * of the wonders of God.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Nocturns, Trinity canon, Ode 9 irmos"
            }
          },
          "items": [
            {
              "text": "We who are clay are unable to worthily hymn Thee with exalted speech, Whom the seraphim unceasingly hymn in the highest; yet we dare to magnify Thee as the Master of all Who art full of love for mankind.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 9, item 1"
              },
              "label": "plain"
            },
            {
              "text": "Deliver those who hymn Thee from illness of body and the passions of the soul, O Trinity One and Indivisible; and grant that we may be preserved unharmed by all the trials of life.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 9, item 2"
              },
              "label": "plain"
            },
            {
              "text": "O Dominion equal in power, divine, thrice-radiant and omnipotent, immutable Beauty of essential goodness: Grant remission of transgressions unto Thy servants, and deliver us from temptations and sufferings.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 9, item 3"
              },
              "label": "plain"
            },
            {
              "text": "Theotokion: Receiving mind and soul and fleshly substance from thy most pure womb, O Theotokos, God the Word truly became a man; and He manifestly showed mankind to share in the divine nature.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Nocturns, Trinity canon, Ode 9, item 4"
              },
              "label": "plain"
            }
          ]
        }
      }
    },
    "after_ode3": {
      "sessional": {
        "text": "Have mercy on Thy servants who have sinned, O Holy Trinity; accept those who repent before Thee, O compassionate One, and grant unto them forgiveness.",
        "tier": 1,
        "src": {
          "file": "7-1.pdf",
          "locus": "Nocturns, Trinity canon, sessional after Ode III"
        },
        "spec_mel": "He Who for my sake",
        "sourceLabel": "Sessional Hymn"
      },
      "theotokion": {
        "text": "Bless thou our souls, which are afflicted by sins, O all-pure Theotokos, and from transgressions deliver those who hymn thee, O Bride of God.",
        "tier": 1,
        "src": {
          "file": "7-1.pdf",
          "locus": "Nocturns, Trinity canon, sessional theotokion after Ode III"
        },
        "type": "theotokion"
      }
    },
    "after_ode6": {
      "sessional": {
        "text": "O consubstantial Trinity, Unity of all in three Hypostases, have mercy upon those Whom Thou hast created, O immortal One, burning up the evils of transgressors and enlightening the hearts of those who sing to Thy loving- kindness: O our God, glory be to Thee!",
        "tier": 1,
        "src": {
          "file": "7-1.pdf",
          "locus": "Nocturns, Trinity canon, sessional after Ode VI"
        },
        "spec_mel": "Brighter than fire",
        "sourceLabel": "Sessional Hymn"
      }
    },
    "gregory_rubric": {
      "rubric": "Then, the hymn of Gregory the Sinaite: (which is chanted every Sunday after the canon)",
      "stanzas": [
        {
          "text": "It is truly meet to glorify Thee, the Word of God, before Whom the cherubim tremble and quake, and Whom the hosts of heaven glorify. And with fear we glorify Christ, the Bestower of life, Who rose from the tomb on the third day.",
          "tier": 1,
          "src": {
            "file": "7-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 1"
          }
        },
        {
          "text": "With divine songs let us all in godly manner hymn the Father, the Son and the Spirit divine, the Might in three Hypostases, the one Kingship and Dominion.",
          "tier": 1,
          "src": {
            "file": "7-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 2 — \"in godly manner\" (no article) + \"the one KINGSHIP and Dominion\" (shared/all prior: \"Sovereignty\"); takes the 2-1/5-1 word-order side (\"the Might … the one …\") (§5 per-tone, NEW lexical variant)"
          }
        },
        {
          "text": "Whom all mortals hymn and the hosts of heaven glorify, the essential Unity in three Hypostases, Who is worshipped with faith by all.",
          "tier": 1,
          "src": {
            "file": "7-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 3"
          }
        },
        {
          "text": "We magnify Thee, the Godhead, the Lord of the cherubim, the incomparable divine Origin of the seraphim, the indivisible Trinity in Unity.",
          "tier": 1,
          "src": {
            "file": "7-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 4"
          }
        },
        {
          "text": "I worship the beginningless God the Father, the Son Who is equally without beginning, and the Spirit. With hymns let us honor the one indivisible and unified Essence, the threefold Unity.",
          "tier": 1,
          "src": {
            "file": "7-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 5 — \"I worship the beginningless God the Father\" word order (shared: \"I worship God: the beginningless Father\") (§5 per-tone)"
          }
        },
        {
          "text": "Shine forth Thy dazzling lightning flashes upon me, O my God in three Hypostases, Thou Creator of all, and show me to be a splendid, luminous and immutable habitation of Thine unapproachable glory.",
          "tier": 1,
          "src": {
            "file": "7-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 6 — \"Thou Creator of all\" (shared: \"Creator of all\"); \"immutable\" matches shared (§5 per-tone)"
          }
        },
        {
          "text": "With fear let us glorify Christ the Bestower of life, Who became ineffably incarnate of the Virgin, for the cherubim tremble and quake before Him, and the angelic armies glorify Him.",
          "tier": 1,
          "src": {
            "file": "7-1.pdf",
            "locus": "Nocturns, hymn of Gregory the Sinaite, stanza 7 — \"Who became ineffably incarnate\" word order (shared: \"ineffably became incarnate\"); \"of the Virgin\" matches shared (§5 per-tone)"
          }
        }
      ],
      "provenance_note": "RULED (Bill, July 8 2026): the Gregory hymn is stored PER-TONE in every tone. 7-1 is a distinct byte-state — stanza 2 reads \"the one KINGSHIP and Dominion\" (a lexical variant no prior tone prints; all print \"Sovereignty\"), on the 2-1/5-1 word-order side; further divergences at stanzas 5, 6, 7. The shared table remains the 2-1 print."
    },
    "closing_rubric": "The rest of Nocturns, and the Dismissal."
  },
  "matins": {
    "god_is_lord_rubric": "At “God is The Lord ...,” the Resurrection Troparion, in Tone VII: [troparion printed \"(Twice)\"] Glory ..., the Troparion from the Menaion, otherwise Glory ..., Both now ..., The Theotokion, in Tone VII, (or in the Tone of that from the Menaion):",
    "sessionals": [
      {
        "rubric": "After the 1st chanting of the Psalter (Kathisma II), the Sessional Hymns of the Resurrection, in Tone VII:",
        "items": [
          {
            "text": "When Life was laying in the tomb * and a seal laid upon the stone, * the soldiers guarded Christ as a sleeping King * and the angels glorified Him as immortal God; * while the women cried aloud: ** “The Lord is risen, granting the world great mercy.”",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Sunday Matins, Kathisma II, sessional 1"
            },
            "label": "plain"
          },
          {
            "text": "By Thy burial for three days Thou didst despoil death, * and by Thy life- bearing arising Thou didst raise corrupted mankind, O Christ Lord, ** as the Lover of mankind. Glory be to Thee!",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
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
              "file": "7-1.pdf",
              "locus": "Sunday Matins, Kathisma II, sessional verse"
            }
          }
        ],
        "closer": {
          "text": "O Virgin Theotokos * unceasingly entreat Christ our God, * who wast crucified for us * and arose again destroying the dominion of death, ** that He save our souls.",
          "tier": 2,
          "src": {
            "file": "7-1.pdf",
            "locus": "Sunday Matins, Kathisma II, Glory/Both-now closer"
          },
          "type": "theotokion"
        }
      },
      {
        "rubric": "After the 2nd chanting of the Psalter (Kathisma III), the Sessional Hymns of the Resurrection, in Tone VII:",
        "items": [
          {
            "text": "While the grave was sealed, O Christ God, * Thou, the Life, didst shine forth from the tomb; * and while the doors were shut, Thou, the Resurrection of all, * didst appear unto Thy disciples, and through them renewed a right Spirit within us, ** according to Thy great mercy.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Sunday Matins, Kathisma III, sessional 1"
            },
            "label": "plain"
          },
          {
            "text": "Bringing sweet spices with their tears, * the women ran to the tomb, * and while the soldiers guarded Thee, the King of all, * they spake one to another: * “Who will roll away the stone for us? * The angel of great Counsel hath risen, trampling down death.” ** O All-powerful Lord, glory be to Thee!",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
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
              "file": "7-1.pdf",
              "locus": "Sunday Matins, Kathisma III, sessional verse"
            }
          }
        ],
        "closer": {
          "text": "Rejoice Virgin Theotokos, full of grace, * haven and protection of the race of mankind, * for from Thee the Redeemer of the world hath taken flesh, * for thou alone art a Mother and Virgin, * ever blessed and exceedingly glorified; * intercede with Christ God ** to grant peace unto all the world.",
          "tier": 2,
          "src": {
            "file": "7-1.pdf",
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
      "text": "O Christ God, * who took upon Thyself our form * and endured the Cross in the body, * save me by Thy Resurrection, ** as Thou alone lovest mankind.",
      "tier": 2,
      "src": {
        "file": "7-1.pdf",
        "locus": "Sunday Matins, after the Evlogitaria"
      },
      "sourceLabel": "The Sessional Hymn"
    },
    "anabathmoi": [
      {
        "troparia": [
          {
            "text": "Having turned back the captivity of Zion from error, * quicken me also O Savior, ** and deliver me from slavery to the passions.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 1, troparion 1"
            }
          },
          {
            "text": "He who soweth tribulations in the south with tears of fasting, * will reap with joy the sheaves of nourishment ** of eternal life.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 1, troparion 2"
            }
          }
        ],
        "gloria": {
          "text": "In the Holy Spirit is the source of divine treasures, * from Him cometh wisdom, intelligence, and fear; ** and to Him belongeth praise, glory, honor and worship.",
          "tier": 2,
          "src": {
            "file": "7-1.pdf",
            "locus": "Sunday Matins, Anabathmoi antiphon 1, Glory/Both-now"
          }
        }
      },
      {
        "troparia": [
          {
            "text": "Unless the Lord buildeth the house of the soul, * in vain do we labor; ** for without Him no deed or word can be perfected.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 2, troparion 1"
            }
          },
          {
            "text": "Of the fruit of the womb the saints, * moved by the Spirit, ** sprout forth the Father’s teachings of filial adoption.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 2, troparion 2"
            }
          }
        ],
        "gloria": {
          "text": "By the Holy Spirit all things have their being; * in the presence of all He is God, * the Sovereign of the universe, * Light unapproachable, ** Life of all.",
          "tier": 2,
          "src": {
            "file": "7-1.pdf",
            "locus": "Sunday Matins, Anabathmoi antiphon 2, Glory/Both-now"
          }
        }
      },
      {
        "troparia": [
          {
            "text": "Those who fear the Lord and find the ways of life, * now and always are blessed ** with immortal glory.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 3, troparion 1"
            }
          },
          {
            "text": "As thou beholdest thine offspring like shoots around thy table, * rejoice, and be glad, bringing them to Christ ** the Chief Shepherd of all.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Sunday Matins, Anabathmoi antiphon 3, troparion 2"
            }
          }
        ],
        "gloria": {
          "text": "In the Holy Spirit there be an abundance of grace, * riches of glory and a great depth of judgments; * for He is to be served * as identical in glory and honor ** with the Father and the Son.",
          "tier": 2,
          "src": {
            "file": "7-1.pdf",
            "locus": "Sunday Matins, Anabathmoi antiphon 3, Glory/Both-now"
          }
        }
      }
    ],
    "prokeimenon": {
      "tone": 7,
      "text": {
        "text": "Arise, O Lord my God, let Thy hand be lifted high; * forget not Thy paupers to the end.",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Sunday Matins prokeimenon"
        }
      },
      "verse": {
        "text": "I will confess Thee, O Lord, with my whole heart; I will tell of all Thy wonders.",
        "tier": 1,
        "src": {
          "file": "7-1.pdf",
          "locus": "Sunday Matins prokeimenon verse"
        }
      }
    },
    "canon": {
      "title": "Resurrection Canons Tone VII",
      "heading_rubric": "After which: “O God, save Thy people ...,” Then the Canons: Resurrection Canons Tone VII.",
      "odes": {
        "1": {
          "irmos": {
            "text": "At thy command O Lord, * the nature of the waters that beforehand flowed freely was transformed * and became like the earth; * whereby Israel having traversed them dryshod * chanted unto Thee a hymn of victory.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Sunday Matins canon, Ode 1 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "The tyranny of death was judged through a tree, O Lord, when Thou wast condemned to an unjust death; and so the prince of darkness having no power over Thee was rightfully cast out.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, resurrection troparion 1"
                }
              },
              {
                "text": "Hades drew nigh to Thee and in vain strove to crush Thy body with its teeth, breaking its jaws upon Thee; wherefore, O Savior, putting aside the pangs of death, Thou didst arise on the third day.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "The sorrows of the foremother Eve have been done away with, for having escaped those sorrows, thou hast given birth without wedlock; and so knowing thee to be truly the Theotokos we all glorify thee.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
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
                "text": "From His pierced side on the Cross the Savior hath poured forth two life- bearing fountains from Himself unto us. Let us sing unto Him, for He hath been glorified.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, cross_resurrection troparion 1"
                }
              },
              {
                "text": "By dwelling in a tomb and arising on the third day Christ hath granted mortals a pledge of incorruption. Let us hymn Him, for He hath been glorified.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Alone thou wast revealed a Virgin even after child-birth; for thou hast given birth to the Creator of the world in the flesh. Wherefore we all cry to thee, “Rejoice!”",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
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
                "text": "Thou who hast brought forth the depths of divine compassion, O Virgin, illumine my soul with thine effulgent radiance, that I may worthily hymn the depths of thy wonders.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, theotokos troparion 1"
                }
              },
              {
                "text": "Seeing that we have been wounded by the arrow of sin, the Word, our Benefactor, hath taken pity on us. Wherefore the most divine One, ineffably united Himself to flesh from thee, O all-pure one.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, theotokos troparion 2"
                }
              },
              {
                "text": "The corrupt and mortal nature of mankind hath become subject to death, O Sovereign Lady. But having conceived Life, O most pure one, thou hast led it back from corruption to life.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 1, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "3": {
          "irmos": {
            "text": "O Lord and Savior, * Who in the beginning established the heavens * by Thine all-powerful Word, * and by the divine and all-accomplishing Spirit * hath granted them all their strength, * do Thou establish me on the unshakeable rock of Thy confession.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Sunday Matins canon, Ode 3 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "Ascending the Tree, O compassionate Savior, and willingly suffering pangs for our sake, Thou didst endure Thy wounds, O cause of peace and through them bring the faithful to salvation, O merciful One, whereby we all have been reconciled to Thy Begetter.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, resurrection troparion 1"
                }
              },
              {
                "text": "My soul having been wounded by the bite of the serpent, hath been cleansed of its wounds by Thee O Christ, Who hath revealed Thy light to me, who of old lay in darkness and corruption; for through the Cross Thou didst descend into Hades and hast raised me up together with Thyself.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "By the supplications of Thy Mother who knew not a man, bestow peace upon the world, O Savior; and grant victory over their adversaries to all Orthodox Christians, deeming them who glorify Thee, worthy of Thine ineffable glory.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
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
                "text": "Thou didst endure sufferings on the Cross and thus opened paradise to the thief, as Benefactor and God; establish my mind to do Thy will, O only Lover of mankind.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Thou didst arise from the tomb on the third day making life dawn forth upon all the world, as the giver of life and as God; do Thou establish my mind to do Thy will, O only Lover of mankind.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "O Virgin-mother Mary, having conceived God without seed and delivered Eve from the curse, entreat God who became incarnate from Thee, to save thy flock.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
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
                "text": "The serpent crawling out of Eden hath enticed me with the desire to be Godlike and hurled me down to the earth, but He who is by nature compassionate and merciful, hath taken pity upon me, and having dwelt in thy womb, became like me O Virgin-Mother, making me divine.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, theotokos troparion 1"
                }
              },
              {
                "text": "Blessed is the Fruit of thy womb, O Virgin Theotokos, the joy of all; for thou hast brought forth unto all the world the Wellspring of joy and gladness, Who scattereth the sorrow of sin, O Bride of God.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, theotokos troparion 2"
                }
              },
              {
                "text": "O Virgin Birthgiver of God, thou hast given birth to Peace for our sake, calming the ancient enmity between mankind and God his Father, and through faith granting us to know grace.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 3, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "4": {
          "irmos": {
            "text": "Having never left the bosom of the Father, * Thou didst descend to earth O Christ God, * I have heard of the mystery of Thy dispensation, * and I have glorified Thee, * O only Lover of mankind.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Sunday Matins canon, Ode 4 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "The innocent Master, incarnate of the Virgin, having delivered His own back to the scourges of a fallen slave, and enduring maltreatment, hath thereby done away with the charges laid against me.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, resurrection troparion 1"
                }
              },
              {
                "text": "Standing before the judgment seat of lawless judges, He who as God fashioned mankind and justly judgeth the whole universe, is examined as a lawbreaker and struck by a hand of clay.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "As truly the Mother of God, implore thy Creator and Son to direct me, O all-immaculate one, to the saving haven of His glorious will.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
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
                "text": "Not knowing sin, and becoming what Thou wast not, O Lord, by assuming the form of what was another’s, Thou hast saved the world, for by luring the tyrant (to slay Thee) Thou hast thereby slain him.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Thou wast hung upon the Cross, O Lord, and, having done away with the sin of our forefather Adam, Thou hast filled our foremother Eve with joy; for Thou art come to save all of Thine anointed ones.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Born from a virgin, Thou didst suffer death, but granted life to Adam, who by His own will hath been led astray, for death trembled at thy strength, seeing Thee saving those who had suffered corruption.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
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
                "text": "Thou hast appeared before God to be above all creation, wholly chosen and fair, by the splendor of the light that doth pour forth from thee, wherefore we beseech thee to enlighten those who sing thy praises.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, theotokos troparion 1"
                }
              },
              {
                "text": "From thy pure blood, O pure Virgin Mother, thou hast given birth to God in the flesh, Who hath redeemed us from our many sins, wherefore with love we glorify thee, hymning thy praises.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, theotokos troparion 2"
                }
              },
              {
                "text": "Rational nature, now initiated into the ineffable mystery of thy child-bearing, ministers as priest to the One who dawned from thee, O all-praised one.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 4, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "5": {
          "irmos": {
            "text": "Night is bereft of light * for those without faith, O Christ, * but for the faithful there is enlightenment * in the sweetness of Thy words; * wherefore, I rise early unto Thee * and hymn Thy divinity.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Sunday Matins canon, Ode 5 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "Thou art sold on behalf of Thy slaves, O Christ, and endurest blows, O Cause of freedom for those who sing to Thee. I rise to Thee at dawn and sing the praises of Thy divinity.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, resurrection troparion 1"
                }
              },
              {
                "text": "By Thy divine power, O Christ, through the infirmity of the flesh Thou hast overpowered the strong one and through Thy Resurrection declared me a victor over death, O Savior.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "In a manner befitting God, O all-hymned Mother, thou hast given birth to God who become incarnate from thee, since thou hast not known union in wedlock, the conception was by the Holy Spirit.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
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
                "text": "When Thou wast lifted upon Calvary, and numbered with the malefactors, the lights of the firmament hid themselves, the earth trembled, and the splendor of the temple was rent in twain, thereby revealing the apostasy of the Jews.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, cross_resurrection troparion 1"
                }
              },
              {
                "text": "With hymns we glorify Thee Who hath destroyed the entire dominion of the tyrant through the incomprehensible strength of Thy divinity and thus raised the dead by Thy Resurrection.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "O all-praised Theotokos, Mother of the King and God, by thine intercessions send down the pardon offences, to those who with faith and love ever glorify thee in hymns.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
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
                "text": "When Jacob saw the ladder reaching up to the heavens he fathomed an image of thy virginity; for through thee, O all-pure Sovereign Lady, God hath been united with mankind.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, theotokos troparion 1"
                }
              },
              {
                "text": "Having found eternal redemption through thee, O Virgin, we cry unto thee with fervor, “Rejoice, O Bride of God!” And rejoicing in thy light we praise thee in song, O all-hymned one.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, theotokos troparion 2"
                }
              },
              {
                "text": "The Bridegroom found thee, O Virgin, as an only lily among the thorns, effulgent with the brightness of purity and the light of virginity, O all-immaculate one, wherefore He hath made thee His Bride.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 5, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "6": {
          "irmos": {
            "text": "Sailing in the tempest of the cares of life, * together with the ship I have been submerged by sins, * and cast to the soul-corrupting beast, * wherefore like Jonah I cry to Thee, O Christ: * Lead me up from the deadly abyss.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Sunday Matins canon, Ode 6 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "The souls of the righteous, who were held in bondage and forsaken in Hades, remembered Thee and prayed for salvation from Thee, which Thou didst grant unto them through Thy Cross, O Christ, when in Thy compassion Thou didst descend into the nether regions of the earth.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, resurrection troparion 1"
                }
              },
              {
                "text": "The choir of apostles despaired of ever gazing again upon Thy living temple not made with hands, which had been destroyed by the Passion, but praying beyond hope they were granted to proclaim everywhere that Thou art risen.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Who can explain the manner of thine ineffable child-bearing for our sake, O most immaculate Virgin, Bride of God? For God the Word, who is uncircumscribable, uniting with thee, became flesh from thee.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
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
                "text": "Willingly lifted up upon the Cross, O Savior, Thou didst take prisoner the dominion of the enemy. For upon it, O loving Lord, Thou hast nailed the record of our sins.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Having risen from the dead with authority, O Savior, Thou hast raised up together with Thyself the race of mankind, granting us life and incorruption, O Lover of mankind.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "O Theotokos, cease not to entreat our God, to whom thou hast ineffably given birth, that those who hymn thee, O pure ever-Virgin, may be delivered from all dangers.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
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
                "text": "Prototypes in the law and the sayings of the prophets clearly foretold that thou, O most pure Virgin, would give birth to the Benefactor of all creation, Who hath in many and varied ways bestowed wondrous benefits upon those who with faith hymn thee.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, theotokos troparion 1"
                }
              },
              {
                "text": "Adam, the first-formed, was of old exiled from the delights of paradise by the wiles of the man-slayer, but thou, O Virgin who knew not wedlock, hast led him back again, by giving birth to Him who hath delivered us from transgression.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, theotokos troparion 2"
                }
              },
              {
                "text": "He who by His divine will and creative power hath brought the universe into being from nothing hath come forth from thy womb, O most pure Virgin, shining with the effulgence of divine lightning upon all those in the shadow of death.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 6, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "7": {
          "irmos": {
            "text": "Of old the Children were shown to be * bedewed in the fiery furnace, * chanting and praising the one God saying, * “supremely exalted and exceedingly glorified is the God of our fathers”.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Sunday Matins canon, Ode 7 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "Adam having by his own will committed disobedience was slain by a tree, but by Christ’s obedience he was renewed. Because for my sake the most glorious Son of God hath been crucified.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, resurrection troparion 1"
                }
              },
              {
                "text": "When Thou, O Christ, didst arise from the tomb, all creation sang Thy praises; for Thou hast blossomed forth with life; the resurrection of the dead unto those in Hades, and the most glorious light unto those lying in darkness.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Rejoice!, O daughter of Adam, who hath fallen into corruption! Rejoice!, O only Bride of God! Rejoice!, for thou hast given birth to God the Word and through Him banished corruption! Entreat Him, O most pure Virgin that we all may be saved.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
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
                "text": "On the Tree of the Cross Thou hast blunted the sting of sin, and by the lance in Thy side Thou hast abolished the record of Adam’s transgressions; Blessed art Thou, O Lord, the God of our fathers.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Thou wast pierced in Thy side and with the sprinkling of Thy divine Blood Thou hast cleansed the earth which was polluted with the bloodshed of the folly of idolatry; Blessed art Thou, O Lord, the God of our fathers.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "O Birthgiver of God, thou hast dawned forth upon world the illumination that existed before the sun, Christ, Who hath delivered us from darkness and illumined with the knowledge of God, all who cry: “Blessed art thou, O Lord, the God of our fathers.”",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
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
                "text": "Thou O Virgin, doth possess like an adornment of many colors wrought in gold, love for thy Creator and Lord; the supremely exalted and exceedingly glorified God of our fathers.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, theotokos troparion 1"
                }
              },
              {
                "text": "When Isaiah of old received the coal and was cleansed, He saw in it the symbol of the birth of thine Offspring, O maiden, the supremely exalted and exceedingly glorified God of our fathers.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, theotokos troparion 2"
                }
              },
              {
                "text": "When the divine prophets of old saw the symbols of thy divine child-bearing they raised their voices in harmony O Virgin, praising thee and crying: “O supremely exalted and exceedingly glorified God of our fathers.”",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 7, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "The Troparia from the Menaion, then the appointed Katavasia."
        },
        "8": {
          "irmos": {
            "text": "Unconsumed by fire, the bush on Sinai spake unto Moses, * slow of speech and stammering, * and revealed God unto him; * and zeal for God showed forth the three children who chanted hymns * to be unvanquished by the fire. * O all ye His works, praise ye the Lord * and supremely exalt Him throughout all ages.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Sunday Matins canon, Ode 8 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "The most-pure spiritual Lamb, slaughtered for the sake of the world, brought to an end offerings made in accordance with the law, and as God Who alone is without transgression, purified the world which ever crieth aloud, “All ye works of the Lord, praise ye the Lord, and supremely exalt Him throughout all ages.”",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, resurrection troparion 1"
                }
              },
              {
                "text": "The Creator assumed our flesh, which was not incorruptible before the Passion, but after His Passion and His rising was rendered inaccessible to corruption, and thus reneweth mortals as they cry, “All ye works of the Lord, praise ye the Lord, and supremely exalt Him throughout all ages.”",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Thy total purity and lack of blemish, O Virgin, hath purified the inhabited world from all filth and pollution, and thou hast become, O most pure one, the means by which we have been reconciled with God. Wherefore, O Virgin, we bless and supremely exalt thee throughout all ages.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
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
                "text": "Unto Him Who hath willingly endured the Passion and of His own will was nailed to a Cross, thereby abolishing the powers of Hades, hymn, O ye priests, and supremely exalt Him, O ye peoples, throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Unto Him Who hath abolished the dominion of death and arisen from the tomb in glory, saving mankind, hymn, O ye priests, and supremely exalt Him, O ye peoples, throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "Unto the Word, Who is alone compassionate and pre-eternal, and Who became incarnate in the latter times from the Virgin, abolishing the ancient curse, hymn, O ye priests, and supremely exalt Him, O ye peoples, throughout all ages.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
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
                "text": "By the splendor of thy child-bearing, O Birthgiver of God, thou hast wondrously enlightened all the inhabited world. For in thine arms thou didst carry the true God, Who hath rendered radiant the faithful who ever cry: “All ye works of the Lord, praise ye the Lord, and supremely exalt Him throughout all ages.”",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, theotokos troparion 1"
                }
              },
              {
                "text": "O pure Virgin, we devoutly sing the praises of thy womb, which ineffably contained our God in the flesh, Who hath bestowed the illumination of the knowledge of God upon all the faithful who ever cry: “All ye works of the Lord, praise ye the Lord, and supremely exalt Him throughout all ages.”",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, theotokos troparion 2"
                }
              },
              {
                "text": "With the brilliance of thy light, O pure Theotokos, thou who hast borne the light, rendered resplendent those who sing thy praises; for thou hast appeared as a tabernacle of light, enlightening those who ever cry: “All ye works of the Lord, praise ye the Lord, and supremely exalt Him throughout all ages.”",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 8, theotokos troparion 3"
                }
              }
            ]
          },
          "menaion_rubric": "After the Troparia from the Menaion for ODE VIII, we chant:"
        },
        "9": {
          "irmos": {
            "text": "Conceiving without knowing corruption, * and lending thy flesh to the Word, * O Mother unwedded and Virgin Theotokos, * thou art the vessel of the uncircumscribable One, * and dwelling place of thy Creator, * thee do we magnify.",
            "tier": 2,
            "src": {
              "file": "7-1.pdf",
              "locus": "Sunday Matins canon, Ode 9 irmos"
            }
          },
          "resurrection": {
            "refrain": "Glory to Thy holy Resurrection O Lord.",
            "troparia": [
              {
                "text": "Cease your babblings, all ye who with errant minds put forward the notion that the Godhead endured the Passion, for the Lord of glory, crucified in the flesh, could not be crucified in His divine nature, wherefore we magnify Him as one Hypostasis in two natures.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, resurrection troparion 1"
                }
              },
              {
                "text": "All ye that do not believe the Resurrection of the flesh hasten now to the grave of Christ, and there learn that the flesh of the Giver of life was slain and arose again, in confirmation of the final resurrection, in which we have placed our hope.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "As we honor not a Trinity of deities but of Hypostases, not a Unity of persons but of the Godhead, we cut off those who divide It, and confound those who dare to confuse the true understanding of the Trinity, Whom we magnify.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
                "locus": "Sunday Matins canon, Ode 9, resurrection closer"
              },
              "type": "trinitarion",
              "refrain": "We bless the Lord; Father, Son, and Holy Spirit",
              "sourceLabel": "Trinitarian"
            }
          },
          "cross_resurrection": {
            "refrain": "Glory to Thy precious Cross and Resurrection O Lord.",
            "troparia": [
              {
                "text": "Light from light, the radiance of the Father’s glory, illumining agelessly, Christ hath shone forth for the life of mortal mankind lying in gloom, dispelling the persecuting darkness, wherefore we the faithful unceasingly magnify Him.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, cross_resurrection troparion 1"
                }
              },
              {
                "text": "Let those who contemplate the sufferings of Christ in the flesh, and the strength of the Godhead in Christ, as accomplished in one compound nature, be confounded; for Christ died as a man, but rose again as the Creator of the universe.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, cross_resurrection troparion 2"
                }
              }
            ],
            "closer": {
              "text": "“Besides Thee I know no other God,” The holy Church crieth out to Thee O Word, “Who chose me as Thine own Bride from among the unbelieving nations.” by the prayers of her who gave birth to Thee grant salvation to the faithful, for thou art compassionate and lovest mankind.",
              "tier": 1,
              "src": {
                "file": "7-1.pdf",
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
                "text": "Ever-virgin maiden, for our sake thou wast revealed to be the cause of eternal joy and gladness, having carried in thy womb the Redeemer, who delivereth those who in truth and by the inspiration of the divine Spirit honor Him as God.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, theotokos troparion 1"
                }
              },
              {
                "text": "David, Thy forefather, in a psalm names Thee the ark of divine holiness, O most pure one, who didst contain in a manner surpassing nature, God seated in the bosom of the Father, Whom without ceasing we the faithful magnify.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Sunday Matins canon, Ode 9, theotokos troparion 2"
                }
              },
              {
                "text": "Thou art truly higher than all creation, O maiden; since for our sake thou hast given birth in the flesh to the Creator of all things; therefore, as Mother of the only Master, thou hast majestically brought about victory for us against all adversaries.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
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
          "text": "Christ is risen from the dead, loosing the bonds of death; * O earth! proclaim the good tidings of great joy; ** and ye heavens praise the glory of God.",
          "tier": 2,
          "src": {
            "file": "7-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 1"
          }
        },
        {
          "text": "Having seen the Resurrection of Christ, * let us worship the holy Lord Jesus, ** the only sinless One.",
          "tier": 2,
          "src": {
            "file": "7-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 2"
          }
        },
        {
          "text": "We cease not to worship the Holy Resurrection of Christ, * for He hath saved us from our iniquities, ** Holy is the Lord Jesus who hath shown us the Resurrection.",
          "tier": 2,
          "src": {
            "file": "7-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 3"
          }
        },
        {
          "text": "What shall we render unto the Lord for all that He hath rendered unto us? * For our sake God dwelt among us; * for our corrupted nature the Word became flesh and dwelt within us; * unto the ungrateful He is the Benefactor; * unto prisoners He is the Liberator; * unto those in darkness He is the Sun of justice; * the path unto the Cross; * the Light unto Hades; Life unto death; * Resurrection for the fallen: * to Him we cry aloud: ** “Our God, glory be to Thee!”",
          "tier": 2,
          "src": {
            "file": "7-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 4"
          }
        },
        {
          "text": "By Thy mighty power, O Lord, * Thou hast destroyed the gates of Hades and abolished the dominion of death; * raising with Thyself the dead who slept therein from eternity in darkness, * by Thy divine and glorious Resurrection, ** as King of the universe and as God All-powerful.",
          "tier": 2,
          "src": {
            "file": "7-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 5"
          },
          "provenance_note": "sub-group \"Other Stichera of Anatolius\""
        },
        {
          "text": "Come, let us rejoice in the Lord * and be glad in His Resurrection; * for He hath raised the dead with Himself * from the indestructible bonds of Hades, ** and as God hath bestowed upon the world eternal life and great mercy.",
          "tier": 2,
          "src": {
            "file": "7-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 6"
          },
          "provenance_note": "sub-group \"Other Stichera of Anatolius\""
        },
        {
          "text": "A radiant angel sat on the stone of the grave that held Life, * and announced the good tidings to the myrrh-bearing women saying: * “The Lord is risen, as He foretold to you; * announce to His disciples that He goeth before you into Galilee; ** while to the world He granteth eternal life and great mercy.”",
          "tier": 2,
          "src": {
            "file": "7-1.pdf",
            "locus": "Sunday Matins, Praises sticheron 7"
          },
          "provenance_note": "sub-group \"Other Stichera of Anatolius\""
        },
        {
          "text": "O ye exceedingly wicked Jews, why did you reject the Cornerstone? * This is the stone which God hath placed in Zion, * God Who in the wilderness made water spring forth from the rock, * and for us poured forth immortality from His side; * this is the stone which was hewn from the virginal mountain, by the will of the Son of man, * who cometh again on the clouds of heaven * before the Ancient of days, as Daniel hath said, ** and His kingdom is everlasting.",
          "tier": 2,
          "src": {
            "file": "7-1.pdf",
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
        "text": "Thou art most blessed, O Virgin Theotokos, * for through Him who took flesh from thee, Hades hath been captured, * Adam recalled, the curse slain, Eve set free, * death put to death, and we have been given life. * Therefore in praise we cry: ** Blessed art Thou, O Christ our God, who hast been thus well-pleased, glory be to Thee.",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Sunday Matins, Praises Both-now Theotokion"
        }
      }
    },
    "doxology_troparion": {
      "text": "Today is salvation come unto the world; * let us sing praises to Him that arose from the tomb, * and is the Author of our life. * For, having destroyed death by death, ** He hath given us the victory and great mercy.",
      "tier": 2,
      "src": {
        "file": "7-1.pdf",
        "locus": "Sunday Matins, troparion after the Great Doxology"
      }
    }
  },
  "liturgy": {
    "beatitudes": {
      "rubric": "Typika and Beatitudes.",
      "troparia": [
        {
          "text": "The fruit which slew me was beautiful and good to eat; but Christ is the Tree of life, and eating of Him I do not die, but cry out with the thief: Remember me, O Lord, in Thy kingdom!",
          "tier": 1,
          "src": {
            "file": "7-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 1"
          }
        },
        {
          "text": "O compassionate One, Who wast lifted up upon the Cross, Thou hast erased the record of Adam’s ancient sin, and hast saved the whole human race from deception. Wherefore, we hymn Thee, O Lord and Benefactor.",
          "tier": 1,
          "src": {
            "file": "7-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 2"
          }
        },
        {
          "text": "Thou didst nail our sins to Cross, O compassionate Christ, and by Thy death Thou didst slay death, O Thou who didst raise up the dead from among the dead. Wherefore, we worship Thy holy Resurrection.",
          "tier": 1,
          "src": {
            "file": "7-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 3"
          }
        },
        {
          "text": "The serpent once poured its venom into the ears of Eve; but on the Tree of the Cross, Christ poured forth the sweetness of life upon the world. Wherefore, we cry out: Remember us, O Lord, in Thy kingdom!",
          "tier": 1,
          "src": {
            "file": "7-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 4"
          }
        },
        {
          "text": "Thou wast laid in the tomb as one dead, O Christ, Thou Life of all; and Thou didst break down the gates of Hades; and having risen again in glory on the third day as One almighty, Thou hast illumined all. Glory to Thine arising!",
          "tier": 1,
          "src": {
            "file": "7-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 5"
          }
        },
        {
          "text": "Having risen from the dead on the third day, the Lord bestowed His peace upon His disciples; and having blessed them, He sent them forth saying: Lead all into My kingdom!",
          "tier": 1,
          "src": {
            "file": "7-1.pdf",
            "locus": "Sunday Liturgy, Beatitude troparion 6"
          }
        }
      ],
      "gloria": {
        "text": "The Father is light; the Son and Word is light; and the Holy Spirit is light. Yet the Three are one Light, for they are one God in three Hypostases, One in nature and origin, indivisible, uncommingled and pre-eternal.",
        "tier": 1,
        "src": {
          "file": "7-1.pdf",
          "locus": "Sunday Liturgy, Beatitudes Gloria (Triadicon — final pre-Theotokion item)"
        }
      },
      "theotokion": {
        "text": "For our sake thou didst give birth in the flesh to the Son and Word of the Father, as thou hast declared, O Theotokos. Wherefore, O Virgin Mother, we who are deified through thee cry out to thee: Rejoice, O hope of Christians!",
        "tier": 1,
        "src": {
          "file": "7-1.pdf",
          "locus": "Sunday Liturgy, Beatitudes Theotokion"
        },
        "sourceLabel": "Theotokion"
      }
    },
    "prokeimenon": {
      "tone": 7,
      "text": {
        "text": "The Lord will give strength unto His people; * the Lord will bless His people with peace.",
        "tier": 2,
        "src": {
          "file": "7-1.pdf",
          "locus": "Sunday Liturgy prokeimenon"
        }
      },
      "verse": {
        "text": "Bring unto the Lord, ye sons of God, bring unto the Lord the sons of rams.",
        "tier": 1,
        "src": {
          "file": "7-1.pdf",
          "locus": "Sunday Liturgy prokeimenon verse"
        }
      }
    },
    "alleluia": {
      "tone": 7,
      "verses": [
        {
          "text": "It is good to give praise unto the Lord, and to chant unto Thy name, O Most High.",
          "tier": 1,
          "src": {
            "file": "7-1.pdf",
            "locus": "Sunday Liturgy Alleluia"
          }
        },
        {
          "text": "To proclaim in the morning Thy mercy, and Thy truth by night.",
          "tier": 1,
          "src": {
            "file": "7-1.pdf",
            "locus": "Sunday Liturgy Alleluia verse 2"
          }
        }
      ]
    }
  },
  "vespers_weekday": {
    "sun": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of repentance, in Tone VII: Spec. Mel.: “Today Judas keepeth vigil ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "Lift up thine eyes, O my soul, and behold the dispensation and tender compassion of God: how having bowed down the heavens, He descended to the earth, that He might raise thee up from the wretched state of thy passions, and set thee upon the rock of faith. O the wonder of this awesome miracle! Glory to Thine abasement, O Lover of mankind!",
            "tier": 1,
            "src": {
              "file": "7-2.pdf",
              "locus": "Sunday-evening Vespers, LIC Octoechos sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 3
              }
            ],
            "label": "plain",
            "spec_mel": "Today Judas keepeth vigil"
          },
          {
            "text": "Behold thine exceedingly iniquitous works, O my soul, and marvel that the earth still beareth thee, that it hath not been driven asunder, that the wild beasts do not devour thee, that the ever-shining Sun hath not ceased to shine upon thee. Arise, repent, and cry out to the Lord: I have sinned against Thee, I have sinned! Have mercy on me!",
            "tier": 1,
            "src": {
              "file": "7-2.pdf",
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
            "spec_mel": "Today Judas keepeth vigil"
          },
          {
            "text": "Trusting in thee, O omnipotent Lord, we beseech Thee, that we be delivered from all tribulations, sufferings and turmoil; that we may pass our life in peace; and, having lived in purity, may find Thee, our Master, merciful on the day of judgment.",
            "tier": 1,
            "src": {
              "file": "7-2.pdf",
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
            "spec_mel": "Today Judas keepeth vigil"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "7-2.pdf",
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
              "file": "7-2.pdf",
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
              "file": "7-2.pdf",
              "locus": "Sunday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the holy incorporeal angels, in the same melody:",
        "menaion_fallback": [
          {
            "text": "Illumined by the rays of the Trinity, O archangels, illumine those who hymn you with faith.",
            "tier": 1,
            "src": {
              "file": "7-2.pdf",
              "locus": "Sunday-evening Vespers, Menaion-fallback sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "O ye who are secondary luminaries through communion, who are shown to be perfect lights, we pray: Intercede for us before the primal Radiance.",
            "tier": 1,
            "src": {
              "file": "7-2.pdf",
              "locus": "Sunday-evening Vespers, Menaion-fallback sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Within the shelter of your wings preserve all the faithful from the spirits of wickedness, dispelling their darkness.",
            "tier": 1,
            "src": {
              "file": "7-2.pdf",
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
              "file": "7-2.pdf",
              "locus": "Sunday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "7-2.pdf",
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
              "file": "7-2.pdf",
              "locus": "Sunday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "With the angels let us all cry out to the Theotokos in hymns, for she gave birth to the Savior of the world, and remained a virgin even after giving birth, and by her birthgiving hath delivered the world from delusion. She who fed the Liberator of our souls hath given us inexhaustible sustenance.",
        "tier": 1,
        "src": {
          "file": "7-2.pdf",
          "locus": "Sunday-evening Vespers, LIC Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "prokeimenon": {
        "ref": "shared.daily_vespers_prokeimena.sun",
        "rubric": "Then, “O Joyous Light ...,” the Prokeimenon, in Tone VIII:"
      },
      "aposticha": {
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of repentance, in Tone VII:",
        "items": [
          {
            "text": "I have come, O Compassionate One, like the prodigal son. As one of Thy hirelings do Thou accept me who fall down before Thee, O God, and have mercy on me, O Thou Who lovest mankind.",
            "tier": 1,
            "src": {
              "file": "7-2.pdf",
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
            "text": "Like the one who fell among thieves and was wounded, so have I fallen through many sins, and my soul hath been wounded. To whom shall I who am guilty flee? To Thee alone, the Physician of men’s souls. O God, pour forth upon me Thy great mercy.",
            "tier": 1,
            "src": {
              "file": "7-2.pdf",
              "locus": "Sunday-evening Vespers, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Glory to Thee, O Christ God, Thou boast of the apostles and joy of the martyrs, who preached the consubstantial Trinity!",
            "tier": 1,
            "src": {
              "file": "7-2.pdf",
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
        "text": "With the angel we cry out to thee, Rejoice! O Bride of God, * calling thee the bridal-chamber and portal, * the fiery throne and unquarried mountain, ** and bush unconsumed.",
        "tier": 2,
        "src": {
          "file": "7-2.pdf",
          "locus": "Sunday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our"
    },
    "mon": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of repentance, in Tone VII: Spec. Mel.: “Judas keepeth watch today ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "O most compassionate Master and God, by the judgments which Thou knowest grant that I may have the fear of Thee in my heart, that I may spurn the works of the evil one, love Thee with all my soul, and do Thy saving will; for Thou art our God, Who said: Ask, and ye shall receive.",
            "tier": 1,
            "src": {
              "file": "7-3.pdf",
              "locus": "Monday-evening Vespers, LIC Octoechos sticheron 1"
            },
            "label": "plain",
            "spec_mel": "Judas keepeth watch today"
          },
          {
            "text": "I have become a mockery for the demons and contemptible for men, lamentation for the righteous and weeping for the angels, polluting the air, the earth and the waters; for I have defiled my body and sullied my soul and mind with countless evil acts, and have become an enemy to God. Woe is me, O Lord! I have sinned, I have sinned against Thee! Forgive me!",
            "tier": 1,
            "src": {
              "file": "7-3.pdf",
              "locus": "Monday-evening Vespers, LIC Octoechos sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "Judas keepeth watch today"
          },
          {
            "text": "I pray Thee: Be Thou patient with me, who am devoid of fruits, O Master, and cut me not down like the barren tree with the axe of death, dispatching me to the fire; but be Thou entreated to make me fruitful, giving me time for repentance, in that Thou lovest mankind, that I may wash away my many sins, O Christ my Savior.",
            "tier": 1,
            "src": {
              "file": "7-3.pdf",
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
            "spec_mel": "Judas keepeth watch today"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "7-3.pdf",
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
              "file": "7-3.pdf",
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
              "file": "7-3.pdf",
              "locus": "Monday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the holy forerunner, in Tone VII:",
        "menaion_fallback": [
          {
            "text": "O Forerunner, who didst live a blameless life in the desert, restore thou my mind, which hath become barren through sins.",
            "tier": 1,
            "src": {
              "file": "7-3.pdf",
              "locus": "Monday-evening Vespers, Menaion-fallback sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "We glorify thee, O prophet, understanding thee to be the swallow heralding the divine spring to those in the world.",
            "tier": 1,
            "src": {
              "file": "7-3.pdf",
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
            "text": "O divine Forerunner, intercessor for my life, protector of my soul: Deliver me, thy servant, from the false accusation of man.",
            "tier": 1,
            "src": {
              "file": "7-3.pdf",
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
              "file": "7-3.pdf",
              "locus": "Monday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "7-3.pdf",
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
              "file": "7-3.pdf",
              "locus": "Monday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "O Lady, to the right tranquil haven of salvation guide me who am tempest- tossed amid the tumult of slothfulness.",
        "tier": 1,
        "src": {
          "file": "7-3.pdf",
          "locus": "Monday-evening Vespers, LIC Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "prokeimenon": {
        "ref": "shared.daily_vespers_prokeimena.mon",
        "rubric": "Then, “O Joyous Light ...,” the Prokeimenon, in Tone IV:"
      },
      "aposticha": {
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of repentance, in Tone VII:",
        "items": [
          {
            "text": "I have come, O Compassionate One, like the prodigal son. As one of Thy hirelings do Thou accept me who fall down before Thee, O God, and have mercy on me, O Lover of mankind.",
            "tier": 1,
            "src": {
              "file": "7-3.pdf",
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
            "text": "Like the one who fell among thieves and was wounded, so have I fallen through many sins, and my soul hath been wounded. To whom shall I who am guilty flee? If not to Thee alone, the Physician of our souls. O God, pour forth upon me Thy great mercy!",
            "tier": 1,
            "src": {
              "file": "7-3.pdf",
              "locus": "Monday-evening Vespers, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "O holy martyrs, ye who have fought the good fight and received crowns: Entreat the Lord, that He have mercy upon our souls.",
            "tier": 1,
            "src": {
              "file": "7-3.pdf",
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
        "text": "Rejoice, O Sovereign Lady, thou cloud of the noetic and ineffable Sun! * Rejoice, all-luminous lantern: Rejoice all-golden candle-stand. * Through thee, O most holy one, * hath Eve been delivered from the curse. * But as thou dost possess boldness before thy Son and God * Who is readily moved to compassion, * fail not to entreat Him by thy maternal supplication, ** O most pure one.",
        "tier": 2,
        "src": {
          "file": "7-3.pdf",
          "locus": "Monday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our"
    },
    "tue": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of the precious Cross, in Tone VII: Spec. Mel.: “No longer are we forbidden the tree of life ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "Of old, a tree drove me from paradise, but now a tree hath restored me to paradise when Thou wast crucified, O Christ.",
            "tier": 1,
            "src": {
              "file": "7-4.pdf",
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
            "spec_mel": "No longer are we forbidden the tree of life"
          },
          {
            "text": "O awesome wonder! How can the Creator, standing before a created being, be condemned and crucified for the salvation of mankind?",
            "tier": 1,
            "src": {
              "file": "7-4.pdf",
              "locus": "Tuesday-evening Vespers, LIC Octoechos sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "No longer are we forbidden the tree of life"
          },
          {
            "text": "O Cross of Christ, the amazement of the holy angels and the great wounding of the demons: Save thy servants!",
            "tier": 1,
            "src": {
              "file": "7-4.pdf",
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
            "spec_mel": "No longer are we forbidden the tree of life"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "7-4.pdf",
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
              "file": "7-4.pdf",
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
              "file": "7-4.pdf",
              "locus": "Tuesday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the most holy Theotokos, in Tone VII: Spec. Mel.: “Today Judas keepeth vigil ...”:",
        "menaion_fallback": [
          {
            "text": "Beholding her Lamb stretched out upon the Tree, the Virgin, the unblemished ewe-lamb, cried aloud: “Woe is me, O my most sweet Child! What is this strange and most glorious mystery? How hath the iniquitous assembly lifted Thee up upon a Cross, and given Thee gall to drink, Who fed me with manna?”",
            "tier": 1,
            "src": {
              "file": "7-4.pdf",
              "locus": "Tuesday-evening Vespers, Menaion-fallback sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "Today Judas keepeth vigil"
          },
          {
            "text": "When Thy Virgin Mother beheld Thee nailed by the Jews to the Cross on Golgotha, condemned by an unrighteous verdict, O my Christ, she cried out: “Woe is me, O my most beloved Son! What is this strange sight? How can the senseless children of the Jews nail Thee, the Lord of all, to the Cross?”",
            "tier": 1,
            "src": {
              "file": "7-4.pdf",
              "locus": "Tuesday-evening Vespers, Menaion-fallback sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "Today Judas keepeth vigil"
          },
          {
            "text": "O all-holy Lady, we have all come to know thee alone as her who was manifest as a virgin even after giving birth. And when thou beheldest Him to Whom thou hast given birth, with His hands willingly nailed to the Tree, thou didst cry out: “O Longsuffering One, Thou dost willingly die, delivering all who hymn Thee from death!”",
            "tier": 1,
            "src": {
              "file": "7-4.pdf",
              "locus": "Tuesday-evening Vespers, Menaion-fallback sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "Today Judas keepeth vigil"
          }
        ],
        "menaion_verses": [
          {
            "text": "For with the Lord there is mercy, and with Him there is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
            "tier": 2,
            "src": {
              "file": "7-4.pdf",
              "locus": "Tuesday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "7-4.pdf",
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
              "file": "7-4.pdf",
              "locus": "Tuesday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "O all-holy Virgin Lady, who hast given birth unto the Lord Who in His tender compassion was nailed to the Cross, pouring forth a stream of life upon the world: Entreat Him, that our souls may be saved; for thee alone do we the faithful have as a refuge, bulwark and aid. Wherefore, we flee to thy protection.",
        "tier": 1,
        "src": {
          "file": "7-4.pdf",
          "locus": "Tuesday-evening Vespers, LIC Glory/Both-now closer"
        },
        "homoglyph_log": [
          {
            "from": "U+041E О (Cyrillic)",
            "to": "O",
            "count": 1
          }
        ],
        "type": "stavrotheotokion",
        "sourceLabel": "Stavrotheotokion"
      },
      "prokeimenon": {
        "ref": "shared.daily_vespers_prokeimena.tue",
        "rubric": "Then, “O Joyous Light ...,” the Prokeimenon, in Tone I:"
      },
      "aposticha": {
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of the precious Cross, in Tone VII:",
        "items": [
          {
            "text": "No longer are we forbidden the Tree of life, for we have Thy Cross as our hope. O Lord, glory be to Thee!",
            "tier": 1,
            "src": {
              "file": "7-4.pdf",
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
            "text": "Suspended upon the Tree, O Immortal One, Thou didst break the snares of the devil. O Lord, glory be to Thee!",
            "tier": 1,
            "src": {
              "file": "7-4.pdf",
              "locus": "Tuesday-evening Vespers, aposticha item 2"
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
            "text": "Caring naught for all the things of earth, O holy martyrs, and having manfully preached Christ at the tribunal, ye received from Him rewards for your torments; but as ye have boldness, beseech Him, as the almighty God, that He save the souls of us who flee to you, we pray.",
            "tier": 1,
            "src": {
              "file": "7-4.pdf",
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
        "text": "Once thou didst behold thy son upon the Tree, * thy heart was pierced by a lance of sadness, ** O most-pure One.",
        "tier": 2,
        "src": {
          "file": "7-4.pdf",
          "locus": "Tuesday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "stavrotheotokion",
        "sourceLabel": "Stavrotheotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our"
    },
    "wed": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of the holy apostles, in Tone VII: Spec. Mel.: “No longer are we forbidden the tree of life ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "Having tilled the whole earth with the plough of the knowledge of God, O glorious apostles, ye caused a multitude of the faithful to spring forth.",
            "tier": 1,
            "src": {
              "file": "7-5.pdf",
              "locus": "Wednesday-evening Vespers, LIC Octoechos sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "No longer are we forbidden the tree of life"
          },
          {
            "text": "Set at naught the winter of my passions, O blessed apostles, and shine forth upon me the pure spring of peace.",
            "tier": 1,
            "src": {
              "file": "7-5.pdf",
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
            "spec_mel": "No longer are we forbidden the tree of life"
          },
          {
            "text": "As disciples of the Word ye brought the assemblies of the nations over from senselessness to the knowledge of God.",
            "tier": 1,
            "src": {
              "file": "7-5.pdf",
              "locus": "Wednesday-evening Vespers, LIC Octoechos sticheron 3"
            },
            "label": "plain",
            "spec_mel": "No longer are we forbidden the tree of life"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "7-5.pdf",
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
              "file": "7-5.pdf",
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
              "file": "7-5.pdf",
              "locus": "Wednesday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the holy hierarch Nicholas, the wonderworker, in Tone VII:",
        "menaion_fallback": [
          {
            "text": "As of old thou didst By thy prayers deliver the officers who were to be executed, O father Nicholas, so do thou now save us.",
            "tier": 1,
            "src": {
              "file": "7-5.pdf",
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
            "text": "O holy and most blessed hierarch Nicholas, deliver from griefs all who invoke and hymn thee with faith and love.",
            "tier": 1,
            "src": {
              "file": "7-5.pdf",
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
            "text": "Free thy servants from famine and pestilence, from earthquake and tribulations, and from all want, O most wise and holy hierarch Nicholas.",
            "tier": 1,
            "src": {
              "file": "7-5.pdf",
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
              "file": "7-5.pdf",
              "locus": "Wednesday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "7-5.pdf",
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
              "file": "7-5.pdf",
              "locus": "Wednesday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "Convey the entreaty of thy servants to thy Son, O most pure one, that He may save all whom He hath created.",
        "tier": 1,
        "src": {
          "file": "7-5.pdf",
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
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of the holy apostles, in Tone VII:",
        "items": [
          {
            "text": "O glorious apostles, pillars of the Church, preachers of the Truth, radiant beacons: With the fire of the Spirit ye consumed all delusion and illumined the race of mankind with faith. Wherefore, we beseech you: Entreat our Savior and God, that He grant peace to the world and save our souls.",
            "tier": 1,
            "src": {
              "file": "7-5.pdf",
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
            "text": "O apostles of Christ, husbandmen of the Savior, bearing the Cross upon your shoulders as a plough, and having cleared the earth made hard by the delusion of idolatry, ye sowed the word of faith. And ye are fittingly honored, O holy apostles of Christ.",
            "tier": 1,
            "src": {
              "file": "7-5.pdf",
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
            "text": "O all-praised martyrs, spiritual lambs, reason-endowed holocausts, acceptable sacrifices well-pleasing to God: the earth could not hide you, but heaven received you, and ye have become communicants with the angels. With them entreat our Savior and God, we pray you, that He grant peace to the world and save our souls.",
            "tier": 1,
            "src": {
              "file": "7-5.pdf",
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
        "text": "Let us hymn as the Mother of God the Word, her who alone was an all-pure virgin after giving birth, saying: Glory be to thee!",
        "tier": 1,
        "src": {
          "file": "7-5.pdf",
          "locus": "Wednesday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our"
    },
    "thu": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of the precious Cross, in Tone VII: Spec. Mel.: “No longer are we forbidden the tree of life ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "That Thou mightest make man a god, Thou didst become a man and wast crucified, O supremely good Christ. Glory be to Thy power!",
            "tier": 1,
            "src": {
              "file": "7-6.pdf",
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
            "spec_mel": "No longer are we forbidden the tree of life"
          },
          {
            "text": "When the assembly of the Jews condemned Thee to die on the Cross, O Jesus, the earth quaked and the sun hid its light.",
            "tier": 1,
            "src": {
              "file": "7-6.pdf",
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
            "spec_mel": "No longer are we forbidden the tree of life"
          },
          {
            "text": "The iniquitous assembly crowned Thee with thorns, O Immortal and holy King, Who cuttest off the thorns of delusion at the root.",
            "tier": 1,
            "src": {
              "file": "7-6.pdf",
              "locus": "Thursday-evening Vespers, LIC Octoechos sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "No longer are we forbidden the tree of life"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "7-6.pdf",
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
              "file": "7-6.pdf",
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
              "file": "7-6.pdf",
              "locus": "Thursday-evening Vespers, LIC ladder verse 3"
            }
          }
        ],
        "menaion_rubric": "Then the Stichera from the Menaion; or if there is no Menaion, these Stichera of the most holy Theotokos, in Tone VII: Spec. Mel.: “Today Judas keepeth vigil ...”:",
        "menaion_fallback": [
          {
            "text": "Beholding her Lamb stretched out upon the Tree, the Virgin, the unblemished ewe-lamb, cried aloud: “Woe is me, O my most sweet Child! What is this strange and most glorious mystery? How hath the iniquitous assembly lifted Thee up upon a Cross, and given Thee gall to drink, Who fed me with manna?”",
            "tier": 1,
            "src": {
              "file": "7-6.pdf",
              "locus": "Thursday-evening Vespers, Menaion-fallback sticheron 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "Today Judas keepeth vigil"
          },
          {
            "text": "When Thy Virgin Mother beheld Thee nailed by the Jews to the Cross on Golgotha, condemned by an unrighteous verdict, O my Christ, she cried out: “Woe is me, O my most beloved Son! What is this strange sight? How can the senseless children of the Jews nail Thee, the Lord of all, to the Cross?”",
            "tier": 1,
            "src": {
              "file": "7-6.pdf",
              "locus": "Thursday-evening Vespers, Menaion-fallback sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "plain",
            "spec_mel": "Today Judas keepeth vigil"
          },
          {
            "text": "O all-holy Lady, we have all come to know thee alone as the one who wast revealed to be a virgin after giving birth. And when thou didst behold Him to Whom thou hast given birth, with His hands willingly nailed to the Tree, thou didst cry out: “O Longsuffering One, Thou dost willingly die, delivering all who hymn Thee from death!”",
            "tier": 1,
            "src": {
              "file": "7-6.pdf",
              "locus": "Thursday-evening Vespers, Menaion-fallback sticheron 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "spec_mel": "Today Judas keepeth vigil"
          }
        ],
        "menaion_verses": [
          {
            "text": "For with the Lord there is mercy, and with Him there is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
            "tier": 2,
            "src": {
              "file": "7-6.pdf",
              "locus": "Thursday-evening Vespers, ladder tail verse 1"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "7-6.pdf",
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
              "file": "7-6.pdf",
              "locus": "Thursday-evening Vespers, ladder tail verse 3"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "O all-holy Virgin Lady, who hast given birth unto the Lord Who in His loving-kindness was nailed to the Cross, pouring forth a stream of life upon the world: Entreat Him, that our souls may be saved; for thee alone do we, the faithful have as a refuge, bulwark and aid. Wherefore, we flee to thy protection.",
        "tier": 1,
        "src": {
          "file": "7-6.pdf",
          "locus": "Thursday-evening Vespers, LIC Glory/Both-now closer"
        },
        "homoglyph_log": [
          {
            "from": "U+041E О (Cyrillic)",
            "to": "O",
            "count": 1
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
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of the precious Cross, in Tone VII:",
        "items": [
          {
            "text": "No longer are we forbidden the Tree of life, for we have Thy Cross as our hope. O Lord, glory be to Thee!",
            "tier": 1,
            "src": {
              "file": "7-6.pdf",
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
            "text": "Suspended upon the Tree, O Immortal One, Thou didst break the snares of the devil. O Lord, glory be to Thee!",
            "tier": 1,
            "src": {
              "file": "7-6.pdf",
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
            "text": "Glory be to Thee, O Christ God, Thou boast of the apostles and joy of the martyrs, who preached the consubstantial Trinity!",
            "tier": 1,
            "src": {
              "file": "7-6.pdf",
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
        "text": "When the all-immaculate one beheld Thee willingly nailed to the Tree, weeping, she hymned Thy dominion.",
        "tier": 1,
        "src": {
          "file": "7-6.pdf",
          "locus": "Thursday-evening Vespers, aposticha Glory/Both-now closer"
        },
        "type": "stavrotheotokion",
        "sourceLabel": "Stavrotheotokion"
      },
      "closing_rubric": "Then, “Now lettest Thou Thy servant depart ...,” Trisagion through Our"
    },
    "fri": {
      "rubric": "On “Lord, I have cried ...,” 3 Stichera of all the righteous, in Tone VII: Spec. Mel.: “No longer are we forbidden the tree of life ...”:",
      "lic": {
        "octoechos": [
          {
            "text": "The martyrs dispelled the darkness of ungodliness, showing forth the light of divine knowledge unto all mankind.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 1"
            },
            "label": "plain",
            "provenance_note": "On “Lord, I have cried ...,” 3 Stichera of all the righteous, in Tone VII: Spec. Mel.: “No longer are we forbidden the tree of life ...”:"
          },
          {
            "text": "With Orthodox teachings as with divine rays ye enlightened the Church of the Lord, O most wise pastors.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "provenance_note": "On “Lord, I have cried ...,” 3 Stichera of all the righteous, in Tone VII: Spec. Mel.: “No longer are we forbidden the tree of life ...”:"
          },
          {
            "text": "Ever dwelling in trackless wastes, ye broke the nets of the demons, O venerable fathers.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
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
            "provenance_note": "On “Lord, I have cried ...,” 3 Stichera of all the righteous, in Tone VII: Spec. Mel.: “No longer are we forbidden the tree of life ...”:"
          },
          {
            "text": "O Savior, when Thou comest to judge the whole world put me not to shame, for I have committed shameful acts.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 4"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain",
            "provenance_note": "Then three other Stichera, of the martyrs, in Tone VII:"
          },
          {
            "text": "Glory be to Thee, O Christ God, Thou boast of the apostles, joy of the martyrs; whose preaching was of the consubstantial Trinity.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 5"
            },
            "label": "plain",
            "provenance_note": "Then three other Stichera, of the martyrs, in Tone VII:"
          },
          {
            "text": "O holy martyrs, ye who have fought the good fight and received your crowns, pray to the Lord, that our souls be saved.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
              "locus": "Friday-evening Vespers, LIC sticheron 6"
            },
            "label": "plain",
            "provenance_note": "Then three other Stichera, of the martyrs, in Tone VII:"
          }
        ],
        "octoechos_verses": [
          {
            "text": "If Thou shouldest mark iniquities, O Lord, O Lord, who shall stand? * For with Thee there is forgiveness.",
            "tier": 2,
            "src": {
              "file": "7-7.pdf",
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
              "file": "7-7.pdf",
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
              "file": "7-7.pdf",
              "locus": "Friday-evening Vespers, LIC ladder verse 3"
            }
          },
          {
            "text": "For with the Lord there is mercy, and with Him there is plenteous redemption; * and He shall redeem Israel out of all his iniquities.",
            "tier": 2,
            "src": {
              "file": "7-7.pdf",
              "locus": "Friday-evening Vespers, LIC ladder verse 4"
            }
          },
          {
            "text": "O praise the Lord, all ye nations; * praise Him, all ye peoples.",
            "tier": 2,
            "src": {
              "file": "7-7.pdf",
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
              "file": "7-7.pdf",
              "locus": "Friday-evening Vespers, LIC ladder verse 6"
            }
          }
        ]
      },
      "lic_theotokion": {
        "text": "Thou hast been known to have become a mother * in a manner surpassing nature O Theotokos, * and hast remained a virgin in a manner beyond all telling and understanding; * no tongue can expound the wonder of thy birthgiving. * For while thy conceiving O pure one, was most glorious, * the manner of thy birthgiving transcends comprehension; * for where God so willeth, the order of nature is overthrown. * Wherefore, we all, knowing thee to be the Mother of God, * do earnestly entreat thee: ** Pray thou that our souls be saved!",
        "tier": 2,
        "src": {
          "file": "7-7.pdf",
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
        "rubric": "Vouchsafe, O Lord ..., Litany: Let us complete ..., Then: On the Aposticha, these Stichera of the holy martyrs, in Tone VII:",
        "items": [
          {
            "text": "Despising every earthly thing, O holy martyrs, and having bravely preached Christ at the tribunal, ye received your reward from Him for your torments. Since ye have boldness before God, we beseech you to pray to Him as one almighty, that He save the souls of us who flee unto you.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
              "locus": "Friday-evening Vespers, aposticha item 1"
            },
            "label": "plain"
          },
          {
            "text": "O all-praised martyrs, spiritual lambs, reason endowed whole burnt offerings and sacrifices acceptable and well-pleasing to God. Ye were not hidden by the earth, but heaven hath received you; and ye have become companions of the angels we entreat you to pray with them unto our God and Savior, that He grant peace to the world, and save our souls.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
              "locus": "Friday-evening Vespers, aposticha item 2"
            },
            "label": "plain"
          },
          {
            "text": "For the departed O Thou Who in the beginning fashioned man in Thine image and in accordance with Thy likeness, in paradise Thou didst appoint him to rule over Thy creatures; but, led astray by the malice of the devil, he partook of the fruit, breaking Thy commandment. Wherefore, Thou didst condemn him to return to the earth from whence he had been taken, O Lord, and to beg for repose.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
              "locus": "Friday-evening Vespers, aposticha item 3"
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
            "text": "O our Savior, grant rest to our brethren whom Thou hast removed from transitory things, and who cry: Glory be to Thee, O Lord.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
              "locus": "Friday-evening Vespers, aposticha item 4"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 2
              }
            ],
            "label": "for_the_reposed"
          }
        ],
        "verses": [
          {
            "text": "Blessed are they whom Thou hast chosen * and taken to Thyself, O Lord.",
            "tier": 2,
            "src": {
              "file": "7-7.pdf",
              "locus": "Friday-evening Vespers aposticha, departed verse 1 (final period present, unlike shared/2-7 — §5 per-tone; 3-7/4-7/5-7/6-7 class)"
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
              "file": "7-7.pdf",
              "locus": "Friday-evening Vespers aposticha, departed verse 2"
            }
          }
        ]
      },
      "aposticha_theotokion": {
        "text": "O thou who alone didst receive the uncontainable Word of God, and hast given birth to Him incarnate: Pray that our souls be saved.",
        "tier": 1,
        "src": {
          "file": "7-7.pdf",
          "locus": "Friday-evening Vespers, aposticha Glory/Both-now closer"
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
              "text": "At thy command O Lord, * the nature of the waters that beforehand flowed freely was transformed * and became like the earth; * whereby Israel having traversed them dryshod * chanted unto Thee a hymn of victory.",
              "tier": 2,
              "src": {
                "file": "7-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "Of a truth the ranks of angels rightly honor thee, the Mother of the God of all, O most pure one. Accept now also this hymn of supplication from my lips of clay.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
                "text": "O most pure one who hast given birth to true Life, slay my carnal wickedness, which liveth yet, and grant unto thy servant deliverance from transgressions and the passions, O pure one.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 1, item 2"
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
                "text": "The timeless Word, the Sun Who shone forth unapproachably from the Sun, hath shone forth in time, enlighten our souls, with His rays O Virgin, and grant us understanding.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
                "text": "Ever effective words of praise are due thee, O Theotokos; yet we entreat thee, O pure one: From all the sorrows of life save those who have recourse unto thee.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
              "text": "O Lord and Savior, * Who in the beginning established the heavens * by Thine all-powerful Word, * and by the divine and all-accomplishing Spirit * hath granted them all their strength, * do Thou establish me on the unshakeable rock of Thy confession.",
              "tier": 2,
              "src": {
                "file": "7-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "As a servant right wisely repaying my debts for thy grace, O Lady, I zealously hymn thee, O most pure Mother of the Word, the Redeemer of all; wherefore, even now rescue me from the assaults of life.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 3, item 1"
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
                "text": "O most pure Lady who hast given birth to the life-creating Word, thou hast clearly deemed Adam worthy of a higher life, upon whom death came through disobedience Free me now also from mortal sin.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 3, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "The law of the passions which hardens the flesh, and now vexes the spirit, causes my mind to grow attached to the most grievous of passions, O most pure one; yet By thy prayers quickly grant me the peace of dispassion.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
                "text": "Having ineffably conceived in thy womb Christ, the Sustainer of all, O most pure one, thou hast freed human nature from the chains of Hades. Do thou now break asunder the tangled bonds which hold me in corruption.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
              "text": "Having never left the bosom of the Father, * Thou didst descend to earth O Christ God, * I have heard of the mystery of Thy dispensation, * and I have glorified Thee, * O only Lover of mankind.",
              "tier": 2,
              "src": {
                "file": "7-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "My mind fraught with gloom, at night I do battle against a myriad of evil spirits. O portal of the light, with thy rays illumine me, and quickly rescue me from bitterness and grief.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
                "text": "Surrounded by a multitude of sins and bound fast with bonds of temptations, I now call upon thine aid, O Lady, that I may be delivered from every torment.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
                "text": "Drive away the hordes of evil and cruel demons and the assemblies of envious and wicked men, O all-hymned one, and deliver me from all the grief and tribulation of life.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
                "text": "With the sword of thy prayers, O Lady, cut down the lying words and deeds which reverberate around me, and quickly free me and deliver me from all grief.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
              "text": "Night is bereft of light * for those without faith, O Christ, * but for the faithful there is enlightenment * in the sweetness of Thy words; * wherefore, I rise early unto Thee * and hymn Thy divinity.",
              "tier": 2,
              "src": {
                "file": "7-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 5 irmos"
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
                "text": "In that thou art the impregnable bulwark of the faithful and the protection of thy servant, O Virgin, from every violent grief and affliction deliver me.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
                "text": "Assailed on every side, O most pure one, I am in great distress. By thy prayers restore the strength of body and soul which hath failed within me.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
                "text": "I, thy servant, now flee to the depths of thy compassion, O Virgin, that I may be delivered from oppression and the unjust assemblies which assail me.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
                "text": "The glory of thy supplications is everywhere supremely exalted, O most pure Virgin Mother; thereby deliver me now from every assault of life.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
              "text": "Sailing in the tempest of the cares of life, * together with the ship I have been submerged by sins, * and cast to the soul-corrupting beast, * wherefore like Jonah I cry to Thee, O Christ: * Lead me up from the deadly abyss.",
              "tier": 2,
              "src": {
                "file": "7-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "The utterances and words of all praise thee with faith, O pure one, for by thy birthgiving the debt of all mankind hath been clearly abolished; yet even now accept the supplications of those who hymn thee, and deliver us from temptations and griefs.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
                "text": "Sick am I, and pierced by the thorns of sinful passions, O most pure one, yet I seek healing from thee. Take from me all pain and sorrow, and deliver me from temptations and griefs.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
                "text": "O Theotokos who didst become the palace of the King of glory, thou hast manifestly exalted human nature to heaven; wherefore, lead me up from the abyss of my many transgressions, temptations and passions.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
                "text": "O pure Virgin, in a manner transcending understanding and all telling thou hast given birth to the incarnate Word Who hath delivered us from irrationality; wherefore, we unceasingly hymn thee with divine discourse, and glorify thee with faith.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
              "text": "Cast into the fiery furnace, * the venerable children transformed the fire into dew, * crying aloud thus in hymnody: * Blessed art Thou O Lord, the God of our fathers!",
              "tier": 2,
              "src": {
                "file": "7-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "O most pure maiden who art arrayed in the vesture of purity, transport now my soul from vile wickedness to divine beauty, O blessed Lady, thou intercessor for our race.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 7, item 1"
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
                "text": "The demons of evil now exceedingly rage, and the fire of the passions burneth within me; yet with the rays of thy life, and all the more with thy compassions, do thou utterly consume them, O intercessor for our race.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
                  "locus": "Sunday-night Compline canon, Ode 7, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Entreating thy Son on our behalf, O most pure Mother of God, by thy supplications never cease to rescue thy servant from the griefs and misfortunes of humanity.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
                "text": "The transcendent Son immutably took flesh from thee, O Virgin, and became a man, that He might save those who chant: Blessed is the Fruit of thy womb, O most pure one.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
              "text": "Bedewed, the children cried aloud * in the midst of the furnace: * Let creation bless Him Who formed all things by His word, * and supremely exalt Him throughout the ages!",
              "tier": 2,
              "src": {
                "file": "7-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "Expanses of the passions and many and varied woes truly surround thy servant, O Lady; but deliver me from their every temptation.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
                "text": "Let thy mighty hand now come upon us, O Lady, and let it deliver us from the human tribulations we expect.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
                "text": "Break thou the snares of wicked people of evil counsel, O pure Birthgiver of God, and deliver thy servant from every need.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
                "text": "As thou art the only divine haven of the faithful, O pure Virgin, I entreat thee to deliver me from the bitter tempest of the sea of life.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
              "text": "Rejoice, O radiant Virgin, * Mother of the Bestower of light! * Rejoice, for thou didst contain the Infinite One within thy womb! * Rejoice, thou who art greater in honor than the very cherubim, * for thou hast given birth unto the Savior of our souls!",
              "tier": 2,
              "src": {
                "file": "7-2.pdf",
                "locus": "Sunday-night Compline canon, Ode 9 irmos"
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
                "text": "Having bolted away from the commandments of the Master like a colt, let me be restrained by the bridle of thy prayers, O most pure one, that I may be brought back to the path of speedy restoration.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
                "text": "I have been brought low by the commission of my wicked sins through mindless stumbling. Deliver me from my bitter state, O Theotokos.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
                "text": "Having been shown to be the primal healing of human nature, thou didst cure the fall of Adam and Eve. Heal me also by thy prayers, O Theotokos.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
                "text": "Grant me a chaste mind, a pure heart and prudent understanding, O Lady, that I may keep the most pure commandments of my God.",
                "tier": 1,
                "src": {
                  "file": "7-2.pdf",
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone VII:",
        "sessional": {
          "text": "O Lady, thy Son hath been angered by thy sinful servants. We have turned to wrath Him Who is full of loving-kindness, but do thou turn Him again to mercy, O pure one. Have pity, O Mother of God, and with thine own supplications beseech the Compassionate One, and deliver those who are held captive.",
          "tier": 1,
          "src": {
            "file": "7-2.pdf",
            "locus": "Sunday-night Compline, sessional after Ode VI"
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
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., Troparion, and the rest as usual. Dismissal."
    },
    "mon": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "Having crushed battles with His arm * and drowned the mounted captains * let us sing unto Him, as to our God and Redeemer, * for He hath been glorified.",
              "tier": 2,
              "src": {
                "file": "7-3.pdf",
                "locus": "Monday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "We entreat thee, O most pure one, the cause of our salvation and divine deliverance: Pray thou that we be saved.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
                "text": "Wholly sunk am I in grievous temptations, in misfortunes and transgressions; and I cry to thee, O most pure one: Save me, thy servant!",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
                "text": "We beseech thee, the pure Virgin and the Mother of the Creator: Deliver us from all the oppression of the demons.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 1, item 3"
                },
                "label": "glory"
              },
              {
                "text": "O thou who hast ineffably given birth in the flesh to the Word, entreat Christ our God, the Author of life, that we be saved.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
              "text": "The Church of Christ hath been confirmed by faith; * wherefore she crieth out unceasingly in hymns, chanting: * Holy art Thou, O Lord! * and my spirit doth hymn Thee!",
              "tier": 2,
              "src": {
                "file": "7-3.pdf",
                "locus": "Monday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "Treading the path of most pernicious evil, I have not found the path of my salvation. Do thou guide me to it, O most immaculate Lady.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
                "text": "Thee alone, O all-immaculate one, do I describe as my might and confirmation, my help and hope. Be thou a helper for me on the day of my departure.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
                "text": "I ever beseech thee, O most immaculate one: At the hour of my death stand before me, and deliver thy servant from torment.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 3, item 3"
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
                "text": "Thou wast ineffably born from the Virgin, O Lord our Savior, and hast revealed Thyself as Thou didst will, restoring the world.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
              "text": "I heard report of Thee * and became filled with fear; * I understood Thy works * and became filled with awe, O Lord.",
              "tier": 2,
              "src": {
                "file": "7-3.pdf",
                "locus": "Monday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "Having violated the precepts of my Master, I have been revealed to be easy prey to mine enemies. Do thou deliver me, O Lady.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
                "text": "At the hour of my death deliver me, O most pure one, and save my passion- fraught soul from the demons.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
                "text": "O most pure Lady, break asunder the bonds of my transgressions, and by thy supplications be for me a mediator for everlasting life.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
                "text": "We hymn thee who even after giving birth didst remain a virgin, O most pure one, and we glorify thee as the Mother of our God.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
              "text": "Rising at dawn O Word unto Thy glory and praise, * we unceasingly hymn the image of Thy Cross, * which Thou hast bestowed upon us * as a weapon of assistance.",
              "tier": 2,
              "src": {
                "file": "7-3.pdf",
                "locus": "Monday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "O good Virgin, thou haven amid the storm for those who are grievously troubled, thou portal of salvation for those who are saved by faith: Save me, thy servant!",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
                "text": "Richly show forth upon me, thy servant, thy many compassions, O Virgin Theotokos, delivering me from the dread judgment which is to come.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
                "text": "The inconstant night of the passions besets my soul sending it into the pit of destruction. With the light of thy prayer, O Theotokos, save me, thy servant.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
                "text": "O all-holy and joyous Virgin who ineffably hast given birth to the Word in time: Entreat Him to save our souls.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
              "text": "Jonah cried out from the belly of Hades: * Lead my life up from corruption! * And we cry aloud unto Thee: * O almighty Savior, have mercy on us!",
              "tier": 2,
              "src": {
                "file": "7-3.pdf",
                "locus": "Monday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "Thee do we have as a sure aid amid perils, our mighty salvation amid tribulations, a place of rest for us amid griefs, and our help amid misfortunes, O Ever-virgin.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
                "text": "O most pure one, show thyself to be the preserver of my whole life: deliver me from the demons at the hour of my death, and grant me rest after my death.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
                "text": "O Virgin Theotokos, thou art the beauty of the honorable and holy angels, and the joy of all mankind. Do thou guide me unto life.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
                "text": "O most immaculate one, heal thou my wretched soul, which hath become incurably sick through the delusions of life and the closing of many doors.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
              "text": "Thou didst bedew the burning furnace, O Savior, * and didst save the children who chanted, proclaiming: * Blessed art Thou throughout the ages, * O Lord God of our fathers!",
              "tier": 2,
              "src": {
                "file": "7-3.pdf",
                "locus": "Monday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "Calling to mind the multitude of my transgressions, I am in despair, O most immaculate one. Wherefore, I cry unto thee: Help me, lest I perish utterly!",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 7, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Knowing thee to be the Mother of Life, O pure one, I cry to thee: Deliver me from the death of the soul, and grant unto me eternal life!",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 7, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "O most immaculate one, from misfortunes and the passions, from pain and affliction, from the offenses of life and the unquenchable eternal fire do thou deliver those who faithfully honor thee with hymns.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 7, item 3"
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
                "text": "Every tongue doth glorify thee, O pure and all-hymned Theotokos, who art the glory and boast of our race and the guide of the lost.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
              "text": "Unto Him before whom the cherubim are in awe, * and the seraphim filled with wonder, * the Fashioner of the world: * O ye priests and servants and spirits of the righteous, * hymn ye, bless ye, and supremely exalt * throughout the ages.",
              "tier": 2,
              "src": {
                "file": "7-3.pdf",
                "locus": "Monday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "I have wasted my whole life in slothfulness, utter wretch that I am; and am now cast into confusion and drawn nigh unto mine end. Help me, O Lady!",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
                "text": "Thou art the refuge of sinners and the setting aright of those who have been brought low, O Lady; wherefore, I flee to thy protection. Save me!",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
                "text": "As thy prayer never fails, O all-immaculate Sovereign Lady of the world, from the judgment which is to come deliver those who with faith venerate thine image.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
                "text": "Every tongue which rendereth glory hymneth thee, O Virgin Bride of God, for thou hast given birth to the all-hymned God. Him do thou unceasingly entreat, that He save the souls of those who hymn thee.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
              "text": "O ye faithful, with hymns let us magnify the Theotokos, * who in a manner transcending nature became a mother, * and is a virgin by nature, * she alone is blessed among women!",
              "tier": 2,
              "src": {
                "file": "7-3.pdf",
                "locus": "Monday-night Compline canon, Ode 9 irmos"
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
                "text": "Those who with faith flee beneath thy tender compassion are delivered from the sorrowful tribulations of life; wherefore, I also have fled to thy protection, O Theotokos.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
                "text": "O pure one, thou mighty helper, invincible bulwark against griefs, save me from sinful passions and from the everlasting fire.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
                "text": "O pure Virgin, with the radiant effulgence of the Word Who shone forth from thee illumine me, save me, and rescue me from torments, in that thou art good.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
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
                "text": "In thine arms thou dost carry Him Who sustaineth all things. Him do thou entreat, O pure one, that He save us who are beset by the malice of the alien one.",
                "tier": 1,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Monday-night Compline canon, Ode 9, item 4"
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone VII:",
        "sessional": {
          "text": "In the tender compassion of Thy mercy, O Christ God, Thou wast pleased to become incarnate from the holy Virgin. For her sake preserve our life, in that Thou lovest mankind.",
          "tier": 1,
          "src": {
            "file": "7-3.pdf",
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
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., Troparia, and the rest as usual. Dismissal."
    },
    "tue": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "At thy command O Lord, * the nature of the waters that beforehand flowed freely was transformed * and became like the earth; * whereby Israel having traversed them dryshod * chanted unto Thee a hymn of victory.",
              "tier": 2,
              "src": {
                "file": "7-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "With the serenity of thy divine prayer cause thou the tempest of my lusts and passions to cease, O most immaculate one, that with a calm heart I may glorify thine ineffable birthgiving.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
                "text": "Through thine Offspring hath all desire and sweetness come to be, O Lady Theotokos, for He driveth away all the bitterness engendered by the passions and transgressions of thy servants.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 1, item 2"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Deliver me from the delusion of the demons, from oppression, harm and temptation, O most pure one, that with faith I may glorify thee who, after God, art my helper and protection.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
                "text": "O Word of God, in the bush Thou didst reveal Thyself unto Moses, burning like fire, yet in nowise consuming it, showing forth an image of Thy nativity from the Virgin, through whom Thou didst assume human form.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
              "text": "O Lord and Savior, * Who in the beginning established the heavens * by Thine all-powerful Word, * and by the divine and all-accomplishing Spirit * hath granted them all their strength, * do Thou establish me on the unshakeable rock of Thy confession.",
              "tier": 2,
              "src": {
                "file": "7-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 3 irmos (printed WITHOUT the \"Irmos:\" label — per-print variant)"
              }
            },
            "items": [
              {
                "text": "Earnestly entreat Him Who was lifted up upon the Cross and hath cast down Hades, O Theotokos, on behalf of those who ever faithfully hymn thee with sacred songs and hymns, O hope of the world and help of the faithful.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 3, item 2"
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
                "text": "O Lady who by thy birthgiving hast freed mankind from the corruption of death: Deliver me from the corruption of the passions, from infirmities and grievous transgressions, and by thy divine mediation grant me the life which groweth not old.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
                "text": "Having immutably made Thyself like unto man in all things, O Word of God, thou didst manifestly issue forth from the pure Virgin, and hast revealed to all the thrice-radiant Godhead in the unchangeable Essence and immutable Hypostases.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
              "text": "Having never left the bosom of the Father, * Thou didst descend to earth O Christ God, * I have heard of the mystery of Thy dispensation, * and I have glorified Thee, * O only Lover of mankind.",
              "tier": 2,
              "src": {
                "file": "7-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "Spread forth thy mercy and tender compassion upon thy servants who ever pray to thee, O pure one, delivering them from dreadful torment By thy prayers.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
                "text": "With pure prayer and fervent love I flee unto thee, O most immaculate one. Be thou the remission of my many transgressions, delivering and saving me.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
                "text": "By thy birthgiving, O most pure Lady, thou hast shown thyself to be the mediatress of our Joy. Beseech Him, O most immaculate one, to deliver us from perils and grant unto me eternal life.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 4, item 3"
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
                "text": "O Christ God, Who left not the bosom of the Father when Thou didst become incarnate from the Virgin: Preserve Thy flock which worshippeth the divine images of Thy dispensation.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
              "text": "Night is bereft of light * for those without faith, O Christ, * but for the faithful there is enlightenment * in the sweetness of Thy words; * wherefore, I rise early unto Thee * and hymn Thy divinity.",
              "tier": 2,
              "src": {
                "file": "7-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 5 irmos"
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
                "text": "Thee do I entreat, O pure Virgin, to deliver my soul from gloomy sin, and to illumine it with the divine radiance of repentance and thy mercy.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
                "text": "By thy prayers and supplications deliver those who find themselves in the midst of an abyss of cruel temptations and violent passions, O most holy and pure one, and save those who praise thee.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
                "text": "O most holy Theotokos, who didst conceive God in thy virginal womb and hast given birth unto Him: from all eternal damnation deliver those who hymn thee.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
                "text": "Knowing thee to be the Mother of God and our helper, O pure one, we set thee before the compassionate Lord as the mediatress of our salvation.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
              "text": "I cried out to Thee, O Lord, when I was afflicted, * and Thou didst raise up my life, * O greatly Merciful One.",
              "tier": 2,
              "src": {
                "file": "7-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 6 irmos"
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
                "text": "Entreat thy Son, Who was lifted up upon the Cross and hath delivered mankind from corruption, O Lady, that we be saved.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
                "text": "O most pure Lady, forsake me not who place my trust in thee; but hasten thou unto mine aid.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
                "text": "From grief deliver those who invoke thy divine name, and free them from dreadful torment.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 6, item 3"
                },
                "label": "glory"
              },
              {
                "text": "O most pure Lady our steadfast hope, preserve those who with love hymn thee as the true Theotokos.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
              "text": "Of old the Children were shown to be * bedewed in the fiery furnace, * chanting and praising the one God saying: * 'Supremely exalted and exceedingly glorified is the God of our Fathers'.",
              "tier": 2,
              "src": {
                "file": "7-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "In distraction and grief, and amid misfortunes, O most pure one, I fervently call upon thee with all my heart: Anticipate my need, and deliver me and grant me peace, O pure one.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 7, item 1"
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
                "text": "The threefold billows of many transgressions and passions batter me and cause me to sink into the depths of destruction; but grant me thy hand and save me, O Theotokos, and have mercy upon me in thy might.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
                "text": "I bring Thy Mother before Thee, O Savior and Lover of mankind, to pray for me. Receiving her, deliver me from transgressions and the judgment which is to come, and rescue me from everlasting torment.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
                "text": "Possessed of a soul deadened by grievous crimes, I beseech thee, O Lady, who hast slain Hades by thy birthgiving: Grant me life through examples of repentance.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
              "text": "Christ Who is truly God, * the Cause of the existence of all, * let us supremely exalt and glorify * throughout all ages.",
              "tier": 2,
              "src": {
                "file": "7-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "From misfortunes, corruption and the passions save me, O most pure one; for I flee to thee, my hope and divine salvation.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
                "text": "Having delivered me from evil accusers at the last hour, O Lady and Virgin, do thou thyself guide me to the divine habitation.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
                "text": "Rouse thyself, O my soul, and, falling down, cry aloud unto the Theotokos: O hope and salvation of all, deliver me from eternal fire!",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 8, item 3"
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
                "text": "Let us hymn the Virgin who alone among women is blessed, glorifying and supremely exalting Christ throughout all ages.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
                  "locus": "Tuesday-night Compline canon, Ode 8, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "9": {
            "irmos": {
              "text": "O Mother of God and Virgin, * thou hast given birth and yet remained a virgin, * not in accordance with nature, * but by the condescension of God; * wherefore, we ever magnify thee, * who alone wast deemed worthy * of the wonders of God.",
              "tier": 2,
              "src": {
                "file": "7-4.pdf",
                "locus": "Tuesday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "The Theotokos offereth Thee entreaty on my behalf, O Christ my Master. Accepting it, deliver me from all torment.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
                "text": "I ever entreat thee, O Lady: Deliver my lowly soul from the judgment and torment which are to come.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
                "text": "Beseech my Creator and Fashioner, O Virgin, that He deliver me from the dread judgment and grant me life.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
                "text": "O all-immaculate and pure Virgin Mother, from spiritual defilement deliver thy flock which magnifies thee.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone VII:",
        "sessional": {
          "text": "Christ God, Who was crucified for our sake and hath cast down the dominion of death, do thou unceasingly entreat, O Virgin Theotokos, that He save our souls.",
          "tier": 1,
          "src": {
            "file": "7-4.pdf",
            "locus": "Tuesday-night Compline, sessional after Ode VI"
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
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., Troparion, and the rest as usual. Dismissal."
    },
    "wed": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "At thy command O Lord, * the nature of the waters that beforehand flowed freely was transformed * and became like the earth; * whereby Israel having traversed them dryshod * chanted unto Thee a hymn of victory.",
              "tier": 2,
              "src": {
                "file": "7-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "With waters flowing with life, O Virgin, give drink to my soul which withereth away under the burning heat of sin, that I may produce the fruitful grain of godly compunction.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
                "text": "Rain down upon me drops of compunction, O pure maiden, and with drops of compassion wash away all the defilement of my soul which hath come upon it through inattention.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
                "text": "Having taken thy Creator into thy womb, thou hast given birth unto Him without seed, and God became an infant. O strange wonder! Thou art both a handmaiden and mother, O Lady unwedded!",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 1, item 3"
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
                "text": "O most pure Virgin Mother, thou hast given birth for us to Christ, the Redeemer of the race of mankind, our Liberator and Savior; wherefore, knowing thee to clearly be the mediatress of eternal life, we glorify thee.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
              "text": "O Lord and Savior, * Who in the beginning established the heavens * by Thine all-powerful Word, * and by the divine and all-accomplishing Spirit * hath granted them all their strength, * do Thou establish me on the unshakeable rock of Thy confession.",
              "tier": 2,
              "src": {
                "file": "7-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "Having dyed a purple robe - His body - in thy most pure blood, and put it on without assuming the corruption of nature, the King of all issued forth from thee as both God and man, O Virgin, possessed of immutable royalty.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
                "text": "As a treasury of good and ineffable things given by God unto all, O Virgin, thou bestowest an abundance of grace and wondrous gifts upon us who pray to thee amid perils, misfortunes and infirmities.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
                "text": "Thee, O pure one, did the wondrous Daniel foresee as the mountain from whence Christ was cut, Who hath crushed the graven images of the demons. Wherefore, delivered by thy birthgiving, we hymn thee as the cause of all good things.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
                "text": "The divinely eloquent one once foresaw thee as a scroll whereon the Word was writ by the finger of the Father, O pure one; wherefore, pray that He inscribe me in the Book of Life, rending asunder the evil record of my sins.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
              "text": "Having never left the bosom of the Father, * Thou didst descend to earth O Christ God, * I have heard of the mystery of Thy dispensation, * and I have glorified Thee, * O only Lover of mankind.",
              "tier": 2,
              "src": {
                "file": "7-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "Entreat Him Who was born from thee, O Theotokos, that we who glorify His sufferings may find help in the time of evil troubles.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
                "text": "The Author of nature, the Myrrh Who poured forth from thee, O most pure one, hath filled all things with sweet fragrance through divine understanding, and dispelling the fetor of falsehood.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
                "text": "Christ God hath set thee up as a noetic ladder for those on earth, O pure one, and by thee He leadeth the faithful up to divine and celestial works, in that He is full of loving-kindness.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
                "text": "Weighed down by the great burden of sin, O good one, I cry unto thee: Be thou my cleansing, O thou who hast given birth to Him Who taketh away the transgressions of the world!",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 4, item 4"
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
              "text": "Having risen at dawn out of the night, * I entreat Thee O Lord my God: * grant me the forgiveness of my sins, * and guide my steps to the light * of thy commandments, I pray Thee.",
              "tier": 2,
              "src": {
                "file": "7-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "O Mother of God Who is the Lover of mankind, O all-hymned Theotokos, by thine entreaties send down the cleansing of sins upon me who ever praise thee with faith, love and hymns.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 5, item 1"
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
                "text": "O most pure Theotokos, in that thou art the receptacle of the immutable Light and the temple of the divine Effulgence, with thy light illumine my darkened soul, I pray.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
                "text": "O Lord my God, Whose pleasure it was to become man, I entreat Thee: Be thou well-pleased to save me, a prodigal, for the sake of the pure and virgin maiden who gave birth unto Thee in purity.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
                "text": "O Lady Mother of God, O most immaculate one who for the world hast given birth to the hypostatic Life, grant thou the forgiveness of my transgressions.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 5, item 4"
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
              "text": "Sailing in the tempest of the cares of life, * together with the ship I have been submerged by sins, * and cast to the soul-corrupting beast, * wherefore like Jonah I cry to Thee, O Christ: * Lead me up from the deadly abyss.",
              "tier": 2,
              "src": {
                "file": "7-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "By thy seedless birthgiving, O Theotokos, have we been delivered from the corruption of death and the sin of Adam; for thy Son, Who alone is both God and man, granteth to the faithful deliverance from offenses.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
                "text": "Rend asunder the record of my transgressions, O Lady, through thy divine supplications recording me in the Book of the Saved, that in praise I may hymn thee, who art more holy than the cherubim.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
                "text": "They who of old were cast from before Thy face by Thy righteous judgment, O Christ, hast Thou recalled by Thine advent in the flesh, in that Thou art full of tender compassion. And now, O good One, accept us who have committed offense, and free us from evils.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
                  "locus": "Wednesday-night Compline canon, Ode 6, item 3"
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
                "text": "O most pure Virgin, I entreat thee who hast given birth to the Benefactor and Cleansing of sinners: By thy maternal supplication cleanse the guilt of my countless transgressions, for thou hast the power so to do, as the Mother of thy Son.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
              "text": "Of old the Children were shown to be * bedewed in the fiery furnace, * chanting and praising the one God saying: * 'Supremely exalted and exceedingly glorified is the God of our Fathers'.",
              "tier": 2,
              "src": {
                "file": "7-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "My mind, which is weighed down by sin, O all-immaculate one, do thou rouse unto good works, that I may bless thee who art more honorable than all creation.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
                "text": "In the furnace the three young children prefigured thy birthgiving, for thou wast not consumed when thou didst give birth to Fire, O pure one; wherefore, consume now the tinder-like passions of my heart.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
                "text": "Perceiving thee to be beauteous and comely among women, the Lord became incarnate from thee; wherefore, entreat Him, O most holy maiden, that He save me.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
                "text": "The divine Dew which issued forth from thee, O most immaculate one, bedeweth those who have withered under the burning heat of sin; wherefore, I beseech thee: Bedew my soul which hath withered also.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
              "text": "Unconsumed by fire, the bush on Sinai spake unto Moses, * slow of speech and stammering, * and revealed God unto him; * and zeal for God showed forth the three children who chanted hymns * to be unvanquished by the fire. * O all ye His works, praise ye the Lord * and supremely exalt Him throughout all ages.",
              "tier": 2,
              "src": {
                "file": "7-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "The bush which burned, yet was not consumed, and with which Moses the God-seer conversed with on Sinai, showed forth thy strange birthgiving, wherefore, marveling at this, O pure one, he cried aloud, rejoicing: Hymn the Lord, all ye works of the Lord, and supremely exalt Him throughout the ages!",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
                "text": "O pure Virgin who hast given birth to Life, grant life to my mind which hath been slain by sin, and by thy maternal pleas to God save me who ever chant: Hymn the Lord, all ye works of the Lord, and supremely exalt Him throughout the ages!",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
                "text": "At night and during the day I have thee, O pure one, as my steadfast protector against foes visible and invisible, and I am in nowise daunted by their evil and wicked assaults, chanting: Hymn the Lord, all ye works of the Lord, and supremely exalt Him throughout all ages!",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
                "text": "Moved by His love for mankind, in that He is good, thy Son, O Theotokos, hath given thee as a help against the enemy and the healing of sufferings of those who cry: Hymn the Lord, all ye works of the Lord, and supremely exalt Him throughout all ages!",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
              "text": "Conceiving without knowing corruption, * and lending thy flesh to the Word, * O Mother unwedded and Virgin Theotokos, * thou art the vessel of the uncircumscribable One, * and dwelling place of thy Creator, * thee do we magnify.",
              "tier": 2,
              "src": {
                "file": "7-5.pdf",
                "locus": "Wednesday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "Having nourished as an infant Him Who as Creator sustaineth and sanctifieth the whole world, thou hast been revealed to be the Mother of the Almighty according to the flesh, the irremovable riches of virginity, O Virgin Theotokos, thou Bride who knewest not a man.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
                "text": "Having given birth to the Word Who exceedingly loveth manking and taketh away the sin of the world, O Virgin, entreat Him to send down the remission of sins upon us who with unwavering faith bless thee as is meet.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
                "text": "Enamored of sin, I tremble in fear lest I suddenly reach the end of my life, O pure Lady, intercessor of all the oppressed. Wherefore, be thou now entreated, that thou strengthen me by examples of repentance.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
                "text": "Let me not be sent into the fire prepared for me, O most Compassionate and greatly Merciful One, for the Virgin who gave birth to Thee, together with the divine choir of the incorporeal hosts, the apostles, prophets, martyrs and holy hierarchs, and the souls of the righteous, ever beseech Thee.",
                "tier": 1,
                "src": {
                  "file": "7-5.pdf",
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone VII:",
        "sessional": {
          "text": "Beneath thy protection do all mortals flee. Deliver our souls from the everlasting fire, O good one.",
          "tier": 1,
          "src": {
            "file": "7-5.pdf",
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
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., Troparia, and the rest as usual. Dismissal."
    },
    "thu": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "To God Who overthrew Pharaoh in the Red Sea * let us chant a hymn of victory, * for He hath been glorified.",
              "tier": 2,
              "src": {
                "file": "7-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "Looking toward the impending end of my life, O Lady, I cry aloud: Grant me the cleansing of mine offenses, O Bride of God.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 1, item 1"
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
                "text": "Hastening to the abyss of Thy beneficence, I cry aloud: O good Lady, deliver me from all torment.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
                "text": "O Lady, accept us who flee to thee with faith, and grant us deliverance from perils and tribulations.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 1, item 3"
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
                "text": "In accordance with the prophecy thou hast restored the fallen tabernacle of Adam, O most pure one who didst bear God the Savior in thy womb.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
              "text": "My heart hath been established in the Lord; * my horn hath been exalted in my God; * my mouth hath been enlarged over the enemy; * and I am gladdened in Thy salvation.",
              "tier": 2,
              "src": {
                "file": "7-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "O most pure one who didst ineffably conceive God the Master, deliver and save me who am beset by the tempest of sin.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
                "text": "With rays of repentance illumine me who am held fast in the night of unseemly offenses, O maiden, ever granting that I may become a child of the light.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
                "text": "O Theotokos who hast given birth to the Bread of heaven, feeding the hearts of all the faithful, fill thou my starving and passion-plagued soul.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
                "text": "Acknowledging thy divine birthgiving, I have been made steadfast, O Virgin, and, enriched by thy help, I cry out: Holy art Thou, O Lord Who savest our souls!",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 3, item 4"
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
              "text": "I heard report of Thee * and became filled with fear; * I understood Thy works * and became filled with awe, O Lord.",
              "tier": 2,
              "src": {
                "file": "7-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "Disdain me not, neither put me to shame for I earnestly groan and cry out to thee from the depths of my heart, O Lady.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
                "text": "Utterly consume the thorns which pierce my wretched soul, the lusts of the flesh, O Lady who hast given birth to the divine Fire.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
                "text": "Grant me remission offenses, O most blessed and pure one, and deliver me from everlasting and terrible torment.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
                "text": "The Word Who made His abode within thee, O most pure one, hath transformed my nature, which had fallen through disobedience.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
              "text": "My soul riseth unto Thee at dawn, O God, * for Thou art light, and Thy commandments * have become healing for Thy servants, * O Lover of mankind.",
              "tier": 2,
              "src": {
                "file": "7-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "I have made myself like unto the irrational beasts, utter wretch that I am, serving mine accursed flesh with irrational passions. But do thou, O Theotokos, grant that I may come to my senses.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
                "text": "Have mercy upon me who have sinned more than all mankind, and who flee to thy fervent protection, O Virgin Theotokos, and rescue me from torments.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
                "text": "May those who confess thee to be the Theotokos, O Virgin Mother of God, be deemed worthy to receive through thee the kingdom and sustenance which pass not away.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
                "text": "O blessed and most glorious Mother who knewest not a man, grant life to my soul, which hath been slain by my sins and buried beneath unrestrained passions.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 5, item 4"
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
              "text": "Jonah cried out from the belly of Hades: * Lead my life up from corruption! * And we cry aloud unto Thee: * O almighty Savior, have mercy on us!",
              "tier": 2,
              "src": {
                "file": "7-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "The tempest of sin assails me, leading me into the corruption of despair, O Virgin; but extend unto me a firm and mighty helping hand.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
                "text": "Pour forth upon me the oil of the fervent loving-kindness which is within thee, O Lady, delivering me from offenses and rescuing me from everlasting fire.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
                "text": "O Virgin maiden who hast released Eve from pain by thy most pure birthgiving, release me also from the pain of the passions which assail my soul and body.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
                "text": "Thou dost hymn God Who was incarnate from thee, O pure and most immaculate Virgin Mother; and, gazing upon Him, thou dost lament Him Who was lifted up upon the Cross.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
              "text": "Cast into the fiery furnace, * the venerable children transformed the fire into dew, * crying aloud thus in hymnody: * Blessed art Thou O Lord, the God of our fathers!",
              "tier": 2,
              "src": {
                "file": "7-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "The threat of my manifold transgressions hath increased, O pure one, and, deserving condemnation, I fall down and cry unto thee: Before the end grant me cleansing, tears of compunction and the correction of my morals.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
                "text": "In that thou hast given birth to the Life of all, O pure and most pure one, by thy divine works grant life unto me who am in sore distress because of my vile transgressions, and approach the grave in despair.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
                "text": "O good Birthgiver of God, delivering from spiritual death those who with faith call upon thine immortal grace, grant them the kingdom by thy most pure prayers.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
                "text": "We glorify the unapproachable birthgiving of the Virgin, whereby we have been delivered from death; wherefore, reborn unto incorruption, we cry out: Blessed art Thou, O Lord God of our fathers!",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
              "text": "The King of glory, who is alone without beginning, * Before Whom all the powers of heaven stand in awe * and the hosts of angels tremble: * O ye priests praise, and ye people * supremely exalt Him throughout the ages.",
              "tier": 2,
              "src": {
                "file": "7-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "The furnace of the passions consumes me, O Virgin, and devours me with the fire of lusts; but, anticipating my need, quench it with the dew of thy mercy, imparting coolness unto my soul.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
                "text": "I have defiled my soul and rendered my flesh corrupt through lust, wallowing therein. And I have become the mockery of all, and an object of ridicule unto the enemy. O Lady Theotokos, be thou my helper!",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
                "text": "Beseech God to Whom thou hast given birth, O Virgin, that He send down upon those who honor thee with faith salvation, release from misfortunes, speedy deliverance from grievous ailments, and eternal grace.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 8, item 3"
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
                "text": "The Lord, Who created Adam according to His image, having assumed his substance and abolished the primal curse, hymn ye, O priests, and supremely exalt Him throughout the ages!",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 8, item 4"
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
              "text": "O all-hymned one, * who art higher in eminence than the heavens: * having seedlessly conceived the beginningless Word * thou hast given birth to the incarnate God for all mankind. * Wherefore, we all magnify thee.",
              "tier": 2,
              "src": {
                "file": "7-6.pdf",
                "locus": "Thursday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "O most radiant Virgin Mother and Theotokos, with the light of thy supplications do thou radiantly guide to the fear of God my wretched soul, which hath been grievously darkened by carnal pleasures.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
                "text": "Despairing of salvation because of the multitude of mine offenses, I am at a loss, O all-holy Lady. Send down upon me thy benefactions and mercy.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
                "text": "Thy birthgiving, which transcendeth nature, O Theotokos, filleth the angels with wonder and mankind with awe; for it is ineffable and unapproachable to all. And hymning it, we piously glorify thee.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
                  "locus": "Thursday-night Compline canon, Ode 9, item 3"
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
                "text": "Thou hast stripped away my garments of mortality and corruption, O Virgin who for us gave birth to the incarnate Word, the robe of salvation. Wherefore, we all ever magnify thee.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone VII:",
        "sessional": {
          "text": "O pure one, the Fruit of thy womb hath planted the Cross in the ends of the earth and delivered the world from corruption; wherefore, we magnify thee, the most glorious one.",
          "tier": 1,
          "src": {
            "file": "7-6.pdf",
            "locus": "Thursday-night Compline, sessional after Ode VI"
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
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., Troparia, and the rest as usual. Dismissal."
    },
    "fri": {
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos",
        "heading_rubric": "Canon of supplication to the most holy Theotokos",
        "odes": {
          "1": {
            "irmos": {
              "text": "At thy command O Lord, * the nature of the waters that beforehand flowed freely was transformed * and became like the earth; * whereby Israel having traversed them dryshod * chanted unto Thee a hymn of victory.",
              "tier": 2,
              "src": {
                "file": "7-7.pdf",
                "locus": "Friday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "O Lady Theotokos, from misfortunes, from sorrows and falls, from everlasting fire and torment, deliver those who place their trust in thee and have recourse unto thee.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
                "text": "With the dew of thy loving-kindness, O pure Virgin, quench the flame of my falls, lest I come condemned at the trial of all, and receive everlasting fire.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
                "text": "O Virgin, rain down the drops of thy loving-kindness upon me who am ever withered up by the burning heat of lusts, that I may unceasingly glorify our God and Savior Who was born from thee.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
                "text": "With the water of thy supplication, O Virgin, give drink to my soul, which is burning up with the heat of grief, that I may offer the fruits of divine gladness unto Him Who was born from thee.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
              "text": "O Lord and Savior, * Who in the beginning established the heavens * by Thine all-powerful Word, * and by the divine and all-accomplishing Spirit * hath granted them all their strength, * do Thou establish me on the unshakeable rock of Thy confession.",
              "tier": 2,
              "src": {
                "file": "7-7.pdf",
                "locus": "Friday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "Thee do I entreat, O Virgin: Grant to my soul salvation, purification and abundant grace, in that thou art mighty and good; and as thou art the maiden who lovest mankind, grant unto us life incorruptible.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
                "text": "O pure Virgin who hast given birth to the Creator, thou true salvation and intercession for the world: From misfortunes, the perils of life and eternal damnation deliver those who hymn thee with faith.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
                "text": "We earnestly entreat thy compassion, O maiden: Disdain not thy lowly servants, but, as thou art good, look upon us with thy merciful eye, and deliver us from the constant tyranny of the devil.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
                "text": "I am overcome by an excess of grief, O Virgin. All my strength hath grown weak, and I lie outstretched upon the ground. Yet I cry to thee from the depths of my soul: Raise me up again, and strengthen me by thy consolation.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
              "text": "Having never left the bosom of the Father, * Thou didst descend to earth O Christ God, * I have heard of the mystery of Thy dispensation, * and I have glorified Thee, * O only Lover of mankind.",
              "tier": 2,
              "src": {
                "file": "7-7.pdf",
                "locus": "Friday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "O Mother of God, deliver me from corruption and the tyranny of the wicked serpent who ever assails me, tripping me on the path toward God.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
                "text": "O noetic portal of Life, open unto me the portals of repentance, for, wretch that I am, I have now drawn nigh unto the gates of despair through my many offenses.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
                "text": "Shaking off the mire of the passions and lusts well, O most holy one, in thy loving-kindness show me forth as pure, and clothe me in a vesture of radiant grace.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
                "text": "Having washed away the defilement of my soul and the impurity of my body with thy right acceptable prayers, O pure one, set me forth as pure, that I may ever hymn and glorify thee.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
              "text": "Night is bereft of light * for those without faith, O Christ, * but for the faithful there is enlightenment * in the sweetness of Thy words; * wherefore, I rise early unto Thee * and hymn Thy divinity.",
              "tier": 2,
              "src": {
                "file": "7-7.pdf",
                "locus": "Friday-night Compline canon, Ode 5 irmos"
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
                "text": "O all-immaculate Virgin, entreat the supremely good Word, that we be saved; for we have acquired thee as an ally and a mighty aid in need.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
                "text": "O pure one, abandon me not to the enemy who greatly seeks my destruction because of my sins, but rescue me from all harm in thy loving-kindness.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
                "text": "Knowing Thee to be the God and Creator of all, O Christ, we have placed all our hope of salvation in Thee, Who didst become a man for our sake.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
                "text": "Rejoice, O pure one, thou cloud pouring forth the Water of life! Rejoice, O Virgin, thou confirmation of the martyrs and apostles! Rejoice, O most immaculate one, thou glorification of honor!",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 5, item 4"
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
          "6": {
            "irmos": {
              "text": "Sailing in the tempest of the cares of life, * together with the ship I have been submerged by sins, * and cast to the soul-corrupting beast, * wherefore like Jonah I cry to Thee, O Christ: * Lead me up from the deadly abyss.",
              "tier": 2,
              "src": {
                "file": "7-7.pdf",
                "locus": "Friday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "The majesty and beauty of comeliness which I acquired through baptism, O Lady, I have lost by committing unseemly deeds. But by thy fervent intercession grant it to those who honor thee.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 6, item 1"
                },
                "homoglyph_log": [
                  {
                    "from": "U+041E О (Cyrillic)",
                    "to": "O",
                    "count": 1
                  }
                ],
                "label": "plain"
              },
              {
                "text": "Deliver me from suffering, from violent assault and grief, O Theotokos, granting me thy consolation; for I, thy servant, have none other helper than thee, O all-immaculate one.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 6, item 2"
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
                "text": "O most immaculate one who hast given birth to the Redeemer, Benefactor and Savior, thou art possessed of might, and canst do whatsoever thou desirest. Wherefore, we, thy servants, beseech thee: Deliver us from the turmoil of the passions.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
                "text": "Enlightened of old by the Spirit, the prophet Isaiah beheld thee as the light cloud whereon the Lord of glory sat. And He hath come and cast down all the graven images of Egypt, O most pure Virgin Mother.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
              "text": "Of old the Children were shown to be * bedewed in the fiery furnace, * chanting and praising the one God saying: * 'Supremely exalted and exceedingly glorified is the God of our Fathers'.",
              "tier": 2,
              "src": {
                "file": "7-7.pdf",
                "locus": "Friday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "A multitude of sins surround me and drag me down into the corruption of perdition and despair, O Theotokos; but anticipate my need, and grant me saving aid.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
                "text": "Deliver me from all the malice of the enemy, from temptations and tribulation, O most pure one, and preserve my soul in peace and tranquility, that, rejoicing I may hymn thy power.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
                "text": "Foreseeing condemnation for my wicked deeds, wretch that I am, I cry out to thee from the depths of my heart: O most pure Lady, be thou my help, and save me!",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
                "text": "With the martyrs, the angels and the apostles beseech thy Son and Lord, O all-immaculate one, that He save thy servants from perils, misfortunes and griefs.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
              "text": "Emulating the children who in the furnace * received the dew of the Spirit, * let us cry out with faith saying: * Bless the Lord, O ye works of the Lord!",
              "tier": 2,
              "src": {
                "file": "7-7.pdf",
                "locus": "Friday-night Compline canon, Ode 8 irmos"
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
                "text": "O most holy Virgin, be thou a help unto me who flee to thee and cry out with faith: Have mercy, O pure one, and before the end grant me cleansing offenses. At the hour of mine end grant me salvation, and after my repose give me rest.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 8, item 1"
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
                "text": "Abject terror assaileth me when I consider the terrible testing, the impartial Judge, and the never-ending torments prepared for those who have done evil deeds, such as I have truly committed, wretch that I am. O Sovereign Lady of the world, be thou my salvation!",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
                "text": "O pure Birthgiver of God, thou champion of the faithful and cleansing of sinners, thou wellspring of all good and bestower of good things, who art the cause of salvation for mortals: Heal the pangs of my soul, and pour forth everlasting grace, glory and gladness.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
                "text": "O most pure one, the gift given to us by the Master the primal essence: Accept our entreaties as beautiful gifts, rendering unto us thy help, that we may unceasingly hymn the One Who was born from thee and supremely exalt Him throughout the ages.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
              "text": "O Mother of God and Virgin, * thou hast given birth and yet remained a virgin, * not in accordance with nature, * but by the condescension of God; * wherefore, we ever magnify thee, * who alone wast deemed worthy * of the wonders of God.",
              "tier": 2,
              "src": {
                "file": "7-7.pdf",
                "locus": "Friday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "I have now fled to thy protection, O Virgin. Save me who am tempest-tossed by a multitude of transgressions and am perishing, O thou who hast given birth to the Savior and Creator, and deliver me from eternal damnation.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
                  "locus": "Friday-night Compline canon, Ode 9, item 1"
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
                "text": "O pure one, on our behalf entreat the Creator, God and Lord Who became incarnate from Thy most pure blood, that by thy loving-kindness He may take pity upon a despairing people.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
                "text": "By thy fervent mediation before God deliver me from the unquenchable fire, from the outermost darkness and everlasting weeping, even though I am worthy of condemnation, O most holy and pure Theotokos.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
                "text": "Preserved by grace under thy protection, O Theotokos, I am not consumed by the assaults of the adverse foe; wherefore, I hymn, magnify and do homage unto thee as my divine confirmation and foundation.",
                "tier": 1,
                "src": {
                  "file": "7-7.pdf",
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
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone VII:",
        "sessional": {
          "text": "From everlasting fire deliver those who worship thine Offspring; for Christ hath revealed thee to be a helper of all who hymn thee.",
          "tier": 1,
          "src": {
            "file": "7-7.pdf",
            "locus": "Friday-night Compline, sessional after Ode VI"
          }
        }
      },
      "closing_rubric": "Then, “It is truly meet ...,” and a prostration. Trisagion through Our Father ..., Troparia, and the rest as usual. Dismissal."
    },
    "sat": {
      "frame_rubric": "The priest saith: Blessed is our God..., and we respond: Amen. Glory to Thee, our God, glory to Thee. O heavenly King..., Trisagion through Our Father. Lord, have mercy (12 times). Glory ..., Both now ..., O come, let us worship ..., (Thrice). Psalm 50 (Have mercy on me, O God...); Psalm 69 (O God, be attentive unto helping me ...,) and Psalm 142 (O Lord, hear my prayer ...,) Then, Glory to God in the highest ..., and the Symbol of Faith (I believe in one God ...,)",
      "canon": {
        "title": "Canon of supplication to the most holy Theotokos, in Tone VII",
        "heading_rubric": "Canon of supplication to the most holy Theotokos, in Tone VII:",
        "odes": {
          "1": {
            "irmos": {
              "text": "Having crushed battles with His arm * and drowned the mounted captains * let us sing unto Him, as to our God and Redeemer, * for He hath been glorified.",
              "tier": 2,
              "src": {
                "file": "7-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 1 irmos"
              }
            },
            "items": [
              {
                "text": "In song we offer unto thee as an adornment, gifts of thanksgiving and the divine hymn, “Rejoice now, O pure one!”, for thou hast given us joy in place of grief.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 1, item 1"
                },
                "label": "plain"
              },
              {
                "text": "We shall not remain silent concerning the grace of thy mercy and the might of thy protection, O most pure Virgin, for thou hast saved us from grievous misfortunes.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 1, item 2"
                },
                "label": "plain"
              },
              {
                "text": "Delivered from divers trials and tribulations by thy maternal prayers, O most pure one, together we all fervently chant to thee hymns of thanksgiving.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 1, item 3"
                },
                "label": "glory"
              },
              {
                "text": "Arrayed in the golden robes of the virtues and the grace of the Spirit, O most pure one, adorned as the Bride of the Father, thou wast truly shown to be the Mother of God.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 1, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "3": {
            "irmos": {
              "text": "O Lord and Savior, * Who in the beginning established the heavens * by Thine all-powerful Word, * and by the divine and all-accomplishing Spirit * hath granted them all their strength, * do Thou establish me on the unshakeable rock of Thy confession.",
              "tier": 2,
              "src": {
                "file": "7-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 3 irmos"
              }
            },
            "items": [
              {
                "text": "Let us earnestly offer cries of thanksgiving, honoring as our intercessor her who is the magnitude of divine joy and our gladness from the beginning.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 3, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Delivered by thee from misfortunes, and having received joy because of thee, O Mother unwedded, we all glorify thee as a good bestower of gifts and a praiseworthy helper.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 3, item 2"
                },
                "label": "plain"
              },
              {
                "text": "Receiving release from transgressions and temptations by thy divine prayer, O Mother of Christ God, with cries of thanksgiving we faithfully hymn thee as the source of good things.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 3, item 3"
                },
                "label": "glory"
              },
              {
                "text": "The Mother of Christ God is the wellspring of joy which ever poureth forth streams of immortality; and she herself saveth all, for she is for us the bestowal of life everlasting.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 3, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "4": {
            "irmos": {
              "text": "The heavens hath been covered O Christ God * through Thy dispensation, * by virtue of Thine ineffable wisdom, * O Lover of mankind.",
              "tier": 2,
              "src": {
                "file": "7-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 4 irmos"
              }
            },
            "items": [
              {
                "text": "In gladness we offer thee the fitting hymnody of joy, O pure Virgin, having been delivered from misfortunes by thy prayers.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 4, item 1"
                },
                "label": "plain"
              },
              {
                "text": "With the hands of our souls we thankfully raise hymnody unto thee, O pure Virgin, playing divine songs, having been delivered from great grief.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 4, item 2"
                },
                "label": "plain"
              },
              {
                "text": "The sinful passions have raised up many tribulations against us; but do thou deliver us by thy divine protection, O pure one.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 4, item 3"
                },
                "label": "glory"
              },
              {
                "text": "Truly blessed are those who honor thee, O most pure Theotokos, for through thee we have been delivered from sin and grief.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 4, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "5": {
            "irmos": {
              "text": "Night is bereft of light * for those without faith, O Christ, * but for the faithful there is enlightenment * in the sweetness of Thy words; * wherefore, I rise early unto Thee * and hymn Thy divinity.",
              "tier": 2,
              "src": {
                "file": "7-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 5 irmos"
              }
            },
            "items": [
              {
                "text": "O Virgin, thou hast given birth to Christ, the Destroyer of sin, by Whom the world hath been saved from perils and pain; wherefore, we who have been delivered from grief cry aloud unto thee: Rejoice!",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 5, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Beset by divers perils, by grief and sorrow and adverse circumstances, O pure Lady, we who were bereft of gladness have found thee to be our hope.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 5, item 2"
                },
                "label": "plain"
              },
              {
                "text": "As the preservation of salvation for us, thy servants, O pure one, thou dispellest dangers, keeping us unharmed; wherefore, we who have shared in thy manifold good things give thanks to thee with hymns.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 5, item 3"
                },
                "label": "glory"
              },
              {
                "text": "Delivered by thee from many sins, from sickness and pain, and from grievous illness, O most pure Lady, we give thanks unto thee; for thou art the sure hope of thy faithful servants.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 5, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "6": {
            "irmos": {
              "text": "Having fallen into the abyss of sin, O good One, * like Jonah from the midst of the whale I cry unto Thee: * Lead my life up from corruption, * and save me, O Lover of mankind.",
              "tier": 2,
              "src": {
                "file": "7-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 6 irmos"
              }
            },
            "items": [
              {
                "text": "Even the tongues of the angels are unable to fittingly sing thy praises, O pure one; but, acting now as servants, we offer thee the salutation of Gabriel.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 6, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Having fallen into the abyss of grief and evil circumstances because of our sins, we are delivered by thee from want and danger, O pure Virgin Theotokos.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 6, item 2"
                },
                "label": "plain"
              },
              {
                "text": "O pure one, the whole world is under debt to thank, praise and glorify thy grace with piety; for through thee we have been delivered from misfortunes and griefs.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 6, item 3"
                },
                "label": "glory"
              },
              {
                "text": "Day and night, openly and secretly, we who glorify thee with faith flee beneath thy protection, O most pure Virgin.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 6, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "7": {
            "irmos": {
              "text": "Cast into the fiery furnace, * the venerable children transformed the fire into dew, * crying aloud thus in hymnody: * Blessed art Thou O Lord, the God of our fathers!",
              "tier": 2,
              "src": {
                "file": "7-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 7 irmos"
              }
            },
            "items": [
              {
                "text": "We offer thee the joy of thanksgiving, O Mother of God, for, truly delivered by thee from every evil power, we cry out to thee together: Blessed art thou!",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 7, item 1"
                },
                "label": "plain"
              },
              {
                "text": "We have come to dwell in the gloom of evening, in the tears of lamentation, in the expectation of evils; yet, deified by thy godly protection, O Virgin, we have found the joy of the morning: for thou hast saved us.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 7, item 2"
                },
                "label": "plain"
              },
              {
                "text": "Having acquired thy protection before God as a divine refuge amid perils, persecutions and sins, O most pure one, we all flee to thee, and through thee obtain release.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 7, item 3"
                },
                "label": "glory"
              },
              {
                "text": "With mouth and spirit we proclaim the grace of thy prayer, O pure and glorious one; for because of thee we are all delivered from danger and tempest, from grievous sorrows and the sin of the passions.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 7, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "8": {
            "irmos": {
              "text": "Unto Him before whom the cherubim are in awe, * and the seraphim filled with wonder, * the Fashioner of the world: * O ye priests and servants and spirits of the righteous, * hymn ye, bless ye, and supremely exalt * throughout the ages.",
              "tier": 2,
              "src": {
                "file": "7-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 8 irmos"
              }
            },
            "items": [
              {
                "text": "As one delivered by thy prayers from the tempest of sin, from passions and perils, O good Theotokos, with a voice of thanksgiving we cry aloud unto thee: Rejoice!; for through thee have we passed from grief to joy.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 8, item 1"
                },
                "label": "plain"
              },
              {
                "text": "O good one, disdain not those who are beset by sickness and danger; but, hearkening unto our poor supplication, free us from great sorrows, that we may hymn thine intercession with faith, O pure one.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 8, item 2"
                },
                "label": "plain"
              },
              {
                "text": "O thou who hast caused our transgressions to be wiped away, raise us up now from griefs and perils, from human passions and unseemly temptations; and by thy divine supplications, O Theotokos, most gloriously deliver us therefrom.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 8, item 3"
                },
                "label": "glory"
              },
              {
                "text": "Truly Thy compassions ever rain down upon everyone, O Christ, through the grace and entreaties of her who gave birth to Thee; for through Thee do we Christians receive Thy mercy, O merciful Savior.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 8, item 4"
                },
                "label": "both_now"
              }
            ]
          },
          "9": {
            "irmos": {
              "text": "O ye faithful, with hymns let us magnify the Theotokos, * who in a manner transcending nature became a mother, * and is a virgin by nature, * she alone is blessed among women!",
              "tier": 2,
              "src": {
                "file": "7-1.pdf",
                "locus": "Saturday-night Compline canon, Ode 9 irmos"
              }
            },
            "items": [
              {
                "text": "Delivered from, divers temptations By thy prayers, O Theotokos, with the angel Gabriel we now offer unto thee joy and a cry of jubilation, as is meet.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 9, item 1"
                },
                "label": "plain"
              },
              {
                "text": "Joy and gladness and divine rejoicing have been multiplied upon us, O Virgin who knewest not a man; for, lo! we who sorely weep rejoice through thy prayers.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 9, item 2"
                },
                "label": "plain"
              },
              {
                "text": "With tongue and voice I shall offer unto thee a sacrifice of praise, O Virgin, and shall earnestly utter a hymn of thanksgiving unto thee that, praying to thee, I may be delivered by thee on the day of grief.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 9, item 3"
                },
                "label": "glory"
              },
              {
                "text": "We piously rejoice together in thy divine birthgiving, O most pure one; for thou hast poured forth joy upon us in the midst of perils and griefs. Wherefore, with thanksgiving we who faithfully praise thee chant hymnody unto thee.",
                "tier": 1,
                "src": {
                  "file": "7-1.pdf",
                  "locus": "Saturday-night Compline canon, Ode 9, item 4"
                },
                "label": "both_now"
              }
            ]
          }
        }
      },
      "after_ode6": {
        "rubric": "Lord, have mercy, (Thrice). Glory ..., Both now ..., Sessional Hymn, in Tone VII:",
        "sessional": {
          "text": "O Lord, we are Thy people and the sheep of Thy pasture. Like a Shepherd return us who have strayed, and gather us together who have been scattered by corruption. Have mercy upon Thy flock and take pity upon Thy people, through the prayers of the Theotokos, O Thou Who alone art sinless.",
          "tier": 1,
          "src": {
            "file": "7-1.pdf",
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
          "rubric": "After the 1st chanting of the Psalter, the Sessional Hymns of repentance, in Tone VII:",
          "spec_mel": null,
          "items": [
            {
              "text": "Possessing the therapy of repentance, O my soul, draw nigh, falling down and with sighing cry out: O Physician of souls and bodies, Who lovest mankind, free me from my many offenses, and number me with the harlot, the thief and the publican. Grant me forgiveness of mine iniquities, O God, and save me.",
              "tier": 1,
              "src": {
                "file": "7-2.pdf",
                "locus": "Monday Matins, sessional set 1, item 1"
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
              "text": "O Lord Who lovest mankind, Who washed away the denial of Peter with his tears, and forgave the publican’s offenses with his sighs: Have mercy upon me!",
              "tier": 1,
              "src": {
                "file": "7-2.pdf",
                "locus": "Monday Matins, sessional set 1, item 2"
              },
              "label": "plain"
            }
          ],
          "verses": [
            {
              "text": "O Lord, rebuke me not in Thine anger, * nor chasten me in Thy wrath,",
              "tier": 2,
              "src": {
                "file": "7-2.pdf",
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
            "text": "Thou hast surpassed the hosts of heaven, * O blessed Theotokos, * for thou hast been shown to be a divine temple, * in that thou hast given birth unto Christ, ** the Savior of our souls.",
            "tier": 2,
            "src": {
              "file": "7-2.pdf",
              "locus": "Monday Matins, sessional set 1 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, The Sessional Hymns of repentance, in Tone VII:",
          "spec_mel": null,
          "items": [
            {
              "text": "I have not emulated the repentance of the publican or acquired the tears of the harlot; for in my blindness I am at a loss how to make any such amendment. But in Thy tender compassion, O Christ God, save me, in that Thou lovest mankind.",
              "tier": 1,
              "src": {
                "file": "7-2.pdf",
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
              "text": "I am tempest-tossed on the abyss of life, O Lord, and the waves of mine iniquities drown me. But stretch forth Thy hand as Thou didst to Peter, and save me, O Lover of mankind.",
              "tier": 1,
              "src": {
                "file": "7-2.pdf",
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
            }
          ],
          "verses": [
            {
              "text": "O Lord, rebuke me not in Thine anger, * nor chasten me in Thy wrath.",
              "tier": 2,
              "src": {
                "file": "7-2.pdf",
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
              "text": "Wondrous is God in His saints, * the God of Israel To the martyrs: Pray ye, O saints, that we be granted remission of our sins, and that we be delivered from the evils we expect and from bitter death, we pray.",
              "tier": 2,
              "src": {
                "file": "7-2.pdf",
                "locus": "Monday Matins, sessional set 2 verse 2"
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
            "text": "O all-holy Virgin, * thou art greater in honor than the glorious cherubim. * For unable to endure the divine splendor, * while performing their ministry, * they veil their faces with their immaterial wings; * but with thine own eyes * hast thou gazed upon the Incarnate Word, * ceaselessly pray to Him on behalf of our souls.",
            "tier": 2,
            "src": {
              "file": "7-2.pdf",
              "locus": "Monday Matins, sessional set 2 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone VII:",
          "spec_mel": "The Fruit of thy womb",
          "items": [
            {
              "text": "The tempest of divers passions and mine offenses causeth me to sink into the depths of despair; but through the supplications of Thine angels save me, as Thou didst the prodigal son, O greatly merciful Jesus.",
              "tier": 1,
              "src": {
                "file": "7-2.pdf",
                "locus": "Monday Matins, sessional set 3, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "Prepare thyself in this thy life, O my soul, and have no doubt concerning the life to come; for then thou wilt have no-one to help thee, neither riches, power, friends nor princes. There will only be the disclosure of thy deeds, and God’s love for mankind.",
              "tier": 1,
              "src": {
                "file": "7-2.pdf",
                "locus": "Monday Matins, sessional set 3, item 2"
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
            "text": "O undefiled Virgin Theotokos, * with the heavenly hosts beseech thy Son, * that forgiveness of transgressions be granted before the end ** unto us who faithfully glorify thee.",
            "tier": 2,
            "src": {
              "file": "7-2.pdf",
              "locus": "Monday Matins, sessional set 3 closer"
            },
            "type": "theotokion"
          }
        }
      ],
      "canons": [
        {
          "title": "Canon of repentance to our Lord Jesus Christ, and to His holy martyrs, the composition of Joseph, in Tone VII",
          "heading_rubric": "Canon of repentance to our Lord Jesus Christ, and to His holy martyrs, the composition of Joseph, in Tone VII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Let us chant unto God, * Who alone helped Moses * lead Israel out of Egypt, * for He hath been glorified.",
                "tier": 2,
                "src": {
                  "file": "7-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Having fallen into the abyss of evils, I cry unto Thee: Reach forth Thy hand unto me, O Compassionate One, and save me, as Thou didst Peter, O Lover of mankind.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 1, item 1"
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
                  "text": "With a gesture of Thy mercy, O Christ, wash away the many offenses from me who repent, as Thou didst the harlot, that I may glorify Thee with faith.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "O Christ Who made Thy saints luminous in the crucible of many and varied wounds, by their prayer deliver me from the darkness of the passions.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "Purified by the endurance of wounds, the holy martyrs shone more brightly than the sun, and cast deception into darkness.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 1, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "O all-hymned Virgin, who art the intercessor of the faithful and the turning of the sinful toward God: Save me by thy prayers!",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                "text": "My heart hath been established in the Lord; * my horn hath been exalted in my God; * my mouth hath been enlarged over the enemy; * and I am gladdened in Thy salvation.",
                "tier": 2,
                "src": {
                  "file": "7-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "At night I have been beset by unseemly sins. Illumine me now with the light of repentance, O Bestower of light Who lovest mankind, that I may glorify Thee with love.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "All the paths I have followed in this life have brought me down into the crevasse of the passions. O Jesus, show unto me the divine paths of repentance!",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "Having finished your struggles with valor, O all-glorious martyrs, ye have been deemed worthy of crowns; and ye pray for all.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "Having endured myriads of pangs, O passion-bearers, ye have been deemed worthy of myriads of good things, having joined the myriads of the incorporeal hosts.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "Having given birth to God, the King of heaven, O Virgin, cast down the sin which reigneth within me, and taking pity, save me.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                "text": "The heavens hath been covered O Christ God * through Thy dispensation, * by virtue of Thine ineffable wisdom, * O Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "7-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 4 irmos"
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
                  "text": "O compassionate Word, Who desirest that all should be saved, save me who have transgressed Thy precepts, and destroy me not.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 4, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "I have submitted to the irrational passions, O Compassionate One, and made myself like unto the beasts. O Word of God, taking pity save me.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 4, item 2"
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
                  "text": "Bound and burned with fire, ye utterly consumed delusion, aflame with the zeal of piety, O martyrs.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "Ye were revealed to be a noetic paradise, O blessed ones, having in your midst the Tree of life: Christ, the Husbandman of all.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "O pure Virgin, full of the grace of God: Having filled my darkened mind with grace, free it utterly from ignorance.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                "text": "Rising at dawn O Word unto Thy glory and praise, * we unceasingly hymn the image of Thy Cross, * which Thou hast bestowed upon us * as a weapon of assistance.",
                "tier": 2,
                "src": {
                  "file": "7-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "I have wasted my life in slothfulness, and tremble before Thine inevitable tribunal, at which I, the passion fraught, must needs be judged. Have pity on me, O Lord!",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "O Word Who enlightened the eyes of the blind, open Thou the eyes of my soul, which have been cruelly darkened, that I may behold the light of Thy precepts.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "Confessing Christ with mighty thought, ye endured the wounds of every torment, O valiant spiritual athletes; wherefore, ye were blessed.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 5, item 3"
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
                  "text": "Navigating the threefold waves of all torments, ye reached the harbor of the kingdom on high, full of true serenity, O martyrs.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "God the Word, Who created all things by His will, became incarnate from thee in a manner transcending understanding, O Virgin; wherefore, entreat Him earnestly on behalf of all.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                "text": "Jonah cried out from the belly of Hades: * Lead my life up from corruption! * And we cry aloud unto Thee: * O almighty Savior, have mercy on us!",
                "tier": 2,
                "src": {
                  "file": "7-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "The abyss of transgressions hath encompassed me, and I have gone down into the depths of destruction. Lead me up, O Word, as once Thou didst raise up Jonah from corruption unto life.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "Threefold waves of evil thoughts bestorm me, but guide me to the harbor of true repentance, O Compassionate One, preserving my heart in tranquility.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "Defended by your faith, O holy martyrs, ye rejected the false allurements of the tyrants, and were not wounded by the darts of the enemy.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "Uplifted to God in love, ye hated worldly love, O martyrs, and were revealed to be friends of the Creator of all.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "We hymn thee, O all-hymned maiden who hast given birth unto the most holy Word, Whom all the hosts of heaven hymn with unceasing voices.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                "text": "Thou didst bedew the burning furnace, O Savior, * and didst save the children who chanted, proclaiming: * Blessed art Thou throughout the ages, * O Lord God of our fathers!",
                "tier": 2,
                "src": {
                  "file": "7-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "Make thou a sacrifice of praise unto God, O my soul. Hasten thou and repent while the commerce of life is still underway, that I may now purchase goodly gifts.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "The severance of death is nigh at hand, O my soul; bring forth worthy fruits, lest thou be cast into the fire of Gehenna like the barren tree, and wail inconsolably.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "Having quenched the furnace of delusion with torrents of blood, the holy martyrs cried aloud like the children: O God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "Having mingled with the Light ye desired, O martyrs, ye became children of the Light. And ye enlighten all who are in darkness, dispelling the gloom of delusion.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "The bush which was unconsumed prefigured thee, O pure Virgin, for thou hast given birth unto the radiant Fire. Wherefore, I cry unto thee: Burn up my material passions!",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                "text": "Unconsumed by fire, the bush on Sinai spake unto Moses, * slow of speech and stammering, * and revealed God unto him; * and zeal for God showed forth the three children who chanted hymns * to be unvanquished by the fire. * O all ye His works, praise ye the Lord * and supremely exalt Him throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "7-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "I received the Word like a radiant lamp-stand, but, wretch that I am, I have inclined toward the irrational passions and ever walk in the darkness of evil.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 8, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "The Lord is nigh, as we believe. Take care, O my soul, and be not despondent. Be thou vigilant, and cry out in watchfulness: O Compassionate Lover of mankind, save me!",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "Having tasted of divine sweetness, ye endured the bitterness of pain, and now enjoy the divine communion of the Word, O martyrs.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "Ye have entered into divine peace and received the good things ye hoped for, O all-praised martyrs; wherefore, we bless you as is meet.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 8, item 4"
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
                  "text": "Humanity hath been freed from the curse by thy birthgiving; for thou hast given birth to the most blessed God Who adorneth all things with blessings.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 8, item 5"
                  },
                  "label": "theotokion"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "O ye faithful, with hymns let us magnify the Theotokos, * who in a manner transcending nature became a mother, * and is a virgin by nature, * she alone is blessed among women!",
                "tier": 2,
                "src": {
                  "file": "7-2.pdf",
                  "locus": "Monday Matins, canon 1, Ode 9 irmos"
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
                  "text": "Lo! the judgment approacheth, and possessed of condemnation for my deeds, I am cast into despondency. O Christ God, righteous Judge, condemn me not!",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Like the faithful Canaanite woman I cry to Thee: Have mercy upon me! And straighten me as Thou didst the cripple of old, that I may walk aright in Thy ways, O Lover of mankind.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 9, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Ye stripped away the garments of all evil, O spiritual athletes, and, clad in grievous torments, ye won for yourselves the vesture of glory.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 1, Ode 9, item 3"
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
                  "text": "The divine land of the living, the city of Sion on high, received you, the firstborn who are illumined by the beauties of your struggles, O spiritual athletes.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "With the enlightening rays of the Word Who shone forth from thee, O pure Virgin, illumine me who am covered with the darkness of sins and passions.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
          "composer": "Joseph"
        },
        {
          "title": "Another canon, of the holy incorporeal angels, the acrostic whereof is “I offer the seventh praise to the incorporeal ones,” The composition of Theophanes, in Tone VII",
          "heading_rubric": "Another canon, of the holy incorporeal angels, the acrostic whereof is “I offer the seventh praise to the incorporeal ones,” The composition of Theophanes, in Tone VII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "To God Who overthrew Pharaoh in the Red Sea * let us chant a hymn of victory, * for He hath been glorified.",
                "tier": 2,
                "src": {
                  "file": "7-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Having illumined my mind with Thy light, O Christ infinite in power, inspire me to hymn Thine angels, in that Thou art omnipotent.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 1, item 1"
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
                  "text": "Possessed of the mighty radiance which originates with the wellspring of the Godhead, the choirs of heaven honor Christ with hymns.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 1, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "We, the faithful, know thee to be adorned with divine splendors, O pure One, and we all clearly cry out to thee: Rejoice!",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                "text": "The Church of Christ hath been confirmed by faith; * wherefore she crieth out unceasingly in hymns, chanting: * Holy art Thou, O Lord! * and my spirit doth hymn Thee!",
                "tier": 2,
                "src": {
                  "file": "7-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "As mediators of the manifestation of the Divinity, O ye choirs of angels, ye unceasingly cry out immaterially: “Holy art Thou, O Lord!”, saving our souls.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 3, item 1"
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
                  "text": "Emitting divine effulgence upon one another with love of the law, ye chant in goodly ranks unto Christ: Holy art Thou, O Lord, Who alone art greatly merciful!",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "Let us piously emulate the life of the secondary luminaries of the primal Radiance, chanting unto Christ: “Holy art Thou, O Lord!”, saving our souls.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 3, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The Word and Lover of mankind, Who by His will brought all things out of non-existence, in His tender compassion took flesh from thee, O Virgin, becoming a man",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 3, item 4"
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
                "text": "I heard report of Thee * and became filled with fear; * I understood Thy works * and became filled with awe, O Lord.",
                "tier": 2,
                "src": {
                  "file": "7-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "O ye choirs of angels who stand before Christ as chosen ministers: Entreat Him to heal the wounds of my soul.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "The armies of incorporeal beings, standing with reverence round about Thy throne, O Master, clearly ever cry aloud: Glory to Thy power, O Lord!",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 4, item 2"
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
                  "text": "The ranks of angels were amazed, beholding Thee, O Christ, living on earth in the body, with mortal men.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "O all-hymned and most pure Mother of God, who ineffably hast given birth unto God: We beseech thee: Pray that we be saved.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                "text": "I rise at dawn to Thee, * and I cry unto Thee O compassionate Lord: * do Thou illumine my soul, darkened by sins, * with the light of Thy commandments, and guide it!",
                "tier": 2,
                "src": {
                  "file": "7-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Illumined by the immaterial effulgences, with most sacred and eloquent mouths the seraphim hymn the beginningless and supremely divine Godhead.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 5, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "Not daring to gaze upon the divine Radiance, the cherubim, the manifestations of the wisdom of God, cover themselves with their sacred and abundantly luminous wings.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 5, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Delighting noetically in the divine, exceedingly rich and beauteous effulgence, the glorious thrones are supra-naturally shown to be beholders of ineffable things.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 5, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "In thy most pure and all-holy womb the supremely divine Mind joined Himself to that which is human, O pure one, uniting Himself hypostatically, without commingling or change.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 5, item 4"
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
                  "file": "7-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "The dominions are ever shown to be illumined like the youths with the effulgences of the Godhead, hymning His ineffable glory.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 6, item 1"
                  },
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "Gazing with love upon Him Who is omnipotent in power, the divine hosts manifestly remain mighty in strength.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 6, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "A descendant of the royal tribe, O Virgin, thou hast given birth in a manner transcending nature unto the Word, the King of all, and wast truly perfected as a virgin.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                "text": "Cast into the fiery furnace, * the venerable children transformed the fire into dew, * crying aloud thus in hymnody: * Blessed art Thou O Lord, the God of our fathers!",
                "tier": 2,
                "src": {
                  "file": "7-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "Manifestly surrounding Thy throne, O Christ, the choirs of heaven clearly send up glory noetically, crying aloud: O God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "Immaterially revolving around Thee, the one Godhead, with zeal derived there from, the principalities cry out with unceasing magnifications: O God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "O Birthgiver of God, without seed thou hast given birth to the one Christ, the God of our fathers: a single Hypostasis in two natures, Who executes His awesome dispensation.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                "text": "The King of glory, who is alone without beginning, * Before Whom all the powers of heaven stand in awe * and the hosts of angels tremble: * O ye priests praise, and ye people * supremely exalt Him throughout the ages.",
                "tier": 2,
                "src": {
                  "file": "7-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Having set all your desire upon God, O archangels, ye ever delight in His radiance, entreat Christ, the King of all, that those who hymn you may be delivered from perils.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 8, item 1"
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
                  "text": "As most honored intelligences free of all passionate material attachments, O angels, save all who with you lovingly exalt Christ throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "Having ineffably received the unapproachable Light within thy womb, O Virgin Theotokos, thou hast enlightened those in the darkness of life, that they may piously glorify Christ Who ineffably issued forth from thee.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 8, item 3"
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
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 8, item 4"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "O all-hymned one, * who art higher in eminence than the heavens: * having seedlessly conceived the beginningless Word * thou hast given birth to the incarnate God for all mankind. * Wherefore, we all magnify thee.",
                "tier": 2,
                "src": {
                  "file": "7-2.pdf",
                  "locus": "Monday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "All the choirs of the angels, delighting in the radiance of the effulgence of the Godhead, unceasingly hymn our most glorious God, ever glorifying Him.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
                    "locus": "Monday Matins, canon 2, Ode 9, item 1"
                  },
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "O cherubim and seraphim, powers, principalities, angels, archangels, authorities, thrones and dominions: Earnestly entreat Christ, that I be delivered from the besetting passions.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
                  "text": "As a mother now possessed of boldness before thy Son, O all- holy Theotokos, deliver those who hymn thee with love from grievous transgressions, ailments and tribulations, that we may all ever magnify thee.",
                  "tier": 1,
                  "src": {
                    "file": "7-2.pdf",
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
          "acrostic": "I offer the seventh praise to the incorporeal ones",
          "composer": "Theophanes"
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of repentance, in Tone VII:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of repentance, in Tone VII:",
        "items": [
          {
            "text": "Cut me not down, a sinner, like the barren fig-tree, O Savior, but grant that I may tarry for many years, watering my soul with tears of repentance, that I may bring thee the fruit of almsgiving.",
            "tier": 1,
            "src": {
              "file": "7-2.pdf",
              "locus": "Monday Matins, aposticha item 1"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "As Thou art the Sun of righteousness, enlighten the hearts of those who sing unto Thee: Glory to Thee, O Lord",
            "tier": 1,
            "src": {
              "file": "7-2.pdf",
              "locus": "Monday Matins, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Celebrating the memorial of Thy holy spiritual athletes, we chant unto Thee: Glory to Thee, O Lord!",
            "tier": 1,
            "src": {
              "file": "7-2.pdf",
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
        "text": "Through the prayers of the Theotokos, * grant peace to the life of us who cry unto Thee: ** O merciful Lord, glory be to Thee!",
        "tier": 2,
        "src": {
          "file": "7-2.pdf",
          "locus": "Monday Matins, aposticha Glory/Both-now closer"
        },
        "type": "theotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "tue": {
      "sessionals": [
        {
          "rubric": "After the 1st chanting of the Psalter, the Sessional Hymns of repentance, in Tone VII:",
          "spec_mel": null,
          "items": [
            {
              "text": "Possessing the therapy of repentance, O my soul, draw nigh, falling down and with sighing saying: O Physician of souls and bodies, Who lovest mankind, free me from my many offenses, and number me with the harlot, the thief and the publican. Grant me forgiveness of mine iniquities, O God, and save me.",
              "tier": 1,
              "src": {
                "file": "7-3.pdf",
                "locus": "Tuesday Matins, sessional set 1, item 1"
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
              "text": "O Lord and Lover of mankind, Who washed away the denial of Peter with his tears, and forgave the publican’s offenses with his sighs: Have mercy upon me!",
              "tier": 1,
              "src": {
                "file": "7-3.pdf",
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
                "file": "7-3.pdf",
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
            "text": "Rejoice, thou who didst contain within thy womb * Him Whom the heavens cannot contain! * Rejoice, thou preaching of the prophets * through whom Emmanuel hath shone forth! ** Rejoice, O Mother of Christ God!",
            "tier": 2,
            "src": {
              "file": "7-3.pdf",
              "locus": "Tuesday Matins, sessional set 1 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, The Sessional Hymns of repentance, in Tone VII:",
          "spec_mel": null,
          "items": [
            {
              "text": "I have not emulated the repentance of the publican or acquired the tears of the harlot; for in my blindness I am at a loss how to make any such amendment. But in Thy tender compassion, O Christ God, save me, in that Thou lovest mankind.",
              "tier": 1,
              "src": {
                "file": "7-3.pdf",
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
              "text": "O Savior, Who accepted the tears of the harlot and Peter, and justified the publican who sighed from the depths of his heart: Have pity on me who am in despair over my deeds, and save me!",
              "tier": 1,
              "src": {
                "file": "7-3.pdf",
                "locus": "Tuesday Matins, sessional set 2, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "Thy saints, who struggled on earth, trampled the enemy underfoot and set at naught the falsehood of idolatry, O Lord; wherefore, they received crowns from Thee, the God of mercy and Master, and the Lover of mankind, Who granteth the world great mercy.",
              "tier": 1,
              "src": {
                "file": "7-3.pdf",
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
                "file": "7-3.pdf",
                "locus": "Tuesday Matins, sessional set 2 verse 1"
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
            "text": "Thou hast surpassed the hosts of heaven, * O blessed Theotokos, * for thou hast been shown to be a divine temple, * in that thou hast given birth unto Christ, ** the Savior of our souls.",
            "tier": 2,
            "src": {
              "file": "7-3.pdf",
              "locus": "Tuesday Matins, sessional set 2 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone VII:",
          "spec_mel": "The Fruit of thy womb",
          "items": [
            {
              "text": "I fall down before Thee in compunction like the harlot, O Lover of mankind, even though I am wholly at a loss for tears. Take pity on me as Thou didst on her, through the prayers of the Forerunner, O Merciful One, and save me.",
              "tier": 1,
              "src": {
                "file": "7-3.pdf",
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
              "text": "As Thou art good, O Lord and Savior, take pity, and wash away the defilement of my soul with the hyssop of Thy mercy; and having cleansed me of the defilement of the mire of the passions, have mercy on me, O Master. Save Thy creature by the supplications of Thy Forerunner, O Thou Who art greatly merciful!",
              "tier": 1,
              "src": {
                "file": "7-3.pdf",
                "locus": "Tuesday Matins, sessional set 3, item 2"
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
            "text": "Thou art the fervent intercessor and helper of Christians, O all-hymned Theotokos; wherefore, with the Forerunner entreat thy Son, that we may find mercy.",
            "tier": 1,
            "src": {
              "file": "7-3.pdf",
              "locus": "Tuesday Matins, sessional set 3 closer"
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
          "title": "Canon of repentance to our Lord Jesus Christ, and to His holy martyrs, the composition of Joseph, in Tone VII",
          "heading_rubric": "Canon of repentance to our Lord Jesus Christ, and to His holy martyrs, the composition of Joseph, in Tone VII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Having crushed battles with His arm * and drowned the mounted captains * let us sing unto Him, as to our God and Redeemer, * for He hath been glorified.",
                "tier": 2,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "I ever commit sins, and have no fear of Thee, O Christ, Who seekest my repentance with longsuffering. Grant me the intention to convert, and disdain me not, in that Thou art good.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Wretch that I am, I never cease to heap up sins upon sins, O Christ, O only Good and Sinless One. Take pity and save me.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Boldly did the valiant spiritual athletes call to each other: This contest is full of struggles. Let us run, for Christ, the Judge of the contest standeth before us, crowning those who vanquish the enemy.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 1, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Ye put off the body through many and varied wounds, and clothed yourselves in the vesture of incorruption, O wise martyrs; and ye became children of the Father of compassions.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "O Virgin Birthgiver of God, heal thou my soul, which hath been afflicted by many sins, that with cries of thanksgiving I may ever earnestly glorify thee",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                "text": "Having established the heavens * and made firm the foundation of the earth upon many waters: * establish Thou my mind in Thy will, * O Lover of mankind,",
                "tier": 2,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 3 irmos"
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
                  "text": "O Christ, only Savior, Who overlooketh our sins in Thy great love for mankind, overlook my many evils, that I may glorify Thee, the supremely good One.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 3, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "I submit to the desires of my flesh, unconscionably ignoring Thy wishes, O Christ; and I fear the fiery retribution, O Word, do Thou deliver me from such.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "While suffering bodily pangs, the spiritual athletes looked forward to a life of ease without pain; and having joyously received it, they ever ease the pains of the faithful.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 3, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "With the rays of your struggles ye dispersed the cruel night of delusion, O passion-bearers, and have passed over to the unwaning Light, ever removing the darkness of our pangs.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "The prophet foresaw thee as the portal of God, through which He alone passed, as is known, O most pure Virgin. Wherefore, I pray thee: Do thou thyself open the doors of repentance unto me.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                "text": "Assured of Thy coming in the flesh, O Christ, * the prophet Habakkuk cried aloud: * Glory to Thy power O Lord.",
                "tier": 2,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "I have wandered from the path which leadeth me to life, and have fallen into the pit of evils. O Savior, disdain me not.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Send down upon me streams of tears, O Master, Word of God, that I may wash away the mire of my many offenses.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Led like lambs to the slaughter, O martyrs, ye were deemed worthy of glory and slew the warlike enemy.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 4, item 3"
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
                  "text": "Thy streams of your blood which was shed prepared all to receive torrents of delight, O all-famed and divine martyrs.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "The Lord became incarnate from thy pure blood, granting repentance to all mankind through thy mediation, O maiden.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                "text": "O Thou Who hast dispelled the night of the passions, * illumine me with the noetic light, * driving away the primordial darkness of the abyss, * and shining forth upon the world the first-formed light, * O Creator of all.",
                "tier": 2,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 5 irmos"
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
                  "text": "When Thou shalt judge the earth, O Word, deliver me from Thy righteous wrath, and show me to be a temple of Thy goodness, cleansed of my many offenses through repentance, O only Creator of all.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 5, item 1"
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
                  "text": "I have become blinded in mind by the evil gloom of the passions, and my heart hath become senseless, and I know not what I do. Turn me back to Thee, O Christ, and grant me the repentance which purifies from sin.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Having like youths run the race full of sweat, O spiritual athletes, ye attained unto splendor in heaven, receiving the honors of victory from the hand of the Bestower of life; wherefore, ye now rejoice.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "With the mighty sinews of your sacred pangs ye truly choked the serpent, the author of evil, O spiritual athletes, and have been deemed worthy of the delight of paradise. Wherefore, we praise you.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "O thou who art the radiant cloud of the Sun, shine upon me the noetic light of true repentance, and dispel the darkness of wicked thoughts, that with faith I may hymn thee as the salvation of the faithful.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                "text": "Having fallen into the abyss of sin, O good One, * like Jonah from the midst of the whale I cry unto Thee: * Lead my life up from corruption, * and save me, O Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 6 irmos"
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
                  "text": "I have been revealed to be a new prodigal, having lived vilely on earth, and capitulated before the assault of the passions; but turn me back, O Christ my God, and save me, in that Thou lovest mankind.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Groan, O my soul, that thou mayest be delivered from groaning; shed tears, that in the next world thou mayest not taste of ceaseless tears and pain, which will be of no benefit.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Ye were revealed to be like stones manifestly set in the crown of the Church of Christ, and became its magnificent adornment, O honored great- martyrs.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Having received worthy ends in God, O most wise ones, ye have inherited never-ending rewards. Wherefore, pray ye, O martyrs, that we may end our life in repentance.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 6, item 4"
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
                  "text": "Lift me up out of the depths of the slothfulness of countless evils, O good one who hast given birth to the Abyss of loving-kindness, and grant me a wellspring of tears, O Ever-virgin.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 6, item 5"
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
                "text": "The fire in the furnace * neither touched nor disturbed Thy children, O Savior. * Then the three, as with a single mouth, * hymned and blessed Thee, saying; * Blessed art Thou, O God of our fathers!",
                "tier": 2,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 7 irmos"
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
                  "text": "I have fallen into the passion of dishonor, O Savior, and have made myself like unto the beasts. And, darkened, I no longer see Thee waiting with great patience, O Word. Grant me time for repentance, and save me.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "I have reached the end of my life in slothfulness, doing what I ought not to do; and lo! Unaware I now approach the gates of Hades. Disdain me not, O Christ Who alone art good.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "O most wise ones, ye died, desiring everlasting life for the world; and having utterly slain the enemy, ye took wing to the heavens, ever praying for us, O spiritual athletes.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 7, item 3"
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
                  "text": "Released from the demands of the body, O martyrs, ye broke asunder the bonds of delusion, and with mighty love bound men’s souls to Christ Who was bound by the flesh, and loosed us from the curse.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "The prophet foresaw thee as a new scroll whereon the Word of the Father was written; wherefore, I beseech thee, O pure one: Pray that I may be entered in the book of the living, erasing the record of my many evils.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 7, item 5"
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
                "text": "Him Who is unceasingly glorified * by the angels in the highest, * O Ye heavens of heavens, earth and ye mountains, * ye hills and depths of the sea, * and all ye races of mankind, * bless ye with hymns as the Fashioner, * Redeemer, and God!",
                "tier": 2,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Enjoying harmful pleasures in overabundance, I, the senseless one, have madly surpassed every other sinner. As Thou hast an infinite abundance of tender compassion, grant me cleansing of my transgressions.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 8, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "The Bridegroom is at the door! Light thy lamp, O my soul, filling it with the oil of loving-kindness and every good work. Before the door is closed, make haste to enter with Christ in ineffable joy.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Undaunted by tortures, the valiant spiritual athletes cried out: “Behold, now is the acceptable time! Let us all stand with steadfast mind, and with a little pain, let us acquire the life which is devoid of pain, and the sweetness which groweth not old!”",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 8, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Ever irrigated with divine waters, O passion-bearers of the Savior, ye water the whole earth with the emulation of your struggles, forever rendering it fruitful in the virtues, for Christ.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "O Theotokos, renowned intercession and hope of Christians: On the dread day intercede for me, who have greatly transgressed, and deliver me from terrible Gehenna, numbering me among the sheep at the right hand of thy Son.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                "text": "Who from among mankind is able to describe * the seedless conception of thy birthgiving? * Who from among mortals will not marvel * at the birth of thine incorrupt Offspring? * Wherefore, we, the tribes of earth, * magnify thee, O Theotokos.",
                "tier": 2,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Tuesday Matins, canon 1, Ode 9 irmos"
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
                  "text": "That we may inherit the good things to come, let us weep, let us sigh, let us entreat Christ, O ye faithful, while we have time for repentance and prayer.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Like the Canaanite woman I cry to Thee: Have mercy on me, O Christ, as of old Thou didst set aright the prostrate woman, O Jesus, and save me who am drowning in sins, as Thou didst Peter O Savior.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 9, item 2"
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
                  "text": "Afflicted by tribulations, imprisonment and torments, O martyred passion-bearers, ye passed over to the broad plain of consolation, and deliver us from oppression and transgressions.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 9, item 3"
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
                  "text": "While the earth hath now covered your bodies, heaven holdeth your holy souls; and standing ever before the throne of glory, they rejoice with the angels.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 9, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "The Lord Who clothed Himself in me issued forth from thee, O most pure one; wherefore, beseech Him to illumine me with a vesture of light, having now stripped from me the most grievous rags of the passions, O Virgin.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 1, Ode 9, item 5"
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
          "composer": "Joseph"
        },
        {
          "title": "Another canon, of the holy prophet and forerunner, the composition of Joseph, in Tone VII",
          "heading_rubric": "Another canon, of the holy prophet and forerunner, the composition of Joseph, in Tone VII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "At thy command O Lord, * the nature of the waters that beforehand flowed freely was transformed * and became like the earth; * whereby Israel having traversed them dryshod * chanted unto Thee a hymn of victory.",
                "tier": 2,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "The beauty of the Church, thou wast shown to be adorned, O blessed Forerunner. By thy prayers ever save it mighty and unshaken from every tempest of the heretics.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Thou didst offer thyself to the Creator as a sacred, unblemished sacrifice, O divine Forerunner, and wast slaughtered like an innocent lamb. Wherefore, I pray thee with faith: Deliver me from all the malice of the enemy.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Heal thou the diseases of our souls and bodies, O ever-glorious Forerunner, ever beseeching the Word, Who in His tender compassion hath taken away all infirmities and sicknesses.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "O all-holy one, thou hast given birth to the unapproachable Word Who shareth flesh with us hypostatically. Him do thou ever entreat, that He save all who ever bless thee with faith.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                "text": "O Lord and Savior, * Who in the beginning established the heavens * by Thine all-powerful Word, * and by the divine and all-accomplishing Spirit * hath granted them all their strength, * do Thou establish me on the unshakeable rock of Thy confession.",
                "tier": 2,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "With lightning-flashes of solar radiance dost thou illumine all creation; for thou wast shown to be a brilliant star of the noetic Sun, O Forerunner. Him do thou earnestly entreat, that He drive the darkness of the passions away from our pained hearts.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Standing between the law and grace, O divine Forerunner, manifestly showing the cessation of the one and the pure dawning of the other unto all: the perfect restoration of those who have waxed old through sins.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Baptist of Christ, we cry aloud: Deliver us from, the attacks of the demons, the temptations of life and all tribulation, entreating the supremely good One, that on the day of judgment we may be freed from torments.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 3, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "O blessed and pure Lady, who hast ineffably given birth unto God: With His divine Baptist unceasingly pray for us who fall into the perils of life and are beset by sins.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                "text": "Having never left the bosom of the Father, * Thou didst descend to earth O Christ God, * I have heard of the mystery of Thy dispensation, * and I have glorified Thee, * O only Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Having cast down the horde of the adversary and prevailed over them with brilliance, O Baptist, By thy prayers cast down sin which reigneth in me, I pray thee.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Revealed unto us to be a noetic lampstand, O blessed one, thou didst point out Jesus, the great Sun of righteousness. Pray thou that the hearts of all may be illumined by Him.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Conceived and born in iniquities, I live in slothfulness, and fear the torments to come. Praying to God, rescue me from them, O Baptist.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Bring to God supplications for us who honor thee, O Baptist, that He may deliver us from every grievous circumstance and from the harm wrought by the demons, we pray,",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "In many images, the shadows of the law revealed thee who hast given birth unto God. Him do thou entreat, O all-immaculate one, that He deliver me from iniquity and the carnal passions.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                "text": "Having risen at dawn out of the night, * I entreat Thee O Lord my God: * grant me the forgiveness of my sins, * and guide my steps to the light * of thy commandments, I pray Thee.",
                "tier": 2,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "The voice of one crying in the wilderness, O most wise one, thou didst cause thoughts of the acknowledgment of the God to spring forth; wherefore, I pray thee: Restore my soul which hath become a desert through all manner of transgressions.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Thou wast shown to be the pure vessel of the Master, O divine prophet. By thy prayers deliver me from impure acts, and entreat the Benefactor, that I may receive everlasting honors.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Iniquities have entered into me through the door of slothfulness. O blessed Forerunner, make me better through examples of repentance, that I may diligently tread the paths of the Lord.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Mortify the earthly understanding of my flesh, O Theotokos who hast given birth unto Life, Who by death hath utterly destroyed death in His divine power, O pure and most holy one.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 5, item 4"
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
                "text": "Jonah cried out from the belly of Hades: * Lead my life up from corruption! * And we cry aloud unto Thee: * O almighty Savior, have mercy on us!",
                "tier": 2,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Manifestly aglow with rays of the virtues, and shining with splendid martyrdom, thou dost illumine all creation, O close friend of the noetic Dayspring.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Thou didst spring forth from a barren and elderly woman, O blessed one; wherefore, I cry out to thee: With the beauty of repentance and thy supplications renew me who have grown old through many sins.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "O divine prophet, lampstand of the never-waning Light, by thy prayers light the lamp of my heart, and cause me to share in the divine Light.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 6, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "The Word descended into thy womb like rain. Him do thou beseech, O most pure Virgin, that He dry up the flow of my countless evils, I pray thee.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                "text": "Of old the Children were shown to be * bedewed in the fiery furnace, * chanting and praising the one God saying: * 'Supremely exalted and exceedingly glorified is the God of our Fathers'.",
                "tier": 2,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "By thy prayers grant me showers of tears, O Forerunner who immersed the Abyss of tender compassion in the river’s streams, and wholly cleanse me of defilement of flesh and spirit.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Offer prayer to our God, Who is over all, that, in that He is full of loving- kindness, He have mercy upon me who have sinned and cannot recover.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 7, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "O barren soul, hasten thou to repent, lest the righteous judgment cut thee down at the root like the barren fig-tree; but cry unto the Master; O God, having cleansed me, save me!",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 7, item 3"
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
                  "text": "Possessed of a soul slain by evil crimes, I pray thee, O Lady who slew Hades by thy birthgiving: Enliven me with models of repentance.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                "text": "The King of glory, who is alone without beginning, * Before Whom all the powers of heaven stand in awe * and the hosts of angels tremble: * O ye priests praise, and ye people * supremely exalt Him throughout the ages.",
                "tier": 2,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Cease thou never to entreat the only Redeemer, Who gave release to those who were bound and ever glorify thee, O prophet, that I, who have been bound, may be released from my many transgressions",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "I have been wounded by the sword of pleasures, and cry out to thee in pain of heart: Heal thou the pangs of my soul, entreating Christ, the only Physician of souls and bodies.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 8, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "O Forerunner who baptized the Word with thine own hand, cease not to unceasingly entreat Him, that from the hand of sin He may deliver me who have sinned greatly and am brought low and condemned.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Because I have foolishly buried in the earth the talant entrusted to me by God, I await bitter retribution. Rescue me from such by thy prayers, O Baptist, I beseech thee with faith.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Thou didst remain unconsumed when thou didst take the unbearable Fire into thy womb, O Virgin. Wherefore, rescue me from the unquenchable fire, bedewing me now with most beauteous examples of true repentance.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 8, item 6"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "Conceiving without knowing corruption, * and lending thy flesh to the Word, * O Mother unwedded and Virgin Theotokos, * thou art the vessel of the uncircumscribable One, * and dwelling place of thy Creator, * thee do we magnify.",
                "tier": 2,
                "src": {
                  "file": "7-3.pdf",
                  "locus": "Tuesday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou didst spring forth from a sacred root, O prophet, wholly uprooting the roots of evil, whereby I am choked and have become useless. O blessed one, set me aright, that I may put forth the fruits of divine repentance.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
                    "locus": "Tuesday Matins, canon 2, Ode 9, item 1"
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
                  "text": "The Church knoweth thee to be a most comely swallow and nightingale, O great Forerunner; for thou didst sing the hymn of repentance to souls laid waste and grown hard through evils. Wherefore, we bless thee with faith.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "Unto all thou didst show the ways leading to the gates of salvation, O glorious Forerunner. Strengthen me to walk them, for I am drawn into all the trackless wastes of life and, beguiled, have committed evil.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "The awesome day is nigh at hand, and bearing deeds worthy of condemnation, I lament: Lord, O Lord, Who alone art merciful: through the prayers of Thy Fore- runner and all the saints, show me then to be uncondemned.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
                  "text": "O thou who art full of grace, who hast given birth to the divine Light, illumine my soul, which hath been darkened by transgression, I pray, and show me to be free of everlasting darkness, that I may magnify and glorify thee, the ever-blessed one.",
                  "tier": 1,
                  "src": {
                    "file": "7-3.pdf",
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
          "composer": "Joseph"
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of repentance, in Tone VII:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of repentance, in Tone VII:",
        "items": [
          {
            "text": "Cut me not down, a sinner, like the barren fig-tree, O Savior, but grant that I may tarry for many years, watering my soul with tears of repentance, that I may bring thee the fruit of almsgiving.",
            "tier": 1,
            "src": {
              "file": "7-3.pdf",
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
            "text": "As Thou art the Sun of righteousness, enlighten the hearts of those who sing unto Thee: Glory be to Thee, O Lord!",
            "tier": 1,
            "src": {
              "file": "7-3.pdf",
              "locus": "Tuesday Matins, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Rejoicing amid the tribunal of the violators of the law, Thy passion-bearers cried aloud: Glory be to Thee, O Lord!",
            "tier": 1,
            "src": {
              "file": "7-3.pdf",
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
        "text": "From the Virgin Thou didst spring forth as light, O Christ, illumining the race of mankind. Glory be to Thee, O Lord!",
        "tier": 1,
        "src": {
          "file": "7-3.pdf",
          "locus": "Tuesday Matins, aposticha Glory/Both-now closer"
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
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "wed": {
      "sessionals": [
        {
          "rubric": "After the 1st chanting of the Psalter, The Sessional Hymns of the holy and precious Cross, in Tone VII:",
          "spec_mel": null,
          "items": [
            {
              "text": "The Church crieth out to Thee, O Christ God, bowing down before Thee in the pine, cedar and cypress: Grant victories to the faithful for the sake of the Theotokos, and have mercy on us!",
              "tier": 1,
              "src": {
                "file": "7-4.pdf",
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
              "text": "O Christ God, Who for my sake endured nailing to the Cross, accept my ready praise, and save me.",
              "tier": 1,
              "src": {
                "file": "7-4.pdf",
                "locus": "Wednesday Matins, sessional set 1, item 2"
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
              "text": "Exalt ye the Lord our God, * and worship the footstool of His feet, for He is holy.",
              "tier": 2,
              "src": {
                "file": "7-4.pdf",
                "locus": "Wednesday Matins, sessional set 1 verse 1"
              }
            }
          ],
          "closer": {
            "text": "O Virgin Theotokos * unceasingly entreat Christ our God, * who wast crucified for us * and arose again destroying the dominion of death, ** that He save our souls.",
            "tier": 2,
            "src": {
              "file": "7-4.pdf",
              "locus": "Wednesday Matins, sessional set 1 closer"
            },
            "type": "stavrotheotokion",
            "sourceLabel": "Stavrotheotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, The Sessional Hymns of the holy and precious Cross, in Tone VII:",
          "spec_mel": null,
          "items": [
            {
              "text": "O Christ, Thou didst show the tree of Thy Cross to be more radiant than fire and more powerful than flame, for it consumeth our sins and illumineth the hearts of those who hymn Thy voluntary crucifixion. O Christ God, glory be to Thee!",
              "tier": 1,
              "src": {
                "file": "7-4.pdf",
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
              "text": "O Christ God, Who hast dominion over the incorporeal hosts and knowest the slothfulness of my soul, save me by Thy Cross, in that Thou lovest mankind.",
              "tier": 1,
              "src": {
                "file": "7-4.pdf",
                "locus": "Wednesday Matins, sessional set 2, item 2"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "Rejoice, O ye righteous! Let the heavens be glad! For having struggled on earth, the martyrs trampled the enemy underfoot. Let the Church triumphant leap up, celebrating Christ God, the one Judge of the contest and Awarder of trophies, Who granteth the world great mercy",
              "tier": 1,
              "src": {
                "file": "7-4.pdf",
                "locus": "Wednesday Matins, sessional set 2, item 3"
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
                "file": "7-4.pdf",
                "locus": "Wednesday Matins, sessional set 2 verse 1"
              }
            }
          ],
          "closer": {
            "text": "When the Virgin beheld Thee crucified, O Lord, she cried out to Thee weeping: “I hymn Thine ineffable longsuffering, O my Son, and Thine utter and divine condescension toward mankind!”",
            "tier": 1,
            "src": {
              "file": "7-4.pdf",
              "locus": "Wednesday Matins, sessional set 2 closer"
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
          }
        },
        {
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone VII:",
          "spec_mel": null,
          "items": [
            {
              "text": "When Thou wast crucified, O Christ, the enemy was bound and death slain, and the souls held fast in the nether regions of Hades were loosed from their bonds.",
              "tier": 1,
              "src": {
                "file": "7-4.pdf",
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
              "text": "O Thou Who for our sake willingly accepted crucifixion, crush the enemy who refuses to recognize Thee as the true God, and save us.",
              "tier": 1,
              "src": {
                "file": "7-4.pdf",
                "locus": "Wednesday Matins, sessional set 3, item 2"
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
            "text": "Ever preserved by the Cross of thy Son, O Virgin, we elude the attacks of the demons; wherefore, hymning thee as is meet, we glorify thee, O all-hymned Theotokos.",
            "tier": 1,
            "src": {
              "file": "7-4.pdf",
              "locus": "Wednesday Matins, sessional set 3 closer"
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
          }
        }
      ],
      "canons": [
        {
          "title": "Canon to the precious and life-creating Cross of the Lord, the acrostic whereof is: “When the Cross was planted it uprooted deception,” the composition of Joseph, in Tone VII",
          "heading_rubric": "Canon to the precious and life-creating Cross of the Lord, the acrostic whereof is: “When the Cross was planted it uprooted deception,” the composition of Joseph, in Tone VII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "At thy command O Lord, * the nature of the waters that beforehand flowed freely was transformed * and became like the earth; * whereby Israel having traversed them dryshod * chanted unto Thee a hymn of victory.",
                "tier": 2,
                "src": {
                  "file": "7-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Mocked, the Master endured crucifixion, removing the mockeries of mankind in that He is the Lover of mankind. He is pierced by a spear, thereby slaying the adverse foe.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "Wielding Thy Cross like a bow, O merciful Savior, with the darts of the nails Thou didst wound the adversary, and heal us who of old were wounded by him.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "By the blood of the saints the abominable defilements of blood offered to the idols were abolished; and the whole earth is sanctified, ever blessing the martyrs with praises.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "The hosts of heaven lifted their voice in song, beholding those on earth doing battle against incorporeal foes. Wherefore, the Judge of the contest hath crowned them victors.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "“The record of Adam was torn asunder when Thou wast pierced by the spear, O my Son,” the most pure Lady cried out; “Wherefore, I hymn Thy suffering, which poureth forth dispassion upon all, O Master.”",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 1, item 5"
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
                "text": "O Lord and Savior, * Who in the beginning established the heavens * by Thine all-powerful Word, * and by the divine and all-accomplishing Spirit * hath granted them all their strength, * do Thou establish me on the unshakeable rock of Thy confession.",
                "tier": 2,
                "src": {
                  "file": "7-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "O Jesus, Who stretched out the heaven as it were a curtain, Thou didst stretch out Thy hands upon the Tree, healing the intemperance of Adam, in that Thou art merciful, snatching all from the hands of the lying enemy.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "With thorns the iniquitous men crowned Thee, O Christ our King, Who hast crowned men with glory, uprooted the thorns of Adam’s disobedience, and planted the plant of understanding for all.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "Mortal in essence, therein ye deigned to teach immortality, O most wise ones; wherefore, wounds and tribulations, persecutions and beatings, and the severing of your members, did ye all endure, rejoicing, O martyrs.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 3, item 3"
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
                  "text": "With steadfast intent ye brought low the lying enemy who boasted that he will destroy all things, O ye spiritual athletes who humbled yourselves for Christ; and having arrayed yourselves against him, ye were exalted with divine might.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "O Mother and ewe-lamb, beholding the Lamb Who is slaughtered of His own will going to His Passion, thou sheddest fountains of tears, saying: “What is this sacred thing, O my Child? How dost Thou die, intending to bring life to those who have died?”",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 3, item 5"
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
                "text": "Having never left the bosom of the Father, * Thou didst descend to earth O Christ God, * I have heard of the mystery of Thy dispensation, * and I have glorified Thee, * O only Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "7-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Having appeared on earth as a man, Thou didst make mankind heavenly; and suspended upon the Tree, O Master, Thou didst exalt with Thyself all who hymn Thy sufferings.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "For mortals Thou didst die, O Life, and for the unjust Thou didst endure violent suffering, O my righteous Jesus. We hymn Thine infinite tender compassion, O Long-suffering One.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 4, item 2"
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
                  "text": "The onslaught of wild beasts, the raging of the fire, the severing of hands and feet, the mutilation of your members, and all other tortures which win divine delight, did ye endure, O martyrs.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "Crying out to Christ, the God of all, from the extremities of your bodies, O spiritual athletes, ye were heard, and have now been set high upon the rock of divine perfection.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "Make entreaty for us to Him Who became incarnate from thee, O Theotokos, that we who glorify His sufferings may find help in time of peril.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                "text": "Having risen at dawn out of the night, * I entreat Thee O Lord my God: * grant me the forgiveness of my sins, * and guide my steps to the light * of thy commandments, I pray Thee.",
                "tier": 2,
                "src": {
                  "file": "7-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Accepting crucifixion for the removal of evils, O Word of God, Thou didst taste gall, abolishing the bitter harm wrought by the pleasing fruit. Glory to Thy great loving-kindness!",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "By Thy suspension upon the Cross, Thou didst cause the whole earth to quake by Thy divine might and healed the abasement thereof, O Master; thereby making wavering hearts steadfast in the knowledge of Thee.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "Belial everywhere spread his evil nets, yet he did not ensnare the martyrs of Christ; for, receiving wings of fire, they reached the divine mansions.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 5, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Deified by God with the hand of His abundance, O passion- bearers, ye were in nowise daunted by painful tortures, since for you it was as though others were suffering; and ye remained thus, O most wise ones.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 5, item 4"
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
                  "text": "When Thou wast hanging upon the Cross, the pure Virgin, wracked with lamentation, cried out: “With what eyes shall I look upon the burning Eye Who driest up all the depths, O my Son?”",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                "text": "Sailing in the tempest of the cares of life, * together with the ship I have been submerged by sins, * and cast to the soul-corrupting beast, * wherefore like Jonah I cry to Thee, O Christ: * Lead me up from the deadly abyss.",
                "tier": 2,
                "src": {
                  "file": "7-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "O only Redeemer, Thou didst pay Thy saving Blood as our price, redeeming us who were held captive, and bringing us to Thy Father, slaying the tyrant by the Cross, O supremely good Christ.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "Of old, through intemperance I suffered a grievous fall, but Christ, lifted up upon the Cross, His arms stretched out, exalted me, who had fallen, and manifestly healed all my wounds.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 6, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "In nowise sleeping the slumber of delusion, O martyrs, ye lulled to sleep every assault of the tormentors; and having fallen into the excellent sleep of the righteous, O blessed ones, ye became ever-watchful advocates for all.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 6, item 3"
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
                  "text": "Established firmly upon the rock of Christ’s divine precepts, O most glorious martyrs, ye remained unmoved by the wiles of the enemy; and with divine wisdom ye trampled him underfoot, divinely hastening to God.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 6, item 4"
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
                  "text": "O Theotokos, thou hast given birth to a young Child, Who is known to exist timelessly with the Father, before all ages, and Who by His Cross hath renewed mankind, which had grown old through sins by the counsel of the author of evil.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                "text": "Of old the Children were shown to be * bedewed in the fiery furnace, * chanting and praising the one God saying: * 'Supremely exalted and exceedingly glorified is the God of our Fathers'.",
                "tier": 2,
                "src": {
                  "file": "7-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "The life of our first parents, devoid of pain, did I find when thou wast suspended upon the Cross and willingly died, slaying the serpent, O greatly merciful Jesus Christ.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "We have all been delivered from the curse of the law; for the Bestower of the law was lifted up upon the Cross, pouring forth ever-flowing blessing, grace, mercy, and the abolition of corruption.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 7, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Approaching tortures with willing haste, the martyrs voluntarily emulated Him Who suffered; and, crowned by Him, they now join chorus with the angels.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 7, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Giving your bodies over to various torments, O all-famed martyrs, ye drowned the incorporeal foe in the streams of your blood, pouring forth fountains of healing.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "“How can I not weep, beholding Thee upon the Cross, O my most sweet Child? How can I not lament Thee Who sufferest unjustly, O most righteous Judge?”, the Virgin Mother exclaimed.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 7, item 5"
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
                "text": "Unconsumed by fire, the bush on Sinai spake unto Moses, * slow of speech and stammering, * and revealed God unto him; * and zeal for God showed forth the three children who chanted hymns * to be unvanquished by the fire. * O all ye His works, praise ye the Lord * and supremely exalt Him throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "7-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "The blood and water which flowed from Thy side renewed the whole world and poured forth incorruption, O Savior, and brought abominable sacrifices and the shedding of corrupt blood to an end. Wherefore, all of us, Thy works, hymn Thee as Lord and supremely exalt Thee throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "Thou wast ringed about with a crown of thorns, wast given gall and vinegar to eat, wast spat upon, beaten and lifted up upon the Cross, Thy hands pierced with nails. And I, saved thereby, cry out to Thee: Hymn the Lord, all ye works of the Lord, and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 8, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Most splendidly enriched from the inexhaustible treasuries of truth, O spiritual athletes, ye spat upon all the poverty of the idols and showed yourselves to be enrichers of the poor, crying aloud: Hymn the Lord, all ye works of the Lord, and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "Having refused to obey the unlawful edicts of the tyrants, O martyrs, ye were cast into a fiery furnace like the youths, and therein found the dew of God which cooled you, as ye cried: Hymn the Lord, all ye works of the Lord, and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "The ark of the law prefigured thee of old, O pure one, containing not the tablets of the law, but Christ, the Bestower of the law, Whom iniquitous men nailed to the Cross, and Who saveth us who cry: Hymn the Lord, all ye works of the Lord, and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                "text": "O Mother of God and Virgin, * thou hast given birth and yet remained a virgin, * not in accordance with nature, * but by the condescension of God; * wherefore, we ever magnify thee, * who alone wast deemed worthy * of the wonders of God.",
                "tier": 2,
                "src": {
                  "file": "7-4.pdf",
                  "locus": "Wednesday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "The might of the enemy in nowise failed until Thou didst cry out mightily on the Tree to Thine beginningless Father, and called Thy scattered sheep to the knowledge of Thee, O Christ, mighty Master.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Thou wast willingly lifted up upon the Cross like a lamb, O Master, snatching Thy reason-endowed sheep from the wolf, O Savior, and enclosing those who hymn thee in the fold of Thy precepts.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 9, item 2"
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
                  "text": "Shown to be emulators of Thy sufferings, the right glorious passion-bearers endured many and varied methods of torture, O Lover of mankind; wherefore, they received crowns of glory and have been deemed worthy of Thy kingdom, O Christ.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 9, item 3"
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
                  "text": "The solar rays of grace shine round about, illumining the faithful on the right laudable feast of the honored passion-bearers; wherefore, ever celebrating this, we are delivered from the darkness of grievous transgressions.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 1, Ode 9, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Thy Son, the noetic Light, shone forth on the Cross O most pure one, rebuking the princes of darkness; and darkening the light of the sun, illumining the fullness of the faithful, O most immaculate one.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
          },
          "acrostic": "When the Cross was planted it uprooted deception",
          "composer": "Joseph"
        },
        {
          "title": "Another canon, of the most holy Theotokos. The composition of Joseph, in Tone VII",
          "heading_rubric": "Another canon, of the most holy Theotokos. The composition of Joseph, in Tone VII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "O Theotokos, preserve thy people, who hymn thy mighty works with love, and deliver them from harm; for thou art the intercessor, guide and confirmation of all, O pure one.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 1, item 1"
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
                  "text": "O Virgin who gavest rise to the Water of immortality, grant us the waters of healing, washing away all the deadly passions of our souls and bodies.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "O Lady, full of the grace of God, thou wast shown to be the honored habitation of Him Who honored the nature of our forefather; wherefore, we beseech thee, O pure one: Deliver us from all dishonor.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 1, item 3"
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
                  "text": "Having given birth to the Sun of righteousness for the world, O all- immaculate maiden, drive the darkness away from those who hymn thee with faith in this thy splendid and holy temple.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 1, item 4"
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
                  "file": "7-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "In this thy divine temple, wherein thou hast shown forth a well-spring of miracles, O pure one, grant the salvific petitions of thy servants; and deliver them from torment, ever pouring forth thy divine visitation.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "Having given birth to Christ, the Abyss of mercies and Bestower of all good things, in a manner transcending cause and all telling, O pure one, thou hast truly shown this thy divine temple to be the cleansing of all the passions, through thy divine overshadowing.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "Blessed is the Fruit of thy womb, O Virgin Theotokos, joy of all; for thou hast truly given birth to the joy and gladness of the whole world, Him Who is the Lover of mankind, driving away sinful grief, O Bride of God.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 3, item 3"
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
                  "text": "O Virgin, thou noetic coffer, who hast truly given birth to the incorrupt Manna: Come among us at this hour; and of all defilement rid us who in a pure manner call thee blessed.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "7-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Of old, Habbakuk proclaimed thee the mountain overshadowed by the virtues, protecting all from the burning of the malice of our ancient foe, O most pure Lady Theotokos.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "Offer supplication unto the Lord Who became incarnate from thy most pure blood, O Lady, that He save from all harm thy people, who bless thee as is meet.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "This thy temple, full of the grace of God, hath become a source of healing for our souls and bodies, O most glorious one; for it causeth every disease to cease and washeth away the passions of those who with faith call thee blessed.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "By thy fervent and honorable visitation, O Virgin Lady, save all who with love flee to thine aid, and visit and grant their petitions which lead unto life.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                "text": "Night is bereft of light * for those without faith, O Christ, * but for the faithful there is enlightenment * in the sweetness of Thy words; * wherefore, I rise early unto Thee * and hymn Thy divinity.",
                "tier": 2,
                "src": {
                  "file": "7-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 5 irmos"
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
                  "text": "Keeping vigil, we are weighed down by the sleep of sin, O pure one; yet in thy most honored temple take pity on us by thy vigilant divine supplication, O Bride of God.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 5, item 1"
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
                  "text": "O pure one, grant a helping hand unto all of us who have recourse unto thee; wash away the defilement of all evil, and By thy prayers cleanse us of illness.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "O most pure Theotokos, who conceived God in thy virginal womb and hast given birth to Him: From all everlasting condemnation deliver those who hymn thee.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "The souls of those who come to thy temple with faith, having grown old through sins, are renewed, O most immaculate one, and they all glorify thee as is meet.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                "text": "Jonah cried out from the belly of Hades: * Lead my life up from corruption! * And we cry aloud unto Thee: * O almighty Savior, have mercy on us!",
                "tier": 2,
                "src": {
                  "file": "7-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou alone hast poured forth the Water of salvation upon us, O only pure one, drying up the burning of delusions; and bedewing the true understanding of thy servants.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "O animate city of our God, free thy flock from godless barbarians, earthquake and want, and from every temptation.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "With the application of thy prayers cure the sores of our souls, O Theotokos, that we may hymn thee with divine voices.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "O Virgin maiden, who by thy most pure birthgiving released Eve from pain: Release me from the pain of the passions of soul and body.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "file": "7-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "O all-hymned Virgin, who hast given birth to the divine Fire, burn up the tinder of the passions of those who hymn thee, and illumine all with the light of repentance, we pray.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "O incorrupt maiden, deliver us from corruption; O animate palace of God, show us to be temples of the divine Spirit, that we may unceasingly hymn thee with faith in thy temple.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 7, item 2"
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
                  "text": "Thou pourest forth streams of healings upon all, for thou hast given birth to the Source of life, O Theotokos. By thy fervent supplication cleanse this thy flock of defilement, O Bride of God.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 7, item 3"
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
                  "text": "All the divine prophets, beholding the figures of thy divine birthgiving, chanted with joy, crying: O all-hymned God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                "text": "The King of glory, who is alone without beginning, * Before Whom all the powers of heaven stand in awe * and the hosts of angels tremble: * O ye priests praise, and ye people * supremely exalt Him throughout the ages.",
                "tier": 2,
                "src": {
                  "file": "7-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Pouring forth an abyss of miracles upon the world, O all-hymned Virgin, dry up the stench of our passions, and pour forth the dew of remission upon us who honor thee with undoubting faith.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "The Sun of righteousness, Who shone forth from thee upon those sitting in the darkness of the passions, made thee light, O all-hymned and pure one; wherefore, we hymn thee as is meet, O Theotokos.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 8, item 2"
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
                  "text": "As a most splendid temple of God, O pure one, show thy servants, assembled in thy holy temple, to be habitations of the Spirit; for we glorify thee throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "With the light of thy birthgiving thou hast wondrously enlightened the whole world, O Theotokos, bearing in thine arms the true God Who ever enlightens those who cry with faith: Hymn the Lord, all ye works of the Lord, and supremely exalt Him throughout all ages!",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 8, item 5"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "Conceiving without knowing corruption, * and lending thy flesh to the Word, * O Mother unwedded and Virgin Theotokos, * thou art the vessel of the uncircumscribable One, * and dwelling place of thy Creator, * thee do we magnify.",
                "tier": 2,
                "src": {
                  "file": "7-4.pdf",
                  "locus": "Wednesday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou wast shown to be more sacred than the hosts on high, for thou hast given birth to the Creator of all, O holy Theotokos, Mother who knewest not a man; wherefore, with the angels we glorify thee, unceasingly hymning thy mighty works.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                  "text": "Enlightened by the rays of the divine Spirit, the most sacred prophet of old beheld thee as a mountain overshadowed, O Virgin Theotokos; wherefore, we on earth bless thee with the angels, as thou didst foretell, O thou who art blessed of God.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 9, item 2"
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
                  "text": "Thou wast shown to be the jar holding the divine Manna, and wast seen to be a ladder leading mortals up from earth, O Virgin Theotokos who alone knewest not wedlock; wherefore, we, the faithful, having assembled, glorify thee as is meet, O divinely joyous one.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                },
                {
                  "text": "O maiden who wast the dwelling-place of the Godhead, bathing me with tears, cleanse me, who have become a den of soul-destroying thieves and a place where every iniquity is wrought; and show me to be an abode of the divine Spirit.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
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
                },
                {
                  "text": "O Virgin Lady, who alone hast given birth to the pre-eternal Light: Deliver me from everlasting darkness, and enlighten my soul which hath become wholly darkened through the passions of life, that I may ever glorify thee with love.",
                  "tier": 1,
                  "src": {
                    "file": "7-4.pdf",
                    "locus": "Wednesday Matins, canon 2, Ode 9, item 5"
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
          },
          "composer": "Joseph"
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of the precious Cross, in Tone VII:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of the precious Cross, in Tone VII:",
        "items": [
          {
            "text": "O Master Who lovest mankind, Who art the Bestower of life, by Thy Cross Thou didst redeem the whole world. O Lord, glory be to Thee!",
            "tier": 1,
            "src": {
              "file": "7-4.pdf",
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
            "text": "The Vine of life was nailed to the Cross, and the nations embraced paradise with the thief. This is the glory of the Church! These are the riches of the kingdom! O Lord Who suffered for our sake, glory be to Thee!",
            "tier": 1,
            "src": {
              "file": "7-4.pdf",
              "locus": "Wednesday Matins, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "The all-praised passion-bearers of Christ were shown to be beacons for the world, crying aloud: Glory be to Thee, O Lord!",
            "tier": 1,
            "src": {
              "file": "7-4.pdf",
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
        "verses": [
          {
            "text": "We were filled in the morning with Thy mercy, O Lord, and we rejoiced and were glad. In all our days, let us be glad for the days wherein Thou didst humble us, for the years wherein we saw evils. And look upon Thy servants, and upon Thy works, * and do Thou guide their sons.",
            "tier": 2,
            "src": {
              "file": "7-4.pdf",
              "locus": "Wednesday Matins aposticha verse 1 (byte-matches shared; stored with its per-tone verse-2 partner)"
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
            "text": "And let the brightness of the Lord our God be upon us, and the works of our hands do Thou guide aright upon us, yea, the work of our hands do Thou guide aright.",
            "tier": 1,
            "src": {
              "file": "7-4.pdf",
              "locus": "Wednesday Matins aposticha verse 2 — DROPS the * pointing mark that shared/2-4 prints (\"upon us, yea,\" for \"upon us, * yea,\"); §5 per-tone, Wednesday only"
            }
          }
        ]
      },
      "aposticha_theotokion": {
        "text": "When the all-immaculate one beheld Thee willingly nailed to the Tree, weeping, she hymned Thy might.",
        "tier": 1,
        "src": {
          "file": "7-4.pdf",
          "locus": "Wednesday Matins, aposticha Glory/Both-now closer"
        },
        "type": "stavrotheotokion",
        "sourceLabel": "Stavrotheotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "thu": {
      "sessionals": [
        {
          "rubric": "After the 1st chanting of the Psalter, The Sessional Hymns of the holy apostles, in Tone VII:",
          "spec_mel": null,
          "items": [
            {
              "text": "O Word, Thou didst reveal Thine apostles to be husbandmen in Thy garden, who cut down the idols; wherefore, having preached thee, the Master, among the nations, they were magnified in piety.",
              "tier": 1,
              "src": {
                "file": "7-5.pdf",
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
              "text": "Having no love for earthly glory, O glorious ones, and preaching the God of heaven to all peoples, ye brought them to Him..",
              "tier": 1,
              "src": {
                "file": "7-5.pdf",
                "locus": "Thursday Matins, sessional set 1, item 2"
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
              "text": "Their sound hath gone forth into all the earth, * and their words unto the ends of the world.",
              "tier": 2,
              "src": {
                "file": "7-5.pdf",
                "locus": "Thursday Matins, sessional set 1 verse 1"
              }
            }
          ],
          "closer": {
            "text": "Even though creation recognized thee as a mother, yet the Creator hath shown thee to be a virgin; for thou hast given birth in the flesh unto Christ God, Who saveth our souls.",
            "tier": 1,
            "src": {
              "file": "7-5.pdf",
              "locus": "Thursday Matins, sessional set 1 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone VII:",
          "spec_mel": null,
          "items": [
            {
              "text": "As is meet, with hymns let us honor the most wise apostles of Christ God as nurturers of our salvation; for, having driven away the ungodliness of delusion, they have saved the world, as those who beheld the Word with their own eyes, His servants, friends and brethren.",
              "tier": 1,
              "src": {
                "file": "7-5.pdf",
                "locus": "Thursday Matins, sessional set 2, item 1"
              },
              "label": "plain"
            },
            {
              "text": "The prophets preached, the apostles taught, the martyrs confessed and we have believed that Thou art Christ, the Son of God, the Redeemer of the world.",
              "tier": 1,
              "src": {
                "file": "7-5.pdf",
                "locus": "Thursday Matins, sessional set 2, item 2"
              },
              "label": "plain"
            },
            {
              "text": "Having armed themselves with the power of Thy Cross, Thy martyrs, O Lord, vanquished the enemy and put the falsehood of the idols to shame; wherefore, hymning Thee with the angels, they cry out a hymn of victory, glorifying Thee, O Christ. Through their prayers grant our souls cleansing and great mercy.",
              "tier": 1,
              "src": {
                "file": "7-5.pdf",
                "locus": "Thursday Matins, sessional set 2, item 3"
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
              "text": "The heavens declare the glory of God, * and the firmament proclaimeth the work of His hands.",
              "tier": 2,
              "src": {
                "file": "7-5.pdf",
                "locus": "Thursday Matins, sessional set 2 verse 1"
              }
            }
          ],
          "closer": {
            "text": "Rejoice, thou through whom the Word became immutably flesh and dwelt among us! Rejoice, O pure one, joy of the apostles and martyrs and salvation of us, the faithful! Rejoice, O Mother of Christ God!",
            "tier": 1,
            "src": {
              "file": "7-5.pdf",
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
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone VII:",
          "spec_mel": "The Fruit of thy womb",
          "items": [
            {
              "text": "O all-praised disciples of the Lord, who like beacons illumined the whole world: Pray ye that light may shine upon me who am in the darkness of sins and the passions.",
              "tier": 1,
              "src": {
                "file": "7-5.pdf",
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
              "text": "As lamps unto the world, O apostles of the Lord, upon the faithful ye ever greatly shine forth the Word Who driveth away the gloom of delusion; wherefore, ye enlighten the nations with baptism, as ever honored preachers of the Trinity.",
              "tier": 1,
              "src": {
                "file": "7-5.pdf",
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
            "text": "O Virgin, joy of the world, with the apostles unceasingly entreat thy Son, that He grant the forgiveness of our sins and correction of life.",
            "tier": 1,
            "src": {
              "file": "7-5.pdf",
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
          "title": "Canon of the holy, glorious and all-praised apostles, the composition of Theophanes, in Tone VII",
          "heading_rubric": "Canon of the holy, glorious and all-praised apostles, the composition of Theophanes, in Tone VII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "At thy command O Lord, * the nature of the waters that beforehand flowed freely was transformed * and became like the earth; * whereby Israel having traversed them dryshod * chanted unto Thee a hymn of victory.",
                "tier": 2,
                "src": {
                  "file": "7-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Godlike in your striving for the divine, ye shattered the gods of the ungodly, and ye have moved all who came to believe in God to divine love, O most honored ones.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "As the salt of the whole earth, O divinely eloquent apostles of the Lord, halt the corruption of my heart, and cure it, for it hath lost its savor.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "When the most righteous Judge of all will come again, He will sit down with you, O godly apostles; deliver us then from all condemnation.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "O most pure Virgin Theotokos, pray thou with the incorporeal angels, the prophets, martyrs and apostles, that we may receive remission of sins and rich mercy.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                "text": "O Lord and Savior, * Who in the beginning established the heavens * by Thine all-powerful Word, * and by the divine and all-accomplishing Spirit * hath granted them all their strength, * do Thou establish me on the unshakeable rock of Thy confession.",
                "tier": 2,
                "src": {
                  "file": "7-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Like the heavens ye proclaim the glory of God, as saith the prophet, O wise disciples of God, manifestly making clear His divine incarnation and sufferings, whereby deliver ye all from the passions, death and corruption.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Ye were shown to be sharp arrows of Christ the mighty, O wise disciples of the Lord, wherefore deliver me from the arrows of the evil one, and heal my heart, which hath been grievously wounded by the sword of sin.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "O disciples of Christ, who laid bare all the wiles of the enemy and clothed him in shame, make haste to array me in a divine vesture, for I have been cruelly deceived and stripped naked of the divine raiment.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "O God, Who created the hosts of heaven by Thy word and bestowed grace upon the prophets, disciples and all the martyrs: By their supplications and those of Thy most pure Mother save and have pity on all, in that Thou art full of loving-kindness.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                "text": "Having never left the bosom of the Father, * Thou didst descend to earth O Christ God, * I have heard of the mystery of Thy dispensation, * and I have glorified Thee, * O only Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "7-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "The Son Who is co-enthroned with the Father, and Who became incarnate as a man on earth, chose you as disciples, to proclaim His divinity unto all the nations.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 4, item 1"
                  },
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "I have been wounded in heart, wretch that I am, having made myself subject to the authors of all the passions in the sickness of my mind. Wherefore, I pray: Heal me, O apostles, physicians of the infirm.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "Deliver us from the passions, O glorious apostles, from grievous misfortunes and tribulations, from all perils and most painful torments.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "Pray to God, O chosen Mother, with the sacred apostles, martyrs and prophets, that we be delivered from misfortunes, tribulations and transgressions.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                "text": "Having risen at dawn out of the night, * I entreat Thee O Lord my God: * grant me the forgiveness of my sins, * and guide my steps to the light * of thy commandments, I pray Thee.",
                "tier": 2,
                "src": {
                  "file": "7-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "O Lord my God, Who of old bestowed peace upon Thine apostles: By their prayers grant peace and forgiveness of sins unto all.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "O Lord my God, Who knowest the offenses of my soul and the uncorrected ways of my heart: Freely taking pity, save me through the supplications of the apostles.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "O Lord my God, in Thy great goodness Thou didst save the thief and the sinful harlot. Through the prayers of Thine apostles take pity on me, the prodigal.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "O Lord my God, Who wast born from the unwedded Virgin: By her supplications and those of Thine apostles grant me cleansing offenses, and deliver me from the torment which is to come.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                "text": "Sailing in the tempest of the cares of life, * together with the ship I have been submerged by sins, * and cast to the soul-corrupting beast, * wherefore like Jonah I cry to Thee, O Christ: * Lead me up from the deadly abyss.",
                "tier": 2,
                "src": {
                  "file": "7-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "As godly disciples of Wisdom Itself, the apostles showed the wisdom of the pagans to be foolishness and destroyed the malice of their sages; and with the light of piety the most wise ones illumined those lost in ignorance.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 6, item 1"
                  },
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "O Christ Who of old didst wash away the transgression of Peter with his tears, by his supplications wash away the countless offenses of my soul, in Thine immeasurable tender compassion and great goodness.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "O Redeemer, Who of old took pity on the penitent Ninevites: In Thy loving- kindness, as is Thy wont, have mercy on me for the sake of Thine apostles, and let not the multitude of my transgressions bring torments upon me.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "O thou who hast given birth to the Light, enlighten my soul, which hath been darkened by the passions, and with the apostles, prophets and martyrs entreat Him to deliver me from all sin, all harm, and all the malice of the enemy.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                "text": "Of old the Children were shown to be * bedewed in the fiery furnace, * chanting and praising the one God saying: * 'Supremely exalted and exceedingly glorified is the God of our Fathers'.",
                "tier": 2,
                "src": {
                  "file": "7-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "With the dew of divine preaching ye quenched the furnace of bitter ungodliness of old, O glorious apostles, crying aloud: Supremely exalted and exceedingly glorified is the God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 7, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Rescue me from grievous sin, from torment in Hades and pain in Gehenna, O Christ, and save me, I pray Thee, by the supplications of Thine apostles, O Word.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 7, item 2"
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
                  "text": "O disciples of Christ, who drew men forth from the depths of ignorance with the net of the Word, save me who am tempest-tossed and drowning amid countless transgressions.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "With the angels, martyrs and apostles entreat thy Son and Lord, O all-immaculate one, that thy servants may be saved from all perils and tribulations.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                "text": "Unconsumed by fire, the bush on Sinai spake unto Moses, * slow of speech and stammering, * and revealed God unto him; * and zeal for God showed forth the three children who chanted hymns * to be unvanquished by the fire. * O all ye His works, praise ye the Lord * and supremely exalt Him throughout all ages.",
                "tier": 2,
                "src": {
                  "file": "7-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Like coals set aflame by the noetic Fire, the disciples of Christ burned up all the falsehood of idolatry as if they were reeds, and have enlightened the souls of the faithful, who cry aloud: Hymn the Lord, all ye works of the Lord, and supremely exalt Him throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 8, item 1"
                  },
                  "label": "plain",
                  "repeat": 2
                },
                {
                  "text": "Enlighten now my soul which hath been darkened by sin, and my heart which through the passions hath been enshrouded in the gloom of dishonor, O apostles of Christ who partake of everlasting light, that I may unceasingly cry aloud: Hymn the Lord, all ye works of the Lord, and supremely exalt Him throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "By the supplications of Thy sacred disciples heal my soul, which hath been wounded by the venomous fangs of the prideful one, O Thou Who accepted wounds in the flesh; and save those who chant: Hymn the Lord, all ye works of the Lord, and supremely exalt Him throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "When thou hast given birth to the Fire without being consumed, thou wast preserved, O most pure Virgin; wherefore, with the incorporeal choirs and the apostles entreat Him to Whom thou hast given birth, that they may be saved who chant with faith: Hymn the Lord, all ye works of the Lord, and supremely exalt Him throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                "text": "Conceiving without knowing corruption, * and lending thy flesh to the Word, * O Mother unwedded and Virgin Theotokos, * thou art the vessel of the uncircumscribable One, * and dwelling place of thy Creator, * thee do we magnify.",
                "tier": 2,
                "src": {
                  "file": "7-5.pdf",
                  "locus": "Thursday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "The Word of God the Father revealed you to be sons of the light and the day, for having loved Him, O divine apostles, ye were shown to be beacons for the whole world, dispellers of demons, guides for the lost and firm foundations for the Church.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
                    "locus": "Thursday Matins, canon 1, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "O ploughs of the Word, who bore His most easy yoke upon your necks, cultivate now my soul, which hath grown hard through the passions, and render it fertile with the seed of repentance.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "Through the divine Spirit the earth is sanctified by the divine relics of the right glorious apostles; and the heavenly Church of the firstborn is unceasingly made splendid by their spirits. For their sake, O Savior, have pity upon us all.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "O abundantly Compassionate and greatly Merciful One, the Virgin who gave birth to Thee, and the divine incorporeal choirs, the apostles and prophets, the martyrs and holy hierarchs, and the souls of the righteous, entreat Thee to not inflict upon me the fire prepared for me.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
          "title": "Another canon, to the holy hierarch Nicholas, the wonderworker, the acrostic whereof is “Accept thou our seventh entreaty, O Nicholas,” the composition of Joseph, in Tone VII",
          "heading_rubric": "Another canon, to the holy hierarch Nicholas, the wonderworker, the acrostic whereof is “Accept thou our seventh entreaty, O Nicholas,” the composition of Joseph, in Tone VII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Let us chant unto God, * Who alone helped Moses * lead Israel out of Egypt, * for He hath been glorified.",
                "tier": 2,
                "src": {
                  "file": "7-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Having lived a glorious life on earth, O Nicholas, cause those who glorify thee to share in the glory on high.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "Sailing the deep of evils, we are buffeted by the waves of life’s temptations, O most blessed ones, from which do thou save us.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "Grant me now a generous helping hand, O father Nicholas, and deliver me from enemies, visible and invisible.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "He Who created the immaterial ministers was born from thee in His ineffable mercy, O Theotokos, and was seen of men.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                "text": "Having established the heavens * and made firm the foundation of the earth upon many waters: * establish Thou my mind in Thy will, * O Lover of mankind,",
                "tier": 2,
                "src": {
                  "file": "7-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 3 irmos"
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
                  "text": "Offering up supplication for the whole world, save us from all need and countless tribulations, O holy Nicholas.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "As thou didst deliver from prison those inescapably bound therein, break asunder the bonds of mine evil deeds, and By thy prayers appease God, O holy Nicholas.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "Night and day we all call thee our helper, O holy Nicholas; bear thou our prayers unto the Lord, ever preserving us.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "O most pure one, the tongs which received the burning divine Coal in thy womb without in any wise being consumed: burn up our transgressions.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                "text": "The heavens hath been covered O Christ God * through Thy dispensation, * by virtue of Thine ineffable wisdom, * O Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "7-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 4 irmos"
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
                  "text": "With thy wisdom blackening the mind of Arius, which was darkened by heresy, thou didst enlighten those deceived by him, O Nicholas.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "Treat my many sores with thy God-pleasing prayers, O divinely blessed father Nicholas, and enlighten my heart.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 4, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Having mortified the uprisings of the passions, O most blessed one, By thy prayers enliven me who am deadened by them, and renew me.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "Thou hast given birth in the flesh unto the Timeless One. Him do thou entreat, that He deliver from chronic evils us who hymn thee, O all- immaculate one.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                "text": "My soul riseth unto Thee at dawn, O God, * for Thou art light, and Thy commandments * have become healing for Thy servants, * O Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "7-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "The counsels of ignorant men, which are ever directed against us, do thou render ineffectual By thy prayers, O Nicholas.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "By thy prayers rend asunder the bonds of our evils, O all-holy Nicholas, who hast bound the malice of the soul-corrupting serpent.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "Ever sinning in mind and beset by a multitude of evils, we invoke thee as a fervent intercessor, O father Nicholas.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "O Mary, Birthgiver of God and Sovereign Lady of all creation, utterly free my lowly heart from the enemy who shamelessly seeketh to gain dominion over my heart.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                "text": "Jonah cried out from the belly of Hades: * Lead my life up from corruption! * And we cry aloud unto Thee: * O almighty Savior, have mercy on us!",
                "tier": 2,
                "src": {
                  "file": "7-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou didst annul the unjust sentence of death and by thy mercy didst save those who were about to die, O father Nicholas, as the fervent helper of those who call upon thee.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "Ease thou the ailments of our souls, O most sacred pastor, and stop the mouths which open vainly against those who love thee.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "Thou didst destroy the bitter pasturage of the ungodliness of Arius with the medicine of thy words, O Nicholas, initiate of the sacred mysteries, thou wast the confirmation of the faithful.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "O all-immaculate one, heal my wretched soul, which hath been made incurably sick with the beguilements of life and many sinful circumstances.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                "text": "Thou didst bedew the burning furnace, O Savior, * and didst save the children who chanted, proclaiming: * Blessed art Thou throughout the ages, * O Lord God of our fathers!",
                "tier": 2,
                "src": {
                  "file": "7-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "As the beauty of the Church, O wise Nicholas, deliver me from all the ugliness of the shameful passions, ever entreating the Benefactor of the whole world, O holy hierarch.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 7, item 1"
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
                  "text": "Water the hearts of us all with the showers of thy prayers, O wise Nicholas, that we may offer fruits worthy of repentance, O holy hierarch.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 7, item 2"
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
                  "text": "By thy prayers enlighten the minds of us who rise early with faith and glorify God, O thou who by thine entreaties razed the temple of Artemis.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "With faith every tongue glorifies thee, who art the glory and boast of our race and the guide of those astray, O pure and all-blessed Theotokos.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                "text": "Emulating the children who in the furnace * received the dew of the Spirit, * let us cry out with faith saying: * Bless the Lord, O ye works of the Lord!",
                "tier": 2,
                "src": {
                  "file": "7-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 8 irmos"
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
                  "text": "Thy body, fragrant with myrrh, which lay in Myra, O most holy Nicholas, poureth forth myrrh upon those who have recourse thereto, bringing an end to the infirmities of mortals.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "The Creator and Lord of the world hath shown thee to be a helper of the world; wherefore, thou hast been found to be a ready deliverer for those who now call upon thee in their needs, O Nicholas.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "There is no-one who calleth upon thee amid tribulations who doth not speedily receive consolation; wherefore, we pray to thee: Ease all our sicknesses, O Nicholas.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "Every tongue hymneth and glorifieth thee, O Virgin Bride of God, for thou hast given birth to the all-hymned God. Him do thou unceasingly beseech, that our souls be saved.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 8, item 4"
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
                    "file": "7-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 8, item 5"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "O ye faithful, with hymns let us magnify the Theotokos, * who in a manner transcending nature became a mother, * and is a virgin by nature, * she alone is blessed among women!",
                "tier": 2,
                "src": {
                  "file": "7-5.pdf",
                  "locus": "Thursday Matins, canon 2, Ode 9 irmos"
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
                  "text": "Following the ways of the sacred apostles, thou didst inherit their throne, as an honorable and holy hierarch, O right glorious Nicholas.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "O blessed one, the Creator hath shown thee forth as most great, as a lover of God and a helper in all things for those who fervently call upon thee throughout the world.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "With contrite heart we cry to thee, O father Nicholas: Be thou a comfort for us amid tribulations, ever driving griefs away from our souls.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "The severing of death lieth before thee like an axe lying before a tree, O my soul. Wherefore, be not slothful but diligent in showing God the fruits of repentance.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
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
                  "text": "In thy holy arms thou bearest Him Who upholdeth all things. Him do thou beseech, O pure one, that we be saved unharmed by the scheming of the alien one.",
                  "tier": 1,
                  "src": {
                    "file": "7-5.pdf",
                    "locus": "Thursday Matins, canon 2, Ode 9, item 5"
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
          "acrostic": "Accept thou our seventh entreaty, O Nicholas",
          "composer": "Joseph"
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of the holy apostles, in Tone VII:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of the holy apostles, in Tone VII:",
        "items": [
          {
            "text": "O glorious apostles, pillars of the Church, preachers of the Truth, radiant beacons: With the fire of the Spirit ye consumed all delusion and illumined the race of mankind with faith. Wherefore, we beseech you: Entreat our Savior and God, that He grant peace to the world and save our souls.",
            "tier": 1,
            "src": {
              "file": "7-5.pdf",
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
            "text": "O apostles of Christ, husbandmen of the Savior, bearing the Cross upon your shoulders as a plough, and having cleared the earth made hard by the delusion of idolatry, ye sowed the word of faith, and are therefore fittingly honored, O holy apostles of Christ.",
            "tier": 1,
            "src": {
              "file": "7-5.pdf",
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
            "text": "Breathing forth one thing only, and looking toward one thing alone, the passion-bearing martyrs, having found the one path of life, which is death for Christ, urged one another on to death. O the wonder! For, snatching up the treasures of torment, they said to each other: If we die not now, we shall die in any case; wherefore, let us do things worthy of life: let us do what needs be done with love of honor, that we may sell what we have and purchase life with death!” By their prayers, O God, have mercy on us.",
            "tier": 1,
            "src": {
              "file": "7-5.pdf",
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
        "text": "Thou wast ineffably born from the Virgin, O Christ, enlightening those in darkness, who cry aloud: Glory be to Thee, O Lord!",
        "tier": 1,
        "src": {
          "file": "7-5.pdf",
          "locus": "Thursday Matins, aposticha Glory/Both-now closer"
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
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "fri": {
      "sessionals": [
        {
          "rubric": "After the 1st chanting of the Psalter, The Sessional Hymns of the holy and precious Cross, in Tone VII:",
          "spec_mel": null,
          "items": [
            {
              "text": "The Church crieth out to Thee, O Christ God, bowing down before Thee in the pine, cedar and cypress: Grant victories to the faithful for the sake of the Theotokos, and have mercy one us!",
              "tier": 1,
              "src": {
                "file": "7-6.pdf",
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
              "text": "O Christ God, Who for my sake endured nailing to the Cross, accept my ready praise, and save me.",
              "tier": 1,
              "src": {
                "file": "7-6.pdf",
                "locus": "Friday Matins, sessional set 1, item 2"
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
              "text": "Exalt ye the Lord our God, * and worship the footstool of His feet, for He is holy.",
              "tier": 2,
              "src": {
                "file": "7-6.pdf",
                "locus": "Friday Matins, sessional set 1 verse 1"
              }
            }
          ],
          "closer": {
            "text": "Protected by the Cross of thy Son, O Virgin, we evade the attacks of the demons; wherefore, hymning thee as is meet, we glorify thee, O unwedded Theotokos.",
            "tier": 1,
            "src": {
              "file": "7-6.pdf",
              "locus": "Friday Matins, sessional set 1 closer"
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
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone VII:",
          "spec_mel": null,
          "items": [
            {
              "text": "O Christ, Thou didst show the tree of Thy Cross to be more radiant than fire and more powerful than flame, for consuming sins, it illumineth the hearts of those who hymn Thy voluntary crucifixion. O Christ God, glory be to Thee!",
              "tier": 1,
              "src": {
                "file": "7-6.pdf",
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
              "text": "Ever gazing upon Thy Cross as it is exalted, O Lord, we faithfully hasten with hymns and songs, embracing it with fear and joy. Sanctify Thy servants, and bring peace to Thy world by its appearance, O only greatly Merciful One.",
              "tier": 1,
              "src": {
                "file": "7-6.pdf",
                "locus": "Friday Matins, sessional set 2, item 2"
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
              "text": "O holy martyrs, ask that we may be given remission of our sins, and be delivered from the torments which await us, and from bitter death, we pray.",
              "tier": 1,
              "src": {
                "file": "7-6.pdf",
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
                "file": "7-6.pdf",
                "locus": "Friday Matins, sessional set 2 verse 1"
              }
            },
            {
              "text": "Wondrous is God in His saints, * the God of Israel.",
              "tier": 2,
              "src": {
                "file": "7-6.pdf",
                "locus": "Friday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "O pure Ever-virgin Theotokos, beholding thy Son hanging upon the Cross, weeping as a mother thou didst magnify His awesome condescension, O Lady unwedded.",
            "tier": 1,
            "src": {
              "file": "7-6.pdf",
              "locus": "Friday Matins, sessional set 2 closer"
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
          }
        },
        {
          "rubric": "After the 3rd chanting of the Psalter, the Sessional Hymns, in Tone VII:",
          "spec_mel": null,
          "items": [
            {
              "text": "Thy precious Cross, O Christ, is the sword and invincible victory of the world, and laying low the invisible foe thereby, we hymn Thee with thanksgiving.",
              "tier": 1,
              "src": {
                "file": "7-6.pdf",
                "locus": "Friday Matins, sessional set 3, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "O Thou Who by the tree of the Cross healed Adam’s condemnation, heal our broken hearts, and save us.",
              "tier": 1,
              "src": {
                "file": "7-6.pdf",
                "locus": "Friday Matins, sessional set 3, item 2"
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
            "text": "The Fruit of thy womb planted the Cross in the ends of the earth and delivered the world from corruption; wherefore, we magnify thee, O all- glorious one.",
            "tier": 1,
            "src": {
              "file": "7-6.pdf",
              "locus": "Friday Matins, sessional set 3 closer"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
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
          "title": "Canon of the precious and life-creating Cross of the Lord, the acrostic whereof is “On the Tree Christ set at naught the ancient bane,” the composition of Joseph, in Tone VII",
          "heading_rubric": "Canon of the precious and life-creating Cross of the Lord, the acrostic whereof is “On the Tree Christ set at naught the ancient bane,” the composition of Joseph, in Tone VII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "To God Who overthrew Pharaoh in the Red Sea * let us chant a hymn of victory, * for He hath been glorified.",
                "tier": 2,
                "src": {
                  "file": "7-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Lifted up upon the Cross, Christ drew all mankind to Himself, and cast down the enemy who had laid all low.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 1, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "From Thy life-bearing side Thou didst pour forth water upon my life, O Master, and as a mortal didst slay the enemy.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "Bear ye earnest prayer to Christ for us, O passion-bearers, that we all may be delivered from the dread judgment.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "O most wise martyrs, ye humbled yourselves for Christ’s sake; casting down the prideful foe with grace divine.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "Beholding on the Cross Him Who had shone forth from thee in His exceedingly great loving-kindness, O Lady, thou didst weep, glorifying Him.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                "text": "The Church of Christ hath been confirmed by faith; * wherefore she crieth out unceasingly in hymns, chanting: * Holy art Thou, O Lord! * and my spirit doth hymn Thee!",
                "tier": 2,
                "src": {
                  "file": "7-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "O Thou Who dost breathe life into me, and art dispassionate in essence, how dost Thou endure suffering? How dost Thou die upon the Tree? Great is Thy mercy and long-suffering, O Savior!",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 1"
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
                  "text": "Thou wast unjustly lifted up upon the Cross between two thieves, O Word, and didst justify him who by faith acknowledged Thee as the Author of all creation Who suffered of His own will.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Enduring the convulsions of their flesh, the severing of their hands and feet, and all their members, the passion-bearers were deemed worthy of glory, and pray for us.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Made radiant in God by many and varied torments, ye have now inherited great glory, O wise ones, ever praying for our souls.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 3, item 4"
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
                  "text": "By thy maternal supplications grant release from our debts, O pure Virgin who hast given birth to God the Word Who was nailed as a man to the Cross.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                "text": "I heard report of Thee * and became filled with fear; * I understood Thy works * and became filled with awe, O Lord.",
                "tier": 2,
                "src": {
                  "file": "7-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou wast lifted up upon the Cross like a most comely cluster of grapes, O Master and Lover of mankind, exuding the wine of gladness.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "Willingly accepting sufferings in Thy flesh, O Master, Thou didst truly calm the greatly painful passions of mortals.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "Shot through with arrows, the passion-bearers wounded the adversary and showed themselves to be physicians of our souls.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 4, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "The passion-bearers arrayed themselves against the tyrants and, vanquishing them, were crowned with crowns of victory.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 4, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "O Virgin, without seed thou hast given birth to the Word Who in His goodness destroyed corruption on the Cross.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                "text": "My soul riseth unto Thee at dawn, O God, * for Thou art light, and Thy commandments * have become healing for Thy servants, * O Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "7-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Lifted up upon the Tree in the flesh, O Master, Thou didst draw all creation out of the pit of evils unto the understanding of Thee, O Lover of mankind.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 5, item 1"
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
                  "text": "Iniquitous men asked to crucify Thee at the place of the skull, O Jesus, Who dost crush the pernicious head of the serpent.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "Ye halted the flow of ungodliness with your divine blood, O martyrs, and drowned the tyrant pharaoh therein.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 5, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Their fingernails pitilessly torn away, the passion-bearers rent vain-minded hearts asunder with their rebuke, and have become victors.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 5, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "God sanctified thy womb and dwelt therein, O holy and pure one; and lifted up upon the Cross, He raised up creation with Himself.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                "text": "Jonah cried out from the belly of Hades: * Lead my life up from corruption! * And we cry aloud unto Thee: * O almighty Savior, have mercy on us!",
                "tier": 2,
                "src": {
                  "file": "7-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Manifesting Thyself in the tender compassion of Thy mercy, O Physician of the infirm, by Thy Cross and sufferings Thou didst heal infirm human nature.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "Of old Adam brought condemnation upon himself through the tree; but now he hath been justified by the tree of the Cross, gaining access to paradise and receiving delight.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 6, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "We hymn Thee Who wast crucified in the flesh; we glorify Thee Who wast crowned with thorns and hast crowned us with glory, O supremely good King.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 6, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Having rejected the pernicious harm of the madness of idolatry, the spiritual athletes underwent tortures; and having died with Christ, they now reign.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 6, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Neither persecution, nor starvation, nor nakedness, nor tribulation, nor death could in anywise separate the godly passion-bearers from the love of Christ.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 6, item 5"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Thou didst glorify Him Who became incarnate from thee, and gazing upon Him Who was lifted up upon the Cross, thou didst weep for Him, O holy and all-immaculate Virgin Mother.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 6, item 6"
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
                "text": "Of old the Children were shown to be * bedewed in the fiery furnace, * chanting and praising the one God saying: * 'Supremely exalted and exceedingly glorified is the God of our Fathers'.",
                "tier": 2,
                "src": {
                  "file": "7-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "Lifting the burden of mine iniquities, Thou wast lifted up upon the Cross between the iniquitous, O supremely good Lord. Blessed art Thou, the supremely exalted Lord and God of our fathers.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "Pierced by the spear in Thy divine side, O Savior, Thou didst set aright the fall of Eve, who was created from Adam’s rib, ever commanding the fiery sword to grant me access to paradise.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "Like stars affixed to the firmament of the Church, ye illumine creation with the splendor of your sufferings and the effulgence of healings.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "The book of life ever offereth the recorded lives of the Lord’s martyrs, who diligently preserved the written statutes of God and suffered mightily.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 7, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "O all-holy one, beholding the most holy Word Who shone forth from thee, lifted up upon the holy Tree and sanctifying mortals, thou didst lament.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                "text": "The King of glory, who is alone without beginning, * Before Whom all the powers of heaven stand in awe * and the hosts of angels tremble: * O ye priests praise, and ye people * supremely exalt Him throughout the ages.",
                "tier": 2,
                "src": {
                  "file": "7-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "The tree of understanding rendered me mortal; but, having died upon the Tree Thou didst enliven me, O my Christ, and enlightened me to chant: Hymn the Lord, O ye priests, and supremely exalt Him throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "O King, the law-breaking assembly crowned with thorns Thee, Who uprootest the thorns of first-formed Adam’s disobedience; and they suspended upon the Cross Thee, Who hast delivered all from the abyss of deception.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Upon the Tree mindless men stretched Thee out, Who spread out the heavens with understanding, O Savior, Who healest our sufferings by Thy suffering, and causeth our pain to cease through the pain caused in Thy hands by the nails.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The relics of the martyrs emit the sweet fragrance of miracles for those who approach with undoubting heart, and they ever dispel the fetor of the passions, and in God impart health unto all.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "The ranks of the saints pray to the Master, Who issued forth from thy womb, and on the Cross showed them the path of suffering, O pure one; and they glorify thee as the Queen of all.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 8, item 5"
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
                "text": "O all-hymned one, * who art higher in eminence than the heavens: * having seedlessly conceived the beginningless Word * thou hast given birth to the incarnate God for all mankind. * Wherefore, we all magnify thee.",
                "tier": 2,
                "src": {
                  "file": "7-6.pdf",
                  "locus": "Friday Matins, canon 1, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "When they saw Thee lifted up upon the Cross, O Jesus, almighty King of ages, the sun was darkened, the earth quaked, and the splendor of the veil of the temple was rent asunder.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "The iniquitous ran Thy hands and feet through with nails, pierced Thy life- bearing side with a spear, and gave Thee gall and vinegar to drink, O my Christ, Thou true God and delight of all.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "They who were broken by all manner of tortures, broke asunder the nets of the author of evil; and having been crowned with victory, the valiant spiritual athletes are called blessed.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 3"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "Through the deposit of their relics the passion-bearers sanctified the whole earth and, cast into the midst of the fire and mystically consumed, they set at naught the vile stench of the sacrifices of the idols.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 4"
                  },
                  "label": "martyrs"
                },
                {
                  "text": "O blessed one, who art holier than the cherubim, and hast given birth in the flesh unto the Word of God, Who was willingly lifted up upon the Cross: Earnestly pray to Him on behalf of us all.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 1, Ode 9, item 5"
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
          "acrostic": "On the Tree Christ set at naught the ancient bane",
          "composer": "Joseph"
        },
        {
          "title": "Another canon, of the most holy Theotokos, in Tone VII",
          "heading_rubric": "Another canon, of the most holy Theotokos, in Tone VII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "In giving birth to God in the flesh, O most pure one, thou didst restore our first father Adam, who had fallen into the corruption of disobedience.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "In gladness we cry out to thee with the voice of Gabriel, O pure one: Rejoice, O most pure one, thou hope of all! Rejoice, O Bride of God!",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 1, item 2"
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
              ]
            },
            "3": {
              "irmos": {
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "In the image of the all-holy tabernacle God foretold thee to the law-giver on the mountain; for thou didst become the habitation of Him Who sanctifieth all.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 3, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "O Virgin, we have all understood thee to be the holy ground which without seed put forth for us Jesus Christ, the comely Grain Who feedeth those who bless thee with faith and love.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "The ways of God Most High were seen in thee, O Virgin, when He ineffably became incarnate; for thou wast the Mother of Him Who reigneth over all.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "Pondering thy divine birthgiving, O Virgin, enriched by thine aid, I cry aloud: Holy art Thou, O Lord, Who saveth our souls!",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 3, item 4"
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
            "4": {
              "irmos": {
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Habbakuk heard of thee, O most pure one, as the mountain illumined by the overshadowing of the Spirit; for from thee hath God revealed Himself incarnate.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "The assembly of the Orthodox is set aright, hymning thee as the all-holy Mother of God, and crying out to thee with the angel: “Rejoice!”",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 4, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Beaten is the face of Nestorius, who did not wish to consider thee the pure Theotokos; for thou didst truly give birth unto God, O most pure one.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "The Bridegroom found thee to be comely and radiant in goodness, O all-pure one, and He abode within thee and made thee the Theotokos.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "file": "7-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Loving thy godly, comely, most sweet and goodly beauty, O Virgin Sovereign Lady, the Master made His abode within thee.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "O maiden, all-holy and splendid portal of grace, who hast illumined the whole world with thy most radiant light: Enlighten those who hymn thee.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 5, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Let those who confess thee to be the Theotokos receive through thy light the kingdom and food which pass not away, O Mother, Virgin and Theotokos.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "Thou wast shown to be the temple of the Omnipotent One Who seeth all things; for, finding thy womb to be more honorable than the heavens, He dwelt therein, O all-pure Birthgiver of God.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Thou hast given birth to the only Benefactor as the God-man, Who dwelt among us, O Virgin Theotokos, that He might give life unto mankind.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "Thou hast given birth in two natures to Emmanuel, Who was the perfect Word from the beginning, and is now God incarnate, Who granteth us redemption.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 6, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "The word of God described thee beforehand as the ark which received the tablets of the law, O Theotokos, for thou didst receive in thy womb Him Who became incarnate for our sake.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 6, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Even the fulsome tongues of the angels are unable to proclaim thy praises, O pure one; but we, taking it up now as servants, offer thee Gabriel’s cry: “Rejoice!”.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "Of old, thine Offspring saved those who were in the fiery furnace; and now He hath saved us who cry aloud at His coming which transcendeth all telling: Blessed art Thou, O God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "David the ancestor of God described thy glory, O all-immaculate Virgin, and manifestly prophesied thee as the Queen of creation, who standeth at the right hand of the God of our fathers.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
                    "locus": "Friday Matins, canon 2, Ode 7, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "By the restoration of thy birthgiving thou didst renew the nature of mortals, O pure one; wherefore, we cry out to thee: Blessed is the Fruit of thy womb throughout all ages, O Sovereign Lady!",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "In His mercy the second Adam through thee, O most pure one, called to Him the first Adam, who had been condemned and held fast by death, and who now crieth aloud: Blessed art Thou, Who wast born and hast restored me!",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                "text": "Same as the foregoing.",
                "tier": 1,
                "src": {
                  "file": "7-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "The unapproachable Master of all, Whom the heavens cannot contain, was contained within thy womb, O Birthgiver of God; wherefore, with love we the faithful, supremely exalt thee throughout the ages.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "The Mind Who transcendeth all creation, and upon Whom human nature is unable to gaze, didst thou bear in thy most pure arms, O maiden; wherefore, with love we, the faithful, supremely exalt thee throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "Entreat God, Who was born of thee, O Virgin, that upon those who honor thee with faith He send down salvation, release from misfortunes, the speedy cure of grievous ailments, and eternal grace.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "Knowing thee to be the splendid temple of the Most High, adorned with divers virtues, O all-holy Virgin, we piously hymn and glorify thee throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                    "file": "7-6.pdf",
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
                  "file": "7-6.pdf",
                  "locus": "Friday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "Most perfect humanity was received from thee, O most pure maiden, when the Word united Himself to animate flesh and a soul adorned with discourse; wherefore, all of us, the faithful, magnify thee.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "Let the foolishness of the rhetors keep silence, but let the trumpet of the apostles sound forth, praising thee, O Virgin, with cries of truth, and declaring thee the to be the true Theotokos.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "Because of thee mercy was shown to mankind, which was hypostaticaily united to the true Word, O Virgin, and by God’s gift became divine; wherefore, we all ever magnify thee.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
                  "text": "The mystery of thy birthgiving was first understood through the visions of the prophets, O maiden, who for the sake of mankind hast given birth to the incarnate God, Who delivereth us from perils By thy prayers.",
                  "tier": 1,
                  "src": {
                    "file": "7-6.pdf",
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
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. Small Doxology (Read), Litany: Let us complete ..., On the Aposticha, these Stichera of the precious Cross, in Tone VII:",
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of the precious Cross, in Tone VII:",
        "items": [
          {
            "text": "O Master Who lovest mankind, Who art the Bestower of life, by Thy Cross Thou didst redeem the whole world. O Lord, glory be to Thee!",
            "tier": 1,
            "src": {
              "file": "7-6.pdf",
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
            "text": "The Vine of life was nailed to the Cross, and the nations embraced paradise with the thief. This is the glory of the Church! These are the riches of the kingdom! O Lord Who suffered for our sake, glory be to Thee!",
            "tier": 1,
            "src": {
              "file": "7-6.pdf",
              "locus": "Friday Matins, aposticha item 2"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "Celebrating the memorial of Thy holy passion-bearers, O Christ, we hymn Thee, crying aloud: Glory be to Thee, O Lord!",
            "tier": 1,
            "src": {
              "file": "7-6.pdf",
              "locus": "Friday Matins, aposticha item 3"
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
          "ref": "shared.weekday_aposticha_verses.sets.standard_matins"
        }
      },
      "aposticha_theotokion": {
        "text": "When thou didst behold thine own Son upon the Tree of old, O most pure one, thy heart was wounded by the sword of grief.",
        "tier": 1,
        "src": {
          "file": "7-6.pdf",
          "locus": "Friday Matins, aposticha Glory/Both-now closer"
        },
        "homoglyph_log": [
          {
            "from": "U+041E О (Cyrillic)",
            "to": "O",
            "count": 1
          }
        ],
        "type": "stavrotheotokion",
        "sourceLabel": "Stavrotheotokion"
      },
      "closing_rubric": "Then, “It is good to give thanks ...,” Trisagion ..., Our Father ..., Troparia."
    },
    "sat": {
      "sessionals": [
        {
          "rubric": "After the 1st chanting of the Psalter, The Sessional Hymns of the holy martyrs, in Tone VII:",
          "spec_mel": null,
          "items": [
            {
              "text": "O saints, pray ye that we be granted the remission of our sins, and be delivered from the evils which await us, and from bitter death, we pray.",
              "tier": 1,
              "src": {
                "file": "7-7.pdf",
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
              "text": "Struggling on earth, Thy saints trampled the enemy underfoot and abolished the delusion of the idolatry, O Lord; wherefore, they have received crowns from Thee, the Master and Lover of mankind, the merciful God, Who granteth great mercy to the world.",
              "tier": 1,
              "src": {
                "file": "7-7.pdf",
                "locus": "Saturday Matins, sessional set 1, item 2"
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
              "text": "Wondrous is God in His saints, * the God of Israel.",
              "tier": 2,
              "src": {
                "file": "7-7.pdf",
                "locus": "Saturday Matins, sessional set 1 verse 1"
              }
            }
          ],
          "closer": {
            "text": "As thou art the treasury of our resurrection, O all-hymned one, lead up from the pit and abyss of transgression those who place their trust in thee, for thou having given birth to our Salvation, thou hast saved those guilty of sin. Thou wast a virgin before giving birth, a virgin during birth, and didst remain a Virgin after birthgiving.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
              "locus": "Saturday Matins, sessional set 1 closer"
            },
            "type": "theotokion"
          }
        },
        {
          "rubric": "After the 2nd chanting of the Psalter, the Sessional Hymns, in Tone VII:",
          "spec_mel": null,
          "items": [
            {
              "text": "Rejoice, O ye righteous, and let the heavens be glad! For, struggling on the earth, the martyrs trampled the enemy underfoot and abolished the delusion of idolatry. Let the Church leap up, celebrating with hymns of victory to Christ God, the Judge of the contest, the one Granter of victory, Who giveth great mercy to the world.",
              "tier": 1,
              "src": {
                "file": "7-7.pdf",
                "locus": "Saturday Matins, sessional set 2, item 1"
              },
              "homoglyph_log": [
                {
                  "from": "U+041E О (Cyrillic)",
                  "to": "O",
                  "count": 1
                }
              ],
              "label": "plain"
            },
            {
              "text": "Having armed themselves with the power of Thy Cross, O Lord, Thy martyrs vanquished the enemy and put to shame the delusion of idolatry; wherefore, chanting with the angels they cry out a hymn of victory, glorifying Thee, O Christ. By their prayers grant cleansing and great mercy to our souls.",
              "tier": 1,
              "src": {
                "file": "7-7.pdf",
                "locus": "Saturday Matins, sessional set 2, item 2"
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
              "text": "In the land of the living and the habitations of Thy righteous do Thou number the souls of those whose memory we keep, O Lover of mankind; and if any of them have sinned in this life, forgive them, granting great mercy to the world, in that Thou art the merciful God Who is speedily placated.",
              "tier": 1,
              "src": {
                "file": "7-7.pdf",
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
                "file": "7-7.pdf",
                "locus": "Saturday Matins, sessional set 2 verse 1"
              }
            },
            {
              "text": "Many are the tribulations of the righteous, * and the Lord shall deliver them out of them all.",
              "tier": 2,
              "src": {
                "file": "7-7.pdf",
                "locus": "Saturday Matins, sessional set 2 verse 2"
              }
            }
          ],
          "closer": {
            "text": "O all-immaculate unwedded maiden, with the prophets, holy hierarchs and martyrs ever entreat our God, Who became incarnate of thy blood, that our souls be saved.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
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
          "title": "Canon of the holy martyrs, hierarchs, the venerable, and the departed, the acrostic whereof is “With choirs I, Joseph, hymn the pastors and martyrs,” in Tone VII",
          "heading_rubric": "Canon of the holy martyrs, hierarchs, the venerable, and the departed, the acrostic whereof is “With choirs I, Joseph, hymn the pastors and martyrs,” in Tone VII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "Let us chant unto God, * Who alone helped Moses * lead Israel out of Egypt, * for He hath been glorified.",
                "tier": 2,
                "src": {
                  "file": "7-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "The choir of true martyrs overcame all the deceptions of the enemy, and gladdened, rejoiceth before the face of Him Who created them.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 1, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "The holy hierarchs of Christ, and all the venerable who struggled in asceticism, have through grace been deemed worthy of everlasting food.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 1, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "Through the supplications of the prophets and the venerable, and of the sacred women, deliver us, O Christ, from all wrath, and save our souls.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "O Word Who fashioned me from the earth, Thou didst command that I return to the earth. Grant rest unto those whom Thou hast taken to Thyself.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "O most pure Mother who hast given birth to the most holy Word of God: Sanctify all who glorify thee with love.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                "text": "Having established the heavens * and made firm the foundation of the earth upon many waters: * establish Thou my mind in Thy will, * O Lover of mankind,",
                "tier": 2,
                "src": {
                  "file": "7-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 3 irmos"
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
                  "text": "Crushed by stones and cast into pits, ye broke all the power of the deceiver, and remained unbroken in mind, O martyrs.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "Illumining the faithful with the radiance of divine teachings and beams of the virtues, O most wise hierarchs, ye dispelled all the gloom of heresies.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "Having died to the world, Thy righteous ones, O Word, have truly inherited the life of heaven. For their sake, O Compassionate One, have pity on us all.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 3, item 3"
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
                  "text": "We all pray to the good Master for those who have departed in faith and hope, that He have mercy on them at the hour of judgment.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 3, item 4"
                  },
                  "label": "for_the_reposed"
                },
                {
                  "text": "Without leaving the bosom of the Father, the Word showed Himself to be a babe held, O most pure one, in Thy bosom, He Who is without beginning receiving a beginning from thee.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                "text": "Assured of Thy coming in the flesh, O Christ, * the prophet Habakkuk cried aloud: * Glory to Thy power O Lord.",
                "tier": 2,
                "src": {
                  "file": "7-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Strengthened by love for the Lord, the martyrs rendered the power of the enemy impotent; wherefore, they are called blessed.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 4, item 1"
                  },
                  "label": "plain"
                },
                {
                  "text": "As sheep and lambs of the Shepherd, O blessed hierarchs, ye headed the flock of the Word with divine grace.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "As stars of great radiance, O our venerable fathers, ye illumined the fullness of the faithful with the brilliance of virtue.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "The one company of mighty women and the assembly of the holy prophets have received heavenly goodness.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 4, item 4"
                  },
                  "label": "plain"
                },
                {
                  "text": "Entreat the Son to Whom thou hast given birth, O all-hymned one, that thy servants may be delivered from all temptations and tribulations.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 4, item 5"
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
                "text": "My soul riseth unto Thee at dawn, O God, * for Thou art light, and Thy commandments * have become healing for Thy servants, * O Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "7-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Indifferent to wounds of the flesh, O mighty spiritual athletes, by your divine wounds ye heal the wounds and passions of all.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "Ye received the authority to bind and loose on earth, O holy hierarchs of Christ; wherefore, ye have broken the unbreakable bonds of our sins.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "The choirs of ascetics, prophets, the righteous, and the honorable women, having united themselves to God with a pure mind, dance in constant chorus, rejoicing.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 5, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "In that Thou alone art greatly merciful, O Christ Who lovest mankind, make those who have departed this life in faith inhabitants of paradise.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "Having shown thyself to be an indestructible chamber for God, O all-holy Virgin, entreat Him to make me an inhabitant of His noetic bridal- chamber.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                "text": "Jonah cried out from the belly of Hades: * Lead my life up from corruption! * And we cry aloud unto Thee: * O almighty Savior, have mercy on us!",
                "tier": 2,
                "src": {
                  "file": "7-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "Uplifted to God in your sufferings, O most glorious soldiers, ye cast down the uprisings of the enemy and have become citizens of heaven.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "Dispelling the winter of heresies, the true hierarchs of Christ led a multitude of the pious into the springtime of Truth.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 6, item 2"
                  },
                  "label": "plain"
                },
                {
                  "text": "By Thy might were the multitude of the venerable, the prophets and holy women justified, O Christ; and they delight in never-waning light.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "Thou hast taken to Thyself Thy servants from ages past, O Compassionate One. Grant that they may share in everlasting gladness and true life.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "Sanctify thy servants, O all-holy Virgin Who hast given birth in the flesh to the most holy Word, Whom every creature hymneth.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                "text": "In the Chaldean furnace, * the children of Abraham joined chorus with the angel, saying: * Blessed art Thou, O God of our fathers!",
                "tier": 2,
                "src": {
                  "file": "7-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "With the flow of their blood the passion-bearers quenched the flame of ungodliness, chanting: O God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "We praise the hierarchs, who were enlighteners of the world, chanting: O God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "With hymns let the holy assembly of the prophets and venerable be honored, chanting: O God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 7, item 3"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "From Gehenna deliver Thy faithful servants whom Thou hast taken to Thyself, O compassionate Christ, and who cry out: O God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "We hymn the Theotokos as more honorable than the angels, crying aloud: O God of our fathers, blessed art Thou!",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                "text": "Emulating the children who in the furnace * received the dew of the Spirit, * let us cry out with faith saying: * Bless the Lord, O ye works of the Lord!",
                "tier": 2,
                "src": {
                  "file": "7-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 8 irmos"
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
                  "text": "Ye demolished the temples of the idols, O all-glorious passion-bearers, and made yourselves temples of the Spirit, bravely finishing your race.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "Ye were shown to be like fragrant flowers, O holy hierarchs, gladdening the souls of the faithful with the understanding of piety; wherefore, ye are called blessed, as is meet.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 8, item 2"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "plain"
                },
                {
                  "text": "Traversing the whole earth, O venerable ones, ye became divine sojourners and prophets, observing heavenly delight and ever-abiding glory.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "O Word, Lord of the living and the dead, reckon among the choirs of all the saved Thy servants who have departed with faith, for Thou alone lovest mankind.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "The company of all the women who with fasting and asceticism have sought the Lord, offereth unceasing prayer before thy divine face, O most pure one.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                "text": "O ye faithful, with hymns let us magnify the Theotokos, * who in a manner transcending nature became a mother, * and is a virgin by nature, * she alone is blessed among women!",
                "tier": 2,
                "src": {
                  "file": "7-7.pdf",
                  "locus": "Saturday Matins, canon 1, Ode 9 irmos"
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
                  "text": "Through the supplications of the sacred martyrs, prophets and the righteous who lived virtuously in ages past, have mercy on our souls, O Christ.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "Shown to be ministers of the Master, O initiates of the sacred mysteries, ye have joined yourselves to the heavenly servants. With them offer prayers for us.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "With the women who finished the good race let us honor the holy choirs of the ascetics, that through their supplications we may receive sanctity.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 9, item 3"
                  },
                  "label": "plain"
                },
                {
                  "text": "Grant that the departed who served Thee in an Orthodox manner may partake of the glory of which the choirs all the saints have been deemed worthy, O Christ.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 9, item 4"
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
                  "text": "Sin-loving, I tremble before the dread judgment of Him Who was born from thee, O pure one. But preserve me uncondemned thereat, O good one.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 1, Ode 9, item 5"
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
          "acrostic": "With choirs I, Joseph, hymn the pastors and martyrs"
        },
        {
          "title": "Another canon, of the departed, which we chant when there is no Menaion, the acrostic whereof is “The seventh rule, being of the same form,” the composition of Theophanes, in Tone VII",
          "heading_rubric": "Another canon, of the departed, which we chant when there is no Menaion, the acrostic whereof is “The seventh rule, being of the same form,” the composition of Theophanes, in Tone VII:",
          "odes": {
            "1": {
              "irmos": {
                "text": "At thy command O Lord, * the nature of the waters that beforehand flowed freely was transformed * and became like the earth; * whereby Israel having traversed them dryshod * chanted unto Thee a hymn of victory.",
                "tier": 2,
                "src": {
                  "file": "7-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 1 irmos"
                }
              },
              "items": [
                {
                  "text": "Resplendent in piety, O martyrs, ye offered yourselves unto Christ as comeliness adorned with all forms of the virtues and a divine offering splendid in divers beauties.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 1, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "Grant that Thy departed servants may receive a ray of the unapproachable effulgence of the threefold Sun, O greatly merciful Lord, from whence all pain, grief and sighing are fled.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "label": "for_the_reposed",
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "As the hypostatic Light, O Christ Bestower of light, Thou didst raise up human nature, which was condemned to death; wherefore, in that Thou alone art compassionate, grant rest to those who have fallen asleep in Thee.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "The fall of our first mother didst thou set aright, O most pure one who hast given birth to the Lord and Word Who raised her up from the dead, and Who by His divine authority breathed life into those in the graves.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                "text": "O Lord and Savior, * Who in the beginning established the heavens * by Thine all-powerful Word, * and by the divine and all-accomplishing Spirit * hath granted them all their strength, * do Thou establish me on the unshakeable rock of Thy confession.",
                "tier": 2,
                "src": {
                  "file": "7-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 3 irmos"
                }
              },
              "items": [
                {
                  "text": "Manfully did the choirs of the martyrs display the mighty endurance of youth; for they bore the assault of stripes and the wounds of tortures, desiring Thine incorrupt glory and beauty, O Savior.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 3, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "Into Thine eternal life accept Thou the souls of those who have fallen asleep in hope, O Merciful One; and cause them to dwell in the divine bosom of the godly Abraham, and number them with the blessed Lazarus, O Master.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 3, item 2"
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
                  "label": "for_the_reposed",
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "O compassionate Savior, Who came down from the heavens to save the race of mankind: In Thy loving-kindness grant that those who have departed in piety be granted delight in Thine immaterial light and Thy divine glory and joy.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "The laws of nature were annulled within thee for thou didst conceive the unapproachable Word, O pure one; and the law of God hath been given to us, by the grace of divine love granting remission to all who are driven to despair by transgressions.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                "text": "Having never left the bosom of the Father, * Thou didst descend to earth O Christ God, * I have heard of the mystery of Thy dispensation, * and I have glorified Thee, * O only Lover of mankind.",
                "tier": 2,
                "src": {
                  "file": "7-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 4 irmos"
                }
              },
              "items": [
                {
                  "text": "Patiently did the martyrs endure the pangs of suffering, O Christ, and they were crowned with wreaths of Thy righteousness, and glorify Thy power.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 4, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "Grant Thy supra-natural radiance unto those who have departed in piety, when Thou shalt come with Thine angels in Thy glory, O all- Compassionate and greatly Merciful One.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "label": "for_the_reposed",
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "O good One Who lovest mankind, grant that those who have departed before us and who glorify Thee may delight in the thrice-radiant splendor and the single effulgence of the Godhead.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "Without leaving the bosom of the Father, Christ made His abode within thy bosom, O Virgin, delivering from death those who bless thee, O Mother of God who alone art all-hymned.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 4, item 4"
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
                "text": "Having risen at dawn out of the night, * I entreat Thee O Lord my God: * grant me the forgiveness of my sins, * and guide my steps to the light * of thy commandments, I pray Thee.",
                "tier": 2,
                "src": {
                  "file": "7-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 5 irmos"
                }
              },
              "items": [
                {
                  "text": "Splendidly arrayed in life-bearing mortality woven from your torments, O all-praised martyrs, ask divine rest for the souls that have departed before us.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 5, item 1"
                  },
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic)",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "label": "martyrs",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "O Savior Who pourest forth compassion from Thine inexhaustible treasuries, be Thou well-pleased that the souls which Thou hast taken to Thyself may dwell with Thy firstborn in the mansions of heaven.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "label": "for_the_reposed",
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "Be Thou well-pleased, O Christ our Savior, that Thy servants, who have put off their burdens, broken their bonds and passed over to the life on high, may delight in the splendors of Thy saints.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "O Lady, Mother of God, grant me the remission of mine offenses, and give me forgiveness of my sins, O all-immaculate one who for the world hast given birth to hypostatic Life.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 5, item 4"
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
                "text": "Sailing in the tempest of the cares of life, * together with the ship I have been submerged by sins, * and cast to the soul-corrupting beast, * wherefore like Jonah I cry to Thee, O Christ: * Lead me up from the deadly abyss.",
                "tier": 2,
                "src": {
                  "file": "7-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 6 irmos"
                }
              },
              "items": [
                {
                  "text": "The choirs of the martyrs, who mightily endured nearly unbearable pains, have inherited delight devoid of pain, receiving crowns of righteousness from the life-bearing right hand of God.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 6, item 1"
                  },
                  "label": "martyrs",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "The choirs of the martyrs ...,",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 6, item 2"
                  },
                  "label": "martyrs",
                  "homoglyph_log": [
                    {
                      "from": "U+041E О (Cyrillic), in refrain",
                      "to": "O",
                      "count": 1
                    }
                  ],
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "In that Thou art God immortal, O Merciful One, number with the righteous Thy servants who have fallen asleep before us, where are the choirs of the saints, the splendor of the venerable and the enjoyment of life everlasting.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "He Who of His divine will and creative power created all things out of nothingness, issued forth from thy womb, O pure one, enlightening with the effulgence of the Godhead those in the darkness of death.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 6, item 4"
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
                "text": "Of old the Children were shown to be * bedewed in the fiery furnace, * chanting and praising the one God saying: * 'Supremely exalted and exceedingly glorified is the God of our Fathers'.",
                "tier": 2,
                "src": {
                  "file": "7-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 7 irmos"
                }
              },
              "items": [
                {
                  "text": "Crowned, the choirs of the martyrs manifestly and noetically surround Christ the King with the angelic choirs, crying aloud: Blessed art Thou, O God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 7, item 1"
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
                  "text": "O Compassionate Savior, Who hast power over life and death: Grant divine food unto those who have departed with faith in Thee, and who cry out: Blessed art Thou, O God of our fathers!",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "label": "for_the_reposed",
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "Illumining them with the light of immaterial effulgence, O Christ, cause the souls Thou hast taken to Thyself to dwell in the mansions of heaven, that they may glorify Thee unceasingly with those who have been pleasing unto Thee.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "Christ was ineffably begotten, first of the Father without mother, and now of thee, O Virgin, without father, and He clothed Himself in flesh for our sake. O most pure one, blessed is the Fruit of thy womb!",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 7, item 4"
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
                "text": "The King of glory, who is alone without beginning, * Before Whom all the powers of heaven stand in awe * and the hosts of angels tremble: * O ye priests praise, and ye people * supremely exalt Him throughout the ages.",
                "tier": 2,
                "src": {
                  "file": "7-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 8 irmos"
                }
              },
              "items": [
                {
                  "text": "Looking toward the heavenly glory of the coming of Christ, the martyrs disdained earthly glory, piously hymning Him as King throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 8, item 1"
                  },
                  "label": "plain",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "Grant a heavenly dwelling to those who have fallen asleep in hope of life, O Thou Who hast destroyed their earthly temples, and give them rest in the habitations of the righteous, throughout all ages.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "label": "for_the_reposed",
                  "refrain": "Grant rest, O Lord, to the souls of Thy departed servants."
                },
                {
                  "text": "O Thou Who as God giveth resurrection to the dead, and with Whom is the fountain of life: With nurturing floods do Thou water those who have fallen asleep before us, throughout all ages, in that Thou alone art good.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "Ineffably receiving the unapproachable Light in thy womb, O Virgin Theotokos, thou didst enlighten those in the darkness of life, that they might piously hymn Christ Who ineffably issued forth from thee.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 8, item 4"
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
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 8, item 5"
                  },
                  "label": "plain"
                }
              ]
            },
            "9": {
              "irmos": {
                "text": "O Mother of God and Virgin, * thou hast given birth and yet remained a virgin, * not in accordance with nature, * but by the condescension of God; * wherefore, we ever magnify thee, * who alone wast deemed worthy * of the wonders of God.",
                "tier": 2,
                "src": {
                  "file": "7-7.pdf",
                  "locus": "Saturday Matins, canon 2, Ode 9 irmos"
                }
              },
              "items": [
                {
                  "text": "The valiant martyrs manifestly enlighten the world, as pillars of faith, and an unshakable fortress and bulwark of piety for the Churches. And we, the faithful, bless them as is meet.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 9, item 1"
                  },
                  "label": "martyrs",
                  "refrain": "Wondrous is God in His saints, the God of Israel."
                },
                {
                  "text": "From everlasting fire deliver those who have departed from us, O Master, tearing asunder the record of their sins with the spear which pierced Thy side; and as Thou alone lovest mankind, grant them the splendors of the saints.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "As the good God Who in Thine essence is the Lover of mankind, as One Merciful and Compassionate, Who art the inexhaustible treasury of immortal life, O Savior: Grant Thine incorrupt delights unto those who with faith have fallen asleep before us.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
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
                  "text": "The shadows of the law and the indistinct images of times past have passed away, for Christ became the fulfillment of the law and the prophets. Hymning Him in two natures, we bless thee, the pure Ever-virgin.",
                  "tier": 1,
                  "src": {
                    "file": "7-7.pdf",
                    "locus": "Saturday Matins, canon 2, Ode 9, item 4"
                  },
                  "label": "theotokion"
                }
              ]
            }
          },
          "condition": "which we chant when there is no Menaion",
          "acrostic": "The seventh rule, being of the same form"
        }
      ],
      "magnificat_rubric": "We then chant the hymn of the Theotokos (the Magnificat), with the",
      "post_canon_rubric": "Then, “It is truly meet to bless thee ...,” and a prostration. Small litany, Exapostilarion, and the usual psalms. On the Praises, these Stichera of the holy martyrs, in Tone VII:",
      "praises": {
        "rubric": "On the Praises, these Stichera of the holy martyrs, in Tone VII:",
        "items": [
          {
            "text": "Celebrating the memorial of Thy passion-bearers, O Christ, we chant, crying aloud: ‘O Lord, glory be to Thee.’",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
              "locus": "Saturday Matins, Praises item 1"
            },
            "label": "plain"
          },
          {
            "text": "In the midst of the tribunal of the lawless, the passion-bearers cried aloud rejoicing: ‘O Lord, glory be to Thee.’",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
              "locus": "Saturday Matins, Praises item 2"
            },
            "label": "plain"
          },
          {
            "text": "O all-praised passion-bearers, enlightening the whole world with the radiance of your piety, ye cry aloud to Christ: ‘O Lord, glory be to Thee.’",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
              "locus": "Saturday Matins, Praises item 3"
            },
            "label": "plain"
          },
          {
            "text": "Breathing with one purpose and looking upon a single hope, the passion- bearing martyrs, having found the one path to life, which is death for Christ, urged one another on to death. O the wonder! For, snatching up the treasures of torment, they said one to another: “If we die not now, we shall die in any case; wherefore, let us do things worthy of life: let us do what needs be done with love of honor, that we may sell what we have and buy life with death!” Through their supplications, O God, have mercy on us.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
              "locus": "Saturday Matins, Praises item 4"
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
            "text": "O Merciful Lover of mankind, in the land of Thy righteous do Thou number those who in faith have passed over to thee from ages past.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
              "locus": "Saturday Matins, Praises item 5"
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
            "text": "Praise Him for His mighty acts, * praise Him according to the multitude of His greatness.",
            "tier": 2,
            "src": {
              "file": "7-7.pdf",
              "locus": "Saturday Matins, Praises verse 1"
            }
          },
          {
            "text": "Praise Him with the sound of trumpet, * praise Him with the psaltery and harp.",
            "tier": 2,
            "src": {
              "file": "7-7.pdf",
              "locus": "Saturday Matins, Praises verse 2"
            }
          },
          {
            "text": "Praise Him with timbrel and dance, * praise Him with strings and flute.",
            "tier": 2,
            "src": {
              "file": "7-7.pdf",
              "locus": "Saturday Matins, Praises verse 3"
            }
          },
          {
            "text": "Praise Him with tuneful cymbals, praise Him with cymbals of jubilation. * Let every breath praise the Lord.",
            "tier": 2,
            "src": {
              "file": "7-7.pdf",
              "locus": "Saturday Matins, Praises verse 4"
            }
          }
        ],
        "theotokion": {
          "text": "With the apostles and martyrs pray thou, O Virgin, that those who have passed away may find great mercy at the judgment.",
          "tier": 1,
          "src": {
            "file": "7-7.pdf",
            "locus": "Saturday Matins, Praises Glory/Both-now Theotokion"
          },
          "homoglyph_log": [
            {
              "from": "U+041E О (Cyrillic)",
              "to": "O",
              "count": 1
            }
          ],
          "type": "theotokion",
          "sourceLabel": "Glory ..., Both now ..., Theotokion:"
        },
        "doxology_rubric": "Small Doxology (Read), Litany: Let us complete ...,"
      },
      "aposticha": {
        "rubric": "On the Aposticha, these Stichera of the departed, in Tone VII:",
        "items": [
          {
            "text": "Thou wast seen dead upon the Cross and wast laid in the tomb as one dead, O only Immortal One, delivering mortal mankind from mortality and corruption. As Thou art an inexhaustible Abyss of loving-kindness and a Source of goodness, grant rest to Thy servants who have departed from us.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
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
            "spec_mel": "Caring naught for all the things of earth"
          },
          {
            "text": "O Lord.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
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
            "text": "O good One, grant that those who have passed over unto Thee may be enlightened with Thine incorrupt beauty, and delight in Thy comeliness and the rays of Thy divine light, joining chorus amid the effulgence of heaven with the angels, surrounding Thee, the Master, King and Lord of glory.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
              "locus": "Saturday Matins, aposticha of the departed, item 3"
            },
            "homoglyph_log": [
              {
                "from": "U+041E О (Cyrillic)",
                "to": "O",
                "count": 1
              }
            ],
            "label": "plain"
          },
          {
            "text": "As God, the inexhaustible majesty of divine gifts, as the abundantly rich treasury of goodness, cause those who have passed over to Thee to dwell in the lands of Thine elect, in a place of rest, in the house of Thy glory, in the sustenance of paradise, in Thy virginal chamber, in that Thou art compassionate.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
              "locus": "Saturday Matins, aposticha of the departed, item 4"
            },
            "label": "plain"
          }
        ],
        "verses": [
          {
            "text": "Blessed are those whom Thou hast chosen * and taken to Thyself, O Lord.",
            "tier": 2,
            "src": {
              "file": "7-7.pdf",
              "locus": "Saturday Matins aposticha of the departed, verse 1 — pointed, \"those\", final period (§5 per-tone; the 4-7/5-7/6-7 two-verse pattern)"
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
              "file": "7-7.pdf",
              "locus": "Saturday Matins aposticha of the departed, verse 2 — tone 7 prints TWO verses where 2-7/3-7 carry three (§5 structural per-tone set)"
            }
          }
        ]
      },
      "aposticha_theotokion": {
        "text": "Thou hast given birth in the flesh to the Redeemer, the Fullness of the Law; for those who lived before His coming found no justification in the Law; but Christ, Who was crucified for our sake, hath thereby granted us justification. Wherefore, as thou hast a mother’s boldness, entreat thy compassionate Son, that He grant peace to the souls of those who have passed away from us in piety, O all-hymned one.",
        "tier": 1,
        "src": {
          "file": "7-7.pdf",
          "locus": "Saturday Matins, aposticha Glory/Both-now closer"
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
    }
  },
  "liturgy_weekday": {
    "mon": {
      "beatitudes": {
        "rubric": "On the Beatitudes, these Troparia, in Tone VII:",
        "items": [
          {
            "text": "Comely and good to taste was the fruit which brought death upon me. But Christ is the Tree of life, and eating thereof I die not, but cry out with the thief: Remember me in Thy kingdom, O Lord!",
            "tier": 1,
            "src": {
              "file": "7-2.pdf",
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
            "text": "Like the faithful Canaanite woman I cry out in the pain of my heart: Have mercy on me, O Savior, in that Thou art good; for ever tempest-tossed I have a soul beset by all the wiles of the enemy!",
            "tier": 1,
            "src": {
              "file": "7-2.pdf",
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
            "text": "The cherubim and seraphim, the thrones, principalities and powers, the archangels, the armies of angels, the dominions and most wise authorities, ever glorify Thee, O Lord our Benefactor.",
            "tier": 1,
            "src": {
              "file": "7-2.pdf",
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
            "text": "Uplifted unto God, the spiritual athletes utterly cast down the wicked uprisings of the enemy; and, revealed as victors, they now live amid joy in the heavens, resplendent in incorrupt glory.",
            "tier": 1,
            "src": {
              "file": "7-2.pdf",
              "locus": "Monday Liturgy, Beatitudes item 4"
            },
            "label": "plain"
          },
          {
            "text": "O indivisible Trinity, Unity in a single nature, Being in three Hypostases: With the hosts on high we worship Thee, O Father, Son and Holy Spirit: the one Godhead, the one Power, saying: There is but one God, the con- substantial Trinity!",
            "tier": 1,
            "src": {
              "file": "7-2.pdf",
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
            "text": "I have defiled myself with the pleasures of life, but have fled unto thee, the undefiled one, O Virgin. Deliver my most accursed soul from every lust and offense, that I may bless thee, the ever-blessed one.",
            "tier": 1,
            "src": {
              "file": "7-2.pdf",
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
        "rubric": "On the Beatitudes, these Troparia, in Tone VII:",
        "items": [
          {
            "text": "Comely and good to taste was the fruit which brought death upon me. But Christ is the Tree of life, and eating thereof I die not, but cry out with the thief: Remember me in Thy kingdom, O Lord!",
            "tier": 1,
            "src": {
              "file": "7-3.pdf",
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
            "text": "Treat the incurable sores of my heart, O Lord, for Thou alone art the Physician of souls and bodies; and ever grant that I may tread aright the paths of salvation.",
            "tier": 1,
            "src": {
              "file": "7-3.pdf",
              "locus": "Tuesday Liturgy, Beatitudes item 2"
            },
            "label": "plain"
          },
          {
            "text": "O Baptist of Christ, who came before the Sun of righteousness, with thy divine supplications light thou the lamp of my soul, which hath been extinguished by my great evil, that, saved, I may ever bless thee.",
            "tier": 1,
            "src": {
              "file": "7-3.pdf",
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
            "text": "Having suffered and been crowned, ye put the enemy to shame, and now dwell in the heavens, full of unapproachable light, O most wise martyrs, praying on behalf of our souls.",
            "tier": 1,
            "src": {
              "file": "7-3.pdf",
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
            "text": "Heal Thou the incurable sufferings of my soul, O divine Trinity Who art piously worshipped in a single Godhead, rescue me from Gehenna and temptations, and grant me the eternal kingdom.",
            "tier": 1,
            "src": {
              "file": "7-3.pdf",
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
            "text": "In thy womb thou didst contain the Uncontainable One without confining Him. O pure Mother, ever beseech Him, that from all oppression and the assaults of the passions He deliver thy servants who glorify thee with love.",
            "tier": 1,
            "src": {
              "file": "7-3.pdf",
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
        "tone": 7,
        "text": {
          "text": "The righteous man shall be glad in the Lord * and shall hope in Him.",
          "tier": 2,
          "src": {
            "file": "7-3.pdf",
            "locus": "Tuesday Liturgy prokeimenon (text byte-matches shared; stored per-tone beside its divergent verse)"
          }
        },
        "verse": {
          "text": "Hearken, O God, unto my prayer, when I pray unto Thee.",
          "tier": 1,
          "src": {
            "file": "7-3.pdf",
            "locus": "Tuesday Liturgy prokeimenon verse — \"when I pray unto Thee\" where shared/2-3 prints \"when I make supplication unto Thee\" (§5 word divergence)"
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
        "rubric": "On the Beatitudes, these Troparia, in Tone VII:",
        "items": [
          {
            "text": "Comely and good to taste was the fruit which brought death upon me. But Christ is the Tree of life, and eating thereof I die not, but cry out with the thief: Remember me in Thy kingdom, O Lord!",
            "tier": 1,
            "src": {
              "file": "7-4.pdf",
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
            "text": "Thou didst stretch forth Thy hands upon the Cross, in Thy great goodness setting aright the fall of Adam, who stretched out his hands to the fruit of the tree, O Compassionate One; wherefore, we glorify Thee, O Benefactor and Lord.",
            "tier": 1,
            "src": {
              "file": "7-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 2"
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
            "text": "On the place of the skull the assembly of the Jews crucified Thee, O Christ our King, Who crushed the head of the wicked destroyer, pouring forth upon us rivers of remission from Thy holy side.",
            "tier": 1,
            "src": {
              "file": "7-4.pdf",
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
            "text": "Emulating the honored and saving sufferings of Christ, O all- famed martyrs, ye endured many and varied tortures, and together have passed over into immortality; wherefore, ye are blessed.",
            "tier": 1,
            "src": {
              "file": "7-4.pdf",
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
            "text": "O holy Trinity, preserve us, Thy servants, who hymn Thee, strengthen us with the power of the Cross, and instruct us how to reach the heavenly city, that, residing there, we may find mercy.",
            "tier": 1,
            "src": {
              "file": "7-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 5"
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
            "text": "Beholding Him Who was born from thee, crucified, O pure Mother, thou didst shed tears, thy womb in turmoil, and cried aloud: “How dost Thou willingly suffer these things, O my Son, desiring to deliver mankind from the passions?”",
            "tier": 1,
            "src": {
              "file": "7-4.pdf",
              "locus": "Wednesday Liturgy, Beatitudes item 6"
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
        "rubric": "On the Beatitudes, these Troparia, in Tone VII:",
        "items": [
          {
            "text": "Comely and good to taste was the fruit which brought death upon me. But Christ is the Tree of life, and eating thereof I die not, but cry out with the thief: Remember me in Thy kingdom, O Lord!",
            "tier": 1,
            "src": {
              "file": "7-5.pdf",
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
            "text": "From the depths of false belief did ye draw flocks of the nations unto the divinely beauteous Faith, O most wise and glorious apostles, bringing them to the noetic banquet as a priceless gift.",
            "tier": 1,
            "src": {
              "file": "7-5.pdf",
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
            "text": "Driving the darkness of grievous beguilement away with the light of preaching, O apostles of the Lord, ye manifestly illumined the hearts of the pious; wherefore, we bless you with divine hymns.",
            "tier": 1,
            "src": {
              "file": "7-5.pdf",
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
            "text": "While your members were being severed with the sword, O divine spiritual athletes, ye were not cut off from the love of the Redeemer, but hastened to Him. And now ye all live in joy, illumined with heavenly glory.",
            "tier": 1,
            "src": {
              "file": "7-5.pdf",
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
            "text": "The most malignant corrupter of the race of mankind besets me. O omnipotent Trinity, snatch me from his jaws by the prayers of Thy preachers, that I may magnify Thine infinite mercy.",
            "tier": 1,
            "src": {
              "file": "7-5.pdf",
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
            "text": "O pure Virgin, thou didst bring forth the Son, bearing mortal flesh from thy pure blood, Who is co-enthroned with the Father, that He might render human nature immortal; wherefore, we all bless thee as is meet.",
            "tier": 1,
            "src": {
              "file": "7-5.pdf",
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
        "tone": 8,
        "text": {
          "text": "Their sound hath gone forth into all the earth, * and their words unto the ends of the world.",
          "tier": 2,
          "src": {
            "file": "7-5.pdf",
            "locus": "Thursday Liturgy prokeimenon (text byte-matches shared; stored per-tone beside its divergent verse)"
          }
        },
        "verse": {
          "text": "The heavens declare the glory of God, * and the firmament proclaimeth the work of His hands.",
          "tier": 2,
          "src": {
            "file": "7-5.pdf",
            "locus": "Thursday Liturgy prokeimenon verse — prints a * absent from shared/2-5 (§5; 4-5/5-5/6-5 class)"
          }
        }
      },
      "alleluia": {
        "ref": "shared.daily_liturgy_propers.thu.alleluia"
      },
      "communion": {
        "ref": "shared.daily_liturgy_propers.thu.communion"
      },
      "alleluia_note": "7-5 prints the digit-zero artifact (\"0 Lord\") at the same verse as 2-5/3-5/4-5/5-5/6-5 — six tones running; normalized per §9.10; post-normalization byte-matches shared, so the ref stands."
    },
    "fri": {
      "beatitudes": {
        "rubric": "On the Beatitudes, these Troparia, in Tone VII:",
        "items": [
          {
            "text": "Comely and good to taste was the fruit which brought death upon me. But Christ is the Tree of life, and eating thereof I die not, but cry out with the thief: Remember me in Thy kingdom, O Lord!",
            "tier": 1,
            "src": {
              "file": "7-6.pdf",
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
            "text": "Healing the sickness of Adam, which was caused by the counsel of the enemy, when Thou wast lifted up upon the Tree, Thy hands and feet pierced with nails, O King of all, Thou didst endure pain; wherefore, we glorify Thy long-suffering, O Word.",
            "tier": 1,
            "src": {
              "file": "7-6.pdf",
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
            "text": "Between two outlaws the assembly of the Jews crucified Thee, O Christ, the only Bestower of the law and Redeemer, Who delivereth the race of mankind from all iniquity; wherefore, we magnify Thee.",
            "tier": 1,
            "src": {
              "file": "7-6.pdf",
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
            "text": "Valiantly wearing the wounds of many tortures like beautiful ornaments, the spiritual athletes were shown to be the splendid adornment of the Church, ever praying for our souls.",
            "tier": 1,
            "src": {
              "file": "7-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 4"
            },
            "label": "martyrs"
          },
          {
            "text": "O Holy Trinity, from torments deliver Thy faithful servants, who believe in Thee as a single Godhead, unceasingly glorified with piety; and grant us Thine everlasting kingdom.",
            "tier": 1,
            "src": {
              "file": "7-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 5"
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
            "text": "Seeing Thee without form or beauty, suspended upon the tree of the Cross in the flesh, O Christ, the all-pure Virgin cried out in pain: Woe is me! How have the iniquitous wounded Thee, O my Child?”",
            "tier": 1,
            "src": {
              "file": "7-6.pdf",
              "locus": "Friday Liturgy, Beatitudes item 6"
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
        "rubric": "On the Beatitudes, these Troparia, in Tone VII:",
        "items": [
          {
            "text": "Comely and good to taste was the fruit which brought death upon me. But Christ is the Tree of life, and eating thereof I die not, but cry out with the thief: Remember me in Thy kingdom, O Lord!",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
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
            "text": "Having finished the good struggle and kept the faith, ye received from God crowns of incorruption, and were deemed worthy of His glory, O all-praised martyrs, inhabitants of heaven with the angels.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
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
            "text": "Let the assemblies of the sacred ministers and prophets, and let praise be given the company of honorable women be praised, for they dwell now in joy in the mansions of the firstborn and abide with the incorporeal hosts.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
              "locus": "Saturday Liturgy, Beatitudes item 3"
            },
            "label": "plain"
          },
          {
            "text": "Number those whom Thou hast taken from us in the mansions of the saints, O Word of God, overlooking the offenses of their souls committed on earth, in knowledge and in ignorance; and take pity upon Thy servants.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
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
            "text": "Dying in Thee, O Holy Trinity, Thy servants come to Thee to be delivered from dreadful torments, and to receive, forgiven, the good things of Thy holy glory at the hour of judgment.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
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
            "text": "The Effulgence of the Father made His abode within thy womb, O all-holy and pure one, and those who were beguiled by the evil counsel of the enemy and fell into corruption did He restore again.",
            "tier": 1,
            "src": {
              "file": "7-7.pdf",
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
      },
      "alleluia_note": "sat Liturgy Alleluia verse 1 byte-matches shared (ref stands). The Saturday Matins sessional \"Many are the tribulations … * and the Lord\" shadows this marker in a flat scan — re-scoped after \"AT LITURGY\" (= shared). Cross-surface variant registered."
    }
  }
};
