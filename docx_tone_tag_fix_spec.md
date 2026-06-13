# docx tone-tag fix — spec (Tone Trainer v0.25.2)

Spec-before-code record for the v0.25.2 service-`.docx` parser fix and the shared
`src/lib/docx-text.js` module. Additive only: every correctly-spaced input stays
byte-identical to v0.25.1 output.

## Problem

OCA service `.docx` propers authored with **tab-separated** heading tokens (e.g. a
run rendering `Tone 8` + `<w:tab>` + `Troparion`) were read as the glued string
`Tone 8Troparion`. Two compounding causes:

1. **Dropped whitespace.** Run extraction concatenated `<w:t>` text only and
   ignored `<w:tab>`, `<w:br>`, and `<w:cr>`, so the tab between `Tone 8` and
   `Troparion` vanished and the tokens fused.
2. **Word-boundary on the tone pattern.** The tone-heading pattern
   `/\bTone\s+([1-8]|[IVX]+)\b/i` required a trailing word boundary after the tone
   digit. With the digit now glued directly to a letter (`8Troparion`), `\b` did
   not match, so the heading produced no tone and the affected
   troparion/kontakion/prokeimenon inherited a **stale** tone from the last heading
   that did parse. Observed: a Tone 1 Resurrection Troparion read as Tone 4, a
   Tone 3 All Saints Kontakion read as Tone 1, etc.

## Fix (both additive)

1. **Read tab/br/cr as a single space.** `runText()` renders `<w:tab>`,
   `<w:br>`, and `<w:cr>` as one space; `<w:t>` is concatenated as before. A run
   with no tab/br/cr returns exactly the old `<w:t>` concatenation, so non-tab
   paragraphs are unchanged.
2. **Tone-heading boundary `(?![0-9])` instead of trailing `\b`.** The pattern is
   now `/\bTone\s+([1-8]|[IVX]+)(?![0-9])/i`. A tone digit immediately followed by
   a letter still reads (`Tone 8Troparion` → 8), while a longer number is still
   rejected (`Tone 12` → null). For every correctly-spaced input the match is
   identical to the old pattern.

Because the digit-and-space cases are unchanged and the only new behavior is
(a) whitespace where there was none and (b) a tone match that previously failed,
the change cannot alter any input that already parsed correctly.

## One source of truth

The tone-reading and run helpers (`TONE_HEADING`, `ROMAN`, `parseToneLabel`,
`runText`, `runUnderline`) now live in **`src/lib/docx-text.js`** and are imported
by both consumers:

- the browser ingest, `src/components/tone-trainer.jsx` (`DOMParser`), and
- the Node snapshot twin, `tools/snapshot_comparison.mjs` (`@xmldom/xmldom`).

Both XML parsers expose `localName`, `childNodes`, `getElementsByTagName`,
`textContent`, and `getAttribute`, so a single implementation serves both and the
twins cannot drift.

## Verification

1. `node tools/test_pointing_paths.mjs` → 13/13, no regressions.
2. `npm run build` → clean (chunk-size warning OK).
3. `parseToneLabel` assertions against the shared module:
   `Tone 8Troparion(All Saints)` → 8; `Tone 3Kontakion` → 3; `Tone 1 (for...)` → 1;
   `Tone 12` → null; `Tone VIII` → 8.
4. User-side proof: re-export `2026-0614` in the trainer and diff against the
   existing JSON. Expect only (a) previously-glued labels gain spaces and (b) the
   affected troparia/kontakia/prokeimena flip to tones 1/3/7/8. Every sticheron
   pointed string must be byte-identical; `suspect` flags unchanged.
