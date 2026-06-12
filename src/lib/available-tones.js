// The tones the Tone Trainer can point and score.
//
// This lives in its own tiny module on purpose: the Hours tool imports it to gate
// its Point/Score controls, and importing it from tone-trainer.jsx instead would
// pull that whole (lazy-loaded) component into the Hours tool's main bundle.
//
// WHEN YOU BUILD A NEW TONE: add its number here AND add its PH_DEFS entry in
// tone-trainer.jsx. A dev-time guard in the trainer warns if these two drift.
export const AVAILABLE_TONES = new Set([1, 2, 3]);
