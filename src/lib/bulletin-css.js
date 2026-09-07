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
// columns come to 10.97in of the 11in page, leaving well under a line of slack.
// Stacking each reading's attribution under its citation (v0.45.3) cost four
// lines and took the sheet to 11.16in; it was brought back by tightening the
// readings block's own spacing and leading, never the body type. The chrome above (page padding, masthead margins, heading
// leading, footer margin) was trimmed to buy that, and the TYPE SIZES WERE NOT
// TOUCHED. If a heavier day overflows, it flows to a second page; do not
// reclaim space by shrinking the body type below 10.5pt, which is the floor for
// reading from a sheet in a dimly lit church.
//
// Re-measure with:  node tools/render_bulletin.mjs 2026-09-06 > /tmp/p.html

export const BULLETIN_CSS = `
      /* THE OVERLAY IS STYLED HERE, NOT INLINE, AND THAT IS LOAD-BEARING.
         v0.45.1 set position:fixed and overflow:auto as inline styles on this
         element. Inline styles beat a stylesheet rule unless it carries
         !important, so the @media print block below could not undo them — and
         a position:fixed element prints on the FIRST PAGE ONLY in Chrome while
         overflow:auto clips everything past the first viewport. One page, no
         readings sheet, and a dead scrollbar in print preview, all from two
         inline declarations. Styling the overlay from the stylesheet lets the
         print block win by ordinary cascade order. */
      .oh-overlay {
        position: fixed;
        inset: 0;
        background: rgba(28,16,8,0.62);
        z-index: 200;
        overflow: auto;
        padding: 24px 16px 60px;
      }

      .oh-sheet {
        background: #fff;
        color: ${C.ink};
        font-family: ${SERIF};
        box-sizing: border-box;
        position: relative;
        /* Borrowed from the St Mary's template, which needs it for its tinted
           page and sets it on body. Nothing here fills an area, so this is
           insurance rather than a requirement: it keeps a browser from
           dropping the gold rules and verse numbers when "Background graphics"
           is off, and it costs a white sheet nothing. */
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }

      /* Paper geometry belongs to the SCREEN preview only. In print the page
         box itself supplies the size and margins — see @page below — so the
         sheet must not carry a second, competing set. A fixed 8.5in-wide box
         on a zero-margin 8.5in page is where stray blank pages come from. */
      @media screen {
        .oh-sheet {
          width: 8.5in;
          min-height: 11in;
          padding: 0.55in 0.65in 0.45in;
          margin: 0 auto 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.35);
        }
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

      /* Explicit columns, not CSS multicol. src/lib/bulletin-layout.js decides
         what goes in each one: multicol breaks wherever it lands — mid-hymn,
         mid-verse, across a page turn with no notice — and cannot be reasoned
         about before it renders. A grid keeps the two column rules and the
         0.34in gutter without surrendering the breaks. */
      .oh-twocol {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 0.34in;
        align-items: start;
      }
      .oh-col { min-width: 0; }
      /* 0.5pt rounds to a sub-pixel and does not paint. 0.75pt is the thinnest
         rule that actually renders and photocopies. */
      .oh-col + .oh-col {
        border-left: 0.75pt solid ${C.rule};
        padding-left: 0.17in;
        margin-left: -0.17in;
      }
      /* A margin at the top of a column would push the first line off the
         baseline the budget assumed. The bottom one matters just as much and is
         easier to miss: a grid item does not collapse its last child's bottom
         margin away, so a trailing 12pt was being drawn but never counted. */
      .oh-col > *:first-child { margin-top: 0 !important; }
      .oh-col > *:last-child { margin-bottom: 0 !important; }

      .oh-h {
        font-size: 10pt; line-height: 1.25; letter-spacing: 0.14em;
        text-transform: uppercase;
        color: ${C.accent}; margin: 12pt 0 4pt;
        border-bottom: 0.5pt solid ${C.rule}; padding-bottom: 3pt;
        break-after: avoid; page-break-after: avoid;
      }
      .oh-twocol > .oh-h:first-child { margin-top: 0; }

      .oh-comm { font-size: 13pt; line-height: 1.32; margin: 0 0 3pt; }
      .oh-comm2 { font-size: 11pt; line-height: 1.3; color: ${C.inkLight}; font-style: italic; margin: 0; }

      .oh-slot { margin-bottom: 4pt; break-inside: avoid; page-break-inside: avoid; }
      .oh-slot-label {
        font-size: 9.5pt; line-height: 1.2; letter-spacing: 0.1em;
        text-transform: uppercase;
        color: ${C.accent}; margin: 4pt 0 2pt;
      }
      /* The citation leads and its attribution sits under it. Side by side in a
         two-column grid the attribution ("Of the commemoration") was wider than
         the reference it labelled, and on a 3.43in measure it squeezed the
         reference into a column too narrow to keep on one line. */
      .oh-reading-row { margin: 0 0 3pt; break-inside: avoid; page-break-inside: avoid; }
      .oh-reading-ref {
        display: block; font-size: 11pt; line-height: 1.25;
        font-variant-numeric: tabular-nums;
      }
      .oh-reading-of {
        display: block; font-size: 9pt; line-height: 1.2;
        color: ${C.inkLight}; font-style: italic;
      }
      .oh-cite {
        font-size: 9pt; line-height: 1.4; color: ${C.inkLight}; font-style: italic;
        border-left: 0.5pt solid ${C.rule}; padding-left: 7pt; margin-top: 5pt;
      }

      .oh-hymn { margin: 0 0 8pt; break-inside: avoid-column; }
      .oh-hymn-label { font-size: 9.5pt; line-height: 1.2; color: ${C.inkLight}; letter-spacing: 0.04em; margin: 0 0 1pt; }
      .oh-hymn-label em { color: ${C.inkMid}; }
      .oh-hymn-text {
        font-size: 10.5pt; line-height: 1.42; margin: 1pt 0 0;
        text-align: justify; -webkit-hyphens: auto; hyphens: auto;
      }
      .oh-star { color: ${C.accent}; }

      .oh-lection { margin: 0 0 12pt; }
      .oh-lection-ref {
        font-size: 10pt; line-height: 1.2; letter-spacing: 0.08em;
        text-transform: uppercase;
        color: ${C.accent}; margin: 0 0 2pt;
        break-after: avoid; page-break-after: avoid;
      }
      .oh-lection-intro {
        font-size: 10pt; line-height: 1.3; font-style: italic; color: ${C.inkLight}; margin: 0 0 3pt;
      }
      .oh-lection-body {
        font-size: 11pt; line-height: 1.5; margin: 0;
        text-align: justify; -webkit-hyphens: auto; hyphens: auto;
      }
      /* Same gold as the reference heading above the passage, so the numbers
         read as apparatus rather than as part of the sentence. Small and
         superscript: a reader finding a verse wants them, a reader chanting the
         passage should not have to step over them. */
      .oh-vnum {
        font-size: 7.5pt; color: ${C.accent};
        vertical-align: super; margin-right: 1.5pt;
        font-style: normal; letter-spacing: 0;
      }
      .oh-err { color: ${C.error}; }

      /* Loud on purpose. A reader who reaches the foot of a column mid-verse
         must be told where the rest is, without hunting for it. */
      .oh-continues, .oh-resumes {
        font-size: 9pt; line-height: 1.3; font-style: italic;
        color: ${C.accent}; letter-spacing: 0.04em;
      }
      .oh-continues { text-align: right; margin: 3pt 0 0; }
      .oh-resumes { margin: 0 0 3pt; }

      .oh-foot {
        border-top: 0.5pt solid ${C.rule};
        margin-top: 9pt; padding-top: 4pt;
        font-size: 8pt; color: ${C.inkLight};
        display: flex; justify-content: space-between; gap: 12pt;
      }

      @media print {
        /* The page box supplies the margins; nothing inside re-states them. */
        @page { size: 8.5in 11in; margin: 0.55in 0.65in 0.45in; }

        html, body {
          background: #fff !important;
          margin: 0 !important;
          padding: 0 !important;
          height: auto !important;
          overflow: visible !important;
        }

        /* Everything the app rendered outside the bulletin. The .oh-sheet
           exemption is for tools/render_bulletin.mjs, whose proof page puts
           sheets straight in the body with no overlay around them — the proof
           has to print identically or it is not a proof. */
        body > *:not(.oh-overlay):not(.oh-sheet) { display: none !important; }

        /* Unwind every containment the on-screen modal needs and print does
           not. All four matter: position, because fixed prints one page;
           inset/height, because an absolutely positioned box with top and
           bottom pinned is one viewport tall; and overflow, because auto
           clips to that box. !important is belt-and-braces here — the
           cascade already wins now that the overlay is not styled inline. */
        .oh-overlay {
          position: static !important;
          inset: auto !important;
          width: auto !important;
          height: auto !important;
          max-height: none !important;
          overflow: visible !important;
          background: #fff !important;
          padding: 0 !important;
          margin: 0 !important;
          z-index: auto !important;
        }

        .oh-no-print { display: none !important; }

        .oh-sheet {
          width: auto !important;
          min-height: 0 !important;
          padding: 0 !important;
          margin: 0 !important;
          box-shadow: none !important;
          break-after: page;
          page-break-after: always;
        }
        .oh-sheet:last-child { break-after: auto; page-break-after: auto; }

        /* Keep a heading with what it introduces, and never split a hymn or a
           reading row across a column or page break. */
        .oh-h, .oh-slot-label, .oh-lection-ref {
          break-after: avoid; page-break-after: avoid;
        }
        .oh-slot, .oh-hymn, .oh-reading-row {
          break-inside: avoid; page-break-inside: avoid;
        }
      }
    `;
