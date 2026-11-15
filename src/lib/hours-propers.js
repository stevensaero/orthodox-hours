// Which troparia and kontakion an Hour reads. Plain module, no React, so the
// gate (tools/test_menaion_v2_hours.mjs) runs the same code the tool does.
//
// The Menaion's part comes ready-made from the V2 adapter (hoursPlan): this file
// only lays it beside the Octoechos (Sunday) and Pentecostarion sources.
//
//   plan         hoursPlan(...) for the day's service, or null (date not encoded)
//   weekdayPlan  the same service planned by the weekday rule; the Pentecostarion
//                branch reads the saint's own hymns from it
//   octo         { resTroparion(tone), sunKontakion(tone) }
import { stripCaret } from '../data/oca_hymns/index.js';

const shownNode = (slot) => (slot?.node ? { ...slot.node, text: stripCaret(slot.node.text) } : null);
const label = (slot, plan, tone, kind) => {
  if (!slot) return '';
  if (slot.role === 'sunday') return `Octoechos — Tone ${tone} (Sunday ${kind === 'k' ? 'kontakion' : 'resurrectional'})`;
  const of = slot.role === 'feast' ? 'of the feast' : plan.saintName;
  if (slot.source === 'general') return `General Menaion — ${slot.node.generalType} (${plan.saintName})`;
  return `${slot.source === 'oca' ? 'OCA' : 'Menaion'} — ${of}`;
};

export function resolveHoursPropers({ hourKey, plan, weekdayPlan, tone, isOrdinarySunday, isPentecostarion, pentEntry, namedDay, octo }) {
  const is3rdOr9th = hourKey === '3rd_hour' || hourKey === '9th_hour';
  const out = { primaryTrop: null, primaryTropSource: '', secondaryTrop: null, secondaryTropSource: '',
    kontakion: null, kontakionSource: '', rule: plan?.rule ?? null, section: plan ? `§${plan.cited}` : null,
    encoded: !!plan, notes: plan?.notes ?? [] };
  const fill = (slot, kind) => (slot?.role === 'sunday' ? (kind === 'k' ? octo.sunKontakion(tone) : octo.resTroparion(tone)) : shownNode(slot));

  // ── PENTECOSTARION — moved here unchanged from assembleHour (v0.52.2). NOT yet
  // reworked: its data (pentEntry) is still in the old shape. Only its two reads
  // of the Menaion now come from the weekday plan.
  if (isPentecostarion && pentEntry) {
    const wd = weekdayPlan?.hours[hourKey];
    const saintSlot = wd?.troparia.find((t) => t.role !== 'sunday' && t.node) ?? null;
    const menaionTrop = shownNode(saintSlot);
    const menaionSaint = weekdayPlan?.saintName ?? 'saint of the day';
    if (pentEntry.troparion) {
      out.primaryTrop = pentEntry.troparion;
      out.primaryTropSource = `Pentecostarion — ${pentEntry.name}`;
      if (pentEntry.menaion_set_aside && pentEntry.troparion_2) {
        // §4B13 / §4B17: 1st and 6th Hours Sunday + feast; 3rd and 9th Sunday + Fathers.
        out.secondaryTrop = is3rdOr9th ? pentEntry.troparion_2 : (pentEntry.troparion_3 || pentEntry.troparion_2);
        out.secondaryTropSource = `Pentecostarion — ${pentEntry.name}`;
      } else if (menaionTrop && !pentEntry.menaion_set_aside) {
        out.secondaryTrop = menaionTrop;
        out.secondaryTropSource = `Menaion — ${menaionSaint}`;
      }
    } else if (menaionTrop) {
      out.primaryTrop = menaionTrop; out.primaryTropSource = `Menaion — ${menaionSaint}`;
    }
    let pKont;
    if (pentEntry.menaion_set_aside && pentEntry.hours_kontakion && pentEntry.kontakion_ode6) {
      pKont = is3rdOr9th ? pentEntry.kontakion_ode6 : pentEntry.hours_kontakion;
    } else {
      pKont = pentEntry.hours_kontakion
        || (is3rdOr9th ? (pentEntry.kontakion_ode6 || pentEntry.kontakion_ode3)
                       : (pentEntry.kontakion_ode3 || pentEntry.kontakion_ode6));
    }
    const mKont = shownNode(weekdayPlan?.hours['3rd_hour'].kontakion);
    const isHighRank = ['doxology', 'polyeleos', 'vigil'].includes(weekdayPlan?.rank);
    const override = isHighRank && is3rdOr9th && mKont && !pentEntry.menaion_set_aside;
    out.kontakion = override ? mKont : pKont;
    out.kontakionSource = override ? `Menaion — ${menaionSaint} (Doxology+ rank)` : `Pentecostarion — ${pentEntry.name}`;
    out.rule = null; out.section = null;
    return out;
  }

  // ── ORDINARY TIME: the plan says what is read; this lays it in.
  if (!plan) {
    // Date not encoded in the Menaion. A Sunday still has its own hymns (§1A).
    if (isOrdinarySunday) {
      out.primaryTrop = octo.resTroparion(tone); out.primaryTropSource = label({ role: 'sunday' }, null, tone, 't');
      out.kontakion = octo.sunKontakion(tone); out.kontakionSource = label({ role: 'sunday' }, null, tone, 'k');
    }
  } else {
    const hr = plan.hours[hourKey];
    const [a, b] = hr.troparia;
    out.primaryTrop = fill(a, 't'); out.primaryTropSource = label(a, plan, tone, 't');
    if (b) { out.secondaryTrop = fill(b, 't'); out.secondaryTropSource = label(b, plan, tone, 't'); }
    out.kontakion = fill(hr.kontakion, 'k'); out.kontakionSource = label(hr.kontakion, plan, tone, 'k');
  }
  // Named Sundays (All Saints of North America and the like) carry their own
  // hymns, which take the Menaion's place beside the Sunday troparion.
  if (isOrdinarySunday && namedDay?.troparion) {
    out.secondaryTrop = namedDay.troparion; out.secondaryTropSource = namedDay.name;
  }
  if (isOrdinarySunday && namedDay?.kontakion_ode6) {
    out.kontakion = (!is3rdOr9th && namedDay.kontakion_ode3) ? namedDay.kontakion_ode3 : namedDay.kontakion_ode6;
    out.kontakionSource = namedDay.name;
  }
  return out;
}
