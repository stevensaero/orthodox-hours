// ─── SHARED SHEET MARKUP ────────────────────────────────────────────────────
//
// One function per block kind, emitting HTML strings from the paginator's
// output. The React component renders the same structure with the same class
// names; this module is what tools/render_bulletin.mjs uses, so the proof sheet
// and the app cannot drift apart.

import { continuationNotice, resumptionNotice } from "./bulletin-layout.js";
import { VERSE_OPEN, VERSE_CLOSE } from "./bulletin-metrics.js";

export const esc = (s) => String(s ?? "")
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Gold the asterisk phrase-marks without touching the words around them.
export const marks = (text) => esc(text).split(/(\*+)/)
  .map((p) => (/^\*+$/.test(p) ? `<span class="oh-star">${p}</span>` : p)).join("");

/** Verse numbers back out of the sentinels, as small gold superscripts. */
const VERSE_RE = new RegExp(`${VERSE_OPEN}(\\d+)${VERSE_CLOSE}`, "g");
export const lectionBody = (text) =>
  esc(text).replace(VERSE_RE, (_, n) => `<sup class="oh-vnum">${n}</sup>`);

export function renderBlock(block) {
  switch (block.kind) {
    case "heading":
      return `<div class="oh-h">${esc(block.text)}</div>`;

    case "commemoration":
      return `<p class="oh-comm">${esc(block.text)}</p>` +
        (block.secondary ? `<p class="oh-comm2">${esc(block.secondary)}</p>` : "");

    case "slot":
      return `<div class="oh-slot"><div class="oh-slot-label">${esc(block.label)}</div>` +
        block.rows.map((r) =>
          `<div class="oh-reading-row">` +
          `<span class="oh-reading-ref">${esc(r.ref)}</span>` +
          `<span class="oh-reading-of">${esc(r.of)}</span></div>`).join("") +
        `</div>`;

    case "cite":
      return `<div class="oh-cite">${esc(block.text)}</div>`;

    case "hymn":
      return `<div class="oh-hymn${block.isError ? " oh-err" : ""}">` +
        (block.label
          ? `<div class="oh-hymn-label">${esc(block.label)}` +
            (block.tone ? `<em>, Tone ${block.tone}</em>` : "") + `</div>`
          : "") +
        `<p class="oh-hymn-text">${marks(block.text)}</p></div>`;

    case "lection": {
      const resume = resumptionNotice(block);
      const carry = continuationNotice(block);
      return `<div class="oh-lection">` +
        (block.showHead
          ? `<div class="oh-lection-ref">${esc(block.refLabel)}</div>` +
            (block.intro ? `<p class="oh-lection-intro">${esc(block.intro)}</p>` : "")
          : "") +
        (resume ? `<p class="oh-resumes">${esc(block.refLabel)} — ${esc(resume)}</p>` : "") +
        `<p class="oh-lection-body">${lectionBody(block.text)}</p>` +
        (carry ? `<p class="oh-continues">${esc(carry)} →</p>` : "") +
        `</div>`;
    }

    default:
      return "";
  }
}

export function renderMasthead({ eyebrow, title, sub, chip }) {
  return `
  <div class="oh-masthead">
    <div class="oh-eyebrow">${esc(eyebrow)}</div>
    <div class="oh-date">${esc(title)}</div>
    ${sub ? `<div class="oh-layer">${esc(sub)}</div>` : ""}
    ${chip ? `<div class="oh-chip">${esc(chip)}</div>` : ""}
  </div>`;
}

export function renderPage({ page, totalPages, masthead, footerLeft }) {
  return `
<div class="oh-sheet">
  ${masthead}
  <div class="oh-twocol">
    ${page.columns.map((col) =>
      `<div class="oh-col">${col.items.map(renderBlock).join("\n")}</div>`).join("\n")}
  </div>
  <div class="oh-foot">
    <span>${esc(footerLeft)}</span>
    <span>Page ${page.number} of ${totalPages}</span>
  </div>
</div>`;
}
