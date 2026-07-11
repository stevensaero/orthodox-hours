/**
 * test_pointing_roles.mjs
 *
 * Regression test for the POINTING ROLE-ASSIGNMENT layer — pointLine().
 *
 * Unlike test_pointing_paths.mjs (which covers the upstream syllabification /
 * bracket-parse layer), this test imports the REAL pointLine() and the REAL
 * PH_DEFS from src/lib — no replicated copy to drift. (Drift in a replicated copy
 * is exactly what let the Tone 2 Final pre-slur regression hide.)
 *
 * It asserts the role + pitch sequence pointLine() produces for curated lines per
 * tone/phrase. Each fixture reads as a line of the pointing spec.
 *
 * Scope: roles + pitches only. Durations live downstream in lineToNotes() /
 * lineToRolesWithDuration() and are a separate (future) coverage layer.
 *
 * NOTE on Tone 2 Final cadence pitches: pointLine() emits the raw distribute()
 * figure for the cadence. The Tone 2 Final DURATION engine (lineToNotes /
 * lineToRolesWithDuration, isTone2Final branch) rebuilds the rendered cadence
 * (e.g. restoring the closing ti) — so the cad pitches asserted here are
 * pointLine's role-level output, not the final rendered cadence.
 *
 * Usage: node tools/test_pointing_roles.mjs
 */

import { pointLine } from "../src/lib/pointing.js";
import { PH_DEFS } from "../src/lib/phrase-defs.js";

// ── line builders ────────────────────────────────────────────────────────────
// A single-syllable word. accent defaults to false. Optional source override
// (defaults to "test"; Tone 4 Phrase E fixtures need "truth" to simulate a
// real director bracket, since its guard checks source==="truth" specifically).
const W = (text, accent = false, source = "test") => ({ sylls: [{ text, accent, source }] });
// A multi-syllable word: sylls = [["pray", false], ["er", false], ...]
// Each entry may optionally include a third element for source override.
const WS = (sylls) => ({
  sylls: sylls.map(([text, accent, source]) => ({ text, accent: !!accent, source: source ?? "test" })),
});
const line = (phrase, ...words) => ({ phrase, words });

const pitchStr = (pitches) => pitches.join("·");

// ── fixtures ─────────────────────────────────────────────────────────────────
// expect: array of [text, role, pitchStr] in pointLine output order.
const FIXTURES = [
  {
    name: "T2 Final — pre-slur 'Hear' (regression guard: re·ti, not lone ti)",
    tone: 2, phrase: "Final",
    words: [W("Hear", true), W("me", true), W("O"), W("Lord")],
    expect: [
      ["Hear", "preslur", "re·ti"],
      ["me", "cad", "do"],
      ["O", "cad", "re"],
      ["Lord", "cad", "do"],
    ],
  },
  {
    name: "T2 Final — pre-slur with reciting tones preceding ('Pray to Christ God…')",
    tone: 2, phrase: "Final",
    words: [W("Pray"), W("to"), W("Christ", true), W("God", true), W("for"), W("us"), W("all")],
    expect: [
      ["Pray", "recite", "re"],
      ["to", "recite", "re"],
      ["Christ", "preslur", "re·ti"],
      ["God", "cad", "do"],
      ["for", "cad", "re"],
      ["us", "cad", "do"],
      ["all", "cad", "ti"],
    ],
  },
  {
    name: "T2 Final — control, NO pre-slur word (pre-anchor syllable unaccented → prep ti)",
    tone: 2, phrase: "Final",
    words: [W("We"), W("praise"), W("Thee"), W("O"), W("Lord", true)],
    expect: [
      ["We", "recite", "re"],
      ["praise", "recite", "re"],
      ["Thee", "recite", "re"],
      ["O", "prep", "ti"],
      ["Lord", "cad", "do·re·do·ti"],
    ],
  },
  {
    name: "T2 A — no intonation, cadence fa·mi·re on the anchor",
    tone: 2, phrase: "A",
    words: [W("Praise"), W("the"), W("Lord", true)],
    expect: [
      ["Praise", "recite", "re"],
      ["the", "recite", "re"],
      ["Lord", "cad", "fa·mi·re"],
    ],
  },
  {
    name: "T2 B — di·re cadence",
    tone: 2, phrase: "B",
    words: [W("We"), W("praise", true), W("Thee", true)],
    expect: [
      ["We", "recite", "re"],
      ["praise", "cad", "di"],
      ["Thee", "cad", "re"],
    ],
  },
  {
    name: "T1 A — inton/prep/cad ('Let my [prayer] arise')",
    tone: 1, phrase: "A",
    words: [W("Let"), W("my"), W("prayer", true), WS([["a", false], ["rise", false]])],
    expect: [
      ["Let", "recite", "re"],
      ["my", "recite", "re"],
      ["prayer", "inton", "re"],
      ["a", "prep", "ti"],
      ["rise", "cad", "do"],
    ],
  },

  // ── Tone 3 — Common Chant, dedicated per-phrase handlers (Jul 2026) ─────
  // No shared distribute() involved in any of these — see
  // tone_trainer_tone3_analysis.md §15/§16 for the bugs that made that
  // necessary (shared distribute() silently dropped the fixed final pitch
  // for both Phrase A and B's dominant 2-syllable case).
  {
    name: "T3 A — 2-syllable cadence (dominant real-world shape): anchor+final only, no fill",
    tone: 3, phrase: "A",
    words: [W("Let"), W("us"), W("praise", true), W("Him")],
    expect: [
      ["Let", "recite", "fa"],
      ["us", "recite", "fa"],
      ["praise", "cad", "fa"],
      ["Him", "cad", "mi"],
    ],
  },
  {
    name: "T3 A — 3-syllable cadence: fill repeats fa (Jul 2026 tutorial-typo fix, do→fa)",
    tone: 3, phrase: "A",
    words: [W("Let"), W("praise", true), W("be"), W("Thine")],
    expect: [
      ["Let", "recite", "fa"],
      ["praise", "cad", "fa"],
      ["be", "cad", "fa"],
      ["Thine", "cad", "mi"],
    ],
  },
  {
    name: "T3 B — 2-syllable cadence: anchor+final only, no fill (regression guard: was dropping the fixed final do)",
    tone: 3, phrase: "B",
    words: [W("We"), W("call", true), W("Him")],
    expect: [
      ["We", "recite", "fa"],
      ["call", "cad", "mi"],
      ["Him", "cad", "do"],
    ],
  },
  {
    name: "T3 B — 3-syllable exact fit: anchor mi, fill re, final do",
    tone: 3, phrase: "B",
    words: [W("We"), W("call", true), W("up"), W("Thee")],
    expect: [
      ["We", "recite", "fa"],
      ["call", "cad", "mi"],
      ["up", "cad", "re"],
      ["Thee", "cad", "do"],
    ],
  },
  {
    name: "T3 B — 5-syllable overcount, long-cadence rule (Jul 2026 fix: extras on mi per direct tutorial quote, not re): anchor mi(H, dH collapsed), two extra mi fills, single fixed re just before final, final do",
    tone: 3, phrase: "B",
    words: [W("We"), W("call", true), W("up"), W("on"), W("Thee"), W("now")],
    expect: [
      ["We", "recite", "fa"],
      ["call", "cad", "mi"],
      ["up", "cad", "mi"],
      ["on", "cad", "mi"],
      ["Thee", "cad", "re"],
      ["now", "cad", "do"],
    ],
  },
  {
    name: "T3 Final — two-part cadence with recite-pickup ('[Hear] [me], O Lord.') — Hear absorbs the pickup fa plus full cad1 melisma; me/O/Lord distribute the 4-note Part 2 figure with excess compressing onto 'me', final do always preserved",
    tone: 3, phrase: "Final",
    words: [W("Hear", true), W("me", true), W("O"), W("Lord")],
    expect: [
      ["Hear", "cad1", "fa·mi·do·re"],
      ["me", "cad", "mi·fa"],
      ["O", "cad", "re"],
      ["Lord", "cad", "do"],
    ],
  },

  // ── Tone 4 — Obikhod Common Chant (July 2026 research session) ─────────
  // Every fixture below is drawn directly from tone_trainer_tone4_analysis.md
  // (repo root) — see that document for the full worked-example evidence,
  // source citations, and open items behind each one.
  {
    name: "T4 A — single-pitch cadence ('of Your Cross')",
    tone: 4, phrase: "A",
    words: [W("of"), W("Your"), W("Cross", true)],
    expect: [
      ["of", "recite", "ti"],
      ["Your", "recite", "ti"],
      ["Cross", "cad", "do"],
    ],
  },
  {
    name: "T4 B — re·do cadence, anchor on reciting pitch ('of David')",
    tone: 4, phrase: "B",
    words: [W("of"), WS([["Da", true], ["vid", false]])],
    expect: [
      ["of", "recite", "re"],
      ["Da", "cad", "re"],
      ["vid", "cad", "do"],
    ],
  },
  {
    name: "T4 C — 1 prep, no cadence shown (short snippet: 'the Sun of Righteousness')",
    tone: 4, phrase: "C",
    words: [W("the"), W("Sun", true), W("of"), WS([["Right", false], ["eous", false], ["ness", false]])],
    expect: [
      ["the", "prep", "re"],
      ["Sun", "inton", "mi"],
      ["of", "inton", "re"],
      ["Right", "recite", "do"],
      ["eous", "recite", "do"],
      ["ness", "recite", "do"],
    ],
  },
  {
    name: "T4 C — full verse with real cadence ('and when they saw you being taken from the earth to heaven')",
    tone: 4, phrase: "C",
    words: [
      W("and"), W("when"), W("they"), W("saw", true), W("you"),
      W("being"), W("taken"), W("from"), W("the"), W("earth"), W("to"),
      WS([["heav", true, "truth"], ["en", false, "truth"]]),
    ],
    expect: [
      ["and", "prep", "do"], ["when", "prep", "do"], ["they", "prep", "re"],
      ["saw", "inton", "mi"], ["you", "inton", "re"],
      ["being", "recite", "do"], ["taken", "recite", "do"], ["from", "recite", "do"],
      ["the", "recite", "do"], ["earth", "recite", "do"], ["to", "recite", "do"],
      ["heav", "cad", "re"], ["en", "cad", "do"],
    ],
  },
  {
    name: "T4 D — ti·do·re ascending cadence, exact fit ('pre-e-ternal God')",
    tone: 4, phrase: "D",
    words: [W("pre"), W("e"), WS([["ter", true], ["nal", false]]), W("God")],
    expect: [
      ["pre", "recite", "do"], ["e", "recite", "do"],
      ["ter", "cad", "ti"], ["nal", "cad", "do"], ["God", "cad", "re"],
    ],
  },
  {
    name: "T4 D — expanded fill, count=4 ('creation of all.')",
    tone: 4, phrase: "D",
    words: [W("cre"), WS([["a", true], ["tion", false]]), W("of"), W("all")],
    expect: [
      ["cre", "recite", "do"],
      ["a", "cad", "ti"], ["tion", "cad", "do"], ["of", "cad", "do"], ["all", "cad", "re"],
    ],
  },
  {
    name: "T4 E — 1 bracket, full melisma compression ('Apostles.')",
    tone: 4, phrase: "E",
    words: [W("A"), WS([["pos", true, "truth"], ["tles", false, "truth"]])],
    expect: [
      ["A", "recite", "re"],
      ["pos", "cad", "do·re·mi·re·do"],
      ["tles", "cad", "ti"],
    ],
  },
  {
    name: "T4 E — 2 brackets, fixed shape ('when I [call] up[on] Thee!')",
    tone: 4, phrase: "E",
    words: [
      W("when"), W("I"), W("call", true, "truth"),
      WS([["up", false, "truth"], ["on", true, "truth"]]), W("Thee"),
    ],
    expect: [
      ["when", "recite", "re"], ["I", "recite", "re"],
      ["call", "cad", "do·re"], ["up", "cad", "mi"], ["on", "cad", "re·do"], ["Thee", "cad", "ti"],
    ],
  },
  {
    name: "T4 F — no-intonation-only, re·do cadence with re-fill ('Rejoice...childbearing')",
    tone: 4, phrase: "F",
    words: [W("Rejoice"), W("for"), W("you"), W("alone"), W("by"), W("your"),
      WS([["child", true], ["bear", false], ["ing", false]])],
    expect: [
      ["Rejoice", "recite", "do"], ["for", "recite", "do"], ["you", "recite", "do"],
      ["alone", "recite", "do"], ["by", "recite", "do"], ["your", "recite", "do"],
      ["child", "cad", "re"], ["bear", "cad", "re"], ["ing", "cad", "do"],
    ],
  },
  {
    name: "T4 Final — exact fit, single fill ('Chris-tians and save our souls.')",
    tone: 4, phrase: "Final",
    words: [WS([["Chris", false], ["tians", false]]), W("and"), W("save", true), W("our"), W("souls", true)],
    expect: [
      ["Chris", "recite", "re"], ["tians", "prep", "do"], ["and", "prep", "ti"],
      ["save", "cad", "do"], ["our", "cad", "ti"], ["souls", "cad", "la"],
    ],
  },
  {
    name: "T4 Final — regression guard: prep melisma when body.length<3 ('[Hear] [me], O Lord!' — was dropping re and do, rendering ti alone)",
    tone: 4, phrase: "Final",
    words: [W("Hear", true), W("me,", true), W("O"), W("Lord!")],
    expect: [
      ["Hear", "prep", "re·do·ti"],
      ["me,", "cad", "do"], ["O", "cad", "ti"], ["Lord!", "cad", "la"],
    ],
  },
  {
    name: "T4 Final — expanded fill, count=4 ('for Thou art good and the [Lov]er of man.')",
    tone: 4, phrase: "Final",
    words: [W("for"), W("Thou"), W("art"), W("good"), W("and"), W("the"),
      WS([["Lov", true], ["er", false]]), W("of"), W("man", true)],
    expect: [
      ["for", "recite", "re"], ["Thou", "recite", "re"], ["art", "recite", "re"], ["good", "recite", "re"],
      ["and", "prep", "do"], ["the", "prep", "ti"],
      ["Lov", "cad", "do"], ["er", "cad", "ti"], ["of", "cad", "ti"], ["man", "cad", "la"],
    ],
  },

  // ── TONE 5 ─────────────────────────────────────────────────────────────────
  // Every fixture below is drawn directly from tone_trainer_tone5_analysis.md
  // (repo root) — each is one of the July 2026 session's own score-confirmed
  // worked examples (tutorial or LIC score), not a constructed case.
  {
    name: "T5 A — tutorial's own example: intonation + 3-fill cadence, monosyllabic backup ('Come, let us go up to the moun-tain of the Lord,')",
    tone: 5, phrase: "A",
    words: [W("Come,", true), W("let"), W("us"), W("go"), W("up"), W("to"), W("the"),
      WS([["moun", true], ["tain", false]]), W("of"), W("the"), W("Lord,", true)],
    expect: [
      ["Come,", "inton", "re"],
      ["let", "recite", "re"], ["us", "recite", "re"], ["go", "recite", "re"],
      ["up", "recite", "re"], ["to", "recite", "re"], ["the", "recite", "re"],
      ["moun", "cad", "mi"], ["tain", "cad", "do"], ["of", "cad", "do"],
      ["the", "cad", "do"], ["Lord,", "cad", "do"],
    ],
  },
  {
    name: "T5 A — LIC: unaccented lead-in + accent-on-final-syllable backup ('Re[ceive] the [voice] of my prayer,')",
    tone: 5, phrase: "A",
    words: [WS([["Re", false], ["ceive", true]]), W("the"), W("voice", true), W("of"), W("my"), W("prayer,")],
    expect: [
      ["Re", "recite", "re"], ["ceive", "inton", "re"], ["the", "recite", "re"],
      ["voice", "cad", "mi"], ["of", "cad", "do"], ["my", "cad", "do"], ["prayer,", "cad", "do"],
    ],
  },
  {
    name: "T5 B — tutorial's own example: anchor-on-reciting-pitch, mi fills ('to the house of our God,')",
    tone: 5, phrase: "B",
    words: [W("to"), W("the"), W("house", true), W("of"), W("our"), W("God,")],
    expect: [
      ["to", "recite", "mi"], ["the", "recite", "mi"],
      ["house", "cad", "mi"], ["of", "cad", "mi"], ["our", "cad", "mi"], ["God,", "cad", "re"],
    ],
  },
  {
    name: "T5 B — LIC: no reciting body, opens on the anchor ('[Hear] me, O Lord!')",
    tone: 5, phrase: "B",
    words: [W("Hear", true), W("me,"), W("O"), W("Lord!")],
    expect: [
      ["Hear", "cad", "mi"], ["me,", "cad", "mi"], ["O", "cad", "mi"], ["Lord!", "cad", "re"],
    ],
  },
  {
    name: "T5 C — preslur: accented monosyllable in the prep position takes re·ti ('...born God the Word', tutorial)",
    tone: 5, phrase: "C",
    words: [WS([["On", true], ["ly", false]]), W("born", true), W("God", true), W("the"), W("Word")],
    expect: [
      ["On", "inton", "re"], ["ly", "recite", "re"],
      ["born", "preslur", "re·ti"],
      ["God", "cad", "do"], ["the", "cad", "ti"], ["Word", "cad", "la"],
    ],
  },
  {
    name: "T5 C — LIC: weak-pronoun prep (bare ti, NO slur) + compressed 2-syllable cadence ('[Lord], I call upon Thee, [hear] me!')",
    tone: 5, phrase: "C",
    words: [W("Lord,", true), W("I"), W("call"), WS([["up", false], ["on", false]]), W("Thee,"),
      W("hear", true), W("me!")],
    expect: [
      ["Lord,", "inton", "re"],
      ["I", "recite", "re"], ["call", "recite", "re"], ["up", "recite", "re"], ["on", "recite", "re"],
      ["Thee,", "prep", "ti"],
      ["hear", "cad", "do·ti"],   // compressed: dotted anchor absorbs the ti as a 2-note slur
      ["me!", "cad", "la"],
    ],
  },
  {
    name: "T5 C — LIC: uncompressed cadence with one do-fill ('and [let] the lifting [up] of my hands')",
    tone: 5, phrase: "C",
    words: [W("and"), W("let", true), W("the"), WS([["lift", false], ["ing", false]]),
      W("up", true), W("of"), W("my"), W("hands")],
    expect: [
      ["and", "recite", "re"], ["let", "inton", "re"], ["the", "recite", "re"], ["lift", "recite", "re"],
      ["ing", "prep", "ti"],
      ["up", "cad", "do"], ["of", "cad", "do"], ["my", "cad", "ti"], ["hands", "cad", "la"],
    ],
  },
  {
    name: "T5 Final — LIC: reciting pickup folds into the first-anchor slur; separate-word tail puts do·ti on the trailing word ('[Hear] [me], O Lord!')",
    tone: 5, phrase: "Final",
    words: [W("Hear", true), W("me,", true), W("O"), W("Lord!")],
    expect: [
      ["Hear", "cad1", "mi·re·do"],  // pickup + first anchor + elastic do, one slur
      ["me,", "cad", "ti"],          // second anchor, PLAIN — trailing syllable is a separate word
      ["O", "cad", "do·ti"],         // the do·ti pair slurs on the trailing word
      ["Lord!", "cad", "la"],
    ],
  },
  {
    name: "T5 Final — tutorial S3: 3-syllable elastic run + word-internal tail compresses on the accent ('A-dam ris-es as the Dev-il falls.') — also guards the a1-vs-backed-up-a2 anchor fix",
    tone: 5, phrase: "Final",
    words: [WS([["A", true], ["dam", false]]), WS([["ris", true], ["es", false]]),
      W("as"), W("the"), WS([["Dev", true], ["il", false]]), W("falls.", true)],
    expect: [
      ["A", "recite", "mi"], ["dam", "recite", "mi"],
      ["ris", "cad1", "re"],
      ["es", "cad1", "do"], ["as", "cad1", "do"], ["the", "cad1", "do"],
      ["Dev", "cad", "ti·do"],       // word-internal trailing syllable → slur on the accent
      ["il", "cad", "ti"],
      ["falls.", "cad", "la"],
    ],
  },
  {
    name: "T5 Final — tutorial's own example (S4): 1-syllable elastic case, re·do slur on the first anchor ('...consub-stan-tial Trin-i-ty!')",
    tone: 5, phrase: "Final",
    words: [W("sing"), W("the"), WS([["con", false], ["sub", false], ["stan", true], ["tial", false]]),
      WS([["Trin", true], ["i", false], ["ty!", false]])],
    expect: [
      ["sing", "recite", "mi"], ["the", "recite", "mi"],
      ["con", "recite", "mi"], ["sub", "recite", "mi"],
      ["stan", "cad1", "re·do"],     // 1 in-between syllable: one do folds onto the anchor
      ["tial", "cad1", "do"],
      ["Trin", "cad", "ti·do"],      // word-internal trailing syllable → slur on the accent
      ["i", "cad", "ti"],
      ["ty!", "cad", "la"],
    ],
  },
];

// ── runner ───────────────────────────────────────────────────────────────────
let pass = 0, fail = 0;
const PRINT = process.argv.includes("--print");

for (const fx of FIXTURES) {
  const l = line(fx.phrase, ...fx.words);
  const roles = pointLine(l, PH_DEFS[fx.tone], fx.tone);
  const actual = roles.map((r) => [r.text, r.role, pitchStr(r.pitches)]);

  if (PRINT) {
    console.log(`\n${fx.name}`);
    actual.forEach(([t, role, p]) => console.log(`  ${t.padEnd(8)} ${role.padEnd(8)} [${p}]`));
  }

  const exp = fx.expect;
  let ok = actual.length === exp.length;
  if (ok) {
    for (let i = 0; i < exp.length; i++) {
      if (actual[i][0] !== exp[i][0] || actual[i][1] !== exp[i][1] || actual[i][2] !== exp[i][2]) {
        ok = false; break;
      }
    }
  }

  if (ok) { pass++; }
  else {
    fail++;
    console.log(`\nFAIL: ${fx.name}`);
    console.log("  expected: " + exp.map((e) => `${e[0]}:${e[1]}[${e[2]}]`).join("  "));
    console.log("  actual:   " + actual.map((a) => `${a[0]}:${a[1]}[${a[2]}]`).join("  "));
  }
}

console.log(`\n${pass}/${pass + fail} pointing-role checks passed.`);
if (fail > 0) { console.log("FAIL"); process.exit(1); }
console.log("PASS");
