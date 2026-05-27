# Next Session Prompt — Temple Dedication Search Bar

## Project
Orthodox Hours Tool — `stevensaero/orthodox-hours` (GitHub, private)
**Current version:** v0.5.3 (commit `ac28223`)
**Key file:** `src/components/hours-tool.jsx` (~10,000 lines)

## Context
Read `project_notes.md` in the repo root for full architectural context and session history. The compacted transcript at `/mnt/transcripts/` has complete implementation details from the current and prior sessions.

## What exists now

The **TempleSelector** component (in `hours-tool.jsx`, search for `function TempleSelector`) is a hybrid UI that appears in two places:

1. **Vespers Litiya** — shows the troparion of the temple as the first sticheron (suppressed on Great Feasts)
2. **Typica** — shows the kontakion of the temple in the weekday kontakia sequence

The component has three states: unselected (picker card), selected saint (resolved text with "(change)" link), and "no dedication / serving at home" (informational note with home icon).

The picker card currently has:
- A **curated primary dropdown** (`<select>` with `<optgroup>` categories) showing ~20 common OCA dedications
- A **"More dedications..."** row that toggles additional entries into the same `<select>` via optgroups
- A **"No dedication / serving at home"** row with home icon

The selection persists via `localStorage('parish_dedication')` and propagates to both Vespers and Typica automatically.

The **TEMPLE_DEDICATIONS** constant (~41 entries) is a manually curated registry. Each entry maps `{ id, label, category, source, dataKey, arrayIndex? }` to a Menaion date or Pentecostarion offset. At runtime, `resolveTempleTroparion(id)` and `resolveTempleKontakion(id)` read from the module-level `_menaionCache` and `_pentecostarionCache` to get the actual text. Only entries whose data is encoded and has a troparion appear in the dropdown.

## What to build

### 1. Replace "More dedications..." with a search bar

When the user taps "More dedications..." the current behavior (toggling extra optgroups into the `<select>`) should be replaced with:

- A **text input** that appears below the primary dropdown
- **Type-ahead filtering** against every encoded Menaion and Pentecostarion entry that has a troparion — not just entries in `TEMPLE_DEDICATIONS`
- Show **5-6 matching results** max as tappable rows below the input
- Match against the `saint` field of each entry (case-insensitive, substring match)
- Each result row shows the saint name and the date (e.g., "Holy Prophet Elijah — Jul 20")
- Tapping a result saves the dedication to localStorage and resolves the troparion/kontakion, same as the primary dropdown

This means the search bar auto-discovers every encoded saint without any manual registry entry. As new months are encoded, new dedications become searchable automatically.

### 2. Curate the primary short list

The curated primary dropdown should cover the most common OCA parish dedications. Based on SCOBA data (see `project_notes.md` for the Orthodox History analysis):

**The Lord & Holy Trinity** — Holy Trinity, Resurrection, Ascension, Transfiguration, Holy Cross, Nativity of Christ, Theophany, Christ the Savior, Presentation of Christ

**The Theotokos** — Annunciation, Dormition, Nativity of the Theotokos, Protection (Pokrov), Entrance of the Theotokos, Vladimir Icon, Joy of All Who Sorrow, Kazan Icon, Tikhvin Icon

**Saints & Archangels** — St. Nicholas, Archangel Michael, Ss. Peter & Paul, St. John the Baptist, St. George, Three Hierarchs, Ss. Constantine & Helen, St. Herman, St. Innocent, St. Andrew, St. John Maximovitch, St. Tikhon, St. Seraphim, St. Raphael of Brooklyn, St. Vladimir, St. Demetrios, Holy Prophet Elijah, St. John the Theologian, St. Sergius of Radonezh

**Feasts & Sacred Events** — All Saints, Pentecost

These remain in `TEMPLE_DEDICATIONS` and appear in the primary `<select>` dropdown. Only those with encoded troparion data actually show.

The search bar handles everything else — any saint we've ever encoded becomes findable.

### 3. Data architecture for the search

The search needs to scan `_menaionCache` and `_pentecostarionCache` at runtime. Approach:

```javascript
function searchEncodedDedications(query) {
  const results = [];
  const q = query.toLowerCase();
  // Scan all loaded Menaion months
  for (const [month, monthData] of Object.entries(_menaionCache)) {
    for (const [key, raw] of Object.entries(monthData)) {
      const entries = Array.isArray(raw) ? raw : [raw];
      entries.forEach((e, idx) => {
        if (e.troparion && e.saint && e.saint.toLowerCase().includes(q)) {
          results.push({ dataKey: key, arrayIndex: Array.isArray(raw) ? idx : null,
            saint: e.saint, tone: e.troparion.tone, source: "menaion" });
        }
      });
    }
  }
  // Scan Pentecostarion
  if (_pentecostarionCache) {
    for (const [offset, e] of Object.entries(_pentecostarionCache)) {
      if (e.troparion && e.name && e.name.toLowerCase().includes(q)) {
        results.push({ dataKey: Number(offset), saint: e.name,
          tone: e.troparion.tone, source: "pentecostarion" });
      }
    }
  }
  return results.slice(0, 6);
}
```

When a search result is selected, save a composite key to localStorage (e.g., `menaion:07-01:0` or `pentecostarion:49`) so the resolve functions can find it. The `TEMPLE_DEDICATIONS` registry entries still work as before for the curated list.

### 4. UI styling

Match the existing tool aesthetic:
- Input: Georgia serif, `0.85rem`, same border styling as the existing `<select>` (`1px solid rgba(180,160,112,0.4)`, `border-radius: 6px`)
- Results: tappable rows with saint name in primary text color, date in muted (#9A8A70), hover highlight
- The search replaces the "More dedications..." row when active; a "Back to list" or "×" closes it
- Keep the "No dedication / serving at home" row always visible below

### 5. Preloading consideration

The search can only find saints in months that are loaded. Currently the tool loads current month ± 1 plus the dedication's month. For the search to be comprehensive, consider preloading all available months on first interaction with the search bar (lazy load — don't block initial render).

## Files to modify

- `src/components/hours-tool.jsx` — TempleSelector component, searchEncodedDedications function
- Possibly `TEMPLE_DEDICATIONS` constant — may need a `curated: true` flag or separate the curated list from the search-discovered entries

## Testing

- Primary dropdown should still work exactly as before
- Search bar: type "Cosmas" → should find "Holy Unmercenaries Cosmas & Damian of Rome — Jul 1"
- Search bar: type "Peter" → should find "Ss. Peter & Paul" (from TEMPLE_DEDICATIONS) and any other Peter-related entries
- Select from search → localStorage saves, troparion/kontakion resolves at both Litiya and Typica
- "(change)" → reopens picker, search state resets
- "No dedication" still works, still visible during search
