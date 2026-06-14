/**
 * probe_dismissal.mjs
 *
 * Assertions for the unified dismissal assembler (buildDismissalText).
 * Scope so far: the Fekula Ch. 10 READER form (item 1, v0.15.x).
 *
 * NOTE: buildDismissalText lives in src/components/hours-tool.jsx and cannot be
 * ES-module-imported from JSX, so the reader branch is replicated here verbatim
 * and MUST be kept in sync with the component (same convention as
 * test_pointing_paths.mjs). The assertions pin the Ch. 10-correct wording.
 *
 * Usage: node tools/probe_dismissal.mjs
 */

// ── Replicated verbatim from buildDismissalText() reader branch ──────────────
// Inputs are pre-resolved (saintName via _dismissalSaintName, templeName via
// resolveTempleName) exactly as the component computes them.
function readerForm(saintName, templeName) {
  let slot;
  if (saintName && templeName) slot = `of ${saintName} and of ${templeName}, `;
  else if (saintName)          slot = `of ${saintName} (and of the temple), `;
  else if (templeName)         slot = `of ${templeName}, `;
  else                         slot = `(of the saints of the day and of the temple), `;
  return `Through the prayers of our holy fathers, ${slot}`
    + `and of all the saints, Lord Jesus Christ, Son of God, have mercy on us. Amen.`;
}

// ── Cases ────────────────────────────────────────────────────────────────────
const cases = [
  {
    name: "Weekday — saint + temple",
    saint: "Venerable Onuphrius the Great", temple: "the Holy Trinity",
    expect: "Through the prayers of our holy fathers, of Venerable Onuphrius the Great and of the Holy Trinity, and of all the saints, Lord Jesus Christ, Son of God, have mercy on us. Amen.",
  },
  {
    name: "Weekday — saint, no temple (placeholder cue)",
    saint: "Venerable Onuphrius the Great", temple: null,
    expect: "Through the prayers of our holy fathers, of Venerable Onuphrius the Great (and of the temple), and of all the saints, Lord Jesus Christ, Son of God, have mercy on us. Amen.",
  },
  {
    name: "Sunday — named-day commemoration, no temple (FIX: no 'our Lord, God, and Savior')",
    saint: "All Saints of North America", temple: null,
    expect: "Through the prayers of our holy fathers, of All Saints of North America (and of the temple), and of all the saints, Lord Jesus Christ, Son of God, have mercy on us. Amen.",
  },
  {
    name: "Ordinary Sunday — no saint, no temple (full placeholder)",
    saint: null, temple: null,
    expect: "Through the prayers of our holy fathers, (of the saints of the day and of the temple), and of all the saints, Lord Jesus Christ, Son of God, have mercy on us. Amen.",
  },
  {
    name: "Ordinary Sunday — temple set, no saint",
    saint: null, temple: "the Holy Trinity",
    expect: "Through the prayers of our holy fathers, of the Holy Trinity, and of all the saints, Lord Jesus Christ, Son of God, have mercy on us. Amen.",
  },
];

let pass = 0, fail = 0;
for (const c of cases) {
  const got = readerForm(c.saint, c.temple);
  const ok = got === c.expect;
  console.log(`${ok ? "✓" : "✗"} ${c.name}`);
  console.log(`    ${got}`);
  if (!ok) { console.log(`    EXPECTED: ${c.expect}`); fail++; } else pass++;
}
console.log(`\n${pass}/${cases.length} reader-form assertions pass`);
if (fail) process.exit(1);
