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

// Where answers are sent (Bill, 14 Nov 2026): a mailbox kept for this purpose and
// checked at the start of encoding sessions. Set here and nowhere else. If it is
// ever emptied, the page shows the questions and offers no e-mail button.
export const CONTACT_EMAIL = 'stevensaero.mail@gmail.com';

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
  oca_hymns:       { label: 'OCA service texts', href: () => null },
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

// The e-mail link for one question. Plain mailto, no script.
//
// Two bodies. The FULL body restates the question as a quoted line, the way a
// reply shows the message it answers, so the writer has it in front of them
// (Bill, 14 Nov 2026). The SHORT body, for iPhone and iPad, quotes as much of
// the question as fits: iOS Mail silently drops a long pre-filled body and opens
// a blank message past about 100 encoded characters. The subject carries the
// number and title in both.
// The iPhone/iPad body: as much of the quoted question as fits in IOS_BODY_LIMIT
// ENCODED characters (a space costs three), cut at a word and closed with "...",
// then a blank line to type under. Whole question if it fits.
export const IOS_BODY_LIMIT = 100;
export function shortBody(q) {
  const head = `> ${q.id}: `, tail = '\n\n';
  const fits = t => encodeURIComponent(head + t + tail).length <= IOS_BODY_LIMIT;
  if (fits(q.question)) return head + q.question + tail;
  let kept = '';
  for (const w of q.question.split(' ')) {
    const next = kept ? `${kept} ${w}` : w;
    if (!fits(next + '...')) break;
    kept = next;
  }
  return head + kept.replace(/[\s,;:(]+$/, '') + '...' + tail;
}

export function mailtoFor(q, email = CONTACT_EMAIL, { short = false } = {}) {
  if (!email) return null;
  const subject = `Orthodox Hours ${q.id}: ${q.title}`;
  const body = short ? shortBody(q) : `> ${q.id}: ${q.question}\n\nMy answer, and my source:\n\n`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// General feedback, not tied to a question (Bill, 14 Nov 2026): "I found a bug"
// and "I have a suggestion". Each is a plain mailto with a fixed subject prefix,
// so the mailbox can be searched by kind, and a body short enough for iOS Mail.
// At session start these are read ALONGSIDE the question answers and run
// against the open questions: a general remark often settles a specific one.
export const FEEDBACK = {
  bug:        { label: 'I found a bug',       subject: 'Orthodox Hours bug report',
                body: 'What I saw, and the date and service I was viewing:\n\n' },
  suggestion: { label: 'I have a suggestion', subject: 'Orthodox Hours suggestion',
                body: 'My suggestion, and any source for it:\n\n' },
};
// Sending decisions from the OCA match review page. The decisions themselves are
// far too long for a pre-filled body (iOS Mail silently truncates one past about
// 100 characters), so the body only says to paste them.
export function matchDecisionsMailto(email = CONTACT_EMAIL) {
  if (!email) return null;
  return `mailto:${email}?subject=${encodeURIComponent('OCA match decisions')}&body=${encodeURIComponent('Paste the copied decisions below this line.')}`;
}
export function feedbackMailto(kind, email = CONTACT_EMAIL) {
  const f = FEEDBACK[kind];
  if (!email || !f) return null;
  return `mailto:${email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(f.body)}`;
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
      oca: 'oca.org lists the Holy, All-Praised Apostle Philip first on 14 November. The troparia page gives no rank symbol. The OCA service text for 14 November 2026 (Department of Liturgical Music and Translations) gives Great Vespers with 8 stichera (two repeats each), the Dogmatikon, three readings from 1 Peter, and a Litya only "if the rector desires"; it marks nothing as a Vigil. The same form is given for the Apostle Matthew (16 Nov) and the Apostle Andrew (30 Nov). That is the shape of a Polyeleos service to which a Vigil may be added.',
      web: 'orthochristian.com calendar, 14 November (O.S.): "Совершается служба с полиелеем" (a service with Polyeleos) for the Apostle Philip. mci.archpitt.org Menaion, November 14, labels the day "Polyeleos".',
    },
    provisional: 'polyeleos, Fekula 2E: the encoding_rule_v2.md 1.1 waterfall (Vigil only where the Menaion prints a Little Vespers), supported by the two calendars above. The same holds for the Apostle Matthew (16 Nov) and the Apostle Andrew (30 Nov, changed from vigil to polyeleos on 14 Nov 2026).',
    impact: 'If Vigil: Vespers and Matins are joined, the Litiya and blessing of the Loaves are served, and the troparion is sung twice with "Virgin Theotokos, rejoice" once, as the page prints. If Polyeleos without Vigil: the troparion once with its theotokion, and the Litiya only by local custom. The Hours are unaffected.',
  },
  {
    id: 'Q-0002', source: 'menaion', subject: 'combination',
    title: 'Two separate services printed for one date',
    path: '11-14.c1.rank', status: 'open', opened: '2026-11-14',
    question: 'Where the Menaion prints a second, separate service for a date (14 Nov St. Gregory Palamas; 26 Nov St. Innocent of Irkutsk; 27 Nov the Kursk-Root Icon), which service does an OCA parish serve, what rank is the second service, and what becomes of the first saint?',
    printed: '14 Nov (11-14A, Palamas): AT GREAT VESPERS, 6 stichera, three lessons, blessing of the Loaves, "But if a vigil is not served", Polyeleos, Great Doxology; no Litiya. 26 Nov (11-26A, Innocent): the same with 8 stichera and a Litiya; the first file is Alypius the Stylite, a simple service. 27 Nov (11-27A, Kursk-Root Icon): Great Vespers, 8 stichera, Litiya, Polyeleos; no blessing of the Loaves rubric and no Great Doxology rubric; the first file is James the Persian, six stichera, with Palladius at Compline. Each second file is complete in itself and shares nothing with the first.',
    consulted: {
      fekula: 'A "Double Service" (2B, 2G1) is ONE service shared by two saints, not this. ODS 3rd ed. vol. III has no entry for 14, 26 or 27 November. Where it does meet two services on a date it treats them as distinct services to choose between: 16 August has separate entries by rank, the vigil ones headed "using the second service in the Menaion", with the lesser saint "transferred to Little Compline" (a phrase it uses 26 times). It also notes that the Litia is generally omitted when a vigil is not served unless the rector directs it, so a printed Litiya does not settle Vigil against Polyeleos.',
      oca: 'oca.org lists St. Gregory Palamas third on 14 November, after the Apostle Philip and St. Philip of Irap, with his own troparion and kontakion (Tone 8). Not yet checked for 26 and 27 November. The OCA service texts for 2026 serve ONE service on each two-file date they cover and do not mention the other: 14 November is the Apostle Philip alone (no St. Gregory Palamas); 4 October is Hieromartyr Hierotheus alone (no Paul the Simple); 8 September is the Nativity of the Theotokos alone (no Kursk-Root Icon). No OCA text was available for 5 September, 26 or 27 November.',
      web: 'ponomar.net (Lambertsen Menaion, November): the 14 November service to the Apostle Philip is headed "(for this day we provide also the service in honor of St. Gregory Palamas)", i.e. supplied as an additional service, not combined with the Apostle\'s.',
    },
    provisional: 'Each second file is stored whole as its own commemoration (c1), uncombined. The service shown by default is the one marked oca_primary (the first file, except 5 September where ODS vol. III and V1 take the second); the other is offered as a choice (ruled 14 Nov 2026). Ranks by the 1.1 waterfall (Vigil only where a Little Vespers is printed) and provisional: Palamas, Innocent and the Kursk-Root Icon are all polyeleos (2E).',
    impact: 'Decides which troparion and kontakion the Hours and Liturgy read on these dates. Until answered the assembler reads the first file (c0) alone, and offers the second as a service a parish may choose.',
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
      oca: 'oca.org gives ONE troparion for the Apostle Philip, Tone 3: "The universe is well adorned and Ethiopia exults", which is the St. Sergius "Or this Troparion". BUT the OCA service text for 14 November 2026 prints the OTHER one, at Great Vespers and at Liturgy: "Holy Apostle Philip, entreat the merciful God", the first-printed (general) troparion, and does not print the "Ethiopia" text at all. The two OCA sources disagree with each other.',
      web: 'saintandrewgoc.org (Greek Orthodox parish page for 14 November) gives "O Holy Apostle Philip, intercede to our Merciful God", the first-printed text.',
    },
    provisional: 'The canonical `troparion` field holds the first-printed text (three print sites); the second is stored at both of its print sites as troparion_alternate.',
    impact: 'An OCA parish following oca.org sings the "Ethiopia" troparion. If OCA governs here, the adapter should hand the Hours the alternate; both texts are already stored, so only the selection changes.',
  },
  {
    id: 'Q-0006', source: 'menaion', subject: 'rank',
    title: 'Great Martyr Catherine: Praises stichera and Aposticha both printed',
    path: '11-24.c0.matins.praises_rubric', status: 'open', opened: '2026-11-14',
    question: '24 November Matins prints 4 stichera on the Praises (with Glory and Both now) and then stichera on the Aposticha. What rank is the service of the Great Martyr Catherine, and which set is sung?',
    printed: 'At Vespers, 3 stichera of Catherine and 3 of Mercurius; no entrance, no lessons. At Matins no Polyeleos and no "Great Doxology" rubric. After the exapostilaria: "On the Praises, 4 Stichera, in Tone IV" (three printed, the first "(Twice)"), Glory by Babylas the Monk, Both now by Sergius of the Holy City; then "On the Aposticha, these Stichera of the feast, in Tone II" with verses and Glory, Both now.',
    consulted: {
      fekula: 'Ch. 2, 2G1 covers simple through doxology services in an afterfeast and does not rank individual dates. Ch. 4 (2A1/4A2, the Pentecostarion weekday outlines) describes the same printed shape: stichera at the Praises, the Doxology READ, then the Aposticha. ODS vol. III has no 11-24 entry.',
      oca: 'Not addressed: oca.org gives lives, troparia and kontakia for the day, no rank.',
      web: 'saintjonah.org rubrics for 24 November falling on a Sunday (ROCOR) appoint a Polyeleos and take 4 stichera of the martyr at the Praises before the Great Doxology, with Mercurius moved to Compline. The Metropolitan Cantor Institute menaion page for 11-24 (Byzantine Catholic) heads the day "Six stichera".',
    },
    provisional: 'Stored Simple, Fekula 2G1, and stored exactly as printed: Praises stichera, then Aposticha. Nothing depends on the rank yet.',
    impact: 'The 9th Hour reads the troparion of the feast and of the saint either way. Rank decides the kontakion at the Hours (2G1: feast only unless Doxology; then the saint at 3rd and 9th) and whether Matins ends with the Great Doxology.',
  },
  {
    id: 'Q-0007', source: 'oca_hymns', subject: 'pointing',
    title: 'OCA service texts: the "^" mark, and passages underlined whole',
    locus: 'OCA service texts, 23 August to 9 December 2026 (src/data/oca_hymns/docs); first seen 4 October, troparion of St. Hierotheus', status: 'open', opened: '2026-11-14',
    question: 'In the OCA service texts, what does the "^" printed before a stressed syllable tell the singer, and what does it mean when a whole passage is underlined instead of single syllables?',
    printed: 'The "^": 23 times in 45 documents (23 Aug to 9 Dec 2026), always inside a troparion, a kontakion or a dismissal theotokion. 21 are in Tone 1; 2 are the Tone 3 troparion of the Apostles of 22 Nov, printed twice ("entreat the ^[mer]ciful God//"). In 19 it stands directly before an underlined syllable, and that syllable is the only underline in its line ("Hierarch of ^[Ath]ens,"; "and poured forth streams of godly ^[doc]trine.//"; "having imitated the Forefathers, O ^[Ven]erable One:"). In the other 4, the Tone 1 troparia of Hieromartyr John of Chicago (31 Oct), the hymn is underlined end to end and the mark stands before a whole word ("the Martyr\'s ^crown!//"; "for Christ and ^neighbor,"). Other Tone 1 and Tone 3 troparia carry no such mark (the Tone 1 resurrectional troparion; the Tone 3 troparia of 27 Sep and 16 Nov). Whole-passage underline: most hymns of 1 Oct, 31 Oct and 14 Nov and several of 16 Nov, including the Litya; on 14 Nov every hymn of the Apostle Philip is underlined whole and none carries syllable pointing. A single line underlined inside an otherwise pointed hymn occurs in ten documents.',
    consulted: {
      fekula: 'Not addressed: the Order of Divine Services does not treat musical pointing.',
      oca: 'The documents carry no legend for either mark. Not yet searched on oca.org (Department of Liturgical Music and Translations).',
      web: 'Not yet searched.',
    },
    provisional: 'Both are captured exactly: "^" is stored in the text as printed and stripped wherever the text is shown or sung; a passage underlined end to end is flagged `underlined` and given no syllable brackets, so it is treated as unpointed (ruled 14 Nov 2026).',
    impact: 'If "^" marks a different melodic treatment of that accent, the Tone Trainer should read it instead of ignoring it. If whole-passage underline means "optional" or "not yet pointed", the tool should say so beside those hymns.',
  },
  {
    id: 'Q-0008', source: 'menaion', subject: 'other',
    title: 'Dismissal on 6 September: how is the miracle of the Archangel Michael named?',
    path: '09-06.c0.name', status: 'open', opened: '2026-11-14',
    question: 'On 6 September the day keeps the miracle of the Archangel Michael at Colossae (Chonae), with the Martyr Eudoxius and those with him. How does the priest name the day at the dismissal: the Archangel himself, the miracle, or both, and are the martyrs named with him?',
    printed: 'The Menaion title: "Commemoration of the miracle performed by the Archangel Michael at Colossae, which is also known as Chonae. Commemoration of the Martyr Eudoxius and those with him." The OCA text for 6 September 2026 is titled "Commemoration of the Miracle of the Archangel Michael at Colossae" and does not name the martyrs. Neither prints a dismissal.',
    consulted: {
      fekula: 'Not addressed. The Order of Divine Services says the priest "gives the dismissal" and, for the Presanctified, that he commemorates the saint of the day; it gives no wording for a day that keeps an event.',
      oca: 'The OCA service text for the day prints no dismissal. Not yet searched on oca.org.',
      web: 'Not yet searched.',
    },
    provisional: 'The tool says "and of the holy Archangel Michael and the holy Martyr Eudoxius and those with him, whose memory we celebrate". The name is hand-entered, so it is changed in one place.',
    impact: 'The wording of the dismissal at the Hours, Vespers, Typica and Liturgy on 6 September, and the name shown on the bulletin. The same question will come up for other days that keep an event (a translation of relics, a dedication, an icon).',
  },
  {
    id: 'Q-0009', source: 'menaion', subject: 'combination',
    title: 'Dismissal on 29 November: which saints are named?',
    path: '11-29.c0.name', status: 'open', opened: '2026-11-14',
    question: 'On 29 November the Menaion commemorates the Martyr Paramon and the Venerable Acacius; the OCA titles the day "Martyr Paramon and 370 Martyrs in Bithynia" and does not name Acacius. Whom does the priest name at the dismissal in an OCA parish?',
    printed: 'The Menaion title: "Commemoration of the holy Martyr Paramon, commemoration of the venerable Acacius, who is mentioned in The Ladder." The OCA text for 29 November 2026 (a Sunday): "Martyr Paramon and 370 Martyrs in Bithynia"; its troparion and kontakion are of the martyrs, in the plural. The Menaion page prints no troparion or kontakion of its own.',
    consulted: {
      fekula: 'Not addressed: no wording is given for the saint of the day at the dismissal. ODS vol. III has no entry for 29 November.',
      oca: 'The OCA service text names Paramon and the 370 martyrs and prints hymns for them; it prints no dismissal. Not yet searched on oca.org for the day\'s full list of saints.',
      web: 'Not yet searched.',
    },
    provisional: 'The tool follows the Menaion\'s two: "and of the holy Martyr Paramon and our venerable father Acacius, whose memory we celebrate". With Prefer OCA texts on, the troparion and kontakion shown are the OCA\'s, of the martyrs in the plural, so the hymns and the dismissal do not name the same company.',
    impact: 'The dismissal and the bulletin name on 29 November. More widely: when the OCA\'s title for a day differs from the Menaion\'s, which one the dismissal follows. The names are hand-entered per service, so the answer is applied date by date.',
  },
];
