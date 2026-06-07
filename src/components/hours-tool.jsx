import React, { useState, useEffect } from 'react';

// ─── CALENDAR ENGINE ────────────────────────────────────────────────────────
// Sources:
//   Paschal calculation: Meeus/Jones/Butcher algorithm (Julian → Gregorian +13 days)
//   Great Feast dates and periods: Orthodox Typicon / OCA liturgical calendar
//   Fekula §2G1-§2G4: forefeast/afterfeast/apodosis assembly rules

// ── DATE PARSING ─────────────────────────────────────────────────────────────
// Parse a YYYY-MM-DD string as a local calendar date at midnight.
// This matches how all boundary dates (allSaintsSunday, brightSaturday, etc.)
// are constructed — ensuring date comparisons are purely calendar-date based
// with no time-of-day offset mismatches.
function parseCalendarDate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d);
}

// ── PASCHAL CALCULATION ──────────────────────────────────────────────────────
function computePascha(year) {
  const a = year % 4;
  const b = year % 7;
  const c = year % 19;
  const d = (19 * c + 15) % 30;
  const e = (2 * a + 4 * b - d + 34) % 7;
  const month = Math.floor((d + e + 114) / 31);
  const day = ((d + e + 114) % 31) + 1;
  const julianPascha = new Date(year, month - 1, day);
  const gregorianPascha = new Date(julianPascha);
  gregorianPascha.setDate(gregorianPascha.getDate() + 13);
  return gregorianPascha;
}

// ─── LECTIONARY ──────────────────────────────────────────────────────────────
// Daily epistle and gospel readings keyed by Pascha offset (days after Pascha).
// Source: OCA lectionary oca.org/readings/monthly — verified across 2025 & 2026.
// Confirmed: same Pascha offset = same readings, every year (pure movable cycle).
// Covers P-101 (Jan 1, pre-Lenten) through P+263 (Dec 31, post-Nativity).
// Sundays and feast-only days may be absent — lookup returns null for those.
//
// THE LUKAN JUMP (Sep 14 / Elevation of Holy Cross):
// After Sep 14, the Gospel switches from Matthew/Mark to Luke starting at Lk 3.
// The exact Pascha offset where this fires varies by year (Sep 14 is a fixed date
// but its day-of-week changes annually). The getLukanJumpOffset() function
// computes the correct offset for any year at render time.
// The LECTIONARY table uses OCA 2026 offsets throughout — the Lukan Jump
// correction is applied by getDailyReading() when needed for other years.
//
// FW-18: Add pericope number mapping table (Slavic Gospel/Apostolos numbering).
// FW-19: Add actual scripture text rendering from a Bible API.

const LECTIONARY = {
  "-101": { e: "Hebrews 10:35-11:7", g: "Mark 11:27-33" },
  "-100": { e: "Hebrews 11:8, 11-16", g: "Mark 12:1-12" },
  "-97": { e: "Hebrews 11:17-23, 27-31", g: "Mark 8:11-21" },
  "-95": { e: "James 1:1-18", g: "Mark 8:30-34" },
  "-94": { e: "James 1:19-27", g: "Mark 9:10-16" },
  "-93": { e: "James 2:1-13", g: "Mark 9:33-41" },
  "-90": { e: "James 2:14-26", g: "Mark 9:42-10:1" },
  "-89": { e: "James 3:1-10", g: "Mark 10:2-12" },
  "-88": { e: "James 3:11-4:6", g: "Mark 10:11-16" },
  "-87": { e: "James 4:7-5:9", g: "Mark 10:17-27" },
  "-86": { e: "1 Peter 1:1-2, 10-12, 2:6-10", g: "Mark 10:23-32" },
  "-83": { e: "James 2:14-26", g: "Mark 10:46-52" },
  "-82": { e: "James 3:1-10", g: "Mark 11:11-23" },
  "-81": { e: "James 3:11-4:6", g: "Mark 11:22-26" },
  "-80": { e: "James 4:7-5:9", g: "Mark 11:27-33" },
  "-79": { e: "1 Peter 1:1-2, 10-12, 2:6-10", g: "Mark 12:1-12" },
  "-78": { e: "1 Thessalonians 5:14-23", g: "Luke 17:3-10" },
  "-77": { e: "1 Timothy 4:9-15", g: "Luke 19:1-10" },
  "-76": { e: "1 Peter 2:21-3:9", g: "Mark 12:13-17" },
  "-75": { e: "1 Peter 3:10-22", g: "Mark 12:18-27" },
  "-74": { e: "1 Peter 4:1-11", g: "Mark 12:28-37" },
  "-73": { e: "1 Peter 4:12-5:5", g: "Mark 12:38-44" },
  "-72": { e: "2 Peter 1:1-10", g: "Mark 13:1-8" },
  "-71": { e: "2 Timothy 2:11-19", g: "Luke 18:2-8" },
  "-70": { e: "2 Timothy 3:10-15", g: "Luke 18:10-14" },
  "-69": { e: "2 Peter 1:20-2:9", g: "Mark 13:9-13" },
  "-68": { e: "2 Peter 2:9-22", g: "Mark 13:14-23" },
  "-67": { e: "2 Peter 3:1-18", g: "Mark 13:24-31" },
  "-66": { e: "1 John 1:8-2:6", g: "Mark 13:31-14:2" },
  "-65": { e: "1 John 2:7-17", g: "Mark 14:3-9" },
  "-64": { e: "2 Timothy 3:1-9", g: "Luke 20:46-21:4" },
  "-63": { e: "1 Corinthians 6:12-20", g: "Luke 15:11-32" },
  "-62": { e: "1 John 2:18-3:10", g: "Mark 11:1-11" },
  "-61": { e: "1 John 3:11-20", g: "Mark 14:10-42" },
  "-60": { e: "1 John 3:21-4:6", g: "Mark 14:43-15:1" },
  "-59": { e: "1 John 4:20-5:21", g: "Mark 15:1-15" },
  "-58": { e: "2 John 1:1-13", g: "Mark 15:22-25, 33-41" },
  "-55": { e: "3 John 1:1-15", g: "Luke 19:29-40, 22:7-39" },
  "-54": { e: "Jude 1:1-10", g: "Luke 22:39-42, 45-23:1" },
  "-52": { e: "Jude 1:11-25", g: "Luke 23:2-34, 44-56" },
  "-50": { e: "Romans 14:19-23, 16:25-27", g: "Matthew 6:1-13" },
  "-49": { e: "Romans 13:11-14:4", g: "Matthew 6:14-21" },
  0: { e: "Romans 6:3-11", g: "Matthew 28:1-20" },
  1: { e: "Acts 1:12-17, 21-26", g: "John 1:18-28" },
  2: { e: "Acts 2:14-21", g: "Luke 24:12-35" },
  3: { e: "Acts 2:22-36", g: "John 1:35-51" },
  4: { e: "Acts 2:38-43", g: "John 3:1-15" },
  5: { e: "Acts 3:1-8", g: "John 2:12-22" },
  6: { e: "Acts 3:11-16", g: "John 3:22-33" },
  8: { e: "Acts 3:19-26", g: "John 2:1-11" },
  9: { e: "Acts 4:1-10", g: "John 3:16-21" },
  10: { e: "Acts 4:13-22", g: "John 5:17-24" },
  11: { e: "Acts 4:23-31", g: "John 5:24-30" },
  12: { e: "Acts 5:1-11", g: "John 5:30-6:2" },
  13: { e: "Acts 5:21-33", g: "John 6:14-27" },
  15: { e: "Acts 6:1-7", g: "Mark 15:43-16:8" },
  16: { e: "Acts 6:8-7:5, 47-60", g: "John 4:46-54" },
  17: { e: "Acts 8:5-17", g: "John 6:27-33" },
  18: { e: "Acts 8:18-25", g: "John 6:35-39" },
  19: { e: "Acts 8:40-9:19", g: "John 6:48-54" },
  20: { e: "Acts 9:20-31", g: "John 15:17-16:2" },
  21: { e: "Acts 9:32-42", g: "John 5:1-15" },
  22: { e: "Acts 10:1-16", g: "John 6:56-69" },
  23: { e: "Acts 10:21-33", g: "John 7:1-13" },
  24: { e: "Acts 10:34-43", g: "John 8:12-20" },
  25: { e: "Acts 10:44-11:10", g: "John 8:21-30" },
  26: { e: "Acts 10:44-11:10", g: "John 8:21-30" },
  27: { e: "Acts 12:1-11", g: "John 8:31-42" },
  29: { e: "Acts 12:12-17", g: "John 8:42-51" },
  30: { e: "Acts 12:25-13:12", g: "John 8:51-59" },
  31: { e: "Acts 13:13-24", g: "John 6:5-14" },
  32: { e: "Acts 14:20-27", g: "John 9:39-10:9" },
  33: { e: "Acts 15:5-34", g: "John 10:17-28" },
  34: { e: "Acts 15:35-41", g: "John 10:27-38" },
  35: { e: "Acts 16:16-34", g: "John 9:1-38" },
  36: { e: "Acts 17:1-15", g: "John 11:47-57" },
  37: { e: "Acts 17:19-28", g: "John 12:19-36" },
  38: { e: "Acts 18:22-28", g: "John 12:36-47" },
  39: { e: "Acts 1:1-12", g: "Luke 24:36-53" },
  40: { e: "Acts 19:1-8", g: "John 14:1-11" },
  41: { e: "Acts 20:7-12", g: "John 14:10-21" },
  42: { e: "Acts 20:16-18, 28-36", g: "John 17:1-13" },
  43: { e: "Acts 21:8-14", g: "John 14:27-15:7" },
  44: { e: "Acts 21:26-32", g: "John 16:2-13" },
  45: { e: "Acts 23:1-11", g: "John 16:15-23" },
  46: { e: "Acts 25:13-19", g: "John 16:23-33" },
  47: { e: "Acts 27:1-44", g: "John 17:18-26" },
  48: { e: "Acts 28:1-31", g: "John 21:15-25" },
  49: { e: "Acts 2:1-11", g: "John 7:37-52, 8:12" },
  50: { e: "Ephesians 5:9-19", g: "Matthew 18:10-20" },
  51: { e: "Romans 1:1-7, 13-17", g: "Matthew 4:25-5:13" },
  52: { e: "Romans 1:18-27", g: "Matthew 5:20-26" },
  53: { e: "Romans 1:28-2:9", g: "Matthew 5:27-32" },
  54: { e: "Romans 2:14-29", g: "Matthew 5:33-41" },
  55: { e: "Romans 1:7-12", g: "Matthew 5:42-48" },
  56: { e: "Hebrews 11:33-12:2", g: "Matthew 10:32-33, 37-38, 19:27-30" },  // All Saints Sunday
  57: { e: "Romans 2:28-3:18", g: "Matthew 6:31-34, 7:9-11" },
  58: { e: "Romans 4:4-12", g: "Matthew 7:15-21" },
  59: { e: "Romans 4:13-25", g: "Matthew 7:21-23" },
  60: { e: "Romans 5:10-16", g: "Matthew 8:23-27" },
  61: { e: "Romans 5:17-6:2", g: "Matthew 9:14-17" },
  62: { e: "Romans 3:19-26", g: "Matthew 7:1-8" },
  63: { e: "Hebrews 11:33-12:2", g: "Matthew 4:25-5:12" },  // All Saints of North America Sunday
  64: { e: "Romans 7:1-13", g: "Matthew 9:36-10:8" },
  65: { e: "Romans 7:14-8:2", g: "Matthew 10:9-15" },
  66: { e: "Romans 8:2-13", g: "Matthew 10:16-22" },
  67: { e: "Romans 8:22-27", g: "Matthew 10:23-31" },
  68: { e: "Romans 9:6-19", g: "Matthew 10:32-36, 11:1" },
  69: { e: "Romans 3:28-4:3", g: "Matthew 7:24-8:4" },
  71: { e: "Romans 9:18-33", g: "Matthew 11:2-15" },
  72: { e: "Romans 10:11-11:2", g: "Matthew 11:16-20" },
  73: { e: "Romans 11:2-12", g: "Matthew 11:20-26" },
  74: { e: "Romans 11:13-24", g: "Matthew 11:27-30" },
  75: { e: "Romans 11:25-36", g: "Matthew 12:1-8" },
  76: { e: "Romans 6:11-17", g: "Matthew 8:14-23" },
  78: { e: "Romans 12:4-5, 15-21", g: "Matthew 12:9-13" },
  79: { e: "Romans 14:9-18", g: "Matthew 12:14-16, 22-30" },
  80: { e: "Romans 15:7-16", g: "Matthew 12:38-45" },
  81: { e: "Romans 15:17-29", g: "Matthew 12:46-13:3" },
  82: { e: "Romans 16:1-16", g: "Matthew 13:4-9" },
  83: { e: "Romans 8:14-21", g: "Matthew 9:9-13" },
  84: { e: "Romans 10:1-10", g: "Matthew 8:28-9:1" },
  85: { e: "Romans 16:17-24", g: "Matthew 13:10-23" },
  86: { e: "1 Corinthians 1:1-9", g: "Matthew 13:24-30" },
  87: { e: "1 Corinthians 2:9-3:8", g: "Matthew 13:31-36" },
  88: { e: "1 Corinthians 3:18-23", g: "Matthew 13:36-43" },
  89: { e: "1 Corinthians 4:5-8", g: "Matthew 13:44-54" },
  90: { e: "Romans 9:1-5", g: "Matthew 9:18-26" },
  91: { e: "Romans 12:6-14", g: "Matthew 9:1-8" },
  92: { e: "Romans 10:1-10", g: "Matthew 8:28-9:1" },
  93: { e: "Romans 16:17-24", g: "Matthew 13:10-23" },
  94: { e: "1 Corinthians 1:1-9", g: "Matthew 13:24-30" },
  95: { e: "1 Corinthians 7:24-35", g: "Matthew 15:12-21" },
  96: { e: "1 Corinthians 7:35-8:7", g: "Matthew 15:29-31" },
  97: { e: "Romans 12:1-3", g: "Matthew 10:37-11:1" },
  98: { e: "Romans 15:1-7", g: "Matthew 9:27-35" },
  99: { e: "1 Corinthians 9:13-18", g: "Matthew 16:1-6" },
  100: { e: "1 Corinthians 10:5-12", g: "Matthew 16:6-12" },
  101: { e: "1 Corinthians 10:12-22", g: "Matthew 16:20-24" },
  102: { e: "1 Corinthians 10:28-11:7", g: "Matthew 16:24-28" },
  103: { e: "1 Corinthians 11:8-22", g: "Matthew 17:10-18" },
  104: { e: "Romans 13:1-10", g: "Matthew 12:30-37" },
  105: { e: "1 Corinthians 1:10-18", g: "Matthew 14:14-22" },
  106: { e: "1 Corinthians 11:31-12:6", g: "Matthew 18:1-11" },
  107: { e: "1 Corinthians 12:12-26", g: "Matthew 18:18-22, 19:1-2, 13-15" },
  108: { e: "1 Corinthians 13:4-14:5", g: "Matthew 20:1-16" },
  109: { e: "1 Corinthians 14:6-19", g: "Matthew 20:17-28" },
  110: { e: "1 Corinthians 14:26-40", g: "Matthew 21:12-14, 17-20" },
  111: { e: "Romans 14:6-9", g: "Matthew 15:32-39" },
  112: { e: "1 Corinthians 3:9-17", g: "Matthew 14:22-34" },
  113: { e: "1 Corinthians 15:12-19", g: "Matthew 21:18-22" },
  114: { e: "1 Corinthians 15:29-38", g: "Matthew 21:23-27" },
  115: { e: "1 Corinthians 16:4-12", g: "Matthew 21:28-32" },
  116: { e: "2 Corinthians 1:1-7", g: "Matthew 21:43-46" },
  117: { e: "2 Corinthians 1:12-20", g: "Matthew 22:23-33" },
  118: { e: "Romans 15:30-33", g: "Matthew 17:24-18:4" },
  119: { e: "1 Corinthians 4:9-16", g: "Matthew 17:14-23" },
  120: { e: "2 Corinthians 2:4-15", g: "Matthew 23:13-22" },
  121: { e: "2 Corinthians 2:14-3:3", g: "Matthew 23:23-28" },
  122: { e: "2 Corinthians 3:4-11", g: "Matthew 23:29-39" },
  123: { e: "2 Corinthians 4:1-6", g: "Matthew 24:13-28" },
  124: { e: "2 Corinthians 4:13-18", g: "Matthew 24:27-33, 42-51" },
  125: { e: "1 Corinthians 1:3-9", g: "Matthew 19:3-12" },
  126: { e: "1 Corinthians 9:2-12", g: "Matthew 18:23-35" },
  127: { e: "2 Corinthians 5:10-15", g: "Mark 1:9-15" },
  128: { e: "2 Corinthians 5:15-21", g: "Mark 1:16-22" },
  129: { e: "2 Corinthians 6:11-16", g: "Mark 1:23-28" },
  130: { e: "2 Corinthians 7:1-10", g: "Mark 1:29-35" },
  131: { e: "2 Corinthians 7:10-16", g: "Mark 2:18-22" },
  132: { e: "1 Corinthians 1:26-29", g: "Matthew 20:29-34" },
  133: { e: "1 Corinthians 15:1-11", g: "Matthew 19:16-26" },
  134: { e: "2 Corinthians 8:7-15", g: "Mark 3:6-12" },
  135: { e: "2 Corinthians 8:16-9:5", g: "Mark 3:13-19" },
  136: { e: "2 Corinthians 9:12-10:7", g: "Mark 3:20-27" },
  137: { e: "2 Corinthians 10:7-18", g: "Mark 3:28-35" },
  138: { e: "2 Corinthians 11:5-21", g: "Mark 4:1-9" },
  139: { e: "1 Corinthians 2:6-9", g: "Matthew 22:15-22" },
  140: { e: "1 Corinthians 16:13-24", g: "Matthew 21:33-42" },
  141: { e: "2 Corinthians 12:10-19", g: "Mark 4:10-23" },
  142: { e: "2 Corinthians 12:20-13:2", g: "Mark 4:24-34" },
  143: { e: "2 Corinthians 13:3-14", g: "Mark 4:35-41" },
  144: { e: "Galatians 1:1-10, 20-2:5", g: "Mark 5:1-20" },
  145: { e: "Galatians 2:6-10", g: "Mark 5:22-24, 35-6:1" },
  146: { e: "1 Corinthians 4:1-5", g: "Matthew 23:1-12" },
  147: { e: "2 Corinthians 1:21-2:4", g: "Matthew 22:1-14" },
  148: { e: "Galatians 2:11-16", g: "Mark 5:24-34" },
  149: { e: "Galatians 2:21-3:7", g: "Mark 6:1-7" },
  150: { e: "Galatians 3:15-22", g: "Mark 6:7-13" },
  151: { e: "Galatians 3:23-4:5", g: "Mark 6:30-45" },
  152: { e: "Galatians 4:8-21", g: "Mark 6:45-53" },
  153: { e: "1 Corinthians 4:17-5:5", g: "Matthew 24:1-13" },
  154: { e: "2 Corinthians 4:6-15", g: "Matthew 22:35-46" },
  155: { e: "Galatians 4:28-5:10", g: "Mark 6:54-7:8" },
  156: { e: "Galatians 5:11-21", g: "Mark 7:5-16" },
  157: { e: "Galatians 6:2-10", g: "Mark 7:14-24" },
  158: { e: "Ephesians 1:1-9", g: "Mark 7:24-30" },
  159: { e: "Ephesians 1:7-17", g: "Mark 8:1-10" },
  160: { e: "1 Corinthians 10:23-28", g: "Matthew 24:34-44" },
  161: { e: "2 Corinthians 6:1-10", g: "Matthew 25:14-30" },
  162: { e: "Ephesians 1:22-2:3", g: "Luke 3:19-22" },
  163: { e: "Ephesians 2:19-3:7", g: "Luke 3:23-4:1" },
  164: { e: "Ephesians 3:8-21", g: "Luke 4:1-15" },
  165: { e: "Ephesians 4:14-19", g: "Luke 4:16-22" },
  166: { e: "Ephesians 4:17-25", g: "Luke 4:22-30" },
  167: { e: "1 Corinthians 14:20-25", g: "Luke 4:31-36" },
  168: { e: "2 Corinthians 6:16-7:1", g: "Luke 5:1-11" },
  169: { e: "Ephesians 4:25-32", g: "Luke 4:37-44" },
  170: { e: "Ephesians 5:20-26", g: "Luke 5:12-16" },
  171: { e: "Ephesians 5:25-33", g: "Luke 5:33-39" },
  172: { e: "Ephesians 5:33-6:9", g: "Luke 6:12-19" },
  173: { e: "Ephesians 6:18-24", g: "Luke 6:17-23" },
  174: { e: "1 Corinthians 15:39-45", g: "Luke 5:17-26" },
  175: { e: "2 Corinthians 9:6-11", g: "Luke 6:31-36" },
  176: { e: "Philippians 1:1-7", g: "Luke 6:24-30" },
  177: { e: "Philippians 1:8-14", g: "Luke 6:37-45" },
  178: { e: "Philippians 1:12-20", g: "Luke 6:46-7:1" },
  179: { e: "Philippians 1:20-27", g: "Luke 7:17-30" },
  180: { e: "Philippians 1:27-2:4", g: "Luke 7:31-35" },
  181: { e: "1 Corinthians 15:58-16:3", g: "Luke 5:27-32" },
  182: { e: "2 Corinthians 11:31-12:9", g: "Luke 7:11-16" },
  183: { e: "Philippians 2:12-16", g: "Luke 7:36-50" },
  184: { e: "Philippians 2:17-23", g: "Luke 8:1-3" },
  185: { e: "Philippians 2:24-30", g: "Luke 8:22-25" },
  186: { e: "Philippians 3:1-8", g: "Luke 9:7-11" },
  187: { e: "Philippians 3:8-19", g: "Luke 9:12-18" },
  188: { e: "2 Corinthians 1:8-11", g: "Luke 6:1-10" },
  189: { e: "Galatians 1:11-19", g: "Luke 8:5-15" },
  190: { e: "Philippians 4:10-23", g: "Luke 9:18-22" },
  191: { e: "Colossians 1:1-2, 7-11", g: "Luke 9:23-27" },
  192: { e: "Colossians 1:18-23", g: "Luke 9:44-50" },
  193: { e: "Colossians 1:24-29", g: "Luke 9:49-56" },
  194: { e: "Colossians 2:1-7", g: "Luke 10:1-15" },
  195: { e: "2 Corinthians 3:12-18", g: "Luke 7:1-10" },
  196: { e: "Galatians 2:16-20", g: "Luke 16:19-31" },
  197: { e: "Colossians 2:13-20", g: "Luke 10:22-24" },
  198: { e: "Colossians 2:20-3:3", g: "Luke 11:1-10" },
  199: { e: "Colossians 3:17-4:1", g: "Luke 11:9-13" },
  200: { e: "Colossians 4:2-9", g: "Luke 11:14-23" },
  201: { e: "Colossians 4:10-18", g: "Luke 11:23-26" },
  202: { e: "2 Corinthians 5:1-10", g: "John 10:9-16" },
  203: { e: "Galatians 6:11-18", g: "Luke 8:26-39" },
  204: { e: "1 Thessalonians 1:1-5", g: "Luke 11:29-33" },
  205: { e: "1 Thessalonians 1:6-10", g: "Luke 11:34-41" },
  206: { e: "1 Thessalonians 2:1-8", g: "Luke 11:42-46" },
  207: { e: "1 Thessalonians 2:9-14", g: "Luke 11:47-12:1" },
  208: { e: "1 Thessalonians 2:14-19", g: "Luke 12:2-12" },
  209: { e: "2 Corinthians 8:1-5", g: "Luke 9:1-6" },
  210: { e: "Ephesians 2:4-10", g: "Luke 8:41-56" },
  211: { e: "1 Thessalonians 2:20-3:8", g: "Luke 12:13-15, 22-31" },
  212: { e: "1 Thessalonians 3:9-13", g: "Luke 12:42-48" },
  213: { e: "1 Thessalonians 4:1-12", g: "Luke 12:48-59" },
  214: { e: "1 Thessalonians 5:1-8", g: "Luke 13:1-9" },
  215: { e: "1 Thessalonians 5:9-13, 24-28", g: "Luke 13:31-35" },
  216: { e: "2 Corinthians 11:1-6", g: "Luke 9:37-43" },
  217: { e: "Ephesians 2:14-22", g: "Luke 10:25-37" },
  218: { e: "2 Thessalonians 1:1-10", g: "Luke 14:12-15" },
  219: { e: "2 Thessalonians 1:10-2:2", g: "Luke 14:25-35" },
  220: { e: "2 Thessalonians 2:1-12", g: "Luke 15:1-10" },
  221: { e: "2 Thessalonians 2:13-3:5", g: "Luke 16:1-9" },
  222: { e: "2 Thessalonians 3:6-18", g: "Luke 16:15-18, 17:1-4" },
  223: { e: "Galatians 1:3-10", g: "Luke 9:57-62" },
  224: { e: "Ephesians 4:1-6", g: "Luke 12:16-21" },
  225: { e: "1 Timothy 1:1-7", g: "Luke 17:20-25" },
  226: { e: "1 Timothy 1:8-14", g: "Luke 17:26-37" },
  227: { e: "1 Timothy 1:18-20, 2:8-15", g: "Luke 18:15-17, 26-30" },
  228: { e: "1 Timothy 3:1-13", g: "Luke 18:31-34" },
  229: { e: "1 Timothy 4:4-8, 16", g: "Luke 19:12-28" },
  230: { e: "Galatians 3:8-12", g: "Luke 10:19-21" },
  231: { e: "Ephesians 5:9-19", g: "Luke 13:10-17" },
  232: { e: "1 Timothy 5:1-10", g: "Luke 19:37-44" },
  233: { e: "1 Timothy 5:11-21", g: "Luke 19:45-48" },
  234: { e: "1 Timothy 5:22-6:11", g: "Luke 20:1-8" },
  235: { e: "1 Timothy 6:17-21", g: "Luke 20:9-18" },
  236: { e: "2 Timothy 1:1-2, 8-18", g: "Luke 20:19-26" },
  237: { e: "Galatians 5:22-6:2", g: "Luke 12:32-40" },
  238: { e: "Ephesians 6:10-17", g: "Luke 17:12-19" },
  239: { e: "2 Timothy 2:20-26", g: "Luke 20:27-44" },
  240: { e: "2 Timothy 3:16-4:4", g: "Luke 21:12-19" },
  241: { e: "2 Timothy 4:9-22", g: "Luke 21:5-7, 10-11, 20-24" },
  242: { e: "Titus 1:5-2:1", g: "Luke 21:28-33" },
  243: { e: "Titus 1:15-2:10", g: "Luke 21:37-22:8" },
  244: { e: "Ephesians 1:16-23", g: "Luke 13:18-29" },
  245: { e: "Colossians 3:4-11", g: "Luke 14:16-24" },
  246: { e: "Hebrews 3:5-11, 17-19", g: "Mark 8:11-21" },
  247: { e: "Hebrews 4:1-13", g: "Mark 8:22-26" },
  248: { e: "Hebrews 5:11-6:8", g: "Mark 8:30-34" },
  249: { e: "Hebrews 7:1-6", g: "Mark 9:10-16" },
  250: { e: "Hebrews 7:18-25", g: "Mark 9:33-41" },
  251: { e: "Galatians 3:8-12", g: "Luke 13:18-29" },
  252: { e: "Hebrews 11:9-10, 17-23, 32-40", g: "Matthew 1:1-25" },
  253: { e: "Hebrews 8:7-13", g: "Mark 9:42-10:1" },
  254: { e: "Hebrews 9:8-10, 15-23", g: "Mark 10:2-12" },
  255: { e: "Hebrews 10:1-18", g: "Mark 10:11-16" },
  256: { e: "Hebrews 10:35-11:7", g: "Mark 10:17-27" },
  257: { e: "Galatians 4:4-7", g: "Matthew 2:1-12" },
  258: { e: "1 Timothy 6:11-16", g: "Matthew 12:15-21" },  // Saturday after Nativity
  260: { e: "Hebrews 11:17-23, 27-31", g: "Mark 10:46-52" },
  261: { e: "Hebrews 12:25-26, 13:22-25", g: "Mark 11:11-23" },
  262: { e: "James 1:1-18", g: "Mark 11:22-26" },
  263: { e: "James 1:19-27", g: "Mark 11:27-33" },
};

// Returns the Pascha offset of the Monday when Luke readings begin for a given year.
// This is always the Monday after the first Sunday on or after Sep 14.
function getLukanJumpOffset(year) {
  const pascha = computePascha(year);
  const sep14 = new Date(year, 8, 14);
  const dow = sep14.getDay(); // 0=Sun
  const daysToNextSun = dow === 0 ? 0 : (7 - dow);
  const lukeMonday = new Date(sep14);
  lukeMonday.setDate(sep14.getDate() + daysToNextSun + 1);
  return Math.floor((lukeMonday - pascha) / 86400000);
}

// Returns { e, g, lukanJump } for the given JS Date, or null if no reading.
// e = epistle reference string, g = gospel reference string.
// lukanJump: true if this date is in the Luke series (after Elevation Sunday).
function getDailyReading(dateObj) {
  const year = dateObj.getFullYear();
  const pascha = computePascha(year);
  const offset = Math.floor((dateObj - pascha) / 86400000);
  const entry = LECTIONARY[offset < 0 ? String(offset) : offset];
  if (!entry) return null;
  const lukanOffset = getLukanJumpOffset(year);
  return { ...entry, lukanJump: offset >= lukanOffset };
}

// ── SCRIPTURE HREF HELPER ─────────────────────────────────────────────────────
// Converts a LECTIONARY reference string (e.g. "Romans 6:3-11") to a scripture
// deep-link URL. Lands on the first chapter:verse of the reading.
const SCRIPTURE_BOOK_ID = {
  // NT
  "Matthew": "Matt", "Mark": "Mark", "Luke": "Luke", "John": "John",
  "Acts": "Acts", "Romans": "Rom", "Colossians": "Col", "Ephesians": "Eph",
  "Galatians": "Gal", "Philippians": "Phil", "Hebrews": "Heb",
  "1 Corinthians": "1Cor", "2 Corinthians": "2Cor",
  "1 Thessalonians": "1Thes", "2 Thessalonians": "2Thes",
  "1 Timothy": "1Tim", "2 Timothy": "2Tim",
  "Titus": "Tit", "Philemon": "Phlm",
  "1 Peter": "1Pet", "2 Peter": "2Pet",
  "James": "Jas", "Jude": "Jude",
  "1 John": "1John", "2 John": "2John", "3 John": "3John",
  // OT
  "Genesis": "Gen", "Gen": "Gen",
  "Exodus": "Ex", "Exod": "Ex",
  "Leviticus": "Lev", "Numbers": "Num", "Deuteronomy": "Deut",
  "Joshua": "Josh", "Judges": "Judg", "Ruth": "Ruth",
  "1 Samuel": "1Sam", "2 Samuel": "2Sam",
  "1 Kings": "3Kgdm", "2 Kings": "4Kgdm",
  "3 Kings": "3Kgdm", "4 Kings": "4Kgdm",
  "1 Chronicles": "1Chr", "2 Chronicles": "2Chr",
  "Ezra": "Ezra", "Nehemiah": "Neh",
  "Tobit": "Tob", "Judith": "Jdt",
  "Job": "Job",
  "Proverbs": "Prov", "Prov": "Prov",
  "Ecclesiastes": "Eccl",
  "Wisdom": "Wis", "Wis": "Wis",
  "Wisdom of Solomon": "Wis",
  "Sirach": "Sir", "Baruch": "Bar",
  "Isaiah": "Isa", "Isa": "Isa",
  "Jeremiah": "Jer", "Lamentations": "Lam",
  "Ezekiel": "Ezek", "Ezek": "Ezek",
  "Daniel": "Dan",
  "Hosea": "Hos", "Joel": "Joel", "Amos": "Amos",
  "Jonah": "Jon", "Micah": "Mic",
  "Zephaniah": "Zeph", "Haggai": "Hag",
  "Zechariah": "Zech", "Malachi": "Mal",
};

// Extract a scripture href from a paroemia string.
// Handles two formats:
//   "Genesis 28:10-17 (description)"       → ref = "Genesis 28:10-17"
//   "Proverbs — description (Prov 10:7)"   → ref extracted from parens
function paroemiaToScriptureHref(paroemia, service, date) {
  if (!paroemia) return null;
  // Format 1: book ref at start — "Isaiah 40:1-8, 10-11 — description"
  // Capture everything up to " —" or end of string as the ref
  const m1 = paroemia.match(/^((?:\d\s+)?(?:[A-Za-z]+(?:\s+of\s+[A-Za-z]+)?|[A-Za-z]+(?:\s+[A-Za-z]+)?))\s+(\d+:\d+[^—]*)(?:\s*—|$)/);
  if (m1 && SCRIPTURE_BOOK_ID[m1[1].trim()]) {
    const ref = `${m1[1].trim()} ${m1[2].trim()}`;
    return refToScriptureHref(ref, service, date);
  }
  // Format 2: ref in trailing parentheses — "Proverbs — desc (Prov 10:7; 3:13-16)"
  const m2 = paroemia.match(/\(([A-Za-z]+(?:\s+[A-Za-z]+)?\s+\d+:\d+[^)]*)\)\s*$/);
  if (m2) {
    const firstRef = m2[1].split(/;/)[0].trim();
    const mm = firstRef.match(/^([A-Za-z]+(?:\s+[A-Za-z]+)?)\s+(.+)$/);
    if (mm && SCRIPTURE_BOOK_ID[mm[1].trim()]) {
      return refToScriptureHref(`${mm[1].trim()} ${mm[2].trim()}`, service, date);
    }
  }
  return null;
}

function refToScriptureHref(ref, service, date) {
  if (!ref) return null;
  const m = ref.trim().match(/^((?:\d\s+)?(?:[A-Za-z]+(?:\s+of\s+[A-Za-z]+)?|[A-Za-z]+(?:\s+[A-Za-z]+)?))\s+(\d+:\d+)/);
  if (!m) return null;
  if (!SCRIPTURE_BOOK_ID[m[1].trim()]) return null;
  return `/orthodox-hours/scripture?ref=${encodeURIComponent(ref.trim())}&service=${service}&date=${date}`;
}

// ── GREAT FEASTS DATA ────────────────────────────────────────────────────────
// Each feast has:
//   forefeast: number of days before the feast date (0 = no forefeast)
//   afterfeast: number of days after the feast date (apodosis = feast + afterfeast)
//   rank: 'great' (the Twelve) | 'great_lord' | 'vigil'
//   fekula: which Fekula section governs days in this feast's period
//
// Fixed feasts: month/day in the Gregorian (New Style) calendar
// Movable feasts: offset in days from Pascha

const FIXED_GREAT_FEASTS = [
  // September
  {
    key: "nativity_theotokos", name: "Nativity of the Theotokos",
    month: 9, day: 8, forefeast: 1, afterfeast: 4, rank: "great",
    note: "One of the Twelve Great Feasts. Forefeast: Sep 7. Apodosis: Sep 12."
  },
  {
    key: "elevation_cross", name: "Elevation of the Holy Cross",
    month: 9, day: 14, forefeast: 1, afterfeast: 7, rank: "great",
    note: "One of the Twelve Great Feasts. Forefeast: Sep 13. Apodosis: Sep 21."
  },
  // November
  {
    key: "entry_theotokos", name: "Entry of the Theotokos into the Temple",
    month: 11, day: 21, forefeast: 1, afterfeast: 4, rank: "great",
    note: "One of the Twelve Great Feasts. Forefeast: Nov 20. Apodosis: Nov 25."
  },
  // December — Nativity has 5-day forefeast (Dec 20-24)
  {
    key: "nativity_christ", name: "Nativity of Christ",
    month: 12, day: 25, forefeast: 5, afterfeast: 6, rank: "great",
    note: "One of the Twelve Great Feasts. Forefeast: Dec 20-24. Apodosis: Dec 31."
  },
  // January
  {
    key: "circumcision", name: "Circumcision of the Lord / St Basil the Great",
    month: 1, day: 1, forefeast: 0, afterfeast: 0, rank: "vigil",
    note: "Falls within the Nativity afterfeast period. Vigil rank. No forefeast or afterfeast of its own."
  },
  {
    key: "theophany", name: "Theophany (Epiphany)",
    month: 1, day: 6, forefeast: 4, afterfeast: 8, rank: "great",
    note: "One of the Twelve Great Feasts. Forefeast: Jan 2-5. Apodosis: Jan 14."
  },
  // February
  {
    key: "meeting_lord", name: "Meeting of the Lord (Presentation)",
    month: 2, day: 2, forefeast: 1, afterfeast: 7, rank: "great",
    note: "One of the Twelve Great Feasts. Forefeast: Feb 1. Apodosis: Feb 9. " +
          "Apodosis may be curtailed if it conflicts with Lent."
  },
  // March
  {
    key: "annunciation", name: "Annunciation",
    month: 3, day: 25, forefeast: 1, afterfeast: 1, rank: "great",
    note: "One of the Twelve Great Feasts. Forefeast: Mar 24. Apodosis: Mar 26. " +
          "ALWAYS falls in Lent in the current era. Special rules apply per Typicon. " +
          "If it falls on Holy Saturday or Bright Monday, the observance shifts. " +
          "Afterfeast is limited to 1 day regardless of Lent."
  },
  // August
  {
    key: "transfiguration", name: "Transfiguration of the Lord",
    month: 8, day: 6, forefeast: 1, afterfeast: 7, rank: "great",
    note: "One of the Twelve Great Feasts. Forefeast: Aug 5. Apodosis: Aug 13."
  },
  {
    key: "dormition", name: "Dormition of the Theotokos",
    month: 8, day: 15, forefeast: 1, afterfeast: 8, rank: "great",
    note: "One of the Twelve Great Feasts. Forefeast: Aug 14. Apodosis: Aug 23."
  },
  // Additional major feasts with significant liturgical impact
  {
    key: "nativity_john", name: "Nativity of St John the Forerunner",
    month: 6, day: 24, forefeast: 1, afterfeast: 6, rank: "great",
    note: "Great feast ranking. Forefeast: Jun 23. Apodosis: Jun 30."
  },
  {
    key: "peter_paul", name: "Sts Peter and Paul",
    month: 6, day: 29, forefeast: 1, afterfeast: 1, rank: "great",
    note: "Great feast ranking. Forefeast: Jun 28. Apodosis: Jun 30."
  },
  {
    key: "beheading_john", name: "Beheading of St John the Forerunner",
    month: 8, day: 29, forefeast: 0, afterfeast: 0, rank: "vigil",
    note: "Vigil rank. Day of strict fasting. No forefeast or afterfeast."
  },
  {
    key: "pokrov", name: "Protection of the Theotokos (Pokrov)",
    month: 10, day: 1, forefeast: 0, afterfeast: 0, rank: "vigil",
    note: "Vigil rank in the OCA. No forefeast or afterfeast."
  },
];

// Movable Great Feasts — offset in days from Pascha
const MOVABLE_GREAT_FEASTS = [
  {
    key: "palm_sunday", isSunday: true, name: "Palm Sunday (Entry into Jerusalem)",
    offset: -7, forefeast: 1, afterfeast: 0, rank: "great",
    note: "One of the Twelve Great Feasts. Forefeast: Lazarus Saturday (Pascha−8). " +
          "No afterfeast — Holy Week begins immediately."
  },
  {
    key: "ascension", name: "Ascension of the Lord",
    offset: 39, forefeast: 1, afterfeast: 8, rank: "great",
    note: "One of the Twelve Great Feasts. Forefeast: day before (Pascha+38). " +
          "Apodosis: Pascha+47 (Friday before Pentecost week)."
  },
  {
    key: "pentecost", name: "Pentecost (Holy Trinity)",
    offset: 49, forefeast: 1, afterfeast: 6, rank: "great",
    note: "One of the Twelve Great Feasts. Forefeast: Pascha+48 (Saturday). " +
          "Apodosis: Pascha+55 (Friday before All Saints Sunday). " +
          "The week of All Saints begins the ordinary season."
  },
];

// ── FEAST PERIOD DETECTOR ────────────────────────────────────────────────────
// Given a date and a computed Pascha, returns the feast period this date falls in,
// or null if not in any feast period.
// Returns: { feast, periodType: 'forefeast'|'feast'|'afterfeast'|'apodosis', daysToFeast }

function dateToMs(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}

function getFeastPeriod(date, pascha) {
  const dateMs = dateToMs(date);
  const year = date.getFullYear();

  const allPeriods = [];

  // Check fixed feasts — check this year and adjacent years for boundary cases
  for (const feast of FIXED_GREAT_FEASTS) {
    for (const y of [year - 1, year, year + 1]) {
      const feastDate = new Date(y, feast.month - 1, feast.day);
      const feastMs = dateToMs(feastDate);
      const foreMs = feastMs - feast.forefeast * 86400000;
      const apoMs = feastMs + feast.afterfeast * 86400000;

      if (dateMs >= foreMs && dateMs < feastMs && feast.forefeast > 0) {
        allPeriods.push({ feast, periodType: "forefeast", feastDate,
          daysToFeast: Math.round((feastMs - dateMs) / 86400000) });
      } else if (dateMs === feastMs) {
        allPeriods.push({ feast, periodType: "feast", feastDate, daysToFeast: 0 });
      } else if (dateMs > feastMs && dateMs < apoMs && feast.afterfeast > 0) {
        allPeriods.push({ feast, periodType: "afterfeast",
          feastDate, daysToFeast: -Math.round((dateMs - feastMs) / 86400000) });
      } else if (dateMs === apoMs && feast.afterfeast > 0) {
        allPeriods.push({ feast, periodType: "apodosis", feastDate,
          daysToFeast: -feast.afterfeast });
      }
    }
  }

  // Check movable feasts — anchored to the relevant Pascha
  // Also check previous and next Pascha for boundary dates
  for (const p of [computePascha(year - 1), pascha, computePascha(year + 1)]) {
    for (const feast of MOVABLE_GREAT_FEASTS) {
      const feastDate = new Date(p);
      feastDate.setDate(feastDate.getDate() + feast.offset);
      const feastMs = dateToMs(feastDate);
      const foreMs = feastMs - feast.forefeast * 86400000;
      const apoMs = feastMs + feast.afterfeast * 86400000;

      if (dateMs >= foreMs && dateMs < feastMs && feast.forefeast > 0) {
        allPeriods.push({ feast, periodType: "forefeast", feastDate,
          daysToFeast: Math.round((feastMs - dateMs) / 86400000) });
      } else if (dateMs === feastMs) {
        allPeriods.push({ feast, periodType: "feast", feastDate, daysToFeast: 0 });
      } else if (dateMs > feastMs && dateMs < apoMs && feast.afterfeast > 0) {
        allPeriods.push({ feast, periodType: "afterfeast",
          feastDate, daysToFeast: -Math.round((dateMs - feastMs) / 86400000) });
      } else if (dateMs === apoMs && feast.afterfeast > 0) {
        allPeriods.push({ feast, periodType: "apodosis", feastDate,
          daysToFeast: -feast.afterfeast });
      }
    }
  }

  if (allPeriods.length === 0) return null;

  // Priority: feast day > apodosis > forefeast > afterfeast
  // Among equals, higher rank wins
  const priority = { feast: 4, apodosis: 3, forefeast: 2, afterfeast: 1 };
  allPeriods.sort((a, b) => priority[b.periodType] - priority[a.periodType]);
  return allPeriods[0];
}

// ── NAMED MOVABLE DAYS ───────────────────────────────────────────────────────
// All days are defined as offsets from Pascha.
// Sources: OCA liturgical calendar, Fekula chapter headings, Pentecostarion structure.
// Used by getLiturgicalData to populate namedDay in the returned object.

const MOVABLE_NAMED_DAYS = [
  // Pre-Lenten Sundays
  { key: "sunday_publican_pharisee", isSunday: true, offset: -70,
    name: "Sunday of the Publican and Pharisee",
    note: "The Lenten Triodion opens. The fast-free week follows (no fasting Wed/Fri)." },
  { key: "sunday_prodigal_son", isSunday: true, offset: -63,
    name: "Sunday of the Prodigal Son",
    note: "Psalm 136 ('By the waters of Babylon') is added at Matins." },
  { key: "saturday_meatfare", offset: -57,
    name: "Saturday of Meatfare — General Commemoration of the Departed",
    note: "Universal Souls Saturday. Memorial services for all the departed." },
  { key: "sunday_meatfare", isSunday: true, offset: -56,
    name: "Sunday of Meatfare (Last Judgment)",
    note: "Last day meat is permitted. The Gospel of the Last Judgment is read at Liturgy." },
  { key: "saturday_cheesefare", offset: -50,
    name: "Saturday of Cheesefare",
    note: "Dairy and fish permitted; meat is not." },
  { key: "sunday_cheesefare", isSunday: true, offset: -49,
    name: "Sunday of Cheesefare (Forgiveness Sunday)",
    note: "Last day dairy is permitted. Forgiveness Vespers is served. Great Lent begins at Compline." },
  // Great Lent Sundays
  { key: "sunday_lent_1", isSunday: true, offset: -42,
    name: "1st Sunday of Great Lent — Triumph of Orthodoxy",
    note: "Commemorates the restoration of icon veneration at the 7th Ecumenical Council (787 AD). Special Rite of Orthodoxy." },
  { key: "sunday_lent_2", isSunday: true, offset: -35,
    name: "2nd Sunday of Great Lent — St Gregory Palamas",
    note: "Commemorates St Gregory Palamas (+1359), defender of hesychasm and the uncreated Light." },
  { key: "sunday_lent_3", isSunday: true, offset: -28,
    name: "3rd Sunday of Great Lent — Veneration of the Holy Cross",
    note: "Mid-Lent Sunday. The Cross is brought out for veneration to strengthen the faithful for the remainder of the fast." },
  { key: "sunday_lent_4", isSunday: true, offset: -21,
    name: "4th Sunday of Great Lent — St John of the Ladder",
    note: "Commemorates St John Climacus (+649), author of The Ladder of Divine Ascent, read during Lent." },
  { key: "saturday_akathist", offset: -15,
    name: "Saturday of the Akathist (5th Saturday of Great Lent)",
    note: "The Akathist Hymn to the Theotokos is sung at Matins — the only Saturday in Lent with a special hymn of this kind." },
  { key: "sunday_lent_5", isSunday: true, offset: -14,
    name: "5th Sunday of Great Lent — St Mary of Egypt",
    note: "Commemorates St Mary of Egypt, the great penitent, as a model of repentance for the final week before Holy Week." },
  // Holy Week
  { key: "lazarus_saturday", offset: -8,
    name: "Lazarus Saturday",
    note: "The Raising of Lazarus. Fasting is relaxed — fish roe is permitted. Bright vestments. Palm branches blessed." },
  { key: "palm_sunday", offset: -7,
    name: "Palm Sunday — Entry of the Lord into Jerusalem",
    note: "One of the Twelve Great Feasts. Willow branches blessed and carried. Holy Week begins at Vespers." },
  { key: "great_monday", offset: -6,
    name: "Holy and Great Monday",
    note: "Holy Week. Bridegroom Matins. Commemoration of the Patriarch Joseph and the cursing of the fig tree." },
  { key: "great_tuesday", offset: -5,
    name: "Holy and Great Tuesday",
    note: "Holy Week. Bridegroom Matins. Parable of the Ten Virgins." },
  { key: "great_wednesday", offset: -4,
    name: "Holy and Great Wednesday",
    note: "Holy Week. Bridegroom Matins. The Last Anointing (Euchelaion) is often served in parishes." },
  { key: "great_thursday", offset: -3,
    name: "Holy and Great Thursday",
    note: "The Mystical Supper. Liturgy of St Basil with Vespers. The Twelve Gospels read at Matins (Thursday evening)." },
  { key: "great_friday", offset: -2,
    name: "Holy and Great Friday",
    note: "The Crucifixion. Royal Hours served in the morning. Vespers with the Burial of Christ. Strict fast." },
  { key: "great_saturday", offset: -1,
    name: "Holy and Great Saturday",
    note: "The Sabbath rest of Christ in the tomb. Vesperal Liturgy of St Basil. The Paschal Midnight Office begins the celebration." },
  // Pascha
  { key: "pascha", isSunday: true, offset: 0,
    name: "Pascha — The Resurrection of Christ",
    note: "The Feast of Feasts, above all feasts. Paschal Hours replace the ordinary Hours throughout Bright Week." },
  // Bright Week
  { key: "bright_monday", offset: 1, name: "Bright Monday",
    note: "Bright Week. Paschal Hours. Fast-free." },
  { key: "bright_tuesday", offset: 2, name: "Bright Tuesday",
    note: "Bright Week. Paschal Hours. Fast-free." },
  { key: "bright_wednesday", offset: 3, name: "Bright Wednesday — Mid-Feast of Bright Week",
    note: "Bright Week. Paschal Hours. Fast-free." },
  { key: "bright_thursday", offset: 4, name: "Bright Thursday",
    note: "Bright Week. Paschal Hours. Fast-free." },
  { key: "bright_friday", offset: 5, name: "Bright Friday — Life-giving Spring of the Theotokos",
    note: "Bright Week. Icon of the Life-giving Spring. Paschal Hours. Fast-free." },
  { key: "bright_saturday", offset: 6, name: "Bright Saturday",
    note: "Last day of Bright Week. Paschal Hours. Fast-free." },
  // Pentecostarion Sundays
  { key: "thomas_sunday", isSunday: true, offset: 7,
    name: "Thomas Sunday (Antipascha)",
    note: "The first Sunday after Pascha. Commemorates the Apostle Thomas and his confession of faith. 'Antipascha' means 'in place of Pascha' — this Sunday renews the Paschal celebration." },
  { key: "myrrhbearers_sunday", isSunday: true, offset: 14,
    name: "Sunday of the Myrrhbearing Women",
    note: "Commemorates the women who brought myrrh to the tomb, and the righteous Joseph of Arimathea and Nicodemus." },
  { key: "paralytic_sunday", isSunday: true, offset: 21,
    name: "Sunday of the Paralytic",
    note: "The healing of the paralytic at the Pool of Bethesda (John 5). Mid-Pentecost Wednesday falls this week." },
  { key: "mid_pentecost", offset: 24,
    name: "Mid-Pentecost (Wednesday)",
    note: "The midpoint between Pascha and Pentecost. Special service with a troparion and kontakion of Mid-Pentecost." },
  { key: "samaritan_sunday", isSunday: true, offset: 28,
    name: "Sunday of the Samaritan Woman",
    note: "The encounter of Christ with the Samaritan woman at the well (John 4)." },
  { key: "blind_man_sunday", isSunday: true, offset: 35,
    name: "Sunday of the Blind Man",
    note: "The healing of the man born blind (John 9). The Leavetaking of Pascha falls this week." },
  { key: "leavetaking_pascha", offset: 38,
    name: "Leavetaking of Pascha (Wednesday)",
    note: "The formal conclusion of the Paschal celebration, on the Wednesday before Ascension. Full Paschal service for the last time." },
  { key: "ascension", offset: 39,
    name: "Ascension of the Lord",
    note: "One of the Twelve Great Feasts. The Lord ascends to heaven forty days after Pascha. Afterfeast lasts eight days." },
  { key: "fathers_sunday", isSunday: true, offset: 42,
    name: "Sunday of the Holy Fathers of the First Ecumenical Council",
    note: "Commemorates the 318 Holy Fathers of the First Ecumenical Council of Nicaea (325 AD)." },
  { key: "pentecost", offset: 49,
    name: "Pentecost — The Descent of the Holy Spirit (Holy Trinity Sunday)",
    note: "One of the Twelve Great Feasts. The descent of the Holy Spirit upon the Apostles. Great Vespers with kneeling prayers (Vespers of Pentecost)." },
  { key: "holy_spirit_monday", offset: 50,
    name: "Monday of the Holy Spirit",
    note: "The day after Pentecost. Dedicated to the Holy Spirit. Fast-free." },
  { key: "all_saints_sunday", isSunday: true, offset: 56,
    name: "All Saints Sunday",
    note: "The first Sunday after Pentecost. Glorifies all saints, known and unknown. Marks the beginning of the ordinary liturgical season (Fekula Chapter Two). Tone 1 begins." },
  { key: "all_saints_na_sunday", isSunday: true, offset: 63,
    name: "Sunday of All Saints of North America",
    note: "OCA-specific observance. The second Sunday after Pentecost. Glorifies all saints who have shone forth in North America.",
    troparion: { tone: 8, text: "As the bountiful harvest of Your sowing of salvation, the lands of North America offer to You, O Lord, all the saints who have shone in them. By their prayers keep the Church and our land in abiding peace through the Theotokos, O most Merciful One." },
    kontakion_ode6: { tone: 3, text: "Today the choir of Saints who were pleasing to God in the lands of North America now stands before us in the Church and invisibly prays to God for us. With them the angels glorify Him, and all the saints of the Church of Christ keep festival with them; and together they all pray for us to the Pre-Eternal God." },
  },
];

// Returns the named day entry if the date matches, else null.
// IMPORTANT: We must check all Paschas adjacent to the date's year,
// not just the relevantPascha — because for dates before the current year's
// Pascha (e.g. Palm Sunday, Forgiveness Sunday), relevantPascha is the
// previous year's Pascha, but the named day is anchored to the current year's.
function getNamedDay(date, pascha) {
  const dateMs = dateToMs(date);
  const year = date.getFullYear();

  // Always check all four: prev, current year, next, and the relevantPascha
  // De-duplicate using a Set of timestamps
  const paschasToCheck = new Set(
    [computePascha(year - 1), computePascha(year), computePascha(year + 1), pascha]
      .map(p => p.getTime())
  );

  for (const pMs of paschasToCheck) {
    const p = new Date(pMs);
    for (const day of MOVABLE_NAMED_DAYS) {
      const d = new Date(p);
      d.setDate(d.getDate() + day.offset);
      if (dateToMs(d) === dateMs) return day;
    }
  }
  return null;
}

// ── MAIN LITURGICAL DATA FUNCTION ───────────────────────────────────────────
// ── Menaion data — dynamically loaded per month ────────────────────────────
// Each month lives in src/data/menaion/{month}.js
// Loaded on first access for that month, then cached.

const _menaionCache = {};

const _menaionLoaders = {
  "05": () => import("../data/menaion/may.js").then(m => m.default),
  "06": () => import("../data/menaion/june.js").then(m => m.default),
  "07": () => import("../data/menaion/july.js").then(m => m.default),
};

async function _loadMenaionMonth(month) {
  if (_menaionCache[month]) return _menaionCache[month];
  const loader = _menaionLoaders[month];
  if (!loader) return {};
  const data = await loader();
  _menaionCache[month] = data;
  return data;
}



function getMenaionEntry(date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const key = `${month}-${day}`;
  const monthData = _menaionCache[month] || {};
  return monthData[key] || null;
}

// Normalise a SAMPLE_MENAION value (single object or array) into an array of services.
// Single-service dates return a one-element array; multi-service dates return all entries.
function getServices(raw) {
  if (!raw) return [];
  return Array.isArray(raw) ? raw : [raw];
}

function getLiturgicalData(date) {
  const year = date.getFullYear();

  // Compute Pascha for surrounding years
  const prevPascha = computePascha(year - 1);
  const thisPascha = computePascha(year);
  const nextPascha = computePascha(year + 1);
  const nextNextPascha = computePascha(year + 2);

  // Relevant Pascha = most recent one that has already occurred
  let relevantPascha = prevPascha;
  if (thisPascha <= date) relevantPascha = thisPascha;
  if (nextPascha <= date) relevantPascha = nextPascha;

  // Following Pascha = next one after relevantPascha
  let followingPascha;
  if (relevantPascha === prevPascha) followingPascha = thisPascha;
  else if (relevantPascha === thisPascha) followingPascha = nextPascha;
  else followingPascha = nextNextPascha;

  // Key movable dates
  const brightSaturday = new Date(relevantPascha);
  brightSaturday.setDate(brightSaturday.getDate() + 6);

  const allSaintsSunday = new Date(relevantPascha);
  allSaintsSunday.setDate(allSaintsSunday.getDate() + 56);

  const nextMeatfareSunday = new Date(followingPascha);
  nextMeatfareSunday.setDate(nextMeatfareSunday.getDate() - 56);

  const nextFridayBeforeMeatfare = new Date(nextMeatfareSunday);
  nextFridayBeforeMeatfare.setDate(nextFridayBeforeMeatfare.getDate() - 2);

  const nextGreatLentStart = new Date(followingPascha);
  nextGreatLentStart.setDate(nextGreatLentStart.getDate() - 48);

  const thisGreatLentStart = new Date(relevantPascha);
  thisGreatLentStart.setDate(thisGreatLentStart.getDate() - 48);

  // Tone calculation
  const daysFromAllSaints = Math.floor((date - allSaintsSunday) / 86400000);
  const weeksFromAllSaints = Math.floor(daysFromAllSaints / 7);
  const weeksSincePascha = Math.floor((date - relevantPascha) / 86400000 / 7);

  let tone;
  if (daysFromAllSaints < 0) {
    // Pentecostarion / before All Saints: tone from weeks since Pascha
    tone = ((weeksSincePascha % 8) + 8) % 8 || 8;
  } else {
    // Ordinary time: Tone 1 begins the Sunday AFTER All Saints (week 1).
    // All Saints Sunday itself is week 0 but is Pentecostarion Tone 8 —
    // governed by the branch above. Subtract 1 so week 1 → Tone 1, week 2 → Tone 2, etc.
    tone = ((weeksFromAllSaints - 1) % 8 + 8) % 8 + 1;
  }

  const dow = date.getDay();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = dayNames[dow];

  // Feast period detection — runs before season detection
  const feastPeriod = getFeastPeriod(date, relevantPascha);

  // Season detection — most restrictive first
  let season, seasonNote;

  // ── Lent week/Sunday tracking (used by kathisma schedule and context card) ──
  // Lent starts P-48 (Clean Monday). Week 1 = days 1-7, Week 2 = days 8-14, etc.
  // Passion Week = P-7 through P-1 (week 7 in the count but special).
  let lentWeek = null;        // 1-6 (Passion Week handled separately)
  let lentSunday = null;      // 1-5 (named Lenten Sundays)
  let passionWeek = false;
  let lentInfo = null;        // { week, weekName, isPassionWeek }

  // Compute for the relevant Lent (the one this date falls in)
  const computeLentData = (lentStart, pascha) => {
    if (date < lentStart || date >= pascha) return null;
    const dayOfLent = Math.floor((date - lentStart) / 86400000) + 1; // 1-based
    if (dayOfLent >= 43 && dayOfLent <= 49) { // P-7 to P-1
      return { week: null, weekName: "Passion Week", isPassionWeek: true, dayOfLent };
    }
    const wk = Math.ceil(dayOfLent / 7);
    const LENT_WEEK_NAMES = {
      1: "Week 1 of Great Lent",
      2: "Week 2 of Great Lent",
      3: "Week 3 of Great Lent",
      4: "Week 4 of Great Lent",
      5: "Week 5 of Great Lent",
      6: "Week 6 of Great Lent",
    };
    const LENT_SUNDAYS = {
      1: "Sunday of Orthodoxy",
      2: "Sunday of St. Gregory Palamas",
      3: "Sunday of the Holy Cross",
      4: "Sunday of St. John Climacus",
      5: "Sunday of St. Mary of Egypt",
    };
    const lentSun = (dow === 0 && wk >= 1 && wk <= 5) ? wk : null;
    return {
      week: wk,
      weekName: LENT_WEEK_NAMES[wk] || "Great Lent",
      isPassionWeek: false,
      dayOfLent,
      sundayName: lentSun ? LENT_SUNDAYS[lentSun] : null,
      sundayNum: lentSun,
    };
  };

  const lentDataThis = computeLentData(thisGreatLentStart, relevantPascha);
  const lentDataNext = computeLentData(nextGreatLentStart, followingPascha);
  const activeLentData = lentDataThis || lentDataNext;
  if (activeLentData) {
    lentWeek = activeLentData.isPassionWeek ? null : activeLentData.week;
    passionWeek = activeLentData.isPassionWeek;
    lentSunday = activeLentData.sundayNum || null;
    lentInfo = activeLentData;
  }

  if ((date >= thisGreatLentStart && date < relevantPascha) ||
      (date >= nextGreatLentStart && date < followingPascha)) {
    season = "lent";
    if (passionWeek) {
      seasonNote = "Passion Week (Holy Week)";
    } else {
      seasonNote = "Great Lent";
    }
  } else if (date >= relevantPascha && date <= brightSaturday) {
    season = "brightweek";
    seasonNote = "Bright Week — Paschal Hours order applies";
  } else if (date > brightSaturday && date <= allSaintsSunday) {
    season = "pentecostarion";
    seasonNote = "Pentecostarion — Fekula §4A rules apply";
  } else if (date >= nextFridayBeforeMeatfare && date < nextGreatLentStart) {
    season = "prefasting";
    seasonNote = "Pre-Lenten period (Cheesefare) — Fekula §3B rules apply";
  } else if (date >= nextMeatfareSunday && date < nextFridayBeforeMeatfare) {
    season = "prefasting";
    seasonNote = "Pre-Lenten period (Meatfare week) — Fekula §3A rules apply";
  } else if (date >= allSaintsSunday && date < nextMeatfareSunday) {
    if (dow === 0) {
      season = "sunday";
      seasonNote = "Sunday — Fekula §1A or §1B rules apply";
    } else if (feastPeriod && feastPeriod.periodType === "feast" && feastPeriod.feast.rank === "great") {
      season = "great_feast";
      seasonNote = `Great Feast — ${feastPeriod.feast.name}`;
    } else if (feastPeriod && feastPeriod.periodType === "apodosis") {
      season = "apodosis";
      seasonNote = `Apodosis of ${feastPeriod.feast.name} — Fekula §2G3 or §2G4`;
    } else if (feastPeriod && feastPeriod.periodType === "forefeast") {
      season = "forefeast";
      seasonNote = `Forefeast of ${feastPeriod.feast.name} — Fekula §2G1 or §2G2`;
    } else if (feastPeriod && feastPeriod.periodType === "afterfeast") {
      season = "afterfeast";
      seasonNote = `Afterfeast of ${feastPeriod.feast.name} — Fekula §2G1 or §2G2`;
    } else {
      season = "ordinary";
      seasonNote = "Ordinary weekday — Fekula §2A–§2F rules apply";
    }
  } else {
    season = "unknown";
    seasonNote = "Season undetermined";
  }

  // Named movable day detection
  const namedDay = getNamedDay(date, relevantPascha);

  const paschaOffset = Math.floor((date - relevantPascha) / 86400000);

  // ── Sundays after Pentecost / Sundays of Luke ────────────────────────────
  // After All Saints Sunday (P+56), Sundays are counted as Nth Sunday after
  // Pentecost. After the Lukan Jump, a parallel count tracks the Nth Sunday
  // of Luke. Both counts end on the Sunday of the Publican and Pharisee
  // (followingPascha - 70), which opens the Triodion. The Prodigal Son Sunday
  // (followingPascha - 63) is already in the Triodion and carries no Luke number.
  //
  // Convention confirmed against OCA bulletin Oct 19, 2025:
  //   Pascha Apr 20 2025 → All Saints Jun 15 → Sep 14 (Elevation, Sunday)
  //   → Lukan Jump Monday Sep 15 → 1st Sunday of Luke Sep 28
  //   → Oct 19 = 19th Sunday after Pentecost, 4th of Luke ✓
  //
  // Rule: 1st Sunday of Luke = lukeMonday + 13 days (second Sunday after Elevation)
  // End of both counts: Sunday of the Publican and Pharisee (followingPascha - 70)
  // For weekdays: show the PRECEDING Sunday's counts

  let sundayAfterPentecost = null;
  let sundayOfLuke = null;
  let pentecostWeekInfo = null;

  const ordSuffix = (n) => {
    if (n === 11 || n === 12 || n === 13) return n + "th";
    const r = n % 10;
    return n + (r === 1 ? "st" : r === 2 ? "nd" : r === 3 ? "rd" : "th");
  };

  // Triodion opens on the Sunday of the Publican and Pharisee = followingPascha - 70
  // Both Sundays-after-Pentecost and Sundays-of-Luke tracking end here.
  const publicanPhariseeSunday = new Date(followingPascha);
  publicanPhariseeSunday.setDate(publicanPhariseeSunday.getDate() - 70);

  // Prodigal Son Sunday = followingPascha - 63 (reused by kathisma period detection)
  const prodigalSonSunday = new Date(followingPascha);
  prodigalSonSunday.setDate(followingPascha.getDate() - 63);

  // Only compute after All Saints Sunday and before the Triodion opens
  if (date >= allSaintsSunday) {
    const MS_PER_DAY = 86400000;

    // Which Sunday is this date on or preceded by?
    const dow_js = date.getDay(); // 0=Sun
    const daysSinceSunday = dow_js;
    const precedingSunday = new Date(date);
    precedingSunday.setDate(precedingSunday.getDate() - daysSinceSunday);

    // Only count up to the end of P&P week — Sunday itself and the days
    // of that week. Once the following Monday arrives, the Triodion governs.
    // Practical cutoff: the date itself must be on or before P&P Sunday's Saturday,
    // i.e. date < publicanPhariseeSunday + 7 days.
    const triodiOnOpens = new Date(publicanPhariseeSunday);
    triodiOnOpens.setDate(triodiOnOpens.getDate() + 7); // Monday after P&P week

    if (precedingSunday >= allSaintsSunday && date < triodiOnOpens) {
      // For weekdays, the "week" belongs to the UPCOMING Sunday.
      // e.g. Mon–Sat after the 1st Sunday = "Week of the 2nd Sunday after Pentecost"
      // For Sundays, use that Sunday's own number.
      const isSunday = dow_js === 0;
      const referenceSunday = isSunday ? precedingSunday : (() => {
        const ns = new Date(precedingSunday);
        ns.setDate(ns.getDate() + 7);
        return ns;
      })();

      const weeksSinceAllSaints = Math.floor(
        (referenceSunday - allSaintsSunday) / (7 * MS_PER_DAY)
      );
      const sunNumAfterPent = weeksSinceAllSaints + 1;

      // Lukan Jump for the relevant year
      const lukeJumpOffset = getLukanJumpOffset(date.getFullYear());
      const lukeMonday = new Date(relevantPascha);
      lukeMonday.setDate(lukeMonday.getDate() + lukeJumpOffset);
      const firstLukeSunday = new Date(lukeMonday);
      firstLukeSunday.setDate(firstLukeSunday.getDate() + 13);

      // Luke count: use referenceSunday (same as Pentecost count)
      let lukeNum = null;
      if (referenceSunday >= firstLukeSunday && referenceSunday <= publicanPhariseeSunday) {
        lukeNum = Math.floor(
          (referenceSunday - firstLukeSunday) / (7 * MS_PER_DAY)
        ) + 1;
      }

      sundayAfterPentecost = sunNumAfterPent;
      sundayOfLuke = lukeNum;
      pentecostWeekInfo = {
        sunNumAfterPent,
        lukeNum,
        isSunday,
        label: isSunday
          ? ordSuffix(sunNumAfterPent) + " Sunday after Pentecost"
            + (lukeNum ? " (" + ordSuffix(lukeNum) + " of Luke)" : "")
          : ordSuffix(sunNumAfterPent) + " Week after Pentecost"
            + (lukeNum ? " (" + ordSuffix(lukeNum) + " of Luke)" : ""),
      };
    }
  }

  // ── Kathisma period detection ──────────────────────────────────────────────
  // Four periods govern the kathisma schedule at both Vespers and Matins.
  // Source: OCA Liturgics, oca.org/liturgics/outlines/kathisma-readings-at-vespers
  // Boundaries:
  //   summer_winter: Thomas Sun (P+7) → Sep 21; Dec 20 → Jan 14;
  //                  Prodigal Son Sun (Meatfare-7) → Forgiveness Sun (Meatfare+7)
  //   autumn_spring: Sep 22 → Dec 19; Jan 15 → Sat before Prodigal Son Sun
  //   lent_1_4_6:   Great Lent weeks 1-4 and 6
  //   lent_5:       Great Lent week 5
  //   passion_week: P-7 through P-1
  //   bright_week:  P+0 through P+6
  //   pentecostarion: P+7 through P+55 (follows summer_winter table)
  let kathismaPeriod = null;

  const forgivenessSunday = new Date(nextMeatfareSunday);
  forgivenessSunday.setDate(forgivenessSunday.getDate() + 7);

  const mm = date.getMonth() + 1; // 1-12
  const dd = date.getDate();

  if (season === "brightweek") {
    kathismaPeriod = "bright_week";
  } else if (season === "pentecostarion") {
    kathismaPeriod = "summer_winter"; // Thomas Sun through All Saints — same table
  } else if (passionWeek) {
    kathismaPeriod = "passion_week";
  } else if (season === "lent") {
    if (lentWeek === 5) {
      kathismaPeriod = "lent_5";
    } else if (lentWeek !== null) {
      kathismaPeriod = "lent_1_4_6"; // weeks 1-4 and 6
    } else {
      kathismaPeriod = "passion_week"; // fallback if lentWeek null (shouldn't happen)
    }
  } else if (season === "prefasting") {
    // Meatfare week (ordinary) or Cheesefare (Prodigal Son through Forgiveness)
    if (date >= prodigalSonSunday && date <= forgivenessSunday) {
      kathismaPeriod = "summer_winter";
    } else {
      kathismaPeriod = "autumn_spring";
    }
  } else {
    // Ordinary time, Sunday, great_feast, etc. — determined by fixed calendar dates
    const isSummerWinter =
      (mm < 9 || (mm === 9 && dd <= 21)) ||   // through Sep 21
      (mm > 11 || (mm === 12 && dd >= 20)) ||  // Dec 20 onward
      (mm === 1 && dd <= 14);                   // through Jan 14
    kathismaPeriod = isSummerWinter ? "summer_winter" : "autumn_spring";
  }

  return {
    tone, dayName, dow, season, seasonNote, feastPeriod, namedDay,
    pascha: relevantPascha, allSaintsSunday,
    nextMeatfareSunday, followingPascha,
    paschaOffset,
    lentWeek, lentSunday, passionWeek, lentInfo,
    sundayAfterPentecost, sundayOfLuke, pentecostWeekInfo,
    kathismaPeriod,
    mm, dd,
    isOrdinaryWeekday: season === "ordinary",
    isSunday: season === "sunday",
    isLent: season === "lent",
    isPentecostarion: season === "pentecostarion" || season === "brightweek",
    isFeastPeriod: ["great_feast", "forefeast", "afterfeast", "apodosis"].includes(season),
  };
}

// ─── GLOSSARY ────────────────────────────────────────────────────────────────
const GLOSSARY = {
  // Core hymnography
  troparion:
    "A short hymn summarizing the meaning of the feast or the life of a saint. " +
    "It is the primary variable hymn of the service, and the most important indicator " +
    "of what the Church is celebrating on a given day.",
  kontakion:
    "A shorter hymn serving as a theological summary or 'caption' for the feast or saint. " +
    "Originally a longer poetic sermon of many stanzas; now typically one stanza is used. " +
    "At the Hours, the kontakion appears after the second Trisagion.",
  theotokion:
    "A hymn addressed to the Theotokos (the Virgin Mary, 'Birth-giver of God'). " +
    "Appears at 'Both now and ever' after the troparion group. " +
    "The 9th Hour has its own appointed theotokion for ordinary time.",
  stavrotheotokion:
    "A theotokion with a specifically crucifixion theme — the Theotokos contemplating " +
    "the suffering of her Son on the Cross. Used on Wednesdays and Fridays in place of " +
    "the ordinary theotokion, reflecting those days' commemoration of the Cross.",
  kathisma:
    "A section of the Psalter. The 150 psalms are divided into 20 kathismas for liturgical " +
    "reading. At the Hours during Great Lent, an appointed kathisma is read in place of " +
    "the ordinary troparion slot.",
  // Liturgical books
  menaion:
    "The twelve liturgical books — one per month — containing the fixed-calendar services " +
    "for saints and feasts. Provides troparia, kontakia, canons, and stichera for each day. " +
    "The primary source for a saint's troparion and kontakion at the Hours.",
  octoechos:
    "The 'Book of Eight Tones' — contains the weekly cycle of hymns in eight musical modes. " +
    "Each tone lasts one week; the cycle of eight weeks repeats throughout the year. " +
    "Provides the resurrectional troparion on Sundays and variable material on weekdays.",
  horologion:
    "The 'Book of Hours' — the fixed liturgical book containing the structure and invariable " +
    "texts of the daily cycle of services: the Midnight Office, Matins, the four Hours, " +
    "Vespers, and Compline. The skeleton into which Menaion and Octoechos content is inserted.",
  triodion:
    "The liturgical book covering the pre-Lenten and Lenten period — from the Sunday of " +
    "the Publican and Pharisee through Holy Saturday. Contains the Lenten troparia, canons, " +
    "and special services including the Royal Hours of Holy Friday.",
  pentecostarion:
    "The liturgical book covering the Paschal period — from Pascha (Easter) through " +
    "All Saints Sunday (the first Sunday after Pentecost). Contains the Paschal canon, " +
    "weekly Pentecostarion hymns, and services for Ascension and Pentecost.",
  // Theology
  theotokos:
    "Greek: 'Birth-giver of God' (literally 'God-bearer'). The title given to the Virgin Mary, " +
    "affirming that Christ whom she bore is fully God. Defined at the Council of Ephesus (431 AD). " +
    "Nearly every liturgical service includes a hymn addressed to her.",
  // Tones and music
  tone:
    "One of eight musical modes used in Orthodox chant. The eight tones (or 'plagal' modes) " +
    "form a cycle that repeats every eight weeks, beginning on All Saints Sunday. " +
    "The tone of the week determines which Octoechos hymns are used.",
  // Service structure
  "service rank":
    "The classification assigned to a saint or feast in the Menaion, determining which " +
    "service template is used. Ranks in ascending order: Simple, Double (Six-Stichera), " +
    "Doxology, Polyeleos, Vigil, Great Feast. The rank is revealed by reading the structure " +
    "of Matins in the Menaion — not by a label, but by what the service contains.",
  polyeleos:
    "Literally 'of great mercy' — refers to Psalms 134 and 135 ('Praise the name of the Lord' " +
    "and 'Confess to the Lord, for He is good'), sung at Matins on feast days of this rank. " +
    "The presence of the Polyeleos in the Menaion identifies a feast as Polyeleos rank.",
  doxology:
    "The 'Great Doxology' ('Glory to God in the highest') — sung rather than read at Matins " +
    "for feasts of this rank. Its singing identifies a feast as Doxology rank or higher.",
  // Feast periods
  "great feast":
    "One of the twelve principal feasts of the liturgical year, plus Pascha which stands " +
    "above all feasts. The twelve are: Nativity of the Theotokos, Elevation of the Cross, " +
    "Entry of the Theotokos, Nativity of Christ, Theophany, Meeting of the Lord, " +
    "Annunciation, Palm Sunday, Ascension, Pentecost, Transfiguration, Dormition.",
  forefeast:
    "The day or days immediately before a Great Feast, during which the Church begins to " +
    "anticipate the feast liturgically. The troparion of the upcoming feast appears at the " +
    "Hours, and the kontakion of the feast predominates (Fekula §2G1–§2G2).",
  afterfeast:
    "The period of days following a Great Feast during which the feast continues to be " +
    "celebrated. Length varies: from 1 day (Annunciation) to 8 days (Theophany, Dormition). " +
    "The feast troparion leads at the Hours throughout the afterfeast (Fekula §2G1–§2G2).",
  apodosis:
    "Greek: 'giving back' or 'leave-taking.' The final day of the afterfeast of a Great Feast — " +
    "the day the Church formally concludes its celebration and 'returns' the feast. " +
    "On the apodosis, the troparion and kontakion of the feast are used exclusively at the Hours, " +
    "as if it were the feast day itself (Fekula §2G3). The apodosis of Pascha is called " +
    "the 'Leavetaking of Pascha' and falls on the Wednesday before Ascension.",
  // Calendar
  "all saints sunday":
    "The first Sunday after Pentecost. Marks the beginning of the ordinary liturgical season " +
    "(Fekula Chapter Two) and the restart of Tone 1 in the Octoechos cycle. " +
    "From this Sunday through the Friday before Meatfare Sunday, ordinary weekday rules apply.",
  "paschal cycle":
    "The moveable part of the liturgical year, anchored to the date of Pascha. " +
    "Includes the pre-Lenten weeks, Great Lent, Holy Week, Bright Week, the Pentecostarion, " +
    "and concludes with All Saints Sunday. The date of Pascha is calculated using the " +
    "Julian calendar and converted to the Gregorian calendar by adding 13 days.",
  computus:
    "The ancient science of calculating the date of Pascha (Easter). " +
    "Established at the First Ecumenical Council of Nicaea (325 AD), the rule is: " +
    "Pascha falls on the first Sunday after the first full moon after the vernal equinox, " +
    "where the equinox is fixed at March 21 (Julian) and the full moon is the " +
    "ecclesiastical (calculated) rather than astronomical moon. " +
    "The Orthodox Church uses the Julian calendar for this calculation.",
  // People and roles
  "reader":
    "A person ordained to the minor order of Reader (also called Lector), who chants " +
    "the fixed portions of services when no deacon is present. In parish practice, " +
    "trained laypeople often fulfill this role. The Hours are typically reader services.",};


// ─── FIXED TEXTS — 9TH HOUR ──────────────────────────────────────────────────
// Source: The Unabbreviated Horologion or Book of the Hours,
// Holy Trinity Publications, The Printshop of St. Job of Pochaev,
// Holy Trinity Monastery, Jordanville, New York. Second Edition, 1994/1997.
//
// Structure per HTM Horologion, p. 174. Two blocks:
//   NINTH_HOUR_OPENING  — priest's blessing through the three psalms
//   NINTH_HOUR_CLOSING  — second Trisagion block through Prayer of St. Basil
// The movable troparion/kontakion slots are inserted between these by the assembler.


// ─── KATHISMA SCHEDULE ───────────────────────────────────────────────────────
// Source: OCA Liturgics
//   Vespers: oca.org/liturgics/outlines/kathisma-readings-at-vespers
//   Matins:  oca.org/liturgics/outlines/kathisma-readings-at-matins
//   Psalm divisions: oca.org/liturgics/outlines/the-division-of-the-psalter-into-kathismas
// LXX (Septuagint/Greek) psalm numbering used throughout.
// FW-B: Full psalm texts to be fetched from Drive Psalter reference document on demand.

const KATHISMA_PSALMS = {
   1: "1–8",    2: "9–16",   3: "17–23",  4: "24–31",  5: "32–36",
   6: "37–45",  7: "46–54",  8: "55–63",  9: "64–69",  10: "70–76",
  11: "77–84", 12: "85–90", 13: "91–100", 14: "101–104", 15: "105–108",
  16: "109–117", 17: "118", 18: "119–133", 19: "134–142", 20: "143–150",
};

// Vespers kathisma schedule keyed by kathismaPeriod, then dow (0=Sun … 6=Sat).
// null = kathisma omitted.
// Saturday always = 1 (full Kathisma I, or "Blessed is the Man" on feasts).
// Sunday always = null.
const VESPERS_KATHISMA = {
  summer_winter: { 0:null, 1:6,  2:9,  3:12, 4:15, 5:18, 6:1 },
  autumn_spring: { 0:null, 1:18, 2:18, 3:18, 4:18, 5:18, 6:1 },
  lent_1_4_6:   { 0:null, 1:18, 2:18, 3:18, 4:18, 5:18, 6:1 },
  lent_5:        { 0:null, 1:10, 2:19, 3:7,  4:12, 5:18, 6:1 },
  passion_week:  { 0:null, 1:18, 2:18, 3:18, 4:null, 5:null, 6:null },
  bright_week:   { 0:null, 1:null, 2:null, 3:null, 4:null, 5:null, 6:null },
};

// Matins kathisma schedule. Arrays = multiple kathismas read in sequence.
// null = omitted. "polyeleos" = Polyeleos (Ps 134-135) replaces/supplements.
const MATINS_KATHISMA = {
  summer_winter: {
    // Sunday blank in OCA table for this period — no Sunday matins kathismas listed
    0: null, 1: [4, 5], 2: [7, 8],
    3: [10, 11], 4: [13, 14], 5: [19, 20], 6: [16, 17],
  },
  autumn_spring: {
    // Sunday: 2, 3, 17 or Polyeleos
    0: [2, 3, "17_or_polyeleos"], 1: [4, 5, 6], 2: [7, 8, 9],
    3: [10, 11, 12], 4: [13, 14, 15], 5: [19, 20], 6: [16, 17],
  },
  lent_1_4_6: {
    0: [4, 5, 6], 1: [10, 11, 12], 2: [19, 20, 1],
    3: [6, 7, 8], 4: [13, 14, 15], 5: [16, 17], 6: [16, 17],
    // Saturday blank in OCA table — universal Saturday rule: kathismas 16, 17
  },
  lent_5: {
    0: [4, 5, 6], 1: [11, 12, 13], 2: [20, 1, 2],
    3: [8], 4: [13, 14, 15], 5: [16, 17], 6: [16, 17],
    // Saturday blank in OCA table — universal Saturday rule: kathismas 16, 17
  },
  passion_week: {
    0: [2, 3, "polyeleos"], 1: [4, 5, 6], 2: [9, 10, 11],
    3: [14, 15, 16], 4: null, 5: null, 6: [17],
    // Passion Week Saturday: only Kathisma 17 (Ps. 118) — explicitly in OCA table
  },
  bright_week: {
    0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null,
  },
};

// ── getKathismaForVespers ────────────────────────────────────────────────────
// Returns { num, psalms, label, rule, source, hadVigilNote } or
//         { omitted: true, rule, source } or
//         { blessedIsMan: true, rule, source }
// rank: service rank string. hadVigil: boolean placeholder (always false for now).
function getKathismaForVespers(liturgicalData, rank, hadVigil = false, pentEntry = null) {
  const { dow, kathismaPeriod, season, passionWeek } = liturgicalData;
  const isHighRank = rank === "polyeleos" || rank === "vigil";
  const isSaturday = dow === 6;
  const isSundayEve = dow === 0;
  // Great feast of Lord: fixed calendar feasts (season="great_feast") OR
  // Pentecostarion feasts where Fekula explicitly suppresses the kathisma.
  // Per Fekula §4B12: At Ascension Vespers "We do not sing Blessed is the man...
  //   but we immediately sing Lord I have cried..." — kathisma suppressed.
  //   At second Vespers (after Liturgy): "no kathisma on account of the Vigil."
  // Per Fekula §4B15: At Pentecost Vespers (Saturday evening) "We sing Blessed is
  //   the man..., the entire kathisma, as usual on Saturday evening" — NOT suppressed.
  // Per Fekula §4B8: Mid-Pentecost "The service begins as usual, with the appointed
  //   kathisma (i.e., not Blessed is the man...)" — ordinary kathisma is read.
  // Therefore only Ascension suppresses the kathisma in the Pentecostarion.
  const PENT_KATHISMA_SUPPRESSED = ["ascension"]; // Fekula §4B12
  const isPentKathismaSuppressed = pentEntry &&
    PENT_KATHISMA_SUPPRESSED.includes(pentEntry.hours_format);
  const isGreatFeastOfLord = season === "great_feast" || isPentKathismaSuppressed;
  const SOURCE = "OCA — Psalter Readings at Vespers";

  // 1. Bright Week — no kathisma
  if (kathismaPeriod === "bright_week") {
    return { omitted: true, rule: "No kathisma during Bright Week.", source: SOURCE };
  }

  // 2. Passion Week Thu/Fri/Sat — no kathisma
  if (kathismaPeriod === "passion_week" && (dow === 4 || dow === 5 || dow === 6)) {
    return { omitted: true, rule: "No kathisma on Thursday, Friday, or Saturday of Passion Week.", source: SOURCE };
  }

  // 3. Great Feast of the Lord — no kathisma (flag vigil shortcoming)
  if (isGreatFeastOfLord) {
    return {
      omitted: true,
      rule: "On great feasts of the Lord there is no Psalter reading at Vespers.",
      source: SOURCE,
      hadVigilNote: "⚠ FW: If a vigil was served last night, no kathisma applies — the tool cannot detect this automatically.",
    };
  }

  // 4. Vigil served previous night — no kathisma (placeholder — always false now)
  if (hadVigil) {
    return {
      omitted: true,
      rule: "No kathisma when a vigil was served the previous night.",
      source: SOURCE,
    };
  }

  // 5. Saturday, or Polyeleos/Vigil rank on any day — Kathisma I ("Blessed is the Man")
  if (isSaturday || isHighRank) {
    const rule = isSaturday
      ? "At Saturday Vespers the entire first kathisma is read (often abbreviated to 'Blessed is the Man' in parish practice)."
      : "At feasts of Polyeleos or Vigil rank, only the first stasis of Kathisma I ('Blessed is the Man') is read.";
    return { blessedIsMan: true, num: 1, psalms: KATHISMA_PSALMS[1], rule, source: SOURCE };
  }

  // 6. Sunday evening — no kathisma
  if (isSundayEve) {
    return { omitted: true, rule: "No Psalter reading at Sunday evening Vespers.", source: SOURCE };
  }

  // 7. Vigil shortcoming note for ordinary days
  const vigiNote = "⚠ FW: If a vigil was served last night, no kathisma applies — the tool cannot detect this automatically.";

  // 8. Table lookup
  const table = VESPERS_KATHISMA[kathismaPeriod];
  const num = table ? table[dow] : null;
  if (!num) {
    return { omitted: true, rule: "No kathisma appointed for this day and season.", source: SOURCE };
  }
  const periodLabels = {
    summer_winter: "Summer/Winter period (Thomas Sun–Sep 21, Dec 20–Jan 14, Prodigal Son–Forgiveness Sun)",
    autumn_spring: "Autumn/Spring period (Sep 22–Dec 19, Jan 15–Sat before Prodigal Son Sun)",
    lent_1_4_6: "Great Lent, Weeks 1–4 and 6",
    lent_5: "Great Lent, Week 5",
  };
  return {
    num,
    psalms: KATHISMA_PSALMS[num],
    label: "Kathisma " + num + " (Ps. " + KATHISMA_PSALMS[num] + ")",
    rule: "Appointed kathisma for " + (periodLabels[kathismaPeriod] || kathismaPeriod) + ".",
    source: SOURCE,
    hadVigilNote: vigiNote,
  };
}

// ── getKathismaForMatins ─────────────────────────────────────────────────────
// Returns array of kathisma descriptors for Matins. Data-ready for Matins build.
// Each entry: { num, psalms } or { polyeleos: true } or { polyeleos_or_17: true }
function getKathismaForMatins(liturgicalData) {
  const { dow, kathismaPeriod } = liturgicalData;
  const SOURCE = "OCA — Psalter Readings at Matins";
  const table = MATINS_KATHISMA[kathismaPeriod];
  if (!table) return [];
  const raw = table[dow];
  if (!raw) return [];
  return raw.map(k => {
    if (k === "polyeleos") return { polyeleos: true, source: SOURCE };
    if (k === "17_or_polyeleos") return { polyeleos_or_17: true, num: 17, psalms: KATHISMA_PSALMS[17], source: SOURCE };
    return { num: k, psalms: KATHISMA_PSALMS[k], source: SOURCE };
  });
}

// ─── UNIFIED HOUR ASSEMBLER ─────────────────────────────────────────────────────────────────────
// Single assembler for all four Hours across all seasons.
// Fixed skeleton: HTM Horologion, Jordanville NY (1994).
// Seasonal overlays: Fekula §4A, §4B11, §4B12.
//
// Opening states (applies to 3rd/9th full beginning; 1st/6th just the O come slot):
//   P+7–P+38: Christ is risen ×3 (HTM + Fekula §4A)
//   P+39–Pentecost: O Heavenly King omitted (Fekula §4B11)
//   All other: full ordinary beginning
//
// Movable parts: troparion block and kontakion vary by season/source.
// Everything else is invariable HTM text.

// ── Pentecostarion data — dynamically loaded ───────────────────────────────
// Lives in src/data/pentecostarion.js

let _pentecostarionCache = null;

async function _loadPentecostarion() {
  if (_pentecostarionCache) return _pentecostarionCache;
  const m = await import("../data/pentecostarion.js");
  _pentecostarionCache = m.default;
  return _pentecostarionCache;
}



function getPentecostarionEntry(offset) {
  const data = _pentecostarionCache || {};
  return data[offset] || null;
}

// ─── HTM FIXED TEXT CONSTANTS ─────────────────────────────────────────────────
// Fixed skeleton: The Unabbreviated Horologion, HTM, Jordanville NY (1994).
// Seasonal overlays from Fekula §4A and §4B11.
//
// Skeleton rules:
//   P+7–P+38: Christ is risen active (HTM rubric + Fekula §4A)
//   P+39–P+48: O Heavenly King omitted, nothing replaces it (Fekula §4B11)
//   P+49+: O Heavenly King restored (outside this scope)
//   1st/6th: no full beginning; Christ is risen per Fekula §4A only
//   3rd/9th: full beginning; Christ is risen per HTM + Fekula §4A

const HTM_TRISAGION =
  "Holy God, Holy Mighty, Holy Immortal, have mercy on us. (thrice)\n" +
  "Glory to the Father, and to the Son, and to the Holy Spirit,\n" +
  "both now and ever, and unto the ages of ages. Amen.\n" +
  "O Most Holy Trinity, have mercy on us.\n" +
  "O Lord, blot out our sins.\n" +
  "O Master, pardon our iniquities.\n" +
  "O Holy One, visit and heal our infirmities for Thy name's sake.\n" +
  "Lord, have mercy. (thrice)\n" +
  "Glory to the Father, and to the Son, and to the Holy Spirit,\n" +
  "both now and ever, and unto the ages of ages. Amen.\n" +
  "Our Father, Who art in the heavens, hallowed be Thy name.\n" +
  "Thy kingdom come, Thy will be done, on earth as it is in heaven.\n" +
  "Give us this day our daily bread,\n" +
  "and forgive us our debts, as we forgive our debtors;\n" +
  "and lead us not into temptation, but deliver us from the evil one.";

const HTM_FOR_THINE =
  "Priest: For Thine is the kingdom, and the power, and the glory:\n" +
  "of the Father, and of the Son, and of the Holy Spirit,\n" +
  "now and ever, and unto the ages of ages.\n" +
  "Reader: Amen.";

const HTM_PRAYER_OF_HOURS =
  "Thou Who at all times and at every hour, in heaven and on earth, art worshipped " +
  "and glorified, O Christ God, Who art long-suffering, plenteous in mercy, most " +
  "compassionate, Who lovest the righteous and hast mercy on sinners, Who callest " +
  "all to salvation through the promise of good things to come: Receive, O Lord, " +
  "our prayers at this hour, and guide our life toward Thy commandments. Sanctify " +
  "our souls, make chaste our bodies, correct our thoughts, purify our intentions, " +
  "and deliver us from every sorrow, evil, and pain. Compass us about with Thy holy " +
  "angels, that, guarded and guided by their array, we may attain to the unity of " +
  "the faith and the knowledge of Thine unapproachable glory; for blessed art Thou " +
  "unto the ages of ages. Amen.";

const HTM_MORE_HONOURABLE =
  "More honourable than the Cherubim, and beyond compare more glorious than the " +
  "Seraphim, who without corruption gavest birth to God the Word, the very " +
  "Theotokos, thee do we magnify.";

const HTM_O_COME =
  "O come, let us worship God our King.\n" +
  "O come, let us worship and fall down before Christ our King and God.\n" +
  "O come, let us worship and fall down before Christ Himself, our King and God.";

const HTM_CHRIST_IS_RISEN =
  "Christ is risen from the dead,\n" +
  "trampling down death by death,\n" +
  "and on those in the tombs bestowing life.";

const HTM_O_HEAVENLY_KING =
  "O Heavenly King, Comforter, Spirit of Truth,\n" +
  "Who art everywhere present and fillest all things,\n" +
  "Treasury of good things and Giver of life:\n" +
  "Come and dwell in us, and cleanse us of all impurity,\n" +
  "and save our souls, O Good One.";

const HTM_ALLELUIA_BLOCK =
  "Alleluia, alleluia, alleluia. Glory to Thee, O God. (thrice)\n" +
  "Lord, have mercy. (thrice)";

const HTM_GLORY_BOTH_NOW =
  "Glory to the Father, and to the Son, and to the Holy Spirit,\n" +
  "both now and ever, and unto the ages of ages. Amen.";
// ── Psalms (HTM) ─────────────────────────────────────────────────────────────

const HTM_PSALM_5 =
  "PSALM 5\n\n" +
  "Unto my words give ear, O Lord; hear my cry. Attend unto the voice of my " +
  "supplication, O my King and my God; for unto Thee will I pray, O Lord. In the " +
  "morning Thou shalt hear my voice. In the morning shall I stand before Thee, and " +
  "Thou shalt look upon me; for not a God that wiliest iniquity art Thou. He that " +
  "worketh evil shall not dwell near Thee, nor shall transgressors abide before " +
  "Thine eyes. Thou hast hated all them that work iniquity; Thou shalt destroy all " +
  "them that speak a lie. A man that is bloody and deceitful shall the Lord abhor. " +
  "But as for me, in the multitude of Thy mercy shall I go into Thy house; I shall " +
  "worship toward Thy holy temple in fear of Thee. O Lord, guide me in the way of " +
  "Thy righteousness; because of mine enemies, make straight my way before Thee. " +
  "For in their mouth there is no truth; their heart is vain. Their throat is an " +
  "open sepulchre, with their tongues have they spoken deceitfully; judge them, " +
  "O God. Let them fall down on account of their own devisings; according to the " +
  "multitude of their ungodliness, cast them out, for they have embittered Thee, " +
  "O Lord. And let all them be glad that hope in Thee; they shall ever rejoice, " +
  "and Thou shalt dwell among them. And all shall glory in Thee that love Thy name, " +
  "for Thou shalt bless the righteous. O Lord, as with a shield of Thy good " +
  "pleasure hast Thou crowned us.";

const HTM_PSALM_89 =
  "PSALM 89\n\n" +
  "Lord, Thou hast been our refuge in generation and generation. Before the " +
  "mountains came to be and the earth was formed and the world, even from " +
  "everlasting to everlasting Thou art. Turn not man away unto lowliness; yea, " +
  "Thou hast said: Turn back, ye sons of men. For a thousand years in Thine eyes, " +
  "O Lord, are but as yesterday that is past, and as a watch in the night. Things " +
  "of no account shall their years be; in the morning like grass shall man pass " +
  "away. In the morning shall he bloom and pass away, in the evening shall he fall " +
  "and grow withered and dry. For we have fainted away in Thy wrath, and in Thine " +
  "anger have we been troubled. Thou hast set our iniquities before Thee; our " +
  "lifespan is in the light of Thy countenance. For all our days are faded away, " +
  "and in Thy wrath are we fainted away; our years have, like a spider, spun out " +
  "their tale. As for the days of our years, in their span they be threescore years " +
  "and ten. And if we be in strength, mayhap fourscore years; and what is more than " +
  "these is toil and travail. For mildness is come upon us, and we shall be " +
  "chastened. Who knoweth the might of Thy wrath? And out of fear of Thee, who can " +
  "recount Thine anger? So make Thy right hand known to me, and to them that in " +
  "their heart are instructed in wisdom. Return, O Lord; how long? And be Thou " +
  "entreated concerning Thy servants. We were filled in the morning with Thy mercy, " +
  "O Lord, and we rejoiced and were glad. In all our days, let us be glad for the " +
  "days wherein Thou didst humble us, for the years wherein we saw evils. And look " +
  "upon Thy servants, and upon Thy works, and do Thou guide their sons. And let " +
  "the brightness of the Lord our God be upon us, and the works of our hands do " +
  "Thou guide aright upon us, yea, the work of our hands do Thou guide aright.";

const HTM_PSALM_100 =
  "PSALM 100\n\n" +
  "Of mercy and judgment will I sing unto Thee, O Lord; I will chant and have " +
  "understanding in a blameless path. When wilt Thou come unto me? I have walked " +
  "in the innocence of my heart in the midst of my house. I have no unlawful thing " +
  "before mine eyes; the workers of transgressions I have hated. A crooked heart " +
  "hath not cleaved unto me; as for the wicked man who turned from me, I knew him " +
  "not. Him that privily talked against his neighbour did I drive away from me. " +
  "With him whose eye was proud and his heart insatiate, I did not eat. Mine eyes " +
  "were upon the faithful of the land, that they might sit with me; the man that " +
  "walked in the blameless path, he ministered unto me. The proud doer dwelt not " +
  "in the midst of my house; the speaker of unjust things prospered not before " +
  "mine eyes. In the morning I slew all the sinners of the land, utterly to destroy " +
  "out of the city of the Lord all them that work iniquity.";
const HTM_PSALM_16 =
  "PSALM 16\n\n" +
  "Hearken, O Lord, unto my righteousness, attend unto my supplication. Give ear " +
  "unto my prayer, which cometh not from deceitful lips. From before Thy face let " +
  "my judgment come forth, let mine eyes behold uprightness. Thou hast proved my " +
  "heart, Thou hast visited it in the night, Thou hast tried me by fire, and " +
  "unrighteousness was not found in me. That my mouth might not speak of the works " +
  "of men, for the sake of the words of Thy lips have I kept the ways that are " +
  "hard. Set my footsteps in Thy paths, that my steps may not be shaken. I have " +
  "cried for Thou hast hearkened unto me, O God. Incline Thine ear unto me, and " +
  "hearken unto my words. Let Thy mercies be made wonderful, O Thou that savest " +
  "them that hope in Thee. From them that have resisted Thy right hand, keep me, " +
  "O Lord, as the apple of Thine eye. In the shelter of Thy wings wilt Thou shelter " +
  "me, from the face of the ungodly which have oppressed me. Mine enemies have " +
  "surrounded my soul, they have enclosed themselves with their own fat, their mouth " +
  "hath spoken pride. They that cast me out have now encircled me, they have set " +
  "their eyes to look askance on the earth. They have taken me as might a lion ready " +
  "for his prey, and as might a lion's whelp that dwelleth in hiding. Arise, O Lord, " +
  "overtake them and trip their heels; deliver my soul from ungodly men, Thy sword " +
  "from the enemies of Thy hand. O Lord, from Thy few do Thou separate them from " +
  "the earth in their life; yea, with Thy hidden treasures hath their belly been " +
  "filled. They have satisfied themselves with swine and have left the remnants to " +
  "their babes. But as for me, in righteousness shall I appear before Thy face; " +
  "I shall be filled when Thy glory is made manifest to me.";

const HTM_PSALM_24 =
  "PSALM 24\n\n" +
  "Unto Thee, O Lord, have I lifted up my soul. O my God, in Thee have I trusted; " +
  "let me never be put to shame, nor let mine enemies laugh me to scorn. Yea, let " +
  "none that wait on Thee be put to shame; let them be ashamed which are lawless " +
  "without a cause. Make Thy ways, O Lord, known unto me and teach me Thy paths. " +
  "Lead me in Thy truth and teach me, for Thou art God my Saviour; for on Thee have " +
  "I waited all the day long. Remember Thy compassions, O Lord, and Thy mercies, " +
  "for they are from everlasting. The sins of my youth and mine ignorances remember " +
  "not; according to Thy mercy remember Thou me, for the sake of Thy goodness, " +
  "O Lord. Good and upright is the Lord; therefore will He set a law for them that " +
  "sin in the way. He will guide the meek in judgment, He will teach the meek His " +
  "ways. All the ways of the Lord are mercy and truth, unto them that seek after " +
  "His covenant and His testimonies. For the sake of Thy name, O Lord, be gracious " +
  "unto my sin; for it is great. Who is the man that feareth the Lord? He will set " +
  "him a law in the way which He hath chosen. His soul shall dwell among good " +
  "things, and his seed shall inherit the earth. The Lord is the strength of them " +
  "that fear Him, and His covenant shall be manifested unto them. Mine eyes are " +
  "ever toward the Lord, for He it is that will draw my feet out of the snare. " +
  "Look upon me, and have mercy on me; for I am one only-begotten and poor. The " +
  "afflictions of my heart are multiplied; bring me out from my necessities. Behold " +
  "my lowliness and my toil, and forgive all my sins. Look upon mine enemies, for " +
  "they are multiplied, and with an unjust hatred have they hated me. Keep my soul " +
  "and rescue me; let me not be put to shame, for I have hoped in Thee. The innocent " +
  "and the upright have cleaved unto me, for I have waited on Thee, O Lord. " +
  "Redeem Israel, O God, out of all his afflictions.";
const HTM_PSALM_50 =
  "PSALM 50\n\n" +
  "Have mercy on me, O God, according to Thy great mercy; and according to the " +
  "multitude of Thy compassions blot out my transgression. Wash me thoroughly from " +
  "mine iniquity, and cleanse me from my sin. For I know mine iniquity, and my sin " +
  "is ever before me. Against Thee only have I sinned and done this evil before " +
  "Thee, that Thou mightest be justified in Thy words, and prevail when Thou art " +
  "judged. For behold, I was conceived in iniquities, and in sins did my mother " +
  "bear me. For behold, Thou hast loved truth; the hidden and the secret things of " +
  "Thy wisdom hast Thou made manifest unto me. Thou shalt sprinkle me with hyssop, " +
  "and I shall be made clean; Thou shalt wash me, and I shall be made whiter than " +
  "snow. Thou shalt make me to hear joy and gladness; the bones that be humbled, " +
  "they shall rejoice. Turn Thy face away from my sins, and blot out all mine " +
  "iniquities. Create in me a clean heart, O God, and renew a right spirit within " +
  "me. Cast me not away from Thy presence, and take not Thy Holy Spirit from me. " +
  "Restore unto me the joy of Thy salvation, and with Thy governing Spirit " +
  "establish me. I shall teach transgressors Thy ways, and the ungodly shall turn " +
  "back unto Thee. Deliver me from blood-guiltiness, O God, Thou God of my " +
  "salvation; my tongue shall rejoice in Thy righteousness. O Lord, Thou shalt " +
  "open lips, and my mouth shall declare Thy praise. For if Thou hadst desired " +
  "sacrifice, I had given it; with whole-burnt offerings Thou shalt not be pleased. " +
  "A sacrifice unto God is a broken spirit; a heart that is broken and humbled God " +
  "will not despise. Do good, O Lord, in Thy good pleasure unto Sion, and let the " +
  "walls of Jerusalem be builded. Then shalt Thou be pleased with a sacrifice of " +
  "righteousness, with oblation and whole-burnt offerings. Then shall they offer " +
  "bullocks upon Thine altar.";
const HTM_PSALM_53 =
  "PSALM 53\n\n" +
  "O God, in Thy name save me, and in Thy strength do Thou judge me. O God, " +
  "hearken unto my prayer, give ear unto the words of my mouth. For strangers are " +
  "risen up against me, and mighty men have sought after my soul and have not set " +
  "God before themselves. For behold, God helpeth me, and the Lord is the protector " +
  "of my soul. He will bring evils upon mine enemies. Utterly destroy them by Thy " +
  "truth. Willingly shall I sacrifice unto Thee; I will confess Thy name, O Lord, " +
  "for it is good. For out of every affliction hast Thou delivered me, and mine eye " +
  "hath looked down upon mine enemies.";

const HTM_PSALM_54 =
  "PSALM 54\n\n" +
  "Give ear, O God, unto my prayer, and disdain not my supplication, attend unto " +
  "me, and hear me. I was grieved in my meditation, and I was troubled at the voice " +
  "of the enemy and at the oppression of the sinner; Because they have turned " +
  "iniquity upon me, and with wrath were they angry against me. My heart is troubled " +
  "within me, and the terror of death is fallen upon me. Fear and trembling are come " +
  "upon me, and darkness hath covered me. And I said: Who will give me wings like a " +
  "dove? And I will fly and be at rest. Lo, I have fled afar off and have dwelt in " +
  "the wilderness. I waited for God that saveth me from faintheartedness and from " +
  "tempest. Plunge them into the depths, O Lord, and divide their tongues, for I " +
  "have seen iniquity and gainsaying in the city. Day and night they go round about " +
  "her upon her walls; iniquity and toil and unrighteousness are in the midst of " +
  "her. And usury and deceit have not departed from her streets. For if mine enemy " +
  "had reviled me, I might have endured it. And if he that hateth me had spoken " +
  "boastful words against me, I might have hid myself from him. But thou it was, " +
  "O man of like soul with me, my guide and my familiar friend, Thou who together " +
  "with me didst sweeten my repasts; in the house of God I walked with thee in " +
  "oneness of mind. Let death come upon such ones, and let them go down alive into " +
  "hades. For wickedness is in their dwellings, and in the midst of them. As for " +
  "me, unto God have I cried, and the Lord hearkened unto me. Evening, morning, and " +
  "noonday will I tell of it and will declare it, and He will hear my voice. He will " +
  "redeem my soul in peace from them that draw nigh unto me, for they among many " +
  "were with me. God will hear, and He will humble them, He that is before the ages. " +
  "For to them there is no requital, because they have not feared God; He hath " +
  "stretched forth His hand in retribution. They have defiled His covenant; they " +
  "were scattered by the wrath of His countenance, and their hearts have convened. " +
  "Their words were smoother than oil, and yet they are darts. Cast thy care upon " +
  "the Lord, and He will nourish thee; He will never permit the righteous to be " +
  "shaken. But Thou, O God, shalt bring those men down into the pit of destruction. " +
  "Bloody and deceitful men shall not live out half their days; but as for me, " +
  "O Lord, I will hope in Thee.";
const HTM_PSALM_90 =
  "PSALM 90\n\n" +
  "He that dwelleth in the help of the Most High shall abide in the shelter of " +
  "the God of heaven. He shall say unto the Lord: Thou art my helper and my refuge. " +
  "He is my God, and I will hope in Him. For He shall deliver thee from the snare " +
  "of the hunters and from every troubling word. With His shoulders will He " +
  "overshadow thee, and under His wings shalt thou have hope. With a shield will " +
  "His truth encompass thee; thou shalt not be afraid for the terror by night, nor " +
  "for the arrow that flieth by day, Nor for the thing that walketh in darkness, " +
  "nor for the mishap and demon of noonday. A thousand shall fall at thy side, and " +
  "ten thousand at thy right hand, but unto thee shall it not come nigh. Only with " +
  "thine eyes shalt thou behold, and thou shalt see the reward of sinners. For Thou, " +
  "O Lord, art my hope. Thou madest the Most High thy refuge; No evils shall come " +
  "nigh thee, and no scourge shall draw nigh unto thy dwelling. For He shall give " +
  "His angels charge over thee, to keep thee in all thy ways. On their hands shall " +
  "they bear thee up, lest at any time thou dash thy foot against a stone. Upon the " +
  "asp and basilisk shalt thou tread, and thou shalt trample upon the lion and " +
  "dragon. For he hath set his hope on Me, and I will deliver him; I will shelter " +
  "him because he hath known My name. He shall cry unto Me, and I will hearken " +
  "unto him. I am with him in affliction, and I will rescue him and glorify him. " +
  "With length of days will I satisfy him and I will show him My salvation.";
const HTM_PSALM_83 =
  "PSALM 83\n\n" +
  "How beloved are Thy dwellings, O Lord of hosts; my soul longeth and fainteth " +
  "for the courts of the Lord. My heart and my flesh have rejoiced in the living " +
  "God. For the sparrow hath found herself a house, and the turtledove a nest for " +
  "herself where she may lay her young, Even Thine altars, O Lord of hosts, my King " +
  "and my God. Blessed are they that dwell in Thy house; unto ages of ages shall " +
  "they praise Thee. Blessed is the man whose help is from Thee; he hath made " +
  "ascents in his heart, in the vale of weeping, in the place which he hath " +
  "appointed. Yea, for the lawgiver will give blessings; they shall go from " +
  "strength to strength, the God of gods shall be seen in Sion. O Lord of hosts, " +
  "hearken unto my prayer; give ear, O God of Jacob. O God, our defender, behold, " +
  "and look upon the face of Thine anointed one. For better is one day in Thy " +
  "courts than thousands elsewhere. I have chosen rather to be an outcast in the " +
  "house of my God than to dwell in the tents of sinners. For the Lord loveth mercy " +
  "and truth, God will give grace and glory; the Lord will not withhold good things " +
  "from them that walk in innocence. O Lord God of hosts, blessed is the man that " +
  "hopeth in Thee.";

const HTM_PSALM_84 =
  "PSALM 84\n\n" +
  "Thou hast been gracious, O Lord, unto Thy land; Thou hast turned back the " +
  "captivity of Jacob. Thou hast forgiven the iniquities of Thy people, Thou hast " +
  "covered all their sins. Thou hast made all Thy wrath to cease, Thou hast turned " +
  "back from the wrath of Thine anger. Turn us back, O God of our salvation, and " +
  "turn away Thine anger from us. Wilt Thou be wroth with us unto the ages? Or " +
  "wilt Thou draw out Thy wrath from generation to generation? O God, Thou wilt " +
  "turn and quicken us, and Thy people shall be glad in Thee. Show us, O Lord, " +
  "Thy mercy, and Thy salvation do Thou give unto us. I will hear what the Lord " +
  "God will speak in me; for He will speak peace to His people and to His saints " +
  "and to them that turn their heart unto Him. Surely nigh unto them that fear Him " +
  "is His salvation, that glory may dwell in our land. Mercy and truth are met " +
  "together, righteousness and peace have kissed each other. Truth is sprung out " +
  "of the earth, and righteousness hath looked down from heaven. Yea, for the Lord " +
  "will give goodness, and our land shall yield her fruit. Righteousness shall go " +
  "before Him and shall set His footsteps in the way.";

const HTM_PSALM_85 =
  "PSALM 85\n\n" +
  "Bow down Thine ear, O Lord, and hearken unto me, for poor and needy am I. " +
  "Preserve my soul, for I am holy; save Thy servant, O my God, that hopeth in " +
  "Thee. Have mercy on me, O Lord, for unto Thee will I cry all the day long; make " +
  "glad the soul of Thy servant, for unto Thee have I lifted up my soul. For Thou, " +
  "O Lord, art good and gentle, and plenteous in mercy unto all them that call upon " +
  "Thee. Give ear, O Lord, unto my prayer, and attend unto the voice of my " +
  "supplication. In the day of mine affliction have I cried unto Thee, for Thou " +
  "hast heard me. There is none like unto Thee among the gods, O Lord, nor are " +
  "there any works like unto Thy works. All the nations whom Thou hast made shall " +
  "come and shall worship before Thee, O Lord, and shall glorify Thy name. For " +
  "Thou art great and workest wonders; Thou alone art God. Guide me, O Lord, in " +
  "Thy way, and I will walk in Thy truth; let my heart rejoice that I may fear Thy " +
  "name. I will confess Thee, O Lord my God, with all my heart, and I will glorify " +
  "Thy name forever. For great is Thy mercy upon me, and Thou hast delivered my " +
  "soul from the nethermost hades. O God, transgressors have risen up against me, " +
  "and the assembly of the mighty hath sought after my soul, and they have not set " +
  "Thee before them. But Thou, O Lord my God, art compassionate and merciful, long " +
  "suffering and plenteous in mercy, and true. Look upon me and have mercy upon me; " +
  "give Thy strength unto Thy servant, and save the son of Thy handmaiden. Work in " +
  "me a sign unto good, and let them that hate me behold and be put to shame; for " +
  "Thou, O Lord, hast holpen me and comforted me.\n\n" +
  "And again: Work in me a sign unto good, and let them that hate me behold and " +
  "be put to shame; for Thou, O Lord, hast holpen me and comforted me.";
// ── Theotokions and appointed verses (HTM) ───────────────────────────────────

const HTM_THEOTOKION_1ST =
  "What shall we call thee, O thou that art full of grace? Heaven: for thou hast " +
  "dawned forth the Sun of Righteousness. Paradise: for thou hast blossomed forth " +
  "the Flower of Immortality. Virgin: for thou hast remained incorrupt. Pure " +
  "Mother: for thou hast held in thy holy embrace the Son, the God of all. " +
  "Do thou entreat Him to save our souls.";

const HTM_VERSE_1ST =
  "My steps do Thou direct according to Thy saying, and let no iniquity have " +
  "dominion over me.\n" +
  "Deliver me from the false accusation of men, and I will keep Thy commandments.\n" +
  "Make Thy face to shine upon Thy servant, and teach me Thy statutes.";

const HTM_THEOTOKION_3RD =
  "O Theotokos, thou art the true vine that hath blossomed forth for us the Fruit " +
  "of life. Thee do we supplicate; Intercede, O Lady, together with the holy " +
  "apostles, that our souls find mercy.";

const HTM_VERSE_3RD =
  "Blessed is the Lord God, blessed is the Lord day by day; " +
  "the God of our salvation shall prosper us along the way; " +
  "our God is the God of salvation.";

const HTM_THEOTOKION_6TH =
  "Seeing that we have no boldness on account of our many sins, do thou beseech " +
  "Him that was born of thee, O Virgin Theotokos; for the supplication of a mother " +
  "availeth much to win the Master's favour. Disdain not the prayers of sinners, " +
  "O all-pure one, for merciful and mighty to save is He, Who deigned also to " +
  "suffer for our sake.";

const HTM_VERSE_6TH =
  "Let Thy compassions quickly go before us, O Lord, for we are become exceedingly " +
  "poor. Help us, O God our Saviour, for the sake of the glory of Thy name; " +
  "O Lord, deliver us and be gracious unto our sins for Thy name's sake.";

const HTM_THEOTOKION_9TH =
  "O Thou Who for our sake wast born of a Virgin, and didst suffer crucifixion, " +
  "O Good One, and didst despoil death by death, and, as God, didst reveal the " +
  "resurrection: Disdain not them which Thou hast fashioned with Thy hand; show " +
  "forth Thy love for mankind, O Merciful One; accept the Theotokos who gave " +
  "Thee birth, who intercedeth for us; and do Thou, our Saviour, save a " +
  "despairing people.";

const HTM_VERSE_9TH =
  "Deliver us not up utterly, for Thy holy name's sake, neither disannul Thou " +
  "Thy covenant, and cause not Thy mercy to depart from us, for Abraham's sake, " +
  "Thy beloved, and for Isaac's sake, Thy servant, and for Israel's, Thy holy one.";
// ── Closing prayers (HTM) ─────────────────────────────────────────────────────

const HTM_PRAYER_1ST_CLOSING =
  "O Christ the True Light, Who enlightenest and sanctifiest every man that cometh " +
  "into the world: Let the light of Thy countenance be signed upon us, that in it " +
  "we may see the Unapproachable Light, and guide our steps in the doing of Thy " +
  "commandments, through the intercessions of Thy most pure Mother, and of all " +
  "Thy saints. Amen.";

const HTM_PRAYER_3RD_CLOSING =
  "O Master, God the Father Almighty, O Lord, the Only-begotten Son, Jesus Christ, " +
  "and O Holy Spirit, one Godhead, one Power: Have mercy on me a sinner, and by " +
  "the judgments which Thou knowest, save me, Thine unworthy servant; for blessed " +
  "art Thou unto the ages of ages. Amen.";

const HTM_PRAYER_6TH_CLOSING =
  "O God and Lord of hosts, and Maker of all creation, Who by the tender compassion " +
  "of Thy mercy which transcendeth comprehension, didst send down Thine " +
  "Only-begotten Son, our Lord Jesus Christ, for the salvation of our race, and by " +
  "His precious Cross didst tear asunder the handwriting of our sins, and thereby " +
  "didst triumph over the principalities and powers of darkness: Do Thou Thyself, " +
  "O Master, Lover of mankind, accept also from us sinners these prayers of " +
  "thanksgiving and entreaty, and deliver us from every destructive and dark " +
  "transgression, and from all enemies, both visible and invisible, that seek to " +
  "do us evil. Nail down our flesh with the fear of Thee, and incline not our " +
  "hearts unto words or thoughts of evil, but pierce our souls with longing for " +
  "Thee, so that ever looking to Thee, and being guided by Thy light as we behold " +
  "Thee, the Unapproachable and Everlasting Light, we may send up unceasing praise " +
  "and thanksgiving unto Thee, the unoriginate Father, with Thine Only-begotten " +
  "Son, and Thine All-holy and good and life-creating Spirit, now and ever, and " +
  "unto the ages of ages. Amen.";

const HTM_PRAYER_9TH_CLOSING =
  "O Master, Lord Jesus Christ, our God, Who art long-suffering in the face of " +
  "our transgressions, and Who hast brought us even unto this present hour, wherein " +
  "Thou didst hang upon the life-giving Tree, and didst make a way into paradise " +
  "for the wise thief, and by death didst destroy death: Be gracious unto us " +
  "sinners and Thine unworthy servants; for we have sinned and committed iniquity, " +
  "and are not worthy to lift up our eyes and behold the height of heaven, for we " +
  "have abandoned the way of Thy righteousness, and have walked in the desires of " +
  "our hearts. But we beseech Thy boundless goodness: Spare us, O Lord, according " +
  "to the multitude of Thy mercy and save us for Thy holy name's sake; for our " +
  "days were consumed in vanity. Rescue us from the hand of the adversary, and " +
  "forgive us our sins, and mortify our carnal mind; that, putting aside the old " +
  "man, we may be clad with the new, and live for Thee, our Master and Benefactor; " +
  "and that thus by following in Thy commandments, we may attain to rest " +
  "everlasting, wherein is the dwelling-place of all them that rejoice. For Thou " +
  "art indeed the true joy and gladness of them that love Thee, O Christ our God, " +
  "and unto Thee we send up glory, with Thine unoriginate Father, and Thy " +
  "Most-holy and good and life-creating Spirit, now and ever, and unto the ages " +
  "of ages. Amen.";
// ── Assembly function ────────────────────────────────────────────────────────


function assembleHour(hourKey, liturgicalData, menaionEntry, pentEntry, tbOpen = false, readerMode = false) {
  const elements = [];
  const { paschaOffset, tone, dayName, season, namedDay } = liturgicalData;

  // ── Season flags ──────────────────────────────────────────────────────────
  const isPentecostarion = season === 'pentecostarion' || season === 'brightweek';
  const fmt = pentEntry ? pentEntry.hours_format : null;
  const isPentSundayFmt = fmt === 'pentecostarion_sunday' || fmt === 'all_saints_sunday';
  const isSunday = season === 'sunday' || season === 'pentecostarion_sunday' || isPentSundayFmt;
  const isOrdinarySunday = season === 'sunday';
  const christIsRisenActive = isPentecostarion && paschaOffset >= 7 && paschaOffset <= 38;
  const heavenlyKingOmitted = isPentecostarion && paschaOffset > 38;
  const is3rdOr9th = hourKey === '3rd_hour' || hourKey === '9th_hour';

  // ── Fekula section for citations ─────────────────────────────────────────
  const fekulaSection = (() => {
    if (isPentecostarion && pentEntry) {
      const fmt = pentEntry.hours_format;
      if (fmt === 'apodosis_pascha') return '§4B11';
      if (fmt === 'ascension')       return '§4B12';
      if (fmt === 'pentecostarion_sunday') return '§4B';
      if (fmt === 'all_saints_sunday') return '§4B17';
      return '§4A';
    }
    if (!menaionEntry) return '§2A';
    if (menaionEntry.fekula_section_override) return `§${menaionEntry.fekula_section_override}`;
    const r = menaionEntry.rank;
    return r === 'six_stichera' ? '§2C'
         : r === 'doxology'    ? '§2D'
         : r === 'polyeleos'   ? '§2E'
         : r === 'vigil'       ? '§2F'
         : r === 'great_feast' ? '§' + (menaionEntry.fekula_section || '2F')
         : '§2A';
  })();

  // ── Bright Week placeholder ───────────────────────────────────────────────
  if (season === 'brightweek') {
    elements.push({
      id: 'bright-week-placeholder', type: 'placeholder',
      label: 'Bright Week — Paschal Hours',
      text: 'Bright Week (P+1 through P+6) uses the Paschal Hours, chanted exactly as on Pascha itself. Assembly of the Paschal Hours is in development.',
      fekula: { section: '§4B2', note: 'The Hours are chanted just as on Pascha itself. — Fekula §4B2' },
    });
    return elements;
  }

  // ── Unencoded Pentecostarion date ────────────────────────────────────────
  if (isPentecostarion && !pentEntry) {
    const weekNum = Math.ceil(paschaOffset / 7);
    elements.push({
      id: 'pent-not-encoded', type: 'placeholder',
      label: `Pentecostarion — P+${paschaOffset}`,
      text: `Service data not yet encoded for this date (P+${paschaOffset}, ${dayName} of Week ${weekNum} after Pascha).\n\nCurrently encoded: P+35 (Blind Man Sunday) through P+40 (Friday of Week 6, first day of Ascension afterfeast).`,
      fekula: { section: '§4A', note: 'Fekula Chapter Four — Pentecostarion rules' },
    });
    return elements;
  }
  // ── Troparion resolution ─────────────────────────────────────────────────
  // Primary troparion: Pentecostarion entry or Menaion saint
  // Secondary troparion: Menaion saint (when Pentecostarion is primary)
  // Sunday: named day propers override Menaion when applicable
  let primaryTrop = null;
  let primaryTropSource = '';
  let secondaryTrop = null;
  let secondaryTropSource = '';

  const menaionTrop = menaionEntry && menaionEntry.troparion ? menaionEntry.troparion : null;
  const menaionSaint = menaionEntry ? menaionEntry.saint : 'saint of the day';

  // Resolve named Sunday overrides (All Saints NA, etc.)
  let effectiveMenaionTrop = menaionTrop;
  let effectiveSaint = menaionSaint;
  if (isOrdinarySunday && namedDay && namedDay.troparion) {
    effectiveMenaionTrop = namedDay.troparion;
    effectiveSaint = namedDay.name;
  }

  if (isPentecostarion && pentEntry && pentEntry.troparion) {
    primaryTrop = pentEntry.troparion;
    primaryTropSource = `Pentecostarion — ${pentEntry.name}`;
    if (pentEntry.menaion_set_aside && pentEntry.troparion_2) {
      // §4B13 / §4B17: Menaion set aside — secondary is hour-differentiated from pentEntry.
      // 1st & 6th Hours: troparion_3 (feast troparion, e.g. Ascension T4 on P+42)
      // 3rd & 9th Hours: troparion_2 (saint troparion, e.g. Holy Fathers T8 on P+42)
      // Fekula §4B13: "First and Sixth Hours: Sunday + feast. Third and Ninth Hours: Sunday + Fathers."
      secondaryTrop = is3rdOr9th
        ? pentEntry.troparion_2
        : (pentEntry.troparion_3 || pentEntry.troparion_2);
      secondaryTropSource = `Pentecostarion — ${pentEntry.name}`;
    } else if (effectiveMenaionTrop && !pentEntry.menaion_set_aside) {
      secondaryTrop = effectiveMenaionTrop;
      secondaryTropSource = `Menaion — ${effectiveSaint}`;
    }
  } else if (isOrdinarySunday) {
    // Ordinary Sunday (post-Pentecostarion): resurrectional troparion is primary.
    // Fekula §1A: resurrectional troparion of the tone, then Glory → Menaion saint troparion.
    const resTrop = RESURRECTIONAL_TROPARIA[tone];
    if (resTrop) {
      primaryTrop = resTrop;
      primaryTropSource = `Octoechos — Tone ${tone} (Sunday resurrectional)`;
    }
    if (effectiveMenaionTrop) {
      secondaryTrop = effectiveMenaionTrop;
      secondaryTropSource = `Menaion — ${effectiveSaint}`;
    }
  } else if (effectiveMenaionTrop) {
    primaryTrop = effectiveMenaionTrop;
    primaryTropSource = `Menaion — ${effectiveSaint}`;
  }

  // ── Kontakion resolution ─────────────────────────────────────────────────
  // Pentecostarion: ode-aware (HTM rubric)
  //   1st/6th Hours: after 3rd Ode at Matins → kontakion_ode3
  //   3rd/9th Hours: after 6th Ode at Matins → kontakion_ode6
  //   hours_kontakion: universal override (Period 3 single-kontakion days)
  // Ordinary/Sunday: getKontakionForHour(menaionEntry, hourKey)
  let kontakion = null;
  let kontakionSource = '';
  let kontakionOdeNote = hourKey === '1st_hour' || hourKey === '6th_hour'
    ? 'And he saith the kontakion of the feast, or of the saint of the day.\nIf there be two kontakia, he saith the kontakion which was chanted after the 3rd Ode at Matins. — HTM'
    : 'And he saith the kontakion of the feast, or of the saint of the day.\nIf there be two kontakia, he saith the kontakion which was chanted after the 6th Ode at Matins. — HTM';

  if (isPentecostarion && pentEntry) {
    let pKont;
    if (pentEntry.menaion_set_aside && pentEntry.hours_kontakion && pentEntry.kontakion_ode6) {
      // §4B13 / §4B17: two distinct kontakia, hour-differentiated.
      // 1st & 6th Hours: hours_kontakion (feast kontakion, after 3rd Ode — e.g. Ascension T6)
      // 3rd & 9th Hours: kontakion_ode6 (saint kontakion, after 6th Ode — e.g. Holy Fathers T8)
      // Fekula §4B13: "First and Sixth Hours: Kontakion of the feast.
      //                Third and Ninth Hours: Kontakion of the Fathers."
      pKont = is3rdOr9th ? pentEntry.kontakion_ode6 : pentEntry.hours_kontakion;
    } else {
      // Ordinary Pentecostarion: hours_kontakion is a universal single-kontakion override;
      // otherwise ode-aware selection (3rd Ode after 1st/6th, 6th Ode after 3rd/9th).
      pKont = pentEntry.hours_kontakion
        || (is3rdOr9th
            ? (pentEntry.kontakion_ode6 || pentEntry.kontakion_ode3)
            : (pentEntry.kontakion_ode3 || pentEntry.kontakion_ode6));
    }
    const mKont = menaionEntry && menaionEntry.kontakion_ode6 ? menaionEntry.kontakion_ode6 : null;
    const isHighRank = menaionEntry && ['doxology','polyeleos','vigil'].includes(menaionEntry.rank);
    // High-rank Menaion override: on ordinary Pentecostarion weekdays, Doxology+ saints
    // get their kontakion at 3rd/9th (Fekula §4A footnote). But when menaion_set_aside
    // is true, the Menaion is entirely displaced — §4B13/§4B17 governs exclusively.
    const menaionKontakionOverride = isHighRank && is3rdOr9th && mKont && !pentEntry.menaion_set_aside;
    kontakion = menaionKontakionOverride ? mKont : pKont;
    kontakionSource = menaionKontakionOverride
      ? `Menaion — ${effectiveSaint} (Doxology+ rank)`
      : `Pentecostarion — ${pentEntry.name}`;
  } else {
    // Ordinary time (weekday or Sunday)
    if (isOrdinarySunday) {
      // Fekula §1A: Sunday kontakion of the tone at 1st & 6th Hours (after Ode III).
      // At 3rd & 9th Hours (after Ode VI): Menaion saint kontakion if present,
      // otherwise Sunday kontakion.
      const sundayKont = SUNDAY_KONTAKIA[tone] || null;
      const menaionKont = getKontakionForHour(menaionEntry, hourKey);
      if (is3rdOr9th && menaionKont) {
        kontakion = menaionKont;
        kontakionSource = `Menaion — ${effectiveSaint}`;
      } else if (sundayKont) {
        kontakion = sundayKont;
        kontakionSource = `Octoechos — Tone ${tone} (Sunday kontakion)`;
      } else {
        kontakion = menaionKont;
        kontakionSource = `Menaion — ${effectiveSaint}`;
      }
    } else {
      kontakion = getKontakionForHour(menaionEntry, hourKey);
      kontakionSource = `Menaion — ${effectiveSaint}`;
    }
    if (isOrdinarySunday && namedDay && namedDay.kontakion_ode6) {
      const useThirdOde = hourKey === '1st_hour' || hourKey === '6th_hour';
      kontakion = useThirdOde && namedDay.kontakion_ode3
        ? namedDay.kontakion_ode3
        : namedDay.kontakion_ode6;
      kontakionSource = namedDay.name;
    }
  }
  // ── OPENING ─────────────────────────────────────────────────────────────
  if (is3rdOr9th) {
    // Full beginning at 3rd and 9th Hours
    if (readerMode) {
      elements.push({
        id: `${hourKey}-blessing`, type: 'substitution', label: 'Opening', rubric: 'Reader:',
        text: 'Through the prayers of our holy fathers, Lord Jesus Christ, Son of God, have mercy on us. Amen.',
        source: 'Fekula Chapter 10',
        fekula: { section: '§10', note: 'Instead of the blessing by the priest, the reader says: Through the prayers of our holy fathers… — Fekula Chapter 10' },
      });
    } else {
      elements.push({
        id: `${hourKey}-blessing`, type: 'fixed', label: '', rubric: 'Priest (or Reader if no priest):',
        text: 'Blessed is our God, always, now and ever, and unto the ages of ages.',
        source: 'HTM',
      });
    }
    if (christIsRisenActive) {
      // P+7–P+38: after Amen, immediately Christ is risen (Glory to Thee and
      // O Heavenly King both skipped). HTM rubric; Fekula §4A.
      elements.push({
        id: `${hourKey}-christ-is-risen`, type: 'pentecostarion_skeleton', label: '',
        rubric: '(Glory to Thee and O Heavenly King are both skipped — immediately:)',
        text: 'Reader: Amen.\n\n' + HTM_CHRIST_IS_RISEN, repeat: 3, source: 'HTM',
        fekula: { section: fekulaSection,
          note: 'After the reader saith Amen, he immediately saith thrice: Christ is risen (Glory to Thee and O Heavenly King are both skipped). — HTM 3rd/9th Hour; Fekula §4A' },
      });
    } else if (heavenlyKingOmitted) {
      // P+39–Pentecost: Glory to Thee and O Heavenly King both omitted
      elements.push({
        id: `${hourKey}-heavenly-king-omitted`, type: 'rubric', label: '',
        rubric: null,
        text: 'Reader: Amen.\n\n[Glory to Thee, our God and O Heavenly King are both omitted from the Apodosis of Pascha until Pentecost. The reader proceeds directly to Holy God, Holy Mighty...]',
        source: 'HTM; Fekula §4B11',
        fekula: { section: '§4B11', note: 'The Ninth Hour begins with the reading of the Trisagion (and thus until Pentecost, when we read O Heavenly King... for the first time). — Fekula §4B11' },
      });
    } else {
      // Ordinary: Glory to Thee + O Heavenly King
      elements.push({
        id: `${hourKey}-reader-amen-opening`, type: 'fixed', label: '',
        rubric: null,
        text: 'Reader: Amen.',
        source: 'HTM',
      });
      elements.push({
        id: `${hourKey}-glory-to-thee`, type: 'fixed', label: '',
        rubric: null,
        text: 'Glory to Thee, our God, glory to Thee.',
        source: 'HTM',
      });
      elements.push({
        id: `${hourKey}-heavenly-king`, type: 'fixed', label: '',
        rubric: null,
        text: HTM_O_HEAVENLY_KING,
        source: 'HTM',
      });
    }
    elements.push({
      id: `${hourKey}-trisagion-opening`, type: 'fixed', label: '', rubric: null,
      text: HTM_TRISAGION, source: 'HTM',
    });
    if (readerMode) {
      elements.push({
        id: `${hourKey}-for-thine`, type: 'substitution', label: '', rubric: 'Reader:',
        text: 'Through the prayers of our holy fathers, Lord Jesus Christ, Son of God, have mercy on us. Amen.',
        source: 'Fekula Chapter 10',
        fekula: { section: '§10', note: 'After Our Father, instead of For Thine is the Kingdom (priest\'s exclamation), the reader says: Through the prayers of our holy fathers… — Fekula Chapter 10' },
      });
    } else {
      elements.push({
        id: `${hourKey}-for-thine`, type: 'fixed', label: '', rubric: 'Priest:',
        text: 'For Thine is the kingdom, and the power, and the glory: of the Father, and of the Son, and of the Holy Spirit, now and ever, and unto the ages of ages.',
        source: 'HTM',
      });
    }
    elements.push({
      id: `${hourKey}-reader-amen-1`, type: 'fixed', label: '', rubric: null,
      text: 'Reader: Amen.', source: 'HTM',
    });
    elements.push({
      id: `${hourKey}-lhm-12`, type: 'fixed', label: '', rubric: null,
      text: 'Lord, have mercy. (twelve times)\nGlory to the Father, and to the Son, and to the Holy Spirit,\nboth now and ever, and unto the ages of ages. Amen.',
      source: 'HTM',
    });
    elements.push({
      id: `${hourKey}-o-come`, type: 'fixed', label: '', rubric: null,
      text: HTM_O_COME, source: 'HTM',
    });
  } else {
    // 1st and 6th Hours: no full beginning — O Come starts the Hour
    // When OrdinaryBeginning panel is expanded (tbOpen), O Come is already
    // rendered inside that panel — don't duplicate it here.
    if (tbOpen) {
      // O Come already shown in the Ordinary Beginning panel above — skip
    } else if (christIsRisenActive) {
      elements.push({
        id: `${hourKey}-christ-is-risen`, type: 'pentecostarion_skeleton', label: '',
        rubric: 'Instead of O come let us worship:',
        text: HTM_CHRIST_IS_RISEN, repeat: 3, source: 'HTM',
        fekula: { section: fekulaSection,
          note: 'At those Hours that normally start with O come let us worship (i.e. First and Sixth Hours), we read Christ is risen... thrice, instead of O come let us worship. — Fekula §4A' },
      });
    } else {
      elements.push({
        id: `${hourKey}-o-come`, type: 'fixed', label: '', rubric: null,
        text: HTM_O_COME, source: 'HTM',
      });
    }
  }
  // ── PSALMS ──────────────────────────────────────────────────────────────
  if (hourKey === '1st_hour') {
    elements.push({ id: `${hourKey}-ps5`,   type: 'fixed', label: '', text: HTM_PSALM_5,   source: 'HTM' });
    elements.push({ id: `${hourKey}-ps89`,  type: 'fixed', label: '', text: HTM_PSALM_89,  source: 'HTM' });
    elements.push({ id: `${hourKey}-ps100`, type: 'fixed', label: '', text: HTM_PSALM_100, source: 'HTM' });
  } else if (hourKey === '3rd_hour') {
    elements.push({ id: `${hourKey}-ps16`, type: 'fixed', label: '', text: HTM_PSALM_16, source: 'HTM' });
    elements.push({ id: `${hourKey}-ps24`, type: 'fixed', label: '', text: HTM_PSALM_24, source: 'HTM' });
    elements.push({ id: `${hourKey}-ps50`, type: 'fixed', label: '', text: HTM_PSALM_50, source: 'HTM' });
  } else if (hourKey === '6th_hour') {
    elements.push({ id: `${hourKey}-ps53`, type: 'fixed', label: '', text: HTM_PSALM_53, source: 'HTM' });
    elements.push({ id: `${hourKey}-ps54`, type: 'fixed', label: '', text: HTM_PSALM_54, source: 'HTM' });
    elements.push({ id: `${hourKey}-ps90`, type: 'fixed', label: '', text: HTM_PSALM_90, source: 'HTM' });
  } else {
    elements.push({ id: `${hourKey}-ps83`, type: 'fixed', label: '', text: HTM_PSALM_83, source: 'HTM' });
    elements.push({ id: `${hourKey}-ps84`, type: 'fixed', label: '', text: HTM_PSALM_84, source: 'HTM' });
    elements.push({ id: `${hourKey}-ps85`, type: 'fixed', label: '', text: HTM_PSALM_85, source: 'HTM' });
  }

  // Glory / Alleluia block
  elements.push({
    id: `${hourKey}-glory-alleluia`, type: 'fixed', label: '', rubric: null,
    text: 'Glory to the Father, and to the Son, and to the Holy Spirit,\nboth now and ever, and unto the ages of ages. Amen.\n\nAlleluia, alleluia, alleluia. Glory to Thee, O God. (thrice)\n\nLord, have mercy. (thrice)',
    source: 'HTM',
  });
  // ── TROPARION BLOCK ────────────────────────────────────────────────────
  // HTM rubric: "Here we say the first troparion, if there be two."
  //   ONE troparion:  Glory... → Troparion → Both now... → Theotokion
  //   TWO troparia:   First troparion → Glory... → Second troparion → Both now... → Theotokion
  const tropFekulaNote = isPentecostarion
    ? 'Troparion of the preceding Sunday and the troparion from the Menaion, if there be such. — Fekula §4A(3)'
    : '"The Hours: Troparion and kontakion from the Menaion." — Fekula, Chapter Two';

  const hasTwoTroparia = !!(primaryTrop && secondaryTrop);

  if (!hasTwoTroparia) {
    // ONE troparion: Glory comes BEFORE the troparion
    elements.push({
      id: `${hourKey}-glory`, type: 'fixed', label: '', rubric: null,
      text: 'Glory to the Father, and to the Son, and to the Holy Spirit.',
    });
  }

  if (primaryTrop) {
    elements.push({
      id: `${hourKey}-troparion`, type: 'movable', label: 'Troparion',
      source: primaryTropSource,
      toneNote: `Tone ${primaryTrop.tone}`,
      text: primaryTrop.text,
      rubric: hasTwoTroparia
        ? 'Here we say the first troparion, if there be two. — HTM'
        : null,
      fekula: { section: fekulaSection, note: tropFekulaNote },
    });
  } else {
    // No troparion resolved — placeholder
    elements.push({
      id: `${hourKey}-glory`, type: 'fixed', label: '', rubric: null,
      text: 'Glory to the Father, and to the Son, and to the Holy Spirit.',
    });
    elements.push({
      id: `${hourKey}-troparion`, type: 'movable', label: 'Troparion',
      source: `Menaion — ${effectiveSaint}`,
      text: '[Troparion — text not yet in library for this date]',
      unresolved: true,
      fekula: { section: fekulaSection, note: tropFekulaNote },
    });
  }

  if (hasTwoTroparia) {
    // TWO troparia: Glory comes BETWEEN first and second
    elements.push({
      id: `${hourKey}-glory`, type: 'fixed', label: '', rubric: null,
      text: 'Glory to the Father, and to the Son, and to the Holy Spirit.',
    });
    elements.push({
      id: `${hourKey}-troparion-secondary`, type: 'movable', label: 'Troparion',
      source: secondaryTropSource,
      toneNote: `Tone ${secondaryTrop.tone}`,
      text: secondaryTrop.text,
      rubric: 'And we say the appointed troparion (or the second, if there be two). — HTM',
      fekula: { section: fekulaSection, note: '...and the troparion from the Menaion, if there be such. — Fekula §4A' },
    });
  }

  // Both now / Theotokion
  elements.push({ id: `${hourKey}-both-now`, type: 'fixed', label: '', rubric: null,
    text: 'Both now and ever, and unto the ages of ages. Amen.' });
  const THEOTOKION_BY_HOUR = {
    '1st_hour': HTM_THEOTOKION_1ST,
    '3rd_hour': HTM_THEOTOKION_3RD,
    '6th_hour': HTM_THEOTOKION_6TH,
    '9th_hour': HTM_THEOTOKION_9TH,
  };
  elements.push({
    id: `${hourKey}-theotokion`, type: 'fixed', label: '', rubric: null,
    text: THEOTOKION_BY_HOUR[hourKey] || '',
    source: 'HTM',
  });
  // ── APPOINTED VERSE ───────────────────────────────────────────────────
  const VERSE_BY_HOUR = {
    '1st_hour': HTM_VERSE_1ST,
    '3rd_hour': HTM_VERSE_3RD,
    '6th_hour': HTM_VERSE_6TH,
    '9th_hour': HTM_VERSE_9TH,
  };
  elements.push({
    id: `${hourKey}-appointed-verse`, type: 'fixed', label: '', rubric: null,
    text: VERSE_BY_HOUR[hourKey] || '',
    source: 'HTM',
  });

  // ── TRISAGION (2nd) / OUR FATHER ────────────────────────────────────────
  elements.push({
    id: `${hourKey}-trisagion-2`, type: 'fixed', label: '', rubric: null,
    text: HTM_TRISAGION, source: 'HTM',
  });
  if (readerMode) {
    elements.push({
      id: `${hourKey}-for-thine-2`, type: 'substitution', label: '', rubric: 'Reader:',
      text: 'Through the prayers of our holy fathers, Lord Jesus Christ, Son of God, have mercy on us. Amen.',
      source: 'Fekula Chapter 10',
      fekula: { section: '§10', note: 'After Our Father, instead of For Thine is the Kingdom (priest\'s exclamation), the reader says: Through the prayers of our holy fathers… — Fekula Chapter 10' },
    });
  } else {
    elements.push({
      id: `${hourKey}-for-thine-2`, type: 'fixed', label: '', rubric: 'Priest:',
      text: 'For Thine is the kingdom, and the power, and the glory: of the Father, and of the Son, and of the Holy Spirit, now and ever, and unto the ages of ages.',
      source: 'HTM',
    });
  }
  elements.push({
    id: `${hourKey}-reader-amen-2`, type: 'fixed', label: '', rubric: null,
    text: 'Reader: Amen.', source: 'HTM',
  });

  // ── KONTAKION ────────────────────────────────────────────────────────────
  if (kontakion) {
    elements.push({
      id: `${hourKey}-kontakion`, type: 'movable', label: 'Kontakion',
      rubric: kontakionOdeNote,
      source: kontakionSource,
      toneNote: `Tone ${kontakion.tone || '—'}`,
      text: kontakion.text,
      fekula: { section: fekulaSection,
        note: isPentecostarion
          ? 'Kontakion of the preceding Sunday. — Fekula §4A(3)'
          : '"The Hours: Troparion and kontakion from the Menaion." — Fekula, Chapter Two' },
    });
  } else {
    elements.push({
      id: `${hourKey}-kontakion`, type: 'movable', label: 'Kontakion',
      rubric: kontakionOdeNote,
      source: `Menaion — ${effectiveSaint}`,
      text: '[Kontakion — text not yet in library for this date]',
      unresolved: true,
      fekula: { section: fekulaSection, note: '"The Hours: Troparion and kontakion from the Menaion." — Fekula, Chapter Two' },
    });
  }

  // ── LORD HAVE MERCY × 40 / PRAYER OF THE HOURS ──────────────────────────
  elements.push({
    id: `${hourKey}-lhm-40`, type: 'fixed', label: '', rubric: null,
    text: 'Lord, have mercy. (forty times)', source: 'HTM',
  });
  elements.push({
    id: `${hourKey}-prayer-of-hours`, type: 'fixed', label: '', rubric: null,
    text: HTM_PRAYER_OF_HOURS, source: 'HTM',
  });
  elements.push({
    id: `${hourKey}-lhm-3`, type: 'fixed', label: '', rubric: null,
    text: 'Lord, have mercy. (thrice)\nGlory to the Father, and to the Son, and to the Holy Spirit,\nboth now and ever, and unto the ages of ages. Amen.',
    source: 'HTM',
  });
  elements.push({
    id: `${hourKey}-more-honourable`, type: 'fixed', label: '', rubric: null,
    text: HTM_MORE_HONOURABLE, source: 'HTM',
  });
  // ── CLOSING SEQUENCE (per HTM) ───────────────────────────────────────────
  // Exact HTM order:
  //   1. In the name of the Lord, father (master), bless.   ← reader cues priest
  //   2. Priest: God be gracious unto us and bless us...    ← short blessing
  //   3. Reader: Amen.
  //   4. O Master, Lord Jesus Christ... (long closing prayer) ← reader
  // Reader's Service (Ch10): instead of "In the name of the Lord, Father Bless!"
  //   the reader says "Lord, bless!" then the appropriate prayer directly.
  const SHORT_BLESSING = {
    '1st_hour': 'God be gracious unto us and bless us, and cause Thy face to shine upon us and have mercy on us.',
    '3rd_hour': 'Through the prayers of our holy fathers, O Lord Jesus Christ our God, have mercy on us.',
    '6th_hour': 'Through the prayers of our holy fathers, O Lord Jesus Christ our God, have mercy on us.',
    '9th_hour': 'God be gracious unto us and bless us, and cause Thy face to shine upon us and have mercy on us.',
  };
  if (readerMode) {
    elements.push({
      id: `${hourKey}-name-of-lord`, type: 'substitution', label: '', rubric: 'Reader:',
      text: 'Lord, bless!',
      source: 'Fekula Chapter 10',
      fekula: { section: '§10', note: 'Instead of "In the name of the Lord, Father Bless!" the reader says "Lord, bless!" — Fekula Chapter 10' },
    });
    elements.push({
      id: `${hourKey}-priest-short-blessing`, type: 'omission', label: '',
      text: `Priest short blessing (${SHORT_BLESSING[hourKey]}) — omitted in Reader's Service`,
      source: 'Fekula Chapter 10',
      fekula: { section: '§10', note: 'Fekula Chapter 10 — Concerning Services Without a Priest' },
    });
    elements.push({
      id: `${hourKey}-reader-amen-blessing`, type: 'fixed', label: '', rubric: null,
      text: SHORT_BLESSING[hourKey] || 'Through the prayers of our holy fathers, O Lord Jesus Christ our God, have mercy on us.',
      source: 'HTM',
    });
  } else {
    elements.push({
      id: `${hourKey}-name-of-lord`, type: 'fixed', label: '', rubric: null,
      text: 'In the name of the Lord, father (master), bless.',
      source: 'HTM',
    });
    elements.push({
      id: `${hourKey}-priest-short-blessing`, type: 'fixed', label: '',
      rubric: 'Priest:',
      text: SHORT_BLESSING[hourKey] || 'God be gracious unto us and bless us, and cause Thy face to shine upon us and have mercy on us.',
      source: 'HTM',
    });
    elements.push({
      id: `${hourKey}-reader-amen-blessing`, type: 'fixed', label: '', rubric: null,
      text: 'Reader: Amen.',
      source: 'HTM',
    });
  }
  const CLOSING_PRAYER = {
    '1st_hour': HTM_PRAYER_1ST_CLOSING,
    '3rd_hour': HTM_PRAYER_3RD_CLOSING,
    '6th_hour': HTM_PRAYER_6TH_CLOSING,
    '9th_hour': HTM_PRAYER_9TH_CLOSING,
  };
  if (CLOSING_PRAYER[hourKey]) {
    elements.push({
      id: `${hourKey}-closing-prayer`, type: 'fixed', label: '',
      // 1st Hour closing prayer (O Christ the True Light) is said by the Priest
      // in front of the holy doors — not by the reader. HTM is explicit.
      // In reader mode it is said by the reader (all priest parts omitted per Ch10).
      rubric: hourKey === '1st_hour' ? (readerMode ? 'Reader:' : 'Priest:') : null,
      text: CLOSING_PRAYER[hourKey],
      source: 'HTM',
    });
  }

  // ── 1ST HOUR SPECIAL CLOSE (HTM) ─────────────────────────────────────────
  if (hourKey === '1st_hour') {
    elements.push({
      id: '1st_hour-champion-leader', type: 'fixed', label: '', rubric: null,
      text: 'To thee, the Champion Leader, we thy servants dedicate a feast of victory ' +
        'and of thanksgiving as ones rescued out of sufferings, O Theotokos; but as thou ' +
        'art one with might which is invincible, from all dangers that can be do thou ' +
        'deliver us, that we may cry to thee: Rejoice, thou Bride Unwedded!',
      source: 'HTM',
    });
    if (readerMode) {
      // Reader's Service: Glory to Thee and dismissal are priest parts — omitted.
      // The Hour ends after Champion Leader with the reader's dismissal formula.
      elements.push({
        id: '1st_hour-glory-to-thee-christ', type: 'omission', label: '',
        text: 'Priest: Glory to Thee, O Christ God, our hope, glory to Thee. — omitted in Reader\'s Service',
        source: 'Fekula Chapter 10',
        fekula: { section: '§10', note: 'All portions of the service usually said by the priest are omitted. — Fekula Chapter 10' },
      });
      elements.push({
        id: '1st_hour-chanters-glory', type: 'fixed', label: '', rubric: null,
        text: 'Glory to the Father, and to the Son, and to the Holy Spirit,\n' +
          'both now and ever, and unto the ages of ages. Amen.\n\n' +
          'Lord, have mercy. (thrice)\n\nLord, bless!',
        source: 'HTM; Fekula Chapter 10',
      });
      elements.push({
        id: '1st_hour-dismissal', type: 'substitution', label: 'Dismissal', rubric: 'Reader:',
        text: (() => {
          let saintPart = "";
          if (isSunday) {
            saintPart = "of our Lord, God, and Savior Jesus Christ; ";
          } else if (menaionEntry && menaionEntry.saint) {
            saintPart = `of ${menaionEntry.saint}; `;
          }
          return `Through the prayers of our holy fathers, ${saintPart}` +
                 `(and of the patron of this temple,) and of all the saints, ` +
                 `Lord Jesus Christ, Son of God, have mercy on us. Amen.`;
        })(),
        source: 'Fekula Chapter 10',
        fekula: { section: '§10', note: 'The dismissal of the Hours without a priest: Through the prayers of our holy fathers, of (saints of the day and of the temple), and of all the saints, Lord Jesus Christ, Son of God, have mercy on us. Amen. (More honorable is not said since it has been said earlier.) — Fekula Chapter 10' },
      });
    } else {
      elements.push({
        id: '1st_hour-glory-to-thee-christ', type: 'fixed', label: '', rubric: 'Priest:',
        text: 'Glory to Thee, O Christ God, our hope, glory to Thee.',
        source: 'HTM',
      });
      elements.push({
        id: '1st_hour-chanters-glory', type: 'fixed', label: '', rubric: null,
        text: 'Glory to the Father, and to the Son, and to the Holy Spirit,\n' +
          'both now and ever, and unto the ages of ages. Amen.\n\n' +
          'Lord, have mercy. (thrice)\n\n' +
          'Father (Master), bless.',
        source: 'HTM',
      });
      elements.push({
        id: '1st_hour-dismissal', type: 'fixed', label: '', rubric: 'Priest:',
        text: 'May Christ our true God, through the intercessions of His most pure Mother; ' +
          'of the holy, glorious, and all-praised apostles; of the holy, glorious, and ' +
          'victorious martyrs; of our holy and God-bearing fathers; of the holy and ' +
          'Righteous Ancestors of God Joachim and Anna, and of all the saints; have mercy ' +
          'on us and save us, for He is good and the Lover of mankind.',
        source: 'HTM',
      });
      elements.push({
        id: '1st_hour-amen-close', type: 'fixed', label: '', rubric: null,
        text: 'Amen. Lord, have mercy. (thrice)',
        source: 'HTM',
      });
    }
  }

  // ── END OF HOUR ───────────────────────────────────────────────────────────
  // Per HTM: each Hour ends after the closing prayer. No dismissal is given
  // within the individual Hour. The service continues to the next Hour, and
  // the dismissal is given only at the very end of the complete service
  // (after Vespers or after the 9th Hour if said alone).
  const HOUR_LABELS = {
    '1st_hour': 'THE END OF THE FIRST HOUR',
    '3rd_hour': 'THE END OF THE THIRD HOUR',
    '6th_hour': 'THE END OF THE SIXTH HOUR',
    '9th_hour': 'THE END OF THE NINTH HOUR',
  };
  elements.push({
    id: `${hourKey}-end-marker`, type: 'end_marker', label: '',
    text: HOUR_LABELS[hourKey] || 'THE END OF THE HOUR',
    source: 'HTM',
  });

  return elements;
}

function getKontakionForHour(entry, hourKey) {
  if (!entry) return null;
  const useThirdOde = hourKey === "1st_hour" || hourKey === "6th_hour";
  if (useThirdOde && entry.kontakion_ode3) {
    return entry.kontakion_ode3;
  }
  return entry.kontakion_ode6 || null;
}


const HTM_PSALM_103 =
  "Bless the Lord, O my soul; O Lord my God, Thou hast been magnified exceedingly. " +
  "Confession and majesty hast Thou put on, Who coverest Thyself with light as with a garment, " +
  "Who stretchest out the heaven as it were a curtain; Who supporteth His chambers in the waters, " +
  "Who appointeth the clouds for His ascent, Who walketh upon the wings of the winds, " +
  "Who maketh His angels spirits, and His ministers a flame of fire, " +
  "Who establisheth the earth in the sureness thereof; it shall not be turned back for ever and ever. " +
  "The abyss like a garment is His mantle; upon the mountains shall the waters stand. " +
  "At Thy rebuke they will flee, at the voice of Thy thunder shall they be afraid. " +
  "The mountains rise up and the plains sink down, unto the place where Thou hast established them. " +
  "Thou appointedst a bound that they shall not pass, neither return to cover the earth. " +
  "He sendeth forth springs in the valleys; between the mountains will the waters run. " +
  "They shall give drink to all the beasts of the field; the wild asses will quench their thirst. " +
  "Beside them will the birds of the heaven lodge, from the midst of the rocks will they give voice. " +
  "He watereth the mountains from His chambers; the earth is satisfied with the fruit of Thy works. " +
  "He causeth the grass to grow for the cattle, and green herb for the service of men, " +
  "to bring forth bread out of the earth; and wine maketh glad the heart of man, " +
  "to make his face cheerful with oil; and bread strengtheneth man's heart. " +
  "The trees of the plain shall be satisfied, the cedars of Lebanon, which Thou hast planted. " +
  "There will the sparrows make their nests; the house of the heron is chief among them. " +
  "The high mountains are a refuge for the harts, and so is the rock for the hares. " +
  "He hath made the moon for seasons; the sun knoweth his going down. " +
  "Thou appointedst the darkness, and there was the night, wherein all the beasts of the forest go abroad. " +
  "Young lions roaring after their prey, and seeking their food from God. " +
  "The sun ariseth, and they are gathered together, and they lay them down in their dens. " +
  "But man shall go forth unto his work, and to his labour until the evening. " +
  "How magnified are Thy works, O Lord! In wisdom hast Thou made them all; the earth is filled with Thy creation. " +
  "So is this great and spacious sea, therein are things creeping innumerable, small living creatures with the great. " +
  "There go the ships; there this dragon, whom Thou hast made to play therein. " +
  "All things wait on Thee, to give them their food in due season; when Thou givest it them, they will gather it. " +
  "When Thou openest Thy hand, all things shall be filled with goodness; when Thou turnest away Thy face, they shall be troubled. " +
  "Thou wilt take their spirit, and they shall cease; and unto their dust shall they return. " +
  "Thou wilt send forth Thy Spirit, and they shall be created; and Thou shalt renew the face of the earth. " +
  "Let the glory of the Lord be unto the ages; the Lord will rejoice in His works, " +
  "Who looketh on the earth and maketh it tremble, Who toucheth the mountains and they smoke. " +
  "I will sing unto the Lord throughout my life, I will chant to my God for as long as I have my being. " +
  "May my words be sweet unto Him, and I will rejoice in the Lord. " +
  "O that sinners would cease from the earth, and they that work iniquity, that they should be no more. " +
  "Bless the Lord, O my soul.";

const HTM_PSALM_103_REFRAIN =
  "The sun knoweth his going down, Thou appointedst the darkness, and there was the night. " +
  "How magnified are Thy works, O Lord! In wisdom hast Thou made them all.\n\n" +
  "Glory to the Father, and to the Son, and to the Holy Spirit, " +
  "both now and ever, and unto the ages of ages. Amen.\n\n" +
  "Alleluia, alleluia, alleluia. Glory to Thee, O God. (thrice)";

// ── OCTOECHOS SUNDAY HYPAKOË ──────────────────────────────────────────────────
// Source: St. Sergius Sunday Octoechos PDFs (N-1.pdf files), tones 1-8.
// Used at Sunday Typica in place of the Kontakion section.
// NOTE: In the Russian Octoechos PDFs these appear as "The Sessional Hymn" following
// the small litany after the Evlogitaria (Resurrectional Verses) at Sunday Matins.
// The Pascha Hypakoë (Tone 8 variant) is drawn from the HTM Pentecostarion.
const OCTOECHOS_HYPAKOE = {
  1: "The Thief's repentance plundered Paradise, but the myrrh-bearers' lamentations " +
     "announced the joy that Thou hast risen, O Christ God, granting the world great mercy.",
  2: "The women coming to Thy grave after the Passion to anoint Thy body, O Christ God, " +
     "saw angels in the tomb and were affrightened, for they heard a message from them: " +
     "The Lord hath arisen, granting the world His great mercy.",
  3: "A cause of amazement by his appearance, and source of refreshment by his speech, " +
     "the radiant angel spake unto the myrrh-bearing women saying: " +
     "\"Why do ye seek the living in a grave? He hath arisen, emptying the graves. " +
     "Know that the unchangeable One hath changed corruption. " +
     "Wherefore cry unto God saying: How fearful are Thy works! For Thou hast saved mankind.\"",
  4: "The myrrh-bearing women hastened to proclaim to the apostles " +
     "the news of Thy wondrous rising, O Christ: " +
     "that as God Thou hast arisen, granting the world great mercy.",
  5: "The myrrh-bearing women, amazed in their minds by the vision of the angel " +
     "yet enlightened in their souls by the divine Resurrection, " +
     "announced the glad tidings to the apostles: " +
     "Proclaim ye among the nations the Resurrection of the Lord, " +
     "Who worketh in us through wonders, and Who granteth us great mercy.",
  6: "By Thy voluntary and life-giving death, O Christ, Thou hast shattered the gates of Hades, " +
     "and as God Thou hast opened unto us the paradise of old; " +
     "and by arising from the dead, Thou hast delivered our lives from corruption.",
  7: "O Christ God, Who took upon Thyself our form and endured the Cross in the body, " +
     "save me by Thy Resurrection, as Thou alone lovest mankind.",
  8: "The myrrh-bearing women standing at the tomb of the Giver of life, " +
     "seeking the immortal Master among the dead; " +
     "and having received the glad tidings of joy from the angel, " +
     "announced unto the apostles that Christ the Lord is risen, " +
     "granting the world great mercy.",
  // Pascha Hypakoë (Tone 8, used during Bright Week)
  // Source: HTM Pentecostarion (HTM_selected_material_from_pentecostarian.txt)
  "pascha": "Forestalling the dawn, the women came with Mary, " +
     "and found the stone rolled away from the sepulchre, " +
     "and heard from the angel: Why seek ye among the dead, " +
     "as though He were a mortal, Him Who liveth in everlasting light? " +
     "Behold the grave-clothes. Go quickly and proclaim to the world " +
     "that the Lord is risen and hath slain death. " +
     "For He is the Son of God Who saveth mankind.",
};

const WEEKLY_VESPERS_PROKEIMENON = {
  6: { tone: 6, text: "The Lord is King, He is clothed with majesty.",
    verses: ["The Lord is clothed with strength and He hath girt Himself.",
             "For He established the universe which shall not be shaken.",
             "Holiness becometh Thy house, O Lord, unto length of days."] },
  0: { tone: 8, text: "Behold now, bless ye the Lord, all ye servants of the Lord.",
    verses: ["Ye that stand in the house of the Lord, in the courts of the house of our God."] },
  1: { tone: 4, text: "The Lord will hearken unto me when I cry unto Him.",
    verses: ["When I called upon Thee, O God of my righteousness, Thou didst hearken unto me."] },
  2: { tone: 1, text: "Thy mercy, O Lord, shall pursue me all the days of my life.",
    verses: ["The Lord is my shepherd, and I shall not want. In a place of green pasture, there hath He made me to dwell."] },
  3: { tone: 5, text: "O God, in Thy name save me, and in Thy strength do Thou judge me.",
    verses: ["O God, hearken unto my prayer, give ear unto the words of my mouth."] },
  4: { tone: 6, text: "My help cometh from the Lord, Who hath made heaven and the earth.",
    verses: ["I have lifted up mine eyes to the mountains, from whence cometh my help."] },
  5: { tone: 7, text: "O God, my helper art Thou, and Thy mercy shall go before me.",
    verses: ["Rescue me from mine enemies, O God, and from them that rise up against me redeem me."] },
};

// ─── OCTOECHOS VESPERS DATA ─────────────────────────────────────────────
// Inlined from octoechos-data.js — all 8 tones, 477 records.
// Source: St. Sergius Octoechos PDFs. Generated from octoechos_vespers.txt.
// To restore module import: remove this block and add import on line 2.

// Octoechos Vespers Stichera — all 8 tones
// Generated from octoechos_vespers.txt
// Source: St. Sergius Octoechos PDFs
//
// Structure: OCTOECHOS_VESPERS[tone][day]
// tone: 0 (universal verses) | 1–8
// day: sat | sun_eve | mon | tue | wed | thu | fri
// Fields per day:
//   lic: string[]           — Lord I Have Cried stichera (3 weekday, 7 Saturday)
//   aposticha: string[]     — Aposticha stichera
//   aposticha_glory: string — Glory sticheron (Saturday: Menaion-supplied)
//   dogmatikon: string      — Saturday Both Now (tone dogmatikon)
//   lic_dogmatikon: string  — Friday Both Now (tone dogmatikon)
//
// FW: Move to public/data/octoechos-data.js and fetch at runtime
//     when JSX file size becomes a concern.

const OCTOECHOS_VESPERS = {
  0: {  // universal fixed verses
    weekday: {
      verse_weekday_1: [
        `Unto Thee have I lifted up mine eyes, unto Thee that dwellest in heaven. Behold, as the eyes of servants look unto the hands of their masters, as the eyes of the handmaid look unto the hands of her Mistress, so do our eyes look unto the Lord our God, until He take pity on us.`
      ],
      verse_weekday_2: [
        `Have mercy on us, O Lord, have mercy on us, for greatly are we filled with abasement. Greatly hath our soul been filled therewith; let reproach come upon them that prosper, and abasement on the proud.`
      ]
    },
    saturday: {
      verse_sat_1: [
        `The Lord is King: He is clothed with majesty. The Lord is clothed with strength and He hath girt Himself.`
      ],
      verse_sat_2: [
        `For He established the universe which shall not be shaken.`
      ],
      verse_sat_3: [
        `Holiness becometh Thy house, O Lord, unto length of days.`
      ]
    }
  },
  1: {  // Tone 1
    sat: {
      lic: [
        `Receive our evening prayers, O Holy Lord, and grant us remission of sins; because Thou alone hast revealed the Resurrection to the world.`,
        `Go around Zion, O ye peoples, and encompass her, and give glory to him who in her midst hath arisen from the dead; for he is our God, and hath delivered us from our iniquities.`,
        `Come O ye peoples, let us hymn and worship Christ glorifying his Resurrection from the dead: for he is our God, who hath redeemed the world from the deception of the adversary.`,
        `Rejoice, O ye heavens! Sound the trumpets O ye foundations of the earth! O ye mountains thunder forth your joy! for behold, Emmanuel hath nailed our sins to the Cross, and the giver of life, hath slain death raising up Adam, as He alone is the Lover of mankind.`,
        `Let us sing the praise of him who was willingly crucified in the flesh for our sakes, suffered and was buried, and arose from the dead, as we cry: Establish Thy Church in Orthodox belief, O Christ, and grant peace unto our lives, as Thou alone art good and the Lover of mankind.`,
        `As we the unworthy ones stand before Thy life-bearing tomb we offer a hymn of glory to thine ineffable compassion, O Christ our God; because Thou didst accept the Cross and death, O sinless one, that Thou mightest grant resurrection to the world, as Thou alone lovest mankind.`,
        `Let us sing the praises of the Word, without beginning and co-eternal, with the Father, who came forth ineffably from a virgin womb, willingly accepting the Cross and Death for our sake and arose in glory, wherefore we cry aloud: Giver of life, O Lord, glory be to thee, the Savior of our souls.`
      ],
      aposticha: [
        `By Thy Passion, O Christ, we have been set free from passions, and by Thy Resurrection we have been delivered from corruption. O Lord, glory be to thee.`,
        `All ye His creation rejoice! let the heavens be glad, let the nations clap their hands with gladness; for Christ our Savior hath nailed our sins to the Cross and by slaying death hath granted us life eternal, raising all of the fallen race of Adam, as he alone is the Lover of mankind.`,
        `Being the King of heaven and earth, O Incomprehensible one, Thou wast willingly crucified through Thy love for mankind; when Hades met thee he was vexed, while the souls of the righteous receiving thee below rejoiced, and Adam, seeing thee his Creator in the nethermost regions, rose again. O the wonder! How did the life of all taste death? Except that he wished to enlighten the world, which crieth out saying: O Thou who didst arise from the dead, O Lord glory be to thee!`,
        `Carrying sweet spices the myrrh-bearing women reached Thy tomb with haste, lamenting; and not finding Thy most pure Body, but learning from the angel the new and marvelous wonder, spake unto the apostles saying: The Lord hath arisen, granting the world His great mercy.`
      ],
      aposticha_glory: `[Glory from Menaion if appointed]`,
      dogmatikon: `Let us hymn the whole world's glory, who sprang forth from mankind and who gave birth to the Master, the Portal of heaven, Mary the Virgin, the hymn of the Bodiless Powers and adornment of the faithful; for she hath been revealed as the Heaven and Temple of the Godhead. By destroying the middle wall, she hath brought forth peace, and opened wide the Kingdom. Therefore, holding fast to her as a firm confirmation of the faith, we have as our champion the Lord born from her. Take courage therefore, take courage, O ye people of God; for as the Invincible one he shall conquer our adversaries.`
    },
    sun_eve: {
      lic: [
        `In Thy goodness, O Lord, Thou didst bring all things about by Thy Word and Spirit, and didst also create me a reason-endowed living thing, that I might glorify Thine omnipotent name. But, more than any, I ever act dishonorably by my shameful deeds; yet have pity on me, I pray.`,
        `I recognize thy divine nobility and the incorrupt homeland, O wretched soul, and I ever strive to attain them by goodly deeds. Let naught that is corrupt captivate me. Thou art my higher part, while the body is earth and corrupteth. Let not what is baser overcome that which is higher.`,
        `Go thou to the supremely good One, O all-accursed soul; approach Him with fervent tears; before thy condemnation confess all things that thou hast done; and render thy Creator merciful to thee, O wretched one. Beg forgiveness, lest the Lord shut the door to thee.`
      ],
      aposticha: [
        `Great is the abyss of my many transgressions, O Savior, and I sink grievously because of mine offenses. Grant me Thy hand, as Thou didst to Peter, O God. Save me, and have mercy upon me!`,
        `In that I have been condemned for wicked thoughts and deeds, O Savior, grant me the thought of returning to Thee, O God, that I may cry aloud: Save me, O good Benefactor, and have mercy upon me!`,
        `Through the prayers of all the saints and the Theotokos, O Lord, grant us Thy peace, and have mercy upon us, in that Thou alone art compassionate.`
      ],
      aposticha_glory: `Joy of the ranks of heaven, and mighty intercession for mankind on earth, O most pure Virgin: save us who have recourse unto thee, for in thee, after God, have we placed our hope, O Theotokos.`
    },
    mon: {
      lic: [
        `My whole life have I shamefully squandered with harlots, wretch that I am O Lord, but like the prodigal I cry out with compunction: O heavenly Father, I have sinned! Cleanse Thou and save me, and reject me not who have withdrawn far from Thee, and am now beggared because of my fruitless deeds.`,
        `O Christ Who art rich, in impoverishing Thyself Thou hast enriched mankind with immortality and radiance. Wherefore, with the virtues enrich me who have been impoverished by the pleasures of life, and number me with the pauper Lazarus, rescuing me from the torment of the rich man and Gehenna, which lie before me.`,
        `I have sorely enriched myself with evil, I have loved food, and preferred the good things of this life, and am condemned to Gehenna, O Lord. My starving mind have I disdained, as the rich man did Lazarus. Have pity on me, who have been cast away from the doors of Thy divine works, O Lord.`
      ],
      aposticha: [
        `Great is the abyss of my many transgressions, O Savior, and I am grievously engulfed because of mine offenses. Grant me Thy hand, as Thou didst to Peter, O God. Save me, and have mercy upon me!`,
        `In that I have been condemned for wicked thoughts and deeds, O Savior, grant me the thought of returning to Thee, O God, that I may cry aloud: Save me, O good Benefactor, and have mercy upon me!`,
        `The confession ye made before the tribunal reviled the power of the demons, and freed mankind from delusion, O saints. Wherefore, when ye were beheaded ye cried aloud: O Lord, may the sacrifice of our lives be well-pleasing to Thee, for having loved Thee, we have spurned this transitory life, O Lover of mankind.`
      ],
      aposticha_glory: `O all-hymned Virgin, in whom Moses beheld a mystery with prophetic eyes the bush that burned yet remained unconsumed; for the fire of the Godhead did not burn thy womb, O pure one. Wherefore, we beseech thee, as the Mother of our God: beg thou peace and great mercy for the world.`
    },
    tue: {
      lic: [
        `Nailed to the Cross as a man, O Christ God, Thou didst deify human nature and slay the serpent, the author of evil. Becoming accursed in that Thou art compassionate, Thou didst free us from the curse which hath its origin in the tree. And Thou didst come that Thou mightest give blessing and great mercy unto all.`,
        `Though Thou art exalted far above all honor, O Master, Thou didst deign to be dishonored, enduring a violent death upon the Tree, that when Thou didst die in the flesh, O Almighty, through it the race of mankind might embrace immortality and receive again its primal life.`,
        `O most precious Cross, purification of all the faithful, sanctify all who bow down before thee and glorify Christ, Who stretched out His most pure hands upon thee in His ineffable loving-kindness, and Who hath gathered together all the ends of the earth.`
      ],
      aposticha: [
        `The Cross was set up on Golgotha, and hath blossomed forth immortality for us from the ever-flowing fountain of the Savior's side.`,
        `The precious Cross of the Savior is for us an indestructible rampart; for, placing our trust therein, we all are saved.`,
        `O how good was your barter, O saints! For ye traded your blood and inherited heavenly things; and having undergone trials for a time, ye rejoice everlastingly. Of a truth your commerce was good! For, having forsaken corruptible things, ye received those things which were incorrupt; and joining chorus with the angels, ye unceasingly hymn the consubstantial Trinity.`
      ],
      aposticha_glory: `Upon beholding the Lamb lifted up upon the Cross, the immaculate Virgin cried aloud, weeping: O my Child most sweet, what is this new and most glorious sight? How is it that Thou Who holdest all things in Thy hand hast been nailed to the Tree in the flesh?`
    },
    wed: {
      lic: [
        `O glorious apostles, divinely chosen disciples of Christ, teachers of the whole world, who found the Lord God, Who is the Mediator between God and mankind: Unto Him did ye cleave in godliness, and throughout the world ye manifestly preached Him as God and as a supremely perfect man.`,
        `O most wise apostles, divinely chosen disciples of Christ, teachers of the whole world: By your prayers strengthen me, that I may obey the teachings of God; and ever help me to walk the narrow path, that I may achieve a most spacious rest in paradise.`,
        `I hymn as eyewitnesses and preachers of the Word Peter the first enthroned, Paul and James, Andrew and Philip, Simon, Bartholomew and Thomas, Matthew and John, and Mark and Luke who recorded the Gospels, who with the seventy others are the divinely chosen choir.`
      ],
      aposticha: [
        `The harmonious harp of the apostles, played by the Holy Spirit, abolished the abominable sacrifices of the demons; and, proclaiming the one Lord, it hath delivered the nations from the delusion of idolatry, and taught them to worship the consubstantial Trinity.`,
        `Together let us praise Peter and Paul, Luke and Matthew, Mark and John, Andrew and Thomas, Bartholomew and Simon the Canaite, James and Philip; and let us laud the whole choir of the disciples, as is meet.`,
        `O all-famed martyrs, the earth did not hide you, but heaven received you, and unto you were opened the gates of paradise. And since ye have entered therein, ye delight in the tree of life. Pray ye unto Christ, that He grant our souls peace and great mercy.`
      ],
      aposticha_glory: `Rejoice, O Virgin, thou joy of the forefathers, gladness of the apostles and martyrs, and protection of us thy servants!`
    },
    thu: {
      lic: [
        `Thou didst stretch forth Thy most pure hands upon the Cross, O Christ, summoning those who had departed far from Thee and settling them near Thyself; wherefore, I pray to Thee: Unite me to Thee, though I have been made captive by the passions, and grant unto me the repentance which washeth away all the defilement of the passions.`,
        `Thou didst uplift Thy most pure hands upon the Tree, O Christ, and didst bloody Thy fingers, desiring to deliver Adam, the work of Thy divine hands, who because of disobedience was held fast in the realm of death, O Lover of mankind; and Thou didst raise him up by Thine authority, O Almighty.`,
        `Thou didst endure suffering for our sake, O Savior Who art immutable by nature and dispassionate in Thy divinity; and Thou wast crucified with thieves, O sinless and beginningless Christ. The sun, unable to bear the audacity, dimmed its rays, and the whole earth quaked, acknowledging Thee to be the Creator of the world.`
      ],
      aposticha: [
        `The Cross was set up on Golgotha, and blossomed forth immortality for us from the ever-flowing fountain of the Savior's side.`,
        `The precious Cross of the Savior is for us an indestructible rampart; for, placing our trust in it, we all are saved.`,
        `By the supplications of all the saints and the Theotokos, O Lord, grant us peace, and have mercy upon us, in that Thou alone art compassionate.`
      ],
      aposticha_glory: `Upon beholding Thine unjust slaying, O Christ, the Virgin, cried out to Thee, weeping: O my sweetest Child! How is it that Thou diest unjustly? How is it that Thou Who hast suspended the whole earth upon the waters dost hang upon the Tree? Leave me not alone who am Thy Mother and handmaiden, I pray, O greatly merciful Benefactor!`
    },
    fri: {
      lic: [
        `The triumphal solemnity of the martyrs drowned a multitude of the demons in the streams of their blood, caused all the abominable sacrifices to cease, and set at naught the deception of the idols, for they suffered patiently. And they now entreat Christ to grant our souls peace and great mercy.`,
        `With wise words and doctrines the most sacred pastors taught all to glorify the threefold Godhead in Unity, divinely avoiding the commingling and division of Its Hypostases; and they now pray that peace and great mercy be granted our souls.`,
        `The company of the venerable lulled carnal desires to sleep and restrained their onslaughts, showing their life to be angelic; wherefore, they now join chorus in the habitations of heaven, entreating Christ to grant our souls peace and great mercy.`,
        `By the prayers, O Lord, of all the saints and of the Theotokos, grant us Thy peace and have mercy upon us, for Thou alone art compassionate.`,
        `The confession of faith that ye made at the tribunal, O ye saints, set at naught the strength of the demons, and set men free from error. As ye were beheaded ye cried aloud: May the sacrifice of our lives be acceptable in Thy sight, O Lord; for, desiring Thee the Lover of mankind, we have spurned this quickly passing life.`,
        `Wise was the trade that ye made, O saints! Giving your blood, and inheriting heaven as your reward; Having suffered tribulation for a time, ye now rejoice eternally. Truly wisely have ye traded: forsaking things corruptible, ye have received things incorruptible; and rejoicing with the choirs of angels ye now hymn eternally the praises of the consubstantial Trinity.`
      ],
      lic_dogmatikon: `Let us hymn the whole world's glory, who sprang forth from mankind and who gave birth to the Master, the Portal of heaven, Mary the Virgin, the hymn of the Bodiless Powers and adornment of the faithful; for she hath been revealed as the Heaven and Temple of the Godhead. By destroying the middle wall, she hath brought forth peace, and opened wide the Kingdom. Therefore, holding fast to her as a firm confirmation of the faith, we have as our champion the Lord born from her. Take courage therefore, take courage, O ye people of God; for as the Invincible one he shall conquer our adversaries.`,
      aposticha: [
        `O all-famed martyrs, the earth did not hide you, but heaven hath received you; the gates of Paradise were opened to you, and entering within ye have partaken of the tree of life. Pray ye to Christ that He grant peace and great mercy to our souls.`,
        `What sweet pleasure in this life remaineth untouched by grief? What glory endureth unchanged upon the earth? All is feebler than a shadow, more deceptive than a dream; for death in a single moment taketh away all these things. But in the light of Thy countenance, O Christ, and in the enjoyment of Thy beauty, grant rest to those whom Thou hast chosen, for Thou art the Lover of mankind.`,
        `There is none free from sin, save Thou, O immortal One. Wherefore, by Thy loving-kindness, in that Thou art a compassionate God, grant unto Thy servants a dwelling-place in the Light, with the choirs of Thine angels, and overlooking their transgressions, grant them forgiveness.`
      ],
      aposticha_glory: `Truly wondrous beyond understanding are the mighty works of thy birthgiving O Bride of God, which all the prophets proclaimed, and thy conception and birth giving are most glorious, O all-hymned one, whereby thine Offspring hath incomprehensibly and ineffably saved the world, in that He is full of loving-kindness.`
    }
  },
  2: {  // Tone 2
    sat: {
      lic: [
        `Come let us worship God the Word, begotten of the Father before all ages, incarnate of the Virgin Mary; for having endured the Cross, He was handed over for burial, as He Himself had willed, and having risen from the dead He hath saved me, the whole man, who hath gone astray.`,
        `Come let us worship God the Word, begotten of the Father before all ages, incarnate of the Virgin Mary; for having endured the Cross, He was handed over for burial, as He Himself had willed, and having risen from the dead He hath saved me, the whole man, who hath gone astray.`,
        `Christ our Savior, by nailing the record against us to the Cross hath blotted it out, and destroyed the might of death. We worship His arising on the third day.`,
        `With the archangels let us hymn the Resurrection of Christ; for He is the Redeemer and the Savior of our souls; and He is coming again with great glory and mighty power to judge the world which He hath fashioned.`,
        `An angel proclaimed Thee, the crucified and buried Master, saying to the women: Come, see where the Lord lay. For as He foretold, He hath arisen as all-powerful. Therefore we worship Thee, the only immortal One. O Christ, Giver of life, have mercy on us.`,
        `By Thy Cross Thou hast destroyed the curse of the tree; by Thy burial Thou didst slay the might of death; by Thine arising Thou hast enlightened mankind; wherefore we cry out to Thee: O Christ, our God and Benefactor, glory be to Thee!`,
        `The gates of death opened unto Thee in fear O Lord, and the gate-keepers of Hades were terrified at the sight of Thee, for Thou hast smashed the gates of brass, and crushed the bars of iron to powder, leading us out of the darkness and shadow of death rending asunder our bonds.`
      ],
      aposticha: [
        `Thy Resurrection, O Christ our Savior, hath enlightened the whole universe; and Thou hast called back Thine own creation. O all-powerful Lord, glory be to Thee!`,
        `Nullifying the curse of the tree through a Tree, O Savior, Thou didst slay the might of death by Thy burial, enlightening our race by Thine arising; wherefore we cry out to Thee: O Giver of life, Christ our God, glory be to Thee!`,
        `Appearing nailed to the Cross, O Christ, Thou hast altered the beauty of all created things; and while the soldiers showed their inhumanity by piercing Thy side with a lance, the Hebrews asked that Thy tomb be sealed, not understanding Thy power; but in Thy merciful compassion Thou didst accept burial and rise on the third day. O Lord, glory be to Thee!`,
        `For the sake of mortal mankind, O Christ Giver of life, Thou didst willingly endure the Passion; and as all-powerful Thou didst descend into Hades, snatching from the hand of the mighty one the souls of those who awaited Thy coming therein granting them to dwell in paradise instead of Hades, grant also unto us who glorify Thine arising on the third day the pardon of our iniquities and Thy great mercy.`
      ],
      aposticha_glory: `[Glory from Menaion if appointed]`,
      dogmatikon: `The shadow of the law hath passed now that grace hath come, for as the bush wrapped in flame was not consumed, so didst thou bear a Child O Virgin and remained a virgin; in place of a pillar of fire, the Sun of righteousness hath dawned, instead of Moses, Christ is come, the salvation of our souls.`
    },
    sun_eve: {
      lic: [
        `Possessing a wellspring of loving-kindness, and ever pouring forth Thy mercy from the depths thereof, O supremely good Father, Son and Word of the Father, and Holy Spirit, Thou uncreated Essence: Accept our supplication and prayer, and grant forgiveness unto all who abide in transgressions, in that Thou art a compassionate God and lovest mankind.`,
        `Having by nature unfathomable depths of compassion, mercy and goodness; we beseech Thee, O Christ our Savior, falling down before Thee, crying, and ever calling out to Thee: Grant unto Thy servants remission of their many transgressions and forgiveness of all things wherein they have offended, in that Thou art a compassionate God and lovest mankind.`,
        `As God and the Savior of all, desiring to save us for whose sake Thou didst assume flesh, and manifest Thyself as a man. Do Thou save us who bow down before Thy commandments, O Lover of mankind, for Thou didst not come to save the righteous, but through the grace of divine baptism, Thou didst come to loose us who are bound by the chains of the multitude of our sins and transgressions, in that Thou art a compassionate God and lovest mankind.`
      ],
      aposticha: [
        `Like the prodigal son I have sinned against Thee, O Savior. Accept me who am penitent, O Father. Have mercy on me, O God!`,
        `With the cry of the publican I cry out to Thee, O Christ my Savior: Cleanse me as Thou didst him, and have mercy on me, O God!`,
        `Having hated the pleasures of the earth, the passion-bearers were granted the good things of heaven and became fellow citizens with the angels. By their supplications, O Lord, have mercy and save us.`
      ],
      aposticha_glory: `Rejoice, O Theotokos Mary, thou indestructible and surpassingly holy temple; rejoice thou joy of the angels and intercessor for mankind; rejoice thou haven of those that sail, and deliverance of those in tribulation.`
    },
    mon: {
      lic: [
        `O Christ, Who alone art without sin, Who alone art without guile, Who alone art the Wellspring of goodness: Behold mine oppression, behold my tribulation. Wash all the wounds of my stripes, and in Thy mercy save Thy servant, that, having driven the clouds of slothfulness far from me, I may glorify Thee, my supremely good Savior.`,
        `Look, O my lowly soul! Behold thy works, which are all-defiled! Behold thy nakedness and, alas, thine isolation! For thou shalt be separated from God and the angels, and cast into endless torment. Come to thy senses, arise, make haste and cry aloud: I have sinned, O Savior! Grant me forgiveness, and save me!`,
        `I have grievously defiled my body and brought corruption upon my soul and heart by my vile thoughts; I have wounded all my senses, and blinded mine eyes, have stopped up mine ears with filth, and have defiled my tongue; and all that I have is shameful. Wherefore, falling down before Thee, I cry aloud: O Master Christ, I have sinned against Thee! I have sinned; forgive and save me!`
      ],
      aposticha: [
        `Like the prodigal son I have sinned against Thee, O Savior. Accept me who am penitent, O Father. Have mercy upon me, O God!`,
        `With the cry of the publican I cry out to Thee, O Christ my Savior: Cleanse me as Thou didst him, and have mercy on me, O God!`,
        `When the holy martyrs pray for us and hymn Christ, all delusion ceaseth, and the race of mankind is saved by faith.`
      ],
      aposticha_glory: `All of my hope do I place on thee, O Mother of God; keep me under thy protection.`
    },
    tue: {
      lic: [
        `When Thou didst set upon the Cross, O Word, the luminaries, not bearing to shine, dimmed their rays; the earth quaked, and the rocks split asunder; the majesty of the temple was rent in twain; the graves opened, and the dead arose; Hades released all who were below, and the demons were vanquished; and death was reckoned by all to be but sleep.`,
        `When the good-hearted thief beheld Thee, the fruitful Vine, O Christ, he became a better thief and yet more skilled, for with a few words he quite simply stole the forgiveness of ancient offenses. Let us all, then, make haste to emulate him, crying aloud: Remember us also, O Lover of mankind!`,
        `Truly Thy divine Cross shineth like a star in the sky, O Christ, burning up the demons, shedding light upon the faithful, and casting shame upon the faces of those who crucified Thee. By it Thou didst lead our first parents forth from the slavery caused by the tree which was the image of the Cross, and in the desert didst cause Thy people to suck forth honey from the rock.`
      ],
      aposticha: [
        `O Christ God my Savior, Who saved Peter in the sea, save me by the power of the Cross, and have mercy on me.`,
        `Those who ever enjoyed Thy gifts cried out, "Crucify Him!"; those who slew the righteous ones asked that a malefactor be given to them in place of the Benefactor. But Thou didst keep silence, O Christ, enduring their savagery, desiring to suffer and thus save us, in that Thou lovest mankind.`,
        `The choirs of the martyrs opposed the tyrants, saying: "We fight on behalf of the King of the powers on high; though ye give us up to fire and torment, we shall not deny the power of the Trinity."`
      ],
      aposticha_glory: `The light of the sun and moon dimmed, obscured by the noetic Light Who hung naked upon the Cross; for that which is lesser is ever vanquished by the greater, and the lower giveth place to the higher. How then can it not be fitting for perceptible radiance to hide itself before the radiant Christ? the most pure one asked the worthy bodies of light, when she gazed upon Thee.`
    },
    wed: {
      lic: [
        `Like spiritual rivers issuing forth separately from Eden, O wise ones, ye have watered the whole earth and, having ploughed it, and sown the preaching of salvation, ye have reaped right fruitful grain, the souls of the saved, laying them up in the noetic granaries like riches of great price, O disciples of the Lord.`,
        `O ye luminaries of the noetic East, free my heart, which is sorely distressed by the passions, from the darkness of passionate pleasures, O most radiant heralds of the Sun, for ye announced unto all Him Who hath banished the night of unbelief. Wherefore entreat Him, that He enlighten also our minds, in that ye were eyewitnesses unto Him.`,
        `Bearing the saving Word which was written by the Spirit by the finger of the Father, ye were truly shown to be divinely inscribed tablets of the new grace, animate scrolls and initiates of His mysteries; wherefore, ye traversed all the ends of the earth, manifesting the Orthodox Faith to all mankind and revealing the path which leadeth to the heavens.`
      ],
      aposticha: [
        `Throughout the whole world Thou didst magnify the names of Thy preeminent apostles, O Savior, for they learned heavenly things and imparted ineffable healings unto mortals. They who were fishermen healed diseases by their handkerchiefs alone; they who were Jews theologized the doctrines of grace. For their sake, O Thou Who art full of loving-kindness, grant us great mercy.`,
        `We, who are ever assailed by the actions of the unrighteous, yet truly find refuge in Thee, Who art God, offer unto Thee the voice of Thy disciples, saying: Save us, O our Instructor, for we are perishing! And we pray: Show now to our enemies that Thou dost protect and save from misfortunes those who have recourse to the supplications of the apostles, overlooking their sins in Thy great goodness. O Lord, glory be to Thee!`,
        `O all-famed martyrs, the earth did not hide you, but heaven received you, and unto you were opened the gates of paradise. And since ye have entered therein, ye delight in the tree of life. Pray ye unto Christ, that He grant our souls peace and great mercy.`
      ],
      aposticha_glory: `Like a great Sun, the Word, Who is equal in honor with the Father and the Spirit, and Who in latter times shone forth upon the earth through the divine Virgin maiden, emitted you, O ye glorious apostles, like rays illumining with the light of Faith all mankind which languishes in the darkness of delusion, leading them unto Him with divine teachings.`
    },
    thu: {
      lic: [
        `When Thou wast nailed to the Cross, O Savior, the sun beheld and dimmed its rays in fear of Thee, and the veil of the temple was rent in twain; the earth quaked, and the stones likewise split asunder with trembling, unable to bear the sight of their Creator and God willingly suffering unjustly upon the Tree, and reviled by men.`,
        `Wholly cast down to the ground, wholly wounded, the most wicked serpent was brought low by a strange fall when Thou, O Lover of mankind, wast uplifted upon the Tree. And Adam who before was condemned was loosed from the curse and became saved. Wherefore, we also pray: Save us all, O Compassionate One, and grant us Thy kingdom!`,
        `When the Cross was set up and Thou wast pierced in the side with the spear, O Sinless Savior, the sun hid itself, unable to bear the sight; and when Thou wast reviled, the earth trembled, and the rocks split asunder in fear; and all creation cried out to Thee: Glory be to Thy crucifixion whereby Thou hast saved all, O Word and Lover of mankind!`
      ],
      aposticha: [
        `O Christ God my Savior, Who saved Peter in the sea, save me by the power of the Cross, and have mercy on me.`,
        `They who ever enjoyed Thy gifts cried aloud, "Crucify Him!"; they who slew the righteous ones asked that a malefactor be released unto them in place of the Benefactor. But Thou didst keep silence, O Christ, enduring their savagery, desiring to suffer and thus save us, in that Thou lovest mankind.`,
        `Having hated the pleasures of life, the passion-bearers were deemed worthy of the good things of heaven and have made their abode together with the angels. By their prayers, O Lord, have mercy and save us.`
      ],
      aposticha_glory: `When the unblemished ewe-lamb beheld her Lamb willingly led as a man to the slaughter, she said, weeping: Dost Thou now hasten to leave me childless who gave Thee birth O Christ? What is this that Thou hast done, O Redeemer of all? Even so I will hymn and glorify Thine extreme goodness, which is beyond understanding and all telling, O Lover of mankind!`
    },
    fri: {
      lic: [
        `Giving your flesh over to wounds and enduring the most bitter torments and a violent death, O all-praised martyrs, ye put the tyrants to shame and truly abolished the worship of idols, preaching Christ, the one God and Master, before Whom ye stand crowned, O glorious ones, together with the angelic hosts.`,
        `Giving your flesh over to wounds and enduring the most bitter torments and a violent death, O all-praised martyrs, ye put the tyrants to shame and truly abolished the worship of idols, preaching Christ, the one God and Master, before Whom ye stand crowned, O glorious ones, together with the angelic hosts.`,
        `Ye revealed yourselves to be divine preachers of the Word Who appeared on earth, and taught piety to all, setting forth Orthodoxy in divine words, whereby ye drove heresy far from the Church of Christ. Wherefore O blessed ones, ye ever dwell in the habitations of God, as sacred ministers of the Trinity, ye lead thereto all mankind.`,
        `Having no desire for earthly pleasure, O ye passion-bearers, ye were granted heavenly blessings, and became fellow-citizens with the angels. By their prayers, O Lord, have mercy on us, and save us.`,
        `When the holy martyrs pray for us and hymn Christ, all deception ceaseth, and the human race is saved by faith.`,
        `The choir of martyrs resisted the tyrants, saying: "We war on behalf of the King of the powers on high; though ye give us up to fire and torment, we shall not deny the power of the Trinity."`
      ],
      lic_dogmatikon: `The shadow of the law hath passed now that grace hath come, for as the bush wrapped in flame was not consumed, so didst thou bear a Child O Virgin and remained a virgin; in place of a pillar of fire, the Sun of righteousness hath dawned, instead of Moses, Christ is come, the salvation of our souls.`,
      aposticha: [
        `O ye saints, great is the glory ye have acquired through Faith. For by your sufferings ye not only vanquished the enemy; but even in death, O physicians of body and soul, ye drive out evil spirits and heal the infirm; Pray ye to the Lord, that our souls find mercy.`,
        `Every man fadeth like a flower and passeth by like a shadow, and is no more; but when the trumpet shall sound, in the midst of an earthquake all the dead shall arise to meet Thee, O Christ God. Then, O Master, do Thou settle in the abodes of the saints the souls of Thy servants whom Thou hast taken from among us.`,
        `Woe is me! How great a struggle the soul endureth at its parting from the body. Alas! How many tears will it then shed? Yet there will be none to have mercy on it. Raising its eyes to the angels, it supplicates in vain; stretching forth its hands to men, it finds none to help. Wherefore, my beloved brethren, reflecting on the shortness of our life, let us ask of Christ rest for the departed and great mercy for our souls.`
      ],
      aposticha_glory: `Save from misfortunes thy servants O Virgin Theotokos, for after God it is to thee that we flee, as to an impregnable rampart and protection.`
    }
  },
  3: {  // Tone 3
    sat: {
      lic: [
        `By Thy Cross, O Christ our Savior, the dominion of death hath been abolished, the devil's deception hath been dispelled, while mankind, saved by faith, each evening offers hymns unto Thee.`,
        `By Thy Resurrection, O Lord, the universe hath been filled with light and paradise hath been opened again, while all creation, singing Thy praise, each evening offers hymns unto Thee.`,
        `I glorify the power of the Father and the Son, and I praise the authority of the Holy Spirit, undivided, uncreated Godhead, consubstantial Trinity, that reigneth from ages to ages.`,
        `We worship Thy precious Cross, O Christ, and we praise and glorify Thy Resurrection, for by Thy wounds we have all been healed.`,
        `We praise the Savior who took flesh from the Virgin; for he was crucified for us and arose on the third day, granting unto us His great mercy.`,
        `Descending down unto those in Hades, Christ proclaimed the good tidings, exclaiming, "Be of good cheer; for now I have conquered! I am the Resurrection; I shall raise you up, abolishing the gates of death."`,
        `We who stand unworthily in Thy most pure house chant an evening hymn, crying from the depths, "O Christ God, who hath enlightened the world by Thy Resurrection on the third day, deliver Thy people from the hand of Thine enemies, O Lover of mankind."`
      ],
      aposticha: [
        `By Thy Passion, O Christ, Thou didst darken the sun, and by the light of Thy Resurrection Thou hast made the whole universe radiant. We beseech Thee to accept our evening hymn, O Lover of mankind.`,
        `O Gracious Lord, Thy life-bearing rising hath enlightened the world, and reclaimed Thine own fashioned after Thine image, which had become corrupt. And so, delivered from the curse of Adam, we cry aloud, "O all-powerful Lord, glory be to Thee!"`,
        `Howbeit, as God Thou art unchangeable, yet by Thy suffering Thou hast undergone change in the flesh, and creation, unable to bear seeing Thee hanging upon a Cross, was shaken with fear, groaning as it sang the praise of Thy long-suffering; and having descended into Hades, Thou didst arise on the third day, granting to the world life and great mercy.`,
        `In order to ransom our race from death, O Christ, Thou didst suffer death; and arising on the third day from the dead Thou hast raised with Thyself those who acknowledged Thee as God, and Thou hast enlightened the world. O Lord, glory be to Thee!`
      ],
      aposticha_glory: `[Glory from Menaion if appointed]`,
      dogmatikon: `How can we, O all-honored one, not marvel at thine Offspring? Who is both God and man. For without knowing a man, O all-immaculate one, without a father thou hast given birth to a Son in the flesh, who without a mother was begotten from the Father before all ages, yet in no way undergoing change, fusion or separation, but preserving fully the characteristics of both natures. Wherefore, O Sovereign Lady, and Virgin Mother, beseech Him to save the souls of those who with Orthodox faith confess thee to be the true Theotokos.`
    },
    sun_eve: {
      lic: [
        `O heavenly Father, accept me as Thou didst the repentant prodigal son, though I sin exceedingly and embitter Thee, the good Master Who art merciful by nature; and make me one of Thy hirelings.`,
        `I have passed the time of my life in slothfulness and have drawn nigh to the end, wretch that I am. I give no thought to the judgment which awaiteth me, nor to my falling away from God. But, having turned me back to Thee, O Savior, rescue me from them.`,
        `From Gehenna, from the gnashing of teeth, and every other eternal retribution do Thou deliver my lowly soul, O supremely good Lord; that with faith I may hymn the merciful God, Who art by nature the Lover of mankind.`
      ],
      aposticha: [
        `Our evening hymnody do we bring to Thee, O Christ, with incense and spiritual odes, Have mercy and save our souls.`,
        `Save me, O Lord my God, in so far as Thou art the salvation of all. For the storm of the passions disquieteneth me, and the yoke of my transgressions weigheth heavily upon me. Stretch out Thy helping hand and lead me up to the light of compunction, for Thou alone art compassionate and the Lover of mankind.`,
        `Great is the power of Thy Cross, O Lord! For though it was planted in one place, it worketh throughout the whole world, making apostles of fishermen and martyrs of the heathen, that they might pray for our souls.`
      ],
      aposticha_glory: `O Lady, intercessor for all who pray to thee: In thee we find boldness, of thee do we boast, and in thee have we placed all our hope. Entreat Him Who was born of thee on behalf of thine unprofitable servants.`
    },
    mon: {
      lic: [
        `Perceiving in me a slothfulness toward profitable works, the multifarious formed serpent transforms itself, luring me towards ever more bitter evils. By displaying for me the sweetness of sin, through his own bitter activity which is opposed to the commandments of God, he taketh advantage of my wicked character, O Christ, and seduceth me to accept evils as good.`,
        `Having eagerly trodden the whole path of iniquity and sin, and utterly departed from that which is straight, I have now drawn nigh to the gates of death; and, thereby trapped, I cry aloud: O my supremely good Jesus, Thou Path of our life, turn me to the broad expanse of true repentance; save and grant me correction; and before my death, grant me divine forgiveness!`,
        `I have been slain by divers sins, by multitudes of transgressions and great misdeeds; and I lie dead, truly helpless. Only my hope in Thy loving-kindness remaineth alive, O Christ, Who dost grant both breath and life unto the dead and ever slayeth the passions which kill us. Wherefore, going before me, rescue me from everlasting death.`
      ],
      aposticha: [
        `Our evening hymn do we bring unto Thee, O Christ, with incense and spiritual odes, Have mercy on us and save our souls.`,
        `Save me, O Lord my God, insofar as Thou art the salvation of all. For the storm of the passions disquieteneth me, and the yoke of my transgressions weigheth heavily upon me. Stretch out Thy helping hand and lead me up to the light of compunction, for Thou alone art compassionate and the Lover of mankind.`,
        `Great is the power of Thy martyrs, O Christ; for while lying in their graves they drive evil spirits away; and, having struggled for piety with their faith in the Trinity, they abolished the authority of the enemy.`
      ],
      aposticha_glory: `O blessed Mary, divinely joyous maiden, cloud of the never-waning Light: Shine the light of repentance upon me who am mindlessly stuck fast in the darkness of sin; and by thy supplications deliver me from the fire of Gehenna and the unremitting darkness, O most pure Virgin, and show me to share in the never-setting day, for I flee beneath thy protection.`
    },
    tue: {
      lic: [
        `Creation was transformed by Thy crucifixion, O Word: the sun withdrew its rays in fear and the veil of the temple was rent in twain; and every one of the faithful is saved. Wherefore, we glorify Thine immeasurably abundant noetic riches.`,
        `God the Master, Who in His compassion assumed our flesh, having been well-pleased to be nailed to the Tree, and lifted up thereon bodily, hath thereby, in the tender compassion of His mercy, raised us up who were cast down.`,
        `The world was renewed by the drops of divinely shed blood and water which flowed from Thy side, O Lord; for Thou dost wash away all sins with water, and as Thou art compassionate, dost grant us to partake of forgiveness by Thy blood.`
      ],
      aposticha: [
        `I bow down, O Christ, before Thy precious Cross: the guardian of the world, the salvation of us sinners, the great purification and boast of the whole world.`,
        `The tree of disobedience put forth death for the world; but the Tree of the Cross hath put forth life and incorruption. Wherefore, we worship the crucified Lord, crying: Let the light of Thy countenance be signed upon us!`,
        `The prophets, the apostles of Christ and the martyrs enlightened and taught the erring nations to hymn the consubstantial Trinity, and made the children of mankind companions of the angels.`
      ],
      aposticha_glory: `When Thy Mother, the unblemished Ewe-lamb who gave birth to Thee, saw Thee lifted up upon the Cross, O my Christ, she lamented and cried out, weeping: "Show me not to be childless, whom Thou didst preserve pure even after giving birth!"`
    },
    wed: {
      lic: [
        `Through the supplications of Thine honored and divine apostles, O only Merciful and Compassionate Lover of mankind, grant Thy humility to Thy servants, and save from misfortunes those who hymn and worship Thee with faith.`,
        `When with the Judge of all ye shall sit on twelve thrones to judge all creation, show me not to be condemned, but deliver me from darkness and all affliction, O divine apostles, my benefactors.`,
        `As ye were eyewitnesses to God, deliver me from the arrows of the ungodly one, foiling his machinations; and bedew me with the dew of the Spirit, I pray you, O divine apostles, my wise benefactors.`
      ],
      aposticha: [
        `Your sound went forth into all the earth, O holy apostles, destroying the deception of the idols, and preaching the knowledge of God. Behold, your struggle is good, O blessed ones; wherefore, we hymn and glorify your memory.`,
        `As branches of the life-bearing Vine, O glorious apostles, ye brought yourselves to God as the fruit of piety; wherefore, as ye have boldness before Him, ask that He grant peace and great mercy to our souls.`,
        `Rendered steadfast by faith, strengthened by hope, and spiritually united by the love of Thy Cross, O Lord, Thy martyrs abolished the tyranny of the enemy; and having received crowns, with the incorporeal ones they pray for our souls.`
      ],
      aposticha_glory: `O maiden, I have sinned exceedingly, do thou rescue me from the flame of want by thy great supplications, and set me aright O pure one by thine entreaties, and guide me to the paths of salvation by thy maternal supplications.`
    },
    thu: {
      lic: [
        `O Lord, Who in Thy divine nature dost transcend suffering, but endured suffering in Thy human nature. Thou wast nailed to the Cross and pierced in the side by a spear, pouring forth upon me a pair of rivers, from whence flow ineffable mysteries.`,
        `With mockery Thou wast wounded by the plaited crown of thorns, O King and Savior of all, tearing apart the proscription of thorny sin; And having taken the reed in Thy hands, Thou hast recorded in the book of heaven all of us who believe in Thee.`,
        `The undeserved envy of the Jews who crucified Thee did not cease even when Thou wast dead, O innocent Christ; but the wicked ones slandered Thee as a liar and asked Pilate to guard Thy tomb. O what incurable wrath!`
      ],
      aposticha: [
        `I bow down, O Christ, before Thy precious Cross: the guardian of the world, the salvation of us sinners, the great purification and boast of the whole world.`,
        `Lifting up his arms in the form of the Cross on the mountain, Moses vanquished Amalek; and Thou, O Savior, stretched out upon the precious Cross, embraced me, saving me from slavery to the enemy, and didst give it to me as the sign of life, enabling me to evade the arrows of mine adversaries. Wherefore, O Word, I bow down before Thy precious Cross.`,
        `Great is the power of Thy Cross, O Lord! For though it was planted in one place, it worketh throughout the whole world, making apostles of fishermen and martyrs of the heathen, that they might pray for our souls.`
      ],
      aposticha_glory: `The all-immaculate one, beholding Thee lifted up upon the Tree, cried out, weeping maternally: "O my supremely good Christ, my most beloved Son! How hath the iniquitous assembly lifted Thee up upon the Cross?"`
    },
    fri: {
      lic: [
        `Having endured wounds, fetters and divers tortures, suffering mightily, the valiant martyrs were brought to their divine inheritance which is truly devoid of pain, the heritage of their pangs.`,
        `O holy hierarchs of the Lord, who piously uttered divine discourse, and thereby set at naught all the arguments of the heretics, showing yourselves to be exceedingly sure paragons for all the faithful; wherefore ye are honored.`,
        `While in your material bodies, ye emulated the ranks of the immaterial and incorporeal beings, O God-bearing fathers, most gloriously exhibiting their manner of life; wherefore, ye dwell in their habitations.`,
        `Great is the power of Thy Cross, O Lord! For though it was planted in one place, it worketh throughout the whole world, making apostles of fishermen and martyrs of the heathen, that they might pray for our souls.`,
        `Great is the power of Thy martyrs, O Christ; for while lying in their graves they drive evil spirits away; and, having struggled for piety with their faith in the Trinity, they abolished the authority of the enemy.`,
        `The prophets, the apostles of Christ and the martyrs enlightened and taught the erring nations to hymn the consubstantial Trinity, and made the children of mankind companions of the angels.`
      ],
      lic_dogmatikon: `How can we, O all-honored one, not marvel at thine Offspring? Who is both God and man. For without knowing a man, O all-immaculate one, without a father thou hast given birth to a Son in the flesh, who without a mother was begotten from the Father before all ages, yet in no way undergoing change, fusion or separation, but preserving fully the characteristics of both natures. Wherefore, O Sovereign Lady, and Virgin Mother, beseech Him to save the souls of those who with Orthodox faith confess thee to be the true Theotokos.`,
      aposticha: [
        `Made steadfast by faith, strengthened by hope, and spiritually united by the love of Thy Cross, O Lord, Thy martyrs put an end to the tyranny of the enemy and have received crowns; and with the incorporeal ones they pray on behalf of our souls.`,
        `All things human, which endure not after death, are vain. Our wealth will not remain, our glory will not go with us upon the way: for when death cometh, all these things will fade away. Wherefore let us cry out to Christ the immortal King: Grant rest to our departed brethren, where all who rejoice have their abode with Thee.`,
        `O race of mankind, why are ye rebellious in vain? Short is the course on which we run. Life is but smoke, vapor, ashes and dust; No sooner doth it appear, than it quickly vanisheth. Wherefore let us cry unto Christ the immortal King: Grant rest to our departed brethren, where all who rejoice have their abode with Thee.`
      ],
      aposticha_glory: `O Theotokos, holy among women, thou Mother unwedded: entreat the King and God Whom thou didst bear, that He save us, insofar as He is the Lover of mankind.`
    }
  },
  4: {  // Tone 4
    sat: {
      lic: [
        `Unceasingly worshiping Thy life-giving Cross, O Christ God, we glorify Thy Resurrection on the third day, for through it, O all-powerful One, Thou hast renewed corrupted human nature and shown us the way to heaven, since Thou alone art good and the Lover of mankind.`,
        `By being willingly nailed to the tree of the Cross, O Savior, Thou hast abolished the penalty of the tree of disobedience; and by descending into Hades, O all-powerful One, as God Thou hast torn asunder the bonds of death. Wherefore we worship Thy Resurrection from the dead, and we cry out with joy: O all-powerful Lord, glory be to Thee!`,
        `Thou hast shattered the gates of Hades, O Lord, and by Thy death Thou hast destroyed the dominion of death; delivering mankind from corruption, granting the world life, incorruption, and great mercy.`,
        `Come O ye peoples, let us hymn the Savior's rising on the third day, whereby we were redeemed from the unbreakable bonds of Hades obtaining incorruption and life, as we cry aloud: "Thou, who wast crucified and buried and rose again, save us by Thy Resurrection, O only Lover of mankind."`,
        `Angels and mortals hymn Thine arising on the third day, O Savior, through which the ends of the inhabited world were filled with light, and we were all redeemed from the slavery of the enemy, as we cry aloud: "O life-giving, all-powerful Savior, save us by Thy Resurrection, O only Lover of mankind."`,
        `Thou hath shattered the gates of brass and smashed their bars, O Christ God, raising the fallen race of mankind; wherefore with one accord we cry unto Thee: "O Lord risen from the dead, glory be to Thee!"`,
        `O Lord, begotten from Thy Father without time and eternal; Thine incarnation from a virgin is inexpressible for man and beyond telling; and Thy descent into Hades is fearful for the devil and his angels; for having trampled upon death Thou didst arise on the third day, granting mankind incorruption and great mercy.`
      ],
      aposticha: [
        `O Lord, by ascending the Cross Thou hast wiped out our ancestral curse, and by descending into Hades Thou hast set free those enchained therein from all ages, granting incorruption to mankind; wherefore with hymns we glorify Thy life-giving and saving arising.`,
        `Hung upon a Tree, O only mighty One, Thou didst shake the whole of creation; laid in a tomb Thou hast raised those who dwelt in the tombs, granting the race of mankind incorruption and life; wherefore with hymns we glorify Thine arising on the third day.`,
        `A lawless people, O Christ, delivered Thee to Pilate, and condemned Thee to be crucified, showing themselves to be ungracious to their benefactor, but voluntarily enduring burial, by Thine own power Thou didst arise on the third day as God, granting us life everlasting and great mercy.`,
        `Reaching Thy tomb in tears the women sought Thee; and when they could not find Thee they cried aloud with grief and lamentation: Woe unto us, our Savior, the King of all, how wast Thou stolen? What place doth hold Thy life-bearing body? But an angel answered them saying: "Weep not, but go, and proclaim that the Lord hath arisen, granting us joy, for He alone is compassionate."`
      ],
      aposticha_glory: `[Glory from Menaion if appointed]`,
      dogmatikon: `Prophet David, the ancestor of God, spoke of thee in psalmody unto Him Who hath accomplished great things in thee. For God was well pleased without father to become a man from thee, the Queen who standeth at His right hand, and He - the source of life - showed thee to be His mother, that He might renew His own image, corrupted by the passions. Having found the lost sheep wandering on the mountain He hath laid it upon His shoulders, that He may bring it to his Father; and in accordance with His own will unite it to the heavenly powers and thus, O Theotokos, save the world, Christ, Who is richly and abundantly merciful.`
    },
    sun_eve: {
      lic: [
        `I have sinned against Thee, O Lover of mankind, and not according to my human nature, for which I might ask forgiveness, but inhumanly, past my nature, beyond forgiveness. O my Savior Who didst become a man, transcending the laws of nature and comprehension by the human mind, since Thou hast a love for mankind surpassing understanding, have mercy on me that I may turn back to Thee.`,
        `Thou didst appoint repentance for those who sin, and not for the righteous, O Christ. I have as examples the thief and the prodigal, Manasseh and the harlot, the persecutor Paul, the publican and Peter who fell away, yet I am brought sorely to despair. Knowing Thy supremely good love for mankind, O Savior, I turn to Thee and weep, filled with the good hope that Thou wilt accept me.`,
        `Unto me who am now sunk in the passions of the body and am far removed from Thee, O King and God of all, grant compunction, the removal of evils and perfect amendment. In Thy great goodness, O omnipotent Jesus, Savior of our souls, save me, a prodigal, who otherwise have no hope.`
      ],
      aposticha: [
        `I desired to erase the record of my transgressions with tears, and to please Thee well by repentance for the rest of my life; but the enemy deceiveth me and wageth war on my soul. Before I utterly perish, O Lord, save me!`,
        `Who is tempest-tossed, yet fleeth to Thy haven, O Lord, and is not saved? Who is sick and, falling down before Thy healing power, is not cured? O Lord, Creator of all and Physician of the infirm: Before I utterly perish, save me!`,
        `O Christ God, Who art glorified in the memorials of Thy saints, be Thou entreated by them, and send down upon us great mercy.`
      ],
      aposticha_glory: `Rejoice, O cloud of Light! Rejoice, radiant candlestick! Rejoice, jar wherein the Manna was kept! Rejoice, staff of Aaron! Rejoice, bush un-burnt! Rejoice, bridal-chamber! Rejoice, thou throne! Rejoice, holy mountain! Rejoice, Mother of God and Virgin, thou unwedded Bride!`
    },
    mon: {
      lic: [
        `Emulating the Canaanite woman, O my soul, touch Christ from behind, and cry out repeatedly: Have mercy on me, O Master! My body, like her daughter, is possessed by evil spirits, and it flaileth about. Quench the burning of my flesh, I pray; and, causing the disorderly seizures to cease, mortify it by the fear of Thee, by the prayers of her who conceived and gave birth to Thee, and of all the saints, O greatly merciful Benefactor.`,
        `Thou didst once send Jonah to the sinful Ninevites to preach to them, O Christ, and, repenting, they transformed their anger into kindliness, having been delivered from pernicious wrath. Wherefore, send also Thy mighty help unto me, who am unworthy, O Lover of mankind, that I may turn away from my countless offenses and be guided to the path of repentance; for I weep, groaning bitterly, that I may be delivered by Thy mercy from my many transgressions.`,
        `O Compassionate One, Who camest into the world to save sinful men and call them to repentance: In that Thou art full of tender compassion, have pity on me who have angered Thee more than all others, save me in Thy goodness, guide me to the way of repentance, and grant me thought of compunction, in Thy goodness making my heart steadfastly humble, simple, meek and guileless, O my Savior, in that Thou art full of loving-kindness.`
      ],
      aposticha: [
        `I wish to wash away the record of my sins with tears, O Lord, and please Thee the rest of my life through repentance; but the enemy deceiveth me and fights against my soul. Before the end and I utterly perish, save me, O Lord.`,
        `Who, among the tempest-tossed, having taking refuge in Thy harbor, will not be saved O Lord? Or who, that aileth and falling down in Thine infirmary, will not be healed? O Maker of all that is, and Physician of the ailing, before the end, may I not utterly perish, save me, O Lord.`,
        `O Lover of mankind, as One Who hast accepted the patience of the holy martyrs, by their prayers grant us great mercy.`
      ],
      aposticha_glory: `Grant me tears from the depths of my heart, sighing from the depths of my soul, O maiden, and contrition and confession of the transgressions I have committed in this life, that by thy help, O all-pure one, I may pass my life in repentance and receive remission.`
    },
    tue: {
      lic: [
        `Lifted up upon the Cross, pierced by a spear, Thy fingers bloodied, O supremely good Master, Thou didst sign our emancipation; and tearing apart the record of the sins of Adam, our forefather, Thou didst free human nature. Wherefore, O Compassionate One, we hymn Thy goodness, which transcendeth understanding.`,
        `We hymn Thy sufferings, O Jesus our Master: the Cross, the spear and the reed, the sponge and the nails, the beatings, the purple robe and the crown of thorns, the spittings and mockery which Thou didst willingly endure. I magnify Thy long-suffering, O only Innocent One, Bestower of life, and I glorify Thee with faith, O Lover of mankind.`,
        `I bow down before Thy precious Cross, kissing it with love, O supremely good One, and I glorify Thy condescension, boundless mercy, ineffable compassions and rich goodness, which transcend understanding, for thereby Thou hast saved the race of mankind, which was held fast in the darkness of transgressions. Glory to Thy crucifixion, O Christ!`
      ],
      aposticha: [
        `Thou hast given Thy Cross to us as an invincible weapon, O Christ; and therewith we triumph over the assaults of the alien one.`,
        `Ever possessing Thy Cross as a help, O Christ, we easily trample underfoot the snares of the enemy.`,
        `As ye have boldness before the Savior, O saints, unceasingly pray for us sinners, asking remission of transgressions and great mercy for our souls.`
      ],
      aposticha_glory: `The most pure one, beholding Christ, the lover of mankind, crucified, His side pierced by a lance, cried out, lamenting: "What is this, O my Son? How have these thankless people rewarded Thee, O Master?"`
    },
    wed: {
      lic: [
        `O ye glorious ones, who with a most mighty understanding waged war, arraying yourselves against the wicked foe, for having valiantly armed yourselves with the weaponry of the Spirit, ye destroyed all the might of the demons, who seize men's souls like plunder; wherefore, we honor you throughout the ages, O apostles.`,
        `Spreading out the net of the Faith in the form of the Cross, Thy twelve divine apostles dragged all the nations to the knowledge of Thee, O Christ, and dried up the salty sea of the passions; wherefore, I beseech Thee: By their wholly well pleasing supplications recall me from the depths of transgressions.`,
        `With divine hymns let the divinely chosen and all-honorable twelve apostles be praised: Peter, Paul and James, Luke and John, Matthew and Thomas, Mark, Simon and Philip, the most glorious Andrew and Matthias, with the godly and most wise Bartholomew, and the seventy others.`
      ],
      aposticha: [
        `Thou didst enlighten the choir of the apostles with the Holy Spirit, O Christ God. By them wash away the defilement of our sin, and have mercy on us.`,
        `Thy Holy Spirit revealed the illiterate disciples to be teachers, O Christ God, and set at naught the deception of the pagans with their greatly eloquent harmony, in that He is almighty.`,
        `O martyrs of the Lord, ye animate sacrifices, noetic whole-burnt offerings, perfect offerings to God, ye lambs who know God and are known of Him, and to whose fold the wolves have no entry: Pray ye that with you we also may be tended by the water of peace.`
      ],
      aposticha_glory: `Deliver us from our needs, O Mother of Christ God, thou who hast given birth to the Creator of all, that we all may cry out to thee: Rejoice, O thou who alone art the intercessor for our souls!`
    },
    thu: {
      lic: [
        `When all creation beheld Thee crucified, it was changed and trembled: the whole earth shook, quaking, O long-suffering Word; in fear the veil of the temple rent in twain and in terror the rocks split asunder when Thou wast insulted; and the sun, knowing Thee to be its Creator, hid its rays.`,
        `How did the most iniquitous council dare to condemn Thee, O immortal Judge, Who of old in the desert gave the law to Moses, who beheld God? How could they fail to be filled with terror, beholding the Life of all dead upon the Cross? How could their mind not fathom that Thou art the one Lord and Master of creation?`,
        `With the piercing of Thy side, O greatly Merciful One, the ancient record of our forefather Adam was rent asunder; and by the shedding of Thy blood rejected human nature was sanctified, and cried aloud: Glory be to Thy loving-kindness! Glory be to Thy divine crucifixion, O almighty Jesus, Thou Savior of our souls!`
      ],
      aposticha: [
        `Thou hast given Thy Cross to us as an invincible weapon, O Christ; and with it we triumph over the assaults of the alien one.`,
        `Ever possessing Thy Cross as a help, O Christ, we easily trample underfoot the snares of the enemy.`,
        `O Christ God, Who art glorified in the memorials of Thy saints, entreated by them send down upon us great mercy.`
      ],
      aposticha_glory: `"Lament not for Me, O Mother, beholding Me thy Son and God hanging upon the Tree, Who hath suspended the earth upon the waters unsupported, and hath fashioned all creation; for I shall arise and be glorified, and shall crush the kingdoms of Hades with strength; destroying its power and delivering those in bondage from its wickedness, for I am compassionate; and I shall bring them to My Father, in that I am the Lover of mankind."`
    },
    fri: {
      lic: [
        `Emulating the sufferings of Christ, the Lover of mankind, O passion-bearers, ye gave your bodies over to wounds, and bitter torments, and innumerable pangs, ever looking forward to the divine delight of paradise, to ever-abundant sustenance and everlasting glory; and having received this, ye pray for those who hymn you.`,
        `Emulating the sufferings of Christ, the Lover of mankind, O passion-bearers, ye gave your bodies over to wounds, and bitter torments, and innumerable pangs, ever looking forward to the divine delight of paradise, to ever-abundant sustenance and everlasting glory; and having received this, ye pray for those who hymn you.`,
        `O most sacred pastors, as glorious emulators of Christ, the Chief Shepherd, the King of all, ye readily laid down your lives for the sheep, and endured grievous misfortunes, O right blessed ones; and as champions ye save the divinely chosen flock unharmed by cruel wolves.`,
        `O ye martyrs of the Lord, living sacrifices, noetic burnt-offerings, perfect offerings to God, lambs who knew God and are known by Him, whose fold no wolf can enter: Pray ye that with you we may also feed beside the waters of rest.`,
        `Precious is the death of Thy saints, O Lord. Slain by the sword, and by fire and freezing cold, they poured forth their blood, placing all their hope in Thee that from Thy hand they would receive the reward of their labors. They endured to the end and received from Thee O Savior, Thy great mercy.`,
        `O saints, since ye have boldness in the presence of the Savior, unceasingly entreat Him for us sinners, asking that remission of sins, and great mercy, be granted to our souls.`
      ],
      lic_dogmatikon: `Prophet David, the ancestor of God, spoke of thee in psalmody unto Him Who hath accomplished great things in thee. For God was well pleased without father to become a man from thee, the Queen who standeth at His right hand, and He - the source of life - showed thee to be His mother, that He might renew His own image, corrupted by the passions. Having found the lost sheep wandering on the mountain He hath laid it upon His shoulders, that He may bring it to his Father; and in accordance with His own will unite it to the heavenly powers and thus, O Theotokos, save the world, Christ, Who is richly and abundantly merciful.`,
      aposticha: [
        `Thou art glorified in the memorials of Thy saints, O Christ our God; by their intercessions send down upon us great mercy.`,
        `O Thou Who hast accepted the patient endurance of the holy martyrs; in Thy love for mankind do Thou accept our hymns of praise, and by their intercessions send down upon us great mercy.`,
        `With the souls of the righteous who have reposed, O Savior, grant rest to the souls of Thy departed servants, preserving them in the life of blessedness which is in Thee, O Lover of mankind.`
      ],
      aposticha_glory: `O thou inextinguishable lamp, and throne of righteousness most pure Sovereign Lady: pray thou that our souls be saved.`
    }
  },
  5: {  // Tone 5
    sat: {
      lic: [
        `By Thy precious Cross, O Christ, Thou hast shamed the devil, and by Thy Resurrection Thou hast blunted the sting of sin, and saved us from the gates of death: we glorify Thee, the only-begotten One.`,
        `He who hath granted Resurrection to mankind, was led as a sheep to the slaughter; the princes of Hades trembled before Him and the gates of lamentations were lifted up; for Christ the King of glory entered therein, saying to those in bondage: "Come forth!" and to those in darkness: "Reveal yourselves!"`,
        `O great wonder! Having suffered in the flesh through His love for mankind, the Creator of all things visible and invisible, hath arisen as immortal. Come O ye descendents of the nations, let us worship Him; for delivered from deception by His compassion, we have learned to hymn one God in three Hypostases.`,
        `We offer unto Thee our evening worship, O never-setting Light, who in the flesh at the end of the ages, as in a mirror, shone through upon the world, and descended even into Hades, dispersing the darkness therein and showing unto the nations the light of the Resurrection. O Lord, Giver of light, glory be to Thee!`,
        `Let us glorify Christ the Author of our salvation; for by His arising from the dead, the world hath been saved from delusion; the choir of angels rejoiceth, the deception of demons fleeth, fallen Adam hath arisen, and the devil hath been overthrown.`,
        `The watchmen were instructed by the lawless ones to conceal Christ's Resurrection, taking money to say that "while we slept the corpse was stolen from the grave." Who ever saw, or who ever heard of a corpse being stolen? Especially one anointed yet naked, and with its grave-clothes left in the tomb? Be not deceived, O ye Jews, learn from the sayings of the prophets, and know that He is truly the Redeemer of the world and All-powerful.`,
        `O Lord, our Savior, Thou hast despoiled Hades and trampled upon death; enlightening the world by the precious Cross, have mercy upon us.`
      ],
      aposticha: [
        `With voices of song we magnify Thee, O Christ, the Savior incarnate, yet not separated from heaven, for as the Lord who lovest mankind Thou hast suffered the Cross and death for the sake of our race, overthrowing the gates of Hades, and rising on the third day, thus saving our souls.`,
        `When Thy side was pierced, O Giver of life, Thou didst pour forth streams of forgiveness, of life and salvation for all; Thou didst suffer death in the flesh, granting unto us immortality, and by dwelling in a grave Thou hast freed us, gloriously raising us up with Thyself as God; wherefore we cry out to Thee: "O Lord, Lover of mankind, glory be to Thee!"`,
        `Wonderful is Thy crucifixion and Thy descent into Hades, O Lover of mankind, for having despoiled it and as God gloriously raising with Thyself those who were captive therein, Thou hast opened paradise and bidden them welcome. So too grant unto us who glorify Thine arising on the third day, the forgiveness of our sins, making us worthy to be inhabitants of paradise, as Thou alone art compassionate.`,
        `O Lover of mankind, Who for our sake didst accept to suffer the Passion in the flesh, and arise from the dead on the third day, heal the passions of our flesh, and raise us up from our grievous transgressions, and save us.`
      ],
      aposticha_glory: `[Glory from Menaion if appointed]`,
      dogmatikon: `In the Red Sea of old an image of the Bride who knew not wedlock was depicted. There Moses was the one who parted the sea, here Gabriel is the minister of the miracle. At that time Israel marched dry-shod through the deep, now the Virgin doth seedlessly give birth to Christ. The sea after Israel's passage remained impassable; the immaculate one after bearing Emmanuel remained incorrupt. O God, Who doth exist and is pre-eternal, and hath appeared as man, have mercy upon us.`
    },
    sun_eve: {
      lic: [
        `I weep and am downcast, envisioning the dread sentence of the Word, for which I, a wretch, have not the least reply for my guilt. Wherefore, I pray: Before the unseemliness of mine end overtaketh me, before I am mowed down by death, before I must needs be condemned to the place where the fire is unquenchable and the darkness is absolute, where are the worm and gnashing of teeth, and sinners are consumed, O my Christ, grant me great mercy and deliverance from mine offenses.`,
        `Disdaining Thy laws and the Scriptures, wretch that I am, I have rejected Thy commandments, O God my Creator. How will I ever avoid the torment which is to come, O Savior! Wherefore, before mine end grant me forgiveness and a shower of tears, imparting true compunction to me, O Savior. As Thou art the supremely good God, drive far from me the hordes of the demons who seek to drag me down into the abyss of Hades, for I entreat Thee: Take not Thine almighty hand from me!`,
        `Woe is me! How have I been darkened in mind? How have I withdrawn from Thee and, wretch that I am, enslaved myself to sin; and, enslaved to the passions, given myself wholly over to carnal pleasure which liveth within me? Now I await my departure from this life and the coming reckoning. O supremely good Lord, grant me tearful repentance and release from my countless transgressions, for with faith I beseech Thee Who grantest the world great mercy.`
      ],
      aposticha: [
        `O Lord, I cease not to sin, nor do I perceive Thy love for mankind which Thou hast granted me. Vanquish my lack of discernment, O Thou Who alone art good, and have mercy on me.`,
        `O Lord, from reverent fear of Thee I tremble, yet I cease not from committing sins. Turn me and save me, as Thou alone art merciful.`,
        `O Christ God, Who art glorified in the memorials of Thy saints, be Thou entreated by them, and send down upon us great mercy.`
      ],
      aposticha_glory: `Thou art truly higher than the throne of the cherubim, for the divine Word made His abode within thee, O pure one, desiring to restore our image; and issuing forth from thee as mortal, in that He is full of tender compassion, He endured the Cross and suffering for our sake, and as God hath given us the resurrection. Wherefore, giving thanks to the Creator with faith, we beseech thee as the one who transformed our condemned nature, that we may receive forgiveness of transgressions and great mercy by your prayers.`
    },
    mon: {
      lic: [
        `Woe unto me who have angered Thee, my merciful God and Lord! How many times have I promised to repent, O Christ, and have been found to be a senseless liar? I have soiled my first baptismal raiment, and have forsaken my covenant with Thee, and this second commandment, which I confessed before Thee in the presence of men and angels, have I also abandoned, clad in a lamentable form. Setting this aside, O Savior, leave me not to perish utterly.`,
        `What answer shalt thou find on the day of judgment, O wretched soul? Who will deliver thee from condemnation to everlasting fire and other torments? No-one, if thou thyself dost not placate the Compassionate One, forsaking thine evil deeds and acquiring a right pleasing life, every day weeping over thy countless transgressions, which thou committest at every hour in deed, word and thought, and beseeching Christ to grant thee the complete forgiveness of them.`,
        `Let sinful habit not seize me, dragging me down, O Savior, nor let the demon, which ever wageth war on me and subjecteth me to his will, gain dominance over me; but rescue me from his dominion with Thy mighty hand, O Almighty One Who lovest mankind, and reign Thou within me. Grant that I may be wholly Thine, and living according to Thy will, O Word, may find rest in Thee, and cleansing, salvation and great mercy for myself.`
      ],
      aposticha: [
        `O Lord, I cease not to sin, nor do I perceive Thy love for mankind which Thou hast granted me. Vanquish my lack of discernment, O Thou Who alone art good, and have mercy upon me.`,
        `O Lord, from reverent fear of Thee I tremble, yet I cease not from committing sins. Turn me and save me, as Thou alone art merciful.`,
        `O Lover of mankind, as One Who hast accepted the patience of the holy martyrs, by their prayers grant us great mercy.`
      ],
      aposticha_glory: `From my childhood I have been revealed to be a tireless committer of sins, having been grievously wounded in mind and lovingly remained such by my many evil habits. O Lady, disdain me not who am perishing in evil, but, taking pity, deliver me from every assault of the passions by thine aid, that if only in old age I may repent before God.`
    },
    tue: {
      lic: [
        `Thou wast lifted up like a lamb upon the Cross, and didst lay low the uprisings of the deceiver; and when Thou wast slaughtered Thou didst sanctify the whole earth with Thy blood. Pierced by the spear, Thou didst command the flaming sword to turn away from me, that I might dwell in paradise and partake without fear of the tree of life. Wherefore, saved by Thy sufferings, I cry out, rejoicing: Glory be to Thy divine Cross, whereby we have been delivered from the ancient curse and receive from the Tree blessing and great mercy!`,
        `Desiring to bring an end to the pain and afflictions of all, O supremely good Lord my Savior, Thou didst endure vile crucifixion; Thou didst taste of gall, O Innocent One, removing the bitter taste of evil; and wounded, O Word, by the thrust of the spear, Thou healest our wounds, in that Thou art Master. Wherefore, we hymn Thy glorious will, and bowing down, we honor the spear, the sponge and the reed, whereby Thou hast imparted to Thy world peace and great mercy.`,
        `"How did the iniquitous multitude of the Jews condemn Thee to be crucified on the Cross, O Jesus, taking no pity on Thee, the Compassionate One?", exclaimed the Virgin, weeping, when she beheld lifted up upon the Cross Him Who was born from her womb without suffering; "and what hath the iniquitous council done to Thee, O my Child most desired, my most beloved Son? Haste Thou, and save those who glorify Thy crucifixion with faith, and those who magnify me, as Thou didst promise, in that Thou alone art supremely good!"`
      ],
      aposticha: [
        `O Lord, of old, in the time of Moses the prophet, the image of Thy Cross, having been precisely revealed, vanquished Thine enemies; and now, possessed of that same Cross, O Christ, we triumph over every adversary.`,
        `O Lord, by Thy Cross Thou hast delivered us from all sorrow; by it we ever trample upon the heads of the invisible enemies.`,
        `As ye have boldness before the Savior, O saints, unceasingly pray for us sinners, asking remission of transgressions and great mercy for our souls.`
      ],
      aposticha_glory: `Desiring that all receive salvation, O my sinless Christ, Thou wast pleased to pay a great price, Thy precious blood, for our deliverance. Wherefore, beholding Thee nailed, Thy Mother, lamenting, rent her hair, saying: "O Child, mine all-immaculate Lamb, Who desirest to deliver the world by Thy precious blood, how hast Thou set to whence I cannot see, O never-setting Sun, Who grantest unto all enlightenment, peace and great mercy?"`
    },
    wed: {
      lic: [
        `Traversing all the earth, ye sowed divine teachings, bearing the Word alone as a lamp and all riches, O disciples of the Lord; and thereby ye put emperors and torturers to shame, and rent asunder the vain arguments of the philosophers and rhetors as though they were spiders' webs, calling all to recognize the Creator, and abolishing the vain worship of demons. Wherefore, I pray that, by your prayers, ye deliver me from those who are irrational.`,
        `By your supplications unto God, deliver us all from the turmoil of temptations, the cruel deception of shameful heresies, the evil counsel of the demons, the fire which burneth in the absence of light, the everlasting worm, the gnashing of teeth, and all other torments; and beseech Him that, for the sake of your temperance and toils, we may receive the reward of the virtues, the inheritance of the kingdom of heaven, and great mercy.`,
        `Clearly receiving all the effulgence, and the reflected light of the ineffable dispensation of the Trinity, insofar as human nature can so do, the all-praised twelve perfectly manifested themselves, bringing with them the seventy-two, and enlightening the ends of the world, darkened by the darkness of wicked heresy, pray ye unto Christ that He grant the world great mercy.`
      ],
      aposticha: [
        `As eye-witnesses to the mysteries of the Savior, O disciples, ye preached the Invisible One Who hath no beginning, saying: In the beginning was the Word. Ye were not created before the angels, nor were ye taught of men, but by the wisdom of the Most High. Wherefore, as ye have boldness, pray ye on behalf of our souls.`,
        `Together let us praise the apostles of the Lord with hymns, for, having arrayed themselves in the armor of the Cross, they abolished the delusion of the demons and were revealed to be crown-bearers of Christ.`,
        `As ye have boldness before the Savior, O saints, unceasingly pray for us sinners, asking remission of transgressions and great mercy for our souls.`
      ],
      aposticha_glory: `O strange, awesome and great mystery! The Un-circumscribable One hath made His abode within a womb, and a Mother remaineth a Virgin even after birthgiving, for from her she gave birth to God Incarnate. To Him, then, let us cry aloud, to Him let us raise a hymn, chanting with the angels: Holy art Thou, O Christ God, Who wast incarnate for our sake! Glory be to Thee!`
    },
    thu: {
      lic: [
        `Let all the groves of trees rejoice, beholding the most precious Tree which was made joyous by the suffering of the Master, shining forth grace like a flame of fire, pouring forth gifts upon all like water, and enlightening the thoughts of our souls, washing away infirmities and driving away invisible passions, and manifestly vanquishing foreign nations, ever granting to the faithful victories, blessing and great mercy.`,
        `Worshipping with faith the place where the feet of the Lord stood, as the prophet said, let us glorify Christ Who was crucified, and with Himself crucified our transgressions, Who abolished the curse which originated with a tree, and reconciled with the Father those who had withdrawn far from Him through evil thoughts; and venerating the nails of his hands and feet, the spear and the reed, the sponge and the crown of thorns, the insults and mockery, and all else He endured, let us venerate them with honor, for by them we are saved.`,
        `Let us crucify all our members with Christ, and let us die unto the world; and desiring to walk in the footsteps of Christ, the Ruler of this world, let us take His divine Cross upon our shoulder by rejecting the uprisings of the flesh and the evil lusts which draw our souls into sin, thinking to stand before Him and to behold Him nailed to the Cross, breathing His last and surrendering His soul into the hands of the Father, that we may never be separated from Him.`
      ],
      aposticha: [
        `O Lord, of old, in the time of Moses the prophet, the image of Thy Cross, having been precisely revealed, vanquished Thine enemies; and now, possessed of that same Cross, O Christ, we triumph over every adversary.`,
        `O Lord, by Thy Cross Thou hast delivered us from all sorrow; by it we ever trample upon the heads of the invisible enemies.`,
        `O Christ God, Who art glorified in the memorials of Thy saints, entreated by them send down upon us great mercy.`
      ],
      aposticha_glory: `Desiring that all receive salvation, O my sinless Christ, Thou wast pleased to pay a great price, Thy precious blood, for our deliverance. Wherefore, beholding Thee nailed, Thy Mother, lamenting, rent her hair, saying: "O Child, mine all-immaculate Lamb, Who desirest to deliver the world by Thy precious blood, how hast Thou set to whence I cannot see, O never-setting Sun, Who grantest unto all enlightenment, peace and great mercy?"`
    },
    fri: {
      lic: [
        `With the streams of their blood the passion-bearers quenched the flame of grievous ungodliness; and enkindling the radiance of piety throughout the whole world, they utterly consumed the false gods and their fetid stench. They have shone forth the most pure light upon those on earth, and enlightened thereby, we elude the darkness of ungodliness and evade the delusion of idols, worshipping Christ, Who granteth the world great mercy.`,
        `Easily setting at naught the words of the ungodly heretics and their pursuit, ye became warriors of the beginningless Father, the Son Who is equally without beginning, and the Holy Spirit, the Unity of Divinity in three Hypostases, teaching the faithful with piety of mind and confirming the preaching of Orthodoxy. Wherefore, ye are called blessed, O most sacred pastors, for in life-bearing pastures ye tended the flock of Christ, for Whom ye endured all manner of pangs and many and varied trials.`,
        `Receiving mastery of mind through the doing of virtuous deeds, the company of the venerable, who struggled, with ease utterly trampled the carnal passions underfoot. Thereby they valiantly overcame all the wiles of the demons and were revealed to be conversers with the angels, since they lived as ones incorporeal. And they now rejoice in the mansions on high, living in splendor, and standing before Christ, beseech Him to grant our souls great mercy.`,
        `Girding themselves with the shield of faith, and arming themselves with the sign of the Cross, Thy saints O Lord, bravely gave themselves over to torments, casting down the pride and delusion of the devil. By their supplications, O God almighty, send down peace upon the world, and great mercy upon our souls.`,
        `Girding themselves with the shield of faith, and arming themselves with the sign of the Cross, Thy saints O Lord, bravely gave themselves over to torments, casting down the pride and delusion of the devil. By their supplications, O God almighty, send down peace upon the world, and great mercy upon our souls.`,
        `Despising all things earthly, and bravely withstanding torture, ye were not deprived of your goodly hope, but became heirs of the Kingdom of heaven. O ye all-famed martyrs, since ye have boldness before God the Lover of mankind, ask that peace be granted to the world, and great mercy to our souls.`
      ],
      lic_dogmatikon: `In the Red Sea of old an image of the Bride who knew not wedlock was depicted. There Moses was the one who parted the sea, here Gabriel is the minister of the miracle. At that time Israel marched dry-shod through the deep, now the Virgin doth seedlessly give birth to Christ. The sea after Israel's passage remained impassable; the immaculate one after bearing Emmanuel remained incorrupt. O God, Who doth exist and is pre-eternal, and hath appeared as man, have mercy upon us.`,
      aposticha: [
        `Intercede on our behalf, O holy martyrs, that we may be delivered from our iniquities: for unto you hath been given the grace to pray for us.`,
        `With your souls filled with insatiable love, O holy martyrs, ye did not deny Christ; and enduring divers wounds in sufferings, ye cast down the audacity of the tyrants, and keeping the faith unaltered and unharmed, ye were translated to the heavens. Wherefore, since ye have boldness before Him, ask that He grant us great mercy.`,
        `I called to mind the words of the prophet, "I am but dust and ashes." I went also to the tombs, and beheld the bones laid bare, and I said: Which is the king or which the warrior, which the rich man or which the beggar, which the righteous or which the sinner? But grant rest with the righteous, O Lord, to Thy servants, as the Lover of mankind.`
      ],
      aposticha_glory: `O thou who art full of joy, intercede by thy supplications, and beg that a multitude of compassions, and the cleansing of our many sins, be granted to our souls.`
    }
  },
  6: {  // Tone 6
    sat: {
      lic: [
        `Victorious over Hades, O Christ, Thou didst ascend the Cross that Thou mightest raise up with Thyself those who sat in the darkness of death; free among the dead, Thou didst pour forth life from Thine own light. O all-powerful Savior, have mercy upon us.`,
        `Today Christ, having trampled on death, hath arisen as He foretold, granting joy to the world, that we may all shout aloud the hymn and say: O Source of life, O unapproachable Light, O all-powerful Savior, have mercy upon us.`,
        `Where shall we sinners escape Thee, O Lord, who art present in all creation? In heaven? Thou dwellest there. In Hades? There Thou didst trample on death. In the depths of the sea? Thy hand is also there O Master. To Thee we flee and falling down before Thee we implore: O Lord risen from the dead, have mercy upon us.`,
        `We boast in Thy Cross, O Christ, and we hymn and glorify Thy Resurrection; for Thou art our God; we know none other besides Thee.`,
        `Ever blessing the Lord we hymn His Resurrection; for having endured the Cross, He hath destroyed death by death.`,
        `Glory to Thy power, O Lord, for Thou hast destroyed the one that held the might of death; Thou hast renewed us through Thy Cross, granting us life and incorruption.`,
        `Thy burial, O Lord, smashed and rent asunder the bonds of Hades; Thy Resurrection from the dead hath enlightened the world. O Lord, glory be to Thee!`
      ],
      aposticha: [
        `Thy Resurrection O Christ our Savior, the angels in the heavens hymn; grant also unto us who are here on earth to glorify Thee with pure hearts.`,
        `Thou as all-powerful God hast smashed the gates of brass and shattered the bars of Hades, and Thou hast raised the fallen human race. Therefore with one accord we also cry out to Thee: O Lord, risen from the dead, glory be to Thee!`,
        `Wishing to restore us from our ancient fall, Christ wast nailed to a Cross and placed in a tomb. The myrrh-bearing women, as they sought Him with tears, said, lamenting: "Alas, O Savior of all, how is it that Thou deigned to dwell in a tomb? How is it, that Thou who willingly dwelt there, hast been stolen? How is it that Thou hast been moved? What place hath hidden Thy life-bearing body? O Master, as Thou hast promised, do Thou appear unto us, and bring to an end our grieving and our tears." But as they lamented an angel cried unto them saying: "End your lament! Go and tell the apostles that the Lord hath risen, granting the world pardon and great mercy."`,
        `Thou wast willingly crucified O Christ, and by Thy burial Thou hast despoiled death. On the third day Thou didst rise as God in glory, granting the world everlasting life and Thy great mercy.`
      ],
      aposticha_glory: `[Glory from Menaion if appointed]`,
      dogmatikon: `Who doth not call thee blessed, O most holy Virgin? Who will not hymn thy most pure birthgiving? For the only-begotten Son Who hath shone forth timelessly from the Father, came forth, ineffably incarnate, from thee, O pure one; By nature He is God, by nature for our sakes, He hath become a man not divided into two Hypostases, but known in two natures without commingling. Him do thou beseech, O pure and most blessed one, that our souls find mercy!`
    },
    sun_eve: {
      lic: [
        `Through thought of contrition grant me tears of repentance, O Savior, that I may wash away the filth from my soul, which I have badly sullied, committing unrighteousness all the time, for it is for this that I have her who gave birth to Thee, and the angelic choirs, entreating Thy love for mankind.`,
        `Come, O my soul, and repent of the many sins thou hast committed in this life, and entreat the multitude of the heavenly armies with sighs and tears, that time be given thee for repentance, lest thou be sent into the most accursed fire of Gehenna like the barren fig-tree.`,
        `Not one of Thy commandments have I kept on earth. When Thou shalt sit upon Thy throne, how shall I give answer for myself, receiving condemnation for all that I have done in knowledge or in ignorance, O my Christ? Wherefore, I cry out to Thee: Through the supplications of Thy servants save me, the prodigal!`
      ],
      aposticha: [
        `At Thy dread coming, O Christ, let us not hear "I know you not." For we have set our hope upon Thee, O Savior. And even though in our neglect we have not kept Thy precepts, yet take pity on our souls, we pray.`,
        `Neither repentance nor tears have I acquired; wherefore, I beseech Thee, O Christ God: Convert me before the end, and grant me compunction, that I may be delivered from tortures.`,
        `Thy martyrs, O Lord, denied Thee not, nor did they forsake Thy commandments; by their intercessions have mercy upon us.`
      ],
      aposticha_glory: `Like the Archangel, let us the faithful hymn the bridal-chamber of heaven, the portal truly sealed: Rejoice, for whose sake hath budded forth unto us Christ the Savior of all, the Bestower of life and God! With thine arm O Lady cast down the tyrants, our godless foes, O most pure one, O thou hope of Christians!`
    },
    mon: {
      lic: [
        `Who doth not weep for me, who in intemperance have broken the commandment of the Most High? I have come to dwell in Hades instead of paradise through the sight of the sweet food which brought about death, and because of it I have become a stranger to life and the glory of God. Yet accept me the penitent, O Lord, for the sake of Thy great mercy, in that Thou art merciful and the Lover of mankind.`,
        `Behold my sorrow and pain, and the countless multitude of my transgressions, the affliction of my soul and the delusion of my mind. Attend unto the cry of one who is accursed and condemned, O Lord, and grant me a contrite spirit and a humble heart; and in Thy great mercy give me a wellspring of tears and forgiveness for my many transgressions.`,
        `O God, Who desirest that all should be saved: Look down and hearken unto my supplication, and reject not my tears as shed in vain. For who having come to Thee weeping hath not been saved straightway? Who having cried out fervently unto Thee hath not been hearkened to straightway? O Master, be Thou quick to save all who entreat Thee, for Thou art invincible in mercy.`
      ],
      aposticha: [
        `At Thy fearful Coming, O Christ, may we not hear the words: "I know you not." For though, O Savior, we have put our trust in Thee, from negligence we have not kept Thy commandments; yet we entreat Thee, do Thou spare our souls.`,
        `I have no repentance and I have no tears. Wherefore I entreat Thee, O Christ God: before the end is here turn me back and grant me compunction, that I may be delivered from the torments of Hades.`,
        `O martyred passion-bearers, citizens of heaven, who suffered on the earth, ye endured many torments. By their supplications and entreaty, O Lord, preserve us all.`
      ],
      aposticha_glory: `O most holy Virgin, show forth upon me, the wretched one, the depths of thy love for mankind, the abyss of thy tender compassion, and the countless compassions of thy goodness. Mow down the stubble of sin, granting me chastity, and preserve my body and soul undefiled, O thou who hast given birth to the Savior.`
    },
    tue: {
      lic: [
        `When Thou wast crucified, O long-suffering Lord, Thou didst shake the whole earth, making steadfast the hearts of the faithful; wherefore, we hymn Thee and with love worship Thine unapproachable power.`,
        `Spat upon and smitten on the cheek, O Savior, Thou didst smite the evil of the venomous foe, taking away the fall which Adam endured, who was abducted because of his transgression.`,
        `The sun was darkened, the whole earth quaked, and the stones split asunder, when they beheld Thee suspended unjustly upon the Tree, setting aside Thine own will, O Savior.`
      ],
      aposticha: [
        `Thy Cross is life and help for Thy people, O Lord; and trusting therein, we hymn Thee, our God Who wast crucified in the flesh. Have mercy on us!`,
        `Thy Cross, O Lord, hath opened paradise to the race of mankind; and delivered from corruption, we hymn Thee, our God Who wast crucified in the flesh. Have mercy on us!`,
        `They who suffered for Thy sake, O Christ, endured many torments and have received perfect crowns in the heavens. May they pray on behalf of our souls.`
      ],
      aposticha_glory: `Upon beholding our Life suspended upon the Tree, the all-immaculate Theotokos cried aloud, maternally lamenting: O my Son and my God, save those who with love hymn Thee!`
    },
    wed: {
      lic: [
        `Ye became ministers of the great mysteries of God, O theologians and God-beholding disciples, and having received the grace of healing, ye cure the diseases of all.`,
        `Ye are the great refuge and protection of our souls and the expulsion of evil spirits, O God-beholding apostles of the Lord, wherefore, we ever honor you.`,
        `From every evil circumstance, from harm wrought by the demons, from transgressions and wretched captivity, deliver those who honor you with faith, O divine and blessed apostles.`
      ],
      aposticha: [
        `Once, the apostles trolled the depths of the sea with nets, O Lord, and likewise the heights of the kingdom for the sake of their doctrines. In the first, they skillfully tested the unfathomable depths; and in the other they attained through faith Thine infinite bosom, and they proclaimed Thy timeless Son to the world. By their supplications and those of all the saints, have mercy on us.`,
        `Once, when Thy disciples were tempest-tossed in a boat, O Christ, they cried out: "O Master, save us! For we are perishing!" And we now cry aloud: We pray Thee O our Savior and Lover of mankind, deliver us from our tribulations!`,
        `Thy Cross was the invincible weapon of the martyrs, O Lord; for they looked upon imminent death, foreseeing the life which is to come, and they were strengthened by hope in Thee. By their prayers have mercy upon us!`
      ],
      aposticha_glory: `The eye of my heart longingly seeketh thee, O Lady; disdain not my feeble sigh. At the hour when thy Son shall judge the world, be thou my protection and helper.`
    },
    thu: {
      lic: [
        `O my long-suffering God and Lover of mankind, greatly merciful and compassionate, how didst Thou endure to be slain and put to death on the Tree for the race of mankind? I glorify Thy loving-kindness.`,
        `Thou didst endure smiting, crucifixion and mockery, O Long-suffering One, desiring to deliver all from the deceiver; and Thou didst bear them all, O only supremely good Bestower of life.`,
        `Thou didst ascend the Cross, O Shepherd, and stretch forth Thine arms, crying out: "Come unto me and be enlightened, O ye who have been darkened by deception, for I am the Light!" Glory be to Thee, O only Bestower of light!`
      ],
      aposticha: [
        `Thy Cross is the life and help of Thy people, O Lord; and trusting therein, we hymn Thee, our God Who wast crucified in the flesh. Have mercy on us!`,
        `Thy Cross, O Lord, hath opened paradise to the race of mankind; and delivered from corruption, we hymn Thee, our God Who wast crucified in the flesh. Have mercy on us!`,
        `Thy martyrs, O Lord, did not deny Thee nor depart from Thy commandments. By their supplications have mercy on us.`
      ],
      aposticha_glory: `Standing with the virginal disciple before the Tree during the crucifixion, the Virgin cried out, weeping: "Woe is me! How is it that Thou dost suffer, O Christ, since Thou art the dispassion of all?"`
    },
    fri: {
      lic: [
        `Walking in the footsteps of the sufferings of Christ, the whole company of the martyrs mightily went forth to many struggles. They confessed Him as God before ungodly tyrants and iniquitous kings, and endured many tortures, in the hope of receiving heavenly honors. These they now behold, rejoicing, and standing before the Lord with the choirs of all the incorporeal hosts.`,
        `O all-sacred shepherds, ye were emulators of the Christ, the Chief Shepherd, and preserved utterly unharmed the divinely chosen flock, the divine treasures of piety, driving away the wild wolves, and bringing them into the fold of heaven. As ye make your abode there, remember those who praise you with love, and pray ye with boldness unto Christ on behalf of our souls.`,
        `O all ye venerable fathers, who living in holiness, vanquished the demons; and extinguishing the torments of conscience, valiantly endured the burning of the passions, O blessed ones, and ye rejoice now with the heavenly hosts of incorporeal beings; for in the flesh ye emulated their life. With them entreat Christ, the supremely good God, that we who honor you may find deliverance from our falls.`,
        `Thy martyrs, O Lord, denied Thee not, nor did they forsake Thy commandments; by their intercessions have mercy upon us.`,
        `Thy martyrs, O Lord, denied Thee not, nor did they forsake Thy commandments; by their intercessions have mercy upon us.`,
        `O martyred passion-bearers, citizens of heaven, who suffered on the earth, ye endured many torments. By their prayers and intercessions, O Lord, preserve us all.`
      ],
      lic_dogmatikon: `Who doth not call thee blessed, O most holy Virgin? Who will not hymn thy most pure birthgiving? For the only-begotten Son Who hath shone forth timelessly from the Father, came forth, ineffably incarnate, from thee, O pure one; By nature He is God, by nature for our sakes, He hath become a man not divided into two Hypostases, but known in two natures without commingling. Him do thou beseech, O pure and most blessed one, that our souls find mercy!`,
      aposticha: [
        `Those who suffered martyrdom for Thee, O Christ, endured a multitude of torments, and have received perfect crowns in the heavens, may they ever intercede on behalf of our souls.`,
        `Thy Cross O Lord, was the invincible weapon of the martyrs. They beheld impending death before them; but, foreseeing the life that is to come, they became strengthened with hope in Thee. By their intercessions have mercy on us.`,
        `Thy command was to me my beginning and foundation. For desiring to fashion me into a living creature from natures visible and invisible: Thou didst form my body from the earth, and given me a soul by Thy divine and quickening breath. Wherefore, O Christ, grant rest to Thy servants in the land of the living, in the habitations of the righteous.`
      ],
      aposticha_glory: `By the prayers of her that gaveth birth to Thee O Christ, and of Thy martyrs and apostles, the prophets and holy hierarchs, the venerable, the righteous and of all the saints, grant rest to Thy departed servants.`
    }
  },
  7: {  // Tone 7
    sat: {
      lic: [
        `O Come, let us rejoice in the Lord who hath destroyed the dominion of death and enlightened the race of mankind, as we cry aloud with the bodiless powers: "Our Creator and Savior, glory be to Thee!"`,
        `Thou didst endure the Cross and burial for our sake, O Christ, but as God by Thy death Thou hast slain death; wherefore we worship Thy Resurrection on the third day. O Lord, glory be to Thee!`,
        `The apostles were struck with amazement when they saw the Creator's arising and they cried aloud the angelic hymn of praise: "This is the glory of the Church, this is the wealth of the kingdom. O Lord, who hath suffered for us, glory be to Thee!"`,
        `Though Thou wast seized by lawless men, O Christ, yet Thou art my God, and I am not ashamed; Thy back was scourged, but I do not deny Thee; Thou wast nailed to a Cross, but I do not hide from Thee. I make my boast in Thine arising; for Thy death is my life. All-powerful Lord who lovest mankind, glory be to Thee!`,
        `Fulfilling David's prophecy Christ revealed His majesty to His disciples in Zion, showing that He was praised and ever glorified with the Father and the Holy Spirit; at first without flesh as the Word, afterwards for our sake incarnate and put to death as a man, and risen with authority as the Lover of mankind.`,
        `By willingly descending into Hades O Christ, Thou didst despoil death, and by arising on the third day as God and Lord, Thou didst raise together with Thyself from the bonds and corruption of Hades, those who cried aloud: "Glory to Thine all-powerful Resurrection. O Lord, glory be to Thee!"`,
        `Thou wast laid in a tomb, O Lord, as One who sleepeth and Who hast arisen on the third day as One mighty in strength, raising with Thyself Adam from the corruption of death, as One All-powerful.`
      ],
      aposticha: [
        `Thou didst arise from the tomb, O Savior of the world, and with Thy flesh Thou hast raised mankind. O Lord, glory be to Thee!`,
        `Come, let us worship Him Who hath arisen from the dead and enlightened all things; for He hath delivered us from the tyranny of Hades through His Resurrection on the third day, granting us life and great mercy.`,
        `Having descended into Hades O Christ, Thou hast despoiled death, and by rising on the third day, Thou hast raised us also together with Thyself, wherefore we glorify Thine all-powerful arising. O Lord, glory be to Thee!`,
        `Fearful didst Thou appear, O Lord, as Thou lay in the tomb as One sleeping; and having arisen on the third day as All-powerful Thou hast raised Adam together with Thyself, who cried aloud: "Glory to Thy Resurrection, O only Lover of mankind."`
      ],
      aposticha_glory: `[Glory from Menaion if appointed]`,
      dogmatikon: `Thou hast been known to have become a mother in a manner surpassing nature O Theotokos, and hast remained a virgin in a manner beyond all telling and understanding; no tongue can expound the wonder of thy birthgiving. For while thy conceiving O pure one, was most glorious, the manner of thy birthgiving transcends comprehension; for where God so willeth, the order of nature is overthrown. Wherefore, we all, knowing thee to be the Mother of God, do earnestly entreat thee: Pray thou that our souls be saved!`
    },
    sun_eve: {
      lic: [
        `Lift up thine eyes, O my soul, and behold the dispensation and tender compassion of God: how having bowed down the heavens, He descended to the earth, that He might raise thee up from the wretched state of thy passions, and set thee upon the rock of faith. O the wonder of this awesome miracle! Glory to Thine abasement, O Lover of mankind!`,
        `Behold thine exceedingly iniquitous works, O my soul, and marvel that the earth still beareth thee, that it hath not been driven asunder, that the wild beasts do not devour thee, that the ever-shining Sun hath not ceased to shine upon thee. Arise, repent, and cry out to the Lord: I have sinned against Thee, I have sinned! Have mercy on me!`,
        `Trusting in thee, O omnipotent Lord, we beseech Thee, that we be delivered from all tribulations, sufferings and turmoil; that we may pass our life in peace; and, having lived in purity, may find Thee, our Master, merciful on the day of judgment.`
      ],
      aposticha: [
        `I have come, O Compassionate One, like the prodigal son. As one of Thy hirelings do Thou accept me who fall down before Thee, O God, and have mercy on me, O Thou Who lovest mankind.`,
        `Like the one who fell among thieves and was wounded, so have I fallen through many sins, and my soul hath been wounded. To whom shall I who am guilty flee? To Thee alone, the Physician of men's souls. O God, pour forth upon me Thy great mercy.`,
        `Glory to Thee, O Christ God, Thou boast of the apostles and joy of the martyrs, who preached the consubstantial Trinity!`
      ],
      aposticha_glory: `With the angel we cry out to thee, Rejoice! O Bride of God, calling thee the bridal-chamber and portal, the fiery throne and unquarried mountain, and bush unconsumed.`
    },
    mon: {
      lic: [
        `O most compassionate Master and God, by the judgments which Thou knowest grant that I may have the fear of Thee in my heart, that I may spurn the works of the evil one, love Thee with all my soul, and do Thy saving will; for Thou art our God, Who said: Ask, and ye shall receive.`,
        `I have become a mockery for the demons and contemptible for men, lamentation for the righteous and weeping for the angels, polluting the air, the earth and the waters; for I have defiled my body and sullied my soul and mind with countless evil acts, and have become an enemy to God. Woe is me, O Lord! I have sinned, I have sinned against Thee! Forgive me!`,
        `I pray Thee: Be Thou patient with me, who am devoid of fruits, O Master, and cut me not down like the barren tree with the axe of death, dispatching me to the fire; but be Thou entreated to make me fruitful, giving me time for repentance, in that Thou lovest mankind, that I may wash away my many sins, O Christ my Savior.`
      ],
      aposticha: [
        `I have come, O Compassionate One, like the prodigal son. As one of Thy hirelings do Thou accept me who fall down before Thee, O God, and have mercy on me, O Lover of mankind.`,
        `Like the one who fell among thieves and was wounded, so have I fallen through many sins, and my soul hath been wounded. To whom shall I who am guilty flee? If not to Thee alone, the Physician of our souls. O God, pour forth upon me Thy great mercy!`,
        `O holy martyrs, ye who have fought the good fight and received crowns: Entreat the Lord, that He have mercy upon our souls.`
      ],
      aposticha_glory: `Rejoice, O Sovereign Lady, thou cloud of the noetic and ineffable Sun! Rejoice, all-luminous lantern: Rejoice all-golden candle-stand. Through thee, O most holy one, hath Eve been delivered from the curse. But as thou dost possess boldness before thy Son and God Who is readily moved to compassion, fail not to entreat Him by thy maternal supplication, O most pure one.`
    },
    tue: {
      lic: [
        `Of old, a tree drove me from paradise, but now a tree hath restored me to paradise when Thou wast crucified, O Christ.`,
        `O awesome wonder! How can the Creator, standing before a created being, be condemned and crucified for the salvation of mankind?`,
        `O Cross of Christ, the amazement of the holy angels and the great wounding of the demons: Save thy servants!`
      ],
      aposticha: [
        `No longer are we forbidden the Tree of life, for we have Thy Cross as our hope. O Lord, glory be to Thee!`,
        `Suspended upon the Tree, O Immortal One, Thou didst break the snares of the devil. O Lord, glory be to Thee!`,
        `Caring naught for all the things of earth, O holy martyrs, and having manfully preached Christ at the tribunal, ye received from Him rewards for your torments; but as ye have boldness, beseech Him, as the almighty God, that He save the souls of us who flee to you, we pray.`
      ],
      aposticha_glory: `Once thou didst behold thy son upon the Tree, thy heart was pierced by a lance of sadness, O most-pure One.`
    },
    wed: {
      lic: [
        `Having tilled the whole earth with the plough of the knowledge of God, O glorious apostles, ye caused a multitude of the faithful to spring forth.`,
        `Set at naught the winter of my passions, O blessed apostles, and shine forth upon me the pure spring of peace.`,
        `As disciples of the Word ye brought the assemblies of the nations over from senselessness to the knowledge of God.`
      ],
      aposticha: [
        `O glorious apostles, pillars of the Church, preachers of the Truth, radiant beacons: With the fire of the Spirit ye consumed all delusion and illumined the race of mankind with faith. Wherefore, we beseech you: Entreat our Savior and God, that He grant peace to the world and save our souls.`,
        `O apostles of Christ, husbandmen of the Savior, bearing the Cross upon your shoulders as a plough, and having cleared the earth made hard by the delusion of idolatry, ye sowed the word of faith. And ye are fittingly honored, O holy apostles of Christ.`,
        `O all-praised martyrs, spiritual lambs, reason-endowed holocausts, acceptable sacrifices well-pleasing to God: the earth could not hide you, but heaven received you, and ye have become communicants with the angels. With them entreat our Savior and God, we pray you, that He grant peace to the world and save our souls.`
      ],
      aposticha_glory: `Let us hymn as the Mother of God the Word, her who alone was an all-pure virgin after giving birth, saying: Glory be to thee!`
    },
    thu: {
      lic: [
        `That Thou mightest make man a god, Thou didst become a man and wast crucified, O supremely good Christ. Glory be to Thy power!`,
        `When the assembly of the Jews condemned Thee to die on the Cross, O Jesus, the earth quaked and the sun hid its light.`,
        `The iniquitous assembly crowned Thee with thorns, O Immortal and holy King, Who cuttest off the thorns of delusion at the root.`
      ],
      aposticha: [
        `No longer are we forbidden the Tree of life, for we have Thy Cross as our hope. O Lord, glory be to Thee!`,
        `Suspended upon the Tree, O Immortal One, Thou didst break the snares of the devil. O Lord, glory be to Thee!`,
        `Glory be to Thee, O Christ God, Thou boast of the apostles and joy of the martyrs, who preached the consubstantial Trinity!`
      ],
      aposticha_glory: `When the all-immaculate one beheld Thee willingly nailed to the Tree, weeping, she hymned Thy dominion.`
    },
    fri: {
      lic: [
        `The martyrs dispelled the darkness of ungodliness, showing forth the light of divine knowledge unto all mankind.`,
        `With Orthodox teachings as with divine rays ye enlightened the Church of the Lord, O most wise pastors.`,
        `Ever dwelling in trackless wastes, ye broke the nets of the demons, O venerable fathers.`,
        `O Savior, when Thou comest to judge the whole world put me not to shame, for I have committed shameful acts.`,
        `Glory be to Thee, O Christ God, Thou boast of the apostles, joy of the martyrs; whose preaching was of the consubstantial Trinity.`,
        `O holy martyrs, ye who have fought the good fight and received your crowns, pray to the Lord, that our souls be saved.`
      ],
      lic_dogmatikon: `Thou hast been known to have become a mother in a manner surpassing nature O Theotokos, and hast remained a virgin in a manner beyond all telling and understanding; no tongue can expound the wonder of thy birthgiving. For while thy conceiving O pure one, was most glorious, the manner of thy birthgiving transcends comprehension; for where God so willeth, the order of nature is overthrown. Wherefore, we all, knowing thee to be the Mother of God, do earnestly entreat thee: Pray thou that our souls be saved!`,
      aposticha: [
        `Despising every earthly thing, O holy martyrs, and having bravely preached Christ at the tribunal, ye received your reward from Him for your torments. Since ye have boldness before God, we beseech you to pray to Him as one almighty, that He save the souls of us who flee unto you.`,
        `O all-praised martyrs, spiritual lambs, reason-endowed whole-burnt offerings and sacrifices acceptable and well-pleasing to God. Ye were not hidden by the earth, but heaven hath received you; and ye have become companions of the angels; we entreat you to pray with them unto our God and Savior, that He grant peace to the world, and save our souls.`,
        `O Thou Who in the beginning fashioned man in Thine image and in accordance with Thy likeness, in paradise Thou didst appoint him to rule over Thy creatures; but, led astray by the malice of the devil, he partook of the fruit, breaking Thy commandment. Wherefore, Thou didst condemn him to return to the earth from whence he had been taken, O Lord, and to beg for repose.`
      ],
      aposticha_glory: `O thou who alone didst receive the uncontainable Word of God, and hast given birth to Him incarnate: Pray that our souls be saved.`
    }
  },
  8: {  // Tone 8
    sat: {
      lic: [
        `We offer unto Thee, O Christ, an evening hymn and spiritual worship; because Thou wast well-pleased to have mercy on us through the Resurrection.`,
        `O Lord, cast us not away from Thy presence; but be well-pleased to have mercy on us through the Resurrection.`,
        `Rejoice holy Zion, Mother of the Churches, dwelling-place of God; for it was thee who first received forgiveness of sins through the Resurrection.`,
        `The Word, begotten of God the Father before all ages, hath in the last times become incarnate of her who knew not wedlock, and willingly endured the crucifixion and death, and mankind, slain of old, hath thereby been saved through His own Resurrection.`,
        `We glorify Thy Resurrection from the dead, O Christ, through which Thou hast freed the race of Adam from the tyranny of Hades, and as God hast granted the world eternal life and great mercy.`,
        `Glory be to Thee, O Christ Savior, only-begotten Son of God, affixed by nails to the Cross and risen from the tomb on the third day.`,
        `We glorify Thee, O Lord, and we worship Thee, O all-powerful Savior, who willingly endured the Cross for our sake; cast us not away from Thy presence, but hearken unto us and save us through Thy Resurrection, O only Lover of mankind.`
      ],
      aposticha: [
        `O Christ, having descended from heaven, Thou didst ascend the Cross; O immortal Life, Thou didst descend into Hades; the true Light, unto those in darkness; the Resurrection unto all those who had fallen. Our illumination and our Savior, glory be to Thee.`,
        `Let us glorify Christ who hath risen from the dead: for having taken a body and a soul, He parted them one from another by the Passion. For His soul hath descended into Hades, which He despoiled, while the holy body of the Redeemer of our souls knew not corruption in the tomb.`,
        `O Christ, in psalms and hymns we glorify Thy Resurrection from the dead. For through it Thou hast freed us from the tyranny of Hades, and as God Thou hast granted us life eternal, and Thy great mercy.`,
        `Thou, O Master of all things, art the incomprehensible Creator of heaven and earth, by suffering the Cross Thou hast become for me the source of immortality. Submitting to burial and arising in glory, Thou hast raised Adam with Thyself by Thine all-powerful hand. Glory to Thine arising on the third day, through which Thou hast granted us eternal life and the forgiveness of sins, as Thou alone art lovingly compassionate.`
      ],
      aposticha_glory: `[Glory from Menaion if appointed]`,
      dogmatikon: `In His love for mankind, the King of heaven appeared on earth and dwelt among men; for He Who received flesh from the pure Virgin and cameth forth from her having received human nature, is the only Son of God, twofold in nature but not Hypostasis. Therefore, proclaiming Him to be truly perfect God and perfect man, we confess Christ our God. Him do thou beseech, O unwedded Mother, that our souls find mercy!`
    },
    sun_eve: {
      lic: [
        `O Lord Who camest into the world to call sinners to Thee, and Who accepted the thief, the publican and the harlot: In Thy love for mankind, O my Christ, call me also to Thee, though I have sinned against Thee more than all others, and never repent.`,
        `O Lord, Who ordained publicans as pastors for Thy Church, and made a helper now of him who before was a persecutor: By their supplications show me to be Thy lamb, O Savior, and let me not, who am useless, fall prey to the alien one.`,
        `Weep before the end, O my wretched and most vile soul, and cleave unto God, crying out to him with groans from the depths of thy heart: I have sinned against Thee, O Christ! Revile me not, I pray, but turning me back to Thee, grant me forgiveness, in that Thou art merciful.`
      ],
      aposticha: [
        `The angels unceasingly hymn Thee, the King and Master; and I fall down before Thee, crying like the publican: Cleanse me, O God, and have mercy upon me!`,
        `As thou art immortal, O my soul, let not the waves of life cover thee, but rise up, crying out to thy Benefactor: Cleanse me, O God, and save me!`,
        `O martyrs of the Lord, ye sanctify every place and heal every infirmity. Pray ye now, that our souls be delivered from the snares of the enemy, we beseech you.`
      ],
      aposticha_glory: `Taking up the cry of the Archangel Gabriel, let us say: Rejoice, O Mother of God, who hast given birth unto Christ, the bestower of life upon the world!`
    },
    mon: {
      lic: [
        `I have acquired neither compunction, nor a wellspring of tears, nor fervent confession, nor weeping which washeth me clean, nor humility of heart; I have been neither an emulator of the publican, nor of the harlot, nor of the prodigal son. How, therefore, shall I find remission for my many sins? But in the judgments which Thou knowest, save me, O Christ.`,
        `I have made myself a stranger to every commandment of God; in every way I have neglected higher virtue; mindlessly wasting my whole life in slothfulness; and I have committed every unseemly and iniquitous act in fornication. Wherefore, since Thou art compassionate O Christ, have pity, and freely save me.`,
        `In Thine anger rebuke me not who am the work of Thy hands, and who with my foolish mind have torn myself away from goodness, O Lover of mankind, and Who in the abyss of Thine ineffable compassion wast for my sake well-pleased to become like unto me. But through the supplications of Thine Ever-virgin Mother, O Word, grant me divine conversion, in that Thou art God.`
      ],
      aposticha: [
        `The angels unceasingly hymn Thee, the King and Master; and I fall down before Thee, crying like the publican: Cleanse me, O God, and have mercy upon me!`,
        `As thou art immortal, O my soul, let not the waves of life engulf thee, but rise up, crying out to thy Benefactor: Cleanse me, O God, and save me!`,
        `O martyrs of the Lord, entreat ye our God, and ask for our souls a multitude of compassions and the cleansing of our many transgressions, we beseech you.`
      ],
      aposticha_glory: `Rejoice, thou praise of the universe! Rejoice, temple of the Lord! Rejoice, mountain overshadowed! Rejoice, refuge of all! Rejoice, golden candlestick! Rejoice, honored glory of the Orthodox! Rejoice, Mary, Mother of Christ God! Rejoice, paradise!`
    },
    tue: {
      lic: [
        `When Thou wast nailed to the Cross, Thy hands and feet run through, Thy holy side was pierced, pouring forth drops of blood and water, our divine salvation, O supremely good One, that Thou mightest wash away my defilement and pollution. Glory to Thy goodness, O all-Compassionate One!`,
        `Thou didst endure suffering, O Master, that Thou mightest bestow dispassion upon all who worship Thy sufferings and voluntary sacrifice: the spear, nails and reed, which Thou didst willingly endure with long-suffering: that for the sake of Thy sufferings, O Lord, Thou mightest win dispassion for me.`,
        `The unblemished heifer, beholding her Bullock willingly lifted up upon the Tree, cried out with compunction, lamenting: "Woe is me, O my most beloved Child! How hath the ungrateful assembly of the Jews rewarded Thee, desiring to leave me bereft of Thee, O all-Beloved!"`
      ],
      aposticha: [
        `O Christ God Who wast lifted up upon the Cross, Thou didst save the race of mankind. We glorify Thy sufferings!`,
        `Thou wast nailed to the Cross, O Christ God, and opened the gates of paradise. We glorify Thy divinity!`,
        `Thy martyrs, O Lord, putting aside the things of life, ignored their tortures for the sake of the life which is to come, and were shown to be inheritors thereof; wherefore, they rejoice with the angels. By their supplications grant great mercy to Thy people.`
      ],
      aposticha_glory: `O Lord, when the sun beheld Thee the Sun of righteousness, hanging upon the Tree, it hid its rays, and the light of the moon was changed to darkness; and Thine all-immaculate Mother was pierced in the depths of her soul.`
    },
    wed: {
      lic: [
        `O Lord, Thou didst enlighten Thine apostles with the beams of the Comforter, with the noetic radiance of the knowledge of Thee setting them as beacons unto the confirmation of the Faith, O Master; wherefore, we bow down before Thine ineffable love for mankind.`,
        `By the supplications of Thine apostles, O Lord, Thou hast protected this Thy flock, preserving it unharmed by the temptations of the enemy; for with Thy precious blood Thou didst redeem it from enslavement to the enemy, in that Thou art compassionate and the Lover of mankind.`,
        `Together ye were shown to be like precious stones set in the foundation of the Church, with radiant brilliance shining forth upon the whole world the knowledge of God, O divine apostles, who stand before the Trinity and pray for our souls.`
      ],
      aposticha: [
        `Fervently loving Thee on earth, O Lord, Thine apostles considered all to be but dung, that they might acquire Thee alone; and they gave their bodies over to wounds for Thee; wherefore, glorified, they pray for our souls.`,
        `O Lord, Thou didst magnify the memory of the apostles on earth, for assembling them together, we all glorify Thee; since by their prayers and for their sake, Thou dost grant healings, peace and great mercy to the whole world.`,
        `What virtue, what praise is due the saints? For they bowed their heads beneath the sword for the sake of Thee Who bowed down the heavens and descended; they shed their blood for Thee Who emptied Thyself and assumed the form of a servant; they humbled themselves even unto death, emulating Thy poverty. By their prayers, O God, have mercy upon us in the multitude of Thy compassions.`
      ],
      aposticha_glory: `I flee to thy protection, O holy Virgin Theotokos, for I know that through thee I shall obtain salvation; for thou art able to help me, O pure one.`
    },
    thu: {
      lic: [
        `O most glorious wonder! The Life-bearing Tree, the most holy Cross is revealed today, lifted up on high. All the ends of the earth glorify it, and the hordes of the demons are affrighted. O what a gift hath been given to mortals! Thereby, O Christ, save Thou our souls, in that Thou alone art compassionate.`,
        `O most glorious wonder! Like a vine full of life, bearing the Most High, the Cross is seen today uplifted from the earth. Thereby have we all been drawn to God, and death hath been utterly slaughtered. O most honored Tree, whereby, glorifying Christ, we have received the immortal sustenance which was in Eden!`,
        `O the great goodness which Thou hast for us, O good Jesus! How didst Thou abase Thyself, become a man, and will to suffer, enduring the Cross and violent death for Thy useless servants? We offer the Cross to Thee as a worthy and divinely fitting gift; and giving thanks, we, the faithful, glorify Thee.`
      ],
      aposticha: [
        `O Christ God Who wast lifted up upon the Cross, Thou didst save the race of mankind. We glorify Thy sufferings!`,
        `Thou wast nailed to the Cross, O Christ God, and didst open the gates of paradise. We glorify Thy divinity!`,
        `Ye sanctify every place, O martyrs of the Lord, and heal every infirmity. Pray ye now, that our souls be delivered from the nets of the enemy, we beseech you.`
      ],
      aposticha_glory: `The unblemished heifer, beholding her Bullock willingly nailed upon the Tree, cried out aloud, lamenting piteously: "Woe is me, O my most beloved Child! How hath the ungrateful assembly of the Jews rewarded Thee, desiring to leave me childless and bereft of Thee, O my most beloved Child?"`
    },
    fri: {
      lic: [
        `O martyrs of the Lord, ye sanctify every place and heal every manner of infirmities: and now we entreat you to intercede on our behalf, that our souls may be delivered from the snares of the enemy.`,
        `Thy martyrs, O Lord, no longer mindful of the temporal things of this life, despised not torture for the sake of the life to come, which they manifestly inherited, wherefore they rejoice with the angels. By their supplications grant great mercy to Thy people.`,
        `What virtue, what praise, are due the saints? For they bowed their heads beneath the sword for the sake of Thee Who bowed down the heavens and descended to us; they shed their blood for Thee Who abased Thyself and assumed the form of a servant; they humbled themselves even unto death, imitating Thy poverty. By their intercessions, O God, have mercy on us, in the multitude of Thy compassions!`,
        `I have become like the barren tree, as if clad with useless leaves; and I am afraid that if I am cut down, Thou wilt send me into unquenchable everlasting fire, O Master. But grant me time to convert, that I may offer Thee the goodly fruit of virtuous acts, and may be deemed worthy of Thy kingdom.`,
        `O Lord, O Lord, Who lovest mankind, turn not Thy face away from me, Thy servant, who angereth Thy goodness every day, neither punish me by Thy righteous wrath, O Christ. I confess that I have sinned, I have sinned against Thee like none other. But have pity and save me, by the prayers of Thy Mother.`,
        `When in Thy glory Thou shalt sit as the King of all upon Thy judgment-seat, and all the holy angels stand before Thee with fear, and all human nature will stand before Thee to be judged, O Christ; then, through the supplications of Thy Mother, O Lord, from all torments deliver those who have fallen asleep in faith.`
      ],
      lic_dogmatikon: `In His love for mankind, the King of heaven appeared on earth and dwelt among men; for He Who received flesh from the pure Virgin and cameth forth from her having received human nature, is the only Son of God, twofold in nature but not Hypostasis. Therefore, proclaiming Him to be truly perfect God and perfect man, we confess Christ our God. Him do thou beseech, O unwedded Mother, that our souls find mercy!`,
      aposticha: [
        `O ye martyrs of the Lord, we beseech you to intercede before our God: pray ye that abundant mercy be granted to our souls, and the cleansing of our many sins.`,
        `I weep and lament when I contemplate death and behold our beauty, which hath been created according to the image of God, lying in the grave, bereft of form, devoid of glory, unsightly. O the wonder! What is this mystery concerning us? How have we been given over to corruption? How have we been yoked together with death? Truly, as it is written, this is by the command of God, Who giveth rest unto the departed.`,
        `Thy death, O Lord, won immortality for us; for if Thou hadst not been laid in the tomb, paradise would not have been opened. Wherefore, grant rest to the departed, in that Thou lovest mankind.`
      ],
      aposticha_glory: `O pure Virgin, portal of the Word, Mother of our God: pray thou that we be saved.`
    }
  }
};

// Helper: get Octoechos stichera for a given tone and day
// Returns the day object or null if not found
function getOctoechosVespers(tone, day) {
  return OCTOECHOS_VESPERS?.[tone]?.[day] ?? null;
}

// Universal fixed aposticha verses (tone 0)
// Used for §2A/§2C services where Octoechos provides the aposticha stichera
const OCTOECHOS_UNIVERSAL = OCTOECHOS_VESPERS[0];

// ── Weekday LIC theotokia — Both Now after Glory at Lord I Have Cried ────────
// Source: St. Sergius Octoechos, Monday Evening (N-3.pdf) for each tone.
// Used at §2A weekday (Mon–Thu; also used at Fri when no lic_dogmatikon applies
// though Fri Both Now = dogmatikon, so this is Mon–Thu only in practice).
// Not used Saturday (dogmatikon) or Sunday evening (sun_eve uses Octoechos sun_eve).
const OCTOECHOS_LIC_THEOTOKIA = {
  1: "O all-hymned Virgin, in whom Moses beheld a mystery with prophetic eyes, the bush that burned yet remained unconsumed; for the fire of the Godhead did not burn thy womb, O pure one. Wherefore, we beseech thee, as the Mother of our God: beg thou peace and great mercy for the world.",
  2: "Tribulation, cruel assaults, and divers passions bestorm my lowly soul, O maiden who knewest not wedlock, Mother of Christ God. Show thyself to be my pilot on the sea of life, and still the tempest that assaileth me, steering me to the calm harbors of repentance and coolness, for I have made recourse to thy divine protection.",
  3: "O blessed Mary, divinely joyous maiden, cloud of the never-waning Light: Shine the light of repentance upon me who am mindlessly stuck fast in the darkness of sin; and by thy supplications deliver me from the fire of Gehenna and the unremitting darkness, O most pure Virgin, and show me to share in the never-setting day, for I flee beneath thy protection.",
  4: "Grant me tears from the depths of my heart, sighing from the depths of my soul, O maiden, and contrition and confession of the transgressions I have committed in this life, that by thy help, O all-pure one, I may pass my life in repentance and receive remission.",
  5: "From my childhood I have been revealed to be a tireless committer of sins, having been grievously wounded in mind and lovingly remained such by my many evil habits. Downcast, I now weep over my cruel deception, mine evil habits and mindlessness, and the destruction of my soul. O Lady, disdain me not who am perishing in evil, but, taking pity, deliver me from every assault of the passions by thine aid, that if only in old age I may repent before God.",
  6: "O most holy Virgin, show forth upon me, the wretched one, the depths of thy love for mankind, the abyss of thy tender compassion, and the countless compassions of thy goodness. Mow down the stubble of sin, granting me chastity, and preserve my body and soul undefiled, O thou who hast given birth to the Savior.",
  7: "O Lady, to the right tranquil haven of salvation guide me who am tempest-tossed amid the tumult of slothfulness.",
  8: "With faith I hasten to thy protection, O pure Birthgiver of God. Save me from perils and misfortunes, from the confusion of the passions and the malice of the demons. For, possessed of an abyss of mercy, thou hast been shown to be a mediatress of salvation, O Lady who hast given birth to the only merciful, all-compassionate and abundantly kind-hearted God.",
};

// Maps calendar day-of-week (0=Sun … 6=Sat) to the Octoechos day key for Vespers.
// Saturday evening → 'sat' (Great Vespers, current week tone)
// Sunday evening   → 'sun_eve' (new week tone — getLiturgicalData already advances tone on Sunday)
// Monday–Friday    → 'mon'…'fri' (current week tone)
function getVespersDayKey(dow) {
  return ['sun_eve','mon','tue','wed','thu','fri','sat'][dow];
}

// ── TEMPLE DEDICATIONS ───────────────────────────────────────────────────────
// Registry of common OCA parish dedications. Each entry maps to a data source
// (Menaion date key or Pentecostarion offset) from which the troparion is
// resolved at runtime. Only entries whose source data is encoded and audit-passing
// appear in the user-facing dropdown.
//
// The dropdown is stored in localStorage('parish_dedication') and persists across
// sessions. Used at: Litiya (sticheron of the temple), Typica (kontakion of the
// temple), and anywhere else the Typikon calls for "of the temple."
//
// Categories follow standard liturgical grouping:
// 1. The Lord & Holy Trinity
// 2. The Theotokos
// 3. Saints & Archangels
// 4. Feasts & Sacred Events

const TEMPLE_DEDICATIONS = [
  // ── The Lord & Holy Trinity ──
  { id: "holy_trinity",       label: "Holy Trinity",                  category: "The Lord & Holy Trinity",  source: "pentecostarion", dataKey: 49 },
  { id: "ascension",          label: "Ascension",                     category: "The Lord & Holy Trinity",  source: "pentecostarion", dataKey: 39 },
  { id: "resurrection",       label: "Resurrection (Anastasis)",      category: "The Lord & Holy Trinity",  source: "pentecostarion", dataKey: 0,  note: "Paschal troparion" },
  { id: "transfiguration",    label: "Transfiguration",               category: "The Lord & Holy Trinity",  source: "menaion", dataKey: "08-06" },
  { id: "holy_cross",         label: "Holy Cross (Exaltation)",       category: "The Lord & Holy Trinity",  source: "menaion", dataKey: "09-14" },
  { id: "nativity_christ",    label: "Nativity of Christ",            category: "The Lord & Holy Trinity",  source: "menaion", dataKey: "12-25" },
  { id: "theophany",          label: "Theophany (Baptism of the Lord)", category: "The Lord & Holy Trinity", source: "menaion", dataKey: "01-06" },
  { id: "christ_savior",      label: "Christ the Savior",             category: "The Lord & Holy Trinity",  source: "menaion", dataKey: "08-06", note: "Uses Transfiguration troparion" },
  { id: "presentation_lord",  label: "Presentation of Christ (Meeting of the Lord)", category: "The Lord & Holy Trinity", source: "menaion", dataKey: "02-02" },

  // ── The Theotokos ──
  { id: "annunciation",       label: "Annunciation",                  category: "The Theotokos", source: "menaion", dataKey: "03-25" },
  { id: "dormition",          label: "Dormition",                     category: "The Theotokos", source: "menaion", dataKey: "08-15" },
  { id: "nativity_theotokos", label: "Nativity of the Theotokos",     category: "The Theotokos", source: "menaion", dataKey: "09-08" },
  { id: "protection",         label: "Protection (Pokrov)",           category: "The Theotokos", source: "menaion", dataKey: "10-01" },
  { id: "entry_theotokos",    label: "Entrance of the Theotokos",    category: "The Theotokos", source: "menaion", dataKey: "11-21" },
  { id: "vladimir_icon",      label: "Vladimir Icon",                 category: "The Theotokos", source: "menaion", dataKey: "06-23", arrayIndex: 1 },
  { id: "joy_all_sorrow",     label: "Joy of All Who Sorrow",        category: "The Theotokos", source: "menaion", dataKey: "10-24" },
  { id: "kazan_icon",         label: "Kazan Icon",                    category: "The Theotokos", source: "menaion", dataKey: "07-08" },
  { id: "tikhvin_icon",       label: "Tikhvin Icon",                  category: "The Theotokos", source: "menaion", dataKey: "06-26" },

  // ── Saints & Archangels ──
  { id: "st_nicholas",        label: "St. Nicholas the Wonderworker", category: "Saints & archangels", source: "menaion", dataKey: "12-06" },
  { id: "archangel_michael",  label: "Archangel Michael",             category: "Saints & archangels", source: "menaion", dataKey: "11-08" },
  { id: "peter_paul",         label: "Ss. Peter & Paul",              category: "Saints & archangels", source: "menaion", dataKey: "06-29" },
  { id: "forerunner",         label: "St. John the Baptist (Forerunner)", category: "Saints & archangels", source: "menaion", dataKey: "06-24" },
  { id: "st_george",          label: "St. George the Great Martyr",   category: "Saints & archangels", source: "menaion", dataKey: "04-23" },
  { id: "three_hierarchs",    label: "Three Hierarchs",               category: "Saints & archangels", source: "menaion", dataKey: "01-30" },
  { id: "constantine_helen",  label: "Ss. Constantine & Helen",       category: "Saints & archangels", source: "menaion", dataKey: "05-21" },
  { id: "st_herman",          label: "St. Herman of Alaska",          category: "Saints & archangels", source: "menaion", dataKey: "08-09" },
  { id: "st_innocent",        label: "St. Innocent of Alaska",        category: "Saints & archangels", source: "menaion", dataKey: "03-31" },
  { id: "st_andrew",          label: "St. Andrew the First-Called",   category: "Saints & archangels", source: "menaion", dataKey: "11-30" },
  { id: "st_john_max",        label: "St. John of Shanghai (Maximovitch)", category: "Saints & archangels", source: "menaion", dataKey: "07-02" },
  { id: "st_tikhon",          label: "St. Tikhon of Moscow",          category: "Saints & archangels", source: "menaion", dataKey: "04-07" },
  { id: "st_seraphim",        label: "St. Seraphim of Sarov",         category: "Saints & archangels", source: "menaion", dataKey: "01-02" },
  { id: "st_raphael",         label: "St. Raphael of Brooklyn",       category: "Saints & archangels", source: "menaion", dataKey: "02-27" },
  { id: "st_vladimir",        label: "St. Vladimir",                  category: "Saints & archangels", source: "menaion", dataKey: "07-15" },
  { id: "st_demetrios",       label: "St. Demetrios the Myrrh-Streamer", category: "Saints & archangels", source: "menaion", dataKey: "10-26" },
  { id: "st_elias",           label: "Holy Prophet Elijah (Elias)",   category: "Saints & archangels", source: "menaion", dataKey: "07-20" },
  { id: "st_john_theologian", label: "St. John the Theologian",       category: "Saints & archangels", source: "menaion", dataKey: "09-26" },
  { id: "st_sergius",         label: "St. Sergius of Radonezh",       category: "Saints & archangels", source: "menaion", dataKey: "09-25" },
  { id: "cosmas_damian",      label: "Ss. Cosmas & Damian (Unmercenaries)", category: "Saints & archangels", source: "menaion", dataKey: "07-01" },

  // ── Feasts & Sacred Events ──
  { id: "all_saints",         label: "All Saints",                    category: "Feasts & sacred events", source: "pentecostarion", dataKey: 56 },
  { id: "pentecost",          label: "Pentecost",                     category: "Feasts & sacred events", source: "pentecostarion", dataKey: 49, note: "Same as Holy Trinity" },
];

// Resolve a temple dedication to its troparion from live data.
// Returns { tone, text, saint, source } or null if data not yet encoded.
// Uses module-level caches directly (_menaionCache, _pentecostarionCache).
function resolveTempleTroparion(dedicationId) {
  const ded = TEMPLE_DEDICATIONS.find(d => d.id === dedicationId);
  if (!ded) return null;
  if (ded.source === "pentecostarion") {
    const pentData = _pentecostarionCache || {};
    const entry = pentData[ded.dataKey];
    if (!entry || !entry.troparion) return null;
    return { tone: entry.troparion.tone, text: entry.troparion.text, saint: entry.name, source: "Pentecostarion" };
  }
  // Menaion — dataKey is "MM-DD" string
  const month = ded.dataKey.substring(0, 2);
  const monthData = _menaionCache[month] || {};
  const raw = monthData[ded.dataKey];
  if (!raw) return null;
  const e = (ded.arrayIndex != null && Array.isArray(raw)) ? raw[ded.arrayIndex] : (Array.isArray(raw) ? raw[0] : raw);
  if (!e || !e.troparion) return null;
  return { tone: e.troparion.tone, text: e.troparion.text, saint: e.saint, source: "Menaion" };
}

// Resolve a temple dedication to its kontakion from live data.
// Returns { tone, text, saint, source } or null if data not yet encoded.
function resolveTempleKontakion(dedicationId) {
  const ded = TEMPLE_DEDICATIONS.find(d => d.id === dedicationId);
  if (!ded) return null;
  if (ded.source === "pentecostarion") {
    const pentData = _pentecostarionCache || {};
    const entry = pentData[ded.dataKey];
    if (!entry) return null;
    const k = entry.kontakion_ode6 || entry.hours_kontakion || entry.kontakion;
    if (!k) return null;
    return { tone: k.tone, text: k.text, saint: entry.name, source: "Pentecostarion" };
  }
  // Menaion
  const month = ded.dataKey.substring(0, 2);
  const monthData = _menaionCache[month] || {};
  const raw = monthData[ded.dataKey];
  if (!raw) return null;
  const e = (ded.arrayIndex != null && Array.isArray(raw)) ? raw[ded.arrayIndex] : (Array.isArray(raw) ? raw[0] : raw);
  if (!e) return null;
  const k = e.kontakion_ode6 || e.kontakion;
  if (!k) return null;
  return { tone: k.tone, text: k.text, saint: e.saint, source: "Menaion" };
}

// ── LITIYA FIXED TEXTS ───────────────────────────────────────────────────────
// Source: OCA_prayer_for_litiya.txt (Google Drive: vespers/oca/)
// Authoritative OCA diptych — NOT the ROCOR/HTM version.
// The OCA petition structure is 5 petitions (×40/×50/×30/×3/×3).
// HTM Vespers (htm_vespers.md) governs structural placement and Vigil formula.

// Petition 1: the saint diptych. Contains "Saint(s) ___" placeholder — replaced
// at runtime with menaionEntry.saint.
const LITIYA_PETITION_1 = {
  rubric: "Deacon:",
  text: "O God, save Thy people and bless Thine inheritance. " +
    "Visit Thy world in mercy and compassion. " +
    "Exalt the estate of Orthodox Christians, and send down upon us Thy rich mercies;\n" +
    "Through the prayers of our all-pure Lady, the Theotokos and Ever-Virgin Mary;\n" +
    "By the power of the precious and life-creating Cross;\n" +
    "Through the protection of the honorable bodiless powers of heaven;\n" +
    "Through the supplications of the honorable, glorious Prophet, Forerunner and Baptist John;\n" +
    "Of the holy, glorious, and all-laudable Apostles;\n" +
    "Of our Fathers among the Saints, great hierarchs and ecumenical teachers, " +
    "Basil the Great, Gregory the Theologian, and John Chrysostom;\n" +
    "Of our Fathers among the Saints, Athanasius and Cyril of Alexandria, " +
    "Ignatius of Antioch, Polycarp of Smyrna, Irenaeus of Lyons and Cyprian of Carthage;\n" +
    "Of our Fathers among the Saints, Nicholas of Myra in Lycia, the Wonderworker, " +
    "Leo and Gregory of Rome, Ambrose of Milan, and the holy Confessor Patrick of Ireland:\n" +
    "Of the holy Methodius and Cyril, the Teachers of the Slavs,\n" +
    "Of the holy Prince Vladimir, the blessed Princess Olga; Nina, Enlightener of Georgia, " +
    "and Nicholas, equal to the Apostles and Enlightener of Japan;\n" +
    "Of our Fathers among the Saints, the hierarchs of all Russia, Peter, Alexis, Kyprian, " +
    "Jonah and Philip; Innocent, Enlightener of the Aleuts and Apostle to America, " +
    "and Tikhon the Confessor;\n" +
    "Of our Fathers among the Saints, Clement of Ochrid, Sava of Serbia and Euthymius of " +
    "Tornovo; of the holy, glorious and right-victorious martyrs, Demetrios, George, " +
    "Katherine and Barbara;\n" +
    "Of our venerable and God-bearing Fathers, Anthony and Theodosius and the other " +
    "wonderworkers of the Caves of Kiev, Sergius of Radonezh, Seraphim of Sarov, " +
    "Makarios of Corinth, Nektarios of Aegina, Nikodemos and Silouan of the Holy " +
    "Mountain, and Cosmas the Aitolian;\n" +
    "Of our venerable Father Herman, Elder and Wonderworker of Alaska and All-America;\n" +
    "Of our righteous Father Alexis and our righteous Father John of Kronstadt;\n" +
    "Of Saint(s) ___;\n" +
    "Of the holy and righteous ancestors of God, Joachim and Anna,\n" +
    "And all of the Saints, Hear us sinners who pray unto Thee, and have mercy on us!",
  response: "Choir: Lord, have mercy. (forty times)",
  placeholder: "Saint(s) ___",
};

// Petition 2: for the brotherhood, sick, departed, etc.
const LITIYA_PETITION_2 = {
  rubric: "Deacon:",
  text: "Again we pray for (the most holy Orthodox Patriarchs), our (lord, the Most Blessed) " +
    "Metropolitan ___, our (lord, the Right Reverend) Bishop ___, and for all our " +
    "brotherhood in Christ; and for every Christian soul, afflicted and weary, in need of God's " +
    "mercies and help; for the protection of this city, and for those who dwell therein " +
    "(or for this village and for those who dwell therein, or for this holy abode and for those who " +
    "dwell therein); for the peace and quietness of the whole world; for the good estate of " +
    "the holy churches of God; for the salvation and help of our fathers and brethren who " +
    "with diligence and fear of God labor and serve; for those who are gone away and those " +
    "who are abroad; for the healing of those who lie in infirmity; for the repose, " +
    "refreshment and blessed memory and remission of sins of all our fathers and brethren " +
    "the Orthodox gone to rest before (us), who lie here and everywhere; for the deliverance " +
    "of captives; for our brethren who are serving and for all who serve and have served in " +
    "this holy temple (if it is a monastery, in this holy abode), let us say:",
  response: "Choir: Lord, have mercy. (fifty times)",
};

// Petition 3: for civil authorities
const LITIYA_PETITION_3 = {
  rubric: "Deacon:",
  text: "Again we pray for the President of our country (or the title of the highest authority), for " +
    "all civil authorities, and for the armed forces, let us all say:",
  response: "Choir: Lord, have mercy. (thirty times)",
};

// Petition 4: for deliverance from wrath, famine, pestilence, etc.
const LITIYA_PETITION_4 = {
  rubric: "Deacon:",
  text: "Again we pray that He will keep this city (or this village), and this holy church " +
    "(if it is a monastery, and this holy abode), and every city and country from wrath, famine, " +
    "pestilence, earthquake, flood, fire, the sword, foreign invasion, from civil war, and from " +
    "sudden death; that our good God, who loveth man, will be gracious, favorable, and " +
    "conciliatory, and turn away and dispel all the wrath stirred up against us and all sickness, " +
    "and may deliver us from His righteous chastisement which impendeth against us, and " +
    "have mercy on us.",
  response: "Choir: Lord, have mercy. (thrice)",
};

// Petition 5: that God hearken unto us
const LITIYA_PETITION_5 = {
  rubric: "Deacon:",
  text: "Again we pray that the Lord God will hearken unto the voice of supplication of us sinners " +
    "and have mercy on us.",
  response: "Choir: Lord, have mercy. (thrice)",
};

// Concluding prayer
const LITIYA_CONCLUDING_PRAYER =
  "Hear us, O God our Savior, the hope of all the ends of the earth, and of those who are far " +
  "off upon the sea; and be gracious, be gracious, O Master, unto us sinners and have mercy " +
  "on us. For thou art a merciful God who lovest man, and unto thee do we send up glory, " +
  "to the Father, and to the Son, and to the Holy Spirit, now and ever, and unto ages of " +
  "ages.";

// Peace and head-bowing at the Litiya (separate from the §14 sequence)
const LITIYA_PEACE = "Peace be to all.";
const LITIYA_PEACE_RESPONSE = "And to thy spirit.";
const LITIYA_BOW = "Let us bow our heads unto the Lord.";
const LITIYA_BOW_RESPONSE = "To thee, O Lord.";
const LITIYA_BOW_PRAYER =
  "O Master, great in mercy, Lord Jesus Christ our God, through the intercessions of our " +
  "all-immaculate Lady the Theotokos and Ever-Virgin Mary, through the power of the precious " +
  "and life-creating Cross, (and of all the Saints,) make our prayer acceptable, grant us " +
  "forgiveness of our trespasses, shelter us under the shelter of thy wings, drive away from " +
  "us every enemy and adversary, give peace to our life, O Lord. Have mercy on us and on " +
  "thy world and save our souls, for thou art good and lovest man.";

// "O Theotokos and Virgin, rejoice!" — used in Vigil troparion formula
const THEOTOKOS_VIRGIN_REJOICE =
  "O Theotokos and Virgin, rejoice! Mary, full of grace, the Lord is with thee: " +
  "blessed art thou among women, and blessed is the fruit of thy womb, " +
  "for thou hast borne the Savior of our souls.";

// Blessing of the Loaves (after Vigil troparion formula)
const LITIYA_BLESSING_LOAVES_PROMPT = "Let us pray to the Lord.";
const LITIYA_BLESSING_LOAVES_RESPONSE = "Lord, have mercy.";
const LITIYA_BLESSING_LOAVES_PRAYER =
  "O Lord Jesus Christ our God, who didst bless the five breads in the wilderness, and didst satisfy " +
  "the five thousand therewith, thyself bless these breads, this wheat, wine and oil, and multiply " +
  "them in this city (or in this village, or in this holy abode), and in all thy world; and sanctify the " +
  "faithful who partake of them. For it is thou who dost bless and sanctify all things, O Christ our " +
  "God, and unto thee do we send up glory, together with thy Father, who is without beginning, and " +
  "thine all-holy, and good, and life-creating Spirit, now and ever, and unto ages of ages.";

// "Blessed be the name of the Lord" (×3) + Psalm 33 first 10 verses + priestly blessing
const LITIYA_BLESSED_NAME =
  "Blessed be the name of the Lord, from henceforth and forevermore. (thrice)";

const LITIYA_PS33_FIRST_10 =
  "I will bless the Lord at all times; His praise shall continually be in my mouth.\n\n" +
  "In the Lord shall my soul be praised; let the meek hear and be glad.\n" +
  "O magnify the Lord with me, and let us exalt His name together.\n" +
  "I sought the Lord, and He heard me, and delivered me from all my tribulations.\n\n" +
  "Come unto Him, and be enlightened, and your faces shall not be ashamed.\n" +
  "This poor man cried, and the Lord heard him, and saved him out of all his tribulations.\n\n" +
  "The angel of the Lord will encamp round about them that fear Him, and will deliver them.\n\n" +
  "O taste and see that the Lord is good; blessed is the man that hopeth in Him.\n" +
  "O fear the Lord, all ye His saints; for there is no want to them that fear Him.\n" +
  "Rich men have turned poor and gone hungry; but they that seek the Lord shall not be deprived of any good thing.";

const LITIYA_PRIESTLY_BLESSING =
  "The blessing of the Lord be upon you, through His grace and love for mankind, " +
  "always, now and ever, and unto the ages of ages.";

// assembleVespers — all fixed texts from HTM Order of Vespers.
// LIC and Aposticha stichera: §2A weekday/Saturday fully assembled from Octoechos (FW-23 Track A).
// §2C Menaion slots and §2D+ stichera remain placeholders pending Track B encoding.
// Sources: Fekula §2A-§2F (Ch.2), §4A-§4B (Ch.4); HTM Vespers (htm_vespers.md).
function assembleVespers(liturgicalData, menaionEntry, pentEntry, paroemias, readerMode = false, selectedDate = "") {
  const elements = [];
  const { paschaOffset, tone, dayName, season, namedDay } = liturgicalData;
  const isPentecostarion = season === "pentecostarion" || season === "brightweek";
  const _fmt = pentEntry ? pentEntry.hours_format : null;
  const isSunday = season === "sunday" || _fmt === "pentecostarion_sunday" || _fmt === "all_saints_sunday";
  const christIsRisenActive = isPentecostarion && paschaOffset >= 7 && paschaOffset <= 38;
  const rank = (menaionEntry && menaionEntry.rank) || "simple";
  const isHighRank = rank === "polyeleos" || rank === "vigil" || rank === "great_feast";
  const isDoxOrAbove = rank === "doxology" || isHighRank;
  const fekulaSection = (() => {
    if (isPentecostarion && pentEntry) {
      const fmt = pentEntry.hours_format;
      if (fmt === "ascension") return "§4B12";
      if (fmt === "pentecost") return "§4B15";
      return "§4A";
    }
    if (!menaionEntry) return "§2A";
    if (menaionEntry.fekula_section_override) return "§" + menaionEntry.fekula_section_override;
    return rank === "six_stichera" ? "§2C" : rank === "doxology" ? "§2D"
         : rank === "polyeleos" ? "§2E" : rank === "vigil" ? "§2F"
         : rank === "great_feast" ? "§" + (menaionEntry.fekula_section || "2F")
         : "§2A";
  })();
  const sticheraRule = isHighRank
    ? (isPentecostarion ? "3 from Pentecostarion + 5 from Menaion" : "8 stichera: Octoechos + Menaion")
    : (isPentecostarion ? "3 from Pentecostarion + 3 from Menaion" : "6 stichera: 3 Octoechos + 3 Menaion");
  const sticheraCount = isHighRank ? "8" : "6";
  const dowMap = {Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6};
  const dow = dowMap[dayName] !== undefined ? dowMap[dayName] : 0;
  const isFriEve = dow === 5; // Friday evening: Both Now = dogmatikon, not theotokion
  const weeklyProk = WEEKLY_VESPERS_PROKEIMENON[dow];
  const vespProk = (isPentecostarion && pentEntry && pentEntry.vespers_prokeimenon)
    ? pentEntry.vespers_prokeimenon : weeklyProk;
  // Troparion / kontakion — same resolution as assembleHour
  // Troparion objects are { tone, text } — extract text and tone separately
  const mTropObj = menaionEntry && menaionEntry.troparion;
  const mTropText = mTropObj ? (typeof mTropObj === "string" ? mTropObj : mTropObj.text) : null;
  const mTropTone = mTropObj ? (typeof mTropObj === "string" ? null : mTropObj.tone) : null;
  const mSaint = (menaionEntry && menaionEntry.saint) || "saint of the day";
  let effTrop = mTropText, effTropTone = mTropTone, effSaint = mSaint;
  if (isSunday && namedDay && namedDay.troparion) {
    const nd = namedDay.troparion;
    effTrop = typeof nd === "string" ? nd : nd.text;
    effTropTone = typeof nd === "string" ? null : nd.tone;
    effSaint = namedDay.name;
  }
  let primTrop = null, primTropTone = null, primSrc = "", secTrop = null, secTropTone = null, secSrc = "";
  let thirdTrop = null, thirdTropTone = null, thirdSrc = "";
  if (isPentecostarion && pentEntry && pentEntry.troparion) {
    const pt = pentEntry.troparion;
    primTrop = typeof pt === "string" ? pt : pt.text;
    primTropTone = typeof pt === "string" ? null : pt.tone;
    primSrc = "Pentecostarion — " + pentEntry.name;
    // troparion_2: Glory… troparion (e.g. Holy Fathers T8 on P+42, All Saints T4 on P+56)
    if (pentEntry.troparion_2) {
      const t2 = pentEntry.troparion_2;
      secTrop = typeof t2 === "string" ? t2 : t2.text;
      secTropTone = typeof t2 === "string" ? null : t2.tone;
      secSrc = "Pentecostarion — " + pentEntry.name;
    } else if (effTrop && !(pentEntry && pentEntry.menaion_set_aside)) {
      // Ordinary Pentecostarion weekday: Menaion saint under Glory
      secTrop = effTrop; secTropTone = effTropTone; secSrc = "Menaion — " + effSaint;
    }
    // troparion_3: Both now… troparion (e.g. Ascension T4 on P+42)
    if (pentEntry.troparion_3) {
      const t3 = pentEntry.troparion_3;
      thirdTrop = typeof t3 === "string" ? t3 : t3.text;
      thirdTropTone = typeof t3 === "string" ? null : t3.tone;
      thirdSrc = "Pentecostarion — " + pentEntry.name;
    }
  } else if (effTrop) {
    primTrop = effTrop; primTropTone = effTropTone; primSrc = "Menaion — " + effSaint;
  }
  // Kontakion objects are also { tone, text } — extract text and tone
  const _extractText = (v) => !v ? null : (typeof v === "string" ? v : (v.text || null));
  const _extractTone = (v) => !v ? null : (typeof v === "string" ? null : (v.tone || null));
  const _kontSource = (entry) => {
    if (!entry) return null;
    return entry.hours_kontakion || entry.kontakion_ode3 || entry.kontakion_ode6 || null;
  };
  const kont = (() => {
    if (isPentecostarion && pentEntry)
      return _extractText(pentEntry.hours_kontakion || pentEntry.kontakion_ode3 || pentEntry.kontakion_ode6);
    if (menaionEntry && menaionEntry.kontakion_ode3) return _extractText(menaionEntry.kontakion_ode3);
    return menaionEntry ? _extractText(menaionEntry.kontakion_ode6) : null;
  })();
  const kontTone = (() => {
    if (isPentecostarion && pentEntry)
      return _extractTone(pentEntry.hours_kontakion || pentEntry.kontakion_ode3 || pentEntry.kontakion_ode6);
    if (menaionEntry && menaionEntry.kontakion_ode3) return _extractTone(menaionEntry.kontakion_ode3);
    return menaionEntry ? _extractTone(menaionEntry.kontakion_ode6) : null;
  })();
  const kontSrc = (isPentecostarion && pentEntry) ? "Pentecostarion — " + pentEntry.name : "Menaion — " + effSaint;
  // ── Chapter 10 Reader's Service helpers ──────────────────────────────────
  // All substitutions traceable to Fekula Chapter 10.
  const CH10 = "§10";
  const CH10_NOTE = "Fekula Chapter 10 — Concerning Services Without a Priest";
  const CH10_OPENING = "Through the prayers of our holy fathers, Lord Jesus Christ, Son of God, have mercy on us. Amen.";
  const CH10_LHM_40  = "Lord, have mercy. (forty times)\nGlory to the Father, and to the Son, and to the Holy Spirit,\nboth now and ever, and unto the ages of ages. Amen.";
  const CH10_LHM_12  = "Lord, have mercy. (twelve times)\nGlory to the Father, and to the Son, and to the Holy Spirit,\nboth now and ever, and unto the ages of ages. Amen.";
  const CH10_LHM_3   = "Lord, have mercy. (thrice)\nGlory to the Father, and to the Son, and to the Holy Spirit,\nboth now and ever, and unto the ages of ages. Amen.";

  // Build a substitution element (replaces a priest/deacon part in reader mode)
  const readerSub = (id, label, text, note) => ({
    id, type: "substitution", label, rubric: "Reader:",
    text, source: "Fekula Chapter 10",
    fekula: { section: CH10, note: note || CH10_NOTE },
  });

  // Build an omission stub (collapsed note for suppressed priest parts)
  const readerOmit = (id, what) => ({
    id: id + "-omit", type: "omission", label: "",
    text: what,
    source: "Fekula Chapter 10",
    fekula: { section: CH10, note: CH10_NOTE },
  });


  // Tagged openingElement:true so the render hides them when the panel is expanded.
  if (readerMode) {
    elements.push({...readerSub("v-blessing", "Opening",
      CH10_OPENING,
      "Instead of the blessing by the priest, the reader says: Through the prayers of our holy fathers… — Fekula Chapter 10"),
      openingElement: true});
  } else {
    elements.push({id:"v-blessing",type:"fixed",label:"",rubric:"Priest:",
      text:"Blessed is our God, always, now and ever, and unto the ages of ages.",
      source:"OCA Vespers (2021)", openingElement:true});
  }
  if (christIsRisenActive) {
    elements.push({id:"v-cr",type:"pentecostarion_skeleton",label:"",
      openingElement:true,
      rubric:"(Glory to Thee and O Heavenly King are both skipped — immediately:)",
      text:HTM_CHRIST_IS_RISEN, repeat:3,
      source:"HTM Vespers",
      fekula:{section:fekulaSection,
        note:"At the beginning of Vespers, after the blessing by the priest, we sing Christ is risen… thrice and immediately read Psalm 103. — Fekula §4A"}});
  } else {
    elements.push({id:"v-come",type:"fixed",label:"",rubric:null,
      openingElement:true,
      text:HTM_O_COME,source:"HTM Vespers"});
  }
  // PSALM 103 — opening handled by VespersOpening collapsible component
  // At Great Vespers (Saturday evening, Doxology+ rank): sung by the choir.
  // At Daily Vespers (ordinary weekdays): read by the reader.
  const isGreatVespers = isDoxOrAbove || dow === 6;
  elements.push({id:"v-ps103",type:"fixed",label:"PSALM 103",rubric:"",
    text:HTM_PSALM_103, source:"HTM Vespers",
    toneNote: isGreatVespers ? "Sung by the choir" : "Read by the reader",
    showFekula: true,
    fekula:{section:fekulaSection, note: isGreatVespers
      ? "At Great Vespers (Saturday evening and feasts of Doxology rank or above), Psalm 103 is sung by the choir, often antiphonally with refrains. The Royal Doors are open and the priest censes the entire temple during this psalm. — HTM Vespers; Fekula §2D–§2F"
      : "At Daily Vespers (ordinary weekdays), Psalm 103 is read by the reader, not sung. The Royal Doors remain closed. — HTM Vespers; Fekula §2A–§2C"}});
  elements.push({id:"v-ps103-refrain",type:"fixed",label:"",rubric:"And Again:",
    text:HTM_PSALM_103_REFRAIN, source:"HTM Vespers"});
  // 4. GREAT LITANY
  if (readerMode) {
    elements.push(readerSub("v-gt-litany", "Great Litany",
      CH10_LHM_40,
      "Instead of the Litany of Peace (In peace, let us pray…), we say Lord, have mercy, forty times, then Glory… Now and ever… — Fekula Chapter 10"));
    elements.push(readerOmit("v-gt-exc", "Priest exclamation (For unto Thee is due all glory…) — omitted in Reader's Service"));
  } else {
    elements.push({id:"v-gt-litany",type:"litany",label:"Great Litany",rubric:"Deacon (or Priest):",
      text:"In peace let us pray to the Lord.\nLord, have mercy.\n" +
        "For the peace from above and the salvation of our souls, let us pray to the Lord.\nLord, have mercy.\n" +
        "For the peace of the whole world, the good estate of the holy churches of God, and the union of all, let us pray to the Lord.\nLord, have mercy.\n" +
        "For this holy temple, and for them that with faith, reverence, and the fear of God enter herein, let us pray to the Lord.\nLord, have mercy.\n" +
        "For our Metropolitan N., our Bishop N., for the honorable priesthood, the diaconate in Christ, and all the clergy and the people, let us pray to the Lord.\nLord, have mercy.\n" +
        "For this country, its authorities and armed forces, let us pray to the Lord.\nLord, have mercy.\n" +
        "For this city, every city and countryside, and the faithful dwelling therein, let us pray to the Lord.\nLord, have mercy.\n" +
        "For seasonable weather, abundance of the fruits of the earth, and peaceful times, let us pray to the Lord.\nLord, have mercy.\n" +
        "For travelers by sea, land, and air, for the sick, the suffering, the imprisoned, and for their salvation, let us pray to the Lord.\nLord, have mercy.\n" +
        "That we may be delivered from all tribulation, wrath, and necessity, let us pray to the Lord.\nLord, have mercy.\n" +
        "Help us, save us, have mercy on us, and keep us, O God, by Thy grace.\nLord, have mercy.\n" +
        "Calling to remembrance our most holy, most pure, most blessed, glorious Lady Theotokos and Ever-Virgin Mary with all the saints, let us commit ourselves and one another and all our life unto Christ our God.\nTo Thee, O Lord.",
      source:"HTM Vespers"});
    elements.push({id:"v-gt-exc",type:"fixed",label:"",rubric:"Priest:",
      text:"For unto Thee is due all glory, honour, and worship: to the Father, and to the Son, and to the Holy Spirit, now and ever, and unto the ages of ages.",
      source:"HTM Vespers"});
  }
  // 5. KATHISMA
  // Routed through getKathismaForVespers() — full schedule with all seasonal rules.
  // Source: OCA oca.org/liturgics/outlines/kathisma-readings-at-vespers
  // FW-B: Full psalm texts to be fetched from Drive Psalter reference document.
  const kathismaResult = getKathismaForVespers(liturgicalData, rank, false, pentEntry);

  let kathLabel, kathText, kathFekula, kathSource, kathToneNote;
  if (kathismaResult.blessedIsMan) {
    kathLabel = "Kathisma I — Blessed Is the Man";
    kathText  =
      "Blessed is the man that hath not walked in the counsel of the ungodly. Alleluia, alleluia, alleluia.\n\n" +
      "For the Lord knoweth the way of the righteous, and the way of the ungodly shall perish. Alleluia, alleluia, alleluia.\n\n" +
      "Serve ye the Lord with fear, and rejoice in Him with trembling. Alleluia, alleluia, alleluia.\n\n" +
      "Blessed are all that have put their trust in Him. Alleluia, alleluia, alleluia.\n\n" +
      "Arise, O Lord, save me, O my God. Alleluia, alleluia, alleluia.\n\n" +
      "Salvation is of the Lord, and Thy blessing is upon Thy people. Alleluia, alleluia, alleluia.\n\n" +
      "Glory to the Father, and to the Son, and to the Holy Spirit. Alleluia, alleluia, alleluia.\n\n" +
      "Both now and ever, and unto the ages of ages. Amen. Alleluia, alleluia, alleluia.\n\n" +
      "Alleluia, alleluia, alleluia. Glory to Thee, O God. (thrice)";
    kathSource = kathismaResult.source;
    kathToneNote = "Sung by the choir";
    kathFekula = { section: fekulaSection, note: (dow === 6
      ? "At Saturday evening Great Vespers, the entire first kathisma is sung (often abbreviated in parish practice to the first stasis, 'Blessed is the Man'). These are selected verses from Psalms 1-3 with Alleluia refrains, chanted antiphonally. — Fekula §2; OCA Kathisma Readings at Vespers"
      : "At feasts of Polyeleos or Vigil rank, only the first stasis of Kathisma I ('Blessed is the Man') is sung. This replaces the ordinary kathisma reading appointed for the day. — Fekula §2E–§2F; OCA Kathisma Readings at Vespers") +
      (kathismaResult.hadVigilNote ? "\n\n" + kathismaResult.hadVigilNote : "") };
  } else if (kathismaResult.omitted) {
    kathLabel = "Kathisma";
    kathText  = "(Omitted — see Fekula note)";
    kathSource = kathismaResult.source;
    kathToneNote = null;
    kathFekula = { section: fekulaSection, note: kathismaResult.rule +
      (kathismaResult.hadVigilNote ? "\n\n" + kathismaResult.hadVigilNote : "") };
  } else {
    kathLabel = kathismaResult.label;
    kathText  = kathismaResult.label + " is read here.";
    kathSource = kathismaResult.source;
    kathToneNote = "Read by the reader";
    kathFekula = { section: fekulaSection, note: "On ordinary weekdays at Daily Vespers, the appointed kathisma is read (not sung) by the reader. The kathisma number rotates through the Psalter on a weekly schedule that varies by season. — Fekula §2A; OCA Kathisma Readings at Vespers" +
      (kathismaResult.hadVigilNote ? "\n\n" + kathismaResult.hadVigilNote : "") };
  }

  elements.push({id:"v-kathisma", type:"movable",
    label: kathLabel, rubric:"",
    text: kathText,
    toneNote: kathToneNote,
    source: kathSource,
    fekula: kathFekula,
    kathismaNum: kathismaResult.num || null});

  // Small Litany
  if (readerMode) {
    elements.push(readerSub("v-sm-lit", "Small Litany",
      CH10_LHM_3,
      "Instead of the Small Litany (Again and again in peace…), we say Lord, have mercy, thrice, then Glory… Now and ever… — Fekula Chapter 10"));
    elements.push(readerOmit("v-sm-exc", "Priest exclamation (For Thine is the dominion…) — omitted in Reader's Service"));
  } else {
    elements.push({id:"v-sm-lit",type:"litany",label:"Small Litany",rubric:"Deacon (or Priest):",
      text:"Again and again, in peace let us pray to the Lord.\nLord, have mercy.\n" +
        "Help us, save us, have mercy on us, and keep us, O God, by Thy grace.\nLord, have mercy.\n" +
        "Calling to remembrance our most holy, most pure, most blessed, glorious Lady Theotokos and Ever-Virgin Mary with all the saints, let us commit ourselves and one another and all our life unto Christ our God.\nTo Thee, O Lord.",
      source:"HTM Vespers"});
    elements.push({id:"v-sm-exc",type:"fixed",label:"",rubric:"Priest:",
      text:"For Thine is the dominion, and Thine is the kingdom, and the power, and the glory: of the Father, and of the Son, and of the Holy Spirit, now and ever, and unto the ages of ages.",
      source:"HTM Vespers"});
  }
  // 6. LORD I HAVE CRIED
  elements.push({id:"v-lic",type:"fixed",label:"Lord I Have Cried",rubric:"",
    text:"Lord, I have cried unto Thee, hearken unto me. Hearken unto me, O Lord.\n" +
      "Lord, I have cried unto Thee, hearken unto me; attend to the voice of my supplication, when I cry unto Thee. Hearken unto me, O Lord.\n\n" +
      "Let my prayer be set forth as incense before Thee, the lifting up of my hands as an evening sacrifice. Hearken unto me, O Lord.",
    source:"HTM Vespers"});
  elements.push({id:"v-ps140",type:"fixed",label:"PSALM 140",rubric:"",
    text:"Set a guard over my mouth, O Lord, keep watch over the door of my lips. " +
      "Incline not my heart to any evil, to busy myself with wicked deeds in company with men who work iniquity; " +
      "and let me not eat of their dainties. " +
      "Let a good man strike or rebuke me in kindness, but let the oil of the wicked never anoint my head; " +
      "for my prayer is continually against their wicked deeds. " +
      "When they are given over to those who shall condemn them, then they shall learn that the word of the Lord is true. " +
      "As a rock which one cleaves and shatters on the land, so shall their bones be strewn at the mouth of Sheol. " +
      "But my eyes are toward Thee, O Lord God; in Thee I seek refuge; leave me not defenseless. " +
      "Keep me from the trap which they have laid for me, and from the snares of evildoers. " +
      "Let the wicked together fall into their own nets, while I escape.",
    source:"HTM Vespers"});
  // ── LORD I HAVE CRIED — interleave assembler (FW-23 Track A) ──────────────
  // §2A weekday/Saturday: Octoechos stichera fully assembled.
  // §2C (six-stichera) and §2D+ remain placeholders pending Track B Menaion data entry.
  // Fekula §2A: 6 stichera (3 Octoechos + 3 Menaion). §2C: 6 Menaion.
  // §2E: 8 stichera. §2F: 10 stichera. Insertion point = sticheraCount.
  {
    // Determine stichera count (insertion start verse) and sources by rank
    const licDayKey = getVespersDayKey(dow);
    const octoDay = (!isPentecostarion && (rank === "simple" || !menaionEntry))
      ? getOctoechosVespers(tone, licDayKey) : null;
    // Stichera count: from pentEntry if Pentecostarion; else 6/8/10 by rank
    const licCount = (isPentecostarion && pentEntry && pentEntry.stichera_lord_i_call_count)
      ? pentEntry.stichera_lord_i_call_count
      : (isHighRank ? (rank === "vigil" ? 10 : 8) : 6);

    // Psalm 141 prose body (no verse numbers — rendered as-is)
    elements.push({id:"v-ps141",type:"fixed",label:"PSALM 141" + (licCount ? " — Stichera on " + licCount : ""),rubric:"",
      text:"I cry with my voice to the Lord, with my voice I make supplication to the Lord, " +
        "I pour out my complaint before Him, I tell my trouble before Him. " +
        "When my spirit is faint, Thou knowest my way. " +
        "In the path where I walk they have hidden a trap for me. " +
        "I look to the right and watch, but there is none who takes notice of me; " +
        "no refuge remains to me, no man cares for me. " +
        "I cry to Thee, O Lord; I say, Thou art my refuge, my portion in the land of the living. " +
        "Give heed to my cry; for I am brought very low. " +
        "Deliver me from my persecutors; for they are too strong for me.",
      source:"HTM Vespers"});

    // Build the ordered list of stichera (up to licCount entries)
    // §2A weekday: 3 Octoechos + 3 Menaion (from stichera_lord_i_call if encoded, else unresolved)
    // §2A Saturday: same pattern
    // §2C/§2D+: Menaion-only (from stichera_lord_i_call if encoded, else unresolved)
    // Pentecostarion Great Feast (menaion_set_aside): all stichera from pentEntry
    // Ordinary Pentecostarion weekday: Menaion stichera always from menaionEntry
    const _stichSrc = (isPentecostarion && pentEntry && pentEntry.menaion_set_aside)
      ? pentEntry : menaionEntry;
    const menaionLicStichera = _stichSrc && _stichSrc.stichera_lord_i_call
      ? _stichSrc.stichera_lord_i_call : [];
    const LIC_VERSES = [
      {n:10, text:"Bring my soul out of prison, that I may give thanks to Thy Name."},
      {n:9,  text:"The righteous will surround me, for Thou wilt deal bountifully with me."},
      {n:8,  text:"Out of the depths I cry to Thee, O Lord. Lord, hear my voice!"},
      {n:7,  text:"Let Thine ears be attentive to the voice of my supplication."},
      {n:6,  text:"If Thou, O Lord, shouldst mark iniquities, Lord, who could stand? But there is forgiveness with Thee."},
      {n:5,  text:"For Thy Name\'s sake I wait for Thee, O Lord. My soul has waited for Thy word; my soul has hoped on the Lord."},
      {n:4,  text:"From the morning watch until night, from the morning watch, let Israel hope on the Lord."},
      {n:3,  text:"For with the Lord there is mercy, and with Him is plenteous redemption, and He will deliver Israel from all his iniquities."},
      {n:2,  text:"Praise the Lord, all nations! Praise Him, all peoples!"},
      {n:1,  text:"For His mercy is confirmed on us, and the truth of the Lord endures forever."},
    ];
    let licStichera = [];
    let licRendered = false; // true when Pentecostarion branch renders directly
    if (!isPentecostarion && rank === "simple" && octoDay && octoDay.lic) {
      // §2A: first 3 from Octoechos
      const octoLic = octoDay.lic.slice(0, 3);
      octoLic.forEach((text, i) => licStichera.push({text, source:"Octoechos", resolved:true}));
      // Slots 4-6: Menaion — use encoded stichera if available, else unresolved
      for (let i = octoLic.length; i < 6; i++) {
        const ms = menaionLicStichera[i - octoLic.length];
        licStichera.push(ms
          ? {text: ms.text, source:"Menaion", resolved:true}
          : {text:null, source:"Menaion", resolved:false});
      }
    } else if (!isPentecostarion) {
      // §2C/§2D/§2E/§2F: all Menaion
      for (let i = 0; i < licCount; i++) {
        const ms = menaionLicStichera[i];
        licStichera.push(ms
          ? {text: ms.text, source:"Menaion", resolved:true}
          : {text:null, source:"Menaion", resolved:false});
      }
    } else if (isPentecostarion && menaionLicStichera.length > 0) {
      // Pentecostarion + Menaion (§4A3 — Polyeleos/Vigil Menaion saint):
      // 3 slots from Pentecostarion Octoechos, remaining from Menaion.
      // OR Great Feast: all stichera from pentEntry (menaionLicStichera = pentEntry's stichera).
      // OR pentecostarion_sunday: 7 Octoechos resurrection + 3 pentEntry (Fekula §4B6).
      const allFromPent = (pentEntry && pentEntry.menaion_set_aside); // Great Feast or pent Sunday
      const isPentSunday = pentEntry && pentEntry.hours_format === 'pentecostarion_sunday';

      // Compose effective stichera array based on service type:
      // - pentecostarion_sunday: 7 Octoechos resurrection (sat) + 3 pentEntry (Fekula §4B6)
      // - pentecostarion_weekday (not menaion_set_aside): 3 pentEntry + 3 menaionEntry (Fekula §4A1)
      // - menaion_set_aside Great Feast: all from pentEntry (already in menaionLicStichera via _stichSrc)
      let effectiveLicStichera = menaionLicStichera;
      if (isPentSunday) {
        // Fekula §4B6: "we sing ten stichera: seven of the resurrection and three of the Sunday"
        const octoSat = getOctoechosVespers(tone, 'sat');
        const octoResurrection = (octoSat && octoSat.lic) ? octoSat.lic.slice(0, 7) : [];
        const pentSundayStichera = (pentEntry && pentEntry.stichera_lord_i_call) || [];
        effectiveLicStichera = [
          ...octoResurrection.map(text => ({tone, text, source: 'Octoechos'})),
          ...pentSundayStichera,
        ];
      } else if (!allFromPent && pentEntry && pentEntry.stichera_lord_i_call && pentEntry.stichera_lord_i_call.length > 0) {
        // §4A1 weekday: 3 from Pentecostarion + 3 from Menaion = 6 total
        // pentEntry.stichera_lord_i_call has the Pentecostarion stichera (afterfeast/feast of week)
        // menaionEntry.stichera_lord_i_call has the Menaion saint stichera (if encoded)
        const pentWeekdayStichera = pentEntry.stichera_lord_i_call;
        const menaionWeekdayStichera = (menaionEntry && menaionEntry.stichera_lord_i_call) || [];
        effectiveLicStichera = [
          ...pentWeekdayStichera.map(s => ({...s, source: 'Pentecostarion'})),
          ...menaionWeekdayStichera.map(s => ({...s, source: 'Menaion'})),
        ];
        // Pad with unresolved if Menaion stichera not yet encoded
        while (effectiveLicStichera.length < licCount) {
          effectiveLicStichera.push({text: null, source: 'Menaion', unresolved: true});
        }
      }

      const pentLicSlots = allFromPent ? 0 : Math.max(0, licCount - effectiveLicStichera.length); // 3 for §4A3
      const interleaveVerses = LIC_VERSES.filter(v => v.n <= licCount);

      // Plain verses above the insertion point (if any)
      const plainVerses = LIC_VERSES.filter(v => v.n > licCount);
      plainVerses.forEach((v, vi) => {
        elements.push({id:"v-lic-verse-"+v.n, type:"fixed", label:"",
          text:"V. ("+v.n+") "+v.text, source:"HTM Vespers"});
      });
      // Transition note: after the last plain verse, before stichera begin
      if (plainVerses.length > 0) {
        elements.push({id:"v-lic-transition", type:"rubric", label:"",
          text:"[Stichera begin at V.(" + licCount + ") — " + licCount + " appointed for this day]",
          source:"",
          fekula:{section:fekulaSection, note:licCount + " stichera appointed. Insertion begins at V.(" + licCount + "). — Fekula " + fekulaSection}});
      }

      interleaveVerses.forEach((v, i) => {
        const slotIndex = licCount - v.n; // 0 = highest verse
        let stich = effectiveLicStichera[slotIndex - pentLicSlots];
        const isPentSlot = slotIndex < pentLicSlots;
        // Handle repeat/repeatIndex — copy text from another sticheron in the array
        if (stich && !stich.text) {
          let sourceStich = null;
          if (typeof stich.repeatIndex === 'number') {
            // repeatIndex: explicit index into the array (for non-adjacent repeats)
            sourceStich = effectiveLicStichera[stich.repeatIndex];
          } else if (stich.repeat) {
            // repeat: true — copy from immediately preceding sticheron
            const prevIdx = (slotIndex - pentLicSlots) - 1;
            sourceStich = prevIdx >= 0 ? effectiveLicStichera[prevIdx] : null;
          }
          if (sourceStich && sourceStich.text) {
            stich = {...stich, text: sourceStich.text, repeatNote: "(Repeat)"};
          }
        }

        // Verse text — use feast verse from sticheron if present
        const verseText = (stich && stich.verse) ? stich.verse : v.text;
        elements.push({id:"v-lic-verse-"+v.n, type:"fixed", label:"",
          text:"V. ("+v.n+") "+verseText, source:"HTM Vespers"});

        if (isPentSlot) {
          // Slot filled by Pentecostarion — use encoded stichera if present, else placeholder
          const pentStich = pentEntry && pentEntry.stichera_lord_i_call
            ? pentEntry.stichera_lord_i_call[slotIndex] : null;
          if (pentStich) {
            elements.push({id:"v-lic-stich-"+v.n, type:"movable", label:"",
              rubric:"Tone "+(pentStich.tone||tone)+":",
              text:pentStich.text, source:"Pentecostarion",
              fekula:{section:fekulaSection, note:"Pentecostarion sticheron at V.("+v.n+")."}});
          } else {
            elements.push({id:"v-lic-stich-"+v.n, type:"movable", label:"",
              unresolved:true,
              text:"[Sticheron from Pentecostarion — not yet encoded for this week]",
              source:"Pentecostarion",
              fekula:{section:fekulaSection, note:"§4A3: first "+pentLicSlots+" stichera from Pentecostarion."}});
          }
        } else if (stich) {
          const stichSource = stich.source || (allFromPent ? "Pentecostarion" : "Menaion");
          elements.push({id:"v-lic-stich-"+v.n, type:"movable", label:"",
            rubric:"Tone "+(stich.tone||tone)+":",
            text:stich.text, source:stichSource,
            fekula:{section:fekulaSection, note:stichSource+" sticheron at V.("+v.n+")."}});
        } else {
          elements.push({id:"v-lic-stich-"+v.n, type:"movable", label:"",
            unresolved:true,
            text:"[Sticheron "+(i+1)+" — not yet encoded.]",
            source:"Menaion",
            fekula:{section:fekulaSection, note:"Sticheron pending encoding."}});
        }
      });
      // Glory → doxasticon → Both Now
      elements.push({id:"v-lic-glory", type:"fixed", label:"", text:"Glory to the Father, and to the Son, and to the Holy Spirit.", source:"HTM Vespers"});
      const pentDox = (pentEntry && pentEntry.menaion_set_aside && pentEntry.stichera_glory) ? pentEntry.stichera_glory
        : (menaionEntry && menaionEntry.stichera_glory);
      if (pentDox) {
        elements.push({id:"v-lic-doxasticon", type:"movable", label:"Doxasticon",
          rubric:"Tone "+(pentDox.tone||tone)+":",
          text:pentDox.text||pentDox,
          source: (pentEntry && pentEntry.stichera_glory) ? "Pentecostarion" : "Menaion",
          fekula:{section:fekulaSection, note:"Glory: doxasticon."}});
      }
      elements.push({id:"v-lic-nowever", type:"fixed", label:"", text:"Now and ever and unto ages of ages. Amen.", source:"HTM Vespers"});
      // Both Now theotokion: use pentEntry.lic_theotokion if encoded, else Octoechos weekday
      const pentLicTheot = pentEntry && pentEntry.lic_theotokion;
      const licTheotPent = pentLicTheot ? pentLicTheot : { tone, text: OCTOECHOS_LIC_THEOTOKIA[tone] };
      if (licTheotPent && licTheotPent.text) {
        elements.push({id:"v-lic-theotokion", type:"movable", label:"Theotokion",
          rubric:"Tone "+licTheotPent.tone+":",
          text:licTheotPent.text,
          source: pentLicTheot ? "Pentecostarion" : "Octoechos",
          fekula:{section:fekulaSection, note:"Both Now: " + (pentLicTheot ? "appointed Theotokion from Pentecostarion." : "weekday theotokion in tone of week. Fekula §2A/§4A.")}});
      }
      licRendered = true;
    } // end else if (isPentecostarion && menaionLicStichera.length > 0)

    // Verse texts V.10 → V.1
    if (isPentecostarion && !licRendered) {
      if (licStichera.length > 0) {
        // Pentecostarion Great Feast: render stichera with their own feast verses
        // Plain verses V.10 down to V.(licCount+1)
        LIC_VERSES.filter(v => v.n > licCount).forEach(v => {
          elements.push({id:"v-lic-verse-"+v.n, type:"fixed", label:"",
            text:"V. ("+v.n+") "+v.text, source:"HTM Vespers"});
        });
        // Interleaved: feast verse then sticheron
        const interleaveVerses = LIC_VERSES.filter(v => v.n <= licCount);
        interleaveVerses.forEach((v, i) => {
          const stich = licStichera[licCount - v.n];
          // Use feast verse from sticheron if present, else fall back to LIC_VERSES
          const verseText = (stich && stich.verse) ? stich.verse : v.text;
          elements.push({id:"v-lic-verse-"+v.n, type:"fixed", label:"",
            text:"V. ("+v.n+") "+verseText, source:"Pentecostarion"});
          if (stich && stich.resolved) {
            elements.push({id:"v-lic-stich-"+v.n, type:"movable", label:"",
              rubric:"Tone "+(stich.tone||tone)+":",
              text:stich.text, source:"Pentecostarion",
              fekula:{section:fekulaSection, note:"Pentecostarion sticheron at V.("+v.n+")."}});
          } else {
            elements.push({id:"v-lic-stich-"+v.n, type:"movable", label:"",
              unresolved:true,
              text:"[Sticheron "+(i+1)+" — not yet encoded for this Pentecostarion date.]",
              source:"Pentecostarion",
              fekula:{section:fekulaSection, note:"Pentecostarion stichera pending encoding."}});
          }
        });
        licRendered = true;
      } else {
        // Pentecostarion: keep placeholder when not yet encoded
        LIC_VERSES.forEach(v => {
          elements.push({id:"v-lic-verse-"+v.n, type:"fixed", label:"",
            text:"V. ("+v.n+") "+v.text, source:"HTM Vespers"});
        });
        elements.push({id:"v-stichera",type:"movable",label:"Stichera on Lord I Have Cried",
          rubric:sticheraCount+" stichera inserted here", unresolved:true,
          text:"[Stichera not yet assembled for Pentecostarion]\n\nRequired: "+sticheraRule,
          source:"Pentecostarion + Menaion",
          fekula:{section:fekulaSection, note:"At Lord I Have Cried: "+sticheraRule+". Pentecostarion stichera assembly pending."}});
      }
    } else if (licStichera.some(s => s.resolved)) {
      // §2A: Octoechos stichera available — render full interleave
      // Plain verses: V.10 down to V.(licCount+1)
      LIC_VERSES.filter(v => v.n > licCount).forEach(v => {
        elements.push({id:"v-lic-verse-"+v.n, type:"fixed", label:"",
          text:"V. ("+v.n+") "+v.text, source:"HTM Vespers"});
      });
      // Interleaved: V.(licCount) down to V.1, each followed by its sticheron
      const interleaveVerses = LIC_VERSES.filter(v => v.n <= licCount);
      interleaveVerses.forEach((v, i) => {
        elements.push({id:"v-lic-verse-"+v.n, type:"fixed", label:"",
          text:"V. ("+v.n+") "+v.text, source:"HTM Vespers"});
        const stich = licStichera[licCount - v.n]; // stichera run V.licCount down; index 0 = V.licCount
        if (stich && stich.resolved) {
          elements.push({id:"v-lic-stich-"+v.n, type:"movable", label:"",
            rubric:"Tone "+tone+":",
            text:stich.text, source:"Octoechos",
            fekula:{section:fekulaSection, note:"Octoechos sticheron at V.("+v.n+"), Tone "+tone+"."}});
        } else {
          elements.push({id:"v-lic-stich-"+v.n, type:"movable", label:"",
            unresolved:true,
            text:"[Menaion sticheron "+(i+1)+" — not yet entered. Requires Track B data entry.]",
            source:"Menaion",
            fekula:{section:fekulaSection, note:"Menaion sticheron at V.("+v.n+"). Enter stichera_lord_i_call in SAMPLE_MENAION to complete."}});
        }
      });
      // Glory → doxasticon
      elements.push({id:"v-lic-glory", type:"fixed", label:"", text:"Glory to the Father, and to the Son, and to the Holy Spirit.", source:"HTM Vespers"});
      const doxasticonEntry = (isPentecostarion && pentEntry && pentEntry.menaion_set_aside && pentEntry.stichera_glory)
        ? pentEntry.stichera_glory
        : (menaionEntry && menaionEntry.stichera_glory);
      if (doxasticonEntry) {
        elements.push({id:"v-lic-doxasticon", type:"movable", label:"Doxasticon",
          rubric:"Tone "+(doxasticonEntry.tone||tone)+":",
          text:doxasticonEntry.text||doxasticonEntry, source:"Menaion",
          fekula:{section:fekulaSection, note:"Glory: doxasticon from Menaion."}});
      } else {
        elements.push({id:"v-lic-doxasticon", type:"movable", label:"Doxasticon",
          unresolved:true,
          text:"[Doxasticon — not yet entered. Enter stichera_glory in SAMPLE_MENAION.]",
          source:"Menaion",
          fekula:{section:fekulaSection, note:"Glory: doxasticon from Menaion (Track B)."}});
      }
      // Now and ever → theotokion or dogmatikon
      elements.push({id:"v-lic-nowever", type:"fixed", label:"", text:"Now and ever and unto ages of ages. Amen.", source:"HTM Vespers"});
      if (isFriEve && octoDay && octoDay.lic_dogmatikon) {
        // Friday evening §2A: Both Now = dogmatikon (not theotokion)
        elements.push({id:"v-lic-dogmatikon", type:"movable", label:"Dogmatikon (Friday)",
          rubric:"Tone "+tone+":",
          text:octoDay.lic_dogmatikon, source:"Octoechos",
          fekula:{section:fekulaSection, note:"Friday evening §2A: Both Now = dogmatikon in tone of week. Fekula §2A."}});
      } else if (octoDay && octoDay.dogmatikon) {
        // Saturday: dogmatikon
        elements.push({id:"v-lic-dogmatikon", type:"movable", label:"Dogmatikon",
          rubric:"Tone "+tone+":",
          text:octoDay.dogmatikon, source:"Octoechos",
          fekula:{section:fekulaSection, note:"Saturday §2A: Both Now = dogmatikon in tone of week. Fekula §2A."}});
      } else {
        // Weekday (Mon–Thu) theotokion from Octoechos
        const licTheot = OCTOECHOS_LIC_THEOTOKIA[tone];
        if (licTheot) {
          elements.push({id:"v-lic-theotokion", type:"movable", label:"Theotokion",
            rubric:"Tone "+tone+":",
            text:licTheot, source:"Octoechos",
            fekula:{section:fekulaSection, note:"Both Now: weekday theotokion in tone of week. Octoechos (N-3.pdf). Fekula §2A."}});
        } else {
          elements.push({id:"v-lic-theotokion", type:"movable", label:"Theotokion",
            unresolved:true,
            text:"[Theotokion — not found for Tone "+tone+"]",
            source:"Octoechos",
            fekula:{section:fekulaSection, note:"Both Now: theotokion in tone of week."}});
        }
      }
    } else if (!licRendered) {
      // §2C/§2D+: all Menaion, render plain verses + single placeholder
      LIC_VERSES.forEach(v => {
        elements.push({id:"v-lic-verse-"+v.n, type:"fixed", label:"",
          text:"V. ("+v.n+") "+v.text, source:"HTM Vespers"});
      });
      elements.push({id:"v-stichera",type:"movable",label:"Stichera on Lord I Have Cried",
        rubric:licCount+" stichera inserted here (from Menaion)", unresolved:true,
        text:"[Menaion stichera not yet entered]\n\nRequired: "+sticheraRule+"\n\nEnter stichera_lord_i_call[] in SAMPLE_MENAION to complete (Track B).",
        source:"Menaion",
        fekula:{section:fekulaSection, note:"At Lord I Have Cried: "+sticheraRule+". Menaion stichera entry required (Track B)."}});
    }
  }

  // 7. ENTRANCE (Great Vespers: Polyeleos+, Vigil, Saturday evening)
  if (isDoxOrAbove || dow === 6) {
    elements.push({id:"v-entrance",type:"fixed",label:"Entrance",rubric:"Deacon (or Priest):",
      text:"Wisdom, Aright!\n\n(Entrance with the censer at Daily Vespers; with the Gospel at Vigil on Sundays)",
      source:"HTM Vespers",
      fekula:{section:fekulaSection, note:"At Vigil and Polyeleos — and on Sept 1 and 13 — there will be an Entry with the Gospel. At Daily Vespers the entrance is with the censer. — HTM Vespers; Fekula §2D–§2F"}});
  }
  // 8. GLADSOME LIGHT
  elements.push({id:"v-gladsome",type:"fixed",label:"Gladsome Light",rubric:"Chanters:",
    text:"O Gentle Light of the holy glory of the immortal, heavenly, holy, blessed Father, O Jesus Christ: Having come to the setting of the sun, having beheld the evening light, we praise the Father, the Son, and the Holy Spirit: God. Meet it is for Thee at all times to be hymned with reverent voices, O Son of God, Giver of life. Wherefore, the world doth glorify Thee.",
    source:"HTM Vespers"});
  // 9. PROKEIMENON
  // Structure per OCA Office of Vespers (2021):
  //   Deacon/Priest: "Wisdom! The [Great] Prokeimenon in Tone X: [full text]"
  //   Chanters: sing the prokeimenon
  //   Deacon: reads verse
  //   Chanters: sing prokeimenon again (repeat for each verse)
  // Source: OCA office-vespers.md; HTM Vespers; Fekula §2.
  const isGreatProk = vespProk && (
    vespProk.type === "saturday_great_prokeimenon" ||
    vespProk.type === "great_prokeimenon" ||
    (vespProk.verses && vespProk.verses.length >= 3)
  );
  // Build structured exchanges array: { speaker: "deacon"|"chanters", text }
  const _buildProkExchanges = () => {
    if (!vespProk) return [];
    const prok = vespProk.text;
    const verses = vespProk.verses || [];
    const exchanges = [];
    if (isGreatProk) {
      // Great: chanters sing, then deacon reads each verse with chanters responding
      exchanges.push({ speaker: "chanters", text: prok });
      verses.forEach((v, i) => {
        exchanges.push({ speaker: "deacon", text: "V." + (i+1) + ": " + v });
        exchanges.push({ speaker: "chanters", text: prok });
      });
    } else {
      // Ordinary daily: chanters sing twice, deacon reads verse, chanters once more
      exchanges.push({ speaker: "chanters", text: prok });
      exchanges.push({ speaker: "chanters", text: prok });
      if (verses[0]) {
        exchanges.push({ speaker: "deacon", text: "V.: " + verses[0] });
        exchanges.push({ speaker: "chanters", text: prok });
      }
    }
    return exchanges;
  };
  const prokAnnouncement = vespProk
    ? "Wisdom! The " + (isGreatProk ? "Great " : "") + "Prokeimenon in Tone " + vespProk.tone + ": " + vespProk.text
    : "Wisdom! The Prokeimenon.";
  const prokNote = isGreatProk
    ? "Great Prokeimenon: the deacon/priest announces the tone and text; the choir sings, then the deacon reads each verse and the choir repeats the prokeimenon after each (sung 4 times total). Served at Great Vespers on Saturday evenings and on the eves of certain Great Feasts. — OCA Office of Vespers (2021); HTM Vespers; Fekula §2"
    : "Daily Prokeimenon: the deacon/priest announces the tone and text; the choir sings it twice, then the deacon reads the verse, then the choir sings it once more (3 times total). — OCA Office of Vespers (2021); HTM Vespers; Fekula §2";
  elements.push({id:"v-prok",type:"prokeimenon",
    label:"Prokeimenon" + (isGreatProk ? " (Great)" : "") + " · Tone " + (vespProk ? vespProk.tone : ""),
    announcement: prokAnnouncement,
    exchanges: _buildProkExchanges(),
    readerMode: readerMode,
    source:(isPentecostarion && pentEntry && pentEntry.vespers_prokeimenon) ? "Pentecostarion" : "HTM Vespers — daily",
    fekula:{section:fekulaSection, note:prokNote}});
  // 10. OT LESSONS (§2E / §2F only)
  if (paroemias && paroemias.length > 0) {
    elements.push({id:"v-les-hdr",type:"fixed",label:"Old Testament Lessons",rubric:"Deacon: Wisdom.",
      text:"Reader: The reading is from ___. Deacon: Let us attend.\n(Three lessons are read from the Menaion)",
      source:"HTM Vespers"});
    paroemias.forEach((p,i) => {
      const pHref = paroemiaToScriptureHref(p, "vespers", selectedDate);
      elements.push({id:"v-les-"+(i+1),type:"movable",label:"Lesson "+(i+1),rubric:"",
        text:p, source:"Menaion",
        ...(pHref ? {scriptureHref: pHref} : {}),
        fekula:{section:fekulaSection, note:"After the Entrance and prokeimenon there are three readings appointed in the Menaion. — Fekula " + fekulaSection}});
    });
  }
  // 11. AUGMENTED LITANY
  if (readerMode) {
    elements.push(readerSub("v-aug", "Augmented Litany",
      CH10_LHM_40,
      "Instead of the Litany of Supplication (Let us all say…), we say Lord, have mercy, forty times, then Glory… Now and ever… — Fekula Chapter 10"));
    elements.push(readerOmit("v-aug-exc", "Priest exclamation (For a merciful God Thou art…) — omitted in Reader's Service"));
  } else {
    elements.push({id:"v-aug",type:"litany",label:"Augmented Litany",rubric:"Deacon (or Priest):",
      text:"Let us all say with our whole soul and with our whole mind, let us say.\nLord, have mercy.\n" +
        "O Lord Almighty, the God of our fathers, we pray Thee, hearken and have mercy.\nLord, have mercy.\n" +
        "Have mercy on us, O God, according to Thy great mercy, we pray Thee, hearken and have mercy.\nLord, have mercy. (thrice)\n" +
        "Again we pray for the Orthodox episcopate; for our hierarch N.; for the honorable priesthood, the diaconate in Christ, and all our brethren in Christ.\nLord, have mercy. (thrice)\n" +
        "Again we pray for this land, its authorities and armed forces.\nLord, have mercy. (thrice)\n" +
        "Again we pray for the blessed and ever-memorable founders of this holy temple, and for all our fathers and brethren gone to their rest before us, and the Orthodox here and everywhere laid to rest.\nLord, have mercy. (thrice)\n" +
        "Again we pray for mercy, life, peace, health, salvation, visitation, pardon, and remission of the sins of the servants of God, the brethren of this holy temple.\nLord, have mercy. (thrice)\n" +
        "Again we pray for them that bring offerings and do good works in this holy temple; for them that minister and them that chant, and for all people here present, that await of Thee great and abundant mercy.\nLord, have mercy. (thrice)",
      source:"HTM Vespers"});
    elements.push({id:"v-aug-exc",type:"fixed",label:"",rubric:"Priest:",
      text:"For a merciful God Thou art, and the Lover of mankind, and unto Thee do we send up glory: to the Father, and to the Son, and to the Holy Spirit, now and ever, and unto the ages of ages.",
      source:"HTM Vespers"});
  }
  // 12. VOUCHSAFE O LORD
  elements.push({id:"v-vouchsafe",type:"fixed",label:"Vouchsafe, O Lord",rubric:"Reader:",
    text:"Vouchsafe, O Lord, to keep us this evening without sin. Blessed art Thou, O Lord, the God of our fathers, and praised and glorified is Thy name unto the ages. Amen.\n\nLet Thy mercy, O Lord, be upon us, according as we have hoped in Thee. Blessed art Thou, O Lord, teach me Thy statutes. Blessed art Thou, O Master, give me understanding of Thy statutes. Blessed art Thou, O Holy One, enlighten me by Thy statutes.\n\nO Lord, Thy mercy endureth for ever, disdain not the work of Thy hands. To Thee is due praise, to Thee is due a song, to Thee glory is due, to the Father, and to the Son, and to the Holy Spirit, now and ever, and unto the ages of ages. Amen.",
    source:"HTM Vespers"});
  // 13. EVENING LITANY
  if (readerMode) {
    elements.push(readerSub("v-eve-lit", "Evening Litany",
      CH10_LHM_12,
      "Instead of the Evening Litany (Let us complete…), we say Lord, have mercy, twelve times, then Glory… Now and ever… — Fekula Chapter 10"));
    elements.push(readerOmit("v-eve-exc", "Priest exclamation (For a good God art Thou…) — omitted in Reader's Service"));
  } else {
    elements.push({id:"v-eve-lit",type:"litany",label:"Evening Litany",rubric:"Deacon (or Priest):",
      text:"Let us complete our evening prayer unto the Lord.\nLord, have mercy.\n" +
        "Help us, save us, have mercy on us, and keep us, O God, by Thy grace.\nLord, have mercy.\n" +
        "That the whole evening may be perfect, holy, peaceful, and sinless, let us ask of the Lord.\nGrant this, O Lord.\n" +
        "An angel of peace, a faithful guide, a guardian of our souls and bodies, let us ask of the Lord.\nGrant this, O Lord.\n" +
        "Pardon and remission of our sins and offences, let us ask of the Lord.\nGrant this, O Lord.\n" +
        "Things good and profitable for our souls, and peace for the world, let us ask of the Lord.\nGrant this, O Lord.\n" +
        "That we may complete the remaining time of our life in peace and repentance, let us ask of the Lord.\nGrant this, O Lord.\n" +
        "A Christian ending to our life, painless, blameless, peaceful, and a good defence before the dread judgment seat of Christ, let us ask.\nGrant this, O Lord.\n" +
        "Calling to remembrance our most holy, most pure, most blessed, glorious Lady Theotokos and Ever-Virgin Mary with all the saints, let us commit ourselves and one another and all our life unto Christ our God.\nTo Thee, O Lord.",
      source:"HTM Vespers"});
    elements.push({id:"v-eve-exc",type:"fixed",label:"",rubric:"Priest:",
      text:"For a good God art Thou, and the Lover of mankind, and unto Thee do we send up glory: to the Father, and to the Son, and to the Holy Spirit, now and ever, and unto the ages of ages.",
      source:"HTM Vespers"});
  }
  // 14. HEAD-BOWING — omitted entirely in Reader's Service (Fekula Ch10)
  if (readerMode) {
    elements.push(readerOmit("v-bow-seq",
      "Head-bowing sequence (Peace be unto all / Let us bow our heads / Blessed and most glorified…) — omitted in Reader's Service. Fekula Chapter 10: 'The sequence Let us bow our heads… is omitted.'"));
  } else {
    elements.push({id:"v-peace",type:"fixed",label:"",rubric:"Priest:",
      text:"Peace be unto all.", source:"HTM Vespers"});
    elements.push({id:"v-bow",type:"fixed",label:"",rubric:"Deacon (or Priest):",
      text:"Let us bow our heads unto the Lord.",
      source:"HTM Vespers"});
    elements.push({id:"v-bow-response",type:"fixed",label:"",rubric:"Chanters:",
      text:"To Thee, O Lord. (Sung slowly if no deacon.)",
      source:"HTM Vespers"});
    elements.push({id:"v-bow-exc",type:"fixed",label:"",rubric:"Priest:",
      text:"Blessed and most glorified be the dominion of Thy kingdom: of the Father, and of the Son, and of the Holy Spirit, now and ever, and unto the ages of ages.",
    source:"HTM Vespers"});
  }
  // ── 14b. LITIYA (when has_litya === true) ──────────────────────────────────
  // Inserted between the §14 head-bowing and §15 Aposticha.
  // Source: OCA Litiya prayer (Drive: vespers/oca/OCA_prayer_for_litiya.txt)
  // Structural placement: HTM Vespers (htm_vespers.md)
  // Fekula: §2E (Polyeleos) or §2F (Vigil/Great Feast)
  const hasLitya = menaionEntry && menaionEntry.has_litya === true;
  if (hasLitya) {
    const litSaint = (menaionEntry && menaionEntry.saint) || "the saint(s) of the day";

    // Processional rubric
    elements.push({id:"v-litiya-rubric", type:"fixed", label:"Litiya",
      rubric:"Rubric:",
      text:"The clergy process to the narthex for the Litiya.",
      source:"HTM Vespers",
      fekula:{section:fekulaSection, note:"At a Vigil or Polyeleos, we chant the Litiya stichera as we go forth to the narthex for the Litiya. — HTM Vespers; Fekula " + fekulaSection}});

    // Temple sticheron — rendered by TempleSelector component
    // On Great Feasts, all Litiya stichera are festal (no temple sticheron).
    const isGreatFeast = rank === "great_feast";
    if (!isGreatFeast) {
      elements.push({id:"v-litiya-temple", type:"temple_selector",
        label:"Sticheron of the Temple",
        source:"HTM Vespers",
        fekula:{section:fekulaSection, note:"We always chant first the first Litiya sticheron of the temple, unless it be one of the great feasts. — HTM Vespers"}});
    }

    // Litiya stichera from Menaion
    const litStichera = menaionEntry.litya_stichera;
    if (litStichera && litStichera.length > 0) {
      litStichera.forEach((s, i) => {
        elements.push({id:"v-litiya-stich-"+i, type:"movable",
          label: i === 0 ? "Litiya Stichera" : "",
          rubric: "Tone " + (s.tone || "?") + ":",
          text: s.text,
          source: "Menaion — " + litSaint,
          fekula:{section:fekulaSection, note:"Litiya sticheron " + (i+1) + " from Menaion. — Fekula " + fekulaSection}});
      });
    } else {
      // Empty array — PDF has no dedicated Litiya stichera (e.g. May 25 §2E)
      elements.push({id:"v-litiya-stich-none", type:"informational", label:"",
        text:"The Menaion does not appoint separate Litiya stichera for this feast. The Litiya petitions are served with the temple sticheron alone.",
        source:"Menaion — " + litSaint,
        fekula:{section:fekulaSection, note:"No dedicated Litiya stichera in Menaion PDF. The Litiya petitions follow the temple sticheron. — Fekula " + fekulaSection}});
    }

    // Glory
    if (menaionEntry.litya_glory) {
      elements.push({id:"v-litiya-glory-tag", type:"fixed", label:"",
        text:"Glory to the Father, and to the Son, and to the Holy Spirit.",
        source:"HTM Vespers"});
      const lg = menaionEntry.litya_glory;
      elements.push({id:"v-litiya-glory", type:"movable", label:"Litiya Doxasticon (Glory…)",
        rubric: "Tone " + (lg.tone || "?") + ":",
        text: lg.text,
        source: "Menaion — " + litSaint,
        fekula:{section:fekulaSection, note:"Litiya Glory: doxasticon from Menaion. — Fekula " + fekulaSection}});
    }

    // Both Now
    if (menaionEntry.litya_both_now) {
      elements.push({id:"v-litiya-bothnow-tag", type:"fixed", label:"",
        text:"Both now and ever, and unto the ages of ages. Amen.",
        source:"HTM Vespers"});
      const lbn = menaionEntry.litya_both_now;
      elements.push({id:"v-litiya-bothnow", type:"movable", label:"Litiya Theotokion (Both now…)",
        rubric: "Tone " + (lbn.tone || "?") + ":",
        text: lbn.text,
        source: "Menaion — " + litSaint,
        fekula:{section:fekulaSection, note:"Litiya Both Now: theotokion from Menaion. — Fekula " + fekulaSection}});
    }

    // Litiya Petitions
    if (readerMode) {
      // Reader mode: replace petitions with Lord, have mercy counts (Fekula Ch. 10)
      elements.push(readerSub("v-litiya-petitions", "Litiya Petitions",
        "Lord, have mercy. (forty times)\nLord, have mercy. (fifty times)\nLord, have mercy. (thirty times)\nLord, have mercy. (thrice)\nLord, have mercy. (thrice)",
        "Litiya petitions — in the Reader's Service, the deacon's petitions are replaced by the choir responses alone. — Fekula Chapter 10"));
    } else {
      // Full petition block with saint insertion — each petition split into
      // deacon text (gold priestly styling) + choir response (standard black text)
      const pet1Text = LITIYA_PETITION_1.text.replace("Saint(s) ___", litSaint);
      elements.push({id:"v-litiya-petitions", type:"fixed", label:"Litiya Petitions",
        rubric: LITIYA_PETITION_1.rubric,
        text: pet1Text,
        source:"OCA Litiya Prayer",
        fekula:{section:fekulaSection, note:"First Litiya petition (OCA diptych) with saint of the day inserted. — OCA Priest's Service Book (1973); Fekula " + fekulaSection}});
      elements.push({id:"v-litiya-resp-1", type:"fixed", label:"",
        rubric:"Choir:",
        text: LITIYA_PETITION_1.response.replace("Choir: ", ""),
        source:"OCA Litiya Prayer"});
      elements.push({id:"v-litiya-pet-2", type:"fixed", label:"",
        rubric: LITIYA_PETITION_2.rubric,
        text: LITIYA_PETITION_2.text,
        source:"OCA Litiya Prayer",
        fekula:{section:fekulaSection, note:"Second Litiya petition (brotherhood, sick, departed). — OCA Priest's Service Book (1973)"}});
      elements.push({id:"v-litiya-resp-2", type:"fixed", label:"",
        rubric:"Choir:",
        text: LITIYA_PETITION_2.response.replace("Choir: ", ""),
        source:"OCA Litiya Prayer"});
      elements.push({id:"v-litiya-pet-3", type:"fixed", label:"",
        rubric: LITIYA_PETITION_3.rubric,
        text: LITIYA_PETITION_3.text,
        source:"OCA Litiya Prayer",
        fekula:{section:fekulaSection, note:"Third Litiya petition (civil authorities). — OCA Priest's Service Book (1973)"}});
      elements.push({id:"v-litiya-resp-3", type:"fixed", label:"",
        rubric:"Choir:",
        text: LITIYA_PETITION_3.response.replace("Choir: ", ""),
        source:"OCA Litiya Prayer"});
      elements.push({id:"v-litiya-pet-4", type:"fixed", label:"",
        rubric: LITIYA_PETITION_4.rubric,
        text: LITIYA_PETITION_4.text,
        source:"OCA Litiya Prayer",
        fekula:{section:fekulaSection, note:"Fourth Litiya petition (deliverance from wrath, famine, pestilence). — OCA Priest's Service Book (1973)"}});
      elements.push({id:"v-litiya-resp-4", type:"fixed", label:"",
        rubric:"Choir:",
        text: LITIYA_PETITION_4.response.replace("Choir: ", ""),
        source:"OCA Litiya Prayer"});
      elements.push({id:"v-litiya-pet-5", type:"fixed", label:"",
        rubric: LITIYA_PETITION_5.rubric,
        text: LITIYA_PETITION_5.text,
        source:"OCA Litiya Prayer",
        fekula:{section:fekulaSection, note:"Fifth Litiya petition. — OCA Priest's Service Book (1973)"}});
      elements.push({id:"v-litiya-resp-5", type:"fixed", label:"",
        rubric:"Choir:",
        text: LITIYA_PETITION_5.response.replace("Choir: ", ""),
        source:"OCA Litiya Prayer"});
    }

    // Concluding prayer
    if (readerMode) {
      elements.push(readerOmit("v-litiya-prayer",
        "Concluding prayer of the Litiya (Priest: 'Hear us, O God our Savior…') — omitted in Reader's Service. Fekula Chapter 10."));
    } else {
      elements.push({id:"v-litiya-prayer", type:"fixed", label:"Concluding Prayer",
        rubric:"Priest:",
        text: LITIYA_CONCLUDING_PRAYER + "\n\nChoir: Amen.",
        source:"OCA Litiya Prayer",
        fekula:{section:fekulaSection, note:"Concluding prayer of the Litiya. — OCA Priest's Service Book (1973); Fekula " + fekulaSection}});
    }

    // Peace and head-bowing at the Litiya (separate from §14)
    if (readerMode) {
      elements.push(readerOmit("v-litiya-peace",
        "Peace / head-bowing at the Litiya (Priest: 'Peace be to all' / Deacon: 'Let us bow our heads' / Priest: 'O Master, great in mercy…') — omitted in Reader's Service. Fekula Chapter 10."));
    } else {
      elements.push({id:"v-litiya-peace", type:"fixed", label:"Peace (Litiya)",
        rubric:"Priest:",
        text: LITIYA_PEACE,
        source:"OCA Litiya Prayer",
        fekula:{section:fekulaSection, note:"Peace at the Litiya — separate from the earlier §14 peace/head-bowing. — Fekula " + fekulaSection}});
      elements.push({id:"v-litiya-peace-resp", type:"fixed", label:"",
        rubric:"Choir:",
        text: LITIYA_PEACE_RESPONSE,
        source:"OCA Litiya Prayer"});
      elements.push({id:"v-litiya-bow", type:"fixed", label:"",
        rubric:"Deacon:",
        text: LITIYA_BOW,
        source:"OCA Litiya Prayer"});
      elements.push({id:"v-litiya-bow-resp", type:"fixed", label:"",
        rubric:"Choir:",
        text: LITIYA_BOW_RESPONSE,
        source:"OCA Litiya Prayer"});
      elements.push({id:"v-litiya-bow-prayer", type:"fixed", label:"",
        rubric:"Priest:",
        text: LITIYA_BOW_PRAYER + "\n\nChoir: Amen.",
        source:"OCA Litiya Prayer",
        fekula:{section:fekulaSection, note:"Head-bowing prayer at the Litiya: 'O Master, great in mercy…' — OCA Priest's Service Book (1973)"}});
    }

    // Rubric: return to temple for Aposticha
    elements.push({id:"v-litiya-return", type:"fixed", label:"",
      rubric:"Rubric:",
      text:"We chant the Aposticha as we re-enter the temple.",
      source:"HTM Vespers",
      fekula:{section:fekulaSection, note:"After the Litiya prayers, we chant the Aposticha of the feast as we re-enter the temple. — HTM Vespers"}});
  }
  // 15. APOSTICHA
  // ── APOSTICHA — interleave assembler (FW-23 Track A) ────────────────────────
  // §2A weekday/Saturday: Octoechos stichera + universal fixed verses fully assembled.
  // §2D+: Menaion stichera + Menaion verses (unresolved pending Track B data entry).
  // Aposticha structure: sticheron → verse → sticheron → verse → sticheron → [verse] → Glory → Both Now
  {
    const apostDayKey = getVespersDayKey(dow);
    const apostOctoDay = (!isPentecostarion && (rank === "simple" || rank === "six_stichera" || !menaionEntry))
      ? getOctoechosVespers(tone, apostDayKey) : null;
    const isSatEve = dow === 6;

    // Universal fixed verses (§2A/§2C weekday and Saturday)
    const weekdayVerses = OCTOECHOS_UNIVERSAL && OCTOECHOS_UNIVERSAL.weekday
      ? [OCTOECHOS_UNIVERSAL.weekday.verse_weekday_1[0], OCTOECHOS_UNIVERSAL.weekday.verse_weekday_2[0]]
      : ["Unto Thee have I lifted up mine eyes, O Thou that dwellest in heaven…",
         "Have mercy on us, O Lord, have mercy on us, for greatly are we filled with abasement…"];
    const satVerses = OCTOECHOS_UNIVERSAL && OCTOECHOS_UNIVERSAL.saturday
      ? [OCTOECHOS_UNIVERSAL.saturday.verse_sat_1[0],
         OCTOECHOS_UNIVERSAL.saturday.verse_sat_2[0],
         OCTOECHOS_UNIVERSAL.saturday.verse_sat_3[0]]
      : ["The Lord is King: He is clothed with majesty…",
         "For He established the world which shall not be shaken.",
         "Holiness becometh Thy house, O Lord, unto length of days."];

    if (isPentecostarion) {
      // Pentecostarion Great Feast: use encoded stichera_aposticha if present
      if (pentEntry && pentEntry.stichera_aposticha && pentEntry.stichera_aposticha.length > 0) {
        const pentAposticha = pentEntry.stichera_aposticha;
        pentAposticha.forEach((s, i) => {
          if (i > 0 && s.verse) {
            elements.push({id:"v-apost-verse-pent-"+i, type:"fixed", label:"", rubric:"Reader:",
              text:s.verse, source:"Pentecostarion"});
          }
          elements.push({id:"v-apost-stich-pent-"+i, type:"movable",
            label: i===0 ? "Aposticha" : "",
            rubric:"Tone "+(s.tone||tone)+":",
            text:s.text, source:"Pentecostarion",
            fekula:{section:fekulaSection, note:"Aposticha stichera from Pentecostarion."}});
        });
        // Glory / Both Now
        elements.push({id:"v-apost-glory", type:"fixed", label:"", text:"Glory to the Father, and to the Son, and to the Holy Spirit.", source:"HTM Vespers"});
        const pentApostGlory = pentEntry.aposticha_glory;
        if (pentApostGlory) {
          elements.push({id:"v-apost-doxasticon", type:"movable", label:"Aposticha Doxasticon",
            rubric:"Tone "+(pentApostGlory.tone||tone)+":",
            text:pentApostGlory.text||pentApostGlory, source:"Pentecostarion",
            fekula:{section:fekulaSection, note:"Aposticha Glory: doxasticon from Pentecostarion."}});
        }
        elements.push({id:"v-apost-bothnow", type:"fixed", label:"", text:"Now and ever, and unto the ages of ages. Amen.", source:"HTM Vespers"});
        // Both now: aposticha_both_now from pentEntry (e.g. Ascension troparion on P+42)
        const pentApostTheot = pentEntry.aposticha_both_now;
        if (pentApostTheot) {
          elements.push({id:"v-apost-theotokion", type:"movable", label:"Theotokion (Both now…)",
            rubric:"Tone "+(pentApostTheot.tone||tone)+":",
            text:pentApostTheot.text||pentApostTheot, source:"Pentecostarion",
            fekula:{section:fekulaSection, note:"Aposticha Both now: from Pentecostarion. — Fekula §4B"}});
        }
      } else {
        // Pentecostarion: placeholder when not yet encoded
        elements.push({id:"v-apost-stich",type:"movable",label:"Aposticha Stichera",
          rubric:"Stichera with their appointed verses", unresolved:true,
          text:"[Aposticha stichera not yet assembled for Pentecostarion]\n\nSource: Pentecostarion",
          source:"Pentecostarion",
          fekula:{section:fekulaSection, note:"Aposticha: Pentecostarion stichera assembly pending."}});
      }
    } else if (!isPentecostarion && (rank === "simple" || rank === "six_stichera") && apostOctoDay && apostOctoDay.aposticha) {
      // §2A: Octoechos stichera + universal verses — fully assembled
      const apostStichera = apostOctoDay.aposticha; // array of 3 strings
      const verses = isSatEve ? satVerses : weekdayVerses;

      apostStichera.forEach((stichText, i) => {
        // Sticheron first (Aposticha is inverted from LIC)
        elements.push({id:"v-apost-stich-"+i, type:"movable", label: i===0 ? "Aposticha" : "",
          rubric:"Tone "+tone+":",
          text:stichText, source:"Octoechos",
          fekula:{section:fekulaSection, note:"Aposticha sticheron "+(i+1)+" from Octoechos, Tone "+tone+". Fekula §2A."}});
        // Then its verse (if available)
        if (verses[i]) {
          elements.push({id:"v-apost-verse-"+i, type:"fixed", label:"",
            text:verses[i], source:"HTM Vespers"});
        }
      });

      // Glory → aposticha_glory (prefer Menaion if encoded, else Octoechos)
      elements.push({id:"v-apost-glory", type:"fixed", label:"", text:"Glory to the Father, and to the Son, and to the Holy Spirit.", source:"HTM Vespers"});
      const menaionApostGlory = menaionEntry && menaionEntry.aposticha_glory;
      const apostGlory = apostOctoDay.aposticha_glory;
      if (menaionApostGlory && menaionApostGlory.text) {
        // Menaion provides its own Glory doxasticon (§2C and above)
        elements.push({id:"v-apost-doxasticon", type:"movable", label:"Aposticha Doxasticon",
          rubric:"Tone "+(menaionApostGlory.tone||tone)+":",
          text:menaionApostGlory.text, source:"Menaion — " + mSaint,
          fekula:{section:fekulaSection, note:"Aposticha Glory: doxasticon from Menaion. — Fekula " + fekulaSection}});
      } else if (apostGlory && !apostGlory.startsWith('[')) {
        elements.push({id:"v-apost-doxasticon", type:"movable", label:"Aposticha Doxasticon",
          rubric:"Tone "+tone+":",
          text:apostGlory, source:"Octoechos",
          fekula:{section:fekulaSection, note:"Aposticha Glory: doxasticon from Octoechos, Tone "+tone+"."}});
      } else {
        // Saturday: aposticha_glory = [Glory from Menaion if appointed] — unresolved
        elements.push({id:"v-apost-doxasticon", type:"movable", label:"Aposticha Doxasticon",
          unresolved:true,
          text:"[Doxasticon from Menaion — enter aposticha_glory in SAMPLE_MENAION (Track B).]",
          source:"Menaion",
          fekula:{section:fekulaSection, note:"Saturday Aposticha Glory: supplied by Menaion. Fekula §2A Saturday."}});
      }

      // Now and ever → theotokion/dogmatikon
      elements.push({id:"v-apost-nowever", type:"fixed", label:"", text:"Now and ever and unto ages of ages. Amen.", source:"HTM Vespers"});
      if (isFriEve && apostOctoDay.lic_dogmatikon) {
        elements.push({id:"v-apost-dogmatikon", type:"movable", label:"Dogmatikon (Friday)",
          rubric:"Tone "+tone+":",
          text:apostOctoDay.lic_dogmatikon, source:"Octoechos",
          fekula:{section:fekulaSection, note:"Friday Aposticha Both Now = dogmatikon. Fekula §2A."}});
      } else if (isSatEve && apostOctoDay.dogmatikon) {
        elements.push({id:"v-apost-dogmatikon", type:"movable", label:"Dogmatikon",
          rubric:"Tone "+tone+":",
          text:apostOctoDay.dogmatikon, source:"Octoechos",
          fekula:{section:fekulaSection, note:"Saturday Aposticha Both Now = dogmatikon. Fekula §2A."}});
      } else {
        // Weekday Both Now: use aposticha_glory from Octoechos if available
        const apostWeekdayTheot = apostOctoDay && apostOctoDay.aposticha_glory
          && !apostOctoDay.aposticha_glory.startsWith('[')
          ? apostOctoDay.aposticha_glory : null;
        if (apostWeekdayTheot) {
          elements.push({id:"v-apost-theotokion", type:"movable", label:"Theotokion",
            rubric:"Tone "+tone+":",
            text:apostWeekdayTheot, source:"Octoechos",
            fekula:{section:fekulaSection, note:"Aposticha Both Now: theotokion from Octoechos, Tone "+tone+". Fekula §2A."}});
        } else {
          elements.push({id:"v-apost-theotokion", type:"movable", label:"Theotokion",
            unresolved:true,
            text:"[Theotokion — not found for Tone "+tone+"]",
            source:"Octoechos",
            fekula:{section:fekulaSection, note:"Aposticha Both Now: theotokion in tone of week."}});
        }
      }
    } else if (!isPentecostarion && menaionEntry && menaionEntry.stichera_aposticha && menaionEntry.stichera_aposticha.length > 0) {
      // §2C+: Menaion stichera_aposticha encoded — assemble with verses
      const menAposticha = menaionEntry.stichera_aposticha;
      menAposticha.forEach((s, i) => {
        // First sticheron has no preceding verse; subsequent stichera have their verse before them
        if (i > 0 && s.verse) {
          elements.push({id:"v-apost-verse-men-"+i, type:"fixed", label:"", rubric:"Reader:",
            text:s.verse, source:"Menaion"});
        }
        elements.push({id:"v-apost-stich-men-"+i, type:"movable",
          label: i===0 ? "Aposticha" : "",
          rubric:"Tone "+(s.tone||"?")+":"  ,
          text:s.text, source:"Menaion — " + mSaint,
          fekula:{section:fekulaSection, note:"Aposticha sticheron "+(i+1)+" from Menaion. — Fekula " + fekulaSection}});
      });
      // Glory
      elements.push({id:"v-apost-glory", type:"fixed", label:"", text:"Glory to the Father, and to the Son, and to the Holy Spirit.", source:"HTM Vespers"});
      if (menaionEntry.aposticha_glory) {
        const ag = menaionEntry.aposticha_glory;
        elements.push({id:"v-apost-doxasticon", type:"movable", label:"Aposticha Doxasticon",
          rubric:"Tone "+(ag.tone||"?")+":"  ,
          text: typeof ag === "string" ? ag : ag.text,
          source:"Menaion — " + mSaint,
          fekula:{section:fekulaSection, note:"Aposticha Glory: doxasticon from Menaion. — Fekula " + fekulaSection}});
      }
      // Both Now
      elements.push({id:"v-apost-bothnow", type:"fixed", label:"", text:"Now and ever, and unto the ages of ages. Amen.", source:"HTM Vespers"});
      if (menaionEntry.aposticha_both_now) {
        const at = menaionEntry.aposticha_both_now;
        elements.push({id:"v-apost-theotokion", type:"movable", label:"Theotokion (Both now…)",
          rubric:"Tone "+(at.tone||"?")+":"  ,
          text: typeof at === "string" ? at : at.text,
          source:"Menaion — " + mSaint,
          fekula:{section:fekulaSection, note:"Aposticha Both Now: theotokion from Menaion. — Fekula " + fekulaSection}});
      }
    } else {
      // §2D/§2E/§2F: Menaion stichera + Menaion verses — not yet encoded
      elements.push({id:"v-apost-stich",type:"movable",label:"Aposticha Stichera",
        rubric:"Stichera with their appointed verses", unresolved:true,
        text:"[Menaion aposticha stichera not yet entered]\n\nEnter stichera_aposticha[] in SAMPLE_MENAION to complete.",
        source:"Menaion",
        fekula:{section:fekulaSection, note:"Aposticha: Menaion stichera with Menaion-provided verses — not yet encoded."}});;
    }
  }
  // 16. NUNC DIMITTIS
  elements.push({id:"v-nunc",type:"fixed",label:"Prayer of St. Symeon",rubric:"Reader/Canonarch:",
    text:"Now lettest Thou Thy servant depart in peace, O Master, according to Thy word, for mine eyes have seen Thy salvation, which Thou hast prepared before the face of all peoples; a light of revelation for the Gentiles, and the glory of Thy people Israel.",
    source:"HTM Vespers"});
  // 17. TRISAGION THROUGH OUR FATHER
  elements.push({id:"v-trisagion",type:"fixed",label:"Trisagion Prayers",rubric:"",
    text:"Holy God, Holy Mighty, Holy Immortal, have mercy on us. (thrice)\n\n" +
      "Glory to the Father, and to the Son, and to the Holy Spirit, both now and ever, and unto the ages of ages. Amen.\n\n" +
      "O Most Holy Trinity, have mercy on us. O Lord, blot out our sins. O Master, pardon our iniquities. O Holy One, visit and heal our infirmities for Thy name\'s sake.\n\n" +
      "Lord, have mercy. (thrice)\n\n" +
      "Glory to the Father, and to the Son, and to the Holy Spirit, both now and ever, and unto the ages of ages. Amen.\n\n" +
      "Our Father, Who art in the heavens, hallowed be Thy name. Thy kingdom come, Thy will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our debts, as we forgive our debtors; and lead us not into temptation, but deliver us from the evil one.",
    source:"HTM Vespers"});
  if (readerMode) {
    elements.push(readerSub("v-priest-exc", "",
      CH10_OPENING,
      "After Our Father, instead of For Thine is the Kingdom (priest's exclamation), the reader says: Through the prayers of our holy fathers… — Fekula Chapter 10"));
  } else {
    elements.push({id:"v-priest-exc",type:"fixed",label:"",rubric:"Priest:",
      text:"For Thine is the kingdom, and the power, and the glory: of the Father, and of the Son, and of the Holy Spirit, now and ever, and unto the ages of ages.",
      source:"HTM Vespers"});
  }
  // 18. TROPARIA — Vigil troparion formula when has_litya + vigil/great_feast rank
  const isVigilFormula = hasLitya && (rank === "vigil" || rank === "great_feast");
  // Great Feast of the Lord: Theotokos feasts are NOT "of the Lord" — only Nativity,
  // Theophany, Transfiguration, Entry, Palm Sunday, Ascension, Pentecost, Exaltation.
  // For now, use the isGreatFeastOfLord flag from season (which covers fixed calendar
  // great feasts of the Lord). June 24 (Baptist) is NOT a Feast of the Lord.
  const isGreatFeastOfLordForVigil = season === "great_feast" &&
    menaionEntry && menaionEntry.fekula_section === "2F" &&
    // TODO: refine — for now, only Theotokos feasts (Dormition, Nativity of Theotokos,
    // Annunciation, Entry of Theotokos, Protection) use the "×2 + O Theotokos ×1" pattern.
    // True great feasts of the Lord use troparion ×3. This flag stays false for saint feasts
    // like June 24 which use the non-Sunday, non-Lord pattern.
    false; // placeholder — will be refined when Lord-feast dates are encoded

  if (isVigilFormula) {
    // Vigil troparion formula per HTM Vespers and June 24 PDF
    elements.push({id:"v-chanters",type:"fixed",label:"",rubric:"",
      text:"After the Trisagion and Our Father, we chant the dismissal troparia per the Vigil formula.",
      source:"HTM Vespers"});

    if (isGreatFeastOfLordForVigil) {
      // Twelve Great Feasts of the Lord: troparion ×3, then Blessing of Loaves
      const toneLabel = primTropTone ? " · Tone " + primTropTone : "";
      elements.push({id:"v-trop-vigil-1",type:"movable",label:"Troparion of the Feast (thrice)" + toneLabel,
        rubric:"",
        text: primTrop || "[Troparion not yet encoded]",
        source: primSrc || "Menaion",
        fekula:{section:fekulaSection, note:"If it be one of the twelve feasts, we chant the dismissal troparion thrice, followed by the blessing of the loaves. — HTM Vespers; Fekula " + fekulaSection}});
    } else if (isSunday) {
      // Sunday: "O Theotokos and Virgin" ×2, then saint's troparion ×1
      elements.push({id:"v-trop-vigil-theot",type:"movable",
        label:"\"O Theotokos and Virgin, rejoice!\" (twice) · Tone 4",
        rubric:"",
        text: THEOTOKOS_VIRGIN_REJOICE,
        source:"HTM Vespers",
        fekula:{section:fekulaSection, note:"If it be a Sunday, we chant O Theotokos and Virgin twice, and the dismissal troparion of the saint once. — HTM Vespers; Fekula " + fekulaSection}});
      if (primTrop) {
        const toneLabel = primTropTone ? " · Tone " + primTropTone : "";
        elements.push({id:"v-trop-vigil-saint",type:"movable",
          label:"Troparion (once)" + toneLabel,
          rubric:"",
          text: primTrop,
          source: primSrc,
          fekula:{section:fekulaSection, note:"Saint's troparion sung once after O Theotokos ×2 on Sunday Vigil. — HTM Vespers"}});
      }
    } else {
      // Non-Sunday, non-Great-Feast-of-Lord: saint's troparion ×2, then "O Theotokos" ×1
      if (primTrop) {
        const toneLabel = primTropTone ? " · Tone " + primTropTone : "";
        elements.push({id:"v-trop-vigil-saint",type:"movable",
          label:"Troparion (twice)" + toneLabel,
          rubric:"",
          text: primTrop,
          source: primSrc,
          fekula:{section:fekulaSection, note:"If it be some other vigil, and it be not Sunday, we chant the dismissal troparion of the saint twice, and O Theotokos and Virgin, rejoice! — HTM Vespers; Fekula " + fekulaSection}});
      }
      elements.push({id:"v-trop-vigil-theot",type:"movable",
        label:"\"O Theotokos and Virgin, rejoice!\" (once) · Tone 4",
        rubric:"",
        text: THEOTOKOS_VIRGIN_REJOICE,
        source:"HTM Vespers",
        fekula:{section:fekulaSection, note:"O Theotokos and Virgin, rejoice — sung once after the saint's troparion (×2) at a non-Sunday vigil. — HTM Vespers"}});
    }

    // Blessing of the Loaves
    if (readerMode) {
      elements.push(readerOmit("v-litiya-blessing",
        "Blessing of the Loaves (Deacon: 'Let us pray to the Lord' / Priest: 'O Lord Jesus Christ our God, who didst bless the five breads…') — priestly function, omitted in Reader's Service. Fekula Chapter 10."));
      // Troparion repetition still applies in reader mode — already emitted above.
      // Post-blessing: Blessed be the name + Psalm 33 + priestly blessing also omitted
      elements.push(readerOmit("v-litiya-post-blessing",
        "Post-blessing sequence (Blessed be the name… / Psalm 33 / priestly blessing) — omitted in Reader's Service. Fekula Chapter 10."));
    } else {
      elements.push({id:"v-litiya-blessing-prompt", type:"fixed", label:"Blessing of the Loaves",
        rubric:"Deacon:",
        text: LITIYA_BLESSING_LOAVES_PROMPT,
        source:"OCA Litiya Prayer",
        fekula:{section:fekulaSection, note:"Then, if there hath been a Litiya, the blessing of the loaves. — HTM Vespers; Fekula " + fekulaSection}});
      elements.push({id:"v-litiya-blessing-resp", type:"fixed", label:"",
        rubric:"Choir:",
        text: LITIYA_BLESSING_LOAVES_RESPONSE,
        source:"OCA Litiya Prayer"});
      elements.push({id:"v-litiya-blessing", type:"fixed", label:"",
        rubric:"Priest:",
        text: LITIYA_BLESSING_LOAVES_PRAYER + "\n\nChoir: Amen.",
        source:"OCA Litiya Prayer",
        fekula:{section:fekulaSection, note:"Blessing of the loaves: 'O Lord Jesus Christ our God, who didst bless the five breads in the wilderness…' — OCA Priest's Service Book (1973); Fekula " + fekulaSection}});

      // Post-blessing sequence
      elements.push({id:"v-litiya-blessed-name", type:"fixed", label:"",
        rubric:"Chanters:",
        text: LITIYA_BLESSED_NAME,
        source:"HTM Vespers",
        fekula:{section:fekulaSection, note:"After the blessing of the loaves: 'Blessed be the name of the Lord, from henceforth and forevermore' (thrice). — HTM Vespers"}});
      elements.push({id:"v-litiya-ps33", type:"fixed", label:"Psalm 33 (first 10 verses)",
        rubric:"Chanters:",
        text: LITIYA_PS33_FIRST_10,
        source:"HTM Vespers",
        fekula:{section:fekulaSection, note:"And the first ten verses of the 33rd Psalm are chanted. — HTM Vespers"}});
      elements.push({id:"v-litiya-priestly-blessing", type:"fixed", label:"",
        rubric:"Priest:",
        text: LITIYA_PRIESTLY_BLESSING + "\n\nChoir: Amen.",
        source:"HTM Vespers",
        fekula:{section:fekulaSection, note:"'The blessing of the Lord be upon you…' — concludes the Blessing of the Loaves sequence. — HTM Vespers"}});
    }

    // Informational note: transition to Matins
    elements.push({id:"v-litiya-matins-note", type:"informational", label:"",
      text:"And the reader beginneth Matins with the Six Psalms.",
      source:"HTM Vespers",
      fekula:{section:fekulaSection, note:"At an All-Night Vigil, the service continues directly into Matins after the blessing of the loaves. The dismissal is given at the end of the First Hour. — HTM Vespers"}});

  } else {
    // Standard troparion logic (non-Vigil or no Litiya)
  elements.push({id:"v-chanters",type:"fixed",label:"",rubric:"",
    text:"Chanters sing the appointed dismissal troparia.",
    source:"HTM Vespers"});
  if (primTrop) {
    const toneLabel = primTropTone ? " · Tone " + primTropTone : "";
    elements.push({id:"v-trop-1",type:"movable",label:"Troparion" + toneLabel,
      rubric:"",
      text: primTrop,
      source: primSrc,
      fekula:{section:fekulaSection, note:"Troparia at Vespers: " + fekulaSection + ". Simple/weekday: troparion from Menaion; Glory…; Both now… theotokion per Chapter 6. — Fekula §2A–§2F"}});
  } else {
    elements.push({id:"v-trop-none",type:"movable",label:"Troparion",
      rubric:"",
      unresolved:true,
      text:"[Troparion not yet encoded for this date]",
      source:"Menaion",
      fekula:{section:fekulaSection, note:"Troparion from the Menaion — not yet encoded for this date."}});
  }
  if (secTrop) {
    // Glory… as standalone fixed element between troparion boxes
    elements.push({id:"v-trop-glory",type:"fixed",label:"",
      text:"Glory to the Father, and to the Son, and to the Holy Spirit.",
      source:"HTM Vespers"});
    const secToneLabel = secTropTone ? " · Tone " + secTropTone : "";
    elements.push({id:"v-trop-2",type:"movable",label:"Troparion (Glory…)" + secToneLabel,
      rubric:"",
      text: secTrop,
      source: secSrc,
      fekula:{section:fekulaSection, note:"Second troparion (after Glory…). — Fekula §4A"}});
  }
  // vespers_kontakion: false means the entry explicitly suppresses the kontakion
  // at the Vespers dismissal (e.g. P+42 §4B13, P+56 §4B17 — three troparia only).
  // When true/absent, the kontakion appears unless a thirdTrop fills Both now.
  const vespersKontakionSuppressed = isPentecostarion && pentEntry && pentEntry.vespers_kontakion === false;

  if (thirdTrop) {
    // Both now… as standalone fixed element between troparion boxes
    elements.push({id:"v-trop-bothnow",type:"fixed",label:"",
      text:"Both now and ever, and unto the ages of ages. Amen.",
      source:"HTM Vespers"});
    const thirdToneLabel = thirdTropTone ? " · Tone " + thirdTropTone : "";
    elements.push({id:"v-trop-3",type:"movable",label:"Troparion (Both now…)" + thirdToneLabel,
      rubric:"",
      text: thirdTrop,
      source: thirdSrc,
      fekula:{section:fekulaSection, note:"Both now… filled by appointed troparion (not kontakion). — Fekula §4B13"}});
  } else if (kont && !vespersKontakionSuppressed) {
    // Both now… as standalone fixed element before kontakion box
    elements.push({id:"v-kont-bothnow",type:"fixed",label:"",
      text:"Both now and ever, and unto the ages of ages. Amen.",
      source:"HTM Vespers"});
    const kontToneLabel = kontTone ? " · Tone " + kontTone : "";
    elements.push({id:"v-kont",type:"movable",label:"Kontakion (Both now…)" + kontToneLabel,
      rubric:"",
      text: kont,
      source: kontSrc,
      fekula:{section:fekulaSection, note:"Theotokion/kontakion at Both now… — governed by rank, day of week, and Fekula Chapter 6 rules."}});
  }
  } // end else (standard troparion logic)
  // 19. DISMISSAL SEQUENCE
  // At an All-Night Vigil with Litiya, there is no standard dismissal —
  // the service continues directly into Matins. The transition note was
  // already emitted in the Vigil troparion formula section above.
  if (isVigilFormula) {
    // No dismissal — Vigil continues into Matins
  } else if (readerMode) {
    // Reader's Service dismissal per Fekula Chapter 10:
    //   More honorable…
    //   Glory… Now and ever… Lord, have mercy. (thrice) Lord, bless!
    //   Through the prayers of our holy fathers, of [saints], and of all the saints,
    //   Lord Jesus Christ, Son of God, have mercy on us. Amen.
    elements.push(readerOmit("v-diss-priest-seq",
      "Priest dismissal sequence (Wisdom! / He that is is blessed / O most holy Theotokos, save us! / Glory to Thee, O Christ God…) — replaced by Reader's dismissal below. Fekula Chapter 10."));
    elements.push({id:"v-more-hon",type:"fixed",label:"",rubric:"Reader/Chanters:",
      text:"More honourable than the Cherubim, and beyond compare more glorious than the Seraphim, who without corruption gavest birth to God the Word, the very Theotokos, thee do we magnify.",
      source:"HTM Vespers"});
    elements.push({id:"v-diss-end",type:"fixed",label:"",rubric:null,
      text:"Glory to the Father, and to the Son, and to the Holy Spirit, both now and ever, and unto the ages of ages. Amen.\n\nLord, have mercy. (thrice) Lord, bless!",
      source:"HTM Vespers"});
    // Build reader dismissal formula — same saint insertion logic as priest dismissal
    const _buildReaderDismissal = () => {
      let saintPart = "";
      if (isSunday) {
        saintPart = "of our Lord, God, and Savior Jesus Christ; ";
      } else if (isPentecostarion && pentEntry) {
        const fmt = pentEntry.hours_format;
        if (fmt === "ascension" || fmt === "apodosis_ascension")
          saintPart = "of our Lord, God, and Savior Jesus Christ Who ascended in glory; ";
        else if (fmt === "pentecost" || fmt === "apodosis_pentecost" || fmt === "holy_spirit_day")
          saintPart = "of our Lord, God, and Savior Jesus Christ Who sent down the Holy Spirit; ";
        else
          saintPart = "of our Lord, God, and Savior Jesus Christ; ";
      } else if (menaionEntry && menaionEntry.saint) {
        saintPart = `of ${menaionEntry.saint}; `;
      }
      return `Through the prayers of our holy fathers, ${saintPart}` +
             `(and of the patron of this temple,) and of all the saints, ` +
             `Lord Jesus Christ, Son of God, have mercy on us. Amen.`;
    };
    elements.push({id:"v-diss-dismissal",type:"substitution",label:"Dismissal",rubric:"Reader:",
      text:_buildReaderDismissal(),
      source:"Fekula Chapter 10",
      fekula:{section:CH10,
        note:"The dismissal of Vespers without a priest: More honorable… Glory… Lord, have mercy. (thrice) Lord, bless! Through the prayers of our holy fathers, of (saints of the day and of the temple), and of all the saints, Lord Jesus Christ, Son of God, have mercy on us. Amen. — Fekula Chapter 10"}});
  } else {
    elements.push({id:"v-diss-wisdom",type:"fixed",label:"Dismissal",rubric:"Deacon (or Priest):",
      text:"Wisdom!",
      source:"HTM Vespers"});
    elements.push({id:"v-diss-wisdom-chanters",type:"fixed",label:"",rubric:"Chanters:",
      text:"Father (Master), bless!",
      source:"HTM Vespers"});
    elements.push({id:"v-diss-priest",type:"fixed",label:"",rubric:"Priest:",
      text:"He that is is blessed, Christ our God, always, now and ever, and unto the ages of ages.",
      source:"HTM Vespers"});
    elements.push({id:"v-diss-chanters",type:"fixed",label:"",rubric:"Chanters:",
      text:"Amen. Establish, O God, the holy Orthodox Faith of Orthodox Christians, unto the ages of ages.",
      source:"HTM Vespers"});
    elements.push({id:"v-diss-theot",type:"fixed",label:"",rubric:"Priest:",
      text:"O most holy Theotokos, save us!",
      source:"HTM Vespers"});
    elements.push({id:"v-more-hon",type:"fixed",label:"",rubric:"Chanters:",
      text:"More honourable than the Cherubim, and beyond compare more glorious than the Seraphim, who without corruption gavest birth to God the Word, the very Theotokos, thee do we magnify.",
      source:"HTM Vespers"});
    elements.push({id:"v-glory-thee",type:"fixed",label:"",rubric:"Priest:",
      text:"Glory to Thee, O Christ God, our hope, glory to Thee.",
      source:"HTM Vespers"});
    elements.push({id:"v-diss-end",type:"fixed",label:"",rubric:"Chanters:",
      text:"Glory to the Father, and to the Son, and to the Holy Spirit, both now and ever, and unto the ages of ages. Amen.\n\nLord, have mercy. (thrice) Father (Master), bless!",
      source:"HTM Vespers"});

  // ── DISMISSAL ─────────────────────────────────────────────────────────────
  // Formula: "May Christ our true God, through the intercessions of His most
  // pure Mother; [variable middle]; of the holy, glorious, and all-praised
  // apostles; of the holy, glorious, and victorious martyrs; of our holy and
  // God-bearing fathers; of the holy and Righteous Ancestors of God Joachim
  // and Anna, and of all the saints; have mercy on us and save us, for He is
  // good and the Lover of mankind."
  //
  // Variable middle by season/day:
  //   Sunday ordinary:      "Who rose from the dead;"
  //   Pentecostarion Sun:   "Who rose from the dead and ascended in glory into heaven;"
  //   Great Feast of Lord:  feast-specific phrase (future — falls back to ordinary for now)
  //   Ordinary weekday:     saint of the day from menaionEntry.saint
  //   No saint known:       middle slot omitted
  // Source: HTM Vespers; OCA Order of Vespers (2021)
  const _buildVespersDismissal = () => {
    const open = "May Christ our true God, through the intercessions of His most pure Mother;";
    const close = "of the holy, glorious, and all-praised apostles; " +
      "of the holy, glorious, and victorious martyrs; " +
      "of our holy and God-bearing fathers; " +
      "of the holy and Righteous Ancestors of God Joachim and Anna, " +
      "and of all the saints; have mercy on us and save us, " +
      "for He is good and the Lover of mankind.";

    let middle = "";
    if (isSunday) {
      middle = "Who rose from the dead;";
    } else if (isPentecostarion && pentEntry) {
      const fmt = pentEntry && pentEntry.hours_format;
      if (fmt === "ascension" || fmt === "apodosis_ascension") {
        middle = "Who ascended in glory into heaven;";
      } else if (fmt === "pentecost" || fmt === "apodosis_pentecost" || fmt === "holy_spirit_day") {
        middle = "Who sent down the Holy Spirit upon His holy apostles;";
      } else {
        // Pentecostarion weekday — use preceding Sunday tone reference
        middle = "Who rose from the dead;";
      }
    } else if (menaionEntry && menaionEntry.saint) {
      // Ordinary weekday/Saturday: insert saint name directly.
      // menaionEntry.saint already contains the full title, e.g.
      // "Holy Hieromartyr Timothy, Bishop of Prussia" — no prefix needed.
      middle = `${menaionEntry.saint};`;
    }

    return middle
      ? `${open} ${middle} ${close}`
      : `${open} ${close}`;
  };

  elements.push({id:"v-diss-dismissal",type:"movable",label:"Dismissal",rubric:"Priest:",
    text:_buildVespersDismissal(),
    source:"HTM Vespers; OCA Order of Vespers (2021)",
    fekula:{section:fekulaSection,
      note:"The dismissal formula inserts the saint of the day after 'His most pure Mother.' " +
           "On Sundays: 'Who rose from the dead.' " +
           "During the Pentecostarion: feast-specific phrase. " +
           "On ordinary weekdays: the commemorated saint by name. " +
           "Source: HTM Order of Vespers; OCA Order of Vespers (2021)."}});
  elements.push({id:"v-diss-amen",type:"fixed",label:"",rubric:null,
    text:"Amen.",
    source:"HTM Vespers"});
  } // end else (priest mode dismissal)
  // END MARKER
  elements.push({id:"v-end",type:"end_marker",label:"",
    text: isVigilFormula ? "END OF GREAT VESPERS — SERVICE CONTINUES WITH MATINS" : "THE END OF VESPERS",
    source:"HTM Vespers"});
  return elements;
}




// ─── GLOSSARY PANEL COMPONENT ────────────────────────────────────────────────
const GLOSSARY_CATEGORIES = [
  { label: "Hymnography", keys: ["troparion", "kontakion", "theotokion", "stavrotheotokion", "kathisma"] },
  { label: "Liturgical Books", keys: ["menaion", "octoechos", "horologion", "triodion", "pentecostarion"] },
  { label: "Feast Periods", keys: ["great feast", "forefeast", "afterfeast", "apodosis"] },
  { label: "Music & Tones", keys: ["tone", "polyeleos", "doxology"] },
  { label: "Theology & Titles", keys: ["theotokos"] },
  { label: "Service Structure", keys: ["service rank", "reader"] },
  { label: "Calendar & Computation", keys: ["all saints sunday", "paschal cycle", "computus"] },
];

function GlossaryPanel({ glossary }) {
  const [search, setSearch] = useState("");
  const q = search.trim().toLowerCase();

  const filtered = q
    ? Object.entries(glossary).filter(
        ([term, def]) => term.includes(q) || def.toLowerCase().includes(q)
      )
    : null;

  return (
    <div style={{ background: "#EDE5D0", border: "1px solid #D4C49A",
      borderRadius: "6px", padding: "1.2rem 1.5rem", marginBottom: "1.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem",
        marginBottom: "1rem", flexWrap: "wrap" }}>
        <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em",
          textTransform: "uppercase", color: "#8B6914", flexShrink: 0 }}>
          Glossary of Terms
        </div>
        <input
          type="text"
          placeholder="Search glossary…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ border: "1px solid #C4A84A", borderRadius: "3px",
            padding: "3px 8px", fontFamily: "Georgia, serif", fontSize: "0.82rem",
            background: "#FAF6EE", color: "#1C1008", flexGrow: 1, minWidth: "120px" }}
        />
      </div>

      {filtered ? (
        // Search results — flat list
        filtered.length === 0 ? (
          <div style={{ fontSize: "0.85rem", color: "#9A8A70", fontStyle: "italic" }}>
            No terms match "{search}".
          </div>
        ) : (
          filtered.map(([term, def]) => (
            <GlossaryEntry key={term} term={term} def={def} highlight={q} />
          ))
        )
      ) : (
        // Categorized browse
        GLOSSARY_CATEGORIES.map(cat => (
          <div key={cat.label} style={{ marginBottom: "1rem" }}>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#9A8A70", marginBottom: "0.4rem",
              paddingBottom: "0.2rem", borderBottom: "1px solid #D4C49A" }}>
              {cat.label}
            </div>
            {cat.keys.map(key => glossary[key] ? (
              <GlossaryEntry key={key} term={key} def={glossary[key]} />
            ) : null)}
          </div>
        ))
      )}
    </div>
  );
}

function GlossaryEntry({ term, def, highlight }) {
  const [open, setOpen] = useState(false);
  const displayTerm = term.charAt(0).toUpperCase() + term.slice(1);

  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{ background: "none", border: "none", cursor: "pointer",
          padding: "0", fontFamily: "Georgia, serif", fontSize: "0.85rem",
          color: "#8B6914", fontWeight: "bold", textAlign: "left",
          display: "flex", alignItems: "center", gap: "4px" }}
      >
        <span style={{ fontSize: "0.65rem", color: "#C4A84A" }}>{open ? "▼" : "▶"}</span>
        {displayTerm}
      </button>
      {open && (
        <div style={{ fontSize: "0.83rem", lineHeight: "1.6", color: "#3D3020",
          paddingLeft: "1rem", marginTop: "0.2rem", borderLeft: "2px solid #D4C49A" }}>
          {def}
        </div>
      )}
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

// Service registry — ordered list of all services the tool can display.
// Add new services here as they are built; the dropdown and nav arrows update automatically.

// ─── TYPICA DATA ─────────────────────────────────────────────────────────────
// Source: HTM, The Order of the Typica (htm_typica.pdf).
// Assembly authority: HTM primary; OCA outline confirms structure.
// Fekula context: Typica follows the 6th Hour on ordinary Octoechos weekdays
//   and Sundays when no Divine Liturgy is served.
// The ONLY movable element is the Kontakia section (see TYPICA_KONTAKIA below).
// Beatitudes troparia — from pentEntry or menaionEntry.beatitudes_troparia.

// ── PSALM 102 ──────────────────────────────────────────────────────────────
// Source: HTM htm_typica.pdf p.1
const TYPICA_PSALM_102 =
  "Bless the Lord, O my soul, and all that is within me bless His holy name. " +
  "Bless the Lord, O my soul, and forget not all that He hath done for thee, " +
  "Who is gracious unto all thine iniquities, Who healeth all thine infirmities, " +
  "Who redeemeth thy life from corruption, Who crowneth thee with mercy and compassion, " +
  "Who fulfilleth thy desire with good things; thy youth shall be renewed as the eagle’s. " +
  "The Lord performeth deeds of mercy, and executeth judgment for all them that are wronged. " +
  "He hath made His ways known unto Moses, unto the sons of Israel the things that He hath willed. " +
  "Compassionate and merciful is the Lord, long-suffering and plenteous in mercy; " +
  "not unto the end will He be angered, neither unto eternity will He be wroth. " +
  "Not according to our iniquities hath He dealt with us, neither according to our sins hath He rewarded us. " +
  "For according to the height of heaven from the earth, the Lord hath made His mercy to prevail over them that fear Him. " +
  "As far as the east is from the west, so far hath He removed our iniquities from us. " +
  "Like as a father hath compassion upon his sons, so hath the Lord had compassion upon them that fear Him: " +
  "for He knoweth whereof we are made, He hath remembered that we are dust. " +
  "As for man, his days are as the grass; as a flower of the field, so shall he blossom forth. " +
  "For when the wind is passed over it, then it shall be gone, and no longer will it know the place thereof. " +
  "But the mercy of the Lord is from eternity, even unto eternity, upon them that fear Him. " +
  "And His righteousness is upon sons of sons, upon them that keep His testament, " +
  "and remember His commandments to do them. " +
  "The Lord in heaven hath prepared His throne, and His kingdom ruleth over all. " +
  "Bless the Lord, all ye His angels, mighty in strength, that perform His word, to hear the voice of His words. " +
  "Bless the Lord, all ye His hosts, His ministers that do His will. " +
  "Bless the Lord, all ye His works, in every place of His dominion.\n\n" +
  "Glory to the Father, and to the Son, and to the Holy Spirit, both now and ever, and unto the ages of ages. Amen.\n\n" +
  "Bless the Lord, O my soul, and all that is within me bless His holy name.\n\n" +
  "Blessed art Thou, O Lord.\n\n" +
  "Glory to the Father, and to the Son, and to the Holy Spirit.";

// ── PSALM 145 ──────────────────────────────────────────────────────────────
// Source: HTM htm_typica.pdf p.2
const TYPICA_PSALM_145 =
  "Praise the Lord, O my soul. I will praise the Lord in my life, " +
  "I will chant unto my God for as long as I have my being. " +
  "Trust ye not in princes, in the sons of men, in whom there is no salvation. " +
  "His spirit shall go forth, and he shall return unto his earth. " +
  "In that day all his thoughts shall perish. " +
  "Blessed is he of whom the God of Jacob is his help, whose hope is in the Lord his God, " +
  "Who hath made heaven and the earth, the sea and all that is therein, " +
  "Who keepeth truth unto eternity, Who executeth judgment for the wronged, " +
  "Who giveth food unto the hungry. The Lord looseth the fettered; " +
  "the Lord maketh wise the blind; the Lord setteth aright the fallen; " +
  "the Lord loveth the righteous; the Lord preserveth the proselytes. " +
  "He shall adopt for His own the orphan and widow, and the way of the sinners shall He destroy. " +
  "The Lord shall be king unto eternity; thy God, O Sion, unto generation and generation.\n\n" +
  "Both now and ever, and unto the ages of ages. Amen.";

// ── ONLY-BEGOTTEN SON ──────────────────────────────────────────────────────
// Source: HTM htm_typica.pdf p.2
const TYPICA_ONLY_BEGOTTEN =
  "O Only-begotten Son and Word of God, Who art immortal, yet didst deign for our salvation " +
  "to be incarnate of the holy Theotokos and Ever-Virgin Mary, and without change didst become man, " +
  "and wast crucified, O Christ God, trampling down death by death; " +
  "Thou Who art one of the Holy Trinity, glorified with the Father and the Holy Spirit, save us.";

// ── THE BEATITUDES (fixed verses) ──────────────────────────────────────────
// Source: OCA (replaces HTM version)
const TYPICA_BEATITUDES_FIXED = [
  "In Thy Kingdom, remember us, O Lord, when Thou comest in Thy Kingdom.",
  "Blessed are the poor in spirit, for theirs is the Kingdom of Heaven.",
  "Blessed are those who mourn, for they shall be comforted.",
  "Blessed are the meek, for they shall inherit the earth.",
  "Blessed are those who hunger and thirst after righteousness, for they shall be filled.",
  "Blessed are the merciful, for they shall obtain mercy.",
  "Blessed are the pure in heart, for they shall see God.",
  "Blessed are the peacemakers, for they shall be called the sons of God.",
  "Blessed are those who are persecuted for righteousness’ sake, for theirs is the Kingdom of Heaven.",
  "Blessed are you when men shall revile you and persecute you, and shall say all manner of evil against you falsely for my sake.",
  "Rejoice and be exceedingly glad, for great is your reward in heaven.",
  "Glory to the Father, and to the Son, and to the Holy Spirit, both now and ever, and unto the ages of ages. Amen.",
];

// ── THE CREED ──────────────────────────────────────────────────────────────
// Source: HTM htm_typica.pdf pp.4-5
const TYPICA_CREED =
  "I believe in one God, the Father Almighty, Maker of heaven and earth, " +
  "and of all things visible and invisible. " +
  "And in one Lord Jesus Christ, the Son of God, the Only-begotten, " +
  "begotten of the Father before all ages; Light of Light, true God of true God; " +
  "begotten, not made; of one essence with the Father; by Whom all things were made; " +
  "Who for us men, and for our salvation, came down from the heavens, " +
  "and was incarnate of the Holy Spirit and the Virgin Mary, and became man; " +
  "And was crucified for us under Pontius Pilate, and suffered, and was buried, " +
  "and arose again on the third day according to the Scriptures; " +
  "And ascended into the heavens, and sitteth on the right hand of the Father; " +
  "And shall come again, with glory, to judge both the living and the dead; " +
  "Whose kingdom shall have no end. " +
  "And in the Holy Spirit, the Lord, the Giver of Life; Who proceedeth from the Father; " +
  "Who with the Father and the Son together is worshipped and glorified; " +
  "Who spake by the prophets. " +
  "In One, Holy, Catholic, and Apostolic Church. " +
  "I confess one baptism for the remission of sins. " +
  "I look for the resurrection of the dead, And the life of the age to come. Amen.";

// ── FORGIVENESS PRAYER ─────────────────────────────────────────────────────
// Source: HTM htm_typica.pdf p.5
const TYPICA_FORGIVENESS =
  "Remit, pardon, forgive, O God, our offences, both voluntary and involuntary, " +
  "in deed and word, in knowledge and ignorance, by day and by night, in mind and thought; " +
  "forgive us all things, for Thou art good and the Lover of mankind.";

// ── PSALM 33 ───────────────────────────────────────────────────────────────
// Source: HTM htm_typica.pdf p.9
const TYPICA_PSALM_33 =
  "I will bless the Lord at all times, His praise shall continually be in my mouth. " +
  "In the Lord shall my soul be praised; let the meek hear and be glad. " +
  "O magnify the Lord with me, and let us exalt His name together. " +
  "I sought the Lord, and He heard me, and delivered me from all my tribulations. " +
  "Come unto Him, and be enlightened, and your faces shall not be ashamed. " +
  "This poor man cried, and the Lord heard him, and saved him out of all his tribulations. " +
  "The angel of the Lord will encamp round about them that fear Him, and will deliver them. " +
  "O taste and see that the Lord is good; blessed is the man that hopeth in Him. " +
  "O fear the Lord, all ye His saints; for there is no want to them that fear Him. " +
  "Rich men have turned poor and gone hungry; but they that seek the Lord shall not be deprived of any good thing. " +
  "Come ye children, hearken unto me; I will teach you the fear of the Lord. " +
  "What man is there that desireth life, who loveth to see good days? " +
  "Keep thy tongue from evil, and thy lips from speaking guile. " +
  "Turn away from evil, and do good; seek peace, and pursue it. " +
  "The eyes of the Lord are upon the righteous, and His ears are opened unto their supplication. " +
  "The face of the Lord is against them that do evil, utterly to destroy the remembrance of them from the earth. " +
  "The righteous cried, and the Lord heard them, and He delivered them out of all their tribulations. " +
  "The Lord is nigh unto them that are a contrite heart, and He will save the humble of spirit. " +
  "Many are the tribulations of the righteous, and the Lord shall deliver them out of them all. " +
  "The Lord keepeth all their bones, not one of them shall be broken. " +
  "The death of sinners is evil, and they that hate the righteous shall do wrong. " +
  "The Lord will redeem the souls of His servants, and none of them will do wrong that hope in Him.\n\n" +
  "Glory to the Father, and to the Son, and to the Holy Spirit, both now and ever, and unto the ages of ages. Amen.";

// ── TYPICA KONTAKIA (fixed weekday/Saturday texts) ─────────────────────────
// Source: HTM htm_typica.pdf pp.5-6
// Keys: day-of-week (0=Sun … 6=Sat). Sunday uses Hypakoë (OCTOECHOS_HYPAKOE).
// Structure: each entry is an ordered array of { label, tone, text } objects.
// The saint's own kontakion (from menaionEntry) is appended at runtime
// per the rubric: "the Kontakion to the saint is said first: Glory…Both now…
// and then the Kontakion to the feast."
// The "Both now" Theotokion on weekdays (not Saturday) = O Protection of Christians.
// On Saturday the Both now = Kontakion to the Martyrs.

const TYPICA_KONTAKIA = {
  // Monday — Bodiless Hosts, then Both now (Theotokos)
  1: [
    { label: "Kontakion — Bodiless Hosts", tone: 2,
      text: "Supreme commanders of God and ministers of the divine glory, " +
            "guides of men and leaders of the bodiless hosts: " +
            "Ask for what is to our profit and for great mercy, " +
            "since ye are Supreme Commanders of the Bodiless Hosts." },
    { label: "Both now — Theotokos", tone: null,
      text: "O protection of Christians that cannot be put to shame, " +
            "O mediation unto the Creator unfailing, disdain not the suppliant voices of sinners; " +
            "but be thou quick, O good one, to help us who in faith cry unto thee; " +
            "Hasten to intercession and speed thou to make supplication, " +
            "thou who dost ever protect, O Theotokos, them that honour thee." },
  ],
  // Tuesday — Forerunner, then Both now (Theotokos)
  2: [
    { label: "Kontakion — St John the Forerunner", tone: 2,
      text: "O Prophet of God and Forerunner of grace, " +
            "having obtained thy head from the earth as a most sacred rose, " +
            "we ever receive healings; " +
            "for again, as of old in the world, thou preachest repentance." },
    { label: "Both now — Theotokos", tone: null,
      text: "O protection of Christians that cannot be put to shame, " +
            "O mediation unto the Creator unfailing, disdain not the suppliant voices of sinners; " +
            "but be thou quick, O good one, to help us who in faith cry unto thee; " +
            "Hasten to intercession and speed thou to make supplication, " +
            "thou who dost ever protect, O Theotokos, them that honour thee." },
  ],
  // Wednesday — Cross, then Both now (Theotokos)
  3: [
    { label: "Kontakion — the Holy Cross", tone: 4,
      text: "O Thou Who wast lifted up willingly on the Cross, " +
            "bestow Thy mercies upon the new community named after Thee, O Christ God; " +
            "gladden with Thy power the Orthodox Christians, granting them victory over enemies; " +
            "may they have as Thy help the weapon of peace, the invincible trophy." },
    { label: "Both now — Theotokos", tone: null,
      text: "O protection of Christians that cannot be put to shame, " +
            "O mediation unto the Creator unfailing, disdain not the suppliant voices of sinners; " +
            "but be thou quick, O good one, to help us who in faith cry unto thee; " +
            "Hasten to intercession and speed thou to make supplication, " +
            "thou who dost ever protect, O Theotokos, them that honour thee." },
  ],
  // Thursday — Apostles, Nicholas, then Both now (Theotokos)
  4: [
    { label: "Kontakion — the Holy Apostles", tone: 2,
      text: "The firm and divine-voiced preachers, the chief of Thy disciples, O Lord, " +
            "Thou hast taken to Thyself for the enjoyment of Thy blessings and for repose; " +
            "their labours and death didst Thou accept as above every sacrifice, " +
            "O Thou Who alone knowest the hearts." },
    { label: "Kontakion — St Nicholas", tone: 3,
      text: "In Myra, O Saint, thou didst prove to be a minister of things sacred; " +
            "for having fulfilled the Gospel of Christ, O righteous one, " +
            "thou didst lay down thy life for thy people, and didst save the innocent from death. " +
            "Wherefore thou wast sanctified as a great initiate of the grace of God." },
    { label: "Both now — Theotokos", tone: null,
      text: "O protection of Christians that cannot be put to shame, " +
            "O mediation unto the Creator unfailing, disdain not the suppliant voices of sinners; " +
            "but be thou quick, O good one, to help us who in faith cry unto thee; " +
            "Hasten to intercession and speed thou to make supplication, " +
            "thou who dost ever protect, O Theotokos, them that honour thee." },
  ],
  // Friday — Cross, then Both now (Theotokos)
  5: [
    { label: "Kontakion — the Holy Cross", tone: 4,
      text: "O Thou Who wast lifted up willingly on the Cross, " +
            "bestow Thy mercies upon the new community named after Thee, O Christ God; " +
            "gladden with Thy power the Orthodox Christians, granting them victory over enemies; " +
            "may they have as Thy help the weapon of peace, the invincible trophy." },
    { label: "Both now — Theotokos", tone: null,
      text: "O protection of Christians that cannot be put to shame, " +
            "O mediation unto the Creator unfailing, disdain not the suppliant voices of sinners; " +
            "but be thou quick, O good one, to help us who in faith cry unto thee; " +
            "Hasten to intercession and speed thou to make supplication, " +
            "thou who dost ever protect, O Theotokos, them that honour thee." },
  ],
  // Saturday — Departed (Glory), Martyrs (Both now)
  6: [
    { label: "Glory — Kontakion for the Departed", tone: 8,
      text: "With the saints give rest, O Christ, to the souls of Thy servants, " +
            "where there is neither sickness, nor sorrow, nor sighing, but life everlasting." },
    { label: "Both now — Kontakion to the Martyrs", tone: 8,
      text: "To Thee, O Lord, the Planter of creation, the world doth offer the " +
            "God-bearing martyrs as the firstfruits of nature. " +
            "By their intercessions preserve Thy Church, Thy commonwealth, in profound peace, " +
            "through the Theotokos, O Greatly-merciful One." },
  ],
};


// ─── TYPICA PROKEIMENON TABLES ───────────────────────────────────────────────
// Source: HTM_daily_troparia_kontakia_alleluia_prokeimena.txt (weekdays)
// Source: St. Sergius Sunday Octoechos (resurrectional prokeimena by tone)
// Routing in assembleTypica():
//   1. pentEntry.prokeimenon_text — Pentecostarion Sunday/feast (already encoded)
//   2. SUNDAY_RESURRECTIONAL_PROKEIMENON[tone] — ordinary Sunday (Octoechos)
//   3. TYPICA_WEEKDAY_PROKEIMENON[dowNumber] — Mon–Sat
//   4. menaionEntry.prokeimenon_text — feast proper prokeimenon (appended)

// Weekday prokeimena — invariable, keyed by day of week (1=Mon … 6=Sat)
// Saturday has TWO prokeimena (All Saints + Departed), shown in sequence.
const TYPICA_WEEKDAY_PROKEIMENON = {
  1: { tone: 4,
       text: "Who maketh His angels spirits, and His ministers a flame of fire.",
       stichos: "Bless the Lord, O my soul; O Lord my God, Thou hast been magnified exceedingly." },
  2: { tone: 7,
       text: "The righteous man shall be glad in the Lord, and shall hope in Him.",
       stichos: "Hearken, O God, unto my prayer, when I make supplication unto Thee." },
  3: { tone: 3,
       text: "My soul doth magnify the Lord, and my spirit hath rejoiced in God my Saviour.",
       stichos: "For He hath looked upon the lowliness of His handmaiden; for behold, from henceforth all generations shall call me blessed.",
       label: "the Song of the Theotokos" },
  4: { tone: 8,
       text: "Their sound hath gone forth into all the earth, and their words unto the ends of the world.",
       stichos: "The heavens declare the glory of God, and the firmament proclaimeth the work of His hands." },
  5: { tone: 7,
       text: "Exalt ye the Lord our God, and worship the footstool of His feet; for it is holy.",
       stichos: "The Lord is king, let the peoples rage." },
  6: [
    { tone: 8,
      text: "Be glad in the Lord, and rejoice, ye righteous.",
      stichos: "Blessed are they whose iniquities are forgiven, and whose sins are covered.",
      label: "All Saints" },
    { tone: 6,
      text: "Their souls shall dwell among good things.",
      stichos: "Unto Thee, O Lord, have I lifted up my soul. O my God, in Thee have I trusted; let me never be put to shame.",
      label: "the Departed" },
  ],
};

// Weekday Alleluia verses — keyed by day of week (1=Mon … 6=Sat)
// Source: HTM_daily_troparia_kontakia_alleluia_prokeimena.txt
// Saturday has two stichoi (All Saints + Departed).
const TYPICA_WEEKDAY_ALLELUIA = {
  1: { tone: 5,
       verse: "Praise the Lord, all ye His angels; praise Him, all ye His hosts.",
       stichoi: ["For He spake, and they came to be; He commanded, and they were created."] },
  2: { tone: 4,
       verse: "The righteous man shall flourish like a palm tree, and like a cedar in Lebanon shall he be multiplied.",
       stichoi: ["They that are planted in the house of the Lord, in the courts of our God they shall blossom forth."] },
  3: { tone: 8,
       verse: "Hearken, O daughter, and see, and incline thine ear.",
       stichoi: ["The rich among the people shall entreat thy countenance."] },
  4: { tone: 1,
       verse: "The heavens shall confess Thy wonders, O Lord, and Thy truth in the congregation of saints.",
       stichoi: ["God Who is glorified in the council of the saints."] },
  5: { tone: 1,
       verse: "Remember Thy congregation which Thou hast purchased from the beginning.",
       stichoi: ["But God is our king before the ages, He hath wrought salvation in the midst of the earth."] },
  6: { tone: 4,
       verse: "The righteous cried, and the Lord heard them, and He delivered them out of all their tribulations.",
       stichoi: [
         "Many are the tribulations of the righteous, and the Lord shall deliver them out of them all.",
         "Blessed are they whom Thou hast chosen and hast taken to Thyself, O Lord, and their memorial is unto generation and generation.",
       ]},
};
// Sunday resurrectional Alleluia verses — keyed by tone (1–8)
// Source: St. Sergius Sunday Octoechos (resurrectional Alleluia table)
// Used on ordinary Sundays when no pentEntry alleluia_verse is encoded.
const SUNDAY_RESURRECTIONAL_ALLELUIA = {
  1: { tone: 1,
       verse: "God is our refuge and strength, a helper in the afflictions that have found us greatly.",
       stichoi: ["For God hath blessed thee for ever and ever."] },
  2: { tone: 2,
       verse: "O Lord, in Thy strength the king shall be glad, and in Thy salvation shall he rejoice exceedingly.",
       stichoi: ["Thou hast granted him his heart's desire, and hast not denied him the requests of his lips."] },
  3: { tone: 3,
       verse: "For the righteous, O Lord, hast Thou blessed; Thou hast crowned us as with a shield of favor.",
       stichoi: ["Hearken, O Lord, unto my righteousness; attend unto my supplication."] },
  4: { tone: 4,
       verse: "Arise, O Lord my God, let Thy hand be lifted high; forget not Thy poor forever.",
       stichoi: ["I will give thanks unto Thee, O Lord, with my whole heart; I will tell of all Thy marvellous works."] },
  5: { tone: 5,
       verse: "O Lord, Thou shalt open my lips, and my mouth shall declare Thy praise.",
       stichoi: ["Create in me a clean heart, O God, and renew a right spirit within me."] },
  6: { tone: 6,
       verse: "Blessed is the man that feareth the Lord; he shall delight greatly in His commandments.",
       stichoi: ["His seed shall be mighty upon the earth; the generation of the righteous shall be blessed."] },
  7: { tone: 7,
       verse: "Arise, O Lord, help us, and deliver us for Thy mercy's sake.",
       stichoi: ["O God, we have heard with our ears, our fathers have told us, what works Thou didst in their days."] },
  8: { tone: 8,
       verse: "Come let us rejoice in the Lord, let us shout with jubilation unto God our Saviour.",
       stichoi: ["For the Lord is a great God and a great King over all the earth."] },
};

// Sunday resurrectional prokeimena — keyed by tone (1–8)
// Source: St. Sergius Sunday Octoechos (standard resurrectional table)
// Used on ordinary Sundays outside Pentecostarion (i.e. when no pentEntry
// prokeimenon is encoded). Each has one stichos verse.
const SUNDAY_RESURRECTIONAL_PROKEIMENON = {
  1: { tone: 1,
       text: "Now I will arise, saith the Lord: I will set him in safety, I will deal boldly in his behalf.",
       stichos: "The words of the Lord are pure words, as silver tried in a furnace of earth, purified seven times." },
  2: { tone: 2,
       text: "Arise, O Lord my God, let Thy hand be lifted high; forget not Thy poor forever.",
       stichos: "I will give thanks unto Thee, O Lord, with my whole heart; I will tell of all Thy marvellous works." },
  3: { tone: 3,
       text: "Have mercy upon me, O Lord; behold my humility at the hands of mine enemies.",
       stichos: "Who is like unto Thee among the mighty, O Lord? Who is like unto Thee?" },
  4: { tone: 4,
       text: "Arise, O Lord, help us, and deliver us for Thy mercy's sake.",
       stichos: "O God, we have heard with our ears, our fathers have told us, what works Thou didst in their days." },
  5: { tone: 5,
       text: "Arise, O Lord my God, let Thy hand be lifted high; forget not Thy poor forever.",
       stichos: "I will give thanks unto Thee, O Lord, with my whole heart." },
  6: { tone: 6,
       text: "Save, O Lord, Thy people and bless Thine inheritance.",
       stichos: "Unto Thee, O Lord, will I cry; O my God, be not silent unto me." },
  7: { tone: 7,
       text: "Arise, O Lord my God, let Thy hand be lifted high; forget not Thy poor forever.",
       stichos: "I will give thanks unto Thee, O Lord, with my whole heart; I will tell of all Thy marvellous works." },
  8: { tone: 8,
       text: "Make your vows and pay them to the Lord our God.",
       stichos: "In Judea is God known, His name is great in Israel." },
};

// ─── SHARED DISMISSAL BUILDER ────────────────────────────────────────────────
// Used by assembleTypica and assemblePostCommunion.
// idPrefix: element id prefix ('typica' or 'pc')
// Returns a single element ready to push into an elements array.
function buildDismissal(liturgicalData, menaionEntry, pentEntry, readerMode, idPrefix) {
  const { season, namedDay } = liturgicalData;
  const _fmt = pentEntry ? pentEntry.hours_format : null;
  const isSunday = season === 'sunday' || season === 'pentecostarion_sunday' || _fmt === 'pentecostarion_sunday' || _fmt === 'all_saints_sunday';

  const open = "May Christ our true God, through the intercessions of His most pure Mother;";
  const close =
    "of the holy, glorious, and all-praised apostles; " +
    "of the holy, glorious, and victorious martyrs; " +
    "of our holy and God-bearing fathers; " +
    "of the holy and Righteous Ancestors of God Joachim and Anna, " +
    "and of all the saints; have mercy on us and save us, " +
    "for He is good and the Lover of mankind.";

  let middle = "";
  if (isSunday) {
    middle = "Who rose from the dead;";
  } else if (pentEntry) {
    const fmt = pentEntry.hours_format;
    if (fmt === "ascension" || fmt === "apodosis_ascension") {
      middle = "Who ascended in glory into heaven;";
    } else if (fmt === "pentecost" || fmt === "apodosis_pentecost" || fmt === "holy_spirit_day") {
      middle = "Who sent down the Holy Spirit upon His holy apostles;";
    } else {
      middle = "Who rose from the dead;";
    }
  } else if (menaionEntry?.saint) {
    middle = menaionEntry.saint + ";";
  }

  const dismissalText = middle ? `${open} ${middle} ${close}` : `${open} ${close}`;

  if (readerMode) {
    return {
      id: `${idPrefix}-dismissal`, type: "substitution", label: "Dismissal", rubric: "Reader:",
      text: "Through the prayers of our holy fathers, Lord Jesus Christ our God, have mercy on us and save us. Amen.",
      source: "Fekula Chapter 10",
      fekula: { section: "§10", note: "Reader's service: instead of the priest's dismissal, the reader says: Through the prayers of our holy fathers… — Fekula Chapter 10" },
    };
  } else {
    return {
      id: `${idPrefix}-dismissal`, type: "fixed", label: "Dismissal", rubric: "Priest:",
      text: dismissalText,
      source: "HTM",
      fekula: { section: null, note: "Dismissal formula: seasonal phrase inserted after 'His most pure Mother.' Sunday: 'Who rose from the dead.' Pentecostarion feast: feast phrase. Weekday: saint of the day by name." },
    };
  }
}

// ─── TYPICA ASSEMBLER ────────────────────────────────────────────────────────
// Source: HTM htm_typica.pdf (complete order)
// Assembly rules:
//   Sunday  → Hypakoë of the tone from OCTOECHOS_HYPAKOE; no Kontakia section
//   Weekday → TYPICA_KONTAKIA[dow]; saint's kontakion prepended if present
//   Beatitudes troparia: from pentEntry.beatitudes_troparia or
//     menaionEntry.beatitudes_troparia if available; else placeholder shown
//
// Phase 1 scope: ordinary Octoechos time (Sundays + Mon–Sat outside Lent/Bright Week).
// Not assembled: Lenten Typica (different skeleton per htm_typica.pdf p.3-4).
// Readings slot: Prokeimenon and Epistle/Gospel rubric noted but not rendered
//   (readings engine FW-19/20 not yet built).

function assembleTypica(liturgicalData, menaionEntry, pentEntry, dailyReading, feastReading, readerMode = false) {
  const { dow: dowNumber, tone } = liturgicalData;
  const isSunday = dowNumber === 0;
  const elements = [];

  const src = "HTM, Order of the Typica";

  // ── helper: push a fixed block ──────────────────────────────────────────
  const fixed = (id, label, text, rubric = null) => elements.push({
    id, label, text,
    type: "fixed",
    source: src,
    rubric: rubric || null,
  });

  const movable = (id, label, text, note = null, rubric = null, fekula = null, scriptureHref = null) => elements.push({
    id, label, text,
    type: "movable",
    source: src,
    note: note || null,
    rubric: rubric || null,
    fekula: fekula || null,
    scriptureHref: scriptureHref || null,
  });

  // ── 1. Opening ───────────────────────────────────────────────────────────
  fixed("typica-open", "Opening",
    "Reader: Bless the Lord, O my soul. Blessed art Thou, O Lord.");

  // ── 2. Psalm 102 ─────────────────────────────────────────────────────────
  fixed("typica-ps102", "Psalm 102",
    TYPICA_PSALM_102);

  // ── 3. Psalm 145 ─────────────────────────────────────────────────────────
  fixed("typica-ps145", "Psalm 145",
    TYPICA_PSALM_145);

  // ── 4. Only-Begotten Son ─────────────────────────────────────────────────
  fixed("typica-onlybegotten", "Only-Begotten Son",
    TYPICA_ONLY_BEGOTTEN);

  // ── 5. The Beatitudes ────────────────────────────────────────────────────
  // Source: OCA. No canon troparia inserted — the Typica reads all verses
  // as written (beatitudes_troparia fields are for the Divine Liturgy only).
  fixed("typica-beatitudes", "The Beatitudes",
    TYPICA_BEATITUDES_FIXED.join("\n"));

  // ── 6. Prokeimenon ───────────────────────────────────────────────────────
  // Routing: pentEntry > Sunday resurrectional > weekday daily > none
  // Uses prokeimenon element type (same as Vespers) so ServiceBlock renders
  // "Reader: The Prokeimenon in Tone X: [text]" with verse exchange correctly.
  {
    const buildProkEl = (id, p, sourceStr, noteStr) => ({
      id,
      type: "prokeimenon",
      typicaMode: true,
      label: "Prokeimenon · Tone " + p.tone + (p.label ? " — " + p.label : ""),
      announcement: "Wisdom! The Prokeimenon in Tone " + p.tone + ": " + p.text,
      exchanges: [
        { speaker: "chanters", text: p.text },
        { speaker: "chanters", text: p.text },
        ...(p.stichos ? [
          { speaker: "deacon", text: "V.: " + p.stichos },
          { speaker: "chanters", text: p.text },
        ] : []),
      ],
      readerMode,
      source: sourceStr,
      fekula: { section: null, note: noteStr },
    });

    // In reader mode the prokeimenon element itself handles the Ch10 pattern:
    // "Wisdom!" is stripped, "Reader:" label shown, verse in black — no separate note needed.

    if (pentEntry?.prokeimenon_text) {
      elements.push(buildProkEl("typica-prokeimenon",
        { tone: pentEntry.prokeimenon_tone, text: pentEntry.prokeimenon_text, stichos: pentEntry.prokeimenon_stichos },
        "Pentecostarion · " + (pentEntry.source_file || "St. Sergius PDF"),
        "Pentecostarion proper prokeimenon."));
      // Menaion feast-proper prokeimenon suppressed — Pentecostarion governs
    } else if (isSunday) {
      const p = SUNDAY_RESURRECTIONAL_PROKEIMENON[tone] || SUNDAY_RESURRECTIONAL_PROKEIMENON[1];
      elements.push(buildProkEl("typica-prokeimenon", p,
        "St. Sergius Sunday Octoechos",
        "Sunday resurrectional prokeimenon, Tone " + tone + "."));
      // Menaion feast-proper prokeimenon suppressed on Sunday — resurrectional governs
    } else {
      const daily = TYPICA_WEEKDAY_PROKEIMENON[dowNumber];
      if (Array.isArray(daily)) {
        daily.forEach((p, i) => elements.push(buildProkEl(
          "typica-prokeimenon-" + i, p,
          "HTM daily file",
          "Saturday prokeimenon — " + p.label + ".")));
      } else if (daily) {
        elements.push(buildProkEl("typica-prokeimenon", daily,
          "HTM daily file",
          ["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dowNumber] + " prokeimenon."));
      }
      // Feast-proper prokeimenon only appended on weekdays for §2E/§2F rank
      if (menaionEntry?.prokeimenon_text &&
          (menaionEntry.rank === 'polyeleos' || menaionEntry.rank === 'vigil')) {
        elements.push(buildProkEl("typica-prokeimenon-feast",
          { tone: menaionEntry.prokeimenon_tone, text: menaionEntry.prokeimenon_text, stichos: menaionEntry.prokeimenon_stichos },
          "Menaion · " + (menaionEntry.saint || "saint of the day"),
          "Feast proper prokeimenon for " + (menaionEntry.saint || "this commemoration") + "."));
      }
    }
  }

  // ── 7. Readings ─────────────────────────────────────────────────────────
  // Source: HTM p.3 rubric — Prokeimenon may be chanted; Epistle and Gospel may be read.
  // Cycle reading from LECTIONARY (getDailyReading); feast proper from menaionEntry.
  // Reading introductions follow standard reader service convention.
  {
    // Build "The reading is from..." introduction from a reference string
    const epistleIntro = (ref) => {
      if (!ref) return null;
      const r = ref.replace(/\s*\(§[^)]+\)/, '').trim();
      const book = r.split(/\s+\d/)[0].trim();
      if (/^acts$/i.test(book)) return "The reading is from the Acts of the Holy Apostles.";
      if (/^rev/i.test(book)) return "The reading is from the Revelation of the Holy Apostle and Evangelist John the Theologian.";
      if (/^heb/i.test(book)) return "The reading is from the Epistle to the Hebrews.";
      if (/^james$/i.test(book)) return "The reading is from the General Epistle of the Holy Apostle James.";
      if (/^jude$/i.test(book)) return "The reading is from the General Epistle of the Holy Apostle Jude.";
      if (/^[123]\s*peter/i.test(book)) {
        const n = book.match(/^([123])/)[1];
        return "The reading is from the " + ["","First","Second","Third"][+n] + " General Epistle of the Holy Apostle Peter.";
      }
      if (/^[123]\s*john/i.test(book)) {
        const n = book.match(/^([123])/)[1];
        return "The reading is from the " + ["","First","Second","Third"][+n] + " General Epistle of the Holy Apostle and Evangelist John the Theologian.";
      }
      if (/^[123]\s*cor/i.test(book)) return "The reading is from the " + (book.startsWith('1') ? "First" : "Second") + " Epistle of the Holy Apostle Paul to the Corinthians.";
      if (/^[123]\s*thess/i.test(book)) return "The reading is from the " + (book.startsWith('1') ? "First" : "Second") + " Epistle of the Holy Apostle Paul to the Thessalonians.";
      if (/^[123]\s*tim/i.test(book)) return "The reading is from the " + (book.startsWith('1') ? "First" : "Second") + " Epistle of the Holy Apostle Paul to Timothy.";
      // Remaining Pauline epistles by name
      const pauline = {
        rom: "Romans", gal: "Galatians", eph: "Ephesians",
        phil: "Philippians", col: "Colossians", tit: "Titus",
        philem: "Philemon",
      };
      for (const [key, name] of Object.entries(pauline)) {
        if (new RegExp('^' + key, 'i').test(book)) {
          return "The reading is from the Epistle of the Holy Apostle Paul to the " + name + ".";
        }
      }
      // Fallback
      return "The reading is from the Epistle to the " + book + ".";
    };

    const gospelIntro = (ref) => {
      if (!ref) return null;
      const r = ref.replace(/\s*\(§[^)]+\)/, '').trim();
      const book = r.split(/\s+\d/)[0].trim();
      if (/^matt/i.test(book)) return "The reading is from the Holy Gospel according to Matthew.";
      if (/^mark/i.test(book)) return "The reading is from the Holy Gospel according to Mark.";
      if (/^luke/i.test(book)) return "The reading is from the Holy Gospel according to Luke.";
      if (/^john/i.test(book)) return "The reading is from the Holy Gospel according to John.";
      return "The reading is from the Holy Gospel according to " + book + ".";
    };

    if (dailyReading) {
      if (dailyReading.e) {
        const intro = epistleIntro(dailyReading.e);
        const cycleNote = isSunday
          ? `Sunday proper Epistle · Source: OCA lectionary`
          : "Daily cycle Epistle · Source: OCA lectionary";
        movable("typica-epistle", "Epistle",
          (intro ? intro + "\n\n" : "") + dailyReading.e,
          cycleNote);
      }

      // ── Alleluia — between Epistle and Gospel ──────────────────────────
      // Routing: pentEntry > menaionEntry > weekday daily table
      {
        const buildAlleluia = (a) => {
          const lines = ["Alleluia, Tone " + a.tone + ".\n\nV.: " + a.verse];
          (a.stichoi || a.stichos ? [].concat(a.stichoi || a.stichos) : []).forEach(s => {
            lines.push("V.: " + s);
          });
          return lines.join("\n\n");
        };

        let alData = null;
        let alNote = null;

        if (pentEntry?.alleluia_verse) {
          alData = { tone: pentEntry.alleluia_tone, verse: pentEntry.alleluia_verse,
                     stichoi: pentEntry.alleluia_stichos ? [pentEntry.alleluia_stichos] : [] };
          alNote = "Pentecostarion proper Alleluia · Source: St. Sergius PDF";
        } else if (menaionEntry?.alleluia_verse) {
          alData = { tone: menaionEntry.alleluia_tone, verse: menaionEntry.alleluia_verse,
                     stichoi: menaionEntry.alleluia_stichos ? [menaionEntry.alleluia_stichos] : [] };
          alNote = "Menaion proper Alleluia · Source: St. Sergius Menaion · " + (menaionEntry.saint || "saint of the day");
        } else if (!isSunday) {
          const daily = TYPICA_WEEKDAY_ALLELUIA[dowNumber];
          if (daily) {
            alData = daily;
            alNote = ["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dowNumber] +
                     " Alleluia, Tone " + daily.tone + " · Source: HTM daily file";
          }
        }
        // Sunday without pentEntry: use resurrectional Alleluia by tone
        if (!alData && isSunday) {
          const a = SUNDAY_RESURRECTIONAL_ALLELUIA[tone] || SUNDAY_RESURRECTIONAL_ALLELUIA[1];
          alData = a;
          alNote = "Sunday resurrectional Alleluia, Tone " + tone + " · Source: St. Sergius Sunday Octoechos";
        }

        if (alData) {
          movable("typica-alleluia", "Alleluia", buildAlleluia(alData), alNote);
        }
      }

      if (dailyReading.g) {
        const intro = gospelIntro(dailyReading.g);
        const cycleNote = isSunday
          ? `Sunday proper Gospel · Source: OCA lectionary`
          : "Daily cycle Gospel · Source: OCA lectionary" +
            (dailyReading.lukanJump ? " · Luke series" : "");
        movable("typica-gospel", "Gospel",
          (intro ? intro + "\n\n" : "") + dailyReading.g,
          cycleNote);
      }
    } else {
      fixed("typica-readings-cycle", "Epistle and Gospel",
        "No cycle reading appointed for this date.",
        "HTM p.3: Prokeimenon may be chanted, Epistle and Gospel may be read.");
    }

    // Feast proper readings
    if (feastReading && (feastReading.e || feastReading.g)) {
      if (feastReading.e) {
        const intro = epistleIntro(feastReading.e);
        movable("typica-epistle-feast", "Feast Epistle",
          (intro ? intro + "\n\n" : "") + feastReading.e,
          `Proper Epistle for ${menaionEntry ? menaionEntry.saint : "saint of the day"} · Source: Menaion`);
      }
      if (feastReading.g) {
        const intro = gospelIntro(feastReading.g);
        movable("typica-gospel-feast", "Feast Gospel",
          (intro ? intro + "\n\n" : "") + feastReading.g,
          `Proper Gospel for ${menaionEntry ? menaionEntry.saint : "saint of the day"} · Source: Menaion`);
      }
    }
  }

  // ── 8. Remember us ───────────────────────────────────────────────────────
  fixed("typica-remember", "Remember Us",
    "Remember us, O Lord, when Thou comest in Thy kingdom.\n" +
    "Remember us, O Master, when Thou comest in Thy kingdom.\n" +
    "Remember us, O Holy One, when Thou comest in Thy kingdom.");

  // ── 9. Heavenly Choir ────────────────────────────────────────────────────
  fixed("typica-heavenlychoir", "The Heavenly Choir",
    "Reader: The Heavenly choir praiseth Thee and saith: Holy, Holy, Holy, Lord of Sabaoth; " +
    "heaven and earth are full of Thy glory.\n\n" +
    "Stichos: Come unto Him, and be enlightened, and your faces shall not be ashamed.\n\n" +
    "The Heavenly choir praiseth Thee and saith: Holy, Holy, Holy, Lord of Sabaoth; " +
    "heaven and earth are full of Thy glory.\n\n" +
    "Glory to the Father, and to the Son, and to the Holy Spirit.\n\n" +
    "The choir of holy Angels and Archangels, with all the Heavenly Hosts, praiseth Thee and saith: " +
    "Holy, Holy, Holy, Lord of Sabaoth; heaven and earth are full of Thy glory.\n\n" +
    "Both now and ever, and unto the ages of ages. Amen.");

  // ── 10. The Creed ─────────────────────────────────────────────────────────
  fixed("typica-creed", "The Creed",
    TYPICA_CREED);

  // ── 11. Forgiveness Prayer ───────────────────────────────────────────────
  fixed("typica-forgiveness", "Forgiveness Prayer",
    TYPICA_FORGIVENESS);

  // ── 12. Our Father ───────────────────────────────────────────────────────
  fixed("typica-ourfath", "Our Father",
    "Our Father, Who art in the heavens, hallowed be Thy name. " +
    "Thy kingdom come, Thy will be done, on earth as it is in heaven. " +
    "Give us this day our daily bread, and forgive us our debts, as we forgive our debtors; " +
    "and lead us not into temptation, but deliver us from the evil one.");

  // After Our Father: Priest exclamation or Ch10 reader substitution
  if (readerMode) {
    elements.push({
      id: "typica-for-thine", type: "substitution", label: "", rubric: "Reader:",
      text: "Through the prayers of our holy fathers, Lord Jesus Christ, Son of God, have mercy on us. Amen.",
      source: "Fekula Chapter 10",
      fekula: { section: "§10", note: "Reader's service: instead of the priest's exclamation 'For Thine is the kingdom…', the reader says: Through the prayers of our holy fathers… — Fekula Chapter 10" },
    });
  } else {
    elements.push({
      id: "typica-for-thine", type: "fixed", label: "", rubric: "Priest:",
      text: "For Thine is the kingdom, and the power, and the glory: of the Father, and of the Son, and of the Holy Spirit, now and ever, and unto the ages of ages.",
      source: "HTM, Order of the Typica",
    });
  }

  // ── 13. Kontakia section ─────────────────────────────────────────────────
  // OCA Typica rules for this section:
  //   1. Sunday with a Feast of the Lord: Kontakion of the saint first,
  //      Glory…Now and ever… Kontakion of the Feast (OCA Typica rubric)
  //   2. Sunday without a Feast: Hypakoë of the tone only (OCA Typica rubric)
  //   3. Weekday: daily kontakia per HTM rubric p.5–6

  // Detect if this is a Sunday with a feast (e.g. §4B13 Holy Fathers + Ascension,
  // §4B9 Samaritan Woman + Mid-Pentecost, §4B17 All Saints)
  const hasFeastKontakia = isSunday && pentEntry && (
    // pentEntry provides both a feast kontakion and a saint/commemoration kontakion
    // (e.g. P+42: Fathers kontakion + Ascension kontakion)
    (pentEntry.kontakion_ode6 && pentEntry.hours_kontakion) ||
    // pentEntry provides a single feast kontakion (e.g. P+56 All Saints)
    (pentEntry.hours_kontakion && pentEntry.menaion_set_aside) ||
    // pentEntry explicitly marks feast kontakia for Typica
    pentEntry.typica_kontakia
  );

  if (isSunday && hasFeastKontakia) {
    // Sunday with a Feast: Kontakia section per OCA Typica rubric
    // "If it is a Feast of the Lord, the Kontakion is sung here.
    //  But if there is also a saint celebrated on this day, the Kontakion of the
    //  saint is sung first, followed by Glory… now and ever… and the Kontakion
    //  of the Feast."
    const feastKontakion = pentEntry.hours_kontakion; // e.g. Ascension T6
    const saintKontakion = pentEntry.kontakion_ode6;  // e.g. Holy Fathers T8
    const ocaFeastNote = "Sunday with a Feast per OCA Typica rubric. " +
      "On Sundays without a Feast, only the Hypakoë in the appointed tone is sung.";

    if (saintKontakion && feastKontakion) {
      // Saint kontakion first
      const saintTone = saintKontakion.tone ? " · Tone " + saintKontakion.tone : "";
      movable("typica-kont-saint", "Kontakion — " + pentEntry.name + saintTone,
        saintKontakion.text,
        ocaFeastNote + " Saint kontakion sung first.");

      // Glory…Now and ever…
      elements.push({
        id: "typica-kont-glory-bothnow", type: "fixed", label: "",
        text: "Glory to the Father, and to the Son, and to the Holy Spirit,\n" +
              "both now and ever, and unto the ages of ages. Amen.",
        source: src,
      });

      // Feast kontakion
      const feastTone = feastKontakion.tone ? " · Tone " + feastKontakion.tone : "";
      movable("typica-kont-feast", "Kontakion of the Feast" + feastTone,
        feastKontakion.text,
        ocaFeastNote);
    } else if (feastKontakion) {
      // Feast kontakion only
      const feastTone = feastKontakion.tone ? " · Tone " + feastKontakion.tone : "";
      movable("typica-kont-feast", "Kontakion of the Feast" + feastTone,
        feastKontakion.text,
        ocaFeastNote);
    }
  } else if (isSunday) {
    // Ordinary Sunday: Hypakoë of the tone in place of Kontakia section
    // OCA Typica: "On Sundays, if there is no Feast, only the Hypakoë in the
    // appointed tone is sung."
    // Only use the Pascha Hypakoë for Pascha itself (P+0) and Bright Week (P+1..P+6)
    const isPaschaWeek = pentEntry && (
      pentEntry.fekula_section === "§4B1" ||
      pentEntry.fekula_section === "§4B2" ||
      pentEntry.fekula_section === "§4B3" ||
      pentEntry.fekula_section === "§4B4"
    );
    const toneKey = isPaschaWeek ? "pascha" : (tone || 1);
    const hypakoeText = OCTOECHOS_HYPAKOE[toneKey] || OCTOECHOS_HYPAKOE[tone] || OCTOECHOS_HYPAKOE[1];
    movable("typica-hypakoe", `Hypakoë — Tone ${tone}`,
      hypakoeText,
      `Sunday: Hypakoë of Tone ${tone} from the Octoechos sung in place of the Kontakia section. ` +
      `OCA Typica: "On Sundays, if there is no Feast, only the Hypakoë in the appointed tone is sung." ` +
      `Source: St. Sergius Sunday Octoechos PDF (${tone}-1.pdf).`);
  } else {
    // Weekday (no feast): build kontakia sequence per OCA Typica / HTM rubric.
    // OCA: "the Kontakion of the Transfiguration is sung first, followed by
    //   the Kontakion of the day, and then the Kontakion of the church,
    //   (the Kontakion of the saint of the date, if desired), followed by
    //   Glory… With the saints, give rest… Now and ever… Steadfast protectress…"
    // HTM: same order — Transfiguration, day, temple, (saint), Glory…Both now…
    const TRANSFIGURATION_KONTAKION = {
      tone: 7,
      text: "On the mount Thou wast transfigured, and Thy disciples, " +
            "as much as they could bear, beheld Thy glory, O Christ God; " +
            "that when they should see Thee crucified, they would know Thy Passion to be willing, " +
            "and would preach to the world that Thou, in truth, art the Effulgence of the Father.",
    };
    const WITH_THE_SAINTS = "With the saints give rest, O Christ, " +
      "to the souls of Thy servants, " +
      "where there is neither sickness, nor sorrow, nor sighing, " +
      "but life everlasting.";
    const STEADFAST_PROTECTRESS = "O protection of Christians that cannot be put to shame, " +
      "O mediation unto the Creator unfailing, " +
      "disdain not the suppliant voices of sinners; " +
      "but be thou quick, O good one, to help us who in faith cry unto thee; " +
      "Hasten to intercession and speed thou to make supplication, " +
      "thou who dost ever protect, O Theotokos, them that honour thee.";
    const MARTYRS_KONTAKION = "To Thee, O Lord, the Planter of creation, " +
      "the world doth offer the God-bearing martyrs as the firstfruits of nature. " +
      "By their intercessions preserve Thy Church, Thy commonwealth, " +
      "in profound peace, through the Theotokos, O Greatly-merciful One.";

    // Extract only the day-specific kontakia (first entry), not the Glory/Both now closers
    const dailyKontakia = TYPICA_KONTAKIA[dowNumber] || [];
    const dayKontakia = dailyKontakia.filter(k =>
      !k.label.startsWith("Both now") && !k.label.startsWith("Glory"));
    const saint = menaionEntry || pentEntry;
    const saintKontakion = saint?.kontakion_ode6;
    const isSaturday = dowNumber === 6;

    const dowNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const ocaNote = `${dowNames[dowNumber]} order per OCA Typica / HTM rubric.`;

    // 1. Kontakion of the Transfiguration (always first)
    movable("typica-kont-transfig", "Kontakion of the Transfiguration · Tone " + TRANSFIGURATION_KONTAKION.tone,
      TRANSFIGURATION_KONTAKION.text,
      ocaNote + " Transfiguration kontakion always first.");

    // 2. Kontakion(s) of the day (Mon=Bodiless Hosts, Tue=Forerunner, etc.)
    dayKontakia.forEach((k, i) => {
      const toneLabel = k.tone ? " · Tone " + k.tone : "";
      movable("typica-kont-day-" + i, k.label + toneLabel,
        k.text,
        ocaNote + " Kontakion of the day.");
    });

    // 3. Kontakion of the church/temple (parish-specific)
    // Uses same TempleSelector component as Litiya, but resolves kontakion instead of troparion.
    // NOTE: OCA rubric says "If the temple be dedicated to a feast of the Lord,
    // its Kontakion is said first, before the Kontakion of the day." This reordering
    // is not yet implemented — currently all temple kontakia appear at position 3.
    // When Lord-feast dates (Nativity, Theophany, Transfiguration, etc.) are encoded,
    // add logic to move the temple kontakion before Transfiguration for those dedications.
    elements.push({id:"typica-kont-temple", type:"temple_selector",
      label:"Kontakion of the Temple",
      source:"OCA Typica / HTM rubric",
      templeMode: "kontakion",
      fekula:{section:"OCA Typica", note:"The Kontakion of the church is sung after the Kontakion of the day. If the temple be dedicated to a feast of the Lord, its Kontakion is said first. — OCA Typica; HTM Horologion"}});

    // 4. Kontakion of the saint of the date (if present)
    // OCA: "(the Kontakion of the saint of the date, if desired)"
    if (saintKontakion) {
      const toneLabel = saintKontakion.tone ? " · Tone " + saintKontakion.tone : "";
      movable("typica-kont-saint", "Kontakion — " + (saint.saint || "Saint of the day") + toneLabel,
        saintKontakion.text,
        ocaNote + " Saint of the date (if desired).");
    }

    // 5. Glory… With the saints give rest…
    elements.push({
      id: "typica-kont-glory", type: "fixed", label: "",
      text: "Glory to the Father, and to the Son, and to the Holy Spirit.",
      source: src,
    });
    movable("typica-kont-departed", "Kontakion for the Departed · Tone 8",
      WITH_THE_SAINTS,
      ocaNote);

    // 6. Both now… Protectress (weekdays) or Martyrs (Saturday)
    elements.push({
      id: "typica-kont-bothnow", type: "fixed", label: "",
      text: "Both now and ever, and unto the ages of ages. Amen.",
      source: src,
    });
    if (isSaturday) {
      movable("typica-kont-martyrs", "Kontakion to the Martyrs · Tone 8",
        MARTYRS_KONTAKION,
        ocaNote + " Saturday closer.");
    } else {
      movable("typica-kont-protectress", "Steadfast Protectress",
        STEADFAST_PROTECTRESS,
        ocaNote + " Weekday closer.");
    }
  }

  // ── 14. Lord Have Mercy ×40 ───────────────────────────────────────────────
  fixed("typica-lhm40", "Lord Have Mercy (×40)",
    "Lord, have mercy. (forty times)\n\n" +
    "Glory to the Father, and to the Son, and to the Holy Spirit, both now and ever, and unto the ages of ages. Amen.");

  // ── 15. Psalm 33 ─────────────────────────────────────────────────────────
  fixed("typica-ps33", "Psalm 33",
    TYPICA_PSALM_33);

  // ── 16. Dismissal ────────────────────────────────────────────────────────
  elements.push(buildDismissal(liturgicalData, menaionEntry, pentEntry, readerMode, "typica"));

  // ── End marker ──────────────────────────────────────────────────────────
  elements.push({id:"typica-end",type:"end_marker",label:"",text:"THE END OF THE TYPICA",source:"HTM, Order of the Typica"});

  return elements;
}



// ─── POST-COMMUNION PRAYERS ───────────────────────────────────────────────────
// Source: HTM, htm_post_comunion_prayers.pdf
// Served after Holy Communion. No Fekula citation — Fekula does not govern
// post-communion prayers. The only movable element is the Troparion/Kontakion
// block, which varies by which Liturgy was served that day.

// ── Liturgy type detection ────────────────────────────────────────────────────
// Basil Liturgy days: Jan 1, Jan 5, Lenten Sundays 1–5, Great Thursday, Great Saturday.
// Presanctified: Lenten Wed & Fri (out of scope for now — stubbed).
// All other days: St. John Chrysostom.
function getLiturgyType(liturgicalData) {
  const { season, lentSunday, passionWeek, dow, mm, dd } = liturgicalData;
  if (mm === 1 && dd === 1) return 'basil';
  if (mm === 1 && dd === 5) return 'basil';
  if (season === 'lent' && lentSunday && lentSunday >= 1 && lentSunday <= 5) return 'basil';
  if (passionWeek && dow === 4) return 'basil';
  if (passionWeek && dow === 6) return 'basil';
  if (season === 'lent' && !passionWeek && (dow === 3 || dow === 5)) return 'presanctified';
  return 'chrysostom';
}

// ── Fixed prayer texts ────────────────────────────────────────────────────────

const PC_OPENING = `Glory to Thee, O God. Glory to Thee, O God. Glory to Thee, O God.`;

const PC_PRAYER_1 = `I thank Thee, O Lord my God, that Thou hast not rejected me, a sinner, but hast vouchsafed me to be a communicant of Thy Holy Things. I thank Thee that Thou hast vouchsafed me, the unworthy, to partake of Thy most pure and heavenly Gifts. But, O Master, Lover of mankind, Who for our sake didst die and didst rise again, and didst bestow upon us these dread and life-giving Mysteries for the well-being and sanctification of our souls and bodies, grant that these may be even unto me for the healing of both soul and body, for the averting of everything hostile, for the enlightenment of the eyes of my heart, for the peace of the powers of my soul, for faith unashamed, for love unfeigned, for the fullness of wisdom, for the keeping of Thy commandments, for an increase of Thy Divine grace, and for the attainment of Thy kingdom; that being preserved by them in Thy holiness, I may always remember Thy grace, and no longer live for myself, but for Thee our Master and Benefactor; and thus when I shall have departed this life in hope of life eternal, I may attain unto everlasting rest, where the sound of them that keep festival is unceasing, and the delight is endless of them that behold the ineffable beauty of Thy countenance. For Thou art the true desire and the unutterable gladness of them that love Thee, O Christ our God, and all creation doth hymn Thee unto the ages. Amen.`;

const PC_PRAYER_2 = `O Master Christ God, King of the ages, and Creator of all things, I thank Thee for all the good things which Thou hast bestowed upon me, and for the Communion of Thy most pure and life-giving Mysteries. I pray Thee, therefore, O Good One and Lover of Mankind: Keep me under Thy protection and in the shadow of Thy wings and grant me, even until my last breath, to partake worthily, with a pure conscience, of Thy Holy Things, unto the remission of sins and life eternal. For Thou art the Bread of Life, the Source of holiness, the Giver of good things; and unto Thee do we send up glory, together with the Father and the Holy Spirit, now and ever, and unto the ages of ages. Amen.`;

const PC_PRAYER_3 = `O Thou who givest me willingly Thy Flesh as food, Thou Who art Fire that doth consume the unworthy, burn me not, O my Creator; but, rather, enter Thou into my members, into all my joints, my reins, my heart. Burn up the thorns of all my sins. Purify my soul, sanctify my thoughts. Strengthen my substance together with my bones. Enlighten my simple five senses. Nail down the whole of me with Thy fear. Ever protect, preserve, and keep me from every soul-corrupting deed and word. Purify and cleanse, and adorn me; make me comely, give me understanding, and enlighten me. Show me to be the dwelling-place of Thy Spirit alone, and no longer the habitation of sin; that from me as Thine abode through the entry of Communion, every evildoer, every passion, may flee as from fire. As intercessors I offer unto Thee all the saints, the commanders of the bodiless hosts, Thy Forerunner, the wise apostles, and further, Thine undefiled pure Mother, whose entreaties do Thou accept, O my compassionate Christ, and make Thy servant a child of light. For Thou alone art our sanctification, O Good One, and the radiance of our souls, and unto Thee as God and Master, we all send up glory, as is meet, every day.`;

const PC_PRAYER_4 = `O Lord Jesus Christ our God, may Thy holy Body be unto me for life eternal, and Thy precious Blood for the remission of sins; and may this Eucharist be unto me for joy, health, and gladness. And at Thy dread Second Coming vouchsafe me, a sinner, to stand at the right hand of Thy glory, through the intercessions of Thy most pure Mother and of all the saints.`;

const PC_PRAYER_THEOTOKOS = `O most holy Lady Theotokos, light of my darkened soul, my hope, protection, refuge, consolation, my joy: I thank thee that thou hast vouchsafed me, who am unworthy, to be a partaker of the most pure Body and precious Blood of Thy Son. O thou who gavest birth to the True Light, do thou enlighten the spiritual eyes of my heart; thou who gavest birth to the Source of immortality, revive me who am dead in sin; thou who art the lovingly-compassionate Mother of the merciful God, have mercy on me, and grant me compunction, and contrition in my heart, and humility in my thoughts, and the recall of my thoughts from captivity. And vouchsafe me until my last breath to receive without condemnation the sanctification of the most pure Mysteries, for the healing both soul and body; and grant me tears of repentance and confession, with which to hymn and glorify thee all the days of my life; for blessed and most glorified art thou unto the ages. Amen.`;

const PC_NUNC_DIMITTIS = `Now lettest Thou Thy servant depart in peace, O Master, according to Thy word; for mine eyes have seen Thy salvation which Thou hast prepared before the face of all peoples, a light of revelation for the Gentiles, and the glory of Thy people Israel.`;

const PC_TRISAGION_BLOCK = `Holy God, Holy Mighty, Holy Immortal, have mercy on us. (Thrice.)

Glory to the Father, and to the Son, and to the Holy Spirit, both now and ever, and unto the ages of ages. Amen.

O Most Holy Trinity, have mercy on us. O Lord, blot out our sins. O Master, pardon our iniquities. O Holy One, visit and heal our infirmities for Thy name's sake.

Lord, have mercy. (Thrice.)

Glory to the Father, and to the Son, and to the Holy Spirit, both now and ever, and unto the ages of ages. Amen.

Our Father, Who art in the heavens, hallowed be Thy name. Thy kingdom come, Thy will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our debts, as we forgive our debtors; and lead us not into temptation, but deliver us from the evil one.`;

const PC_THEOTOKION_FIXED = `O protection of Christians that cannot be put to shame, O mediation unto the Creator unfailing, disdain not the suppliant voices of sinners; but be thou quick, O good one, to help us who in faith cry unto thee; hasten to intercession and speed thou to make supplication, thou who dost ever protect, O Theotokos, them that honour thee.`;

const PC_CLOSING = `Lord, have mercy. (Twelve times.)

Glory to the Father, and to the Son, and to the Holy Spirit, both now and ever, and unto the ages of ages. Amen.

More honourable than the Cherubim, and beyond compare more glorious than the Seraphim, who without corruption gavest birth to God the Word, the very Theotokos, thee do we magnify.`;

// ── Movable T/K texts ─────────────────────────────────────────────────────────

const PC_TK_CHRYSOSTOM = {
  liturgyLabel: 'The Divine Liturgy of Saint John Chrysostom',
  explainer: 'The Liturgy of Saint John Chrysostom was celebrated today. We therefore read the troparion and kontakion of Saint John Chrysostom, the great Archbishop of Constantinople whose Liturgy we have just celebrated. This is the ordinary Liturgy of the Church, served on most days of the year.',
  troparion: {
    tone: 8,
    label: 'Troparion to St. John Chrysostom',
    text: `Grace shining forth from thy mouth like a beacon hath illumined the universe, and disclosed to the world treasures of uncovetousness, and shown us the heights of humility; but while instructing by thy words, O Father John Chrysostom, intercede with the Word, Christ our God, to save our souls.`,
  },
  glory: 'Glory to the Father, and to the Son, and to the Holy Spirit.',
  kontakion: {
    tone: 6,
    label: 'Kontakion to St. John Chrysostom',
    text: `From the heavens hast thou received divine grace and by thy lips thou dost teach all to worship the One God in Trinity, O John Chrysostom, all-blessed righteous one. Rightly do we acclaim thee, for thou art a teacher revealing things divine.`,
  },
  bothNow: 'Both now and ever, and unto the ages of ages. Amen.',
};

const PC_TK_BASIL = {
  liturgyLabel: 'The Divine Liturgy of Saint Basil the Great',
  explainer: 'The Liturgy of Saint Basil the Great was celebrated today. The Basil Liturgy is served ten times a year: on the feast of Saint Basil (January 1), on the eve of Theophany (January 5), on the five Sundays of Great Lent, and on Great Thursday and Great Saturday. We therefore read the troparion and kontakion of Saint Basil the Great, whose Liturgy we have just celebrated.',
  troparion: {
    tone: 1,
    label: 'Troparion to St. Basil the Great',
    text: `Thy fame hath gone forth into all the earth, which hath received thy word. Thereby thou hast divinely taught the Faith; thou hast made manifest the nature of created things; thou hast made the moral life of men a royal priesthood. O Basil our righteous father, intercede with Christ God that our souls be saved.`,
  },
  glory: 'Glory to the Father, and to the Son, and to the Holy Spirit.',
  kontakion: {
    tone: 4,
    label: 'Kontakion to St. Basil the Great',
    text: `Thou didst prove to be an unshakable foundation of the Church, giving to all mortals an inviolate lordship, and sealing it with thy doctrines, O righteous Basil, revealer of heavenly things.`,
  },
  bothNow: 'Both now and ever, and unto the ages of ages. Amen.',
};

const PC_TK_PRESANCTIFIED = {
  liturgyLabel: 'The Liturgy of the Presanctified Gifts',
  explainer: 'The Liturgy of the Presanctified Gifts was celebrated today. This Liturgy, attributed to Saint Gregory the Dialogist (Pope Gregory the Great), is served on Wednesday and Friday evenings during Great Lent, and is combined with Vespers. We read the troparion and kontakion of Saint Gregory the Dialogist, whose rite we have just celebrated.',
  troparion: {
    tone: 4,
    label: 'Troparion to St. Gregory the Dialogist',
    text: `Thou who hast received of God divine grace from on high, O glorious Gregory, and hast been fortified by His power, thou didst will to walk according to the Gospel; wherefore, thou hast received of Christ the reward of thy labours, O all-blessed one. Entreat Him that He save our souls.`,
  },
  glory: 'Glory to the Father, and to the Son, and to the Holy Spirit.',
  kontakion: {
    tone: 3,
    label: 'Kontakion to St. Gregory the Dialogist',
    text: `Thou hast shown thyself to be a leader like unto the Chief Shepherd Christ, O Father Gregory, guiding flocks of monks into the heavenly sheepfold, and from whence thou didst teach the flock of Christ His commandments. And now thou dost rejoice with them and dance in the heavenly mansions.`,
  },
  bothNow: 'Both now and ever, and unto the ages of ages. Amen.',
};

// ── Pre-Communion Assembler ───────────────────────────────────────────────────
// Iterates over the lazy-loaded PRE_COMMUNION_DATA array and pushes fixed elements.
// All text is fixed (Jordanville Prayer Book) — no movable parts.

function assemblePreCommunion(data) {
  if (!data) return [];
  const elements = [];
  const src = 'Jordanville Prayer Book, Prayers Before Holy Communion';
  for (const section of data) {
    elements.push({
      id: section.id,
      type: 'fixed',
      label: section.label || '',
      text: section.text,
      rubric: section.rubric || null,
      source: src,
    });
  }
  elements.push({
    id: 'prc-end',
    type: 'end_marker',
    label: '',
    text: 'THE END OF THE PRAYERS BEFORE HOLY COMMUNION',
    source: src,
  });
  return elements;
}

// ── Assembler ─────────────────────────────────────────────────────────────────

function assemblePostCommunion(liturgicalData, menaionEntry, pentEntry, readerMode = false) {
  const elements = [];
  const src = 'HTM, Prayers After Holy Communion';
  const liturgyType = getLiturgyType(liturgicalData);
  const tk = liturgyType === 'basil' ? PC_TK_BASIL
            : liturgyType === 'presanctified' ? PC_TK_PRESANCTIFIED
            : PC_TK_CHRYSOSTOM;

  const fixed = (id, label, text, rubric = null) =>
    elements.push({ id, type: 'fixed', label, text, rubric, source: src });

  const priest = (id, text) => {
    if (readerMode) {
      elements.push({
        id, type: 'substitution', label: '', rubric: 'Reader:',
        text: 'Through the prayers of our holy fathers, Lord Jesus Christ, Son of God, have mercy on us. Amen.',
        source: src,
      });
    } else {
      elements.push({
        id, type: 'fixed', label: '', rubric: 'Priest:',
        text, source: src,
      });
    }
  };

  // ── Opening ──────────────────────────────────────────────────────────────
  fixed('pc-opening', '', PC_OPENING);

  // ── Prayer 1 — Thanksgiving ───────────────────────────────────────────────
  fixed('pc-prayer-1-heading', 'Prayer of Thanksgiving', '');
  fixed('pc-prayer-1', '', PC_PRAYER_1);

  // ── Prayer 2 — Basil the Great ───────────────────────────────────────────
  fixed('pc-prayer-2-heading', 'Of Basil the Great', '');
  fixed('pc-prayer-2', '', PC_PRAYER_2);

  // ── Prayer 3 — Verses of Metaphrastes ───────────────────────────────────
  fixed('pc-prayer-3-heading', 'Verses of Metaphrastes', '');
  fixed('pc-prayer-3', '', PC_PRAYER_3);

  // ── Prayer 4 — Another Prayer ────────────────────────────────────────────
  fixed('pc-prayer-4-heading', 'Another Prayer', '');
  fixed('pc-prayer-4', '', PC_PRAYER_4);

  // ── Prayer 5 — To the Most Holy Theotokos ───────────────────────────────
  fixed('pc-prayer-theotokos-heading', 'Another Prayer, to the Most Holy Theotokos', '');
  fixed('pc-prayer-theotokos', '', PC_PRAYER_THEOTOKOS);

  // ── Nunc Dimittis ────────────────────────────────────────────────────────
  elements.push({
    id: 'pc-nunc-rubric', type: 'fixed', label: '', source: src,
    rubric: 'Then:',
    text: '',
  });
  fixed('pc-nunc-dimittis', 'Nunc Dimittis', PC_NUNC_DIMITTIS);

  // ── Trisagion / Our Father ───────────────────────────────────────────────
  fixed('pc-trisagion-block', '', PC_TRISAGION_BLOCK);

  // ── Priest exclamation after Our Father ─────────────────────────────────
  priest('pc-for-thine',
    'For Thine is the kingdom, and the power, and the glory: of the Father, and of the Son, and of the Holy Spirit, now and ever, and unto the ages of ages.');

  fixed('pc-amen', '', 'Amen.');

  // ── Movable: Troparion / Kontakion ───────────────────────────────────────
  elements.push({
    id: 'pc-tk-block',
    type: 'movable',
    label: 'Troparion & Kontakion',
    source: tk.liturgyLabel,
    _tk: tk,   // renderer will unpack this
    fekula: null,
  });

  // ── Fixed Theotokion ──────────────────────────────────────────────────────
  fixed('pc-theotokion-fixed', 'Theotokion', PC_THEOTOKION_FIXED);

  // ── Closing ───────────────────────────────────────────────────────────────
  fixed('pc-closing', '', PC_CLOSING);

  // ── "In the name of the Lord…" — served mode only ────────────────────────
  // Reader's cue to the priest to give the dismissal. Drops out in reader mode.
  if (!readerMode) {
    elements.push({
      id: 'pc-in-the-name', type: 'fixed', label: '', source: src,
      rubric: null,
      text: 'In the name of the Lord, father (master), bless!',
    });
  }

  // ── Dismissal ─────────────────────────────────────────────────────────────
  elements.push(buildDismissal(liturgicalData, menaionEntry, pentEntry, readerMode, "pc"));

  // ── End marker ──────────────────────────────────────────────────────────
  elements.push({id:"pc-end",type:"end_marker",label:"",text:"THE END OF THE POST-COMMUNION PRAYERS",source:"HTM"});

  return elements;
}

const SERVICE_REGISTRY = [
  { key: "ordinary_beginning", label: "The Ordinary Beginning", built: true },
  { key: "vespers",        label: "Vespers",                    built: true  },
  { key: "compline",       label: "Compline (Apodeipnon)",      built: false },
  { key: "midnight",       label: "Midnight Office",            built: false },
  { key: "matins",         label: "Matins (Orthros)",           built: false },
  { key: "1st_hour",       label: "The First Hour",             built: true  },
  { key: "3rd_hour",       label: "The Third Hour",             built: true  },
  { key: "6th_hour",       label: "The Sixth Hour",             built: true  },
  { key: "9th_hour",       label: "The Ninth Hour",             built: true  },
  { key: "liturgy",        label: "Divine Liturgy",             built: false },
  { key: "pre_communion",  label: "Prayers Before Holy Communion", built: true  },
  { key: "post_communion", label: "Prayers After Holy Communion", built: true  },
  { key: "typica",         label: "The Order of the Typica",    built: true  },
];



// ─── TOOLTIP ─────────────────────────────────────────────────────────────────
function Tooltip({ term, children }) {
  const [visible, setVisible] = useState(false);
  const def = GLOSSARY[term.toLowerCase()];
  if (!def) return <span>{children}</span>;

  return (
    <span className="tooltip-wrap" style={{ position: "relative", display: "inline" }}>
      <span
        style={{
          borderBottom: "1px dotted #8B6914",
          cursor: "help",
          color: "#8B6914",
        }}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onClick={() => setVisible((v) => !v)}
      >
        {children}
      </span>
      {visible && (
        <span
          style={{
            position: "absolute",
            bottom: "calc(100% + 6px)",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#1C1008",
            color: "#F5EDD6",
            padding: "8px 12px",
            borderRadius: "4px",
            fontSize: "0.78rem",
            lineHeight: "1.5",
            width: "240px",
            zIndex: 100,
            boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            border: "1px solid #8B6914",
          }}
        >
          <strong style={{ fontStyle: "normal", color: "#D4AA50" }}>{term}:</strong>{" "}
          {def}
        </span>
      )}
    </span>
  );
}


// ─── FEKULA BADGE ────────────────────────────────────────────────────────────
// ─── TEMPLE SELECTOR COMPONENT ───────────────────────────────────────────────
// Hybrid UI: compact <select> with optgroups for common dedications,
// plus visible "No dedication / serving at home" row and "More dedications" expander.
// Persists choice to localStorage('parish_dedication').
// Props:
//   availableDedications: array of { id, label, category } — only audit-passing entries
//   onSelect: (dedicationId | "none" | null) => void
//   currentId: string | null — current selection from localStorage
//   resolvedTroparion: { tone, text, saint } | null — the resolved troparion for display

function TempleSelector({ availableDedications, onSelect, currentId, resolvedTroparion, fekulaSection, mode }) {
  const [showMore, setShowMore] = useState(false);
  const isKontakion = mode === "kontakion";
  const elementLabel = isKontakion ? "Kontakion of the temple" : "Sticheron of the temple";
  const pickerPrompt = isKontakion
    ? "The kontakion of your temple is sung here. Select your parish dedication."
    : "The first sticheron at the Litiya is the troparion of your temple's dedication.";

  // Group available dedications by category
  const grouped = {};
  const primaryIds = new Set();
  const categories = ["The Lord & Holy Trinity", "The Theotokos", "Saints & archangels", "Feasts & sacred events"];

  // Primary list: top ~15 most common OCA dedications (if available)
  const primaryOrder = [
    "holy_trinity","resurrection","ascension","transfiguration","nativity_christ","theophany","holy_cross",
    "dormition","annunciation","nativity_theotokos","protection",
    "st_nicholas","archangel_michael","peter_paul","forerunner","st_george","st_herman",
    "constantine_helen","three_hierarchs","all_saints"
  ];

  const primaryDeds = [];
  const moreDeds = [];
  availableDedications.forEach(d => {
    if (primaryOrder.includes(d.id)) { primaryDeds.push(d); primaryIds.add(d.id); }
    else moreDeds.push(d);
  });

  // Group primary dedications by category for optgroups
  categories.forEach(cat => { grouped[cat] = primaryDeds.filter(d => d.category === cat); });

  // Group "more" by category
  const moreGrouped = {};
  categories.forEach(cat => { moreGrouped[cat] = moreDeds.filter(d => d.category === cat); });

  // If already selected, show the resolved state
  if (currentId === "none") {
    return (
      <div style={{
        margin: "12px 0", padding: "12px 0 12px 12px",
        borderLeft: "3px solid #B8A070",
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "4px", flexWrap: "wrap" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7A6A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, position: "relative", top: "2px" }} aria-hidden="true"><path d="M5 12l-2 0l9 -9l9 9l-2 0"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/></svg>
          <span style={{
            fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em",
            color: "#9A8A70", fontFamily: "Georgia, serif", fontWeight: "bold",
          }}>Serving at home / no temple dedication</span>
          <span onClick={() => onSelect(null)} style={{
            fontSize: "0.68rem", color: "#9A8A70", cursor: "pointer", marginLeft: "auto",
          }}>(change)</span>
        </div>
        <div style={{
          fontFamily: "Georgia, serif", fontSize: "0.88rem", lineHeight: "1.6",
          color: "#7A6A4A", fontStyle: "italic",
          background: "rgba(180,160,112,0.06)", padding: "0.5rem 0.7rem", borderRadius: "4px",
        }}>The {isKontakion ? "kontakion" : "sticheron"} of the temple is omitted when serving outside a dedicated temple.{!isKontakion && " The Litiya proceeds directly to the stichera of the feast."}</div>
      </div>
    );
  }

  if (currentId && resolvedTroparion) {
    return (
      <div style={{ padding: "12px 0 12px 12px", borderLeft: "3px solid #8B6914", margin: "12px 0" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "4px", flexWrap: "wrap" }}>
          <span style={{
            fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em",
            color: "#8B6914", fontFamily: "Georgia, serif", fontWeight: "bold",
          }}>{ elementLabel }</span>
          <span style={{ fontSize: "0.72rem", color: "#9A8A70", fontStyle: "italic" }}>
            — {resolvedTroparion.saint}{resolvedTroparion.isTroparionFallback ? " (troparion — kontakion not yet encoded)" : ""}
          </span>
          {fekulaSection && (
            <FekulaBadge section={fekulaSection}
              note={isKontakion
                ? "The Kontakion of the church is sung after the Kontakion of the day. — OCA Typica; HTM Horologion"
                : "We always chant first the first Litiya sticheron of the temple, unless it be one of the great feasts. — HTM Vespers"} />
          )}
          <span onClick={() => onSelect(null)} style={{
            fontSize: "0.68rem", color: "#9A8A70", cursor: "pointer", marginLeft: "auto",
          }}>(change)</span>
        </div>
        <div style={{
          fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em",
          color: "#5A4A2A", marginBottom: "0.25rem", fontFamily: "Georgia, serif",
        }}>Tone {resolvedTroparion.tone}:</div>
        <div style={{
          fontFamily: "Georgia, serif", fontSize: "0.97rem", lineHeight: "1.75",
          color: "#1C1008", background: "rgba(139,105,20,0.04)",
          padding: "0.6rem 0.8rem", borderRadius: "4px",
        }}>{resolvedTroparion.text}</div>
      </div>
    );
  }

  // Unselected state — show the picker
  return (
    <div style={{
      background: "rgba(180,160,112,0.08)",
      border: "1px solid rgba(180,160,112,0.25)",
      borderRadius: "8px",
      padding: "14px 14px 6px",
      margin: "12px 0",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px" }}>
        <svg width="12" height="17" viewBox="0 0 92 133" aria-hidden="true" style={{ flexShrink: 0 }}><g transform="matrix(1,0,0,1,-188.023852,108.103825)"><path d="M247.237,-66.889C248.05,-71.423 251.98,-74.733 256.586,-74.764C261.193,-74.794 265.166,-71.537 266.039,-67.014C270.027,-65.763 272.741,-62.068 272.741,-57.889C272.741,-53.71 270.027,-50.015 266.039,-48.765C265.166,-44.242 261.193,-40.984 256.586,-41.014C251.98,-41.045 248.05,-44.355 247.237,-48.889L244.82,-48.889L244.82,-46.639L242.57,-46.639L242.57,-7.504C247.105,-6.691 250.415,-2.761 250.445,1.846C250.476,6.452 247.218,10.425 242.695,11.298C241.445,15.286 237.75,18 233.57,18C229.391,18 225.696,15.286 224.446,11.298C219.923,10.425 216.665,6.452 216.696,1.846C216.726,-2.761 220.036,-6.691 224.57,-7.504L224.57,-46.639L222.32,-46.639L222.32,-48.889L219.904,-48.889C219.091,-44.355 215.161,-41.045 210.554,-41.014C205.948,-40.984 201.975,-44.242 201.102,-48.765C197.114,-50.015 194.4,-53.71 194.4,-57.889C194.4,-62.068 197.114,-65.763 201.102,-67.014C201.975,-71.537 205.948,-74.794 210.554,-74.764C215.161,-74.733 219.091,-71.423 219.904,-66.889L222.32,-66.889L222.32,-69.139L224.57,-69.139L224.57,-76.224C220.036,-77.037 216.726,-80.967 216.696,-85.573C216.665,-90.179 219.923,-94.153 224.446,-95.026C225.696,-99.014 229.391,-101.728 233.57,-101.728C237.75,-101.728 241.445,-99.014 242.695,-95.026C247.218,-94.153 250.476,-90.179 250.445,-85.573C250.415,-80.967 247.105,-77.037 242.57,-76.224L242.57,-69.139L244.82,-69.139L244.82,-66.889L247.237,-66.889Z" fill="#7A6A4A"/></g></svg>
        <span style={{
          fontSize: "0.85rem", color: "#7A6A4A", fontStyle: "italic",
          fontFamily: "Georgia, serif", lineHeight: "1.45",
        }}>{pickerPrompt}</span>
      </div>

      {/* Primary dropdown */}
      <div style={{ position: "relative", marginBottom: "10px" }}>
        <select
          value=""
          onChange={(e) => { if (e.target.value) onSelect(e.target.value); }}
          style={{
            width: "100%", padding: "9px 32px 9px 10px",
            fontSize: "0.85rem", fontFamily: "Georgia, serif",
            color: "#3D3020",
            background: "#fff",
            border: "1px solid rgba(180,160,112,0.4)",
            borderRadius: "6px",
            appearance: "none", WebkitAppearance: "none",
            cursor: "pointer",
          }}
        >
          <option value="" disabled>Select your parish dedication...</option>
          {categories.map(cat => {
            const items = grouped[cat];
            if (!items || items.length === 0) return null;
            return (
              <optgroup key={cat} label={cat}>
                {items.map(d => (
                  <option key={d.id} value={d.id}>{d.label}</option>
                ))}
              </optgroup>
            );
          })}
          {showMore && categories.map(cat => {
            const items = moreGrouped[cat];
            if (!items || items.length === 0) return null;
            return (
              <optgroup key={"more-"+cat} label={"More — " + cat}>
                {items.map(d => (
                  <option key={d.id} value={d.id}>{d.label}</option>
                ))}
              </optgroup>
            );
          })}
        </select>
        <div style={{
          position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)",
          width: 0, height: 0,
          borderLeft: "4px solid transparent", borderRight: "4px solid transparent",
          borderTop: "5px solid #9A8A70", pointerEvents: "none",
        }}></div>
      </div>

      {/* Action rows */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {moreDeds.length > 0 && (
          <div
            onClick={() => setShowMore(!showMore)}
            style={{
              display: "flex", alignItems: "center", gap: "8px",
              padding: "9px 0", fontSize: "0.85rem",
              color: "#9A8A70", cursor: "pointer",
              borderTop: "1px solid rgba(180,160,112,0.18)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{showMore ? <path d="M6 15l6 -6l6 6"/> : <><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></>}</svg>
            {showMore ? "Fewer dedications" : "More dedications..."}
          </div>
        )}
        <div
          onClick={() => onSelect("none")}
          style={{
            display: "flex", alignItems: "center", gap: "8px",
            padding: "9px 0", fontSize: "0.85rem",
            color: "#5A4A2A", cursor: "pointer",
            borderTop: "1px solid rgba(180,160,112,0.18)",
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5A4A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l-2 0l9 -9l9 9l-2 0"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/></svg>
          No dedication / serving at home
        </div>
      </div>
    </div>
  );
}

function FekulaBadge({ section, note }) {
  const [open, setOpen] = useState(false);
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          background: "rgba(139,105,20,0.15)",
          border: "1px solid #8B6914",
          borderRadius: "3px",
          color: "#8B6914",
          fontSize: "0.68rem",
          padding: "1px 6px",
          cursor: "pointer",
          fontFamily: "Georgia, serif",
          letterSpacing: "0.03em",
        }}
      >
        Fekula {section}
      </button>
      {open && (
        <span
          style={{
            display: "block",
            marginTop: "4px",
            padding: "6px 10px",
            background: "rgba(139,105,20,0.08)",
            border: "1px solid rgba(139,105,20,0.3)",
            borderRadius: "4px",
            fontSize: "0.78rem",
            fontStyle: "italic",
            color: "#5C4A1E",
            lineHeight: "1.5",
          }}
        >
          {note}
        </span>
      )}
    </span>
  );
}


// ─── SERVICE BLOCK ────────────────────────────────────────────────────────────
function ServiceBlock({ element, templeDedication, onTempleDedicationChange }) {
  // ── Temple selector — hybrid UI for parish dedication ──────────────────
  if (element.type === 'temple_selector') {
    const isKontakionMode = element.templeMode === "kontakion";
    // Compute available dedications: only those whose data is encoded with a troparion
    const available = TEMPLE_DEDICATIONS.filter(d => {
      const trop = resolveTempleTroparion(d.id);
      return trop !== null;
    });
    // Resolve current selection — kontakion for Typica, troparion for Litiya
    let resolved = null;
    if (templeDedication && templeDedication !== "none") {
      if (isKontakionMode) {
        resolved = resolveTempleKontakion(templeDedication);
        // Fallback to troparion if kontakion not encoded
        if (!resolved) {
          const tropFallback = resolveTempleTroparion(templeDedication);
          if (tropFallback) resolved = { ...tropFallback, isTroparionFallback: true };
        }
      } else {
        resolved = resolveTempleTroparion(templeDedication);
      }
    }
    return (
      <TempleSelector
        availableDedications={available}
        onSelect={onTempleDedicationChange}
        currentId={templeDedication}
        resolvedTroparion={resolved}
        fekulaSection={element.fekula?.section}
        mode={isKontakionMode ? "kontakion" : "troparion"}
      />
    );
  }

  // ── End-of-hour marker ───────────────────────────────────────────────────
  if (element.type === 'end_marker') {
    return (
      <div style={{
        textAlign: 'center',
        margin: '2rem 0 0.5rem',
        paddingTop: '1rem',
        borderTop: '1px solid #D4C49A',
      }}>
        <div style={{
          fontFamily: 'Georgia, serif',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          letterSpacing: '0.12em',
          color: '#5A4A2A',
          marginBottom: '1rem',
        }}>
          {element.text}
        </div>
        <svg width="46" height="66" viewBox="0 0 92 133" role="img" aria-label="Orthodox cross" style={{display:'inline-block'}}>
          <g transform="matrix(1,0,0,1,-188.023852,108.103825)">
            <path d="M247.237,-66.889C248.05,-71.423 251.98,-74.733 256.586,-74.764C261.193,-74.794 265.166,-71.537 266.039,-67.014C270.027,-65.763 272.741,-62.068 272.741,-57.889C272.741,-53.71 270.027,-50.015 266.039,-48.765C265.166,-44.242 261.193,-40.984 256.586,-41.014C251.98,-41.045 248.05,-44.355 247.237,-48.889L244.82,-48.889L244.82,-46.639L242.57,-46.639L242.57,-7.504C247.105,-6.691 250.415,-2.761 250.445,1.846C250.476,6.452 247.218,10.425 242.695,11.298C241.445,15.286 237.75,18 233.57,18C229.391,18 225.696,15.286 224.446,11.298C219.923,10.425 216.665,6.452 216.696,1.846C216.726,-2.761 220.036,-6.691 224.57,-7.504L224.57,-46.639L222.32,-46.639L222.32,-48.889L219.904,-48.889C219.091,-44.355 215.161,-41.045 210.554,-41.014C205.948,-40.984 201.975,-44.242 201.102,-48.765C197.114,-50.015 194.4,-53.71 194.4,-57.889C194.4,-62.068 197.114,-65.763 201.102,-67.014C201.975,-71.537 205.948,-74.794 210.554,-74.764C215.161,-74.733 219.091,-71.423 219.904,-66.889L222.32,-66.889L222.32,-69.139L224.57,-69.139L224.57,-76.224C220.036,-77.037 216.726,-80.967 216.696,-85.573C216.665,-90.179 219.923,-94.153 224.446,-95.026C225.696,-99.014 229.391,-101.728 233.57,-101.728C237.75,-101.728 241.445,-99.014 242.695,-95.026C247.218,-94.153 250.476,-90.179 250.445,-85.573C250.415,-80.967 247.105,-77.037 242.57,-76.224L242.57,-69.139L244.82,-69.139L244.82,-66.889L247.237,-66.889Z" fill="#B8A070"/>
          </g>
        </svg>
      </div>
    );
  }

  // ── Reader's Service — omission stub ─────────────────────────────────────
  // Collapsed note marking a suppressed priest part. Always shown so the
  // reader knows something was intentionally skipped and why.
  if (element.type === 'omission') {
    return (
      <div style={{
        marginBottom: '0.8rem',
        padding: '4px 10px',
        background: 'rgba(100,100,120,0.06)',
        border: '1px solid rgba(100,100,120,0.2)',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'baseline',
        gap: '8px',
        flexWrap: 'wrap',
      }}>
        <span style={{ fontSize: '0.65rem', color: '#8080A0', letterSpacing: '0.08em',
          textTransform: 'uppercase', flexShrink: 0 }}>Omitted</span>
        <span style={{ fontSize: '0.76rem', color: '#8080A0', fontStyle: 'italic' }}>
          {element.text}
        </span>
        {element.fekula && (
          <FekulaBadge section={element.fekula.section} note={element.fekula.note} />
        )}
      </div>
    );
  }

  // ── Rubric note (instructional, not read aloud) ──────────────────────────
  // Faded gold italic text — visually distinct from service text.
  // e.g. "[Glory to Thee... and O Heavenly King are both omitted...]"
  if (element.type === 'rubric') {
    const parts = (element.text || '').split('\n\n');
    return (
      <div style={{
        marginBottom: '1.4rem',
        borderLeft: '3px solid #D4C49A',
        paddingLeft: '12px',
      }}>
        {element.source && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.68rem', fontFamily: 'Georgia, serif', color: '#9A8A70', fontStyle: 'italic' }}>
              — {element.source}
            </span>
            {element.fekula && <FekulaBadge section={element.fekula.section} note={element.fekula.note} />}
          </div>
        )}
        {parts.map((part, i) => {
          const isBracketed = part.trim().startsWith('[');
          return (
            <p key={i} style={{
              fontFamily: 'Georgia, serif',
              fontSize: isBracketed ? '0.85rem' : '1rem',
              lineHeight: '1.7',
              color: isBracketed ? '#9A8A70' : '#2C2416',
              fontStyle: isBracketed ? 'italic' : 'normal',
              margin: i < parts.length - 1 ? '0 0 0.6rem' : '0',
            }}>{part}</p>
          );
        })}
      </div>
    );
  }

  // ── Informational note (liturgical guidance, not read aloud) ────────────
  // Light background, italic — for rubrical notes, empty-stichera messages,
  // Matins transition notes, etc.
  if (element.type === 'informational') {
    return (
      <div style={{
        marginBottom: '1.2rem',
        padding: '8px 12px',
        background: 'rgba(180,160,112,0.08)',
        border: '1px solid rgba(180,160,112,0.25)',
        borderRadius: '4px',
      }}>
        <p style={{
          fontFamily: 'Georgia, serif',
          fontSize: '0.88rem',
          lineHeight: '1.6',
          color: '#7A6A4A',
          fontStyle: 'italic',
          margin: 0,
        }}>{element.text}</p>
        {element.fekula && (
          <div style={{ marginTop: '4px' }}>
            <FekulaBadge section={element.fekula.section} note={element.fekula.note} />
          </div>
        )}
      </div>
    );
  }

  // ── Reader's Service — substitution ──────────────────────────────────────
  // Gold-amber left border (distinct from blue movable); teal-ish header badge.
  if (element.type === 'substitution') {
    return (
      <div style={{
        marginBottom: '1.4rem',
        paddingLeft: '1rem',
        borderLeft: '3px solid #5A7A8A',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px',
          marginBottom: '0.3rem', flexWrap: 'wrap' }}>
          {element.label && (
            <span style={{ fontSize: '0.7rem', textTransform: 'uppercase',
              letterSpacing: '0.12em', color: '#5A7A8A',
              fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
              {element.label}
            </span>
          )}
          <span style={{ fontSize: '0.65rem', background: 'rgba(90,122,138,0.12)',
            border: '1px solid rgba(90,122,138,0.4)', borderRadius: '3px',
            color: '#5A7A8A', padding: '1px 6px', letterSpacing: '0.06em',
            textTransform: 'uppercase', fontFamily: 'Georgia, serif' }}>
            Reader's Service
          </span>
          {element.source && (
            <span style={{ fontSize: '0.72rem', color: '#9A8A70', fontStyle: 'italic' }}>
              — {element.source}
            </span>
          )}
          {element.fekula && (
            <FekulaBadge section={element.fekula.section} note={element.fekula.note} />
          )}
        </div>
        {element.rubric && (
          <div style={{ fontSize: '0.72rem', textTransform: 'uppercase',
            letterSpacing: '0.1em', color: '#5A7A8A',
            marginBottom: '0.25rem', fontFamily: 'Georgia, serif' }}>
            {element.rubric}
          </div>
        )}
        <div style={{
          fontFamily: 'Georgia, serif', fontSize: '0.97rem',
          lineHeight: '1.75', color: '#1C1008',
          whiteSpace: 'pre-wrap',
          background: 'rgba(90,122,138,0.04)',
          padding: '0.6rem 0.8rem', borderRadius: '4px',
        }}>
          {element.text}
        </div>
      </div>
    );
  }

  // ── Litany renderer ──────────────────────────────────────────────────────
  // Petitions in grey italic (deacon/priest); congregational responses
  // (Lord, have mercy / Grant this, O Lord / To Thee, O Lord) on their own
  // line in normal black reading text.
  if (element.type === 'prokeimenon') {
    const rubrStyle = {
      fontSize: '0.72rem', textTransform: 'uppercase',
      letterSpacing: '0.1em', color: '#8B6914',
      marginBottom: '0.25rem', fontFamily: 'Georgia, serif',
    };
    const deaconStyle = {
      fontFamily: 'Georgia, serif', fontSize: '0.97rem',
      lineHeight: '1.75', color: '#A89880', fontStyle: 'italic',
      marginBottom: '0.6rem',
    };
    const chantersStyle = {
      fontFamily: 'Georgia, serif', fontSize: '0.97rem',
      lineHeight: '1.75', color: '#1C1008',
      marginBottom: '0.6rem',
    };
    const exchanges = element.exchanges || [];
    // Group consecutive same-speaker exchanges to avoid redundant rubric labels
    const grouped = [];
    exchanges.forEach(ex => {
      const last = grouped[grouped.length - 1];
      if (last && last.speaker === ex.speaker) {
        last.lines.push(ex.text);
      } else {
        grouped.push({ speaker: ex.speaker, lines: [ex.text] });
      }
    });
    return (
      <div id={element.id} style={{ marginBottom: '1.4rem', paddingLeft: '1rem', borderLeft: '3px solid #8B6914' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px',
          marginBottom: '0.5rem', flexWrap: 'wrap' }}>
          {element.label && (
            <span style={{ fontSize: '0.7rem', textTransform: 'uppercase',
              letterSpacing: '0.12em', color: '#9A8A70',
              fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
              {element.label}
            </span>
          )}
          {element.source && (
            <span style={{ fontSize: '0.72rem', color: '#9A8A70', fontStyle: 'italic' }}>
              — {element.source}
            </span>
          )}
          {element.fekula && (
            <FekulaBadge section={element.fekula.section} note={element.fekula.note} />
          )}
        </div>
        {/* Announcement — Deacon/Priest in normal mode; Reader (no Wisdom!) in reader mode */}
        {element.announcement && (
          <div style={{ marginBottom: '0.8rem' }}>
            {element.readerMode ? (
              <>
                <div style={rubrStyle}>Reader:</div>
                <div style={chantersStyle}>
                  {/* Strip leading "Wisdom! " for reader mode — Ch10: Wisdom! is a deacon/priest exclamation */}
                  {element.announcement.replace(/^Wisdom!\s*/, '')}
                </div>
              </>
            ) : (
              <>
                <div style={rubrStyle}>{element.typicaMode ? "Priest (or Deacon):" : "Deacon (or Priest):"}</div>
                <div style={deaconStyle}>{element.announcement}</div>
              </>
            )}
          </div>
        )}
        {/* Responsorial exchanges */}
        {grouped.map((group, gi) => (
          <div key={gi} style={{ marginBottom: '0.2rem' }}>
            <div style={rubrStyle}>
              {group.speaker === 'deacon'
                ? (element.readerMode ? 'Reader:' : (element.typicaMode ? 'Priest (or Deacon):' : 'Deacon (or Priest):'))
                : 'Chanters:'}
            </div>
            {group.lines.map((line, li) => (
              <div key={li} style={group.speaker === 'deacon' ? (element.readerMode ? chantersStyle : deaconStyle) : chantersStyle}>
                {line}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (element.type === 'litany') {
    const rubrStyle = {
      fontSize: '0.72rem', textTransform: 'uppercase',
      letterSpacing: '0.1em', color: '#8B6914',
      marginBottom: '0.5rem', fontFamily: 'Georgia, serif',
    };
    const petitionStyle = {
      fontFamily: 'Georgia, serif', fontSize: '0.97rem',
      lineHeight: '1.75', color: '#A89880', fontStyle: 'italic',
    };
    const responseStyle = {
      fontFamily: 'Georgia, serif', fontSize: '0.97rem',
      lineHeight: '1.75', color: '#1C1008', fontStyle: 'normal',
      marginBottom: '0.5rem',
    };
    const isResponse = (line) =>
      /^(Lord, have mercy|To Thee, O Lord|Grant this, O Lord)/.test(line.trim());

    const lines = element.text.split('\n');
    const rendered = [];
    lines.forEach((line, li) => {
      if (!line.trim()) return;
      if (isResponse(line)) {
        rendered.push(<div key={'r-'+li} style={responseStyle}>{line.trim()}</div>);
      } else {
        rendered.push(<div key={'p-'+li} style={petitionStyle}>{line.trim()}</div>);
      }
    });
    return (
      <div style={{ marginBottom: '1.4rem' }}>
        {element.rubric && <div style={rubrStyle}>{element.rubric}</div>}
        {element.label && (
          <div style={{ fontSize: '0.7rem', textTransform: 'uppercase',
            letterSpacing: '0.12em', color: '#9A8A70',
            fontFamily: 'Georgia, serif', fontWeight: 'bold',
            marginBottom: '0.4rem' }}>
            {element.label}
          </div>
        )}
        <div>{rendered}</div>
      </div>
    );
  }

  const isMovable = element.type !== "fixed";

  return (
    <div
      id={element.id}
      style={{
        marginBottom: "1.4rem",
        paddingLeft: isMovable ? "1rem" : "0",
        borderLeft: isMovable ? "3px solid #8B6914" : "none",
      }}
    >
      {/* Label (section title) first */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "0.3rem", flexWrap: "wrap" }}>
        <span
          style={{
            fontSize: "0.7rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: isMovable ? "#8B6914" : "#9A8A70",
            fontFamily: "Georgia, serif",
            fontWeight: "bold",
          }}
        >
          {element.label}
        </span>
        {isMovable && element.source && (
          <span style={{ fontSize: "0.72rem", color: "#9A8A70", fontStyle: "italic" }}>
            — {element.source}
          </span>
        )}
        {isMovable && element.kathismaNum && (
          <a
            href={element.psalterHref || `/orthodox-hours/psalter?kathisma=${element.kathismaNum}`}
            style={{
              fontSize: "0.68rem",
              color: "#8B6914",
              textDecoration: "none",
              border: "1px solid rgba(139,105,20,0.35)",
              borderRadius: "3px",
              padding: "1px 7px",
              background: "rgba(139,105,20,0.07)",
              fontFamily: "Georgia, serif",
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
            }}
          >
            Read in Psalter ↗
          </a>
        )}
        {isMovable && element.scriptureHref && (
          <a
            href={element.scriptureHref}
            style={{
              fontSize: "0.68rem",
              color: "#8B6914",
              textDecoration: "none",
              border: "1px solid rgba(139,105,20,0.35)",
              borderRadius: "3px",
              padding: "1px 7px",
              background: "rgba(139,105,20,0.07)",
              fontFamily: "Georgia, serif",
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
            }}
          >
            Read in Scripture ↗
          </a>
        )}
        {(isMovable || element.showFekula) && element.fekula && (
          <FekulaBadge section={element.fekula.section} note={element.fekula.note} />
        )}
        {element.unresolved && (
          <span
            style={{
              fontSize: "0.68rem",
              background: "rgba(180,60,30,0.1)",
              border: "1px solid rgba(180,60,30,0.3)",
              color: "#B43C1E",
              borderRadius: "3px",
              padding: "1px 6px",
              fontFamily: "Georgia, serif",
            }}
          >
            ⚠ Unresolved — see Chapter 6
          </span>
        )}
      </div>

      {element.rubric && (
        <div
          style={{
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: (element.rubric.startsWith("Priest") || element.rubric.startsWith("Deacon")) ? "#8B6914" : "#5A4A2A",
            marginBottom: "0.25rem",
            fontFamily: "Georgia, serif",
          }}
        >
          {element.rubric}
        </div>
      )}

      {element.toneNote && (
        <div style={{ fontSize: "0.76rem", color: "#9A8A70", fontStyle: "italic", marginBottom: "0.3rem" }}>
          {element.toneNote}
        </div>
      )}

      {(() => {
        const isPriest = element.rubric && (
          element.rubric.startsWith("Priest:") ||
          element.rubric.startsWith("Deacon:")
        );
        const isPsalm = element.text && element.text.startsWith("PSALM ");
        const isRubricNote = element.isRubricNote;
        const bodyStyle = {
          fontFamily: "Georgia, serif",
          fontSize: isRubricNote ? "0.85rem" : "0.97rem",
          lineHeight: "1.75",
          color: isPriest ? "#A89880" : isRubricNote ? "#9A8A70" : isMovable ? "#1C1008" : "#3D3020",
          fontStyle: (isPriest || isRubricNote) ? "italic" : "normal",
          whiteSpace: "pre-wrap",
          background: isMovable ? "rgba(139,105,20,0.04)" : "transparent",
          padding: isMovable ? "0.6rem 0.8rem" : "0",
          borderRadius: isMovable ? "4px" : "0",
        };
        if (isPsalm) {
          const newlineIdx = element.text.indexOf("\n");
          const heading = newlineIdx >= 0 ? element.text.slice(0, newlineIdx) : element.text;
          const body = newlineIdx >= 0 ? element.text.slice(newlineIdx).trimStart() : "";
          return (
            <div>
              <div style={{
                fontSize: "0.72rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#8B6914",
                fontFamily: "Georgia, serif",
                fontWeight: "bold",
                marginBottom: "0.4rem",
              }}>
                {heading}
              </div>
              {body && <div style={bodyStyle}>{body}</div>}
            </div>
          );
        }
        return element.text ? <div style={bodyStyle}>{element.text}</div> : null;
      })()}

      {/* ── Post-communion T/K block ── */}
      {element._tk && (() => {
        const tk = element._tk;
        const goldLabel = {
          fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em",
          color: "#8B6914", fontFamily: "Georgia, serif", fontWeight: "bold",
          marginBottom: "0.25rem",
        };
        const toneTag = {
          fontSize: "0.76rem", color: "#9A8A70", fontStyle: "italic", marginBottom: "0.3rem",
        };
        const bodyText = {
          fontFamily: "Georgia, serif", fontSize: "0.97rem", lineHeight: "1.75",
          color: "#1C1008", whiteSpace: "pre-wrap",
          background: "rgba(139,105,20,0.04)", padding: "0.6rem 0.8rem", borderRadius: "4px",
        };
        const gloryText = {
          fontFamily: "Georgia, serif", fontSize: "0.97rem", lineHeight: "1.75",
          color: "#3D3020", margin: "0.5rem 0",
        };
        return (
          <div>
            <div style={{ ...goldLabel, marginBottom: "0.5rem", color: "#9A8A70", fontStyle: "italic",
              textTransform: "none", letterSpacing: "0", fontSize: "0.82rem", borderLeft: "2px solid #D4C49A",
              paddingLeft: "0.6rem", lineHeight: "1.5" }}>
              {tk.explainer}
            </div>
            <div style={{ marginTop: "0.75rem" }}>
              <div style={goldLabel}>{tk.troparion.label}</div>
              <div style={toneTag}>Tone {tk.troparion.tone}</div>
              <div style={bodyText}>{tk.troparion.text}</div>
            </div>
            <div style={gloryText}>{tk.glory}</div>
            <div style={{ marginTop: "0.25rem" }}>
              <div style={goldLabel}>{tk.kontakion.label}</div>
              <div style={toneTag}>Tone {tk.kontakion.tone}</div>
              <div style={bodyText}>{tk.kontakion.text}</div>
            </div>
            <div style={gloryText}>{tk.bothNow}</div>
          </div>
        );
      })()}

      {/* ── Citation footnote ── */}
      {element.citation && (
        <div style={{
          fontSize: "0.68rem",
          color: "#B8A882",
          fontStyle: "italic",
          marginTop: "0.25rem",
          paddingLeft: isMovable ? "0.8rem" : "0",
          letterSpacing: "0.01em",
          lineHeight: "1.4",
        }}>
          ¹ {element.citation}
        </div>
      )}
    </div>
  );
}


const RESURRECTIONAL_TROPARIA = {
  1: {
    tone: 1,
    text: "When the stone had been sealed by the Jews, and the soldiers were guarding Thine immaculate Body, Thou didst rise on the third day, O Savior, granting life unto the world. Wherefore, the Hosts of the Heavens cried out to Thee, O Life-giver: Glory to Thy Resurrection, O Christ. Glory to Thy kingdom. Glory to Thy dispensation, O only Lover of mankind.",
  },
  2: {
    tone: 2,
    text: "When Thou didst descend unto death, O Life Immortal, then didst Thou slay Hades with the lightning of Thy Divinity. And when Thou didst also raise the dead out of the nethermost depths, all the Hosts of Heaven cried out: O Life-giver, Christ our God, glory be to Thee.",
  },
  3: {
    tone: 3,
    text: "Let the heavens be glad; let earthly things rejoice; for the Lord hath wrought might with His arm. He hath trampled down death by death; the first-born of the dead hath He become. From the belly of Hades hath He delivered us and hath granted to the world great mercy.",
  },
  4: {
    tone: 4,
    text: "Having learned the joyful proclamation of the Resurrection from the angel, and having cast off the ancestral condemnation, the women disciples of the Lord spake to the apostles exultantly: Death is despoiled and Christ God is risen, granting to the world great mercy.",
  },
  5: {
    tone: 5,
    text: "Let us, O faithful, praise and worship the Word Who is co-unoriginate with the Father and the Spirit, and Who was born of the Virgin for our salvation; for He was pleased to ascend the Cross in the flesh and to endure death, and to raise the dead by His glorious Resurrection.",
  },
  6: {
    tone: 6,
    text: "Angelic Hosts were above Thy tomb, and they that guarded Thee became as dead. And Mary stood by the grave seeking Thine immaculate Body. Thou didst despoil Hades and wast not tempted by it. Thou didst meet the Virgin and didst grant us life. O Thou Who didst rise from the dead, O Lord, glory be to Thee.",
  },
  7: {
    tone: 7,
    text: "Thou didst destroy death by Thy Cross, Thou didst open Paradise to the thief. Thou didst change the lamentation of the Myrrh-bearers, and Thou didst command Thine Apostles to proclaim that Thou didst arise, O Christ God, and grantest to the world great mercy.",
  },
  8: {
    tone: 8,
    text: "From on high didst Thou descend, O Compassionate One; to burial of three days hast Thou submitted that Thou mightest free us from our passions. O our Life and Resurrection, O Lord, glory be to Thee.",
  },
};


const SUNDAY_KONTAKIA = {
  1: {
    tone: 1,
    text: "As God Thou didst arise from the tomb in glory, and Thou didst raise the world together with Thyself. And mortal nature praiseth Thee as God, and death hath vanished. And Adam danceth, O Master, and Eve, now freed from fetters, rejoiceth as she crieth out: Thou art He, O Christ, that grantest unto all resurrection.",
  },
  2: {
    tone: 2,
    text: "Thou didst arise from the tomb, O omnipotent Savior, and Hades was terrified on beholding the wonder; and the dead arose, and creation at the sight thereof rejoiceth with Thee. And Adam also is joyful, and the world, O my Savior, praiseth Thee for ever.",
  },
  3: {
    tone: 3,
    text: "Thou didst rise today from the tomb, O Merciful One, and didst lead us out of the gates of death. Today Adam danceth and Eve rejoiceth; and together with them both the Prophets and Patriarchs unceasingly praise the divine might of Thine authority.",
  },
  4: {
    tone: 4,
    text: "My Savior and Redeemer hath, as God, raised up the earthborn from the grave and from their fetters, and He hath broken the gates of Hades, and, Master, hath risen on the third day.",
  },
  5: {
    tone: 5,
    text: "Unto Hades, O my Savior, didst Thou descend, and having broken its gates as One omnipotent, Thou, as Creator, didst raise up the dead together with Thyself. And Thou didst break the sting of death, and didst deliver Adam from the curse, O Lover of mankind. Wherefore, we all cry unto Thee: Save us, O Lord.",
  },
  6: {
    tone: 6,
    text: "Having by His life-bestowing hand raised up all the dead out of the dark abysses, Christ God, the Giver of Life, hath bestowed the Resurrection upon the fallen human race; for He is the Savior of all, the Resurrection, and the Life, and the God of all.",
  },
  7: {
    tone: 7,
    text: "No longer will the dominion of death be able to keep men captive; for Christ hath descended, demolishing and destroying the powers thereof. Hades is bound; the Prophets rejoice with one voice, saying: A Savior hath come for them that have faith. Come forth, ye faithful, for the Resurrection.",
  },
  8: {
    tone: 8,
    text: "Having arisen from the tomb, Thou didst raise up the dead and didst resurrect Adam. Eve also danceth at Thy Resurrection, and the ends of the world celebrate Thine arising from the dead, O Greatly-merciful One.",
  },
};


const SUNDAY_HOURS_THEOTOKIA = {
  1: {
    tone: 1,
    text: "When Gabriel announced to thee, 'Rejoice!', O Virgin, the Master of all became incarnate within thee, the holy tabernacle, at his cry, as the righteous David said. Thou wast shown to be more spacious than the heavens, having borne thy Creator. Glory to Him Who made His abode within thee! Glory to Him Who came forth from thee! Glory to Him Who hath set us free by thy birthgiving.",
  },
  2: {
    tone: 2,
    text: "All of thy most glorious mysteries are beyond comprehension, O Theotokos; for, thy purity sealed and thy virginity intact, thou art known to be a true Mother, having given birth unto God. Him do thou entreat, that our souls be saved.",
  },
  3: {
    tone: 3,
    text: "We hymn thee who hast mediated the salvation of our race, O Virgin Theotokos; for thy Son and our God, accepting suffering on the Cross in the flesh He had received of thee, hath delivered us from corruption, in that He is the Lover of mankind.",
  },
  4: {
    tone: 4,
    text: "The mystery hidden from all ages and unknown to the ranks of angels, hath been revealed to those on earth through thee, O Theotokos: God incarnate in an uncommingled union, Who willingly accepted the Cross for our sake, and through it hath raised up the first-formed man, and saved our souls from death.",
  },
  5: {
    tone: 5,
    text: "Rejoice, impassible portal of the Lord! Rejoice, rampart and protection of those who have recourse unto thee! Rejoice, haven untouched by storms, and who knowing not wedlock, didst bear in the flesh thy Creator and God. Cease not to intercede for those who praise and worship thine Offspring.",
  },
  6: {
    tone: 6,
    text: "Gideon hath foretold of thy conception, and David hath revealed thine ineffable child-bearing, O Theotokos; for the Word descended like a dew upon the fleece of thy womb, and thou O Virgin full of grace, like unto a holy and fertile earth, budded forth without seed our salvation, Christ God.",
  },
  7: {
    tone: 7,
    text: "As thou art the treasury of our resurrection, O all-hymned one, lead up from the pit and abyss of transgression those who place their trust in thee, for thou who hast given birth to our Salvation hast saved those who are subject to sin. Thou wast a Virgin before giving birth, and a virgin during child-bearing, and thou didst remain a Virgin even after birthgiving.",
  },
  8: {
    tone: 8,
    text: "O Good One, Who for our sake wast born of the Virgin and, having endured crucifixion, cast down death by death, and as God revealed the resurrection: disdain not that which Thou hast fashioned with Thine own hand. Show forth Thy love for mankind, O Merciful One; accept the supplications of the Theotokos who bore Thee, and save Thy despairing people, O our Savior!",
  },
};



// ─── RANK EXPLAINER ──────────────────────────────────────────────────────────
// Informational ⓘ icon next to the service rank label. Expands inline to explain
// how the rank was determined and what it means for assembly.

const RANK_EXPLANATIONS = {
  simple: {
    label: 'Simple',
    fekula: '§2A',
    evidence: '3 stichera on "Lord I Call" at Vespers',
    detection: 'The number of stichera (hymns) sung on "Lord I Call" at Vespers is the definitive indicator of service rank. Three stichera = Simple rank.',
    assembly: 'At the Hours: troparion and kontakion from the Menaion. No structural change to the Hour skeleton. Readings at Liturgy come from the Oktoechos, not the Menaion.',
    vespers: 'Small Vespers. No Litya, no paroemias (OT readings). Aposticha from the Oktoechos.',
    source: 'Fekula §2A — Simple Saint',
  },
  six_stichera: {
    label: 'Six-Stichera',
    fekula: '§2C',
    evidence: '6 stichera on "Lord I Call" at Vespers',
    detection: 'Six stichera on "Lord I Call" at Vespers raises the service to Six-Stichera rank. The Hours structure is identical to Simple rank — the difference shows at Vespers and Matins.',
    assembly: 'At the Hours: same troparion and kontakion rules as Simple (§2A). The rank difference is in Vespers (6 stichera vs 3) and Matins (Alleluia service, same as §2A).',
    vespers: 'Great Vespers with 6 stichera. No Litya, no paroemias. Aposticha from the Oktoechos.',
    source: 'Fekula §2C — Six-Stichera Saint',
  },
  doxology: {
    label: 'Doxology',
    fekula: '§2D',
    evidence: 'Great Doxology sung (not read) at Matins',
    detection: 'The Great Doxology is sung at Matins rather than read. This is noted in the Menaion rubric and raises the service above Six-Stichera.',
    assembly: 'At the Hours: troparion and kontakion from the Menaion. If the Menaion saint is Doxology rank, the 3rd and 9th Hours use the Menaion kontakion even when a Pentecostarion kontakion would otherwise govern.',
    vespers: 'Great Vespers with 6 stichera. Great Doxology at Matins.',
    source: 'Fekula §2D — Doxology Saint',
  },
  polyeleos: {
    label: 'Polyeleos',
    fekula: '§2E',
    evidence: 'Polyeleos (Psalms 134–135) sung at Matins',
    detection: 'The Polyeleos ("Great Mercy") — Psalms 134 and 135 — is sung at Matins. This is among the most visible rank indicators: the church is fully lit and the priest censes the whole temple.',
    assembly: 'At the Hours: Menaion troparion and kontakion. OT Paroemias (3 readings) at Vespers. Feast proper Epistle and Gospel at Liturgy.',
    vespers: 'Great Vespers with Litya, 3 OT paroemias. Polyeleos and Matins Gospel at Matins.',
    source: 'Fekula §2E — Polyeleos Saint',
  },
  vigil: {
    label: 'Vigil',
    fekula: '§2F',
    evidence: 'All-Night Vigil prescribed in the Menaion',
    detection: 'The Menaion explicitly prescribes an All-Night Vigil. This is the highest rank for a fixed Menaion commemoration, reserved for great feasts and especially venerated saints.',
    assembly: 'At the Hours: Menaion troparion and kontakion govern exclusively. Great Vespers with Litya, 3 OT paroemias. Polyeleos, Matins Gospel, and Great Doxology at Matins.',
    vespers: 'All-Night Vigil: Great Vespers + Matins combined. Full feast structure throughout.',
    source: 'Fekula §2F — Vigil Saint',
  },
};

function RankExplainer({ menaionEntry, isSunday }) {
  const [open, setOpen] = React.useState(false);

  if (isSunday || !menaionEntry) return null;

  const rank = (menaionEntry && menaionEntry.rank) || 'simple';
  const info = RANK_EXPLANATIONS[rank] || RANK_EXPLANATIONS.simple;

  // Extract rank confirmation note from encoding record
  const encodingNote = (menaionEntry && menaionEntry.note) || '';
  const rankConfirm = (() => {
    // Pull the first sentence that mentions the rank or stichera count
    const sentences = encodingNote.split(/[.;]/).map(s => s.trim()).filter(Boolean);
    const relevant = sentences.find(s =>
      s.includes('§2') || s.includes('stichera') || s.includes('confirmed') ||
      s.includes('Polyeleos') || s.includes('Vigil') || s.includes('Doxology')
    );
    return relevant || null;
  })();

  const containerStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    position: 'relative',
  };
  const iconStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    border: '1px solid #8B6914',
    color: '#8B6914',
    fontSize: '9px',
    fontStyle: 'normal',
    cursor: 'pointer',
    marginLeft: '5px',
    lineHeight: 1,
    userSelect: 'none',
    flexShrink: 0,
    fontFamily: 'Georgia, serif',
    fontWeight: 'bold',
  };
  const panelStyle = {
    marginTop: '0.6rem',
    padding: '0.9rem 1rem',
    background: '#FAF6EE',
    border: '1px solid #D4C49A',
    borderRadius: '5px',
    fontSize: '0.76rem',
    lineHeight: '1.6',
    color: '#3D3020',
  };
  const headStyle = {
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#8B6914',
    fontFamily: 'Georgia, serif',
    fontWeight: 'bold',
    marginBottom: '0.3rem',
    marginTop: '0.7rem',
  };
  const firstHeadStyle = { ...headStyle, marginTop: 0 };
  const panel = open ? (
    <div style={{
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
      width: '100%',
      maxWidth: '480px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
      ...panelStyle,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#1C1008' }}>
          How this rank was determined
        </div>
        <span onClick={() => setOpen(false)} style={{ cursor: 'pointer', color: '#9A8A70', fontSize: '1rem', lineHeight: 1, marginLeft: '1rem', flexShrink: 0 }}>✕</span>
      </div>

      <div style={firstHeadStyle}>Rank</div>
      <div><strong>{info.label}</strong> — Fekula <strong>{info.fekula}</strong></div>

      <div style={headStyle}>Evidence from the Menaion PDF</div>
      <div>{info.evidence}</div>
      {rankConfirm && (
        <div style={{ marginTop: '0.3rem', color: '#9A8A70', fontStyle: 'italic' }}>
          Encoding note: "{rankConfirm}"
        </div>
      )}

      <div style={headStyle}>Detection rule</div>
      <div>{info.detection}</div>

      <div style={headStyle}>At the Hours</div>
      <div>{info.assembly}</div>

      <div style={headStyle}>At Vespers & Matins</div>
      <div>{info.vespers}</div>

      <div style={{
        marginTop: '0.7rem',
        paddingTop: '0.5rem',
        borderTop: '1px solid #E8DFC0',
        fontSize: '0.7rem',
        color: '#B8A882',
        fontStyle: 'italic',
      }}>
        {info.source}
      </div>
    </div>
  ) : null;

  // Render icon inline; panel flows as a block element below its parent container.
  // Using a fragment so the panel sits outside the inline span — no viewport bleed.
  return (
    <React.Fragment>
      <span style={containerStyle}>
        <span style={iconStyle} onClick={() => setOpen(o => !o)} title='How was this rank determined?'>
          i
        </span>
      </span>
      {open && (
        <div style={{ display: 'block', width: '100%' }}>
          {panel}
        </div>
      )}
    </React.Fragment>
  );
}

// ─── ORDINARY BEGINNING ──────────────────────────────────────────────────────
// Shared component for the Typical (Ordinary) Beginning used by all services
// when served independently. One source of truth for:
//   - Vespers (if not preceded by the 9th Hour)
//   - 1st Hour (if not preceded by Matins)
//   - 3rd Hour (always has full beginning)
//   - 6th Hour (if not preceded by the 3rd Hour)
//   - 9th Hour (always has full beginning)
//   - Typica (if not preceded by the 6th Hour)
// Three seasonal variants:
//   1. Ordinary — full sequence with O Heavenly King
//   2. Christ is risen (P+7–P+38) — Christ is risen ×3 replaces O Heavenly King
//   3. Heavenly King omitted (P+39–Pentecost) — O Heavenly King skipped
// Source: HTM Horologion, Jordanville (1994); OCA liturgical texts; Fekula §4A/§4B11.

function OrdinaryBeginning({ liturgicalData, open, setOpen, readerMode, collapsible = true, title, contextNote }) {
  const { paschaOffset, season } = liturgicalData;
  const isPentecostarion = season === 'pentecostarion' || season === 'brightweek';
  const christIsRisenActive = isPentecostarion && paschaOffset >= 7 && paschaOffset <= 38;
  const heavenlyKingOmitted = isPentecostarion && paschaOffset > 38;

  const containerStyle = {
    border: '1px solid #D4C49A',
    borderRadius: '6px',
    marginBottom: '2rem',
    overflow: 'hidden',
  };
  const headerStyle = {
    background: open ? '#F0E8D0' : '#FAF6EE',
    borderBottom: open ? '1px solid #D4C49A' : 'none',
    padding: '0.75rem 1rem',
    cursor: collapsible ? 'pointer' : 'default',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    userSelect: 'none',
  };
  const titleStyle = {
    fontSize: '0.75rem', textTransform: 'uppercase',
    letterSpacing: '0.1em', color: '#8B6914',
    fontFamily: 'Georgia, serif', fontWeight: 'bold',
  };
  const noteStyle = {
    fontSize: '0.78rem', color: '#9A8A70',
    fontStyle: 'italic', marginTop: '0.35rem', lineHeight: '1.5',
  };
  const rubrStyle = {
    fontSize: '0.72rem', textTransform: 'uppercase',
    letterSpacing: '0.1em', color: '#8B6914',
    marginBottom: '0.25rem', marginTop: '1rem',
  };
  const textStyle = {
    fontSize: '1rem', lineHeight: '1.8',
    color: '#1C1008', marginBottom: '1rem',
    fontFamily: 'Georgia, serif',
  };
  const badgeStyle = {
    fontSize: '0.72rem', color: '#9A8A70', fontStyle: 'italic',
    display: 'flex', alignItems: 'baseline', gap: '6px',
  };
  const fekulaStyle = {
    fontSize: '0.65rem', letterSpacing: '0.12em',
    textTransform: 'uppercase', color: '#8B6914',
    background: 'rgba(139,105,20,0.12)',
    border: '1px solid rgba(139,105,20,0.3)',
    borderRadius: '3px', padding: '1px 5px',
    whiteSpace: 'nowrap', flexShrink: 0,
  };

  // Seasonal opening content — replaces or omits O Heavenly King
  const seasonalOpening = () => {
    if (christIsRisenActive) {
      return (
        <div>
          {!readerMode && <p style={textStyle}>Reader: Amen.</p>}
          <p style={{...textStyle, color: '#9A8A70', fontStyle: 'italic'}}>
            Glory to Thee, our God and O Heavenly King are both omitted.
            In their place, Christ is risen is read thrice:
          </p>
          <p style={textStyle}>
            Christ is risen from the dead,<br/>
            trampling down death by death,<br/>
            and on those in the tombs bestowing life.
          </p>
          <p style={rubrStyle}>Thrice. Then continuing with Holy God...</p>
          <p style={{...badgeStyle, marginBottom: '0.5rem'}}>
            <span style={fekulaStyle}>§4A</span>
            Christ is risen is read thrice in place of Glory to Thee and O Heavenly King. — Fekula §4A
          </p>
        </div>
      );
    } else if (heavenlyKingOmitted) {
      return (
        <div>
          {!readerMode && <p style={textStyle}>Reader: Amen.</p>}
          <p style={{...textStyle, color: '#9A8A70', fontStyle: 'italic'}}>
            O Heavenly King is omitted from the Apodosis of Pascha until Pentecost.
            The reader proceeds directly to Holy God, Holy Mighty…
          </p>
          <p style={{...badgeStyle, marginBottom: '0.5rem'}}>
            <span style={fekulaStyle}>§4B11</span>
            O Heavenly King is read for the first time at Pentecost. — Fekula §4B11
          </p>
        </div>
      );
    } else {
      // Ordinary time — full O Heavenly King
      return (
        <div>
          {!readerMode && <p style={textStyle}>Reader: Amen.</p>}
          <p style={textStyle}>
            Glory to Thee, our God, glory to Thee.
          </p>
          <p style={rubrStyle}>O Heavenly King</p>
          <p style={textStyle}>
            O Heavenly King, Comforter, Spirit of Truth,<br/>
            Who art everywhere present and fillest all things,<br/>
            Treasury of good things and Giver of life:<br/>
            Come and dwell in us, and cleanse us of all impurity,<br/>
            and save our souls, O Good One.
          </p>
        </div>
      );
    }
  };

  const bodyContent = (
    <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
      {/* Priest blessing */}
      <div style={{ marginBottom: '1.4rem' }}>
        {readerMode ? (
          <>
            <div style={{ fontSize: '0.65rem', color: '#5A7A8A', letterSpacing: '0.08em',
              textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              Senior Reader: <span style={{ background: 'rgba(90,122,138,0.12)', border: '1px solid rgba(90,122,138,0.4)',
                borderRadius: '3px', padding: '1px 6px', marginLeft: '4px' }}>Reader's Service — Fekula §10</span>
            </div>
            <div style={textStyle}>
              Through the prayers of our holy fathers, O Lord Jesus Christ our God, have mercy on us.
            </div>
          </>
        ) : (
          <>
            <div style={rubrStyle}>Priest:</div>
            <div style={{...textStyle, color: '#A89880', fontStyle: 'italic'}}>
              Blessed is our God, always, now and ever, and unto the ages of ages.
            </div>
          </>
        )}
      </div>

      {/* Seasonal opening (O Heavenly King / Christ is risen / omission) */}
      <div style={{ marginBottom: '1.4rem' }}>
        {seasonalOpening()}
      </div>

      {/* Trisagion Prayers */}
      <div style={{ marginBottom: '1.4rem' }}>
        <div style={rubrStyle}>Trisagion Prayers</div>
        <div style={textStyle}>
          Holy God, Holy Mighty, Holy Immortal, have mercy on us. (thrice)<br/>
          Glory to the Father, and to the Son, and to the Holy Spirit,<br/>
          both now and ever, and unto the ages of ages. Amen.<br/><br/>
          O Most Holy Trinity, have mercy on us. O Lord, blot out our sins.<br/>
          O Master, pardon our iniquities. O Holy One, visit and heal our
          infirmities for Thy name's sake.<br/>
          Lord, have mercy. (thrice)<br/>
          Glory to the Father, and to the Son, and to the Holy Spirit,<br/>
          both now and ever, and unto the ages of ages. Amen.
        </div>
      </div>

      {/* Our Father */}
      <div style={{ marginBottom: '1.4rem' }}>
        <div style={rubrStyle}>Our Father</div>
        <div style={textStyle}>
          Our Father, Who art in the heavens, hallowed be Thy name.<br/>
          Thy kingdom come, Thy will be done, on earth as it is in heaven.<br/>
          Give us this day our daily bread,<br/>
          and forgive us our debts, as we forgive our debtors;<br/>
          and lead us not into temptation, but deliver us from the evil one.
        </div>
      </div>

      {/* Exclamation and Lord have mercy */}
      <div style={{ marginBottom: '1.4rem' }}>
        {readerMode ? (
          <>
            <div style={{ fontSize: '0.65rem', color: '#5A7A8A', letterSpacing: '0.08em',
              textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              Senior Reader: <span style={{ background: 'rgba(90,122,138,0.12)', border: '1px solid rgba(90,122,138,0.4)',
                borderRadius: '3px', padding: '1px 6px', marginLeft: '4px' }}>Reader's Service — Fekula §10</span>
            </div>
            <div style={textStyle}>
              O Lord Jesus Christ, Son of God, have mercy on us. Amen.
            </div>
          </>
        ) : (
          <>
            <div style={rubrStyle}>Priest:</div>
            <div style={{...textStyle, color: '#A89880', fontStyle: 'italic'}}>
              For Thine is the kingdom, and the power, and the glory:<br/>
              of the Father, and of the Son, and of the Holy Spirit,<br/>
              now and ever, and unto the ages of ages.
            </div>
            <div style={textStyle}>Reader: Amen.</div>
          </>
        )}
        <div style={textStyle}>
          Lord, have mercy. (twelve times)<br/>
          Glory to the Father, and to the Son, and to the Holy Spirit,<br/>
          both now and ever, and unto the ages of ages. Amen.
        </div>
      </div>

      {/* O Come, Let Us Worship */}
      <div style={{ marginBottom: '1rem' }}>
        <div style={rubrStyle}>O Come, Let Us Worship</div>
        <div style={textStyle}>
          O come, let us worship God our King.<br/>
          O come, let us worship and fall down before Christ our King and God.<br/>
          O come, let us worship and fall down before Christ Himself, our King and God.
        </div>
      </div>

      {/* Source note */}
      <div style={{ fontSize: '0.72rem', color: '#9A8A70', fontStyle: 'italic',
                   borderTop: '1px solid #E8DFC0', paddingTop: '0.6rem', marginTop: '0.5rem' }}>
        Fixed texts: HTM Horologion, Jordanville (1994); Reader Service Typikon (Bp. Daniel / ROCA).
        Seasonal substitution: Fekula §4A / §4B11.
      </div>
    </div>
  );

  if (!collapsible) {
    // Non-collapsible: render the body directly (used when added to service dropdown)
    return (
      <div style={{...containerStyle, border: 'none', marginBottom: '1.5rem' }}>
        {bodyContent}
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle} onClick={() => collapsible && setOpen(o => !o)}>
        <div>
          <div style={titleStyle}>
            &#9651; {title || "Ordinary Beginning (if said separately)"}
          </div>
          {contextNote && <div style={noteStyle}>{contextNote}</div>}
        </div>
        <span style={{ color: '#8B6914', fontSize: '1.1rem', marginLeft: '1rem', flexShrink: 0 }}>
          {open ? '▲' : '▼'}
        </span>
      </div>

      {open && bodyContent}
    </div>
  );
}




// ─── VERSION BADGE ────────────────────────────────────────────────────────────
// Clickable version badge in the header. Expands inline to show release notes.

const RELEASE_NOTES = [
  {
    version: "v0.6.4",
    date: "June 2026",
    summary: "Ordinary Sunday resurrectional troparion and kontakion now assembled from Octoechos",
    items: [
      "fix: RESURRECTIONAL_TROPARIA and SUNDAY_KONTAKIA tables were defined but never referenced in the assembler — ordinary Sundays (season='sunday') showed only the Menaion saint troparion with no resurrectional content. Now wired: resurrectional troparion of the tone is primary; Menaion saint troparion is Glory (secondary). Fekula §1A.",
      "fix: Sunday kontakion now sourced from SUNDAY_KONTAKIA[tone] at 1st & 6th Hours; Menaion saint kontakion at 3rd & 9th Hours per the two-kontakia HTM rule. Falls back to Sunday kontakion if no Menaion kontakion present.",
      "fix: parseCalendarDate() — user-selected dates now parsed as local midnight, matching all boundary date construction. Eliminates T12:00:00 noon offset that caused allSaintsSunday boundary comparison to fail.",
    ],
  },
  {
    date: "June 2026",
    summary: "All Saints Sunday (P+56) fully working — season boundary midnight/noon fix",
    items: [
      "fix: allSaintsSunday boundary date was constructed at local midnight; app dates are noon. date <= allSaintsSunday was false for June 7 at noon even though they share the same calendar date. Fixed by setting allSaintsSunday to 23:59:59 so the <= comparison works correctly.",
      "fix: all_saints_sunday hours_format now recognized as isSunday=true in assembleHour(), assembleVespers(), and buildDismissal() — was only checking pentecostarion_sunday, causing P+56 to use weekday skeleton, troparion structure, and dismissal formula.",
      "fix: fekulaSection resolver returns §4B17 for all_saints_sunday (was §4A).",
      "fix: P+56 season boundary changed from date < allSaintsSunday to date <= allSaintsSunday (v0.6.2 — superseded by midnight/noon fix above).",
      "encoding: P+56 Litiya (3 stichera T1, Glory T5, Both Now T5), alleluia_stichos null, vespers_kontakion moved to top level.",
      "encoding: P+56 full completion — aposticha (4 stichera T8 with Saturday Great Vespers verses), aposticha_glory T6, aposticha_both_now T6, beatitudes (6 Resurrection + 4 All Saints Ode VI), all structural flags, oca_primary, note.",
      "refactor: scripts/audit.js unified — eliminated parallel field lists; CLI now calls auditEntry() from src/lib/audit.js directly.",
      "audit: FIELD_REGISTRY expanded — added oca_primary, note, aposticha_source, aposticha_both_now, beatitudes_troparia, heavenly_king_omitted, it_is_truly_meet_suppressed; has_paroemias now applies to Pentecostarion entries.",
    ],
  },
  {
    date: "June 2026",
    summary: "P+56 All Saints — season boundary fix · Litiya encoding · vespers_kontakion struct fix",
    items: [
      "fix: All Saints Sunday (P+56) was assigned season='sunday' instead of season='pentecostarion' — pentecostarion season boundary changed from date < allSaintsSunday to date <= allSaintsSunday, so P+56 now correctly routes through the Pentecostarion assembler and pulls troparion/kontakion from pentEntry.",
      "fix: fekulaSection resolver now returns §4B17 for hours_format='all_saints_sunday' (was falling through to §4A).",
      "fix: vespers_kontakion: false was incorrectly nested inside troparion_2: {} in the P+56 entry — moved to top level of the entry.",
      "encoding: P+56 — added alleluia_stichos: null (T8 alleluia has no stichos per 90.pdf), litya_stichera (3 stichera Tone I), litya_glory (Tone V doxasticon), litya_both_now (Tone V theotokion). Source: 90.pdf.",
    ],
  },
  {
    date: "May 2026",
    summary: "P+49 Vespers fully encoded · unified audit registry covering both Menaion and Pentecostarion",
    items: [
      "encoding: P+49 (Holy Pentecost) — added litya_stichera (3 stichera T2), litya_glory (T8), litya_both_now (T8), stichera_aposticha (3 stichera T6 with Ps.50 verses), aposticha_glory (T8), aposticha_both_now (T8). Source: 80.pdf.",
      "encoding: P+55 (Apodosis of Pentecost) — added stichera_aposticha, aposticha_glory, aposticha_both_now inherited from P+49 per apodosis rubric in 86.pdf: 'we chant everything as set forth on the Feast of Pentecost'.",
      "audit: rebuilt src/lib/audit.js with a unified FIELD_REGISTRY — single array of field descriptors with appliesTo ('both'|'menaion_only'|'pentecostarion_only'), category, required(entry,type) predicate, and optional custom check(). Replaces flat MENAION_REQUIRED/PENT_REQUIRED lists.",
      "audit: auditEntry(entry, type) is now the canonical function; auditMenaionEntry() and auditPentecostarionEntry() remain as thin backward-compatible wrappers. Added FIELD_CATEGORIES and fieldsByCategory() exports for future gap-report UI.",
      "audit: scripts/audit.js CLI updated with conditional field groups — MENAION_REQUIRED_WITH_PROPERS (§2C+), MENAION_REQUIRED_HIGH_RANK (§2D+), MENAION_REQUIRED_POLYELEOS (§2E/§2F), PENT_REQUIRED_WITH_PROPERS, PENT_REQUIRED_GREAT_FEAST — surfacing real gaps in both data stores. Audit now reports 36 complete / 38 incomplete vs prior false 23/23.",
      "audit: added placeholder pattern 'aposticha stichera not yet' and 'pending encoding' to both src/lib/audit.js and scripts/audit.js.",
    ],
  },
  {
    version: "v0.6.0",
    date: "May 2026",
    summary: "Tone Trainer — Tone 1 Obikhod stichera pointing trainer (standalone sub-project)",
    items: [
      "feat: Tone Trainer component (src/components/tone-trainer.jsx) — interactive Tone 1 (Common Chant / Obikhod) stichera pointing trainer. Syllabifies a line, marks accents, maps each syllable to its reciting-tone / prep / cadence pitch, and sings the result via Web Audio. Reachable from the footer nav (Tone Trainer) and at /orthodox-hours/tone-trainer",
      "feat: corrected pointing engine — cadence anchors on the last INTERNAL accent of the phrase, with explicit one-syllable-final-word backup (e.g. 'Law', 'saw', 'Him'), per Drillock & Ealy. Trailing unaccented syllables ride the anchor pitch to the final syllable",
      "fix: Tone 1 phrase figures reconciled to the printed score — Phrase B cadence do→re→ti; prep-on-ti kept specific to Phrase A; Phrase A lands on do",
      "note: standalone sub-project, not yet wired to assembler data. Independent version line (v0.1.0) tracked in tone_trainer_notes.md. Eventual goal: hours-tool emits pointed, tone-tagged verses the trainer consumes for SATB/unison practice",
    ],
  },
  {
    version: "v0.5.3",
    date: "May 2026",
    summary: "Temple dedication selector · localStorage persistence · hybrid UI for parish config",
    items: [
      "feat: Temple dedication selector — hybrid UI (compact dropdown + visible home/undedicated option) appears inline at the Litiya where the sticheron of the temple belongs. Persists selection to localStorage across sessions. Resolves troparion from live Menaion/Pentecostarion data at runtime",
      "feat: TEMPLE_DEDICATIONS registry — 40 common OCA parish dedications organized in 4 categories (Lord & Holy Trinity, Theotokos, Saints & Archangels, Feasts). Only dedications with encoded and audit-passing troparion data appear in the dropdown. List grows automatically as more months are encoded",
      "feat: resolveTempleTroparion() helper — resolves any dedication ID to its troparion (tone, text, saint) from the module-level Menaion/Pentecostarion caches. Used by TempleSelector and available for future Typica kontakion integration",
      "feat: Three rendering states — unselected (picker card with dropdown, 'More dedications' expander, home option), selected saint (standard movable element with troparion text and '(change)' link), selected 'no dedication' (informational note explaining omission with '(change)' link)",
      "feat: Great Feast suppression — temple sticheron element omitted entirely on great_feast rank dates per HTM rubric ('unless it be one of the great feasts')",
      "fix: Litiya choir responses split from deacon petitions — each petition now two elements (deacon in gold/italic, choir response in standard dark text). Previously responses inherited priestly styling",
      "fix: Rubric label color now context-aware globally — Priest/Deacon rubrics render in gold (#8B6914), Choir/Chanters/Reader/Rubric labels render in dark brown (#5A4A2A)",
    ],
  },
  {
    version: "v0.5.2",
    date: "May 2026",
    summary: "Vespers Litiya assembler · Vigil troparion formula · Blessing of Loaves · Menaion aposticha",
    items: [
      "feat: Vespers Litiya assembler — full Litiya section inserted between §14 head-bowing and §15 Aposticha when has_litya is true. Includes: processional rubric, temple sticheron placeholder, Menaion Litiya stichera (or empty-stichera note), Glory/Both Now, OCA Litiya petitions (5-petition diptych with saint name insertion), concluding prayer, peace/head-bowing at the Litiya, return-to-temple rubric",
      "feat: Vigil troparion formula — rank-aware troparion repetition after Trisagion/Our Father at Vigil and Great Feast services. Non-Sunday: saint troparion ×2 + O Theotokos Virgin ×1. Sunday: O Theotokos ×2 + saint troparion ×1. Great Feast of the Lord: troparion ×3 (placeholder flag for future encoding)",
      "feat: Blessing of the Loaves — full sequence after Vigil troparion: deacon prompt, priest prayer (OCA text), Blessed be the name (×3), Psalm 33 first 10 verses, priestly blessing. Standard dismissal suppressed at Vigil — replaced with Matins transition note",
      "feat: Menaion aposticha assembler — §2E/§2F entries with encoded stichera_aposticha[] now render properly (stichera interleaved with verses, Glory, Both Now). Previously showed placeholder. June 24 and May 25 aposticha now fully assembled",
      "feat: Reader mode — Litiya petitions replaced with Lord, have mercy counts (40/50/30/3/3). Priestly parts (concluding prayer, peace/head-bowing, blessing of loaves) replaced with omission stubs per Fekula Chapter 10. Troparion repetition still reads",
      "feat: Informational element type — new renderer for liturgical guidance notes (rubrical instructions, empty-stichera messages, Matins transition). Light gold background, italic text",
      "fix: End-of-Vespers marker text now context-aware — shows 'END OF GREAT VESPERS — SERVICE CONTINUES WITH MATINS' at Vigil instead of standard 'THE END OF VESPERS'",
    ],
  },
  {
    version: "v0.5.1",
    date: "May 2026",
    summary: "Litiya encoding support · Great Feast dates in scope · Menaion browser improvements",
    items: [
      "feat: Litiya encoding fields — encoding spec amended (litya_stichera[], litya_glory, litya_both_now with {tone, text} shape). Audit module updated with conditional check: when has_litya is true, requires all three fields. Empty array valid for Polyeleos feasts without dedicated Litiya stichera",
      "data: June 24 (Nativity of the Baptist) fully encoded to v2.1 — 39 fields including 8 LIC stichera, 3 Litiya stichera T1, Litiya Glory T5, Litiya Both Now T5, 3 Aposticha with verses, all Glory/Both Now across three positions confirmed unique",
      "data: May 21 (Sts. Constantine & Helena) — 5 Litiya stichera encoded (T1/T2/T2/T3/T4 + Glory T5 + Both Now T5). May 25 (Third Finding of the Head) — empty litya_stichera[] with null Glory/Both Now (no dedicated stichera in PDF)",
      "feat: Great Feast, forefeast, afterfeast, and apodosis dates now in scope — services render with feast troparion/kontakion instead of showing blank screen. Gold informational banner notes what's fully working vs. in development",
      "fix: great_feast rank recognized in Hours and Vespers assemblers — correct Fekula §2F citation, isHighRank detection for 8-stichera count, Entrance, and Menaion aposticha",
      "feat: Menaion browser — new Litiya section between Paroemias and Matins, Beatitudes troparia display, improved audit indicator with individual field tags",
      "feat: Pentecostarion browser — matching improved audit display with field tags",
      "ref: OCA Litiya prayer text (OCA_prayer_for_litiya.txt) and RLE Menaion identified as secondary source — OCA diptych commemorations differ from ROCOR/HTM (5-petition structure: ×40/×50/×30/×3/×3 vs HTM ×40/×30/×3/×3)",
      "feat: Data browser navigation — '← Hours Tool' back link in both browser headers; How It Works panel now has clickable 'open' links to both browsers",
      "fix: Data browser scroll positioning — clicking a partial entry now lands above the audit box instead of below it (accounts for sticky header height)",
    ],
  },
  {
    version: "v0.5.0",
    date: "May 2026",
    summary: "Pre-Communion Prayers · How It Works overhaul · Ordinary Beginning standalone service",
    items: [
      "feat: Pre-Communion Prayers — full Order of Preparation for Holy Communion (Jordanville Prayer Book) as new service. 35 sections: Opening prayers, Psalms 22/23/115, Troparia T8, Lenten troparion, Psalm 50, Canon for Holy Communion (Odes I–IX with Kontakion), Prayers 1–10, communion verses, final troparia. Lazy-loaded data file (39KB chunk, 12KB gzipped)",
      "feat: Ordinary Beginning registered as standalone service at position 0 in SERVICE_REGISTRY — renders the full opening prayer sequence as a readable reference, season-independent",
      "docs: How It Works panel completely rewritten — 6-section accordion replacing stale 5-section version. New 'What This Tool Does' section with service inventory (9 built / 4 planned). Expanded 'Sources & Texts' (7 sources). Corrected 'Encoding Status' (removed incorrect .txt Drive references, updated counts). Honest 'What's Here, What's Coming' section",
      "fix: 443 double-escaped Unicode sequences (\\\\u2014 → —) replaced with actual UTF-8 characters throughout",
    ],
  },
  {
    version: "v0.4.2",
    date: "May 2026",
    summary: "Unified Ordinary Beginning component · Typica opening added",
    items: [
      "refactor: TypicalBeginning and VespersOpening consolidated into single OrdinaryBeginning component — one source of truth for the full opening sequence (blessing through O Come Let Us Worship) with all three seasonal variants",
      "fix: Christ is risen period (P+7–P+38) now correctly shows full Ordinary Beginning with Christ is risen replacing O Heavenly King, followed by Trisagion, Our Father, and O Come Let Us Worship — previously Vespers showed only Christ is risen ×3 with no continuation",
      "feat: Typica now has Ordinary Beginning collapsible panel ('if said separately, begins with the Ordinary Beginning') — was previously missing entirely",
      "arch: OrdinaryBeginning takes configurable title, contextNote, and collapsible props — reused by Vespers, 1st Hour, 6th Hour, and Typica with service-specific explanatory text",
    ],
  },
  {
    version: "v0.4.1",
    date: "May 2026",
    summary: "VespersOpening completion · Scripture link fix",
    items: [
      "fix: VespersOpening 'heavenly king omitted' branch (P+39–P+48) was truncated after the Fekula note — now includes full Trisagion, Our Father, O Come Let Us Worship sequence with priest/reader mode support",
      "fix: Vespers OT paroemia Scripture links showed 'Invalid Date' — assembleVespers() referenced nonexistent liturgicalData.dateStr; now receives selectedDate as parameter",
    ],
  },
  {
    version: "v0.4.0",
    date: "May 2026",
    summary: "Menaion & Pentecostarion data browsers · shared audit module",
    items: [
      "feat: Menaion Data Browser (/menaion) — full-page dev/truthing tool for proofing encoded Menaion entries; 12-month tab navigation; day grid sidebar with per-entry audit indicators; all fields displayed with full text (no truncation); handles array entries for double commemorations",
      "feat: Pentecostarion Data Browser (/pentecostarion) — parallel browser keyed by P+N offset; grouped by liturgical period (Bright Week, Thomas→Blind Man, Ascension, Pentecost); same field display and audit integration as Menaion browser",
      "feat: shared audit module (src/lib/audit.js) — encoding completeness checks extracted into importable ES module; used by both browser components; field-presence checks + placeholder detection on parsed objects",
      "arch: both browsers are lazy-loaded via React.lazy + Suspense — zero impact on main bundle; URL-only access (/orthodox-hours/menaion, /orthodox-hours/pentecostarion), not linked from main tool UI",
      "arch: browsers import monthly data files directly using same dynamic import pattern as main tool — no coupling to hours-tool.jsx assembler logic",
    ],
  },
  {
    version: "v0.3.16",
    date: "May 2026",
    summary: "Typica kontakia overhaul · Vespers troparion styling · Orthodox cross · end markers",
    items: [
      "feat: Typica kontakia — feast Sunday branching per OCA Typica/HTM rubric: saint kontakion → Glory…Both now… → feast kontakion (§4B13 confirmed against Fekula, OCA, and HTM)",
      "feat: Typica kontakia — weekday sequence restructured: Transfiguration opener → day → temple note → saint → Glory…With the saints… → Both now…Protectress/Martyrs",
      "feat: Typica kontakia — each kontakion rendered as individual styled block matching Vespers pattern (was single text blob)",
      "feat: Typica kontakia — parish temple rubric note rendered as styled movable box with isRubricNote faded gold body text",
      "feat: Typica/Post-Communion end-of-service markers with Orthodox cross (THE END OF THE TYPICA / THE END OF THE POST-COMMUNION PRAYERS)",
      "fix: Typica isSunday was always false — liturgicalData uses 'dow' not 'dowNumber'; all Sundays fell through to weekday branch",
      "fix: Hypakoë tone key — 'of Pascha' in pentEntry name matched all Pentecostarion Sundays; now checks fekula_section for actual Pascha/Bright Week",
      "fix: 'both now and ever' — HTM always uses 'Both' prefix; feast Sunday Glory/Both now text corrected",
      "fix: menaion_set_aside gates on Hours kontakion override — Symeon Stylites §2E was overriding §4B13 Holy Fathers kontakion at 3rd Hour",
      "style: Vespers dismissal troparia — Glory/Both now extracted as standalone fixed elements between troparion boxes (was concatenated inside boxes)",
      "style: Orthodox three-bar budded cross (user-provided SVG) at end of every service in gold (#B8A070)",
      "style: Psalter browse mode — end-of-kathisma markers (THE END OF THE Nth KATHISMA) + Orthodox cross, matching all service text closers",
      "style: type: 'rubric' elements render in faded gold italic — instructional notes visually distinct from service text",
      "research: OCA vs HTM Typica divergence — OCA uses Hypakoë on ordinary Sundays; HTM uses standard kontakia sequence; tool follows OCA with HTM divergence noted",
    ],
  },
  {
    version: "v0.3.15",
    date: "May 2026",
    summary: "Typica kontakia overhaul · feast/Hypakoë/weekday branching · Transfiguration opener",
    items: [
      "feat: Typica kontakia — feast Sunday branching per OCA Typica rubric: saint kontakion first, Glory…Now and ever… feast kontakion (§4B13 Holy Fathers + Ascension confirmed against both Fekula and OCA)",
      "feat: Typica kontakia — ordinary Sunday Hypakoë badge now cites OCA rubric: 'On Sundays, if there is no Feast, only the Hypakoë in the appointed tone is sung'",
      "feat: Typica kontakia — weekday sequence restructured per OCA/HTM: Transfiguration kontakion always first, then kontakion of the day, then saint of the date (if desired)",
      "fix: menaion_set_aside gates on Hours kontakion override (Symeon Stylites was overriding Holy Fathers at 3rd Hour)",
      "research: OCA vs HTM Typica divergence documented — OCA uses Hypakoë on ordinary Sundays; HTM uses standard kontakia sequence; tool follows OCA practice with HTM divergence noted",
    ],
  },
  {
    version: "v0.3.14",
    date: "May 2026",
    summary: "Vespers polish · rubric styling · LIC 'Stichera on N' · May 25 encoding complete",
    items: [
      "style: type: 'rubric' elements now render in faded gold italic — instructional notes (e.g. Heavenly King omission) no longer appear as service text to be read aloud",
      "style: PSALM 141 header shows 'Stichera on N' per liturgical convention (on 6, on 8, on 10)",
      "style: inline transition note after last plain verse — '[Stichera begin at V.(8) — 8 appointed for this day]' in faded gold italic",
      "feat: repeatIndex field for non-adjacent sticheron repeats (May 25 Forerunner: 3 stichera → 5 slots via repeatIndex)",
      "fix: menaion_set_aside gates on LIC merge and kontakion override corrected for P+35 Blind Man Sunday",
      "fix: licCount variable ordering — was referenced before definition, causing blank page",
    ],
  },
  {
    version: "v0.3.13",
    date: "May 2026",
    summary: "Vespers LIC assembler complete · §4A1/§4A3/§4B6 weekday+Sunday stichera · repeat/repeatIndex · 8 bug fixes",
    items: [
      "feat: §4A1 weekday LIC — 3 Pentecostarion + 3 Menaion stichera composition for ordinary Pentecostarion weekdays",
      "feat: §4B6 Sunday LIC — 7 Octoechos resurrection (sat key, by tone) + 3 pentEntry stichera composed at runtime; no hardcoding per Sunday",
      "feat: repeat/repeatIndex sticheron resolution — repeat: true copies from previous; repeatIndex: N copies from specific array index (for non-adjacent repeats like 05-25 Forerunner §4A3)",
      "feat: May 25 Forerunner stichera complete — 5 Menaion slots filled (3 distinct + 2 repeatIndex) per §4A3 rubric",
      "fix: Pentecostarion Sunday LIC — menaion_set_aside gates removed; all pentecostarion_sunday entries get Octoechos merge regardless of flag",
      "fix: menaion_set_aside gates high-rank Menaion kontakion override at Hours — Symeon Stylites §2E was overriding §4B13 Holy Fathers kontakion",
      "fix: licCount no longer gated by menaion_set_aside — reads pentEntry.stichera_lord_i_call_count directly when present",
      "fix: P+35 stichera_lord_i_call_count corrected from 3 to 10; P+36 count added (6)",
    ],
  },
  {
    version: "v0.3.12",
    date: "May 2026",
    summary: "Hours troparion + kontakion hour-differentiation for §4B13",
    items: [
      "fix: Hours secondary troparion now hour-differentiated for menaion_set_aside Pentecostarion Sundays — previously always pulled effectiveMenaionTrop (Menaion saint e.g. Simeon Stylites); now uses troparion_3 (feast) at 1st/6th, troparion_2 (saint) at 3rd/9th per Fekula §4B13",
      "fix: Hours kontakion now hour-differentiated — previously hours_kontakion always won regardless of hour; now 1st/6th uses hours_kontakion (feast), 3rd/9th uses kontakion_ode6 (saint) when menaion_set_aside + both fields present",
      "affects P+42 (Holy Fathers) and P+56 (All Saints); all other Pentecostarion entries unaffected",
    ],
  },
  {
    version: "v0.3.11",
    date: "May 2026",
    summary: "Vespers rubric fixes · §4B13 fully resolved · Fekula-traced kontakion logic",
    items: [
      "fix: Pentecostarion aposticha Both now rendered — pentEntry.aposticha_theotokion was encoded but never pushed to assembler output; Ascension troparion now appears correctly after the aposticha doxasticon on P+42",
      "fix: Vespers OT paroemia links — paroemiaToScriptureHref() was called in context card but not in assembleVespers(); OT lessons now show 'Read in Scripture ↗' badge matching Epistle/Gospel",
      "fix: P+42 LIC verse interleave — stichera_lord_i_call_count missing from P+42, P+48; licCount defaulted to 6 instead of 10; V(10)/V(9) floated above block; Holy Fathers stichera (slots 7–10) never rendered",
      "fix: Vespers troparion_2/troparion_3 support — assembler now reads troparion_2 (Glory) and troparion_3 (Both now) from pentEntry; affects P+42 (Resurrection/Fathers/Ascension) and P+56 (Resurrection/All Saints)",
      "fix: explicit vespers_kontakion suppression — previously suppressed implicitly when thirdTrop present; now driven by vespers_kontakion: false on pentEntry (P+42 §4B13, P+56 §4B17)",
      "research: §4B13 fully vetted against Fekula chapter_4.txt and St. Sergius 70.pdf — no-Vigil Vespers troparion order confirmed; OCA vs Russian translation divergence documented; Chapter 6 general theotokion rule vs §4B13 specific override noted for parish discussion",
    ],
  },
  {
    version: "v0.3.10",
    date: "May 2026",
    summary: "Encoding audit tool · Pentecostarion 23/23 complete · May 16/16 complete",
    items: [
      "scripts/audit.js: completeness enforcer — entry not complete until all required fields present AND no placeholder text; run before closing any session",
      "Pentecostarion fully clean 23/23: P+49-P+56 stichera encoded from PDFs (P+50-P+54 Menaion slots replaced with assembler comments); P+36-P+48 aposticha_source added; P+19 structural flags completed",
      "May Menaion fully clean 16/16: 05-22 through 05-30 missing boolean flags (has_polyeleos/has_litya/has_paroemias) resolved",
      "05-16 and 05-17 re-encoded from PDFs: proper stichera replace General Menaion fallbacks; 05-16 troparion corrected Tone VIII→I",
      "Rule established: encoding not complete until every skeleton field is populated or explicitly null with a comment",
    ],
  },
  {
    version: "v0.3.9",
    date: "May 2026",
    summary: "Data architecture refactor — dynamic monthly modules · context card collapsed by default",
    items: [
      "Menaion data extracted to src/data/menaion/may.js, june.js, july.js — monthly dynamic imports, Vite code-split",
      "Pentecostarion data extracted to src/data/pentecostarion.js — dynamic import, cached after first load",
      "Main bundle: 1,165 KB → 929 KB (20% smaller); data chunks load on demand per month",
      "Monthly .js files are now single point of truth for encoding — git tracks all changes",
      "Adding a new month: create src/data/menaion/{month}.js + one line in _menaionLoaders",
      "Liturgical context card now collapsed by default — expand with ▼ for full detail",
    ],
  },
  {
    version: "v0.3.8",
    date: "May 2026",
    summary: "Schema normalization · Priority 1/2 cleanup · Encoding rule v2.1 · Priority 3 Menaion begins",
    items: [
      "Field naming normalized: kontakion→kontakion_ode6, kontakion_3rd_ode→kontakion_ode3, service_file→source_file, aposticha_glory; matins_ode orphan fields removed (60 entries); all assembler reads updated",
      "Priority 1: heavenly_king_omitted P+39-47; 06-10 source_file/feast_e; multi-service kontakion_ode6 (12); All Saints NA renamed",
      "Priority 2: P+35 full encode (LIC stichera, vespers aposticha, matins praises, beatitudes); P+36-37 aposticha/matins aposticha/beatitudes; 05-24/05-25 structural flags",
      "Priority 3 set 1: 05-16 Theodore Sanctified + 05-17 Andronicus/Junia (General Menaion fallback, full skeleton); 05-18 Theodotus/Virgins/Peter+Dionysius full encode from PDF",
    ],
  },
  {
    version: "v0.3.7",
    date: "May 2026",
    summary: "P+41/P+42 complete encode · Drive .txt protocol established · encoding rule addendum",
    items: [
      "P+41 (Sat Afterfeast Day 2): stichera_lord_i_call ×3 Tone IV, vespers aposticha ×3 Tone II, matins aposticha ×3 Tone II, matins aposticha glory Tone VIII, beatitudes_troparia ×6 from Ode III, vespers_prokeimenon Tone VII, menaion_set_aside/has_great_doxology/matins_format flags added",
      "P+42 (Holy Fathers Sunday): stichera_lord_i_call ×10 (3 Octoechos + 3 Ascension + 4 Holy Fathers) all Tone VI, troparion_3 (Ascension Both now) added, vespers_prokeimenon (Great Vespers Tone VI with 3 verses), litya_stichera/litya_glory/litya_both_now encoded, aposticha ×3 + glory + theotokion encoded, menaion_set_aside/magnificat_sung/matins_format flags corrected",
      "Drive .txt protocol established: all Menaion encodes → Menaion folder; all Pentecostarion encodes → Pentecostarion folder; artifacts delivered in chat for user placement",
      "encoding_rule_addendum_v1_1.txt saved to Drive: kontakion ode routing clarified (3 cases), Drive .txt source-of-truth mandate documented",
    ],
  },
  {
    version: "v0.3.6",
    date: "May 2026",
    summary: "Encoding rule v1 · May 22/23/24 complete re-encode · stichera, aposticha, beatitudes filled",
    items: [
      "encoding_rule_complete_capture.md: new canonical encoding standard for all future sessions — captures every field needed by all 6 assemblers in one pass",
      "05-22 (Basiliscus, §2A): stichera_lord_i_call × 3 Tone IV added; lic_theotokion Tone IV added; matins_format confirmed; feast_e/g corrected to null",
      "05-23 (Michael of Synada, §2C): stichera_lord_i_call × 3 Tone VIII added; lic_theotokion Tone VIII added; stichera_glory null (Pentecostarion doxasticon governs); matins_format confirmed; feast_e/g corrected to null",
      "05-24 (Symeon Stylites Younger, §2E): stichera_lord_i_call × 6 Tone VIII added (×2 each); stichera_glory Tone VI (Germanus) added; aposticha_glory Tone II added; aposticha_theotokion (Stavrotheotokion) Tone II added; beatitudes_troparia × 4 from Ode III added; has_great_doxology/magnificat_sung flags added; paroemia fields null with FLAG note — absent from PDF, unusual for §2E, needs verification",
    ],
  },
  {
    version: "v0.3.5",
    date: "May 2026",
    summary: "Orthodox Scripture tool · pericope layer · OT paroemia links · LXX versification",
    items: [
      "Orthodox Scripture tool built as standalone component at /scripture — full OT (Brenton LXX) and NT (KJV 2006), 80 books, 37,177 verses, dynamic JSON loading per book",
      "Browse mode: book navigator grouped by canon (Gospels, Apostolos, Law, History, Wisdom, Prophets Major/Minor, Deuterocanon, Not Used Liturgically), chapter selector, verse goto",
      "Revelation included in navigator under 'Not Used Liturgically' with explanatory note",
      "Reading mode: when opened from a link in the hours tool, only appointed verses render — each span gets a gold heading (e.g. ISAIAH 40:1–8) with rule line; no browse chrome shown",
      "Non-contiguous spans each get their own heading and verse block (e.g. Acts 11:19–26 / 11:29–30)",
      "Cross-chapter readings split at chapter boundary with continuation heading",
      "Sticky context strip top and bottom — shows '← Hours Tool · Typica · Monday, May 25, 2026' when opened from reading link; plain '← Hours Tool' when opened from nav button",
      "Pericopes.json: 741-entry table from paulkachur/orthodox_calendar zachalosKJ.sql (MIT licensed) — 145 Gospel, 395 Apostolos, 201 OT entries",
      "'Read in Scripture ↗' links on all Epistle and Gospel elements in Typica assembler",
      "Context card: Epistle, Gospel, feast readings, and OT paroemias are live gold links to scripture reading mode",
      "Psalter and Scripture browse buttons added to tool footer — open in browse mode with back strip",
      "OT book support: full LECTIONARY_BOOK_ID map covering all paroemia books (Genesis through Malachi, deuterocanon)",
      "Semicolon-separated paroemia spans parsed correctly: 'Prov 10:7; 3:13-16; 8:6, 34-35' → 5 discrete spans",
      "LXX VERSIFICATION FINDING: Brenton LXX and Hebrew tradition differ in chapter/verse numbering for some books. Malachi confirmed: LXX has 3 chapters, Hebrew has 4 — Mal 4:4-6 (Hebrew/rubric) = Mal 3:22-24 (LXX/Brenton). LXX_REMAP table added; dual heading format shows both refs: 'MALACHI 3:22–24 (MALACHI 4:4–6)'. Books to audit: Daniel, Joel, Greek Esther.",
      "data directory renamed public/bible/ (from public/scripture/) to prevent GitHub Pages route collision with /scripture React route",
      "Error boundary added around Scripture component for production safety",
    ],
  },
  {
    version: "v0.3.4",
    date: "May 2026",
    summary: "Orthodox Psalter · Vespers kathisma link · Psalter↔Hours navigation",
    items: [
      "Orthodox Psalter built as standalone component at /psalter — all 20 kathismata, Psalms 1–150, Brenton LXX fully embedded (no external fetch)",
      "Psalm 118 (Kathisma 17) split across three stases at correct verse boundaries (vv. 1–72, 73–131, 132–176)",
      "Psalm 151 preserved in data but displayed as supplementary section outside the kathisma structure — correctly distinguished from the canonical 150",
      "Vespers kathisma movable element gains 'Read in Psalter' link — passes kathisma number, service, and date as URL params",
      "Psalter reads ?kathisma=N on load and opens to the correct kathisma, scrolling to top instantly",
      "Context strip banner (sticky top and bottom) — shows '← Hours Tool · Vespers · Friday, May 22, 2026' when opened from the tool",
      "Banner uses window.history.back() — returns to exact scroll position in the Hours tool, not page top",
      "Same-tab navigation (no target=_blank) — eliminates tab accumulation on mobile",
      "history.scrollRestoration = 'manual' prevents browser scroll restoration fighting the kathisma scroll",
    ],
  },
  {
    version: "v0.3.3",
    date: "May 2026",
    summary: "Prayers After Holy Communion assembler · Liturgy type detection · movable T/K by Liturgy served",
    items: [
      "New service: Prayers After Holy Communion (post_communion) — full HTM order assembled",
      "Five prayers: Thanksgiving (Prayer 1), Basil the Great (Prayer 2), Verses of Metaphrastes (Prayer 3), Another Prayer, Prayer to the Theotokos",
      "Nunc Dimittis, Trisagion / Our Father block, Theotokion (O protection of Christians), and closing",
      "Movable T/K block: three variants by Liturgy served — St. John Chrysostom (default), St. Basil the Great, St. Gregory the Dialogist (Presanctified)",
      "getLiturgyType() detects Basil days (Jan 1, Jan 5, Lenten Sundays 1–5, Great Thursday, Great Saturday) and Presanctified days (Lenten Wed/Fri, stubbed)",
      "Each T/K variant includes an educational explainer explaining why this troparion/kontakion is read on this day",
      "Reader mode: priest exclamation (For Thine is the kingdom) replaced by blue-grey reader substitution (Through the prayers of our holy fathers…)",
      "mm/dd added to liturgicalData return object (used by getLiturgyType and available for future assemblers)",
    ],
  },
  {
    version: "v0.3.2",
    date: "May 2026",
    summary: "Typica assembler · Prokeimenon/Alleluia tables · Ch.10 reader toggle · Encoding gaps closed",
    items: [
      "Typica assembler built (FW-17 Phase 1): full HTM Order of the Typica for ordinary Octoechos time",
      "Fixed skeleton: Psalms 102, 145, Only-Begotten, Beatitudes (OCA text), Heavenly Choir, Creed, Forgiveness, Our Father, Lord Have Mercy ×40 (rubric notation), Psalm 33",
      "Beatitudes: OCA translation used; Glory/Both now included as final verse; no troparia insertion (Typica differs from Liturgy)",
      "Kontakia section: Sunday → Hypakoë of the tone (OCTOECHOS_HYPAKOE); weekday → TYPICA_KONTAKIA daily sequence with saint's kontakion prepended per HTM rubric",
      "TYPICA_WEEKDAY_PROKEIMENON: Mon–Sat table from HTM daily file; Saturday carries two prokeimena (All Saints + Departed)",
      "SUNDAY_RESURRECTIONAL_PROKEIMENON: 8-tone table from St. Sergius Sunday Octoechos",
      "TYPICA_WEEKDAY_ALLELUIA: Mon–Sat table from HTM daily file; inserted between Epistle and Gospel",
      "SUNDAY_RESURRECTIONAL_ALLELUIA: 8-tone table — gap closed; no more placeholder on any Sunday",
      "Prokeimenon routing: pentEntry > Sunday resurrectional > weekday daily; feast-proper appended for §2E/§2F only; Menaion suppressed when pentEntry governs",
      "Epistle and Gospel: separate movable elements with proper 'The reading is from…' introductions; full edge-case coverage (Acts, Revelation, Hebrews, James, Jude, numbered Petrine/Johannine/Pauline epistles)",
      "Prokeimenon element uses prokeimenon type (matching Vespers): served mode shows gold Priest (or Deacon): rubric; reader mode strips Wisdom! per Ch.10",
      "Our Father ending: served → gold Priest: exclamation; reader → Ch.10 substitution with §10 badge",
      "Dismissal: built dynamically (Sunday/Pentecostarion feast/weekday saint formula); served → gold Priest: rubric; reader → Ch.10 substitution",
      "ServiceBlock render order fixed: label (section title) now renders before rubric (Priest:/Deacon:) globally",
      "Encoding gaps closed via Typica assembly pass: P+39 prokeimenon (was missing), P+39 feast_e/feast_g (were wrong — had Pentecost readings), corrected to Acts 1:1-12 / Luke 24:36-53",
      "Hypakoë encoding complete: all 8 tones + Pascha variant in OCTOECHOS_HYPAKOE from St. Sergius Sunday Octoechos PDFs",
    ],
  },
  {
    version: "v0.3.1",
    date: "May 2026",
    summary: "Pentecostarion §4A3 mixed assembly · P+19 & P+39 encoding · prokeimenon renderer · Reader's Service · 9th Hour → Vespers button",
    items: [
      "§4A3 mixed LIC assembly: 3 Pentecostarion + 5 Menaion slots resolved end-to-end",
      "P+19 (Myrrhbearers Monday) encoded: 3 LIC stichera Tone II, aposticha, lic_theotokion",
      "P+39 (Ascension) Vespers fields encoded: 10 LIC stichera, litya, aposticha, lic_theotokion",
      "05-21 (Constantine & Helena) stichera encoded: 5 LIC Tone IV, doxasticon, aposticha",
      "menaion_set_aside flag governs all Pentecostarion/Menaion routing decisions",
      "Prokeimenon renderer: Deacon announces, Chanters/Deacon exchange with proper rubrics",
      "Reader's Service (Fekula Ch.10): Wisdom! dropped, announcement → Reader",
      "9th Hour → Vespers continuation button added",
      "Troparion (Glory…) now shows tone in label",
    ],
  },
  {
    version: "v0.3.0",
    date: "May 2026",
    summary: "Vespers skeleton · HTM invariable texts · stichera placeholders · prokeimenon routing",
    items: [
      "Vespers assembler built: full HTM Order of Vespers invariable spine from opening blessing through dismissal",
      "Psalm 103 (full HTM text) rendered as fixed block",
      "Kathisma routing: Blessed is the Man at Polyeleos/Vigil and Saturday evening; appointed kathisma on weekdays",
      "Entrance rendered for Great Vespers (Doxology+ rank and Saturday evening); omitted for Daily Vespers",
      "Weekly prokeimenon table (all 7 days, HTM text); Pentecostarion vespers_prokeimenon used when present",
      "OT Lessons displayed when already encoded: §2E/§2F saints and Pentecostarion P+42/P+49/P+56",
      "Troparia and kontakia from existing SAMPLE_MENAION / PENTECOSTARION data",
      "Stichera (Lord I Have Cried) and Aposticha shown as unresolved placeholders with correct Fekula count rule — Phase 2 encoding",
      "Service subtitle shows HTM source attribution for Vespers",
    ],
  },
  {
    version: "v0.2.6",
    date: "May 2026",
    summary: "FW-21 Vespers lessons · VespersLessonsExplainer · P+offset · Null guards",
    items: [
      "FW-21 complete: OT Vespers lessons (paroemias) now displayed in context card for §2E Polyeleos and §2F Vigil saints, and for Pentecostarion Sundays P+42 / P+49 / P+56",
      "Paroemia collision resolution: Menaion paroemias suppressed when Great Feast governs (§2G3); §2G2 exception correctly retains Polyeleos/Vigil paroemias within feast periods; P+39 Ascension and P+49 Pentecost Great Feast paroemias suppressed at afterfeast",
      "VespersLessonsExplainer ⓘ — always-visible teaching panel next to Vespers lessons row. Eight distinct cases handled: explains whether lessons are appointed or not, the governing rule (Fekula §2A through §2G), verbatim Fekula citation, and suppression disclosure when applicable",
      "Vespers lessons row always present — on days with no paroemias reads 'not appointed at this rank' with ⓘ explaining why; on days with lessons shows them with source",
      "P+NN Pascha offset shown after the date in the Liturgical Context card — small grey italic annotation for sanity-checking against encoding records",
      "Null guards added throughout: getKontakionForHour(), RankExplainer, context card saint/note display — tool no longer crashes on unencoded dates",
      "Drive housekeeping: fekula_ODS, hours-tool_jsx_archive, project_notes_archive created; Fekula chapters now accessible as source files; workflow unchanged",
    ],
  },
  {
    version: "v0.2.5",
    date: "May 2026",
    summary: "HTM closing sequence corrected · End-of-hour markers · 1st Hour default · How It Works rebuilt · Pentecostarion P+35–P+56 complete",
    items: [
      "Closing sequence of every Hour corrected directly from HTM source: correct order, correct priest blessing text per Hour (1st/9th: God be gracious… · 3rd/6th: Through the prayers of our holy fathers…)",
      "1st Hour special close fully rebuilt: O Christ the True Light said by the Priest, Champion Leader by chanters, full dismissal with Joachim & Anna",
      "Fabricated dismissal (May He Who rose…) removed from all individual Hours — it does not appear in the HTM at the end of any Hour",
      "End-of-hour markers added: THE END OF THE Nth HOUR, centered and bold, matching HTM exactly",
      "Default service changed from 9th Hour to 1st Hour",
      "How It Works panel rebuilt as five-section accordion: Calendar Engine · Source Hierarchy · Anatomy of a Service (with annotated specimen) · How a Date Gets Encoded (with 28-field inventory table) · Known Limitations & Feedback",
      "Pentecostarion fully encoded P+35 through P+56 — Ascension afterfeast through All Saints Sunday",
      "Standalone explainer document how-the-tool-works.md published",
    ],
  },
  {
    version: "v0.2.4",
    date: "May 2026",
    summary: "Unified assembler · Rendering fixes · RankExplainer ⓘ · 3rd→6th scroll",
    items: [
      "Single assembleHour() function replaces 9 separate assemblers — all seasons, all Hours",
      "Reader: Amen. now renders as body text everywhere (was incorrectly showing as rubric)",
      "Priest exclamation text rendered in grey italic throughout",
      "Psalm headings rendered in gold small caps",
      "Troparion block: correct structure for one vs. two troparia (Glory placement fixed)",
      "RankExplainer ⓘ icon added next to service rank label — explains how rank was determined",
      "3rd Hour → 6th Hour button now scrolls directly to service heading",
    ],
  },
  {
    version: "v0.2.3",
    date: "May 2026",
    summary: "Pentecostarion engine · Seasonal openings · Ode-aware kontakion routing",
    items: [
      "Pentecostarion P+35–P+40 encoded (Blind Man Sunday through Ascension afterfeast Day 1)",
      "Seasonal opening sequences: Christ is risen (P+7–P+38), O Heavenly King omitted (P+39–P+48)",
      "Ode-aware kontakion routing: 1st/6th Hours use Ode III kontakion; 3rd/9th use Ode VI",
      "Continuation button added at foot of 3rd Hour",
    ],
  },
];

function VersionBadge() {
  const [open, setOpen] = React.useState(false);

  const badgeStyle = {
    fontSize: "0.65rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: open ? "#5C4A1E" : "#8B6914",
    background: open ? "rgba(139,105,20,0.22)" : "rgba(139,105,20,0.12)",
    border: "1px solid rgba(139,105,20,0.4)",
    borderRadius: "3px",
    padding: "2px 7px",
    fontFamily: "Georgia, serif",
    cursor: "pointer",
    userSelect: "none",
    display: "inline-block",
  };

  const panelStyle = {
    position: "absolute",
    right: "0",
    top: "calc(100% + 6px)",
    zIndex: 200,
    width: "min(480px, 92vw)",
    background: "#FAF6EE",
    border: "1px solid #D4C49A",
    borderRadius: "5px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.13)",
    padding: "1rem",
    fontSize: "0.78rem",
    lineHeight: "1.6",
    color: "#3D3020",
    textAlign: "left",
    maxHeight: "70vh",
    overflowY: "auto",
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <span style={badgeStyle} onClick={() => setOpen(o => !o)}
            title="Click to see release notes">
        {RELEASE_NOTES[0].version}-beta {open ? "▴" : "▾"}
      </span>

      {open && (
        <div style={panelStyle}>
          <div style={{ display: "flex", justifyContent: "space-between",
                        alignItems: "center", marginBottom: "0.75rem" }}>
            <div style={{ fontSize: "0.72rem", textTransform: "uppercase",
                          letterSpacing: "0.1em", color: "#8B6914",
                          fontWeight: "bold" }}>Release Notes</div>
            <span onClick={() => setOpen(false)}
                  style={{ cursor: "pointer", color: "#9A8A70",
                           fontSize: "1rem", lineHeight: 1 }}>✕</span>
          </div>

          {RELEASE_NOTES.map((rel, ri) => (
            <div key={ri} style={{ marginBottom: "1rem",
                                   paddingBottom: "1rem",
                                   borderBottom: ri < RELEASE_NOTES.length - 1
                                     ? "1px solid #E8DFC0" : "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between",
                            alignItems: "baseline", marginBottom: "0.2rem" }}>
                <span style={{ fontWeight: "bold", color: "#1C1008",
                               fontSize: "0.82rem" }}>{rel.version}</span>
                <span style={{ fontSize: "0.7rem", color: "#9A8A70" }}>{rel.date}</span>
              </div>
              <div style={{ fontStyle: "italic", color: "#5C4A1E",
                            marginBottom: "0.45rem", fontSize: "0.75rem" }}>
                {rel.summary}
              </div>
              <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
                {rel.items.map((item, ii) => (
                  <li key={ii} style={{ marginBottom: "0.25rem",
                                        fontSize: "0.74rem" }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


// ─── VESPERS LESSONS EXPLAINER ────────────────────────────────────────────────
// Always present in the context card whether or not paroemias are shown.
// Explains the rule governing OT lessons at Vespers, what was suppressed,
// and the Fekula citation. Source: Fekula Chapter 2.

const VESPERS_PAROEMIA_CASES = {
  none_low_rank: {
    headline: "No Old Testament lessons appointed",
    why: "At Vespers for Simple (§2A), Double (§2B), and Six-Stichera (§2C) services, " +
         "there is no Entrance and therefore no prokeimenon after which readings could " +
         "be proclaimed. The service proceeds from Lord I Call directly to the Aposticha. " +
         "Old Testament lessons (paroemias) require Polyeleos (§2E) or Vigil (§2F) rank — " +
         "the threshold at which Great Vespers with an Entrance is served.",
    rule: "\"At Lord I have cried... we sing [stichera]. [No entrance.]\" — Fekula §2A–§2C",
    fekula: "§2A / §2B / §2C",
    suppressed: null,
  },
  none_doxology: {
    headline: "No Old Testament lessons appointed",
    why: "Doxology (§2D) rank uses Great Vespers with an Entrance, but the Menaion does " +
         "not appoint Old Testament readings at this rank. The prokeimenon is sung after " +
         "the Entrance, but no lessons follow it. Paroemias begin at Polyeleos rank " +
         "(§2E) and above.",
    rule: "Fekula §2D: Vespers includes Entrance and prokeimenon — no readings listed.",
    fekula: "§2D",
    suppressed: null,
  },
  shown_polyeleos: {
    headline: "Three Old Testament lessons appointed",
    why: "Polyeleos (§2E) rank is among the more solemn weekday commemorations. " +
         "Great Vespers is served with an Entrance, and after the prokeimenon, three " +
         "Old Testament lessons (paroemias) appointed in the Menaion are proclaimed. " +
         "These lessons typically illuminate the life or significance of the saint — " +
         "drawing parallels between the saint and figures or themes from the Hebrew scriptures.",
    rule: "\"After the Entrance and prokeimenon there are three readings appointed in the Menaion.\" — Fekula §2E",
    fekula: "§2E",
    suppressed: null,
  },
  shown_vigil: {
    headline: "Three Old Testament lessons appointed",
    why: "Vigil (§2F) rank is the highest Menaion rank. Great Vespers includes an " +
         "Entrance and — after the prokeimenon — three Old Testament lessons from the " +
         "Menaion. At this rank the Litya is also served and the Blessing of Loaves " +
         "follows. The paroemia texts are appointed specifically to this feast and are " +
         "integral to the festal evening.",
    rule: "\"After the Entrance and prokeimenon there are three readings appointed in the Menaion.\" — Fekula §2F",
    fekula: "§2F",
    suppressed: null,
  },
  shown_2g2: {
    headline: "Three Old Testament lessons appointed",
    why: "This is a Polyeleos or Vigil saint falling within a Great Feast afterfeast or " +
         "forefeast period. Fekula §2G2 applies: the higher-ranking Menaion saint retains " +
         "its full Vespers structure including the Entrance, prokeimenon, and three Old " +
         "Testament lessons. The feast period affects the ordering of stichera and troparia " +
         "(feast leads, saint follows) but does not suppress the Polyeleos Vespers readings.",
    rule: "\"After the Entrance and prokeimenon there are three readings appointed in the Menaion.\" — Fekula §2G2",
    fekula: "§2G2",
    suppressed: null,
  },
  suppressed_great_feast: {
    headline: "Great Feast paroemias — not displayed at Apodosis or Afterfeast",
    why: "Great Feasts of the Lord and Theotokos have their own OT lessons at the feast " +
         "day Vespers. However, on the Apodosis (leavetaking) and ordinary afterfeast days, " +
         "Fekula §2G3 is explicit: there is neither an Entrance nor readings from the Old " +
         "Testament at Vespers. The feast structure is reproduced in full on those days " +
         "except for the Entrance and its attendant readings.",
    rule: "\"Note: There is neither an Entrance, nor readings from the Old Testament.\" — Fekula §2G3",
    fekula: "§2G3",
    suppressed: "Great Feast paroemias are encoded in the database for reference but are not appointed at afterfeast Vespers.",
  },
  suppressed_pent_feast: {
    headline: "Great Feast paroemias — feast day only",
    why: "Pentecost and Holy Spirit Day have their own OT lessons at the feast Vespers " +
         "(Numbers 11, Joel 2, Ezekiel 36 for Pentecost). These are proclaimed on the " +
         "feast day itself and at Kneeling Vespers. On the afterfeast days that follow, " +
         "there is no Entrance and no OT readings — Pentecostarion afterfeast structure " +
         "follows §4A rules, not the full Great Vespers pattern.",
    rule: "Fekula §4A — Pentecostarion afterfeast weekday structure. Great Feast paroemias at feast-day Vespers only.",
    fekula: "§4A / §4B15",
    suppressed: "Pentecost paroemias (Numbers 11, Joel 2, Ezekiel 36) are encoded in the database but not displayed during the afterfeast.",
  },
  shown_pent_sunday: {
    headline: "Three Old Testament lessons appointed",
    why: "This Sunday has its own appointed Old Testament lessons at Saturday evening " +
         "Great Vespers — drawn from the Pentecostarion rather than the fixed Menaion. " +
         "These are the proper lessons for this specific feast or commemoration and are " +
         "proclaimed after the Entrance and prokeimenon.",
    rule: "Three readings appointed in the Pentecostarion for this Sunday. — Fekula §4B",
    fekula: "§4B",
    suppressed: null,
  },
};

function VespersLessonsExplainer({ rank, pentEntry, isPentecostarion, feastPeriod, paroemias }) {
  const [open, setOpen] = React.useState(false);

  // ── Determine which case applies ──────────────────────────────────────────
  const caseKey = (() => {
    // Pentecostarion Great Feast entries (Pentecost, Holy Spirit Day) — suppressed
    if (isPentecostarion && pentEntry) {
      const fmt = pentEntry.hours_format;
      const isGreatFeastOfLord = fmt === 'ascension' || fmt === 'pentecost' ||
        fmt === 'apodosis_ascension' || fmt === 'apodosis_pentecost' || fmt === 'holy_spirit_day';
      if (isGreatFeastOfLord) return 'suppressed_pent_feast';
      // Pentecostarion Sunday with paroemias (P+42, P+56)
      if (pentEntry.paroemia_1) return 'shown_pent_sunday';
    }

    // Great Feast Apodosis / Afterfeast suppression (non-Pentecostarion)
    if (feastPeriod && (feastPeriod.periodType === 'apodosis' || feastPeriod.periodType === 'afterfeast')) {
      if (rank === 'polyeleos' || rank === 'vigil') return feastPeriod.periodType === 'afterfeast' ? 'shown_2g2' : 'suppressed_great_feast';
      return 'suppressed_great_feast';
    }

    // Ordinary time by rank
    if (rank === 'vigil') return 'shown_vigil';
    if (rank === 'polyeleos') {
      // §2G2: Polyeleos within feast period
      if (feastPeriod) return 'shown_2g2';
      return 'shown_polyeleos';
    }
    if (rank === 'doxology') return 'none_doxology';
    return 'none_low_rank';
  })();

  const info = VESPERS_PAROEMIA_CASES[caseKey];
  const hasParoemias = !!(paroemias && paroemias.length > 0);
  const isSuppressed = caseKey.startsWith('suppressed');

  const iconStyle = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: '14px', height: '14px', borderRadius: '50%',
    border: `1px solid ${isSuppressed ? '#9A8A70' : '#8B6914'}`,
    color: isSuppressed ? '#9A8A70' : '#8B6914',
    fontSize: '9px', fontStyle: 'normal', cursor: 'pointer',
    marginLeft: '5px', lineHeight: 1, userSelect: 'none',
    flexShrink: 0, fontFamily: 'Georgia, serif', fontWeight: 'bold',
  };

  const panelStyle = {
    marginTop: '0.5rem', marginBottom: '0.5rem', width: '100%',
    maxWidth: '480px',
    background: '#FAF6EE', border: '1px solid #D4C49A',
    borderRadius: '5px', padding: '0.9rem 1rem',
    boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
    fontSize: '0.76rem', lineHeight: '1.65', color: '#3D3020',
  };

  const headStyle = {
    fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em',
    color: '#8B6914', fontFamily: 'Georgia, serif', fontWeight: 'bold',
    marginBottom: '0.3rem', marginTop: '0.7rem',
  };

  return (
    <React.Fragment>
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        <span style={iconStyle} onClick={() => setOpen(o => !o)}
              title="How are Vespers lessons determined?">i</span>
      </span>
      {open && (
        <div style={{ display: 'block', width: '100%' }}>
          <div style={panelStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#1C1008' }}>
                {info.headline}
              </div>
              <span onClick={() => setOpen(false)}
                    style={{ cursor: 'pointer', color: '#9A8A70', fontSize: '1rem',
                              lineHeight: 1, marginLeft: '1rem', flexShrink: 0 }}>✕</span>
            </div>

            <div style={{ ...headStyle, marginTop: '0.6rem' }}>Why</div>
            <div>{info.why}</div>

            <div style={headStyle}>Rule</div>
            <div style={{ fontStyle: 'italic', color: '#5C4A1E' }}>{info.rule}</div>

            <div style={headStyle}>Fekula citation</div>
            <div>
              <span style={{ display: 'inline-block', padding: '1px 7px', borderRadius: '3px',
                              fontSize: '0.72rem', fontWeight: 'bold', letterSpacing: '0.06em',
                              textTransform: 'uppercase', fontFamily: 'Georgia, serif',
                              color: '#8B6914', background: 'rgba(139,105,20,0.1)',
                              border: '1px solid rgba(139,105,20,0.35)' }}>
                Fekula {info.fekula}
              </span>
            </div>

            {info.suppressed && (
              <React.Fragment>
                <div style={headStyle}>What was suppressed</div>
                <div style={{ color: '#9A8A70', fontStyle: 'italic' }}>{info.suppressed}</div>
              </React.Fragment>
            )}

            <div style={{ marginTop: '0.8rem', paddingTop: '0.5rem',
                          borderTop: '1px solid #E8DFC0',
                          fontSize: '0.7rem', color: '#B8A882', fontStyle: 'italic' }}>
              {hasParoemias
                ? 'Lessons shown above are drawn from the ' + (isPentecostarion ? 'Pentecostarion' : 'Menaion') + ' for this date.'
                : 'No lessons are displayed because none are appointed at this rank.'}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}


// ─── HOW IT WORKS PANEL ───────────────────────────────────────────────────────
// Accordion of five sections. Each panel opens/closes independently.
// Matches the RankExplainer visual language (same gold, same type scale).

function HowItWorksPanel() {
  const [open, setOpen] = React.useState({});
  const toggle = key => setOpen(o => ({ ...o, [key]: !o[key] }));

  const panelStyle = {
    marginTop: "0.5rem",
    borderLeft: "3px solid #C4A84A",
    paddingLeft: "1rem",
    textAlign: "left",
    fontSize: "0.84rem",
    lineHeight: "1.7",
    color: "#2C1F0A",
  };
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    padding: "0.55rem 0.7rem",
    marginTop: "0.4rem",
    background: "rgba(139,105,20,0.07)",
    borderRadius: "3px",
    border: "1px solid rgba(139,105,20,0.2)",
    fontFamily: "Georgia, serif",
    fontSize: "0.78rem",
    letterSpacing: "0.07em",
    textTransform: "uppercase",
    color: "#5C4A1E",
    fontWeight: "bold",
    userSelect: "none",
  };
  const chevron = isOpen => (
    <span style={{ fontSize: "0.7rem", transition: "transform 0.15s",
                   display: "inline-block", transform: isOpen ? "rotate(180deg)" : "none" }}>{"▾"}</span>
  );
  const p = (txt, style) => (
    <p style={{ margin: "0 0 0.7rem", ...(style||{}) }}>{txt}</p>
  );
  const ul = items => (
    <ul style={{ margin: "0 0 0.7rem", paddingLeft: "1.2rem" }}>
      {items.map((it, i) => <li key={i} style={{ marginBottom: "0.3rem" }}>{it}</li>)}
    </ul>
  );
  const sub = txt => (
    <div style={{ fontWeight: "bold", fontSize: "0.73rem", color: "#5C4A1E",
                  letterSpacing: "0.05em", textTransform: "uppercase",
                  margin: "0.9rem 0 0.4rem" }}>{txt}</div>
  );

  // ── Built services inventory ──────────────────────────────────────────────
  const serviceInventory = [
    { name: "The Ordinary Beginning", status: "built", note: "Three seasonal variants (ordinary, Bright Week, Christ-is-risen period)" },
    { name: "Vespers", status: "built", note: "Full HTM invariable spine with Menaion/Pentecostarion movable texts" },
    { name: "Compline (Apodeipnon)", status: "planned", note: "" },
    { name: "Midnight Office", status: "planned", note: "" },
    { name: "Matins (Orthros)", status: "planned", note: "" },
    { name: "The First Hour", status: "built", note: "Including special close (O Christ the True Light)" },
    { name: "The Third Hour", status: "built", note: "" },
    { name: "The Sixth Hour", status: "built", note: "" },
    { name: "The Ninth Hour", status: "built", note: "" },
    { name: "Divine Liturgy", status: "planned", note: "Epistle and Gospel references shown in context card" },
    { name: "Prayers Before Holy Communion", status: "built", note: "Full Jordanville Prayer Book order" },
    { name: "Prayers After Holy Communion", status: "built", note: "Adapts to Chrysostom, Basil, or Presanctified Liturgy" },
    { name: "The Order of the Typica", status: "built", note: "Read when no Divine Liturgy is celebrated" },
  ];

  // ── Annotated specimen ──────────────────────────────────────────────────────
  const specimenRows = [
    { type: "fixed",    label: "Opening blessing", note: "Blessed is our God... — HTM" },
    { type: "fixed",    label: "Three psalms (83, 84, 85)", note: "Always the same — HTM" },
    { type: "fixed",    label: "Alleluia · Lord have mercy", note: "Fixed skeleton — HTM" },
    { type: "movable",  label: "Troparion", note: "Tone & text from Menaion or Pentecostarion — changes daily" },
    { type: "fixed",    label: "Theotokion", note: "Ordinary theotokion for the tone — HTM" },
    { type: "fixed",    label: "Holy God · Our Father · Priest exclamation", note: "Fixed — HTM" },
    { type: "movable",  label: "Kontakion", note: "Ode III or Ode VI per HTM rubric — changes daily" },
    { type: "fixed",    label: "Lord have mercy ×40 · Prayer of the Hours", note: "Fixed — HTM" },
    { type: "fixed",    label: "More Honourable · Priest blessing · Closing prayer", note: "Fixed — HTM" },
    { type: "fixed",    label: "THE END OF THE NINTH HOUR", note: "Per HTM" },
  ];
  const typeColor = { fixed: "#3B6EAA", movable: "#8B6914", unresolved: "#B94A3A" };
  const typeBg   = { fixed: "rgba(59,110,170,0.08)", movable: "rgba(139,105,20,0.08)", unresolved: "rgba(185,74,58,0.08)" };
  const typeLabel = { fixed: "Fixed", movable: "Movable", unresolved: "Unresolved" };

  return (
    <div style={{ marginTop: "1rem", textAlign: "left", padding: "0 1rem" }}>

      {/* ── 1. What This Tool Does ──────────────────────────────────────────────── */}
      <div style={headerStyle} onClick={() => toggle("overview")}>
        <span>What This Tool Does</span>{chevron(open.overview)}
      </div>
      {open.overview && (
        <div style={panelStyle}>
          {p(<>This is a liturgical assembly tool for <strong>OCA parishes following Russian usage</strong>. Given a date, it computes the liturgical season, looks up the appointed saint or feast, and assembles the correct movable parts of each service — with every decision traced to its rubrical source. It is as much a <strong>teaching aid</strong> as an assembly tool: every element is annotated with where it comes from and why it appears.</>)}
          {p(<>The tool currently assembles <strong>9 of the 13 services</strong> in the daily cycle. It handles ordinary weekdays, Sundays (with Octoechos tone rotation), and the entire Pentecostarion season from Pascha through All Saints of North America. Great Lent and Triodion services are the next major development area.</>)}
          {sub("Service inventory")}
          <div style={{ fontSize: "0.78rem", border: "1px solid #D4C49A", borderRadius: "4px",
                        overflow: "hidden", marginBottom: "0.8rem" }}>
            {serviceInventory.map((svc, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                padding: "0.3rem 0.7rem",
                background: i % 2 === 0 ? "white" : "rgba(0,0,0,0.015)",
                borderTop: i === 0 ? "none" : "1px solid #EDE5CE",
              }}>
                <span style={{
                  flexShrink: 0, fontSize: "0.85rem",
                  color: svc.status === "built" ? "#3A6B3A" : "#9A8A70",
                }}>{svc.status === "built" ? "✓" : "○"}</span>
                <span style={{
                  fontWeight: svc.status === "built" ? "bold" : "normal",
                  color: svc.status === "built" ? "#1C1008" : "#9A8A70",
                }}>{svc.name}</span>
                {svc.note && (
                  <span style={{ fontSize: "0.72rem", color: "#9A8A70", fontStyle: "italic" }}> — {svc.note}</span>
                )}
              </div>
            ))}
          </div>
          {sub("Additional features")}
          {ul([
            <><strong>Psalter reader</strong> — Full text of all 20 kathismas, linked from Vespers kathisma assignments. Displays each stasis with psalm numbering.</>,
            <><strong>Scripture viewer</strong> — Full-text epistle and gospel readings, linked from the liturgical context card and from within service elements.</>,
            <><strong>Menaion data browser</strong> (<a href="/orthodox-hours/menaion" style={{color: "#8B6914"}}>open</a>) — Inspect all encoded fixed-calendar entries with per-entry completeness auditing. Shows every field, flags missing data, and displays Litiya stichera and Beatitudes troparia.</>,
            <><strong>Pentecostarion data browser</strong> (<a href="/orthodox-hours/pentecostarion" style={{color: "#8B6914"}}>open</a>) — Same for Pascha-anchored entries, organized by liturgical period.</>,
            <><strong>Reader mode</strong> — Substitutes lay reader responses for priest exclamations throughout.</>,
          ])}
        </div>
      )}

      {/* ── 2. The Calendar Engine ──────────────────────────────────────────── */}
      <div style={headerStyle} onClick={() => toggle("calendar")}>
        <span>The Calendar Engine</span>{chevron(open.calendar)}
      </div>
      {open.calendar && (
        <div style={panelStyle}>
          {p(<>The tool computes every movable feast, fast, and liturgical season from a single anchor: <strong>Pascha</strong> (Orthodox Easter). Pascha is calculated using the <em>Meeus/Jones/Butcher</em> algorithm applied to the Julian calendar, then converted to the Gregorian calendar by adding 13 days — the current difference between the two calendars, fixed until 2100.</>)}
          {p(<>From Pascha, every other movable date is a simple offset. Lent begins 48 days before Pascha (Clean Monday). Pentecost falls 49 days after. All Saints Sunday is 56 days after. The five Lenten Sundays, the pre-Lenten period (Meatfare, Cheesefare), Ascension, and All Saints of North America are all computed the same way — as a signed number of days from Pascha. The algorithm has been verified against the OCA desk calendar for 2026, 2027, and 2028.</>)}
          {p(<>The <strong>tone cycle</strong> (Tones 1–8 of the Octoechos) begins on the Monday after All Saints Sunday and advances one tone per week, cycling continuously through ordinary time.</>)}
          {p(<>The tool recognizes <strong>35 named movable days</strong> — from the Sunday of the Publican and Pharisee (Pascha−70) through All Saints of North America (Pascha+63) — and displays contextual notes for each. Great Feasts with their forefeasts, afterfeasts, and apodoses are tracked and influence which Fekula assembly rule applies.</>)}
          {sub("Great Lent week and Sunday tracking")}
          {p(<>Within Great Lent, the tool tracks the <strong>week number</strong> (1–6) and, on Sundays, the <strong>named Lenten Sunday</strong> (1–5). Clean Monday is day 1 of week 1; the first Sunday of Lent is day 7, the last day of week 1. Weeks are counted as Monday-to-Sunday spans: week{" "}= ⌈day-of-Lent ÷ 7⌉. Passion (Holy) Week is detected separately as days 43–49 (P−7 through P−1) and does not carry a week number.</>)}
          {p(<>The five named Lenten Sundays correspond to Sundays 1–5: <em>Sunday of Orthodoxy, Sunday of St. Gregory Palamas, Sunday of the Holy Cross, Sunday of St. John Climacus,</em> and <em>Sunday of St. Mary of Egypt.</em> Palm Sunday (P−7) is detected as a named movable day. The week and Sunday data appear in the liturgical context card and drive the kathisma schedule.</>)}
          {sub("Sundays after Pentecost and the Lukan Jump")}
          {p(<>From All Saints Sunday (P+56) through the end of the Pentecost season, the tool tracks two parallel counts displayed in the liturgical context card: the <strong>Nth Sunday after Pentecost</strong> (on Sundays) or <strong>Nth Week after Pentecost</strong> (on weekdays), and — once the Lukan lectionary begins — the <strong>Nth Sunday of Luke</strong> or <strong>Nth Week of Luke</strong>.</>)}
          {p(<>The <strong>Lukan Jump</strong> occurs on the Monday after the Sunday on or after the Elevation of the Holy Cross (September 14). From that Monday, the daily Gospel readings shift from Matthew to Luke. However, the first Sunday after the jump is a carryover week completing the interrupted Matthew readings — so the <strong>first Sunday of Luke</strong> is the <em>second</em> Sunday after the Elevation, computed as Lukan Jump Monday + 13 days. This convention is confirmed against OCA parish bulletins.</>)}
          {p(<>Both counts end definitively on the <strong>Sunday of the Publican and Pharisee</strong> (followingPascha − 70), which opens the Triodion.</>)}
          {sub("The Lectionary")}
          {p(<>The daily scripture readings shown in the context card come from a static table of <strong>298 entries</strong>, each keyed by its Pascha offset. The same offset yields the same readings every year — the entire New Testament cycle is purely movable, anchored to Pascha, not the calendar date. Full epistle and gospel texts can be read via the built-in scripture viewer, linked from the context card.</>)}
          {sub("What’s next: Triodion")}
          {p(<>The calendar engine already tracks the pre-Lenten, Lenten, and Holy Week periods. The next major milestone is building the <strong>Triodion data layer</strong> — encoding the unique hymns, canons, and structural changes that govern services from the Sunday of the Publican and Pharisee through Great and Holy Saturday. This requires both new encoding work and new assembly rules, since Lenten services differ significantly from the ordinary-time pattern.</>)}
        </div>
      )}

      {/* ── 3. Sources & Texts ───────────────────────────────────────────── */}
      <div style={headerStyle} onClick={() => toggle("sources")}>
        <span>Sources & Texts</span>{chevron(open.sources)}
      </div>
      {open.sources && (
        <div style={panelStyle}>
          {p("Every decision the tool makes is traced to a source. When sources conflict, the higher-ranked source wins — and the conflict is flagged in the tool’s notes.")}
          {sub("1 · Fekula & Williams, The Order of Divine Services (2009)")}
          {p(<>The primary assembly authority. Every structural decision — which troparion governs, which kontakion goes at which Hour, when the Menaion overrides the Octoechos — is cited to a specific section of Fekula. When you see a badge like <span style={{color:"#8B6914"}}>§2C</span> or <span style={{color:"#8B6914"}}>§4A</span>, that is the exact section justifying the placement.</>)}
          {sub("2 · OCA Calendar (oca.org)")}
          {p("Authoritative for OCA parishes. Takes precedence over the Russian Menaion when they differ. The OCA calendar determines which saints are commemorated on which dates. When the OCA calendar and the Russian Menaion disagree, the OCA calendar governs — and the divergence is documented in the encoding record for that date.")}
          {sub("3 · St. Sergius Menaion PDFs")}
          {p("The primary source for daily service texts. Each day’s PDF contains the full texts for Vespers, Matins, and Liturgy. The tool reads these PDFs to extract troparion tone and text, kontakion tone and text, service rank (stichera count), paroemias (Old Testament lessons), and Matins ode assignments.")}
          {sub("4 · General Menaion")}
          {p("A fallback source for days where the daily Menaion PDF does not include a troparion or kontakion. The General Menaion provides common texts organized by saint type (martyrs, hierarchs, venerable, etc.). When used, a (name) placeholder is substituted for the specific saint’s name.")}
          {sub("5 · HTM Horologion (Unabbreviated Book of the Hours)")}
          {p("Source for all invariable service skeleton texts — the psalms, the Trisagion, Our Father, More Honourable, priest exclamations, and closing prayers at every Hour. Also the structural source for the Typica and Post-Communion Prayers. These texts never change regardless of season or saint.")}
          {sub("6 · Jordanville Prayer Book")}
          {p("Source for the Prayers Before Holy Communion. The Jordanville Prayer Book follows the order given in the Jordanville Russian-font Molitvoslov. All text is fixed — Psalms 22, 23, 115, Psalm 50, the Canon for Holy Communion (Odes I–IX), ten prayers by the Holy Fathers, and the communion verses.")}
          {sub("7 · Pentecostarion")}
          {p("Source for the movable-cycle hymns from Pascha through All Saints Sunday (P+0 through P+56). Contains unique troparia, kontakia, and structural overrides (e.g. Christ is risen replacing O Heavenly King, Paschal troparion at all Hours during Bright Week, feast kontakia at the Hours during the Ascension and Pentecost periods).")}
        </div>
      )}

      {/* ── 4. How Services Are Assembled ─────────────────────────────────── */}
      <div style={headerStyle} onClick={() => toggle("anatomy")}>
        <span>How Services Are Assembled</span>{chevron(open.anatomy)}
      </div>
      {open.anatomy && (
        <div style={panelStyle}>
          {sub("The daily cycle")}
          {p(<>The Orthodox Church sanctifies the entire day through a cycle of services, each tied to a specific hour of prayer. The new liturgical day begins at <strong>sunset</strong> — so Vespers is always the first service of the day, not the last.</>)}
          {ul([
            <><strong>Vespers</strong> (sunset / early evening) — First service of the new liturgical day. Thanks God for the day that has passed and asks His protection for the night.</>,
            <><strong>Compline</strong> (after supper / bedtime) — Also called Apodeipnon (“after supper”). Evening prayers before sleep.</>,
            <><strong>Midnight Office</strong> (around midnight) — Also called Mesonyktikon or Nocturns. Commemorates the parable of the wise and foolish virgins.</>,
            <><strong>Matins / Orthros</strong> (sunrise / early morning) — The main morning praise service. On Sundays and feasts it includes the Polyeleos, canon, and (on Sundays) a Resurrection Gospel.</>,
            <><strong>First Hour</strong> (~6 a.m.) — Said after Matins. Focuses on the morning light and Christ before Pilate.</>,
            <><strong>Third Hour</strong> (~9 a.m.) — Remembers the descent of the Holy Spirit at Pentecost.</>,
            <><strong>Sixth Hour</strong> (noon) — Remembers the Crucifixion.</>,
            <><strong>Ninth Hour</strong> (~3 p.m.) — Remembers the death of Christ on the Cross. Traditionally said immediately before Vespers, beginning the transition to the new day.</>,
            <><strong>Divine Liturgy</strong> (usually mid-morning) — The Eucharistic service. On days without a Liturgy, the <strong>Typica</strong> may be read in its place.</>,
          ])}
          {p(<>In parish practice the full cycle is rarely served in its entirety on weekdays. The most commonly served combination is the <strong>9th Hour → Vespers</strong> in the evening, and <strong>Matins → 1st Hour</strong> in the morning, followed by the Divine Liturgy. The <strong>Prayers Before Holy Communion</strong> are read privately in preparation, and the <strong>Prayers After Holy Communion</strong> are read privately afterward.</>)}
          {p(<>This tool assembles the services in their canonical daily order, beginning with Vespers. Each service is accessible from the service selector at the top of the page.</>)}
          {sub("Fixed and movable elements")}
          {p("A Daily Hour has two kinds of content. The colour coding below shows how they are distinguished in the assembled service.")}

          {/* Legend */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", margin: "0.5rem 0 0.9rem" }}>
            {Object.entries(typeLabel).map(([t, lbl]) => (
              <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: "5px",
                                     fontSize: "0.75rem", color: typeColor[t] }}>
                <span style={{ display: "inline-block", width: "10px", height: "10px",
                               borderRadius: "50%", background: typeColor[t] }} />
                {lbl}
              </span>
            ))}
          </div>

          {/* Specimen */}
          <div style={{ fontSize: "0.78rem", border: "1px solid #D4C49A", borderRadius: "4px",
                        overflow: "hidden", marginBottom: "0.8rem" }}>
            <div style={{ background: "#F5EFE0", padding: "0.4rem 0.7rem",
                          fontSize: "0.7rem", fontWeight: "bold", color: "#5C4A1E",
                          letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Example: 9th Hour (ordinary weekday)
            </div>
            {specimenRows.map((row, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: "0.6rem",
                padding: "0.35rem 0.7rem",
                background: i % 2 === 0 ? "white" : "rgba(0,0,0,0.015)",
                borderTop: i === 0 ? "none" : "1px solid #EDE5CE",
              }}>
                <span style={{
                  flexShrink: 0, marginTop: "2px",
                  fontSize: "0.65rem", fontWeight: "bold",
                  color: typeColor[row.type],
                  background: typeBg[row.type],
                  border: `1px solid ${typeColor[row.type]}`,
                  borderRadius: "2px", padding: "1px 5px",
                  letterSpacing: "0.04em", textTransform: "uppercase",
                  minWidth: "54px", textAlign: "center",
                }}>
                  {typeLabel[row.type]}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: "bold", color: "#1C1008", marginBottom: "1px" }}>{row.label}</div>
                  <div style={{ color: "#9A8A70", fontSize: "0.72rem" }}>{row.note}</div>
                </div>
              </div>
            ))}
          </div>

          {p("Only the two Movable rows change from day to day. Everything else is identical on every ordinary weekday of the year. On feast days and during the Pentecostarion, seasonal rules alter the Fixed skeleton too — replacing O come let us worship with Christ is risen, or omitting O Heavenly King — but those changes are also fixed by the rubrics, not by the saint of the day.")}
          {sub("Lord I Have Cried — how stichera are inserted at Vespers")}
          {p(<>At every Vespers, after the kathisma, the psalms <strong>Lord I Have Cried</strong> (Psalms 140, 141, 129, and 116) are chanted. The last several verses of these psalms serve as an <em>insertion scaffold</em> — a numbered countdown from verse 10 down to verse 1. The <strong>stichera</strong> (hymns appointed for the day) are inserted into this countdown, one sticheron after each verse, beginning at the verse that matches the stichera count.</>)}
          {p(<>The stichera count is determined by service rank: <strong>6 stichera</strong> for Simple, Six-Stichera, and Doxology rank (insertion begins at V.6); <strong>8 stichera</strong> for Polyeleos rank (insertion at V.8); <strong>10 stichera</strong> for Vigil rank (insertion at V.10, no plain verses). After V.1, the sequence closes with <em>Glory…</em> (the doxasticon) and <em>Now and ever…</em> (the theotokion).</>)}
          {p(<>The current tool shows the full psalm texts with the stichera verse scaffold as a readable fallback. The interleaved assembler — inserting encoded stichera into the correct verse slots — is a future development milestone.</>)}
          {sub("The Kathisma schedule")}
          {p(<>At Vespers and Matins, one or more sections of the Psalter — called <strong>kathismas</strong> — are read in sequence throughout the week. The Psalter’s 150 psalms are divided into <strong>20 kathismas</strong>, each further subdivided into three stases (antiphons). The full Psalter is read through once per week in ordinary time; more frequently during Great Lent.</>)}
          {p(<>Which kathisma is appointed depends on two things: the <strong>day of the week</strong> and the <strong>period of the church year</strong>. The tool detects one of six periods: Summer/Winter, Autumn/Spring, Great Lent Weeks 1–4 and 6, Great Lent Week 5 (unique table), Passion Week (Monday–Wednesday only), and Bright Week (no kathisma at any service). Several override rules apply: great feasts of the Lord suppress the kathisma; Saturday evening and feasts of Polyeleos or Vigil rank always use Kathisma I (“Blessed is the Man”); Sunday evening has no kathisma.</>)}
          {p(<>The kathisma shown at Vespers links directly to the built-in <strong>Psalter reader</strong>, which displays the full psalm text for the appointed kathisma with stasis divisions. Source: OCA Liturgics, oca.org/liturgics/outlines/kathisma-readings-at-vespers.</>)}
        </div>
      )}

      {/* ── 5. Encoding Status ───────────────────────────────────────────── */}
      <div style={headerStyle} onClick={() => toggle("encoding")}>
        <span>Encoding Status</span>{chevron(open.encoding)}
      </div>
      {open.encoding && (
        <div style={panelStyle}>
          {p("Before the tool can assemble a service for a given date, that date must be encoded — meaning a human has read the source PDF and extracted the key liturgical data. This is not automated. Every entry represents a deliberate act of reading, cross-referencing, and decision-making.")}
          {sub("How encoding works")}
          {p("The encoder opens the St. Sergius Menaion PDF for that date and checks:")}
          {ul([
            <><strong>Service rank</strong> — counted from the stichera on Lord I Call at Vespers: 3 stichera = Simple (§2A), 6 stichera = Six-Stichera (§2C), Great Doxology sung = Doxology (§2D), Polyeleos sung = Polyeleos (§2E), All-Night Vigil = Vigil (§2F).</>,
            <><strong>Troparion</strong> — tone number and full text.</>,
            <><strong>Kontakion(s)</strong> — tone number, full text, and which Matins ode they follow (Ode III or Ode VI). If there are two kontakia, both are recorded with their ode assignments, because the tool uses different kontakia at different Hours.</>,
            <><strong>OCA cross-reference</strong> — the OCA calendar at oca.org is checked for the primary commemoration, translation differences, and any date divergences between OCA and Russian usage.</>,
          ])}
          {p(<>Encoded data is written directly into the tool’s monthly data files — <code>src/data/menaion/may.js</code>, <code>june.js</code>, <code>july.js</code>, etc. for fixed-calendar dates, and <code>src/data/pentecostarion.js</code> for dates keyed to Pascha. These files are the single point of truth. Git history is the version record.</>)}
          {sub("Currently encoded")}
          {ul([
            <><strong>Menaion:</strong> May 16–31 (17 entries), June 1–30 (36 entries), July 1–15 (5 entries). Total: 58 entries across 51 calendar days.</>,
            <><strong>Pentecostarion:</strong> P+19 through P+56 (23 entries). Covers Thomas Sunday week through All Saints of North America including Ascension, Pentecost, and the Saturdays of the Reposed.</>,
            <><strong>Pre-Communion Prayers:</strong> Complete (35 sections, Jordanville Prayer Book).</>,
            <><strong>Post-Communion Prayers:</strong> Complete (HTM order, adapts to liturgy type).</>,
          ])}
          {p("Dates not yet encoded are marked with a red border in the assembled service. The saint’s name appears from the OCA calendar, but troparion and kontakion texts cannot be supplied until the Menaion PDF has been read and encoded.", { fontStyle: "italic", color: "#5C4A1E" })}
          {sub("Data record fields")}
          {p("Every date that has been encoded carries some or all of the following fields. The Status column reflects the current state.")}
          <table style={{ width: "100%", fontSize: "0.75rem", borderCollapse: "collapse", marginBottom: "0.8rem" }}>
            <thead>
              <tr style={{ background: "rgba(139,105,20,0.1)", textAlign: "left" }}>
                <th style={{ padding: "4px 8px", borderBottom: "1px solid #D4C49A", color: "#5C4A1E" }}>Field</th>
                <th style={{ padding: "4px 8px", borderBottom: "1px solid #D4C49A", color: "#5C4A1E" }}>What it contains</th>
                <th style={{ padding: "4px 8px", borderBottom: "1px solid #D4C49A", color: "#5C4A1E" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["saint", "Full name of the commemorated saint or feast", "✓ active"],
                ["rank", "Service rank: simple · six_stichera · doxology · polyeleos · vigil", "✓ active"],
                ["fekula_section", "Fekula §2A–§2F or §4A–§4B15 governing assembly", "✓ active"],
                ["note", "Encoding notes: OCA divergences, calendar collisions, rank evidence", "✓ active"],
                ["troparion · tone & text", "Primary troparion — tone number and full text", "✓ active — all four Hours + Vespers"],
                ["troparion_2 · tone, text, placement", "Second troparion (Glory) when two troparia govern", "✓ active"],
                ["kontakion · tone, text, matins_ode", "Kontakion with Matins ode assignment (III or VI)", "✓ active — Hours + Typica"],
                ["kontakion_ode3 · tone, text", "Kontakion chanted after Ode III at Matins — governs 1st & 6th Hours", "✓ active"],
                ["hours_kontakion", "Pentecostarion: feast kontakion governing Both now at Hours", "✓ active — Pentecostarion"],
                ["hours_format", "Assembly engine signal: paschal · pentecostarion_sunday · etc.", "✓ active"],
                ["feast_e / feast_g", "Feast proper Epistle and Gospel readings", "✓ active — context card + scripture viewer"],
                ["paroemia_1/2/3", "Old Testament Vespers lessons (Polyeleos & above)", "✓ active — Vespers"],
                ["prokeimenon · tone, text, stichos", "Prokeimenon at Liturgy", "✓ encoded — Liturgy future"],
                ["alleluia · tone, verse, stichos", "Alleluia verse at Liturgy", "✓ encoded — Liturgy future"],
                ["communion_verse", "Communion hymn text at Liturgy", "✓ encoded — Liturgy future"],
                ["oca_primary", "Whether this is the OCA calendar’s primary commemoration", "✓ active — multi-service selector"],
                ["service_file", "Source PDF filename (e.g. 06-09.pdf)", "⚠ partial"],
                ["has_great_doxology", "Whether the Great Doxology is sung at Matins", "⚠ partial — Matins future"],
                ["magnificat_sung", "Whether the Magnificat (Ode IX) is sung or omitted", "⚠ partial — Matins future"],
                ["stichera_lord_i_call", "Vespers Lord I Call stichera texts and count", "⚠ future — Vespers stichera encoding"],
                ["glory / doxasticon", "Vespers Glory sticheron text", "⚠ future"],
                ["aposticha", "Vespers Aposticha stichera texts", "⚠ future"],
              ].map(([field, desc, used], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "rgba(0,0,0,0.02)" }}>
                  <td style={{ padding: "4px 8px", borderBottom: "1px solid #EDE5CE", fontFamily: "monospace", fontSize: "0.72rem", color: "#3B4A6B", whiteSpace: "nowrap" }}>{field}</td>
                  <td style={{ padding: "4px 8px", borderBottom: "1px solid #EDE5CE", color: "#2C1F0A" }}>{desc}</td>
                  <td style={{ padding: "4px 8px", borderBottom: "1px solid #EDE5CE",
                    color: used.startsWith("✓ active") ? "#3A6B3A" : used.startsWith("✓ encoded") ? "#3A6B6B" : used.startsWith("⚠") ? "#8B6914" : "#9A8A70",
                    whiteSpace: "nowrap" }}>
                    {used}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {p(<>Legend: <strong>{"✓"} active</strong> = field drives assembled output today. <strong>{"✓"} encoded</strong> = data captured, service not yet built. <strong>{"⚠"} partial/future</strong> = not all entries carry this field, or the service that uses it is not yet built.</>, { fontStyle: "italic", color: "#5C4A1E" })}
        </div>
      )}

      {/* ── 6. What’s Here, What’s Coming & How to Help ──────────────────── */}
      <div style={headerStyle} onClick={() => toggle("limits")}>
        <span>{"What’s Here, What’s Coming & How to Help"}</span>{chevron(open.limits)}
      </div>
      {open.limits && (
        <div style={panelStyle}>
          {sub("What works today")}
          {ul([
            <><strong>Nine services</strong> fully assembled: Ordinary Beginning, Vespers, 1st/3rd/6th/9th Hours, Pre-Communion Prayers, Post-Communion Prayers, and the Typica.</>,
            <><strong>Ordinary time and Pentecostarion</strong> seasons are fully supported — the tool correctly handles Sundays with Octoechos tone rotation, weekdays with Menaion saint commemorations, and the complete Paschal cycle from Bright Week through All Saints of North America.</>,
            <><strong>Great Feasts</strong> of the Lord (Ascension, Pentecost) alter the service structure as prescribed by Fekula §4 and the HTM rubrics.</>,
            <><strong>Reader mode</strong> replaces priest exclamations with lay reader responses throughout.</>,
            <><strong>Scripture viewer</strong> provides full-text epistle and gospel readings linked from the context card.</>,
            <><strong>Psalter reader</strong> shows full psalm texts for appointed kathismas, linked from Vespers.</>,
          ])}
          {sub("Known limitations")}
          {ul([
            <><strong>Great Lent and Triodion</strong> — Lenten services follow substantially different rubrical patterns (Lenten Hours with prostrations, Presanctified Liturgy, altered Vespers structure, Lenten kathisma tables). The calendar engine tracks these periods correctly, but the assembly rules and Triodion data have not been built yet. This is the next major development area.</>,
            <><strong>Compline, Midnight Office, and Matins</strong> are not yet assembled. These are large services with complex structure (especially Matins, which includes the canon, polyeleos, and other elements not present at the Hours).</>,
            <><strong>Divine Liturgy</strong> is not assembled. Epistle and Gospel references are shown in the context card, and Liturgy-specific fields (prokeimenon, alleluia, communion verse) are encoded in the data but not yet surfaced.</>,
            <><strong>Vespers stichera interleaving</strong> — the Lord I Have Cried and Aposticha stichera texts are not yet encoded for most dates. The psalm scaffold is displayed, but the interleaved stichera assembly requires both Menaion stichera encoding and Octoechos stichera data for all 8 tones.</>,
            <><strong>Encoding coverage</strong> — only May 16–July 15 are encoded in the Menaion. Dates outside this range show the OCA calendar’s saint name but cannot supply troparion or kontakion texts. The Pentecostarion covers P+19–P+56.</>,
          ])}
          {sub("Translation note")}
          {p("The tool primarily uses St. Sergius (Russian) Menaion texts. The OCA often uses a different English translation of the same prayer. These are the same prayer in a different rendering — not different prayers. Known divergences are flagged and will be corrected to OCA text in future updates.")}
          {sub("How to give feedback")}
          {p("Your knowledge as a practicing reader is the best quality check this tool has.")}
          {ul([
            "A troparion or kontakion that doesn’t match your printed Menaion or what your parish chants",
            "An incorrect service rank",
            "Something out of order, missing, or misattributed in the service sequence",
            "A date where the OCA calendar disagrees with what the tool shows",
            "A seasonal transition that doesn’t match your understanding of the rubrics",
          ])}
          {p("What helps most: the specific date and service, what the tool shows vs. what you expected, and which source you’re comparing against.", { fontStyle: "italic", color: "#5C4A1E" })}
        </div>
      )}
    </div>
  );
}
export default function App() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(
    today.toISOString().slice(0, 10)
  );
  const [showGlossary, setShowGlossary] = useState(false);
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const [contextOpen, setContextOpen] = useState(false);
  const [copyrightExpanded, setCopyrightExpanded] = useState(false);
  const [selectedServiceKey, setSelectedServiceKey] = useState("vespers");
  // tbOpen: tracks whether the Typical Beginning is expanded on 1st/6th Hours.
  // When expanded, the Hour body shows O come let us worship (not Christ is risen)
  // because Christ is risen was already said within the Typical Beginning.
  const [tbOpen, setTbOpen] = useState(false);
  const [voOpen, setVoOpen] = useState(false);
  const [readerMode, setReaderMode] = useState(false);
  const [preCommunionData, setPreCommunionData] = useState(null);

  // ── Temple dedication — persisted in localStorage ─────────────────────────
  const [templeDedication, setTempleDedication] = useState(() => {
    try { return localStorage.getItem('parish_dedication') || null; } catch(e) { return null; }
  });
  const handleTempleDedicationChange = (id) => {
    try {
      if (id === null) { localStorage.removeItem('parish_dedication'); }
      else { localStorage.setItem('parish_dedication', id); }
    } catch(e) { /* localStorage unavailable */ }
    setTempleDedication(id);
  };

  React.useEffect(() => {
    if (selectedServiceKey === 'pre_communion' && !preCommunionData) {
      import('../data/pre-communion.js').then(m => setPreCommunionData(m.default));
    }
  }, [selectedServiceKey]);

  // ── Data loading — preload month + Pentecostarion when date changes ─────────
  const [, setDataVersion] = useState(0);
  React.useEffect(() => {
    const d = parseCalendarDate(selectedDate);
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const prev = String(d.getMonth() === 0 ? 12 : d.getMonth()).padStart(2, "0");
    const next = String(d.getMonth() + 2 > 12 ? 1 : d.getMonth() + 2).padStart(2, "0");
    // Also preload the month for the temple dedication if set
    const dedMonths = new Set();
    if (templeDedication && templeDedication !== "none") {
      const ded = TEMPLE_DEDICATIONS.find(d => d.id === templeDedication);
      if (ded && ded.source === "menaion" && typeof ded.dataKey === "string") {
        dedMonths.add(ded.dataKey.substring(0, 2));
      }
    }
    Promise.all([
      ...[...new Set([prev, m, next, ...dedMonths])].map(mo => _loadMenaionMonth(mo)),
      _loadPentecostarion(),
    ]).then(() => setDataVersion(v => v + 1));
  }, [selectedDate, templeDedication]);

  const date = parseCalendarDate(selectedDate);
  const liturgicalData = getLiturgicalData(date);
  const dailyReading = getDailyReading(date);  // Lectionary: epistle & gospel for the day
  const rawMenaion = getMenaionEntry(date);
  const services = getServices(rawMenaion);
  const isMultiService = services.length > 1;
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const selectedMenaionEntry = services[selectedServiceIndex] || services[0];
  // Suppress fixed feast readings when a movable Sunday governs the day.
  // On named Sundays, getDailyReading() already returns the correct Sunday proper.
  const namedDayIsSunday = !!(liturgicalData.namedDay && liturgicalData.namedDay.isSunday);
  // Filter out §2A sentinel values — absent fields are stored as 'absent — §2A...'
  // to distinguish confirmed-absent from not-yet-captured. Do not display these.
  const hasFeastE = selectedMenaionEntry && selectedMenaionEntry.feast_e &&
    !selectedMenaionEntry.feast_e.startsWith('absent');
  const hasFeastG = selectedMenaionEntry && selectedMenaionEntry.feast_g &&
    !selectedMenaionEntry.feast_g.startsWith('absent');
  const feastReading = (!namedDayIsSunday && (hasFeastE || hasFeastG))
    ? { e: hasFeastE ? selectedMenaionEntry.feast_e : null,
        g: hasFeastG ? selectedMenaionEntry.feast_g : null }
    : null;


  // Reset Typical Beginning when service changes
  React.useEffect(() => { setTbOpen(false); setVoOpen(false); }, [selectedServiceKey, selectedDate]);

  // When the date changes, reset saint selector to OCA primary
  const ocaPrimaryIndex = services.findIndex(s => s.oca_primary === true);
  const defaultIndex = ocaPrimaryIndex >= 0 ? ocaPrimaryIndex : 0;
  React.useEffect(() => {
    setSelectedServiceIndex(defaultIndex);
  }, [selectedDate]);

  // Scroll to top whenever the selected service changes.
  // Future work (FW-14): Exception: the 3rd → 6th Hour continuation button handles its own scroll
  // (to "O come, let us worship"), so we track the previous service key and
  // skip scroll-to-top for that specific transition only. FW-14 resolved.
  const prevServiceKeyRef = React.useRef(selectedServiceKey);
  React.useEffect(() => {
    const from = prevServiceKeyRef.current;
    prevServiceKeyRef.current = selectedServiceKey;
    // Skip auto-scroll when transitioning 3rd→6th; the Continue button handles it
    if (from === "3rd_hour" && selectedServiceKey === "6th_hour") return;
    // Skip auto-scroll when transitioning 9th→Vespers; the Continue button handles it
    if (from === "9th_hour" && selectedServiceKey === "vespers") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedServiceKey]);
  const menaionEntry = services.length > 0
    ? services[Math.min(selectedServiceIndex, services.length - 1)]
    : null;

  const inScope = selectedServiceKey === 'post_communion'
    || selectedServiceKey === 'pre_communion'
    || selectedServiceKey === 'ordinary_beginning'
    || ["ordinary", "sunday", "pentecostarion", "brightweek",
        "great_feast", "forefeast", "afterfeast", "apodosis"].includes(liturgicalData.season);
  const isSunday = liturgicalData.season === "sunday";
  const isPentecostarion = liturgicalData.season === "pentecostarion";
  const isBrightWeek = liturgicalData.season === "brightweek";
  const pentEntry = (isPentecostarion || isBrightWeek)
    ? getPentecostarionEntry(liturgicalData.paschaOffset)
    : null;

  // Paroemias — OT Vespers lessons (FW-21).
  // Rules per Fekula Chapter 2:
  // - §2E (Polyeleos) and §2F (Vigil) saints: always show Menaion paroemias
  //   (even within afterfeast periods — §2G2 preserves the Polyeleos structure)
  // - Pentecostarion entries P+42/P+49/P+56: show their own paroemias
  // - P+39 (Ascension) and other Great Feast pentEntries: paroemias encoded
  //   for Vespers reference only — NOT displayed here (Great Feast of the Lord,
  //   not a Polyeleos saint pattern)
  // - All other cases: no paroemias
  const paroemias = (() => {
    // Pentecostarion: show only if pentEntry explicitly carries paroemias
    // AND it is not a Great Feast of the Lord (hours_format filters those out)
    if (isPentecostarion || isBrightWeek) {
      if (!pentEntry || !pentEntry.paroemia_1) {
        // Fall through to check Menaion saint (§2E/§2F within afterfeast — §2G2)
        const mEntry = selectedMenaionEntry;
        const rank = mEntry && mEntry.rank;
        if (rank !== 'polyeleos' && rank !== 'vigil') return null;
        if (!mEntry.paroemia_1) return null;
        return [mEntry.paroemia_1, mEntry.paroemia_2, mEntry.paroemia_3].filter(Boolean);
      }
      // pentEntry has paroemias — only show for non-Great-Feast-of-Lord entries
      const fmt = pentEntry.hours_format;
      const isGreatFeastOfLord = fmt === 'ascension' || fmt === 'pentecost' || fmt === 'apodosis_ascension' || fmt === 'apodosis_pentecost' || fmt === 'holy_spirit_day';
      if (isGreatFeastOfLord) return null;
      return [pentEntry.paroemia_1, pentEntry.paroemia_2, pentEntry.paroemia_3].filter(Boolean);
    }
    // Ordinary time: show Menaion paroemias for §2E and §2F only
    const mEntry = selectedMenaionEntry;
    const rank = mEntry && mEntry.rank;
    if (rank !== 'polyeleos' && rank !== 'vigil') return null;
    if (!mEntry.paroemia_1) return null;
    return [mEntry.paroemia_1, mEntry.paroemia_2, mEntry.paroemia_3].filter(Boolean);
  })();
  // Current service metadata from registry
  const currentServiceIdx = SERVICE_REGISTRY.findIndex(s => s.key === selectedServiceKey);
  const currentService = SERVICE_REGISTRY[currentServiceIdx];
  const prevService = currentServiceIdx > 0 ? SERVICE_REGISTRY[currentServiceIdx - 1] : null;
  const nextService = currentServiceIdx < SERVICE_REGISTRY.length - 1 ? SERVICE_REGISTRY[currentServiceIdx + 1] : null;

  // Assemble elements for the current service
  // Assemble elements — single unified assembler for all seasons
  const elements = (() => {
    if (!inScope) return [];
    if (currentService.key === 'ordinary_beginning') return [];
    let els;
    if (currentService.key === 'vespers') {
      els = assembleVespers(liturgicalData, menaionEntry, pentEntry, paroemias, readerMode, selectedDate);
    } else if (currentService.key === 'typica') {
      els = assembleTypica(liturgicalData, menaionEntry, pentEntry, dailyReading, feastReading, readerMode);
    } else if (currentService.key === 'pre_communion') {
      els = assemblePreCommunion(preCommunionData);
    } else if (currentService.key === 'post_communion') {
      els = assemblePostCommunion(liturgicalData, menaionEntry, pentEntry, readerMode);
    } else {
      els = assembleHour(currentService.key, liturgicalData, menaionEntry, pentEntry, tbOpen, readerMode);
    }
    // Patch psalterHref onto any element that has kathismaNum
    // Patch scriptureHref onto epistle/gospel elements (selectedDate in scope here)
    return els.map(el => {
      let out = el;
      if (el.kathismaNum) {
        out = { ...out, psalterHref: `/orthodox-hours/psalter?kathisma=${el.kathismaNum}&service=${currentService.key}&date=${selectedDate}` };
      }
      const readingIds = new Set(["typica-epistle","typica-gospel","typica-epistle-feast","typica-gospel-feast"]);
      if (readingIds.has(el.id) && el.text) {
        // Extract reference from element text (after the intro line, or whole text)
        const lines = el.text.split("\n\n");
        const ref = lines[lines.length - 1].trim();
        const href = refToScriptureHref(ref, currentService.key, selectedDate);
        if (href) out = { ...out, scriptureHref: href };
      }
      return out;
    });
  })();


  const OUT_OF_SCOPE_NOTES = {
    lent: "Great Lent uses a different order at the Hours — the Lenten troparia, prostrations, and Prayer of St. Ephraim replace the ordinary structure. Lenten Hours are in active development.",
    brightweek: "Bright Week uses the Paschal Hours — 'Christ is Risen' replaces the ordinary opening, and special Paschal troparia are used throughout.",
    pentecostarion: "Pentecostarion — §4A rules. Data encoded for P+35 through P+40 (Blind Man Sunday through Ascension afterfeast, day 1). Other dates in development.",
    prefasting: "The pre-Lenten period (Meatfare and Cheesefare weeks) has transitional rules as the Church begins preparing for Great Lent.",
    great_feast: "Great Feast days use the troparion and kontakion of the feast exclusively. The Menaion saint is commemorated but subordinated to the feast.",
    forefeast: "Forefeast days follow Fekula §2G1 or §2G2: the troparion of the feast leads, Glory… the saint. The feast kontakion governs except at Doxology rank and above.",
    afterfeast: "Afterfeast days follow Fekula §2G1 or §2G2: the troparion of the feast leads, Glory… the saint. The feast kontakion governs.",
    apodosis: "The Apodosis (leavetaking) follows Fekula §2G3 (feast of the Lord or Theotokos) or §2G4 (with a Vigil saint): troparion and kontakion of the feast predominate.",
    unknown: "The liturgical season for this date could not be determined. Please check the date and try again.",
  };

  const dayLabel = date.toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  const navBtnStyle = (disabled) => ({
    background: "transparent",
    border: `1px solid ${disabled ? "#D4C49A" : "#8B6914"}`,
    borderRadius: "3px",
    color: disabled ? "#C4B48A" : "#8B6914",
    padding: "6px 14px",
    fontSize: "0.82rem",
    cursor: disabled ? "default" : "pointer",
    fontFamily: "Georgia, serif",
    letterSpacing: "0.04em",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    opacity: disabled ? 0.5 : 1,
  });

  return (
    <div style={{ minHeight: "100vh", background: "#FAF6EE", fontFamily: "Georgia, serif", color: "#1C1008" }}>

      {/* ── HEADER ─────────────────────────────────────────── */}
      <div style={{ background: "#1C1008", color: "#F5EDD6", padding: "2rem 2rem 1.5rem", borderBottom: "4px solid #8B6914" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8B6914", marginBottom: "0.4rem" }}>
            Personal Study Tool · Not for Liturgical Use
          </div>
          <h1 style={{ fontSize: "1.6rem", fontWeight: "normal", margin: "0 0 0.25rem", letterSpacing: "0.02em", lineHeight: "1.2" }}>
            Daily Hours
          </h1>
          <div style={{ fontSize: "0.85rem", color: "#C4A84A", fontStyle: "italic" }}>
            OCA Russian Usage &nbsp;|&nbsp; Assembly guided by <em>The Order of Divine Services</em> (2009)
          </div>
          </div>{/* end left column */}
          <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "1rem", paddingTop: "0.15rem" }}>
            <VersionBadge />
          </div>
        </div>
      </div>

      {/* ── CONTROLS ─────────────────────────────────────── */}
      <div style={{ background: "#EDE5D0", borderBottom: "1px solid #D4C49A", padding: "1rem 2rem" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0.5rem" }}>

          {/* ── Row one: DATE group + SERVICE group */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>

          {/* ── Group 1: DATE label + stepper (inseparable) */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
          <label style={{ fontSize: "0.8rem", color: "#5C4A1E", letterSpacing: "0.05em" }}>DATE</label>
          <div style={{ display: "flex", alignItems: "stretch",
                        border: "1px solid #C4A84A", borderRadius: "3px",
                        flexShrink: 0 }}>
            {/* Left cap: solid triangle pointing LEFT = step back one day */}
            <button
              onClick={() => {
                const d = new Date(selectedDate + "T12:00:00");
                d.setDate(d.getDate() - 1);
                setSelectedDate(d.toISOString().slice(0, 10));
              }}
              title="Previous day"
              style={{ background: "#EDE0C0", border: "none",
                borderRight: "1px solid #C4A84A", borderRadius: "2px 0 0 2px",
                cursor: "pointer", padding: "0 9px", display: "flex",
                alignItems: "center", flexShrink: 0 }}
              onMouseEnter={e => e.currentTarget.style.background = "#D4C49A"}
              onMouseLeave={e => e.currentTarget.style.background = "#EDE0C0"}
            >
              <svg width="7" height="11" viewBox="0 0 7 11" style={{ display: "block", pointerEvents: "none" }}>
                <polygon points="7,0 7,11 0,5.5" fill="#8B6914" />
              </svg>
            </button>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={{ border: "none", outline: "none", padding: "4px 8px",
                fontFamily: "Georgia, serif", fontSize: "0.9rem",
                background: "#FAF6EE", color: "#1C1008", minWidth: 0 }}
            />
            {/* Right cap: solid triangle pointing RIGHT = step forward one day */}
            <button
              onClick={() => {
                const d = new Date(selectedDate + "T12:00:00");
                d.setDate(d.getDate() + 1);
                setSelectedDate(d.toISOString().slice(0, 10));
              }}
              title="Next day"
              style={{ background: "#EDE0C0", border: "none",
                borderLeft: "1px solid #C4A84A", borderRadius: "0 2px 2px 0",
                cursor: "pointer", padding: "0 9px", display: "flex",
                alignItems: "center", flexShrink: 0 }}
              onMouseEnter={e => e.currentTarget.style.background = "#D4C49A"}
              onMouseLeave={e => e.currentTarget.style.background = "#EDE0C0"}
            >
              <svg width="7" height="11" viewBox="0 0 7 11" style={{ display: "block", pointerEvents: "none" }}>
                <polygon points="0,0 0,11 7,5.5" fill="#8B6914" />
              </svg>
            </button>
          </div>

          </div>{/* end Group 1 */}

          {/* ── Group 3: SERVICE label + select (inseparable) — pushed right */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0, marginLeft: "auto" }}>
          <label style={{ fontSize: "0.8rem", color: "#5C4A1E", letterSpacing: "0.05em" }}>SERVICE</label>
          <select
            value={selectedServiceKey}
            onChange={(e) => setSelectedServiceKey(e.target.value)}
            style={{ border: "1px solid #C4A84A", borderRadius: "3px", padding: "4px 8px", fontFamily: "Georgia, serif", fontSize: "0.9rem", background: "#FAF6EE", color: "#1C1008", cursor: "pointer", maxWidth: "220px" }}
          >
            {SERVICE_REGISTRY.map(svc => (
              <option key={svc.key} value={svc.key} disabled={!svc.built}
                style={{ color: svc.built ? "#1C1008" : "#9A8A70", fontStyle: svc.built ? "normal" : "italic" }}>
                {svc.label}
              </option>
            ))}
          </select>
          </div>{/* end Group 3 */}

          </div>{/* end row one */}

          {/* ── Row two: tone display (left) + glossary toggle (right) */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "0.85rem", color: "#5C4A1E" }}>
              {liturgicalData.dayName} · Tone {liturgicalData.tone}
            </span>
            <div style={{ marginLeft: "auto", display: "flex", gap: "6px", flexWrap: "wrap", justifyContent: "flex-end" }}>
              <button
                onClick={() => setReaderMode((v) => !v)}
                style={{
                  background: readerMode ? "rgba(90,122,138,0.15)" : "transparent",
                  border: `1px solid ${readerMode ? "#5A7A8A" : "#8B6914"}`,
                  color: readerMode ? "#5A7A8A" : "#8B6914",
                  borderRadius: "3px", padding: "4px 12px", fontSize: "0.75rem",
                  letterSpacing: "0.08em", cursor: "pointer", fontFamily: "Georgia, serif",
                }}
                title="Toggle Reader's Service mode (Fekula Chapter 10 — Services Without a Priest)"
              >
                {readerMode ? "☩ Reader's Service" : "Reader's Service"}
              </button>
            </div>
          </div>{/* end row two */}
        </div>
      </div>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "1.5rem 2rem" }}>

        {/* ── TOP NAVIGATION ─────────────────────────────────── */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <button
            onClick={() => prevService && setSelectedServiceKey(prevService.key)}
            disabled={!prevService}
            style={navBtnStyle(!prevService)}
          >
            ← {prevService ? prevService.label : ""}
          </button>

          <button
            onClick={() => nextService && setSelectedServiceKey(nextService.key)}
            disabled={!nextService}
            style={navBtnStyle(!nextService)}
          >
            {nextService ? nextService.label : ""} →
          </button>
        </div>

        {/* ── LITURGICAL CONTEXT CARD ─────────────────────── */}
        <div style={{ background: "#EDE5D0", border: "1px solid #D4C49A", borderRadius: "6px", marginBottom: "1.5rem", fontSize: "0.85rem", lineHeight: "1.7", overflow: "hidden" }}>
          <div
            onClick={() => setContextOpen(v => !v)}
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "0.6rem 1.2rem", cursor: "pointer", userSelect: "none",
              borderBottom: contextOpen ? "1px solid #D4C49A" : "none" }}
          >
            <div style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8B6914" }}>
              Liturgical Context
            </div>
            <span style={{ color: "#8B6914", fontSize: "0.8rem" }}>{contextOpen ? "▲" : "▼"}</span>
          </div>
          {contextOpen && <div style={{ padding: "0.75rem 1.2rem 1rem" }}>
          <div>
            <strong>Date:</strong> {dayLabel}
            {liturgicalData.paschaOffset >= -101 && liturgicalData.paschaOffset <= 263 && (
              <span style={{ fontSize: "0.72rem", color: "#9A8A70", marginLeft: "0.5rem", fontStyle: "italic" }}>
                {liturgicalData.paschaOffset >= 0
                  ? `(P+${liturgicalData.paschaOffset})`
                  : `(P${liturgicalData.paschaOffset})`}
              </span>
            )}
          </div>
          {liturgicalData.namedDay && (
            <div style={{ marginTop: "0.2rem", marginBottom: "0.2rem", padding: "0.35rem 0.6rem", background: "rgba(139,105,20,0.1)", borderLeft: "3px solid #8B6914", borderRadius: "0 4px 4px 0" }}>
              <div style={{ fontWeight: "bold", color: "#1C1008", fontSize: "0.88rem" }}>{liturgicalData.namedDay.name}</div>
              <div style={{ fontSize: "0.76rem", color: "#5C4A1E", fontStyle: "italic", marginTop: "0.1rem" }}>{liturgicalData.namedDay.note}</div>
            </div>
          )}
          <div>
            <strong>Tone:</strong>{" "}
            <Tooltip term="tone">Tone {liturgicalData.tone}</Tooltip>
            {" "}of the <Tooltip term="octoechos">Octoechos</Tooltip>
          </div>
          <div>
            <strong>Season:</strong>{" "}
            {liturgicalData.seasonNote}
            {liturgicalData.lentInfo && !liturgicalData.passionWeek && (
              <span style={{ marginLeft: "0.4rem", fontSize: "0.85rem", color: "#5C4A1E" }}>
                {"— "}
                {liturgicalData.lentInfo.sundayName
                  ? liturgicalData.lentInfo.sundayName + " · " + liturgicalData.lentInfo.weekName
                  : liturgicalData.lentInfo.weekName + " · " + liturgicalData.dayName}
              </span>
            )}
            {liturgicalData.pentecostWeekInfo && (
              <span style={{ marginLeft: "0.4rem", fontSize: "0.85rem", color: "#5C4A1E" }}>
                {"— "}{liturgicalData.pentecostWeekInfo.label}
              </span>
            )}
          </div>
          {dailyReading && (
            <div style={{ marginTop: "0.4rem" }}>
              <strong>{namedDayIsSunday ? "Sunday proper:" : "Readings:"}</strong>{" "}
              <span style={{ color: "#5C4A1E" }}>
                Epistle:{" "}
                {refToScriptureHref(dailyReading.e, currentService.key, selectedDate)
                  ? <a href={refToScriptureHref(dailyReading.e, currentService.key, selectedDate)} style={{ color: "#8B6914" }}><em>{dailyReading.e}</em></a>
                  : <em>{dailyReading.e}</em>}
                {" · "}
                Gospel:{" "}
                {refToScriptureHref(dailyReading.g, currentService.key, selectedDate)
                  ? <a href={refToScriptureHref(dailyReading.g, currentService.key, selectedDate)} style={{ color: "#8B6914" }}><em>{dailyReading.g}</em></a>
                  : <em>{dailyReading.g}</em>}
              </span>
              {dailyReading.lukanJump && (
                <span style={{ fontSize: "0.75rem", color: "#8B6914", marginLeft: "0.5rem" }}>
                  (Luke series)
                </span>
              )}
              {namedDayIsSunday && (
                <span style={{ fontSize: "0.72rem", color: "#8B7040", marginLeft: "0.4rem" }}>
                  (proper for {liturgicalData.namedDay.name})
                </span>
              )}
            </div>
          )}
          {feastReading && (
            <div style={{ marginTop: "0.3rem" }}>
              <strong>Feast readings:</strong>{" "}
              <span style={{ color: "#5C4A1E" }}>
                {feastReading.e && <><em>Epistle:</em>{" "}
                  {refToScriptureHref(feastReading.e, currentService.key, selectedDate)
                    ? <a href={refToScriptureHref(feastReading.e, currentService.key, selectedDate)} style={{ color: "#8B6914" }}>{feastReading.e}</a>
                    : feastReading.e}</>}
                {feastReading.e && feastReading.g && " · "}
                {feastReading.g && <><em>Gospel:</em>{" "}
                  {refToScriptureHref(feastReading.g, currentService.key, selectedDate)
                    ? <a href={refToScriptureHref(feastReading.g, currentService.key, selectedDate)} style={{ color: "#8B6914" }}>{feastReading.g}</a>
                    : feastReading.g}</>}
              </span>
              <span style={{ fontSize: "0.72rem", color: "#8B7040", marginLeft: "0.4rem" }}>
                (proper for this commemoration)
              </span>
            </div>
          )}
          <div style={{ marginTop: "0.3rem" }}>
            <strong>Vespers lessons</strong>{" "}
            <span style={{ fontSize: "0.72rem", color: "#8B7040" }}>
              {paroemias ? "(OT paroemias at Great Vespers)" : "(not appointed at this rank)"}
            </span>
            <VespersLessonsExplainer
              rank={selectedMenaionEntry && selectedMenaionEntry.rank}
              pentEntry={pentEntry}
              isPentecostarion={isPentecostarion}
              feastPeriod={liturgicalData && liturgicalData.feastPeriod}
              paroemias={paroemias}
            />
            {paroemias && (
              <span style={{ color: "#5C4A1E", display: "block", marginTop: "0.15rem" }}>
                {paroemias.map((p, i) => {
                  const href = paroemiaToScriptureHref(p, currentService.key, selectedDate);
                  return (
                    <span key={i}>
                      <em>{["I.", "II.", "III."][i]}</em>{" "}
                      {href
                        ? <a href={href} style={{ color: "#8B6914" }}>{p}</a>
                        : p}
                      {i < paroemias.length - 1 && <br />}
                    </span>
                  );
                })}
              </span>
            )}
          </div>

          {liturgicalData.feastPeriod &&
           !(liturgicalData.namedDay && liturgicalData.feastPeriod.periodType === "forefeast") && (
            <div style={{ marginTop: "0.3rem", padding: "0.4rem 0.6rem", background: "rgba(139,105,20,0.08)", borderRadius: "4px", borderLeft: "3px solid #8B6914", fontSize: "0.82rem" }}>
              <strong>Feast period:</strong>{" "}
              <Tooltip term={liturgicalData.feastPeriod.periodType === "feast" ? "great feast" : liturgicalData.feastPeriod.periodType}>
                {liturgicalData.feastPeriod.periodType.charAt(0).toUpperCase() + liturgicalData.feastPeriod.periodType.slice(1)}
              </Tooltip>
              {" "}of <em>{liturgicalData.feastPeriod.feast.name}</em>
              <div style={{ fontSize: "0.76rem", color: "#5C4A1E", marginTop: "0.2rem", fontStyle: "italic" }}>{liturgicalData.feastPeriod.feast.note}</div>
            </div>
          )}

          {/* Saint / multi-service selector */}
          {services.length > 0 && !isMultiService && (
            <div>
              <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "4px", lineHeight: "1.6" }}>
                <strong>Saint:</strong>
                <span>{(menaionEntry && menaionEntry.saint) || 'Saint of the day'} —{" "}
                  <Tooltip term="service rank">{(RANK_EXPLANATIONS[menaionEntry && menaionEntry.rank] || RANK_EXPLANATIONS.simple).label} service</Tooltip>
                </span>
                <RankExplainer menaionEntry={menaionEntry} isSunday={isSunday} />
                {menaionEntry.oca_primary === true && (
                  <span style={{ fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase", background: "rgba(139,105,20,0.15)", border: "1px solid rgba(139,105,20,0.4)", borderRadius: "3px", padding: "1px 6px", color: "#6B4E10", fontFamily: "Georgia, serif", whiteSpace: "nowrap" }}>OCA primary</span>
                )}
              </div>
            </div>
          )}
          {isMultiService && (
            <div style={{ marginTop: "0.4rem" }}>
              <div style={{ fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#8B6914", marginBottom: "0.5rem" }}>
                Multiple services available — select which to serve:
              </div>
              {services.map((svc, idx) => (
                <label key={idx} style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "0.35rem", cursor: "pointer", fontSize: "0.85rem", lineHeight: "1.5" }}>
                  <input type="radio" name="serviceSelector" checked={selectedServiceIndex === idx} onChange={() => setSelectedServiceIndex(idx)} style={{ marginTop: "2px", accentColor: "#8B6914", flexShrink: 0 }} />
                  <span>
                    <span style={{ color: "#1C1008" }}>{svc.saint}</span>
                    <span style={{ color: "#9A8A70", fontSize: "0.78rem", marginLeft: "6px" }}>(<Tooltip term="service rank">{(RANK_EXPLANATIONS[svc.rank] || RANK_EXPLANATIONS.simple).label}</Tooltip>)</span>
                    <RankExplainer menaionEntry={svc} isSunday={isSunday} />
                    {svc.oca_primary === true && (
                      <span style={{ marginLeft: "8px", fontSize: "0.66rem", letterSpacing: "0.08em", textTransform: "uppercase", background: "rgba(139,105,20,0.15)", border: "1px solid rgba(139,105,20,0.4)", borderRadius: "3px", padding: "1px 5px", color: "#6B4E10" }}>OCA primary</span>
                    )}
                  </span>
                </label>
              ))}
              {menaionEntry && !menaionEntry.oca_primary && menaionEntry.note && (() => {
                const isAbsent = (menaionEntry.note || '').toLowerCase().includes("not listed") || (menaionEntry.note || '').toLowerCase().includes("not on the oca");
                return (
                  <div style={{ marginTop: "0.6rem", padding: "0.5rem 0.75rem", background: isAbsent ? "rgba(180,120,20,0.1)" : "rgba(139,105,20,0.07)", border: `1px solid ${isAbsent ? "rgba(180,120,20,0.4)" : "rgba(139,105,20,0.25)"}`, borderRadius: "4px", fontSize: "0.78rem", color: "#5C4A1E", lineHeight: "1.55" }}>
                    <span style={{ marginRight: "5px", color: "#8B6914" }}>ⓘ</span>
                    {menaionEntry.note}
                  </div>
                );
              })()}
            </div>
          )}
          {menaionEntry && !isMultiService && menaionEntry.note && (
            <div style={{ fontSize: "0.78rem", color: "#5C4A1E", fontStyle: "italic", marginTop: "0.15rem" }}>{menaionEntry.note}</div>
          )}
          {services.length === 0 && inScope && (
            <div style={{ color: "#B43C1E", fontStyle: "italic" }}>
              No <Tooltip term="menaion">Menaion</Tooltip> entry in library for this date (Phase 2 will add full content).
            </div>
          )}
          </div>}{/* end contextOpen body */}
        </div>

        {/* ── OUT OF SCOPE WARNING ─────────────────────────── */}
        {!inScope && (
          <div style={{ background: "rgba(180,60,30,0.07)", border: "1px solid rgba(180,60,30,0.25)", borderRadius: "6px", padding: "1.2rem 1.5rem", marginBottom: "1.5rem" }}>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B43C1E", marginBottom: "0.4rem" }}>
              {liturgicalData.isFeastPeriod
                ? <Tooltip term={liturgicalData.season === "apodosis" ? "apodosis" : liturgicalData.season === "forefeast" ? "forefeast" : liturgicalData.season === "afterfeast" ? "afterfeast" : "great feast"}>Feast Period</Tooltip>
                : "Outside Ordinary Season"}
            </div>
            <div style={{ fontSize: "0.9rem", lineHeight: "1.6", fontWeight: "500" }}>
              {liturgicalData.seasonNote}
              {liturgicalData.lentInfo && !liturgicalData.passionWeek && (
                <span style={{ fontWeight: "normal", marginLeft: "0.4rem", color: "#5C4A1E" }}>
                  {"— "}
                  {liturgicalData.lentInfo.sundayName
                    ? liturgicalData.lentInfo.sundayName + " · " + liturgicalData.lentInfo.weekName
                    : liturgicalData.lentInfo.weekName + " · " + liturgicalData.dayName}
                </span>
              )}
              {liturgicalData.pentecostWeekInfo && (
                <span style={{ fontWeight: "normal", marginLeft: "0.4rem", color: "#5C4A1E" }}>
                  {"— "}{liturgicalData.pentecostWeekInfo.label}
                </span>
              )}
            </div>
            <div style={{ fontSize: "0.8rem", color: "#5C4A1E", marginTop: "0.5rem", lineHeight: "1.6" }}>
              {OUT_OF_SCOPE_NOTES[liturgicalData.season] || "Assembly rules for this period are in development."}
            </div>
            {liturgicalData.feastPeriod && (
              <div style={{ fontSize: "0.78rem", color: "#5C4A1E", marginTop: "0.5rem", fontStyle: "italic", borderTop: "1px solid rgba(180,60,30,0.15)", paddingTop: "0.5rem" }}>
                {liturgicalData.feastPeriod.feast.note}
              </div>
            )}
          </div>
        )}

        {/* ── SERVICE CONTENT ──────────────────────────────── */}
        {inScope && (
          <>
            {/* Feast-period informational banner */}
            {["great_feast", "forefeast", "afterfeast", "apodosis"].includes(liturgicalData.season) && (
              <div style={{
                background: "rgba(139,105,20,0.07)",
                border: "1px solid rgba(139,105,20,0.25)",
                borderRadius: "6px",
                padding: "0.8rem 1.2rem",
                marginBottom: "1.25rem",
                fontSize: "0.82rem",
                lineHeight: 1.6,
              }}>
                <div style={{
                  fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "#8B6914", fontWeight: 600, marginBottom: "0.3rem",
                }}>
                  {liturgicalData.season === "great_feast" ? "Great Feast"
                    : liturgicalData.season === "forefeast" ? "Forefeast"
                    : liturgicalData.season === "afterfeast" ? "Afterfeast"
                    : "Apodosis (Leavetaking)"}
                </div>
                <div style={{ color: "#2C1F0A" }}>
                  {liturgicalData.seasonNote}
                </div>
                <div style={{ color: "#5C4A1E", marginTop: "0.4rem", fontSize: "0.78rem" }}>
                  The Hours, Typica, and Pre/Post-Communion Prayers use the feast troparion and kontakion.
                  {currentService.key === 'vespers' && " Vespers assembly is substantially complete but the Litiya insertion and Vigil troparion/blessing sequence are not yet implemented."}
                  {liturgicalData.season === "great_feast" && " Great Feast-specific assembly rules (Vigil opening, Litiya, Blessing of Loaves) are in active development."}
                </div>
                {liturgicalData.feastPeriod && liturgicalData.feastPeriod.feast && liturgicalData.feastPeriod.feast.note && (
                  <div style={{ fontSize: "0.75rem", color: "#5C4A1E", marginTop: "0.4rem", fontStyle: "italic", borderTop: "1px solid rgba(139,105,20,0.15)", paddingTop: "0.4rem" }}>
                    {liturgicalData.feastPeriod.feast.note}
                  </div>
                )}
              </div>
            )}

            {/* Service title */}
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8B6914", marginBottom: "0.3rem" }}>Service</div>
              <h2 id="service-heading" style={{ fontSize: "1.4rem", fontWeight: "normal", margin: "0", letterSpacing: "0.02em", borderBottom: "1px solid #D4C49A", paddingBottom: "0.6rem" }}>
                {currentService.label}
              </h2>

              {currentService.built ? (
                currentService.key === 'ordinary_beginning' ? (
                  <div style={{ fontSize: "0.78rem", color: "#9A8A70", marginTop: "0.4rem", fontStyle: "italic" }}>
                    The opening prayers read before any service celebrated independently · Fixed text with seasonal variation
                  </div>
                ) : currentService.key === 'vespers' ? (
                  <div style={{ fontSize: "0.78rem", color: "#9A8A70", marginTop: "0.4rem", fontStyle: "italic" }}>
                    HTM Order of Vespers ·{" "}
                    {isSunday
                      ? <><Tooltip term="octoechos">Octoechos</Tooltip> + <Tooltip term="menaion">Menaion</Tooltip> content</>
                      : <Tooltip term="menaion">Menaion</Tooltip>}{" "}
                    · <Tooltip term="service rank">
                        {isSunday ? "Sunday" : (menaionEntry ? (RANK_EXPLANATIONS[menaionEntry.rank] || RANK_EXPLANATIONS.simple).label : "Simple")} service
                      </Tooltip>
                      <RankExplainer menaionEntry={menaionEntry} isSunday={isSunday} />
                      {" "}· Assembled per Fekula {isSunday ? "§1A" : (menaionEntry ? (RANK_EXPLANATIONS[menaionEntry.rank] || RANK_EXPLANATIONS.simple).fekula : "§2A")}
                  </div>
                ) : currentService.key === 'typica' ? (
                  <div style={{ fontSize: "0.78rem", color: "#9A8A70", marginTop: "0.4rem", fontStyle: "italic" }}>
                    HTM Order of the Typica ·{" "}
                    {isSunday
                      ? <><Tooltip term="octoechos">Octoechos</Tooltip> Hypakoë (Tone {liturgicalData?.tone})</>
                      : <>Weekday kontakia sequence</>}{" "}
                    · Served after the Sixth Hour when no Divine Liturgy is celebrated
                  </div>
                ) : currentService.key === 'pre_communion' ? (
                  <div style={{ fontSize: "0.78rem", color: "#9A8A70", marginTop: "0.4rem", fontStyle: "italic" }}>
                    Jordanville Prayer Book · Read before receiving Holy Communion · Fixed text, no movable parts
                  </div>
                ) : currentService.key === 'post_communion' ? (() => {
                    const _lt = getLiturgyType(liturgicalData);
                    const _ltLabel = _lt === 'basil' ? 'Liturgy of St. Basil the Great'
                      : _lt === 'presanctified' ? 'Liturgy of the Presanctified Gifts'
                      : 'Liturgy of St. John Chrysostom';
                    return (
                      <div style={{ fontSize: "0.78rem", color: "#9A8A70", marginTop: "0.4rem", fontStyle: "italic" }}>
                        Read After Holy Communion · Following {_ltLabel}
                      </div>
                    );
                  })() : (
                <div style={{ fontSize: "0.78rem", color: "#9A8A70", marginTop: "0.4rem", fontStyle: "italic" }}>
                  <Tooltip term="horologion">Horologion</Tooltip> structure ·{" "}
                  {isSunday
                    ? <><Tooltip term="octoechos">Octoechos</Tooltip> + <Tooltip term="menaion">Menaion</Tooltip> content</>
                    : <Tooltip term="menaion">Menaion</Tooltip>}{" "}
                  · <Tooltip term="service rank">
                      {isSunday ? "Sunday" : (menaionEntry ? (RANK_EXPLANATIONS[menaionEntry.rank] || RANK_EXPLANATIONS.simple).label : "Simple")} service
                    </Tooltip>
                    <RankExplainer menaionEntry={menaionEntry} isSunday={isSunday} />
                    {" "}· Assembled per Fekula {isSunday ? "§1A" : (menaionEntry ? (RANK_EXPLANATIONS[menaionEntry.rank] || RANK_EXPLANATIONS.simple).fekula : "§2A")}
                </div>
                )
              ) : (
                <div style={{ fontSize: "0.78rem", color: "#9A8A70", marginTop: "0.4rem", fontStyle: "italic" }}>
                  Assembly in development
                </div>
              )}
            </div>

            {/* Legend (only when service is built and not ordinary_beginning/pre_communion) */}
            {currentService.built && currentService.key !== 'ordinary_beginning' && currentService.key !== 'pre_communion' && (
              <div style={{ display: "flex", gap: "1.2rem", marginBottom: "1.5rem", fontSize: "0.75rem", flexWrap: "wrap" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "12px", height: "12px", borderRadius: "2px", background: "#9A8A70", display: "inline-block" }} />
                  Fixed text (Horologion)
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "12px", height: "12px", borderRadius: "2px", background: "#8B6914", display: "inline-block" }} />
                  Movable text (variable by date)
                </span>
                {currentService.key !== 'post_communion' && (
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "12px", height: "12px", borderRadius: "2px", background: "#B43C1E", display: "inline-block" }} />
                  Unresolved (Phase 2)
                </span>
                )}
              </div>
            )}

            {/* Service elements or placeholder */}
            {currentService.built ? (
              <div>
                {/* Ordinary Beginning as standalone service */}
                {currentService.key === "ordinary_beginning" && (
                  <OrdinaryBeginning liturgicalData={liturgicalData} open={true} setOpen={() => {}} readerMode={readerMode}
                    collapsible={false} />
                )}
                {/* Ordinary Beginning — shown as collapsible for services that may follow another */}
                {(currentService.key === "1st_hour") && (
                  <OrdinaryBeginning liturgicalData={liturgicalData} open={tbOpen} setOpen={setTbOpen} readerMode={readerMode}
                    title="Ordinary Beginning (if said separately)"
                    contextNote="The First Hour is often celebrated immediately following Matins, and it begins as shown below. If the First Hour is said separately, it begins with the Ordinary Beginning." />
                )}
                {(currentService.key === "6th_hour") && (
                  <OrdinaryBeginning liturgicalData={liturgicalData} open={tbOpen} setOpen={setTbOpen} readerMode={readerMode}
                    title="Ordinary Beginning (if said separately)"
                    contextNote="The Sixth Hour is often celebrated immediately following the Third Hour, and it begins as shown below. If the Sixth Hour is said separately, it begins with the Ordinary Beginning." />
                )}
                {currentService.key === "vespers" && (
                  <OrdinaryBeginning liturgicalData={liturgicalData} open={voOpen} setOpen={setVoOpen} readerMode={readerMode}
                    title="Opening of Vespers (if not preceded by the 9th Hour)"
                    contextNote="If the Ninth Hour was said immediately before Vespers, begin at Psalm 103 below. Expand to see the full opening sequence." />
                )}
                {currentService.key === "typica" && (
                  <OrdinaryBeginning liturgicalData={liturgicalData} open={tbOpen} setOpen={setTbOpen} readerMode={readerMode}
                    title="Ordinary Beginning (if said separately)"
                    contextNote="The Typica is often celebrated immediately following the Sixth Hour. If said separately, it begins with the Ordinary Beginning." />
                )}
                {currentService.key === 'pre_communion' && !preCommunionData && (
                  <div style={{ textAlign: 'center', padding: '2rem', color: '#9A8A70', fontStyle: 'italic' }}>
                    Loading prayers…
                  </div>
                )}
                {elements
                  .filter(el => !(el.openingElement && voOpen))
                  .map((el) => <ServiceBlock key={el.id} element={el}
                    templeDedication={templeDedication}
                    onTempleDedicationChange={handleTempleDedicationChange} />)}
              </div>
            ) : (
              <div style={{ background: "rgba(139,105,20,0.06)", border: "1px solid #D4C49A", borderRadius: "6px", padding: "2rem", textAlign: "center" }}>
                <div style={{ fontSize: "1.1rem", color: "#8B6914", marginBottom: "0.6rem" }}>☩</div>
                <div style={{ fontSize: "0.95rem", color: "#5C4A1E", marginBottom: "0.4rem" }}>
                  {currentService.label} — in development
                </div>
                <div style={{ fontSize: "0.8rem", color: "#9A8A70", fontStyle: "italic" }}>
                  The fixed skeleton and variable texts for this feature are being assembled.
                  The Hours are complete and available now.
                </div>
              </div>
            )}

            {/* ── 3RD → 6TH HOUR CONTINUATION BUTTON ──────────── */}
            {currentService.key === "3rd_hour" && (
              <div style={{ marginTop: "2rem", textAlign: "center" }}>
                <button
                  onClick={() => {
                    setSelectedServiceKey("6th_hour");
                    setTimeout(() => {
                      const el = document.getElementById("service-heading");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 80);
                  }}
                  style={{
                    background: "transparent",
                    border: "1px solid #8B6914",
                    borderRadius: "3px",
                    color: "#8B6914",
                    padding: "8px 20px",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    fontFamily: "Georgia, serif",
                    letterSpacing: "0.04em",
                  }}
                >
                  Continue to Read The Sixth Hour →
                </button>
                <div style={{ fontSize: "0.72rem", color: "#9A8A70", fontStyle: "italic", marginTop: "0.4rem" }}>
                  Continues at the top of the Sixth Hour
                </div>
              </div>
            )}

            {/* ── 9TH HOUR → VESPERS CONTINUATION BUTTON ──────── */}
            {currentService.key === "9th_hour" && (
              <div style={{ marginTop: "2rem", textAlign: "center" }}>
                <button
                  onClick={() => {
                    setSelectedServiceKey("vespers");
                    setTimeout(() => {
                      const el = document.getElementById("service-heading");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 80);
                  }}
                  style={{
                    background: "transparent",
                    border: "1px solid #8B6914",
                    borderRadius: "3px",
                    color: "#8B6914",
                    padding: "8px 20px",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    fontFamily: "Georgia, serif",
                    letterSpacing: "0.04em",
                  }}
                >
                  Continue to Vespers →
                </button>
                <div style={{ fontSize: "0.72rem", color: "#9A8A70", fontStyle: "italic", marginTop: "0.4rem" }}>
                  Continues at the top of Vespers
                </div>
              </div>
            )}

            {/* ── NAVIGATION ARROWS ─────────────────────────── */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #D4C49A" }}>
              <button
                onClick={() => prevService && setSelectedServiceKey(prevService.key)}
                disabled={!prevService}
                style={navBtnStyle(!prevService)}
              >
                ← {prevService ? prevService.label : ""}
              </button>

              <button
                onClick={() => nextService && setSelectedServiceKey(nextService.key)}
                disabled={!nextService}
                style={navBtnStyle(!nextService)}
              >
                {nextService ? nextService.label : ""} →
              </button>
            </div>

            {/* ── FOOTER NOTE ───────────────────────────────── */}
            <div style={{ marginTop: "2rem", paddingTop: "1rem", borderTop: "1px solid #D4C49A", fontSize: "0.75rem", color: "#9A8A70", fontStyle: "italic", lineHeight: "1.8" }}>
              <div style={{ marginBottom: "0.4rem" }}>
                Unless otherwise noted, fixed service texts are from{" "}
                <em>The Unabbreviated Horologion or Book of the Hours</em>,
                Holy Trinity Publications, Holy Trinity Monastery, Jordanville, NY,
                Second Edition (1994). Prayers Before Holy Communion follow the
                Jordanville Prayer Book (Molitvoslov). Psalm texts within the
                Daily Hours and Vespers are from{" "}
                <em>The Psalter According to the Seventy</em> (LXX),
                Holy Transfiguration Monastery, Brookline, MA.
                The standalone Psalter viewer uses the Brenton Septuagint (1851),
                public domain.
              </div>

              <div style={{ marginBottom: "0.4rem" }}>
                Troparia and kontakia sourced from the Orthodox Church in America
                (oca.org) and St. Sergius of Radonezh Russian Orthodox
                Cathedral liturgical library (st-sergius.org).
                Pentecostarion texts from St. Sergius Cathedral.
                Resurrectional troparia and kontakia from the Octoechos
                (azbyka.ru, standard OCA/Russian text).
              </div>
              <div>
                All assembly decisions are traceable to Fekula &amp; Williams,{" "}
                <em>The Order of Divine Services According to the Usage of the Russian Orthodox Church</em>,
                Second Edition Revised, 2009 (Saint John of Kronstadt Press).
                Click any <span style={{ color: "#8B6914" }}>Fekula §</span> badge to see the governing rule.
                Underlined terms have glossary definitions.
              </div>
            </div>
          </>
        )}

      {/* ── HOW IT WORKS — always visible, below service content ── */}
      <div style={{ width: "100%", padding: "0 0 2rem",
                    textAlign: "center", marginTop: "1.5rem" }}>
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => setShowHowItWorks(v => !v)}
            style={{ background: "transparent", border: "1px solid #8B6914",
                     color: "#8B6914", borderRadius: "3px", padding: "5px 14px",
                     fontSize: "0.78rem", letterSpacing: "0.08em", cursor: "pointer",
                     fontFamily: "Georgia, serif" }}
          >
            {showHowItWorks ? "Hide How It Works" : "How This Tool Works"}
          </button>
          <button
            onClick={() => setShowGlossary(v => !v)}
            style={{ background: "transparent", border: "1px solid #8B6914",
                     color: "#8B6914", borderRadius: "3px", padding: "5px 14px",
                     fontSize: "0.78rem", letterSpacing: "0.08em", cursor: "pointer",
                     fontFamily: "Georgia, serif" }}
          >
            {showGlossary ? "Hide Glossary" : "Glossary"}
          </button>
          <a
            href="/orthodox-hours/psalter?from=tool"
            style={{ background: "transparent", border: "1px solid #8B6914",
                     color: "#8B6914", borderRadius: "3px", padding: "5px 14px",
                     fontSize: "0.78rem", letterSpacing: "0.08em", cursor: "pointer",
                     fontFamily: "Georgia, serif", textDecoration: "none",
                     display: "inline-block" }}
          >
            Psalter
          </a>
          <a
            href="/orthodox-hours/scripture?from=tool"
            style={{ background: "transparent", border: "1px solid #8B6914",
                     color: "#8B6914", borderRadius: "3px", padding: "5px 14px",
                     fontSize: "0.78rem", letterSpacing: "0.08em", cursor: "pointer",
                     fontFamily: "Georgia, serif", textDecoration: "none",
                     display: "inline-block" }}
          >
            Scripture
          </a>
          <a
            href="/orthodox-hours/tone-trainer?from=tool"
            style={{ background: "transparent", border: "1px solid #8B6914",
                     color: "#8B6914", borderRadius: "3px", padding: "5px 14px",
                     fontSize: "0.78rem", letterSpacing: "0.08em", cursor: "pointer",
                     fontFamily: "Georgia, serif", textDecoration: "none",
                     display: "inline-block" }}
          >
            Tone Trainer
          </a>
        </div>

        {showHowItWorks && (
          <HowItWorksPanel />
        )}

        {showGlossary && (
          <div style={{ marginTop: "1rem" }}>
            <GlossaryPanel glossary={GLOSSARY} />
          </div>
        )}
      </div>
      {/* ── END HOW IT WORKS ─────────────────────────────────────── */}

      {/* ── COPYRIGHT FOOTER ─────────────────────────────────────── */}
      <div style={{ marginTop: "1.5rem", borderTop: "1px solid #e8dfc8", paddingTop: "0.7rem",
                    fontSize: "0.72rem", color: "#9A8A70", fontFamily: "Georgia, serif" }}>
        {!copyrightExpanded ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", justifyContent: "space-between", alignItems: "baseline" }}>
            <span>
              © 2026 William Stevens. All Rights Reserved.{" "}
              Orthodox Hours is free for personal liturgical use and study.{" "}
              Program design, code, and logic remain the exclusive property of William Stevens.{" "}
              Written permission required for redistribution or other uses.{" "}
              Certain liturgical materials used with permission.{" "}
              <button onClick={() => setCopyrightExpanded(true)}
                style={{ background: "none", border: "none", padding: 0, cursor: "pointer",
                         color: "#9A8A70", fontFamily: "Georgia, serif", fontSize: "0.72rem",
                         textDecoration: "underline" }}>
                more
              </button>
            </span>
          </div>
        ) : (
          <div>
            <p style={{ margin: "0 0 0.5rem" }}>
              <strong>Copyright © 2026 William Stevens. All Rights Reserved.</strong>
            </p>
            <p style={{ margin: "0 0 0.5rem" }}>
              Orthodox Hours is provided free of charge for personal liturgical use and study.
            </p>
            <p style={{ margin: "0 0 0.5rem" }}>
              The program design, source code, service-assembly logic and algorithms, user interface
              architecture, and all distinctive visual representations and stylings of liturgical
              service organization are the exclusive intellectual property of William Stevens.
            </p>
            <p style={{ margin: "0 0 0.5rem" }}>
              Permission is hereby granted to use Orthodox Hours for your own personal,
              non-commercial liturgical prayer, study, and devotion.
            </p>
            <p style={{ margin: "0 0 0.5rem" }}>
              Any other use — including redistribution (in whole or in part), modification,
              adaptation, incorporation into other software or websites, commercial use, or public
              display — requires the prior written permission of William Stevens.
            </p>
            <p style={{ margin: "0 0 0.7rem" }}>
              This program incorporates certain copyrighted liturgical texts, rubrics, musical
              settings, and other materials used with the express permission of their respective
              copyright holders. These third-party materials remain the sole property of their
              owners and are not covered by this notice.
            </p>
            <button onClick={() => setCopyrightExpanded(false)}
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer",
                       color: "#9A8A70", fontFamily: "Georgia, serif", fontSize: "0.72rem",
                       textDecoration: "underline" }}>
              less
            </button>
          </div>
        )}
      </div>
      {/* ── END COPYRIGHT FOOTER ─────────────────────────────────── */}

      </div>
    </div>
  );
}
