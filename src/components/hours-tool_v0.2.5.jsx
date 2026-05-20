import React, { useState, useEffect } from 'react';

// ─── CALENDAR ENGINE ────────────────────────────────────────────────────────
// Sources:
//   Paschal calculation: Meeus/Jones/Butcher algorithm (Julian → Gregorian +13 days)
//   Great Feast dates and periods: Orthodox Typicon / OCA liturgical calendar
//   Fekula §2G1-§2G4: forefeast/afterfeast/apodosis assembly rules

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
    kontakion: { tone: 3, text: "Today the choir of Saints who were pleasing to God in the lands of North America now stands before us in the Church and invisibly prays to God for us. With them the angels glorify Him, and all the saints of the Church of Christ keep festival with them; and together they all pray for us to the Pre-Eternal God." },
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
const SAMPLE_MENAION = {

  // ── June 7 — All Saints Sunday ───────────────────────────────────────────
  // Source: OCA. This Sunday has its own proper troparion and kontakion.
  // On Sunday this is used as the Menaion saint entry for §1A assembly —
  // the resurrectional troparion leads, Glory… this troparion follows.
  "06-07": {
    saint: "All Saints",
    rank: "great",
    note: "All Saints Sunday — first Sunday after Pentecost. Special proper hymns.",
    troparion: {
      tone: 4,
      text: "Your Church, O Christ God, is arrayed in the blood of Your martyrs throughout all the world as in purple and fine linen. Through them she cries to You: Send down Your bounties on Your people, grant peace to Your habitation, and great mercy to our souls.",
    feast_e: "Hebrews 11:33-12:2",
    feast_g: "Matthew 10:32-33, 37-38, 19:27-30",
    },
    kontakion: {
      tone: 8,
      text: "As first-fruits of Your nature, the world offers to You, O Lord, the God-bearing martyrs. Through their prayers keep Your Church in deep peace and preserve our lives, O greatly Merciful One.",
    },
  },

  // ── June 7 — Multi-service: HM Theodotus (OCA primary) + Martyrs Kyriaka/Valeria/Maria ─
  // Source: St. Sergius 06-07A.pdf (Theodotus, Simple §2A) + 06-07.pdf (Kyriaka etc., Polyeleos §2E)
  // OCA primary: HM Theodotus, Bishop of Ancyra. Kyriaka/Valeria/Maria are OCA secondary.
  // Troparion/kontakion for Theodotus sourced from OCA (not in simple rank PDF).
  "06-07": [
    {
      saint: "Holy Hieromartyr Theodotus, Bishop of Ancyra",
      oca_primary: true,
      service_file: "06-07A.pdf",
      rank: "simple",
      note: "Also: Martyrs Kyriaka, Valeria & Maria (OCA secondary, Polyeleos service, 06-07.pdf).",
      troparion: {
        tone: 4,
        text: "Your holy martyr Theodotus and his companions, O Lord, through their sufferings have received incorruptible crowns from You, our God. For having Your strength, they laid low their adversaries, and shattered the powerless boldness of demons. Through their intercessions, save our souls!",
      },
      kontakion: {
        tone: 4,
        text: "You struggled well, O Theodotus, together with your fellow athletes and passion-bearing virgins. You have received crowns of honor. Therefore, unceasingly pray to Christ God for us all.",
        matins_ode: 6,
      },
    },
    {
      saint: "Holy Martyrs Kyriaka, Valeria & Maria",
      oca_primary: false,
      service_file: "06-07.pdf",
      rank: "polyeleos",
      note: "The Holy Martyrs Kyriaka, Valeria and Maria appear on the OCA calendar as secondary commemorations on June 7. The OCA primary is HM Theodotus of Ancyra.",
      troparion: {
        tone: 1,
        text: "As reasonable lambs, you were guided by Christ, the Chief Shepherd, along the path of martyrdom. You finished your course and kept the faith; therefore, honored Kyra, Valerie, and Mary, with joyful hearts, we magnify Christ today, as we honor your holy memory!",
      },
      kontakion: {
        tone: 4,
        text: "Passion-bearers Kyra, Valerie and Mary, you loved the faithful promises of God; you clung to the faith of Christ, looking for eternal life and the blessedness of Paradise! You endured torture with steadfastness and bowed your necks beneath the sword. Therefore, you have been crowned by the hand of the Lord and glorious is your memory. Entreat Christ God, the Judge of the contest, on behalf of those who honor your struggles with faith!",
        matins_ode: 6,
      },
    },
  ],

  // ── June 11 — "It Is Truly Meet" Icon of the Theotokos ───────────────────────
  // Source: St. Sergius 06-11.pdf. OCA primary: this icon (also lists Unbreakable Wall and
  // Seven Arrows icons as separate commemorations without full compiled services here).
  // Service rank: Polyeleos (§2E) — Great Vespers, 8 stichera, 3 lessons, Matins Gospel.
  // Two kontakia in PDF: Theotokos T8 (Ode VI — governs Hours) + Icon T4 (separate).
  "06-11": {
    saint: "Icon of the Most Holy Theotokos “It Is Truly Meet”",
    oca_primary: true,
    service_file: "06-11.pdf",
    rank: "polyeleos",
    note: "Commemoration of the miracle on Mt. Athos when the Archangel Gabriel taught a monk the " +
          "“It is truly meet” hymn (Axion Estin). Also: icons “Unbreakable Wall” and “Seven Arrows” (OCA calendar); " +
          "those icons do not have compiled services in this library.",
    feast_e: "Acts 11:19-26, 29-30",
    feast_g: "Luke 10:16-21",
    troparion: {
      tone: 4,
      text: "O ye faithful, with boldness let us hasten to the Theotokos, our merciful Queen, and with compunction let us cry out to her: Send down upon us thy rich mercies; preserve our Church; and maintain the people in prosperity; and deliver our land from every evil circumstance; and grant peace to the world and salvation to our souls.",
    },
    kontakion: {
      tone: 8,
      text: "O Queen of all, we cry aloud to thee the words of the archangel: It is truly meet to bless thee, the Theotokos, ever-blessed and all-immaculate, and the Mother of our God!",
      matins_ode: 6,
    },
  },

  // ── June 12 — Ven. Onuphrius the Great & Ven. Peter of Athos (Double §2B) ────
  // Source: St. Sergius 06-12.pdf. OCA and St. Sergius agree.
  // Service rank: Six-Stichera §2B (Double). 6 stichera (3+3). Two separate kontakia.
  // Fekula §2B: Peter (first saint, Ode III) = 1st & 6th Hours;
  //             Onuphrius (second saint, Ode VI) = 3rd & 9th Hours.
  "06-12": {
    saint: "Ven. Onuphrius the Great & Ven. Peter of Athos",
    oca_primary: true,
    service_file: "06-12.pdf",
    rank: "six_stichera",
    fekula_section_override: "2B",
    note: "Double service: two venerable fathers in one compiled service. Joint troparion. " +
          "Per Fekula §2B: 9th Hour uses Onuphrius kontakion (second saint, Tone III).",
    troparion: {
      tone: 4,
      text: "O God of our fathers, ever deal with us according to Thy meekness. Take not Thy mercy from us, but by the prayers of these saints direct our life in peace.",
    },
    // kontakion = Matins Ode VI (Onuphrius, second saint) → 3rd & 9th Hours
    kontakion: {
      tone: 3,
      text: "Illumined by the radiance of the most holy Spirit, O divinely wise one, thou didst forsake all the tumults of life; and upon reaching the desert, O venerable father, thou didst gladden God the Creator, Who is over all things. Wherefore, Christ, the great Bestower of gifts doth glorify thee, O blessed one.",
      matins_ode: 6,
      saint: "Onuphrius the Great",
    },
    // kontakion_3rd_ode = Matins Ode III (Peter, first saint) → 1st & 6th Hours
    kontakion_3rd_ode: {
      tone: 2,
      text: "Having withdrawn thyself from human companionship, out of divine desire and love for thy Lord, O Peter, thou didst dwell in caves of stone and deep ravines, receiving from Him a crown. Pray thou unceasingly, that we be saved.",
      matins_ode: 3,
      saint: "Peter of Athos",
    },
  },

  // ── June 13 — Martyr Aquilina & Hierarch Triphyllius (Double §2B) ──────────
  // Source: St. Sergius 06-13.pdf. OCA and St. Sergius agree.
  // Service rank: Six-Stichera §2B (Double). 6 stichera (3+3). Two separate troparia and kontakia.
  // Fekula §2B: Aquilina (first saint, Ode III) = 1st & 6th Hours;
  //             Triphyllius (second saint, Ode VI) = 3rd & 9th Hours.
  "06-13": {
    saint: "Holy Martyr Aquilina & Holy Hierarch Triphyllius",
    oca_primary: true,
    service_file: "06-13.pdf",
    rank: "six_stichera",
    fekula_section_override: "2B",
    note: "Double service: martyr and hierarch in one compiled service. Two separate troparia. " +
          "Per Fekula §2B: 9th Hour uses Triphyllius kontakion (second saint, Tone VIII).",
    troparion: {
      tone: 4,
      text: "Thy ewe-lamb Aquilina, O Jesus crieth out with a loud voice: Thee do I love, O my Bridegroom, and, seeking Thee, I endure suffering. In Thy baptism I am crucified and buried with Thee. I suffer for Thy sake, that I may reign with Thee; I die for Thee, that I may live with Thee. Accept me, who with love sacrifice myself for Thee, as an unblemished offering! By her supplications, in that Thou art merciful, save Thou our souls.",
      saint: "Aquilina",
    },
    troparion_second: {
      tone: 4,
      text: "The truth of things revealed thee to thy flock as a rule of faith, icon of meekness, and teacher of temperance; wherefore, thou hast attained the heights through humility and riches through poverty; O hierarch Triphyllius our father, entreat Christ God, that our souls be saved.",
      saint: "Triphyllius",
    },
    // kontakion = Matins Ode VI (Triphyllius, second saint) → 3rd & 9th Hours
    kontakion: {
      tone: 8,
      text: "Receiving the purity of virginity through the excellency of thy life, O Triphyllius, thou wast the first hierarch of Leucosia and wast revealed to be its evangelizer and instructor in the knowledge of God. Wherefore, with joy we cry out to thee: Rejoice, O adornment of hierarchs!",
      matins_ode: 6,
      saint: "Triphyllius",
    },
    // kontakion_3rd_ode = Matins Ode III (Aquilina, first saint) → 1st & 6th Hours
    kontakion_3rd_ode: {
      tone: 2,
      text: "Having utterly purified thy soul with the beauties of thy virginity and attained the heights by martyrdom, O most honored Aquilina, wounded with the love of Christ Thy Bridegroom, thou standest before Him with the angels in gladness. With them cease thou never to pray on behalf of us all.",
      matins_ode: 3,
      saint: "Aquilina",
    },
  },

    // ── June 8 — Translation of the Relics of Greatmartyr Theodore Stratelates
  // Source: OCA (oca.org/saints/lives/2026/06/08) and St. Sergius (06-08.pdf)
  // OCA and St. Sergius AGREE — both give Theodore Stratelates as primary.
  // Note: "Holy Fathers of the First Ecumenical Council" is a MOVABLE commemoration
  // falling on the Sunday nearest June 8 (Pascha+42), NOT a fixed June 8 date.
  // In 2026 that Sunday is June 14 — handled by the named days system.
  // Service rank: Six-Stichera (§2C) — 6 stichera on Lord I Call at Vespers.
  // Per Fekula §2C: "The Hours: Troparion and kontakion from the Menaion."
  // (Same Hours assembly rule as §2A Simple.)
  "06-08": {
    saint: "Translation of the Relics of Greatmartyr Theodore Stratelates",
    rank: "six_stichera",
    note: "Also: St Theodore, first Bishop of Rostov; Relics of Sts Basil & Constantine " +
          "of Yaroslavl; St Ephraim of Antioch; Ven Zosimus of Phoenicia; " +
          "Yaroslavl Icon; White Lake Icon; HM Theodore of Kvelta. " +
          "Note: Holy Fathers of the First Ecumenical Council falls on the Sunday " +
          "nearest June 8 (movable, Pascha+42) — not this fixed date.",
    feast_e: "2 Timothy 2:1-10",
    feast_g: "Matthew 10:16-22",
    troparion: {
      tone: 4,
      text: "Through noetic recruitment thou didst become a most comely general of the heavenly King, O passion-bearer Theodore; for wisely arraying thyself with the weaponry of faith thou didst vanquish legions of demons, revealing thyself to be a victorious spiritual athlete. Wherefore, with faith we ever bless thee.",
    },
    kontakion: {
      tone: 2,
      text: "Arrayed in faith with manliness of soul, and taking in hand the word of God as a spear, thou didst conquer the enemy, O Theodore, great among the martyrs. With them unceasingly entreat Christ God on behalf of us all.",
      matins_ode: 6,
    },
  },

  // ── June 9 — St Cyril of Alexandria, Archbishop ─────────────────────────
  // Source: St. Sergius (06-09.pdf) and OCA. Both agree on primary commemoration.
  // Service rank: Six-Stichera (§2C) — 6 stichera on Lord I Call.
  "06-09": {
    saint: "St Cyril of Alexandria, Archbishop",
    rank: "six_stichera",
    note: "Pillar of Orthodoxy and defender of the title Theotokos at the Council of " +
          "Ephesus (431 AD). Authored extensive commentaries and theological treatises. " +
          "Matins canon acrostic: 'Cyril is the harp of divine visions' (Theophanes, Tone IV).",
    troparion: {
      tone: 8,
      text: "Teacher of Orthodoxy, instructor of piety and chastity, luminary of the Church, God-inspired instructor of Hierarchs, O supremely wise Cyril, thou hast illumined all by thy teaching; O harp of the Spirit entreat Christ God that our souls be saved.",
    },
    kontakion: {
      tone: 6,
      text: "Thou hast manifestly poured forth upon us an abyss of the doctrines of theology from the wellsprings of the Savior, drowning heresies and saving thy flock unharmed from the threefold waves, O blessed Cyril, as a guide for all lands, revealing things divine, O venerable one.",
      matins_ode: 6,
    },
  },

  // ── June 4 — St Metrophanes, first Patriarch of Constantinople ─────────────
  // Source: St. Sergius 06-04.pdf. OCA and St. Sergius agree.
  // Service rank: Simple (§2A). 3 stichera on Lord I Call.
  // Two kontakia in PDF — Matins Ode VI Tone II governs the Hours (not Liturgy Tone IV).
  "06-04": {
    saint: "St Metrophanes, first Patriarch of Constantinople",
    oca_primary: true,
    service_file: "06-04.pdf",
    rank: "simple",
    note: "Also: Sts Mary and Martha, sisters of St Lazarus. Two kontakia in PDF — " +
          "the Matins Ode VI kontakion (Tone II) governs the Hours.",
    troparion: {
      tone: 4,
      text: "The truth of things revealed thee to thy flock as a rule of faith, icon of meekness, and teacher of temperance; wherefore, thou hast attained the heights through humility and riches through poverty; O hierarch Metrophanes our father, entreat Christ God, that our souls be saved.",
    },
    kontakion: {
      tone: 2,
      text: "Thou didst manifestly preach the Faith of Christ, and preserving it, thou didst truly cause thy faithful flock to increase. Wherefore, thou dost rejoice with the angels, O Metrophanes, entreating Christ unceasingly for us all.",
      matins_ode: 6,
    },
  },

  // ── June 5 — Holy Hieromartyr Dorotheus, Bishop of Tyre ─────────────────────
  // Source: St. Sergius 06-05.pdf. OCA and St. Sergius agree.
  // Service rank: Six-Stichera (§2C). 6 stichera on Lord I Call.
  // Note: Alleluia rubric present but this applies to fasting weekday alternate use;
  //       rank is determined by stichera count (6 = §2C), not Alleluia rubric alone.
  "06-05": {
    saint: "Holy Hieromartyr Dorotheus, Bishop of Tyre",
    oca_primary: true,
    service_file: "06-05.pdf",
    rank: "six_stichera",
    note: "Dorotheus served 107 years as a pastor before martyrdom under Julian the Apostate.",
    troparion: {
      tone: 4,
      text: "As thou didst share in the ways of the apostles and didst occupy their throne, thou didst find thine activity to be a passage to divine vision, O divinely inspired one. Wherefore, ordering the word of truth, thou didst suffer for the Faith even to the shedding of thy blood, O Hieromartyr Dorotheus, entreat Christ God, that our souls be saved.",
    },
    kontakion: {
      tone: 5,
      text: "Resplendent with virtues brighter than the sun and with thy sufferings, O blessed Dorotheus, thou didst shine forth and illumine the land, dispelling the darkness of polytheism and putrid heresy. Wherefore, we radiantly celebrate thy memory.",
      matins_ode: 6,
    },
  },

  // ── June 6 — Ven. Bessarion & Ven. Hilarion the New (Double Service §2B) ────
  // Source: St. Sergius 06-06.pdf. OCA and St. Sergius agree.
  // Service rank: Six-Stichera §2B (Double). 6 stichera = 3 per saint.
  // Fekula §2B: 1st & 6th Hour = kontakion_3rd_ode (Bessarion T2, Matins Ode III);
  //             3rd & 9th Hour = kontakion (Hilarion T2, Matins Ode VI).
  // Joint troparion used at all Hours.
  "06-06": {
    saint: "Ven. Bessarion the Wonderworker & Ven. Hilarion the New",
    oca_primary: true,
    service_file: "06-06.pdf",
    rank: "six_stichera",
    fekula_section_override: "2B",  // Double service
    note: "Double service: two venerable fathers in one compiled service. Joint troparion. " +
          "Per Fekula §2B: 9th Hour uses the second saint's kontakion (Hilarion, Tone II).",
    troparion: {
      tone: 4,
      text: "O God of our fathers, ever deal with us according to Thy meekness. Take not Thy mercy from us, but by the prayers of these saints direct our life in peace.",
    },
    // kontakion = Matins 6th Ode → governs 3rd & 9th Hours (Fekula §2B second saint)
    kontakion: {
      tone: 2,
      text: "Like a shepherd didst thou preserve within thy fold the flock of thy life-bearing pasture, and wast shown to be great by the loftiness of thy works, O Hilarion the New, having undergone much suffering and sorrow in thy piety. Wherefore, thou hast made thine abode in the most joyful life in heavenly Sion. Pray for us, O venerable one!",
      matins_ode: 6,
      saint: "Hilarion the New",
    },
    // kontakion_3rd_ode = Matins 3rd Ode → governs 1st & 6th Hours (Fekula §2B first saint)
    kontakion_3rd_ode: {
      tone: 2,
      text: "Emulating the powers on high, by example thou didst live the life of the birds, O venerable one; putting transitory things far from thy mind, thou wast led to the heavenly beauties of Christ the King by thy constant desire, thou didst come even unto Him. O Bessarion, unceasingly entreat Him on behalf of us all!",
      matins_ode: 3,
      saint: "Bessarion the Wonderworker",
    },
  },

  // ── June 1 — Holy Martyr Justin the Philosopher & those with him ──────────
  // Source: St. Sergius 06-01.pdf. OCA and St. Sergius agree.
  // Service rank: Simple (§2A). 3 stichera on Lord I Call; Alleluia at Matins.
  "06-01": {
    saint: "Holy Martyr Justin the Philosopher & those with him",
    oca_primary: true,
    service_file: "06-01.pdf",
    rank: "simple",
    note: "Also: Blessed Agapitos the Unmercenary of Pechersk (not on OCA calendar).",
    troparion: {
      tone: 4,
      text: "In their sufferings, Thy martyrs O Lord, received imperishable crowns from Thee, our God; for, possessed of Thy might, they set at naught the tyrants and crushed the feeble audacity of the demons. By their supplications save Thou our souls.",
    },
    kontakion: {
      tone: 2,
      text: "Adorned with the wisdom of thy divine words, O Justin, the whole Church of God doth illumine the world with the radiance of thy life. Having received a crown because of the out-pouring of thy blood, standing with the angels before Christ, pray thou unceasingly on behalf of us all.",
      matins_ode: 6,
    },
  },

  // ── June 2 — Multi-service: St Nicephorus / Greatmartyr John the New ────────
  // Source: St. Sergius 06-02.pdf (Nicephorus, Six-Stichera) + 06-02A.pdf (John, Polyeleos)
  // OCA primary: St Nicephorus the Confessor. John the New is secondary on OCA calendar.
  "06-02": [
    {
      saint: "St Nicephorus the Confessor, Patriarch of Constantinople",
      oca_primary: true,
      service_file: "06-02.pdf",
      rank: "six_stichera",
      note: "",
      troparion: {
        tone: 4,
        text: "The truth of things revealed thee to thy flock as a rule of faith, icon of meekness, and teacher of temperance; wherefore, thou hast attained the heights through humility and riches through poverty; O hierarch Nicephorus our father, entreat Christ God, that our souls be saved.",
      },
      kontakion: {
        tone: 2,
        text: "Through your inspired confession, you gained victory for the Church, holy Hierarch Nicephorus. You suffered unjust exile because of your reverence for the icon of God the Word. Righteous Father, entreat Christ our God to grant us His great mercy.",
        matins_ode: 6,
      },
    },
    {
      saint: "Holy Greatmartyr John the New of Suceava",
      oca_primary: false,
      service_file: "06-02A.pdf",
      rank: "polyeleos",
      note: "St John the New of Suceava appears on the OCA calendar as a secondary commemoration on June 2. The OCA primary is St Nicephorus the Confessor.",
      troparion: {
        tone: 4,
        text: "Having sustained well thy life on earth with almsgiving, and frequent prayers and tears, O spiritual athlete, thou didst manfully hasten to suffering, and denounce the ungodliness of the Persians; wherefore, thou hast become a firm foundation for the Church and the boast of Christians, O ever-memorable John.",
      },
      kontakion: {
        tone: 4,
        text: "Plying the deep of the sea for trade, thou didst set out from the East for the North; but when God called thee, as He did Matthew the tax-collector, thou didst forsake thy trade and follow Him by the blood of martyrdom, exchanging transitory things for those which are eternal; thus receiving a crown of victory.",
        matins_ode: 6,
      },
    },
  ],

  // ── June 3 — Holy Martyr Lucillian and those with him ───────────────────────
  // Source: St. Sergius 06-03.pdf. OCA and St. Sergius agree.
  // Service rank: Simple (§2A). 3 stichera on Lord I Call; Alleluia at Matins.
  // Troparion/kontakion: NOT in PDF — sourced from OCA troparia page.
  "06-03": {
    saint: "Holy Martyr Lucillian and those with him",
    oca_primary: true,
    service_file: "06-03.pdf",
    rank: "simple",
    note: "Companions: venerable Paula and four unnamed children martyrs.",
    troparion: {
      tone: 1,
      text: "By your faith, you shone like a radiant star in the dark night of error; you fought the good fight and slew the crafty enemy, O Lucillian. Together with venerable Paula and the four martyred children entreat Christ our God to save our souls.",
    },
    kontakion: {
      tone: 4,
      text: "You attained the dignity of the martyrs of Christ through the torments that you courageously endured, O Lucillian. Together with Paula and the four martyred children, you sing to the Creator: 'Like sheep we are slaughtered for love of You, O Savior.'",
      matins_ode: 6,
    },
  },

  // ── June 14 — Prophet Elisha & Patriarch Methodius of Constantinople (§2B Double) ─
  // Source: St. Sergius 06-14.pdf. OCA and St. Sergius agree on both saints.
  // Service rank: Six-Stichera §2B (Double). 6 stichera (3+3). Two troparia. Two kontakia.
  // Fekula §2B: Elisha (first saint, Ode III) = 1st & 6th Hours;
  //             Methodius (second saint, Ode VI) = 3rd & 9th Hours.
  // Note: In 2026 Holy Fathers Sunday (Pascha+42) falls on June 14 — Sunday rules take precedence.
  "06-14": {
    saint: "Holy Prophet Elisha & St. Methodius, Patriarch of Constantinople",
    oca_primary: true,
    service_file: "06-14.pdf",
    rank: "six_stichera",
    fekula_section_override: "2B",
    note: "Double service. In 2026 this date falls on All Saints of North America " +
          "Sunday (Pascha+63); Sunday propers and the NA Saints synaxis take precedence. " +
          "Holy Fathers of the First Ecumenical Council = Pascha+42 = May 24 in 2026.",
    feast_e: "Hebrews 11:33-12:2",
    feast_g: "Matthew 4:25-5:12",
    troparion: {
      tone: 4,
      text: "The angel in the flesh, the foundation of the prophets, the second forerunner " +
            "of the coming of Christ, the glorious Elijah sent down grace from on high upon " +
            "Elisha to dispel infirmities and to cleanse lepers. Wherefore, he poureth forth " +
            "healings upon those who honor him.",
      saint: "Elisha",
    },
    troparion_second: {
      tone: 4,
      text: "The truth of things revealed thee to thy flock as a rule of faith, icon of " +
            "meekness, and teacher of temperance; wherefore, thou hast attained the heights " +
            "through humility and riches through poverty; O hierarch Methodius our father, " +
            "entreat Christ God, that our souls be saved.",
      saint: "Methodius",
    },
    // kontakion = Matins Ode VI (Methodius, second saint) → 3rd & 9th Hours
    kontakion: {
      tone: 2,
      text: "Thou didst struggle on earth like an incorporeal being, O Methodius, and hast " +
            "inherited the heavens, as one who explained the veneration of icons to the ends " +
            "of the earth; for subjected all the more to labors and pangs, thou didst not " +
            "cease to boldly denounce those who cast aside the icons of Christ.",
      matins_ode: 6,
      saint: "Methodius",
    },
    // kontakion_3rd_ode = Matins Ode III (Elisha, first saint) → 1st & 6th Hours
    kontakion_3rd_ode: {
      tone: 2,
      text: "Thou wast shown to be a prophet of God, receiving a twofold measure of grace, " +
            "which truly befitted thee, O blessed Elisha; for thou wast the companion of " +
            "Elijah, and with him dost unceasingly entreat Christ God on behalf of us all.",
      matins_ode: 3,
      saint: "Elisha",
    },
  },

  // ── June 16 — Multi-service: HM Tichon of Amathus (OCA primary) + Ven. Tikhon of Kaluga ─
  // Source: 06-16.pdf (Tichon of Amathus, Simple §2A) + 06-16A.pdf (Tikhon of Kaluga, Polyeleos §2E)
  // OCA primary: Tichon of Amathus (OCA and St. Sergius both list Tichon of Amathus as primary).
  // Note: OCA troparion for Tichon differs from St. Sergius text; St. Sergius text used here.
  "06-16": [
    {
      saint: "Holy Hieromartyr Tichon, Bishop of Amathus in Cyprus",
      oca_primary: true,
      service_file: "06-16.pdf",
      rank: "simple",
      note: "OCA also lists Ven. Tikhon of Kaluga on June 16 (Polyeleos, 06-16A.pdf — OCA secondary). " +
            "OCA troparion differs: “God called you to the sacred priesthood...”; St. Sergius text used.",
      troparion: {
        tone: 1,
        text: "A desert dweller, an angel in the flesh and a wonder-worker wast thou revealed " +
              "to be, O our God-bearing father Tichon. Receiving heavenly gifts through fasting, " +
              "vigils and prayers, thou healest the infirm and the souls of those who with faith " +
              "have recourse unto thee. Glory to Him Who hath given thee strength! Glory to Him " +
              "Who hath crowned thee! Glory to Him Who through thee worketh healings for all!",
      },
      kontakion: {
        tone: 3,
        text: "Persevering in the struggle of the love of God, O holy one, from on high thou " +
              "didst receive the power of the Comforter to cast down the idols of delusion, to " +
              "save mortals, cast out demons, and to heal sicknesses. Wherefore, we honor thee " +
              "as a friend of God, O blessed Tichon.",
        matins_ode: 6,
      },
    },
    {
      saint: "Venerable Tikhon, Wonderworker of Kaluga",
      oca_primary: false,
      service_file: "06-16A.pdf",
      rank: "polyeleos",
      note: "Ven. Tikhon of Kaluga appears on the OCA calendar as a secondary commemoration " +
            "on June 16. The OCA primary is HM Tichon of Amathus.",
      troparion: {
        tone: 4,
        text: "O Tikhon our venerable father, thou wast shown to be a most radiant beacon in " +
              "the midst of the Russian land; for, having made thine abode in the wilderness and " +
              "led a strict way of life therein, thou didst live like an incorporeal being, for " +
              "which cause God hath enriched thee with the gift of miracles. Wherefore, hastening " +
              "to the shrine of thy relics, we say with compunction: O venerable father, entreat " +
              "Christ God, that our souls be saved.",
      },
      kontakion: {
        tone: 8,
        text: "Forsaking thy homeland, O venerable one, thou didst make thine abode in the " +
              "wilderness, where thou didst show thy manner of life to be strict; and amazing " +
              "many by thy virtues, thou didst receive from Christ the gift of miracles. " +
              "Wherefore, remember us who honor thy memory, that we may cry out to thee: " +
              "Rejoice, O venerable Tikhon our father!",
        matins_ode: 6,
      },
    },
  ],

  // ── June 17 — Holy Martyrs Manuel, Sabel & Ismael ───────────────────────────
  // Source: St. Sergius 06-17.pdf. OCA and St. Sergius agree.
  // Service rank: Simple (§2A) — 3 stichera; both Oktoechos canons at Matins.
  "06-17": {
    saint: "Holy Martyrs Manuel, Sabel & Ismael",
    oca_primary: true,
    service_file: "06-17.pdf",
    rank: "simple",
    note: "Three Persian brothers martyred under Julian the Apostate (362).",
    troparion: {
      tone: 4,
      text: "In their sufferings, Thy martyrs O Lord, received imperishable crowns from " +
            "Thee, our God; for, possessed of Thy might, they set at naught the tyrants " +
            "and crushed the feeble audacity of the demons. By their supplications save " +
            "Thou our souls.",
    },
    kontakion: {
      tone: 2,
      text: "Wounded by the Faith of Christ, O most blessed one, and having faithfully " +
            "drained the cup thereof, ye cast the worship and audacity of the Persians " +
            "down to the ground, making supplications on behalf of us all, O ye who are " +
            "equal in number to the Trinity.",
      matins_ode: 6,
    },
  },

  // ── June 18 — Holy Martyr Leontius ──────────────────────────────────────────
  // Source: St. Sergius 06-18.pdf. OCA and St. Sergius agree.
  // Service rank: Simple (§2A) — 3 stichera; one canon of the martyr at Matins.
  "06-18": {
    saint: "Holy Martyr Leontius",
    oca_primary: true,
    service_file: "06-18.pdf",
    rank: "simple",
    note: "Roman soldier martyred at Tripoli in Phoenicia under Vespasian (c. 70 AD).",
    troparion: {
      tone: 4,
      text: "In his sufferings, Thy martyr Leontius O Lord, received an imperishable " +
            "crown from Thee, our God; for, possessed of Thy might, he set at naught " +
            "the tyrants and crushed the feeble audacity of the demons. By his " +
            "supplications save Thou our souls.",
    },
    kontakion: {
      tone: 3,
      text: "Thou didst confound the wicked plots of the tyrants, denouncing the ungodly " +
            "religion of the Greeks, and didst shine forth the knowledge of God upon all " +
            "mankind in thy doctrines of piety, O divinely wise martyr. Wherefore, with " +
            "love we honor thy memory, O most wise Leontius.",
      matins_ode: 6,
    },
  },

  // ── June 19 — St. John Maximovich (two compiled versions) ───────────────────
  // Source: 06-19.pdf (Bulgarian version) + 06-19A.pdf (ROCOR version).
  // IMPORTANT: St. John reposed June 19 (O.S.) = July 2 (N.S.).
  // OCA commemorates him on JULY 2, not June 19.
  // These St. Sergius PDFs use the Julian calendar (June 19 O.S.).
  // For OCA parishes on the New Calendar, this entry applies to JULY 2.
  // The two PDFs are different translations of the same service, not different saints.
  // OCA primary: Yes (canonized by ROCOR 1994, recognized by Moscow 2008, on OCA calendar Jul 2).
  // Service rank: Polyeleos (§2E) — Great Vespers, 8 stichera, 3 lessons, Matins Gospel.
  // ── June 19 — Apostle Jude, Brother of the Lord ────────────────────────────
  // OCA primary: Apostle Jude (confirmed oca.org/saints/lives/2026/06/19).
  // No St. Sergius compiled PDF for June 19 OCA saints; troparion/kontakion from OCA.
  // IMPORTANT: St. John Maximovich (06-19.pdf, 06-19A.pdf) = July 2 N.S.
  // Encode at "07-02" when July is processed.
  "06-19": {
    saint: "Holy Apostle Jude, Brother of the Lord",
    oca_primary: true,
    service_file: null,
    rank: "simple",
    note: "No St. Sergius PDF for OCA June 19. Troparion/kontakion from OCA. " +
          "Also June 19 OCA: Ven. Barlaam of Shenkursk, Martyr Zosimus the Soldier, " +
          "Ven. Paisius the Great, St. John the Solitary of Jerusalem, " +
          "Ven. Paisius of Hilandar, Repose of St. Job Patriarch of Moscow. " +
          "St. John Maximovich (06-19.pdf/06-19A.pdf) belongs at July 2 N.S.",
    feast_e: "Jude 1-10",
    feast_g: "John 14:21-24",
    troparion: {
      tone: 1,
      text: "Divinely we praise you, O Jude, as a faithful witness, knowing you to be " +
            "the brother of Christ. You trampled on delusion, and so preserved the faith. " +
            "Today as we celebrate your holy memory, by your intercessions we receive " +
            "remission of sins.",
    },
    kontakion: {
      tone: 2,
      text: "You were chosen as a disciple for your firmness of mind: an unshakable " +
            "pillar of the Church of Christ, you proclaimed His word to the Gentiles, " +
            "telling them to believe in one Godhead. You were glorified by Him, receiving " +
            "the grace of healing, healing the ills of all who came to you, O most " +
            "praised Apostle Jude!",
      matins_ode: 6,
    },
  },

    // Demonstrates multi-service selector. OCA primary: Prophet Amos.
  // Source: St. Sergius 06-15.pdf (Amos), 06-15A.pdf (Jerome), 06-15B.pdf (Jonah)
  // OCA calendar verified: oca.org/saints/lives/2026/06/15 — Amos listed as primary.
  "06-15": [
    {
      saint: "Holy Prophet Amos",
      oca_primary: true,
      service_file: "06-15.pdf",
      rank: "simple",
      note: "",
      troparion: {
        tone: 2,
        text: "We celebrate the memory of Thy prophet Amos, O Lord, and through him we beseech Thee: save our souls.",
      },
      kontakion: {
        tone: 4,
        text: "Enlightened by the Spirit, O blessed one, thou wast made radiant with divine utterances, proclaiming the word of righteousness unto all; wherefore we honor thee, O glorious Amos.",
        matins_ode: 6,
      },
    },
    {
      saint: "St Jerome of Stridon",
      oca_primary: false,
      service_file: "06-15A.pdf",
      rank: "polyeleos",
      note: "St Jerome of Stridon appears on the OCA calendar as a secondary commemoration on this date. The OCA primary is Prophet Amos.",
      troparion: {
        tone: 8,
        text: "REQUIRES OCA FETCH — troparion not yet encoded.",
      },
      kontakion: {
        tone: 4,
        text: "REQUIRES OCA FETCH — kontakion not yet encoded.",
        matins_ode: 6,
      },
    },
    {
      saint: "St Jonah, Metropolitan of Moscow",
      oca_primary: false,
      service_file: "06-15B.pdf",
      rank: "polyeleos",
      note: "St Jonah of Moscow is not listed on the OCA calendar for this date. This service is from the Russian Menaion. Verify with your priest before serving.",
      troparion: {
        tone: 3,
        text: "REQUIRES ENCODING — troparion not yet extracted from 06-15B.pdf.",
      },
      kontakion: {
        tone: 3,
        text: "REQUIRES ENCODING — kontakion not yet extracted from 06-15B.pdf.",
        matins_ode: 6,
      },
    },
  ],

  // ── June 10 — Holy Hieromartyr Timothy, Bishop of Prussia ───────────────
  // Source: St. Sergius (06-10.pdf) and OCA. Both agree on primary commemoration.
  // Service rank: Simple (§2A) — 3 stichera on Lord I Call; Alleluia at Matins.
  // Troparion/kontakion: NOT in the full Menaion PDF for this saint.
  // Resolved from: General Menaion, Hieromartyr.pdf (general Hieromartyr service).
  // The General Menaion provides fallback troparia for saints without compiled services.
  "06-10": {
    saint: "Holy Hieromartyr Timothy, Bishop of Prussia",
    rank: "simple",
    note: "Bishop of Prussia martyred for the faith. Also: St John of Tobolsk (separate service). " +
          "Troparion and kontakion sourced from General Menaion (Hieromartyr), " +
          "as the full Menaion entry does not include them explicitly.",
    troparion: {
      tone: 4,
      text: "As thou didst share in the ways of the apostles and didst occupy their throne, thou didst find thine activity to be a passage to divine vision, O divinely inspired one. Wherefore, ordering the word of truth, thou didst suffer for the Faith even to the shedding of thy blood, O Hieromartyr Timothy, entreat Christ God, that our souls be saved.",
    },
    kontakion: {
      tone: 4,
      text: "As one who lived piously among hierarchs and who underwent martyrdom, thou, O divinely-wise one, hast extinguished the sacrifices of idolatry and shown thyself to be a protector of thy flock. Wherefore, in honor we fervently cry out unto thee: Do thou, through thine intercessions, ever deliver us from all misfortunes, O Timothy, our Father.",
      matins_ode: 6,
    },
  },
  "05-16": {
    saint: "St. Theodore the Sanctified",
    rank: "simple",
    troparion: {
      tone: 8,
      text: "By a flood of tears thou didst make the desert fertile, and thy longing for God brought forth fruits in abundance. By the radiance of miracles thou didst enlighten the whole universe! O our holy father Theodore, pray to Christ our God to save our souls!",
    },
    kontakion: {
      tone: 2,
      text: "Having abandoned the tumult of life and subdued the passions of the flesh, thou didst take up thy cross and hasten to Christ. Thou wast a true disciple of the Master: a model for all who seek perfection. Therefore we cry to thee: Rejoice, O father Theodore, adornment of monastics!",
    },
  },

  // ── May 17 — Sts Andronicus and Junia the Apostles ──────────────────────
  // Retained from original sample data
  "05-17": {
    saint: "St. Andronicus the Apostle and St. Junia",
    rank: "simple",
    troparion: {
      tone: 3,
      text: "O holy apostle Andronicus, entreat the merciful God to grant our souls forgiveness of transgressions.",
    },
    kontakion: {
      tone: 2,
      text: "Having received divine grace from on high, thou didst illumine the nations with godly wisdom, O glorious apostle Andronicus; wherefore we honor thee with faith.",
    },
  },

  // ── May 18 — Martyr Theodotus of Ancyra + Seven Holy Virgins + Martyrs Peter, Dionysius et al ──
  // Source: St. Sergius 05-18.pdf. May 18 O.S. = May 31 N.S. — DIVERGENCE.
  // OCA commemorates May 18 N.S.; encoded at 05-18 per OCA primacy.
  // Six-stichera (§2C): 3 stichera Theodotus/Virgins + 3 stichera Peter/Dionysius group.
  // Note: 06-07 Theodotus is a different saint (Hieromartyr Bishop); this is Theodotus the innkeeper.
  "05-18": {
    saint: "Martyr Theodotus of Ancyra, the Seven Holy Virgins, and Martyrs Peter, Dionysius & companions",
    oca_primary: true,
    service_file: "05-18.pdf",
    rank: "six_stichera",
    fekula_section: "2C",
    note: "May 18 O.S. = May 31 N.S. OCA commemorates May 18 N.S. — DIVERGENCE; OCA date governs. " +
          "Six stichera §2C confirmed. Primary: Martyr Theodotus of Ancyra (innkeeper) with Seven Virgins. " +
          "Secondary: Martyrs Peter, Dionysius & companions. OCA and St. Sergius texts agree.",
    feast_e: "absent — §2C, readings from Oktoechos",
    feast_g: "absent — §2C, readings from Oktoechos",
    troparion: {
      tone: 4,
      text: "Your holy martyr Theodotus and his companions, O Lord, through their sufferings have " +
            "received incorruptible crowns from You, our God. For having Your strength, they laid low " +
            "their adversaries, and shattered the powerless boldness of demons. " +
            "Through their intercessions, save our souls!",
    },
    kontakion: {
      tone: 2,
      text: "Having struggled well as a spiritual athlete, O Theodotus, with the spiritual athletes " +
            "and the passion-bearing virgins thou hast received crowns of honor. " +
            "Wherefore, unceasingly entreat Christ God on behalf of us all.",
      matins_ode: 6,
    },
  },

  // ── May 19 — Hieromartyr Patrick, Bishop of Prusa & companions ───────────
  // Source: St. Sergius 05-19.pdf. May 19 O.S. = June 1 N.S. — DIVERGENCE.
  // OCA commemorates May 19 N.S.; encoded at 05-19 per OCA primacy.
  // Service rank: Simple (§2A). OCA has two troparia; proper hieromartyr text is primary.
  "05-19": {
    saint: "Hieromartyr Patrick, Bishop of Prusa, and his companions",
    oca_primary: true,
    service_file: "05-19.pdf",
    rank: "simple",
    fekula_section: "2A",
    note: "May 19 O.S. = June 1 N.S. OCA commemorates May 19 N.S. — DIVERGENCE; OCA date governs. " +
          "§2A simple confirmed — 3 stichera. OCA primary troparion is the proper hieromartyr text; " +
          "generic martyr troparion stored as troparion_2. Kontakion matches St. Sergius.",
    feast_e: "absent — §2A, readings from Oktoechos",
    feast_g: "absent — §2A, readings from Oktoechos",
    troparion: {
      tone: 4,
      text: "You were arrayed in the beauty of the priesthood, O Patrick, and adorned with the blood " +
            "of martyrdom. As you stand before Christ with those who suffered with you, remember us, " +
            "for you are an honored passion-bearer.",
    },
    troparion_2: {
      tone: 4,
      text: "Your holy martyr Patrick and his companions, O Lord, through their sufferings have " +
            "received incorruptible crowns from You, our God. For having Your strength, they laid low " +
            "their adversaries, and shattered the powerless boldness of demons. " +
            "Through their intercessions, save our souls!",
    },
    kontakion: {
      tone: 4,
      text: "As one resplendent in the beauty of the priesthood and supremely adorned with the blood " +
            "of martyrdom, standing before Christ with those who suffered with thee, O Patrick, " +
            "be thou mindful of us, in that thou art an honored passion-bearer.",
      matins_ode: 6,
    },
  },

  // ── May 20 — Holy Martyr Thallelaios (Unmercenary Physician) ─────────────
  // Source: St. Sergius 05-20.pdf. May 20 O.S. = June 2 N.S. — DIVERGENCE.
  // OCA commemorates May 20 N.S.; encoded at 05-20 per OCA primacy.
  // Service rank: Simple (§2A). OCA has proper troparion; differs from St. Sergius.
  // Note: in years when Ascension falls May 20, movable feast takes precedence automatically.
  "05-20": {
    saint: "Holy Martyr Thallelaios, Unmercenary Physician of Aegae",
    oca_primary: true,
    service_file: "05-20.pdf",
    rank: "simple",
    fekula_section: "2A",
    note: "May 20 O.S. = June 2 N.S. OCA commemorates May 20 N.S. — DIVERGENCE; OCA date governs. " +
          "§2A simple confirmed. OCA proper troparion used; differs from St. Sergius generic martyr text. " +
          "Movable feast deconfliction (e.g. Ascension) handled automatically by the calendar engine.",
    feast_e: "absent — §2A, readings from Oktoechos",
    feast_g: "absent — §2A, readings from Oktoechos",
    troparion: {
      tone: 4,
      text: "O holy prize-winner and healer Thallelaios, intercede with the merciful God " +
            "that He grant to our souls the forgiveness of our faults.",
    },
    kontakion: {
      tone: 3,
      text: "Revealed as a fellow contestant with the Martyrs, you were an excellent soldier " +
            "of the King of Glory. Through your trials and torments you humbled the arrogance " +
            "of the idolators. Therefore, we praise your august memory, O wise Thallelaios.",
      matins_ode: 6,
    },
  },


  // ── May 21 — Holy Equals-of-Apostles Constantine & Helena ────────────────
  // Source: St. Sergius 05-21.pdf. May 21 O.S. = June 3 N.S. — DIVERGENCE.
  // OCA commemorates May 21 N.S.; encoded at 05-21 per OCA primacy.
  // Service rank: Polyeleos (§2E). OCA and St. Sergius texts in full agreement.
  // Dual epistle: Gal 1:11-19 normally; Acts 26:1-5,12-20 during Pentecostarion.
  // Note: in years when Ascension falls on May 21, movable feast overrides this entry.
  "05-21": {
    saint: "Holy Equals-of-Apostles Constantine the Great & Helena",
    oca_primary: true,
    service_file: "05-21.pdf",
    rank: "polyeleos",
    fekula_section: "2E",
    note: "May 21 O.S. = June 3 N.S. OCA commemorates May 21 N.S. — DIVERGENCE; OCA date governs. " +
          "Polyeleos §2E confirmed. OCA and St. Sergius texts agree. " +
          "Dual epistle: Gal 1:11-19 (primary); Acts 26:1-5, 12-20 when within Pentecostarion. " +
          "In years when Ascension falls May 21, movable feast takes precedence.",
    feast_e: "Galatians 1:11-19",
    feast_g: "John 10:1-9",
    prokeimenon_tone: 8,
    prokeimenon_text: "Their sound hath gone forth into all the earth, and their words unto the ends of the world.",
    prokeimenon_stichos: "The heavens declare the glory of God, and the firmament proclaimeth the work of His hands.",
    alleluia_tone: 1,
    alleluia_verse: "I have raised up one chosen out of My people; I have found David My servant.",
    alleluia_stichos: "O Lord, in Thy strength the king shall be glad, and in Thy salvation shall he rejoice exceedingly.",
    communion_verse: "Their sound hath gone forth into all the earth, and their words unto the ends of the world.",
    paroemia_1: "3 Kings 8:22-23, 27-30 — Solomon's prayer at temple dedication",
    paroemia_2: "Isaiah 61:10-62:5 — robe of salvation; Zion's righteousness as a lamp",
    paroemia_3: "Isaiah 60:1-14 — Be enlightened O Jerusalem; kings shall walk in thy light",
    troparion: {
      tone: 8,
      text: "Beholding the image of Thy Cross in the sky, and like Paul receiving a call not from men, " +
            "Thine apostle among kings placed the imperial city in Thy hands, O Lord. " +
            "Do Thou ever preserve it in peace, through the supplications of the Theotokos, " +
            "O Thou Who alone lovest mankind.",
    },
    kontakion: {
      tone: 3,
      text: "Today Constantine and his mother Helena have revealed the Cross, the most precious Tree, " +
            "which putteth to shame all the Jews and is the weapon of faithful kings against the adversary. " +
            "For our sake the great standard hath appeared, terrible in battle.",
      matins_ode: 6,
    },
  },


  // ── May 22 — Holy Martyr Basiliscus ──────────────────────────────────────────
  // Source: St. Sergius 05-22.pdf. May 22 O.S. = June 4 N.S. — DIVERGENCE.
  // OCA commemorates May 22 N.S.; encoded at 05-22 per OCA primacy.
  // Service rank: Simple (§2A) — 3 stichera. OCA and St. Sergius texts agree.
  "05-22": {
    saint: "Holy Martyr Basiliscus of Comana",
    oca_primary: true,
    service_file: "05-22.pdf",
    rank: "simple",
    fekula_section: "2A",
    note: "May 22 O.S. = June 4 N.S. OCA commemorates May 22 N.S. — DIVERGENCE; OCA date governs. " +
          "§2A simple confirmed — 3 stichera. Nephew of Greatmartyr Theodore the Recruit (Feb 17). " +
          "OCA and St. Sergius texts agree on both troparion and kontakion.",
    feast_e: "absent — §2A, readings from Oktoechos",
    feast_g: "absent — §2A, readings from Oktoechos",
    troparion: {
      tone: 4,
      text: "Your holy martyr Basiliscus, O Lord, through his suffering has received an incorruptible " +
            "crown from You, our God. For having Your strength, he laid low his adversaries, " +
            "and shattered the powerless boldness of demons. " +
            "Through his intercessions, save our souls!",
    },
    kontakion: {
      tone: 8,
      text: "You were shown to be strong and courageous in suffering; " +
            "you were revealed to be a wonder-worker in miracles! " +
            "You openly bore the name of Christ, putting the tyrant to shame! " +
            "Therefore we honor you, most honored Basiliscus, " +
            "ever crying: \"Rejoice, splendid adornment of the martyrs!\"",
      matins_ode: 6,
    },
  },

  // ── May 23 — Venerable Father Michael the Confessor, Bishop of Synada ────────
  // Source: St. Sergius 05-23.pdf. May 23 O.S. = June 5 N.S. — DIVERGENCE.
  // OCA commemorates May 23 N.S.; encoded at 05-23 per OCA primacy.
  // Service rank: Six-stichera (§2C) — 3 from Pentecostarion + 3 Menaion = 6 total.
  // OCA troparion (Tone 4 proper) differs from St. Sergius PDF which has no Vespers troparion rubric.
  // OCA kontakion matches St. Sergius exactly.
  "05-23": {
    saint: "Venerable Father Michael the Confessor, Bishop of Synada",
    oca_primary: true,
    service_file: "05-23.pdf",
    rank: "six_stichera",
    fekula_section: "2C",
    note: "May 23 O.S. = June 5 N.S. OCA commemorates May 23 N.S. — DIVERGENCE; OCA date governs. " +
          "§2C six-stichera confirmed: 3 Menaion + 3 Pentecostarion stichera at Lord I Call. " +
          "OCA proper troparion (Tone 4) used — St. Sergius PDF has no troparion at Vespers rubric. " +
          "Kontakion matches. Exiled by Leo the Armenian for venerating icons; reposed c. 821.",
    feast_e: "absent — §2C, readings from Oktoechos",
    feast_g: "absent — §2C, readings from Oktoechos",
    troparion: {
      tone: 4,
      text: "From your youth you dedicated your life to God, " +
            "and you were proclaimed shepherd and hierarch of Christ, holy Michael. " +
            "You endured afflictions and exile because you honored the icon of Christ; " +
            "now you pour forth healings for us all.",
    },
    kontakion: {
      tone: 8,
      text: "As a most honorable hierarch and champion of true piety, " +
            "undaunted by fear of the notorious tyrant, " +
            "you conquered his heretical opposition, freely proclaiming in a loud voice: " +
            "\"I venerate the icon of Christ and of His all-pure Mother!\" " +
            "Therefore, we honor you, O Michael!",
      matins_ode: 6,
    },
  },

  // ── May 24 — Venerable Symeon of the Wondrous Mountain (Stylites the Younger) ─
  // Source: St. Sergius 05-24.pdf. May 24 O.S. = June 6 N.S. — DIVERGENCE.
  // OCA commemorates May 24 N.S.; encoded at 05-24 per OCA primacy.
  // Service rank: Polyeleos (§2E) — 6 stichera, full AT LITURGY section present in PDF.
  // OCA and St. Sergius texts agree on troparion and kontakion.
  "05-24": {
    saint: "Venerable Symeon Stylites the Younger of the Wondrous Mountain",
    oca_primary: true,
    service_file: "05-24.pdf",
    rank: "polyeleos",
    fekula_section: "2E",
    note: "May 24 O.S. = June 6 N.S. OCA commemorates May 24 N.S. — DIVERGENCE; OCA date governs. " +
          "Polyeleos §2E confirmed — 6 stichera, Aposticha, full AT LITURGY. " +
          "OCA and St. Sergius texts agree. Born 521 in Antioch; stylite for 68 years on the Wondrous Mountain.",
    feast_e: "Colossians 3:12-16 (§258)",
    feast_g: "Matthew 11:27-30 (§43)",
    prokeimenon_tone: 7,
    prokeimenon_text: "The righteous man shall be glad in the Lord, and shall hope in Him.",
    prokeimenon_stichos: "Hearken, O God, unto my prayer, when I make supplication unto Thee.",
    alleluia_tone: 6,
    alleluia_verse: "Blessed is the man that feareth the Lord; in His commandments shall he greatly delight.",
    alleluia_stichos: "His seed shall be mighty upon the earth.",
    communion_verse: "In everlasting remembrance shall the righteous be; he shall not be afraid of evil tidings.",
    troparion: {
      tone: 1,
      text: "Dweller of the desert and angel in the body, " +
            "you were shown to be a wonder-worker, our God-bearing Father Simeon. " +
            "You received heavenly gifts through fasting, vigil, and prayer: " +
            "healing the sick and the souls of those drawn to you by faith. " +
            "Glory to Him who gave you strength! " +
            "Glory to Him who granted you a crown! " +
            "Glory to Him who through you grants healing to all!",
    },
    kontakion: {
      tone: 2,
      text: "You longed for the things on high, turning away from those below. " +
            "You built a pillar on which you lived as if in heaven, " +
            "shining with the splendor of miracles, venerable Simeon, " +
            "and unceasingly praying for us all to Christ, the God of all.",
      matins_ode: 6,
    },
  },

  // ── May 25 — Third Finding of the Head of the Holy Forerunner John ───────────
  // Source: St. Sergius 05-25.pdf. May 25 O.S. = June 7 N.S. — DIVERGENCE.
  // OCA commemorates May 25 N.S.; encoded at 05-25 per OCA primacy.
  // Service rank: Polyeleos (§2E) — Great Vespers, Litya, 3 paroemias, Polyeleos, Matins Gospel.
  // OCA troparion (Tone 4) matches St. Sergius.
  // OCA kontakion (Tone 4) DIVERGES from St. Sergius (Tone 6). OCA text governs.
  // Stichera note: 8 during Pentecostarion (3+5), 6 in Apostles' Fast — rank §2E regardless.
  "05-25": {
    saint: "Third Finding of the Precious Head of the Holy Prophet, Forerunner and Baptist John",
    oca_primary: true,
    service_file: "05-25.pdf",
    rank: "polyeleos",
    fekula_section: "2E",
    note: "May 25 O.S. = June 7 N.S. OCA commemorates May 25 N.S. — DIVERGENCE; OCA date governs. " +
          "§2E Polyeleos: Great Vespers with Blessed is the man, Litya, 3 paroemias, Polyeleos, Matins Gospel. " +
          "OCA kontakion (Tone 4) differs from St. Sergius (Tone 6); OCA text governs. " +
          "Stichera count varies: 8 (3+5) in Pentecostarion, 6 in Apostles' Fast.",
    feast_e: "2 Corinthians 4:6-15 (§176)",
    feast_g: "Matthew 11:2-15 (§40)",
    prokeimenon_tone: 7,
    prokeimenon_text: "The righteous man shall be glad in the Lord, and shall hope in Him.",
    prokeimenon_stichos: "Hearken, O God, unto my prayer, when I make supplication unto Thee.",
    alleluia_tone: 5,
    alleluia_verse: "A light hath dawned for the righteous man, and gladness for the upright of heart.",
    alleluia_stichos: "Truth is sprung up out of the earth, and righteousness hath looked down from heaven.",
    communion_verse: "In everlasting remembrance shall the righteous be; he shall not be afraid of evil tidings.",
    paroemia_1: "Isaiah 40:1-8, 10-11 — voice crying in wilderness; Comfort my people",
    paroemia_2: "Malachi 3:1-3, 5-7, 12; 4:4-6 — Behold I send my messenger; Elijah before the great day",
    paroemia_3: "Wisdom 4:7, 16-17; 5:1-7, 15 — the righteous shall stand in boldness",
    troparion: {
      tone: 4,
      text: "As a divine treasure hidden in the ground " +
            "was your head revealed to us by Christ, O prophet and forerunner. " +
            "We have gathered in commemoration of this finding " +
            "with inspired hymns of praise to the Savior, " +
            "Who saves us from corruption through your prayers!",
    },
    kontakion: {
      tone: 4,
      text: "By giving your venerable head to a sinful woman, " +
            "Herod broke the law of God. " +
            "But we behold it and cry out for joy, " +
            "and say to you, O forerunner: " +
            "Pray to the Lord that He may grant mercy to us all!",
      matins_ode: 6,
    },
  },

  // ── May 26 — Holy Apostle Carpus of the Seventy ───────────────────────────────
  // Source: St. Sergius 05-26.pdf. May 26 O.S. = June 8 N.S. — DIVERGENCE.
  // OCA commemorates May 26 N.S.; encoded at 05-26 per OCA primacy.
  // Service rank: Simple (§2A) — 3 stichera, no AT LITURGY section.
  // OCA troparion adds Alphaeus as co-commemorated; St. Sergius addresses Carpus alone.
  // OCA kontakion matches St. Sergius in substance.
  "05-26": {
    saint: "Holy Apostle Carpus of the Seventy",
    oca_primary: true,
    service_file: "05-26.pdf",
    rank: "simple",
    fekula_section: "2A",
    note: "May 26 O.S. = June 8 N.S. OCA commemorates May 26 N.S. — DIVERGENCE; OCA date governs. " +
          "§2A simple — 3 stichera. OCA troparion names Carpus and Alphaeus together; " +
          "St. Sergius troparion names Carpus only. OCA text governs. " +
          "Bishop of Verria in Macedonia; one of the Seventy Apostles (Luke 10:1).",
    feast_e: "absent — §2A, readings from Oktoechos",
    feast_g: "absent — §2A, readings from Oktoechos",
    troparion: {
      tone: 3,
      text: "Holy Apostles Carpus and Alphaeus, " +
            "entreat the merciful God " +
            "to grant our souls forgiveness of transgressions.",
    },
    kontakion: {
      tone: 4,
      text: "The Church ever sees you as a shining star, Apostle Carpus. " +
            "Your miracles have brought her great enlightenment.",
      matins_ode: 6,
    },
  },

  // ── May 27 — Holy Hieromartyr Therapont + Righteous John the Russian (multi-service) ─
  // Source: St. Sergius 05-27.pdf (Therapont) + 05-27A.pdf (John the Russian).
  // May 27 O.S. = June 9 N.S. OCA commemorates both on May 27 N.S. — DIVERGENCE; OCA date governs.
  // Multi-service array: [Therapont §2A, John the Russian §2F vigil].
  // John the Russian is the primary/superior service.
  "05-27": [
    {
      // ── Service 1: Holy Hieromartyr Therapont ─────────────────────────────────
      // Rank: Simple (§2A) — 3 stichera, no AT LITURGY epistle/gospel.
      // OCA troparion (Tone 4 hieromartyr) differs from St. Sergius (no troparion rubric in PDF).
      // OCA kontakion: absent from OCA May 25 page; St. Sergius PDF also has no kontakion rubric.
      saint: "Holy Hieromartyr Therapont, Bishop of Cyprus",
      oca_primary: true,
      service_file: "05-27.pdf",
      rank: "simple",
      fekula_section: "2A",
      note: "May 27 O.S. = June 9 N.S. OCA commemorates May 27 N.S. — DIVERGENCE; OCA date governs. " +
            "§2A simple — 3 stichera. OCA proper troparion (Tone 4) used; St. Sergius PDF has no troparion rubric. " +
            "Kontakion absent from both OCA and St. Sergius — flagged for future resolution. " +
            "Secondary service; John the Russian is primary.",
      feast_e: "absent — §2A",
      feast_g: "absent — §2A",
      troparion: {
        tone: 4,
        text: "By sharing in the ways of the Apostles, " +
              "you became a successor to their throne. " +
              "Through the practice of virtue, you found the way to divine contemplation, O inspired one of God; " +
              "by teaching the word of truth without error, you defended the Faith, " +
              "even to the shedding of your blood. " +
              "Hieromartyr Therapon, entreat Christ God to save our souls.",
      },
      kontakion: {
        tone: null,
        text: "absent — not found in OCA or St. Sergius for this date; flagged for future resolution.",
        matins_ode: 6,
      },
    },
    {
      // ── Service 2: Righteous Confessor John the Russian ──────────────────────
      // Source: 05-27A.pdf. Rank: Vigil (§2F) — Great Vespers, 8 stichera, Litya, 3 paroemias,
      // Great Doxology, Polyeleos, Matins Gospel (Lk 12:8-12 §64), full AT LITURGY.
      // OCA troparion (shorter form, Tone 4) matches St. Sergius shorter troparion.
      // OCA kontakion (Tone 4, Ode 3) matches St. Sergius primary kontakion.
      // St. Sergius also has a Tone 8 kontakion (Ode 6) — stored as dormant data.
      saint: "Righteous Confessor John the Russian",
      oca_primary: true,
      service_file: "05-27A.pdf",
      rank: "vigil",
      fekula_section: "2F",
      note: "May 27 O.S. = June 9 N.S. OCA commemorates May 27 N.S. — DIVERGENCE; OCA date governs. " +
            "§2F Vigil: Great Vespers, 8 stichera (3 Pentecostarion + 5), Litya, 3 paroemias, " +
            "Great Doxology, Polyeleos, Matins Gospel. Primary service on this date. " +
            "Captured by Turks c. 1711; lived as a slave in Asia Minor; reposed c. 1730. " +
            "Relics at Neon Prokopion, Euboea, Greece. OCA and St. Sergius texts agree.",
      feast_e: "Galatians 5:22-6:2 (§213)",
      feast_g: "Luke 6:17-23 (§24)",
      prokeimenon_tone: 7,
      prokeimenon_text: "Precious in the sight of the Lord is the death of His saints.",
      prokeimenon_stichos: "What shall I render unto the Lord for all that He hath rendered unto me?",
      alleluia_tone: 6,
      alleluia_verse: "Blessed is the man that feareth the Lord; in His commandments shall he greatly delight.",
      alleluia_stichos: "His seed shall be mighty upon the earth.",
      communion_verse: "In everlasting remembrance shall the righteous be; he shall not be afraid of evil tidings.",
      paroemia_1: "Wisdom 3:1-9 — souls of the righteous are in the hand of God",
      paroemia_2: "Wisdom 5:15-6:3 — the righteous live for evermore; their reward is with the Lord",
      paroemia_3: "Wisdom 4:7-15 — though the righteous be prevented with death, yet shall he be in rest",
      troparion: {
        tone: 4,
        text: "He Who called you from earth into the heavenly abodes " +
              "keeps your body incorrupt even after your death, O righteous John; " +
              "for you were taken as a prisoner into Asia " +
              "where you also won Christ as your friend. " +
              "Therefore, entreat Him that our souls may be saved.",
      },
      kontakion: {
        tone: 4,
        text: "O Righteous Father John, " +
              "the holy memory of your illustrious contests has come today, " +
              "gladdening the souls of those who honor you with reverence and faith.",
        matins_ode: 3,
      },
    },
  ],

  // ── May 28 — St. Nicetas, Bishop of Chalcedon ────────────────────────────────
  // Source: St. Sergius 05-28.pdf. May 28 O.S. = June 10 N.S. — DIVERGENCE.
  // OCA commemorates May 28 N.S.; encoded at 05-28 per OCA primacy.
  // Service rank: Simple (§2A) — 3 stichera. OCA and St. Sergius texts agree.
  "05-28": {
    saint: "Saint Nicetas, Bishop of Chalcedon",
    oca_primary: true,
    service_file: "05-28.pdf",
    rank: "simple",
    fekula_section: "2A",
    note: "May 28 O.S. = June 10 N.S. OCA commemorates May 28 N.S. — DIVERGENCE; OCA date governs. " +
          "§2A simple — 3 stichera. OCA and St. Sergius texts agree on troparion and kontakion. " +
          "Confessor under Leo the Armenian; exiled for venerating icons. " +
          "Canon also commemorates his brother St. Ignatius.",
    feast_e: "absent — §2A, readings from Oktoechos",
    feast_g: "absent — §2A, readings from Oktoechos",
    troparion: {
      tone: 4,
      text: "In truth you were revealed to your flock as a rule of faith, " +
            "an image of humility and a teacher of abstinence; " +
            "your humility exalted you; your poverty enriched you. " +
            "Hierarch Father Nicetas, " +
            "entreat Christ our God that our souls may be saved.",
    },
    kontakion: {
      tone: 8,
      text: "You shone with the splendor of your deeds, venerable Nicetas. " +
            "You became an heir to the throne of the apostles. " +
            "Completely filled, O Father, with the teachings of God, you shone like the sun upon your flock. " +
            "Therefore we cry out to you: \"Rejoice, beauty of Chalcedon.\"",
      matins_ode: 6,
    },
  },

  // ── May 29 — Holy Martyred Virgin Theodosia ───────────────────────────────────
  // Source: St. Sergius 05-29.pdf. May 29 O.S. = June 11 N.S. — DIVERGENCE.
  // OCA commemorates May 29 N.S.; encoded at 05-29 per OCA primacy.
  // Service rank: Simple (§2A) — 3 stichera. AT LITURGY: troparion and kontakion only.
  // OCA troparion and kontakion both differ from St. Sergius. OCA texts govern.
  // OCA carries Theodosia on Apr 3 and May 29 — same saint; OCA Apr 3 texts used for May 29 N.S.
  "05-29": {
    saint: "Holy Martyred Virgin Theodosia of Tyre",
    oca_primary: true,
    service_file: "05-29.pdf",
    rank: "simple",
    fekula_section: "2A",
    note: "May 29 O.S. = June 11 N.S. OCA commemorates May 29 N.S. — DIVERGENCE; OCA date governs. " +
          "§2A simple — 3 stichera. OCA troparion (Tone 4 Podoben) and kontakion (Tone 4 Podoben) " +
          "both differ from St. Sergius texts; OCA texts govern. " +
          "OCA also commemorates Theodosia on Apr 3 with the same texts. " +
          "Martyred at Constantinople under Constantine Copronymus for defending holy icons.",
    feast_e: "absent — §2A, readings from Oktoechos",
    feast_g: "absent — §2A, readings from Oktoechos",
    troparion: {
      tone: 4,
      text: "Through your struggles in the contest, " +
            "you offered the God-given gift of your virginity to the Word; " +
            "therefore, He brought you to the heavenly Bridal Chamber. " +
            "O prize-winner, intercede with the Master of all, " +
            "that He may deliver us from all manner of misfortunes.",
    },
    kontakion: {
      tone: 4,
      text: "As a pure virgin and prize-winner, " +
            "you were spiritually betrothed to the King of Heaven, " +
            "O all-praised Theodosia, entreat Him for the salvation of our souls.",
      matins_ode: 6,
    },
  },

  // ── May 30 — Venerable Isaacius, Abbot of the Monastery of Dalmatus ──────────
  // Source: St. Sergius 05-30.pdf. May 30 O.S. = June 12 N.S. — DIVERGENCE.
  // OCA commemorates May 30 N.S.; encoded at 05-30 per OCA primacy.
  // Service rank: Simple (§2A) — 3 stichera. AT LITURGY: kontakion only (no epistle/gospel).
  // St. Sergius PDF has no troparion rubric at Vespers; OCA standard venerable Tone 8 text used.
  // OCA kontakion matches St. Sergius exactly.
  "05-30": {
    saint: "Venerable Isaacius, Abbot of the Monastery of Dalmatus",
    oca_primary: true,
    service_file: "05-30.pdf",
    rank: "simple",
    fekula_section: "2A",
    note: "May 30 O.S. = June 12 N.S. OCA commemorates May 30 N.S. — DIVERGENCE; OCA date governs. " +
          "§2A simple — 3 stichera. St. Sergius PDF has no troparion rubric; " +
          "OCA standard venerable Tone 8 troparion used. Kontakion matches St. Sergius. " +
          "Confronted Emperor Valens over Arianism; prophesied his defeat at Adrianople (378). " +
          "Also commemorated Aug 3 with Dalmatus and Faustus.",
    feast_e: "absent — §2A, readings from Oktoechos",
    feast_g: "absent — §2A, readings from Oktoechos",
    troparion: {
      tone: 8,
      text: "The image of God was truly preserved in you, O Father, " +
            "for you took up the Cross and followed Christ. " +
            "By so doing you taught us to disregard the flesh for it passes away " +
            "but to care instead for the soul, since it is immortal. " +
            "Therefore your spirit, venerable Isaac, rejoices with the angels.",
    },
    kontakion: {
      tone: 8,
      text: "As a faithful favorite of God you became enflamed with zeal for the Church of Christ " +
            "and drew in the reins of the emperor Valens, O venerable one; " +
            "you prophetically foretold to him the captivity of the Church and of his own wretched death. " +
            "Therefore, venerable Isaac, ceaselessly pray for us who honor you.",
      matins_ode: 6,
    },
  },

  // ── May 31 — Holy Martyr Hermias ──────────────────────────────────────────────
  // Source: St. Sergius 05-31.pdf. May 31 O.S. = June 13 N.S. — DIVERGENCE.
  // OCA commemorates May 31 N.S.; encoded at 05-31 per OCA primacy.
  // Service rank: Simple (§2A) — 3 stichera. AT LITURGY: troparion and kontakion only.
  // OCA troparion matches St. Sergius. OCA kontakion (Tone 2 generic) differs from St. Sergius (Tone 6 proper).
  "05-31": {
    saint: "Holy Martyr Hermias of Comana",
    oca_primary: true,
    service_file: "05-31.pdf",
    rank: "simple",
    fekula_section: "2A",
    note: "May 31 O.S. = June 13 N.S. OCA commemorates May 31 N.S. — DIVERGENCE; OCA date governs. " +
          "§2A simple — 3 stichera. OCA troparion matches St. Sergius (Tone 4 generic martyr). " +
          "OCA kontakion (Tone 2 Podoben generic) differs from St. Sergius proper Tone 6; OCA governs. " +
          "Martyred at Comana, Cappadocia under Antoninus Pius (138-161); an aged veteran soldier.",
    feast_e: "absent — §2A, readings from Oktoechos",
    feast_g: "absent — §2A, readings from Oktoechos",
    troparion: {
      tone: 4,
      text: "Your holy martyr Hermias, O Lord, " +
            "through his sufferings has received an incorruptible crown from You, our God. " +
            "For having Your strength, he laid low his adversaries, " +
            "and shattered the powerless boldness of demons. " +
            "Through his intercessions, save our souls!",
    },
    kontakion: {
      tone: 2,
      text: "You appeared as a bright star announcing Christ with your radiance, " +
            "which is repulsive to this world, O Martyr Hermias; " +
            "extinguishing the allure of false gods, " +
            "you enlighten the faithful, " +
            "always interceding for us all.",
      matins_ode: 6,
    },
  },

  // ── June 20 — HM Methodius, Bishop of Patara ───────────────────────────────
  // Source: St. Sergius 06-20.pdf. OCA and St. Sergius agree.
  // Service rank: Simple (§2A) — 3 stichera, Alleluia rubric, one canon at Matins.
  "06-20": {
    saint: "Holy Hieromartyr Methodius, Bishop of Patara",
    oca_primary: true,
    service_file: "06-20.pdf",
    rank: "simple",
    note: "Bishop of Patara in Lycia; refuted Origen. Martyred c. 311. " +
          "Distinct from Patriarch Methodius of Constantinople (June 14).",
    troparion: {
      tone: 2,
      text: "Thy blood mystically crieth out to God from the earth, like that of Abel, " +
            "O divinely wise and holy hierarch Methodius, who manifestly preached that God " +
            "became a man. Wherefore, thou hast put the deception of Origen to shame and " +
            "hast passed over to the heavenly bridal chamber. Entreat Christ God, that He " +
            "save our souls.",
    },
    kontakion: {
      tone: 4,
      text: "Thou wast a priest of the mysteries of the Holy Trinity, a proclaimer of the " +
            "commandments of God, passing all understanding, and the confirmation of the " +
            "Orthodox, O Methodius thou didst denounce the thoughts of the heretics for the " +
            "sake of Orthodoxy, shown by thy blood to be a hieromartyr. Standing before " +
            "Christ with the angels, entreat Him that we be saved.",
      matins_ode: 6,
    },
  },

  // ── June 21 — Holy Martyr Julian of Tarsus ──────────────────────────────────
  // Source: St. Sergius 06-21.pdf. OCA and St. Sergius agree.
  // Service rank: Simple (§2A) — 3 stichera, both Oktoechos canons at Matins.
  "06-21": {
    saint: "Holy Martyr Julian of Tarsus",
    oca_primary: true,
    service_file: "06-21.pdf",
    rank: "simple",
    note: "Youth martyred c. 305 under Diocletian; cast into the sea in a sack with " +
          "sand and serpents. St. John Chrysostom composed an encomium in his honor.",
    troparion: {
      tone: 4,
      text: "In his sufferings, Thy martyr Julian O Lord, received an imperishable crown " +
            "from Thee, our God; for, possessed of Thy might, he set at naught the tyrants " +
            "and crushed the feeble audacity of the demons. By his supplications save Thou " +
            "our souls.",
    },
    kontakion: {
      tone: 2,
      text: "As is meet, let us all praise Julian today, the invincible warrior of piety, " +
            "the true counselor and soldier of the Truth, and let us cry aloud unto him: " +
            "Entreat Christ God on behalf of us all!",
      matins_ode: 6,
    },
  },

  // ── June 22 — HM Eusebius, Bishop of Samosata ───────────────────────────────
  // Source: St. Sergius 06-22.pdf. OCA and St. Sergius agree.
  // Service rank: Simple (§2A) — 3 stichera, Alleluia rubric, one canon at Matins.
  // Troparion: NOT printed in PDF — sourced from OCA (general hieromartyr troparion T4).
  "06-22": {
    saint: "Holy Hieromartyr Eusebius, Bishop of Samosata",
    oca_primary: true,
    service_file: "06-22.pdf",
    rank: "simple",
    note: "Defender of Nicene Orthodoxy against Arianism. Martyred 380 when an Arian " +
          "woman struck him with a roof tile. Troparion not printed in PDF; sourced from OCA.",
    troparion: {
      tone: 4,
      text: "By sharing in the ways of the apostles, thou didst occupy their throne. " +
            "Through the practice of virtue, thou didst find thine activity to be a passage " +
            "to divine vision, O divinely inspired one. Wherefore, ordering the word of truth, " +
            "thou didst suffer for the Faith even to the shedding of thy blood. " +
            "O Hieromartyr Eusebius, entreat Christ God, that our souls be saved.",
    },
    kontakion: {
      tone: 4,
      text: "Having lived piously in the rank of hierarch and traversed the path of " +
            "martyrdom, thou didst extinguish the burnt offerings of the idolaters, O holy " +
            "hierarch Eusebius. But as thou hast boldness before Christ God, entreat Him, " +
            "that our souls be saved.",
      matins_ode: 6,
    },
  },

  // ── June 23 — Multi-service: Martyr Agrippina (OCA primary) + Vladimir Icon ─
  // Source: 06-23.pdf (Agrippina, Simple §2A, OCA primary) +
  //         06-23A.pdf (Vladimir Icon, Polyeleos §2E, OCA listed but secondary to Agrippina)
  // OCA agreement: Both Agrippina AND Vladimir Icon are on OCA calendar June 23.
  // Agrippina listed as primary (first); Vladimir Icon is also full OCA — not Russian-only.
  // Vladimir Icon also celebrated May 21 and August 26.
  "06-23": [
    {
      saint: "Holy Martyr Agrippina",
      oca_primary: true,
      service_file: "06-23.pdf",
      rank: "simple",
      note: "Vladimir Icon of the Theotokos is also a full OCA commemoration on June 23 " +
            "(also May 21 & Aug 26). Agrippina listed first/primary by OCA.",
      troparion: {
        tone: 4,
        text: "Thy ewe-lamb Agrippina, O Jesus crieth out with a loud voice: Thee do I love, " +
              "O my Bridegroom, and, seeking Thee, I endure suffering. In Thy baptism I am " +
              "crucified and buried with Thee. I suffer for Thy sake, that I may reign with " +
              "Thee; I die for Thee, that I may live with Thee. Accept me, who with love " +
              "sacrifice myself for Thee, as an unblemished offering! By her supplications, " +
              "in that Thou art merciful, save Thou our souls.",      },
      kontakion: {
        tone: 4,
        text: "The radiant day of thy splendid struggles hath dawned, whereon the divine " +
              "Church, honoring them, doth call all together with gladness to cry out to thee: " +
              "Rejoice, O virgin and martyr, most honored Agrippina!",
        matins_ode: 6,
      },
    },
    {
      saint: "Vladimir Icon of the Most Holy Theotokos",
      oca_primary: false,
      service_file: "06-23A.pdf",
      rank: "polyeleos",
      note: "The Vladimir Icon is commemorated on the OCA calendar on June 23 " +
            "(also May 21 and August 26). This is a full OCA commemoration, not Russian-only. " +
            "The June 23 celebration commemorates the deliverance of Moscow from Khan Achmed (1480).",
      feast_e: "Hebrews 9:1-7",
      feast_g: "Luke 10:38-42; 11:27-28",
      troparion: {
        tone: 4,
        text: "Today the most glorious city of Moscow is adorned, having received thy " +
              "wonder-working icon like the radiance of the sun; and we, hastening to it and " +
              "entreating thee, O Sovereign Lady, do thus cry aloud: O most wondrous Lady " +
              "Theotokos, entreat Christ our God, Who became incarnate through thee, that He " +
              "deliver this city, and all cities and lands where Christians dwell, unharmed by " +
              "all the assaults of the enemy, and save thou our souls, in that thou art " +
              "compassionate.",
      },
      kontakion: {
        tone: 8,
        text: "To thee the champion leader, we thy flock chant hymns of victory, as ones " +
              "rescued out of sufferings O Lady Theotokos, wherefore on the feast of thy " +
              "meeting we radiantly celebrate the arrival of thy precious image, and cry to " +
              "thee: Rejoice thou bride unwedded.",
        matins_ode: 6,
      },
    },
  ],

  // ── June 24 — Nativity of St John the Forerunner (Great Feast) ───────────────
  // Source: St. Sergius 06-24.pdf. OCA and St. Sergius agree fully.
  // Service rank: GREAT FEAST — special rules apply (§2G3 and Typicon of the Feast).
  // Hours assembly: outside ordinary scope (flagged in UI as "Out of scope — Great Feast").
  // Troparion and kontakion encoded for reference.
  "06-24": {
    saint: "Nativity of the Holy Prophet & Forerunner John the Baptist",
    oca_primary: true,
    service_file: "06-24.pdf",
    rank: "great_feast",
    note: "Great Feast of the Nativity of John the Forerunner. One of the twelve Great " +
          "Feasts. Hours follow Feast rules (out of ordinary scope). Troparion and " +
          "kontakion encoded for reference.",
    feast_e: "Romans 13:11-14:4",
    feast_g: "Luke 1:1-25, 57-68, 76, 80",
    troparion: {
      tone: 4,
      text: "O prophet and forerunner of the coming of Christ, we who honor thee with love " +
            "are at a loss how to worthily praise thee; for by thy glorious and honored " +
            "nativity thou didst loose the barrenness of her who gave birth to thee and the " +
            "muteness of thy father, and proclaimed to the world the incarnation of the Son " +
            "of God.",
    },
    kontakion: {
      tone: 3,
      text: "Today she who before was barren giveth birth unto the forerunner of Christ, " +
            "he is the fulfillment of all prophecy; for, laying his hand in the Jordan upon " +
            "Him Whom the prophets foretold, he hath been shown to be the prophet, herald " +
            "and forerunner of the Word of God.",
      matins_ode: 6,
    },
  },

  // ── June 25 — Afterfeast of the Nativity of the Forerunner + Nun-Martyr Febronia
  // Source: St. Sergius 06-25.pdf. OCA and St. Sergius agree.
  // Service rank: §2G1 — Afterfeast with saint (Febronia at Six-Stichera level, 6 stichera 3+3)
  // Per Fekula §2G1: troparion of feast, Glory... of saint; kontakion of feast only
  // (unless Doxology, in which case saint kontakion at 3rd & 9th Hours — Febronia is §2C level
  // so feast kontakion governs at all Hours).
  // Two troparia and kontakion of forerunner encoded; Febronia kontakion also present.
  "06-25": {
    saint: "Afterfeast of the Nativity of the Forerunner & Nun-Martyr Febronia",
    oca_primary: true,
    service_file: "06-25.pdf",
    rank: "six_stichera",
    fekula_section_override: "2G1",
    note: "Afterfeast of the Nativity of John the Forerunner. Per Fekula §2G1: troparion " +
          "of the feast at the Hours, Glory... of the saint; kontakion of the feast only " +
          "at all Hours (Febronia is not Doxology rank). Hours assembly out of ordinary " +
          "scope until §2G1–§2G4 is built.",
    troparion: {
      tone: 4,
      text: "O prophet and forerunner of the coming of Christ, we who honor thee with love " +
            "are at a loss how to worthily praise thee; for by thy glorious and honored " +
            "nativity thou didst loose the barrenness of her who gave birth to thee and the " +
            "muteness of thy father, and proclaimed to the world the incarnation of the Son " +
            "of God.",
      saint: "Forerunner (feast troparion — governs Hours per §2G1)",
    },
    troparion_second: {
      tone: 4,
      text: "Thy ewe-lamb Febronia, O Jesus crieth out with a loud voice: Thee do I love, " +
            "O my Bridegroom, and, seeking Thee, I endure suffering. In Thy baptism I am " +
            "crucified and buried with Thee. I suffer for Thy sake, that I may reign with " +
            "Thee; I die for Thee, that I may live with Thee. Accept me, who with love " +
            "sacrifice myself for Thee, as an unblemished offering! By her supplications, " +
            "in that Thou art merciful, save Thou our souls.",
      saint: "Febronia (Glory... at Hours per §2G1)",
    },
    kontakion: {
      tone: 3,
      text: "Today she who before was barren giveth birth unto the forerunner of Christ, " +
            "he is the fulfillment of all prophecy; for, laying his hand in the Jordan upon " +
            "Him Whom the prophets foretold, he hath been shown to be the prophet, herald " +
            "and forerunner of the Word of God.",
      matins_ode: 6,
      saint: "Forerunner (feast kontakion — governs all Hours per §2G1)",
    },
  },
  // ── June 26 — Venerable David of Thessalonica ───────────────────────────────
  // Source: St. Sergius 06-26.pdf. OCA and St. Sergius agree.
  // Service rank: Simple (§2A) — 3 stichera, one canon at Matins.
  // Note: June 26 is also the 2nd day of the Afterfeast of the Forerunner; the
  // St. Sergius Menaion treats David as primary; OCA agrees.
  // All Saints of North America synaxis falls on 2nd Sunday after Pentecost —
  // in 2026 that is July 7, not in June.
  "06-26": {
    saint: "Venerable David of Thessalonica",
    oca_primary: true,
    service_file: "06-26.pdf",
    rank: "simple",
    note: "5th-century ascetic who lived in an almond tree for 3 years near Thessalonica, " +
          "emulating the Stylites. Known for holding burning embers before the emperor " +
          "without being burned.",
    troparion: {
      tone: 8,
      text: "In thee, O father, the image of God was preserved, for taking up thy cross, " +
            "thou didst follow after Christ; by activity thou didst learn to disdain the " +
            "flesh, as something transient, but to care for thy soul as something immortal. " +
            "Wherefore, with the angels thy spirit doth rejoice, O venerable David.",
    },
    kontakion: {
      tone: 1,
      text: "An ever-blossoming garden, bearing the fruits of the virtues, thou didst appear " +
            "in the tree of a grove, like a right melodious harp, and receiving the Lord, the " +
            "Tree of life, in thy heart all the more, and cultivating it like a garden, O " +
            "divinely wise one, thou hast thereby nurtured us with grace. Pray thou ever on " +
            "our behalf, O all-blessed David.",
      matins_ode: 6,
    },
  },

  // ── June 27 — Venerable Sampson the Hospitable ──────────────────────────────
  // Source: St. Sergius 06-27.pdf. OCA and St. Sergius agree.
  // Service rank: Simple (§2A) — 3 stichera, one canon at Matins.
  "06-27": {
    saint: "Venerable Sampson the Hospitable of Constantinople",
    oca_primary: true,
    service_file: "06-27.pdf",
    rank: "simple",
    note: "Roman-born physician and monastic who founded a renowned hospital in " +
          "Constantinople. Healed Emperor Justinian of a grave illness. Reposed c. 530.",
    troparion: {
      tone: 8,
      text: "In thy patience, O venerable father, thou didst acquire thy reward, having " +
            "endured in prayer without ceasing, and loved the poor and provided for them. " +
            "Beseech Christ God, O merciful and blessed Sampson, that our souls be saved.",
    },
    kontakion: {
      tone: 8,
      text: "Rejoicing with psalms and hymns, O divinely wise and venerable Sampson, and " +
            "hastening to thy divine shrine, as to that of an excellent physician and a right " +
            "acceptable intercessor, we glorify Christ Who hath bestowed upon thee such grace " +
            "of healing.",
      matins_ode: 6,
    },
  },

  // ── June 28 — Translation of Relics of Holy Unmercenaries Cyrus & John ──────
  // Source: St. Sergius 06-28.pdf. OCA and St. Sergius agree.
  // Service rank: Six-Stichera (§2C) — 6 stichera, both Oktoechos canons +
  //   6-troparion canon of the saints at Matins.
  "06-28": {
    saint: "Translation of the Relics of the Holy Unmercenary Physicians Cyrus and John",
    oca_primary: true,
    service_file: "06-28.pdf",
    rank: "six_stichera",
    note: "The translation of the relics of the Holy Unmercenaries Cyrus and John from " +
          "Canopus to Menouthis near Alexandria in the 5th century. Their primary feast " +
          "is January 31. Both were physician-martyrs: Cyrus a monk, John a soldier, " +
          "who suffered under Diocletian.",
    troparion: {
      tone: 5,
      text: "O Christ God Who hast given us the miracles of Thy holy martyrs as an " +
            "invincible rampart, through their supplications set at naught the counsels " +
            "of the heathen and strengthen right believing rulers, in that Thou alone art " +
            "good and the Lover of mankind.",
    },
    kontakion: {
      tone: 3,
      text: "Receiving the gift of miracles from divine grace, O saints, ye work wonders " +
            "unceasingly, cutting down all our passions with invisible skill, O divinely " +
            "wise Cyrus and glorious John; for ye are divine physicians.",
      matins_ode: 6,
    },
  },
  // ── June 29 — Holy Apostles Peter & Paul (Great Feast) ──────────────────────
  // Source: St. Sergius 06-29.pdf. OCA and St. Sergius agree fully.
  // Service rank: VIGIL (§2F) — Great Feast with Little and Great Vespers, Polyeleos Matins.
  // Hours assembly: outside ordinary scope (Great Feast). Propers encoded for reference.
  "06-29": {
    saint: "Holy, Glorious, All-Praised and Preeminent Apostles Peter and Paul",
    oca_primary: true,
    service_file: "06-29.pdf",
    rank: "vigil",
    note: "Great Feast of the Holy Apostles Peter and Paul. One of the most solemn " +
          "apostolic feasts. Full Vigil service. Peter martyred by crucifixion (inverted), " +
          "Paul by beheading, both in Rome under Nero c. 67 AD. Troparion and kontakion " +
          "encoded for reference; Hours assembly outside ordinary scope.",
    troparion: {
      tone: 4,
      text: "O first enthroned among the apostles and teachers of the whole world: " +
            "entreat the Master of all, that He grant peace to the world " +
            "and great mercy to our souls.",
    feast_e: "2 Corinthians 11:21-12:9",
    feast_g: "Matthew 16:13-19",
    },
    kontakion: {
      tone: 2,
      text: "The steadfast and divinely eloquent preachers, the foremost of Thine apostles, " +
            "O Lord, hast Thou received into the rest and delight of Thy good things; " +
            "for Thou hast accepted their pangs and death as greater than any wholeburnt " +
            "offering, O Thou Who alone knowest the hearts of all mankind.",
      matins_ode: 6,
    },
  },

  // ── June 30 — Synaxis of the Holy, Glorious & All-Praised Twelve Apostles ───
  // Source: St. Sergius 06-30.pdf. OCA and St. Sergius agree fully.
  // Service rank: Six-Stichera (§2C) — 6 stichera (3 Peter & Paul + 3 twelve apostles).
  // The troparion is the same as June 29 per OCA and St. Sergius.
  // The kontakion is the Synaxis' own (T2) — distinct from June 29.
  // Note: June 30 in 2026 falls during Pentecostarion (Pascha+79) — out of ordinary scope.
  "06-30": {
    saint: "Synaxis of the Holy, Glorious and All-Praised Twelve Apostles",
    oca_primary: true,
    service_file: "06-30.pdf",
    rank: "six_stichera",
    note: "The day after Peter & Paul, honoring all Twelve Apostles together. " +
          "Troparion is the same as June 29. The Synaxis has its own kontakion (T2). " +
          "In 2026 this date falls in the Pentecostarion (ordinary assembly rules do not apply).",
    troparion: {
      tone: 4,
      text: "O first enthroned among the apostles and teachers of the whole world: " +
            "entreat the Master of all, that He grant peace to the world " +
            "and great mercy to our souls.",
      note: "Same troparion as June 29 (Feast of Peter & Paul) — confirmed by OCA and St. Sergius.",
    feast_e: "1 Corinthians 4:9-16",
    feast_g: "Mark 3:13-19",
    },
    kontakion: {
      tone: 2,
      text: "Christ the Rock hath radiantly glorified the rock of Faith, " +
            "the most excellent of His disciples, as He doth Paul and the assembly " +
            "of the twelve today; and, faithfully celebrating their memory, " +
            "we glorify Him Who glorified them.",
      matins_ode: 6,
    },
  },

  // ── July 1 — Holy Unmercenaries Cosmas & Damian of Rome ──────────────────
  // Source: St. Sergius 07-01.pdf. OCA and St. Sergius in agreement.
  // Service rank: Six-Stichera (§2C). Jul 1 O.S. = Jul 1 N.S. (Roman feast, no offset).
  "07-01": {
    saint: "Holy Unmercenaries Cosmas & Damian of Rome",
    oca_primary: true,
    service_file: "07-01.pdf",
    rank: "six_stichera",
    fekula_section: "2C",
    note: "OCA commemorates Jul 1 N.S. St. Sergius and OCA in agreement on date and texts.",
    feast_e: "1 Corinthians 12:27-13:8",
    feast_g: "Matthew 10:1, 5-8",
    prokeimenon_tone: 4,
    prokeimenon_text: "In the saints that are in His earth hath the Lord been wondrous; He hath wrought all His desires in them.",
    prokeimenon_stichos: "I beheld the Lord ever before me, for He is at my right hand, that I might not be shaken.",
    alleluia_tone: 4,
    alleluia_verse: "Behold, what is so good or so joyous as for brethren to dwell together in unity?",
    alleluia_stichos: "For there the Lord commanded the blessing, life for evermore.",
    communion_verse: "Rejoice in the Lord, O ye righteous; praise is meet for the upright.",
    troparion: {
      tone: 8,
      text: "O holy unmercenaries and wonder-workers Cosmas and Damian, visit our infirmities. " +
            "Freely have ye received, freely give unto us.",
    },
    kontakion: {
      tone: 2,
      text: "Having received the grace of healings, ye extend health to those in need, " +
            "O most glorious physicians and wonder-workers. By your visitation cast down " +
            "the audacity of the enemy, healing the world with miracles.",
      matins_ode: 6,
    },
  },

  // ── July 2 — St John Maximovich, Abp of Shanghai & San Francisco ─────────
  // Source: St. Sergius 06-19.pdf (Jun 19 O.S. = Jul 2 N.S.).
  // Service rank: Vigil (§2F). OCA and St. Sergius in full agreement on all texts.
  // Service composed at Holy Dormition Monastery, Sofia; pending full ROCOR service.
  "07-02": {
    saint: "St John Maximovich, Archbishop of Shanghai & San Francisco",
    oca_primary: true,
    service_file: "06-19.pdf",
    rank: "vigil",
    fekula_section: "2F",
    note: "Jun 19 O.S. = Jul 2 N.S. Vigil §2F confirmed — 8 stichera, Great Vespers with Litya, " +
          "Polyeleos, three paroemias. OCA and St. Sergius texts in full agreement. " +
          "Service composed at Holy Dormition Monastery, Sofia; full ROCOR service forthcoming.",
    feast_e: "Hebrews 13:17-21",
    feast_g: "Luke 6:17-23",
    prokeimenon_tone: 7,
    prokeimenon_text: "Precious in the sight of the Lord is the death of His saints.",
    prokeimenon_stichos: "What shall I render unto the Lord, for all that He hath rendered unto me?",
    alleluia_tone: 4,
    alleluia_verse: "The righteous cried, and the Lord heard them, and He delivered them out of all their tribulations.",
    alleluia_stichos: "Many are the tribulations of the righteous, but the Lord shall deliver them out of them all.",
    communion_verse: "In everlasting remembrance shall the righteous be; he shall not be afraid of evil tidings.",
    paroemia_1: "Proverbs — The memory of the just is praised (Prov 10:7; 3:13-16; 8:6, 34-35)",
    paroemia_2: "Proverbs — The mouth of the righteous droppeth wisdom (Prov 10:31-32; 11:2-12)",
    paroemia_3: "Wisdom of Solomon — Though the righteous be prevented with death (Wis 4:7-15)",
    troparion: {
      tone: 5,
      text: "Lo, thy care for thy flock in its sojourn prefigured the supplications which thou dost " +
            "ever offer up for the whole world. Thus do we believe, having come to know thy love, " +
            "O holy hierarch and wonderworker John. Wholly sanctified by God through the ministry " +
            "of the most pure Mysteries, and thyself ever strengthened thereby, thou didst hasten " +
            "to the suffering, O most gladsome healer. Hasten now also to the aid of us " +
            "who honor thee with all our heart.",
    },
    kontakion: {
      tone: 4,
      text: "Thy heart hath gone out to all who entreat thee with love, O holy hierarch John, " +
            "and who remember the struggle of thy whole industrious life, and thy painless and " +
            "easy repose, O faithful servant of the most pure Directress.",
      matins_ode: 6,
    },
  },

  // ── July 3 — Holy Martyr Hyacinth of Caesarea ────────────────────────────
  // Source: St. Sergius 07-03.pdf. Jul 3 O.S. = Jul 16 N.S. — DIVERGENCE.
  // OCA commemorates Jul 3 N.S.; encoded at 07-03 per OCA primacy.
  // OCA has composed proper troparia/kontakia; St. Sergius generic texts replaced.
  "07-03": {
    saint: "Holy Martyr Hyacinth of Caesarea",
    oca_primary: true,
    service_file: "07-03.pdf",
    rank: "simple",
    fekula_section: "2A",
    note: "Jul 3 O.S. = Jul 16 N.S. OCA commemorates Jul 3 N.S. — DIVERGENCE; OCA date governs. " +
          "OCA proper troparion and kontakion used; differ from St. Sergius generic martyr texts.",
    feast_e: "absent — §2A, readings from Oktoechos",
    feast_g: "absent — §2A, readings from Oktoechos",
    troparion: {
      tone: 4,
      text: "Like a fragrant hyacinth of the Church of Christ, O all-blessed Hyacinth, " +
            "you radiate grace to the ends of the world. By the brilliance of your confession of faith, " +
            "you were illustrious in contest in emulation of God the Word " +
            "and you ever illumine those who acclaim you.",
    },
    kontakion: {
      tone: 2,
      text: "Come, you faithful, plait a crown of unfading hyacinths today for the Martyr Hyacinth, " +
            "and let us cry to Him: Rejoice, glory of martyrs.",
      matins_ode: 6,
    },
  },

  // ── July 14 — St Nicodemus of the Holy Mountain ──────────────────────────
  // Source: St. Sergius 07-01A.pdf. Jul 1 O.S. = Jul 14 N.S. OCA agrees on date.
  // Service rank: Polyeleos (§2E). OCA has two proper troparia; both differ from St. Sergius.
  // troparion = OCA primary (Tone 3); troparion_2 = OCA secondary (Tone 8). // v1
  "07-14": {
    saint: "Venerable Nicodemus of the Holy Mountain",
    oca_primary: true,
    service_file: "07-01A.pdf",
    rank: "polyeleos",
    fekula_section: "2E",
    note: "Jul 1 O.S. = Jul 14 N.S. OCA and St. Sergius agree on date. Polyeleos §2E confirmed. " +
          "OCA has two proper troparia (Tone 3 primary, Tone 8 secondary); St. Sergius Tone 1 text set aside.",
    feast_e: "Hebrews 13:17-21",
    feast_g: "Luke 6:17-23",
    prokeimenon_tone: 7,
    prokeimenon_text: "Precious in the sight of the Lord is the death of His saints.",
    prokeimenon_stichos: "What shall I render unto the Lord for all that He hath rendered unto me?",
    alleluia_tone: 6,
    alleluia_verse: "Blessed is the man that feareth the Lord; in His commandments shall he greatly delight.",
    alleluia_stichos: "His seed shall be mighty upon the earth.",
    communion_verse: "In everlasting remembrance shall the righteous be; he shall not be afraid of evil tidings.",
    paroemia_1: "Wisdom of Solomon — The souls of the righteous are in the hand of God (Wis 3:1-9)",
    paroemia_2: "Wisdom of Solomon — The righteous live for evermore (Wis 5:15-6:3)",
    paroemia_3: "Wisdom of Solomon — Though the righteous be prevented with death (Wis 4:7-15)",
    troparion: {
      tone: 3,
      text: "You were adorned with the charism of wisdom, O Father, and appeared as a trumpet of the Spirit, " +
            "and as a teacher of virtue, O Nikodemos who speaks of God, for you have offered to all " +
            "the teaching of salvation and purity of life, pouring forth enlightenment through your writings, " +
            "with which riches you have illumined the world.",
    },
    troparion_2: {
      tone: 8,
      text: "The Orthodox Church honors you as a virtuous member, its finest initiate, and a God-bearing " +
            "teacher of piety; for having received heavenly grace, you shone your inspirational writings " +
            "upon those who cry to you: Rejoice, O Father Nikodemos.",
    },
    kontakion: {
      tone: 8,
      text: "The Church doth celebrate thee as a most excellent initiate of the mysteries of the life of " +
            "virtue and piety, O God-bearing teacher of Orthodoxy; for receiving gifts from heaven, " +
            "with thy divine writings thou dost illumine those who cry to thee: Rejoice, O father Nicodemus!",
      matins_ode: 6,
    },
  },

  // ── July 15 — St Juvenal, Patriarch of Jerusalem ─────────────────────────
  // Source: St. Sergius 07-02.pdf. Jul 2 O.S. = Jul 15 N.S. — DIVERGENCE.
  // OCA commemorates Jul 2 N.S.; encoded at 07-15 per OCA primacy.
  // OCA proper troparion used; St. Sergius generic hierarch text replaced.
  // No OCA kontakion provided; St. Sergius kontakion retained.
  "07-15": {
    saint: "St Juvenal, Patriarch of Jerusalem",
    oca_primary: true,
    service_file: "07-02.pdf",
    rank: "simple",
    fekula_section: "2A",
    note: "Jul 2 O.S. = Jul 15 N.S. OCA commemorates Jul 2 N.S. — DIVERGENCE; OCA date governs. " +
          "OCA proper troparion used; replaces St. Sergius generic hierarch text. " +
          "Kontakion from St. Sergius — no OCA kontakion provided.",
    feast_e: "absent — §2A, readings from Oktoechos",
    feast_g: "absent — §2A, readings from Oktoechos",
    troparion: {
      tone: 4,
      text: "O successor of the Brother of the Lord on the archpastoral throne of the holy city of Jerusalem, " +
            "you are worthy of praise. With the divinely-wise Fathers of Chalcedon you expounded the " +
            "Incarnation of the Son of God, Who came to renew the world and to deify all men, united " +
            "with Him in His Church. O Hierarch Father Juvenal, now as you stand before the throne of " +
            "Father of Lights in the Kingdom, pray for those who lovingly honor you, and may the peace " +
            "and mercy of the Savior be with us.",
    },
    kontakion: {
      tone: 2,
      text: "Assembling now, with hymns let us honor Juvenal, the boast of Jerusalem, the namesake of youth, " +
            "who today hast been translated to the life which waxeth not old, the heir of the apostles, " +
            "fellow initiate of the mysteries with the God-bearing fathers, expounder of the dogmas of " +
            "Orthodoxy, denouncer of false doctrines, the universal teacher of the Truth.",
      matins_ode: 6,
    },
  },

};

function getMenaionEntry(date) {
  const key = `${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  return SAMPLE_MENAION[key] || null;
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
    tone = ((weeksSincePascha % 8) + 8) % 8 || 8;
  } else {
    tone = (weeksFromAllSaints % 8) + 1;
  }

  const dow = date.getDay();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = dayNames[dow];

  // Feast period detection — runs before season detection
  const feastPeriod = getFeastPeriod(date, relevantPascha);

  // Season detection — most restrictive first
  let season, seasonNote;

  if ((date >= thisGreatLentStart && date < relevantPascha) ||
      (date >= nextGreatLentStart && date < followingPascha)) {
    season = "lent";
    seasonNote = "Great Lent — Lenten Hours order applies (Fekula Chapter Three)";
  } else if (date >= relevantPascha && date <= brightSaturday) {
    season = "brightweek";
    seasonNote = "Bright Week — Paschal Hours order applies";
  } else if (date > brightSaturday && date < allSaintsSunday) {
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

  return {
    tone, dayName, dow, season, seasonNote, feastPeriod, namedDay,
    pascha: relevantPascha, allSaintsSunday,
    nextMeatfareSunday, followingPascha,
    paschaOffset,
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


// ─── UNIFIED HOUR ASSEMBLER ─────────────────────────────────────────────────
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

const PENTECOSTARION = {

  // ── P+35 — Sixth Sunday of Pascha: Sunday of the Blind Man ──────────────────
  // Source: St. Sergius 60.pdf | Fekula §4B11
  // This file covers Saturday evening Vespers through Sunday Liturgy.
  // Two canons at Matins: Canon of Pascha (chanted, Tone I) + Canon of Blind Man (read, Tone V)
  35: {
    name: "Sixth Sunday of Pascha — Sunday of the Blind Man",
    source_file: "60.pdf",
    fekula_section: "4B11",
    hours_format: "pentecostarion_sunday",
    tone: 5,

    // ── TROPARIA / KONTAKIA ──────────────────────────────────────────────────

    // Resurrection Troparion — at God is the Lord; used at Hours
    troparion: {
      tone: 5,
      text: "Let us, O faithful, praise and worship the Word " +
            "Who is co-beginningless with the Father and the Spirit, " +
            "and Who was born of the Virgin for our salvation; " +
            "for He was pleased to ascend the Cross in the flesh " +
            "and to endure death, " +
            "and to raise the dead by His glorious Resurrection.",
    },

    // Dismissal Theotokion (Glory/Both now after Resurrection Troparion at Matins)
    dismissal_theotokion: {
      tone: 5,
      text: "Rejoice, impassible portal of the Lord! " +
            "Rejoice, rampart and protection of those who have recourse unto thee! " +
            "Rejoice, haven untouched by storms, " +
            "and who knowing not wedlock, " +
            "didst bear in the flesh thy Creator and God. " +
            "Cease not to intercede for those " +
            "who praise and worship thine Offspring.",
    },

    // Kontakion after Ode III — used at 1st and 6th Hours (Fekula §4A)
    kontakion_ode3: {
      tone: 8,
      text: "Thou didst descend into the tomb, O Immortal, " +
            "Thou didst destroy the power of Hades. " +
            "In victory didst Thou arise, O Christ God, " +
            "proclaiming \"Rejoice!\" to the myrrh-bearing women; " +
            "granting peace to Thine apostles, " +
            "and bestowing resurrection on the fallen.",
      name: "Kontakion of Pascha",
    },

    // Ikos of Pascha (after Kontakion at Ode III)
    ikos_ode3: "The myrrh-bearing maidens forestalled the dawn, seeking, as it were day, " +
               "the Sun that was before the sun and Who had once set in the tomb, and they " +
               "cried out one to another: O friends! come, let us anoint with spices the " +
               "life-bringing and buried Body, the Flesh that raised up fallen Adam, that now " +
               "lieth in the tomb. Let us go, let us hasten, like the Magi, and let us worship " +
               "and offer myrrh as a gift to Him Who is wrapped now not in swaddling clothes " +
               "but in a shroud. And let us weep and cry aloud: O Master, arise, Thou Who dost " +
               "grant resurrection to the fallen.",

    // Kontakion after Ode VI — used at 3rd and 9th Hours (Fekula §4A)
    kontakion_ode6: {
      tone: 4,
      text: "Since my soul's noetic eyes are blind and sightless, " +
            "I have come to Thee, O Christ, " +
            "as did the man who was blind from birth. " +
            "And in repentance I cry unto Thee: " +
            "Of those in darkness Thou art the most radiant Light.",
      name: "Kontakion of the Blind Man",
    },

    // Ikos of the Blind Man (after Kontakion at Ode VI)
    ikos_ode6: "Grant me a stream of ineffable wisdom and knowledge from on high, O Christ, " +
               "Thou Light of them that are in darkness and Guide of all those who are gone " +
               "astray, that I may tell of those things that the divine book of the Gospel of " +
               "peace hath taught, to wit, the miracle that was wrought upon the blind man; " +
               "for though blind from birth, he receiveth the physical eyes as well as the eyes " +
               "of the soul, as he crieth out in faith: Of those in darkness art Thou the most " +
               "radiant Light.",

    // Sessional Hymn after Ode III
    sessional_hymn_ode3: {
      tone: 8,
      text: "As the Master and Fashioner of all things passed by, " +
            "He encountered along the way a blind man who was seated there " +
            "and who mourned aloud, saying: " +
            "All my life I have beheld neither the sun shining forth " +
            "nor laid eyes on the bright luminescence of the moon. " +
            "Yet since Thou wast born of an immaculate Virgin so as to fill all with light, " +
            "do Thou now fill me with Thy light, in that Thou art compassionate. " +
            "And thus I shall adore Thee and cry: " +
            "Sovereign Master, Christ my God, forgive me my sins, " +
            "in Thine abundant compassion, O Thou only Lover of mankind.",
    },

    // Resurrection Troparion at Great Doxology (end of Matins)
    troparion_great_doxology: {
      tone: 5,
      text: "Today is salvation come unto the world; " +
            "let us sing praises to Him that arose from the tomb, " +
            "and is the Author of our life. " +
            "For, having destroyed death by death, " +
            "He hath given us the victory and great mercy.",
    },

    // Exapostilarion
    exapostilarion: [
      {
        name: "Exapostilarion of Pascha",
        tone: 3,
        repeat: 2,
        text: "Having fallen asleep in the flesh, " +
              "as a mortal, " +
              "O King and Lord, " +
              "on the third day Thou didst rise again, " +
              "raising up Adam from corruption, " +
              "and abolishing death: " +
              "O Pascha of incorruption, " +
              "Salvation of the world!",
      },
      {
        name: "Exapostilarion of the Blind Man (Glory, Both now)",
        tone: null,
        text: "Enlighten my noetic eyes which are bereft of sight, O Lord, " +
              "because of sin's gloomy darkness. " +
              "And since Thou art compassionate, instill in me humility. " +
              "Cleanse Thou me by the tears of repentance and change of heart.",
      },
    ],

    // ── AT LITURGY ───────────────────────────────────────────────────────────

    feast_e: "Acts 16:16-34",
    feast_g: "John 9:1-38",

    prokeimenon_tone: 8,
    prokeimenon_text: "Make your vows and pay them to the Lord our God.",
    prokeimenon_stichos: "In Judea is God known, His name is great in Israel.",

    alleluia_tone: 8,
    alleluia_verse: "Look upon me and have mercy on me.",
    alleluia_stichos: "My steps do Thou direct according to Thy saying.",

    // Zadostoinik — replaces It is truly meet throughout Pentecostarion
    zadostoinik_refrain: "The angel cried unto her that is full of grace: " +
                         "Rejoice, O pure Virgin! And again I say, rejoice! " +
                         "For thy Son is risen from the grave on the third day.",
    zadostoinik_irmos: "Shine, shine, O new Jerusalem, " +
                       "for the glory of the Lord hath arisen upon thee; " +
                       "dance now and be glad, O Zion, " +
                       "and do thou exult, O pure Theotokos, " +
                       "in the arising of Him Whom thou didst bear.",

    communion_verse: "Receive ye the body of Christ, taste ye of the fountain of immortality. " +
                     "Verse: Praise the Lord from the heavens, praise Him in the highest.",

    // ── AT VESPERS (Saturday Evening) ───────────────────────────────────────

    vespers_prokeimenon: {
      tone: 6,
      text: "The Lord is King, He is clothed with majesty.",
      verses: [
        "The Lord is clothed with strength and He hath girt Himself.",
        "For He established the universe which shall not be shaken.",
        "Holiness becometh Thy house, O Lord, unto length of days.",
      ],
      type: "saturday_great_prokeimenon",
    },

    has_litya: true,

    litya_stichera: [
      {
        label: "Glory",
        tone: 4,
        text: "The blind man, accounting all his life as though it were night, " +
              "cried unto Thee, O Lord: " +
              "Open mine eyes, O our Savior, " +
              "Thou Son of David, " +
              "that together with all mankind, " +
              "I also may praise Thy power.",
      },
      {
        label: "Both now",
        tone: 4,
        text: "Mercifully regard the supplications of thy servants, " +
              "O all-immaculate one, " +
              "quelling the cruel uprisings of the demons against us, " +
              "delivering us from every sorrow; " +
              "for thee alone do we have as a steadfast and sure confirmation, " +
              "and having acquired thine intercession; " +
              "let not us who call upon thee be put to shame, " +
              "O Sovereign Lady. " +
              "Hasten thou to answer the entreaties of those who cry out to thee with faith: " +
              "Rejoice, thou help, joy and protection of all, " +
              "and the salvation of our souls!",
      },
    ],

    has_paroemias: false,

    // ── AT MATINS ────────────────────────────────────────────────────────────

    matins_gospel_ref: "Sunday Resurrection Gospel 5 (John 20:19-31) — FLAG: verify per Tone V rotation",

    matins_prokeimenon: {
      tone: 5,
      text: "Arise, O Lord my God, let Thy hand be lifted high; for Thou art King unto the ages.",
      stichos: "I will confess Thee, O Lord, with my whole heart, I will tell of all Thy wonders.",
    },

    has_great_doxology: true,
    magnificat_sung: false,  // rubric: No Magnificat — straightway irmos of Ode IX

    gospel_sticheron: {
      tone: 8,
      text: "The tears of Mary are not warmly shed in vain. " +
            "For behold, she was held worthy of the angels' teaching " +
            "and vouchsafed the sight of Thee, Thyself, O Christ. " +
            "But again her thoughts were earthly thoughts as those of a weak woman. " +
            "Therefore she was dismissed and told not to touch Thee, O Christ. " +
            "But she was also sent as herald to the disciples, " +
            "and she affirmed to them the good tidings proclaiming the Ascension to the portion of the Father. " +
            "With her do Thou also make us worthy of Thy manifestation, O Master and Lord.",
    },

    canons: [
      {
        name: "Canon of Pascha",
        tone: 1,
        mode: "chanted",
        refrain: "Christ is risen from the dead.",
        // Full canon odes in 60.txt — reference source PDF for complete texts
      },
      {
        name: "Canon of the Blind Man",
        tone: 5,
        mode: "read",
        refrain: "Glory to Thee, Our God, Glory to Thee.",
        // Full canon odes in 60.txt — reference source PDF for complete texts
      },
    ],

    // ── FLAGS ────────────────────────────────────────────────────────────────
    menaion_set_aside: false,
    it_is_truly_meet_suppressed: true,  // Zadostoinik replaces throughout Pentecostarion
    note: "Saturday Vespers through Sunday Liturgy. Two canons at Matins: " +
          "Canon of Pascha (chanted, Tone I, refrain: Christ is risen) + " +
          "Canon of Blind Man (read, Tone V, refrain: Glory to Thee). " +
          "Matins Gospel number not in PDF — Gospel 5 (John 20:19-31) for Tone V; " +
          "verify against OCA practice. No paroemias — Sunday service, not feast with OT lessons. " +
          "Epistle/Gospel pericope numbers (Slavic): verify Acts §34 / John §34.",
  },

  // ── P+36 — Monday of the Sixth Week (Blind Man afterfeast) ──────────────────
  // Source: St. Sergius 61.pdf | Fekula §4A (weekday Pentecostarion)
  // File also contains Sunday evening Small Vespers (P+35 eve).
  // One canon at Matins: Canon of the Blind Man (8 troparia/ode) + 4 Menaion.
  // Magnificat IS sung at Ode VIII (weekday rule — differs from Sunday).
  // Small Doxology (read) at Matins — confirms weekday.
  // Troparia rotation: Period 3 (Weeks 4-6) — preceding Sunday troparion governs.
  36: {
    name: "Monday of the Sixth Week — Blind Man Afterfeast",
    source_file: "61.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 5,  // preceding Sunday tone

    // ── TROPARIA / KONTAKIA ──────────────────────────────────────────────────

    // Troparion at Hours — preceding Sunday (Tone V Resurrection) + Menaion if present
    troparion: {
      tone: 5,
      text: "Let us, O faithful, praise and worship the Word " +
            "Who is co-beginningless with the Father and the Spirit, " +
            "and Who was born of the Virgin for our salvation; " +
            "for He was pleased to ascend the Cross in the flesh " +
            "and to endure death, " +
            "and to raise the dead by His glorious Resurrection.",
      source: "preceding_sunday",
    },

    // Dismissal Theotokion
    dismissal_theotokion: {
      tone: 5,
      text: "Rejoice, impassible portal of the Lord! " +
            "Rejoice, rampart and protection of those who have recourse unto thee! " +
            "Rejoice, haven untouched by storms, " +
            "and who knowing not wedlock, " +
            "didst bear in the flesh thy Creator and God. " +
            "Cease not to intercede for those " +
            "who praise and worship thine Offspring.",
    },

    // AT THE HOURS (Fekula §4A Period 3):
    //   One kontakion at all Hours = preceding Sunday kontakion (Blind Man, Tone IV).
    //   Exception: if Menaion saint is Doxology/Polyeleos/Vigil rank,
    //   3rd and 9th Hours use Menaion kontakion instead.
    hours_kontakion: {
      tone: 4,
      text: "Since my soul's noetic eyes are blind and sightless, " +
            "I have come to Thee, O Christ, " +
            "as did the man who was blind from birth. " +
            "And in repentance I cry unto Thee: " +
            "Of those in darkness Thou art the most radiant Light.",
      name: "Kontakion of the Blind Man (preceding Sunday kontakion)",
      note: "All Hours. If Menaion is Doxology+ rank, substitute Menaion kontakion at 3rd/9th.",
    },

    // AT MATINS: Ode III = Menaion kontakion; Ode VI = Blind Man kontakion (Pentecostarion)
    matins_kontakion_ode3: {
      tone: null,
      text: "Menaion kontakion if present; else Blind Man kontakion",
      note: "Matins Ode III — Menaion governs if present",
    },
    matins_kontakion_ode6: {
      tone: 4,
      text: "Since my soul's noetic eyes are blind and sightless, " +
            "I have come to Thee, O Christ, " +
            "as did the man who was blind from birth. " +
            "And in repentance I cry unto Thee: " +
            "Of those in darkness Thou art the most radiant Light.",
      name: "Kontakion of the Blind Man",
      note: "Matins Ode VI — Blind Man kontakion always",
    },

    // Sessional Hymn after Ode III (Blind Man — Glory, Both now)
    sessional_hymn_ode3: {
      tone: 8,
      text: "As the Master and Fashioner of all things passed by, " +
            "He encountered along the way a blind man who was seated there " +
            "and who mourned aloud, saying: " +
            "All my life I have beheld neither the sun shining forth " +
            "nor laid eyes on the bright luminescence of the moon. " +
            "Yet since Thou wast born of an immaculate Virgin so as to fill all with light, " +
            "do Thou now fill me with Thy light, in that Thou art compassionate. " +
            "And thus I shall adore Thee and cry: " +
            "Sovereign Master, Christ my God, forgive me my sins, " +
            "in Thine abundant compassion, O Thou only Lover of mankind.",
    },

    // Exapostilaria — same as P+35
    exapostilarion: [
      {
        name: "Exapostilarion of Pascha",
        tone: 3,
        repeat: 2,
        text: "Having fallen asleep in the flesh, " +
              "as a mortal, " +
              "O King and Lord, " +
              "on the third day Thou didst rise again, " +
              "raising up Adam from corruption, " +
              "and abolishing death: " +
              "O Pascha of incorruption, " +
              "Salvation of the world!",
      },
      {
        name: "Exapostilarion of the Blind Man (Glory, Both now)",
        text: "Enlighten my noetic eyes which are bereft of sight, O Lord, " +
              "because of sin's gloomy darkness. " +
              "And since Thou art compassionate, instill in me humility. " +
              "Cleanse Thou me by the tears of repentance and change of heart.",
      },
    ],

    // ── AT VESPERS (Sunday Evening — Small Vespers) ──────────────────────────

    vespers_prokeimenon: {
      tone: 8,
      text: "Behold now, bless ye the Lord, all ye servants of the Lord.",
      verses: ["Ye that stand in the house of the Lord, in the courts of the house of our God."],
      type: "weekday_ordinary",
    },

    has_litya: false,
    has_paroemias: false,

    // Stichera on Lord I Have Cried — 3 Pentecostarion (Tone V) + 3 Menaion
    stichera_lord_i_cried_pentecostarion: [
      {
        tone: 5,
        text: "Thou art the light of all mankind, " +
              "the fashioner of the eyes of our mortal flesh, " +
              "O God and Word, Thou Creator of all things. " +
              "And now by the mixture of spittle and clay, " +
              "Thou in a manner beyond telling hast granted sight to a man who was born blind, " +
              "Thou Who with Thy fingers didst fashion both dust and sight. " +
              "And when he who had never seen the sun received sight, " +
              "he beheld Thee, the sweet Sun, " +
              "and saw the image of Him Who ineffably fashioned us " +
              "in accordance with His compassionate mercy.",
      },
      {
        tone: 5,
        text: "Having, as an abundance of Wealth, " +
              "the form and members which comprise our mortal flesh, " +
              "the man who came forth blind from his mother's womb " +
              "could not fathom what the form of this world could be; " +
              "for he lacked eyes. " +
              "And because of this his feet and his body " +
              "were pained by frequent stumbling against stones. " +
              "Yet through Thee he gained that wealth he did not have, " +
              "and he beheld Thee, the Author of lights, " +
              "the only Light of the world, " +
              "and he proclaimed unto all " +
              "that Thou art God and the Lord of creation, " +
              "and the fashioner of all things in the world.",
      },
      {
        tone: 5,
        text: "He who in times past had been blind " +
              "confessed with his whole soul, mind and tongue, " +
              "the One Who had fashioned eyes for him out of spittle and clay, " +
              "granting him to see, " +
              "preached that He is the Lord and Creator of all things, " +
              "Who out of compassion for that which He had fashioned, " +
              "became a man, though He is God almighty. " +
              "The scribes could not bear to hear his words and see his zeal, " +
              "and in their jealousy they expelled him from the synagogue, " +
              "for the blindness which consumed their souls " +
              "surpassed that which once consumed his eyes.",
      },
    ],

    // Glory, Both now at Lord I Have Cried
    stichera_glory_both_now: {
      tone: 2,
      text: "He that was born blind thought to himself and said: " +
            "Was I born without eyes for the sins of my parents? " +
            "Was I born to be an example because of the unbelief of the nations? " +
            "I cease not from asking: When is it night, when is it day? " +
            "My feet cannot endure striking against the stones. " +
            "For I have neither seen the sun shining nor beheld in image Him Who fashioned me. " +
            "But I beseech Thee, O Christ God, " +
            "look upon me and have mercy on me.",
    },

    // Aposticha (Glory, Both now — unique to this file, Tone VIII)
    stichera_aposticha_glory: {
      tone: 8,
      text: "As Jesus passed by on His way from the temple, " +
            "He found a man who was blind from his birth; " +
            "and taking compassion on him, He put clay on his eyes and said unto him: " +
            "Go and wash in the pool of Siloam. " +
            "And he washed and gained his sight, and sent up praise to God. " +
            "But his kinsmen said unto him: " +
            "Who hath opened thine eyes, which none of those who see were able to heal? " +
            "And he cried out and said: " +
            "A man called Jesus; He told me: Wash in the pool of Siloam; and I gained my sight. " +
            "He is truly Christ the Messiah, of Whom Moses spake in the Law. " +
            "He is the Savior of our souls.",
    },

    // ── AT MATINS ────────────────────────────────────────────────────────────

    magnificat_sung: true,   // weekday rule — Magnificat IS sung (differs from P+35 Sunday)
    has_great_doxology: false,
    small_doxology_read: true,

    // Matins Aposticha stichera (unique to this file — 3 stichera + Glory, Both now)
    stichera_matins_aposticha: [
      {
        tone: 5,
        text: "Blindness hath befallen those who could see, " +
              "and their minds and soul became darkened, " +
              "for having beheld the blind man regain sight, " +
              "in their wickedness they demanded of him: " +
              "\"How dost thou now see like those who have sight? " +
              "For thou wast blind from Thy birth, " +
              "and thou didst sit by the wayside, begging.\" " +
              "Thereupon, the blind man revealed that it was He Who had bestowed light, " +
              "and created the world's luminaries, " +
              "thereby preaching God's pre-beginningless Son, " +
              "Who in His compassion hath appeared as a man in these latter days, " +
              "incarnate of the Spirit and the Virgin.",
      },
      {
        verse: "Look upon me, and have mercy upon me.",
        tone: 5,
        text: "Like unto one bearing a great burden and earthen load, " +
              "the blind man wandered in this world, " +
              "striking his feet against the stones. " +
              "Instead of sight he was endowed with a staff; " +
              "wherefore he fled for refuge unto the Light-bestower. " +
              "from Whom he was granted to see the light, " +
              "and behold the Creator with his own eyes, " +
              "Him Who fashioned from the earth " +
              "our human nature in His own image and likeness, " +
              "but now from spittle mixed with dust " +
              "He hath enlightened the blind man's eyes, " +
              "and in His love for mankind " +
              "hath granted him to see the sun.",
      },
      {
        verse: "My steps do Thou direct according to Thy saying.",
        tone: 5,
        text: "When he beheld the light, " +
              "the blind man saw the Word of the Father, " +
              "Who had formed mankind in His image and likeness. " +
              "The wondrous vision filled him with gladness, " +
              "beholding the sun which ruleth the day, " +
              "brilliant and effulgent, as it is seen by all mankind, " +
              "and walking free from all stumbling, he traversed paths with ease, " +
              "and he recognized Him that had enlightened him as the Son of God, " +
              "Who had become a man out of His extreme compassion. " +
              "For, being God, He took upon Himself that which He was not, " +
              "remaining God yet also a man, " +
              "preserving His uncommingled union.",
      },
    ],

    canons: [
      {
        name: "Canon of the Blind Man",
        tone: 5,
        mode: "read",
        refrain: "Glory to Thee, Our God, Glory to Thee.",
        troparia_per_ode: 8,
        menaion_troparia_per_ode: 4,
        note: "Full ode texts in 60.txt / source PDF",
      },
    ],

    // ── AT LITURGY ───────────────────────────────────────────────────────────

    feast_e: "Acts 17:1-15",
    feast_g: "John 11:47-57",

    prokeimenon_tone: 8,
    prokeimenon_text: "Make your vows and pay them to the Lord our God.",
    prokeimenon_stichos: "In Judea is God known, His name is great in Israel.",

    alleluia_tone: 8,
    alleluia_verse: "Look upon me and have mercy on me.",
    alleluia_stichos: "My steps do Thou direct according to Thy saying.",

    zadostoinik_refrain: "The angel cried unto her that is full of grace: " +
                         "Rejoice, O pure Virgin! And again I say, rejoice! " +
                         "For thy Son is risen from the grave on the third day.",
    zadostoinik_irmos: "Shine, shine, O new Jerusalem, " +
                       "for the glory of the Lord hath arisen upon thee; " +
                       "dance now and be glad, O Zion, " +
                       "and do thou exult, O pure Theotokos, " +
                       "in the arising of Him Whom thou didst bear.",

    communion_verse: "Receive ye the body of Christ, taste ye of the fountain of immortality.",

    beatitudes_source: "6 verses from Ode I of Canon of the Blind Man",

    // ── FLAGS ────────────────────────────────────────────────────────────────
    menaion_set_aside: false,
    it_is_truly_meet_suppressed: true,
    note: "File covers Sunday evening Small Vespers (P+35 eve) + Monday Matins/Liturgy (P+36). " +
          "Magnificat sung at Ode VIII — weekday rule, differs from P+35 Sunday. " +
          "Small Doxology read at Matins. " +
          "Vespers: 3 Pentecostarion stichera (Blind Man theme, Tone V) + 3 Menaion. " +
          "Full Matins Aposticha stichera unique to this file — captured above. " +
          "Kontakion at Ode III: Menaion if present, else Blind Man. " +
          "Kontakion at Ode VI: Blind Man (Tone IV) always.",
  },

  // ── P+37 — Tuesday of the Sixth Week (Blind Man afterfeast) ─────────────────
  // Source: St. Sergius 62.pdf | Fekula §4A (weekday Pentecostarion)
  // File covers Monday evening Small Vespers (P+36 eve) + Tuesday Matins/Liturgy.
  // Same weekday structure as P+36: Magnificat sung, Small Doxology read.
  // Beatitudes from Ode IV (Monday used Ode I — rotates each weekday).
  // Vespers prokeimenon Tone IV (Monday evening rotation).
  37: {
    name: "Tuesday of the Sixth Week — Blind Man Afterfeast",
    source_file: "62.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 5,

    // Troparion, Dismissal Theotokion, Kontakia — same as P+36
    troparion: {
      tone: 5,
      text: "Let us, O faithful, praise and worship the Word " +
            "Who is co-beginningless with the Father and the Spirit, " +
            "and Who was born of the Virgin for our salvation; " +
            "for He was pleased to ascend the Cross in the flesh " +
            "and to endure death, " +
            "and to raise the dead by His glorious Resurrection.",
      source: "preceding_sunday",
    },

    // AT THE HOURS (Fekula §4A Period 3): one kontakion = preceding Sunday kontakion.
    hours_kontakion: {
      tone: 4,
      text: "Since my soul's noetic eyes are blind and sightless, " +
            "I have come to Thee, O Christ, " +
            "as did the man who was blind from birth. " +
            "And in repentance I cry unto Thee: " +
            "Of those in darkness Thou art the most radiant Light.",
      name: "Kontakion of the Blind Man (preceding Sunday kontakion)",
      note: "All Hours. If Menaion is Doxology+ rank, substitute Menaion kontakion at 3rd/9th.",
    },
    matins_kontakion_ode3: {
      tone: null,
      text: "Menaion kontakion if present; else Blind Man kontakion",
      note: "Matins Ode III — Menaion governs if present. Ikos not explicit in 62.pdf — verify from source.",
    },
    matins_kontakion_ode6: {
      tone: 4,
      text: "Since my soul's noetic eyes are blind and sightless, " +
            "I have come to Thee, O Christ, " +
            "as did the man who was blind from birth. " +
            "And in repentance I cry unto Thee: " +
            "Of those in darkness Thou art the most radiant Light.",
      name: "Kontakion of the Blind Man",
      note: "Matins Ode VI — Blind Man kontakion always",
    },

    sessional_hymn_ode3: {
      tone: 8,
      text: "As the Master and Fashioner of all things passed by, " +
            "He encountered along the way a blind man who was seated there " +
            "and who mourned aloud, saying: " +
            "All my life I have beheld neither the sun shining forth " +
            "nor laid eyes on the bright luminescence of the moon. " +
            "Yet since Thou wast born of an immaculate Virgin so as to fill all with light, " +
            "do Thou now fill me with Thy light, in that Thou art compassionate. " +
            "And thus I shall adore Thee and cry: " +
            "Sovereign Master, Christ my God, forgive me my sins, " +
            "in Thine abundant compassion, O Thou only Lover of mankind.",
      source: "pentecostarion",
    },

    exapostilarion: [
      { name: "Exapostilarion of Pascha", tone: 3, repeat: 2,
        text: "Having fallen asleep in the flesh, as a mortal, O King and Lord, " +
              "on the third day Thou didst rise again, raising up Adam from corruption, " +
              "and abolishing death: O Pascha of incorruption, Salvation of the world!" },
      { name: "Exapostilarion of the Blind Man (Glory, Both now)",
        text: "Enlighten my noetic eyes which are bereft of sight, O Lord, " +
              "because of sin's gloomy darkness. And since Thou art compassionate, " +
              "instill in me humility. Cleanse Thou me by the tears of repentance and change of heart." },
    ],

    // ── AT VESPERS (Monday Evening) ──────────────────────────────────────────

    vespers_prokeimenon: {
      tone: 4,
      text: "The Lord will hearken unto me when I cry unto Him.",
      verses: ["When I called upon Thee, O God of my righteousness, Thou didst hearken unto me."],
      type: "weekday_ordinary",
      note: "Monday evening prokeimenon — Tone IV",
    },

    has_litya: false,
    has_paroemias: false,

    stichera_lord_i_cried_pentecostarion: [
      {
        tone: 5,
        text: "He who in times past had been blind " +
              "confessed with his whole soul, mind and tongue, " +
              "the One Who had fashioned eyes for him out of spittle and clay, " +
              "granting him to see, " +
              "preaching that He is the Lord and Creator of all things, " +
              "Who out of compassion for that which He had fashioned, " +
              "became a man, though He is God almighty. " +
              "The scribes could not bear to hear his words and see his zeal, " +
              "and in their jealousy they expelled him from the synagogue, " +
              "for the blindness which consumed their souls " +
              "surpassed that which once consumed his eyes.",
      },
      {
        tone: 5,
        text: "The man who had been blind " +
              "brought to them that have sight a trophy of excellence, " +
              "for he recognized his Maker and the Creator of all, " +
              "seeing Him Who by His spittle granted him sight. " +
              "By means of this single deed, he knew the One Who had enlightened him, " +
              "was the Son of God and the Lord of all the world. " +
              "But when they who were blinded by jealousy, " +
              "beheld Him they did not recognize Him, " +
              "though He had done many wondrous marvels, " +
              "which He wrought gloriously by a single word.",
      },
      {
        tone: 5,
        text: "The truly blind scribes, looked upon the blind man with suspicion, " +
              "for they imagined that he had feigned not seeing, " +
              "in pretense showing the Savior to have given him sight. " +
              "They willingly were blinded by the dark letter of the Law " +
              "wherein shineth the truly resplendent Sun, " +
              "Who hath for my sake established the Sabbath rest, " +
              "having made bright the gloominess of the Law; " +
              "He took that light from them, and shed it upon those who were once blind. " +
              "and now beholding him, " +
              "they proclaim the light-bestower to all the world.",
      },
    ],

    stichera_glory_both_now: {
      tone: 8,
      text: "O Christ God, Thou noetic Sun of Righteousness, " +
            "Who by Thy most pure touch " +
            "didst bestow a twofold enlightenment " +
            "upon him who was blind from his mother's womb, " +
            "do Thou also illumine the eyes of our souls, " +
            "and show us to be sons of the day, " +
            "that we may cry out to Thee with faith: " +
            "Great and ineffable is Thy compassion toward us, " +
            "O Lover of mankind glory be to Thee.",
    },

    // ── AT MATINS ────────────────────────────────────────────────────────────

    magnificat_sung: true,
    has_great_doxology: false,
    small_doxology_read: true,

    sessional_hymn_kathisma2: {
      tone: 5,
      text: "By the spittle of Him that had fashioned man, " +
            "The man blind from his birth, having never seen the sun, " +
            "was able to see with eyes. " +
            "Wherefore, he sent up heartfelt thanksgiving to God, " +
            "for he beheld the image of Him " +
            "which had been formed in the likeness " +
            "of the One Who had made and fashioned it.",
      repeat: "Glory, Both now: repeat",
    },

    // Praises Glory, Both now — unique to this file (Tone V)
    stichera_praises_glory: {
      tone: 5,
      text: "Who can tell of Thy mighty acts, O Christ, " +
            "or who can number the multitudes of Thy wonders? " +
            "For even as Thou, in Thy goodness, didst appear on earth twofold of nature, " +
            "so didst Thou grant twofold healings to the sick; " +
            "for Thou didst open not only the bodily eyes of the man who was blind from the womb, " +
            "but those of his soul also. " +
            "Wherefore, he confessed Thee, the hidden God, Who grantest great mercy unto all.",
    },

    // Matins Aposticha — 3 unique stichera + Glory, Both now
    stichera_matins_aposticha: [
      {
        tone: 5,
        text: "Those who observed the Law of Moses, " +
              "upon seeing the effulgent and radiant light " +
              "which illumined the blind man on the Sabbath day, " +
              "themselves became noetically blind, " +
              "seeing shadows which obscured the Law " +
              "and hid from them Him Who by His Word " +
              "hath fashioned both the Sabbath and light, " +
              "and to the blind man who had washed himself, " +
              "He hath given eyes by a wondrous clay mixture of His pure spittle with dust. " +
              "Let us join with that man and so behold God; " +
              "and upon seeing that which is better, " +
              "may we censure the blindness which gripped the Pharisees.",
      },
      {
        verse: "Look upon me, and have mercy on me.",
        tone: 5,
        text: "Morning hath dawned for him " +
              "who walked in the dark night of blindness, " +
              "the much suffering blind man, " +
              "who by divine command washed in the pool of Siloam, " +
              "and received his sight. " +
              "Wherefore he is seen as a new light-bearer, " +
              "rebuking the night-creating darkness " +
              "which had enveloped the scribes of the ancient Law, " +
              "illumining their blindness by His most luminous effulgence. " +
              "from which the blindness of the letter of the Law " +
              "hath now been granted sight, " +
              "by the brilliant radiant light granted us by the Word.",
      },
      {
        verse: "My steps do Thou direct according to Thy saying.",
        tone: 5,
        text: "The blind man who endured blindness in body " +
              "and noetic darkness, " +
              "ascended to the heights of illumination " +
              "through divine knowledge, " +
              "by the wondrous and new outpourings of light from the Word. " +
              "Though in the past he was doubly blinded, " +
              "he came to know the Light-giver, " +
              "Who arose on the third day from the sepulcher, " +
              "and Who hath made the earth radiant by His Resurrection, " +
              "from Whom the light of our refashioning hath shone forth in the darkness gripping mankind " +
              "for the sake of His lovingkindness and great mercy.",
      },
    ],

    canons: [
      {
        name: "Canon of the Blind Man",
        tone: 5,
        mode: "read",
        refrain: "Glory to Thee, Our God, Glory to Thee.",
        troparia_per_ode: 8,
        menaion_troparia_per_ode: 4,
      },
    ],

    // ── AT LITURGY ───────────────────────────────────────────────────────────

    feast_e: "Acts 17:19-28",
    feast_g: "John 12:19-36",

    prokeimenon_tone: 8,
    prokeimenon_text: "Make your vows and pay them to the Lord our God.",
    prokeimenon_stichos: "In Judea is God known, His name is great in Israel.",

    alleluia_tone: 8,
    alleluia_verse: "Look upon me and have mercy on me.",
    alleluia_stichos: "My steps do Thou direct according to Thy saying.",

    zadostoinik_refrain: "The angel cried unto her that is full of grace: " +
                         "Rejoice, O pure Virgin! And again I say, rejoice! " +
                         "For thy Son is risen from the grave on the third day.",
    zadostoinik_irmos: "Shine, shine, O new Jerusalem, " +
                       "for the glory of the Lord hath arisen upon thee; " +
                       "dance now and be glad, O Zion, " +
                       "and do thou exult, O pure Theotokos, " +
                       "in the arising of Him Whom thou didst bear.",

    communion_verse: "Receive ye the body of Christ, taste ye of the fountain of immortality.",

    beatitudes_source: "6 verses from Ode IV of Canon of the Blind Man",

    // ── FLAGS ────────────────────────────────────────────────────────────────
    menaion_set_aside: false,
    it_is_truly_meet_suppressed: true,
    note: "File covers Monday evening Small Vespers (P+36 eve) + Tuesday Matins/Liturgy (P+37). " +
          "Vespers prokeimenon Tone IV (Monday evening rotation). " +
          "Kathisma at Vespers: 6th Kathisma. " +
          "Beatitudes from Ode IV — rotates each weekday (Monday=Ode I, Tuesday=Ode IV). " +
          "Ikos not explicitly listed at Ode III — verify from source PDF. " +
          "All Pentecostarion stichera and Matins Aposticha unique to this file — captured in fields and 62.txt.",
  },

  // ── P+38 — Wednesday of the Sixth Week: Apodosis (Leavetaking) of Pascha ────
  // Source: St. Sergius 63.pdf | Fekula §4B11
  // File covers Tuesday evening Vespers (P+37 eve) + Wednesday Matins/Liturgy.
  // MAJOR TRANSITION: Full Paschal ceremony restored at Vespers and Matins.
  // Three canons at Matins: Pascha (6) + Blind Man (4) + Pre-festal Ascension (4) = 14.
  // Great Doxology CHANTED. No Magnificat — Ode IX uses Paschal Megalynarion refrains.
  // Prokeimenon/Alleluia at Liturgy are Paschal (Tone VIII / Tone IV).
  // After Liturgy: "thus the feast of Christ's Holy Resurrection is given up."
  38: {
    name: "Wednesday of the Sixth Week — Apodosis of Pascha",
    source_file: "63.pdf",
    fekula_section: "4B11",
    hours_format: "apodosis_pascha",
    tone: 5,

    // Troparion: Sunday troparion of the preceding Sunday (Blind Man, Tone V)
    // Source: "We sing the troparion of the preceding Sunday in the fifth tone,
    //  Let us worship..." — Fekula §4B11
    troparion: {
      tone: 5,
      text: "Let us, O faithful, praise and worship the Word, " +
            "Who is co-beginningless with the Father and the Spirit, " +
            "and Who was born of a Virgin for our salvation; " +
            "for He was pleased to be lifted up in the flesh upon the Cross, " +
            "and to endure death, and to raise the dead " +
            "by His glorious Resurrection.",
      source: "preceding_sunday_blind_man",
      fekula: "§4B11",
    },

    // Kontakion assignment REVERSED on Apodosis vs. ordinary Sunday:
    // Ode III (1st/6th Hours) = Blind Man (Tone IV)
    // Ode VI (3rd/9th Hours) = Pascha (Tone VIII)
    kontakion_ode3: {
      tone: 4,
      text: "Since my soul's noetic eyes are blind and sightless, " +
            "I have come to Thee, O Christ, " +
            "as did the man who was blind from birth. " +
            "And in repentance I cry unto Thee: " +
            "Of those in darkness Thou art the most radiant Light.",
      name: "Kontakion of the Blind Man",
    },
    kontakion_ode6: {
      tone: 8,
      text: "Thou didst descend into the tomb, O Immortal, " +
            "Thou didst destroy the power of Hades. " +
            "In victory didst Thou arise, O Christ God, " +
            "proclaiming \"Rejoice!\" to the myrrh-bearing women; " +
            "granting peace to Thine apostles, " +
            "and bestowing resurrection on the fallen.",
      name: "Kontakion of Pascha",
    },

    sessional_hymn_ode3: {
      tone: 4,
      text: "Thou gavest eyes, O Christ, " +
            "to the man born without eyes, " +
            "thus showing to the Jews Thine ineffable glory " +
            "and making it clear that Thou, O my Lord, " +
            "art the Light of all mankind. " +
            "But through jealousy their minds were weakened and crippled; " +
            "so they lay in wait, " +
            "while being zealous and eager to slay Thee, Who givest life.",
      label: "Sessional Hymn of the Blind Man",
    },

    sessional_hymn_ode3_both_now: {
      tone: 4,
      text: "As Thou Thyself didst will, " +
            "Thou wast born, O my Savior; " +
            "again as Thou didst will, " +
            "Thou wast seen by us mortals. " +
            "Thou didst suffer as a man, but as " +
            "true God Thou didst arise. " +
            "Thou wast taken up into the heavens with glory; " +
            "with Thyself didst Thou lead up man's essence and nature, " +
            "adorning it with glory.",
      label: "Sessional Hymn of the Pre-festal (Both now)",
    },

    // Sessional Hymn after Kathisma II (unique)
    sessional_hymn_kathisma2: {
      tone: 5,
      text: "He Who as with a garment is wrapped about with light, " +
            "Who with the Father and Spirit is co-beginningless God, " +
            "hath put on our nature in His boundless love for mankind. " +
            "As God, He driveth out the illnesses of us mortal men. " +
            "And He it is Who enlightened the eyes of him that in blindness and utter darkness " +
            "came forth from the womb.",
      repeat: "Glory, Both now: repeat",
    },

    exapostilarion: [
      { name: "Exapostilarion of Pascha", tone: 3, repeat: 2,
        text: "Having fallen asleep in the flesh, as a mortal, O King and Lord, " +
              "on the third day Thou didst rise again, raising up Adam from corruption, " +
              "and abolishing death: O Pascha of incorruption, Salvation of the world!" },
      { name: "Exapostilarion of the Blind Man (Glory, Both now)",
        text: "Enlighten my noetic eyes which are bereft of sight, O Lord, " +
              "because of sin's gloomy darkness. And since Thou art compassionate, " +
              "instill in me humility. Cleanse Thou me by the tears of repentance and change of heart." },
    ],

    vespers_prokeimenon: {
      tone: 1,
      text: "Thy mercy, O Lord, shall pursue me all the days of my life.",
      verses: ["The Lord is my shepherd, and I shall not want. " +
               "In a place of green pasture, there hath He made me to dwell."],
      type: "weekday_ordinary",
      note: "Tuesday evening prokeimenon — Tone I",
    },

    has_litya: false,
    has_paroemias: false,
    menaion_set_aside: true,  // All 6 Vespers stichera from Pentecostarion; no Menaion at Vespers

    magnificat_sung: false,    // Ode IX uses Paschal Megalynarion refrains
    has_great_doxology: true,  // CHANTED — feast-level Matins

    ode9_refrain: "Magnify, O my soul, Him Who willingly suffered, " +
                  "and was buried, and arose from the grave on the third day.",
    ode9_refrain_alt: "Magnify, O my soul, Christ the Giver of life, " +
                      "Who arose from the grave on the third day.",

    canons: [
      { name: "Canon of Pascha", tone: 1, mode: "chanted",
        refrain: "Christ is risen from the dead.", troparia_per_ode: 6 },
      { name: "Canon of the Blind Man", tone: 5, mode: "read",
        refrain: "Glory to Thee, Our God, Glory to Thee.", troparia_per_ode: 4 },
      { name: "Pre-festal Canon of the Ascension", tone: 5, mode: "read",
        refrain: "Glory to Thee, Our God, Glory to Thee.", troparia_per_ode: 4,
        irmos_ode1: "Christ, who with an upraised arm bringeth wars to naught, " +
                    "hath shaken horse and rider in the Red Sea; " +
                    "but Israel hath He saved as they chanted a song of victory." },
    ],

    feast_e: "Acts 18:22-28",
    feast_g: "John 12:36-47",

    prokeimenon_tone: 8,
    prokeimenon_text: "This is the day which the Lord hath made, let us rejoice and be glad therein.",
    prokeimenon_stichos: "O give thanks unto the Lord, for He is good, for His mercy endureth forever.",

    alleluia_tone: 4,
    alleluia_verse: "Thou, O Lord, shalt rise up and have pity upon Sion, " +
                    "for it is time to have compassion on her, yea, the time is come.",
    alleluia_stichos: "The Lord from heaven hath looked upon the earth, to hear the groaning of them " +
                      "that be in fetters, to loose the sons of the slain.",

    zadostoinik_refrain: "The angel cried unto her that is full of grace: " +
                         "Rejoice, O pure Virgin! And again I say, rejoice! " +
                         "For thy Son is risen from the grave on the third day.",
    zadostoinik_irmos: "Shine, shine, O new Jerusalem, " +
                       "for the glory of the Lord hath arisen upon thee; " +
                       "dance now and be glad, O Zion, " +
                       "and do thou exult, O pure Theotokos, " +
                       "in the arising of Him Whom thou didst bear.",

    communion_verse: "Receive ye the body of Christ, taste ye of the fountain of immortality.",
    beatitudes_source: "8 verses from Odes III and VI of Canon of Pascha",

    it_is_truly_meet_suppressed: true,
    note: "Apodosis of Pascha — full Paschal ceremony restored at Vespers and Matins. " +
          "Three canons at Matins (14 troparia/ode). Great Doxology chanted. " +
          "Ode IX uses Paschal Megalynarion refrains throughout. " +
          "Prokeimenon/Alleluia are Paschal (Tone VIII / Tone IV). " +
          "Kontakion assignment reversed vs. Sunday: Blind Man at Ode III, Pascha at Ode VI. " +
          "After Liturgy: Pascha given up. 9th Hour begins with Trisagion (no O Heavenly King until Pentecost).",
  },

  // ── P+39 — Ascension of Our Lord God and Savior Jesus Christ ─────────────
  // Source: St. Sergius 64.pdf | Fekula §4B12
  // Great Feast — full Vigil: Great Vespers with Litya + Polyeleos Matins.
  // Troparion: Thou hast ascended in glory (Tone IV) governs Hours and all services.
  // No Magnificat — Megalynarion refrain at Ode IX.
  // Festal Antiphons at Liturgy (not Typika/Beatitudes).
  // Instead of It is truly meet: Irmos of Ode IX Canon 1 throughout afterfeast.
  39: {
    name: "The Ascension of Our Lord God and Savior Jesus Christ",
    source_file: "64.pdf",
    fekula_section: "4B12",
    hours_format: "ascension",

    troparion: {
      tone: 4,
      text: "Thou hast ascended in glory, O Christ our God, " +
            "having gladdened Thy disciples with the promise of the Holy Spirit; " +
            "and they were assured by the blessing " +
            "that Thou art the Son of God, " +
            "the Redeemer of the world.",
    },

    kontakion_ode3: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
      name: "Kontakion of the Ascension",
    },
    kontakion_ode6: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
      name: "Kontakion of the Ascension",
      note: "Same kontakion at both Ode III and Ode VI — feast kontakion governs",
    },

    ikos: "Leaving the things of earth upon the earth, and surrendering to the earth " +
          "things of ashes, come, let us come to our senses and raise our eyes and thoughts " +
          "on high; let us, O mortals, turn our gaze together with our senses up unto the " +
          "heavenly gates. Let us consider ourselves present at the Mount of Olives, and gaze " +
          "intently at the Redeemer who is riding upon a cloud; for the Lord hath hastened up " +
          "from there into the heavens. And there the bountiful Giver of gifts distributed " +
          "gifts unto His apostles, calling to them as a Father, and strengthening them; He " +
          "guided them like Sons and said unto them: I am not separated from you; I am with " +
          "you, and no one can be against you.",

    sessional_hymn_polyeleos: {
      tone: 5,
      text: "Having come down from heaven unto the things of earth, " +
            "O Christ, as God, with Thyself, Thou didst resurrect Adam's form, " +
            "which lay prostrate in the nether holds of Hades' vault; " +
            "in Thine Ascension to the heights " +
            "Thou didst lead it up unto the heavens and Thou didst seat it " +
            "upon the throne of Thy Father, " +
            "since Thou, the Lover of mankind, art merciful.",
    },

    sessional_hymn_ode3: {
      tone: 8,
      text: "Having mounted upon heaven's clouds, O Christ, " +
            "Thou didst leave peace unto those upon the earth; " +
            "and Thou didst ascend and sit at the Father's right hand on high, " +
            "since Thou art one in essence with Him, and the Spirit, O Lord; " +
            "for though Thou hadst appeared in the flesh, without undergoing change. " +
            "Wherefore Thou dost now wait till the last consummation, " +
            "when Thou shalt return to judge all of mankind upon the earth. " +
            "O Thou most righteous Judge and Lord, " +
            "since Thou art a greatly merciful God, " +
            "do Thou spare our souls and do Thou grant to us, Thy lowly servants, " +
            "the pardon of our failings and our sins.",
      label: "Sessional Hymn of the Feast after Ode III",
    },

    exapostilarion: [
      {
        tone: 3,
        repeat: 3,
        text: "While Thy disciples looked on Thee, Thou didst ascend, " +
              "O Christ, unto the Father to sit beside Him. " +
              "Angels hastened, running on before, and cried: " +
              "Lift ye the gates up, lift them up; " +
              "for the King hath ascended " +
              "unto His bright primal glory.",
        note: "Thrice — Glory, Both now: same",
      },
    ],

    magnificat_sung: false,
    ode9_refrain: "Magnify, O my soul, Christ the giver of life, Who ascended from earth to heaven.",
    ode9_irmos_canon1: "O Thou who art God's Mother transcending mind and word, " +
                       "who ineffably in time hast given birth unto the Timeless One, " +
                       "Thee do we the faithful magnify with one accord.",

    matins_gospel_ref: "Mark 16:9-20 (Resurrection appearances; received up into heaven)",
    matins_prokeimenon: {
      tone: 4,
      text: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
      stichos: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
    },
    has_great_doxology: true,
    has_litya: true,
    has_paroemias: true,
    paroemia_1: "Isaiah 2:2-3 (mountain of the Lord manifest; nations shall come)",
    paroemia_2: "Isaiah 62:10-63:9 (Who is this that cometh from Edom; red garments from Bozrah)",
    paroemia_3: "Zechariah 14:1,4,8,9,11 (feet on Mount of Olives; living water; Lord King of all earth)",

    megalynarion: "We magnify Thee, O Christ the Giver of life, " +
                  "and we honor Thy divine ascension " +
                  "with Thy most pure Flesh into heaven.",
    megalynarion_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",

    feast_e: "Acts 1:1-12",
    feast_g: "Luke 24:36-53",

    prokeimenon_tone: 7,
    prokeimenon_text: "Be Thou exalted above the heavens, O God, and Thy glory above all the earth.",
    prokeimenon_stichos: "Ready is my heart, O God, ready is my heart; I will sing and chant in my glory.",

    alleluia_tone: 2,
    alleluia_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    alleluia_stichos: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",

    // Instead of It is truly meet — Irmos of Ode IX Canon 1 + refrain (through afterfeast)
    instead_of_it_is_truly_meet_refrain: "Magnify, O my soul, Christ the giver of life, " +
                                          "Who ascended from earth to heaven.",
    instead_of_it_is_truly_meet_irmos: "O Thou who art God's Mother transcending mind and word, " +
                                        "who ineffably in time hast given birth unto the Timeless One, " +
                                        "Thee do we the faithful magnify with one accord.",

    communion_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",

    canons: [
      { name: "Ascension Canon 1", tone: 5, troparia_per_ode: 8,
        irmos_ode1: "Unto God the Savior Who made His people pass dryshod through the sea, " +
                    "but drowned Pharaoh with all his host, " +
                    "unto Him alone let us sing: For He is glorified." },
      { name: "Ascension Canon 2", tone: 4, troparia_per_ode: 6,
        irmos_ode1: "I shall open my mouth, and be filled with the Spirit, " +
                    "and utter discourse to the Queen and Mother; " +
                    "and be seen radiantly keeping festival, joyfully praising her wonders.",
        katavasia_irmos: "Covered by the divine cloud, " +
                         "he that was slow of tongue proclaimed the Law written by God; " +
                         "for having shaken off the impurity from the eye of his mind, " +
                         "He beholdeth Him That is, and he is initiated into the knowledge of the Spirit, " +
                         "while giving praise with God-inspired songs." },
    ],

    it_is_truly_meet_suppressed: true,
    beatitudes_source: "Festal Antiphons (3 antiphons with Ps. 46, 47, 48 — not Beatitudes)",
    note: "Great Feast. Full Vigil structure with Polyeleos. " +
          "Festal Antiphons replace Typika/Beatitudes at Liturgy. " +
          "Introit: God is gone up in jubilation. " +
          "Prokeimenon Tone VII and Alleluia Tone II govern throughout entire Ascension afterfeast. " +
          "Instead of It is truly meet: Irmos of Ode IX Canon 1 chanted through afterfeast. " +
          "Dismissal: May Christ our true God Who didst ascend in Glory from us into heaven...",
  },

  // ── P+40 — Friday of the Sixth Week: First Day of Ascension Afterfeast ─────
  // Source: St. Sergius 65.pdf | Fekula §4A (weekday, afterfeast of Ascension)
  // File covers Thursday evening Vespers (P+39 eve) + Friday Matins/Liturgy.
  // Ascension troparion replaces Resurrection troparion at all services.
  // Vespers: Great Prokeimenon Tone VII (Thursday evening afterfeast rule).
  // Magnificat sung, Small Doxology read — weekday confirmed.
  // Beatitudes from Ode I of Ascension Canon 1 including Irmos.
  40: {
    name: "Friday of the Sixth Week — First Day of Ascension Afterfeast",
    source_file: "65.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 4,  // Ascension troparion (Tone IV) governs

    troparion: {
      tone: 4,
      text: "Thou hast ascended in glory, O Christ our God, " +
            "having gladdened Thy disciples with the promise of the Holy Spirit; " +
            "and they were assured by the blessing " +
            "that Thou art the Son of God, " +
            "the Redeemer of the world.",
      source: "ascension_feast",
    },

    kontakion_ode3: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
      note: "Menaion kontakion if present; else Ascension kontakion",
    },
    kontakion_ode6: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
      name: "Kontakion of the Ascension",
    },

    sessional_hymn_ode3: {
      tone: 8,
      text: "Having mounted upon heaven's clouds, O Christ, " +
            "Thou didst leave peace unto those upon the earth; " +
            "and Thou didst ascend and sit at the Father's right hand on high, " +
            "since Thou art one in essence with Him, and the Spirit, O Lord; " +
            "for though Thou hadst appeared in the flesh, without undergoing change. " +
            "Wherefore Thou dost now wait till the last consummation, " +
            "when Thou shalt return to judge all of mankind upon the earth. " +
            "O Thou most righteous Judge and Lord, " +
            "since Thou art a greatly merciful God, " +
            "do Thou spare our souls and do Thou grant to us, Thy lowly servants, " +
            "the pardon of our failings and our sins.",
      label: "Sessional Hymn of the Feast (Glory, Both now after Ode III)",
    },

    exapostilarion: [
      {
        tone: 3,
        text: "While Thy disciples looked on Thee, Thou didst ascend, " +
              "O Christ, unto the Father to sit beside Him. " +
              "Angels hastened, running on before, and cried: " +
              "Lift ye the gates up, lift them up; " +
              "for the King hath ascended " +
              "unto His bright primal glory.",
        note: "Glory: Menaion if present; Both now: feast exapostilarion",
      },
    ],

    vespers_prokeimenon: {
      tone: 7,
      text: "Our God is in heaven and on earth; all things whatsoever He hath willed He hath done.",
      verses: [
        "When Israel went out of Egypt, and the house of Jacob from among a barbarous people, " +
        "Judaea became His sanctuary, Israel His dominion.",
        "The sea beheld and fled, Jordan turned back.",
        "What aileth thee, O sea, that thou fleddest? And thou Jordan, that thou didst turn back?",
      ],
      type: "thursday_great_prokeimenon_afterfeast",
      note: "Great Prokeimenon on Thursday evening during Ascension afterfeast",
    },

    has_litya: false,
    has_paroemias: false,
    magnificat_sung: true,
    has_great_doxology: false,
    small_doxology_read: true,

    stichera_lord_i_cried_pentecostarion: [
      { tone: 1,
        text: "As Thou didst ascend into the heavens, " +
              "from whence Thou didst also descend, " +
              "leave us not orphaned, O Lord; " +
              "let Thy Spirit come, bringing peace unto the world; " +
              "show Thou unto the sons of men the works of Thy might, " +
              "O Lord and Lover of mankind." },
      { tone: 1,
        text: "Though Thou wast not parted from His uncircumscribable bosom, " +
              "Thou didst ascend unto Thy beginningless Father, O Christ, " +
              "and the hosts on high accepted no addition to the thrice-holy praise. " +
              "But even after Thou didst become man " +
              "they recognized Thee as the one Son, " +
              "only-begotten of the Father, O Lord. " +
              "In the multitude of Thy compassions, have mercy on us." },
      { tone: 1,
        text: "Thine angels said unto the apostles, O Lord: " +
              "Ye men of Galilee, " +
              "why stand ye looking up into heaven? " +
              "This is Christ God, Who hath been taken up from you into heaven. " +
              "He shall come again in the manner ye have seen Him going into heaven. " +
              "Worship Him in holiness and righteousness." },
    ],

    stichera_glory_both_now: {
      tone: 2,
      text: "Thou wast born as Thou Thyself didst will; " +
            "Thou didst appear of Thine own choice; " +
            "Thou didst suffer in the flesh, O our God. " +
            "Thou didst arise from the dead, trampling down death; " +
            "and Thou didst ascend in glory, O Thou Who fillest all things, " +
            "and didst send unto us the divine Spirit, " +
            "that we may praise and glorify Thy Divinity.",
    },

    // Matins Aposticha — unique "O House of Ephratha" melody stichera
    stichera_matins_aposticha: [
      { tone: 2, melody: "O House of Ephratha",
        text: "O new and wondrous marvel! " +
              "as mortal human nature " +
              "ascendeth to the heavens; " +
              "for it is now made one with the Word, " +
              "Who is Al-mighty God." },
      { verse: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
        tone: 2, melody: "O House of Ephratha",
        text: "There hath shone forth today " +
              "the bright day of the Master's " +
              "divine ascent " +
              "to the heavens. This radiant festival " +
              "doth shed its radiance upon all." },
      { verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
        tone: 2, melody: "O House of Ephratha",
        text: "Even as Thou didst send to " +
              "Thy divine disciples " +
              "Thy consubstantial Spirit, " +
              "O Christ, so do Thou send down Thy grace " +
              "unto Thy people." },
    ],

    stichera_matins_aposticha_glory: {
      tone: 5,
      text: "O Lord, as Thou wast being taken up, " +
            "to there from whence Thou wast not separated, " +
            "the hosts of angels and all the Bodiless Ones " +
            "cried out rejoicing unto the Powers above: " +
            "Lift up the gates, O ye princes, " +
            "and the King of Glory shall enter therein. " +
            "For the cherubic throne took Thee up in the flesh. " +
            "O Lord, glory be to Thee.",
    },

    canons: [
      { name: "Ascension Canon 1", tone: 5, troparia_per_ode: 8,
        menaion_troparia_per_ode: 4,
        note: "8 feast troparia + 4 Menaion per ode" },
    ],

    feast_e: "Acts 19:1-8",
    feast_g: "John 14:1-11",

    prokeimenon_tone: 7,
    prokeimenon_text: "Be Thou exalted above the heavens, O God, and Thy glory above all the earth.",
    prokeimenon_stichos: "Ready is my heart, O God, ready is my heart; I will sing and chant in my glory.",

    alleluia_tone: 2,
    alleluia_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    alleluia_stichos: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",

    instead_of_it_is_truly_meet_refrain: "Magnify, O my soul, Christ the giver of life, " +
                                          "Who ascended from earth to heaven.",
    instead_of_it_is_truly_meet_irmos: "O Thou who art God's Mother transcending mind and word, " +
                                        "who ineffably in time hast given birth unto the Timeless One, " +
                                        "Thee do we the faithful magnify with one accord.",

    communion_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    beatitudes_source: "6 verses from Ode I of Ascension Canon 1 including Irmos",

    it_is_truly_meet_suppressed: true,
    menaion_set_aside: false,
    note: "Vespers opens P+40 week (Thursday evening). Great Prokeimenon Tone VII. " +
          "Ascension troparion replaces Resurrection troparion throughout. " +
          "Matins Aposticha uses 'O House of Ephratha' special melody (Tone II) — unique stichera captured. " +
          "Beatitudes from Ode I of Ascension Canon 1 (including Irmos = 6 verses). " +
          "Prokeimenon Tone VII and Alleluia Tone II govern throughout Ascension afterfeast. " +
          "Magnificat sung, Small Doxology read — weekday confirmed. " +
          "Having beheld the Resurrection NOT used (Pascha given up after P+38).",
  },

  // ── P+41 — Saturday of the Sixth Week — Ascension Afterfeast, Day 2 ──────
  // Source: 66.pdf. Drive record: 66.txt.
  41: {
    name: "Saturday of the Sixth Week — Ascension Afterfeast, Day 2",
    source_file: "66.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 4,
    troparion: {
      tone: 4,
      text: "Thou hast ascended in glory, O Christ our God, " +
            "having gladdened Thy disciples with the promise of the Holy Spirit; " +
            "and they were assured by the blessing " +
            "that Thou art the Son of God, the Redeemer of the world.",
    },
    hours_kontakion: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
    },
    feast_e: "Acts 20:7-12",
    feast_g: "John 14:1-11",
    prokeimenon_tone: 7,
    prokeimenon_text: "Be Thou exalted above the heavens, O God, and Thy glory above all the earth.",
    prokeimenon_stichos: "Ready is my heart, O God, ready is my heart; I will sing and chant in my glory.",
    alleluia_tone: 2,
    alleluia_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    alleluia_stichos: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
    communion_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    magnificat_sung: true,
  },

  // ── P+42 — 7th Sunday of Pascha — Holy Fathers of the First Ecumenical Council ──
  // Source: 70.pdf. Drive record: 70.txt. Fekula §4B13.
  // THREE troparia: Resurrection Tone 6 (primary), Holy Fathers Tone 8 (Glory), Ascension Tone 4 (Both now).
  // NOTE: MOVABLE Sunday nearest June 8 (Pascha+42) — NOT fixed June 8 date.
  42: {
    name: "Seventh Sunday of Pascha — Holy Fathers of the First Ecumenical Council",
    source_file: "70.pdf",
    fekula_section: "4B13",
    hours_format: "pentecostarion_sunday",
    tone: 6,
    troparion: {
      tone: 6,
      text: "The angelic hosts were before Thy tomb, " +
            "the guards became as dead men, " +
            "and Mary stood in the sepulcher looking for Thy pure body. " +
            "Thou didst despoil Hades, for Thou wast not tempted by it. " +
            "Thou didst come and meet the Virgin to give life. " +
            "O Lord, Who didst rise from the dead, glory be to Thee.",
      source: "resurrection_tone_6",
    },
    troparion_2: {
      tone: 8,
      text: "Most glorious art Thou, O Christ our God, " +
            "Thou hast established our Holy Fathers as luminaries upon the earth " +
            "and through them hath instructed us all in the true faith. " +
            "O Most merciful One, glory be to Thee.",
      source: "holy_fathers",
      placement: "glory",
    },
    kontakion: {
      tone: 8,
      text: "The preaching of the apostles and the doctrines of the Fathers " +
            "confirmed the one Faith in the Church. " +
            "And wearing the garment of truth woven from the theology on high, " +
            "she rightly divideth and glorifieth the great mystery of piety.",
      source: "holy_fathers",
    },
    hours_kontakion: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
      source: "ascension",
      placement: "both_now",
    },
    feast_e: "Acts 20:16-18, 28-36",
    feast_g: "John 17:1-13",
    prokeimenon_tone: 4,
    prokeimenon_text: "Blessed art Thou, O Lord, the God of our fathers, " +
      "and praised and glorified is Thy name unto the ages.",
    prokeimenon_stichos: "For righteous art Thou in all which Thou hast done for us.",
    alleluia_tone: 1,
    alleluia_verse: "The God of gods, the Lord hath spoken, and He hath called the earth.",
    alleluia_stichos: "Gather together unto Him his holy ones who have established His covenant upon sacrifices.",
    communion_verse: "Praise the Lord in the heavens, praise Him in the highest! " +
      "Verse: Rejoice in the Lord, O ye righteous; praise is meet for the upright.",
    paroemia_1: "Genesis 14:14-20",
    paroemia_2: "Deuteronomy 1:8-11, 15-17",
    paroemia_3: "Deuteronomy 10:14-21",
    has_litya: true,
    magnificat_sung: false,
    matins_gospel: 10,
  },

  // ── P+43 — Monday of the Seventh Week — Ascension Afterfeast, Day 4 ──────
  // Source: 71.pdf. Drive record: 71.txt.
  43: {
    name: "Monday of the Seventh Week — Ascension Afterfeast, Day 4",
    source_file: "71.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 4,
    troparion: {
      tone: 4,
      text: "Thou hast ascended in glory, O Christ our God, " +
            "having gladdened Thy disciples with the promise of the Holy Spirit; " +
            "and they were assured by the blessing " +
            "that Thou art the Son of God, the Redeemer of the world.",
    },
    hours_kontakion: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
    },
    feast_e: "Acts 21:8-14",
    feast_g: "John 14:27-15:7",
    prokeimenon_tone: 7,
    prokeimenon_text: "Be Thou exalted above the heavens, O God, and Thy glory above all the earth.",
    prokeimenon_stichos: "Ready is my heart, O God, ready is my heart; I will sing and chant in my glory.",
    alleluia_tone: 2,
    alleluia_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    alleluia_stichos: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
    communion_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    magnificat_sung: true,
  },

  // ── P+44 — Tuesday of the Seventh Week — Ascension Afterfeast, Day 5 ─────
  // Source: 72.pdf. Drive record: 72.txt.
  44: {
    name: "Tuesday of the Seventh Week — Ascension Afterfeast, Day 5",
    source_file: "72.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 4,
    troparion: {
      tone: 4,
      text: "Thou hast ascended in glory, O Christ our God, " +
            "having gladdened Thy disciples with the promise of the Holy Spirit; " +
            "and they were assured by the blessing " +
            "that Thou art the Son of God, the Redeemer of the world.",
    },
    hours_kontakion: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
    },
    feast_e: "Acts 21:26-32",
    feast_g: "John 16:2-13",
    prokeimenon_tone: 7,
    prokeimenon_text: "Be Thou exalted above the heavens, O God, and Thy glory above all the earth.",
    prokeimenon_stichos: "Ready is my heart, O God, ready is my heart; I will sing and chant in my glory.",
    alleluia_tone: 2,
    alleluia_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    alleluia_stichos: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
    communion_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    magnificat_sung: true,
  },

  // ── P+45 — Wednesday of the Seventh Week — Ascension Afterfeast, Day 6 ────
  // Source: 73.pdf. Drive record: 73.txt.
  45: {
    name: "Wednesday of the Seventh Week — Ascension Afterfeast, Day 6",
    source_file: "73.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 4,
    troparion: {
      tone: 4,
      text: "Thou hast ascended in glory, O Christ our God, " +
            "having gladdened Thy disciples with the promise of the Holy Spirit; " +
            "and they were assured by the blessing " +
            "that Thou art the Son of God, the Redeemer of the world.",
    },
    hours_kontakion: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
    },
    feast_e: "Acts 23:1-11",
    feast_g: "John 16:15-23",
    prokeimenon_tone: 7,
    prokeimenon_text: "Be Thou exalted above the heavens, O God, and Thy glory above all the earth.",
    prokeimenon_stichos: "Ready is my heart, O God, ready is my heart; I will sing and chant in my glory.",
    alleluia_tone: 2,
    alleluia_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    alleluia_stichos: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
    communion_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    magnificat_sung: true,
  },

  // ── P+46 — Thursday of the Seventh Week — Ascension Afterfeast, Day 7 ─────
  // Source: 74.pdf. Drive record: 74.txt.
  46: {
    name: "Thursday of the Seventh Week — Ascension Afterfeast, Day 7",
    source_file: "74.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 4,
    troparion: {
      tone: 4,
      text: "Thou hast ascended in glory, O Christ our God, " +
            "having gladdened Thy disciples with the promise of the Holy Spirit; " +
            "and they were assured by the blessing " +
            "that Thou art the Son of God, the Redeemer of the world.",
    },
    hours_kontakion: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
    },
    feast_e: "Acts 25:13-19",
    feast_g: "John 16:23-33",
    prokeimenon_tone: 7,
    prokeimenon_text: "Be Thou exalted above the heavens, O God, and Thy glory above all the earth.",
    prokeimenon_stichos: "Ready is my heart, O God, ready is my heart; I will sing and chant in my glory.",
    alleluia_tone: 2,
    alleluia_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    alleluia_stichos: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
    communion_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    magnificat_sung: true,
  },

  // ── P+47 — Friday of the Seventh Week — Apodosis of the Ascension ──────────
  // Source: 75.pdf. Drive record: 75.txt. Fekula §4B14.
  // PDF rubric: "we chant everything as set forth on the Feast of the Ascension
  // except for the Readings and the Antiphons."
  // Feast texts govern exclusively — no Menaion. O Heavenly King still omitted.
  47: {
    name: "Friday of the Seventh Week — Apodosis of the Ascension",
    source_file: "75.pdf",
    fekula_section: "4B14",
    hours_format: "apodosis_ascension",
    tone: 4,
    troparion: {
      tone: 4,
      text: "Thou hast ascended in glory, O Christ our God, " +
            "having gladdened Thy disciples with the promise of the Holy Spirit; " +
            "and they were assured by the blessing " +
            "that Thou art the Son of God, the Redeemer of the world.",
    },
    hours_kontakion: {
      tone: 6,
      text: "When Thou didst fulfill Thy dispensation for our sake, " +
            "uniting things on earth with the heavens, " +
            "Thou didst ascend in glory, O Christ our God, " +
            "departing not hence, but remaining inseparable from us, " +
            "and crying unto them that love Thee: " +
            "I am with you, and no one shall be against you.",
    },
    feast_e: "Acts 27:1-43",
    feast_g: "John 17:18-26",
    prokeimenon_tone: 7,
    prokeimenon_text: "Be Thou exalted above the heavens, O God, and Thy glory above all the earth.",
    prokeimenon_stichos: "Ready is my heart, O God, ready is my heart; I will sing and chant in my glory.",
    alleluia_tone: 2,
    alleluia_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    alleluia_stichos: "Clap your hands, all ye nations; shout unto God with a voice of rejoicing.",
    communion_verse: "God is gone up in jubilation, the Lord with the voice of the trumpet.",
    zadostoinik_irmos: "O Thou who art God\'s Mother transcending mind and word, " +
      "who ineffably in time hast given birth unto the Timeless One, " +
      "Thee do we the faithful magnify with one accord.",
    zadostoinik_refrain: "Magnify, O my soul, Christ the giver of life, Who ascended from earth to heaven.",
    magnificat_sung: true,
    menaion_set_aside: true,
  },

  // ── P+48 — Saturday of the Reposed — Before Pentecost ──────────────────────
  // Source: 76.pdf. Drive record: 76.txt. Fekula §4B14.
  // Ecumenical Memorial Saturday for all departed Orthodox Christians.
  // Entirely unique structure — replaces afterfeast content completely.
  // TWO epistles + TWO gospels at Liturgy (for the Day + for the Reposed).
  // O Heavenly King still omitted (pre-Pentecost).
  48: {
    name: "Saturday of the Reposed — Before Pentecost",
    source_file: "76.pdf",
    fekula_section: "4B14",
    hours_format: "pentecostarion_saturday_reposed",
    tone: 6, // week tone

    troparion: {
      tone: 8,
      text: "O Thou Who by the depth of Thy wisdom " +
            "dost provide all things out of love for mankind, " +
            "and grantest unto all that which is profitable, O only Creator: " +
            "Grant rest, O Lord, to the souls of Thy servants; " +
            "for in Thee have they placed their hope, " +
            "O our Creator and Fashioner and God.",
      source: "reposed",
    },
    kontakion: {
      tone: 8,
      text: "With the Saints grant rest, O Christ, " +
            "to the souls of Thy servants, " +
            "in a place where there is neither pain, nor sorrow, nor sighing, " +
            "but life everlasting.",
      source: "reposed",
    },
    hours_kontakion: {
      tone: 8,
      text: "With the Saints grant rest, O Christ, " +
            "to the souls of Thy servants, " +
            "in a place where there is neither pain, nor sorrow, nor sighing, " +
            "but life everlasting.",
      source: "reposed",
    },

    // For the Day
    feast_e: "Acts 28:1-31",
    feast_g: "John 21:15-26",
    // For the Reposed
    reposed_e: "1 Thessalonians 4:13-17",
    reposed_g: "John 5:24-30",

    prokeimenon_tone: 6,
    prokeimenon_text: "Their souls shall dwell among good things.",
    prokeimenon_stichos: "Unto Thee, O Lord, have I lifted up my soul, O my God, in Thee have I trusted, " +
      "let me never be put to shame.",
    alleluia_tone: 6,
    alleluia_verse: "Blessed are they whom Thou hast chosen and taken to Thyself, O Lord.",
    alleluia_stichos: "Their memorial is unto generation and generation.",
    communion_verse: "Blessed are they whom Thou hast chosen and taken to Thyself, O Lord: " +
      "Their memorial is unto generation and generation.",

    magnificat_sung: false,
    menaion_set_aside: true,
    heavenly_king_omitted: true,
  },

  // ── P+49 — Holy Pentecost ───────────────────────────────────────────────────
  // Source: 80.pdf. Drive record: 80.txt. Fekula §4B15.
  // Great Feast. O Heavenly King RESTORED (first time since P+39).
  // Trisagion replaced at Liturgy. Magnificat not sung. Great Doxology. Polyeleos.
  // Three OT paroemias at Great Vespers: Numbers, Joel, Ezekiel.
  49: {
    name: "Holy Pentecost — Sunday",
    source_file: "80.pdf",
    fekula_section: "4B15",
    hours_format: "pentecost",
    tone: 8,

    troparion: {
      tone: 8,
      text: "Blessed art Thou, O Christ our God, " +
            "Who hast shown forth the fishermen as supremely wise, " +
            "by sending down upon them the Holy Spirit, " +
            "and through them didst draw the world into Thy net. " +
            "O Lover of mankind, glory be to Thee.",
    },
    kontakion: {
      tone: 8,
      text: "Once, when He descended and confounded the tongues, " +
            "the Most High divided the nations; " +
            "and when He divided the tongues of fire, " +
            "He called all men into unity; " +
            "and with one accord we glorify the all-holy Spirit.",
    },
    hours_kontakion: {
      tone: 8,
      text: "Once, when He descended and confounded the tongues, " +
            "the Most High divided the nations; " +
            "and when He divided the tongues of fire, " +
            "He called all men into unity; " +
            "and with one accord we glorify the all-holy Spirit.",
    },

    feast_e: "Acts 2:1-11",
    feast_g: "John 7:37-52; 8:12",
    prokeimenon_tone: 8,
    prokeimenon_text: "Their sound hath gone forth into all the earth, " +
      "and their words unto the ends of the world.",
    prokeimenon_stichos: "The heavens declare the glory of God, " +
      "and the firmament proclaimeth the work of His hands.",
    alleluia_tone: 1,
    alleluia_verse: "By the Word of the Lord were the heavens established, " +
      "and all the might of them by the Spirit of His mouth.",
    alleluia_stichos: "The Lord looked down from heaven, He beheld all the sons of men.",
    communion_verse: "Thy good Spirit shall lead me in the land of uprightness.",
    trisagion_replacement: "As many as have been baptized into Christ have put on Christ. Alleluia.",
    zadostoinik_irmos: "Rejoice, O Queen boast of virgins and mothers; " +
      "for every eloquent and capable mouth is unable to extol thee worthily, " +
      "and every mind is confounded in seeking to comprehend thy childbirth. " +
      "Wherefore, with one accord thee do we glorify.",

    paroemia_1: "Numbers 11:16-17, 24-29",
    paroemia_2: "Joel 2:23-32",
    paroemia_3: "Ezekiel 36:24-28",

    magnificat_sung: false,
    menaion_set_aside: true,
    heavenly_king_restored: true,
    has_great_doxology: true,
    has_polyeleos: true,
    has_litya: true,
  },

  // ── P+50 — Monday of the Eighth Week — Holy Spirit Day ──────────────────────
  // Source: 81.pdf. Drive record: 81.txt. Fekula §4B15.
  // Feast in its own right — dedicated to the Holy Spirit.
  // Pentecost troparion/kontakion govern. Great Doxology. Magnificat NOT sung.
  // Kneeling Vespers celebrated on P+49 Sunday evening (restores kneeling prayer).
  50: {
    name: "Monday of the Eighth Week — Holy Spirit Day",
    source_file: "81.pdf",
    fekula_section: "4B15",
    hours_format: "holy_spirit_day",
    tone: 8,
    troparion: {
      tone: 8,
      text: "Blessed art Thou, O Christ our God, " +
            "Who hast shown forth the fishermen as supremely wise, " +
            "by sending down upon them the Holy Spirit, " +
            "and through them didst draw the world into Thy net. " +
            "O Lover of mankind, glory be to Thee.",
    },
    kontakion: {
      tone: 8,
      text: "Once, when He descended and confounded the tongues, " +
            "the Most High divided the nations; " +
            "and when He divided the tongues of fire, " +
            "He called all men into unity; " +
            "and with one accord we glorify the all-holy Spirit.",
    },
    hours_kontakion: {
      tone: 8,
      text: "Once, when He descended and confounded the tongues, " +
            "the Most High divided the nations; " +
            "and when He divided the tongues of fire, " +
            "He called all men into unity; " +
            "and with one accord we glorify the all-holy Spirit.",
    },
    feast_e: "Ephesians 5:9-19",
    feast_g: "Matthew 18:10-20",
    prokeimenon_tone: 6,
    prokeimenon_text: "Save, O Lord, Thy people, and bless Thine inheritance.",
    prokeimenon_stichos: "Unto Thee, O Lord, will I cry; O my God, be not silent unto me.",
    alleluia_tone: 2,
    alleluia_verse: "Have mercy on me, O God, according to Thy great mercy.",
    alleluia_stichos: "Turn not Thy face away from me, and take not Thy Holy Spirit from me.",
    communion_verse: "Thy good Spirit shall lead me in the land of uprightness.",
    zadostoinik_irmos: "Rejoice, O Queen boast of virgins and mothers; " +
      "for every eloquent and capable mouth is unable to extol thee worthily, " +
      "and every mind is confounded in seeking to comprehend thy childbirth. " +
      "Wherefore, with one accord thee do we glorify.",
    magnificat_sung: false,
    menaion_set_aside: false,
    has_great_doxology: true,
  },

  // ── P+51 — Tuesday of the Eighth Week — Pentecost Afterfeast Day 2 ──────────
  // Source: 82.pdf. Drive record: 82.txt.
  // Pentecost afterfeast weekday. Feast troparion/kontakion govern.
  51: {
    name: "Tuesday of the Eighth Week — Pentecost Afterfeast, Day 2",
    source_file: "82.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 8,
    troparion: {
      tone: 8,
      text: "Blessed art Thou, O Christ our God, " +
            "Who hast shown forth the fishermen as supremely wise, " +
            "by sending down upon them the Holy Spirit, " +
            "and through them didst draw the world into Thy net. " +
            "O Lover of mankind, glory be to Thee.",
    },
    hours_kontakion: {
      tone: 8,
      text: "Once, when He descended and confounded the tongues, " +
            "the Most High divided the nations; " +
            "and when He divided the tongues of fire, " +
            "He called all men into unity; " +
            "and with one accord we glorify the all-holy Spirit.",
    },
    feast_e: "Romans 1:1-7, 13-17",
    feast_g: "Matthew 4:25-5:13",
    prokeimenon_tone: 8,
    prokeimenon_text: "Their sound hath gone forth into all the earth, " +
      "and their words unto the ends of the world.",
    prokeimenon_stichos: "The heavens declare the glory of God, " +
      "and the firmament proclaimeth the works of His hands.",
    alleluia_tone: 1,
    alleluia_verse: "By the Word of the Lord were the heavens established, " +
      "and all the might of them by the Spirit of His mouth.",
    alleluia_stichos: "The Lord looked down from heaven, He beheld all the sons of men.",
    communion_verse: "Thy good Spirit shall lead me in the land of uprightness.",
    zadostoinik_irmos: "Rejoice, O Queen boast of virgins and mothers; " +
      "for every eloquent and capable mouth is unable to extol thee worthily, " +
      "and every mind is confounded in seeking to comprehend thy childbirth. " +
      "Wherefore, with one accord thee do we glorify.",
    magnificat_sung: true,
  },

  // ── P+52 — Wednesday of the Eighth Week — Pentecost Afterfeast Day 3 ────────
  // Source: 83.pdf. Drive record: 83.txt.
  // Magnificat NOT sung on Wednesday (PDF explicit: "No Magnificat").
  52: {
    name: "Wednesday of the Eighth Week — Pentecost Afterfeast, Day 3",
    source_file: "83.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 8,
    troparion: {
      tone: 8,
      text: "Blessed art Thou, O Christ our God, " +
            "Who hast shown forth the fishermen as supremely wise, " +
            "by sending down upon them the Holy Spirit, " +
            "and through them didst draw the world into Thy net. " +
            "O Lover of mankind, glory be to Thee.",
    },
    hours_kontakion: {
      tone: 8,
      text: "Once, when He descended and confounded the tongues, " +
            "the Most High divided the nations; " +
            "and when He divided the tongues of fire, " +
            "He called all men into unity; " +
            "and with one accord we glorify the all-holy Spirit.",
    },
    feast_e: "Romans 1:18-27",
    feast_g: "Matthew 5:20-26",
    prokeimenon_tone: 8,
    prokeimenon_text: "Their sound hath gone forth into all the earth, " +
      "and their words unto the ends of the world.",
    prokeimenon_stichos: "The heavens declare the glory of God, " +
      "and the firmament proclaimeth the works of His hands.",
    alleluia_tone: 1,
    alleluia_verse: "By the Word of the Lord were the heavens established, " +
      "and all the might of them by the Spirit of His mouth.",
    alleluia_stichos: "The Lord looked down from heaven, He beheld all the sons of men.",
    communion_verse: "Thy good Spirit shall lead me in the land of uprightness.",
    zadostoinik_irmos: "Rejoice, O Queen boast of virgins and mothers; " +
      "for every eloquent and capable mouth is unable to extol thee worthily, " +
      "and every mind is confounded in seeking to comprehend thy childbirth. " +
      "Wherefore, with one accord thee do we glorify.",
    magnificat_sung: false,
  },

  // ── P+53 — Thursday of the Eighth Week — Pentecost Afterfeast, Day 4 ────────
  // Source: 84.pdf. Drive record: 84.txt. Magnificat NOT sung (PDF: "No Magnificat").
  53: {
    name: "Thursday of the Eighth Week — Pentecost Afterfeast, Day 4",
    source_file: "84.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 8,
    troparion: {
      tone: 8,
      text: "Blessed art Thou, O Christ our God, " +
            "Who hast shown forth the fishermen as supremely wise, " +
            "by sending down upon them the Holy Spirit, " +
            "and through them didst draw the world into Thy net. " +
            "O Lover of mankind, glory be to Thee.",
    },
    hours_kontakion: {
      tone: 8,
      text: "Once, when He descended and confounded the tongues, " +
            "the Most High divided the nations; " +
            "and when He divided the tongues of fire, " +
            "He called all men into unity; " +
            "and with one accord we glorify the all-holy Spirit.",
    },
    feast_e: "Romans 1:28-2:9",
    feast_g: "Matthew 5:27-32",
    prokeimenon_tone: 8,
    prokeimenon_text: "Their sound hath gone forth into all the earth, " +
      "and their words unto the ends of the world.",
    prokeimenon_stichos: "The heavens declare the glory of God, " +
      "and the firmament proclaimeth the works of His hands.",
    alleluia_tone: 1,
    alleluia_verse: "By the Word of the Lord were the heavens established, " +
      "and all the might of them by the Spirit of His mouth.",
    alleluia_stichos: "The Lord looked down from heaven, He beheld all the sons of men.",
    communion_verse: "Thy good Spirit shall lead me in the land of uprightness.",
    zadostoinik_irmos: "Rejoice, O Queen boast of virgins and mothers; " +
      "for every eloquent and capable mouth is unable to extol thee worthily, " +
      "and every mind is confounded in seeking to comprehend thy childbirth. " +
      "Wherefore, with one accord thee do we glorify.",
    magnificat_sung: false,
  },

  // ── P+54 — Friday of the Eighth Week — Pentecost Afterfeast, Day 5 ──────────
  // Source: 85.pdf. Drive record: 85.txt. Magnificat NOT sung (PDF: "No Magnificat").
  // Alleluia shifts to Tone 2 (from Tone 1 on Thu).
  54: {
    name: "Friday of the Eighth Week — Pentecost Afterfeast, Day 5",
    source_file: "85.pdf",
    fekula_section: "4A",
    hours_format: "pentecostarion_weekday",
    tone: 8,
    troparion: {
      tone: 8,
      text: "Blessed art Thou, O Christ our God, " +
            "Who hast shown forth the fishermen as supremely wise, " +
            "by sending down upon them the Holy Spirit, " +
            "and through them didst draw the world into Thy net. " +
            "O Lover of mankind, glory be to Thee.",
    },
    hours_kontakion: {
      tone: 8,
      text: "Once, when He descended and confounded the tongues, " +
            "the Most High divided the nations; " +
            "and when He divided the tongues of fire, " +
            "He called all men into unity; " +
            "and with one accord we glorify the all-holy Spirit.",
    },
    feast_e: "Romans 2:14-29",
    feast_g: "Matthew 5:33-41",
    prokeimenon_tone: 8,
    prokeimenon_text: "Their sound hath gone forth into all the earth, " +
      "and their words unto the ends of the world.",
    prokeimenon_stichos: "The heavens declare the glory of God, " +
      "and the firmament proclaimeth the works of His hands.",
    alleluia_tone: 2,
    alleluia_verse: "By the Word of the Lord were the heavens established, " +
      "and all the might of them by the Spirit of His mouth.",
    alleluia_stichos: "The Lord looked down from heaven, He beheld all the sons of men.",
    communion_verse: "Thy good Spirit shall lead me in the land of uprightness.",
    zadostoinik_irmos: "Rejoice, O Queen boast of virgins and mothers; " +
      "for every eloquent and capable mouth is unable to extol thee worthily, " +
      "and every mind is confounded in seeking to comprehend thy childbirth. " +
      "Wherefore, with one accord thee do we glorify.",
    magnificat_sung: false,
  },

  // ── P+55 — Saturday of the Eighth Week — Apodosis of Pentecost ──────────────
  // Source: 86.pdf. Drive record: 86.txt.
  // PDF rubric: "except for the Readings, the Polyeleos, and the Antiphons,
  // we chant everything as set forth on the Feast of Pentecost."
  // Feast texts govern exclusively. Same troparion/kontakion as Pentecost.
  55: {
    name: "Saturday of the Eighth Week — Apodosis of Pentecost",
    source_file: "86.pdf",
    fekula_section: "4B15",
    hours_format: "apodosis_pentecost",
    tone: 8,
    troparion: {
      tone: 8,
      text: "Blessed art Thou, O Christ our God, " +
            "Who hast shown forth the fishermen as supremely wise, " +
            "by sending down upon them the Holy Spirit, " +
            "and through them didst draw the world into Thy net. " +
            "O Lover of mankind, glory be to Thee.",
    },
    kontakion: {
      tone: 8,
      text: "Once, when He descended and confounded the tongues, " +
            "the Most High divided the nations; " +
            "and when He divided the tongues of fire, " +
            "He called all men into unity; " +
            "and with one accord we glorify the all-holy Spirit.",
    },
    hours_kontakion: {
      tone: 8,
      text: "Once, when He descended and confounded the tongues, " +
            "the Most High divided the nations; " +
            "and when He divided the tongues of fire, " +
            "He called all men into unity; " +
            "and with one accord we glorify the all-holy Spirit.",
    },
    feast_e: "Romans 1:7-12",
    feast_g: "Matthew 5:42-48",
    prokeimenon_tone: 8,
    prokeimenon_text: "Their sound hath gone forth into all the earth, " +
      "and their words unto the ends of the world.",
    prokeimenon_stichos: "The heavens declare the glory of God, " +
      "and the firmament proclaimeth the works of His hands.",
    alleluia_tone: 2,
    alleluia_verse: "By the Word of the Lord were the heavens established, " +
      "and all the might of them by the Spirit of His mouth.",
    alleluia_stichos: "The Lord looked down from heaven, He beheld all the sons of men.",
    communion_verse: "Thy good Spirit shall lead me in the land of uprightness.",
    zadostoinik_irmos: "Rejoice, O Queen boast of virgins and mothers; " +
      "for every eloquent and capable mouth is unable to extol thee worthily, " +
      "and every mind is confounded in seeking to comprehend thy childbirth. " +
      "Wherefore, with one accord thee do we glorify.",
    magnificat_sung: false,
    menaion_set_aside: true,
  },

  // ── P+56 — First Sunday After Pentecost — All Saints ────────────────────────
  // Source: 90.pdf. Drive record: 90.txt.
  // Octoechos Tone 8 cycle begins. TWO troparia: Resurrection T8 + All Saints T4.
  // Kontakion: All Saints T8. Great Doxology. Resurrection Gospel #1.
  // Three OT paroemias at Saturday Vespers. Magnificat sung.
  // ORDINARY TIME begins Monday after All Saints (P+57).
  56: {
    name: "First Sunday After Pentecost — All Saints",
    source_file: "90.pdf",
    fekula_section: "1A",
    hours_format: "all_saints_sunday",
    tone: 8,

    // Primary: Resurrection Tone 8
    troparion: {
      tone: 8,
      text: "From on high didst Thou descend, O compassionate One; " +
            "to burial of three days hast Thou submitted " +
            "that Thou mightest free us from our passions. " +
            "O our Life and Resurrection, O Lord, glory be to Thee.",
      source: "resurrection_tone_8",
    },

    // Under Glory: All Saints troparion Tone 4
    troparion_2: {
      tone: 4,
      text: "Adorned in the blood of Thy martyrs " +
            "throughout all the world as in purple and fine linen, " +
            "Thy church, through them, doth cry unto Thee, O Christ God: " +
            "Send down Thy compassions upon Thy people; " +
            "grant peace to Thy commonwealth, and great mercy to our souls.",
      source: "all_saints",
      placement: "glory",
    },

    // Kontakion: All Saints Tone 8 (Ode VI / 3rd + 9th Hours — Both now)
    kontakion: {
      tone: 8,
      text: "To Thee, the Planter of creation, " +
            "the world doth offer the God-bearing martyrs as the first-fruits of nature. " +
            "By their supplications, preserve Thy Church in perfect peace, " +
            "through the Theotokos, O Greatly-Merciful One.",
      source: "all_saints",
    },
    hours_kontakion: {
      tone: 8,
      text: "To Thee, the Planter of creation, " +
            "the world doth offer the God-bearing martyrs as the first-fruits of nature. " +
            "By their supplications, preserve Thy Church in perfect peace, " +
            "through the Theotokos, O Greatly-Merciful One.",
      source: "all_saints",
    },

    feast_e: "Hebrews 11:33-12:2",
    feast_g: "Matthew 10:32,33,37-38; 19:27-30",

    // Two prokeimena at Liturgy
    prokeimenon_tone: 8,
    prokeimenon_text: "Make your vows and pay them to the Lord our God.",
    prokeimenon_stichos: "In Judea is God known, His name is great in Israel.",
    prokeimenon_2_tone: 4,
    prokeimenon_2_text: "Wondrous is God in His saints, the God of Israel.",

    // Two alleluias at Liturgy
    alleluia_tone: 8,
    alleluia_verse: "Come, let us rejoice in the Lord; " +
      "let us shout with jubilation unto God our Savior.",
    alleluia_2_tone: 4,
    alleluia_2_verse: "The righteous cried, and the Lord heard them.",
    alleluia_2_stichos: "Many are the tribulations of the righteous, " +
      "and the Lord shall deliver them out of them all.",

    communion_verse: "Praise the Lord in the heavens, praise Him in the highest! " +
      "Verse: Rejoice in the Lord, O ye righteous; praise is meet for the upright.",

    paroemia_1: "Isaiah 43:9-14",
    paroemia_2: "Wisdom of Solomon 3:1-9",
    paroemia_3: "Wisdom of Solomon 5:15ff",

    magnificat_sung: true,
    has_great_doxology: true,
    has_litya: true,
    matins_gospel: 1,
  },

};

function getPentecostarionEntry(offset) {
  return PENTECOSTARION[offset] || null;
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


function assembleHour(hourKey, liturgicalData, menaionEntry, pentEntry, tbOpen = false) {
  const elements = [];
  const { paschaOffset, tone, dayName, season, namedDay } = liturgicalData;

  // ── Season flags ──────────────────────────────────────────────────────────
  const isPentecostarion = season === 'pentecostarion' || season === 'brightweek';
  const isSunday = season === 'sunday' || season === 'pentecostarion_sunday';
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
      return '§4A';
    }
    if (!menaionEntry) return '§2A';
    if (menaionEntry.fekula_section_override) return `§${menaionEntry.fekula_section_override}`;
    const r = menaionEntry.rank;
    return r === 'six_stichera' ? '§2C'
         : r === 'doxology'    ? '§2D'
         : r === 'polyeleos'   ? '§2E'
         : r === 'vigil'       ? '§2F'
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
    const pKont = pentEntry.hours_kontakion
      || (is3rdOr9th
          ? (pentEntry.kontakion_ode6 || pentEntry.kontakion_ode3)
          : (pentEntry.kontakion_ode3 || pentEntry.kontakion_ode6));
    const mKont = menaionEntry && menaionEntry.kontakion ? menaionEntry.kontakion : null;
    const isHighRank = menaionEntry && ['doxology','polyeleos','vigil'].includes(menaionEntry.rank);
    kontakion = (isHighRank && is3rdOr9th && mKont) ? mKont : pKont;
    kontakionSource = (isHighRank && is3rdOr9th && mKont)
      ? `Menaion — ${effectiveSaint} (Doxology+ rank)`
      : `Pentecostarion — ${pentEntry.name}`;
  } else {
    kontakion = getKontakionForHour(menaionEntry, hourKey);
    kontakionSource = `Menaion — ${effectiveSaint}`;
    if (isOrdinarySunday && namedDay && namedDay.kontakion) {
      const useThirdOde = hourKey === '1st_hour' || hourKey === '6th_hour';
      kontakion = useThirdOde && namedDay.kontakion_3rd_ode
        ? namedDay.kontakion_3rd_ode
        : namedDay.kontakion;
      kontakionSource = namedDay.name;
    }
  }
  // ── OPENING ─────────────────────────────────────────────────────────────
  if (is3rdOr9th) {
    // Full beginning at 3rd and 9th Hours
    elements.push({
      id: `${hourKey}-blessing`, type: 'fixed', label: '', rubric: 'Priest (or Reader if no priest):',
      text: 'Blessed is our God, always, now and ever, and unto the ages of ages.',
      source: 'HTM',
    });
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
    elements.push({
      id: `${hourKey}-for-thine`, type: 'fixed', label: '', rubric: 'Priest:',
      text: 'For Thine is the kingdom, and the power, and the glory: of the Father, and of the Son, and of the Holy Spirit, now and ever, and unto the ages of ages.',
      source: 'HTM',
    });
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
    // 1st and 6th Hours: no full beginning
    if (christIsRisenActive && !tbOpen) {
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
        rubric: (christIsRisenActive && tbOpen)
          ? 'Christ is risen was said in the Typical Beginning above. Continuing:'
          : null,
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
  elements.push({
    id: `${hourKey}-for-thine-2`, type: 'fixed', label: '', rubric: 'Priest:',
    text: 'For Thine is the kingdom, and the power, and the glory: of the Father, and of the Son, and of the Holy Spirit, now and ever, and unto the ages of ages.',
    source: 'HTM',
  });
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
  elements.push({
    id: `${hourKey}-name-of-lord`, type: 'fixed', label: '', rubric: null,
    text: 'In the name of the Lord, father (master), bless.',
    source: 'HTM',
  });
  // Per HTM: blessing text differs by Hour
  // 1st + 9th: "God be gracious unto us and bless us..."
  // 3rd + 6th: "Through the prayers of our holy fathers..."
  const SHORT_BLESSING = {
    '1st_hour': 'God be gracious unto us and bless us, and cause Thy face to shine upon us and have mercy on us.',
    '3rd_hour': 'Through the prayers of our holy fathers, O Lord Jesus Christ our God, have mercy on us.',
    '6th_hour': 'Through the prayers of our holy fathers, O Lord Jesus Christ our God, have mercy on us.',
    '9th_hour': 'God be gracious unto us and bless us, and cause Thy face to shine upon us and have mercy on us.',
  };
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
      rubric: hourKey === '1st_hour' ? 'Priest:' : null,
      text: CLOSING_PRAYER[hourKey],
      source: 'HTM',
    });
  }

  // ── 1ST HOUR SPECIAL CLOSE (HTM) ─────────────────────────────────────────
  // After the closing prayer (Priest: O Christ the True Light...) the sequence is:
  // Chanters: To thee, the Champion Leader...
  // Priest: Glory to Thee, O Christ God, our hope, glory to Thee.
  // Chanters: Glory to the Father... Lord, have mercy. (thrice) Father (Master), bless.
  // Priest: (dismissal) May Christ our true God...
  // Chanters: Amen. Lord, have mercy. (thrice)
  if (hourKey === '1st_hour') {
    elements.push({
      id: '1st_hour-champion-leader', type: 'fixed', label: '', rubric: null,
      text: 'To thee, the Champion Leader, we thy servants dedicate a feast of victory ' +
        'and of thanksgiving as ones rescued out of sufferings, O Theotokos; but as thou ' +
        'art one with might which is invincible, from all dangers that can be do thou ' +
        'deliver us, that we may cry to thee: Rejoice, thou Bride Unwedded!',
      source: 'HTM',
    });
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
  const useThirdOde = hourKey === "1st_hour" || hourKey === "6th_hour";
  if (useThirdOde && entry.kontakion_3rd_ode) {
    return entry.kontakion_3rd_ode;
  }
  return entry.kontakion;
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
const SERVICE_REGISTRY = [
  { key: "1st_hour",  label: "The First Hour",        built: true  },
  { key: "3rd_hour",  label: "The Third Hour",        built: true  },
  { key: "6th_hour",  label: "The Sixth Hour",        built: true  },
  { key: "typica",    label: "The Order of the Typica", built: false },
  { key: "9th_hour",  label: "The Ninth Hour",        built: true  },
  { key: "vespers",   label: "Vespers",               built: false },
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
function ServiceBlock({ element }) {
  // ── End-of-hour marker ───────────────────────────────────────────────────
  if (element.type === 'end_marker') {
    return (
      <div style={{
        textAlign: 'center',
        fontFamily: 'Georgia, serif',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        letterSpacing: '0.12em',
        color: '#5A4A2A',
        margin: '2rem 0 0.5rem',
        paddingTop: '1rem',
        borderTop: '1px solid #D4C49A',
      }}>
        {element.text}
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
      {element.rubric && (
        <div
          style={{
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#8B6914",
            marginBottom: "0.25rem",
            fontFamily: "Georgia, serif",
          }}
        >
          {element.rubric}
        </div>
      )}

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
        {isMovable && element.fekula && (
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

      {element.toneNote && (
        <div style={{ fontSize: "0.76rem", color: "#9A8A70", fontStyle: "italic", marginBottom: "0.3rem" }}>
          {element.toneNote}
        </div>
      )}

      {(() => {
        const isPriest = element.rubric && element.rubric.startsWith("Priest:");
        const isPsalm = element.text && element.text.startsWith("PSALM ");
        const bodyStyle = {
          fontFamily: "Georgia, serif",
          fontSize: "0.97rem",
          lineHeight: "1.75",
          color: isPriest ? "#A89880" : isMovable ? "#1C1008" : "#3D3020",
          fontStyle: isPriest ? "italic" : "normal",
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
        return <div style={bodyStyle}>{element.text}</div>;
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

  const rank = menaionEntry.rank || 'simple';
  const info = RANK_EXPLANATIONS[rank] || RANK_EXPLANATIONS.simple;

  // Extract rank confirmation note from encoding record
  const encodingNote = menaionEntry.note || '';
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

// ─── TYPICAL BEGINNING ───────────────────────────────────────────────────────
// Collapsible component for the 1st and 6th Hours.
// These Hours begin directly with O come let us worship when following
// the previous service. When said separately, the Typical Beginning is used.
// Source: OCA first-hour.pdf and sixth-hour.pdf; HTM skeleton; Fekula §4A.

function TypicalBeginning({ hourKey, liturgicalData, tbOpen, setTbOpen }) {
  const open = tbOpen;
  const setOpen = setTbOpen;

  const is1st = hourKey === '1st_hour';
  const ocaNote = is1st
    ? "The First Hour is often celebrated immediately following Matins, and it begins as shown here. If the First Hour is said separately, it begins with the Typical Beginning, as at Vespers."
    : "The Sixth Hour is often celebrated immediately following the Third Hour, and it begins as shown here. If the Sixth Hour is said separately, it begins with the Typical Beginning, as at Vespers.";

  const { paschaOffset, season } = liturgicalData;
  const isPentecostarion = season === 'pentecostarion' || season === 'brightweek';
  const christIsRisenActive = isPentecostarion && paschaOffset >= 7 && paschaOffset <= 38;
  const heavenlyKingOmitted = isPentecostarion && paschaOffset > 38;
  // Build the opening content based on season
  const openingContent = () => {
    if (christIsRisenActive) {
      return (
        <div>
          <p style={textStyle}>Reader: Amen.</p>
          <p style={rubrStyle}>(Glory to Thee and O Heavenly King are both skipped — immediately:)</p>
          <p style={textStyle}>
            Christ is risen from the dead,<br/>
            trampling down death by death,<br/>
            and on those in the tombs bestowing life.
          </p>
          <p style={rubrStyle}>Thrice. Then continuing with:</p>
          <p style={{...badgeStyle, marginBottom: '0.5rem'}}>
            <span style={fekulaStyle}>§4A</span>
            After the reader saith Amen, he immediately saith thrice: Christ is risen
            (Glory to Thee and O Heavenly King are both skipped). — HTM 1st/6th Hour rubric; Fekula §4A
          </p>
        </div>
      );
    } else if (heavenlyKingOmitted) {
      return (
        <div>
          <p style={textStyle}>Reader: Amen.</p>
          <p style={{...textStyle, color: '#9A8A70', fontStyle: 'italic'}}>
            Glory to Thee, our God and O Heavenly King are both omitted from
            the Apodosis of Pascha until Pentecost.
            The reader proceeds directly to Holy God, Holy Mighty...
          </p>
          <p style={{...badgeStyle, marginBottom: '0.5rem'}}>
            <span style={fekulaStyle}>§4B11</span>
            The Ninth Hour begins with the reading of the Trisagion (and thus until
            Pentecost, when we read O Heavenly King... for the first time). — Fekula §4B11
          </p>
        </div>
      );
    } else {
      // Ordinary time
      return (
        <div>
          <p style={textStyle}>Reader: Amen.</p>
          <p style={textStyle}>
            Glory to Thee, our God, glory to Thee.<br/><br/>
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
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    userSelect: 'none',
  };
  const titleStyle = {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#8B6914',
    fontFamily: 'Georgia, serif',
    fontWeight: 'bold',
  };
  const noteStyle = {
    fontSize: '0.78rem',
    color: '#9A8A70',
    fontStyle: 'italic',
    marginTop: '0.35rem',
    lineHeight: '1.5',
  };
  const rubrStyle = {
    fontSize: '0.72rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#8B6914',
    marginBottom: '0.25rem',
    marginTop: '1rem',
  };
  const priestStyle = {
    fontSize: '0.85rem',
    fontStyle: 'italic',
    color: '#9A8A70',
    marginBottom: '0.25rem',
    marginTop: '1rem',
    fontFamily: 'Georgia, serif',
  };
  const textStyle = {
    fontSize: '1rem',
    lineHeight: '1.8',
    color: '#1C1008',
    marginBottom: '1rem',
  };
  const badgeStyle = {
    fontSize: '0.72rem',
    color: '#9A8A70',
    fontStyle: 'italic',
    display: 'flex',
    alignItems: 'baseline',
    gap: '6px',
  };
  const fekulaStyle = {
    fontSize: '0.65rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#8B6914',
    background: 'rgba(139,105,20,0.12)',
    border: '1px solid rgba(139,105,20,0.3)',
    borderRadius: '3px',
    padding: '1px 5px',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  };
  const labelStyle = {
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: '#9A8A70',
    fontFamily: 'Georgia, serif',
    fontWeight: 'bold',
    marginBottom: '0.2rem',
  };
  return (
    <div style={containerStyle}>
      <div style={headerStyle} onClick={() => setOpen(o => !o)}>
        <div>
          <div style={titleStyle}>
            &#9651; Typical Beginning (if said separately)
          </div>
          <div style={noteStyle}>{ocaNote}</div>
        </div>
        <span style={{ color: '#8B6914', fontSize: '1.1rem', marginLeft: '1rem', flexShrink: 0 }}>
          {open ? '▲' : '▼'}
        </span>
      </div>

      {open && (
        <div style={{ padding: '1rem 1.25rem 1.25rem' }}>

          {/* Priest blessing */}
          <div style={{ marginBottom: '1.4rem' }}>
            <div style={rubrStyle}>Priest (or Reader if no priest):</div>
            <div style={{...textStyle, color: '#A89880', fontStyle: 'italic'}}>
              Blessed is our God, always, now and ever, and unto the ages of ages.
            </div>
          </div>

          {/* Seasonal opening */}
          <div style={{ marginBottom: '1.4rem' }}>
            {openingContent()}
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
            <div style={rubrStyle}>Priest:</div>
            <div style={{...textStyle, color: '#A89880', fontStyle: 'italic'}}>
              For Thine is the kingdom, and the power, and the glory:<br/>
              of the Father, and of the Son, and of the Holy Spirit,<br/>
              now and ever, and unto the ages of ages.
            </div>
            <div style={textStyle}>Reader: Amen.</div>
            <div style={textStyle}>
              Lord, have mercy. (twelve times)<br/>
              Glory to the Father, and to the Son, and to the Holy Spirit,<br/>
              both now and ever, and unto the ages of ages. Amen.
            </div>
          </div>

          {/* Source note */}
          <div style={{ fontSize: '0.72rem', color: '#9A8A70', fontStyle: 'italic',
                       borderTop: '1px solid #E8DFC0', paddingTop: '0.6rem', marginTop: '0.5rem' }}>
            Fixed texts: HTM Horologion, Jordanville (1994).
            Note and rubric: OCA liturgical texts.
            Seasonal substitution: Fekula §4A.
          </div>
        </div>
      )}
    </div>
  );
}



// ─── VERSION BADGE ────────────────────────────────────────────────────────────
// Clickable version badge in the header. Expands inline to show release notes.

const RELEASE_NOTES = [
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
        {RELEASE_NOTES[0].version} {open ? "▴" : "▾"}
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
                   display: "inline-block", transform: isOpen ? "rotate(180deg)" : "none" }}>▾</span>
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
    <div style={{ marginTop: "1rem", textAlign: "left" }}>

      {/* ── 1. The Calendar Engine ─────────────────────────────────────────── */}
      <div style={headerStyle} onClick={() => toggle("calendar")}>
        <span>The Calendar Engine</span>{chevron(open.calendar)}
      </div>
      {open.calendar && (
        <div style={panelStyle}>
          {p(<>The tool computes every movable feast, fast, and liturgical season from a single anchor: <strong>Pascha</strong> (Orthodox Easter). Pascha is calculated using the <em>Meeus/Jones/Butcher</em> algorithm applied to the Julian calendar, then converted to the Gregorian calendar by adding 13 days — the current difference between the two calendars, fixed until 2100.</>)}
          {p(<>From Pascha, every other movable date is a simple offset. Lent begins 48 days before Pascha (Clean Monday). Pentecost falls 49 days after. All Saints Sunday is 56 days after. The five Lenten Sundays, the pre-Lenten period (Meatfare, Cheesefare), Ascension, and All Saints of North America are all computed the same way — as a signed number of days from Pascha. The algorithm has been verified against the OCA desk calendar for 2026, 2027, and 2028.</>)}
          {p(<>The <strong>tone cycle</strong> (Tones 1–8 of the Octoechos) begins on the Monday after All Saints Sunday and advances one tone per week, cycling continuously through ordinary time.</>)}
          {p(<>The tool recognizes <strong>35 named movable days</strong> — from the Sunday of the Publican and Pharisee (Pascha−70) through All Saints of North America (Pascha+63) — and displays contextual notes for each. Great Feasts with their forefeasts, afterfeasts, and apodoses are tracked and influence which Fekula assembly rule applies.</>)}
          {sub("The Lectionary")}
          {p(<>The daily scripture readings shown in the context card come from a static table of <strong>298 entries</strong>, each keyed by its Pascha offset. The same offset yields the same readings every year — the entire New Testament cycle is purely movable, anchored to Pascha, not the calendar date.</>)}
          {p(<>One complication is the <strong>Lukan Jump</strong>: on the Monday after the Sunday on or after the Elevation of the Holy Cross (September 14), the Gospel abruptly leaves Matthew and begins Luke from the start. Because September 14 falls on a different day of the week each year, the exact Pascha offset where Luke begins shifts annually (typically P+134 to P+162) and is computed dynamically.</>)}
        </div>
      )}

      {/* ── 2. Source Hierarchy ────────────────────────────────────────────── */}
      <div style={headerStyle} onClick={() => toggle("sources")}>
        <span>Source Hierarchy</span>{chevron(open.sources)}
      </div>
      {open.sources && (
        <div style={panelStyle}>
          {p("Every decision the tool makes is traced to a source. When sources conflict, the higher-ranked source wins — and the conflict is flagged in the tool's notes.")}
          {sub("1 · Fekula & Williams, The Order of Divine Services (2009)")}
          {p(<>The primary assembly authority. Every structural decision — which troparion governs, which kontakion goes at which Hour, when the Menaion overrides the Octoechos — is cited to a specific section of Fekula. When you see a badge like <span style={{color:"#8B6914"}}>§2C</span> or <span style={{color:"#8B6914"}}>§4A</span>, that is the exact section justifying the placement.</>)}
          {sub("2 · OCA Calendar (oca.org)")}
          {p("Authoritative for OCA parishes. Takes precedence over the Russian Menaion when they differ. The OCA calendar determines which saints are commemorated on which dates. When the OCA calendar and the Russian Menaion disagree, the OCA calendar governs — and the divergence is documented in the encoding record for that date.")}
          {sub("3 · St. Sergius Menaion PDFs")}
          {p("The primary source for service texts. Each day's PDF contains the full texts for Vespers, Matins, and Liturgy. The tool reads these PDFs directly to extract troparion tone and text, kontakion tone and text, service rank (stichera count), and Matins ode assignments.")}
          {sub("4 · HTM Horologion (Unabbreviated Book of the Hours)")}
          {p("Source for all invariable Hour skeleton texts — the psalms, the Trisagion, Our Father, More Honourable, the priest's short blessings, and the closing prayers. These never change regardless of season or saint.")}
        </div>
      )}

      {/* ── 3. Anatomy of a Service ────────────────────────────────────────── */}
      <div style={headerStyle} onClick={() => toggle("anatomy")}>
        <span>Anatomy of a Service</span>{chevron(open.anatomy)}
      </div>
      {open.anatomy && (
        <div style={panelStyle}>
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
        </div>
      )}

      {/* ── 4. How a Date Gets Encoded ─────────────────────────────────────── */}
      <div style={headerStyle} onClick={() => toggle("encoding")}>
        <span>How a Date Gets Encoded</span>{chevron(open.encoding)}
      </div>
      {open.encoding && (
        <div style={panelStyle}>
          {p("Before the tool can assemble a service for a given date, that date must be encoded — meaning a human has read the source PDF and extracted the key liturgical data. This is not automated. Every entry represents a deliberate act of reading, cross-referencing, and decision-making.")}
          {sub("Step 1 · Read the Menaion PDF")}
          {p("The encoder opens the St. Sergius Menaion PDF for that date and checks:")}
          {ul([
            <><strong>Service rank</strong> — counted from the stichera on Lord I Call at Vespers: 3 stichera = Simple (§2A), 6 stichera = Six-Stichera (§2C), Great Doxology sung = Doxology (§2D), Polyeleos sung = Polyeleos (§2E), All-Night Vigil = Vigil (§2F).</>,
            <><strong>Troparion</strong> — tone number and full text.</>,
            <><strong>Kontakion(s)</strong> — tone number, full text, and which Matins ode they follow (Ode III or Ode VI). If there are two kontakia, both are recorded with their ode assignments, because the tool uses different kontakia at different Hours.</>,
          ])}
          {sub("Step 2 · Cross-reference the OCA calendar")}
          {ul([
            "Does the OCA calendar agree on the primary commemoration?",
            "Does the OCA troparion text differ from the St. Sergius text? (Same prayer, different translation — OCA governs.)",
            "Is this a New Style / Old Style date divergence?",
          ])}
          {sub("Step 3 · Record the encoding")}
          {p("All fields are written to a plain-text record (.txt file) saved to the project's Google Drive folder, including source file, Fekula section, troparion, kontakion(s) with ode assignments, service rank confirmation evidence, and all OCA divergences.")}
          {sub("Step 4 · Enter into the tool")}
          {p(<>Encoded data is written into the tool's <code>SAMPLE_MENAION</code> object (fixed calendar dates) or <code>PENTECOSTARION</code> object (dates keyed to Pascha). <strong>Currently encoded:</strong> Menaion May 18–31, June 1–30. Pentecostarion P+35 through P+56. Earlier dates are in progress.</>)}
          {sub("All encoded fields — the complete data record")}
          {p("Every date that has been encoded carries some or all of the following fields. Fields marked † are used directly in the assembled Hours today. All others are stored for future services (Vespers, Matins, Liturgy) or for display in the context card.")}
          <table style={{ width: "100%", fontSize: "0.75rem", borderCollapse: "collapse", marginBottom: "0.8rem" }}>
            <thead>
              <tr style={{ background: "rgba(139,105,20,0.1)", textAlign: "left" }}>
                <th style={{ padding: "4px 8px", borderBottom: "1px solid #D4C49A", color: "#5C4A1E" }}>Field</th>
                <th style={{ padding: "4px 8px", borderBottom: "1px solid #D4C49A", color: "#5C4A1E" }}>What it contains</th>
                <th style={{ padding: "4px 8px", borderBottom: "1px solid #D4C49A", color: "#5C4A1E" }}>Used now</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["saint", "Full name of the commemorated saint or feast", "✓ context card"],
                ["rank", "Service rank: simple · six_stichera · doxology · polyeleos · vigil", "✓ rank badge & explainer"],
                ["fekula_section", "Fekula §2A–§2F or §4A–§4B15 governing assembly", "✓ citation badges"],
                ["oca_primary", "Whether this is the OCA calendar's primary commemoration", "✓ OCA PRIMARY badge"],
                ["service_file", "Source PDF filename (e.g. 06-08.pdf)", "✓ encoding provenance"],
                ["note", "Encoding notes: OCA divergences, calendar collisions, rank evidence", "✓ context card note"],
                ["troparion · tone & text †", "Primary troparion — tone number and full text", "✓ assembled at all four Hours"],
                ["troparion_2 · tone, text, placement †", "Second troparion (Glory) when two troparia govern", "✓ assembled at all four Hours"],
                ["kontakion · tone, text, matins_ode †", "Kontakion with Matins ode assignment (III or VI)", "✓ assembled at 3rd & 9th Hours"],
                ["kontakion_3rd_ode · tone, text †", "Second kontakion when Ode III differs from Ode VI", "✓ assembled at 1st & 6th Hours"],
                ["hours_kontakion", "Pentecostarion: feast kontakion governing Both now at Hours", "✓ Pentecostarion Hours"],
                ["feast_e", "Feast proper Epistle reading (e.g. 2 Timothy 2:1-10)", "✓ context card"],
                ["feast_g", "Feast proper Gospel reading (e.g. Matthew 10:16-22)", "✓ context card"],
                ["prokeimenon_tone & text", "Prokeimenon tone, text, and stichos verse at Liturgy", "— Liturgy (future)"],
                ["prokeimenon_stichos", "Verse sung with the prokeimenon", "— Liturgy (future)"],
                ["alleluia_tone & verse", "Alleluia tone and verse at Liturgy", "— Liturgy (future)"],
                ["alleluia_stichos", "Second alleluia verse", "— Liturgy (future)"],
                ["communion_verse", "Communion hymn text at Liturgy", "— Liturgy (future)"],
                ["paroemia_1/2/3", "Old Testament Vespers lessons (Polyeleos & above)", "— Vespers (future)"],
                ["zadostoinik_irmos", "Irmos replacing It is truly meet on feast days", "— Matins/Liturgy (future)"],
                ["matins_gospel", "Resurrection Gospel number (1–11) at Sunday Matins", "— Matins (future)"],
                ["has_litya", "Whether the feast has a Litya at Vespers", "— Vespers (future)"],
                ["has_great_doxology", "Whether the Great Doxology is sung at Matins", "— Matins (future)"],
                ["magnificat_sung", "Whether the Magnificat (Ode IX) is sung or omitted", "— Matins (future)"],
                ["trisagion_replacement", "Text replacing the Trisagion on certain feasts (e.g. Pentecost)", "— Liturgy (future)"],
                ["reposed_e / reposed_g", "Second epistle/gospel set for the Saturday of Reposed", "— Liturgy (future)"],
                ["hours_format", "Assembly engine signal: paschal · pentecostarion_sunday · ascension · etc.", "✓ skeleton selection"],
                ["fekula_section_override", "Overrides default Fekula section for special cases (e.g. §2B double service)", "✓ citation badges"],
              ].map(([field, desc, used], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "rgba(0,0,0,0.02)" }}>
                  <td style={{ padding: "4px 8px", borderBottom: "1px solid #EDE5CE", fontFamily: "monospace", fontSize: "0.72rem", color: "#3B4A6B", whiteSpace: "nowrap" }}>{field}</td>
                  <td style={{ padding: "4px 8px", borderBottom: "1px solid #EDE5CE", color: "#2C1F0A" }}>{desc}</td>
                  <td style={{ padding: "4px 8px", borderBottom: "1px solid #EDE5CE", color: used.startsWith("✓") ? "#3A6B3A" : "#9A8A70", whiteSpace: "nowrap" }}>{used}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {p("In short: the tool stores the full data needed to assemble Vespers, Matins, and Liturgy for every encoded date. The Hours are the first surface — the underlying record is already built for the full daily cycle.", { fontStyle: "italic", color: "#5C4A1E" })}
        </div>
      )}

      {/* ── 5. Known Limitations & Feedback ───────────────────────────────── */}
      <div style={headerStyle} onClick={() => toggle("limits")}>
        <span>Known Limitations & How to Give Feedback</span>{chevron(open.limits)}
      </div>
      {open.limits && (
        <div style={panelStyle}>
          {sub("What the tool currently assembles")}
          {p("The 1st, 3rd, 6th, and 9th Hours. It does not currently assemble Vespers, Matins, or the Divine Liturgy — though Epistle and Gospel references are shown in the context card.")}
          {sub("Unresolved dates")}
          {p("Dates not yet read from the PDF are marked with a red border. The saint's name appears from the OCA calendar, but troparion and kontakion texts cannot be supplied. This is a gap in the encoding work, not in the liturgical tradition.")}
          {sub("Translation divergences")}
          {p("The tool primarily uses St. Sergius (Russian) Menaion texts. The OCA often uses a different English translation of the same prayer. These are the same prayer in a different rendering — not different prayers. Known divergences are flagged and will be corrected to OCA text in future updates.")}
          {sub("The two-kontakia rule")}
          {p("When a saint has two kontakia at Matins (Ode III and Ode VI), the tool uses the Ode III kontakion at the 1st and 6th Hours, and the Ode VI kontakion at the 3rd and 9th Hours. Not all dates have been fully verified for a second kontakion — some may use only the Ode VI kontakion as a fallback at all Hours.")}
          {sub("Lectionary")}
          {p("Readings are references only (e.g., Romans 4:4–12) — scripture text is not displayed. Old Testament Vespers lessons (paroemias) are present in the Menaion PDFs but not yet extracted or displayed. If you see Genesis, Ezekiel, or Proverbs listed on the OCA website for a day, those are Vespers paroemias — coming in a future update.")}
          {sub("How to give feedback")}
          {p("Your knowledge as a practicing reader is the best quality check this tool has.")}
          {ul([
            "A troparion or kontakion that doesn't match your printed Menaion or what your parish chants",
            "An incorrect service rank",
            "Something out of order, missing, or misattributed in the Hour sequence",
            "A date where the OCA calendar disagrees with what the tool shows",
            "A seasonal transition that doesn't match your understanding of the rubrics",
          ])}
          {p("What helps most: the specific date and Hour, what the tool shows vs. what you expected, and which source you're comparing against.", { fontStyle: "italic", color: "#5C4A1E" })}
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
  const [selectedServiceKey, setSelectedServiceKey] = useState("1st_hour");
  // tbOpen: tracks whether the Typical Beginning is expanded on 1st/6th Hours.
  // When expanded, the Hour body shows O come let us worship (not Christ is risen)
  // because Christ is risen was already said within the Typical Beginning.
  const [tbOpen, setTbOpen] = useState(false);

  const date = new Date(selectedDate + "T12:00:00");
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
  React.useEffect(() => { setTbOpen(false); }, [selectedServiceKey, selectedDate]);

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedServiceKey]);
  const menaionEntry = services.length > 0
    ? services[Math.min(selectedServiceIndex, services.length - 1)]
    : null;

  const inScope = ["ordinary", "sunday", "pentecostarion", "brightweek"].includes(liturgicalData.season);
  const isSunday = liturgicalData.season === "sunday";
  const isPentecostarion = liturgicalData.season === "pentecostarion";
  const isBrightWeek = liturgicalData.season === "brightweek";
  const pentEntry = (isPentecostarion || isBrightWeek)
    ? getPentecostarionEntry(liturgicalData.paschaOffset)
    : null;

  // Current service metadata from registry
  const currentServiceIdx = SERVICE_REGISTRY.findIndex(s => s.key === selectedServiceKey);
  const currentService = SERVICE_REGISTRY[currentServiceIdx];
  const prevService = currentServiceIdx > 0 ? SERVICE_REGISTRY[currentServiceIdx - 1] : null;
  const nextService = currentServiceIdx < SERVICE_REGISTRY.length - 1 ? SERVICE_REGISTRY[currentServiceIdx + 1] : null;

  // Assemble elements for the current service
  // Assemble elements — single unified assembler for all seasons
  const elements = (() => {
    if (!inScope) return [];
    return assembleHour(currentService.key, liturgicalData, menaionEntry, pentEntry, tbOpen);
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
            Orthodox Church in America · Russian Usage
          </div>
          <h1 style={{ fontSize: "1.6rem", fontWeight: "normal", margin: "0 0 0.25rem", letterSpacing: "0.02em", lineHeight: "1.2" }}>
            Daily Hours
          </h1>
          <div style={{ fontSize: "0.85rem", color: "#C4A84A", fontStyle: "italic" }}>
            Assembly guided by Fekula &amp; Williams,{" "}
            <em>The Order of Divine Services</em> (2009)
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
              <option key={svc.key} value={svc.key}>
                {svc.label}{!svc.built ? " (coming soon)" : ""}
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
            <button
              onClick={() => setShowGlossary((v) => !v)}
              style={{ marginLeft: "auto", background: "transparent", border: "1px solid #8B6914", color: "#8B6914", borderRadius: "3px", padding: "4px 12px", fontSize: "0.75rem", letterSpacing: "0.08em", cursor: "pointer", fontFamily: "Georgia, serif" }}
            >
              {showGlossary ? "Hide" : "Show"} Glossary
            </button>
          </div>{/* end row two */}
        </div>
      </div>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "1.5rem 2rem" }}>

        {/* ── GLOSSARY ────────────────────────────────────── */}
        {showGlossary && <GlossaryPanel glossary={GLOSSARY} />}

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
        <div style={{ background: "#EDE5D0", border: "1px solid #D4C49A", borderRadius: "6px", padding: "1rem 1.2rem", marginBottom: "1.5rem", fontSize: "0.85rem", lineHeight: "1.7" }}>
          <div style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8B6914", marginBottom: "0.5rem" }}>
            Liturgical Context
          </div>
          <div><strong>Date:</strong> {dayLabel}</div>
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
          <div><strong>Season:</strong> {liturgicalData.seasonNote}</div>
          {dailyReading && (
            <div style={{ marginTop: "0.4rem" }}>
              <strong>{namedDayIsSunday ? "Sunday proper:" : "Readings:"}</strong>{" "}
              <span style={{ color: "#5C4A1E" }}>
                Epistle: <em>{dailyReading.e}</em>
                {" · "}
                Gospel: <em>{dailyReading.g}</em>
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
                {feastReading.e && <><em>Epistle:</em> {feastReading.e}</>}
                {feastReading.e && feastReading.g && " · "}
                {feastReading.g && <><em>Gospel:</em> {feastReading.g}</>}
              </span>
              <span style={{ fontSize: "0.72rem", color: "#8B7040", marginLeft: "0.4rem" }}>
                (proper for this commemoration)
              </span>
            </div>
          )}

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
                <span>{menaionEntry.saint} —{" "}
                  <Tooltip term="service rank">{(RANK_EXPLANATIONS[menaionEntry.rank] || RANK_EXPLANATIONS.simple).label} service</Tooltip>
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
                const isAbsent = menaionEntry.note.toLowerCase().includes("not listed") || menaionEntry.note.toLowerCase().includes("not on the oca");
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
        </div>

        {/* ── OUT OF SCOPE WARNING ─────────────────────────── */}
        {!inScope && (
          <div style={{ background: "rgba(180,60,30,0.07)", border: "1px solid rgba(180,60,30,0.25)", borderRadius: "6px", padding: "1.2rem 1.5rem", marginBottom: "1.5rem" }}>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B43C1E", marginBottom: "0.4rem" }}>
              {liturgicalData.isFeastPeriod
                ? <Tooltip term={liturgicalData.season === "apodosis" ? "apodosis" : liturgicalData.season === "forefeast" ? "forefeast" : liturgicalData.season === "afterfeast" ? "afterfeast" : "great feast"}>Feast Period</Tooltip>
                : "Outside Ordinary Season"}
            </div>
            <div style={{ fontSize: "0.9rem", lineHeight: "1.6", fontWeight: "500" }}>{liturgicalData.seasonNote}</div>
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
            {/* Service title */}
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8B6914", marginBottom: "0.3rem" }}>Service</div>
              <h2 id="service-heading" style={{ fontSize: "1.4rem", fontWeight: "normal", margin: "0", letterSpacing: "0.02em", borderBottom: "1px solid #D4C49A", paddingBottom: "0.6rem" }}>
                {currentService.label}
              </h2>

              {currentService.built ? (
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
              ) : (
                <div style={{ fontSize: "0.78rem", color: "#9A8A70", marginTop: "0.4rem", fontStyle: "italic" }}>
                  Assembly in development
                </div>
              )}
            </div>

            {/* Legend (only when service is built) */}
            {currentService.built && (
              <div style={{ display: "flex", gap: "1.2rem", marginBottom: "1.5rem", fontSize: "0.75rem", flexWrap: "wrap" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "12px", height: "12px", borderRadius: "2px", background: "#9A8A70", display: "inline-block" }} />
                  Fixed text (Horologion)
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "12px", height: "12px", borderRadius: "2px", background: "#8B6914", display: "inline-block" }} />
                  Movable text (variable by date)
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "12px", height: "12px", borderRadius: "2px", background: "#B43C1E", display: "inline-block" }} />
                  Unresolved (Phase 2)
                </span>
              </div>
            )}

            {/* Service elements or placeholder */}
            {currentService.built ? (
              <div>
                {(currentService.key === "1st_hour" || currentService.key === "6th_hour") && (
                  <TypicalBeginning hourKey={currentService.key} liturgicalData={liturgicalData} tbOpen={tbOpen} setTbOpen={setTbOpen} />
                )}
                {elements.map((el) => <ServiceBlock key={el.id} element={el} />)}
              </div>
            ) : (
              <div style={{ background: "rgba(139,105,20,0.06)", border: "1px solid #D4C49A", borderRadius: "6px", padding: "2rem", textAlign: "center" }}>
                <div style={{ fontSize: "1.1rem", color: "#8B6914", marginBottom: "0.6rem" }}>☩</div>
                <div style={{ fontSize: "0.95rem", color: "#5C4A1E", marginBottom: "0.4rem" }}>
                  {currentService.label} — in development
                </div>
                <div style={{ fontSize: "0.8rem", color: "#9A8A70", fontStyle: "italic" }}>
                  The fixed skeleton and variable texts for this Hour are being assembled.
                  The Ninth Hour is complete and available now.
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
                Second Edition (1994). Psalm texts are from{" "}
                <em>The Psalter According to the Seventy</em> (LXX),
                Holy Transfiguration Monastery, Brookline, MA.
              </div>

              <div style={{ marginBottom: "0.4rem" }}>
                Troparia and kontakia sourced from the Orthodox Church in America
                (oca.org) and St. Sergius Parish liturgical library (st-sergius.org).
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
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 2rem 2rem",
                    textAlign: "center", marginTop: "1.5rem" }}>
        <button
          onClick={() => setShowHowItWorks(v => !v)}
          style={{ background: "transparent", border: "1px solid #8B6914",
                   color: "#8B6914", borderRadius: "3px", padding: "5px 14px",
                   fontSize: "0.78rem", letterSpacing: "0.08em", cursor: "pointer",
                   fontFamily: "Georgia, serif" }}
        >
          {showHowItWorks ? "Hide How It Works" : "How This Tool Works"}
        </button>

        {showHowItWorks && (
          <HowItWorksPanel />
        )}
      </div>
      {/* ── END HOW IT WORKS ─────────────────────────────────────── */}
      </div>
    </div>
  );
}
