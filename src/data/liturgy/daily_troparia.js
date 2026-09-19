// src/data/liturgy/daily_troparia.js
// ─────────────────────────────────────────────────────────────────────────────
// The troparia of the day of the week — the "Troparion of the day of the
// week" slot in Fekula ch.2 §2A (p.38–39): Monday the Bodiless Hosts, Tuesday
// the Forerunner, Wednesday and Friday the Cross, Thursday the Holy Apostles
// and St Nicholas (two), Saturday All Saints (with the Departed).
//
// Source: HTM, "The Daily Troparia, Kontakia and Prokeimena" —
// Drive: orthodox_liturgics/Daily/HTM/HTM_daily_troparia_kontakia_alleluia_prokeimena.txt
// (the same file TYPICA_KONTAKIA in hours-tool.jsx was taken from). Text
// verbatim, including HTM's `*` phrase marks (encoding_rule_v2.md §3: the
// St. Sergius/HTM dialect is retained and normalised at render).
//
// Keyed by JavaScript day-of-week (1 = Monday … 6 = Saturday). Sunday has no
// entry: the resurrectional troparion of the tone stands there.
// ─────────────────────────────────────────────────────────────────────────────

export const DAILY_TROPARIA = {
  1: [
    { label: "Troparion of the Bodiless Hosts", commemoration: "the Bodiless Hosts", tone: 4,
      text: "Supreme Commanders of the heavenly hosts, * we unworthy ones implore you * that by your supplications ye will encircle us with the shelter of the wings of your immaterial glory, * and guard us who fall down before you and fervently cry: * Deliver us from dangers since ye are the Marshalls of the Hosts on high." },
  ],
  2: [
    { label: "Troparion of St. John the Forerunner", commemoration: "St. John the Forerunner", tone: 2,
      text: "The memory of the righteous is celebrated with hymns of praise, * but the Lord's testimony is sufficient for thee, O Forerunner; * for thou hast proved to be truly even more venerable than the prophets, * since thou wast granted to baptize in the running waters Him Whom they proclaimed. * Wherefore, having contested for the truth, thou didst rejoice to announce the good tidings even to those in hades: that God hath appeared in the flesh, * taking away the sin of the world and granting us great mercy." },
  ],
  3: [
    { label: "Troparion of the Cross", commemoration: "the Cross", tone: 1,
      text: "Save, O Lord, Thy people, * and bless Thine inheritance; * grant Thou unto Orthodox Christians victory over enemies; * and by the power of Thy Cross do Thou preserve Thy commonwealth." },
  ],
  4: [
    { label: "Troparion of the Holy Apostles", commemoration: "the Holy Apostles", tone: 3,
      text: "O holy Apostles, * intercede with the merciful God, * that He grant unto our souls * forgiveness of offences." },
    { label: "Troparion of St. Nicholas", commemoration: "St. Nicholas", tone: 4,
      text: "The truth of things revealed thee to thy flock as a rule of faith, * an icon of meekness and a teacher of temperance; * therefore thou hast achieved the heights by humility, * riches by poverty. * O Father and Hierarch Nicholas, * intercede with Christ God * that our souls be saved." },
  ],
  5: [
    { label: "Troparion of the Cross", commemoration: "the Cross", tone: 1,
      text: "Save, O Lord, Thy people, * and bless Thine inheritance; * grant Thou unto Orthodox Christians victory over enemies; * and by the power of Thy Cross do Thou preserve Thy commonwealth." },
  ],
  6: [
    { label: "Troparion of All Saints", commemoration: "All Saints and the Departed", tone: 2,
      text: "O Apostles, Martyrs, and Prophets, * Hierarchs, Monastics, and Righteous Ones; * ye that have accomplished a good labour and kept the Faith, * that have boldness before the Saviour; * O Good Ones, intercede for us, we pray, that our souls be saved." },
  ],
};

export const DAILY_TROPARIA_SOURCE = "HTM · The Daily Troparia, Kontakia and Prokeimena";
