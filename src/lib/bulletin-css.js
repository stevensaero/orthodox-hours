// ─── BULLETIN SHEET STYLESHEET ──────────────────────────────────────────────
//
// Kept as a plain string, apart from the component, so that exactly the same
// rules can be inlined into a static proof sheet by tools/render_bulletin.mjs.
// The proof sheet is how the layout gets reviewed without running a dev server,
// and it is only worth anything if it is the real stylesheet rather than a copy
// that drifts.
//
// SIZES ARE IN POINTS. v0.45.0 sized the sheet for its on-screen preview (8.5in
// rendered at 72dpi = 612px) and set type in px against that, so what looked
// reasonable on screen printed at roughly 6pt. The sheet is now 8.5in wide on
// screen as well, with body type at 10.5-11pt, so the preview and the printed
// page are the same physical object.
//
// THE PAPER IS WHITE and nothing here fills an area. A background wash costs
// toner and, in greyscale, lifts the floor under every letter. Colour is
// confined to rules, headings and verse numbers, and the accent is darker than
// the app's #8B6914 so it survives a parish photocopier.

// Ink only. Nothing below fills an area; every value lands on text or a rule,
// so a greyscale photocopy keeps full contrast under the letters.
const C = {
  ink: "#000000",
  inkMid: "#2A2A2A",
  inkLight: "#555555",
  accent: "#6E5210",   // darker than the app's #8B6914 so it survives greyscale
  rule: "#9A9A9A",
  error: "#A32B10",
};

const SERIF = "Georgia, 'Times New Roman', serif";

// MEASURED, not guessed. With 6 September 2026 — a Sunday carrying both a full
// resurrectional set and a six-stichera commemoration's propers — the two
// columns come to 10.80in of the 11in page, leaving about one spare line across
// both columns. The chrome above (page padding, masthead margins, heading
// leading, footer margin) was trimmed to buy that, and the TYPE SIZES WERE NOT
// TOUCHED. If a heavier day overflows, it flows to a second page; do not
// reclaim space by shrinking the body type below 10.5pt, which is the floor for
// reading from a sheet in a dimly lit church.
//
// Re-measure with:  node tools/render_bulletin.mjs 2026-09-06 > /tmp/p.html

export const BULLETIN_CSS = `
      .oh-sheet {
        background: #fff;
        color: ${C.ink};
        font-family: ${SERIF};
        box-sizing: border-box;
        position: relative;
        width: 8.5in;
        min-height: 11in;
        padding: 0.55in 0.65in 0.45in;
        margin: 0 auto 24px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.35);
      }

      .oh-masthead {
        text-align: center;
        border-bottom: 1.5pt solid ${C.accent};
        padding-bottom: 7pt;
        margin-bottom: 10pt;
      }
      .oh-eyebrow {
        font-size: 8.5pt; letter-spacing: 0.18em; text-transform: uppercase;
        color: ${C.inkLight};
      }
      .oh-date { font-size: 19pt; margin: 6pt 0 2pt; color: ${C.ink}; }
      .oh-layer { font-size: 11.5pt; color: ${C.inkMid}; font-style: italic; }
      .oh-chip {
        display: inline-block; margin-top: 6pt; padding: 1.5pt 8pt;
        border: 0.75pt solid ${C.accent}; border-radius: 2pt;
        font-size: 8.5pt; letter-spacing: 0.13em; text-transform: uppercase;
        color: ${C.accent};
      }

      .oh-twocol {
        column-count: 2; column-gap: 0.34in;
        /* 0.5pt rounds to a sub-pixel and does not paint. 0.75pt is the
           thinnest rule that actually renders and photocopies. */
        column-rule: 0.75pt solid ${C.rule};
      }

      .oh-h {
        font-size: 10pt; letter-spacing: 0.14em; text-transform: uppercase;
        color: ${C.accent}; margin: 12pt 0 4pt;
        border-bottom: 0.5pt solid ${C.rule}; padding-bottom: 3pt;
        break-after: avoid; page-break-after: avoid;
      }
      .oh-twocol > .oh-h:first-child { margin-top: 0; }

      .oh-comm { font-size: 13pt; line-height: 1.32; margin: 0 0 3pt; }
      .oh-comm2 { font-size: 11pt; color: ${C.inkLight}; font-style: italic; margin: 0; }

      .oh-slot { margin-bottom: 6pt; break-inside: avoid; page-break-inside: avoid; }
      .oh-slot-label {
        font-size: 9.5pt; letter-spacing: 0.1em; text-transform: uppercase;
        color: ${C.accent}; margin: 6pt 0 2pt;
      }
      .oh-reading-row {
        display: grid; grid-template-columns: auto 1fr; gap: 2pt 10pt;
        font-size: 11pt; line-height: 1.4;
      }
      .oh-reading-of { color: ${C.inkLight}; white-space: nowrap; }
      .oh-reading-ref { font-variant-numeric: tabular-nums; }
      .oh-cite {
        font-size: 9pt; line-height: 1.4; color: ${C.inkLight}; font-style: italic;
        border-left: 0.5pt solid ${C.rule}; padding-left: 7pt; margin-top: 7pt;
      }

      .oh-hymn { margin: 0 0 8pt; break-inside: avoid-column; }
      .oh-hymn-label { font-size: 9.5pt; color: ${C.inkLight}; letter-spacing: 0.04em; }
      .oh-hymn-label em { color: ${C.inkMid}; }
      .oh-hymn-text {
        font-size: 10.5pt; line-height: 1.42; margin: 1pt 0 0;
        text-align: justify; -webkit-hyphens: auto; hyphens: auto;
      }
      .oh-star { color: ${C.accent}; }

      .oh-lection { margin: 0 0 12pt; }
      .oh-lection-ref {
        font-size: 10pt; letter-spacing: 0.08em; text-transform: uppercase;
        color: ${C.accent}; margin: 0 0 2pt;
        break-after: avoid; page-break-after: avoid;
      }
      .oh-lection-intro {
        font-size: 10pt; font-style: italic; color: ${C.inkLight}; margin: 0 0 3pt;
      }
      .oh-lection-body {
        font-size: 11pt; line-height: 1.5; margin: 0;
        text-align: justify; -webkit-hyphens: auto; hyphens: auto;
      }
      .oh-vnum {
        font-size: 7.5pt; color: ${C.accent};
        vertical-align: super; margin-right: 1.5pt;
      }
      .oh-err { color: ${C.error}; }

      .oh-foot {
        border-top: 0.5pt solid ${C.rule};
        margin-top: 9pt; padding-top: 4pt;
        font-size: 8pt; color: ${C.inkLight};
        display: flex; justify-content: space-between; gap: 12pt;
      }

      @media print {
        body > *:not(.oh-print-root) { display: none !important; }
        .oh-print-root {
          position: absolute; inset: 0;
          background: #fff; padding: 0; margin: 0; overflow: visible;
        }
        .oh-no-print { display: none !important; }
        .oh-sheet {
          box-shadow: none; margin: 0;
          width: 8.5in; min-height: 11in;
          page-break-after: always; break-after: page;
        }
        .oh-sheet:last-child { page-break-after: auto; break-after: auto; }
        @page { size: 8.5in 11in; margin: 0; }
      }
    `;
