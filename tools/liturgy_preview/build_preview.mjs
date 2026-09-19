#!/usr/bin/env node
// Rebuilds liturgy_reassembly_test.html (this folder) from the live
// src/data/liturgy/chrysostom.js — the single point of truth since v0.46.5.
//
// The preview is a single self-contained HTML file, so it carries its own copy
// of the encoded data inside <script>. That copy goes stale the moment
// chrysostom.js changes -- which is exactly what happened between v12 and v19.
// This script replaces everything between the two marker comments with the
// current module source, minus its `export` keywords.
//
//   node tools/liturgy_preview/build_preview.mjs
//
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const SRC = join(here, "..", "..", "src", "data", "liturgy", "chrysostom.js");
const OUT = join(here, "liturgy_reassembly_test.html");

const BEGIN = "// ===== BEGIN generated from chrysostom.js - do not edit by hand =====";
const END = "// ===== END generated from chrysostom.js =====";

const moduleSrc = readFileSync(SRC, "utf8").replace(/^export /gm, "").trim();
const html = readFileSync(OUT, "utf8");

const i = html.indexOf(BEGIN);
const j = html.indexOf(END);
if (i === -1 || j === -1 || j < i) {
  console.error(`Markers not found in ${OUT} - refusing to guess where the data block starts.`);
  process.exit(1);
}

const next = html.slice(0, i) + BEGIN + "\n\n" + moduleSrc + "\n\n" + END + html.slice(j + END.length);
writeFileSync(OUT, next);

// Report from the real module, not by grepping its source -- a regex over the
// text also counts the words inside comments and notes.
const m = await import(`file://${SRC}`);
const ov = Object.values(m.BASIL_OVERRIDES);
const enc = ov.filter((v) => v.status === "encoded").length;
const pend = ov.length - enc;
const basil = m.getLiturgy("basil");
console.log(
  `preview rebuilt: ${m.getLiturgy("chrysostom").length} Chrysostom units, ${basil.length} Basil | ` +
    `overrides ${enc} encoded / ${pend} pending | inserts ${Object.keys(m.BASIL_INSERTS).length}` +
    (pend ? ` | placeholders still rendering: ${basil.filter((u) => u.basilPending).length}` : "")
);
