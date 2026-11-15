// HAND-KEPT. The date-specific orders of Fekula & Williams, The Order of Divine
// Services, 3rd ed. (2009), vol. III: Services of the Menaion.
//
// RULED (Bill, 14 Nov 2026): where vol. III prints an order for a date, it
// OVERRIDES the general rule (ODS 2nd ed. ch. 1 and 2), so the tool stays in step
// with Fekula. The general rule still serves every date vol. III does not cover.
//
// STANDING RULE: no text of the book is stored in this repo. An order is recorded
// as STRUCTURE only (who, how many, in what sequence), in this tool's own
// vocabulary, with the entry id and the printed page it stands on. The book itself
// is on Bill's machine (Fekula_ODS_SOM_V3/intake; see project_notes.md).
//
// An order belongs to ONE printed Menaion service (`service`: its V2 path) on one
// kind of day (`day`: 'sunday' | 'weekday' = Monday through Saturday). Only dates
// Menaion V2 holds are entered; an entry is added when its date is encoded
// (encoding_rule_v2.md). tools/test_ods_v3_orders.mjs checks every order binds to
// the page and reports where it changes what the general rule gives.
//
// VOCABULARY
//   Hours     troparia: who, in the order read. kontakion: who.
//             'sunday' = of the resurrection, tone of the week (Octoechos)
//             'feast'  = of the feast, as this day's page prints it
//             'saint'  = of the day's saint or saints (the first the page prints)
//             'saint:Name' = the hymn the page tags for that saint
//   Liturgy   beatitudes: parts in order. ['resurrection', n] from the Octoechos;
//             ['octoechos', n]; ['menaion', from, to] = the page's printed Beatitude
//             troparia from..to (a troparion marked "Twice" counted twice).
//             entrance: the slot words of src/lib/liturgy-entrance.js, either one
//             list or one per temple { lord, theotokos, saint }. A saint slot holds
//             every hymn the page prints for the saints (the last kontakion of
//             several takes the Glory).
//             prokeimenon / alleluia / communion: whose, in order: 'day' (the
//             Sunday's or the weekday's), 'feast', 'saint'.
//             epistle / gospel: likewise; `saturday` gives the Saturday order where
//             the book prints one.
const HOURS = ['1st_hour', '3rd_hour', '6th_hour', '9th_hour'];
const each = (v) => Object.fromEntries(HOURS.map((h) => [h, v]));
const pairs = (a, b) => ({ '1st_hour': a, '3rd_hour': b, '6th_hour': a, '9th_hour': b });
const byHour = (a, b, c, d) => ({ '1st_hour': a, '3rd_hour': b, '6th_hour': c, '9th_hour': d });

export const ODS3_ORDERS = {
  // 5 September, Prophet Zacharias and Righteous Elizabeth (the polyeleos service, 09-05A.pdf)
  'ods3-0905-sun': {
    service: '09-05.c1', day: 'sunday', pages: [11, 13], rank: 'polyeleos',
    hours: { page: 13, troparia: each(['sunday', 'saint']),
      kontakion: byHour('saint:Zacharias', 'sunday', 'saint:Elizabeth', 'sunday') },
    liturgy: { page: 13,
      beatitudes: [['resurrection', 4], ['menaion', 0, 4], ['menaion', 4, 8]],
      entrance: {
        lord: ['sunday_troparion', 'saint_troparion', 'G:saint_kontakion', 'N:sunday_kontakion'],
        theotokos: ['sunday_troparion', 'temple_troparion', 'saint_troparion', 'sunday_kontakion', 'G:saint_kontakion', 'N:temple_kontakion'],
        saint: ['sunday_troparion', 'temple_troparion', 'saint_troparion', 'sunday_kontakion', 'temple_kontakion', 'G:saint_kontakion', 'N:steadfast_protectress'] },
      prokeimenon: ['day', 'saint'], alleluia: ['day', 'saint'], communion: ['day', 'saint'],
      epistle: ['day', 'saint'], gospel: ['day', 'saint'] },
  },
  'ods3-0905-wkd': {
    service: '09-05.c1', day: 'weekday', pages: [14, 16], rank: 'polyeleos',
    hours: { page: 16, troparia: each(['saint']), kontakion: pairs('saint:Zacharias', 'saint:Elizabeth') },
    liturgy: { page: 16,
      beatitudes: [['menaion', 0, 4], ['menaion', 4, 8]],
      entrance: {
        lord: ['temple_troparion', 'saint_troparion', 'G:saint_kontakion', 'N:temple_kontakion'],
        theotokos: ['temple_troparion', 'saint_troparion', 'G:saint_kontakion', 'N:temple_kontakion'],
        saint: ['temple_troparion', 'saint_troparion', 'temple_kontakion', 'G:saint_kontakion', 'N:steadfast_protectress'] },
      prokeimenon: ['saint'], alleluia: ['saint'], communion: ['saint'],
      epistle: ['day', 'saint'], gospel: ['day', 'saint'],
      saturday: { epistle: ['saint', 'day'], gospel: ['saint', 'day'] } },
  },

  // 25 November, Apodosis of the Entry; Hieromartyrs Clement of Rome and Peter of Alexandria.
  // (Vol. III also prints a Sunday order with St. Clement of Ochrid, pp. 52-55; the
  // St. Sergius Menaion holds no such service, so it is not entered.)
  'ods3-1125-sun-clement-rome': {
    service: '11-25.c0', day: 'sunday', pages: [50, 52], rank: 'doxology',
    hours: { page: 52, troparia: each(['sunday', 'feast']), kontakion: pairs('feast', 'sunday') },
    liturgy: { page: 52,
      // 2 from Ode IX of Canon I and 2 from Ode IX of Canon II: the page prints four of each.
      beatitudes: [['resurrection', 6], ['menaion', 0, 2], ['menaion', 4, 6]],
      entrance: ['sunday_troparion', 'feast_troparion', 'saint_troparion', 'sunday_kontakion', 'G:saint_kontakion', 'N:feast_kontakion'],
      prokeimenon: ['day', 'feast'], alleluia: ['day', 'feast'], communion: ['day', 'feast'],
      epistle: ['day', 'feast'], gospel: ['day', 'feast'] },
  },
  'ods3-1125-wkd': {
    service: '11-25.c0', day: 'weekday', pages: [56, 58], rank: 'doxology',
    hours: { page: 58, troparia: each(['feast', 'saint']), kontakion: each('feast') },
    liturgy: { page: 58,
      beatitudes: [['menaion', 0, 4], ['menaion', 4, 8]],
      entrance: ['feast_troparion', 'saint_troparion', 'G:saint_kontakion', 'N:feast_kontakion'],
      prokeimenon: ['feast', 'saint'], alleluia: ['feast', 'saint'], communion: ['feast', 'saint'],
      epistle: ['day', 'feast', 'saint'], gospel: ['day', 'feast', 'saint'] },
  },
};

// The order for one Menaion V2 service on one day, or null. `dow`: 0 = Sunday.
export function ods3OrderFor(servicePath, dow) {
  const day = dow === 0 ? 'sunday' : 'weekday';
  for (const [id, o] of Object.entries(ODS3_ORDERS)) if (o.service === servicePath && o.day === day) return { id, ...o };
  return null;
}

// "ODS vol. III, p. 58 (ods3-1125-wkd)": how an order is cited wherever it is applied.
export const ods3Cite = (order, part) => `ODS 3rd ed. vol. III, p. ${order[part]?.page ?? order.pages[0]} (${order.id})`;
