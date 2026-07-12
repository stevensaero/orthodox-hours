// The tones the Tone Trainer can point and score.
//
// This lives in its own tiny module on purpose: the Hours tool imports it to gate
// its Point/Score controls, and importing it from tone-trainer.jsx instead would
// pull that whole (lazy-loaded) component into the Hours tool's main bundle.
//
// WHEN YOU BUILD A NEW TONE: add its number here AND add its PH_DEFS entry in
// tone-trainer.jsx. A dev-time guard in the trainer warns if these two drift.
//
// Tone 4 added July 2026 (alto pointing only — no BASS_RULES/TENOR_RULES/
// SOPRANO_MAP entries yet, same situation Tone 3 has been in; both
// gracefully return null/pass-through for the missing harmony parts rather
// than breaking the Score feature). Harmony work is the next planned
// session — see tone_trainer_tone4_analysis.md in the repo root.
//
// Tone 5 added July 2026. It had ALREADY shipped in the trainer (PH_DEFS,
// ROT_DEFS, BASS_RULES and TENOR_RULES all carry a 5) but this Set was never
// updated, so every Tone 5 verse in the Hours tool rendered its Point/Score
// controls grey and inert with the "not yet built" tooltip — invisible on
// mobile, where there is no hover. The trainer's dev-time drift guard only
// warns inside the trainer, so it never caught this. If you build a tone,
// add it HERE in the same commit.
export const AVAILABLE_TONES = new Set([1, 2, 3, 4, 5]);
