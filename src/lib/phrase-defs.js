// ── PHRASE DEFINITIONS (extracted from tone-trainer.jsx) ──────────────────────
// Tone phrase data (recite / inton / prep / cad + per-phrase cadDurs), keyed by tone.
// Pure literal data — no logic, no React. Extracted so both the component and
// tools/test_pointing_roles.mjs share the SAME definitions (no replicated copy to drift).
// Consumed by pointLine() (recite/inton/prep/cad) and cadDuration() (cadDurs).

// ── PHRASE DEFINITIONS (keyed by tone number) ────────────────────────────────
// recite : reciting-tone pitch
// inton  : phrase opens with an intonation note on the reciting pitch
// prep   : preparatory note before the cadence
// cad    : cadence pitch figure, hung on the last INTERNAL accent
//
// Tone 1 (Drillock & Ealy, corrected):
//  - Phrase B cadence is do → re → ti (hold do, up a tone to re, down a third to ti)
//  - prep on ti belongs to Phrase A specifically (not a general rule)
//  - anchor is the last INTERNAL accent (see pointLine), not merely the last accent
//
// Tone 2 (Obikhod Common Chant, verified against OCA corpus + unison recording):
//  - Phrase A: no intonation, cadence fa→mi→re (fa=H, mi=Q, re=H — audio confirmed)
//  - Phrases B+D: cadence di→re (di = chromatic #do; both half notes)
//  - Phrase C: inton true, prep TI (not la — la is soprano harmony; unison uses ti),
//              cadence lands on do. SATB soprano 'la' is a harmony note, not the melody.
//  - Final: prep ti, cadence do→re→do→ti (ti=whole note)
//  - Pre-slur rule: see pointLine() — a stressed monosyllable before the prep
//    receives [re,ti] two quarter notes. Confirmed: "Hear me O Lord", "Christ God".
export const PH_DEFS = {
  1: {
    // Tone 1 Common Chant (Obikhod) — L'vov-Bakhmetev, verified from Drillock & Ealy
    // tutorial and OCA service scores. June 2026 deep-dive session.
    // cadDurs blocks encode per-phrase duration logic; cadDuration() reads these.
    // Rhythmic balancing (dotted halves, extended whole notes) requires the
    // rhythmic grouping engine (not yet built) — machine defaults to plain H.
    A: {
      recite: "re", inton: true, prep: "ti", cad: ["do"],
      cadDurs: {
        // Single pitch cadence — no melisma possible (only one pitch).
        // Anchor: H. Fills: Q. Close: H default.
        // H· and W driven by rhythmic balancing (rhythmic grouping engine, TBD).
        // Pre-slur: scoped to Tone 1 Phrase A only — see pointLine() guard.
        anchor:    "H",
        fillPitch: "do",
        fillDur:   "Q",
        closeDur:  "H",
        wholeNote: null,   // unconfirmed — rhythmic grouping engine needed
        melisma:   null,   // N/A — single pitch figure
      },
    },
    B: {
      recite: "do", inton: false, prep: null, cad: ["do", "re", "ti"],
      cadDurs: {
        // Score-verified: anchor do(H), fills re(H at count=3 / Q at count≥4),
        // close ti(H) default. Melisma do·re on anchor at count=2.
        // Whole note / dotted half on close driven by rhythmic balancing (TBD).
        anchor:           "H",
        fillPitch:        "re",
        fillDur:          { lte3: "H", gte4: "Q" },
        closeDur:         "H",
        melismaThreshold: 3,   // count<3 → do·re melisma on anchor syllable
        wholeNote:        null, // rhythmic grouping engine needed
      },
    },
    C: {
      recite: "re", inton: true, prep: null, cad: ["do", "ti"],
      cadDurs: {
        // Score-verified: anchor do(H), fills do(H at count≤3 / Q at count≥4),
        // close ti(H) default. Fill pitch stays on do (same as anchor) throughout.
        // No melisma observed. Whole note / dotted half driven by rhythmic balancing (TBD).
        anchor:    "H",
        fillPitch: "do",
        fillDur:   { lte3: "H", gte4: "Q" },
        closeDur:  "H",
        melisma:   null,   // none observed — two-pitch figure distributes cleanly
        wholeNote: null,   // rhythmic grouping engine needed
      },
    },
    D: {
      recite: "do", inton: false, prep: null, cad: ["ti", "do", "re", "do", "ti"],
      // TWO-ACCENT architecture — anchor (ti, pos 1) + secondary accent (re, pos 3).
      // Generic distribute() is INCOMPATIBLE — dedicated per-phrase logic required.
      // Melisma collapses adjacent positions onto accented syllables when count<5.
      // Melisma placement is accent-driven (director/machine marks both positions).
      // Score-verified duration rules:
      //   count=3: ti·do(H mel) · re·do(H mel) · ti(H)
      //   count=4: ti(H) · do(H) · re·do(H mel) · ti(H or W)
      //   count=5: ti(H) · do(H) · re(H) · do(H) · ti(H or W) — exact fit
      //   count=6: ti(H) · do(H) · re(H) · do(Q) · do(Q) · ti(H or W)
      //   count=7: ti(H) · do(Q)×n · re·do(H mel) · ti(H)
      // Structural position notes always H; extra fills Q.
      // Provisional: period '.' and '//' marker on close → W (empirical, not tutorial-confirmed).
      cadDurs: {
        twoAccent:          true,
        structuralDur:      "H",   // all structural position notes
        fillDur:            "Q",   // extra fills beyond count=5
        melismaThreshold:   5,     // count<5 → collapse positions into melismas
        wholeNote:          "period_or_doubleslash", // provisional — see note above
      },
    },
    Final: {
      recite: "re", inton: false, prep: null, cad: ["do", "ti", "la"],
      // Score-verified: la close ALWAYS W (tutorial-stated, no exceptions observed).
      // Structural melisma at count<3 preserves full do·ti·la figure.
      // count=2: do·ti(H mel) · la(W)
      // count=3: do(H) · ti(H) · la(W) — exact fit
      // count≥5: do(Q) second position after anchor; ti fills remainder
      // Anchor duration (H/H·/W) and ti fill duration (H/Q) driven by rhythmic
      // balancing and available syllable count — rhythmic grouping engine needed.
      // Pre-slur: N/A — no prep note in Tone 1 Final Phrase.
      cadDurs: {
        closeDur:                "W",    // la always W — tutorial-confirmed
        melismaThreshold:        3,      // count<3 → do·ti melisma on anchor
        secondPositionThreshold: 5,      // count≥5 → do(Q) second position after anchor
        fillPitch:               "ti",   // remaining fills always on ti
        fillDur:                 { lte5: "H", gte6: "Q" }, // strong inference
        anchor:                  "H",   // default; H· or W via rhythmic grouping engine
        preslur:                 null,   // N/A — no prep note
      },
    },
  },
  2: {
    // Tone 2 cadence duration rules — score-verified from L'vov-Bakhmetev Obikhod
    // and Drillock & Ealy tutorial. Each phrase carries a cadDurs block encoding
    // per-phrase duration logic. cadDuration() reads these to produce correct note
    // values. Tones without cadDurs fall through to the generic lineToNotes handler.
    A: {
      recite: "re", inton: false, prep: null, cad: ["fa", "mi", "re"],
      cadDurs: {
        // fa(H) always on anchor. mi fills: H when count≤3, Q when count≥4.
        // re close: H· (dotted half) when count≤3, H when count≥4.
        // Anchor carries fa·mi melisma when count<3 (count=1: fa·mi·re; count=2: fa·mi).
        anchor:    "H",
        fillPitch: "mi",
        fillDur:   { lte3: "H",  gte4: "Q"  },
        closeDur:  { lte3: "H·", gte4: "H"  },
        melismaThreshold: 3,  // anchor carries melisma when count < threshold
        wholeNote: null,      // no whole note rule confirmed for Phrase A
      },
    },
    B: {
      recite: "re", inton: false, prep: null, cad: ["di", "re"],
      cadDurs: {
        // di(H) always on anchor. di fills: H when count=3, Q when count≥4.
        // re close: W when single word fills entire cadence, else H.
        anchor:    "H",
        fillPitch: "di",
        fillDur:   { lte3: "H", gte4: "Q" },
        closeDur:  "H",
        wholeNote: "single-word",  // fires when one word fills entire cadence
      },
    },
    C: {
      recite: "re", inton: true, prep: "ti", cad: ["do"],
      cadDurs: {
        // do(H) anchor. do fills: H when count=2 (single-word), Q when count≥3.
        // do close: W when cadence spans multiple words, else H.
        anchor:    "H",
        fillPitch: "do",
        fillDur:   { lte2: "H", gte3: "Q" },
        closeDur:  "H",
        wholeNote: "multi-word",   // fires when cadence spans more than one word
      },
    },
    D: {
      recite: "do", inton: false, prep: null, cad: ["di", "re"],
      cadDurs: {
        // Same figure as Phrase B but reciting on do. Same duration rules.
        // Whole note trigger: OPPOSITE to B — fires on multi-word cadence.
        anchor:    "H",
        fillPitch: "di",
        fillDur:   { lte3: "H", gte4: "Q" },
        closeDur:  "H",
        wholeNote: "multi-word",
      },
    },
    Final: {
      recite: "re", inton: false, prep: "ti", cad: ["do", "re", "do", "ti"],
      cadDurs: {
        // do anchor always W. ti close always W.
        // re and middle do: H when they have own syllable (count≥4).
        // Anchor melisma when count<4: count=2 → do·re·do on anchor; count=3 → do·re on anchor.
        // Pre-slur: re(H·)·ti(Q) when no reciting tone precedes; re(Q)·ti(Q) normally.
        // count≥5: unconfirmed — flag with rubric note, treat as count=4 pattern.
        anchor:    "W",
        closeDur:  "W",
        fillDur:   "H",  // re and middle do are H when separated
        melismaThreshold: 4,       // anchor carries melisma when count < 4
        unconfirmedAbove: 4,       // flag count > 4 as unconfirmed in rubric
      },
    },
  },
  3: {
    // Tone 3 Common Chant — two rotating phrases (A and B) only, no C or D.
    // All three phrases share reciting tone fa. Phrase identity is determined
    // solely by cadence, not reciting pitch.
    // Source: Drillock & Ealy tutorial + 164-instance OCA corpus (2 services).
    A: {
      recite: "fa", inton: false, prep: null,
      // 3-note figure: anchor=fa(H), middle fills=do(Q each), final=mi(H).
      // Tutorial explicit: "unaccented syllables between accented and final are sung on do."
      // Must be ['fa','do','mi'] not ['fa','mi'] — distribute() repeats penultimate (do),
      // giving correct do fill for extra syllables; ['fa','mi'] would repeat fa (wrong).
      cad: ["fa", "do", "mi"],
    },
    B: {
      recite: "fa", inton: false, prep: null,
      // anchorDH:true — cadence anchor is a DOTTED HALF NOTE (1.5×H), new for Tone 3.
      // Audio-confirmed: anchor ~1.3s at H_ref≈0.76s, dH_ref≈1.14s.
      // Long-cadence rule (>3 cad syllables): dH→H, extras ride on mi (distribute handles).
      cad: ["mi", "re", "do"], anchorDH: true,
    },
    Final: {
      recite: "fa", inton: false, prep: null,
      // Two-part cadence. Tutorial: mi(H) do(Q) re(Q) | mi(Q) fa(Q) re(H) do(W).
      // Director always marks two internal accents (31/31 corpus instances).
      // anchor (anchorIndex) = last internal accent = second mi (position 3 in figure).
      // First mi (position 0) currently falls in body as reciting fa(Q) — known gap v0.9.0.
      cad: ["mi", "do", "re", "mi", "fa", "re", "do"],
    },
  },
};
