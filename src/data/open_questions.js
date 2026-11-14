// src/data/open_questions.js — THE OPEN-QUESTION REGISTER, for every book.
//
// Established 14 Nov 2026 (Bill). One register for the whole tool: a question
// may come from the daily Menaion, the General Menaion, the Octoechos, the
// Pentecostarion, the Lenten Triodion (not yet built), or any other liturgical
// source. Each row names its SOURCE work and its SUBJECT, and the Open
// Questions page (/questions) groups by either.
//
// Capture never waits on a question: what the page prints is stored verbatim,
// and a field that needs liturgical JUDGMENT takes its best-supported value and
// a row here. The register is how the books can be encoded by a layman and
// reviewed by people who know more.
//
// THE LADDER, in order, before a row is written:
//   1. fekula  — the chapter text, and ODS vol. III for the date where it has one
//   2. oca     — oca.org (second in the project's source authority)
//   3. web     — any other source, NAMED. A web answer is evidence, never a
//                ruling: it does not acquire Fekula's authority by being found.
//   4. the row — what the page prints, what each rung said, the value stored
//                meanwhile, and what changes in an assembled service if the
//                answer goes the other way.
//
// status: 'open'              nothing above settles it
//         'provisional_web'   Fekula and OCA are silent; a named web source
//                             supports the stored value
//         'answered'          settled; `resolution` says by what. Rows are
//                             never deleted.
//
// ROW FIELDS
//   id        Q-NNNN, one sequence across all books
//   source    key of SOURCES     subject   key of SUBJECTS
//   title     a few words; it becomes the e-mail subject line
//   path      where the stored value lives, in the source book's own path
//             grammar. The Menaion gate resolves Menaion paths; a row for a
//             book with no gate yet carries `locus` (plain words) instead.
//   responses [{ date, role, summary, source }] — answers received. The
//             respondent is recorded by ROLE ("OCA priest"), never by name or
//             address, unless they have agreed to be named.
//
// The gate (validate_menaion_v2.mjs) checks every row: vocabulary, a unique id,
// a path or locus, and each rung saying what was actually done there, including
// a plain "not searched, because ...". An empty rung is a hard-fail; an honest
// gap is not.

// Where answers are sent. EMPTY until Bill supplies the address: the page then
// shows the questions and says plainly that no address is set, and offers no
// button. Set it here and nowhere else.
export const CONTACT_EMAIL = '';

// The works a question can come from. Add a line to add a work; `href` builds
// the link from a row to the place in that work's viewer, where there is one.
export const SOURCES = {
  menaion:         { label: 'Menaion (daily services)',
                     href: q => { const m = /^(\d{2}-\d{2})\./.exec(q.path ?? ''); return m ? `/orthodox-hours/menaion-v2?comm=${m[1]}#${encodeURIComponent(q.path)}` : null; } },
  general_menaion: { label: 'General Menaion',
                     href: q => q.path ? `/orthodox-hours/menaion-v2#${encodeURIComponent(q.path)}` : null },
  octoechos:       { label: 'Octoechos',
                     href: q => q.path ? `/orthodox-hours/octoechos-v2#${encodeURIComponent(q.path)}` : '/orthodox-hours/octoechos-v2' },
  pentecostarion:  { label: 'Pentecostarion', href: () => '/orthodox-hours/pentecostarion' },
  triodion:        { label: 'Lenten Triodion', href: () => null },
  horologion:      { label: 'Horologion (the Hours)', href: () => null },
  psalter:         { label: 'Psalter', href: () => '/orthodox-hours/psalter' },
  liturgy:         { label: 'Divine Liturgy', href: () => null },
  typikon:         { label: 'Order of services (Fekula, Typikon)', href: () => null },
  other:           { label: 'Other sources', href: () => null },
};

export const SUBJECTS = {
  rank:            'Rank of a service',
  combination:     'Two commemorations on one day',
  hymn_selection:  'Which hymn is taken',
  rubric:          'A rubric or heading',
  printed_text:    'Printed text that may be an error',
  readings:        'Scripture readings',
  calendar:        'Calendar and dates',
  pointing:        'Chant pointing and tones',
  source_gap:      'A source we could not consult',
  other:           'Other',
};

// The e-mail link for one question. Plain mailto, no script. The body is kept
// short on purpose: iOS Mail silently drops a long pre-filled body.
export function mailtoFor(q, email = CONTACT_EMAIL) {
  if (!email) return null;
  const subject = `Orthodox Hours ${q.id}: ${q.title}`;
  const body = `My answer to ${q.id}, and my source:`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const QUESTION_STATUS = ['open', 'provisional_web', 'answered'];

export default [
  {
    id: 'Q-0001', source: 'menaion', subject: 'rank',
    title: 'Apostle Philip: Polyeleos or Vigil?',
    path: '11-14.c0.rank', status: 'provisional_web', opened: '2026-11-14',
    question: 'Apostle Philip (14 November): is the service Polyeleos rank or Vigil rank?',
    printed: 'No Little Vespers. 8 stichera at Lord I have cried; Entrance and three lessons; a Litiya with its own stichera; at the blessing of the Loaves the troparion "(Twice)" and "Virgin Theotokos, rejoice" "(Once)"; Matins with Polyeleos and magnification; Great Doxology.',
    consulted: {
      fekula: 'ODS vol. III has no 11-14 entry. Ch. 2: the printed outline matches the Vigil service (2F, pp. 50-52) point for point: "eight or ten stichera", the Litya, "Troparion from the Menaion, twice, and O Theotokos Virgin rejoice, once", the Blessing of the Loaves. The Polyeleos service (2E) has "six or eight" stichera. Fekula does not name this date.',
      oca: 'oca.org lists the Holy, All-Praised Apostle Philip first on 14 November. The troparia page gives no rank symbol.',
      web: 'orthochristian.com calendar, 14 November (O.S.): "Совершается служба с полиелеем" (a service with Polyeleos) for the Apostle Philip. mci.archpitt.org Menaion, November 14, labels the day "Polyeleos".',
    },
    provisional: 'polyeleos, Fekula 2E: the encoding_rule_v2.md 1.1 waterfall (Vigil only where the Menaion prints a Little Vespers), supported by the two calendars above.',
    impact: 'If Vigil: Vespers and Matins are joined, the Litiya and blessing of the Loaves are served, and the troparion is sung twice with "Virgin Theotokos, rejoice" once, as the page prints. If Polyeleos without Vigil: the troparion once with its theotokion, and the Litiya only by local custom. The Hours are unaffected.',
  },
  {
    id: 'Q-0002', source: 'menaion', subject: 'combination',
    title: 'St. Gregory Palamas beside the Apostle Philip',
    path: '11-14.c1.rank', status: 'open', opened: '2026-11-14',
    question: 'St. Gregory Palamas (14 November, 11-14A.pdf): what rank, and how does this service stand beside the Apostle Philip on the same day?',
    printed: 'Headed AT GREAT VESPERS; no Little Vespers; 6 stichera; three lessons; blessing of the Loaves with the troparion "(Twice)"; then "But if a vigil is not served, then after the Troparion: Glory ..., Both now ..., Theotokion"; Matins with Polyeleos and magnification; Great Doxology.',
    consulted: {
      fekula: 'ODS vol. III has no 11-14 entry. Ch. 2 gives outlines for one Polyeleos or Vigil saint (2E, 2F); it has no outline for two such services on one weekday and does not name this date.',
      oca: 'oca.org lists St. Gregory Palamas third on 14 November, after the Apostle Philip and St. Philip of Irap, with his own troparion and kontakion (Tone 8).',
      web: 'ponomar.net (Lambertsen Menaion, November): the 14 November service to the Apostle Philip is headed "(for this day we provide also the service in honor of St. Gregory Palamas)", i.e. the Palamas service is supplied as an additional service, not combined with the Apostle\'s.',
    },
    provisional: 'polyeleos, Fekula 2E by the 1.1 waterfall; oca_primary false. Stored as the second commemoration of the date (c1), complete and uncombined.',
    impact: 'Decides whether a parish keeping St. Gregory on this day serves his service in place of the Apostle\'s or combines them, and which troparion and kontakion the Hours and Liturgy read. Until answered the assembler should read c0 (Apostle Philip) alone.',
  },
  {
    id: 'Q-0003', source: 'menaion', subject: 'rubric',
    title: 'Palamas Matins: "On the Aposticha" before the Great Doxology',
    path: '11-14.c1.matins.aposticha_rubric', status: 'open', opened: '2026-11-14',
    question: '11-14A Matins prints "On the Aposticha, 4 Stichera of the holy hierarch" and then "Great Doxology". Are these the Praises stichera under a wrong heading?',
    printed: '"On the Aposticha, 4 Stichera of the holy hierarch, in Tone I:" with three stichera, the first "(Twice)" (so four sung), Glory in Tone IV, Both now Theotokion; the next line is "Great Doxology, Troparion, Litanies, and the Dismissal. First Hour". No "On the Praises" heading is printed. 11-14 (Philip), the same rank, prints "On the Praises, 4 Stichera".',
    consulted: {
      fekula: 'Ch. 2, the Polyeleos and Vigil outlines (2E, 2F, 2G2) as read this session: the exapostilarion is followed by "The Praises" and the Great Doxology; no Matins aposticha is listed for these ranks.',
      oca: 'Not addressed: oca.org gives the troparion and kontakion for the day only.',
      web: 'Not separately searched. The Q-0001 search returned nothing bearing on this heading.',
    },
    provisional: 'Stored under the name the page prints (matins.aposticha_rubric, aposticha, aposticha_glory, aposticha_closer), per the R-9 source-nearest ruling. Not renamed to praises.',
    impact: 'An assembler building this Matins must take these four stichera at the Praises. If the answer is yes, the adapter maps them there and a sic row records the heading; the stored text does not change.',
  },
  {
    id: 'Q-0004', source: 'menaion', subject: 'source_gap',
    title: '15 November, first day of the Nativity Fast: Fekula p. 214',
    path: '11-15.c0.fekula_section', status: 'open', opened: '2026-11-14',
    question: '15 November, first day of the Nativity Fast: which Fekula outline governs, and what does his own section for this date say?',
    printed: 'A "Be it known" rubric before Vespers: on Saturday, 6 stichera of the martyrs and God is the Lord; on Sunday, 7 from the Oktoechos and 3 of the martyrs with God is the Lord; Monday through Friday, Alleluia "because of the beginning of the holy fast", with three stichera of the Theotokos before the three of the martyrs.',
    consulted: {
      fekula: 'The table of contents lists "The 15th Day of the Month of November", ch. 5, p. 214. The delivered fekula_chapter_5.txt holds four lines and does not contain it, so the section could NOT be read. Appendix A-II (the Lenten service during the lesser fasts) covers the Alleluia form in general.',
      oca: 'Not yet checked for 2026-11-15 (a Sunday this year).',
      web: 'Not searched: the governing source exists and is simply undelivered. This row is a source gap before it is a question.',
    },
    provisional: 'rank simple, Fekula 2A by the 1.1 waterfall (3 stichera, no Polyeleos, no Great Doxology). Every branch the page prints is captured.',
    impact: 'The stored texts do not change. The assembly does: which stichera and closers are taken depends on the weekday, and Fekula p. 214 is the authority for that selection. Needs the ch. 5 text (or the page read from the PDF) before the wire-in handles this date.',
  },
  {
    id: 'Q-0005', source: 'menaion', subject: 'hymn_selection',
    title: 'Apostle Philip: which of two troparia',
    path: '11-14.c0.troparion', status: 'open', opened: '2026-11-14',
    question: 'Apostle Philip: which troparion do the Hours and Liturgy read, the first printed or the "Or this Troparion"?',
    printed: 'Two troparia in Tone III at Vespers and again at Liturgy: first "O holy apostle Philip, entreat the Merciful God" (the general troparion of an apostle), then "Or this Troparion, in the same tone: The whole world is splendidly adorned; Ethiopia doth dance". Matins at God is the Lord prints only the first.',
    consulted: {
      fekula: 'Ch. 2 says only "the troparion from the Menaion"; it does not choose between two printed troparia.',
      oca: 'oca.org gives ONE troparion for the Apostle Philip, Tone 3: "The universe is well adorned and Ethiopia exults", which is the St. Sergius "Or this Troparion".',
      web: 'saintandrewgoc.org (Greek Orthodox parish page for 14 November) gives "O Holy Apostle Philip, intercede to our Merciful God", the first-printed text.',
    },
    provisional: 'The canonical `troparion` field holds the first-printed text (three print sites); the second is stored at both of its print sites as troparion_alternate.',
    impact: 'An OCA parish following oca.org sings the "Ethiopia" troparion. If OCA governs here, the adapter should hand the Hours the alternate; both texts are already stored, so only the selection changes.',
  },
];
