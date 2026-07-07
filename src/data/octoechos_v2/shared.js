// src/data/octoechos_v2/shared.js
// ─────────────────────────────────────────────────────────────────────────────
// Octoechos V2 — tone-independent shared tables (spec §5), §11 step 2.
// GENERATED from the raw pdftotext layers of the orthodox-sources chapter
// files (July 7 2026) — text extracted by line markers and joined
// programmatically; label prefixes ("Verse: ", "Prokeimenon:", etc.) stripped;
// U+041E О normalized to Latin O per the §9.10 ruling with per-node
// homoglyph_log; the single ruled digit-zero site (2-5 Thursday Alleluia)
// normalized with log. NOTHING hand-retyped.
//
// Tier rule applied: tier 2 where the print carries pointing (*), tier 1
// where it does not — per-item source fact (§3.2 of encoding_rule_v2.md).
// Note: verse/prokeimenon-class Tier-2 texts print no ** — see the §6
// pointing-check relaxation recorded in the session notes.
//
// Every table is a tone-invariance HYPOTHESIS: re-verify against each tone's
// chapters as encoded (§5); divergence is a finding and the item moves
// per-tone. lic_verse_ladder is DELIBERATELY ABSENT: byte-comparison across
// 2-1/2-2 print sites falsified the shared-ladder hypothesis (see
// project_notes.md, July 7 2026 — LIC verses stay per-position per §4).
// Dynamically loaded only (§2.1) via loadOctoechosV2Shared().
// ─────────────────────────────────────────────────────────────────────────────

export default {
  "daily_vespers_prokeimena": {
    "sun": {
      "tone": 8,
      "text": {
        "text": "Behold now, bless ye the Lord, * all ye servants of the Lord.",
        "tier": 2,
        "src": {
          "file": "2-2.pdf",
          "locus": "sun-evening Vespers, daily prokeimenon"
        }
      },
      "verse": {
        "text": "Ye that stand in the house of the Lord, in the courts of the house of our God.",
        "tier": 1,
        "src": {
          "file": "2-2.pdf",
          "locus": "sun-evening Vespers, daily prokeimenon (verse)"
        }
      }
    },
    "mon": {
      "tone": 4,
      "text": {
        "text": "The Lord will hearken unto me * when I cry unto Him.",
        "tier": 2,
        "src": {
          "file": "2-3.pdf",
          "locus": "mon-evening Vespers, daily prokeimenon"
        }
      },
      "verse": {
        "text": "When I called upon Thee, O God of my righteousness, Thou didst hearken unto me.",
        "tier": 1,
        "src": {
          "file": "2-3.pdf",
          "locus": "mon-evening Vespers, daily prokeimenon (verse)"
        }
      }
    },
    "tue": {
      "tone": 1,
      "text": {
        "text": "Thy mercy, O Lord, shall pursue me * all the days of my life.",
        "tier": 2,
        "src": {
          "file": "2-4.pdf",
          "locus": "tue-evening Vespers, daily prokeimenon"
        }
      },
      "verse": {
        "text": "The Lord is my shepherd, and I shall not want. In a place of green pasture, there hath He made me to dwell.",
        "tier": 1,
        "src": {
          "file": "2-4.pdf",
          "locus": "tue-evening Vespers, daily prokeimenon (verse)"
        }
      }
    },
    "wed": {
      "tone": 5,
      "text": {
        "text": "O God, in Thy name save me, * and in Thy strength do Thou judge me.",
        "tier": 2,
        "src": {
          "file": "2-5.pdf",
          "locus": "wed-evening Vespers, daily prokeimenon"
        }
      },
      "verse": {
        "text": "O God, hearken unto my prayer, give ear unto the words of my mouth.",
        "tier": 1,
        "src": {
          "file": "2-5.pdf",
          "locus": "wed-evening Vespers, daily prokeimenon (verse)"
        }
      }
    },
    "thu": {
      "tone": 6,
      "text": {
        "text": "My help cometh from the Lord, * Who hath made heaven and the earth.",
        "tier": 2,
        "src": {
          "file": "2-6.pdf",
          "locus": "thu-evening Vespers, daily prokeimenon"
        }
      },
      "verse": {
        "text": "I have lifted up mine eyes to the Mountains, from whence cometh my help.",
        "tier": 1,
        "src": {
          "file": "2-6.pdf",
          "locus": "thu-evening Vespers, daily prokeimenon (verse)"
        }
      }
    },
    "fri": {
      "tone": 7,
      "text": {
        "text": "O God, my helper art Thou, * and Thy mercy shall go before me.",
        "tier": 2,
        "src": {
          "file": "2-7.pdf",
          "locus": "fri-evening Vespers, daily prokeimenon"
        }
      },
      "verse": {
        "text": "Rescue me from mine enemies, O God, and from them that rise up against me redeem me.",
        "tier": 1,
        "src": {
          "file": "2-7.pdf",
          "locus": "fri-evening Vespers, daily prokeimenon (verse)"
        }
      }
    }
  },
  "weekday_aposticha_verses": {
    "note": "Day-keyed verse SETS (§5, day-keying confirmed 2-7). Identity across print sites verified programmatically from the raw text layers; any divergence would have failed generation.",
    "by_day": {
      "vespers": {
        "sun": "standard_vespers",
        "mon": "standard_vespers",
        "tue": "standard_vespers",
        "wed": "standard_vespers",
        "thu": "standard_vespers",
        "fri": "departed_vespers"
      },
      "matins": {
        "mon": "standard_matins",
        "tue": "standard_matins",
        "wed": "standard_matins",
        "thu": "thursday_matins_as_printed",
        "fri": "standard_matins",
        "sat": "departed_matins_saturday"
      }
    },
    "sets": {
      "standard_vespers": [
        {
          "text": "Unto Thee have I lifted up mine eyes, unto Thee that dwellest in heaven. Behold, as the eyes of servants look unto the hands of their masters, as the eyes of the handmaid look unto the hands of her Mistress, so do our eyes look unto the Lord our God, * until He take pity on us.",
          "tier": 2,
          "src": {
            "file": "2-2.pdf",
            "locus": "Sunday-evening Vespers aposticha (identical print verified 2-2/2-3/2-4/2-5/2-6)"
          }
        },
        {
          "text": "Have mercy on us, O Lord, have mercy on us, for greatly are we filled with abasement. Greatly hath our soul been filled therewith; let reproach come upon them that prosper, * and abasement on the proud.",
          "tier": 2,
          "src": {
            "file": "2-2.pdf",
            "locus": "Sunday-evening Vespers aposticha, second verse (identical print verified 2-2/2-3/2-4/2-5/2-6)"
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
      "standard_matins": [
        {
          "text": "We were filled in the morning with Thy mercy, O Lord, and we rejoiced and were glad. In all our days, let us be glad for the days wherein Thou didst humble us, for the years wherein we saw evils. And look upon Thy servants, and upon Thy works, * and do Thou guide their sons.",
          "tier": 2,
          "src": {
            "file": "2-2.pdf",
            "locus": "Monday Matins aposticha (identical print verified 2-2/2-3/2-4/2-6)"
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
          "text": "And let the brightness of the Lord our God be upon us, and the works of our hands do Thou guide aright upon us, * yea, the work of our hands do Thou guide aright.",
          "tier": 2,
          "src": {
            "file": "2-2.pdf",
            "locus": "Monday Matins aposticha, second verse (identical print verified 2-2/2-3/2-4/2-6)"
          }
        }
      ],
      "thursday_matins_as_printed": [
        {
          "text": "Unto Thee have I lifted up mine eyes, unto Thee that dwellest in heaven. Behold, as the eyes of servants look unto the hands of their masters, as the eyes of the handmaid look unto the hands of her Mistress, so do our eyes look unto the Lord our God, * until He take pity on us.",
          "tier": 2,
          "src": {
            "file": "2-5.pdf",
            "locus": "Thursday Matins aposticha, first verse AS PRINTED (§9.13 anomaly: the Vespers pair’s verse at a Matins position; ruled encode-as-printed)"
          }
        },
        {
          "text": "And let the brightness of the Lord our God be upon us, and the works of our hands do Thou guide aright upon us, * yea, the work of our hands do Thou guide aright.",
          "tier": 2,
          "src": {
            "file": "2-5.pdf",
            "locus": "Thursday Matins aposticha, second verse"
          }
        }
      ],
      "departed_vespers": [
        {
          "text": "Blessed are they whom Thou hast chosen * and taken to Thyself, O Lord",
          "tier": 2,
          "src": {
            "file": "2-7.pdf",
            "locus": "Friday-evening Vespers aposticha, departed verses"
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
            "file": "2-7.pdf",
            "locus": "Friday-evening Vespers aposticha, departed verses (second)"
          }
        }
      ],
      "departed_matins_saturday": [
        {
          "text": "Blessed are those whom Thou hast chosen * and taken to Thyself, O Lord.",
          "tier": 2,
          "src": {
            "file": "2-7.pdf",
            "locus": "Saturday Matins aposticha of the departed (note per-site variance: “Blessed are THOSE whom” vs Friday evening’s “they”)"
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
            "file": "2-7.pdf",
            "locus": "Saturday Matins aposticha of the departed (second)"
          }
        },
        {
          "text": "Their memorial * is unto generation and generation.",
          "tier": 2,
          "src": {
            "file": "2-7.pdf",
            "locus": "Saturday Matins aposticha of the departed (third — first attested 2-7)"
          }
        }
      ]
    }
  },
  "daily_liturgy_propers": {
    "mon": {
      "prokeimenon": {
        "tone": 4,
        "text": {
          "text": "He maketh His angels spirits, * and His ministers a flame of fire.",
          "tier": 2,
          "src": {
            "file": "2-2.pdf",
            "locus": "mon Liturgy prokeimenon"
          }
        },
        "verse": {
          "text": "Bless the Lord, O my soul; O Lord my God, Thou hast been magnified exceedingly.",
          "tier": 1,
          "src": {
            "file": "2-2.pdf",
            "locus": "mon Liturgy prokeimenon verse"
          }
        }
      },
      "alleluia": {
        "tone": 5,
        "text": {
          "text": "Praise Him, all ye His angels; praise Him all ye His hosts.",
          "tier": 1,
          "src": {
            "file": "2-2.pdf",
            "locus": "mon Liturgy Alleluia"
          }
        },
        "verses": [
          {
            "text": "For He spake, and they came to be; He commanded, and they were created.",
            "tier": 1,
            "src": {
              "file": "2-2.pdf",
              "locus": "mon Liturgy Alleluia verse"
            }
          }
        ]
      },
      "communion": {
        "text": "He maketh His angels spirits, and His ministers a flame of fire.",
        "tier": 1,
        "src": {
          "file": "2-2.pdf",
          "locus": "mon Liturgy koinonikon"
        }
      }
    },
    "tue": {
      "prokeimenon": {
        "tone": 7,
        "text": {
          "text": "The righteous man shall be glad in the Lord * and shall hope in Him.",
          "tier": 2,
          "src": {
            "file": "2-3.pdf",
            "locus": "tue Liturgy prokeimenon"
          }
        },
        "verse": {
          "text": "Hearken, O God, unto my prayer, when I make supplication unto Thee.",
          "tier": 1,
          "src": {
            "file": "2-3.pdf",
            "locus": "tue Liturgy prokeimenon verse"
          }
        }
      },
      "alleluia": {
        "tone": 4,
        "text": {
          "text": "The righteous man shall flourish like a palm tree, and like a cedar in Lebanon shall he be multiplied.",
          "tier": 1,
          "src": {
            "file": "2-3.pdf",
            "locus": "tue Liturgy Alleluia"
          }
        },
        "verses": [
          {
            "text": "They that are planted in the house of the Lord, in the courts of our God they shall blossom forth.",
            "tier": 1,
            "src": {
              "file": "2-3.pdf",
              "locus": "tue Liturgy Alleluia verse"
            }
          }
        ]
      },
      "communion": {
        "text": "In everlasting remembrance shall the righteous be; he shall not be afraid of evil tidings.",
        "tier": 1,
        "src": {
          "file": "2-3.pdf",
          "locus": "tue Liturgy koinonikon"
        }
      }
    },
    "wed": {
      "prokeimenon": {
        "tone": 3,
        "text": {
          "text": "My soul doth magnify the Lord, * and my spirit hath rejoiced in God my Savior.",
          "tier": 2,
          "src": {
            "file": "2-4.pdf",
            "locus": "wed Liturgy prokeimenon"
          },
          "sourceLabel": "the hymn of the Theotokos"
        },
        "verse": {
          "text": "For He hath looked upon the lowliness of His handmaiden; for behold, from henceforth all generations shall call me blessed.",
          "tier": 1,
          "src": {
            "file": "2-4.pdf",
            "locus": "wed Liturgy prokeimenon verse"
          }
        }
      },
      "alleluia": {
        "tone": 8,
        "text": {
          "text": "Hearken, O daughter, and see, and incline thine ear.",
          "tier": 1,
          "src": {
            "file": "2-4.pdf",
            "locus": "wed Liturgy Alleluia"
          }
        },
        "verses": [
          {
            "text": "The rich among the people shall entreat thy countenance.",
            "tier": 1,
            "src": {
              "file": "2-4.pdf",
              "locus": "wed Liturgy Alleluia verse"
            }
          }
        ]
      },
      "communion": {
        "text": "I will take the cup of salvation, and I will call upon the name of the Lord.",
        "tier": 1,
        "src": {
          "file": "2-4.pdf",
          "locus": "wed Liturgy koinonikon"
        }
      }
    },
    "thu": {
      "prokeimenon": {
        "tone": 8,
        "text": {
          "text": "Their sound hath gone forth into all the earth, * and their words unto the ends of the world.",
          "tier": 2,
          "src": {
            "file": "2-5.pdf",
            "locus": "thu Liturgy prokeimenon"
          }
        },
        "verse": {
          "text": "The heavens declare the glory of God, and the firmament proclaimeth the work of His hands.",
          "tier": 1,
          "src": {
            "file": "2-5.pdf",
            "locus": "thu Liturgy prokeimenon verse"
          }
        }
      },
      "alleluia": {
        "tone": 1,
        "text": {
          "text": "The heavens shall confess Thy wonders, O Lord, and Thy truth in the congregation of saints.",
          "tier": 1,
          "src": {
            "file": "2-5.pdf",
            "locus": "thu Liturgy Alleluia"
          },
          "homoglyph_log": [
            {
              "from": "ASCII digit 0 as O (\"0 Lord\", §9.10 ext.)",
              "to": "O",
              "count": 1
            }
          ]
        },
        "verses": [
          {
            "text": "God Who is glorified in the council of the saints.",
            "tier": 1,
            "src": {
              "file": "2-5.pdf",
              "locus": "thu Liturgy Alleluia verse"
            }
          }
        ]
      },
      "communion": {
        "text": "Their sound hath gone forth into all the earth, and their words unto the ends of the world.",
        "tier": 1,
        "src": {
          "file": "2-5.pdf",
          "locus": "thu Liturgy koinonikon"
        }
      }
    },
    "fri": {
      "prokeimenon": {
        "tone": 7,
        "text": {
          "text": "Exalt ye the Lord our God, * and worship the footstool of His feet, for He is holy.",
          "tier": 2,
          "src": {
            "file": "2-6.pdf",
            "locus": "fri Liturgy prokeimenon"
          }
        },
        "verse": {
          "text": "The Lord is King, let the peoples rage.",
          "tier": 1,
          "src": {
            "file": "2-6.pdf",
            "locus": "fri Liturgy prokeimenon verse"
          }
        }
      },
      "alleluia": {
        "tone": 4,
        "text": {
          "text": "Remember Thy congregation which Thou hast purchased from the beginning.",
          "tier": 1,
          "src": {
            "file": "2-6.pdf",
            "locus": "fri Liturgy Alleluia"
          }
        },
        "verses": [
          {
            "text": "God is our King before the ages; * He hath wrought salvation in the midst of the earth.",
            "tier": 2,
            "src": {
              "file": "2-6.pdf",
              "locus": "fri Liturgy Alleluia verse"
            }
          }
        ]
      },
      "communion": {
        "text": "Thou hast wrought salvation in the midst of the earth, O God.",
        "tier": 1,
        "src": {
          "file": "2-6.pdf",
          "locus": "fri Liturgy koinonikon"
        }
      }
    },
    "sat": {
      "prokeimenon": {
        "tone": 8,
        "text": {
          "text": "Be glad in the Lord, and rejoice, * O ye righteous.",
          "tier": 2,
          "src": {
            "file": "2-7.pdf",
            "locus": "sat Liturgy prokeimenon"
          }
        },
        "verse": {
          "text": "Blessed are they whose iniquities are forgiven, and whose sins are covered.",
          "tier": 1,
          "src": {
            "file": "2-7.pdf",
            "locus": "sat Liturgy prokeimenon verse"
          }
        }
      },
      "alleluia": {
        "tone": 4,
        "text": {
          "text": "The righteous cried, and the Lord heard them, and delivered them out of all their tribulations.",
          "tier": 1,
          "src": {
            "file": "2-7.pdf",
            "locus": "sat Liturgy Alleluia"
          }
        },
        "verses": [
          {
            "text": "Many are the tribulations of the righteous, but the Lord shall deliver them out of them all.",
            "tier": 1,
            "src": {
              "file": "2-7.pdf",
              "locus": "sat Liturgy Alleluia verse"
            }
          },
          {
            "text": "Blessed are they whom Thou hast chosen and taken to Thyself, O Lord. Their memorial is unto generation and generation.",
            "tier": 1,
            "src": {
              "file": "2-7.pdf",
              "locus": "sat Liturgy Alleluia verse"
            }
          }
        ]
      },
      "communion": {
        "text": "Rejoice in the Lord, O ye righteous; praise is meet for the upright.",
        "tier": 1,
        "src": {
          "file": "2-7.pdf",
          "locus": "sat Liturgy koinonikon"
        }
      },
      "prokeimenon_departed": {
        "tone": 6,
        "rubric": "And for the Departed, in Tone VI:",
        "text": {
          "text": "Their souls shall dwell among good things.",
          "tier": 1,
          "src": {
            "file": "2-7.pdf",
            "locus": "Saturday Liturgy prokeimenon for the departed"
          }
        }
      },
      "communion_departed": {
        "text": "Blessed are they whom Thou hast chosen and taken to Thyself, O Lord. Their memorial is unto generation and generation.",
        "tier": 1,
        "src": {
          "file": "2-7.pdf",
          "locus": "Saturday Liturgy koinonikon for the departed"
        },
        "sourceLabel": "Another, for the departed:"
      }
    }
  },
  "saturday_vespers_prokeimenon": {
    "tone": 6,
    "text": {
      "text": "The Lord is King, * He is clothed with majesty.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Saturday Great Vespers prokeimenon"
      }
    },
    "verses": [
      {
        "text": "The Lord is clothed with strength and He hath girt Himself.",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Saturday GV prokeimenon verse 1"
        }
      },
      {
        "text": "For He established the universe which shall not be shaken.",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Saturday GV prokeimenon verse 2"
        }
      },
      {
        "text": "Holiness becometh Thy house, O Lord, unto length of days.",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Saturday GV prokeimenon verse 3"
        }
      }
    ]
  },
  "saturday_gv_aposticha_verses": [
    {
      "text": "The Lord is King: He is clothed with majesty. * The Lord is clothed with strength and He hath girt Himself.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Saturday Great Vespers aposticha verse 1"
      }
    },
    {
      "text": "For He established the universe * which shall not be shaken.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Saturday Great Vespers aposticha verse 2"
      }
    },
    {
      "text": "Holiness becometh Thy house, * O Lord, unto length of days.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Saturday Great Vespers aposticha verse 3"
      }
    }
  ],
  "lv_theotokos_aposticha_verses": [
    {
      "text": "I shall commemorate thy name * in every generation and generation.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Little Vespers Theotokos aposticha verse 1"
      }
    },
    {
      "text": "Hearken, O daughter, and see, and incline thine ear; * and forget thine own people and thy father’s house.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Little Vespers Theotokos aposticha verse 2"
      }
    },
    {
      "text": "The rich among the people * shall entreat thy countenance.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Little Vespers Theotokos aposticha verse 3"
      }
    }
  ],
  "theotokos_virgin_rejoice": {
    "tone": 4,
    "text": {
      "text": "O Theotokos and Virgin, rejoice, * O Mary, Full of grace; the Lord is with thee; * blessed art thou among women, * and blessed is the Fruit of thy womb, ** for thou hast borne the Savior of our souls.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Saturday Great Vespers, after the aposticha (vigil)"
      },
      "provenance_note": "Printed with “(Thrice)”; the vigil rubric (stored beside) governs Thrice/Twice/Once — device left to assembly per the rubric, not a repeat field (§9.4 covers “(Twice)” only; flagged in session notes)."
    },
    "vigil_rubric": "Note: If it is a regular Sunday Vigil, we chant “O Theotokos and Virgin ...,” (Thrice). If it is one of the 12 great feasts, we chant the Troparion of the feast (Thrice). If it is a Sunday coinciding with some other feast, we chant “O Theotokos and Virgin ...,” (Twice), and the Troparion of the feast (Once)."
  },
  "evlogitaria": {
    "heading": "The Resurrectional Verses (THE EVLOGITARIA)",
    "refrain": {
      "text": "Blessed art Thou, O Lord, * teach me Thy statutes.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Evlogitaria refrain"
      }
    },
    "troparia": [
      {
        "text": "The assembly of angels was amazed, * beholding Thee numbered among the dead; * yet, O Savior, * destroying the stronghold of death, * and with Thyself raising up Adam, ** Thou hast freed all from Hades.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Evlogitaria troparion 1"
        },
        "label": "plain"
      },
      {
        "text": "Why mingle ye myrrh with tears of pity, * O ye women disciples? * Thus said the radiant angel within the tomb * addressing the myrrh-bearing women; * behold the tomb and understand, ** for the Savior hath arisen from the tomb.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Evlogitaria troparion 2"
        },
        "label": "plain"
      },
      {
        "text": "Very early * the myrrh-bearing women hastened * unto Thy tomb, lamenting, * but the angel stood before them and said: * the time for lamentation is passed, weep not, ** but tell the apostles of the Resurrection.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Evlogitaria troparion 3"
        },
        "label": "plain"
      },
      {
        "text": "The myrrh-bearing women, * with myrrh came to Thy tomb, O Savior, bewailing, * but the angel addressed them, saying: * Why number ye the living among the dead, * for as God ** He is risen from the tomb.",
        "tier": 2,
        "src": {
          "file": "2-1.pdf",
          "locus": "Evlogitaria troparion 4"
        },
        "label": "plain"
      }
    ],
    "glory_verse": {
      "text": "Glory to the Father, and to the Son, and to the Holy Spirit.",
      "tier": 1,
      "src": {
        "file": "2-1.pdf",
        "locus": "Evlogitaria Glory verse (printed in full)"
      }
    },
    "glory": {
      "text": "Let us worship the Father, * and His Son, and the Holy Spirit, * the Holy Trinity, * one in essence, * crying with the seraphim: ** Holy, Holy, Holy art Thou, O Lord.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Evlogitaria Glory troparion (Trinity)"
      },
      "label": "glory"
    },
    "both_now_verse": {
      "text": "Both now and ever, and unto the ages of ages, amen.",
      "tier": 1,
      "src": {
        "file": "2-1.pdf",
        "locus": "Evlogitaria Both-now verse (printed in full)"
      }
    },
    "both_now": {
      "text": "In bringing forth the Giver of life, * thou hast delivered Adam from sin, O Virgin, * and hast brought joy to Eve * instead of sorrow; * and those fallen from life * have thereunto been restored, ** by Him Who of thee was incarnate, God and man.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Evlogitaria Both-now theotokion"
      },
      "label": "both_now"
    },
    "closing": "Alleluia, alleluia, alleluia. Glory to Thee, O God. (Thrice).",
    "note": "V1 comparison surface: index.js EVLOGITARIA — compare at cross-check time (§5)."
  },
  "polyeleos": {
    "rubric": "If a POLYELEOS is appointed, we chant: (Select verses):",
    "verses": [
      {
        "text": "Praise ye the name of the Lord; O ye servants, praise the Lord. Alleluia, alleluia, alleluia.",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Polyeleos select verse 1 (with Alleluia refrain as printed)"
        }
      },
      {
        "text": "Blessed is the Lord out of Zion, who dwelleth in Jerusalem. Alleluia, alleluia, alleluia.",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Polyeleos select verse 2 (with Alleluia refrain as printed)"
        }
      },
      {
        "text": "O give thanks unto the Lord, for He is good; for His mercy endureth forever. Alleluia, alleluia, alleluia.",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Polyeleos select verse 3 (with Alleluia refrain as printed)"
        }
      },
      {
        "text": "O give thanks unto the God of heaven; for His mercy endureth forever. Alleluia, alleluia, alleluia.",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Polyeleos select verse 4 (with Alleluia refrain as printed)"
        }
      }
    ],
    "prelent_note": "(On the Sunday of the Prodigal Son, Meat-Fare, and Cheese-Fare Sundays, after the Polyeleos we chant Psalm 136: “By the rivers of Babylon ...,”)",
    "megalynarion_rubric": "Then, the Megalynarion of the feast is chanted, if there is one, with the selected psalm verse. However, if it is a Sunday, in general parish practice the Megalynarion is chanted only once, without the psalm verse, unless it is a great feast of the Lord, or the Theotokos."
  },
  "praises_verse_ladder": [
    {
      "text": "To do among them the judgment that is written, * This glory shall be to all His saints.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Sunday Matins Praises verse 1"
      }
    },
    {
      "text": "Praise ye God in His saints, * praise Him in the firmament of His power.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Sunday Matins Praises verse 2"
      }
    },
    {
      "text": "Praise Him for His mighty acts, * praise Him according to the multitude of His greatness.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Sunday Matins Praises verse 3"
      }
    },
    {
      "text": "Praise Him with the sound of trumpet, * praise Him with the psaltery and harp.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Sunday Matins Praises verse 4"
      }
    },
    {
      "text": "Praise Him with timbrel and dance, * praise Him with strings and flute.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Sunday Matins Praises verse 5"
      }
    },
    {
      "text": "Praise Him with tuneful cymbals, praise Him with cymbals of jubilation. * Let every breath praise the Lord.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Sunday Matins Praises verse 6"
      }
    },
    {
      "text": "Arise, O Lord my God, let Thy hands be lifted high; * forget not Thy paupers to the end.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Sunday Matins Praises verse 7"
      }
    },
    {
      "text": "I will confess Thee, O Lord, with my whole heart, * I will tell of all Thy wonders.",
      "tier": 2,
      "src": {
        "file": "2-1.pdf",
        "locus": "Sunday Matins Praises verse 8"
      }
    }
  ],
  "ode8_hymn_verse": {
    "rubric": "After the Troparia from the Menaion for ODE VIII, we chant:",
    "verse": {
      "text": "We praise, we bless, we worship the Lord, praising and supremely exalting Him throughout all ages.",
      "tier": 1,
      "src": {
        "file": "2-1.pdf",
        "locus": "Sunday Matins, before the Ode VIII irmos/katavasia"
      }
    }
  },
  "gregory_sinaite_hymn": {
    "title_rubric": "Then, the hymn of Gregory the Sinaite.",
    "source_note": "(which is chanted every Sunday after the canon)",
    "stanzas": [
      {
        "text": "It is truly meet to glorify Thee, the Word of God, before Whom the cherubim tremble and quake, and Whom the hosts of heaven glorify. And with fear we glorify Christ, the Bestower of life, Who rose from the tomb on the third day.",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Hymn of Gregory the Sinaite, stanza 1"
        }
      },
      {
        "text": "With divine songs let us all in a godly manner hymn the Father, the Son and the Spirit divine, the Might in three Hypostases, the one Sovereignty and Dominion.",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Hymn of Gregory the Sinaite, stanza 2"
        }
      },
      {
        "text": "Whom all mortals hymn and the hosts of heaven glorify, the essential Unity in three Hypostases, Who is worshipped with faith by all.",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Hymn of Gregory the Sinaite, stanza 3"
        }
      },
      {
        "text": "We magnify Thee, the Godhead, the Lord of the cherubim, the incomparable divine Origin of the seraphim, the indivisible Trinity in Unity.",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Hymn of Gregory the Sinaite, stanza 4"
        }
      },
      {
        "text": "I worship God: the beginningless Father, the Son Who is equally without beginning, and the Spirit. With hymns let us honor the one indivisible and unified Essence, the threefold Unity.",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Hymn of Gregory the Sinaite, stanza 5"
        }
      },
      {
        "text": "Shine forth Thy dazzling lightning flashes upon me, O my God in three Hypostases, Creator of all, and show me to be a splendid, luminous and immutable habitation of Thine unapproachable glory.",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Hymn of Gregory the Sinaite, stanza 6"
        }
      },
      {
        "text": "With fear let us glorify Christ the Bestower of life, Who ineffably became incarnate of the Virgin, for the cherubim tremble and quake before Him, and the angelic armies glorify Him.",
        "tier": 1,
        "src": {
          "file": "2-1.pdf",
          "locus": "Hymn of Gregory the Sinaite, stanza 7"
        }
      }
    ]
  }
};
