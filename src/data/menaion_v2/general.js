// src/data/menaion_v2/general.js — HAND-ENCODED from the printed pages.
//
// menaion_v2_spec.md §6.2. Encoded by TRANSCRIPTION against the printed page,
// not by classifier — the classifier route plateaued at 24 unclassified items
// across four files, and worse, a misclassification that lands text in a
// plausible-but-wrong slot would never appear in that count at all.
//
// SCOPE: COMPLETE — Vespers, Matins, Liturgy. This entry is the reference
// fixture the remaining 25 General Menaion files are checked AGAINST, rather
// than tuned toward.
//
// Placeholders stored VERBATIM as printed: lowercase `(name)`, unsubstituted.
// Substitution happens only in the daily entry that falls back here (§6.2).

const mk = (F) => [
  (text, locus, extra = {}) => ({ text, tier: 2, src: { file: F, locus }, ...extra }),
  (text, locus, extra = {}) => ({ text, tier: 1, src: { file: F, locus }, ...extra }),
];
const F = 'Monastic.pdf';
const [t2, t1] = mk(F);
const G = 'Monastics.pdf';
const [g2, g1] = mk(G);
const M1 = 'Martyr.pdf';
const [m2, m1] = mk(M1);
const P1 = 'Martyrs.pdf';
const [p2, p1] = mk(P1);
const U = 'Unmercenaries.pdf';
const [u2, u1] = mk(U);
const H = 'Heirarch.pdf';
const [h2, h1] = mk(H);
const HS = 'Heirarchs.pdf';
const [s2, s1] = mk(HS);
const AP = 'Apostle.pdf';
const [a2, a1] = mk(AP);
const BS = 'Apostles.pdf';
const [b2, b1] = mk(BS);
const AN = 'Angels.pdf';
const [an2, an1] = mk(AN);
const MM = 'MonasticMartyrs.pdf';
const [mm2, mm1] = mk(MM);
const MS = 'Martyress.pdf';
const [ms2, ms1] = mk(MS);
const MX = 'Martyresses.pdf';
const [mx2, mx1] = mk(MX);

const GENERAL = {
  Monastic: {
    title: t1('THE GENERAL VIGIL SERVICE TO A MONK MONASTIC.', 'p1 title'),

    // Printed identically at FOUR sites in this file — verified
    // character-for-character — so ONE stored field per §2.4 (R-1), "recycled
    // into each position".
    //
    // RECYCLED, NOT HOISTED. R-1 is a STORAGE rule. An earlier pass let it
    // become a LAYOUT rule and rendered the troparion as a header above the
    // services, which is an Octoechos shape (§4.1 tone-level propers) that the
    // Menaion does not have: here the troparion is printed in its place in the
    // service and nowhere else. Each service's `order` names it at the position
    // the book prints it, and the renderer resolves an order key against the
    // service first, then the entry.
    troparion: t2(
      'In thee, O father, the image of God was preserved, * for taking up thy cross, thou didst follow after Christ; * by activity thou didst learn to disdain the flesh, as something transient, * but to care for thy soul as something immortal. ** Wherefore, with the angels thy spirit doth rejoice, O venerable (name).',
      'p4 Troparion of the venerable one',
      { sourceLabel: 'Troparion of the venerable one, in Tone VIII', tone: 8,
        verified_sites: [
          { locus: 'p4 Vespers dismissal', tone: 8 }, { locus: 'p5 God is the Lord', tone: 8 },
          { locus: 'p13 after Our Father', tone: 8 }, { locus: 'p14 AT LITURGY', tone: 8 },
        ] }),

    // Printed at TWO services — p9 (after Ode VI) and p14 (AT LITURGY) — so it
    // is stored ONCE at entry level and recycled, exactly like the troparion
    // (R-1). An earlier pass left it on `matins`, which made the Liturgy's
    // `order` name a key that existed on neither the service nor the entry.
    kontakion: t2('Having divinely armed thyself with purity of soul * and unceasing prayer, * thou didst valiantly slay legions of demons * as with a mighty sword, * wherefore we beseech thee O Father (name), * ever intercede for those ** who honor thee.',
      'p9 Kontakion of the venerable one', { sourceLabel: 'Kontakion of the venerable one, in Tone II', spec_mel: 'Seeking the highest ...', tone: 2,
        verified_sites: [{ locus: 'p9 after Ode VI', tone: 2 }, { locus: 'p14 AT LITURGY', tone: 2 }] }),

    vespers: {
      order: [
        'lic_rubric', 'lic', 'lic_closer', 'lic_stavrotheotokion',
        'idiomelon_rubric', 'lic_glory',
        'dogmatikon_rubric', 'dogmatikon', 'dogmatikon_alternate', 'dogmatikon_stavrotheotokion',
        'entrance_rubric', 'readings',
        'aposticha_rubric', 'aposticha', 'aposticha_glory',
        'aposticha_closer_rubric', 'aposticha_closer', 'aposticha_alternate', 'aposticha_stavrotheotokion',
        'troparion_rubric', 'troparion', 'closer', 'closing_rubric',
      ],

      lic_rubric: t1('On “Lord, I have cried ...,” these Stichera, in Tone VIII:', 'p1 LIC rubric'),

      lic: [
        t2('A holy, precious, divine and luminous lamp * is not to be left hidden under the bushel of life, * rather, the Lover of mankind raiseth him to a high summit * through the gift of miracles; * by his intercessions O Christ, ** grant unto Thy people great mercy.',
           'p1 LIC 1', { spec_mel: 'The Martyrs of the Lord ...', label: 'plain', tone: 8 }),
        t2('O all-honored one, * taking in thy hands the divine plough * thou didst undertake a multitude of God-pleasing labors, * never turning back, thou didst press ever forward * into the Kingdom of Christ our God, ** Who became incarnate for the salvation of our souls.',
           'p1 LIC 2', { spec_mel: 'The Martyrs of the Lord ...', label: 'plain' }),
        t2('In thy body likened unto a buoyant boat * thou wast carried freely across the sea of life * by the gentle breezes of thy peaceful spirit. * Thou, O wise one, having found the pearl of great price, * went and sold all that thou didst have, and bought it. ** Fervently protecting it, thou didst find blessedness in its divine virtues.',
           'p1 LIC 3', { spec_mel: 'The Martyrs of the Lord ...', label: 'plain' }),
      ],

      lic_closer: t2('My thoughts are impure, * and my lips are false, * all my works are defiled. * What, then, shall I do? * How shall I meet the Judge? * O Virgin Sovereign Lady, * entreat the Lord, thy Son and Creator, * that He accept my soul in repentance, ** in that He alone is compassionate.',
        'p1 LIC Glory/Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion, in Tone VIII', tone: 8 }),

      lic_stavrotheotokion: t2('The unblemished ewe-lamb * upon beholding her lamb voluntarily nailed upon the tree, * lamented with maternal tenderness: * “Woe is me, O my most beloved child! * What is this that the ungrateful Jews have done to Thee, ** wishing to deprive me of Thee, O most beloved one.”',
        'p1 LIC Stavrotheotokion', { type: 'stavrotheotokion', sourceLabel: 'Stavrotheotokion', label_inline: true }),

      idiomelon_rubric: t1('If an Idiomelon be appointed. Glory ..., in Tone VI:', 'p1 Idiomelon rubric'),

      // TIER 1. The idiomelon is printed as solid prose with NO markers, between
      // fully-pointed stichera. Mixed tiers within one section are a source fact
      // (encoding_rule_v2.md §3.2) and must never be flattened for tidiness.
      lic_glory: t1('Having preserved that which is in the image of God, and set thy mind as master over the pernicious passions through fasting, thou didst ascend to that which is in the likeness of God, as far as thou wast able; for manfully compelling thy nature, thou didst strive to subdue that which is lower to that which is better, and to enslave the flesh to the spirit. Wherefore, thou wast shown to be the summit of monastics, a citizen of the desert, a trainer of those who run the good race, a most excellent rule of virtue. O venerable father (name), in purity thou now beholdest the Holy Trinity in the heavens, not by reflection as by a mirror, praying directly for those who honor thee with faith and love.',
        'p1 Glory idiomelon', { tone: 6 }),

      // Cross-book rubric (§10.4): points at the Octoechos dogmatikon. The text
      // is NOT fetched (R-5). Carries a recorded sic — a stray `)` before the
      // colon — stored verbatim.
      dogmatikon_rubric: t1('If the Celebration be with a Polyeleos, and not a Resurrection Service, sing the following Dogmatic of Tone VI (If the service is a Resurrection service sing the Dogmatic of the Tone for that service ):',
        'p1 Dogmatikon rubric'),

      dogmatikon: t2('Who doth not call thee blessed, O most holy Virgin? * Who will not hymn thy most pure birthgiving? * For the only-begotten Son Who hath shone forth timelessly from the Father, * came forth, ineffably incarnate, from thee, O pure one; * By nature he is God, by nature for our sakes, he hath become a man * not divided into two Hypostases, * but known in two natures without commingling. * Him do thou beseech, O pure and most blessed one, ** that our souls find mercy!',
        'p2 Both now Dogmatikon', { type: 'dogmatic_theotokion', sourceLabel: 'Both now ..., in Tone VI', tone: 6 }),

      dogmatikon_alternate: t2('O Theotokos, thou art the true vine * that hast budded forth for us the Fruit of life. * Thee do we entreat: * Pray thou, O Lady, with the holy apostles, ** that He have mercy upon our souls.',
        'p2 Otherwise Theotokion', { type: 'theotokion', sourceLabel: 'Otherwise, Theotokion', label_inline: true }),

      dogmatikon_stavrotheotokion: t2('Upon seeing Thee crucified, O Christ, * she who gaveth birth unto Thee cried aloud: * “What is this strange mystery that I see, * O my Son How is it that Thou diest?, * suspended upon the Tree, ** O Bestower of life?”',
        'p2 Stavrotheotokion', { type: 'stavrotheotokion', sourceLabel: 'Stavrotheotokion', label_inline: true }),

      entrance_rubric: t1('The Entrance. The Prokeimenon of the day. The Three Lessons, if appointed:', 'p2 Entrance'),

      // R-4 as ruled: citation DERIVED by corpus match and round-trip verified.
      // The source prints these three headings with NO verse reference — 26 such
      // headings across the 26 files. Reconstruction scores recorded.
      readings: [
        { heading: 'THE READING FROM THE WISDOM OF SOLOMON', src: { file: F, locus: 'p2 Lesson 1' },
          citation: { book: 'Wisdom of Solomon', chapter: 3, verses: '3:1-3:9' },
          citation_basis: 'derived', derived: { method: 'corpus-match', reconstruction: 0.92 } },
        { heading: 'A READING FROM THE WISDOM OF SOLOMON', src: { file: F, locus: 'p2 Lesson 2' },
          citation: { book: 'Wisdom of Solomon', chapter: 5, verses: '5:15-6:3' },
          citation_basis: 'derived', derived: { method: 'corpus-match', reconstruction: 0.93 } },
        { heading: 'A READING FROM THE WISDOM OF SOLOMON', src: { file: F, locus: 'p3 Lesson 3' },
          citation: { book: 'Wisdom of Solomon', chapter: 4, verses: '4:7-4:14' },
          citation_basis: 'derived', derived: { method: 'corpus-match', reconstruction: 0.89 } },
      ],

      aposticha_rubric: t1('On the Aposticha, these Stichera, in Tone I:', 'p3 Aposticha rubric'),

      aposticha: [
        t2('Thy feast, O God-bearer, * hath arrived brighter than the sun; * illumining those who in faith have recourse unto thee, * filling them with the sweet fragrance of immortality * and radiating effulgent healing upon their souls, ** O holy Father, fervent intercessor for our souls.',
           'p3 Aposticha 1', { spec_mel: 'Joy of the ranks of heaven ...', label: 'plain', tone: 1 }),
        t2('Precious in the sight of the Lord * is the death of His saints.',
           'p3 Aposticha verse 1', { label: 'refrain', sourceLabel: 'Verse', label_inline: true }),
        t2('Through the struggles of abstinence * thou didst obtain victory over the sensual passions of the body, * and exhibiting a zeal here on earth like that of the bodiless ones in heaven, * thou didst subdue the desires of the flesh * making them serve the needs of the spirit, * O wonder-worker, (name); * wherefore now, as a dweller in the heavenly habitations, ** do thou ever intercede on behalf of our souls.',
           'p3 Aposticha 2', { spec_mel: 'Joy of the ranks of heaven ...', label: 'plain' }),
        t2('Blessed is the man that feareth the Lord, * in His commandments shall he greatly delight.',
           'p3 Aposticha verse 2', { label: 'refrain', sourceLabel: 'Verse', label_inline: true }),
        t2('O blessed (name)! * laying within thyself the foundation of the virtues, * thou didst put off the old man with his hosts, * and truly put on Christ; * wherefore, O holy one, having put to shame the many armies of the enemy * thou hast been revealed to be a wise instructor of monks, ** ever intercede that our souls be saved.',
           'p3 Aposticha 3', { spec_mel: 'Joy of the ranks of heaven ...', label: 'plain' }),
      ],

      // Tier 2: pointed with '*' but NO penultimate '**' — which is why the
      // §3.2 "mark the penultimate line only if the source marks it" rule
      // matters. An earlier pass mis-tiered this as prose.
      aposticha_glory: t2('We honor thee as a teacher of monastics, * O (name) our Father, * for from thee we have truly learned to walk upon the straight and narrow path. * Blessed art thou who labored for Christ and laid to waste the might of the enemy; * O friend of the Angels and companion of the holy and just ones, * do thou, with them, ever intercede before the Lord that our souls be saved.',
        'p3 Aposticha Glory', { sourceLabel: 'Glory ..., in Tone VIII', tone: 8 }),

      aposticha_closer_rubric: t1('If the Celebration be with a Polyeleos, chant the Resurrection Theotokion:', 'p4 Aposticha Both-now rubric'),

      aposticha_closer: t2('O unwedded Virgin! * thou who ineffably conceived God in the flesh, * Mother of God Most High: * accept the supplications of thy servants, O all-immaculate one, * granting unto all cleansing of transgressions; * and, accepting now our supplications, ** pray thou that we all be saved.',
        'p4 Aposticha Both now', { type: 'theotokion', sourceLabel: 'Both now ..., in Tone VIII', tone: 8 }),

      aposticha_alternate: t2('O pure Virgin, portal of the Word, * Mother of our God: ** pray thou that we be saved.',
        'p4 Otherwise Theotokion', { type: 'theotokion', sourceLabel: 'Otherwise, Theotokion', label_inline: true }),

      aposticha_stavrotheotokion: t2('“I cannot bear O my child, to behold Thee, * Who dost grant life and health unto all, * hung upon the Tree; * for of old those who were lulled into the sleep of death * by the fruit of the transgression * have been awakened * and granted divine and salvific life and health by Thee”, * thus said the Virgin weeping, ** whom we magnify.',
        'p4 The Stavrotheotokion', { type: 'stavrotheotokion', sourceLabel: 'The Stavrotheotokion', label_inline: true }),

      troparion_rubric: t1('The Troparion from the Typicon, but if there be none, chant the following:', 'p4 Troparion rubric'),

      // The conditional closer the source declines to fix (§5.8): 80 instances
      // across 21 of the 26 files. Printed WITHOUT a text — the slot is marked
      // and left to the day.
      closer: { absent: true, reason: 'not_printed_in_source', basis: 'close_reading',
                note: 'Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8). Which is used is Fekula’s at assembly.' },

      closing_rubric: t1('The Dismissal:', 'p4 Dismissal'),
    },

    matins: {
      order: [
        'god_is_lord_rubric', 'troparion', 'troparion_closer',
        'sessional_1_rubric', 'sessional_1', 'sessional_1_closer',
        'sessional_2_rubric', 'sessional_2', 'sessional_2_closer',
        'megalynarion_rubric', 'megalynarion', 'megalynarion_verse',
        'sessional_polyeleos_rubric', 'sessional_polyeleos', 'sessional_polyeleos_closer',
        'anabathmoi_rubric', 'anabathmoi_intro', 'anabathmoi', 'anabathmoi_closer',
        'prokeimenon_rubric', 'prokeimenon', 'prokeimenon_verse',
        'gospel_rubric', 'gospel',
        'psalm50_rubric', 'psalm50_sticheron',
        'canon_rubric', 'canons',
        'kontakion_rubric', 'kontakion', 'ikos',
        'exapostilarion_rubric', 'exapostilarion', 'exapostilarion_closer',
        'praises_rubric', 'praises', 'praises_glory', 'praises_closer', 'praises_stavrotheotokion',
        'great_doxology_rubric', 'doxology_glory', 'doxology_closer_rubric',
        'troparion_rubric', 'troparion', 'closer', 'closing_rubric',
      ],

      god_is_lord_rubric: t1('On “God is the Lord ...,” the Troparion, in Tone VIII:', 'p5 God is the Lord'),
      troparion_closer: { absent: true, reason: 'not_printed_in_source', basis: 'close_reading',
        note: 'Printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” — the conditional closer, marked without text (§5.8).' },

      sessional_1_rubric: t1('After the 1st chanting of the Psalter, the Sessional Hymn, in Tone IV:', 'p5 Sessional 1 rubric'),
      sessional_1: t2('Heeding the call of thy Lord * thou, O all-blessed (name), didst follow Him, * forsaking the world and everything that is beautiful therein. * With fervor thou didst endure the hardships of the eremitic life * and manfully repelled the armies of the demons; ** wherefore in faith we ever praise thee, hymning thy sacred memory.',
        'p5 Sessional 1', { spec_mel: 'Go thou quickly before ...', tone: 4 , repeat: 2 }),
      sessional_1_closer: t2('By thy divine birthgiving, O pure one, * thou hast renewed the mortal nature of those born on earth, * which had become corrupt through the passions, * raising up all from death to a life of incorruption. * Wherefore, as is meet we all bless thee, ** O exceedingly glorious Virgin, as thou didst foretell.',
        'p5 Sessional 1 Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion, in Tone IV', tone: 4 }),

      sessional_2_rubric: t1('After the 2nd chanting of the Psalter, the Sessional Hymn: in Tone V:', 'p5 Sessional 2 rubric'),
      sessional_2: t2('Let us honor with hymns the ascetic of the Lord * as one who, through true abstinence and ever-enduring patience, * extinguished the assaults of the passions, * and put to shame the prideful adversary, ** and now maketh entreaty before the Lord, that our souls be saved.',
        'p5 Sessional 2', { spec_mel: 'The co-beginningless Word ...', tone: 5 , repeat: 2 }),
      sessional_2_closer: t2('An awesome miracle of conception * and an inexpressible birthgiving have been recognized in thee, O pure Ever-virgin, * by which my mind is filled with awe * and my thoughts amazed. * Thy glory, O Theotokos, hath reached into all things, ** unto the salvation of our souls.',
        'p5 Sessional 2 Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion, in Tone V', tone: 5 }),

      megalynarion_rubric: t1('After the Polyeleos, the Megalynarion:', 'p5 Megalynarion rubric'),
      megalynarion: t1('We bless thee, O Venerable Father (name), and we honor thy holy memory, instructor of monks, and converser with the angels.',
        'p5 Megalynarion', { label_inline: true }),
      megalynarion_verse: t1('With patience I waited patiently for the Lord, and He was attentive unto me, and He hearkened unto my supplication.',
        'p5 Megalynarion verse', { sourceLabel: 'Verse', label_inline: true }),

      sessional_polyeleos_rubric: t1('After the Polyeleos, the Sessional Hymn, in Tone I:', 'p5 Polyeleos sessional rubric'),
      sessional_polyeleos: t2('O sacred Father, by mortifying thy flesh, * thou hast subdued the uprisings of the passions, * and after thy repose, hast been deemed worthy of eternal life; * wherefore today the Church of Christ * doth celebrate thy wondrous memorial, ** O thou adornment of ascetics.',
        'p6 Polyeleos sessional', { spec_mel: 'Thy tomb, O Savior ...', tone: 1 , repeat: 2 }),
      sessional_polyeleos_closer: t2('Do thou guide to the path of repentance, * us who have ever wandered away into the trackless wastes of evil * and have angered the supremely good Lord, * O blessed Mary who knewest not wedlock, ** thou refuge of despairing men and dwelling-place of God.',
        'p6 Polyeleos sessional Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion, in Tone I', tone: 1 }),

      anabathmoi_rubric: t1('If of Polyeleos rank, and not a Resurrection Service, chant the following:', 'p6 Anabathmoi condition'),
      anabathmoi_intro: t1('The Song of Ascents: The first antiphon, in Tone IV:', 'p6 Anabathmoi rubric'),
      anabathmoi: [
        t2('From my youth * do many passions war against me; * but do Thou Thyself defend ** and save me, O my Savior.', 'p6 Anabathmoi 1', { tone: 4 }),
        t2('Ye haters of Zion * shall be shamed by the Lord; * for like grass, by the fire ** shall ye be withered.', 'p6 Anabathmoi 2'),
      ],
      anabathmoi_closer: t2('In the Holy Spirit, * every soul is quickened, * and, through cleansing, is exalted ** and made radiant by the Triple Unity in a hidden sacred manner.',
        'p6 Anabathmoi Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ...' }),

      prokeimenon_rubric: t1('Prokeimenon, in Tone IV:', 'p6 Prokeimenon rubric'),
      prokeimenon: t2('Precious in the sight of the Lord * is the death of His saints.',
        'p6 Prokeimenon', { sourceLabel: 'The Prokeimenon', label_inline: true, tone: 4 }),
      prokeimenon_verse: t1('What shall I render unto the Lord for all that he hath rendered unto me?',
        'p6 Prokeimenon verse', { sourceLabel: 'Verse', label_inline: true }),

      gospel_rubric: t1('Let every breath ...,', 'p6 Let every breath'),
      gospel: { heading: 'THE GOSPEL ACCORDING TO ST. MATTHEW (11, 27-30)', src: { file: F, locus: 'p6 Matins Gospel' },
        citation_verbatim: '(11, 27-30)', citation: { book: 'Matthew', chapter: 11, verses: '27-30' } },

      psalm50_rubric: t1('After the 50th Psalm:', 'p6 Psalm 50 rubric'),
      psalm50_sticheron: t2('Through the prayers of the venerable father (name), * O Merciful One, ** blot out the multitude of our transgressions.',
        'p6 Psalm 50 sticheron', { sourceLabel: 'Glory ..., in Tone VI', tone: 6 }),

      canon_rubric: t1('The Canon. In Tone VIII:', 'p7 Canon rubric'),
      canons: [{
        tone: 8,
        odes: {
          1: { irmos: t2('Having passed through the water as upon dry land, * and having escaped the malice of the Egyptians, * the Israelites cried aloud: * Unto our God and Redeemer let us sing.', 'p7 Ode I irmos', { sourceLabel: 'Irmos', label_inline: true }),
               refrain: t1('Venerable Father (name) pray to God for us', 'p7 Ode I refrain', { sourceLabel: 'Refrain', label_inline: true }),
               items: [
                 t1('From thy youth thou wast adorned with goodly moral qualities, cleaving unto Christ, and mortifying the passions of the flesh with abstinence and fasting, thou hast passed over unto life, O venerable one.', 'p7 Ode I 1', { label: 'plain' }),
                 t1('O most wise Father, being a doer of the divine sayings and laws, thou hast been blessed with divine gifts and miracles, wherefore all are richly illumined with thy splendor.', 'p7 Ode I 2', { label: 'plain' }),
                 t1('Strengthened by Christ, thou, O Father, subdued the might and power of the enemy, wherefore in honor of thy victory thou hast been rewarded with the gift of miracles, O venerable one.', 'p7 Ode I 3', { label: 'plain' }),
                 t1('Possessing a clear conscience, and directing the eye of thy heart towards God O most wise one, God, in answer to thy prayers, hath numbered thee among the just.', 'p7 Ode I 4', { label: 'plain' }),
                 t1('I implore thee, O most pure Virgin, subdue the passions of my flesh and quieten the beguiling thoughts of my mind, and do thou thyself set me upon the right path.', 'p7 Ode I Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
          3: { irmos: t2('O Lord, thou art the confirmation of those who flee to Thee, * Thou art the Light of those in darkness, * and my spirit doth hymn Thee.', 'p7 Ode III irmos', { sourceLabel: 'Irmos', label_inline: true }),
               items: [
                 t1('Altogether devoted to the Almighty, thou, O most wise venerable Father, didst escape all the wiles of the demons, and adorned with the loftiest humility, by thy most excellent works, thou didst overcome the proud boaster.', 'p8 Ode III 1', { label: 'plain' }),
                 t1('While still in the flesh thou, O most wise Father, shamed the stiff-neckedness of the wicked one by thy humble instructions.', 'p8 Ode III 2', { label: 'plain' }),
                 t1('Having the grace of God as thine effectual helper, thou, O most wise and wondrous father, wast granted the gift of miracles, driving away diseases.', 'p8 Ode III 3', { label: 'plain' }),
                 t1('In becoming incarnate, the Creator found an abode within thy womb, O all-immaculate one, unto the profit of those who with faith hymn thee.', 'p8 Ode III Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
          4: { irmos: t2('O Lord, I have heard the mystery of Thy dispensation; * I have considered Thy works, * and I have glorified Thy Divinity.', 'p8 Ode IV irmos', { sourceLabel: 'Irmos', label_inline: true }),
               items: [
                 t1('Making thy soul a temple of the Holy Spirit, thou didst become an heir of the Heavenly Kingdom, together with the hosts on high.', 'p8 Ode IV 1', { label: 'plain' }),
                 t1('Thou dost ever relieve the suffering of those who, afflicted with manifold infirmities, have recourse unto thee; for thou, O venerable one, hast obtained from the Lord the grace to work wonders and miracles.', 'p8 Ode IV 2', { label: 'plain' }),
                 t1('Thou, O Father, sprouted forth like a preeminent blossom in the temple of God, adorned with virtues and filled with the sweet fragrance of grace-filled fruit.', 'p8 Ode IV 3', { label: 'plain' }),
                 t1('Thou, O Ever-Virgin art a truly spiritual field, for from thy furrow thou didst bring forth the fruit that doth feed the whole of creation, the God of all.', 'p8 Ode IV Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
          5: { irmos: t2('Rising early we cry to Thee, O Lord; * save us, for Thou art our God, * and we know none other besides Thee.', 'p9 Ode V irmos', { sourceLabel: 'Irmos', label_inline: true }),
               items: [
                 t1('With thy mind purified, O most glorious one, thou didst behold the ineffable goodness of Christ, the God of all.', 'p9 Ode V 1', { label: 'plain' }),
                 t1('Like unto Elijah, thou, O Father, aided by the Holy Spirit, ascended into heaven on the chariot of thy virtues.', 'p9 Ode V 2', { label: 'plain' }),
                 t1('Having withered thy body with abstinence and attained bodily purity, thou, O Father, didst ascend unto the fullness of the loftiest abodes on high.', 'p9 Ode V 3', { label: 'plain' }),
                 t1('Heal the blindness of my polluted mind, O all-immaculate Lady for thou hast given birth unto Christ the great Physician.', 'p9 Ode V Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
          6: { irmos: t2('I will pour out my prayer unto the Lord, * and to Him will I proclaim my grief; * for my soul is filled with evils, * and my life unto Hades hath drawn nigh, * and like Jonah I pray unto Thee: * Raise me up from corruption, O',
                 'p9 Ode VI irmos', { sourceLabel: 'Irmos', label_inline: true,
                 provenance_note: 'SIC — the printed irmos breaks off mid-phrase at “Raise me up from corruption, O” with no closing. Verified against both a plain and a dedupe_chars extraction, so it is the page and not the extractor. Stored exactly as printed (§9.12); not completed from another book.' }),
               items: [
                 t1('By thy sacred prayers, O thou who art blessed by God, the cunning serpent hath been slain and the malice of those who demanded of thee a sign hath been destroyed, for thou, as a favorite of God, art effulgent with the light of the Godhead in thine unshakable faith.', 'p9 Ode VI 1', { label: 'plain' }),
                 t1('Assiduously plowing the fields of thy soul, and most wisely sowing the multi-fruitful seeds of virtues, thou, O sacred Father, hast harvested the rich bounty of abundant healings.', 'p9 Ode VI 2', { label: 'plain' }),
                 t1('Helped, O holy Father, by the strength of the Spirit, thou hast subdued the might and power of the enemy, and in honor of thy victory thou hast been rewarded, O holy one, with the effulgent gift of miracles.', 'p9 Ode VI 3', { label: 'plain' }),
                 t1('The Lord is with thee, O most pure one! As it was well pleasing to Him, to be with thee O Maiden, so by thine intercessions, He hath delivered us all from the reign of the deceitful one; wherefore as is meet, from generation to generation we call thee blessed.', 'p9 Ode VI Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
          7: { irmos: t2('The Children of Judaea, * who of old came to dwell in Babylon, * trampled underfoot the flame of the furnace * through their faith in the Trinity, * as they sang: “O God of our fathers, blessed art Thou.”', 'p10 Ode VII irmos', { sourceLabel: 'Irmos', label_inline: true }),
               items: [
                 t1('Having with great resolve completed thine exploits of fasting, thou, O Father, hast humbled the proudest of minds by thy divine humility, singing: “O God of our fathers, Blessed art Thou.”', 'p10 Ode VII 1', { label: 'plain' }),
                 t1('Thou, O Father, sprouted forth like a preeminent blossom in the temple of God, adorned and filled with the sweet fragrance of the grace-filled fruits of virtue.', 'p10 Ode VII 2', { label: 'plain' }),
                 t1('Having enlightened thy heart, O Father, thou wast made the guide of thy sacred assembly, giving them spiritual direction, teaching them and rousing them all to fulfill the will of God, singing: “O God of our fathers, Blessed art Thou.”', 'p10 Ode VII 3', { label: 'plain' }),
                 t1('Giving birth to a new Child, the beginningless Word, thou, O Virgin, hast renewed us who have grown old through sin, and granted us strength to sing: “O God of our fathers, Blessed art Thou.”', 'p10 Ode VII Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
          8: { irmos: t2('Treading down the fiery flame in the furnace, * the divinely eloquent children sang: * “Bless the Lord, ye works of the Lord.”', 'p10 Ode VIII irmos', { sourceLabel: 'Irmos', label_inline: true }),
               items: [
                 t1('As an heir of the divine habitations, thou, O Father, didst live like an angel; wherefore with the Angels thy spirit rejoiceth.', 'p10 Ode VIII 1', { label: 'plain' }),
                 t1('O most wise and right wondrous Father, without wavering thou didst proceed along the divine paths leading to heaven, and thou didst, even unto the end, avoid those that lead to perdition.', 'p10 Ode VIII 2', { label: 'plain' }),
                 t1('Through the grace which found an abode in thy soul, O Father, the unclean spirits that cunningly find their abode in mortals, are driven away.', 'p10 Ode VIII 3', { label: 'plain' }),
                 t1('Thou, O Virgin, art an inexhaustible source of spiritual water, drinking of which we all are filled with grace, and cleansed in both soul and body.', 'p10 Ode VIII Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
          9: { irmos: t2('All are awestruck at hearing of God’s ineffable condescension, * for the Most High voluntarily descended and assumed flesh, * becoming man in the Virgin’s womb; * wherefore we the faithful magnify the most pure Theotokos.', 'p10 Ode IX irmos', { sourceLabel: 'Irmos', label_inline: true }),
               items: [
                 t1('By the action of the Holy Spirit thine honored shrine doth abundantly shed forth healings, curing the long standing diseases of those who have recourse unto thee, O Father; driving away cunning ferocious spirits, and raising the faithful to praise thy splendid deeds.', 'p11 Ode IX 1', { label: 'plain' }),
                 t1('Like a great sun that shineth forth with the majesty of thine ascetic deeds, O godly-wise one, thou hast enlightened the ends of the earth, and in thy death hast been exalted from light unto a most effulgent light; wherefore we cry unto thee: Enlighten our thoughts, O holy Father (name).', 'p11 Ode IX 2', { label: 'plain' }),
                 t1('By touching thine enduring body resplendent with ascetic endeavors, O blessed one, incurable diseases are healed, for our God and Savior hath greatly glorified thee O most wise and wonder-worthy Father (name); wherefore, for thy good works, thou art showered with fame, O holy one.', 'p11 Ode IX 3', { label: 'plain' }),
                 t1('In the hollows of fasting hast thou, O all-famed Father, blossomed like a sweet-smelling rose, and like a lily hast thou filled the consciences of the faithful with the fragrances of thy virtues and miracles; wherefore, O holy one, drive away from us putrid passions.', 'p11 Ode IX 4', { label: 'plain' }),
                 t1('Enlighten, O pure Virgin, my heart ever grieving from my transgressions and the multitude of worldly distractions, and never leave me to mine enemies, that I may glorify and with love hymn thee, O all-hymned one.', 'p11 Ode IX Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
        },
      }],

      kontakion_rubric: t1('The Kontakion from the Typicon; but if there be none, chant the following:', 'p9 Kontakion rubric'),
      ikos: t1('Having conceived within thyself a loving attachment to the divine commandments of Christ, and a hatred for the delights of this world, with diligence thou didst achieve thy God-pleasing goals, like a divine lamp enlightening the ends of the world with spiritual radiance. Wherefore falling down before thee I implore thee: Enlighten my spiritual eyes that I may worthily hymn thine endeavors of fasting, thy watchfulness, the shedding of thy tears, thy labors and the emaciation of thy body, all for the sake of a blessed future life, which thou dost now enjoy; do thou ever pray for us who celebrate thy holy memory!',
        'p9 Ikos', { sourceLabel: 'Ikos', label_inline: true }),

      exapostilarion_rubric: t1('Exapostilarion in Tone II:', 'p11 Exapostilarion rubric'),
      exapostilarion: t2('Like the palms of David, O Father, * Thou hast flourished and been revealed as an abode of the Holy Spirit, * by Whose action thou hast been shown to be wondrous throughout all the world, * do thou O holy (name), unceasingly pray for us * who faithfully honor thy most sacred memory.',
        'p11 Exapostilarion', { spec_mel: 'Hearken, O ye women ...', tone: 2 }),
      exapostilarion_closer: t2('We ever bless thee in hymns, O Virgin, * for thou O Theotokos hast, * given birth to One of the Trinity, * and didst bear in thy divine arms the exceedingly rich Word, ** unchangeable and immutable.',
        'p11 Exapostilarion Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion in Tone II', tone: 2 }),

      praises_rubric: t1('On the Praises, these Stichera, in Tone VI:', 'p11 Praises rubric'),
      praises: [
        t2('O most blessed God-bearer (name)! * making all the subtleties of the flesh subject to thy spirit, * and having strengthened thyself with the pangs of fasting, * like gold purified in the forge, * thou hast appeared as a most radiant receptacle of the Holy Spirit. * Gathering together a multitude of monastics, * and with thine instructions, as with a ladder ascending into heaven, * thou hast raised them unto the pinnacle of virtues. * Remember us also, who honor thy sacred memory, ** and never cease to intercede, that our souls may be saved.',
           'p11 Praises 1', { label: 'plain', tone: 6 , repeat: 2 }),
        t2('Today doth shine forth thy most illustrious and solemn memorial, * O most glorious (name), * which assembleth a multitude of the choirs of fasters and monastics, * truly Angels and men, * unto the praise of Christ, our God adored in the Trinity. * Wherefore, approaching the sacred shrine of thy relics, * we abundantly receive the gifts of healing * and glorify Christ, the Savior of our souls, ** Who hath crowned thee.',
           'p12 Praises 2', { label: 'plain' }),
        t2('O most blessed God-bearer, Father (name)! * As did the Prophet of old, * thou hast covered the earth with thy tears * never giving slumber to thine eyelids * thereby revealing the yearning of thy heart after Christ, * Whom thou didst exceedingly love; * wherefore, thou hast been set forth as an example to all monastics * guiding them to the understanding of every virtue; * therefore, we also bless thee, ** magnifying Him Who hath glorified thee.',
           'p12 Praises 3', { label: 'plain' }),
      ],
      praises_glory: t2('O venerable father! * Having from thy childhood diligently studied virtue, * thou wast revealed to be an organ of the Holy Spirit, * and having obtained from Him the gift of working miracles, * thou didst admonish thy people to shun the sweet things of life; * and now manifestly illumined with the divine light, ** do thou enlighten our thoughts, O our father (name).',
        'p12 Praises Glory', { sourceLabel: 'Glory ..., in Tone II', tone: 2 }),
      praises_closer: t2('All of my hope do I place on thee, * O Mother of God; ** keep me under thy protection.',
        'p12 Praises Both now', { type: 'theotokion', sourceLabel: 'Both now ..., Theotokion in Tone II', tone: 2 }),
      praises_stavrotheotokion: t2('Upon beholding the Creator of all things * enduring great injustice and lifted up upon the Cross, * the all-pure one groaned, saying: * “O all-hymned Lord, my Son and God, * how is it that, desiring to honor Thy creation, * Thou dost endure dishonor in the flesh? * Glory to Thy great compassion and Thy condescension, ** O Lover of mankind!”',
        'p12 Praises Stavrotheotokion', { type: 'stavrotheotokion', sourceLabel: 'Stavrotheotokion', label_inline: true }),

      great_doxology_rubric: t1('The great Doxology: If a small Doxology is read, the following is chanted after the Aposticha:', 'p12 Doxology rubric'),
      doxology_glory: t2('O thou who Preserved within thee the original image untainted, * and who, by fasting, set thy mind as master over the pernicious passions, * thou didst ascend as far as man is able unto heights of the divine likeness; * for having manfully restrained thy human nature, * taking care to subdue the lower unto the higher * thou didst subject the flesh to the spirit. * Wherefore thou appearest as the summit of those living the monastic life, * O thou inhabitant of the wilderness, * teacher of those who have recourse to thee for spiritual profit, * thou far-famed example of virtue; * And now, in the heavens, no longer “seeing through a glass, darkly” * thou, O Father Sergius doth clearly behold the Holy Trinity, ** do thou ever entreat God, on behalf of those who in faith and love honor thee.',
        'p12 Doxology Glory', { sourceLabel: 'Glory ..., in Tone IV', tone: 4,
          provenance_note: 'SIC — names “O Father Sergius” in a GENERAL service that elsewhere prints the (name) placeholder. A specific name left in the general text.' }),
      doxology_closer_rubric: t1('Both now ..., the Theotokion or Stavrotheotokion, in Tone VI.', 'p13 Doxology Both now'),

      troparion_rubric: t1('After Our Father ..., the Troparion, in Tone VIII:', 'p13 Troparion rubric'),
      closer: { absent: true, reason: 'not_printed_in_source', basis: 'close_reading',
        note: 'Printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8).' },
      closing_rubric: t1('The Dismissal:', 'p13 Dismissal'),
    },

    liturgy: {
      order: ['beatitudes_rubric', 'beatitudes', 'propers_rubric', 'troparion', 'kontakion',
              'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse', 'gospel', 'communion_verse'],

      beatitudes_rubric: t1('Typika and Beatitudes.', 'p14 Typika and Beatitudes'),
      // The Beatitudes REUSE the canon troparia — Odes III and VI, verbatim.
      // Stored again at THIS position, never referenced (§2.3); the identity is
      // asserted in known_recurrences.js, where the gate can check it.
      beatitudes: [
        t1('Altogether devoted to the Almighty, thou, O most wise venerable Father, didst escape all the wiles of the demons, and adorned with the loftiest humility, by thy most excellent works, thou didst overcome the proud boaster.', 'p14 Beatitude 1', { label: 'plain' , repeat: 2 }),
        t1('While still in the flesh thou, O most wise Father, shamed the stiff-neckedness of the wicked one by thy humble instructions.', 'p14 Beatitude 2', { label: 'plain' }),
        t1('Having the grace of God as thine effectual helper, thou, O most wise and wondrous father, wast granted the gift of miracles, driving away diseases.', 'p14 Beatitude 3', { label: 'plain' }),
        t1('By thy sacred prayers, O thou who art blessed by God, the cunning serpent hath been slain and the malice of those who demanded of thee a sign hath been destroyed, for thou, as a favorite of God, art effulgent with the light of the Godhead in thine unshakable faith.', 'p14 Beatitude 4', { label: 'plain' }),
        t1('Assiduously plowing the fields of thy soul, and most wisely sowing the multi-fruitful seeds of virtues, thou, O sacred Father, hast harvested the rich bounty of abundant healings.', 'p14 Beatitude 5', { label: 'plain' }),
        t1('Helped, O holy Father, by the strength of the Spirit, thou hast subdued the might and power of the enemy, and in honor of thy victory thou hast been rewarded, O holy one, with the effulgent gift of miracles.', 'p14 Beatitude 6', { label: 'plain' }),
        t1('The Lord is with thee, O most pure one! As it was well pleasing to Him, to be with thee O Maiden, so by thine intercessions, He hath delivered us all from the reign of the deceitful one; wherefore as is meet, from generation to generation we call thee blessed.', 'p14 Beatitude Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
      ],
      propers_rubric: t1('The Troparion and Kontakion from the Typicon, but if there be none, chant the following:', 'p14 Propers rubric'),
      prokeimenon: t2('Precious in the sight of the Lord * is the death of His saints.',
        'p14 Prokeimenon', { sourceLabel: 'Prokeimenon, in Tone VII, (Psalm 115:6,3)', label_inline: true, tone: 7 }),
      prokeimenon_verse: t1('What shall I render unto the Lord for all that He hath rendered unto me?',
        'p14 Prokeimenon verse', { sourceLabel: 'Verse', label_inline: true }),
      epistle: { heading: 'THE EPISTLE TO THE GALATIONS (5: 22, 6:1-2)', src: { file: F, locus: 'p15 Epistle' },
        citation_verbatim: '(5: 22, 6:1-2)', citation: { book: 'Galatians', chapter: 5, verses: '5:22, 6:1-2' },
        provenance_note: 'SIC — “GALATIONS” for Galatians, as printed. Also in Monastics.pdf.' },
      alleluia: t1('Blessed is the man that feareth the Lord, in His commandments shall he greatly delight.',
        'p15 Alleluia', { sourceLabel: 'Alleluia, in Tone VI, (Psalm 111: 1, 2)', label_inline: true, tone: 6 }),
      alleluia_verse: t1('His seed shall be mighty upon the earth; the generation of the upright shall be blessed.',
        'p15 Alleluia verse', { sourceLabel: 'Verse', label_inline: true }),
      gospel: { heading: 'THE GOSPEL ACCORDING TO ST. LUKE (6:17-23)', src: { file: F, locus: 'p15 Gospel' },
        citation_verbatim: '(6:17-23)', citation: { book: 'Luke', chapter: 6, verses: '17-23' } },
      communion_verse: t1('In everlasting remembrance shall the righteous be, he shall not be afraid of evil tidings',
        'p15 Communion verse', { sourceLabel: 'Communion Verse', label_inline: true }),
    },
  },
  // ── Monastics.pdf — the plural twin. Chosen as the SECOND file deliberately:
  // it is the one guaranteed to share Monastic's template while differing in
  // wording, so it tests the fixture rather than confirming it.
  //
  // Result: the template held with ZERO shape changes. What differed was texts,
  // Spec. Mel. forms, tone assignments — and, importantly, tier: this file's
  // Glory idiomelon is POINTED (Tier 2) where Monastic's is prose (Tier 1).
  // Tier is a per-item source fact, never a property of the slot.
  //
  // NO (name) PLACEHOLDER. Plural/collective files name nobody — `name_substituted`
  // is forbidden on fallbacks drawn from here (schema GENERAL_TAKES_NAME).
  Monastics: {
    title: g1('THE VIGIL SERVICE COMMON TO TWO OR MORE MONASTICS.', 'p1 title'),

    troparion: g2('O God of our fathers, * ever deal with us according to Thy meekness. * Take not Thy mercy from us, * but by the prayers of these saints ** direct our life in peace.',
      'p4 Troparion of the venerable ones', { sourceLabel: 'Troparion of the venerable ones, in Tone IV',
        verified_sites: [{ locus: 'p4 Vespers dismissal', tone: 4 }, { locus: 'p5 God is the Lord', tone: 4 },
                         { locus: 'p12 after Our Father', tone: 4 }, { locus: 'p13 AT LITURGY', tone: 4 }] }),

    kontakion: g2('Passing unharmed through a multitude of tempests, * and having received the gift of miracles, * ye drowned your immaterial enemies in the streams of your tears, * O divinely-wise and venerable ones, ** cease not to pray on behalf of us all.',
      'p9 Kontakion of the venerable ones', { sourceLabel: 'Kontakion of the venerable ones, in Tone II', spec_mel: 'Seeking the highest ...',
        verified_sites: [{ locus: 'p9 after Ode VI', tone: 2 }, { locus: 'p13 AT LITURGY', tone: 2 }] }),

    vespers: {
      order: [
        'lic_rubric', 'lic', 'lic_closer', 'lic_stavrotheotokion',
        'idiomelon_rubric', 'lic_glory',
        'dogmatikon_rubric', 'dogmatikon', 'dogmatikon_alternate', 'dogmatikon_stavrotheotokion',
        'entrance_rubric', 'readings',
        'aposticha_rubric', 'aposticha', 'aposticha_glory',
        'aposticha_closer_rubric', 'aposticha_closer', 'aposticha_alternate', 'aposticha_stavrotheotokion',
        'troparion_rubric', 'troparion', 'closer', 'closing_rubric',
      ],

      lic_rubric: g1('On “Lord, I have cried ...,” these Stichera, in Tone VIII:', 'p1 LIC rubric'),
      lic: [
        g2('O divinely-wise, fathers! * You give light to the blind, * cures to the infirm, and health to the lame, * hearkening mercifully unto those * who in faith come to your holy temple * entreating your help, * for all we who praise you, * know you to be sure protectors and intercessors ** for our souls.',
           'p1 LIC 1', { spec_mel: 'O most glorious wonder ...', label: 'plain', tone: 8 }),
        g2('O all-honored fathers! ascending to God * in the chariot of your virtues, * you received the honors of your victory, * and for our sakes, O fathers, * left your bodies in the grave * where they shed abundant healings, * driving away evil spirits; * wherefore we bless you, ** O all-famed ones.',
           'p1 LIC 2', { spec_mel: 'O most glorious wonder ...', label: 'plain' }),
        g2('Adorned with the life of fasting * you have been united * with the choirs of ascetics, * and now, O blessed ones, * you dwell joyfully in the heavenly habitations * where the choirs of angels rejoice, * truly deified with the divine light. * Remember those who with love bless you on earth ** and celebrate your holy feast.',
           'p1 LIC 3', { spec_mel: 'O most glorious wonder ...', label: 'plain' }),
      ],
      lic_closer: g2('My thoughts are impure, * and my lips are false, * all my works are defiled. * What, then, shall I do? * How shall I meet the Judge? * O Virgin Sovereign Lady, * entreat the Lord, thy Son and Creator, * that He accept my soul in repentance, ** in that He alone is compassionate.',
        'p1 LIC Glory/Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion in Tone VIII', tone: 8 }),
      lic_stavrotheotokion: g2('The unblemished ewe-lamb * upon beholding her lamb voluntarily nailed upon the tree, * lamented with maternal tenderness: * “Woe is me, O my most beloved child! * What is this that the ungrateful Jews have done to Thee, ** wishing to deprive me of Thee, O most beloved one.”',
        'p1 LIC Stavrotheotokion', { type: 'stavrotheotokion', sourceLabel: 'Stavrotheotokion', label_inline: true }),

      idiomelon_rubric: g1('If an Idiomelon be appointed, Glory ..., in Tone VI:', 'p1 Idiomelon rubric'),
      // TIER 2 HERE — Monastic prints this position as unpointed prose. Same slot,
      // different tier, two files. Tier is per-item, never per-slot.
      lic_glory: g2('O venerable fathers! * the fame of your endeavors hath gone forth throughout all the earth, * for having vanquished hordes of demons * ye became like the angels whom you emulated in the purity of your lives, * wherefore ye now enjoy the reward of your labors in heaven. * Since ye posses great boldness before Christ God, ** entreat Him to grant peace to our souls.',
        'p1 Glory idiomelon', { tone: 6 }),

      dogmatikon_rubric: g1('If the Celebration be with a Polyeleos, and not a Resurrection Service, sing the following Dogmatic of Tone VI (If the service is a Resurrection service sing the Dogmatic of the Tone for that service ):',
        'p1 Dogmatikon rubric'),
      dogmatikon: g2('Who doth not call thee blessed, O most holy Virgin? * Who will not hymn thy most pure birthgiving? * For the only-begotten Son Who hath shone forth timelessly from the Father, * came forth, ineffably incarnate, from thee, O pure one; * By nature he is God, by nature for our sakes, he hath become a man * not divided into two Hypostases, * but known in two natures without commingling. * Him do thou beseech, O pure and most blessed one, ** that our souls find mercy!',
        'p1 Both now Dogmatikon', { type: 'dogmatic_theotokion', sourceLabel: 'Both now ..., in Tone VI', tone: 6 }),
      dogmatikon_alternate: g2('O pure Virgin Theotokos, * entreat the Lord that by thine intercessions, * He grant our souls remission of sins, ** peace and great mercy.',
        'p2 Otherwise Theotokion', { type: 'theotokion', sourceLabel: 'Otherwise, Theotokion', label_inline: true }),
      dogmatikon_stavrotheotokion: g2('Upon beholding our Life suspended upon the Tree, * the all-immaculate Theotokos cried aloud, * maternally lamenting: ** O my Son and my God, save those who with love hymn Thee!',
        'p2 Stavrotheotokion', { type: 'stavrotheotokion', sourceLabel: 'Stavrotheotokion', label_inline: true }),

      entrance_rubric: g1('The Entrance. The Prokeimenon of the day. The Three Lessons, if appointed:', 'p2 Entrance'),
      readings: [
        { heading: 'THE READING FROM THE WISDOM OF SOLOMON', src: { file: G, locus: 'p2 Lesson 1' },
          citation: { book: 'Wisdom of Solomon', chapter: 3, verses: '3:1-3:9' },
          citation_basis: 'derived', derived: { method: 'corpus-match', reconstruction: 0.92 } },
        { heading: 'A READING FROM THE WISDOM OF SOLOMON', src: { file: G, locus: 'p2 Lesson 2' },
          citation: { book: 'Wisdom of Solomon', chapter: 5, verses: '5:15-6:3' },
          citation_basis: 'derived', derived: { method: 'corpus-match', reconstruction: 0.93 } },
        { heading: 'A READING FROM THE WISDOM OF SOLOMON', src: { file: G, locus: 'p3 Lesson 3' },
          citation: { book: 'Wisdom of Solomon', chapter: 4, verses: '4:7-4:14' },
          citation_basis: 'derived', derived: { method: 'corpus-match', reconstruction: 0.89 } },
      ],

      aposticha_rubric: g1('On the Aposticha, these Stichera, in Tone IV:', 'p3 Aposticha rubric'),
      aposticha: [
        g2('In a divinely-wise manner * ye put off the old man and put on Christ, * shining like radiant stars upon the earth, * illumined with spiritual grace, * ye intercede on behalf of those * who fervently and faithfully celebrate * your honorable memory * that they be delivered ** from corruption and all dangers.',
           'p3 Aposticha 1', { spec_mel: 'As one valiant among the martyrs ...', label: 'plain', tone: 4 }),
        g2('Precious in the sight of the Lord * is the death of His saints.', 'p3 Aposticha verse 1', { label: 'refrain', sourceLabel: 'Verse', label_inline: true }),
        g2('Having inherited eternal life, * ye now enjoy spiritual nourishment * and immersion in the divine light, * O divinely-wise ones, * since ye have great boldness towards God, * reveal unto us your truly Christ-like love, * and deliver from dangers and the multiplicity of temptations * and from every affliction ** those who make recourse to you.',
           'p3 Aposticha 2', { spec_mel: 'As one valiant among the martyrs ...', label: 'plain' }),
        g2('Blessed is the man that feareth the Lord, * in His commandments shall he greatly delight.', 'p3 Aposticha verse 2', { label: 'refrain', sourceLabel: 'Verse', label_inline: true }),
        g2('O all-wondrous God-bearers, * champions of the Trinity! * With wisdom vesting yourselves * for the struggle against * the prince of this world, * ye have firmly subdued him * and obtained crowns of victory; * wherefore we, illumined with grace, ** celebrate your splendid memory.',
           'p3 Aposticha 3', { spec_mel: 'As one valiant among the martyrs ...', label: 'plain' }),
      ],
      aposticha_glory: g2('O venerable fathers! * loathing the sweetness of this world * and harboring a greater love for monastic life, * ye befriended the angels, * and by your miracles shone forth upon all the world like a multi-luminous sun; * remember us who celebrate your sacred memory, * for we are your children and the sheep of your pastoral teachings; * we entreat you to come to our aid, ** that by your prayers we may obtain peace and great mercy.',
        'p3 Aposticha Glory', { sourceLabel: 'Glory ..., in Tone VIII', tone: 8 }),

      aposticha_closer_rubric: g1('If the Celebration be with a Polyeleos, chant the Resurrection Theotokion:', 'p3 Aposticha Both-now rubric'),
      aposticha_closer: g2('O unwedded Virgin! * thou who ineffably conceived God in the flesh, * mother of God most high: * Accept the supplications of thy servants, O all-immaculate one, * granting unto all cleansing of transgressions; * and, accepting now our supplications, ** pray thou that we all be saved.',
        'p4 Aposticha Both now', { type: 'theotokion', sourceLabel: 'Both now ..., in Tone VIII', tone: 8 }),
      aposticha_alternate: g2('Thy shelter, O Virgin Theotokos, * is spiritual healing; * for, having recourse unto it, ** we are delivered from spiritual infirmities.',
        'p4 Otherwise Theotokion', { type: 'theotokion', sourceLabel: 'Otherwise, Theotokion', label_inline: true }),
      aposticha_stavrotheotokion: g2('Beholding Thee O Lord Jesus, * nailed upon the cross and voluntarily accepting the passion, * the Virgin Mother cried aloud: * Woe is me, O my sweet Child! * how dost Thou wrongfully endure such wounds? * O compassionate Physician and healer of the infirmities of mankind, * Thou hast redeemed of all from corruption ** by Thy tender compassion.',
        'p4 Stavrotheotokion', { type: 'stavrotheotokion', sourceLabel: 'Stavrotheotokion', label_inline: true }),

      troparion_rubric: g1('The Troparion from the Typicon; but if there be none, chant the following:', 'p4 Troparion rubric'),
      closer: { absent: true, reason: 'not_printed_in_source', basis: 'close_reading',
        note: 'Printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8).' },
      closing_rubric: g1('The Dismissal:', 'p4 Dismissal'),
    },

    matins: {
      order: [
        'god_is_lord_rubric', 'troparion', 'troparion_closer',
        'sessional_1_rubric', 'sessional_1', 'sessional_1_closer',
        'sessional_2_rubric', 'sessional_2', 'sessional_2_closer',
        'megalynarion_rubric', 'megalynarion', 'megalynarion_verse',
        'sessional_polyeleos_rubric', 'sessional_polyeleos', 'sessional_polyeleos_closer',
        'anabathmoi_rubric', 'anabathmoi_intro', 'anabathmoi', 'anabathmoi_closer',
        'prokeimenon_rubric', 'prokeimenon', 'prokeimenon_verse',
        'gospel_rubric', 'gospel',
        'psalm50_rubric', 'psalm50_sticheron', 'psalm50_closer', 'psalm50_verse',
        'sessional_post50_rubric', 'sessional_post50',
        'canon_rubric', 'canons',
        'sessional_ode3_rubric', 'sessional_ode3', 'sessional_ode3_closer', 'sessional_ode3_stavrotheotokion',
        'kontakion_rubric', 'kontakion', 'ikos',
        'exapostilarion_rubric', 'exapostilarion', 'exapostilarion_closer',
        'praises_rubric', 'praises', 'praises_glory', 'praises_closer', 'praises_stavrotheotokion',
        'great_doxology_rubric', 'doxology_glory', 'doxology_closer_rubric',
        'troparion_rubric', 'troparion', 'closer', 'closing_rubric',
      ],
      god_is_lord_rubric: g1('On “God is the Lord ...,” the Troparion, in Tone IV:', 'p5 God is the Lord'),
      troparion_closer: { absent: true, reason: 'not_printed_in_source', basis: 'close_reading',
        note: 'Printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text (§5.8).' },
      sessional_1_rubric: g1('After the 1st chanting of the Psalter, the Sessional Hymn, in Tone IV:', 'p5 Sessional 1 rubric'),
      sessional_1: g2('Most radiant beacons of the truth of Christ, * the godly-spoken fathers have enlightened the world with their teaching, * vanquishing the heresies of wicked blasphemers, * and extinguishing their blazing falsehoods; ** as favorites of Christ they enlighten all.',
        'p5 Sessional 1', { spec_mel: 'Prevent ...', tone: 4, repeat: 2 }),
      sessional_1_closer: g2('O all-immaculate Virgin, * who hast given birth to the pre-eternal God, * do thou, together with the venerable fathers, * never cease to entreat Him to grant us remission of sins * and before our end, the restoration of our life, * for as is meet, we hymn thee with faith and love, ** O only all-hymned one.',
        'p5 Sessional 1 Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion, in Tone IV', tone: 4 }),
      sessional_2_rubric: g1('After the 2nd chanting of the Psalter, the Sessional Hymn, in Tone VIII:', 'p5 Sessional 2 rubric'),
      sessional_2: g2('Hearkening unto the words of eremitic teachings * ye renounced your flesh for the sake of Christ, * subduing all the passions with violence. * Having been shown to be spiritual leaders, and a rule for monastics, * ye vanquished the wiles of demons even unto the end. * O god-bearing fathers, * fervently pray unto God that remission of sins ** be granted unto those who with love honor your holy memory.',
        'p5 Sessional 2', { tone: 8, repeat: 2 }),
      sessional_2_closer: g2('Behold O Maiden, as thou hast foretold, * generation upon generation bless thee, * for thou wast made a palace of the Creator of all, * a divine temple in which the Most High dwelt and assumed flesh ** that He might save us.',
        'p5 Sessional 2 Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion, in Tone VIII', tone: 8 }),
      megalynarion_rubric: g1('After the Polyeleos, the Megalynarion:', 'p5 Megalynarion rubric'),
      megalynarion: g1('We bless you, O Venerable Fathers, and we honor your holy memory, Instructors of monks and conversers with the Angels.', 'p5 Megalynarion', { label_inline: true }),
      megalynarion_verse: g1('With patience I waited patiently for the Lord, and He was attentive unto me, and He hearkened unto my supplication.', 'p5 Megalynarion verse', { sourceLabel: 'Verse', label_inline: true }),
      sessional_polyeleos_rubric: g1('After the Polyeleos, the Sessional Hymn, in Tone VIII:', 'p5 Polyeleos sessional rubric'),
      sessional_polyeleos: g2('O blessed ones, having set the desire of your minds wholly on God, * ye forsook all the pleasures of this life, * and making your abode in the wilderness, * flourished like beautiful lilies, * eradicating tares by your spiritual labors; * with good deeds ye planted the fruit-bearing trees of the virtues. * Having therefore gathered a bountiful harvest in heaven, * entreat Christ God, O venerable fathers, ** to grant remission of sins unto those who with faith honor your holy memory.',
        'p5 Polyeleos sessional', { spec_mel: 'Of the wisdom ...', tone: 8, repeat: 2 }),
      sessional_polyeleos_closer: g2('In Thee, O Full of grace, * doth all creation rejoice, * the ranks of Angels and the race of mankind; * O all-hallowed Temple and spiritual Paradise, * boast of Virgins. * For from thee God became incarnate * and He who is our God before the ages became a child. * He hath made thy womb a throne and rendered it wider than the heavens. * In thee, O Full of grace, doth all creation rejoice; ** glory be to thee.',
        'p6 Polyeleos sessional Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion in Tone VIII', tone: 8 }),
      anabathmoi_rubric: g1('If of Polyeleos rank, and not a Resurrection Service, chant the following:', 'p6 Anabathmoi condition'),
      anabathmoi_intro: g1('The Song of Ascents: The first antiphon, in Tone IV:', 'p6 Anabathmoi rubric'),
      anabathmoi: [
        g2('From my youth * do many passions war against me; * but do Thou Thyself defend ** and save me, O my Savior.', 'p6 Anabathmoi 1', { tone: 4 }),
        g2('Ye haters of Zion * shall be shamed by the Lord; * for like grass, by the fire ** shall ye be withered.', 'p6 Anabathmoi 2'),
      ],
      anabathmoi_closer: g2('In the Holy Spirit, * every soul is quickened, * and, through cleansing, is exalted ** and made radiant by the Triple Unity in a hidden sacred manner.',
        'p6 Anabathmoi Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ...' }),
      prokeimenon_rubric: g1('The Prokeimenon, in Tone IV:', 'p6 Prokeimenon rubric'),
      prokeimenon: g2('Precious in the sight of the Lord * is the death of His saints.', 'p6 Prokeimenon', { sourceLabel: 'The Prokeimenon', label_inline: true, tone: 4 }),
      prokeimenon_verse: g1('What shall I render unto the Lord for all that he hath rendered unto me?', 'p6 Prokeimenon verse', { sourceLabel: 'Verse', label_inline: true }),
      gospel_rubric: g1('Let every breath ...,', 'p6 Let every breath'),
      gospel: { heading: 'THE GOSPEL ACCORDING TO ST. MATTHEW (11, 27-30)', src: { file: G, locus: 'p6 Matins Gospel' },
        citation_verbatim: '(11, 27-30)', citation: { book: 'Matthew', chapter: 11, verses: '27-30' } },
      psalm50_rubric: g1('After the 50th Psalm:', 'p6 Psalm 50 rubric'),
      psalm50_sticheron: g2('Through the prayers of venerable Fathers (names), * O Merciful One, ** blot out the multitude of our transgressions.',
        'p6 Psalm 50 sticheron', { sourceLabel: 'Glory ..., in Tone VI', tone: 6 }),
      psalm50_closer: g2('Through the prayers of the Theotokos, * O Merciful One, ** blot out the multitude of our transgressions.', 'p7 Psalm 50 Both now', { type: 'theotokion', sourceLabel: 'Both now ...' }),
      psalm50_verse: g2('Have mercy on me, O God, * according to Thy great mercy; * and according to the multitude of Thy compassions, ** blot out my transgressions.', 'p7 Psalm 50 verse'),
      sessional_post50_rubric: g1('Then the Sessional Hymn, in Tone VI:', 'p7 post-50 sessional rubric'),
      sessional_post50: g2('Let us honor the great fathers, * earthly angels and heavenly men of God, * adornments of the world, * the praise of monks and abbots; * for planted in the house of the Lord, * they flourished in righteousness, * and multiplied the flock of Christ’s rational sheep like cedars in the wilderness, ** in holiness and righteousness.',
        'p7 post-50 sessional', { tone: 6 }),
      canon_rubric: g1('The Canon, in Tone II:', 'p7 Canon rubric'),
      canons: [{ tone: 2, odes: {
        1: { irmos: g2('Come, O ye people, * let us sing a song to Christ our God, * Who divided the sea, * and made a way for the nation * which He had brought up out of the bondage of Egypt; * for He hath been glorified.', 'p7 Ode I irmos', { sourceLabel: 'Irmos', label_inline: true }),
             refrain: g1('Venerable Fathers (names) pray to God for us', 'p7 Ode I refrain', { sourceLabel: 'Refrain', label_inline: true }),
             items: [
               g1('Illumined with the brightness of the Three-Sunned Godhead, O most wise ones, you appear as lights unfailingly enlightening those who honor your bright memory.', 'p7 Ode I 1', { label: 'plain' }),
               g1('Giving yourselves up entirely to your Creator, pouring out before Him all of your noetic desires, you were deemed worthy of divine grace.', 'p7 Ode I 2', { label: 'plain' }),
               g1('Illumined with the light of divine grace, O holy ones, illumine those who with faith celebrate your memorial and by your prayers deliver them from the darkness of sin.', 'p7 Ode I 3', { label: 'plain' }),
               g1('Having given birth in the flesh to the Incorporeal One, O most pure Birthgiver of God, cleanse the impurities of our bodies and souls, by the waters of thine all-divine prayers.', 'p7 Ode I Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
             ] },
        3: { irmos: g2('O Lord, who didst slay sin upon the tree, * firmly establish us in Thee, * and in the hearts of us who hymn Thee * plant the fear of Thee.', 'p7 Ode III irmos', { sourceLabel: 'Irmos', label_inline: true }),
             items: [
               g1('Filling your souls with the streams of your copious tears, O holy ones, ye rendered them fruitful with every virtue, adorning them with wondrous miracles.', 'p7 Ode III 1', { label: 'plain' }),
               g1('Your divine temple worketh healings, expelling diseases from all, and strengthening them to praise your spiritual struggles, O all-honored ones.', 'p7 Ode III 2', { label: 'plain' }),
               g1('Having struggled against the enemy with abstinence, ye valiantly obtained victory over him, and now having that victory as a rampart against him, O holy ones, you subdue the raging of the demons.', 'p7 Ode III 3', { label: 'plain' }),
               g1('From thy womb, O Virgin, the great Sun hath most gloriously shone forth, illumining the world, and receiving the choir of the holy ones.', 'p8 Ode III Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
             ] },
        4: { irmos: g2('I have heard report of Thy dispensation, O Lord, * and have glorified Thee * Who alone lovest mankind.', 'p8 Ode IV irmos', { sourceLabel: 'Irmos', label_inline: true }),
             items: [
               g1('As ones who loved Christ’s humility, you have been exalted by dispassion and humbled the pride of demons.', 'p8 Ode IV 1', { label: 'plain' }),
               g1('Like a sun shining forth from the east, the splendid rays of your miracles, O holy ones, illumine all of creation.', 'p8 Ode IV 2', { label: 'plain' }),
               g1('Likened to a censer filled with sweet fragrances, O holy ones, you bring your prayers unto the All-seeing one, Who having accepted them, hath established the commemoration of your ascetic endeavors.', 'p8 Ode IV 3', { label: 'plain' }),
               g1('The choir of the venerable ones, and every faithful soul blesses thee, O most pure one, for beyond comprehension and understanding, thou hast given birth to the divine Word.', 'p8 Ode IV Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
             ] },
        5: { irmos: g2('O Lord, Bestower of light and Creator of the ages: * guide us in the light of Thy commandments, * for we know none other God than Thee.', 'p8 Ode V irmos', { sourceLabel: 'Irmos', label_inline: true }),
             items: [
               g1('Giving yourselves up entirely to the love of Christ and fervently fulfilling the divine commandments, ye obtained the grace of many miracles, O most glorious ones.', 'p8 Ode V 1', { label: 'plain' }),
               g1('Meek and mild, ye have vanquished the malice of the enemy, remaining gracious to the end, obtaining true and salvific grace from the only merciful One.', 'p8 Ode V 2', { label: 'plain' }),
               g1('Enduring patiently in prayer and fasting, and acquiring dispassion, ye humbled the spirit of the flesh by the strength of the Holy Spirit.', 'p8 Ode V 3', { label: 'plain' }),
               g1('Chant unto the Lord a new hymn, chant unto the name of Him Who hath shone forth in a godly manner from the womb of her who kneweth not wedlock, revealing her to be the firm hope, and praise of the faithful.', 'p9 Ode V Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
             ] },
        6: { irmos: g2('Whirled about in the abyss of sin, * I appeal to the unfathomable abyss of Thy compassion: * Raise me up from corruption, O God.', 'p9 Ode VI irmos', { sourceLabel: 'Irmos', label_inline: true }),
             items: [
               g1('With the activity of your ascetic endeavors, O fathers, ye have obtained victory over demons, making yourselves, O venerable ones, pleasing unto the Lord Who was crucified for our sake.', 'p9 Ode VI 1', { label: 'plain' }),
               g1('Having acquired a compassionate disposition, O fathers, ye received an abundance of gifts from the merciful God, freely bestowing them upon those in need, O venerable ones.', 'p9 Ode VI 2', { label: 'plain' }),
               g1('Filled with spiritual gifts, O rational and wise fathers, and always near to God, ye vanquished adverse spirits.', 'p9 Ode VI 3', { label: 'plain' }),
               g1('By thy child-bearing, thou hast become a source of dispassion, and the enlightenment of the choirs of the venerable fathers, do thou heal the passions of my soul.', 'p9 Ode VI Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
             ] },
        7: { irmos: g2('When the golden image was worshipped on the plain of Dura, * Thy three children spurned the impious command, * and, cast into the midst of the flame, * they were bedewed, and sang: * O God of our fathers, Blessed art Thou!', 'p9 Ode VII irmos', { sourceLabel: 'Irmos', label_inline: true }),
             items: [
               g1('With the weapon of prayer, O venerable ones, ye vanquished evil spirits, having received from heaven the grace to heal diseases and drive away evil spirits from those who cry aloud: “O God of our fathers, Blessed art Thou.”', 'p9 Ode VII 1', { label: 'plain' }),
               g1('O wise fathers, by abstinence ye subjugated your bodies to the spirit, and with a pure conscience, lived a life of good works, O all-famed fathers, having attained to life in heaven, ye chant: “O God of our fathers, Blessed art Thou.”', 'p10 Ode VII 2', { label: 'plain' }),
               g1('Protected by divine grace O blessed ones, ye have escaped the assaults of demons and having rightly entered into divine rest, ye cry aloud: “O God of our fathers, Blessed art Thou.”', 'p10 Ode VII 3', { label: 'plain' }),
               g1('The flaming sword, which of old held fast the gates of Eden O pure Virgin, doth now raise up those who through fasting have defeated the great enemy and ever cry aloud: “O God of our fathers, Blessed art Thou.”', 'p10 Ode VII Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
             ] },
        8: { irmos: g2('Him who once revealed the miracle of the Virgin * unto Moses in the bush on mount Sinai, * hymn ye, bless ye, and supremely exalt throughout all ages.', 'p10 Ode VIII irmos', { sourceLabel: 'Irmos', label_inline: true }),
             items: [
               g1('The drops of your tears, O most glorious fathers, are like a wondrous stream quenching the fire of sin and drowning the sufferings of all those who have recourse to you.', 'p10 Ode VIII 1', { label: 'plain' }),
               g1('By your lives, O fathers, ye professed an indestructible faith and hope, true love and gracious fervor, kindly patience and spiritual instruction, humbleness and perfect meekness.', 'p10 Ode VIII 2', { label: 'plain' }),
               g1('Having labored well, ye obtained victory over the adversary, and at the end of your days were crowned, O wise ones, and numbered with the righteous of all ages, with whom we honor you, and supremely exalt Christ throughout all ages.', 'p10 Ode VIII 3', { label: 'plain' }),
               g1('Save me, O Mother of God, the beginning of the world’s salvation, by delivering me from the corruption of the passions and from every affliction of the adversary, that I may glorify thee throughout all ages.', 'p10 Ode VIII Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
             ] },
        9: { irmos: g2('God the Word, God of God, * Who by ineffable wisdom came to create Adam anew * after his grievous fall to corruption through eating * and Who took flesh beyond all telling from the Holy Virgin for our sake, * Him we faithful with one accord magnify in song.', 'p10 Ode IX irmos', { sourceLabel: 'Irmos', label_inline: true }),
             items: [
               g1('Behold the kingdom of heaven hath been opened to you, O fathers, for having finished your blessed course, ye behold the angels of God, having received from God great honors for your labors; Wherefore, O venerable fathers, we bless you.', 'p10 Ode IX 1', { label: 'plain' }),
               g1('Pleasing God with your contrite hearts, ye destroyed the snares of the demons, O god-bearers, and having restored those devastated by them, we bless you, faithfully adoring the shrine of your relics, O divinely blessed ones.', 'p10 Ode IX 2', { label: 'plain' }),
               g1('Directing your thoughts towards God on high, O god-bearing and venerable fathers, you separated yourselves from things temporal, and for the sake of your labors and wondrous abstinence received things divine, wherefore we honor you.', 'p11 Ode IX 3', { label: 'plain' }),
               g1('When the time of my judgement arrives, spare me, O Lord, and condemn me not to the fire, nor rebuke me in Thy wrath, but by the intercessions, O Christ, of the Virgin who bare Thee, the choirs of angels and the assembly of the venerable, spare me.', 'p11 Ode IX Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
             ] },
      } }],
      sessional_ode3_rubric: g1('The Sessional Hymn, in Tone IV:', 'p8 after-Ode-III sessional rubric'),
      sessional_ode3: g2('Passing over the sea of life in abstinence, * with ease ye reached the noetic haven of dispassion, ** O holy and divinely-wise fathers.',
        'p8 after-Ode-III sessional', { spec_mel: 'Thou hast appeared today ...', tone: 4 }),
      sessional_ode3_closer: g2('Beyond nature and all telling, * virginity and child-birth have been joined together in thee, * O Theotokos, * for thou hast given birth to God in the flesh, ** the Savior of our souls.',
        'p8 after-Ode-III Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion, in Tone IV', tone: 4 }),
      sessional_ode3_stavrotheotokion: g2('Upon beholding thy Son pierced and hanging upon the cross * thou, O most pure one, * didst cry out with maternal lamentations: * “Woe is me! To where hast Thou descended, ** O my eternally radiant Light?”',
        'p8 after-Ode-III Stavrotheotokion', { type: 'stavrotheotokion', sourceLabel: 'Stavrotheotokion', label_inline: true }),
      kontakion_rubric: g1('The Kontakion from the Typicon; but, if there be none, chant the following:', 'p9 Kontakion rubric'),
      ikos: g1('O venerable fathers, by your prayers and fasting ye have flourished like a beautiful garden issuing forth from paradise, planted with the abundance of your virtues, and filling all with the sweet fragrance of your many spiritual struggles, deeds and toils, amidst which ye have skillfully passed over to the life without sorrow, and now crowned with victory; cease not to pray on behalf of us all.',
        'p9 Ikos', { sourceLabel: 'Ikos', label_inline: true }),
      exapostilarion_rubric: g1('Exapostilarion, in Tone III:', 'p11 Exapostilarion rubric'),
      exapostilarion: g2('Like the palms of David, O fathers, * ye have flourished and been revealed to be abodes of the Holy Spirit, * by whose action ye have been shown to be wondrous throughout all the world, * O holy venerable fathers (names), unceasingly pray for us * who faithfully honor your most sacred memory.',
        'p11 Exapostilarion', { spec_mel: 'Thou hast visited us ...', tone: 3 }),
      exapostilarion_closer: g2('With unceasing hymns we bless thee, * O Virgin Theotokos, * in that thou hast given birth to one of the Trinity * immutably and without change, ** and didst bear in thy divine embrace the exceedingly noetically rich Word.',
        'p11 Exapostilarion Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion in Tone III', tone: 3 }),
      praises_rubric: g1('On the Praises, these Stichera, in Tone IV:', 'p11 Praises rubric'),
      praises: [
        g2('Your all-festive solemnity, O venerable ones, * resplendent with the rays of your virtuous deeds, * doth shine forth brighter than the sun, * illumining the senses of the faithful * with the light of your miracles, O blessed ones, * celebrating it, we joyfully praise you ** and faithfully bless your all-festive memorial.',
           'p11 Praises 1', { spec_mel: 'Thou hast given a sign ...', label: 'plain', tone: 4, repeat: 2 }),
        g2('Living your earthly life like angels, * subduing your bodies with abstinence, * ye advanced in spiritual life * by fervent vigilance and remembrance of death, * ascending to the heights of perfection; ** wherefore, O venerable fathers, ye have attained to Christ the corner stone.',
           'p11 Praises 2', { spec_mel: 'Thou hast given a sign ...', label: 'plain' }),
        g2('Subduing the passions of the body with abstinence, * and by your fervent prayers drowning the flattering serpent in the streams of your tears, * O venerable fathers, ye became more pleasing to God than multitudes of others, * wherefore Jesus, the Lover of mankind and the Savior of our souls, * hath adorned you, O right wondrous ones, ** with heavenly gifts.',
           'p11 Praises 3', { spec_mel: 'Thou hast given a sign ...', label: 'plain' }),
      ],
      praises_glory: g2('Meditating on the law of the Lord day and night, * O venerable fathers, * ye were deemed worthy to be planted amidst the tree of life, * wherefore the fruits of your suffering blossomed forth with eternal crowns; * possessing now boldness towards God the Creator, ** implore Him that we be cleansed and granted great mercy.',
        'p11 Praises Glory', { sourceLabel: 'Glory ..., in Tone VIII', tone: 8 }),
      praises_closer: g2('O Sovereign lady, * Accept the supplications of thy servants, ** and deliver us from all want and grief.',
        'p12 Praises Both now', { type: 'theotokion', sourceLabel: 'Both now ..., Theotokion, in Tone VIII', tone: 8 }),
      praises_stavrotheotokion: g2('When the most pure one beheld Thee * hanging upon the Cross in the flesh, * with a broken heart she cried aloud in tears: * “O Word, whither hast Thou gone, * my most beloved Jesus, my Son, and Lord? ** O Christ, leave me not alone, who hath given birth to Thee!”',
        'p12 Praises Stavrotheotokion', { type: 'stavrotheotokion', sourceLabel: 'Stavrotheotokion', label_inline: true }),
      great_doxology_rubric: g1('The great Doxology: If a small Doxology is read, and a Doxasticon is appointed, the following is chanted after the Aposticha:', 'p12 Doxology rubric'),
      // IDENTICAL to the Vespers aposticha Glory in this same file — one hymn,
      // two print sites, stored at both (§2.3).
      doxology_glory: g2('O venerable fathers! * loathing the sweetness of this world * and harboring a greater love for monastic life, * ye befriended the angels, * and by your miracles shone forth upon all the world like a multi-luminous sun; * remember us who celebrate your sacred memory, * for we are your children and the sheep of your pastoral teachings; * we entreat you to come to our aid, ** that by your prayers we may obtain peace and great mercy.',
        'p12 Doxology Glory', { sourceLabel: 'Glory ..., in Tone VIII', tone: 8 }),
      doxology_closer_rubric: g1('Both now ..., Theotokion or Stavrotheotokion:', 'p12 Doxology Both now'),
      troparion_rubric: g1('After Our Father ..., the Troparion of the venerable ones, in Tone IV:', 'p12 Troparion rubric'),
      closer: { absent: true, reason: 'not_printed_in_source', basis: 'close_reading',
        note: 'Printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text (§5.8).' },
      closing_rubric: g1('The Dismissal:', 'p12 Dismissal'),
    },

    liturgy: {
      order: ['beatitudes_rubric', 'beatitudes', 'propers_rubric', 'troparion', 'kontakion',
              'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse', 'gospel', 'communion_verse'],
      beatitudes_rubric: g1('Typika and Beatitudes.', 'p13 Typika and Beatitudes'),
      // Odes III and VI reprinted — but UNLIKE Monastic, three of these differ
      // from the canon print. See known_recurrences: two `variant` pairs plus a
      // capitalization variant. Stored at both positions regardless (§2.3).
      beatitudes: [
        g1('Filling your souls with the streams of your copious tears, O holy ones, ye rendered them fruitful with every virtue, adorning them with wondrous miracles.', 'p13 Beatitude 1', { label: 'plain', repeat: 2 }),
        g1('Your divine temple worketh healings, expelling diseases from all, and strengthening them to praise your spiritual struggles, O all-honored ones.', 'p13 Beatitude 2', { label: 'plain' }),
        g1('Having struggled against the enemy with abstinence, ye valiantly obtained victory over him, and now having that victory as a rampart against him, O holy ones, ye subdue the raging of the demons.', 'p13 Beatitude 3', { label: 'plain' }),
        g1('With the activity of your ascetic endeavors, O fathers, ye have obtained victory over demons, making yourselves, O venerable ones, pleasing unto the Lord Who was crucified for our sake.', 'p13 Beatitude 4', { label: 'plain' }),
        g1('Having acquired a compassionate disposition, O fathers, ye received an abundance of gifts from the merciful God, freely bestowing them unto those in need, O venerable ones.', 'p13 Beatitude 5', { label: 'plain' }),
        g1('Filled with spiritual gifts, O rational and wise fathers, and always near to God, ye vanquished adverse spirits.', 'p13 Beatitude 6', { label: 'plain' }),
        g1('By thy child-bearing, thou hast become a Source of dispassion, and the enlightenment of the choirs of the venerable fathers, do thou heal the passions of my soul.', 'p13 Beatitude Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
      ],
      propers_rubric: g1('The Troparion and Kontakion from the Typicon, but if there be none, chant the following:', 'p13 Propers rubric'),
      prokeimenon: g2('Precious in the sight of the Lord * is the death of His saints.', 'p13 Prokeimenon', { sourceLabel: 'Prokeimenon', label_inline: true, tone: 7 }),
      prokeimenon_verse: g1('What shall I render unto the Lord for all that He hath rendered unto me?', 'p13 Prokeimenon verse', { sourceLabel: 'Verse', label_inline: true }),
      epistle: { heading: 'THE EPISTLE TO THE GALATIONS (5: 22, 6:1-2)', src: { file: G, locus: 'p14 Epistle' },
        citation_verbatim: '(5: 22, 6:1-2)', citation: { book: 'Galatians', chapter: 5, verses: '5:22, 6:1-2' },
        provenance_note: 'SIC — “GALATIONS” for Galatians, as printed. Also in Monastic.pdf.' },
      alleluia: g1('Blessed is the man that feareth the Lord, in His commandments shall he greatly delight.', 'p14 Alleluia', { sourceLabel: 'Alleluia, in Tone VI', label_inline: true, tone: 6 }),
      alleluia_verse: g1('His seed shall be mighty upon the earth; the generation of the upright shall be blessed.', 'p14 Alleluia verse', { sourceLabel: 'Verse', label_inline: true }),
      gospel: { heading: 'THE HOLY GOSPEL ACCORDING TO ST. LUKE (6:17-23)', src: { file: G, locus: 'p14 Gospel' },
        citation_verbatim: '(6:17-23)', citation: { book: 'Luke', chapter: 6, verses: '17-23' } },
      communion_verse: g1('In everlasting remembrance shall the righteous be, he shall not be afraid of evil tidings.', 'p14 Communion verse', { sourceLabel: 'Communion Verse', label_inline: true }),
    },
  },
  // ── Martyr.pdf — first NON-monastic file. Two structural departures:
  //   1. The Vespers lessons are NOT three from Wisdom. Lesson 1 is from Isaiah.
  //      The three-Wisdom set is a monastic-file fact, not a book-wide one.
  //   2. The troparion is printed at TWO DIFFERENT DECLARED TONES — III at
  //      Matins (p13), IV at Liturgy (p14) — with IDENTICAL text. Under R-1 a
  //      canonical field is used only after every print site is verified
  //      identical; the text matches and the TONE does not, so this is a logged
  //      divergence, NOT a silent pick. See §13 open items.
  // ── Martyrs.pdf — the plural twin of Martyr, and the fourth file. ──────────
  //
  // Encoded AFTER Martyr's own Vespers was completed, so it is checked against a
  // whole fixture rather than half of one. The template held again: same keys,
  // same order, no shape change beyond two additions the source itself prints —
  // a CONDITIONAL SECOND PROKEIMENON at Matins ("If it be the Forty Martyrs")
  // and a bare `The Doxology:` rubric ahead of the great-Doxology rubric.
  //
  // PLACEHOLDER: this file prints `(names)`, plural, once — at the Ode I
  // refrain. It is stored verbatim and unsubstituted like any other. The claim
  // that plural files carry no placeholder at all is false and is corrected in
  // schema `GENERAL_TAKES_NAME`; see the note there.
  //
  // BEATITUDES: byte-identical to the canon troparia at all seven positions —
  // the Monastic behaviour, not the Monastics one. Both are stored; neither is
  // dereferenced. That two of four files now behave each way is the whole
  // argument for §2.3.
  Martyrs: {
    title: p1('THE GENERAL VIGIL SERVICE TO TWO OR MANY MARTYRS.', 'p1 title'),

    // Four print sites, byte-identical, all declared Tone I.
    // SIC: "heal all or infirmities" — "or" for "our", at every one of the four.
    troparion: p2('We beseech Thee O Lord for the sake of the sufferings of Thy saints * which they endured on Thy behalf, * be compassionate unto us, ** and heal all or infirmities, O Lover of mankind.',
      'p4 Troparion', { sourceLabel: 'Troparion, in Tone I', tone: 1,
        verified_sites: [{ locus: 'p4 Vespers troparion', tone: 1 }, { locus: 'p5 God is the Lord', tone: 1 },
                         { locus: 'p12 after Our Father', tone: 1 }, { locus: 'p13 AT THE LITURGY', tone: 1 }] }),

    kontakion: p2('O divine Martyrs, ye have appeared as bright beacons, * illumining the whole of creation with the radiance of your miracles, * unceasingly entreat Christ God on behalf of us all, * that we be released from our infirmities, ** and expel from us the profound darkness of ignorance.',
      'p9 Kontakion of the martyrs', { sourceLabel: 'Kontakion of the martyrs, in Tone VIII', spec_mel: 'Seeking the highest ...', tone: 8,
        verified_sites: [{ locus: 'p9 after Ode VI', tone: 8 }, { locus: 'p13 AT THE LITURGY', tone: 8 }] }),

    ikos: p1('O beauteous choir of martyrs, brightly shining and divine beacons, ever standing before the supreme Light on high, illumined and deified by the rays proceeding from the never-waning Godhead! enlighten us who with faith celebrate your divine memory, O divinely blessed Martyrs, and pray unceasingly for us all, that we be delivered from the darkness of the passions, and from all misfortunes and malice of the enemy.',
      'p9 Ikos', { sourceLabel: 'The Ikos', label_inline: true }),

    vespers: {
      order: [
        'lic_rubric', 'lic', 'lic_closer', 'lic_stavrotheotokion',
        'idiomelon_rubric', 'lic_glory',
        'dogmatikon_rubric', 'dogmatikon', 'dogmatikon_alternate', 'dogmatikon_stavrotheotokion',
        'entrance_rubric', 'readings',
        'aposticha_rubric', 'aposticha', 'aposticha_glory',
        'aposticha_closer_rubric', 'aposticha_closer', 'aposticha_alternate', 'aposticha_stavrotheotokion',
        'troparion_rubric', 'troparion', 'closer', 'closing_rubric',
      ],

      lic_rubric: p1('On “Lord, I have cried ...,” the Stichera, in Tone IV:', 'p1 LIC rubric'),
      lic: [
        p2('Enlightened by the Holy Spirit, * O all-famed martyrs, * ye have taken up the fight against the prince of this world * and with God’s help * ye obtained victory over his snares; * wherefore celebrating today * your most radiant memory, * with praises ** we honor your pangs as is meet.',
           'p1 LIC 1', { spec_mel: 'As one valiant among the martyrs ...', label: 'plain', tone: 4 }),
        p2('Given over to wounds and tortures, * O holy ones, * ye remained staunch in your wise confession. * like candles enkindled with spiritual warmth, * ye ignite the hearts of the faithful with grace; * wherefore people * of every rank and age * keep the feast of your memorial, ** glorifying the Lord in hymns.',
           'p1 LIC 2', { spec_mel: 'As one valiant among the martyrs ...', label: 'plain',
             provenance_note: 'SIC — “wise confession. * like candles”: a full stop mid-sticheron followed by a lowercase continuation. As printed.' }),
        p2('With the splendor of your miracles * O Martyrs, * ye enlighten the whole of creation. * O valiant sufferers for the Savior * driving away the fog of passions and afflictions * from those who have recourse unto you * and who in faith seek your protection; * wherefore in faith ** we keep your holy and light-bearing commemoration.',
           'p1 LIC 3', { spec_mel: 'As one valiant among the martyrs ...', label: 'plain' }),
      ],
      lic_closer: p2('Have compassion upon me, O Lady, * who am brought low by the assaults of the demons, * and have been cast down into the pit of destruction; * and set me firmly upon the rock of the virtues, * subduing the attacks of the enemy. * Vouchsafe that I may obey the commandments * of thy Son and our God, * that I may receive forgiveness ** on the Day of Judgment.',
        'p1 LIC Glory/Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion in Tone IV', tone: 4 }),
      lic_stavrotheotokion: p2('Seeing Christ, the Lover of mankind, * crucified and with His side pierced with a lance, * the most pure one lamented, crying aloud: * “What is this, O my Son ? * What have the ungrateful people rendered unto Thee * in return for all the good things Thou hast rendered unto them ?” * And yet thou dost show thy tender compassion for me, * that I may endure my childlessness. ** I stand in awe, O Compassionate One, at Thy voluntary crucifixion.',
        'p1 LIC Stavrotheotokion', { type: 'stavrotheotokion', sourceLabel: 'Stavrotheotokion', label_inline: true,
          provenance_note: 'SIC — a space precedes both question marks (“O my Son ?”, “unto them ?”). Typography, stored as printed.' }),

      idiomelon_rubric: p1('If an Idiomelon be appointed, Glory ..., in Tone III:', 'p1 Idiomelon rubric'),
      lic_glory: p2('Behold O Christ God! * how good and beautiful is the brotherly love * that the martyrs have for each another. * For although not brethren by blood * the faith hath taught them to be like brothers * even unto the spilling of their blood; ** by their intercessions, O Christ God, save our souls.',
        'p1 Glory idiomelon', { tone: 3,
          provenance_note: 'SIC — “for each another” (for “one another” / “each other”). As printed.' }),

      dogmatikon_rubric: p1('If the Celebration be with a Polyeleos, and not a Resurrection Service, sing the following Dogmatic in Tone III (If the service is a Resurrection service sing the Dogmatic of the Tone for that service ):',
        'p1 Dogmatikon rubric'),
      dogmatikon: p2('How can we, O all-honored one, * not marvel at thine Offspring? * who is both God and man. * For without knowing a man, O all-immaculate One, * without a father thou hast given birth to a Son in the flesh, * who without a mother was begotten from the Father before all ages, * yet in no way undergoing change, fusion or separation, * but preserving fully the characteristics of both natures. * Wherefore, O Sovereign Lady, and Virgin Mother, * beseech Him to save the souls of those ** who with Orthodox faith confess thee to be the true Theotokos.',
        'p2 Both now Dogmatikon', { type: 'dogmatic_theotokion', sourceLabel: 'Both now ..., in Tone III', tone: 3 }),
      dogmatikon_alternate: p2('O Theotokos, * thou intercessor for all who pray to thee: * in thee do we have boldness, * in thee do we boast, * and in thee do we place all our hope. * Pray thou unto Him who was born from thee, ** on behalf of thine unprofitable servants.',
        'p2 Otherwise Theotokion', { type: 'theotokion', sourceLabel: 'Otherwise, Theotokion', label_inline: true }),
      dogmatikon_stavrotheotokion: p2('Upon beholding Him Who was born of thee * hanging upon the Tree, O all-immaculate one, * thou didst exclaim, crying aloud: * “O my Child most desired, * whither hath the luminous beauty of Thee faded, ** Thou Who hast adorned the human race?”',
        'p2 Stavrotheotokion', { type: 'stavrotheotokion', sourceLabel: 'Stavrotheotokion', label_inline: true }),

      entrance_rubric: p1('The Entrance. The Prokeimenon of the day. The Three Lessons, if appointed:', 'p2 Entrance'),
      // Same three-lesson SET as Martyr.pdf (Isaiah + two from Wisdom), but not
      // the same third lesson: Martyr prints Wisdom 4:7, this file Wisdom 5:15.
      // The set is a per-file fact; so are the headings, all three of which are
      // worded differently here than in Martyr.
      readings: [
        { heading: 'THE READING IS FROM ISAIAH', src: { file: P1, locus: 'p2 Lesson 1' },
          citation: { book: 'Isaiah', chapter: 43, verses: '9-14' },
          citation_basis: 'identified',
          note: 'Same passage and same refusal as Martyr.pdf: the Menaion prints a KJV-style rendering where public/bible carries Brenton LXX, so corpus derivation refuses and the citation is human-identified, not verified.',
          provenance_note: 'The body here prints “Ye are my witnesses” and “that I am he” PLAIN, where Martyr.pdf prints “Ye (are)”, “I (am)”, and a stray “was)”. A body-level divergence between two files, recorded here because R-4 stores no reading text for a recurrence row to compare.' },
        { heading: 'THE READING IS FROM THE WISDOM OF SOLOMON', src: { file: P1, locus: 'p2 Lesson 2' },
          citation: { book: 'Wisdom of Solomon', chapter: 3, verses: '3:1-3:9' },
          citation_basis: 'derived' },
        { heading: 'THE READING IS FROM FROM THE WISDOM OF SOLOMON', src: { file: P1, locus: 'p3 Lesson 3' },
          citation: { book: 'Wisdom of Solomon', chapter: 5, verses: '5:15-6:3' },
          citation_basis: 'derived',
          provenance_note: 'SIC in the HEADING — “FROM FROM”. Registered. And the body opens “The righteous live unto the ages” where Monastic/Monastics print “The righteous live for evermore”: same Wisdom 5:15 pericope, two renderings, again unregistrable as a recurrence pair because no reading text is stored.' },
      ],

      aposticha_rubric: p1('On the Aposticha, the Stichera, in Tone IV:', 'p3 Aposticha rubric'),
      aposticha: [
        p2('O all-famed Martyrs, * resplendent as stars * ye illumine with divine effulgence * all the ends of the earth, * delivering all from the gloom of the demons, * and from pernicious passions and misfortunes; * wherefore gathered together today * we praise your bright, and radiant, ** and holy commemoration.',
           'p3 Aposticha 1', { spec_mel: 'As one valiant among the martyrs ...', label: 'plain', tone: 4 }),
        p2('The righteous cried, and the Lord heard them, * and He delivered them out of all their tribulations.',
           'p3 Aposticha verse 1', { label: 'refrain', sourceLabel: 'Verse', label_inline: true }),
        p2('Let the wondrous, divine and most wise Martyrs * be honored with sacred odes; * for with the spilling of their blood * they have rightly confessed * the uncreated Trinity * before their enemies, * thereby extinguishing the falsehood of paganism ** and thus received never fading glory.',
           'p3 Aposticha 2', { spec_mel: 'As one valiant among the martyrs ...', label: 'plain' }),
        p2('Many are the tribulations of the righteous, * and the Lord shall deliver them out of them all.',
           'p4 Aposticha verse 2', { label: 'refrain', sourceLabel: 'Verse', label_inline: true }),
        p2('The lawless tyrant, unlawfully commanded you, * O blessed and greatly renowned martyrs, * to bow down before, and worship, * the dumb and soulless idols, * but with your wisdom, ye have put him to shame * and having patiently suffered, * ye have lawfully weaved for yourselves * crowns of victory, ** and now ceaselessly intercede for the whole world.',
           'p4 Aposticha 3', { spec_mel: 'As one valiant among the martyrs ...', label: 'plain' }),
      ],
      aposticha_glory: p2('O come, all ye who adore the martyrs, * let us now celebrate in spirit * the most sacred commemoration of the godly-crowned company of martyrs, * For they are an unblemished fervent offering presented to Christ, * the divinely selected army, * let us cry out to them: * By your intercessions subdue the fury of the godless Hagarenes * and deliver the faithful ** from every affliction of the enemy.',
        'p4 Aposticha Glory', { sourceLabel: 'Glory ..., in Tone VI', tone: 6 }),

      aposticha_closer_rubric: p1('If the Celebration be with a Polyeleos, chant the Resurrection Theotokion:', 'p4 Aposticha Both-now rubric'),
      aposticha_closer: p2('Christ the Lord, my Creator and Redeemer, * Who came forth from thy womb, O most pure one, * and clothed Himself in my nature, * hath freed Adam from the primal curse. * Wherefore, like the angel * we unceasingly cry out to thee, O most pure one, * who art truly the Mother of God and Virgin: * Rejoice!, O Sovereign Lady, ** the intercession, protection and salvation for our souls!',
        'p4 Aposticha Both now', { type: 'theotokion', sourceLabel: 'Both now ..., Theotokion, in Tone VI', tone: 6 }),
      aposticha_alternate: p2('We have come to know God * Who was incarnate of thee, * O Virgin Theotokos. ** Him do thou entreat for the salvation of our souls.',
        'p4 Aposticha Otherwise', { type: 'theotokion', sourceLabel: 'Otherwise, Theotokion', label_inline: true }),
      aposticha_stavrotheotokion: p2('Seeing Thee nailed to the Tree, * the most pure one cried aloud * “O my Son and God, * what is this exceedingly glorious and strange report of Thee, * that Thou dost endure ** in Thy great mercy?”',
        'p4 Aposticha Stavrotheotokion', { type: 'stavrotheotokion', sourceLabel: 'Stavrotheotokion', label_inline: true }),

      // "if there be none" — Martyr.pdf prints "but if there be none" at the
      // same rubric. Verbatim per file.
      troparion_rubric: p1('The Troparion from the Typicon; if there be none, chant the following:', 'p4 Troparion rubric'),
      closer: { absent: true, reason: 'not_printed_in_source', basis: 'close_reading',
        note: 'Printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8).' },
      closing_rubric: p1('The Dismissal:', 'p4 Dismissal'),
    },

    matins: {
      order: [
        'god_is_lord_rubric', 'troparion', 'troparion_closer',
        'sessional_1_rubric', 'sessional_1', 'sessional_1_closer',
        'sessional_2_rubric', 'sessional_2', 'sessional_2_closer',
        'megalynarion_rubric', 'megalynarion', 'megalynarion_verse',
        'sessional_polyeleos_rubric', 'sessional_polyeleos', 'sessional_polyeleos_closer',
        'anabathmoi_rubric', 'anabathmoi_intro', 'anabathmoi', 'anabathmoi_closer',
        'prokeimenon_rubric', 'prokeimenon', 'prokeimenon_verse',
        'prokeimenon_alt_rubric', 'prokeimenon_alt_label', 'prokeimenon_alt', 'prokeimenon_alt_verse',
        'gospel_rubric', 'gospel',
        'psalm50_rubric', 'psalm50_sticheron', 'psalm50_closer', 'psalm50_verse',
        'sessional_post50_rubric', 'sessional_post50',
        'canon_rubric', 'canons',
        'sessional_ode3_rubric', 'sessional_ode3', 'sessional_ode3_closer', 'sessional_ode3_stavrotheotokion',
        'kontakion_rubric', 'kontakion', 'ikos',
        'exapostilarion_rubric', 'exapostilarion', 'exapostilarion_closer',
        'praises_rubric', 'praises', 'praises_glory', 'praises_closer', 'praises_stavrotheotokion',
        'doxology_rubric', 'great_doxology_rubric', 'doxology_glory', 'doxology_closer',
        'troparion_rubric', 'troparion', 'closer', 'closing_rubric',
      ],

      god_is_lord_rubric: p1('On “God is the Lord ...,” the same Troparion, in Tone I:', 'p5 God is the Lord'),
      troparion_closer: { absent: true, reason: 'not_printed_in_source', basis: 'close_reading',
        note: 'Printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8).' },

      sessional_1_rubric: p1('After the 1st chanting of the Psalter, the Sessional Hymn, in Tone IV:', 'p5 Sessional 1 rubric'),
      sessional_1: p2('O divine Martyrs, * warriors of Christ, * brightest stars of the noetic firmament, * ever illumine the honored Church, * and enlighten the faithful.',
        'p5 Sessional 1', { spec_mel: 'Thou hast appeared ...', tone: 4, repeat: 2 }),
      sessional_1_closer: p2('Accepting the entreaty of us * who have recourse to thy protection, O all-pure Virgin, * cease thou never to make supplication to Him * Who is the Lover of mankind, ** that He save thy servants.',
        'p5 Sessional 1 Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion, in Tone IV', tone: 4 }),

      sessional_2_rubric: p1('After the 2nd chanting of the Psalter, the Sessional Hymn, in Tone IV:', 'p5 Sessional 2 rubric'),
      sessional_2: p2('O wondrous spiritual athletes * ye passed through fire and water, * manfully enduring your martyrdom, * and thus passed over unto salvation * inheriting the Kingdom of heaven; * wherefore O wise great-martyrs * we beseech you to make supplications ** unto the Divinity on our behalf.',
        'p5 Sessional 2', { spec_mel: 'Having been lifted up ...', tone: 4, repeat: 2 }),
      sessional_2_closer: p2('O Theotokos and Sovereign Lady, * we thy servants, thankfully chanting from our hearts * and earnestly entreating thy mercies, cry out, saying: * O most holy Virgin, go thou before us * and deliver us from our enemies, visible and invisible, ** and from every threat, for thou art our aid.',
        'p5 Sessional 2 Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion, in Tone IV', tone: 4 }),

      megalynarion_rubric: p1('After the Polyeleos, the Megalynarion:', 'p5 Megalynarion rubric'),
      megalynarion: p1('We magnify you, O holy Martyrs, and honor your precious sufferings which ye have endured for Christ.',
        'p5 Megalynarion', { label_inline: true }),
      megalynarion_verse: p1('Our God is our refuge and strength, a helper in afflictions which mightily befall us.',
        'p5 Megalynarion verse', { sourceLabel: 'Verse', label_inline: true }),

      sessional_polyeleos_rubric: p1('After the Polyeleos, the Sessional Hymn, in Tone VIII:', 'p5 Polyeleos sessional rubric'),
      sessional_polyeleos: p2('O holy ones, ye were bound by enemies, * who imprisoned you in dungeons, * where ye endured the rending of your bodies by sword, * yet bound by a goodly desire ye were preserved by faith, * remaining unharmed. * Wherefore O blessed martyrs ye shine forth upon the world, * illumining all by the grace of the Holy Spirit; * we therefore pray unto you, to entreat Christ God * that those who with love celebrate your holy commemoration, ** be granted the remission of their sins.',
        'p5 Polyeleos sessional', { tone: 8, repeat: 2 }),
      sessional_polyeleos_closer: p2('All we, the generations of mankind, * call thee blessed, * in that thou art the Virgin who alone among women * hast given birth without seed unto God in the flesh; * for the fire of the Godhead made its abode within thee, * and thou didst feed the Creator and Lord * with milk as an infant. * Wherefore, we, the race of mankind and of angels, * worthily glorify thine all-holy birthgiving, * and together we cry out to thee: * Entreat Christ God to grant forgiveness of sins ** unto those who with faith worship thine all-holy Offspring.',
        'p6 Polyeleos sessional Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion in Tone VIII', tone: 8 }),

      anabathmoi_rubric: p1('If of Polyeleos rank, and not a Resurrection Service, chant the following:', 'p6 Anabathmoi condition'),
      anabathmoi_intro: p1('The Song of Ascents: The first antiphon, in Tone IV:', 'p6 Anabathmoi rubric'),
      anabathmoi: [
        p2('From my youth * do many passions war against me; * but do Thou Thyself defend ** and save me, O my Savior.', 'p6 Anabathmoi 1', { tone: 4 }),
        p2('Ye haters of Zion * shall be shamed by the Lord; * for like grass, by the fire ** shall ye be withered.', 'p6 Anabathmoi 2'),
      ],
      anabathmoi_closer: p2('In the Holy Spirit, * every soul is quickened, * and, through cleansing, is exalted ** and made radiant by the Triple Unity in a hidden sacred manner.',
        'p6 Anabathmoi Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ...,' }),

      prokeimenon_rubric: p1('Prokeimenon, in Tone IV:', 'p6 Prokeimenon rubric'),
      prokeimenon: p2('The righteous cried, * and the Lord heard them.',
        'p6 Prokeimenon', { sourceLabel: 'The Prokeimenon', label_inline: true, tone: 4 }),
      prokeimenon_verse: p1('Many are the tribulations of the righteous, and the Lord shall deliver them out of them all.',
        'p6 Prokeimenon verse', { sourceLabel: 'Verse', label_inline: true }),

      // NEW SHAPE, and the source's own: a SECOND prokeimenon, printed in full
      // and governed by a printed condition naming one specific commemoration.
      // Not a variant of the first and not a closer — a conditional alternative,
      // which nothing in the template had yet had to express. The condition is
      // stored as a rubric, per §2.7, and the assembler decides; the gate does
      // not adjudicate which one is sung (§9).
      prokeimenon_alt_rubric: p1('If it be the Forty Martyrs, this Prokeimenon should be sung:', 'p6 Alt prokeimenon condition'),
      prokeimenon_alt_label: p1('Prokeimenon, in Tone IV:', 'p6 Alt prokeimenon rubric'),
      prokeimenon_alt: p2('We went through fire and through water, * and Thou didst bring us out into refreshment.',
        'p6 Alt prokeimenon', { sourceLabel: 'The Prokeimenon', label_inline: true, tone: 4 }),
      prokeimenon_alt_verse: p1('Thou hast proved us, O God, even as silver is tried by fire.',
        'p6 Alt prokeimenon verse', { sourceLabel: 'Verse', label_inline: true }),

      gospel_rubric: p1('Let every breath.', 'p6 Let every breath'),
      gospel: { heading: 'THE GOSPEL ACCORDING TO ST. LUKE (21: 12-19)', src: { file: P1, locus: 'p6 Matins Gospel' },
        citation_verbatim: '(21: 12-19)', citation: { book: 'Luke', chapter: 21, verses: '12-19' } },

      psalm50_rubric: p1('After the 50th Psalm:', 'p6 Psalm 50 rubric'),
      psalm50_sticheron: p2('Through the prayers of the Holy Martyrs, * O Merciful One, ** blot out the multitude of our transgressions.',
        'p7 Psalm 50 sticheron', { sourceLabel: 'Glory ..., in Tone VI', tone: 6 }),
      psalm50_closer: p2('Through the prayers of the Theotokos, * O Merciful One, ** blot out the multitude of our transgressions.',
        'p7 Psalm 50 Both now', { type: 'theotokion', sourceLabel: 'Both now ...,' }),
      psalm50_verse: p2('Have mercy on me, O God, * according to Thy great mercy; * and according to the multitude of Thy compassions, ** blot out my transgressions.',
        'p7 Psalm 50 verse'),

      sessional_post50_rubric: p1('Then the Sessional Hymn, in Tone II:', 'p7 post-50 sessional rubric'),
      sessional_post50: p2('O come ye who love the feasts, * let us rejoice celebrating the memory * of the spiritual athletes of Christ, * For they were given over to death * refusing to offer sacrifice to the falsehood of Idolatry, * but manifestly confessed Christ before the tribunal. * Wherefore, O all-blessed and much suffering martyrs, ** cease not to pray for our souls.',
        'p7 post-50 sessional', { tone: 2 }),

      canon_rubric: p1('The Canon, in Tone V:', 'p7 Canon rubric'),
      canons: [{
        tone: 5,
        odes: {
          1: { irmos: p2('Unto God the Savior Who made His people pass dryshod through the sea, * but drowned Pharaoh with all his host, * unto Him let us sing: * For He alone is glorified.', 'p7 Ode I irmos', { sourceLabel: 'Irmos', label_inline: true }),
               // The one placeholder in this file, and it is PLURAL.
               refrain: p1('Holy Martyrs (names) pray to God for us', 'p7 Ode I refrain', { sourceLabel: 'Refrain', label_inline: true }),
               items: [
                 p1('Let us, the faithful, in a divinely-wise manner hymn the spiritual athletes, warriors of Christ and splendid vanquishers of falsehood, chanting unto God the song of victory: For He alone is glorified.', 'p7 Ode I 1', { label: 'plain' }),
                 p1('O sufferers, you splendidly struggled on earth, enduring torments, receiving crowns in the heavens, where ye with one voice chant unto God the song of victory: For He alone is glorified.', 'p7 Ode I 2', { label: 'plain' }),
                 p1('United together in soul, ye turned away from error and now appear unto all as crown-bearing vanquishers of falsehood, with one voice chanting unto God the song of victory: For He alone is glorified.', 'p7 Ode I 3', { label: 'plain' }),
                 p1('O most pure Mother of God! unceasingly entreat God Who became incarnate from thee, while having never left the bosom of the Father, to save from every attack of the enemy those whom He hath created.', 'p7 Ode I Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
          3: { irmos: p2('By the power of Thy Cross, O Christ, * strengthen my mind * that I may hymn and glorify Thee * and Thy salvific ascension.', 'p7 Ode III irmos', { sourceLabel: 'Irmos', label_inline: true }),
               items: [
                 p1('O ye warriors, adorned with the knowledge of Christ, ye have drowned the wicked enemy in the streams of your blood.', 'p8 Ode III 1', { label: 'plain' }),
                 p1('O praiseworthy Martyrs, having given your bodies over unto bitter and cruel tortures, ye have received the divine inheritance through faith.', 'p8 Ode III 2', { label: 'plain' }),
                 p1('O great sufferers, at the command of the tyrant ye were crushed with a shower of stones, while unflinchingly preserving your Orthodoxy.', 'p8 Ode III 3', { label: 'plain' }),
                 p1('We beseech thee O pure one! pray without ceasing, together with the martyrs, unto Him Who came forth from thy womb, that those who hymn thee O all-immaculate one, be delivered from the deceptions of the evil one.', 'p8 Ode III Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
          4: { irmos: p2('I heard the rumor of the power of the Cross * that paradise is opened thereby * and I cried out aloud saying: * Glory to Thy power, * O Lord.', 'p8 Ode IV irmos', { sourceLabel: 'Irmos', label_inline: true }),
               items: [
                 p1('Sustained by their god-pleasing customs and strengthened by the grace of the Savior, the choir of sufferers vanquished the God-hating enemy.', 'p8 Ode IV 1', { label: 'plain' }),
                 p1('The godly-called company of martyrs of Christ vanquished multitudes of impious enemies of God, hymning; Glory to Thy power, O Lord.', 'p8 Ode IV 2', { label: 'plain' }),
                 p1('While in prison the Martyrs, perceiving the Light unapproachable, and being strengthened by the power of God, destroyed the polytheistic darkness and deceit of the idols.', 'p8 Ode IV 3', { label: 'plain' }),
                 p1('The power of the Highest overshadowed thee, O Virgin, and rendered thee a paradise, in the midst of which was found the Tree of life, the Mediator and Lord.', 'p8 Ode IV Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
          5: { irmos: p2('Rising early we cry unto Thee: * Save us O Lord, * for Thou art our God, * beside Thee we know none other.', 'p9 Ode V irmos', { sourceLabel: 'Irmos', label_inline: true }),
               items: [
                 p1('With words taught by the Holy Spirit, the martyrs abolished the foolishness of idolatry.', 'p9 Ode V 1', { label: 'plain' }),
                 p1('The spiritual athletes are like radiant stars and flowers of the faith, emitting sweet fragrances.', 'p9 Ode V 2', { label: 'plain' }),
                 p1('O holy and all-praised Ones, ye have appeared unto us likened to fields of corn, harvested with the sickles of your tortures.', 'p9 Ode V 3', { label: 'plain' }),
                 p1('Cease not, O Theotokos, to make supplication unto Him Whom thou didst bear, that the souls of those who fervently hymn thee be saved.', 'p9 Ode V Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
          6: { irmos: p2('An Abyss hath consumed me, and a whale hath become my grave, * but I called out unto Thee, * O Lover of mankind, * and Thy right hand hath saved me.', 'p9 Ode VI irmos', { sourceLabel: 'Irmos', label_inline: true }),
               items: [
                 p1('Rejoicing the Martyrs cried aloud: “O Master, Lover of mankind, into Thy hands, take our spirits and grant them rest, for we love Thee, Who alone art plenteous in mercy.', 'p9 Ode VI 1', { label: 'plain',
                    provenance_note: 'SIC — the opened quotation mark is never closed. The same text prints identically at the Beatitudes (p13), unclosed there too.' }),
                 p1('The choirs of Thy Martyrs, O Lover of mankind, have become companions with the Angels, for now, having finished their course, they pray that our souls be saved.', 'p9 Ode VI 2', { label: 'plain' }),
                 p1('O company of sufferers, chosen of God, the glory and beauty of the Martyrs! tirelessly entreat the Lord that all those who flee unto you be saved.', 'p9 Ode VI 3', { label: 'plain' }),
                 p1('What words can express the marvel of thy seedless conception, O most immaculate one? For thou didst conceive God in the flesh, who mercifully came down to us.', 'p9 Ode VI Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
          7: { irmos: p2('Unto Him Who saved * the chanting youths * in the burning furnace, we sing: * “Blessed art Thou * O God of our Fathers.”', 'p10 Ode VII irmos', { sourceLabel: 'Irmos', label_inline: true }),
               items: [
                 p1('In the furnace Thy Martyrs, O Christ, called out: “O God of our fathers, Blessed art Thou.”', 'p10 Ode VII 1', { label: 'plain' }),
                 p1('Enlightened with the Triune Light, the Martyrs joyfully gave up their souls, singing: “O God of our fathers, Blessed art Thou.”', 'p10 Ode VII 2', { label: 'plain' }),
                 p1('Standing before God and rejoicing, O ye crown-bearing Martyrs, we beseech you to make supplication unto Him for us.', 'p10 Ode VII 3', { label: 'plain' }),
                 p1('As thou art our salvation we implore thee, O Theotokos , to pray for us to Him Who was incarnate from thee.', 'p10 Ode VII Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true,
                    provenance_note: 'SIC — a space precedes the comma after “O Theotokos”. As printed.' }),
               ] },
          8: { irmos: p2('The Son of God who before all ages * wast born of the Father * hath in these last times * become incarnate of the Virgin-Mother, * O ye priests hymn, * and ye peoples supremely exalt Him throughout all ages.', 'p10 Ode VIII irmos', { sourceLabel: 'Irmos', label_inline: true }),
               items: [
                 p1('O ye faithful, let our prayer unite with the Martyrs, and we shall be participators in their legacy, hymning Christ and supremely exalting Him throughout the ages.', 'p10 Ode VIII 1', { label: 'plain' }),
                 p1('In a Godly manner and with heartfelt joy the choir of the patient sufferers received their crowns from Christ and joyfully hymn and supremely exalt Him throughout the ages.', 'p10 Ode VIII 2', { label: 'plain' }),
                 p1('O ye praiseworthy Martyrs, dyed red with the streams of your blood, you reign with Christ in the heavens for ever, reverently hymning and supremely exalting Him throughout the ages.', 'p10 Ode VIII 3', { label: 'plain' }),
                 p1('O pure Theotokos, thou hast been revealed to be higher than the Cherubim, having carried in thy womb Him Who is seated thereupon; Him we below together with the bodiless Ones on high magnify and supremely exalt throughout the ages.', 'p10 Ode VIII Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
          9: { irmos: p2('O Thou who art God’s Mother transcending mind and word, * who ineffably in time * hast given birth unto the Timeless One, * Thee do we the faithful magnify with one accord.', 'p10 Ode IX irmos', { sourceLabel: 'Irmos', label_inline: true }),
               items: [
                 p1('Standing before Christ O most glorious Martyrs, for Whose sake ye have endured tortures, pray for the salvation of us all.', 'p10 Ode IX 1', { label: 'plain' }),
                 p1('O invincible ones, with your powerful arm, ye have put down the strongholds of falsehood, and been deemed worthy to dwell with Angels in the habitations of heaven.', 'p11 Ode IX 2', { label: 'plain' }),
                 p1('O Martyrs you lawfully obtained victory over the proud tyrant and thereby received the crowns of the righteous, O all-honored ones.', 'p11 Ode IX 3', { label: 'plain' }),
                 p1('Rejoice! O Theotokos, and Mother of Christ our God, Whom thou didst bear. We beseech thee to entreat Him that those who with faith hymn thee be granted the remission of their sins.', 'p11 Ode IX Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
        },
      }],

      sessional_ode3_rubric: p1('The Sessional Hymn, in Tone IV:', 'p8 Ode III sessional rubric'),
      sessional_ode3: p2('O valiant warriors of Christ, * having fought the good fight, * ye utterly drowned the cunning enemy * in the streams of your blood; * for being broken with stones and rent asunder with swords, * burnt in the fire and thrown into water, * ye have been revealed to be glorious crown-bearers; ** wherefore with faith we honor and glorify you.',
        'p8 Ode III sessional', { spec_mel: 'Having been lifted up ...', tone: 4 }),
      sessional_ode3_closer: p2('O Virgin Mother of God, * Sovereign Lady * we thy servants with gratitude fervently hymn thee, * ever entreating thee for mercy, * and crying unto thee: * “O most holy Virgin, * deliver us from enemies visible and invisible * and from every threat of the adversary, ** for thou art our intercessor.”',
        'p8 Ode III sessional Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion, in Tone IV', tone: 4 }),
      sessional_ode3_stavrotheotokion: p1('The Virgin and ewe-lamb, beholding on the Cross the Lamb Who was born of her without seed, His side pierced by a spear, was wounded and with grief and cried aloud, exclaiming amid her pain: “What is this new mystery? How is it that Thou diest Who alone art Lord of life? Wherefore, arise, raising up our fallen forefather!”',
        'p8 Ode III sessional Stavrotheotokion', { type: 'stavrotheotokion', sourceLabel: 'Stavrotheotokion', label_inline: true,
          provenance_note: 'SIC — “was wounded and with grief and cried aloud”: a doubled “and”. As printed.' }),

      kontakion_rubric: p1('The Kontakion from the Typicon; but if there be none, chant the following:', 'p9 Kontakion rubric'),

      exapostilarion_rubric: p1('Exapostilarion in Tone III:', 'p11 Exapostilarion rubric'),
      exapostilarion: p2('O passion-bearers you have been taken up * into the radiant habitations of paradise, * and vested therein in bright garments * woven by your multifarious tortures, * ye now stand before the throne of the Creator of all, * unceasingly making entreaty for us all.',
        'p11 Exapostilarion', { tone: 3 }),
      exapostilarion_closer: p2('By thy mighty protection, O pure one, * preserve all of us, thy servants unharmed, * by the attacks of enemies; ** for thee alone do we have as our refuge in times of need.',
        'p11 Exapostilarion Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion in Tone III', tone: 3 }),

      praises_rubric: p1('On the Praises, these Stichera, in Tone VIII:', 'p11 Praises rubric'),
      praises: [
        p2('O all-famed martyrs of Christ! * Having counted as of no account, * a violent death * and the haughty boldness of the persecutors, * ye boldly prepared yourselves for the wise and valiant struggle, * wherefore ye have been deemed worthy * of the glory of victors * and numbered among the righteous; ** along with them, we ever praise and bless you.',
           'p11 Praises 1', { spec_mel: 'O most glorious wonder ...', label: 'plain', tone: 8, repeat: 2 }),
        p2('O most blessed martyrs of Christ! * Ye have given yourselves * over to a voluntary death, * and thus sanctified the earth * with your blood * and sanctified the air with your repose; * and now that ye dwell in the heavens, * in the never-waning light, ** ever pray on our behalf, O seers of God.',
           'p11 Praises 2', { spec_mel: 'O most glorious wonder ...', label: 'plain' }),
        p2('O invincible martyrs of Christ! * ye have endured the red heat of tortures, * but by the bedewing of divine grace * ye remained unharmed * and having received crowns of victory, * ye were deemed worthy to dwell * beside the still waters of rest; * wherefore today we joyfully celebrate your holy memory, ** glorifying Christ.',
           'p11 Praises 3', { spec_mel: 'O most glorious wonder ...', label: 'plain' }),
      ],
      praises_glory: p2('Engaging in battle for Christ, * Whom ye have followed and for Whose sake ye have forsaken the delights of earthly life, * and taking the Cross upon your shoulders, * ye endured many and various tortures, * never denying Him before the multitude of tyrannical rulers; * Wherefore the Angels have adorned you with plaited crowns of victory * and your souls have boldly and joyfully entered into the heavenly abodes. * Since ye possess great boldness, * we beseech you to entreat the Savior of all ** for our souls.',
        'p11 Praises Glory', { sourceLabel: 'Glory ..., in Tone VIII', tone: 8 }),
      praises_closer: p2('Taking up the cry of the Archangel Gabriel, let us say: * Rejoice, O Mother of God, * who hast given birth unto Christ, ** the bestower of life upon the world!',
        'p12 Praises Both now', { type: 'theotokion', sourceLabel: 'Both now ..., Theotokion, in Tone VIII', tone: 8 }),
      praises_stavrotheotokion: p2('O Lord, when the sun beheld Thee, * who art the Sun of righteousness, * hanging upon the tree of the cross, it hid its rays, * transforming light into darkness, * and the moon did likewise, * while Thy Mother the all-immaculate Virgin, ** was sorely wounded in the depths of her soul.',
        'p12 Praises Stavrotheotokion', { type: 'stavrotheotokion', sourceLabel: 'Stavrotheotokion', label_inline: true }),

      // TWO rubrics, printed one after the other. Martyr.pdf prints only the
      // second. Both stored; neither folded into the other.
      doxology_rubric: p1('The Doxology:', 'p12 Doxology'),
      great_doxology_rubric: p1('The great Doxology: If a small Doxology is read the following is chanted after the Aposticha:', 'p12 great Doxology rubric'),
      doxology_glory: p2('O come, all ye who adore the martyrs, * let us now celebrate in spirit * the most sacred commemoration of the godly-crowned company of martyrs, * For they are an unblemished fervent offering presented to Christ, * the divinely selected army, * let us cry out to them: * By your intercessions subdue the fury of the godless Hagarenes * and deliver the faithful ** from every affliction of the enemy.',
        'p12 Doxology Glory', { sourceLabel: 'Glory ..., in Tone VI', tone: 6 }),
      // Martyr prints only the conditional label here; this file prints the text.
      doxology_closer: p2('We have come to know God * Who was incarnate of thee, * O Virgin Theotokos. ** Him do thou entreat for the salvation of our souls.',
        'p12 Doxology Both now', { type: 'theotokion', sourceLabel: 'Both now ..., in Tone VI: Theotokion', tone: 6 }),

      troparion_rubric: p1('After Our Father ..., the Troparion, in Tone I:', 'p12 Troparion rubric'),
      closer: { absent: true, reason: 'not_printed_in_source', basis: 'close_reading',
        note: 'Printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8).' },
      closing_rubric: p1('The Dismissal:', 'p12 Dismissal'),
    },

    liturgy: {
      order: ['beatitudes_rubric', 'beatitudes', 'propers_rubric', 'troparion', 'kontakion',
              'prokeimenon_rubric', 'prokeimenon', 'prokeimenon_verse', 'epistle',
              'alleluia', 'alleluia_verse', 'gospel', 'communion_verse'],

      beatitudes_rubric: p1('Typika and Beatitudes.', 'p13 Typika and Beatitudes'),
      // Byte-identical to the canon troparia at all seven positions (Ode III
      // 1-3, Ode VI 1-3 and its Theotokion). Stored per position anyway; the
      // seven pairs are `identical` rows in known_recurrences.js.
      beatitudes: [
        p1('O ye warriors, adorned with the knowledge of Christ, ye have drowned the wicked enemy in the streams of your blood.', 'p13 Beatitude 1', { label: 'plain' }),
        p1('O praiseworthy Martyrs, having given your bodies over unto bitter and cruel tortures, ye have received the divine inheritance through faith.', 'p13 Beatitude 2', { label: 'plain' }),
        p1('O great sufferers, at the command of the tyrant ye were crushed with a shower of stones, while unflinchingly preserving your Orthodoxy.', 'p13 Beatitude 3', { label: 'plain' }),
        p1('Rejoicing the Martyrs cried aloud: “O Master, Lover of mankind, into Thy hands, take our spirits and grant them rest, for we love Thee, Who alone art plenteous in mercy.', 'p13 Beatitude 4', { label: 'plain',
           provenance_note: 'SIC — unclosed quotation mark, exactly as at the Ode VI print site.' }),
        p1('The choirs of Thy Martyrs, O Lover of mankind, have become companions with the Angels, for now, having finished their course, they pray that our souls be saved.', 'p13 Beatitude 5', { label: 'plain' }),
        p1('O company of sufferers, chosen of God, the glory and beauty of the Martyrs! tirelessly entreat the Lord that all those who flee unto you be saved.', 'p13 Beatitude 6', { label: 'plain' }),
        p1('What words can express the marvel of thy seedless conception, O most immaculate one? For thou didst conceive God in the flesh, who mercifully came down to us.', 'p13 Beatitude Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
      ],
      propers_rubric: p1('The Troparion and the Kontakion from the Typicon; but if there be none, chant the following:', 'p13 Propers rubric'),

      prokeimenon_rubric: p1('Prokeimenon in Tone IV:', 'p13 Prokeimenon rubric'),
      prokeimenon: p2('In the saints who are in His earth, hath the Lord been wondrous, * He hath wrought all His desires in them.',
        'p13 Prokeimenon', { sourceLabel: 'Prokeimenon', label_inline: true, tone: 4 }),
      prokeimenon_verse: p1('I beheld the Lord ever before me, for He is at my right hand, that I might not be shaken.',
        'p13 Prokeimenon verse', { sourceLabel: 'Verse', label_inline: true }),
      epistle: { heading: 'THE EPISTLE TO THE ROMANS (8:28-39)', src: { file: P1, locus: 'p13 Epistle' },
        citation_verbatim: '(8:28-39)', citation: { book: 'Romans', chapter: 8, verses: '28-39' } },
      alleluia: p1('The righteous cried, and the Lord heard them, and He delivered them out of all their tribulations.',
        'p14 Alleluia', { sourceLabel: 'Alleluia, in Tone IV', label_inline: true, tone: 4 }),
      alleluia_verse: p1('Many are the tribulations of the righteous, and the Lord shall deliver them out of them all.',
        'p14 Alleluia verse', { sourceLabel: 'Verse', label_inline: true }),
      gospel: { heading: 'THE GOSPEL ACCORDING TO ST. MATTHEW (10:16-22)', src: { file: P1, locus: 'p14 Gospel' },
        citation_verbatim: '(10:16-22)', citation: { book: 'Matthew', chapter: 10, verses: '16-22' } },
      communion_verse: p1('Rejoice in the Lord, O ye Righteous; praise is meet for the upright.',
        'p14 Communion verse', { sourceLabel: 'Communion Verse', label_inline: true }),
    },
  },

  Martyr: {
    title: m1('THE GENERAL VIGIL SERVICE TO ONE MARTYR.', 'p1 title'),

    // ONE field, tone recorded PER SITE (Bill's ruling). The text is identical
    // at both print sites; the DECLARED TONE is not — III at Matins, IV at
    // Liturgy. Keeping one field stays true to the text; recording tone per site
    // keeps both readings. A top-level `tone` is forbidden here by the gate.
    troparion: m2('In his sufferings, Thy martyr (name) O Lord, * received an imperishable crown from Thee, our God; * for, possessed of Thy might, * he set at naught the tyrants and crushed the feeble audacity of the demons. ** By his supplications save Thou our souls.',
      'p13 Troparion', { sourceLabel: 'Troparion of the martyr',
        // FOUR print sites, not two. The Vespers (p4) and God-is-the-Lord (p5)
        // sites were missed when this file's Vespers was left half-encoded;
        // all four texts are byte-identical, the declared tone is IV at three
        // of them and III at the fourth.
        verified_sites: [{ locus: 'p4 Vespers troparion', tone: 4 }, { locus: 'p5 God is the Lord', tone: 4 },
                         { locus: 'p13 after the Doxology', tone: 3 }, { locus: 'p14 AT THE LITURGY', tone: 4 }] }),

    kontakion: m2('Thou hast been manifest by thy splendor * as a bright star announcing Christ, * to the temporal world, O Martyr (name); * vanquishing the allurement of false gods, * thou hast granted the faithful true light, * ever interceding ** on behalf of us all.',
      'p10 Kontakion of the martyr', { sourceLabel: 'Kontakion of the martyr, in Tone II', spec_mel: 'Seeking the highest ...',
        verified_sites: [{ locus: 'p10 after Ode VI', tone: 2 }, { locus: 'p14 AT THE LITURGY', tone: 2 }] }),

    vespers: {
      order: [
        'lic_rubric', 'lic', 'lic_closer', 'lic_stavrotheotokion',
        'idiomelon_rubric', 'lic_glory',
        'dogmatikon_rubric', 'dogmatikon', 'dogmatikon_alternate', 'dogmatikon_stavrotheotokion',
        'entrance_rubric', 'readings',
        'aposticha_rubric', 'aposticha', 'aposticha_glory',
        'aposticha_closer_rubric', 'aposticha_closer', 'aposticha_alternate', 'aposticha_stavrotheotokion',
        'troparion_rubric', 'troparion', 'closer', 'closing_rubric',
      ],

      lic_rubric: m1('On “Lord, I have cried ...,” the Stichera, in Tone I:', 'p1 LIC rubric'),
      lic: [
        m2('O most blessed one, * comprehending with an upright and honorable heart * the uncircumscribable God, * and undeniably believing in Him; * thou hast faithfully followed * His ineffable and saving commandments, * O most wise one, * and patiently enduring sufferings, ** attained unto the eternal Kingdom.',
           'p1 LIC 1', { spec_mel: 'O all-praised Martyrs ...', label: 'plain', tone: 1 }),
        m2('With thine honored blood * consecrating the earth * and abolishing the defiled blood-sacrifice * offered lawlessly unto demons, * O all-honored one, * thou didst receive an incorruptible crown upon thy brow. * Wherefore do thou intercede for us * that our souls be granted peace ** and great mercy.',
           'p1 LIC 2', { spec_mel: 'O all-praised Martyrs ...', label: 'plain' }),
        m2('O all-honored Martyr (name), * Glorifying thy sacred struggles and exploits * we are also consecrated, * for by them thou hast become an associate of angels * and a companion of all the martyrs; * wherefore we beseech thee to pray, * together with them, * that our souls be granted ** peace and great mercy.',
           'p1 LIC 3', { spec_mel: 'O all-praised Martyrs ...', label: 'plain' }),
      ],
      lic_closer: m2('Woe unto me the sinful one! * What shall become of me whose mind, soul, and body * are defiled by transgressions? * What must I do to escape the insufferable flames, * the unbreakable and eternal chains? * O all-immaculate one, * entreat thy Son before my end ** to grant me the remission of sins.',
        'p1 LIC Glory/Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion in Tone I', tone: 1 }),
      lic_stavrotheotokion: m2('The Sovereign Lady, the unblemished ewe-lamb, * beholding her Lamb upon the Cross, * bereft of form and comeliness, * lamenting, said: “Woe is me! * Whither hath Thy comeliness gone, O most Sweet One? * Where is Thy splendor? Where is the brilliant grace * of Thine image, ** O my Son most beloved?”',
        'p1 LIC Stavrotheotokion', { type: 'stavrotheotokion', sourceLabel: 'Stavrotheotokion', label_inline: true,
          verified_sites: [{ locus: 'p1 LIC Stavrotheotokion' }, { locus: 'p12 Praises Stavrotheotokion' }] }),

      idiomelon_rubric: m1('If an Idiomelon be appointed, Glory ..., in Tone VI:', 'p1 Idiomelon rubric'),
      // The `* *cease` case, RULED: the marker is in the right place and the hymn
      // is otherwise fully pointed, so it is the penultimate `**` split by the
      // typesetter. Encoded as `**`; the printed `* *` is sic-registered.
      lic_glory: m2('Today the universe is illumined * with the bright rays of the passion-bearer, * and the Church of God, adorned with flowers, * doth cry aloud unto thee, O Martyr (name); * O favorite of Christ * and most fervent intercessor, ** cease not to pray for thy servants.',
        'p1 Glory idiomelon', { tone: 6,
          provenance_note: 'Source prints “* *cease”. Encoded as the penultimate ** per Bill’s ruling; see sic_register.' }),

      dogmatikon_rubric: m1('If the Celebration be with a Polyeleos, and not a Resurrection Service, sing the following Dogmatic in Tone VI (If the service is a Resurrection service sing the Dogmatic of the Tone for that service):',
        'p1 Dogmatikon rubric'),
      dogmatikon: m2('Who doth not call thee blessed, O most holy Virgin? * Who will not hymn thy most pure birthgiving? * For the only-begotten Son Who hath shone forth timelessly from the Father, * came forth, ineffably incarnate, from thee, O pure one; * By nature he is God, by nature for our sakes, he hath become a man * not divided into two Hypostases, * but known in two natures without commingling. * Him do thou beseech, O pure and most blessed one, ** that our souls find mercy!',
        'p2 Both now Dogmatikon', { type: 'dogmatic_theotokion', sourceLabel: 'Both now ..., in Tone VI', tone: 6 }),
      dogmatikon_alternate: m2('We have come to know God * Who was incarnate of thee, * O Virgin Theotokos. ** Him do thou entreat for the salvation of our souls.',
        'p2 Otherwise Theotokion', { type: 'theotokion', sourceLabel: 'Otherwise, Theotokion', label_inline: true }),
      dogmatikon_stavrotheotokion: m2('When, of old, the unblemished ewe-lamb and immaculate Sovereign Lady, * beheld her Lamb * upon the tree of the Cross, * she exclaimed maternally, and marveling cried aloud: * “O my Child most sweet, * what is this new and most strange sight I see? * How hath the thankless synagogue * betrayed Thee to the judgment-seat of Pilate * and condemned Thee to death, * Who art the Life of all? * Yet do I hymn Thine ineffable condescension, ** O Word!”',
        'p2 Stavrotheotokion', { type: 'stavrotheotokion', sourceLabel: 'Stavrotheotokion', label_inline: true }),

      entrance_rubric: m1('The Entrance. The Prokeimenon of the day. The Three Lessons, if appointed.', 'p2 Entrance'),
      // NOT three from Wisdom — lesson 1 is Isaiah. The monastic files' set is a
      // per-file fact, not a property of the General Menaion.
      readings: [
        { heading: 'THE READING IS FROM ISAIAH', src: { file: M1, locus: 'p2 Lesson 1' },
          citation: { book: 'Isaiah', chapter: 43, verses: '9-14' },
          citation_basis: 'identified',
          note: 'Corpus derivation REFUSED at 0.11 — and correctly. The Menaion prints a KJV-style rendering ("Let all the nations be gathered together, and let the people be assembled") where public/bible carries Brenton LXX ("All the nations are gathered together, and princes shall be gathered out of them"). Same passage, different translation. Identified by a human as the classic first martyr paremia; NOT verified, and the scripture-tool link will show wording the Menaion does not print.',
          provenance_note: 'The printed body carries three parenthesised oddities the encode does not store, because R-4 keeps reading text out of the month files: “Ye (are) my witnesses”, “that I (am) he”, and “when there was) no strange god” with an unopened bracket. Martyrs.pdf prints the same lesson with none of them. Recorded here rather than in sic_register.js, which can only guard text this book actually stores.' },
        // Heading printed BARE — no "THE READING FROM", unlike this file's third
        // lesson and unlike every heading in the monastic files. Verbatim.
        { heading: 'THE WISDOM OF SOLOMON', src: { file: M1, locus: 'p2 Lesson 2' },
          citation: { book: 'Wisdom of Solomon', chapter: 3, verses: '3:1-3:9' },
          citation_basis: 'derived',
          note: 'The standard first Wisdom paremia for a martyr, identical in opening to the monastic files\' lesson 1.' },
        { heading: 'THE READING FROM THE WISDOM OF SOLOMON', src: { file: M1, locus: 'p3 Lesson 3' },
          citation: { book: 'Wisdom of Solomon', chapter: 4, verses: '4:7-4:14' },
          citation_basis: 'derived',
          note: 'Wisdom 4:7 in a DIFFERENT rendering from the monastic files: here “Though the righteous man happen to die, yet shall he rest in peace”; Monastic/Monastics print “Though the righteous be prevented with death, yet shall he be in rest”. Same pericope, two translations — a body-level divergence, and therefore not a recurrence row (§2.11 stores no reading text to compare).' },
      ],

      // ── pp.3-4, RECOVERED. This half of Vespers was absent from the encode
      // until the page-coverage tripwire reported that nothing cited p3 or p4.
      // Everything below is transcribed from those two pages.
      aposticha_rubric: m1('On the Aposticha, these Stichera, in Tone IV:', 'p3 Aposticha rubric'),

      aposticha: [
        m2('Even though callous tyrants gave thee over * to be subjected to the most cruel and painful tortures, * and thy much-suffering and steadfastly enduring body * endured a multitude of torments, * thou, O godly-minded (name), * didst not renounce Christ, * neither didst thou offer sacrifice unto idols, * but endured all as if in another’s body, ** awaiting future reward and the undying love of the Word of God.',
           'p3 Aposticha 1', { spec_mel: 'As one valiant among the martyrs ...', label: 'plain', tone: 4 }),
        m2('The righteous man shall flourish like a palm-tree; * like a cedar in Lebanon shall he be multiplied.',
           'p3 Aposticha verse 1', { label: 'refrain', sourceLabel: 'Verse', label_inline: true }),
        m2('Raised up and cut asunder, * assaulted with stones, * wounded with iron instruments of torture * and executed with a sword; * thou didst remain steadfast, * affixing the gaze of thy soul upon the judicious Rock, * and wast thereby numbered * among the choirs of the Angels, ** and deemed worthy of the never-setting Light.',
           'p3 Aposticha 2', { spec_mel: 'As one valiant among the martyrs ...', label: 'plain' }),
        m2('They that are planted in the house of the Lord, * in the courts of our God shall they blossom forth.',
           'p3 Aposticha verse 2', { label: 'refrain', sourceLabel: 'Verse', label_inline: true }),
        m2('Thy relics, O glorious (name), * grant healing of their senses, vanquishing of their passions, * unto those who desire it, * curing their infirmities, * dispersing whole hosts of evil spirits, * and supplying nourishing waters * unto the hearts of the faithful * cultivating the divine fruits of the virtues, ** and the proper understanding of piety.',
           'p3 Aposticha 3', { spec_mel: 'As one valiant among the martyrs ...', label: 'plain' }),
      ],

      // Printed a second time, byte-identically, as the Doxology Glory (p12).
      // Stored per position (§2.3); the pair is an `identical` recurrence row.
      aposticha_glory: m2('O come all ye lovers of the Martyrs, * let us reverently glorify the famous Martyr of Christ (name), * who bravely finished his course here upon the earth, * bruising the head of the serpent, * and with his blood consecrating the earth, * he hath passed from here to the never-ending habitations of the righteous; * receiving there great honors for his exploits from the hand of the Almighty, * unto Whom he prayeth, that our souls be cleansed ** from all iniquity and granted great mercy.',
        'p4 Aposticha Glory', { sourceLabel: 'Glory ..., in Tone VI', tone: 6 }),

      // Lowercase "celebration" here; the Vespers dogmatikon rubric on p1 of the
      // same file capitalizes it. Verbatim, per print site.
      aposticha_closer_rubric: m1('If the celebration be with a Polyeleos, chant the Resurrection Theotokion:', 'p4 Aposticha Both-now rubric'),

      aposticha_closer: m2('Christ the Lord, my Creator and Redeemer, * Who came forth from thy womb, O most pure one, * and clothed Himself in my nature, * hath freed Adam from the primal curse. * Wherefore, like the angel * we unceasingly cry out to thee, O most pure one, * who art truly the Mother of God and Virgin: * Rejoice!, O Sovereign Lady, ** the intercession, protection and salvation for our souls!',
        'p4 Aposticha Both now', { type: 'theotokion', sourceLabel: 'Both now ..., in Tone VI', tone: 6 }),

      aposticha_alternate: m2('O Theotokos, thou art the true vine * that hast budded forth for us the Fruit of life. * Thee do we entreat: * Pray thou, O Sovereign Lady, with the holy apostles, ** that He have mercy upon our souls.',
        'p4 Aposticha Otherwise', { type: 'theotokion', sourceLabel: 'Otherwise, Theotokion', label_inline: true }),

      aposticha_stavrotheotokion: m2('The most pure one seeing Thee hanging upon the cross * with maternal tears cried aloud to Thee: * “O my Son and God, * O my sweetest Child, * how is it that Thou sufferest ** such a shameful death?”',
        'p4 Aposticha Stavrotheotokion', { type: 'stavrotheotokion', sourceLabel: 'Stavrotheotokion', label_inline: true }),

      troparion_rubric: m1('The Troparion from the Typicon; but if there be none, chant the following:', 'p4 Troparion rubric'),
      closer: { absent: true, reason: 'not_printed_in_source', basis: 'close_reading',
        note: 'Printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8).' },
      closing_rubric: m1('The Dismissal:', 'p4 Dismissal'),
    },

    matins: {
      order: [
        'god_is_lord_rubric', 'troparion', 'troparion_closer',
        'sessional_1_rubric', 'sessional_1', 'sessional_1_closer',
        'sessional_2_rubric', 'sessional_2', 'sessional_2_closer',
        'megalynarion_rubric', 'megalynarion', 'megalynarion_verse',
        'sessional_polyeleos_rubric', 'sessional_polyeleos', 'sessional_polyeleos_closer',
        'anabathmoi_rubric', 'anabathmoi_intro', 'anabathmoi', 'anabathmoi_closer',
        'prokeimenon_rubric', 'prokeimenon', 'prokeimenon_verse',
        'gospel_rubric', 'gospel',
        'psalm50_rubric', 'psalm50_sticheron', 'psalm50_closer', 'psalm50_verse',
        'sessional_post50_rubric', 'sessional_post50',
        'canon_rubric', 'canons', 'kontakion_rubric', 'kontakion', 'ikos',
        'exapostilarion_rubric', 'exapostilarion', 'exapostilarion_closer',
        'praises_rubric', 'praises', 'praises_glory', 'praises_closer', 'praises_stavrotheotokion',
        'great_doxology_rubric', 'doxology_glory', 'doxology_closer_rubric',
        'troparion_rubric', 'troparion', 'closer', 'closing_rubric',
      ],

      god_is_lord_rubric: m1('On “God is the Lord ...,” the Troparion in Tone IV:', 'p5 God is the Lord'),
      troparion_closer: { absent: true, reason: 'not_printed_in_source', basis: 'close_reading',
        note: 'Printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8).' },

      sessional_1_rubric: m1('After the 1st chanting of the Psalter, the Sessional Hymn, in Tone I:', 'p5 Sessional 1 rubric'),
      sessional_1: m2('Counting as naught * military honors upon the earth, * O great Martyr (name), * thou didst desire the glory of heaven, * enduring great pangs and ultimately death; * wherefore we celebrate today thine all-holy memory, ** offering praise unto Christ, O most blessed (name).',
        'p5 Sessional 1', { spec_mel: 'The choir of Angels ...', tone: 1 }),
      sessional_1_closer: m2('All we who with love flee for refuge to thy goodness * know thee to be the Mother of God * and after childbirth still truly Virgin; * for we sinners have thee as our protection; * we have thee as our salvation in misfortunes, ** as the only all-immaculate one.',
        'p5 Sessional 1 Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion, in Tone I', tone: 1 }),

      sessional_2_rubric: m1('After the 2nd chanting of the Psalter, the Sessional Hymn, in Tone IV:', 'p5 Sessional 2 rubric'),
      sessional_2: m2('Faithfully finishing thine earthly course, * thou hast vanquished all the might of thy tormentors, * and obtained an eternal crown from the hand of the Almighty, * O all-honored (name), * revealed unto all ** to be a companion of the Angels.',
        'p5 Sessional 2', { spec_mel: 'Thou hast appeared today ...', tone: 4, repeat: 2 }),
      sessional_2_closer: m2('The Word of the Father, Christ our God, * Who was incarnate of thee, * we have come to know, O Virgin Theotokos, * who alone art pure, who alone art blessed. ** Wherefore, we unceasingly hymn and magnify thee.',
        'p5 Sessional 2 Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion, in Tone IV', tone: 4 }),

      megalynarion_rubric: m1('After the Polyeleos, the Megalynarion:', 'p5 Megalynarion rubric'),
      megalynarion: m1('We magnify thee, O holy Martyr (name), and honor thy precious sufferings which thou didst endure for the sake of Christ.',
        'p5 Megalynarion', { label_inline: true }),
      megalynarion_verse: m1('Our God is refuge and strength, a helper in afflictions which mightily befall us.',
        'p5 Megalynarion verse', { sourceLabel: 'Verse', label_inline: true }),

      sessional_polyeleos_rubric: m1('After the Polyeleos, the Sessional Hymn, in Tone IV:', 'p5 Polyeleos sessional rubric'),
      sessional_polyeleos: m2('As Christ’s invincible warrior, * and a great vanquisher of the enemy, * thou didst shine forth with great miracles, * wherefore let us all in faith magnify the Martyr (name), * for he poureth forth healings upon all those who come to him in faith, * a consoler of great pain ** and unceasing intercessor for the afflicted.',
        'p5 Polyeleos sessional', { tone: 4, repeat: 2 }),
      sessional_polyeleos_closer: m2('O Virgin Theotokos, * thou art an invincible wall for all Orthodox Christians. * For having recourse unto thee we remain unharmed * and in thee we have a sure intercessor for the forgiveness of our sins; * wherefore rendering thanks unto thee, we cry aloud! ** Rejoice, O thou who art full of grace, the Lord is with thee.',
        'p6 Polyeleos sessional Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion, in Tone IV', tone: 4 }),

      anabathmoi_rubric: m1('If of Polyeleos rank, and not a Resurrection Service, chant the following:', 'p6 Anabathmoi condition'),
      anabathmoi_intro: m1('The Song of Ascents: The first antiphon, in Tone IV:', 'p6 Anabathmoi rubric'),
      anabathmoi: [
        m2('From my youth * do many passions war against me; * but do Thou Thyself defend ** and save me, O my Savior.', 'p6 Anabathmoi 1', { tone: 4 }),
        m2('Ye haters of Zion * shall be shamed by the Lord; * for like grass, by the fire ** shall ye be withered.', 'p6 Anabathmoi 2'),
      ],
      anabathmoi_closer: m2('In the Holy Spirit, * every soul is quickened, * and, through cleansing, is exalted ** and made radiant by the Triple Unity in a hidden sacred manner.',
        'p6 Anabathmoi Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ...' }),

      prokeimenon_rubric: m1('Prokeimenon, in Tone IV:', 'p6 Prokeimenon rubric'),
      prokeimenon: m2('The righteous man shall flourish like a palm-tree; * like a cedar in Lebanon shall he be multiplied.',
        'p6 Prokeimenon', { sourceLabel: 'The Prokeimenon', label_inline: true, tone: 4 }),
      prokeimenon_verse: m1('They that are planted in the house of the Lord, in the courts of our God shall they blossom forth.',
        'p6 Prokeimenon verse', { sourceLabel: 'Verse', label_inline: true }),

      gospel_rubric: m1('Let every breath.', 'p6 Let every breath'),
      gospel: { heading: 'THE GOSPEL ACCORDING TO ST. LUKE, (12, 2-12).', src: { file: M1, locus: 'p6 Matins Gospel' },
        citation_verbatim: '(12, 2-12)', citation: { book: 'Luke', chapter: 12, verses: '2-12' } },

      psalm50_rubric: m1('After the 50th Psalm:', 'p7 Psalm 50 rubric'),
      psalm50_sticheron: m2('Through the prayers of the Martyr (name), * O Merciful One, ** blot out the multitude of our transgressions.',
        'p7 Psalm 50 sticheron', { sourceLabel: 'Glory ..., in Tone VI', tone: 6 }),
      psalm50_closer: m2('Through the prayers of the Theotokos, * O Merciful One, ** blot out the multitude of our transgressions.',
        'p7 Psalm 50 Both now', { type: 'theotokion', sourceLabel: 'Both now ...' }),
      psalm50_verse: m2('Have mercy on me, O God, * according to Thy great mercy; * and according to the multitude of Thy compassions, ** blot out my transgressions.',
        'p7 Psalm 50 verse'),

      sessional_post50_rubric: m1('Then the Sessional Hymn, in Tone VI:', 'p7 post-50 sessional rubric'),
      // SAME HYMN as the Vespers Glory idiomelon, RE-RENDERED — and the reason
      // this print site matters: here the source prints a PROPER `**` exactly
      // where Vespers prints the split `* *`. Independent confirmation, from the
      // same file, that the Vespers form is a broken penultimate marker and not
      // a stray asterisk. Recorded as a `variant` pair (the wording also differs:
      // "decorated with flowers" / "cries aloud" here).
      sessional_post50: m2('Today the universe is illumined * with the bright rays of the passion-bearer, * and the Church of God, decorated with flowers, * cries aloud unto thee, O Martyr (name); * O favorite of Christ * and most fervent intercessor, ** cease not to pray for thy servants.',
        'p7 post-50 sessional', { tone: 6 }),

      canon_rubric: m1('The Canon, in Tone V,', 'p7 Canon rubric'),
      canons: [{
        tone: 5,
        odes: {
          1: { irmos: m2('Christ, who with an upraised arm * bringeth wars to naught, * hath shaken horse and rider in the Red Sea; * but Israel hath He saved * as they chanted a song of victory.', 'p7 Ode I irmos', { sourceLabel: 'Irmos', label_inline: true }),
               refrain: m1('Holy Martyr (name) pray to God for us', 'p7 Ode I refrain', { sourceLabel: 'Refrain', label_inline: true }),
               items: [
                 m1('As an invincible Martyr standing with boldness before the throne of God, do thou, O god-blessed one, preserve by thine intercessions those who lovingly celebrate thy holy passion.', 'p7 Ode I 1', { label: 'plain' }),
                 m1('Having in thy soul an abiding supply of the living water, thou O holy and all-glorious one, dried up the turbid streams of evil, being strengthened by the grace of the Savior, O god-blessed one.', 'p7 Ode I 2', { label: 'plain' }),
                 m1('O god-blessed one, strengthened with the power of God, and empowered to overcome the pride of the enemy, thou didst become a great champion and citizen of the city on high.', 'p7 Ode I 3', { label: 'plain' }),
                 m1('O most pure Sovereign Lady, reveal to me, the wretched one, thy compassion, diligently entreating thy Son, O most holy one, that by thine intercessions I may escape the eternal fire.', 'p7 Ode I Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
          3: { irmos: m2('By Thy command Thou didst establish the earth upon nothing * and suspended it unsupported; * do Thou establish Thy Church on the unshakeable rock of Thy commandments, O Christ, * who alone art good * and the Lover of mankind.', 'p8 Ode III irmos', { sourceLabel: 'Irmos', label_inline: true }),
               items: [
                 m1('Withdrawing from the stench of the passions and approaching God with divine purity, thou, O right worthy one, didst obtain illumination from God, who revealed thee to be a son of light, as one who fulfilleth the work of light.', 'p8 Ode III 1', { label: 'plain' }),
                 m1('Counting military calling and earthly glory as naught; thou didst enlist thyself as a soldier of Christ and now, numbered among the companies of Martyrs, thou dost rejoice therein O blessed god-bearer and Martyr (name).', 'p8 Ode III 2', { label: 'plain' }),
                 m1('O wondrous one, directing the paths of thy progress in the ways of peace O glorious one, thou didst enter the Kingdom of God, and in the midst of paradise hast found eternal rest.', 'p8 Ode III 3', { label: 'plain' }),
                 m1('O pure Lady, having given birth unto the Master and Creator of the whole of creation, thou hast appeared more honorable than the Cherubim and Seraphim, wherefore all generations, bless thee as is meet.', 'p8 Ode III Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
          4: { irmos: m2('Habbakuk, prophetically apprehending * Thy divine self-emptying, O Christ, * cried out to Thee with trembling: * Thou hast come for the salvation of Thy people; * to save Thine anointed Ones.', 'p8 Ode IV irmos', { sourceLabel: 'Irmos', label_inline: true }),
               items: [
                 m1('O most wise one, adorned with love and trust in God, thou hast shone forth as a Martyr, O most blessed one, becoming a co-dweller with the Angels, O most glorious one.', 'p9 Ode IV 1', { label: 'plain' }),
                 m1('Thou didst remain unshakable and unyielding, living in exile for the sake of the Lord God of all, deprived of thine own, O divinely blessed and most wise one.', 'p9 Ode IV 2', { label: 'plain' }),
                 m1('Having labored well and adorned now with the virtues of a Martyr, thou didst pass over to unseen blessings, reaping the rewards of thy labors.', 'p9 Ode IV 3', { label: 'plain' }),
                 m1('The only Good One, who co-enthroned on high with the Father, hath for our sake became incarnate below of thee, O all-immaculate Lady, through the abundance of His compassion and Love for mankind.', 'p9 Ode IV Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
          5: { irmos: m2('O Thou Who hast clothed Thyself in light as with a garment, * I rise early unto Thee and cry out to Thee: * Enlighten my darkened soul, O Christ, * in that Thou alone art compassionate!', 'p9 Ode V irmos', { sourceLabel: 'Irmos', label_inline: true }),
               items: [
                 m1('Strengthened by the laws of the Almighty, thou didst reject the advice of the lawless, and suffering lawfully O Martyr (name), thou hast obtained a crown of incorruption.', 'p9 Ode V 1', { label: 'plain' }),
                 m1('O most wise one, in the streams of thy blood thou hast extinguished the coals of carnal desire, and now, pouring forth healing waters, by the grace of God, thou drivest away the flames of infirmities.', 'p9 Ode V 2', { label: 'plain' }),
                 m1('O Martyr thou wast empowered in the infirmity of thy flesh to bring to naught the snares of the crafty one, and by grace O wise one, thou hast cast off multitudes of his allurements.', 'p9 Ode V 3', { label: 'plain' }),
                 m1('I beseech thee O most immaculate Virgin, Mortify the soul corrupting passions of my body, for thou hast given birth in the flesh unto Christ God, the Source of dispassion.', 'p9 Ode V Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
          6: { irmos: m2('Calm the raging sea of the passions, * O Master Christ, * with its soul-destroying tempest, * and lead me up from corruption * in that Thou art compassionate.', 'p9 Ode VI irmos', { sourceLabel: 'Irmos', label_inline: true }),
               items: [
                 m1('Thou didst stand before the judgment seat of the law breakers, O Martyr of Christ (name), uprooting their deceit and manfully rebuking their accusations with thy wisdom, wherefore thou wast judged for the sake of Christ.', 'p9 Ode VI 1', { label: 'plain' }),
                 m1('Thou wast adorned in thy passion with godly virtues, O most wise Martyr of Christ; by which thou wast enlightened by Christ and remained incorrupt.', 'p9 Ode VI 2', { label: 'plain' }),
                 m1('With thy blood thou hast consecrated the earth and with thy consecrated soul hast thou, O most blessed one, illumined heaven and filled with joy the choirs of Martyrs.', 'p10 Ode VI 3', { label: 'plain' }),
                 m1('Taught of the Spirit, the Prophet foresaw in thee a portal through which God would pass, becoming incarnate, yet leaving it sealed, O most immaculate one.', 'p10 Ode VI Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
          7: { irmos: m2('The supremely exalted Lord of our fathers * quenched the flame, * and bedewed the Youths * as they chanted in harmony: * O God, blessed art Thou!', 'p10 Ode VII irmos', { sourceLabel: 'Irmos', label_inline: true }),
               items: [
                 m1('Translating thy Martyred body, the people who love to honor thee, O great sufferer and wise one, gratefully cry aloud: “Blessed is the God of our Fathers.”', 'p10 Ode VII 1', { label: 'plain' }),
                 m1('By the grace of God thou hast destroyed the offerings of the Pagans, and by Martyrdom thou hast released thyself from fleshly ties. Suffering lawfully, O blessed one, thou didst end thy mortal life for Christ’s sake.', 'p10 Ode VII 2', { label: 'plain' }),
                 m1('Seated upon thy blood as if upon a chariot, with joy thou didst ascend beyond this world to the abodes of rest, O rightly-praised Martyr.', 'p10 Ode VII 3', { label: 'plain' }),
                 m1('The glory of all art thou, O pure one, and the strengthening of those who confess thee to be the Mother of our God, O all-immaculate one, Who supra-naturally passed through thy womb.', 'p10 Ode VII Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
          8: { irmos: m2('Unto Thee the Fashioner of all, * the children in the furnace chanted a hymn: * All ye works of the Lord, * supremely exalt Him throughout all ages.', 'p10 Ode VIII irmos', { sourceLabel: 'Irmos', label_inline: true }),
               items: [
                 m1('Thou wast an heir of Jerusalem on high and dying in exile, O most wise one, thou dost unceasingly hymn: “All ye works of the Lord praise ye the Lord, and supremely exalt him throughout the ages.”', 'p10 Ode VIII 1', { label: 'plain' }),
                 m1('Partaking of many sufferings, O blessed one, thou didst attain to the life that knoweth no sorrow, from whence thou dost now cry aloud: “All ye works of the Lord praise ye the Lord, and supremely exalt him throughout the ages.”', 'p11 Ode VIII 2', { label: 'plain' }),
                 m1('Empowered by the all-embracing might of God thou didst destroy the beguiling allurements of the Pagans and their crafty falsehoods and received from the Master of all the crown of incorruption, O Martyr.', 'p11 Ode VIII 3', { label: 'plain' }),
                 m1('The all-compassionate Word hath assumed flesh from thee, O pure one, uniting Himself to mankind. Beseech Him, O most holy one, to subdue the impulses of my flesh, and to save my soul.', 'p11 Ode VIII Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
          9: { irmos: m2('O Isaiah, rejoice and be glad! * The Virgin hath conceived in her womb, * and hath borne a Son, Emmanuel, * who is both God and man; * and Orient is His name; * Him we magnify, and the Virgin we call blessed.', 'p11 Ode IX irmos', { sourceLabel: 'Irmos', label_inline: true }),
               items: [
                 m1('O come all ye faithful, gathered together today let us celebrate the sacred commemoration of the most blessed and holy Martyr of Christ (name); for in his Martyrdom he, by divine power, hath vanquished multitudes of the enemy.', 'p11 Ode IX 1', { label: 'plain' }),
                 m1('Adorned, O glorious one, with the godly qualities of martyrdom, and riding upon thy blood as in a chariot of fire, thou hast joyfully ascended into the heavens where thou dost behold the ineffable goodness of our Savior.', 'p11 Ode IX 2', { label: 'plain' }),
                 m1('Dwelling now in the Kingdom on high, and gloriously adorned with the crown of a victor, O all-praised Martyr, thou hast been revealed to be a prized warrior and passion-bearer of Christ God.', 'p11 Ode IX 3', { label: 'plain' }),
                 m1('O most holy one, having given birth unto Christ, the enlightenment of those in darkness, enlighten thou my blinded soul and guide me along the paths that lead unto life, O directress of all who hymn thee.', 'p11 Ode IX Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
               ] },
        },
      }],

      kontakion_rubric: m1('The Kontakion from the Typicon; but if there be none, chant the following:', 'p10 Kontakion rubric'),
      ikos: m1('Grant me to hymn, O my God, to recount and honor the pangs of Thy passion-bearer and Martyr, that I may worthily praise the great sufferer (name), vanquisher of passions, great in piety, who now shineth forth in the midst of the choirs of the Martyrs, and with the multitude of Angels unceasingly hymneth Christ, receiving from above divine illumination, and ever praying on behalf of us all.',
        'p10 Ikos', { sourceLabel: 'The Ikos', label_inline: true }),

      exapostilarion_rubric: m1('Exapostilarion in Tone III:', 'p11 Exapostilarion rubric'),
      exapostilarion: m2('Illumining all creation like a brightly radiant sun beaming with wondrous rays, * O most glorious Martyr (name), * we honor thy memory and beseech thee to entreat Him Who rose from the grave, * that we be delivered from all dangers.',
        'p11 Exapostilarion', { tone: 3 }),
      exapostilarion_closer: m2('With thine almighty protection preserve all of us, * thy servants O pure one, * unharmed by the attacks of the enemy; ** for thee alone do we have as our refuge in need.',
        'p11 Exapostilarion Both now', { type: 'theotokion', sourceLabel: 'Glory ..., Both now ..., Theotokion in Tone III', tone: 3 }),

      praises_rubric: m1('On the Praises, these Stichera, in Tone IV:', 'p11 Praises rubric'),
      praises: [
        m2('In psalms as well as in odes we praise thy glorious memory, O (name), * for thou hast brightly shone forth with renowned valor, * adorned with glory and grace. * Wherefore today O Martyr, the orders of Angels rejoice, * and the Martyrs together with the Apostles * praise thy valiant sufferings, * and hymn the Savior Christ our God, * who hath glorified thee; ** beseech Him to save and enlighten our souls.',
           'p12 Praises 1', { spec_mel: 'Called from above ...', label: 'plain', tone: 4, repeat: 2 }),
        m2('Thou wast found, O (name), * to be armed with the breastplate of Christ by those who expected the to submit; * for being burned with fire for Christ’s sake * and scorning the godless fury of the vain gods, * thou didst cry out to the lawless ones saying: * “I wage war for my King, Christ; * neither beast, nor wheels, nor any other torment * can ever separate me from the love of Christ”, ** beseech Him to save and enlighten our souls.',
           'p12 Praises 2', { spec_mel: 'Called from above ...', label: 'plain',
             provenance_note: 'SIC — “by those who expected the to submit”: “the” for “thee”. As printed.' }),
        m2('Having contended with multifarious tortures, * and a multitude of fearful instruments, * thou, O crown-bearer (name), didst end thy devout life in Martyrdom; * wherefore we crown thy most splendid memory * with the flowers of hymns * and in faith kiss thy precious relics; * but since thou standest before the throne of the Master, Christ our God, * cease not to entreat Him ** to save and enlighten our souls.',
           'p12 Praises 3', { spec_mel: 'Called from above ...', label: 'plain' }),
      ],
      praises_glory: m2('O glory of the Martyrs (name)! * thy splendid victories have destroyed the deceit of thine enemies, * and the glory of thy bodily sufferings hast thou borne meekly as a victor, * raise thou up from the fall into sin ** those who with faith honor thy memory.',
        'p12 Praises Glory', { sourceLabel: 'Glory ..., in Tone I', tone: 1 }),
      praises_closer: m2('Rejoice! O Virgin Theotokos, * for thou hast given birth to the King of heaven, ** the Savior and Enlightener of our souls.',
        'p12 Praises Both now', { type: 'theotokion', sourceLabel: 'Both now ..., Theotokion in Tone I', tone: 1 }),
      praises_stavrotheotokion: m2('The Sovereign Lady, the unblemished ewe-lamb, * beholding her Lamb upon the Cross, * bereft of form and comeliness, * lamenting, said: “Woe is me! * Whither hath Thy comeliness gone, O most Sweet One? * Where is Thy splendor? Where is the brilliant grace * of Thine image, ** O my Son most beloved?”',
        'p12 Praises Stavrotheotokion', { type: 'stavrotheotokion', sourceLabel: 'Stavrotheotokion', label_inline: true }),

      great_doxology_rubric: m1('The great Doxology: If a small Doxology is read, and a Doxasticon is appointed, the following is chanted after the Aposticha:', 'p12 Doxology rubric'),
      doxology_glory: m2('O come all ye lovers of the Martyrs, * let us reverently glorify the famous Martyr of Christ (name), * who bravely finished his course here upon the earth, * bruising the head of the serpent, * and with his blood consecrating the earth, * he hath passed from here to the never-ending habitations of the righteous; * receiving there great honors for his exploits from the hand of the Almighty, * unto Whom he prayeth, that our souls be cleansed ** from all iniquity and granted great mercy.',
        'p12 Doxology Glory', { sourceLabel: 'Glory ..., in Tone VI', tone: 6 }),
      doxology_closer_rubric: m1('Both now ..., Theotokion or Stavrotheotokion:', 'p13 Doxology Both now'),
      troparion_rubric: m1('Troparion, in Tone III:', 'p13 Troparion rubric'),
      closer: { absent: true, reason: 'not_printed_in_source', basis: 'close_reading',
        note: 'Printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8).' },
      closing_rubric: m1('The Dismissal:', 'p13 Dismissal'),
    },

    liturgy: {
      order: ['beatitudes_rubric', 'beatitudes', 'propers_rubric', 'troparion', 'kontakion',
              'prokeimenon', 'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse', 'gospel', 'communion_verse'],
      beatitudes_rubric: m1('Typika and Beatitudes.', 'p14 Typika and Beatitudes'),
      // Odes III and VI reprinted, as in Monastic. Stored again at THIS position
      // (§2.3); the identity is asserted in known_recurrences.js.
      beatitudes: [
        m1('Withdrawing from the stench of the passions and approaching God with divine purity, thou, O right worthy one, didst obtain illumination from God, who revealed thee to be a son of light, as one who fulfilleth the work of light.', 'p14 Beatitude 1', { label: 'plain', repeat: 2 }),
        m1('Counting military calling and earthly glory as naught; thou didst enlist thyself as a soldier of Christ and now, numbered among the companies of Martyrs, thou dost rejoice therein O blessed god-bearer and Martyr (name).', 'p14 Beatitude 2', { label: 'plain' }),
        m1('O wondrous one, directing the paths of thy progress in the ways of peace O glorious one, thou didst enter the Kingdom of God, and in the midst of paradise hast found eternal rest.', 'p14 Beatitude 3', { label: 'plain' }),
        m1('Thou didst stand before the judgment seat of the law breakers, O Martyr of Christ (name), uprooting their deceit and manfully rebuking their accusations with thy wisdom, wherefore thou wast judged for the sake of Christ.', 'p14 Beatitude 4', { label: 'plain' }),
        m1('Thou wast adorned in thy passion with godly virtues, O most wise Martyr of Christ; by which thou wast enlightened by Christ and remained incorrupt.', 'p14 Beatitude 5', { label: 'plain' }),
        m1('With thy blood thou hast consecrated the earth and with thy consecrated soul hast thou, O most blessed one, illumined heaven and filled with joy the choirs of Martyrs.', 'p14 Beatitude 6', { label: 'plain' }),
        m1('Taught of the Spirit, the Prophet foresaw in thee a portal through which God would pass, becoming incarnate, yet leaving it sealed, O most immaculate one.', 'p14 Beatitude Theotokion', { label: 'theotokion', type: 'theotokion', sourceLabel: 'Theotokion', label_inline: true }),
      ],
      propers_rubric: m1('The Troparion and the Kontakion from the Typicon; but if there be none, chant the following:', 'p14 Propers rubric'),
      prokeimenon: m2('The righteous man shall be glad in the Lord, * and shall hope in Him.',
        'p14 Prokeimenon', { sourceLabel: 'Prokeimenon, in Tone VII', label_inline: true, tone: 7 }),
      prokeimenon_verse: m1('Hearken, O God, unto my prayer, when I make supplication unto thee.',
        'p14 Prokeimenon verse', { sourceLabel: 'Verse', label_inline: true }),
      epistle: { heading: 'THE SECOND EPISTLE TO TIMOTHY (2:1-10)', src: { file: M1, locus: 'p15 Epistle' },
        citation_verbatim: '(2:1-10)', citation: { book: 'Timothy', chapter: 2, verses: '1-10' } },
      alleluia: m1('The righteous man shall flourish like a palm-tree; like a cedar in Lebanon shall he be multiplied.',
        'p15 Alleluia', { sourceLabel: 'Alleluia, in Tone IV', label_inline: true, tone: 4 }),
      alleluia_verse: m1('They that are planted in the house of the Lord, in the courts of our God shall they blossom forth.',
        'p15 Alleluia verse', { sourceLabel: 'Verse', label_inline: true }),
      gospel: { heading: 'THE HOLY GOSPEL ACCORDING TO ST. JOHN (15:17- 16:2)', src: { file: M1, locus: 'p15 Gospel' },
        citation_verbatim: '(15:17- 16:2)', citation: { book: 'John', chapter: 15, verses: '15:17-16:2' } },
      communion_verse: m1('In everlasting remembrance shall the righteous be; He shall not be afraid of evil tidings.',
        'p15 Communion verse', { sourceLabel: 'Communion Verse', label_inline: true }),
    },
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // Unmercenaries.pdf — 14pp. FIFTH General Menaion file. Encoded 15 Aug 2026.
  //
  // Chosen over Apostle/Apostles on a MEASURED divergence count (14 novel
  // rubrics vs 5 and 4), to front-load schema pressure while the schema is
  // still cheap to change. Three of the fourteen mattered:
  //
  // 1. THE MATINS TAIL INVERTS. This file prints `On the Aposticha, the
  //    Stichera, in Tone II:` at Matins and NO Praises at all. All four
  //    previously encoded files print Praises and have no Matins aposticha.
  //    menaion_v2_spec.md §5.6 already lists `aposticha` under matins, so this
  //    is data rather than a spec change — but it is the first file to use it,
  //    and `praises` here is an absence node with a basis, not a silence.
  //
  // 2. THE 'THIRD DOXOLOGY BRANCH' IS NOT ONE. The handoff predicted a third
  //    form of the Doxology. The page prints `The Doxology:` and then `If the
  //    service be with the Great Doxology, but not a Resurrection service, the
  //    Troparion is sung after the Doxology:` — which adds no Doxology form and
  //    conditions WHERE THE TROPARION IS SUNG. Stored as its own rubric;
  //    `great_doxology_rubric` (a different rubric doing a different job in the
  //    fixture) is declared absent.
  //
  // 3. THE EPISTLE HEADING NAMES THE WRONG BOOK. p13 prints `THE EPISTLE TO THE
  //    ROMANS. (12:4-5, 15-21)` over a body that is 1 Corinthians 12:27-31,
  //    13:1-8 — 0.944 against 1 Corinthians, 0.262 against Romans 12:4-21.
  //    Bill's ruling: keep the printed reference verbatim, store NO resolvable
  //    citation, and surface it as a FINDING. See `citation_disputed`.
  //
  // The two rubrics the handoff expected to be R-5 cross-book exclusions are
  // NOT: `If not a Resurrection Service, Sing the following:` and `If the
  // Celebration be with a Polyeleos, sing the Theotokion of the Resurrection:`
  // both PRINT THEIR TEXT IN FULL, and the fixture already encodes both slots.
  // No exclusion rows were added.
  //
  // Placeholders: `(names)` ×18 and `(name)` ×1 — one of only three files that
  // print both tokens. Stored verbatim and unsubstituted (§6.2).
  //
  // EXTRACTION: `dedupe_chars()` left ONE residue in this file — p10's ODE IX
  // heading extracts as `OODDEE IIXX`. That is the 527-to-3 doubled-glyph class
  // (encoding_rule_v2.md §2), not a source fact; the heading is transcribed as
  // `ODE IX` and the ode is keyed 9 like every other. Noted rather than
  // registered: a sic row records what the PAGE prints, and the page prints
  // ODE IX correctly — the doubling is the extractor's.
  Unmercenaries: {
    title: u1("GENERAL VIGIL SERVICE TO THE UNMERCENARIES AND WONDER-WORKERS.", "p1 title"),

    // R-1, AT ITS BOUNDARY. Four print sites, and they are NOT byte-identical:
    // p4 (Vespers dismissal) and p5 (God is the Lord) print `infirmities. **
    // Freely`; p12 (after the Doxology) and p13 (AT LITURGY) print a SINGLE
    // asterisk. Bill's ruling: the canonical field is taken from the two `**`
    // sites and claims only those two; the `*` sites are stored per-position
    // (§2.3) and the pair is registered as a `variant`. Collapsing all four
    // would have required deciding on our own authority that the book is wrong.
    //
    // `(Twice)` prints at p5 and at no other site, so it is recorded PER SITE
    // beside the tone, for the same reason tone is: a top-level `repeat` would
    // assert the device at three sites that do not print it.
    troparion: u2("O Holy and unmercenary wonderworkers, visit our infirmities. ** Freely ye have received, freely give.", "p4 Troparion", { sourceLabel: "Troparion, in Tone VIII", tone: 8, verified_sites: [{"locus": "p4 Vespers dismissal", "tone": 8}, {"locus": "p5 God is the Lord", "tone": 8, "repeat": 2}] }),

    kontakion: u2("Ye have received the grace of healing, * O holy and wonderworking Physicians; * and ye grant health to those in need. * Come and visit us, repulsing the assaults of all enemies, * and heal the world through your wonderworking.", "p9 Kontakion after Ode VI", { sourceLabel: "Kontakion, in Tone II", tone: 2, verified_sites: [{"locus": "p9 after Ode VI", "tone": 2}, {"locus": "p13 AT LITURGY", "tone": 2}] }),

    // Printed once, at p9 after the Kontakion. Tier 1 — solid prose, as every
    // Ikos in the corpus is.
    ikos: u1("The proclamations of the wise physicians pass all understanding and wisdom, and yet grant understanding to all, for having received grace from the most High, they mystically bestow healing; wherefore, we have been granted the grace to hymn them as God-bearing favorites of Christ, and ministers, who miraculously heal all from all manner of infirmities.", "p9 Ikos", { sourceLabel: "Ikos", label_inline: true }),

    // ── AT VESPERS (unheaded in the source — everything before AT MATINS) ───
    vespers: {
      order: ['lic_rubric', 'lic', 'lic_closer', 'lic_stavrotheotokion',
              'idiomelon_rubric', 'lic_glory', 'dogmatikon_rubric', 'dogmatikon',
              'dogmatikon_alternate', 'dogmatikon_stavrotheotokion',
              'entrance_rubric', 'readings', 'aposticha_rubric', 'aposticha',
              'aposticha_glory', 'aposticha_closer_rubric', 'aposticha_closer',
              'aposticha_alternate', 'aposticha_stavrotheotokion',
              'troparion_rubric', 'troparion', 'closer', 'closing_rubric'],

      lic_rubric: u1("On “Lord, I have cried ...,” the Stichera, in Tone IV:", "p1 LIC rubric"),
      lic: [
        u2("Like rivers filled to overflowing with spiritual water, * ye water creation with the knowledge of God * and with the preeminent gift of healing, * ye dry up the soul-destroying passions, * healing maladies and driving away evil spirits, * O God-bearing unmercenaries (names), ** fervent intercessors for our souls.", "p1 LIC 1", { spec_mel: "Thou hast given a sign ...", label: "plain" }),
        u2("Having subdued the irrational passions * by the strength of your souls, O holy ones, * you were enriched by Christ with the gift of healing, * and ye now grant healing to both men and beasts, * wherefore celebrating your sacred and radiant memory, ** we entreat you to heal our souls.", "p1 LIC 2", { spec_mel: "Thou hast given a sign ...", label: "plain" }),
        u2("Your holy temple appeareth like a resplendent and salvific heaven, * shining forth like the sun with divine healings, * the multitude of miracles worked therein shining like stars in the firmament of the heavens, * O most blessed (names), ** ministers of the Lord and fervent intercessors for our souls.", "p1 LIC 3", { spec_mel: "Thou hast given a sign ...", label: "plain" }),
      ],

      // The Glory/Both-now family here is the IDIOMELON and the DOGMATIKON.
      // There is no separate Glory-Both now-Theotokion pair at the LIC and no
      // LIC stavrotheotokion; both are declared, not silently omitted (§2.10).
      lic_closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "p1 runs the three LIC stichera straight into `If an Idiomelon be appointed, Glory ...`. The closer slot the fixture fills is occupied here by the idiomelon and the dogmatikon." },
      lic_stavrotheotokion: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "p1-p2 print a stavrotheotokion only after the dogmatikon alternate, which is stored as dogmatikon_stavrotheotokion. Nothing stands at the LIC position." },

      idiomelon_rubric: u1("If an Idiomelon be appointed, Glory ..., in Tone VIII:", "p1 idiomelon rubric"),
      lic_glory: u2("Who cannot wonder at, * and who cannot glorify and faithfully hymn the miracles * of the wise and most glorious unmercenaries? * For after their holy repose they grant abundant healing * for all who with faith have recourse unto them, * and unto their honored and holy relics, * from which the grace of abundant cures poureth forth. * O holy twain! * O the wisdom and glory of the grace granted you by God! * Wherefore we cry unto the Benefactor in spiritual songs, * to God Who hath revealed unto us the holy unmercinaries ** for the healing of our souls and bodies.", "p1 Glory idiomelon", { sourceLabel: "If an Idiomelon be appointed, Glory ..., in Tone VIII", tone: 8, label: "glory" }),

      // The R-5 cross-book rubric, 18 files (§6.2). Rubric stored; the Octoechos
      // dogmatic it names is NOT fetched. Carries the corpus-wide `service ):`
      // sic — registered.
      dogmatikon_rubric: u1("If the Celebration be with a Polyeleos, and not a Resurrection Service, sing the following Dogmatic in Tone VIII (If the service is a Resurrection service sing the Dogmatic of the Tone for that service ):", "p1 dogmatikon rubric"),
      dogmatikon: u2("In His love for mankind, the King of heaven appeared on earth * and dwelt among men; * for He Who received flesh from the pure Virgin * and cameth forth from her having received human nature, * is the only Son of God, * twofold in nature but not Hypostasis. * Therefore, proclaiming Him to be truly perfect God and perfect man, * we confess Christ our God. * Him do thou beseech, O unwedded Mother, ** that our souls find mercy!", "p1 Both now dogmatic", { sourceLabel: "Both now ..., in Tone VIII", tone: 8, type: "dogmatic_theotokion", label: "both_now" }),
      dogmatikon_alternate: u2("Rejoice, thou praise of the universe! * Rejoice, temple of the Lord! * Rejoice, mountain overshadowed! * Rejoice, refuge of all! * Rejoice, golden candlestick! * Rejoice, honored glory of the Orthodox! * Rejoice, Mary, Mother of Christ God! * Rejoice, paradise! Rejoice, divine table! * Rejoice, tabernacle! Rejoice, golden jar! ** Rejoice, thou hope of all!", "p1 Otherwise Theotokion", { sourceLabel: "Otherwise, Theotokion", type: "theotokion", label: "theotokion", label_inline: true }),
      // The source prints `Stavrotheotokion.` with a FULL STOP here, where every
      // other stavrotheotokion label in the file takes a colon. Stored verbatim.
      dogmatikon_stavrotheotokion: u2("The unblemished heifer, beholding her Bullock * willingly nailed to the Tree, * cried out aloud, lamenting piteously: * “Woe is me, O my most beloved Child! * How hath the ungrateful assembly of the Jews rewarded Thee, * desiring to leave me childless and bereft of Thee, ** my most beloved Child?”", "p2 Stavrotheotokion", { sourceLabel: "Stavrotheotokion.", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),

      entrance_rubric: u1("The Entrance. The Prokeimenon of the day. The Three Lessons, if appointed:", "p2 entrance rubric"),

      // FIRST FILE WHOSE VESPERS LESSONS PRINT A REFERENCE. The four encoded
      // files print bare headings, so `citation_verbatim` has never been
      // populated here before and the citationless branch of the reading
      // renderer was the only one exercised. All three are `printed`.
      readings: [
        { heading: 'THE READING IS FROM ISAIAH',
          src: { file: U, locus: 'p2 Lesson 1' },
          citation_verbatim: '(43, 9-14; )',
          citation: { book: 'Isaiah', chapter: 43, verses: '9-14' },
          citation_basis: 'printed',
          provenance_note: 'The printed reference carries a dangling `; ` before the close paren — registered as a sic. The body is the same KJV-style rendering of Isaiah 43 that Martyr.pdf and Martyrs.pdf print, and the same one that reconstructs at only 0.74 against the Brenton LXX in public/bible; here the reference is PRINTED, so no derivation was needed and the worklist item those two files carry does not arise. The body also prints "our let them hear" for "or let them hear" — a body-level sic that R-4 leaves unregistrable by design, since no reading text is stored for the sic register to byte-match against. Recorded here for the same reason Martyr and Martyrs record theirs.' },
        { heading: 'THE WISDOM OF SOLOMON',
          src: { file: U, locus: 'p2 Lesson 2' },
          citation_verbatim: '(3, 1-9).',
          citation: { book: 'Wisdom of Solomon', chapter: 3, verses: '1-9' },
          citation_basis: 'printed' },
        { heading: 'THE READING FROM THE WISDOM OF SOLOMON',
          src: { file: U, locus: 'p2 Lesson 3' },
          citation_verbatim: '(4, 7-15.)',
          citation: { book: 'Wisdom of Solomon', chapter: 4, verses: '7-15' },
          citation_basis: 'printed',
          provenance_note: 'Heading omits `IS` where lesson 1 prints `THE READING IS FROM` — the three headings in this one file use three different forms. Wisdom 4:7-15 is the pericope Martyr.pdf prints as its third lesson (4:7); Martyrs.pdf prints 5:15 instead. Same slot, three files, two pericopes.' },
      ],

      aposticha_rubric: u1("On the Aposticha, the Stichera, in Tone I:", "p3 Aposticha rubric"),
      // Stichera and verses interleave in ONE array, as the page prints them:
      // sticheron, verse, sticheron, verse, sticheron. Two verses to three
      // stichera is what the source gives.
      aposticha: [
        u2("With the rays of your miracles * O holy unmercenaries, * like most brilliant lamps rendering the whole universe resplendent, * ye were deemed worthy to inherit heaven through grace, * set forth like radiant stars * on account of the virtuousness of your holy lives.", "p3 Aposticha 1", { spec_mel: "Of the heavenly orders ...", label: "plain" }),
        u2("In the saints that are in His earth, hath the Lord been wondrous, * He hath wrought all His desires in them.", "p3 Aposticha verse 1", { sourceLabel: "Verse", label: "refrain" }),
        u2("Abounding in richly-flowing miracles of grace, * O Martyrs of the Lord, * ye appear as clouds rendering gentle rains, * with which you spiritually refresh all the earth * encouraging the faithful * to bring unto God praises of Orthodoxy.", "p3 Aposticha 2", { spec_mel: "Of the heavenly orders ...", label: "plain" }),
        u2("Behold now, what is so good or so joyous * as for brethren to dwell together in unity.", "p3 Aposticha verse 2", { sourceLabel: "Verse", label: "refrain" }),
        u2("Having truly received from God the art of healing pangs * of both soul and body, * O Martyrs of the Lord, * you heal, not by the treatments of worldly medicine, * but by supra-natural divine inspiration.", "p3 Aposticha 3", { spec_mel: "Of the heavenly orders ...", label: "plain" }),
      ],
      // THE FILE'S ONE SINGULAR `(name)`. Every other placeholder here is
      // `(names)`. Stored as printed; the mismatch is the source's.
      aposticha_glory: u2("Possessing within yourselves the Source of healings, * O holy unmercenaries (name), * you grant cures unto all who seek them, * since you were made worthy of the greatest of gifts from Christ the Savior, * the ever-flowing Source of spiritual gifts, * for the Lord hath said unto you, as emulators of the Apostles: * “Behold I give you power against unclean spirits, to cast them out, * and to heal all manner of sickness and all manner of disease.” * Wherefore having lived according to His commandments, * freely ye have received, freely have ye given * by curing the maladies of our souls and bodies.", "p3 Aposticha Glory", { sourceLabel: "Glory ..., in Tone IV", tone: 4, label: "glory" }),

      // NOT an R-5 exclusion. The rubric names the Resurrection Theotokion AND
      // the page prints it, followed by an `Otherwise` and a Stavrotheotokion —
      // the same three-way alternative the fixture carries.
      aposticha_closer_rubric: u1("If the Celebration be with a Polyeleos, sing the Theotokion of the Resurrection:", "p3 aposticha closer rubric"),
      aposticha_closer: u2("Mercifully regard the supplications of thy servants, * O most immaculate one, * quelling the cruel uprisings of the demons against us, * delivering us from every sorrow; * for thee alone do we have as a steadfast and sure confirmation, * and having acquired thine intercession; * let not us who call upon thee be put to shame, * O Sovereign Lady. * Hasten thou to answer the entreaties of those who cry out to thee with faith: * Rejoice, thou help, joy and protection of all, ** and the salvation of our souls!", "p3-p4 Resurrection Theotokion", { type: "theotokion", label: "theotokion" }),
      aposticha_alternate: u2("O Theotokos, Queen of all, * thou praise of the Orthodox: * cast down the proud arrogance of the heretics, * and put to shame the countenances of those * who neither bow down before nor honor thy precious image, ** O most pure one.", "p4 Otherwise Theotokion", { sourceLabel: "Otherwise, Theotokion", type: "theotokion", label: "theotokion", label_inline: true }),
      aposticha_stavrotheotokion: u2("Seeing Christ, the Lover of mankind, * crucified and with His side pierced with a lance, * the most pure one lamented, crying aloud: * “What is this, O my Son ? * What have the ungrateful people rendered unto Thee * in return for all the good things Thou hast rendered unto them ?” * And yet thou dost show thy tender compassion for me, * that I may endure my childlessness. ** I stand in awe, O Compassionate One, of Thy voluntary crucifixion.", "p4 Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),

      troparion_rubric: u1("The Troparion from the Typicon, but if there be no Typicon, sing the following:", "p4 troparion rubric"),
      // `troparion` is named in `order` and resolves to the entry-level
      // canonical field (R-1 is a STORAGE rule, not a layout one).
      closer: u2("O Good One, Who for our sake wast born of the Virgin * and, having endured crucifixion, cast down death by death, * and as God revealed the resurrection: * disdain not that which Thou hast fashioned with Thine own hand. * Show forth Thy love for mankind, O Merciful One; * Accept the supplications of the Theotokos who bore Thee, ** and save Thy despairing people, O our Savior!", "p4 Glory Both now Theotokion", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone VIII", tone: 8, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      closing_rubric: u1("The Dismissal:", "p4 Dismissal"),
    },
    // ── AT MATINS ───────────────────────────────────────────────────────────
    matins: {
      order: ['god_is_lord_rubric', 'troparion', 'troparion_closer',
              'sessional_1_rubric', 'sessional_1', 'sessional_1_closer',
              'sessional_2_rubric', 'sessional_2', 'sessional_2_closer',
              'megalynarion_rubric', 'megalynarion', 'megalynarion_verse',
              'sessional_polyeleos_rubric', 'sessional_polyeleos',
              'sessional_polyeleos_closer', 'anabathmoi_rubric',
              'anabathmoi_intro', 'anabathmoi', 'anabathmoi_closer',
              'prokeimenon_rubric', 'prokeimenon', 'prokeimenon_verse',
              'gospel_rubric', 'gospel', 'psalm50_rubric', 'psalm50_sticheron',
              'psalm50_closer', 'psalm50_verse', 'sessional_post50_rubric',
              'sessional_post50', 'canon_rubric', 'canons',
              'sessional_ode3_rubric', 'sessional_ode3', 'sessional_ode3_closer',
              'sessional_ode3_stavrotheotokion', 'kontakion_rubric', 'kontakion',
              'ikos', 'exapostilarion_rubric', 'exapostilarion',
              'exapostilarion_closer', 'praises', 'aposticha_rubric', 'aposticha',
              'aposticha_glory', 'aposticha_closer', 'aposticha_stavrotheotokion',
              'doxology_rubric', 'great_doxology_rubric', 'doxology_glory',
              'doxology_troparion_rubric', 'doxology_troparion',
              'closing_rubric'],

      god_is_lord_rubric: u1("At the Matins, for God is the Lord, the Troparion, in Tone VIII:", "p5 God is the Lord rubric"),
      troparion_closer: u2("O Good One, Who for our sake wast born of the Virgin * and, having endured crucifixion, cast down death by death, * and as God revealed the resurrection: * disdain not that which Thou hast fashioned with Thine own hand. * Show forth Thy love for mankind, O Merciful One; * Accept the supplications of the Theotokos who bore Thee, ** and save Thy despairing people, O our Savior!", "p5 Glory Both now Theotokion", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone VIII", tone: 8, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),

      // NOVEL LABELS, SAME SLOT. The fixture prints `After the 1st chanting of
      // the Psalter, the Sessional Hymn`; this file prints `After the 1st
      // Kathisma`. Verified by POSITION — both sit between the God-is-the-Lord
      // closer and the Polyeleos — rather than assumed from the label. The
      // labels are stored verbatim either way, including the stray colon after
      // `Hymn:` in the first and the capitalised `The` in the second.
      sessional_1_rubric: u1("After the 1st Kathisma, the Sessional Hymn: in Tone II:", "p5 sessional 1 rubric"),
      sessional_1: u2("Made worthy of great gifts, O glorious ones, * ye lived a humble life on earth, * wandering far and wide unselfishly curing the sick * of their infirmities and their pangs. * Now that ye have been revealed as friends of the Angels, * O faithful (names), * by your intercessions * heal also our sufferings.", "p5 Sessional 1", { tone: 2, label: "plain", repeat: 2 }),
      sessional_1_closer: u2("As thou art a well-spring of loving compassion, O Theotokos, * grant mercy unto us. * Look upon us a sinful people, * and ever show forth thy power; * for, trusting in thee, we cry out to thee, Rejoice! ** as once did Gabriel, the supreme commander of the bodiless hosts.", "p5 Sessional 1 closer", { sourceLabel: "Glory ..., Both now ..., Theotokion", type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      sessional_2_rubric: u1("After the 2nd Kathisma, The Sessional Hymn, in Tone I:", "p5 sessional 2 rubric"),
      sessional_2: u2("Martyrs of Christ (names), * intercede on behalf of us who come to you in faith, * for as protectors of our lives * and through your intercessions, * the grace of healing is granted * and many an infirmity are driven away.", "p5 Sessional 2", { tone: 1, label: "plain", repeat: 2 }),
      sessional_2_closer: u2("O most pure Theotokos, * thou who art blessed in the heavens * and glorified upon the earth ** Rejoice, thou Bride unwedded!", "p5 Sessional 2 closer", { sourceLabel: "Glory ..., Both now ..., Theotokion in Tone I", tone: 1, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),

      megalynarion_rubric: u1("After the Polyeleos, the Megalynarion:", "p5 megalynarion rubric"),
      megalynarion: u1("We magnify you, O glorious wonder-workers (names), and honor your precious sufferings which ye have endured for Christ.", "p5 Megalynarion", { label_inline: true }),
      megalynarion_verse: u1("Our God is our refuge and strength, a helper in afflictions which mightily befall us.", "p5 Megalynarion verse", { sourceLabel: "Verse", label: "refrain" }),

      sessional_polyeleos_rubric: u1("After the Polyeleos, the Sessional Hymn, in Tone V:", "p5 post-Polyeleos sessional rubric"),
      sessional_polyeleos: u2("The feast of the Martyrs (names), * brightly shineth forth today, * for they dwell in the heavenly and divine light; * the choir of Angels extolleth, * and the race of mankind rejoiceth; * for the holy ones ever intercede on behalf of our souls.", "p5 post-Polyeleos Sessional", { spec_mel: "The Co-beginningless Word ...", tone: 5, label: "plain", repeat: 2 }),
      sessional_polyeleos_closer: u2("The mystery of the wondrous Virgin * hath been revealed to the world as one of salvation, * for from her was born jubilation; * O Lord, glory be to Thee.", "p6 post-Polyeleos Sessional closer", { sourceLabel: "Glory ..., Both now ..., Theotokion in Tone V", tone: 5, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),

      // NOT an R-5 exclusion, contrary to the handoff. `If not a Resurrection
      // Service, Sing the following:` is followed by the Songs of Ascent PRINTED
      // IN FULL — the same three texts the fixture already carries. Only the
      // rubric wording and the intro heading differ.
      anabathmoi_rubric: u1("If not a Resurrection Service, Sing the following:", "p6 anabathmoi rubric"),
      anabathmoi_intro: u1("The Songs of Ascent: in Tone IV, First Antiphon:", "p6 anabathmoi heading"),
      anabathmoi: [
        u2("From my youth * do many passions war against me; * but do Thou Thyself defend ** and save me, O my Savior.", "p6 Anabathmoi 1", { label: "plain" }),
        u2("Ye haters of Zion * shall be shamed by the Lord; * for like grass, by the fire ** shall ye be withered.", "p6 Anabathmoi 2", { label: "plain" }),
      ],
      anabathmoi_closer: u2("In the Holy Spirit, * every soul is quickened, * and, through cleansing, is exalted ** and made radiant by the Triple Unity in a hidden sacred manner.", "p6 Anabathmoi closer", { sourceLabel: "Glory ..., Both now ...,", type: "plain", label: ["glory", "both_now"] }),

      prokeimenon_rubric: u1("Prokeimenon, in Tone IV:", "p6 prokeimenon rubric"),
      prokeimenon: u2("In the saints that are in His earth, hath the Lord been wondrous, * He hath wrought all His desires in them.", "p6 Prokeimenon", { sourceLabel: "The Prokeimenon", tone: 4, label_inline: true }),
      prokeimenon_verse: u1("I beheld the Lord ever before me, for He is at my right hand that I might not be shaken.", "p6 Prokeimenon verse", { sourceLabel: "Verse", label: "refrain" }),

      gospel_rubric: u1("Let every breath.", "p6 Let every breath"),
      gospel: { heading: 'THE GOSPEL ACCORDING TO ST. MATTHEW',
        src: { file: U, locus: 'p6 Matins Gospel' },
        citation_verbatim: '(9: 36-38; 10: 5-8)',
        citation: { book: 'Matthew', chapter: 9, verses: '36-38; 10:5-8' },
        citation_basis: 'printed',
        provenance_note: 'THE PRINTED REFERENCE UNDER-STATES THE PRINTED BODY. The heading cites 9:36-38 and 10:5-8, but the body also prints 10:1-4 in full (the calling of the twelve and the list of their names). Measured against public/bible: 0.992 for Matthew 9:36-10:8 against 0.796 for the span the heading claims. Unlike the Liturgy epistle in this same file, the reference names the RIGHT book and every verse it cites IS printed, so it is stored as printed and resolvable; what is recorded here is that following it will show a reader less than the page does. The body also prints "when Jesus: saw the multitudes" with a stray colon — unregistrable for the same R-4 reason.' },

      psalm50_rubric: u1("After the 50th Psalm:", "p6 After the 50th Psalm"),
      psalm50_sticheron: u2("Through the prayers of the Holy Unmercinaries (names), * O Merciful One, ** blot out the multitude of our transgressions.", "p6 Psalm 50 Glory", { sourceLabel: "Glory ..., in Tone VI", tone: 6, label: "glory" }),
      psalm50_closer: u2("Through the prayers of the Theotokos, * O Merciful One, ** blot out the multitude of our transgressions.", "p7 Psalm 50 Both now", { sourceLabel: "Both now ...,", type: "theotokion", label: "both_now" }),
      psalm50_verse: u2("Have mercy on me, O God, * according to Thy great mercy; * and according to the multitude of Thy compassions, ** blot out my transgressions.", "p7 Psalm 50 verse", { label: "refrain" }),
      sessional_post50_rubric: u1("Then the Sessional Hymn: in Tone I:", "p7 post-Psalm-50 sessional rubric"),
      sessional_post50: u2("The resplendent, holy, and beauteous, * all-festive celebration of the Martyrs (names), * illumineth the whole of creation, * driving away the darkness of sin, * shedding the grace of healing upon all.", "p7 post-Psalm-50 Sessional", { tone: 1, label: "plain" }),

      canon_rubric: u1("The Canon, in Tone VIII,", "p7 Canon rubric"),
      canons: [{
        title: 'The Canon, in Tone VIII,', tone: 8,
        odes: {
          1: {
            irmos: u2("Let us, O ye people, send up a hymn * unto our wondrous God * Who hath freed Israel from bondage, * chanting a hymn of victory * and crying aloud: * We sing unto Thee, O only Master.", "p7 Ode I irmos", { sourceLabel: "Irmos", label_inline: true }),
            refrain: u1("Holy Unmercinaries (names) pray to God for us", "p7 Ode I refrain", { sourceLabel: "Refrain", label_inline: true }),
            items: [
              u1("Let us hymn Christ the Savior who, through the grace of healing hath revealed the unmercenaries and physicians (names), as healers throughout all the world, curing the infirmities of all, for unto the ages is He glorified.", "p7 Ode I troparion 1", { label: "plain" }),
              u1("From the holy ones, as from wellsprings of spiritual grace, rivers of miracles flow forth healing all manner of infirmities; let us, O faithful, praise Him Who hath granted them this power, for unto the ages is He glorified.", "p7 Ode I troparion 2", { label: "plain" }),
              u1("Unmercenary physicians, bring your prayers unto God, that He deliver us from temptations and our many afflictions and from the terrible and frightful torments.", "p7 Ode I troparion 3", { label: "plain" }),
              u1("Ceaseless protection of the afflicted, salvation and hope of the despairing, O all-praised Theotokos, ever entreat Christ that we be delivered from all misfortunes.", "p7 Ode I Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          3: {
            irmos: u2("My heart is established in the Lord, * my horn is exalted in my God, * my mouth is enlarged against mine enemies, * and I rejoice in Thy salvation.", "p7 Ode III irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              u1("Unto those born on earth O Lord, Thou hast revealed Thy holy (names), as mystic rays illumining the whole world; reveal also Thy mercies unto us.", "p7 Ode III troparion 1", { label: "plain" }),
              u1("Since ye have freely received the gift of healing from God, you unselfishly grant healing, driving away demons, in accordance with the words of our Lord and God.", "p7 Ode III troparion 2", { label: "plain" }),
              u1("The world ever hymneth your great charity and the multitude of your miracles, O holy physicians and wonder-workers, companions of the Angels.", "p7 Ode III troparion 3", { label: "plain" }),
              u1("We ever praise thee , O most pure one, as the divine tabernacle, the throne, and the portal, that hath sprung forth from David, and who hath given birth to God incarnate.", "p7 Ode III Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          4: {
            irmos: u2("From the overshadowed mountain, * from the only Theotokos, * the Prophet in divine vision * foresaw Thy coming in the flesh, O Word, * and with fear he glorified Thy power.", "p8 Ode IV irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              u1("Wondrous is the Savior, our God, for the bare bones of His holy ones lie in their tombs, but work wondrous and awesome miracles throughout the world; glory to Thy might, O Lord.", "p8 Ode IV troparion 1", { label: "plain" }),
              u1("Having forsaken earthly things as corruptible, O holy ones, ye have become inheritors of Zion and worthy citizens of the Kingdom of Christ.", "p8 Ode IV troparion 2", { label: "plain" }),
              u1("Worthily are you praised on earth, O healers of the sick and unmercenaries (names), for after your repose ye deliver all from their infirmities.", "p8 Ode IV troparion 3", { label: "plain" }),
              u1("Rejoice, tabernacle of the glory of God; Rejoice, weapon and fiery throne; Rejoice, overshadowed mount, from which was hewn the cornerstone, even Christ.", "p8 Ode IV Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          5: {
            irmos: u2("Rising early we cry to Thee, O Lord; * save us, for Thou art our God, * and we know none other besides Thee.", "p8 Ode V irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              u1("Having received from God the power to heal, O unmercenaries (names), ye heal the diseases of all the infirm.", "p9 Ode V troparion 1", { label: "plain" }),
              u1("Deemed worthy of great gifts from the Lord, O holy ministers, you selflessly cure all.", "p9 Ode V troparion 2", { label: "plain" }),
              u1("Grant unto the whole world Thy mercies, O our Savior, for the sake of the intercessions of thy holy ministers (names), as Thou alone art Compassionate.", "p9 Ode V troparion 3", { label: "plain" }),
              u1("Remaining a Virgin after birth we praise thee, O Mother of God, for thou hast brought into the world the Word of God in the flesh.", "p9 Ode V Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          6: {
            irmos: u2("As Thou didst deliver the prophet from the depths * of the abyss, O Christ God, * so deliver me also from my sins, * O Lover of mankind, * and guide my life, I pray Thee.", "p9 Ode VI irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              u1("Sailing on the sea of life and peacefully traversing the abyss, ye devoutly reached the calm haven, the highest kingdom, O holy unmercenaries.", "p9 Ode VI troparion 1", { label: "plain" }),
              u1("O holy unmercenaries, as wellsprings overflowing with grace ye emit wondrous healings, driving away maladies; ever intercede on behalf of our souls.", "p9 Ode VI troparion 2", { label: "plain" }),
              u1("Dwelling now joyfully in the heavens, O Martyrs, hasten to visit your venerable temple and cure our bodily infirmities and the passions of our souls.", "p9 Ode VI troparion 3", { label: "plain" }),
              u1("Let us praise her who is loftier than the Cherubim, the summit all creation, and who alone hath given birth unto the Creator and Lord opening unto us the gates of paradise.", "p9 Ode VI Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          7: {
            irmos: u2("O Thou who in the beginning founded the earth * and by Thy word made the heavens firm, * blessed art Thou throughout the ages, * O Lord God of our Fathers.", "p9 Ode VII irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              u1("Unto Thee, Who hath gloriously magnified the memory of the most wise unmercenaries on earth, do we chant: “Blessed art Thou, O Lord, God of our Fathers”", "p10 Ode VII troparion 1", { label: "plain" }),
              u1("Unto Thee, Who hath revealed the holy wonder-workers as honorable examples, do we chant: “Blessed art Thou, O Lord, God of our Fathers.”", "p10 Ode VII troparion 2", { label: "plain" }),
              u1("Celebrating the venerable memory of the unmercenaries, we joyfully cry unto Thee, O most compassionate One: “Blessed art Thou, O Lord, God of our Fathers.”", "p10 Ode VII troparion 3", { label: "plain" }),
              u1("Unto Thee, who hath dwelt in the womb of the Virgin and therein renewed Adam, do we chant: “Blessed art Thou, O Lord, God of our Fathers.”", "p10 Ode VII Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          8: {
            irmos: u2("Glorified in the holy mountain, * the Lord revealed the mystery of the Ever-Virgin unto Moses * in the flames of the burning bush: * praise ye and supremely exalt Him throughout all ages.", "p10 Ode VIII irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              u1("Unto Him, who from on high, hath bestowed upon His unmercenaries the gifts of healing and to cure diseases, do we sing: “Hymn the Lord and supremely exalt Him throughout all ages ages.”", "p10 Ode VIII troparion 1", { label: "plain" }),
              u1("Unto Him, who hath bestowed upon His saints the grace to cure the infirmities of the diseased and to deliver our souls from the passions, do we sing: “Hymn the Lord and supremely exalt Him throughout all ages ages.”", "p10 Ode VIII troparion 2", { label: "plain" }),
              u1("Who will not praise the unmercenaries for their virtuous lives, excelling that of all men? For they ceaselessly work great wonders, wherefore we sing: “Hymn the Lord and supremely exalt Him throughout all ages ages.”", "p10 Ode VIII troparion 3", { label: "plain" }),
              u1("Unto Him, who beyond all telling, made His abode within the womb of the Virgin, renewing fallen man, do we sing: “Hymn the Lord and supremely exalt Him throughout all ages ages.”", "p10 Ode VIII Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          9: {
            irmos: u2("With never ceasing praises we magnify thee, * the Mother of God Most High, * who art higher than the all-pure hosts, * and who beyond comprehension knew not wedlock, * yet hath truly given birth to God.", "p10 Ode IX irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              u1("O holy unmercenaries (names), your shrines appear as fonts of healing, fleeing unto them as is meet, the faithful obtain healing.", "p11 Ode IX troparion 1", { label: "plain" }),
              u1("All ye who suffer from ailments, come and be cured of your various infirmities; come also ye beasts, for from the shrine of the holy ones issueth forth streams of miracles.", "p11 Ode IX troparion 2", { label: "plain" }),
              u1("Finding your abode in the highest habitations, O holy ones, ye are also with us in the midst of your holy temple, invisibly bestowing your compassions upon us who send up hymns to the Almighty and devoutly bless you, O all-praised ones.", "p11 Ode IX troparion 3", { label: "plain" }),
              u1("Thou, O Theotokos, art our rampart and refuge, the protectress of all those who flee unto thee; we entreat thee to deliver us from our enemies.", "p11 Ode IX Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
        },
      }],

      sessional_ode3_rubric: u1("The Sessional Hymn, in Tone IV:", "p8 post-Ode-III sessional rubric"),
      // The Spec. Mel. prints WITHOUT the trailing ellipsis and colon every other
      // Spec. Mel. in this file carries. Stored as printed; registered.
      sessional_ode3: u2("Treading under your feet the sweet things of this life, * and by grace joyfully giving yourselves over to godly Martyrdom, * O sufferers and beacons of the inhabited world (names); * ye now intercede for us before God, Who is above all, * wherefore we entreat you * to deliver us from the darkness of sin and our infirmities.", "p8 post-Ode-III Sessional", { spec_mel: "Thou that wast of Thy free will", tone: 4, label: "plain" }),
      sessional_ode3_closer: u2("O Virgin Theotokos, * thou art an invincible wall for all Orthodox Christians. * For having recourse unto thee we remain unharmed * and in thee we have a sure intercessor for the forgiveness of our sins; * wherefore rendering thanks unto thee, we cry aloud! ** Rejoice, O thou who art full of grace, the Lord is with thee.", "p8 post-Ode-III Sessional closer", { sourceLabel: "Glory ..., Both now ..., Theotokion in Tone IV", tone: 4, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      sessional_ode3_stavrotheotokion: u2("O most immaculate Virgin, * Mother of Christ God, * a sword pierced thy most holy soul * when thou didst behold thy Son and God * crucified of His own will. * Him do thou never cease to entreat, O blessed one, ** that He grant us the forgiveness of our transgressions.", "p8 post-Ode-III Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),

      kontakion_rubric: u1("The Kontakion from the Typicon; but if there be none, chant the following:", "p9 kontakion rubric"),

      exapostilarion_rubric: u1("Exapostilarion, in Tone III:", "p11 exapostilarion rubric"),
      exapostilarion: u2("O ye wonder-working beacons (names)! * having received from God the grace of healing, * heal our diseases of both soul and body.", "p11 Exapostilarion", { spec_mel: "The heaven with stars ...", tone: 3, label: "plain" }),
      exapostilarion_closer: u2("As an uncultivated vine, O Virgin, * thou didst sprout forth the most comely Cluster of grapes * Which poureth forth upon us the wine of salvation * making glad the souls and bodies of all. * Wherefore, ever blessing thee as the cause of good things, * with the angel we cry out to thee: ** Rejoice, O thou who art full of grace!", "p11 Exapostilarion closer", { sourceLabel: "Glory ..., Both now ..., Theotokion in Tone III", tone: 3, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),

      // ── THE TAIL INVERTS ──────────────────────────────────────────────────
      // Monastic, Monastics, Martyr and Martyrs all print `On the Praises, these
      // Stichera` here. This file prints NO Praises and an APOSTICHA instead.
      // The keys are different because the printed headings are different, and
      // keying on the full printed heading rather than the bare label is the
      // standing rule. The absence is declared with a basis, not left silent.
      praises: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "p11-p12 print `On the Aposticha, the Stichera, in Tone II:` where the four previously encoded files print `On the Praises, these Stichera`. There is no Praises section anywhere in this file; pp.11-12 were read in full to confirm it." },
      aposticha_rubric: u1("On the Aposticha, the Stichera, in Tone II:", "p11 Matins Aposticha rubric"),
      // No verses are printed at this aposticha — three stichera, then Glory,
      // Both now and a Stavrotheotokion. The Vespers aposticha in this same file
      // DOES print verses, so this is a per-position source fact.
      aposticha: [
        u2("Physicians of the infirm, * treasuries of healing, and the salvation of the faithful, * most glorious unmercenaries! * Help those that call upon you in their time of need * and heal them of their sicknesses, * ever entreating the good Lord that we be delivered * from the snares of our enemies.", "p11 Matins Aposticha 1", { tone: 2, label: "plain", repeat: 2 }),
        u2("The fount of healing at Bethesda * healed but one sick person per year, * but the temple of the unmercenaries * doth heal a multitude of sufferers; * for the wealth of the holy ones is inexhaustible; * by their intercessions have mercy upon us, O Christ.", "p11 Matins Aposticha 2", { label: "plain" }),
        u2("The choir of the holy ones doth forever rejoice, * for they have inherited the Kingdom of heaven, * and the earth, having received their relics, doth emit sweet fragrances, * for they were servants of Christ * and have entered into eternal life.", "p11 Matins Aposticha 3", { label: "plain" }),
      ],
      aposticha_glory: u2("Never ending is the grace which the holy ones have received from Christ, * wherewith their relics ceaselessly work miracles, * and invoking their names with faith, they heal incurable diseases, * O Lord, as Thou art the Lover of mankind * by their prayers deliver us from bodily and spiritual suffering.", "p11 Matins Aposticha Glory", { sourceLabel: "Glory ..., in Tone VI", tone: 6, label: "glory" }),
      aposticha_closer: u2("O all-hymned Theotokos, * the joy of all who sorrow, * the health of the diseased, * the peace of the persecuted, * the tranquility of the distressed, * intercession of the faithful, ** save thy city and thy people.", "p11 Matins Aposticha Both now", { sourceLabel: "Both now ..., Theotokion in Tone VI", tone: 6, type: "theotokion", label: ["both_now", "theotokion"] }),
      aposticha_stavrotheotokion: u2("The most pure one seeing Thee hanging upon the cross * with maternal tears cried aloud to Thee: * “O my Son and God, * O my sweetest Child, * how is it that Thou sufferest ** such a shameful death?”", "p12 Matins Aposticha Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),

      // ── THE DOXOLOGY, AND WHAT THE CONDITIONAL ACTUALLY GOVERNS ───────────
      doxology_rubric: u1("The Doxology:", "p12 The Doxology"),
      // NOT a third form of the Doxology. It conditions the POSITION OF THE
      // TROPARION. The fixture's `great_doxology_rubric` — `The great Doxology:
      // If a small Doxology is read the following is chanted after the Aposticha:`
      // — governs which text follows the Doxology, a different question, and this
      // file does not print it.
      doxology_troparion_rubric: u1("If the service be with the Great Doxology, but not a Resurrection service, the Troparion is sung after the Doxology:", "p12 doxology troparion rubric"),
      // The `*` print site (see the entry-level troparion). Stored per-position
      // rather than resolved against the canonical field, because it is not
      // byte-identical to it.
      doxology_troparion: u2("O Holy and unmercenary wonderworkers, visit our infirmities. * Freely ye have received, freely give.", "p12 Troparion after the Doxology", { sourceLabel: "Troparion, in Tone VIII", tone: 8 }),
      great_doxology_rubric: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "p12 prints only the bare `The Doxology:` and the troparion-position conditional. The fixture's great/small-Doxology rubric, and the Glory and closer that follow it there, are not printed in this file." },
      doxology_glory: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "p12: nothing stands between the troparion-position rubric and the Dismissal." },
      closing_rubric: u1("The Dismissal:", "p12 Dismissal"),
    },

    // ── AT LITURGY ──────────────────────────────────────────────────────────
    liturgy: {
      order: ['beatitudes_rubric', 'beatitudes', 'propers_rubric',
              'liturgy_troparion', 'kontakion', 'prokeimenon',
              'prokeimenon_verse', 'epistle', 'alleluia', 'alleluia_verse',
              'gospel', 'communion_verse'],

      beatitudes_rubric: u1("Typika and Beatitudes.", "p13 Typika and Beatitudes"),
      // BYTE-IDENTICAL to the canon at all seven positions — Ode III troparia
      // 1-3, Ode VI troparia 1-3, and the Ode VI Theotokion. That is the
      // Monastic and Martyrs behaviour, not the Monastics one. THREE files
      // identical, ONE variant. Stored per-position regardless (§2.3): the
      // tally is the argument, and Monastics is why.
      beatitudes: [
        u1("Unto those born on earth O Lord, Thou hast revealed Thy holy (names), as mystic rays illumining the whole world; reveal also Thy mercies unto us.", "p13 Beatitude 1", { label: "plain", repeat: 2 }),
        u1("Since ye have freely received the gift of healing from God, you unselfishly grant healing, driving away demons, in accordance with the words of our Lord and God.", "p13 Beatitude 2", { label: "plain" }),
        u1("The world ever hymneth your great charity and the multitude of your miracles, O holy physicians and wonder-workers, companions of the Angels.", "p13 Beatitude 3", { label: "plain" }),
        u1("Sailing on the sea of life and peacefully traversing the abyss, ye devoutly reached the calm haven, the highest kingdom, O holy unmercenaries.", "p13 Beatitude 4", { label: "plain" }),
        u1("O holy unmercenaries, as wellsprings overflowing with grace ye emit wondrous healings, driving away maladies; ever intercede on behalf of our souls.", "p13 Beatitude 5", { label: "plain" }),
        u1("Dwelling now joyfully in the heavens, O Martyrs, hasten to visit your venerable temple and cure our bodily infirmities and the passions of our souls.", "p13 Beatitude 6", { label: "plain" }),
        u1("Let us praise her who is loftier than the Cherubim, the summit all creation, and who alone hath given birth unto the Creator and Lord opening unto us the gates of paradise.", "p13 Beatitude 7", { label: "theotokion", sourceLabel: "Theotokion", label_inline: true }),
      ],

      propers_rubric: u1("The Troparion and Kontakion from the Typicon, but if there be none, chant the following:", "p13 propers rubric"),
      // The second `*` print site. Byte-identical to p12's, and NOT to the
      // entry-level canonical field.
      liturgy_troparion: u2("O Holy and unmercenary wonderworkers, visit our infirmities. * Freely ye have received, freely give.", "p13 Troparion at Liturgy", { sourceLabel: "Troparion, in Tone VIII", tone: 8 }),

      // The label carries a PSALM CITATION — `(Psalm 15:3, 8)` — which no
      // prokeimenon label in the four encoded files does. Stored verbatim in
      // `sourceLabel`; it is a reference to a psalm verse, not a reading
      // citation, so it takes no citation node.
      prokeimenon: u2("In the saints that are in His earth, hath the Lord been wondrous, * He hath wrought all His desires in them.", "p13 Liturgy Prokeimenon", { sourceLabel: "Prokeimenon, in Tone IV, (Psalm 15:3, 8)", tone: 4, label_inline: true }),
      prokeimenon_verse: u1("I beheld the Lord ever before me, for He is at my right hand that I might not be shaken.", "p13 Liturgy Prokeimenon verse", { sourceLabel: "Verse", label: "refrain" }),

      // ── THE PRINTED CITATION NAMES THE WRONG BOOK ─────────────────────────
      epistle: { heading: 'THE EPISTLE TO THE ROMANS.',
        src: { file: U, locus: 'p13-p14 Epistle' },
        citation_verbatim: '(12:4-5, 15-21)',
        citation_disputed: {
          printed_as: 'Romans 12:4-5, 15-21',
          body_is: '1 Corinthians 12:27-31, 13:1-8',
          reconstruction: 0.944,
          printed_reconstruction: 0.262,
          note: 'The body printed under this heading opens "Ye are the body of Christ, and members in particular" and closes "Charity never faileth" — 1 Corinthians 12:27-31 and 13:1-8, which is the standard unmercenaries epistle. Measured against public/bible: 0.944 against 1 Corinthians, 0.262 against Romans 12:4-21. The book names the wrong epistle. NO resolvable citation is stored: under R-4 the stored citation IS the link the reader follows, and resolving this one would send them to Romans 12 to read text the Menaion does not print. Bill to confirm against the physical book — the PDF may be faithful to a genuine misprint.' } },

      alleluia: u1("Behold now, what is so good or so joyous as for brethren to dwell together in unity.", "p14 Alleluia", { sourceLabel: "Alleluia, in Tone II", tone: 2, label_inline: true }),
      alleluia_verse: u1("For there the Lord hath commanded blessing and life for evermore.", "p14 Alleluia verse", { sourceLabel: "Verse", label: "refrain" }),

      // FIRST PERICOPE NUMBER IN general.js. The four encoded files print bare
      // book-and-verse headings; this one prints the Slavonic-usage section
      // number as well, and it is correct: Matthew § 34 is Mt 10:1, 5-8.
      // Reconstructs at 1.000.
      gospel: { heading: 'GOSPEL ACCORDING TO MATTHEW,',
        src: { file: U, locus: 'p14 Liturgy Gospel' },
        citation_verbatim: '§ 34, (MT. 10: 1, 5-8)',
        citation: { book: 'Matthew', chapter: 10, verses: '1, 5-8', pericope_number: 34 },
        citation_basis: 'printed' },

      communion_verse: u1("Rejoice in the Lord, O ye Righteous; praise is meet for the upright.", "p14 Communion Verse", { sourceLabel: "Communion Verse", label_inline: true }),
    },
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // Heirarch.pdf — 16pp. SIXTH General Menaion file. (Source spells it
  // `Heirarch`; the service title reads HIERARCH. Both stored as printed.)
  //
  // THE HANDOFF SAID THIS FILE PRINTS `(Names)` CAPITALISED. IT DOES NOT.
  // Measured: Heirarch prints `(name)` ×38 and nothing else; `(Names)` ×2 is in
  // HEIRARCHS, the plural file. encoding_rule_v2.md §2.1 and menaion_v2_spec.md
  // §6.2 both say so correctly — two successive next-session prompts mis-copied
  // it from them. The ordering still holds on the divergence count alone
  // (10 novel rubrics against Heirarchs' 6); the `(Names)` case arrives with
  // Heirarchs. A summary is not the source, again.
  //
  // What is actually novel here:
  //
  // 1. THE TEXTLESS CONDITIONAL CLOSER, at THREE sites. `Glory ..., Both now
  //    ..., Theotokion or Stavrotheotokion:` is printed as a label with no text
  //    beneath it (§6.2 — 80 instances across 21 files). Stored as absence
  //    nodes carrying the printed label in their note, which is the convention
  //    the four encoded files set. At the Doxology the same conditional is
  //    printed as `Both now ..., Theotokion or Stavrotheotokion:` and IS stored
  //    as a rubric text node — that is Monastic's treatment at the same
  //    position, and the asymmetry is the fixture's, not this file's.
  //
  // 2. A PRINTED COUNT IN A RUBRIC: `On the Praises, these 4 Stichera`. Three
  //    stichera are printed and the first carries `(Twice)` — 3 + 1 = the 4 the
  //    rubric names. The count RECONCILES with the repeat device rather than
  //    contradicting it, so it is not a sic. The fixture prints `these
  //    Stichera` with no number.
  //
  // 3. THREE VESPERS LESSONS, the first two from PROVERBS — a book general.js
  //    had not carried. None prints a reference. (An earlier pass here stored
  //    only TWO: the p2/p3 break falls mid-word and the segmenter swallowed the
  //    second heading. See the note on `readings`.)
  //
  // 4. A LONGER GREAT-DOXOLOGY CONDITIONAL than the fixture's, adding `and a
  //    Doxasticon is appointed`. Stored verbatim; not folded into the shorter
  //    form the other files print.
  //
  // R-1 collapses cleanly here, unlike Unmercenaries: the troparion is
  // byte-identical at all four of its print sites and the kontakion at both of
  // its. That file's split was a property of that file, not of the book.
  //
  // EXTRACTION: `dedupe_chars()` left one residue — p8's ODE I extracts as
  // `OODDEE II`. Second file in a row with exactly one. Transcribed as `ODE I`;
  // noted, not registered, because the page prints it correctly.
  Heirarch: {
    title: h1("THE GENERAL VIGIL SERVICE TO ONE HIERARCH.", "p1 title"),
    // Four print sites, byte-identical at every one.
    troparion: h2("The truth of things revealed thee to thy flock as a rule of faith, * icon of meekness, and teacher of temperance; * wherefore, thou hast attained the heights through humility and riches through poverty; * O hierarch (name) our father, ** entreat Christ God, that our souls be saved.", "p5 Troparion", { sourceLabel: "Troparion, in Tone IV", tone: 4, verified_sites: [{"locus": "p5 Vespers dismissal", "tone": 4}, {"locus": "p6 God is the Lord", "tone": 4, "repeat": 2}, {"locus": "p14 after Our Father", "tone": 4}, {"locus": "p15 AT THE LITURGY", "tone": 4}] }),
    kontakion: h2("O Hierarch (name), * divine thunder, spiritual trumpet, * planter of faith and pruner of heresies, * great favorite of the Trinity, * standing with the Angels before God * unceasingly pray on behalf of us all.", "p11 Kontakion after Ode VI", { sourceLabel: "Kontakion. In Tone II", spec_mel: "From the highest ...", tone: 2, verified_sites: [{"locus": "p11 after Ode VI", "tone": 2}, {"locus": "p15 AT THE LITURGY", "tone": 2}] }),
    ikos: h1("O Father, through laziness I the wretched one have fallen into the sleep of death, but do thou, a good shepherd, raise me up, and subdue the passions which wickedly torment me, that on arising I may hymn thy bright festival with a pure spirit. O Father, whom the Master of the universe hath worthily glorified as a most faithful servant and most wise teacher, a friend of God and skilled minister of His traditions, which thou hast well preserved; Undefiled unction, most wise (name), unceasingly pray for us all.", "p11 Ikos", { sourceLabel: "The Ikos", label_inline: true }),

    vespers: {
      order: ['lic_rubric', 'lic', 'lic_closer', 'lic_stavrotheotokion',
              'idiomelon_rubric', 'lic_glory', 'dogmatikon_rubric', 'dogmatikon',
              'dogmatikon_alternate', 'dogmatikon_stavrotheotokion',
              'entrance_rubric', 'readings', 'aposticha_rubric', 'aposticha',
              'aposticha_glory', 'aposticha_closer_label', 'aposticha_closer_rubric',
              'aposticha_closer', 'aposticha_alternate', 'aposticha_stavrotheotokion',
              'troparion_rubric', 'troparion', 'closer', 'closing_rubric'],
      lic_rubric: h1("On “Lord, I have cried ...,” the Stichera, in Tone VI:", "p1 LIC rubric"),
      lic: [
        h2("Thou wast revealed as wholly consecrated and God-bearing, * vested with the Holy Spirit * and anointed with the holy chrism of God; * serenely ever approaching the holy of holies, * illumined with the splendor proceeding from God, * and initiated into the holy mysteries by grace, * as a true and most glorious Hierarch, * with boldness thou dost make entreaty ** for our souls.", "p1 LIC 1", { spec_mel: "Having set aside ...", label: "plain" }),
        h2("Thy life became resplendent with the radiance of the virtues, * and hath illumined the faithful, * and dispersed the foggy mist of error, * for thou O most blessed Hierarch (name) * didst truly appear as a radiant sun; * and now having become, by the grace of the Holy Spirit, * a son of the day, * thou hast made thine abode wherein the Never-waning Light doth shine; * wherefore, honorably celebrating thy divine and radiant memory, ** we venerate thee with love, O ever-memorable one.", "p1 LIC 2", { spec_mel: "Having set aside ...", label: "plain" }),
        h2("Thy mind, O Divinely-wise one, inclined unto God * and nourished by faith, * hath become radiantly divine * O all-glorious one, * in a mortal and corrupt body contemplating incorruption; * O most wise one, * thou hast acquired the splendor of the incorporeal ones, * and remaining passionless thou art adorned with dispassion, * O Father (name), most wise Hierarch, ** radiant light and intercessor for those who with faith honor thy memory.", "p1 LIC 3", { spec_mel: "Having set aside ...", label: "plain" }),
      ],
      lic_closer: h2("Rejoice, thou fulfillment of the law! * Rejoice, O temple of the Holy Trinity, * thou incorrupt Bride! * Rejoice, divine chariot of the King of all! * Rejoice, thou who like tongs * bore the Ember of immaterial fire in thine arms, * O new paradise, * garden enclosed, * divine and most radiant table, * undefiled dove, * throne of the Most High, * noetic bed of God, ** whom the Holy Spirit covered, O Maiden!", "p1 LIC closer", { sourceLabel: "Glory ..., Both now ..., Theotokion in Tone VI", tone: 6, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      lic_stavrotheotokion: h2("When, of old, the unblemished ewe-lamb and immaculate Lady, * beheld her Lamb * upon the tree of the Cross, * she exclaimed maternally, and marveling cried aloud: * “O my Child most sweet, * what is this new and most strange sight I see? * How hath the thankless synagogue * betrayed Thee to the judg-ment-seat of Pilate * and condemned Thee to death, * Who art the Life of all? * Yet I hymn Thine ineffable condescension, ** O Word!”", "p1 LIC Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      // `In Tone VIII` — capitalised preposition, where the fixture prints `in`.
      idiomelon_rubric: h1("If an Idiomelon be appointed, Glory ..., In Tone VIII:", "p1 idiomelon rubric"),
      lic_glory: h2("The fruits of thy virtues, * O venerable Father, * hath enlightened the hearts of the faithful; * for upon hearing of thine immeasurable humility * who could not but wonder at thy patience, * at thy gentle kindness towards the poor and needy, * at thy consolation of the sorrowing? * For in a Godly manner thou hast instructed all, * O Hierarch (name), * and now adorned with a never-fading crown; ** intercede for our souls.", "p1 Glory idiomelon", { sourceLabel: "If an Idiomelon be appointed, Glory ..., In Tone VIII", tone: 8, label: "glory" }),
      dogmatikon_rubric: h1("If the Celebration be with a Polyeleos, and not a Resurrection Service, sing the following Dogmatic, in Tone VIII (If the service is a Resurrection service sing the Dogmatic of the Tone for that service ):", "p2 dogmatikon rubric"),
      dogmatikon: h2("In His love for mankind, the King of heaven appeared on earth * and dwelt among men; * for He Who received flesh from the pure Virgin * and cameth forth from her having received human nature, * is the only Son of God, * twofold in nature but not Hypostasis. * Therefore, proclaiming Him to be truly perfect God and perfect man, * we confess Christ our God. * Him do thou beseech, O unwedded Mother, ** that our souls find mercy!", "p2 Both now dogmatic", { sourceLabel: "Both now ..., In Tone VIII", tone: 8, type: "dogmatic_theotokion", label: "both_now" }),
      dogmatikon_alternate: h2("Thy shelter, O Virgin Theotokos, * is spiritual healing; * for, having recourse unto it, ** we are delivered from spiritual infirmities.", "p2 Otherwise Theotokion", { sourceLabel: "Otherwise, Theotokion", type: "theotokion", label: "theotokion", label_inline: true }),
      dogmatikon_stavrotheotokion: h2("“I cannot bear O my child, to behold Thee, * Who dost grant life and health unto all, * hung upon the Tree; * for of old those who were lulled into the sleep of death * by the fruit of the transgression * have been awakened * and granted divine and salvific life and health by Thee”, * thus said the Virgin weeping, ** whom we magnify.", "p2 Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      entrance_rubric: h1("The Entrance. The Prokeimenon of the day. The Three Lessons if appointed:", "p2 entrance rubric"),
      // THREE lessons — Proverbs, Proverbs, Wisdom — and the first two are from
      // a book general.js had not carried. None prints a reference.
      //
      // THIS SLOT WAS ENCODED WRONG ONCE, IN THE SESSION THAT FIRST ENCODED THIS
      // FILE, AND EVERY GATE PASSED. The p2/p3 page break falls mid-word
      // ("Blessed is the man who sh|all keep my ways"), so the paragraph
      // segmenter never started a new unit at the p3 heading and lesson 2 was
      // absorbed into lesson 1. Two readings were stored where three are
      // printed. The PAGE-COVERAGE TRIPWIRE DID NOT CATCH IT: p3 was cited, by
      // the very locus of the reading that had swallowed the other. That check
      // proves a page was READ, not that everything ON it was encoded.
      //
      // Found by the cross-file heading census in
      // menaion_v2_general_menaion_analysis.md — Heirarchs prints the same three
      // lessons WITH references, which is also where the citations below come
      // from: (3, 13-16; 8, 6), (10, 31-32 ; 11, 1-10) and (4, 7-15.).
      readings: [
        { heading: 'THE READING IS FROM BOOK OF PROVERBS',
          src: { file: H, locus: 'p2-p3 Lesson 1' },
          citation: { book: 'Proverbs', chapter: 10, verses: '10:7, 3:13-16, 8:6' },
          citation_basis: 'identified',
          provenance_note: 'Heading omits THE before BOOK OF PROVERBS; lesson 2 on the next page prints it. Composite: opens at Proverbs 10:7 ("The memory of the just is praised"), moves to 3:13-16 ("Blessed is the man who hath found wisdom"), then 8:6 — so no contiguous span reconstructs it. Heirarchs.pdf prints the corresponding lesson WITH a reference, "(3, 13-16; 8, 6)", which omits the 10:7 opening this file carries. Identified, not derived; confirm the span against the printed page.' },
        { heading: 'THE READING IS FROM THE BOOK OF PROVERBS',
          src: { file: H, locus: 'p3 Lesson 2' },
          citation: { book: 'Proverbs', chapter: 10, verses: '10:31-32, 11:1-10' },
          citation_basis: 'identified',
          provenance_note: 'Opens "The mouth of the righteous droppeth wisdom" (Proverbs 10:31) and runs through 11:1-10. Heirarchs.pdf prints this same lesson cited "(10, 31-32 ; 11, 1-10)" — note the space before the semicolon there. Identified from that cross-file reference; confirm against the page.' },
        { heading: 'THE READING IS FROM THE WISDOM OF SOLOMON.',
          src: { file: H, locus: 'p3-p4 Lesson 3' },
          citation: { book: 'Wisdom of Solomon', chapter: 4, verses: '4:1, 6:11-12, 17-21' },
          citation_basis: 'identified',
          provenance_note: 'Heading carries a full stop where the two Proverbs headings do not — three lesson headings in one file, three forms. Composite, opening at Wisdom 4:1 ("When the righteous is praised") and running into the Wisdom 6 material. Heirarchs.pdf cites its corresponding lesson "(4, 7-15.)", a DIFFERENT pericope, so the plural file confirms the book and not the span. Identified; confirm against the page.' },
      ],
      aposticha_rubric: h1("On the Aposticha, these Stichera, In Tone VIII:", "p4 Aposticha rubric"),
      aposticha: [
        h2("O Hierarch (name), * radiance of the noetic light, * lamp of the Church, and adornment of Hierarchs, * true rule of the monastic life of fasting, * thou hast appeared as a defender of the faith ** delivering our souls from the destructive wiles of the enemy.", "p4 Aposticha 1", { tone: 8, label: "plain" }),
        h2("Precious in the sight of the Lord * is the death of His saints.", "p4 Aposticha verse 1", { sourceLabel: "Verse", label: "refrain" }),
        h2("O Hierarch (name), * having received from God great might, * by thy prayer thou dost expel the attacks of a multitude of evil spirits, ** from all those who with faith have recourse unto thee.", "p4 Aposticha 2", { label: "plain" }),
        h2("What shall I render unto the Lord * for all that he hath rendered unto me?", "p4 Aposticha verse 2", { sourceLabel: "Verse", label: "refrain" }),
        h2("How can we worthily hymn the great Hierarch (name), * the venerable mind, * the Godly-illumined light that doth enlighten and grant us divine understanding, * the confessor of profound mysteries. * Let us with one voice say: ** Rejoice O holy Hierarch (name), Father of our Fathers.", "p4 Aposticha 3", { label: "plain" }),
      ],
      aposticha_glory: h2("Thou art a good shepherd and a fervent teacher, * O Hierarch (name), * and ever praising thee we cry aloud: * God hath made thee an adornment of His Church * and unto His people revealed thine incorrupt body * which for many years remained hidden in the earth. * Wherefore cease not to make supplication unto Him on behalf of those * who praise thee and honor thy memory, * that by thy supplications we may obtain the remission of our sins ** and the salvation of our souls.", "p4 Aposticha Glory", { sourceLabel: "Glory ..., in Tone VIII", tone: 8, label: "glory" }),
      // The Both-now LABEL is printed BEFORE the conditional rubric, and the
      // text after it — an ordering the fixture does not have, so the label is
      // stored as its own element rather than folded into the closer it labels.
      aposticha_closer_label: h1("Both now ..., in Tone VIII:", "p5 Both now label"),
      aposticha_closer_rubric: h1("If the celebration be with a Polyeleos, chant the Resurrection Theotokion:", "p5 aposticha closer rubric"),
      aposticha_closer: h2("O unwedded Virgin! * thou who ineffably conceived God in the flesh, * Mother of God Most High: * accept the supplications of thy servants, O all-immaculate one, * granting unto all cleansing of transgressions; * and, accepting now our supplications, ** pray thou that we all be saved.", "p5 Resurrection Theotokion", { tone: 8, type: "theotokion", label: "theotokion" }),
      aposticha_alternate: h2("O Sovereign lady, * accept the supplications of thy servants, ** and deliver us from all want and grief.", "p5 Otherwise Theotokion", { sourceLabel: "Otherwise, Theotokion", type: "theotokion", label: "theotokion", label_inline: true }),
      aposticha_stavrotheotokion: h2("Beholding Thee O Lord Jesus, * nailed upon the cross and voluntarily accepting the passion, * the Virgin Mother cried aloud: * Woe is me, O my sweet Child! * how dost Thou wrongfully endure such wounds? * O compassionate Physician and healer of the infirmities of mankind, * Thou hast redeemed all from corruption ** by Thy tender compassion.", "p5 Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      troparion_rubric: h1("The Troparion from the Typicon; but if there be none, chant the following:", "p5 troparion rubric"),
      closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8, CLOSER_TYPES). Which of the two is used is Fekula's decision at assembly, and flattening it here would invent that decision. Same treatment as Monastic, Monastics, Martyr and Martyrs." },
      closing_rubric: h1("The Dismissal:", "p5 Dismissal"),
    },
    matins: {
      order: ['god_is_lord_rubric', 'troparion', 'troparion_closer',
              'sessional_1_rubric', 'sessional_1', 'sessional_1_closer',
              'sessional_2_rubric', 'sessional_2', 'sessional_2_closer',
              'megalynarion_rubric', 'megalynarion', 'megalynarion_verse',
              'sessional_polyeleos_rubric', 'sessional_polyeleos',
              'sessional_polyeleos_closer', 'anabathmoi_rubric', 'anabathmoi_intro',
              'anabathmoi', 'anabathmoi_closer', 'prokeimenon_rubric', 'prokeimenon',
              'prokeimenon_verse', 'gospel_rubric', 'gospel', 'psalm50_rubric',
              'psalm50_sticheron', 'psalm50_closer', 'psalm50_verse',
              'sessional_post50_rubric', 'sessional_post50', 'canon_rubric', 'canons',
              'sessional_ode3_rubric', 'sessional_ode3', 'sessional_ode3_closer',
              'sessional_ode3_stavrotheotokion', 'kontakion_rubric', 'kontakion', 'ikos',
              'exapostilarion_rubric', 'exapostilarion', 'exapostilarion_closer',
              'praises_rubric', 'praises', 'praises_glory', 'praises_closer',
              'praises_stavrotheotokion', 'doxology_rubric', 'great_doxology_rubric',
              'doxology_glory', 'doxology_closer_rubric', 'troparion_rubric',
              'troparion', 'closer', 'closing_rubric'],
      god_is_lord_rubric: h1("On “God is the Lord ...,” the Troparion in Tone IV:", "p6 God is the Lord rubric"),
      troparion_closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8). Which of the two is used is Fekula's decision at assembly." },
      sessional_1_rubric: h1("After the 1st chanting of the Psalter, the Sessional Hymn, in Tone I:", "p6 sessional 1 rubric"),
      sessional_1: h2("As a servant of Christ the Lord of all, * thou didst teach the peoples, * instructing them O Hierarch, to understand the truth, * and illumining them with divine baptism; * wherefore we all call thee a teacher of truth, * Hierarch and favorite of Christ.", "p6 Sessional 1", { spec_mel: "Thy Tomb O Savior ...", tone: 1, label: "plain", repeat: 2 }),
      sessional_1_closer: h1("O pure Virgin Theotokos who knewest not wedlock, thou sole intercessor and protection of the faithful: from tribulations, sorrows and cruel circumstances deliver all who place their trust in thee, O Maiden, and save our souls by thy divine supplications.", "p6 Sessional 1 closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone I", tone: 1, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      sessional_2_rubric: h1("After the 2nd chanting of the Psalter, the Sessional Hymn, in Tone IV:", "p6 sessional 2 rubric"),
      sessional_2: h2("From thy youththou didst take up thy Cross, * and devoutly follow Christ, * subduing the subtlety of the flesh by abstinence; * wherefore sitting on the Hierarchical throne, * thou didst magnify, O Hierarch, * the Lord and His most pure Mother, * Who have adorned thee with an abundance of spiritual gifts, O God-blessed (name).", "p6 Sessional 2", { tone: 4, label: "plain", repeat: 2 }),
      sessional_2_closer: h2("O all-immaculate Virgin * who hast given birth to the transcendent God: * do thou unceasingly entreat Him together with the Hierarch (name), * that He grant forgiveness of transgressions * and correction of life before the end, * to us who, as is meet, hymn thee with faith and love, ** O thou who alone art all-hymned.", "p6 Sessional 2 closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone IV", tone: 4, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      megalynarion_rubric: h1("After the Polyeleos, the Megalynarion:", "p6 megalynarion rubric"),
      megalynarion: h1("We magnify thee, O Hierarch, Father (name), and honor thy holy memory, for thou dost pray for us unto Christ our God.", "p6 Megalynarion", { label_inline: true }),
      // Same psalm verse as the Liturgy prokeimenon verse on p15 — and NOT the
      // same string: this site capitalises `the World`, p15 prints `the world`.
      // Registered as a variant.
      megalynarion_verse: h1("Hear this, all ye nations; give ear, all ye that inhabit the World.", "p6 Megalynarion verse", { sourceLabel: "Verse", label: "refrain" }),
      sessional_polyeleos_rubric: h1("After the Polyeleos the Sessional Hymn, in Tone VIII:", "p7 post-Polyeleos sessional rubric"),
      sessional_polyeleos: h2("Having ruled over the passions of the flesh, * and fervently tended thy flock * thou, O holy one, wast revealed to be a glorious and godly Hierarch; * for thou didst enlighten a multitude of people with holy baptism * enjoining them to glorify One God in three Hypostases; * wherefore even after thy repose thou dost pour forth healings * unto those who make pilgrimage to the holy temple of God * and approach the shrine of thy relics, * O Hierarch (name), * entreat Christ God that He grant remission of sins * unto those who with love honor thy holy memory.", "p7 post-Polyeleos Sessional", { spec_mel: "Of the wisdom ...", tone: 8, label: "plain", repeat: 2 }),
      sessional_polyeleos_closer: h2("Let us hymn the heavenly gate and ark, * the all-holy mountain, the cloud of light, the heavenly ladder, * the spiritual Paradise, the redemption of Eve, * the great treasure of the world; * because salvation for the world and forgiveness of ancient offences were wrought in her. * Therefore we cry unto her: * Intercede with thine own Son and God to grant forgiveness of offences ** to those who devoutly worship thy most holy Offspring.", "p7 post-Polyeleos Sessional closer", { sourceLabel: "Glory ..., Both now ..., Theotokion in Tone VIII", tone: 8, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      anabathmoi_rubric: h1("If of Polyeleos rank, and not a Resurrection Service, chant the following:", "p7 anabathmoi rubric"),
      anabathmoi_intro: h1("The Song of Ascents: The first antiphon, in Tone IV:", "p7 anabathmoi heading"),
      anabathmoi: [
        h2("From my youth * do many passions war against me; * but do Thou Thyself defend ** and save me, O my Savior.", "p7 Anabathmoi 1", { label: "plain" }),
        h2("Ye haters of Zion * shall be shamed by the Lord; * for like grass, by the fire ** shall ye be withered.", "p7 Anabathmoi 2", { label: "plain" }),
      ],
      anabathmoi_closer: h2("In the Holy Spirit, * every soul is quickened, * and, through cleansing, is exalted ** and made radiant by the Triple Unity in a hidden sacred manner.", "p7 Anabathmoi closer", { sourceLabel: "Glory ..., Both now ...,", type: "plain", label: ["glory", "both_now"] }),
      // Tone IV here; the LITURGY prokeimenon on p15 prints the SAME TEXT at
      // Tone I. §7.4 compares the two prokeimena and surfaces inequality as a
      // finding — the texts agree, so nothing is surfaced, and the tone
      // divergence is recorded here instead of being averaged away.
      prokeimenon_rubric: h1("The Prokeimenon, in Tone IV:", "p7 prokeimenon rubric"),
      prokeimenon: h2("My mouth shall speak wisdom, * and the meditation of my heart shall be of understanding.", "p7 Prokeimenon", { sourceLabel: "The Prokeimenon", tone: 4, label_inline: true }),
      prokeimenon_verse: h1("The mouth of the righteous shall meditate wisdom, and his tongue shall speak of judgement.", "p7 Prokeimenon verse", { sourceLabel: "Verse", label: "refrain" }),
      gospel_rubric: h1("Let every breath ...,", "p7 Let every breath"),
      gospel: { heading: 'THE GOSPEL ACCORDING TO ST. JOHN',
        src: { file: H, locus: 'p7-p8 Matins Gospel' },
        citation_verbatim: '(10, 1-9)',
        citation: { book: 'John', chapter: 10, verses: '1-9' },
        citation_basis: 'printed',
        provenance_note: 'Comma between chapter and verses where the Liturgy gospel on p16 prints a colon — two reference formats in one file.' },
      psalm50_rubric: h1("After the 50th Psalm:", "p8 After the 50th Psalm"),
      psalm50_sticheron: h2("Through the prayers of the Holy Hierarch (name), * O Merciful One, ** blot out the multitude of our transgressions.", "p8 Psalm 50 Glory", { sourceLabel: "Glory ..., in Tone VI", tone: 6, label: "glory" }),
      psalm50_closer: h2("Through the prayers of the Theotokos, * O Merciful One, ** blot out the multitude of our transgressions.", "p8 Psalm 50 Both now", { sourceLabel: "Both now ...,", type: "theotokion", label: "both_now" }),
      psalm50_verse: h2("Have mercy on me, O God, * according to Thy great mercy; * and according to the multitude of Thy compassions, ** blot out my transgressions.", "p8 Psalm 50 verse", { label: "refrain" }),
      sessional_post50_rubric: h1("Then the Sessional Hymn, in Tone VI:", "p8 post-Psalm-50 sessional rubric"),
      sessional_post50: h2("O initiate of God’s mysteries, * disciple of Christ, * servant of the Lord, * holy Hierarch (name), * thy life was in perfect accord with thy calling, * for together with the multitude of thy gray hairs there shone forth wisdom, * the serenity of thy countenance witnessed to the gentleness of thy soul * and the calm beauty of thy speech revealed thy compassionate nature. * Thy life upon the earth was glorious * and thy repose is with the saints; * do thou intercede on behalf of our souls.", "p8 post-Psalm-50 Sessional", { tone: 6, label: "plain" }),
      canon_rubric: h1("The Canon, In Tone VI:", "p8 Canon rubric"),
      canons: [{
        title: 'The Canon, In Tone VI:', tone: 6,
        odes: {
          1: {
            irmos: h2("When Israel walked on foot in the sea as on dry land, * on seeing their pursuer Pharaoh drowned, * they cried: * Let us sing to God * a song of victory.", "p8 Ode I irmos", { sourceLabel: "Irmos", label_inline: true }),
            refrain: h1("Holy Hierarch (name), pray to God for us", "p8 Ode I refrain", { sourceLabel: "Refrain", label_inline: true }),
            items: [
              h1("O Holy Hierarch, numbered with the Angelic hosts, servant of God, Thou wast found worthy to stand before Him, do thou ever entreat Him on our behalf, that by thy prayers we may obtain eternal blessings.", "p9 Ode I troparion 1", { label: "plain" }),
              h1("Elected by the Lord to serve the precious gospel, thou O blessed Father (name), nourished thy people with wisdom by thy wise instructions.", "p9 Ode I troparion 2", { label: "plain" }),
              h1("Enriched with God’s understanding, O most wise Hierarch of God, thou didst take the living-word that flowed from thy heart and feed it unto souls deadened by passions, O God-blessed (name).", "p9 Ode I troparion 3", { label: "plain" }),
              h1("The sacred choir of Prophets foretold of thee O pure one, as one who was to become a true Parent of God, higher than the Cherubim and all created things.", "p9 Ode I Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          3: {
            irmos: h2("There is none as holy as Thou, * O Lord my God, * who hast exalted the horn of Thy faithful O good One, * and strengthened us upon the rock * of Thy confession.", "p9 Ode III irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              h1("By Shedding forth divine sweetness from thy lips, O Father, thou hast banished the bitter drink of godlessness, giving to the thirsting devout the nectar of the knowledge of God, O blessed one.", "p9 Ode III troparion 1", { label: "plain" }),
              h1("Predestined by God’s judgment, thou didst appear O Hierarch offering the bloodless sacrifice unto God who offered up Himself for our sake, O Father Hierarch (name).", "p9 Ode III troparion 2", { label: "plain" }),
              h1("The sepulcher, wherein thy precious body lieth, is likened unto a Godly paradise, shedding forth redolent aromas, and filling the faithful with a sweet fragrance, O most glorious and all-honored Hierarch (name).", "p9 Ode III troparion 3", { label: "plain" }),
              h1("O pure one, the mind of man is incapable of comprehending the unspeakable depths of thy birth-giving, for God humbled Himself for the sake of compassion, and entirely renewed me in thy womb.", "p9 Ode III Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          4: {
            irmos: h2("Christ is my power, * my God and my Lord, * the holy Church divinely singeth, * crying with a pure mind, * keeping festival in the Lord.", "p9 Ode IV irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              h1("Filled with the Holy Spirit, O sacred Father (name), thou hast driven away evil spirits from men and made them faithful with thy spiritual instructions.", "p10 Ode IV troparion 1", { label: "plain" }),
              h1("Thou didst teach that God is a Unity undivided and yet known in three Hypostases, not separated nor mingled, thus enlightening the devout with thy sacred theology.", "p10 Ode IV troparion 2", { label: "plain" }),
              h1("Having first mortified the subtleties of the flesh by abstinence and spiritual labors, thou hast been revealed to be a divine Hierarch and an all-sacred intercessor before the Trinity.", "p10 Ode IV troparion 3", { label: "plain" }),
              h1("The foremothers curse hath been done away with by thee, O Mother of God; for thou, O most pure one, hast brought forth unto us the Source of holiness, the ever-lasting Life.", "p10 Ode IV Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          5: {
            irmos: h2("Illumine with Thy divine light, I pray, O Good One, * the souls of those who with love rise early to pray to Thee, * that they may know Thee, O Word of God, * as the true God, * Who recalleth us from the darkness of sin.", "p10 Ode V irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              h1("Performing the divine mysteries in a godly manner, and with a most pure mind approaching the holy things, thou hast blamelessly served God as a most sacred Hierarch.", "p10 Ode V troparion 1", { label: "plain" }),
              h1("By thy precious instructions those who were enslaved to idolatrous things have become favorites of God, and recalling them from their unworthy ways thou hast become a worthy servant of God Almighty.", "p10 Ode V troparion 2", { label: "plain" }),
              h1("Called by grace O holy one, to abolish the lawlessness of idolatry by the sacred waters of Thine instructions, thou hast, by the grace of God, made barren and frozen hearts fertile with the fruits of the spirit.", "p10 Ode V troparion 3", { label: "plain" }),
              h1("O Mary, who knewest not wedlock, thou hast remained a Virgin even after thy strange birth-giving, for it was God Who was born from thee and Who hath ordered all things as He willeth, O Bride of God.", "p10 Ode V Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          6: {
            irmos: h2("Beholding the sea of life surging with the tempest of temptations, * I run to Thy calm haven, and cry to Thee: * Raise up my life from corruption, * O greatly Merciful One.", "p10 Ode VI irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              h1("At the bidding of God, thy tongue, sharpened by the Spirit in spiritual acuity, inscribed in the hearts of the devout as with a scribe’s plume, the words of grace, O all-sacred Father.", "p11 Ode VI troparion 1", { label: "plain" }),
              h1("O sacred Father, as one who entered the spiritual holy of holies and there, by the light of the Trinity, learnt things divine, thou hast perfected in spirit the faithful, thyself being most perfect, O Holy Hierarch (name).", "p11 Ode VI troparion 2", { label: "plain" }),
              h1("Flushing away the foul commands of the wicked by the streams of thy commandments, thou hast appeared as a placid river watering with piety the communities of the faithful, O all-honored Hierarch.", "p11 Ode VI troparion 3", { label: "plain" }),
              h1("O all-immaculate Maiden favored of God, the Word hath, without seed, made His abode within thy womb and come forth as a perfect man, renewing in a godly manner human nature as He Himself alone knoweth.", "p11 Ode VI Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          7: {
            irmos: h2("An Angel made the furnace bedew the holy Children. * But the command of God consumed the Chaldeans * and prevailed upon the tyrant to cry: * O God of our fathers, blessed art Thou.", "p11 Ode VII irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              h1("Thou wast Illumined by the grace of the Spirit to comprehend the Divine will, and thus appeared as a radiant star enlightening those who wisely chant: “O God of our fathers, blessed art Thou.”", "p11 Ode VII troparion 1", { label: "plain" }),
              h1("O sacred Hierarch of the most holy Church, shining with virtuous deeds, the uncreated Trinity made its abode within thee, wherefore thou dost sing: “O God of our fathers, blessed art Thou.”", "p11 Ode VII troparion 2", { label: "plain" }),
              h1("Repelling sleep from thine eyes, with divine vigor thou didst receive the Divine Light from the Source of Light, Who hath made thee a pillar and support of the faithful, a true Hierarch.", "p11 Ode VII troparion 3", { label: "plain" }),
              h1("He who is unapproachable, and seated in the bosom of the Begetter, hath now become seated within thy womb, O most pure one, as one approachable and imbued with thine image, having become accessible for the sake of saving fallen Adam.", "p11 Ode VII Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          8: {
            irmos: h2("Thou didst make flame bedew the holy children, * and didst burn the sacrifice of a righteous man with water. * For Thou alone, O Christ, dost do all as Thou willest, * Thee do we supremely exalt throughout all ages.", "p12 Ode VIII irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              h1("O blessed one, as one elevated unto God by thy pure thoughts thou hast humiliated the proud serpent by thy humility; wherefore we honor thee, exalting Christ unto the ages.", "p12 Ode VIII troparion 1", { label: "plain" }),
              h1("O holy Hierarch (name), thou hast saved thy people from slavery to falsehood by preaching the incarnate Word and thus driving away the wickedness of idolatry, O most wise and God-bearing father.", "p12 Ode VIII troparion 2", { label: "plain" }),
              h1("Leading a life like that of thy Master, in both word and deed fulfilling thy days in spiritual activity, thou, O Father, hast reposed and passed over to the celestial dwellings.", "p12 Ode VIII troparion 3", { label: "plain" }),
              h1("Freed from the primal curse by thy birth-giving, O most blessed divinely joyous Maiden, we send up unto thee the greeting of Gabriel: Rejoice thou, who art the cause of the salvation of all.", "p12 Ode VIII Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          9: {
            irmos: h2("It is impossible for mankind to see God * upon Whom the orders of Angels dare not gaze; * but through thee, O all-pure one, * did the Word Incarnate become a man * and with the Heavenly Hosts * Him we magnify and thee we call blessed.", "p12 Ode IX irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              h1("Adorned with the virtues as with resplendent ornaments and radiant with their light, compassionate and meek, thou hast found thine abode in the land of the compassionate keeping company with the Heavenly Hosts.", "p12 Ode IX troparion 1", { label: "plain" }),
              h1("Beholding the brightness of God and of the Angels, the radiance of the Patriarchs, the Martyrs and the Apostles, with them entreat the Lover of mankind that we who praise thee, O holy one, be granted the remission of sins and restoration of life.", "p12 Ode IX troparion 2", { label: "plain" }),
              h1("Adorning the city of thy See with Thine episcopacy, thou hast arrayed with thy radiance all the cities of thy diocese, having lived therein as an Angel, thou hast hallowed them with thine unction and perfected the Divinely-wise people living therein.", "p12 Ode IX troparion 3", { label: "plain" }),
              h1("The gentle heavenly rain O Virgin, descended into thy womb, and thereby dried up the streams of falsehood, showering incorruption upon all mankind by the redemption that hath been made possible through thee, O divinely joyous one.", "p12 Ode IX Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
        },
      }],
      sessional_ode3_rubric: h1("The Sessional Hymn, in Tone IV:", "p9 post-Ode-III sessional rubric"),
      sessional_ode3: h2("In an Orthodox manner * thou, O holy one, hast tended the Church of Christ * driving off the bitter taxing of heresy, * wherefore, O blessed one, * thou dost now make thine abode on high.", "p9 post-Ode-III Sessional", { spec_mel: "Thou hast appeared today ...", tone: 4, label: "plain" }),
      sessional_ode3_closer: h2("The Word of the Father, Christ our God, * Who was incarnate of thee, * we have come to know, O Virgin Theotokos, * who alone art pure, who alone art blessed. ** Wherefore, we unceasingly hymn and magnify thee.", "p9 post-Ode-III Sessional closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone IV", tone: 4, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      sessional_ode3_stavrotheotokion: h1("Beholding thy Son lifted up upon the Tree, O most pure one, with thy maternal womb wounded with pain, thou didst piteously cry aloud: “Woe is me! How is it that Thou hast set, O my timeless Light?”", "p9 post-Ode-III Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      kontakion_rubric: h1("The Kontakion from the Typicon; but if there be none, chant the following:", "p11 kontakion rubric"),
      exapostilarion_rubric: h1("Exapostilarion in Tone III:", "p13 exapostilarion rubric"),
      exapostilarion: h2("Today a glorious radiant festival * is revealed to the faithful, * for standing in the light of the glory * of the countenance of God, * the Holy Hierarch (name), doth remember us * who praise his honorable memory.", "p13 Exapostilarion", { spec_mel: "Thou hast visited us ...", tone: 3, label: "plain" }),
      exapostilarion_closer: h2("O most pure one, we put our trust in God, * and in the crucified Christ who came forth from thee. * By thy supplications to Him * preserve us unharmed even unto the end.", "p13 Exapostilarion closer", { sourceLabel: "Glory ..., Both now ..., Theotokion in Tone III", tone: 3, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      // `these 4 Stichera` — a PRINTED COUNT, which the fixture's rubric does
      // not carry. Three stichera are printed and the first takes `(Twice)`,
      // so 3 + 1 = the 4 named. The count reconciles with the device.
      praises_rubric: h1("On the Praises, these 4 Stichera, in Tone VIII:", "p13 Praises rubric"),
      praises: [
        h2("O venerable Father (name)! * Having reached the pinnacle of the ladder of divine understanding * and approaching God as one who hath obtained the gift of adoption, * thou dost heal incurable diseases and drivest away unclean spirits; * therefore with joyful hearts we celebrate thy memory, * magnifying Christ Who hath exalted His favorite.", "p13 Praises 1", { spec_mel: "O most glorious wonder ...", tone: 8, label: "plain", repeat: 2 }),
        h2("O marvelous Father (name)! * Brightly illumined with thy divinely lucid mind, * thou hast pacified the boisterous sea of the passions, * and flying upon the wings of the purity of dispassion, * thou hast reached the heights of ineffable and incomprehensible blessedness, * ever interceding on behalf of us who praise thee.", "p13 Praises 2", { spec_mel: "O most glorious wonder ...", label: "plain" }),
        h2("O Father of Fathers (name)! * thou art the Rule of the priesthood, * model of chastity, * stronghold of monastics, * strength of the Church, * lamp of love, throne of compassion, * Source of miracles, * tongue of fire, * font of sweetly-spoken words, * vessel of the Divine Spirit * and spiritual paradise, * O God-blessed one.", "p13 Praises 3", { spec_mel: "O most glorious wonder ...", label: "plain" }),
      ],
      praises_glory: h2("O venerable one, * thrice blessed holiest Father, * good shepherd and disciple of Christ the chief shepherd, * as one who hast laid down thy life for thy flock! * Do thou now also, O all-famed Hierarch (name), * entreat Him with by thy prayers ** to grant us great mercy.", "p13 Praises Glory", { sourceLabel: "Glory ..., in Tone VI", tone: 6, label: "glory" }),
      praises_closer: h2("We have come to know God * Who was incarnate of thee, * O Virgin Theotokos. ** Him do thou entreat for the salvation of our souls.", "p13 Praises Both now", { sourceLabel: "Both now ..., Theotokion in Tone VI", tone: 6, type: "theotokion", label: ["both_now", "theotokion"] }),
      praises_stavrotheotokion: h2("Standing before the Cross * and beholding her Son voluntarily suffering, ** the Virgin-Mother magnified Him.", "p13 Praises Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      doxology_rubric: h1("The Doxology:", "p13 The Doxology"),
      // Longer than the fixture's: this file adds `and a Doxasticon is
      // appointed` to the small-Doxology condition. Stored verbatim.
      great_doxology_rubric: h1("The great Doxology: If a small Doxology is read, and a Doxasticon is appointed, the following is chanted after the Aposticha:", "p14 great Doxology rubric"),
      // BYTE-IDENTICAL to the Vespers aposticha Glory on p4. Registered.
      doxology_glory: h2("Thou art a good shepherd and a fervent teacher, * O Hierarch (name), * and ever praising thee we cry aloud: * God hath made thee an adornment of His Church * and unto His people revealed thine incorrupt body * which for many years remained hidden in the earth. * Wherefore cease not to make supplication unto Him on behalf of those * who praise thee and honor thy memory, * that by thy supplications we may obtain the remission of our sins ** and the salvation of our souls.", "p14 Doxology Glory", { sourceLabel: "Glory ..., in Tone VIII", tone: 8, label: "glory" }),
      // The conditional closer printed as a LABEL and stored as a rubric text
      // node here rather than as an absence — which is Monastic's treatment at
      // this same position. The asymmetry with the three absence-node sites
      // above is the fixture's, and is preserved rather than smoothed.
      doxology_closer_rubric: h1("Both now ..., Theotokion or Stavrotheotokion:", "p14 Doxology Both now"),
      troparion_rubric: h1("After Our Father ..., Troparion, In Tone IV:", "p14 after Our Father"),
      closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8). Which of the two is used is Fekula's decision at assembly." },
      closing_rubric: h1("The Dismissal:", "p14 Dismissal"),
    },

    liturgy: {
      order: ['beatitudes_rubric', 'beatitudes', 'propers_rubric', 'troparion',
              'kontakion', 'prokeimenon', 'prokeimenon_verse', 'epistle',
              'alleluia', 'alleluia_verse', 'gospel', 'communion_verse'],
      beatitudes_rubric: h1("Typika and Beatitudes.", "p15 Typika and Beatitudes"),
      // BYTE-IDENTICAL to the canon at all seven positions — Ode III troparia
      // 1-3, Ode VI troparia 1-3 and the Ode VI Theotokion. FOUR files identical
      // now against ONE variant. Four-to-one is a stronger case for collapsing
      // these than three-to-one was, and it is the same wrong case: Monastics
      // still diverges at three of seven, and would still be rewritten.
      beatitudes: [
        h1("By Shedding forth divine sweetness from thy lips, O Father, thou hast banished the bitter drink of godlessness, giving to the thirsting devout the nectar of the knowledge of God, O blessed one.", "p15 Beatitude 1", { label: "plain", repeat: 2 }),
        h1("Predestined by God’s judgment, thou didst appear O Hierarch offering the bloodless sacrifice unto God who offered up Himself for our sake, O Father Hierarch (name).", "p15 Beatitude 2", { label: "plain" }),
        h1("The sepulcher, wherein thy precious body lieth, is likened unto a Godly paradise, shedding forth redolent aromas, and filling the faithful with a sweet fragrance, O most glorious and all-honored Hierarch (name).", "p15 Beatitude 3", { label: "plain" }),
        h1("At the bidding of God, thy tongue, sharpened by the Spirit in spiritual acuity, inscribed in the hearts of the devout as with a scribe’s plume, the words of grace, O all-sacred Father.", "p15 Beatitude 4", { label: "plain" }),
        h1("O sacred Father, as one who entered the spiritual holy of holies and there, by the light of the Trinity, learnt things divine, thou hast perfected in spirit the faithful, thyself being most perfect, O Holy Hierarch (name).", "p15 Beatitude 5", { label: "plain" }),
        h1("Flushing away the foul commands of the wicked by the streams of thy commandments, thou hast appeared as a placid river watering with piety the communities of the faithful, O all-honored Hierarch.", "p15 Beatitude 6", { label: "plain" }),
        h1("O all-immaculate Maiden favored of God, the Word hath, without seed, made His abode within thy womb and come forth as a perfect man, renewing in a godly manner human nature as He Himself alone knoweth.", "p15 Beatitude 7", { label: "theotokion", sourceLabel: "Theotokion", label_inline: true }),
      ],
      propers_rubric: h1("The Troparion and Kontakion from the Typicon; but if there be none chant the following:", "p15 propers rubric"),
      prokeimenon: h2("My mouth shall speak wisdom, * and the meditation of my heart shall be of understanding.", "p15 Liturgy Prokeimenon", { sourceLabel: "Prokeimenon, In Tone I", tone: 1, label_inline: true }),
      prokeimenon_verse: h1("Hear this, all ye nations; give ear, all ye that inhabit the world.", "p15 Liturgy Prokeimenon verse", { sourceLabel: "Verse", label: "refrain" }),
      epistle: { heading: 'THE EPISTLE TO THE HEBREWS',
        src: { file: H, locus: 'p16 Epistle' },
        citation_verbatim: '(7:26-8:2)',
        citation: { book: 'Hebrews', chapter: 7, verses: '7:26-8:2' },
        citation_basis: 'printed' },
      alleluia: h1("The mouth of the righteous shall meditate wisdom, and his tongue shall speak of judgment.", "p16 Alleluia", { sourceLabel: "Alleluia, In Tone I", tone: 1, label_inline: true }),
      alleluia_verse: h1("The law of his God is in his heart, and his steps shall not be tripped.", "p16 Alleluia verse", { sourceLabel: "Verse", label: "refrain" }),
      gospel: { heading: 'THE GOSPEL ACCORDING TO ST. JOHN THE DIVINE',
        src: { file: H, locus: 'p16 Liturgy Gospel' },
        citation_verbatim: '(10:9-16)',
        citation: { book: 'John', chapter: 10, verses: '9-16' },
        citation_basis: 'printed',
        provenance_note: 'Heading adds THE DIVINE where the Matins gospel heading on p7 does not, and uses a colon where that one uses a comma. Same evangelist, same file, two heading forms and two reference formats.' },
      communion_verse: h1("In everlasting remembrance shall the righteous be, he shall not be afraid of evil tidings.", "p16 Communion Verse", { sourceLabel: "Communion Verse", label_inline: true }),
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Heirarchs.pdf — 14pp. ENCODED BY TRANSCRIIPTION against dedupe_chars()
  // extraction, verified by byte-matching EIGHT strings against four earlier
  // files before capture (anabathmoi ×3, psalm50 ×2, megalynarion verse,
  // "We have come to know God", the God-is-the-Lord rubric). The pair file to
  // Heirarch, and the file that actually prints (Names) capitalised — twice,
  // beside one (names) and ZERO (name): the corrected placeholder scan's
  // prediction, measured true here.
  //
  // WHAT THIS FILE ADDS TO THE RECORD:
  //  • The KONTAKION diverges between its own two print sites — "us who with
  //    love honor you" (p9) against "us who lovingly honor you" (p13). R-1 at
  //    the same boundary Unmercenaries hit: canonical claims the Matins site
  //    only; the Liturgy site is stored per-position; the pair is a variant.
  //  • The Tone VI DOGMATIC "Who doth not call thee blessed" is byte-identical
  //    to Monastic/Monastics/Martyr — and TWO BYTES off the Octoechos Tone 6
  //    Great Vespers copy: the Menaion prints "he is God" / "he hath become"
  //    where the Octoechos capitalises both. FIRST CROSS-BOOK VARIANT PAIR in
  //    the register (§10.4).
  //  • The BEATITUDES diverge from the canon at two of seven positions
  //    ("memory"→"memorial", "Born from"→"Born of"), sharing the "hast,"
  //    comma sic at both sites of the second. Heirarchs joins Monastics as the
  //    SECOND variant file: four identical to TWO variant now — the collapse
  //    that four-to-one made tempting is now measurably worse.
  //  • Its troparion is byte-identical at all four of its own sites AND to
  //    Monastics' troparion — one general troparion serving two saint types.
  //  • Its printed lesson references are the ones that identified Heirarch's
  //    citationless lessons (see that file's provenance notes).
  Heirarchs: {
    title: s1("THE VIGIL SERVICE COMMON TO TWO OR MANY HIERARCHS.", "p1 title"),
    // Four print sites — p4 (Vespers dismissal), p5 (God is the Lord, Twice),
    // p12 (after Our Father), p13 (AT THE LITURGY) — BYTE-IDENTICAL at all
    // four, and byte-identical to Monastics' troparion besides (registered).
    troparion: s2("O God of our fathers, * ever deal with us according to Thy meekness. * Take not Thy mercy from us, * but by the prayers of these saints ** direct our life in peace.", "p4 Troparion", { sourceLabel: "Troparion, in Tone IV", tone: 4, verified_sites: [{"locus": "p4 Vespers dismissal", "tone": 4}, {"locus": "p5 God is the Lord", "tone": 4, "repeat": 2}, {"locus": "p12 after Our Father", "tone": 4}, {"locus": "p13 AT THE LITURGY", "tone": 4}] }),
    // TWO print sites and they are NOT byte-identical: p9 prints "us who with
    // love honor you", p13 "us who lovingly honor you". The canonical field is
    // the Matins site and claims ONLY it; the Liturgy site is stored
    // per-position (liturgy.liturgy_kontakion) and the pair is registered as a
    // variant — the Unmercenaries troparion ruling applied to a kontakion.
    kontakion: s2("As teachers of virtue and adornments of the Church\u2019s Hierarchy, * the Church glorifies you in hymns; * We beseech you, as ones invincible, to intercede on behalf of us who with love honor you ** that we be granted progress in virtues and release from temptations.", "p9 Kontakion after Ode VI", { sourceLabel: "Kontakion, in Tone VIII", spec_mel: "As the first fruits ...", tone: 8, verified_sites: [{"locus": "p9 after Ode VI", "tone": 8}] }),
    ikos: s1("O divine Hierarchs, You have appeared as rivers of piety filling the world with the streams of your dogmas, and with the gentle rain of your miracles, you wash away the filth of the passions, wherefore ye have worthily inherited the nourishing stream of the Holy Spirit; wherefore, gathered together today, we reverently honor you with hymns, and with faith cry out to you as ones invincible; Pray ye unceasingly to Christ God, for us all.", "p9 Ikos", { sourceLabel: "Ikos", label_inline: true }),

    vespers: {
      order: ['lic_rubric', 'lic', 'lic_closer', 'lic_stavrotheotokion',
              'idiomelon_rubric', 'lic_glory', 'dogmatikon_rubric', 'dogmatikon',
              'dogmatikon_alternate', 'dogmatikon_stavrotheotokion',
              'entrance_rubric', 'readings', 'aposticha_rubric', 'aposticha',
              'aposticha_glory', 'aposticha_closer_label', 'aposticha_closer_rubric',
              'aposticha_closer', 'aposticha_alternate', 'aposticha_stavrotheotokion',
              'troparion_rubric', 'troparion', 'closer', 'closing_rubric'],
      lic_rubric: s1("On \u201cLord, I have cried ...,\u201d the Stichera, in Tone IV:", "p1 LIC rubric"),
      lic: [
        s2("O all-famed Hierarchs, * as luminous stars of the spiritual firmament * ye have enlightened the world, O all-honored ones, * and illumined the universe * with the dogmas of the Orthodox faith * driving away the darkness of heresies. * O Hierarchs, entreat the Lord that those * who in faith celebrate your all-honored memory ** may be delivered from all adversities.", "p1 LIC 1", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
        s2("Ye have enlightened the world, * with noetic radiance, * appearing unto all as light-bestowing suns * beaming dogmatic truth unto all the ends of the world, * ye enlighten the hearts of the faithful, * O all-blessed God-bearers, * and by the power of Him * Who shone forth from the Virgin ** ye drive away the darkness of heresies.", "p1 LIC 2", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
        s2("O most blessed ones, * with the staff of your dogmas * ye have driven the spiritual wolves * far from the Church of Christ, * and encompassing her with a spiritual rampart, * ye have presented her whole and unconquerable unto Christ; * Pray Him that those who in faith * celebrate your all-honored memory, ** be delivered from all defilement and dangers.", "p1 LIC 3", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
      ],
      lic_closer: s2("Deliver thou my soul * from condemnation and grievous transgressions, * O most holy Bride of God, * and rescue it from death by thy supplications. * Grant that on the day of trial * I may receive the justification * which the assemblies of the saints have received; * and before the end show me forth as cleansed through repentance ** and by the shedding of tears.", "p1 LIC closer", { sourceLabel: "Glory ..., Both now ..., the Theotokion in Tone IV", tone: 4, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      // BYTE-IDENTICAL, all 444 characters, to Martyrs' LIC stavrotheotokion —
      // the third print site of the "at Thy voluntary crucifixion" form, which
      // Unmercenaries prints as "of Thy" at ITS aposticha. The two spaces
      // before question marks travel with the hymn (sic register).
      lic_stavrotheotokion: s2("Seeing Christ, the Lover of mankind, * crucified and with His side pierced with a lance, * the most pure one lamented, crying aloud: * \u201cWhat is this, O my Son ? * What have the ungrateful people rendered unto Thee * in return for all the good things Thou hast rendered unto them ?\u201d * And yet thou dost show thy tender compassion for me, * that I may endure my childlessness. ** I stand in awe, O Compassionate One, at Thy voluntary crucifixion.", "p1 LIC Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      // FULL STOP after "appointed", where Heirarch prints a comma — and the
      // Glory is Tone VI against the LIC's Tone IV.
      idiomelon_rubric: s1("If an Idiomelon be appointed. Glory ..., in Tone VI:", "p1 idiomelon rubric"),
      lic_glory: s2("O ye men of God and faithful servants, * ministers of the Lord, * most esteemed Hierarchs, * select vessels, and pillars supporting the Church, * heirs of the kingdom, ** cease not to intercede before the Lord on our behalf.", "p1 Glory idiomelon", { sourceLabel: "If an Idiomelon be appointed. Glory ..., in Tone VI", tone: 6, label: "glory" }),
      // This file CLOSES UP "service):" where Heirarch and four others print
      // "service ):" — the corpus's most-travelled sic, absent here. Also: no
      // comma before "in Tone VI" where Heirarch prints one. Byte-identical to
      // Martyr's rubric — two files share this exact wording; the family has
      // ≥17 across the book (analysis §6.1).
      dogmatikon_rubric: s1("If the Celebration be with a Polyeleos, and not a Resurrection Service, sing the following Dogmatic in Tone VI (If the service is a Resurrection service sing the Dogmatic of the Tone for that service):", "p1 dogmatikon rubric"),
      // Byte-identical to Monastic, Monastics and Martyr — and TWO BYTES from
      // the Octoechos Tone 6 copy ("he is God" / "he hath become" lowercase
      // here, capitalised there). Cross-book variant, registered (§10.4).
      dogmatikon: s2("Who doth not call thee blessed, O most holy Virgin? * Who will not hymn thy most pure birthgiving? * For the only-begotten Son Who hath shone forth timelessly from the Father, * came forth, ineffably incarnate, from thee, O pure one; * By nature he is God, by nature for our sakes, he hath become a man * not divided into two Hypostases, * but known in two natures without commingling. * Him do thou beseech, O pure and most blessed one, ** that our souls find mercy!", "p2 Both now dogmatic", { sourceLabel: "Both now ..., in Tone VI", tone: 6, type: "dogmatic_theotokion", label: "both_now" }),
      dogmatikon_alternate: s2("We have come to know God * Who was incarnate of thee, * O Virgin Theotokos. ** Him do thou entreat for the salvation of our souls.", "p2 Otherwise Theotokion", { sourceLabel: "Otherwise, Theotokion", type: "theotokion", label: "theotokion", label_inline: true }),
      dogmatikon_stavrotheotokion: s2("Upon seeing Thee crucified, O Christ, * she who gaveth birth to Thee cried aloud: * \u201cWhat is this strange mystery that I see, * O my Son How is it that Thou diest?, * suspended upon the Tree, ** O Bestower of life?\u201d", "p2 Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      // COMMA before "if appointed", where Heirarch prints none. Same slot,
      // fourth punctuation setting across six files.
      entrance_rubric: s1("The Entrance. The Prokeimenon of the day. The Three Lessons, if appointed:", "p2 entrance rubric"),
      // The same three lessons as Heirarch — Proverbs, Proverbs, Wisdom — and
      // THIS file prints references on all three, which is where Heirarch's
      // identified citations came from. Lesson 3 is a DIFFERENT Wisdom pericope
      // from Heirarch's (4:7-15 against its composite). Three references,
      // three formats: bare, space-before-semicolon, stop-inside-parens.
      readings: [
        { heading: 'THE READING FROM THE BOOK OF PROVERBS',
          src: { file: HS, locus: 'p2 Lesson 1' },
          citation_verbatim: '(3, 13-16; 8, 6)',
          citation: { book: 'Proverbs', chapter: 3, verses: '3:13-16, 8:6' },
          citation_basis: 'printed',
          provenance_note: 'The body OPENS at Proverbs 10:7 — "The memory of the just is praised" — before the cited 3:13; and runs past 8:6 into the following Wisdom-speech verses. Right book, cited verses present, page prints more: following the reference shows a reader less than the page does (the Unmercenaries Matins-gospel class). Heirarch prints the same composite lesson with NO reference.' },
        { heading: 'THE READING FROM THE BOOK OF PROVERBS',
          src: { file: HS, locus: 'p2-p3 Lesson 2' },
          citation_verbatim: '(10, 31-32 ; 11, 1-10)',
          citation: { book: 'Proverbs', chapter: 10, verses: '10:31-32, 11:1-10' },
          citation_basis: 'printed',
          provenance_note: 'Space before the semicolon inside the printed reference (sic register). The two Proverbs headings are byte-identical here, where Heirarch prints them in two forms.' },
        { heading: 'THE READING FROM THE WISDOM OF SOLOMON',
          src: { file: HS, locus: 'p3 Lesson 3' },
          citation_verbatim: '(4, 7-15.)',
          citation: { book: 'Wisdom of Solomon', chapter: 4, verses: '4:7-15' },
          citation_basis: 'printed',
          provenance_note: 'Full stop INSIDE the parenthesis. A different pericope from Heirarch\'s third lesson — the singular and plural files share the two Proverbs lessons and diverge at Wisdom.' },
      ],
      aposticha_rubric: s1("On the Aposticha, these Stichera, in Tone I:", "p3 Aposticha rubric"),
      aposticha: [
        s2("Let us today worthily praise the divine and God-inspired Hierarchs, * wise in the Spirit, * spiritual trumpets of God, * divine mirrors, who grant unto us the golden streams of their instructions. * Pray unto Christ that He grant our souls peace and great mercy.", "p3 Aposticha 1", { spec_mel: "O all-praised martyrs ...", tone: 1, label: "plain" }),
        s2("Precious in the sight of the Lord * is the death of His saints.", "p3 Aposticha verse 1", { sourceLabel: "Verse", label: "refrain" }),
        s2("Let us worthily hymn * and in spiritual odes praise the intellectual fonts of the divine and holy faith, * the golden-streamed rivers, * the brilliant lights, * the champions of the Trinity, * the receptacles of the grace of the Holy Spirit, * the immovable pillars and supports of the Church.", "p3 Aposticha 2", { spec_mel: "O all-praised martyrs ...", label: "plain" }),
        s2("Thy priests shall be clothed with righteousness, * and thy righteous shall rejoice.", "p4 Aposticha verse 2", { sourceLabel: "Verse", label: "refrain" }),
        s2("O ye thundering spiritual instruments of divine knowledge, * flashing lightning of divine sermons, * golden candlesticks bright and bearing the light of God, * most blessed Hierarchs! * Ever pray for us, who honor you, * that Christ grant unto our souls peace and great mercy.", "p4 Aposticha 3", { spec_mel: "O all-praised martyrs ...", label: "plain" }),
      ],
      // BYTE-IDENTICAL to the Doxasticon at p12 — the aposticha-Glory-reprint
      // pattern Heirarch set, in the plural file too. Registered.
      aposticha_glory: s2("Let us today praise the mysterious trumpets of the Spirit, * the God-bearing Fathers * who, in the midst of the Church, * sang the Hypostatical hymns of the theology of the Trinity, * immutably One both in essence and Divinity, * the victors over heresies * and champions of the Orthodox, * who without ceasing pray unto God that our souls be saved.", "p4 Aposticha Glory", { sourceLabel: "Glory ..., in Tone VI", tone: 6, label: "glory" }),
      aposticha_closer_label: s1("Both now ..., in Tone VI:", "p4 Both now label"),
      aposticha_closer_rubric: s1("If the celebration be with a Polyeleos, chant the Resurrection Theotokion:", "p4 aposticha closer rubric"),
      // Byte-identical to Martyrs' and Martyr's aposticha closer — the
      // "Rejoice!," setting included.
      aposticha_closer: s2("Christ the Lord, my Creator and Redeemer, * Who came forth from thy womb, O most pure one, * and clothed Himself in my nature, * hath freed Adam from the primal curse. * Wherefore, like the angel * we unceasingly cry out to thee, O most pure one, * who art truly the Mother of God and Virgin: * Rejoice!, O Sovereign Lady, ** the intercession, protection and salvation for our souls!", "p4 Resurrection Theotokion", { tone: 6, type: "theotokion", label: "theotokion" }),
      // The "true vine" WITHOUT a break after "O Lady," — the Praises Both-now
      // on p11 prints the same theotokion WITH one. Registered as a variant:
      // one file, one hymn, two pointings. Also byte-identical to Monastic's
      // dogmatikon_alternate (registered).
      aposticha_alternate: s2("O Theotokos, thou art the true vine * that hast budded forth for us the Fruit of life. * Thee do we entreat: * Pray thou, O Lady, with the holy apostles, ** that He have mercy upon our souls.", "p4 Otherwise Theotokion", { sourceLabel: "Otherwise, Theotokion", type: "theotokion", label: "theotokion", label_inline: true }),
      aposticha_stavrotheotokion: s2("Standing with the virginal disciple before the Tree * during the crucifixion, * the Virgin cried out, weeping: * \u201cWoe is me! * How is it that Thou dost suffer, O Christ, ** since Thou art the dispassion of all?\u201d", "p4 Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      // COMMA after "Typicon" where Heirarch prints a semicolon — the
      // from-the-Typicon conditional in its ninth wording (analysis §6.2).
      troparion_rubric: s1("The Troparion from the Typicon, but if there be none, chant the following:", "p4 troparion rubric"),
      closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8). Which of the two is used is Fekula's decision at assembly. The five-file convention." },
      closing_rubric: s1("The Dismissal:", "p4 Dismissal"),
    },

    matins: {
      order: ['god_is_lord_rubric', 'troparion', 'troparion_closer',
              'sessional_1_rubric', 'sessional_1', 'sessional_1_closer',
              'sessional_2_rubric', 'sessional_2', 'sessional_2_closer',
              'megalynarion_rubric', 'megalynarion', 'megalynarion_verse',
              'sessional_polyeleos_rubric', 'sessional_polyeleos',
              'sessional_polyeleos_closer', 'anabathmoi_rubric', 'anabathmoi_intro',
              'anabathmoi', 'anabathmoi_closer', 'prokeimenon_rubric', 'prokeimenon',
              'prokeimenon_verse', 'gospel_rubric', 'gospel', 'psalm50_rubric',
              'psalm50_sticheron', 'psalm50_closer', 'psalm50_verse',
              'sessional_post50_rubric', 'sessional_post50', 'canon_rubric', 'canons',
              'sessional_ode3_rubric', 'sessional_ode3', 'sessional_ode3_closer',
              'sessional_ode3_stavrotheotokion', 'kontakion_rubric', 'kontakion', 'ikos',
              'exapostilarion_rubric', 'exapostilarion', 'exapostilarion_closer',
              'praises_rubric', 'praises', 'praises_glory', 'praises_closer',
              'praises_stavrotheotokion', 'great_doxology_rubric',
              'doxology_glory', 'doxology_closer_rubric', 'troparion_rubric',
              'troparion', 'closer', 'closing_rubric'],
      god_is_lord_rubric: s1("On \u201cGod is the Lord ...,\u201d the Troparion in Tone IV:", "p5 God is the Lord rubric"),
      troparion_closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8)." },
      sessional_1_rubric: s1("After the 1st chanting of the Psalter, the Sessional Hymn, in Tone V:", "p5 sessional 1 rubric"),
      // One of the file's two capitalised (Names) — the token the corrected
      // scan attests at exactly two sites in the whole book, both here.
      sessional_1: s2("As royal adornments of the Church * let us praise the Hierarchs of the Lord (Names), * the inexhaustible treasuries of His dogmas, * for through them Christ Himself hath instructed us to honor the Holy Trinity, ** united in essence and divided in persons.", "p5 Sessional 1", { spec_mel: "The Co-beginningless Word ...", tone: 5, label: "plain", repeat: 2 }),
      sessional_1_closer: s2("O all-holy Virgin, * have mercy on us who with faith have recourse to thee, * the mercifully compassionate one, * and who ask thy fervent aid; * for, since thou art the good Mother of God Most High, * O thou who art full of the grace of God, * thou dost ever make entreaty with thy maternal supplications, ** that He save us all.", "p5 Sessional 1 closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone V", tone: 5, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      sessional_2_rubric: s1("After the 2nd chanting of the Psalter, the Sessional Hymn, in Tone III:", "p5 sessional 2 rubric"),
      sessional_2: s2("O divinely inspired Hierarchs! * you have been revealed as pillars of the Church * and inexhaustible treasuries of piety, * your lives have been made illustrious through dispassion * and the expounding of the dogmas of the Trinity. * O holy Fathers! Entreat Christ God that our souls be saved.", "p5 Sessional 2", { spec_mel: "Of the divine ...", tone: 3, label: "plain", repeat: 2 }),
      // "He had became a man" — sic register.
      sessional_2_closer: s2("Without separating Himself from the divine Essence, * when taking flesh in thy womb, * He remained God though He had became a man; * and even after thy birthgiving, preserved thee, His Virgin Mother, * as immaculate as thou wast before giving birth. * Him do thou earnestly beseech, ** that He grant us great mercy.", "p5 Sessional 2 closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone III", tone: 3, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      megalynarion_rubric: s1("After the Polyeleos, the Megalynarion:", "p5 megalynarion rubric"),
      megalynarion: s1("We magnify you, O great Hierarchs, and honor your holy memory, for ye pray for us to Christ our God.", "p5 Megalynarion", { label_inline: true }),
      // "inhabit the World" — capitalised, and BYTE-IDENTICAL to Heirarch's
      // megalynarion verse. The capital travels with the verse at this
      // position (Heirarch's own Liturgy site prints lowercase). Registered
      // both as sic and as a cross-file identical pair.
      megalynarion_verse: s1("Hear this, all ye nations; give ear, all ye that inhabit the World.", "p5 Megalynarion verse", { sourceLabel: "Verse", label: "refrain" }),
      // Comma after "Polyeleos" where Heirarch prints none; no Spec. Mel.
      // where Heirarch prints one. Same slot, independent settings.
      sessional_polyeleos_rubric: s1("After the Polyeleos, the Sessional Hymn, in Tone IV:", "p5 post-Polyeleos sessional rubric"),
      sessional_polyeleos: s2("Let the most wise teachers of the universe, * who have glorified God with their deeds and words on earth, * be magnified today as the mediators of salvation unto us.", "p5 post-Polyeleos Sessional", { tone: 4, label: "plain", repeat: 2 }),
      sessional_polyeleos_closer: s2("O invincible intercessor for those afflicted, * fervent help of those who trust in thee: * deliver me from misfortunes, ** for thou art the helper of all.", "p6 post-Polyeleos Sessional closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone IV", tone: 4, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      anabathmoi_rubric: s1("If of Polyeleos rank, and not a Resurrection Service, chant the following:", "p6 anabathmoi rubric"),
      anabathmoi_intro: s1("The Song of Ascents: The first antiphon, in Tone IV:", "p6 anabathmoi heading"),
      // Byte-identical to all five earlier files — the book's most stable
      // hymnographic text. Chained to Heirarch in the register.
      anabathmoi: [
        s2("From my youth * do many passions war against me; * but do Thou Thyself defend ** and save me, O my Savior.", "p6 Anabathmoi 1", { label: "plain" }),
        s2("Ye haters of Zion * shall be shamed by the Lord; * for like grass, by the fire ** shall ye be withered.", "p6 Anabathmoi 2", { label: "plain" }),
      ],
      anabathmoi_closer: s2("In the Holy Spirit, * every soul is quickened, * and, through cleansing, is exalted ** and made radiant by the Triple Unity in a hidden sacred manner.", "p6 Anabathmoi closer", { sourceLabel: "Glory ..., Both now ...,", type: "plain", label: ["glory", "both_now"] }),
      // Tone IV here; the LITURGY prokeimenon prints the SAME TEXT at Tone
      // VII (p13). §7.4 compares the texts and stays silent because they
      // agree; the tone divergence is recorded per position — Heirarch's
      // IV-against-I pattern at new tones.
      prokeimenon_rubric: s1("The Prokeimenon, in Tone IV:", "p6 prokeimenon rubric"),
      prokeimenon: s2("Precious in the sight of the Lord * is the death of His saints.", "p6 Prokeimenon", { sourceLabel: "The Prokeimenon", tone: 4, label_inline: true }),
      // Lowercase "he hath rendered" — the Liturgy site prints "He" (p13).
      // Monastic prints the same divergence between the same two positions.
      prokeimenon_verse: s1("What shall I render unto the Lord for all that he hath rendered unto me?", "p6 Prokeimenon verse", { sourceLabel: "Verse", label: "refrain" }),
      gospel_rubric: s1("Let every breath ...,", "p6 Let every breath"),
      gospel: { heading: 'THE GOSPEL ACCORDING TO ST. JOHN',
        src: { file: HS, locus: 'p6 Matins Gospel' },
        citation_verbatim: '(10, 1-9)',
        citation: { book: 'John', chapter: 10, verses: '1-9' },
        citation_basis: 'printed',
        provenance_note: 'The body runs THROUGH VERSE 10 — "I am come that they might have life…" — one verse past the heading\'s claim. Right book, cited verses present, page prints more (the Unmercenaries Matins-gospel class). Comma between chapter and verses, where the Liturgy gospel prints a colon — Heirarch\'s two-formats-in-one-file pattern.' },
      psalm50_rubric: s1("After the 50th Psalm:", "p6 After the 50th Psalm"),
      // "of Hierarchs (names)" — no article, no "Holy", and the file's one
      // lowercase (names), where Heirarch prints "of the Holy Hierarch (name)".
      psalm50_sticheron: s2("Through the prayers of Hierarchs (names), * O Merciful One, ** blot out the multitude of our transgressions.", "p6 Psalm 50 Glory", { sourceLabel: "Glory ..., in Tone VI", tone: 6, label: "glory" }),
      psalm50_closer: s2("Through the prayers of the Theotokos, * O Merciful One, ** blot out the multitude of our transgressions.", "p7 Psalm 50 Both now", { sourceLabel: "Both now ...,", type: "theotokion", label: "both_now" }),
      psalm50_verse: s2("Have mercy on me, O God, * according to Thy great mercy; * and according to the multitude of Thy compassions, ** blot out my transgressions.", "p7 Psalm 50 verse", { label: "refrain" }),
      sessional_post50_rubric: s1("Then the Sessional Hymn, in Tone VI:", "p7 post-Psalm-50 sessional rubric"),
      // Addresses "O venerable Fathers" in a hierarchs file — the same text
      // family as monastic sessionals, set here without adjustment. Verbatim.
      sessional_post50: s2("O venerable Fathers! * The sound of your exhortations hath gone forth throughout all the world, * and now in heaven ye enjoy the reward of your labors; * For routing the armies of the demons, * you have reached the habitations of the Angels, * whom you blamelessly emulated in your lives. * Since you possess great boldness before the Lord, * pray Him that we be granted peace for our souls.", "p7 post-Psalm-50 Sessional", { tone: 6, label: "plain" }),
      canon_rubric: s1("The Canon, In Tone VIII:", "p7 Canon rubric"),
      canons: [{
        title: "The Canon, In Tone VIII:", tone: 8,
        odes: {
          1: {
            irmos: s2("Let us sing unto the Lord, * who led His people through the Red Sea: * for He alone hath gloriously been glorified.", "p7 Ode 1 irmos", { sourceLabel: "Irmos", label_inline: true }),
            refrain: s1("Holy Hierarchs (Names) pray to God for us", "p7 Ode 1 refrain", { sourceLabel: "Refrain", label_inline: true }),
            items: [
              s1("As most wise Hierarchs you have shone forth in the world, resplendent with the divine dogmas of the King who reigneth over all; wherefore let us hymn Christ, for He alone hath been victorious.", "p7 Ode 1 troparion 1", { label: "plain" }),
              s1("As ones who shone forth in the world with the light of piety and dispersed the darkness of wickedness, let us, O faithful, reverence the great and all-honorable Hierarchs.", "p7 Ode 1 troparion 2", { label: "plain" }),
              s1("As ones who stand with the Angels before the Unapproachable King, pray O ye sacred and God-bearing preachers, that we who with love celebrate your holy memory, be granted the remission of our sins.", "p7 Ode 1 troparion 3", { label: "plain" }),
              s1("As one who conceived the pre-eternal and Beginningless Word of the Father, and above all recounting brought Him forth in the flesh, O most holy one ever pray that we be delivered from all misfortunes.", "p7 Ode 1 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          3: {
            irmos: s2("O Christ, Who in the beginning established the heavens with understanding * and founded the earth upon the waters, * make me steadfast upon the rock of Thy commandments; * for there is none as holy as Thee, O only Lover of mankind.", "p7 Ode 3 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              s1("O holy and God-bearing ones, with true abstinence and steadfast prayer ye have ascended on high to the lofty dwelling place of the virtues, where you are ever nourished by the streams of divine knowledge.", "p7 Ode 3 troparion 1", { label: "plain" }),
              s1("As ones possessing boldness before God, O holy Hierarchs, entreat Him on behalf of us who with faith hymn your sacred memory, that we may be saved.", "p8 Ode 3 troparion 2", { label: "plain" }),
              s1("As teachers of the devout dogmas and declarers of true and wise words, O holy ones, ye have obtained victory over heresies.", "p8 Ode 3 troparion 3", { label: "plain" }),
              s1("As the heaven and throne of God we all hymn thee, O Birthgiver of God, most pure Virgin, for from thee hath appeared Jesus Christ, in Truth our salvation.", "p8 Ode 3 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          4: {
            irmos: s2("O Lord, I have heard the mystery of Thy dispensation; * I have considered Thy works, * and I have glorified Thy Divinity.", "p8 Ode 4 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              s1("Let us all praise in hymns the most wise Hierarchs, crying O God-bearing Fathers! earnestly pray that we be saved.", "p8 Ode 4 troparion 1", { label: "plain" }),
              s1("As truly God-blessed and most wise teachers and Hierarchs, ye are devout establishers and expounders of the divine dogmas, wherefore we praise you in hymns and spiritual odes.", "p8 Ode 4 troparion 2", { label: "plain" }),
              s1("Your sacred memory, O holy Hierarchs of the Lord, our instructors and nourishers, we the faithful celebrate in hymns and spiritual odes.", "p8 Ode 4 troparion 3", { label: "plain" }),
              s1("O Bride unwedded, pure Mother of Christ God, who knewest not wedlock, unceasingly pray Him to save the souls of those who hymn thee.", "p8 Ode 4 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          5: {
            irmos: s2("Rising early we cry to Thee, O Lord; * save us, for Thou art our God, * and we know none other besides Thee.", "p8 Ode 5 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              s1("O Divinely-wise ones, as shepherds you have anointed yourselves with the ointment of piety, wherefore as Hierarchs we all honor you, O God-bearers.", "p8 Ode 5 troparion 1", { label: "plain" }),
              s1("Emulating the Apostles in labors and vigilance, O Divinely-wise and glorious ones, ye have presided over the peoples of the Church.", "p9 Ode 5 troparion 2", { label: "plain" }),
              s1("Emulating Isaiah the zealous and Moses the God-seer, O God-seeing Fathers, ye have put to shame the heresiarchs.", "p9 Ode 5 troparion 3", { label: "plain" }),
              s1("O come all ye faithful, let us, together with the Angels, bless the God-blessed one, the Queen who hath given birth unto the King of all.", "p9 Ode 5 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          6: {
            irmos: s2("O Thou that puttest on light as a garment * grant me also a robe of light, * O All-merciful Christ, our God.", "p9 Ode 6 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              s1("Ye have adorned the glory of the Church, O blessed Fathers, with your divine dogmas, eradicating heresies with all their roots.", "p9 Ode 6 troparion 1", { label: "plain" }),
              s1("O glorious teachers, you have shone forth upon all creation as lights of piety, and by the beauty of dogma, subdued heresies with the word of God.", "p9 Ode 6 troparion 2", { label: "plain" }),
              s1("Instead of the weapons of war ye made use of speech and the written word, with which, O holy ones, you cut off all the strange teachings of heresies and clearly expounded the dogmas of the Trinity to all.", "p9 Ode 6 troparion 3", { label: "plain" }),
              s1("Born from the Virgin, O Christ God, Thou hast, enlightened the world; do Thou, as the Lover of mankind, also deliver me from my many transgressions, and, I implore Thee, set my life aright.", "p9 Ode 6 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          7: {
            irmos: s2("O Thou who in the beginning founded the earth * and by Thy word made the heavens firm, * blessed art Thou throughout the ages, * O Lord God of our Fathers.", "p9 Ode 7 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              s1("Unto Thee, who hath revealed thy Hierarchs to be true shepherds of Thy flock, do we sing; \u201cBlessed art Thou O God of our Fathers.\u201d", "p9 Ode 7 troparion 1", { label: "plain" }),
              s1("O Lord, Thou didst extinguish the flame of passions and divinely bedew the souls of the devout youths in the fiery furnace who cried aloud; \u201cBlessed art Thou O God of our Fathers.\u201d", "p10 Ode 7 troparion 2", { label: "plain" }),
              s1("O Ye Hierarchs, having labored in abstinence, vigilance and true faith; remember us all.", "p10 Ode 7 troparion 3", { label: "plain" }),
              s1("Unto Thee, Who for our sake wast born of the Virgin and hast delivered the world from the alien one, do we sing; \u201cBlessed art Thou O God of our Fathers.\u201d", "p10 Ode 7 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          8: {
            irmos: s2("Glorified in the holy mountain, * the Lord revealed the mystery of the Ever-Virgin unto Moses * in the flames of the burning bush: * praise ye and supremely exalt Him throughout all ages.", "p10 Ode 8 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              s1("Like unto Moses, the God-bearing Fathers have ascended the cloud covered mountain of dispassion and, as Hierarchs, obtained the spiritual law of grace; wherefore we hymn Christ throughout the ages.", "p10 Ode 8 troparion 1", { label: "plain" }),
              s1("O holy ones, You have well tended the flock of Christ, escaping the bondage of Egypt, and eluding the passions of Babylon, wherefore ye now make your abode above in Zion, throughout all ages.", "p10 Ode 8 troparion 2", { label: "plain" }),
              s1("With words and deeds of piety anointed as if with myrrh, O divine Hierarchs, you perform sacred and divine mysteries, hymning the Trinity one in essence throughout all ages.", "p10 Ode 8 troparion 3", { label: "plain" }),
              s1("Unto Him who dwelt in the womb of the holy Virgin ineffably restoring Adam, do we hymn and exalt throughout the ages.", "p10 Ode 8 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          9: {
            irmos: s2("The prophetic vision of the lawgiver on the mountain, * in the fire of the burning bush, * prefigured thy birthgiving O Ever-Virgin, * the salvation of us the faithful, * wherefore with never silent hymns we magnify thee.", "p10 Ode 9 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              s1("O most wise Hierarchs, who by acquiring dispassion, and in faith, hope and love, have revealed unto us the words of eternal life, pray that our souls be saved.", "p10 Ode 9 troparion 1", { label: "plain" }),
              s1("All-honored Hierarchs, you have well tended thy flock with the staff of the Holy Spirit, and have driven away from the Church of God the heresies of God\u2019s enemies; wherefore we praise you in hymns.", "p10 Ode 9 troparion 2", { label: "plain" }),
              s1("In hymns and spiritual odes we unceasingly honor you as lights of the Church, O holy Hierarchs, and we worthily magnify the shrine of your relics, O blessed Fathers.", "p10 Ode 9 troparion 3", { label: "plain" }),
              s1("Rejoice!, ever-living source of incorruption; Rejoice!, luminous cloud of the sun; Rejoice!, chariot of the fullness of the Divinity; Rejoice!, ark of sanctification.", "p11 Ode 9 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
        },
      }],
      sessional_ode3_rubric: s1("The Sessional Hymn, in Tone III:", "p8 post-Ode-III sessional rubric"),
      sessional_ode3: s2("O blessed ones, you have truly appeared as precious examples of abstinence * and hallowed riches of piety, * illumining your lives with dispassion * and enriching with mercy those asking it of you; * O holy Fathers, pray to Christ our God that we be granted great mercy.", "p8 post-Ode-III Sessional", { tone: 3, label: "plain" }),
      sessional_ode3_closer: s2("Whither doth each one who is saved, * rightly have recourse; * and to what other such refuge can there be * which doth protect our souls like thee, ** O Theotokos?", "p8 post-Ode-III Sessional closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone III", tone: 3, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      sessional_ode3_stavrotheotokion: s2("Having obtained the Cross of thy Son as a staff of strength, * O Theotokos, * therewith we cast down the arrogance of the enemy, ** and with love unceasingly magnify thee.", "p8 post-Ode-III Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      kontakion_rubric: s1("The Kontakion from the Typicon; but if there be none, chant the following:", "p9 kontakion rubric"),
      // COMMA after "Exapostilarion" where Heirarch prints none; and the
      // exapostilarion takes (Twice), which Heirarch's does not.
      exapostilarion_rubric: s1("Exapostilarion, in Tone III:", "p11 exapostilarion rubric"),
      exapostilarion: s2("Let us praise the God-bearing Fathers as brightly-effulgent beams of light, * clearer than those from the sun, * shining forth as beacons of the pre-eternal light of the Holy Trinity, * of the three-rayed supra-naturally commingled Unity.", "p11 Exapostilarion", { tone: 3, label: "plain", repeat: 2 }),
      exapostilarion_closer: s1("With unceasing hymns we bless thee, O Virgin Theotokos, in that thou hast given birth to One of the Trinity, and didst bear in thy divine embrace the Word Who is immutably and unchangeably transcendent.", "p11 Exapostilarion closer", { sourceLabel: "Glory ..., Both now ..., Theotokion in Tone III", tone: 3, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      // No printed count — Heirarch's "these 4 Stichera" is its own; this file
      // prints the bare rubric with three stichera, the first taking (Twice).
      praises_rubric: s1("On the Praises, these Stichera, in Tone VI:", "p11 Praises rubric"),
      praises: [
        s2("Through the Apostles and Hierarchs * grace hath overcome, and faith hath been strengthened, * all things are filled with the knowledge of God, * and we are enriched with the gift of salvation.", "p11 Praises 1", { spec_mel: "On the third day ...", tone: 6, label: "plain", repeat: 2 }),
        s2("Thou, O Lord, hast made Thy Hierarchs wonderful * through the heavenly mysteries, * and by Thy grace rightly dividing the word of truth, * with strictness and dispensation, * overcoming every heretical invention.", "p11 Praises 2", { spec_mel: "On the third day ...", label: "plain" }),
        s2("Let the wisest teachers of the universal Church, * who have glorified God by word and deed here on earth, * be magnified today * as the proclaimers of salvation unto us all.", "p11 Praises 3", { spec_mel: "On the third day ...", label: "plain" }),
      ],
      praises_glory: s2("You were good and faithful servants, * industrious workers of the vineyard of Christ, * who endured well the burden of your day\u2019s work, * and increased the talent given you, bearing no ill-will to those who came after you; * wherefore the gate of heaven hath been opened unto you; * and entering therein, ye partake of the joys of Christ, the Master, * wherefore we beseech you to pray for us, O holy Hierarchs.", "p11 Praises Glory", { sourceLabel: "Glory ..., in Tone VI", tone: 6, label: "glory" }),
      // The "true vine" WITH the break after "O Lady," — against the p4 copy
      // without it. One file, one theotokion, two pointings (registered).
      praises_closer: s2("O Theotokos, thou art the true vine * that hast budded forth for us the Fruit of life. * Thee do we entreat: * Pray thou, O Lady, * with the holy apostles, ** that He have mercy upon our souls.", "p11 Praises Both now", { sourceLabel: "Both now ..., Theotokion in Tone VI", tone: 6, type: "theotokion", label: ["both_now", "theotokion"] }),
      praises_stavrotheotokion: s2("The most pure one seeing Thee hanging upon the cross * with maternal tears cried aloud to Thee: * \u201cO my Son and God, * O my sweetest Child, * how is it that Thou sufferest ** such a shameful death?\u201d", "p11 Praises Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      // NO bare "The Doxology:" heading — that is a three-file printing
      // (Heirarch, Martyrs, Unmercenaries) and this file is not among them.
      // Byte-identical to Heirarch's long form including the Doxasticon clause.
      great_doxology_rubric: s1("The great Doxology: If a small Doxology is read, and a Doxasticon is appointed, the following is chanted after the Aposticha:", "p12 great Doxology rubric"),
      // BYTE-IDENTICAL to the Vespers aposticha Glory on p4. Registered.
      doxology_glory: s2("Let us today praise the mysterious trumpets of the Spirit, * the God-bearing Fathers * who, in the midst of the Church, * sang the Hypostatical hymns of the theology of the Trinity, * immutably One both in essence and Divinity, * the victors over heresies * and champions of the Orthodox, * who without ceasing pray unto God that our souls be saved.", "p12 Doxology Glory", { sourceLabel: "Glory ..., in Tone VI", tone: 6, label: "glory" }),
      // The conditional closer printed as a LABEL and stored as a rubric text
      // node at this position — the fixture asymmetry, preserved (see
      // Heirarch's identical treatment and its comment).
      doxology_closer_rubric: s1("Both now ..., Theotokion or Stavrotheotokion:", "p12 Doxology Both now"),
      // "the Troparion" with the article, where Heirarch prints bare
      // "Troparion" — the sixth wording of this rubric in six files.
      troparion_rubric: s1("After Our Father ..., the Troparion, in Tone IV:", "p12 after Our Father"),
      closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8)." },
      closing_rubric: s1("The Dismissal:", "p12 Dismissal"),
    },

    liturgy: {
      order: ['beatitudes_rubric', 'beatitudes', 'propers_rubric', 'troparion',
              'liturgy_kontakion', 'prokeimenon', 'prokeimenon_verse', 'epistle',
              'alleluia', 'alleluia_verse', 'gospel', 'communion_verse'],
      beatitudes_rubric: s1("Typika and Beatitudes.", "p13 Typika and Beatitudes"),
      // NOT byte-identical to the canon: five of seven agree; Beatitude 2
      // prints "memorial" where Ode III troparion 2 prints "memory", and the
      // Theotokion prints "Born of" where Ode VI's prints "Born from" — while
      // BOTH sites share the "Thou hast, enlightened" comma. Heirarchs joins
      // Monastics as the second variant file: FOUR identical, TWO variant.
      beatitudes: [
        s1("O holy and God-bearing ones, with true abstinence and steadfast prayer ye have ascended on high to the lofty dwelling place of the virtues, where you are ever nourished by the streams of divine knowledge.", "p13 Beatitude 1", { label: "plain", repeat: 2 }),
        s1("As ones possessing boldness before God, O holy Hierarchs, entreat Him on behalf of us who with faith hymn your sacred memorial, that we may be saved.", "p13 Beatitude 2", { label: "plain" }),
        s1("As teachers of the devout dogmas and declarers of true and wise words, O holy ones, ye have obtained victory over heresies.", "p13 Beatitude 3", { label: "plain" }),
        s1("Ye have adorned the glory of the Church, O blessed Fathers, with your divine dogmas, eradicating heresies with all their roots.", "p13 Beatitude 4", { label: "plain" }),
        s1("O glorious teachers, you have shone forth upon all creation as lights of piety, and by the beauty of dogma, subdued heresies with the word of God.", "p13 Beatitude 5", { label: "plain" }),
        s1("Instead of the weapons of war ye made use of speech and the written word, with which, O holy ones, you cut off all the strange teachings of heresies and clearly expounded the dogmas of the Trinity to all.", "p13 Beatitude 6", { label: "plain" }),
        s1("Born of the Virgin, O Christ God, Thou hast, enlightened the world; do Thou, as the Lover of mankind, also deliver me from my many transgressions, and, I implore Thee, set my life aright.", "p13 Beatitude 7", { label: "theotokion", sourceLabel: "Theotokion", label_inline: true }),
      ],
      propers_rubric: s1("The Troparion and Kontakion from the Typicon; but if there be none, chant the following:", "p13 propers rubric"),
      // The DIVERGENT kontakion site — "us who lovingly honor you" against
      // p9's "us who with love honor you". Stored per-position (§2.3); the
      // canonical field claims p9 only; the pair is a registered variant.
      liturgy_kontakion: s2("As teachers of virtue and adornments of the Church\u2019s Hierarchy, * the Church glorifies you in hymns; * We beseech you, as ones invincible, to intercede on behalf of us who lovingly honor you ** that we be granted progress in virtues and release from temptations.", "p13 Kontakion at Liturgy", { sourceLabel: "Kontakion of the Holy Hierarchs, In Tone VIII", tone: 8 }),
      prokeimenon: s2("Precious in the sight of the Lord * is the death of His saints.", "p13 Liturgy Prokeimenon", { sourceLabel: "Prokeimenon, In Tone VII", tone: 7, label_inline: true }),
      prokeimenon_verse: s1("What shall I render unto the Lord for all that He hath rendered unto me?", "p13 Liturgy Prokeimenon verse", { sourceLabel: "Verse", label: "refrain" }),
      epistle: { heading: 'THE EPISTLE OF ST. PAUL TO THE HEBREWS',
        src: { file: HS, locus: 'p13-p14 Epistle' },
        citation_verbatim: '(13: 17-21)',
        citation: { book: 'Hebrews', chapter: 13, verses: '17-21' },
        citation_basis: 'printed',
        provenance_note: 'Colon-space between chapter and verses — a third reference format beside the Matins gospel\'s comma and the Liturgy gospel\'s bare colon.' },
      alleluia: s1("Thy priests shall be clothed with righteousness, and thy righteous shall rejoice.", "p14 Alleluia", { sourceLabel: "Alleluia, In Tone II", tone: 2, label_inline: true }),
      alleluia_verse: s1("For the Lord hath elected Zion; He hath chosen Her to be a habitation for Himself.", "p14 Alleluia verse", { sourceLabel: "Verse", label: "refrain" }),
      gospel: { heading: 'THE HOLY GOSPEL ACCORDING TO ST. MATTHEW',
        src: { file: HS, locus: 'p14 Liturgy Gospel' },
        citation_verbatim: '(5:14-19)',
        citation: { book: 'Matthew', chapter: 5, verses: '14-19' },
        citation_basis: 'printed' },
      // Semicolon and capital He — byte-identical to Martyr's setting of this
      // verse, against Heirarch's comma-and-lowercase. The register already
      // holds Heirarch↔Martyr as a variant; Heirarchs chains to Martyr as
      // identical.
      communion_verse: s1("In everlasting remembrance shall the righteous be; He shall not be afraid of evil tidings.", "p14 Communion Verse", { sourceLabel: "Communion Verse", label_inline: true }),
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Apostle.pdf — 14pp. Extraction proven by byte-matching NINE strings
  // against earlier files (anabathmoi ×3, psalm50 Both-now + verse, the
  // Ode VI irmos, the post-Ode-III closer AND stavrotheotokion, the Tone VI
  // dogmatic family). (name) ×30, no plural token — as GENERAL_TAKES_NAME
  // attests. dedupe_chars() left ONE residue: the Ode V heading extracts as
  // OODDEE VV (the analysis §11 prediction for this file). Transcribed
  // correctly; NOT a sic — the page prints it correctly.
  //
  // WHAT THIS FILE ADDS TO THE RECORD:
  //  • THE TROPARION REPEATS THE UNMERCENARIES SPLIT EXACTLY: p4 and p5 print
  //    `sins ** unto`, p12 and p13 print a single `*`. Canonical claims the
  //    two ** sites; doxology_troparion / liturgy_troparion store the * sites
  //    per-position; the pair is a register variant. Two files now print this
  //    same four-site two-form pattern — it is a BOOK habit, not a Unmercenaries
  //    quirk. And NO (Twice) at God-is-the-Lord — the first file without it.
  //  • ONE HYMN, TWO TRANSLATIONS, THREE PRINT SITES: the Vespers aposticha
  //    Glory and the Doxasticon are byte-identical ("Leaving earthly cares…"),
  //    while the PRAISES Glory prints a different rendering of the same hymn
  //    ("O Apostle (name); * having given up earthly things…"). A deduplicating
  //    encoder keyed on the hymn would have collapsed a translation.
  //  • The Tone VI dogmatic is a FIFTH print site and the first to diverge:
  //    "O pure and all-blessed one" against the four files' "most blessed".
  //  • Vespers lessons from the NEW TESTAMENT — 1 John ×3, headed as EPISTLES
  //    ("THE 1ST GENERAL EPISTLE OF JOHN / OF ST. JOHN,") in three heading
  //    forms with three reference formats. No monastic/martyric-derived rule
  //    predicts this; the analysis §5 census did.
  //  • The Matins and Liturgy gospels are DIFFERENT PERICOPES of one passage:
  //    Matins skips the names of the Twelve (9:36-38; 10:1, 5-8), the Liturgy
  //    prints them (9:36-38, 10:1-8) — two reference formats besides.
  Apostle: {
    title: a1("THE GENERAL VIGIL SERVICE TO AN APOSTLE.", "p1 title"),
    troparion: a2("O holy Apostle (name), * entreat the Merciful God * that He grant remission of sins ** unto our souls.", "p4 Troparion", { sourceLabel: "Troparion, in Tone III", tone: 3, verified_sites: [{"locus": "p4 Vespers dismissal", "tone": 3}, {"locus": "p5 God is the Lord", "tone": 3}] }),
    kontakion: a2("As a most bright star illumining all * with a multitude of thy miracles, * the Church hath for ever acquired thee, * O Apostle (name), * wherefore we cry aloud unto Christ: * Save, O Greatly-merciful One, * those who with faith honor the memory of Thine Apostle.", "p9 Kontakion after Ode VI", { sourceLabel: "Kontakion, in Tone IV", spec_mel: "Thou hast appeared ...", tone: 4, verified_sites: [{"locus": "p9 after Ode VI", "tone": 4}, {"locus": "p13 AT LITURGY", "tone": 4}] }),
    ikos: a1("O Lord grant unto me a stream of speech, O thou Who didst create the nature of water, and strengthen my heart, O Compassionate One, for Thou hast established the universe by Thy Word, wherefore enlighten my thoughts, O Thou who puttest on light as a garment, and grant that I may speak and hymn in a manner worthy of the veneration of Thine Apostle, O Greatly-merciful One.", "p9 Ikos", { sourceLabel: "The Ikos", label_inline: true }),

    vespers: {
      order: ['lic_rubric', 'lic', 'lic_closer', 'lic_stavrotheotokion',
              'idiomelon_rubric', 'lic_glory', 'dogmatikon_rubric', 'dogmatikon',
              'dogmatikon_alternate', 'dogmatikon_stavrotheotokion',
              'entrance_rubric', 'readings', 'aposticha_rubric', 'aposticha',
              'aposticha_glory', 'aposticha_closer_label', 'aposticha_closer_rubric',
              'aposticha_closer', 'aposticha_alternate', 'aposticha_stavrotheotokion',
              'troparion_rubric', 'troparion', 'closer', 'closing_rubric'],
      lic_rubric: a1("On “Lord, I have cried ...,” the Stichera, in Tone VIII:", "p1 LIC rubric"),
      lic: [
        a2("O Apostle what shall we name thee?, * heaven, since thou hast confessed the glory of God ? * a stream, since thou dost mystically give drink unto creation? * a star, that illumines the Church? * a cup which pours forth holy nector? * or true friend of Christ and companion of the Bodiless Powers? * We entreat thee, do thou make supplication that our souls be saved.", "p1 LIC 1", { spec_mel: "What shall we name thee ...", label: "plain" }),
        a2("O glorious God-seeing Apostle! * Beautiful have become thy feet treading well along the paths of preaching * and making narrow the way of the enemy by the breadth of thy divine knowledge of the Word * who hath appeared in the coarseness of the flesh * and who O radiant one hath selected thee as a most glorious disciple. * Do thou make supplication unto Him that our souls may be saved.", "p1 LIC 2", { spec_mel: "What shall we name thee ...", label: "plain" }),
        a2("O Godly-spoken Apostle, * thou wast truly sent from Christ * as a luminous arrow wounding our enemies * and manifestly granting unto wounded souls cures; * wherefore we dutifully, * glorify thee and celebrate today thy holy feast. * Do thou ever intercede that our souls be saved.", "p1 LIC 3", { spec_mel: "What shall we name thee ...", label: "plain" }),
      ],
      lic_closer: a2("To the Theotokos we the sinful and lowly ones, * do we now earnestly hasten; * and we fall down in repentance, * crying out from the depths of our soul: * O Sovereign Lady, have compassionate pity and mercy upon us! * Hasten thou, for we are perishing * from the multitude of our transgressions! * Turn not thy servants empty away, ** for thee do we have as our only hope!", "p1 LIC closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone IV", tone: 4, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      // "The Stavrotheotokion" WITH the article — first file to print it so.
      lic_stavrotheotokion: a2("Upon beholding Thee, * the Lamb and Shepherd, upon the Tree, * the ewe-lamb who bore Thee lamented, * and maternally exclaimed to Thee: * \u201cO most desired Son, * how is it that Thou art suspended upon the tree of the Cross? * How is it that Thine arms and legs are nailed * by the iniquitous ones, O long-suffering Word, ** and that Thou hast shed Thy blood, O Master?\u201d", "p1 LIC Stavrotheotokion", { sourceLabel: "The Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      idiomelon_rubric: a1("If an Idiomelon be appointed, Glory ..., in Tone VI:", "p1 idiomelon rubric"),
      lic_glory: a2("Divine grace was poured out through thy lips, * O glorious Apostle (name), * and thou wast shown to be a lamp of the Church of Christ, * teaching the spiritual sheep * to believe in the Consubstantial Trinity, * and in the One Divinity.", "p1 Glory idiomelon", { sourceLabel: "If an Idiomelon be appointed, Glory ..., in Tone VI", tone: 6, label: "glory" }),
      // "service ):" is BACK — this file prints the travelling stray space
      // that Heirarchs closed up. Six of eight now print it (sic register).
      dogmatikon_rubric: a1("If the Celebration be with a Polyeleos, and not a Resurrection Service, sing the following Dogmatic in Tone VI (If the service is a Resurrection service sing the Dogmatic of the Tone for that service ):", "p1 dogmatikon rubric"),
      // The FIFTH print site of the Tone VI dogmatic and the FIRST to
      // diverge: "O pure and all-blessed one" where Monastic, Monastics,
      // Martyr and Heirarchs all print "most blessed". Registered as a
      // variant against the four-file form; the cross-book octoechos row
      // stays on Heirarchs' copy.
      dogmatikon: a2("Who doth not call thee blessed, O most holy Virgin? * Who will not hymn thy most pure birthgiving? * For the only-begotten Son Who hath shone forth timelessly from the Father, * came forth, ineffably incarnate, from thee, O pure one; * By nature he is God, by nature for our sakes, he hath become a man * not divided into two Hypostases, * but known in two natures without commingling. * Him do thou beseech, O pure and all-blessed one, ** that our souls find mercy!", "p2 Both now dogmatic", { sourceLabel: "Both now ..., in Tone VI", tone: 6, type: "dogmatic_theotokion", label: "both_now" }),
      dogmatikon_alternate: a2("No one that fleeth unto thee, O most pure Virgin Theotokos, * departeth from thee ashamed; * for those that asketh grace of thee, ** ever receiveth a gift for their profitable petition.", "p2 Otherwise Theotokion", { sourceLabel: "Otherwise, Theotokion", type: "theotokion", label: "theotokion", label_inline: true }),
      // "unto Thee" where Heirarchs prints "to Thee" — one preposition — and
      // BOTH files print "O my Son How is it that Thou diest?," letter for
      // letter. The defect travels with the hymn (sic register, both files).
      dogmatikon_stavrotheotokion: a2("Upon seeing Thee crucified, O Christ, * she who gaveth birth unto Thee cried aloud: * \u201cWhat is this strange mystery that I see, * O my Son How is it that Thou diest?, * suspended upon the Tree, ** O Bestower of life?\u201d", "p2 Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      // A FOURTH wording: "The Entrance. Prokeimenon of the day. Three
      // Lessons." — no articles, terminal FULL STOP where five files print a
      // colon.
      entrance_rubric: a1("The Entrance. Prokeimenon of the day. Three Lessons.", "p2 entrance rubric"),
      // NEW TESTAMENT VESPERS LESSONS — 1 John ×3, headed as EPISTLES, in
      // THREE heading forms ("OF JOHN" bare; "OF ST. JOHN," with a trailing
      // comma, twice) and three reference formats ("3:21 - 4:6" spaced;
      // "(4, 11-16)"; "(4, 20-21 ; 5, 1-5)" with the space-semicolon).
      readings: [
        { heading: 'THE 1ST GENERAL EPISTLE OF JOHN',
          src: { file: AP, locus: 'p2 Lesson 1' },
          citation_verbatim: '(3:21 - 4:6)',
          citation: { book: '1 John', chapter: 3, verses: '3:21-4:6' },
          citation_basis: 'printed' },
        { heading: 'THE 1ST GENERAL EPISTLE OF ST. JOHN,',
          src: { file: AP, locus: 'p2 Lesson 2' },
          citation_verbatim: '(4, 11-16)',
          citation: { book: '1 John', chapter: 4, verses: '11-16' },
          citation_basis: 'printed',
          provenance_note: 'Trailing comma inside the printed heading, before the reference — printed at lessons 2 and 3 and not at lesson 1 (sic register).' },
        { heading: 'THE 1ST GENERAL EPISTLE OF ST. JOHN,',
          src: { file: AP, locus: 'p3 Lesson 3' },
          citation_verbatim: '(4, 20-21 ; 5, 1-5)',
          citation: { book: '1 John', chapter: 4, verses: '4:20-5:5' },
          citation_basis: 'printed',
          provenance_note: 'Space before the semicolon inside the reference — the Heirarchs lesson-2 class (sic register).' },
      ],
      aposticha_rubric: a1("On the Aposticha, these Stichera, in Tone IV:", "p3 Aposticha rubric"),
      aposticha: [
        a2("O Apostle, having obtained * an invincible authority over demons, * and power in the name of Christ * drive thou away the princes of darkness. * Like a sun thou hast passed through the regions of the earth * shining forth enlightenment, * and, O glorious one, instructing all the lands, * preaching Christ\u2019s first and saving coming.", "p3 Aposticha 1", { spec_mel: "Thou hast given a sign ...", tone: 4, label: "plain" }),
        a2("Their sound hath gone forth into all the earth * and their words unto the ends of the world.", "p3 Aposticha verse 1", { sourceLabel: "Verse", label: "refrain" }),
        a2("Resembling the first grace * and the most essential and divine life, * thou hast shown thyself (name) to be a good man in deed, * and named a son of divine grace. * for on account of the goodness of thy disposition and the purity of thy mind * thou hast appeared unto all to be a sincere disciple of Christ.", "p3 Aposticha 2", { spec_mel: "Thou hast given a sign ...", label: "plain" }),
        a2("The heavens declare the glory of God, * and the firmament proclaimeth the work of His hands.", "p3 Aposticha verse 2", { sourceLabel: "Verse", label: "refrain" }),
        a2("O Apostle (name), * through divine inspiration, * and like a well fashioned instrument, * thou hast devoted thyself to the conversion of the Gentiles, * instructing them by word and deed, * in the knowledge of Christ, * enlightening all to confess * the true Divinity of Jesus, the Savior of our souls.", "p3 Aposticha 3", { spec_mel: "Thou hast given a sign ...", label: "plain" }),
      ],
      // BYTE-IDENTICAL to the Doxasticon on p12 — while the PRAISES Glory on
      // p12 prints a DIFFERENT TRANSLATION of this same hymn. One hymn, two
      // renderings, three print sites, one file (registered).
      aposticha_glory: a2("Leaving earthly cares O Apostle (name), * and having followed Christ, sealed with the breath of the Holy Spirit, * thou wast sent by Him unto the lost nations * to turn mankind unto the light of the knowledge of God, * thereupon, having ended the exploits of thy divine passion * and the suffering of multifarious tortures, * thou didst give thy soul unto Christ; * we beseech thee O all-blessed one to entreat Him, * that He grant unto us great mercy.", "p3 Aposticha Glory", { sourceLabel: "Glory ..., in Tone II", tone: 2, label: "glory" }),
      aposticha_closer_label: a1("Both now ..., in Tone II:", "p4 Both now label"),
      aposticha_closer_rubric: a1("If the celebration be with a Polyeleos, chant the Resurrection Theotokion:", "p4 aposticha closer rubric"),
      aposticha_closer: a2("O new wonder greater than all the wonders of old! * For who hath ever known a mother to give birth without having known a man, * and to bear on her arm Him Who sustaineth all creation? * Yet it was the will of God to be born. * O most pure one, who carried Him as an infant in Thine embrace * and before Whom thou hast a mother\u2019s boldness: * cease not to pray on behalf of those who honor thee, ** that He have compassion and save our souls.", "p4 Resurrection Theotokion", { tone: 2, type: "theotokion", label: "theotokion" }),
      aposticha_alternate: a2("Like a fruitful olive tree, * the Virgin brought Thee forth as the Fruit of life, * bearing unto the world, ** the fruit of rich and great mercy.", "p4 Otherwise Theotokion", { sourceLabel: "Otherwise, Theotokion", type: "theotokion", label: "theotokion", label_inline: true }),
      // UNPOINTED — the only stavrotheotokion in the file with no markers.
      // Tier is a per-item source fact; this one is prose on the page.
      // "the Tree of the Cross. O Jesus" — full stop for a comma (sic).
      aposticha_stavrotheotokion: a1("Beholding Thee nailed to the Tree of the Cross. O Jesus, she that kneweth not wedlock said weeping: \u201cO sweet Child, why hast Thou abandoned me who alone gave birth to Thee, O unapproachable Light of the beginningless Father? Hasten Thou, and glorify Thyself, that those who glorify Thy divine sufferings may receive divine glory!\u201d", "p4 Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      // A FIFTH wording of the from-the-Typicon conditional: "The Troparion
      // from the Typicon. If there be no Typicon, chant the following:" — the
      // condition now names the BOOK being absent, not the troparion.
      troparion_rubric: a1("The Troparion from the Typicon. If there be no Typicon, chant the following:", "p4 troparion rubric"),
      closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8). The six-file convention." },
      closing_rubric: a1("The Dismissal:", "p4 Dismissal"),
    },

    matins: {
      order: ['god_is_lord_rubric', 'troparion', 'troparion_closer',
              'sessional_1_rubric', 'sessional_1', 'sessional_1_closer',
              'sessional_2_rubric', 'sessional_2', 'sessional_2_closer',
              'megalynarion_rubric', 'megalynarion', 'megalynarion_verse',
              'sessional_polyeleos_rubric', 'sessional_polyeleos',
              'sessional_polyeleos_closer', 'anabathmoi_rubric', 'anabathmoi_intro',
              'anabathmoi', 'anabathmoi_closer', 'prokeimenon_rubric', 'prokeimenon',
              'prokeimenon_verse', 'gospel_rubric', 'gospel', 'psalm50_rubric',
              'psalm50_sticheron', 'psalm50_closer', 'psalm50_verse',
              'sessional_post50_rubric', 'sessional_post50', 'canon_rubric', 'canons',
              'sessional_ode3_rubric', 'sessional_ode3', 'sessional_ode3_closer',
              'sessional_ode3_stavrotheotokion', 'kontakion_rubric', 'kontakion', 'ikos',
              'exapostilarion_rubric', 'exapostilarion', 'exapostilarion_closer',
              'exapostilarion_stavrotheotokion',
              'praises_rubric', 'praises', 'praises_glory', 'praises_closer',
              'praises_stavrotheotokion', 'great_doxology_rubric',
              'doxology_glory', 'doxology_closer_rubric', 'troparion_rubric',
              'doxology_troparion', 'closer', 'closing_rubric'],
      god_is_lord_rubric: a1("On “God is the Lord ...,” the Troparion in Tone III:", "p5 God is the Lord rubric"),
      // NO (Twice) here — every previous file doubles the troparion at God
      // is the Lord; this one prints it once. verified_sites carries no
      // repeat for exactly this reason.
      troparion_closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8)." },
      sessional_1_rubric: a1("After the 1st chanting of the Psalter, the Sessional Hymn, in Tone II:", "p5 sessional 1 rubric"),
      sessional_1: a2("Having netted the nations, * the glorious Apostle (name) taught the ends of the earth * to adore Thee O Christ God, * together with the Father and the Holy Spirit; * for which sake do Thou establish Thy Church * and send down unto the faithful Thy blessings, ** O Only-merciful One and Lover of mankind.", "p5 Sessional 1", { tone: 2, label: "plain", repeat: 2 }),
      sessional_1_closer: a2("Through thee, O Ever-virgin Theotokos, * we have become partakers of the divine nature; * for thou hast given birth to God incarnate for our sake. ** Wherefore, as is meet we all reverently magnify thee.", "p5 Sessional 1 closer", { sourceLabel: "Glory ..., Both now ..., Theotokion in Tone II", tone: 2, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      sessional_2_rubric: a1("After the 2nd chanting of the Psalter, the Sessional Hymn, in Tone IV:", "p5 sessional 2 rubric"),
      sessional_2: a2("Christ the Sun of righteousness * hath emitted thee, O glorious Apostle (name), * as a bright ray illumining all the earth, * and thou dost illumine with thine intercessions and enlightenest with the never-waning Light, ** all those who with faith celebrate thy holy memory.", "p5 Sessional 2", { tone: 4, label: "plain", repeat: 2 }),
      sessional_2_closer: a2("Thou unashamed hope, * of those who put their trust in thee * thou who alone hath supra-naturally, * brought forth Christ our God in the flesh, * with the holy apostles, do thou entreat Him before the end, * to grant unto all, the remission of transgressions ** and the restoration of our lives.", "p5 Sessional 2 closer", { sourceLabel: "Glory ..., Both now ..., Theotokion in Tone IV", tone: 4, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      megalynarion_rubric: a1("After the Polyeleos, the Megalynarion:", "p5 megalynarion rubric"),
      megalynarion: a1("We magnify thee, O holy Apostle of Christ (name), and honor thy sufferings and pangs with which thou hast labored in the preaching of the Gospel of Christ.", "p5 Megalynarion", { label_inline: true }),
      megalynarion_verse: a1("The heavens declare the glory of God, and the firmament proclaimeth the work of His hands.", "p5 Megalynarion verse", { sourceLabel: "Verse", label: "refrain" }),
      sessional_polyeleos_rubric: a1("After the Polyeleos, the Sessional Hymn, in Tone VIII:", "p5 post-Polyeleos sessional rubric"),
      sessional_polyeleos: a2("With a net of divine words * thou hast caught the spiritual fish, * bearing them unto our God as first-fruits, * and, in thy desire to adorn thyself in the wounds of Christ, * thou didst emulate Him in His passion. * Wherefore, O glorious Apostle, * gathered together today we honor thine all-festive memory as is meet, * and with one voice cry unto thee: * Make entreaty unto Christ our God * that He grant remission of sins unto those who honor thy holy memory with love.", "p5-p6 post-Polyeleos Sessional", { spec_mel: "Of the wisdom ...", tone: 8, label: "plain", repeat: 2 }),
      // "the most holy mountain" and "thine all-holy Offspring" — Heirarch's
      // copy prints "all-holy mountain" and "thy most holy Offspring". The
      // SAME two intensifiers, SWAPPED between the same two positions, in one
      // theotokion across two files. Registered as a variant.
      sessional_polyeleos_closer: a2("Let us hymn the heavenly gate and ark, * the most holy mountain, the cloud of light, the heavenly ladder, * the spiritual Paradise, the redemption of Eve, * the great treasure of the world; * because salvation for the world and forgiveness of ancient offences were wrought in her. * Therefore we cry unto her: * Intercede with thine own Son and God to grant forgiveness of offences ** to those who devoutly worship thine all-holy Offspring.", "p6 post-Polyeleos Sessional closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone VIII", tone: 8, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      anabathmoi_rubric: a1("If of Polyeleos rank, and not a Resurrection Service, chant the following:", "p6 anabathmoi rubric"),
      anabathmoi_intro: a1("The Song of Ascents: The first antiphon, in Tone IV:", "p6 anabathmoi heading"),
      anabathmoi: [
        a2("From my youth * do many passions war against me; * but do Thou Thyself defend ** and save me, O my Savior.", "p6 Anabathmoi 1", { label: "plain" }),
        a2("Ye haters of Zion * shall be shamed by the Lord; * for like grass, by the fire ** shall ye be withered.", "p6 Anabathmoi 2", { label: "plain" }),
      ],
      anabathmoi_closer: a2("In the Holy Spirit, * every soul is quickened, * and, through cleansing, is exalted ** and made radiant by the Triple Unity in a hidden sacred manner.", "p6 Anabathmoi closer", { sourceLabel: "Glory ..., Both now ...,", type: "plain", label: ["glory", "both_now"] }),
      // Bare "Prokeimenon, in Tone IV:" — no article, where five files print
      // "The Prokeimenon". The prokeimenon text doubles as this file's
      // aposticha verse 1 AND its Communion verse, pointed identically.
      prokeimenon_rubric: a1("Prokeimenon, in Tone IV:", "p6 prokeimenon rubric"),
      prokeimenon: a2("Their sound hath gone forth into all the earth * and their words unto the ends of the world.", "p6 Prokeimenon", { sourceLabel: "The Prokeimenon", tone: 4, label_inline: true }),
      prokeimenon_verse: a1("The heavens declare the glory of God, and the firmament proclaimeth the work of His hands.", "p6 Prokeimenon verse", { sourceLabel: "Verse", label: "refrain" }),
      gospel_rubric: a1("Let every breath ...,", "p6 Let every breath"),
      // The Matins pericope SKIPS THE NAMES of the Twelve — 9:36-38; 10:1,
      // 5-8 — where the Liturgy gospel prints them (10:1-8). The heading's
      // "10, 1. 5-8" carries a FULL STOP for a comma (sic register).
      gospel: { heading: 'THE GOSPEL ACCORDING TO ST. MATTHEW',
        src: { file: AP, locus: 'p6 Matins Gospel' },
        citation_verbatim: '(9, 36-38; 10, 1. 5-8)',
        citation: { book: 'Matthew', chapter: 9, verses: '9:36-38, 10:1, 10:5-8' },
        citation_basis: 'printed',
        provenance_note: 'The body matches the heading exactly — vv. 10:2-4 (the names of the Twelve) are genuinely not printed at Matins, and ARE printed at the Liturgy. Same passage, two pericopes, two reference formats in one file.' },
      psalm50_rubric: a1("After the 50th Psalm:", "p7 After the 50th Psalm"),
      psalm50_sticheron: a2("Through the prayers of the Holy Apostle (name), * O Merciful One, ** blot out the multitude of our transgressions.", "p7 Psalm 50 Glory", { sourceLabel: "Glory ..., in Tone VI", tone: 6, label: "glory" }),
      // "Both now ..., in Tone VI:" — the closer's label carries a TONE here,
      // which no earlier file printed at this position.
      psalm50_closer: a2("Through the prayers of the Theotokos, * O Merciful One, ** blot out the multitude of our transgressions.", "p7 Psalm 50 Both now", { sourceLabel: "Both now ..., in Tone VI", tone: 6, type: "theotokion", label: "both_now" }),
      psalm50_verse: a2("Have mercy on me, O God, * according to Thy great mercy; * and according to the multitude of Thy compassions, ** blot out my transgressions.", "p7 Psalm 50 verse", { label: "refrain" }),
      // The source labels this position with a BARE TONE — "In Tone VI:" —
      // where Heirarch prints "Then the Sessional Hymn, in Tone VI:". The
      // slot is verified BY POSITION (after the Psalm-50 verse, before the
      // canon); the label is stored verbatim. Material for the reconciliation
      // table: the source itself names one slot two ways across files.
      sessional_post50_rubric: a1("In Tone VI:", "p7 post-Psalm-50 label"),
      sessional_post50: a2("Clearly receiving the grace of the Divine Spirit, * thou, O (name), wast numbered with the sacred choir of the Apostles; * wherefore thou also hast received the fiery breath that once descended from heaven * in the form of tongues of fire, * with which thou didst burn up the thorny godlessness of the gentiles. * Do thou, O preacher, entreat Christ God ** that our souls may be saved.", "p7 post-Psalm-50 Sessional", { tone: 6, label: "plain" }),
      canon_rubric: a1("The Canon, in Tone VIII:", "p7 Canon rubric"),
      canons: [{
        title: "The Canon, in Tone VIII:", tone: 8,
        odes: {
          1: {
            irmos: a2("Let us, O ye people, send up a hymn * unto our wondrous God * Who hath freed Israel from bondage, * chanting a hymn of victory * and crying aloud: * We sing unto Thee, O only Master.", "p7 Ode 1 irmos", { sourceLabel: "Irmos", label_inline: true }),
            refrain: a1("Holy Apostle (name) pray to God for us", "p7 Ode 1 refrain", { sourceLabel: "Refrain", label_inline: true }),
            items: [
              a1("Standing on high before the Master Who hath glorified thee, O wondrous Apostle (name), and hath manifestly shown thee to be His disciple, I beseech thee to enlighten my soul that I may hymn thy divine memory.", "p7 Ode 1 troparion 1", { label: "plain" }),
              a1("Christ, righteous in His judgment, hath granted unto thee an abundance of good things, and as the pinnacle of divine gifts hath shown thee to be a God-inspired Apostle, being Himself the Only-righteous One.", "p7 Ode 1 troparion 2", { label: "plain" }),
              a1("Having received the spiritual light that came down from heaven upon thee, O Apostle, thou wast inspired by the Holy fire, burning the deceit of polytheism.", "p7 Ode 1 troparion 3", { label: "plain" }),
              a1("My mortal and corrupt nature hast Thou, O Savior, shown to be immortal and incorrupt. For having dwelt in the womb of the holy most pure Virgin, who knew not wedlock, Thou didst take upon thyself the nature of mankind.", "p7 Ode 1 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          3: {
            irmos: a2("There is none as holy as the Lord, * and none as righteous as our God, * Whom the whole of creation hymns: * There is none more righteous than Thee, O Lord.", "p7 Ode 3 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              a1("The divine mystery of the incarnation hast thou, O Godly-acceptable Apostle, truly learned, having received from the Savior Himself illumination from above.", "p8 Ode 3 troparion 1", { label: "plain" }),
              a1("The Word Beginningless and Eternal hath abundantly illumined thee His minister with the lustrous brightness of divine grace, O wondrous Apostle (name).", "p8 Ode 3 troparion 2", { label: "plain" }),
              a1("Ablaze with the spiritual dawning, thou, O most glorious Apostle, proceeded forth as a God-inspired radiance sent from Christ. Wherefore, O radiant one, thou hast enlightened the world with thy teaching.", "p8 Ode 3 troparion 3", { label: "plain" }),
              a1("The Prophet foretold of thee, as one likened to a golden candlestick carrying the never-waning Light, Christ our God, Who enlighteneth the world with the rays of His divinity.", "p8 Ode 3 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          4: {
            irmos: a2("From the overshadowed mountain, * from the only Theotokos, * the Prophet in divine vision * foresaw Thy coming in the flesh, O Word, * and with fear he glorified Thy power.", "p8 Ode 4 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              a1("Being the treasury of all the gifts of the gospel, thou, O most radiant (name), was found to be full of grace, the light of the world and the salt of the universe.", "p8 Ode 4 troparion 1", { label: "plain" }),
              a1("O wondrous one, turning away from shameful things, thou wast found worthy to behold the immaterial light of the Divinity, Who assumed the form of a man.", "p8 Ode 4 troparion 2", { label: "plain" }),
              a1("As a disciple of the incorruptible Life, do thou, with the life-creating power of the Life-giver, Whose energy thou hast received, slay thou the sin that doth live within us.", "p8 Ode 4 troparion 3", { label: "plain" }),
              a1("Being equal with Thy Father in essence, Thou didst become equal unto man in nature, having taken, O Master, our flesh from the most pure Virgin.", "p8 Ode 4 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          5: {
            irmos: a2("Thou hast enlightened * with the knowledge of God * the ends of the universe * that lay in the night of ignorance, * do Thou also, O Lord, illumine me * with the dawning of Thy love for mankind.", "p8 Ode 5 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              a1("Thy tongue, O God-seer, became mingled with the spiritual fire which thou didst lovingly receive sitting in the upper chamber.", "p9 Ode 5 troparion 1", { label: "plain" }),
              a1("Living on high as one dwelling in the uppermost abodes, thou, O Apostle (name), hast brought unto us lofty and noble teachings.", "p9 Ode 5 troparion 2", { label: "plain" }),
              a1("Having thy pure mind turned towards God in quietitude, thou didst acquire a pure heart and behold in the flesh, God, Who is incomprehensible for the intellect.", "p9 Ode 5 troparion 3", { label: "plain" }),
              a1("With thy childbirth, O Virgin, the first law hath ceased, grace hath blossomed, and truth hath shone forth.", "p9 Ode 5 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          6: {
            irmos: a2("O Thou that puttest on light as a garment * grant me also a robe of light, * O All-merciful Christ, our God.", "p9 Ode 6 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              a1("O glorious Apostle, as a disciple and friend of Christ thou hast zealously worked for the Lord God Almighty.", "p9 Ode 6 troparion 1", { label: "plain" }),
              a1("The Savior hath shown thee to be a selfless worker of divine wonders, having given thee power through the operation of His grace.", "p9 Ode 6 troparion 2", { label: "plain" }),
              a1("O all-famed Apostle of Christ (name), adorned with the divine grace of teaching, thou didst announce unto all the world the universal salvation of God Who is Lord over all.", "p9 Ode 6 troparion 3", { label: "plain" }),
              a1("Let the mouths of the wicked be shut, and let their faces be clothed with shame, for they do not count thee, O all-immaculate one; to be the Theotokos.", "p9 Ode 6 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          7: {
            irmos: a2("The Hebrew children in the furnace * boldly trampled upon the flames, * changing the fire into dew, they cried aloud: * \u201cBlessed art Thou, O Lord our God, throughout the ages.\u201d", "p9 Ode 7 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              a1("Possessing wonderful zeal, thou, O (name), now standing before the throne of the Master crowned as a servant of Christ and teacher of the law of God, dost proclaim: Blessed art Thou, O Lord our God, throughout the ages.", "p10 Ode 7 troparion 1", { label: "plain" }),
              a1("Exulting together with the Word and having been His companion, thou wast made a co-partaker of the Kingdom of the Most High, and dost proclaim: Blessed art Thou, O Lord our God, throughout the ages.", "p10 Ode 7 troparion 2", { label: "plain" }),
              a1("Full of wisdom, and enlightened by grace, adorned with serene beauty, thou, O Divinely speaking holy Apostle, dost proclaim: Blessed art Thou, O Lord our God, throughout the ages.", "p10 Ode 7 troparion 3", { label: "plain" }),
              a1("Through the false promise of a better life, the serpent of old drove the fore-parents from paradise, and thou, O Mother of God, hast recalled them; blessed is the Fruit of thy womb, O most pure one.", "p10 Ode 7 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          8: {
            irmos: a2("The instruments of music sounded out in harmony, * and countless multitudes worshipped the image in Dura; * but the three Children, refusing to bow in obeisance, * hymn and glorify the Lord throughout all ages.", "p10 Ode 8 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              a1("As thy feet appeared beautiful, so also was thy speech comely, which proclaimed the glory of Christ and taught us all to call to Him: \u201cHymn the Lord and supremely exalt Him throughout all ages.\u201d", "p10 Ode 8 troparion 1", { label: "plain" }),
              a1("Adorned with brilliant-rayed virtues and emitting the light of a multitude of miracles, thou didst become known unto the people as a blessed seed impelling us to call out: \u201cHymn the Lord and supremely exalt Him throughout all ages.\u201d", "p10 Ode 8 troparion 2", { label: "plain" }),
              a1("A holy disciple, well versed in the heavenly mysteries, thou O Apostle, hast passed throughout the universe, teaching openly the word of faith in Christ, and confessing the ineffable grace, whilst exclaiming: \u201cHymn the Lord and supremely exalt Him throughout all ages.\u201d", "p10 Ode 8 troparion 3", { label: "plain" }),
              a1("The mind cannot fathom thy child-bearing, O Birthgiver of God, being feeble and incapable of expressing it in words; for having conceived, O Virgin, thou didst give birth unto the very God, Whom we exalt unto all the ages.", "p10 Ode 8 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          9: {
            irmos: a2("Saved by thee, O pure Virgin, * we confess thee to be truly the Theotokos, * and together with the choirs of the bodiless hosts * thee do we magnify.", "p10 Ode 9 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              a1("Thou hast been revealed to the ends of the world, O Apostle, shining with the divine light. For receiving the spiritual fire, thou hast appeared, O Apostle (name), resplendent with light, wherefore we magnify thee.", "p10 Ode 9 troparion 1", { label: "plain" }),
              a1("Giving thyself up entirely unto God, O Divinely revealed one, thou didst become thoroughly mingled with Him. Do thou now entreat Him on behalf of us who with faith and love praise thee.", "p11 Ode 9 troparion 2", { label: "plain" }),
              a1("Celebrating thy memory, O most radiant one, we entreat thee that by thy bold intercession, which thou dost possess as an Apostle of Christ, we be freed from all tribulations, O all-honorable God-seer.", "p11 Ode 9 troparion 3", { label: "plain" }),
              a1("We magnify in hymns the intercessor and salvation of all mankind, who hast appeared, and illumined the world with the radiance of her godly purity.", "p11 Ode 9 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
        },
      }],
      sessional_ode3_rubric: a1("The Sessional Hymn, in Tone III:", "p8 post-Ode-III sessional rubric"),
      sessional_ode3: a2("With the illumination of the Divine Spirit * thou didst disperse the darkness of polytheism * and enlightened the hearts of the faithful, * loudly proclaiming, O most wise Apostle (name), the saving commandments, * entreat Christ God to grant us great mercy.", "p8 post-Ode-III Sessional", { spec_mel: "Of the divine ...", tone: 3, label: "plain" }),
      // Closer AND stavrotheotokion byte-identical to Heirarchs' — the
      // post-Ode-III pair travels as a unit (registered, chained).
      sessional_ode3_closer: a2("Whither doth each one who is saved, * rightly have recourse; * and to what other such refuge can there be * which doth protect our souls like thee, ** O Theotokos?", "p8 post-Ode-III Sessional closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone III", tone: 3, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      sessional_ode3_stavrotheotokion: a2("Having obtained the Cross of thy Son as a staff of strength, * O Theotokos, * therewith we cast down the arrogance of the enemy, ** and with love unceasingly magnify thee.", "p8 post-Ode-III Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      kontakion_rubric: a1("The Kontakion from the Typicon; but if there be none, chant the following:", "p9 kontakion rubric"),
      exapostilarion_rubric: a1("Exapostilarion in Tone III:", "p11 exapostilarion rubric"),
      // "O apostle (name)" — lowercase a, where the file capitalises Apostle
      // at every other site: the Heirarch "O hierarch (name)" class (sic).
      exapostilarion: a1("The hastening of thy beautiful feet O apostle (name) hath brought thee to the kingdom of heaven, and entering therein rejoicing, thou standest now before the Holy Trinity beholding the Son and the Divine Spirit in the Father, wherefore with faith we commemorate thy most sacred and divine memory.", "p11 Exapostilarion", { spec_mel: "Foreseeing by the Spirit ...", tone: 3, label: "plain" }),
      exapostilarion_closer: a2("Having recalled to myself * the hour of the dreadful trial * I am horrified and frightened * by the multitude of my wicked deeds; * but take compassion on me, O most pure one, * and in thy warm supplications grant unto me salvation; ** for whatsoever thou dost will thou can do.", "p11 Exapostilarion closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone III", tone: 3, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      // A stavrotheotokion AFTER the exapostilarion closer — a position no
      // earlier file prints one at. New order key, not a template break: the
      // reading view is order-driven.
      exapostilarion_stavrotheotokion: a2("Upon beholding Him Who was born of thee * hanging upon the Tree, O most immaculate one, * thou didst exclaim, crying aloud: * \u201cO my Child most desired, * whither hath the luminous beauty of Thee faded, ** Thou Who hast adorned the human race?\u201d", "p11 Exapostilarion Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      // "the Stichera" — not "these Stichera" — and the Spec. Mel. is the
      // one Heirarchs' LIC uses.
      praises_rubric: a1("On the Praises, the Stichera, in Tone IV:", "p11 Praises rubric"),
      praises: [
        a2("With the staff of grace O wondrous one, * thou hast snatched men from the abyss of their vanities, * and having thyself obeyed, O (name), * the beckoning of thy Teacher, * Who hath in everything * enlightened thine understanding, * thou hast been shown, O most radiant one, * to be an Apostle and honorable herald ** of the incomprehensible Divinity of God.", "p11 Praises 1", { spec_mel: "As one valiant among the martyrs ...", tone: 4, label: "plain", repeat: 2 }),
        a2("O radiant one, * the enlightenment of the Spirit came down upon thee * in the form of fire making thee a divine receptacle, * swiftly driving away the mist of godlessness * and enlightening the world * with the splendor of thy most wise speech, * O expounder of mysteries, * ornament of the Apostles, ** and eyewitness of Christ.", "p11 Praises 2", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
        a2("O glorious one, * with the brilliant flashes of thy preaching * thou hast shown, that for the sake of their faith, * those who sat in the darkness of ignorance * have became sons of the Master and God. * For His passion and death hast thou emulated * becoming an heir of His glory, * as one wise and Godly-spoken, ** and as a disciple of truth.", "p11 Praises 3", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
      ],
      // THE SECOND TRANSLATION — the same hymn as the aposticha Glory and
      // Doxasticon ("Leaving earthly cares…"), rendered differently: "having
      // given up earthly things", "torments" for "tortures", "men" for
      // "mankind". Registered as a variant against the aposticha Glory. This
      // is the single strongest anti-deduplication case in one file so far:
      // an encoder keying on the hymn would have collapsed a translation.
      praises_glory: a2("O Apostle (name); * having given up earthly things * thou hast followed Christ, and been sealed with the breath of the Holy Spirit, * and sent by Him unto the lost nations * to turn men unto the light of the knowledge of God. * Having thereupon ended the exploits of thy divine passion * and of various torments, thou didst give up to Christ thy soul; * do thou ever supplicate Him, * O most blessed one, * to grant unto us great mercy.", "p12 Praises Glory", { sourceLabel: "Glory ..., in Tone II", tone: 2, label: "glory" }),
      praises_closer: a2("All my hope I place in thee, * O Mother of God; ** keep me under thy protection.", "p12 Praises Both now", { sourceLabel: "Both now ..., Theotokion in Tone II", tone: 2, type: "theotokion", label: ["both_now", "theotokion"] }),
      praises_stavrotheotokion: a2("When the undefiled lamb saw her offspring * as a man willingly dragged to the slaughter, * with weeping she spake saying; * \u201cDost Thou now, O Christ my God, strive to make childless * the one who gave birth unto Thee? * Wherefore hast Thou done this to me, * O Redeemer of all? * Nevertheless, I hymn and glorify Thine extreme goodness * O Lover of mankind * which transcends mind and speech.\u201d", "p12 Praises Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      great_doxology_rubric: a1("The great Doxology: If a small Doxology is read, and a Doxasticon is appointed, the following is chanted after the Aposticha:", "p12 great Doxology rubric"),
      doxology_glory: a2("Leaving earthly cares O Apostle (name), * and having followed Christ, sealed with the breath of the Holy Spirit, * thou wast sent by Him unto the lost nations * to turn mankind unto the light of the knowledge of God, * thereupon, having ended the exploits of thy divine passion * and the suffering of multifarious tortures, * thou didst give thy soul unto Christ; * we beseech thee O all-blessed one to entreat Him, * that He grant unto us great mercy.", "p12 Doxology Glory", { sourceLabel: "Glory ..., in Tone II", tone: 2, label: "glory" }),
      doxology_closer_rubric: a1("Both now ..., Theotokion or Stavrotheotokion:", "p12 Doxology Both now"),
      // "After Our Father ..," — a TWO-DOT ellipsis, where every other file
      // prints three (sic register).
      troparion_rubric: a1("After Our Father .., Troparion of the Apostle, in Tone III:", "p12 after Our Father"),
      // The single-asterisk form — p12 and p13 print `sins * unto`, p4 and
      // p5 print `**`. The Unmercenaries four-site split exactly, second file.
      doxology_troparion: a2("O holy Apostle (name), * entreat the Merciful God * that He grant remission of sins * unto our souls.", "p12 Troparion after the Doxology", { sourceLabel: "Troparion of the Apostle, in Tone III", tone: 3 }),
      closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8)." },
      closing_rubric: a1("The Dismissal:", "p12 Dismissal"),
    },

    liturgy: {
      order: ['beatitudes_rubric', 'beatitudes', 'propers_rubric', 'liturgy_troparion',
              'kontakion', 'prokeimenon', 'prokeimenon_verse', 'epistle',
              'alleluia', 'alleluia_verse', 'gospel', 'communion_verse'],
      beatitudes_rubric: a1("Typika and Beatitudes.", "p13 Typika and Beatitudes"),
      // BYTE-IDENTICAL to the canon at all seven positions — Ode III 1-3,
      // Ode VI 1-3 and the Ode VI Theotokion, the "one; to be" semicolon
      // copied exactly at both sites (sic register, both rows). FIVE files
      // identical now against TWO variant.
      beatitudes: [
        a1("The divine mystery of the incarnation hast thou, O Godly-acceptable Apostle, truly learned, having received from the Savior Himself illumination from above.", "p13 Beatitude 1", { label: "plain", repeat: 2 }),
        a1("The Word Beginningless and Eternal hath abundantly illumined thee His minister with the lustrous brightness of divine grace, O wondrous Apostle (name).", "p13 Beatitude 2", { label: "plain" }),
        a1("Ablaze with the spiritual dawning, thou, O most glorious Apostle, proceeded forth as a God-inspired radiance sent from Christ. Wherefore, O radiant one, thou hast enlightened the world with thy teaching.", "p13 Beatitude 3", { label: "plain" }),
        a1("O glorious Apostle, as a disciple and friend of Christ thou hast zealously worked for the Lord God Almighty.", "p13 Beatitude 4", { label: "plain" }),
        a1("The Savior hath shown thee to be a selfless worker of divine wonders, having given thee power through the operation of His grace.", "p13 Beatitude 5", { label: "plain" }),
        a1("O all-famed Apostle of Christ (name), adorned with the divine grace of teaching, thou didst announce unto all the world the universal salvation of God Who is Lord over all.", "p13 Beatitude 6", { label: "plain" }),
        a1("Let the mouths of the wicked be shut, and let their faces be clothed with shame, for they do not count thee, O all-immaculate one; to be the Theotokos.", "p13 Beatitude 7", { label: "theotokion", sourceLabel: "Theotokion", label_inline: true }),
      ],
      // A SIXTH wording: "The Troparion and Kontakion appointed by the
      // Typicon. If there be none, chant the following:".
      propers_rubric: a1("The Troparion and Kontakion appointed by the Typicon. If there be none, chant the following:", "p13 propers rubric"),
      liturgy_troparion: a2("O holy Apostle (name), * entreat the Merciful God * that He grant remission of sins * unto our souls.", "p13 Troparion at Liturgy", { sourceLabel: "Troparion of the Apostle, in Tone III", tone: 3 }),
      prokeimenon: a2("Their sound hath gone forth into all the earth * and their words unto the ends of the world.", "p13 Liturgy Prokeimenon", { sourceLabel: "The Prokeimenon", tone: 8, label_inline: true }),
      prokeimenon_verse: a1("The heavens declare the glory of God, and the firmament proclaimeth the work of His hands.", "p13 Liturgy Prokeimenon verse", { sourceLabel: "Verse", label: "refrain" }),
      // "THE 1st EPISTLE" — lowercase st — and the reference carries the
      // book's own abbreviation INSIDE the parens: "(1 COR. 4:9-16)". A fifth
      // reference format in one file.
      epistle: { heading: 'THE 1st EPISTLE OF ST. PAUL TO THE CORINTHIANS',
        src: { file: AP, locus: 'p14 Epistle' },
        citation_verbatim: '(1 COR. 4:9-16)',
        citation: { book: '1 Corinthians', chapter: 4, verses: '9-16' },
        citation_basis: 'printed' },
      alleluia: a1("The heavens shall confess thy wonders, O Lord, thy truth in the Church of the saints.", "p14 Alleluia", { sourceLabel: "Alleluia, in Tone I", tone: 1, label_inline: true }),
      alleluia_verse: a1("God, Who is glorified in the council of the saints.", "p14 Alleluia verse", { sourceLabel: "Verse", label: "refrain" }),
      gospel: { heading: 'THE GOSPEL ACCORDING TO ST. MATTHEW',
        src: { file: AP, locus: 'p14 Liturgy Gospel' },
        citation_verbatim: '(9:36-38, 10:1-8)',
        citation: { book: 'Matthew', chapter: 9, verses: '9:36-38, 10:1-8' },
        citation_basis: 'printed',
        provenance_note: 'The Liturgy pericope PRINTS the names of the Twelve (10:2-4) that the Matins pericope skips — same passage, two pericopes, and a colon-format reference against the Matins comma-format.' },
      // POINTED — where Heirarch's communion verse is prose. The same psalm
      // verse as this file's aposticha verse 1 and both prokeimena, pointed
      // identically at all four sites.
      communion_verse: a2("Their sound hath gone forth into all the earth * and their words unto the ends of the world.", "p14 Communion Verse", { sourceLabel: "Communion Verse", label_inline: true }),
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Apostles.pdf — 14pp. THE NO-PLACEHOLDER PLURAL: zero (name)/(names)/
  // (Names), exactly as GENERAL_TAKES_NAME forbids — the file that checks the
  // corrected placeholder rule by its negative. Extraction proven by NINE
  // byte-matches (anabathmoi ×3, psalm50 ×2, the Tone VIII dogmatic, the
  // "Without separating Himself" theotokion, Apostle's Alleluia pair).
  //
  // TWO CENSUS "ABSENCES" EXPLAINED BY MEASUREMENT, NOT ABSENT AT ALL:
  //  • "Lord, I have cried" — this file prints "Lord I have cried" WITHOUT
  //    the comma, which is why the heading scan missed it (sic register).
  //  • "Communion Verse" — this file labels it "Communion Hymn".
  //  A heading scan answers the question it was asked. Twice more.
  //
  // WHAT THIS FILE ADDS:
  //  • THE FOUR-SITE TROPARION SPLIT, INVERTED: the Vespers dismissal prints
  //    the single `*` and the OTHER three sites print `**` — the mirror image
  //    of Apostle. Third file with a four-site two-form troparion.
  //  • THE KONTAKION DIVERGES BETWEEN ITS TWO SITES AGAIN — "O wise
  //    Apostles" with `*` at p10, "O most wise Apostles" with `**` at p13.
  //    Third kontakion/troparion self-divergence in three files.
  //  • ODES I AND IV PRINT FOUR TROPARIA (plus Theotokion) — first file off
  //    the 3+1 shape. The gate checks labels and non-emptiness, never a
  //    census, which is why this needed no schema change (§7.6).
  //  • The LIC stavrotheotokion is the 444-char family in a THIRD RENDERING
  //    ("I marvel" for "I stand in awe") — and reprints at the Praises with
  //    one pointing break removed. Family: 5 print sites, 4 forms.
  Apostles: {
    title: b1("THE VIGIL SERVICE COMMON TO TWO OR MORE APOSTLES.", "p1 title"),
    troparion: b2("O holy Apostles * entreat the Merciful God * that He grant remission of sins ** unto our souls.", "p5 God is the Lord", { sourceLabel: "the Troparion in Tone III", tone: 3, verified_sites: [{"locus": "p5 God is the Lord", "tone": 3, "repeat": 2}, {"locus": "p12 after Our Father", "tone": 3}, {"locus": "p13 AT THE LITURGY", "tone": 3}] }),
    kontakion: b2("O wise Apostles, * appearing as branches on the vine of Christ, * bearing great clusters of virtues * and making the wine of salvation flow forth unto us; * partaking of which we are filled with gladness, * and celebrate your honored memory; * wherefore, O Apostles of the Lord, intercede before Christ our God * that we may be granted great mercy * and the remission of our sins.", "p10 Kontakion after Ode VI", { sourceLabel: "Kontakion, in Tone IV", tone: 4, verified_sites: [{"locus": "p10 after Ode VI", "tone": 4}] }),
    ikos: b1("O god-seers, as disciples of the Master of all, with the net of your prayers snatch my humble soul from the abyss of transgressions, for it hath been ensnared in the nets of the demons. And grant that, passing the rest of my life in well-doing, I may hymn you with love and glorify the unblemished lives you led on earth, for ye Apostles of the Lord have enlightened those in darkness and taught them to honor the Divine Trinity.", "p10 Ikos", { sourceLabel: "The Ikos", label_inline: true }),

    vespers: {
      order: ['lic_rubric', 'lic', 'lic_closer', 'lic_stavrotheotokion',
              'idiomelon_rubric', 'lic_glory', 'dogmatikon_rubric', 'dogmatikon',
              'dogmatikon_alternate', 'dogmatikon_stavrotheotokion',
              'entrance_rubric', 'readings', 'aposticha_rubric', 'aposticha',
              'aposticha_glory', 'aposticha_closer_label', 'aposticha_closer_rubric',
              'aposticha_closer', 'aposticha_alternate', 'aposticha_stavrotheotokion',
              'troparion_rubric', 'dismissal_troparion', 'closer', 'closing_rubric'],
      // "Lord I have cried" — NO COMMA. The wording that defeated the
      // heading census (sic register).
      lic_rubric: b1("On “Lord I have cried ...,” the Stichera, in Tone IV:", "p1 LIC rubric"),
      lic: [
        b2("As eyewitnesses and ones who testified * of the incarnation of the Word, * O spiritually rich disciples, Ye are indeed blessed. * For like brilliant flashes of lightning you appeared to the world, * and like noetic mountains * dripping with sweet dew you nourished the faithful; * and like an assembly of eternally-flowing rivers of paradise * you gave unto the Churches of the Gentiles ** divine waters to drink.", "p1 LIC 1", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
        b2("Like rays resplendent with the effulgence of the Spirit, * you were sent into the whole world * and wrought therein * an abundance of miracles, * showing yourselves to be ministers of the mysteries of Christ * and godly-written tablets of divine grace * inscribed by God * with the law taught by God, ** O spiritually rich initiates.", "p1 LIC 2", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
        b2("The rods of the fishermen * troubled the arrogant philosophers * and put in place the eloquent orators. * For clearly expounding in the gospels * the teachings of Divine wisdom * and the doctrines of grace, * you taught all the beneficial mystery * of participation in eternal delight, ** which is the never-waning glory and delight of the Angels.", "p1 LIC 3", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
      ],
      lic_closer: b2("Rejoice luminous star that hath given birth to the never-setting Sun, * the Daystar that mystically shineth forth; * Rejoice, mind that hath flashed forth the divine light; * Rejoice, O tender ray of most immaculate and resplendent golden light * illumining the ends of the earth, * and revealing unto the faithful * the never-waning uncreated Light.", "p1 LIC closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone IV", tone: 4, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      // THE 444-CHARACTER FAMILY IN A THIRD RENDERING: "I marvel, O
      // Compassionate One, at Thy voluntary crucifixion!" where Martyrs/
      // Heirarchs print "I stand in awe … at Thy" and Unmercenaries "of Thy".
      // Five print sites of this hymn now, four distinct forms. Reprinted at
      // the Praises (p12) with ONE pointing break removed — registered.
      lic_stavrotheotokion: b2("The most pure one, * beholding Christ, the lover of mankind, crucified, * His side pierced by a lance, * cried out, lamenting: * \u201cWhat is this, O my Son? * How have these thankless people rewarded Thee * for the good things Thou hast done for them? * Dost Thou hasten to leave me childless, O most Beloved? ** I marvel, O Compassionate One, at Thy voluntary crucifixion!\u201d", "p1 LIC Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      // "Idiomelion" — misspelled, with a COLON where siblings print a comma
      // or stop (sic register).
      idiomelon_rubric: b1("If an Idiomelion be appointed: Glory ..., in Tone VIII:", "p1 idiomelon rubric"),
      lic_glory: b2("O ye disciples of the Savior, * enlightening with your declarations * the creation through which ye traversed, * and burning, as if dry twigs, the deceit of the idols * ye delivered the nations from the depths of ignorance, * unto the understanding of things divine * and thereby saved them. * We beseech you to entreat Christ God ** that He be merciful unto us on the day of judgment.", "p1 Glory idiomelon", { sourceLabel: "If an Idiomelion be appointed: Glory ..., in Tone VIII", tone: 8, label: "glory" }),
      dogmatikon_rubric: b1("If the Celebration be with a Polyeleos, and not a Resurrection Service, sing the following Dogmatic in Tone VIII (If the service is a Resurrection service sing the Dogmatic of the Tone for that service ):", "p2 dogmatikon rubric"),
      // BYTE-IDENTICAL to Heirarch's Tone VIII dogmatic ("In His love for
      // mankind") — the second dogmatic family in the book, travelling intact
      // where the Tone VI family just produced its first divergence.
      dogmatikon: b2("In His love for mankind, the King of heaven appeared on earth * and dwelt among men; * for He Who received flesh from the pure Virgin * and cameth forth from her having received human nature, * is the only Son of God, * twofold in nature but not Hypostasis. * Therefore, proclaiming Him to be truly perfect God and perfect man, * we confess Christ our God. * Him do thou beseech, O unwedded Mother, ** that our souls find mercy!", "p2 Both now dogmatic", { sourceLabel: "Both now ..., in Tone VIII", tone: 8, type: "dogmatic_theotokion", label: "both_now" }),
      // "the supplications us of thy servants" — transposed pronoun (sic).
      dogmatikon_alternate: b2("O all-pure Virgin Theotokos, * accept the supplications us of thy servants, * and pray without ceasing that we may be granted ** peace and the remission of our sins.", "p2 Otherwise Theotokion", { sourceLabel: "Otherwise, Theotokion", type: "theotokion", label: "theotokion", label_inline: true }),
      // "all-mmaculate" — dropped letter (sic).
      dogmatikon_stavrotheotokion: b2("O Lord, when the sun beheld Thee, * who art the Sun of righteousness, * hanging upon the tree of the cross, it hid its rays, * transforming light into darkness, * and the moon did likewise, * while Thy Mother the all-mmaculate Virgin, ** was sorely wounded in the depths of her soul.", "p2 Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      // Comma AND terminal full stop — a fifth wording of the entrance
      // rubric in nine files.
      entrance_rubric: b1("The Entrance. The Prokeimenon of the day. The Three Lessons, if appointed.", "p2 entrance rubric"),
      // 1 PETER ×3 — the second New Testament lesson set, and the first
      // UNIFORM heading set in the corpus: three identical headings, three
      // colon-format references.
      readings: [
        { heading: 'THE FIRST GENERAL EPISTLE OF ST. PETER',
          src: { file: BS, locus: 'p2 Lesson 1' },
          citation_verbatim: '(1:3-9)',
          citation: { book: '1 Peter', chapter: 1, verses: '3-9' },
          citation_basis: 'printed' },
        { heading: 'THE FIRST GENERAL EPISTLE OF ST. PETER',
          src: { file: BS, locus: 'p2-p3 Lesson 2' },
          citation_verbatim: '(1:13-19)',
          citation: { book: '1 Peter', chapter: 1, verses: '13-19' },
          citation_basis: 'printed' },
        { heading: 'THE FIRST GENERAL EPISTLE OF ST. PETER',
          src: { file: BS, locus: 'p3 Lesson 3' },
          citation_verbatim: '(2:11-24)',
          citation: { book: '1 Peter', chapter: 2, verses: '11-24' },
          citation_basis: 'printed' },
      ],
      aposticha_rubric: b1("On the Aposticha, these Stichera, in Tone VI:", "p3 Aposticha rubric"),
      aposticha: [
        b2("O ye disciples of Christ, * theologians and seers of God, * ye were shown to be ministers * of the great mysteries of God, * and having received the grace of healing, ** ye cure the infirmities of all mankind.", "p3 Aposticha 1", { spec_mel: "On the third day ...", tone: 6, label: "plain" }),
        b2("Their sound hath gone forth into all the earth * and their words unto the ends of the world.", "p3 Aposticha verse 1", { sourceLabel: "Verse", label: "refrain" }),
        b2("Ye are great refuges * and shelters for our souls, * and vanquishers of evil spirits, * O Apostles of the Lord * and God-seers; ** wherefore we ever honor you.", "p3 Aposticha 2", { spec_mel: "On the third day ...", label: "plain" }),
        b2("The heavens declare the glory of God, * and the firmament proclaimeth the work of His hands.", "p3 Aposticha verse 2", { sourceLabel: "Verse", label: "refrain" }),
        b2("O ye, blessed Apostles of God, * deliver from every attack * and all machinations of the demons, * and from transgressions * and captivity to the evil one, ** all of those who in faith praise you.", "p4 Aposticha 3", { spec_mel: "On the third day ...", label: "plain" }),
      ],
      // "Like Vessels" — capital V mid-sentence (sic, both sites); reprinted
      // byte-for-byte as the Doxasticon — FOURTH file with the pattern.
      aposticha_glory: b2("Like Vessels well appointed for the ministering of divine things, O Apostles, * you were entrusted with the calling of the Gentiles, * instructing them both by word and deed * in the faith of Christ, * and thereby enlightening all to confess the true divinity of Christ, * the Savior of our souls.", "p4 Aposticha Glory", { sourceLabel: "Glory ..., in Tone IV", tone: 4, label: "glory" }),
      aposticha_closer_label: b1("Both now ..., in Tone IV:", "p4 Both now label"),
      aposticha_closer_rubric: b1("If the Celebration be with a Polyeleos, chant the Resurrection Theotokion:", "p4 aposticha closer rubric"),
      aposticha_closer: b2("Mercifully regard the supplications of thy servants, * O all-immaculate one, * quelling the cruel uprisings of the demons against us, * delivering us from every sorrow; * for thee alone do we have as a steadfast and sure confirmation, * and having acquired thine intercession; * let not us who call upon thee be put to shame, * O Sovereign Lady. * Hasten thou to answer the entreaties of those who cry out to thee with faith: * Rejoice, thou help, joy and protection of all, ** and the salvation of our souls!", "p4 Resurrection Theotokion", { tone: 4, type: "theotokion", label: "theotokion" }),
      // Reprinted byte-for-byte as the Praises Both-now (p12) — registered.
      aposticha_alternate: b2("Having thee O Theotokos as our hope and intercession, * we fear not the assaults of the adversary, ** for thou dost save our souls.", "p4 Otherwise Theotokion", { sourceLabel: "Otherwise, Theotokion", type: "theotokion", label: "theotokion", label_inline: true }),
      aposticha_stavrotheotokion: b2("A sword pierced through thy heart, * as Simeon foretold, O most pure Lady, * when thou didst behold Him Who shone forth from thee * ineffably raised up upon the Cross * by the iniquitous ones, as one condemned, * given vinegar and gall to drink, * His side pierced, His hands and feet nailed; * and, lamenting, thou didst exclaim, crying out maternally: ** What is this new mystery, O my Child most sweet?", "p4 Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      // NO from-the-Typicon conditional at Vespers — the first file whose
      // Vespers troparion is introduced by the bare label alone.
      troparion_rubric: b1("The Troparion, in Tone III:", "p4 troparion label"),
      // THE SINGLE-ASTERISK SITE — p4 prints `sins * unto` where God-is-the-
      // Lord, after-Our-Father and the Liturgy all print `**`. The Apostle
      // split MIRRORED. Stored per-position; the canonical field claims the
      // three ** sites.
      dismissal_troparion: b2("O holy Apostles * entreat the Merciful God * that He grant remission of sins * unto our souls.", "p4 Troparion at Vespers dismissal", { sourceLabel: "The Troparion, in Tone III", tone: 3 }),
      closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8)." },
      closing_rubric: b1("The Dismissal:", "p4 Dismissal"),
    },

    matins: {
      order: ['god_is_lord_rubric', 'troparion', 'troparion_closer',
              'sessional_1_rubric', 'sessional_1', 'sessional_1_closer',
              'sessional_2_rubric', 'sessional_2', 'sessional_2_closer',
              'megalynarion_rubric', 'megalynarion', 'megalynarion_verse',
              'sessional_polyeleos_rubric', 'sessional_polyeleos',
              'sessional_polyeleos_closer', 'anabathmoi_rubric', 'anabathmoi_intro',
              'anabathmoi', 'anabathmoi_closer', 'prokeimenon_rubric', 'prokeimenon',
              'prokeimenon_verse', 'gospel_rubric', 'gospel', 'psalm50_rubric',
              'psalm50_sticheron', 'psalm50_closer', 'psalm50_verse',
              'sessional_post50_rubric', 'sessional_post50', 'canon_rubric', 'canons',
              'sessional_ode3_rubric', 'sessional_ode3', 'sessional_ode3_closer',
              'sessional_ode3_stavrotheotokion', 'kontakion_rubric', 'kontakion', 'ikos',
              'exapostilarion_rubric', 'exapostilarion', 'exapostilarion_closer',
              'praises_rubric', 'praises', 'praises_glory', 'praises_closer',
              'praises_stavrotheotokion', 'great_doxology_rubric',
              'doxology_glory', 'doxology_closer_rubric', 'troparion_rubric',
              'troparion', 'closer', 'closing_rubric'],
      god_is_lord_rubric: b1("On “God is the Lord ...,” the Troparion in Tone III:", "p5 God is the Lord rubric"),
      troparion_closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8)." },
      sessional_1_rubric: b1("After the 1st chanting of the Psalter, the Sessional Hymn, in Tone I:", "p5 sessional 1 rubric"),
      // Spec. Mel. "Thy sepulcher O Savior ..." — the SAME melody Heirarch
      // cites as "Thy Tomb O Savior ...": even the melody NAMES are unstable
      // across files. Reconciliation-table material.
      sessional_1: b2("The spiritual choir of Apostles * of the Most High God * have been mystically sent forth * being revealed to be physicians to those suffering in servitude, * and invoking the only Thrice-Hypostatic Essence; ** they wisely proclaim the divine incarnation of Emanuel the Lord.", "p5 Sessional 1", { spec_mel: "Thy sepulcher O Savior ...", tone: 1, label: "plain", repeat: 2 }),
      sessional_1_closer: b1("O Virgin, we hymn thee, the unburnt bush which Moses saw, the mountain of God, the holy cloud, the undefiled tabernacle, the God-pleasing table, the palace of the King Most High, the all-splendid and impassable gate.", "p5 Sessional 1 closer", { sourceLabel: "Glory ..., Both now ..., Theotokion in Tone I", tone: 1, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      sessional_2_rubric: b1("After the 2nd chanting of the Psalter, the Sessional Hymn, in Tone IV:", "p5 sessional 2 rubric"),
      sessional_2: b2("Like unto stars on high, * O Apostles, ye illumine all with resplendent beams of light, * even unto the ends of the earth, * by the instructions of your holy preaching, * O heavenly initiates of the Lord.", "p5 Sessional 2", { spec_mel: "Thou hast appeared today ...", tone: 4, label: "plain", repeat: 2 }),
      sessional_2_closer: b2("O ye faithful, let us bless the Theotokos, * our helper, the fervent aid of those amid misfortune, ** by whom we have been delivered from foreign bondage.", "p5 Sessional 2 closer", { sourceLabel: "Glory ..., Both now ..., Theotokion in Tone IV", tone: 4, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      megalynarion_rubric: b1("After the Polyeleos, the Megalynarion:", "p5 megalynarion rubric"),
      // "the ends of the Earth" — capital E, the "inhabit the World" class
      // at a new position (sic register).
      megalynarion: b1("We magnify you, O holy Apostles of Christ, ye who have enlightened the whole world with your teachings and brought all the ends of the Earth unto Christ.", "p5 Megalynarion", { label_inline: true }),
      megalynarion_verse: b1("The heavens declare the glory of God, and the firmament proclaimeth the work of His hands.", "p5 Megalynarion verse", { sourceLabel: "Verse", label: "refrain" }),
      sessional_polyeleos_rubric: b1("After the Polyeleos, the Sessional Hymn, in Tone III:", "p5 post-Polyeleos sessional rubric"),
      sessional_polyeleos: b2("Ye, divine trumpets of the Comforter, * uttering the inspiring words of salvation, * which ye proclaim unto the world, * awakening those sleeping in the darkness of deceit, * and bringing them into the light of the knowledge of God, * O Apostles of the Divine Light, * entreat Christ God that He save our souls.", "p5 post-Polyeleos Sessional", { spec_mel: "Of the Divine ...", tone: 3, label: "plain", repeat: 2 }),
      // BYTE-IDENTICAL to Heirarchs' sessional-2 closer — "He had became a
      // man" INCLUDED. The defect's third print site (sic register); the
      // theotokion travels between different sessional positions across
      // files.
      sessional_polyeleos_closer: b2("Without separating Himself from the divine Essence, * when taking flesh in thy womb, * He remained God though He had became a man; * and even after thy birthgiving, preserved thee, His Virgin Mother, * as immaculate as thou wast before giving birth. * Him do thou earnestly beseech, ** that He grant us great mercy.", "p6 post-Polyeleos Sessional closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone III", tone: 3, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      anabathmoi_rubric: b1("If of Polyeleos rank, and not a Resurrection Service, chant the following:", "p6 anabathmoi rubric"),
      anabathmoi_intro: b1("The Song of Ascents: The first antiphon, in Tone IV:", "p6 anabathmoi heading"),
      anabathmoi: [
        b2("From my youth * do many passions war against me; * but do Thou Thyself defend ** and save me, O my Savior.", "p6 Anabathmoi 1", { label: "plain" }),
        b2("Ye haters of Zion * shall be shamed by the Lord; * for like grass, by the fire ** shall ye be withered.", "p6 Anabathmoi 2", { label: "plain" }),
      ],
      anabathmoi_closer: b2("In the Holy Spirit, * every soul is quickened, * and, through cleansing, is exalted ** and made radiant by the Triple Unity in a hidden sacred manner.", "p6 Anabathmoi closer", { sourceLabel: "Glory ..., Both now ...,", type: "plain", label: ["glory", "both_now"] }),
      prokeimenon_rubric: b1("Prokeimenon, in Tone IV:", "p6 prokeimenon rubric"),
      prokeimenon: b2("Their sound hath gone forth into all the earth * and their words unto the ends of the world.", "p6 Prokeimenon", { sourceLabel: "The Prokeimenon", tone: 4, label_inline: true }),
      prokeimenon_verse: b1("The heavens declare the glory of God, and the firmament proclaimeth the work of His hands.", "p6 Prokeimenon verse", { sourceLabel: "Verse", label: "refrain" }),
      // "Let every breath." — a bare FULL STOP where eight files print
      // "Let every breath ...,".
      gospel_rubric: b1("Let every breath.", "p6 Let every breath"),
      // THE HEADING OVERSTATES: "(9, 36-38; 10, 1-8)" — but the body SKIPS
      // vv. 10:2-4 (the names of the Twelve), printing the same pericope
      // Apostle's Matins gospel cites precisely as "10, 1. 5-8". Following
      // this reference shows a reader MORE than the page prints — the inverse
      // of the Unmercenaries understatement class.
      gospel: { heading: 'THE GOSPEL ACCORDING TO ST. MATTHEW',
        src: { file: BS, locus: 'p6 Matins Gospel' },
        citation_verbatim: '(9, 36-38; 10, 1-8)',
        citation: { book: 'Matthew', chapter: 9, verses: '9:36-38, 10:1, 10:5-8' },
        citation_basis: 'printed',
        provenance_note: 'The normalized citation follows the BODY (which omits 10:2-4), not the printed span. Apostle\'s Matins gospel prints the same pericope with the exact reference; this file rounds it to 1-8.' },
      psalm50_rubric: b1("After the 50th Psalm:", "p6 After the 50th Psalm"),
      psalm50_sticheron: b2("Through the prayers of the Holy Apostles, * O Merciful One, ** blot out the multitude of our transgressions.", "p6 Psalm 50 Glory", { sourceLabel: "Glory ..., in Tone VI", tone: 6, label: "glory" }),
      psalm50_closer: b2("Through the prayers of the Theotokos, * O Merciful One, ** blot out the multitude of our transgressions.", "p7 Psalm 50 Both now", { sourceLabel: "Both now ...,", type: "theotokion", label: "both_now" }),
      psalm50_verse: b2("Have mercy on me, O God, * according to Thy great mercy; * and according to the multitude of Thy compassions, ** blot out my transgressions.", "p7 Psalm 50 verse", { label: "refrain" }),
      sessional_post50_rubric: b1("Then the Sessional Hymn, in Tone VI:", "p7 post-Psalm-50 sessional rubric"),
      sessional_post50: b2("The all-honorable feast of the Apostles * hasteneth unto the Church of Christ * for the salvation of us all; * wherefore praising them let us cry: * Rejoice, O ye lamps, blazing forth unto those in darkness * the rays of the spiritual Sun; * Rejoice, O ye Apostles, immutable foundations of divine doctrines, * Ye friends of Christ, and honored vessels. * Come invisibly into our midst ** and grant spiritual gifts to those who with hymns praise your feast.", "p7 post-Psalm-50 Sessional", { tone: 6, label: "plain" }),
      // "The Canon. In Tone IV:" — FULL STOP after Canon; a third
      // punctuation of this rubric in three files.
      canon_rubric: b1("The Canon. In Tone IV:", "p7 Canon rubric"),
      canons: [{
        title: "The Canon. In Tone IV:", tone: 4,
        odes: {
          1: {
            irmos: b2("Through the deep of the Red Sea, * marched dry shod Israel of old, * and by Moses\u201d outstretched hands, * raised in the form of a cross, * the power of Amalek was routed in the wilderness.", "p7 Ode 1 irmos", { sourceLabel: "Irmos", label_inline: true }),
            refrain: b1("Holy Apostles of the Lord pray to God for us", "p7 Ode 1 refrain", { sourceLabel: "Refrain", label_inline: true }),
            items: [
              b1("Grant unto me O Christ God, as One fervently desiring to hymn the choir of Apostles, and by their intercessions, a ray of the Most holy Spirit and the light of Thy wisdom.", "p7 Ode 1 troparion 1", { label: "plain" }),
              b1("Strengthened with Thy might and grace, and by their unyielding inclination toward Thee O Christ, Thy revered Apostles, who as eyewitnesses of God triumphed over the power of hostile enemies.", "p7 Ode 1 troparion 2", { label: "plain" }),
              b1("Accomplishing healings in Thy name, O Master, thy glorious Apostles have netted the gatherings of the nations with the knowledge of Thee and made them shine with Thy light.", "p7 Ode 1 troparion 3", { label: "plain" }),
              b1("Having learned heavenly wisdom, the most glorious and wise Apostles have clearly made foolish the verbosity of the impious by the brevity of their proclamations.", "p7 Ode 1 troparion 4", { label: "plain" }),
              b1("One of the most divine Trinity hast thou brought forth, O most pure one, He that appeared from thee, O Virgin and Mother, clothed in our flesh, by the goodwill of the Father and by the working of the Most Holy Spirit.", "p7 Ode 1 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          3: {
            irmos: b2("Thy Church, O Christ, rejoiceth in Thee crying aloud: * Thou, O Lord, art my strength, * my refuge and foundation.", "p7 Ode 3 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              b1("The heralds of Christ, aflame with tongues of fire, proclaimed on earth the divine and honorable doctrines, handing them down unto us.", "p8 Ode 3 troparion 1", { label: "plain" }),
              b1("Thou, O Master, hast shown Thy disciples to be spiritual heavens who declare Thy glory unto all the ends of the world.", "p8 Ode 3 troparion 2", { label: "plain" }),
              b1("Written in the heavens and appearing as companions with Christ, O most wise ones, you now preserve us who with love honor you.", "p8 Ode 3 troparion 3", { label: "plain" }),
              b1("He that dwelleth on high, O most pure one, dwelt among us, for seedlessly taking flesh of thee, He was revealed unto us.", "p8 Ode 3 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          4: {
            irmos: b2("Beholding Thee, the Sun of righteousness * lifted up upon the cross, * the Church now standeth arrayed and doth worthily cry aloud: * Glory be to Thy power, O Lord!", "p8 Ode 4 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              b1("The sound of the divine proclamations of the Apostles hath passed like a torch of fire throughout the entire inhabited world, burning up the fuel of falsehood, and enlightening the nations of the devout with grace.", "p9 Ode 4 troparion 1", { label: "plain" }),
              b1("The disciples of the Lord, likened to bright lights lit by God, have enlightened the world darkened by the fog of godlessness, with beams of grace and the brightness of their preaching.", "p9 Ode 4 troparion 2", { label: "plain" }),
              b1("O all-famed Apostles, Illumined with the sacred rays of the spiritual Sun, like the sun ye shone forth in the world with the illumination of the divine light, vanquishing the fog of error.", "p9 Ode 4 troparion 3", { label: "plain" }),
              b1("Holding Thy Cross as a staff of strength, O Word, Thine eye-witnesses like horses cutting through the salty sea of life, disturbed the waters of polytheism", "p9 Ode 4 troparion 4", { label: "plain" }),
              b1("Adorned with a multihued illumination, thy living heaven O Christ, Thou King of kings, the most pure Virgin hath now been glorified as the Theotokos .", "p9 Ode 4 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          5: {
            irmos: b2("Thou, O Lord, who camest into the world, * art my light, * a holy light turning from the darkness of ignorance * those who sing Thy praises in faith.", "p9 Ode 5 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              b1("O Christ, Thou hast revealed thy divine and most wise servants, to be lights in the midst of the world, declaring Thee, the never-waning Light, unto all.", "p9 Ode 5 troparion 1", { label: "plain" }),
              b1("O Apostles, having practiced every virtue, ye have destroyed the snares of the multi-faceted malice of the demons.", "p9 Ode 5 troparion 2", { label: "plain" }),
              b1("Uttering in tongues of fire, the Apostles made clear unto us the Trinity shining in the Unity of the Godhead.", "p9 Ode 5 troparion 3", { label: "plain" }),
              b1("We offer thee as an invincible weapon against our enemies; For in thee, O Bride of God, we have gained an anchor and the hope of our salvation.", "p9 Ode 5 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          6: {
            irmos: b2("The church crieth out unto Thee O Lord, * \u201cI will sacrifice unto Thee with a voice of praise\u201d * having been cleansed of the blood of the demons\u201d * by the blood that for mercy\u2019s sake flowed from Thy side.", "p9 Ode 6 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              b1("Having fortified Thy disciples, O Savior, with wisdom and miracles, Thou didst make them stronger than the babbling Hellenes, whereby they overthrew their falsehoods.", "p9 Ode 6 troparion 1", { label: "plain" }),
              b1("The divine rivers of wisdom have filled with the waters of salvation all the valleys of the Church, having enriched them with streams from the wellsprings of salvation.", "p9 Ode 6 troparion 2", { label: "plain" }),
              b1("Having appeared as living stars, O all-famed Apostles, you have dispersed every dark and gloomy falsehood by the brilliant beams of light radiating from you, illumining all with the light of the knowledge of God.", "p9 Ode 6 troparion 3", { label: "plain" }),
              b1("Having found in thee a dove entirely perfect, liken to a beautiful bright lily and flower of the valleys, the spiritual Bridegroom dwelt within thee.", "p10 Ode 6 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          7: {
            irmos: b2("In the Persian furnace the youths and descendants of Abraham, * burning with a love of piety * rather than by the flame of a fire, * cried out aloud saying: * Blessed art Thou in the temple of Thy glory, O Lord.", "p10 Ode 7 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              b1("Thou who by nature wast God before assuming flesh hast made Thy disciples sons, O Most Gracious One, revealing them to be heirs of Thy Father\u2019s glory, for Thou, O God and Master, didst deem them worthy to accompany Thee.", "p10 Ode 7 troparion 1", { label: "plain" }),
              b1("Granting unto Thy divine disciples O Word, an outpouring of wisdom, a breadth of heart and an eloquent tongue, Thou didst send them out unto all the nations to preach the Gospel of the Kingdom.", "p10 Ode 7 troparion 2", { label: "plain" }),
              b1("Appearing as luminous clouds of divine light, the Apostles rained life-giving water upon all crying aloud: \u201cBlessed art Thou in the temple of Thy glory, O Lord.\u201d", "p10 Ode 7 troparion 3", { label: "plain" }),
              b1("O most pure one thou hast appeared unto all mankind to be adorned with divine glory, since thou alone from all eternity, O Mother and Virgin, wast chosen to conceive the Word of God. Blessed art thou among women, O all-immaculate Lady.", "p10 Ode 7 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          8: {
            irmos: b2("Having spread his hands, Daniel closed the lions\u2019 jaws * in their den; * while the zealously pious youths, * girded with virtue, * quenched the power of the fire and cried aloud: * Bless ye the Lord, all ye works of the Lord.", "p10 Ode 8 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              b1("The divine and most wise choir of the Apostles of Christ, by the fire of the Spirit, burned the tares of the temples of the images of the demons, and having illumined the hearts of the faithful, we cry aloud: \u201cBless ye the Lord, all ye works of the Lord.\u201d", "p11 Ode 8 troparion 1", { label: "plain" }),
              b1("With one accord let us honor with hymns the Apostles as divine Disciples of Christ who thundered forth for us noetic doctrines, as refuges of the faithful, as common benefactors of mankind, and as servants of the Savior.", "p11 Ode 8 troparion 2", { label: "plain" }),
              b1("Let us honor the all-venerable and spacious vessels of virtues, the first-fruits of mortals, the trumpets of preaching, the streams of incorruptible life, the God-bearing lightning, the wellsprings of healing and the beautiful feet of the Gospel.", "p11 Ode 8 troparion 3", { label: "plain" }),
              b1("So that we may partake of His fullness, The Supreme One emptied Himself for our sake; for He, being immutable, and having entered thy most pure womb without leaving His Father\u2019s bosom, became incarnate; wherefore we all bless thee, O Mary, Bride of God.", "p11 Ode 8 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          9: {
            irmos: b2("A cornerstone not cut by hand O Virgin, * was cut from thee the unhewn mountain: * even Christ, Who hath joined together the disparate natures; * therefore rejoicing we magnify thee, * O Theotokos.", "p11 Ode 9 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              b1("O God-seers, ye have received from the Master the power to loose the bonds of transgressions, wherefore we beseech you to mercifully cleanse the sins of those who hymn you, that they may be deemed worthy of salvation.", "p11 Ode 9 troparion 1", { label: "plain" }),
              b1("O ye glorious Apostles, having received the full effulgence of the Spirit, Which appeared unto you in the upper room in the fullness of its Divine energies, and initiated thereby into the sublime teachings and dogmas of Christ, ye are now are rightly called blessed.", "p11 Ode 9 troparion 2", { label: "plain" }),
              b1("Unto you His friends who have departed to eternal rest, Christ hath granted unfading crowns and the fullness of the contemplation of God; implore Him now to preserve in the faith all right believing Orthodox Churches.", "p11 Ode 9 troparion 3", { label: "plain" }),
              b1("Willing to dwell amongst us in the flesh, He Who hath adorned everything by His word made His abode within thee, having found thee to be the holiest of all, revealing thee to be the true Theotokos, O Virgin Mother.", "p11 Ode 9 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
        },
      }],
      sessional_ode3_rubric: b1("The Sessional Hymn, in Tone VIII:", "p8 post-Ode-III sessional rubric"),
      // The Apostle/Heirarch post-Polyeleos hymn ("With a net of divine
      // words … thou hast caught the spiritual fish") in a PLURAL RENDERING
      // at a DIFFERENT POSITION — "With the net … you caught the rational
      // fish". Same Spec. Mel. family ("Of the Wisdom ..." — capital W here).
      // Registered as a variant across files AND positions.
      sessional_ode3: b2("With the net of divine words * you caught the rational fish * bringing them as first-fruits unto our God, * for longing to bear the marks of Christ you have appeared like Him in His passion, * O glorious Apostles; * wherefore having come together we honor your all-festive memorial as is meet, * and with one voice cry out to you: * Intercede with Christ God to grant remission of sins * unto those who with love honor your holy memory.", "p8 post-Ode-III Sessional", { spec_mel: "Of the Wisdom ...", tone: 8, label: "plain" }),
      sessional_ode3_closer: b2("All we, the generations of mankind, * call thee blessed, * in that thou art the Virgin who alone among women * hast given birth without seed unto God in the flesh; * for the fire of the Godhead made its abode within thee, * and thou didst feed the Creator and Lord * with milk as an infant. * Wherefore, we, the race of mankind and of angels, * worthily glorify thine all-holy birthgiving, * and together we cry out to thee: * Entreat Christ God to grant forgiveness of sins ** unto those who with faith worship thine all-holy Offspring.", "p8 post-Ode-III Sessional closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone VIII", tone: 8, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      sessional_ode3_stavrotheotokion: b2("Upon beholding the Lamb, Shepherd and Redeemer * upon the Cross, * the ewe-lamb exclaimed weeping, bitterly lamenting, and crying aloud: * \u201cThe world rejoiceth, having received deliverance through Thee, * but my womb doth burn, beholding Thy crucifixion, * which Thou hast endured in Thy merciful loving-kindness. * O long-suffering Lord, * Thou abyss and inexhaustible well-spring of mercy, * take pity, and grant forgiveness of sins ** unto those who hymn Thy divine sufferings with faith!\u201d", "p8 post-Ode-III Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      kontakion_rubric: b1("The Kontakion from the Typicon; but if there be none, chant the following:", "p10 kontakion rubric"),
      exapostilarion_rubric: b1("Exapostilarion, in Tone III:", "p11 exapostilarion rubric"),
      exapostilarion: b2("O come, all ye people! * Let us hymn in divine odes * the Apostles of Christ, * the preachers of faith, ** as those who pray to Christ for our souls.", "p11 Exapostilarion", { tone: 3, label: "plain" }),
      // "Glory ..., Both now ..., Theotokion:" — NO TONE printed; first
      // toneless closer label at this position.
      exapostilarion_closer: b1("O most holy and pure Lady, who alone knewest not wedlock, our hope and salvation, beseech our God Who assumed flesh from thee, that He save the world from falsehood, evil circumstances and suffering.", "p11 Exapostilarion closer", { sourceLabel: "Glory ..., Both now ..., Theotokion:", type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      praises_rubric: b1("On the Praises, the Stichera, in Tone VIII:", "p12 Praises rubric"),
      praises: [
        b2("O Lord, Thou hast illumined Thine Apostles * with the effulgence of the Comforter * and by the enlightenment of the understanding of Thee, O Master * hast set them forth as beacons for the strengthening of the faith; * wherefore we worship Thine inexpressible love for mankind.", "p12 Praises 1", { spec_mel: "O Lord, though Thou didst stand before the judgment seat ...", tone: 8, label: "plain", repeat: 2 }),
        b2("O Lord, by the intercessions of Thine Apostles * Thou hast enclosed Thy flock, * which Thou hast purchased with Thine own precious blood * preserving it unharmed from the temptations of the enemies, * and from enslavement to the adversary, * as thou alone art Compassionate and the Lover of mankind.", "p12 Praises 2", { spec_mel: "O Lord, though Thou didst stand before the judgment seat ...", label: "plain" }),
        b2("You appear together as foundations of the Church, * as goodly stones, * radiating unto the universe the bright light of the knowledge of God, * O divine Apostles, * standing now before the Trinity, * pray ye on behalf of our souls.", "p12 Praises 3", { spec_mel: "O Lord, though Thou didst stand before the judgment seat ...", label: "plain" }),
      ],
      // "O all-famed apostles" — lowercase a mid-hymn (sic).
      praises_glory: b2("As winged eagles * ye have traversed the entire earth, * spreading the venerable doctrines of Christ, * and by grace, O all-famed apostles, * tearing out the tares of deception * and producing abundant fruit, * with which ye eternally fill the spiritual granaries, * preserving them in all richness for the Immortal Shepherd.", "p12 Praises Glory", { sourceLabel: "Glory ..., in Tone IV", tone: 4, label: "glory" }),
      praises_closer: b2("Having thee O Theotokos as our hope and intercession, * we fear not the assaults of the adversary, ** for thou dost save our souls.", "p12 Praises Both now", { sourceLabel: "Both now ..., Theotokion, in Tone IV", tone: 4, type: "theotokion", label: ["both_now", "theotokion"] }),
      // The LIC stavrotheotokion reprinted with ONE pointing break removed
      // (no * after "lance," here) — registered as the intra-file variant.
      praises_stavrotheotokion: b2("The most pure one, * beholding Christ, the lover of mankind, crucified, * His side pierced by a lance, cried out, lamenting: * \u201cWhat is this, O my Son? * How have these thankless people rewarded Thee * for the good things Thou hast done for them? * Dost Thou hasten to leave me childless, O most Beloved? ** I marvel, O Compassionate One, at Thy voluntary crucifixion!\u201d", "p12 Praises Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      great_doxology_rubric: b1("The great Doxology: If a small Doxology is read, and a Doxasticon is appointed, the following is chanted after the Aposticha:", "p12 great Doxology rubric"),
      doxology_glory: b2("Like Vessels well appointed for the ministering of divine things, O Apostles, * you were entrusted with the calling of the Gentiles, * instructing them both by word and deed * in the faith of Christ, * and thereby enlightening all to confess the true divinity of Christ, * the Savior of our souls.", "p12 Doxology Glory", { sourceLabel: "Glory ..., in Tone IV", tone: 4, label: "glory" }),
      doxology_closer_rubric: b1("Both now ..., Theotokion or Stavrotheotokion:", "p12 Doxology Both now"),
      // "After Our Father ..," — the two-dot ellipsis AGAIN: it printed in
      // Apostle at this exact position. The defect belongs to the apostolic
      // pair's shared setting (sic register, second file).
      troparion_rubric: b1("After Our Father .., Troparion, in Tone III:", "p12 after Our Father"),
      closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8)." },
      closing_rubric: b1("The Dismissal:", "p12 Dismissal"),
    },

    liturgy: {
      order: ['beatitudes_rubric', 'beatitudes', 'propers_rubric', 'troparion',
              'liturgy_kontakion', 'prokeimenon', 'prokeimenon_verse', 'epistle',
              'alleluia', 'alleluia_verse', 'gospel', 'communion_verse'],
      beatitudes_rubric: b1("Typika and Beatitudes.", "p13 Typika and Beatitudes"),
      // BYTE-IDENTICAL to the canon at all seven positions — SIX files
      // identical now against two variant.
      beatitudes: [
        b1("The heralds of Christ, aflame with tongues of fire, proclaimed on earth the divine and honorable doctrines, handing them down unto us.", "p13 Beatitude 1", { label: "plain", repeat: 2 }),
        b1("Thou, O Master, hast shown Thy disciples to be spiritual heavens who declare Thy glory unto all the ends of the world.", "p13 Beatitude 2", { label: "plain" }),
        b1("Written in the heavens and appearing as companions with Christ, O most wise ones, you now preserve us who with love honor you.", "p13 Beatitude 3", { label: "plain" }),
        b1("Having fortified Thy disciples, O Savior, with wisdom and miracles, Thou didst make them stronger than the babbling Hellenes, whereby they overthrew their falsehoods.", "p13 Beatitude 4", { label: "plain" }),
        b1("The divine rivers of wisdom have filled with the waters of salvation all the valleys of the Church, having enriched them with streams from the wellsprings of salvation.", "p13 Beatitude 5", { label: "plain" }),
        b1("Having appeared as living stars, O all-famed Apostles, you have dispersed every dark and gloomy falsehood by the brilliant beams of light radiating from you, illumining all with the light of the knowledge of God.", "p13 Beatitude 6", { label: "plain" }),
        b1("Having found in thee a dove entirely perfect, liken to a beautiful bright lily and flower of the valleys, the spiritual Bridegroom dwelt within thee.", "p13 Beatitude 7", { label: "theotokion", sourceLabel: "Theotokion", label_inline: true }),
      ],
      // NO propers conditional — the Liturgy troparion is introduced by the
      // bare "Troparion of the Apostles" label. Declared absent, close read.
      propers_rubric: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Eight files print a from-the-Typicon conditional here; this file goes straight to “Troparion of the Apostles, in Tone III:”. Its Vespers troparion likewise lacks the conditional." },
      // p13 prints "O MOST wise Apostles" with `**` where p10 prints "O wise
      // Apostles" with `*` — the kontakion self-divergence, THIRD file.
      // Canonical claims p10; this site is per-position; variant registered.
      liturgy_kontakion: b2("O most wise Apostles, * appearing as branches on the vine of Christ, * bearing great clusters of virtues * and making the wine of salvation flow forth unto us; * partaking of which we are filled with gladness, * and celebrate your honored memory; * wherefore, O Apostles of the Lord, intercede before Christ our God ** that we may be granted great mercy * and the remission of our sins.", "p13 Kontakion at Liturgy", { sourceLabel: "Kontakion of the Apostles, in Tone IV", tone: 4 }),
      prokeimenon: b2("Their sound hath gone forth into all the earth * and their words unto the ends of the world.", "p13 Liturgy Prokeimenon", { sourceLabel: "The Prokeimenon", tone: 8, label_inline: true }),
      prokeimenon_verse: b1("The heavens declare the glory of God, and the firmament proclaimeth the work of His hands.", "p13 Liturgy Prokeimenon verse", { sourceLabel: "Verse", label: "refrain" }),
      // Same lesson as Apostle's Liturgy epistle, DIFFERENT reference format
      // — "(4: 9-16)" against "(1 COR. 4:9-16)" — and this body STOPS one
      // clause early ("be ye followers of me." without "as I am of Christ").
      epistle: { heading: 'THE 1st EPISTLE OF ST. PAUL TO THE CORINTHIANS',
        src: { file: BS, locus: 'p13-p14 Epistle' },
        citation_verbatim: '(4: 9-16)',
        citation: { book: '1 Corinthians', chapter: 4, verses: '9-16' },
        citation_basis: 'printed',
        provenance_note: 'The body ends at "be ye followers of me." — omitting the final clause of v.16 that Apostle\'s printing of the same lesson carries. R-4 stores no body; recorded here so the difference is not lost.' },
      alleluia: b1("The heavens shall confess thy wonders, O Lord, thy truth in the Church of the saints.", "p14 Alleluia", { sourceLabel: "Alleluia, in Tone I", tone: 1, label_inline: true }),
      alleluia_verse: b1("God, Who is glorified in the council of the saints.", "p14 Alleluia verse", { sourceLabel: "Verse", label: "refrain" }),
      gospel: { heading: 'THE GOSPEL ACCORDING TO ST. LUKE',
        src: { file: BS, locus: 'p14 Liturgy Gospel' },
        citation_verbatim: '(10:1-16)',
        citation: { book: 'Luke', chapter: 10, verses: '1-16' },
        citation_basis: 'printed' },
      // "Communion HYMN" — the label the census scan for "Communion Verse"
      // could not see. Unpointed here, where Apostle points the same verse.
      communion_verse: b1("Their sound hath gone forth into all the earth and their words unto the ends of the world.", "p14 Communion Hymn", { sourceLabel: "Communion Hymn", label_inline: true }),
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Angels.pdf — 16pp, the second-longest file, and the one that breaks the
  // most template assumptions at once. Extraction proven by NINE byte-matches
  // (anabathmoi, psalm50, the Tone VI dogmatic, four irmoi chained to
  // Apostle/Heirarchs, the 444-family stavrotheotokion). (name) ×3 — an
  // angels-service that still takes a name, because its "For One" alternatives
  // name the Archangel.
  //
  // A SIXTH CENSUS ABSENCE THAT WAS A SPELLING: the file prints "Typika and
  // THE Beatitudes." — the census scanned for the article-less form and
  // reported the only "missing" Beatitudes in the book. They are here, in a
  // NEW SHAPE besides: six printed items (Ode III ×3 + Ode VI troparia 1-2 +
  // its Theotokion; Ode VI troparion 3 is NOT taken) with (Twice) on TWO of
  // them.
  //
  // FIRST HOMOGLYPH IN THE GENERAL MENAION: p5 prints "О Theotokos" with
  // CYRILLIC О (U+041E). Normalized to Latin O in the stored text and logged
  // per §2.13 — the artifact class the checks were built for, firing for the
  // first time, eleven files in.
  //
  // WHAT ELSE THIS FILE ADDS:
  //  • THE DOXASTICON IS THE TROPARION IN A SECOND TRANSLATION — "Supreme
  //    Leaders of the Heavenly Hosts, we implore you …" against the
  //    troparion's "O supreme commanders of the heavenly hosts, we entreat
  //    you …". Apostle's two-translation Glory now has a sibling ON THE
  //    PROPER TROPARION ITSELF.
  //  • TWO MEGALYNARIA ("Another:") · TWO CANON REFRAINS (for many / "for
  //    one" naming (name)) · TWO post-Psalm-50 sessionals ("For One Angel" /
  //    "Or for many") — the one/many axis running through the whole service.
  //  • TRINITARIONS: Odes VII and VIII label items `Trinitarion:` — a label
  //    no file had printed; LABELS extended on attestation. Ode VII carries
  //    NO Theotokion at all; Ode IV prints only TWO troparia, the first
  //    taking (Twice) — the first repeat device inside a canon.
  //  • Vespers prints NO LIC closer, NO stavrotheotokia, NO idiomelon
  //    conditional and NO aposticha alternatives — the Glory/Both-now at the
  //    aposticha is ONE combined element. The lean angelic Vespers is a
  //    source fact, captured as printed.
  Angels: {
    title: an1("THE VIGIL SERVICE COMMON TO THE HOLY ANGELS AND OTHER BODILESS POWERS.", "p1 title"),
    troparion: an2("O supreme commanders of the heavenly hosts, * we entreat you unworthy as we are, * that by your prayers, you will encompass us * with the protection of the wings of your immaterial glory * preserving us who fall down before you and earnestly cry aloud: * deliver us from all misfortunes, ** for ye are the commanders of the hosts on high.", "p4 Troparion", { sourceLabel: "The Troparion, in Tone IV", tone: 4, verified_sites: [{"locus": "p4 Vespers dismissal", "tone": 4}, {"locus": "p5 God is the Lord", "tone": 4, "repeat": 2}, {"locus": "p13 after Our Father", "tone": 4}, {"locus": "p14 AT LITURGY", "tone": 4}] }),
    kontakion: an2("Supreme Leaders of God’s armies and ministers of the divine glory, * princes of the bodiless Angels and guides of men, * ask ye for that which is beneficial for us, and for great mercy, * as Supreme Leaders of the Bodiless Hosts.", "p10 Kontakion after Ode VI", { sourceLabel: "The Kontakion, in Tone II", tone: 2, verified_sites: [{"locus": "p10 after Ode VI", "tone": 2}, {"locus": "p14 AT LITURGY", "tone": 2}] }),
    ikos: an1("In Thy writings, O Lover of mankind, Thou hast said there is great joy among the Angels in heaven over the repentance of a sinner, O Immortal One. Wherefore we that are snared in sins always boldly implore Thee, the only Sinless One and Searcher of hearts, as One abounding in mercy, to show compassion and send down upon us, the unworthy Ones, Thy compunction, granting unto us pardon, and to hearken unto the intercession of the Commanders of the bodiless ones who without ceasing, O Master, make intercession for us all before Thee.", "p10 Ikos", { sourceLabel: "The Ikos", label_inline: true }),

    vespers: {
      order: ['lic_rubric', 'lic', 'lic_glory', 'dogmatikon_rubric', 'dogmatikon',
              'dogmatikon_alternate', 'entrance_rubric', 'readings',
              'aposticha_rubric', 'aposticha', 'aposticha_closer',
              'troparion_rubric', 'troparion', 'closer', 'closing_rubric'],
      lic_rubric: an1("On “Lord, I have cried ...,” the Stichera, in Tone IV:", "p1 LIC rubric"),
      lic: [
        an2("O ye Angels, supreme leaders of the bodiless powers, * most illustrious servants of the thrice-illuminating Divinity, * whom with the powers above, * ye joyfully praise exclaiming: * Holy art Thou, O Father, * Holy art Thou, O Beginningless Word, * Holy art Thou also, O Holy Spirit, * one glory, one kingdom and nature, ** one Divinity and power.", "p1 LIC 1", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
        an2("O Michael and Gabriel, fiery is your appearance, * as are your virtues wondrous, * ye are the first among the Angels, * for in your immaterial nature ye traverse the ends of the universe, * executing the commands of the Creator of all, * acknowledged as powerful in strength, * rendering temples dedicated to you, * and venerated on account of your holy calling ** sources of healing for all.", "p1 LIC 2", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
        // "Thou makest, Thine angels" — comma between verb and object (sic).
        an2("As hath been written O Lord: * “Thou makest, Thine angels spirits and Thy ministers a flame of fire”, * so hast Thou shown to be pre-eminent * among the angelic orders * Thine Archangel Michael * together with Thy supreme commander Gabriel, * who at Thy behest, obey Thee O Word, * chanting the Trisagion hymn, ** and with fear, proclaim Thy Glory.", "p1 LIC 3", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
      ],
      // A true Glory — no Both-now, no closer, no stavrotheotokion follows:
      // the Both-now slot belongs to the dogmatic below. The lean LIC block
      // is what the page prints.
      lic_glory: an2("Rejoice with us, all ye angelic orders, * for today your Leaders and our intercessors, * the great commanders, * gloriously appear in their honorable temple blessing us. * Wherefore hymning them as is meet we cry aloud: * Shelter us within the shadow of your wings, * O ye Supreme Leaders of the bodiless hosts.", "p1 LIC Glory", { sourceLabel: "Glory ..., in Tone VI", tone: 6, label: "glory" }),
      // THE INVERTED PARENTHETICAL, exactly as the analysis measured: "sing
      // in the Tone of the Dogmatic for that service" — every other file
      // orders it "sing the Dogmatic of the Tone". With the travelling
      // "service ):" (sic).
      dogmatikon_rubric: an1("If the Celebration be with a Polyeleos, and not a Resurrection Service, sing the following Dogmatic in Tone VI (If the service is a Resurrection service sing in the Tone of the Dogmatic for that service ):", "p1 dogmatikon rubric"),
      // SIXTH print site of the Tone VI dogmatic, byte-identical to the
      // Monastic/Monastics/Martyr/Heirarchs form ("most blessed") — five
      // identical sites against Apostle's lone "all-blessed".
      dogmatikon: an2("Who doth not call thee blessed, O most holy Virgin? * Who will not hymn thy most pure birthgiving? * For the only-begotten Son Who hath shone forth timelessly from the Father, * came forth, ineffably incarnate, from thee, O pure one; * By nature he is God, by nature for our sakes, he hath become a man * not divided into two Hypostases, * but known in two natures without commingling. * Him do thou beseech, O pure and most blessed one, ** that our souls find mercy!", "p1 Both now dogmatic", { sourceLabel: "Both now ..., in Tone VI", tone: 6, type: "dogmatic_theotokion", label: "both_now" }),
      // "Otherwise, THE Theotokion" — with the article, first file. And the
      // text is the LIC Glory's own opening re-set for the Theotokos
      // ("Rejoice with us, all ye choirs of virgins…") — the one/many axis in
      // miniature.
      dogmatikon_alternate: an2("Rejoice with us, all ye choirs of virgins, * for our intercessor and mediatrix, our shelter and great refuge, * hath today in her honorable and divine temple * comforted the afflicted; * wherefore, dutifully hymning her, let us cry: * “Shelter us within thy divine intercessions, ** O most pure Theotokos, Sovereign Lady.”", "p1 Otherwise Theotokion", { sourceLabel: "Otherwise, the Theotokion", type: "theotokion", label: "theotokion", label_inline: true }),
      entrance_rubric: an1("The Entrance. The Prokeimenon of the day. The Three Lessons, if appointed.", "p2 entrance rubric"),
      // Joshua, Judges, Isaiah — the lesson set no other file draws, with a
      // FULL STOP after the first reference and PERIODS as verse-group
      // separators in the second ("6, 2. 7. 11-24" — the Apostle "10, 1. 5-8"
      // class, twice over; sic on the citation).
      readings: [
        { heading: 'THE READING IS FROM JOSHUA THE SON OF NUN',
          src: { file: AN, locus: 'p2 Lesson 1' },
          citation_verbatim: '(5, 13-15)',
          citation: { book: 'Joshua', chapter: 5, verses: '13-15' },
          citation_basis: 'printed',
          provenance_note: 'The heading line closes with a full stop OUTSIDE the parenthesis — "(5, 13-15)." — where no other file punctuates its reference line.' },
        { heading: 'THE READING IS FROM THE BOOK OF JUDGES',
          src: { file: AN, locus: 'p2 Lesson 2' },
          citation_verbatim: '(6, 2. 7. 11-24)',
          citation: { book: 'Judges', chapter: 6, verses: '6:2, 7, 11-24' },
          citation_basis: 'printed' },
        { heading: 'THE READING IS FROM THE PROPHET ISAIAH',
          src: { file: AN, locus: 'p3 Lesson 3' },
          citation_verbatim: '(14, 7-20)',
          citation: { book: 'Isaiah', chapter: 14, verses: '7-20' },
          citation_basis: 'printed' },
      ],
      // COLON where every sibling prints a comma: "these Stichera: in Tone I"
      // (sic).
      aposticha_rubric: an1("On the Aposticha, these Stichera: in Tone I:", "p3 Aposticha rubric"),
      aposticha: [
        an2("O ye commanders of the spiritual hosts, * ever standing before the throne of the most high, * entreat the Lord to grant peace to the world ** and to our souls great mercy.", "p3 Aposticha 1", { tone: 1, label: "plain" }),
        // The verse ends with a COLON (sic) — and prints "He maketh" where
        // the Matins prokeimenon prints "Who maketh" and the Communion verse
        // "flames of fire": one psalm verse, three settings in one file.
        an2("He maketh His Angels spirits * and His ministers a flame of fire:", "p3 Aposticha verse 1", { sourceLabel: "Verse", label: "refrain" }),
        an2("The Leader of the powers on high, * Michael, first among the celestial hierarchies, * ever accompanying us and preserving us from every attack of the devil, * hath called us today unto this feast. * Wherefore let us come, O ye lovers of feasts and ye lovers of Christ, * taking with us the flowers of the virtues, * and with pure thoughts and an ever-clear conscience, * let us reverence the assembly of Archangels, * for standing before God and ever chanting the Trisagion hymn, ** they pray that our souls may be saved.", "p3 Aposticha 2", { label: "plain" }),
        an2("Praise Him, all ye His Angels, * praise Him, all ye His hosts.", "p3 Aposticha verse 2", { sourceLabel: "Verse", label: "refrain" }),
        an2("O ye commanders of the spiritual hosts, * standing before the immaterial Godhead, * with the radiance of the thrice-illuminating glory, * ye illumine the universe, * and with unceasing voices chant the Trisagion hymn; ** wherefore pray ye that our souls may be saved.", "p3 Aposticha 3", { label: "plain" }),
      ],
      // ONE ELEMENT under a combined "Glory ..., Both now ..." label — no
      // separate Glory, no theotokion, no alternatives, no stavrotheotokion.
      // The same hymn returns at p7 in a SINGULAR rendering ("As the chief
      // defender and leader … O Supreme Commander (name)") as the For-One
      // sessional — registered as a variant pair.
      aposticha_closer: an2("As the defenders and commanders of the Angels, * O Supreme Leaders, * deliver from every necessity and tribulation, * and from wickedness and transgressions * those who hymn and beseech you, O glorious ones, * since, as bodiless hosts, ye ever behold the Immaterial One, * illumined with the unapproachable light of the glory of the Most High; * for out of love for mankind and for our sake He hath assumed flesh from the Virgin, * in His desire to save the race of mankind.", "p4 Aposticha Glory-Both-now", { sourceLabel: "Glory ..., Both now ..., in Tone VIII", tone: 8, type: "plain", label: ["glory", "both_now"] }),
      troparion_rubric: an1("The Troparion, in Tone IV:", "p4 troparion label"),
      closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8)." },
      closing_rubric: an1("The Dismissal:", "p4 Dismissal"),
    },

    matins: {
      order: ['god_is_lord_rubric', 'troparion', 'troparion_closer',
              'sessional_1_rubric', 'sessional_1', 'sessional_1_closer',
              'sessional_2_rubric', 'sessional_2', 'sessional_2_closer',
              'megalynarion_rubric', 'megalynarion', 'megalynarion_alternate',
              'megalynarion_verse', 'sessional_polyeleos_rubric', 'sessional_polyeleos',
              'sessional_polyeleos_closer', 'anabathmoi_rubric', 'anabathmoi_intro',
              'anabathmoi', 'anabathmoi_closer', 'prokeimenon_rubric', 'prokeimenon',
              'prokeimenon_verse', 'gospel_rubric', 'gospel', 'psalm50_rubric',
              'psalm50_sticheron', 'psalm50_closer', 'psalm50_verse',
              'sessional_post50_rubric', 'sessional_post50',
              'sessional_post50_alternate_rubric', 'sessional_post50_alternate',
              'canon_rubric', 'canons',
              'sessional_ode3_rubric', 'sessional_ode3', 'sessional_ode3_closer',
              'sessional_ode3_stavrotheotokion', 'kontakion_rubric', 'kontakion', 'ikos',
              'exapostilarion_rubric', 'exapostilarion', 'exapostilarion_closer',
              'praises_rubric', 'praises', 'praises_glory', 'praises_closer',
              'praises_stavrotheotokion', 'great_doxology_rubric',
              'doxology_glory', 'doxology_closer', 'doxology_stavrotheotokion',
              'troparion_rubric', 'troparion', 'closer', 'closing_rubric'],
      god_is_lord_rubric: an1("On “God is the Lord ...,” the Troparion, in Tone IV:", "p5 God is the Lord rubric"),
      troparion_closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8)." },
      sessional_1_rubric: an1("After the 1st chanting of the Psalter, the Sessional Hymn, in Tone VI:", "p5 sessional 1 rubric"),
      sessional_1: an2("The angelic hosts standing before Thy throne, O Christ, * ever pray for the race of mankind; * do Thou therefore grant peace unto all through their intercessions, * and by their prayers subdue the insolence of our enemies.", "p5 Sessional 1", { tone: 6, label: "plain", repeat: 2 }),
      // FIRST HOMOGLYPH IN THE BOOK: the page prints "О Theotokos" with
      // CYRILLIC О (U+041E), visually identical to Latin O. Normalized here
      // per §2.13; the log records what the extractor found. Prose on the
      // page — Tier 1.
      sessional_1_closer: an1("O Theotokos, who at the sound of the archangel’s voice conceived in thy womb the Word, Who with the Father and the Spirit is equally beginningless, thou hast been revealed to be more exalted than the cherubim, seraphim and thrones.", "p5 Sessional 1 closer", { sourceLabel: "Glory ..., Both now ..., Theotokion in Tone IV", tone: 4, type: "theotokion", label: ["glory", "both_now", "theotokion"], homoglyph_log: ["U+041E CYRILLIC CAPITAL O normalized to Latin O at opening “O Theotokos” (p5)"] }),
      sessional_2_rubric: an1("After the 2nd chanting of the Psalter, the Sessional Hymn, in Tone VI:", "p5 sessional 2 rubric"),
      sessional_2: an2("Ever rejoicing around the throne of the King of all, * O ye orders of Angels, * preserve us who in faith invoke your intercessions, * and deliver us from sufferings.", "p5 Sessional 2", { tone: 6, label: "plain", repeat: 2 }),
      // TONELESS closer label — the Apostles exapostilarion-closer class.
      sessional_2_closer: an2("O Ever-Virgin Rejoice! * for thou art the door which opened unto God, * Who having ineffably entered therein, * issued forth from thence.", "p5 Sessional 2 closer", { sourceLabel: "Glory ..., Both now ..., Theotokion:", type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      megalynarion_rubric: an1("After the Polyeleos, the Megalynarion:", "p5 megalynarion rubric"),
      megalynarion: an1("We magnify you, O Archangels and Angels and all the heavenly hosts, Cherubim and Seraphim, who glorify the Lord.", "p5 Megalynarion", { label_inline: true }),
      // "Another:" — a SECOND Megalynarion, the nine-rank enumeration. No
      // file has printed an alternative at this position before.
      megalynarion_alternate: an1("We magnify you, O Archangels, Angels, Principalities, Authorities, Thrones, Dominions, Powers, Cherubim and fearful Seraphim who glorify the Lord.", "p5 Megalynarion alternate", { sourceLabel: "Another", label_inline: true }),
      // A NEW verse — "I will sing unto the Lord throughout my life" — where
      // eight files print "Hear this, all ye nations" or "The heavens
      // declare".
      megalynarion_verse: an1("I will sing unto the Lord throughout my life, I will chant to my God for as long as I have my being.", "p5 Megalynarion verse", { sourceLabel: "Verse", label: "refrain" }),
      sessional_polyeleos_rubric: an1("After the Polyeleos, the Sessional Hymn, in Tone VI:", "p5 post-Polyeleos sessional rubric"),
      sessional_polyeleos: an2("O ye, splendid Angels of God * standing before the divine throne of grace, * and having received true humility and illumination from the divine light, * with all the noetic lovers of mankind, * you look down upon us who suffer from the malicious persecution of the prince of this world * and thus sleep in darkness. * Come then, O ye Archangels, to our assistance * and deliver us from the snares of our enemy, the originator of evil, * for unto the shelter of your wings, O all-famed ones, ** do we all have recourse.", "p5-p6 post-Polyeleos Sessional", { tone: 6, label: "plain", repeat: 2 }),
      sessional_polyeleos_closer: an2("O all-good Birthgiver of God * thou art the hope, the shelter and the refuge of those who put their trust in thee, * intercessor for the world, * do thou, together with the bodiless ones, * ever entreat the man-befriending God Whom thou hast brought forth, * O most blessed one, ** that He may deliver our souls from all that threatens us.", "p6 post-Polyeleos Sessional closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone VI", tone: 6, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      anabathmoi_rubric: an1("If of Polyeleos rank, and not a Resurrection Service, chant the following:", "p6 anabathmoi rubric"),
      anabathmoi_intro: an1("The Song of Ascents: The first antiphon, in Tone IV:", "p6 anabathmoi heading"),
      anabathmoi: [
        an2("From my youth * do many passions war against me; * but do Thou Thyself defend ** and save me, O my Savior.", "p6 Anabathmoi 1", { label: "plain" }),
        an2("Ye haters of Zion * shall be shamed by the Lord; * for like grass, by the fire ** shall ye be withered.", "p6 Anabathmoi 2", { label: "plain" }),
      ],
      anabathmoi_closer: an2("In the Holy Spirit, * every soul is quickened, * and, through cleansing, is exalted ** and made radiant by the Triple Unity in a hidden sacred manner.", "p6 Anabathmoi closer", { sourceLabel: "Glory ..., Both now ...,", type: "plain", label: ["glory", "both_now"] }),
      prokeimenon_rubric: an1("Prokeimenon, in Tone IV:", "p6 prokeimenon rubric"),
      prokeimenon: an2("Who maketh His Angels spirits * and His ministers a flame of fire.", "p6 Prokeimenon", { sourceLabel: "The Prokeimenon", tone: 4, label_inline: true }),
      prokeimenon_verse: an1("Bless the Lord, O my soul; O Lord my God, Thou hast been magnified exceedingly.", "p6 Prokeimenon verse", { sourceLabel: "Verse", label: "refrain" }),
      gospel_rubric: an1("Let every breath.", "p6 Let every breath"),
      // "THE HOLY GOSPEL" heading with the book abbreviation INSIDE the
      // reference — "(Lk. 10, 16-21)" — the Apostle "(1 COR. …)" class.
      gospel: { heading: 'THE HOLY GOSPEL ACCORDING TO ST. LUKE',
        src: { file: AN, locus: 'p6 Matins Gospel' },
        citation_verbatim: '(Lk. 10, 16-21)',
        citation: { book: 'Luke', chapter: 10, verses: '16-21' },
        citation_basis: 'printed' },
      psalm50_rubric: an1("After the 50th Psalm:", "p7 After the 50th Psalm"),
      psalm50_sticheron: an2("Through the prayers of the Bodiless Hosts * O Merciful One, ** blot out the multitude of our transgressions.", "p7 Psalm 50 Glory", { sourceLabel: "Glory ..., in Tone VI", tone: 6, label: "glory" }),
      psalm50_closer: an2("Through the prayers of the Theotokos, * O Merciful One, ** blot out the multitude of our transgressions.", "p7 Psalm 50 Both now", { sourceLabel: "Both now ..., in Tone VI", tone: 6, type: "theotokion", label: "both_now" }),
      psalm50_verse: an2("Have mercy on me, O God, * according to Thy great mercy; * and according to the multitude of Thy compassions, ** blot out my transgressions.", "p7 Psalm 50 verse", { label: "refrain" }),
      // "For One Angel" / "Or for many" — TWO post-Psalm-50 sessionals, the
      // one/many axis at a position no file has doubled before. The For-One
      // hymn is the aposticha Glory-Both-now in a SINGULAR rendering,
      // naming (name) — registered as a variant pair.
      sessional_post50_rubric: an1("Then the Sessional Hymn, For One Angel, in Tone VI:", "p7 post-Psalm-50 rubric (for one)"),
      sessional_post50: an2("As the chief defender and leader of Angels, * do thou, O Supreme Commander (name), * deliver from every want and every tribulation, * from wickedness and from mortal sins * those that hymn thee and implore thee, O glorious one, * since, as One bodiless, thou dost behold the Immaterial One * and art therefore illumined with the unapproachable light of the glory of the Most High; * for out of love for mankind and for our sake He hath taken flesh from the Virgin, ** in His desire to save the race of mankind.", "p7 post-Psalm-50 Sessional (for one)", { tone: 6, label: "plain" }),
      sessional_post50_alternate_rubric: an1("Or for many, in Tone VI:", "p7 post-Psalm-50 rubric (for many)"),
      sessional_post50_alternate: an2("Thine Angels, O Christ, * stand in fear before the throne of thy majesty * and with the outpouring of Thy light * are ever illumined, * The heavenly cantors and ministers of Thy commands * who are ever sent by Thee, ** enlightening our souls.", "p7 post-Psalm-50 Sessional (for many)", { tone: 6, label: "plain" }),
      canon_rubric: an1("The Canon, in Tone VIII:", "p7 Canon rubric"),
      canons: [{
        title: "The Canon, in Tone VIII:", tone: 8,
        odes: {
          1: {
            irmos: an2("Let us, O ye people, send up a hymn * unto our wondrous God * Who hath freed Israel from bondage, * chanting a hymn of victory * and crying aloud: * We sing unto Thee, O only Master.", "p7 Ode 1 irmos", { sourceLabel: "Irmos", label_inline: true }),
            // TWO REFRAINS — for many, and "for one" naming the Archangel.
            refrain: an1("Holy Angels and Archangels pray to God for us", "p7 Ode 1 refrain", { sourceLabel: "Refrain", label_inline: true }),
            refrain_alternate: an1("Holy Archangel (name) pray to God for us", "p7 Ode 1 refrain (for one)", { sourceLabel: "Refrain (for one)", label_inline: true }),
            items: [
              an1("Let us, O ye faithful, hymn the uncreated Trinity that ruleth over all the immaterial orders of the heavenly choirs, who worship Him exclaiming: Holy, Holy, Holy art Thou, O God Almighty.", "p7 Ode 1 troparion 1", { label: "plain" }),
              an1("At the beginning of creation, Thou, the Fashioner of Angels, established the bodiless hosts which surround Thy most precious throne, and exclaim unto Thee: Holy, Holy, Holy art Thou, O God Almighty.", "p7 Ode 1 troparion 2", { label: "plain" }),
              an1("Rejoice, O Gabriel, witness of the mystery of God’s incarnation, and thou O Michael, foremost among the orders of the immaterial ones, who cry unceasingly: Holy, Holy, Holy art Thou, O God Almighty.", "p8 Ode 1 troparion 3", { label: "plain" }),
              an1("I tremble before the mystery of Thy condescension, O Christ, for being God by nature, Thou wast pleased to be born of a Virgin as man, that Thou mayest save the world from enslavement to the enemy.", "p8 Ode 1 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          3: {
            irmos: an2("Thy fear, O Lord, do Thou plant * in the hearts of Thy servants * and be Thou the confirmation of us * who in truth call upon Thee.", "p8 Ode 3 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              an1("In strength hast Thou, O Immortal One, established the mighty ones who perform Thy most holy will, and who above, ever stand before Thee.", "p8 Ode 3 troparion 1", { label: "plain" }),
              an1("Do Thou, O Christ, ever harken unto the supplications of the Supreme Leaders of the Angels, the initiates of Thine incarnation and august awakening, who ever intercede for us.", "p8 Ode 3 troparion 2", { label: "plain" }),
              an1("As One truly Compassionate Thou hast established the Angels as guardians of mankind and showing them to be, O Christ, ministers of salvation unto Thy holy ones.", "p8 Ode 3 troparion 3", { label: "plain" }),
              an1("Ineffably hast thou, O Bride of God, conceived the Lord and Savior Who doth deliver from all dangers, those who invoke thee in truth.", "p8 Ode 3 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          4: {
            irmos: an2("Like unto One that mounts a steed, * Thou O Lord, hast taken in Thy hands * the reins of Thine angels * and thus commanding them, hast become * the salvation of those who sing in faith: * Glory to Thy power, O Lord.", "p9 Ode 4 irmos", { sourceLabel: "Irmos", label_inline: true }),
            // TWO troparia only — and the first takes (Twice), the first
            // repeat device inside a canon anywhere in the book.
            items: [
              an1("Thy virtue, O Lover of mankind, overshadows the Angels and fills the ends of the world with Thy glorious and divine praise, and with them we cry unto Thee, O Beginningless One: Glory to Thy power O Lord.", "p9 Ode 4 troparion 1", { label: "plain", repeat: 2 }),
              an1("O compassionate One, Thou didst come forth for the salvation of Thy people, O Christ, and by Thy power didst call them friends, wherefore Thine appearance bringeth great joy unto those who cry unto Thee in faith proclaiming: Glory to Thy power, O Lord.", "p9 Ode 4 troparion 2", { label: "plain" }),
              an1("As a Virgin and Mother thou, O most pure one, hast appeared supra-natural, since thou hast brought forth Christ as both God and man, to Whom the angelic orders cry out with fear: Glory to Thy power, O Lord.", "p9 Ode 4 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          5: {
            irmos: an2("Thou hast enlightened * with the knowledge of God * the ends of the universe * that lay in the night of ignorance, * do Thou also, O Lord, illumine me * with the dawning of Thy love for mankind.", "p9 Ode 5 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              an1("Carried by an eternal immutable celestial desire to serve Thee in the highest, O Christ, Thou summit of all desire, the angelic hosts unceasingly glorify Thee.", "p9 Ode 5 troparion 1", { label: "plain" }),
              an1("O Christ, Thou hast made those who hymn Thy majesty spiritual by nature and incorruptible by Thy grace, fashioning Thine Angels after the divine image, O Incomprehensible One.", "p9 Ode 5 troparion 2", { label: "plain" }),
              an1("O Christ, Thou hast preserved Thy servants from inclinations to evil by keeping them close to Thee. For being the Source of true goodness, Thou dost embellish with goodness those who worthily serve Thee.", "p9 Ode 5 troparion 3", { label: "plain" }),
              an1("Do Thou, O all-immaculate one, who hast brought forth the Giver of life, revive my soul deadened with vile passions and set me upon the path to eternal and blessed life.", "p9 Ode 5 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          6: {
            irmos: an2("Thou O Lord, didst place Jonah alone within the sea monster. * Do Thou save me, * who am ensnared in the nets of the enemy, * as thou didst save him from corruption.", "p9 Ode 6 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              an1("In a Divine manner hast Thou O Lord, by Thy word, brought out of nothingness into being, the heavenly immortal hosts, rendering them radiant.", "p9 Ode 6 troparion 1", { label: "plain" }),
              an1("Ye have become, O bodiless ones, honorable initiates of the praise of God, and dwellers of the heavenly and truly Divine tabernacle, worthily serving the Creator.", "p9 Ode 6 troparion 2", { label: "plain" }),
              an1("Thee, O truly beginningless Son of God, do the spiritual orders of the bodiless Ones unceasingly praise and glorify as the Creator and Fashioner of all things.", "p10 Ode 6 troparion 3", { label: "plain" }),
              // "siteth" — single t (sic, and reprinted at the Beatitudes).
              an1("Thou O most pure one, wast deemed worthy to hold in thine arms Him Who from eternity siteth on the right hand of the Father. Do thou therefore incline Him to grant unto thy servants, O pure one, mercy.", "p10 Ode 6 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          7: {
            irmos: an2("The Hebrew children in the furnace * boldly trampled upon the flames, * changing the fire into dew, they cried aloud: * “Blessed art Thou, O Lord our God, throughout the ages.”", "p10 Ode 7 irmos", { sourceLabel: "Irmos", label_inline: true }),
            // TWO TRINITARIONS and NO Theotokion — the label's first
            // attestation in the book (LABELS extended).
            items: [
              an1("O Compassionate One, Thou hast revealed the immaterial nature of Thine Angels to be luminous, and ever imbued with the ineffable divine light, as they cry unto Thee: Blessed art Thou, O Lord God, unto the ages.", "p10 Ode 7 troparion 1", { label: "plain" }),
              an1("Ever before Thee stand a myriad host of Angels serving Thee, unable to endure the noetic vision of Thy countenance they unceasingly cry unto Thee: Blessed art Thou, O Lord our God, throughout the ages.", "p10 Ode 7 troparion 2", { label: "plain" }),
              an1("By Thy Hypostatic Word Thou hast created the many ranks of Angels and having sanctified them with the divine Spirit, Thou hast taught them to cry, O God we bless the Trinity, throughout the ages.", "p10 Ode 7 Trinitarion 1", { sourceLabel: "Trinitarion", label: "trinitarion", label_inline: true }),
              an1("Contemplating the three Hypostases, we glorify the unbounded nature of the Father, Son, and Holy Spirit, crying aloud: Blessed art Thou, O Lord God, throughout the ages.", "p10 Ode 7 Trinitarion 2", { sourceLabel: "Trinitarion", label: "trinitarion", label_inline: true }),
            ],
          },
          8: {
            irmos: an2("Glorified in the holy mountain, * the Lord revealed the mystery of the Ever-Virgin unto Moses * in the flames of the burning bush: * praise ye and supremely exalt Him throughout all ages.", "p10 Ode 8 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              an1("Let us emulate the life of the Angels and directing our thoughts on high, let us, together with the Angels, chant with understanding; praise ye the Lord and supremely exalt Him throughout all ages.", "p11 Ode 8 troparion 1", { label: "plain" }),
              an1("Ever surrounding the throne of Glory, in ceaseless motion before God as participants of the joy of Heaven, the Angels proclaim; praise ye the Lord and supremely exalt Him throughout all ages.", "p11 Ode 8 troparion 2", { label: "plain" }),
              // Ends "throughout all ages" with NO full stop (sic).
              an1("Let us bow down and magnify the Trinity, Who maketh a flame of immaterial fire those who without ceasing serve on high, and the Angels whom He hath made spirits chanting; praise ye the Lord and supremely exalt Him throughout all ages", "p11 Ode 8 Trinitarion", { sourceLabel: "Trinitarion", label: "trinitarion", label_inline: true }),
              an1("Thou wast made worthy O Theotokos to carry in thine arms Him before Whom tremble a myriad of Angels and Archangels in the heavens; do thou therefore entreat Him that those who magnify Him throughout all the ages may be saved.", "p11 Ode 8 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          9: {
            irmos: an2("Thou hast passed the limits of nature, * having conceived the Maker and the Lord, * and didst become a door of salvation * unto the world; * wherefore we unceasingly magnify thee, O Theotokos.", "p11 Ode 9 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              an1("O Thou, Who hast ineffably united the things of earth with the those in Heaven, and by the Angels and mankind perfected one Church, O Christ, Thee do we unceasingly magnify.", "p11 Ode 9 troparion 1", { label: "plain" }),
              an1("O ye Angels and Archangels, Thrones, Authorities and Dominions, Principalities and Powers, and ye Cherubim and Seraphim, together with the Theotokos, we beseech you to ceaselessly intercede on behalf of the world.", "p11 Ode 9 troparion 2", { label: "plain" }),
              an1("Showing yourselves as the protectors of all, O Michael and Gabriel, we beseech you to visit those who lovingly honor your all-festive memory, and to deliver from every misfortune those who in faith sing your praises.", "p11 Ode 9 troparion 3", { label: "plain" }),
              an1("Rejoice, O holy Bride of God! Rejoice thou who brought forth unto the faithful the Light of the world; Rejoice! rampart and protection of all! We beseech thee as our benefactor to unceasingly intercede for us unto God.", "p11 Ode 9 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
        },
      }],
      sessional_ode3_rubric: an1("The Sessional Hymn, in Tone VIII:", "p8 post-Ode-III sessional rubric"),
      sessional_ode3: an2("O ye ministers of the Most High, * Leaders of the celestial beings * standing first before the highest and dreadful throne of the divine glory, * Michael and Gabriel, * Supreme Leaders of the Angels, * together with all the bodiless hosts. * We beseech you who unceasingly pray on behalf of the world, * that by your supplications, * we may obtain the remission of our sins, * and empowered with mercy and grace, * may greet you in the day of judgment.", "p8 post-Ode-III Sessional", { spec_mel: "That which was mystically commanded ...", tone: 8, label: "plain", repeat: 2 }),
      sessional_ode3_closer: an1("I have fallen into the abyss of wicked despondency, and vexation on account of the multitude of my wicked and impure deeds, and am now stuck fast in despair. O Sovereign Lady Theotokos, by thy compassion save me, in that thou art the help and salvific cleansing of sinners.", "p8 post-Ode-III Sessional closer", { sourceLabel: "Glory ..., Both now ..., Theotokion in Tone VIII", tone: 8, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      // Ends "Thy creation!." — exclamation AND full stop (sic). Labeled
      // "The Stavrotheotokion", with the article.
      sessional_ode3_stavrotheotokion: an2("Beholding, O pure one, * Him who took flesh from thy pure blood * and who beyond all understanding was born from thee, * hanging upon the tree in the midst of malefactors, * thy heart was pained, and with maternal lamentations thou didst cry aloud: * “Woe is me, O my sweetest child!” * Yet I hymn Thy compassion, * for how ineffable is Thy divine condescension ** by which Thou hast granted restoration and life unto Thy creation!.", "p8 post-Ode-III Stavrotheotokion", { sourceLabel: "The Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      // NO from-the-Typicon conditional — the kontakion arrives under its
      // bare label, as Apostles' Liturgy propers do. Declared absent.
      kontakion_rubric: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Nine files print “The Kontakion from the Typicon; but if there be none …” here; this file prints the bare label “The Kontakion, in Tone II:” — stored as the kontakion's sourceLabel." },
      exapostilarion_rubric: an1("Exapostilarion, in Tone III:", "p11 exapostilarion rubric"),
      // "thou art the FIST among the immaterial ranks" — fist for first
      // (sic), the file's best defect.
      exapostilarion: an2("O Michael, Supreme Commander of the fiery ministers, * thou hast obtained from the Father a place foremost among the celestial hosts; * wherefore also possessing the brightness of His glory, * thou art the fist among the immaterial ranks of angels, surrounding His most pure throne.", "p11 Exapostilarion", { spec_mel: "By the spirit in the sanctuary ...", tone: 3, label: "plain" }),
      exapostilarion_closer: an2("The ranks of the bodiless hosts honor thy birth, * for thou alone hast filled those born on earth with joy; * wherefore we the faithful glorify thee, * the most immaculate one, * magnifying in hymns thee * who hast kindled for those in darkness ** the never-waning light of the morning-star.", "p12 Exapostilarion closer", { sourceLabel: "Glory ..., Both now ..., Theotokion:", type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      // A PRINTED COUNT — "4 Stichera" — reconciling as Heirarch's did:
      // three printed, the first taking (Twice). And the THIRD sticheron
      // changes tone mid-array under its own "In Tone IV:" label.
      praises_rubric: an1("On the Praises, 4 Stichera, in Tone II:", "p12 Praises rubric"),
      praises: [
        an2("O ye spiritual beings, * divine and incorporeal! * surrounding the immaterial throne of glory, * with flaming lips ye chant the Trisagion hymn * unto God the Ruler: * Holy God, the beginningless Father, * Holy Mighty the Son co-beginningless, * Holy Immortal-Spirit of the same essence, ** glorified together with the Father and the Son.", "p12 Praises 1", { tone: 2, label: "plain", repeat: 2 }),
        an2("With immaterial lips and spiritual mouths * the orders of the Angels offer unceasing praise * unto Thine unapproachable Godhead, O Lord; * and the pure minds and ministers of Thy glory praise Thee, O Lord; * with whom Michael the bodiless one and Gabriel the greatly resplendent one, * foremost commanders of the angelic powers on high, * are our instructors, * enjoining us to chant hymns unto Thine unapproachable glory, O Lover of mankind; * before Whom they also unceasingly make entreaties on behalf of our souls.", "p12 Praises 2", { label: "plain" }),
        an2("O Christ God, with lips of fire the Cherubim hymn Thee, * and with immaterial mouths the choir of Archangels unceasingly magnify Thee, * and Michael, the Supreme Leader of the powers on high, * unceasingly offereth hymns of victory unto Thy glory, * He it is who hath enlightened us this day, * that on the occasion of this bright festival * we may worthily chant with our mortal lips the Trisagion hymn, * filling everything with Thy praise ** for Thou grantest unto the world Thy great mercy!", "p12 Praises 3", { sourceLabel: "In Tone IV", tone: 4, label: "plain" }),
      ],
      praises_glory: an2("O Archangel, wherever thy grace overshadoweth, * the power of the devil is driven away, * for the fallen morning star cannot bear to see thy light. * Wherefore we entreat thee to extinguish with thine intercessions * the fire-bearing arrows which he directs against us, * delivering us from his temptations, ** O worthily praised Supreme Commander (name).", "p12 Praises Glory", { sourceLabel: "Glory ..., in Tone V", tone: 5, label: "glory" }),
      praises_closer: an2("We bless thee, O Virgin Theotokos, * and we, the faithful, glorify thee as is meet, * thou unassailable city, * impregnable rampart, ** and steadfast intercession and refuge of our souls.", "p12 Praises Both now", { sourceLabel: "Both now ..., Theotokion in Tone V", tone: 5, type: "theotokion", label: ["both_now", "theotokion"] }),
      praises_stavrotheotokion: an2("Upon seeing her Lamb hastening to the slaughter * the Ewe-lamb eagerly followed Him crying aloud: * “Whence goest Thou, O my sweetest Child? * O most beloved Jesus, * sinless Lord, rich in mercy, * O longsuffering Christ, * why dost Thou so swiftly and so fearlessly proceed? * Speak to me Thy handmaiden, * O my well-beloved Son: * pass not by me, Thy Mother, without a word, * O all-compassionate God, ** who grantest the world great mercy.”", "p13 Praises Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      // The SHORT form — no "and a Doxasticon is appointed" clause: a third
      // wording of the great-Doxology rubric.
      great_doxology_rubric: an1("The great Doxology: If a small Doxology is read, the following is chanted after the Aposticha:", "p13 great Doxology rubric"),
      // THE TROPARION IN A SECOND TRANSLATION — "we implore you … encircle
      // us … deliver us from dangers, ** for you are the commanders of the
      // powers above" against the troparion's "we entreat you … encompass us
      // … from all misfortunes, ** for ye are the commanders of the hosts on
      // high". Apostle's two-translation Glory, now on the PROPER TROPARION
      // (registered as a variant).
      doxology_glory: an2("Supreme Leaders of the Heavenly Hosts, * we implore you that by your prayers you will encircle us, * unworthy as we are, * with the protection of the wings of your immaterial glory * and guard us who fall down before you and fervently cry: * deliver us from dangers, ** for you are the commanders of the powers above.", "p13 Doxology Glory", { sourceLabel: "Glory ..., in Tone IV", tone: 4, label: "glory" }),
      // FULL TEXTS at the Doxology closer — a Both-now Theotokion and a
      // Stavrotheotokion — where every other file prints the textless
      // conditional label. The stavrotheotokion is BYTE-IDENTICAL to
      // Apostles' LIC copy (the "I marvel" rendering of the 444-family) —
      // sixth print site of the family, registered.
      doxology_closer: an2("O Theotokos, Queen of all, * thou praise of the Orthodox: * cast down the proud arrogance of the heretics, * and put to shame the countenances of those * who neither bow down before nor honor thy precious image, ** O most pure one.", "p13 Doxology Both now", { sourceLabel: "Both now ..., Theotokion in Tone IV", tone: 4, type: "theotokion", label: ["both_now", "theotokion"] }),
      doxology_stavrotheotokion: an2("The most pure one, * beholding Christ, the lover of mankind, crucified, * His side pierced by a lance, * cried out, lamenting: * “What is this, O my Son? * How have these thankless people rewarded Thee * for the good things Thou hast done for them? * Dost Thou hasten to leave me childless, O most Beloved? ** I marvel, O Compassionate One, at Thy voluntary crucifixion!”", "p13 Doxology Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      troparion_rubric: an1("After Our Father ..., Troparion, in Tone IV:", "p13 after Our Father"),
      closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8)." },
      closing_rubric: an1("The Dismissal:", "p13 Dismissal"),
    },

    liturgy: {
      order: ['beatitudes_rubric', 'beatitudes', 'propers_rubric', 'troparion',
              'kontakion', 'prokeimenon', 'prokeimenon_verse', 'epistle',
              'alleluia', 'alleluia_verse', 'gospel', 'communion_verse'],
      // "Typika and THE Beatitudes." — the article that hid this file's
      // Beatitudes from the census (sic register).
      beatitudes_rubric: an1("Typika and the Beatitudes.", "p14 Typika and the Beatitudes"),
      // A NEW SHAPE: SIX items — Ode III's three troparia, Ode VI's
      // troparia 1-2 and its Theotokion; Ode VI troparion 3 is NOT taken —
      // with (Twice) on items 1 AND 4. All six byte-identical to the canon:
      // SEVEN files identical now against two variant.
      beatitudes: [
        an1("In strength hast Thou, O Immortal One, established the mighty ones who perform Thy most holy will, and who above, ever stand before Thee.", "p14 Beatitude 1", { label: "plain", repeat: 2 }),
        an1("Do Thou, O Christ, ever harken unto the supplications of the Supreme Leaders of the Angels, the initiates of Thine incarnation and august awakening, who ever intercede for us.", "p14 Beatitude 2", { label: "plain" }),
        an1("As One truly Compassionate Thou hast established the Angels as guardians of mankind and showing them to be, O Christ, ministers of salvation unto Thy holy ones.", "p14 Beatitude 3", { label: "plain" }),
        an1("In a Divine manner hast Thou O Lord, by Thy word, brought out of nothingness into being, the heavenly immortal hosts, rendering them radiant.", "p14 Beatitude 4", { label: "plain", repeat: 2 }),
        an1("Ye have become, O bodiless ones, honorable initiates of the praise of God, and dwellers of the heavenly and truly Divine tabernacle, worthily serving the Creator.", "p14 Beatitude 5", { label: "plain" }),
        an1("Thou O most pure one, wast deemed worthy to hold in thine arms Him Who from eternity siteth on the right hand of the Father. Do thou therefore incline Him to grant unto thy servants, O pure one, mercy.", "p14 Beatitude 6", { label: "theotokion", sourceLabel: "Theotokion", label_inline: true }),
      ],
      // A SEVENTH wording: "… from the Typicon, but if there be none IN THE
      // TYPICON, chant the following:".
      propers_rubric: an1("The Troparion and Kontakion from the Typicon, but if there be none in the Typicon, chant the following:", "p14 propers rubric"),
      prokeimenon: an2("Who maketh His Angels spirits * and His ministers a flame of fire.", "p14 Liturgy Prokeimenon", { sourceLabel: "The Prokeimenon", tone: 4, label_inline: true }),
      prokeimenon_verse: an1("Bless the Lord, O my soul; O Lord my God, Thou hast been magnified exceedingly.", "p14 Liturgy Prokeimenon verse", { sourceLabel: "Verse", label: "refrain" }),
      epistle: { heading: 'THE EPISTLE OF ST. PAUL TO THE HEBREWS',
        src: { file: AN, locus: 'p15 Epistle' },
        citation_verbatim: '(2: 2-10)',
        citation: { book: 'Hebrews', chapter: 2, verses: '2-10' },
        citation_basis: 'printed' },
      alleluia: an1("Praise Him, all ye His angels; praise Him all ye His hosts.", "p15 Alleluia", { sourceLabel: "Alleluia, in Tone V", tone: 5, label_inline: true }),
      alleluia_verse: an1("For He spoke and they came to be; He commanded, and they were created.", "p15 Alleluia verse", { sourceLabel: "Verse", label: "refrain" }),
      // A DISCONTINUOUS pericope printed as such — "(13:24-30, 36-43)" —
      // and the body skips exactly the cited gap.
      gospel: { heading: 'THE GOSPEL ACCORDING TO ST. MATTHEW',
        src: { file: AN, locus: 'p15-p16 Liturgy Gospel' },
        citation_verbatim: '(13:24-30, 36-43)',
        citation: { book: 'Matthew', chapter: 13, verses: '24-30, 36-43' },
        citation_basis: 'printed' },
      // "flameS of fire" — where the Prokeimenon prints "a flame" and the
      // aposticha verse "a flame … :" — one psalm verse, three settings in
      // one file.
      communion_verse: an2("Who maketh His Angels spirits * and His ministers flames of fire.", "p16 Communion Verse", { sourceLabel: "Communion Verse", label_inline: true }),
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // MonasticMartyrs.pdf — 15pp. THE FIRST REWRITTEN-RUBRIC FILE, taken for
  // exactly that reason: its Polyeleos/Dogmatic rubric is not a rewording of
  // the family but a RESTRUCTURING — two primary clauses, no parenthetical,
  // "the Tone of the Week" for "the Tone for that service". Stored verbatim;
  // no rule anywhere keys on rubric wording, which is why this file cost
  // nothing to absorb. Extraction proven by TEN byte-matches ((names) ×3;
  // no doubled runs; no homoglyphs).
  //
  // TWO FINDINGS LARGER THAN THE RUBRIC:
  //  • THE MATINS AND LITURGY PROKEIMENA DIFFER IN TEXT — "Precious in the
  //    sight" at Matins, "The saints shall boast in glory" at the Liturgy.
  //    This encode exposed the §7.4 check as INVERTED-and-gated (it surfaced
  //    equality, behind an unset flag); corrected, it found THREE differing
  //    files — Monastics and Martyrs had been invisible all along. The
  //    claim "first file in ten" made during this encode was itself the
  //    summary error the instrument was hiding.
  //  • A SECOND citation_disputed — the Epistle heading prints
  //    "(5: 4-10)" over a body that reconstructs as ROMANS 8:28-39 at 1.000
  //    (0.31 against the printed span). Right book, wrong chapter — the
  //    Unmercenaries class one level down. No link is offered.
  //
  // ALSO: the first TRUE LINE-BREAK HYPHEN in the corpus ("pas-/sions",
  // p6) — the join rule's "the corpus carries only closed-up compounds"
  // assumption met its first counterexample and behaved as written, joining
  // without a space and keeping the hyphen. Stored as extracted, sic row —
  // the judg-ment-seat treatment for a hyphen that DID meet the rule.
  //
  // The proper troparion is the Monastics/Heirarchs "O God of our fathers" —
  // THIRD file on one general troparion, byte-identical at all four sites.
  // Five irmoi arrive byte-identical from Apostles' canon WITH their defects
  // (Moses”, demons”) — the defects travel with the irmoi; Odes IV and VII
  // arrive as variants of the same irmoi. Beatitudes: all seven identical,
  // and NO (Twice) anywhere — the first file that does not double the first
  // Beatitude.
  MonasticMartyrs: {
    title: mm1("THE GENERAL VIGIL SERVICE TO TWO OR MANY MONK MARTYRS.", "p1 title"),
    troparion: mm2("O God of our fathers, * ever deal with us according to Thy meekness. * Take not Thy mercy from us, * but by the prayers of these saints ** direct our life in peace.", "p4 Troparion", { sourceLabel: "Troparion of the venerable martyrs, in Tone IV", tone: 4, verified_sites: [{"locus": "p4 Vespers dismissal", "tone": 4}, {"locus": "p5 God is the Lord", "tone": 4, "repeat": 2}, {"locus": "p13 after Our Father", "tone": 4}, {"locus": "p14 AT LITURGY", "tone": 4}] }),
    // The same phrase — "having received the gift of miracles" — prints TWICE
    // inside this one kontakion, at both of its sites (sic register).
    kontakion: mm2("Passing unharmed through a multitude of tempests, * and having received the gift of miracles, * ye drowned the immaterial enemies with the streams of your tears, * O divinely-wise venerable-martyrs, * wherefore having received the gift of miracles, ** cease not to pray for us all.", "p10 Kontakion after Ode VI", { sourceLabel: "Kontakion, in Tone II", spec_mel: "Seeking the highest ...", tone: 2, verified_sites: [{"locus": "p10 after Ode VI", "tone": 2}, {"locus": "p14 AT LITURGY", "tone": 2}] }),
    ikos: mm1("O venerable-martyrs! in your ascetic endeavors, and yet again in your sufferings, you have mortified your flesh on earth with a life-bearing death, emulating the passion of Christ God; wherefore Christ hath crowned you with double crowns and prepared eternal abodes for you in the heavens. Having joyfully entered therein, rewarded as both martyrs and venerable fathers, unceasingly intercede on behalf of us all.", "p10 Ikos", { sourceLabel: "Ikos", label_inline: true }),

    vespers: {
      order: ['lic_rubric', 'lic', 'lic_closer', 'lic_stavrotheotokion',
              'idiomelon_rubric', 'lic_glory', 'dogmatikon_rubric', 'dogmatikon',
              'dogmatikon_alternate', 'dogmatikon_stavrotheotokion',
              'entrance_rubric', 'readings', 'aposticha_rubric', 'aposticha',
              'aposticha_glory', 'aposticha_closer_label', 'aposticha_closer_rubric',
              'aposticha_closer', 'aposticha_alternate', 'aposticha_stavrotheotokion',
              'troparion_rubric', 'troparion', 'closer', 'closing_rubric'],
      // "THESE Stichera" at the LIC — where nine files print "the Stichera"
      // or none.
      lic_rubric: mm1("On “Lord, I have cried ...,” these Stichera, in Tone VIII:", "p1 LIC rubric"),
      lic: [
        mm2("Having valiantly fought the good fight, * O venerable fathers, * manfully enduring the assaults of tyrants, * you gave up your souls to the sword * and put on crowns of martyrdom * and now with love worthily exult together with the Angels. * Great was your endurance * and still greater your spiritual gifts, ** ever intercede that our souls may be saved.", "p1 LIC 1", { spec_mel: "What shall we call you ...", label: "plain" }),
        mm2("You lived god-pleasing lives, O holy ones, * valiantly emulating the deeds of the martyrs, * for having sanctified your bodies by fasting * you manfully scorned torments, * and shed your blood with love, * that together you might put on the crowns of your sufferings; ** ever intercede that our souls be saved.", "p1 LIC 2", { spec_mel: "What shall we call you ...", label: "plain" }),
        mm2("O venerable martyrs of Christ! * You have struggled valiantly, * utterly disregarding temporal life * and manfully overcoming fleshly wisdom, * you willingly finished your course in martyrdom for Christ, * wherefore you have been found worthy to make your abodes with the angels; * we who lovingly honor your sacred memory * implore you to entreat the Lord ** that He may have mercy upon our souls.", "p1 LIC 3", { spec_mel: "What shall we call you ...", label: "plain" }),
      ],
      lic_closer: mm2("Whom hast thou emulated, O wretched soul, * who in no wise dost rouse thyself to repentance * nor fearest the fire which awaiteth the wicked? * Arise, and cry aloud, * calling upon her who alone is quick to help: * O Virgin Mother, * entreat thy Son and our God, ** to deliver me from the snares of the deceiver!", "p1 LIC closer", { sourceLabel: "Glory ..., Both now ..., Theotokion in Tone VIII", tone: 8, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      lic_stavrotheotokion: mm2("The ewe-lamb, as she beheld the Lamb * stretched out of His own will upon the Tree of the Cross, * cried out maternally, in pain with her weeping: * O my Son, what is this strange sight? * O Longsuffering One, how is it that Thou art slain, * Who, as Lord, bestoweth life upon all, granting resurrection to mortals? ** I glorify Thy great condescension, O my God!", "p1 LIC Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      idiomelon_rubric: mm1("If an Idiomelon be appointed, Glory ..., in Tone VIII:", "p1 idiomelon rubric"),
      lic_glory: mm2("Having lived angelic lives laboring in fasting, * and by abstinence subjecting your bodies to the spirit, * ye were revealed to be true laborers in the vineyards of the Lord, * fulfilling His commandments * and preserving the beauty of the original image within yourselves * accomplishing great feats of fasting * and suffering the pangs of martyrdom, * wherefore ye have been adorned with double crowns, ** fervently entreat the Savior that our souls be saved.", "p1 Glory idiomelon", { sourceLabel: "If an Idiomelon be appointed, Glory ..., in Tone VIII", tone: 8, label: "glory" }),
      // THE REWRITTEN RUBRIC, verbatim — measured by the analysis §6.1 and
      // confirmed on the page: TWO primary clauses, NO parenthetical, and
      // "the Tone of the Week" where every other file writes "the Tone for
      // that service". No "service ):" because there is no parenthesis to
      // close. Nothing keys on rubric wording; this cost nothing to absorb.
      dogmatikon_rubric: mm1("If the Celebration be with a Polyeleos, chant the Tone VIII Dogmatic of the Resurrection, If a Resurrection service, chant the Dogmatic in the Tone of the Week:", "p2 dogmatikon rubric"),
      // THIRD byte-identical site of the Tone VIII dogmatic (Heirarch,
      // Apostles, here) — the second dogmatic family still travelling intact.
      dogmatikon: mm2("In His love for mankind, the King of heaven appeared on earth * and dwelt among men; * for He Who received flesh from the pure Virgin * and cameth forth from her having received human nature, * is the only Son of God, * twofold in nature but not Hypostasis. * Therefore, proclaiming Him to be truly perfect God and perfect man, * we confess Christ our God. * Him do thou beseech, O unwedded Mother, ** that our souls find mercy!", "p2 Both now dogmatic", { sourceLabel: "Both now ..., in Tone VIII", tone: 8, type: "dogmatic_theotokion", label: "both_now" }),
      // Byte-identical to Heirarch's "Thy shelter" — the Otherwise-Theotokia
      // circulate independently of their host files (registered).
      dogmatikon_alternate: mm2("Thy shelter, O Virgin Theotokos, * is spiritual healing; * for, having recourse unto it, ** we are delivered from spiritual infirmities.", "p2 Otherwise Theotokion", { sourceLabel: "Otherwise, Theotokion", type: "theotokion", label: "theotokion", label_inline: true }),
      dogmatikon_stavrotheotokion: mm2("The unblemished heifer, beholding her Bullock * willingly nailed to the Tree, * cried out aloud, lamenting piteously: * “Woe is me, O my most beloved Child! * How hath the ungrateful assembly of the Jews rewarded Thee, * desiring to leave me childless and bereft of Thee, ** my most beloved Child?”", "p2 Stavrotheotokion", { sourceLabel: "The Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      entrance_rubric: mm1("The Entrance. The Prokeimenon of the day. The Three Lessons, if appointed.", "p2 entrance rubric"),
      // The three monastic Wisdom lessons — the same pericopes Monastic's
      // corpus round-trip DERIVED (3:1-9 · 5:15-6:3 · 4:7-14) — printed here
      // WITHOUT references, under three heading forms ("THE READING FROM" /
      // "A READING FROM" ×2). Identified from the cross-file correspondence,
      // not re-derived; confirm against the page.
      readings: [
        { heading: 'THE READING FROM THE WISDOM OF SOLOMON',
          src: { file: MM, locus: 'p2 Lesson 1' },
          citation: { book: 'Wisdom of Solomon', chapter: 3, verses: '3:1-3:9' },
          citation_basis: 'identified',
          provenance_note: 'No reference printed. The body is the lesson Monastic prints as its first ("The souls of the righteous are in the hands of God"), whose citation the corpus round-trip derived at 3:1-9. Identified from that correspondence; confirm against the page.' },
        { heading: 'A READING FROM THE WISDOM OF SOLOMON',
          src: { file: MM, locus: 'p2-p3 Lesson 2' },
          citation: { book: 'Wisdom of Solomon', chapter: 5, verses: '5:15-6:3' },
          citation_basis: 'identified',
          provenance_note: '"A READING" — indefinite article, lessons 2 and 3, where lesson 1 prints "THE READING". The body is Monastic\'s second lesson ("The righteous live for evermore"), derived there at 5:15-6:3. Identified; confirm against the page.' },
        { heading: 'A READING FROM THE WISDOM OF SOLOMON',
          src: { file: MM, locus: 'p3 Lesson 3' },
          citation: { book: 'Wisdom of Solomon', chapter: 4, verses: '4:7-4:15' },
          citation_basis: 'identified',
          provenance_note: 'The body is the "Though the righteous be prevented with death" lesson — Heirarchs cites its printing "(4, 7-15.)"; Monastic\'s derivation gave 4:7-14. The body here runs through "respect unto His chosen" (4:15). Identified; confirm the end-verse against the page.' },
      ],
      aposticha_rubric: mm1("On the Aposticha, these Stichera, in Tone VIII:", "p3 Aposticha rubric"),
      aposticha: [
        mm2("O Lord, Thy venerable martyrs, * emulating the bodiless ones in prayer * and by abstinence * subduing the passions of the flesh, * shining forth with miraculous deeds, * they have enlightened the hearts of all the faithful; ** by their intercessions, grant unto Thy people, great mercy.", "p3 Aposticha 1", { spec_mel: "Thy Martyrs, O Lord ...", tone: 8, label: "plain" }),
        mm2("Precious in the sight of the Lord * is the death of His saints.", "p3 Aposticha verse 1", { sourceLabel: "Verse", label: "refrain" }),
        // "ye have became renown" — the have/became class AND a dropped -ed,
        // in four words; then the address slips from "ye" to "their" (sic).
        mm2("O venerable Martyrs! * Animated with virtuous zeal, * ye have shattered the heresies of Arius and Nestorius, * and as champions of Orthodoxy, * ye have became renown among all peoples; * by their intercessions, O Christ, ** grant unto Thy people great mercy.", "p3 Aposticha 2", { spec_mel: "Thy Martyrs, O Lord ...", label: "plain" }),
        mm2("Blessed is the man that feareth the Lord, * in His commandments shall he greatly delight.", "p3 Aposticha verse 2", { sourceLabel: "Verse", label: "refrain" }),
        mm2("O venerable martyrs, * like stars shining in the firmament of abstinence, * ye have illumined the souls of ascetics, * driving away legions of demons; * wherefore after your repose we ever bless you, * for you intercede on behalf of us who celebrate your holy memory, ** that our souls be saved.", "p3 Aposticha 3", { spec_mel: "Thy Martyrs, O Lord ...", label: "plain" }),
      ],
      // Reprinted byte-for-byte as the Doxasticon (p12-13) — fifth file with
      // the pattern.
      aposticha_glory: mm2("Blessed are ye, O venerable martyrs of Christ our God; * for as venerable ones, you have loved the truth and received divine grace, * and as martyrs, the sword could not separate you from the love of Christ, * wherefore ye now rejoice, for great is your reward in the heavens.", "p3-p4 Aposticha Glory", { sourceLabel: "Glory ..., in Tone VI", tone: 6, label: "glory" }),
      aposticha_closer_label: mm1("Both now ..., in Tone VI:", "p4 Both now label"),
      aposticha_closer_rubric: mm1("If the Celebration be with a Polyeleos, chant the Resurrection Theotokion:", "p4 aposticha closer rubric"),
      // "Rejoice!, O Lady" — where Heirarchs' byte-sibling prints "O
      // Sovereign Lady". One word dropped from a 460-character hymn
      // (registered as a variant).
      aposticha_closer: mm2("Christ the Lord, my Creator and Redeemer, * Who came forth from thy womb, O most pure one, * and clothed Himself in my nature, * hath freed Adam from the primal curse. * Wherefore, like the angel * we unceasingly cry out to thee, O most pure one, * who art truly the Mother of God and Virgin: * Rejoice!, O Lady, ** the intercession, protection and salvation for our souls!", "p4 Resurrection Theotokion", { tone: 6, type: "theotokion", label: "theotokion" }),
      // Byte-identical to Apostle's dogmatikon_alternate — "No one that
      // fleeth" is the third Otherwise-Theotokion circulating between files
      // at different positions (registered).
      aposticha_alternate: mm2("No one that fleeth unto thee, O most pure Virgin Theotokos, * departeth from thee ashamed; * for those that asketh grace of thee, ** ever receiveth a gift for their profitable petition.", "p4 Otherwise Theotokion", { sourceLabel: "Otherwise, Theotokion", type: "theotokion", label: "theotokion", label_inline: true }),
      aposticha_stavrotheotokion: mm2("Upon beholding our Life suspended upon the Tree, * the all-immaculate Theotokos cried aloud, * maternally lamenting: ** O my Son and my God, save those who with love hymn Thee!", "p4 Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      troparion_rubric: mm1("The Troparion from the Typicon; but if there be none, chant the following:", "p4 troparion rubric"),
      closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8)." },
      closing_rubric: mm1("The Dismissal:", "p4 Dismissal"),
    },

    matins: {
      order: ['god_is_lord_rubric', 'troparion', 'troparion_closer',
              'sessional_1_rubric', 'sessional_1', 'sessional_1_closer',
              'sessional_2_rubric', 'sessional_2', 'sessional_2_closer',
              'megalynarion_rubric', 'megalynarion', 'megalynarion_verse',
              'sessional_polyeleos_rubric', 'sessional_polyeleos',
              'sessional_polyeleos_closer', 'anabathmoi_rubric', 'anabathmoi_intro',
              'anabathmoi', 'anabathmoi_closer', 'prokeimenon_rubric', 'prokeimenon',
              'prokeimenon_verse', 'gospel_rubric', 'gospel', 'psalm50_rubric',
              'psalm50_sticheron', 'psalm50_closer', 'psalm50_verse',
              'sessional_post50_rubric', 'sessional_post50', 'canon_rubric', 'canons',
              'sessional_ode3_rubric', 'sessional_ode3', 'sessional_ode3_closer',
              'sessional_ode3_stavrotheotokion', 'kontakion_rubric', 'kontakion', 'ikos',
              'exapostilarion_rubric', 'exapostilarion', 'exapostilarion_closer',
              'praises_rubric', 'praises', 'praises_glory', 'praises_closer',
              'praises_stavrotheotokion', 'great_doxology_rubric',
              'doxology_glory', 'doxology_closer_rubric', 'troparion_rubric',
              'troparion', 'closer', 'closing_rubric'],
      god_is_lord_rubric: mm1("On “God is the Lord ...,” the Troparion, in Tone IV:", "p5 God is the Lord rubric"),
      troparion_closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8)." },
      sessional_1_rubric: mm1("After the 1st chanting of the Psalter, the Sessional Hymn, in Tone IV:", "p5 sessional 1 rubric"),
      sessional_1: mm2("Disregarding earthly and corruptible things, * you were moved by devotion for the desert-life * and an aversion for the temporal delights of the world, * wherefore you were deemed worthy to be numbered among the choirs of martyrs and venerable fathers; ** together with them entreat Christ that your servants be saved.", "p5 Sessional 1", { spec_mel: "Having been lifted up ...", tone: 4, label: "plain", repeat: 2 }),
      sessional_1_closer: mm2("He that sitteth upon the throne of the cherubim * and abideth in the bosom of the Father * doth sit in thy womb as upon a throne, O Lady; * for, being truly God incarnate, * He reigneth over all nations, * and with understanding we now chant to Him. * Him do thou also entreat, ** that thy servants be saved.", "p5 Sessional 1 closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone IV", tone: 4, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      sessional_2_rubric: mm1("After the 2nd chanting of the Psalter, the Sessional Hymn, in Tone VIII:", "p5 sessional 2 rubric"),
      sessional_2: mm2("In your abstinence, imitating John the Baptist, * and in your virtues, Elijah the Tishbite, * ye have lived like the bodiless Angels * glorifying the Holy and Divine Trinity * valiantly enduring the trials of your warfare, * defeating the attacks of demons, * and adoring Christ’s divine incarnation and Divinity, * O blessed (names); * entreat Him to grant remission of sins ** to those who with love celebrate your holy memory.", "p5 Sessional 2", { spec_mel: "Of the wisdom ...", tone: 8, label: "plain", repeat: 2 }),
      // "All we, the generations" — byte-identical to Apostles'
      // post-Ode-III closer, at the sessional-2 position here: the same
      // theotokion Heirarchs prints at ITS sessional-2. The theotokia
      // migrate between sessional slots file by file (registered).
      sessional_2_closer: mm2("All we, the generations of mankind, * call thee blessed, * in that thou art the Virgin who alone among women * hast given birth without seed unto God in the flesh; * for the fire of the Godhead made its abode within thee, * and thou didst feed the Creator and Lord * with milk as an infant. * Wherefore, we, the race of mankind and of angels, * worthily glorify thine all-holy birthgiving, * and together we cry out to thee: * Entreat Christ God to grant forgiveness of sins ** unto those who with faith worship thine all-holy Offspring.", "p5 Sessional 2 closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone VIII", tone: 8, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      megalynarion_rubric: mm1("After the Polyeleos, the Megalynarion:", "p5 megalynarion rubric"),
      // "We BLESS you" — where nine files magnify. And a NEW verse ("With
      // patience I waited patiently"). The megalynarion formula is per-file,
      // like everything else.
      megalynarion: mm1("We bless you, O Venerable Father-Martyrs, and we honor your holy memory, Instructors of monks and conversers with the Angels.", "p5 Megalynarion", { label_inline: true }),
      megalynarion_verse: mm1("With patience I waited patiently for the Lord, and He was attentive unto me, and He hearkened unto my supplication.", "p5 Megalynarion verse", { sourceLabel: "Verse", label: "refrain" }),
      sessional_polyeleos_rubric: mm1("After the Polyeleos, the Sessional Hymn, in Tone VIII:", "p6 post-Polyeleos sessional rubric"),
      // Carries the corpus's FIRST TRUE LINE-BREAK HYPHEN: the page breaks
      // "passions" as "pas-/sions" across lines, and the join rule — written
      // against a corpus of closed-up compounds — met its first soft hyphen
      // and behaved as specified: joined without a space, hyphen kept.
      // Stored as extracted, sic row (the judg-ment-seat treatment).
      sessional_polyeleos: mm2("Brightly illumined with the light of the Trinity, * O light-bearing Fathers, * you forsook the darkness of temporal delights, * and appeared as lamps * illumining the hearts of the faithful with your divine works, * blessed for both your asceticism and your sufferings; * wherefore today we venerate your radiant and honorable memory, * and with one voice cry aloud: * O ye divinely spoken and most noetically rich ones! * entreat Christ God to grant remission of sins * unto those who with love honor your holy memory.", "p6 post-Polyeleos Sessional", { spec_mel: "Of the wisdom ...", tone: 8, label: "plain", repeat: 2 }),
      sessional_polyeleos_closer: mm2("As the all-immaculate Bride of the Creator, * Mother of the Redeemer, who knewest not a man, * and as the receptacle of the Comforter O all-hymned one, * hasten thou to deliver me, * the vile abode of iniquity and noetic plaything of the demons, * from their evil machinations; * and make me the bright dwelling-place of the virtues, * O thou incorrupt light-bearing one. * Drive away the clouds of the pas-sions and grant that, * by thy supplications, * I may receive a portion on high ** and share in the never-waning light.", "p6 post-Polyeleos Sessional closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone VIII", tone: 8, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      anabathmoi_rubric: mm1("If of Polyeleos rank, and not a Resurrection Service, chant the following:", "p6 anabathmoi rubric"),
      anabathmoi_intro: mm1("The Song of Ascents: The first antiphon, in Tone IV:", "p6 anabathmoi heading"),
      anabathmoi: [
        mm2("From my youth * do many passions war against me; * but do Thou Thyself defend ** and save me, O my Savior.", "p6 Anabathmoi 1", { label: "plain" }),
        mm2("Ye haters of Zion * shall be shamed by the Lord; * for like grass, by the fire ** shall ye be withered.", "p6 Anabathmoi 2", { label: "plain" }),
      ],
      anabathmoi_closer: mm2("In the Holy Spirit, * every soul is quickened, * and, through cleansing, is exalted ** and made radiant by the Triple Unity in a hidden sacred manner.", "p6 Anabathmoi closer", { sourceLabel: "Glory ..., Both now ...,", type: "plain", label: ["glory", "both_now"] }),
      prokeimenon_rubric: mm1("Prokeimenon, in Tone IV:", "p6 prokeimenon rubric"),
      // "Precious in the sight" at Matins — and "The saints shall boast" at
      // the Liturgy: differing prokeimena, which exposed the §7.4 check as
      // inverted (see validate_menaion_v2.mjs) — three files differ, two of
      // them invisibly until this file forced the correction.
      prokeimenon: mm2("Precious in the sight of the Lord * is the death of His saints.", "p6 Prokeimenon", { sourceLabel: "The Prokeimenon", tone: 4, label_inline: true }),
      prokeimenon_verse: mm1("What shall I render unto the Lord for all that he hath rendered unto me?", "p6 Prokeimenon verse", { sourceLabel: "Verse", label: "refrain" }),
      gospel_rubric: mm1("Let every breath.", "p6 Let every breath"),
      gospel: { heading: 'THE GOSPEL ACCORDING TO ST. MATTHEW',
        src: { file: MM, locus: 'p6-p7 Matins Gospel' },
        citation_verbatim: '(10, 16-22)',
        citation: { book: 'Matthew', chapter: 10, verses: '16-22' },
        citation_basis: 'printed' },
      psalm50_rubric: mm1("After the 50th Psalm:", "p7 After the 50th Psalm"),
      psalm50_sticheron: mm2("Through the prayers of the venerable (names), * O Merciful One, ** blot out the multitude of our transgressions.", "p7 Psalm 50 Glory", { sourceLabel: "Glory ..., in Tone VI", tone: 6, label: "glory" }),
      psalm50_closer: mm2("Through the prayers of the Theotokos, * O Merciful One, ** blot out the multitude of our transgressions.", "p7 Psalm 50 Both now", { sourceLabel: "Both now ...,", type: "theotokion", label: "both_now" }),
      psalm50_verse: mm2("Have mercy on me, O God, * according to Thy great mercy; * and according to the multitude of Thy compassions, ** blot out my transgressions.", "p7 Psalm 50 verse", { label: "refrain" }),
      sessional_post50_rubric: mm1("Then the Sessional Hymn, in Tone IV:", "p7 post-Psalm-50 sessional rubric"),
      sessional_post50: mm2("With your souls brightly illumined * with the most brilliant light of the Holy Trinity, * O venerable fathers, * you have adorned the earth with your virtues; * bearing Christ in your hearts, * like a never-setting sun ye have enlightened heathen peoples, * and adorned us with your martyrdom, ** O holy venerable martyrs.", "p7 post-Psalm-50 Sessional", { tone: 4, label: "plain" }),
      canon_rubric: mm1("The Canon, in Tone IV:", "p7 Canon rubric"),
      canons: [{
        title: "The Canon, in Tone IV:", tone: 4,
        odes: {
          1: {
            // Byte-identical to Apostles' Ode I irmos INCLUDING the Moses”
            // curly-quote defect — the defect travels with the irmos
            // (registered; sic at both files' sites).
            irmos: mm2("Through the deep of the Red Sea, * marched dry shod Israel of old, * and by Moses” outstretched hands, * raised in the form of a cross, * the power of Amalek was routed in the wilderness.", "p7 Ode 1 irmos", { sourceLabel: "Irmos", label_inline: true }),
            refrain: mm1("Holy Fathers (names) pray to God for us", "p7 Ode 1 refrain", { sourceLabel: "Refrain", label_inline: true }),
            items: [
              mm1("Radiant with your ascetic feats, and the shedding of your blood, O most blessed ones, you appear as divinely luminous lights, wherefore you now rejoice together with all the venerable fathers and martyrs of Christ.", "p7 Ode 1 troparion 1", { label: "plain" }),
              mm1("Having first drowned the spiritual Pharaoh in the sea of your tears, O wise ones, you then vanquished him in the streams of your blood, giving him over to ruin.", "p7 Ode 1 troparion 2", { label: "plain" }),
              mm1("Let us praise the venerable fathers who were slain for Christ, the martyrs who lived as ascetics, singing unto our God their Redeemer, for He is glorified.", "p7 Ode 1 troparion 3", { label: "plain" }),
              mm1("He that is by nature God, Whom nothing can contain, hath confined Himself within thee, O Virgin Theotokos, for the sake of His great compassion, He took on our form that He may save the earth-born by His ineffable mercy.", "p8 Ode 1 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          3: {
            irmos: mm2("Not in wisdom, nor in power do we glory, * but we glory in Thee O Christ, * the Hypostatic Wisdom of the Father, * for there is none more holy than Thee, O Lover of mankind.", "p8 Ode 3 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              mm1("Having pleased God with the contrition of your hearts, O blessed ones you shattered the proud boasting of your adversaries, while being cut asunder with the sword and slain.", "p8 Ode 3 troparion 1", { label: "plain" }),
              mm1("Meditating on the everlasting nature of the future life, O wise ones, you rejected the fleeting and corruptible things of this life, wherefore we bless you, O venerable martyrs.", "p8 Ode 3 troparion 2", { label: "plain" }),
              mm1("Glorifying Thy power, the god-bearing ones mightily vanquished the armies of the destroyer, and having been slain for Thee, O Savior, were revealed doubly great in their exploits, wherefore they received double crowns.", "p8 Ode 3 troparion 3", { label: "plain" }),
              mm1("O most pure one, who hast given birth to the Word of God, sanctify the souls and bodies of those who bless thee, O most immaculate one.", "p8 Ode 3 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          4: {
            // A VARIANT of Apostles' Ode IV irmos — comma after
            // "righteousness", capital Cross (registered).
            irmos: mm2("Beholding Thee, the Sun of righteousness, * lifted up upon the Cross, * the Church now standeth arrayed and doth worthily cry aloud: * Glory be to Thy power, O Lord!", "p9 Ode 4 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              mm1("Having refused obeisance to the passions of the flesh, O most blessed ones, you conquered the enemy, and having been slain with the sword, ye have been translated to life eternal, rejoicing together.", "p9 Ode 4 troparion 1", { label: "plain" }),
              mm1("O venerable fathers, before dying a martyr’s death ye voluntarily slew yourselves with abstinence, after which you were involuntarily and cruelly murdered with the sword by the wicked ones, dying with the hope of eternal life.", "p9 Ode 4 troparion 2", { label: "plain" }),
              mm1("O venerable fathers, though you departed this life slain by the sword of the wicked, ye willingly endured the sufferings of the eremitic life before your repose, being dead to the world.", "p9 Ode 4 troparion 3", { label: "plain" }),
              mm1("The Son of the Eternal God hath renewed the nature of mankind, having appeared from the Virgin and taking the form of a man; let us chant unto Him: “Glory to Thy power, O Lord.”", "p9 Ode 4 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          5: {
            irmos: mm2("Thou, O Lord, who camest into the world, * art my light, * a holy light turning from the darkness of ignorance * those who sing Thy praises in faith.", "p9 Ode 5 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              mm1("The pools of your sacred blood have been revealed to be like ponds of a beautiful paradise, for like the tree of life, the Lord was in your midst, Who accepted you as pure whole-burnt offerings.", "p9 Ode 5 troparion 1", { label: "plain" }),
              mm1("Mingling the drops of your blood with the streams of your tears, O God-bearers, you drowned therein the serpent.", "p9 Ode 5 troparion 2", { label: "plain" }),
              mm1("Deemed worthy to behold the divine beauty, ye obtained eternal joy in place of labor and pangs, O blessed ones.", "p9 Ode 5 troparion 3", { label: "plain" }),
              mm1("Beyond all utterance and understanding, thou hast given birth unto God, remaining a Virgin after giving birth, just as thou wast before giving birth, O pure Bride of God.", "p9 Ode 5 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          6: {
            // Byte-identical to Apostles' Ode VI irmos INCLUDING the stray
            // demons” quote — a second defect travelling with an irmos.
            irmos: mm2("The church crieth out unto Thee O Lord, * “I will sacrifice unto Thee with a voice of praise” * having been cleansed of the blood of the demons” * by the blood that for mercy’s sake flowed from Thy side.", "p9 Ode 6 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              mm1("Casting aside the fetters of the passions with abstinence, and freeing yourselves from the bonds of the body by a savage death, you have been called unto the immutable blessedness of the Master.", "p9 Ode 6 troparion 1", { label: "plain" }),
              mm1("Appearing like mountains by your exalted lives, ye have trampled under feet by the might of Christ, he who strives to destroy the spiritual mountains and the whole of creation.", "p10 Ode 6 troparion 2", { label: "plain" }),
              mm1("Through abstinence and labors, O venerable fathers, ye have subdued your bodies and nobly offered your blood unto Christ wherefore you were rightly crowned.", "p10 Ode 6 troparion 3", { label: "plain" }),
              mm1("Assuage the voracious tempest of my passions by thine unceasing prayers, O Virgin, I implore thee, and permit not the heavy slumber of sin to overcome me.", "p10 Ode 6 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          7: {
            // A VARIANT of Apostles' Ode VII irmos — "by a flame of fire" /
            // "cried aloud saying" against "by the flame of a fire" / "cried
            // out aloud saying" (registered).
            irmos: mm2("In the Persian furnace the youths and descendants of Abraham, * burning with a love of piety * rather than by a flame of fire, * cried aloud saying: * Blessed art Thou in the temple of Thy glory, O Lord.", "p10 Ode 7 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              mm1("Adorned with the brilliant light of virtues and illumined by sacred sufferings, ye have passed unto the never-waning Light, appearing like suns of the spiritual day.", "p10 Ode 7 troparion 1", { label: "plain" }),
              mm1("Voluntarily eschewing the temporal delights of this world, O venerable ones, you gave yourselves over entirely unto Him Who hath wondrously appeared in the flesh among mankind, thereby attaining future and incorruptible blessedness.", "p10 Ode 7 troparion 2", { label: "plain" }),
              mm1("Blessed art Thou, O God, Who hath this day completed the course of the God-bearing Father-sufferers, revealing them to be participants in Thy heavenly Kingdom.", "p10 Ode 7 troparion 3", { label: "plain" }),
              mm1("The ancient vessel of manna manifestly and truly prefigured thee who didst carry the Manna of life within thy womb. Blessed art thou among women, O most immaculate Lady.", "p10 Ode 7 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          8: {
            irmos: mm2("Having spread his hands, Daniel closed the lions’ jaws * in their den; * while the zealously pious youths, * girded with virtue, * quenched the power of the fire and cried aloud: * Bless ye the Lord, all ye works of the Lord.", "p11 Ode 8 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              mm1("The great choir of the venerable-martyrs, adorned with the valor of asceticism, is revealed today together with all the members of the divine choirs praising and hymning Christ: “Bless the Lord, all ye works of the Lord.”", "p11 Ode 8 troparion 1", { label: "plain" }),
              // "tormentors”," — a stray closing quote mid-sentence (sic).
              mm1("Standing like lambs while you were slaughtered by the swords of your tormentors”, you were set before the sacrificed Word as a perfect oblation; wherefore you also appear in the heavenly abodes, chanting: “Bless the Lord, all ye works of the Lord.”", "p11 Ode 8 troparion 2", { label: "plain" }),
              mm1("Driven by abstinence you have dedicated to the Lord both body and soul, O venerable fathers, and with the streams of your blood you dried up the wicked sea of the tyrants, chanting: “Bless the Lord, all ye works of the Lord.”", "p11 Ode 8 troparion 3", { label: "plain" }),
              mm1("Through thee, O pure divinely joyous maiden, the first paradise is once more opened, and man who was first condemned is led therein again, truly renewed and deified, chanting: “Bless the Lord, all ye works of the Lord.”", "p11 Ode 8 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          9: {
            irmos: mm2("A cornerstone not cut by hand O Virgin, * was cut from thee the unhewn mountain: * even Christ, Who hath joined together the disparate natures; * therefore rejoicing we magnify thee, * O Theotokos.", "p11 Ode 9 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              mm1("O come, let us praise in sacred hymns the venerable fathers who lived divine lives in deserts and caves and devoutly suffered martyrdom.", "p11 Ode 9 troparion 1", { label: "plain" }),
              mm1("How exceedingly praiseworthy are your labors in asceticism, O father-martyrs; and how magnificent the exploits with which ye have trampled under foot the deceiving flatterer; and how wonderful are the sufferings which ye have lawfully endured and for which ye have obtained crowns in heaven.", "p11 Ode 9 troparion 2", { label: "plain" }),
              mm1("Your divinely enlightening celebration is illumined by the brilliant light of the labors which ye endured for the sake of Christ, and by the grace of the All-powerful Holy Spirit, illumining the minds of all.", "p11 Ode 9 troparion 3", { label: "plain" }),
              mm1("The Cherubim fear beholding the Child carried in thy motherly arms, O most pure Lady, even the Word Who in a manner beyond all telling sitteth upon them, above all creation.", "p11 Ode 9 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
        },
      }],
      sessional_ode3_rubric: mm1("The Sessional Hymn, in Tone IV:", "p8 post-Ode-III sessional rubric"),
      sessional_ode3: mm2("Ye appeared on earth as strangers and exiles, * O venerable fathers; * making your abodes in the wilderness * and valiantly fighting the invisible enemies, * ye adorned your nakedness with the vesture of virtue * and emulated the sufferings of Christ; ** for Whom ye endured the sacrifice of martyrdom.", "p8 post-Ode-III Sessional", { spec_mel: "Go thou quickly before ...", tone: 4, label: "plain" }),
      // "To the Theotokos we the sinful" — byte-identical to Apostle's LIC
      // closer, at the post-Ode-III position here. Third theotokion
      // migrating between slots across files (registered).
      sessional_ode3_closer: mm2("To the Theotokos we the sinful and lowly ones, * do we now earnestly hasten; * and we fall down in repentance, * crying out from the depths of our soul: * O Sovereign Lady, have compassionate pity and mercy upon us! * Hasten thou, for we are perishing * from the multitude of our transgressions! * Turn not thy servants empty away, ** for thee do we have as our only hope!", "p8 post-Ode-III Sessional closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone IV", tone: 4, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      // "was wounded and with grief and cried aloud" — the doubled-and class
      // (sic).
      sessional_ode3_stavrotheotokion: mm1("The Virgin and ewe-lamb, beholding on the Cross the Lamb Who was born of her without seed, His side pierced by a spear, was wounded and with grief and cried aloud, exclaiming amid her pain: “What is this new mystery? How is it that Thou diest Who alone art Lord of life? Wherefore, arise, raising up our fallen forefather!”", "p8 post-Ode-III Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      kontakion_rubric: mm1("The Kontakion from the Typicon; but if there be none, chant the following:", "p10 kontakion rubric"),
      exapostilarion_rubric: mm1("Exapostilarion, in Tone III:", "p11 exapostilarion rubric"),
      exapostilarion: mm2("With the struggles of asceticism * ye have utterly vanquished the serpent, the origin of evil, * and upon your repose ye have obtained crowns of martyrdom, * O adornment of the fathers, and glory of the martyrs, * assembly of venerable-martyrs, and most wondrous fathers.", "p11 Exapostilarion", { spec_mel: "By the Spirit in the sanctuary ...", tone: 3, label: "plain" }),
      exapostilarion_closer: mm2("The most glorious wonder of thy birth-giving, * above all understanding astoundeth every mind, of both angels and mortals: * For thou wast a Virgin before bearing child, * a Virgin in child-bearing * and after bearing a child remained a Virgin. * O what an awesome mystery! ** O how exceedingly wondrous and glorious is thy birth-giving!", "p12 Exapostilarion closer", { sourceLabel: "Glory ..., Both now ..., Theotokion:", type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      praises_rubric: mm1("On the Praises, these Stichera, in Tone IV:", "p12 Praises rubric"),
      praises: [
        mm2("Come, let us joyfully hymn * the wise martyrs and venerable fathers, * for in obedience to Christ’s commandments, * the holy ones vanquished every unclean ritual, * honorably and faithfully serving * the One Lord and God, * Whom they valiantly confessed * in the presence of the tyrants, ** and for which they received crowns on high.", "p12 Praises 1", { spec_mel: "As one valiant among the martyrs ...", tone: 4, label: "plain", repeat: 2 }),
        mm2("O all-famed fathers, * ye forsook as fleeting * the fallen ways of earthly life, * with its delights and worldly glory, * and cleaving unto Christ, * ye were set afire by His exceeding splendor, * and wholly devoted yourselves to Him, * wherefore you were deemed worthy ** to receive incorruptible crowns in the heavenly Kingdom.", "p12 Praises 2", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
        mm2("Ye who scorned this world, * have been revealed to be above the world, * and joined unto the Church of the first-born, * ceaselessly chanting the angelic hymns, * standing together before God; * as martyrs ye also rebuked * the falsehoods of the idols, * putting to shame ** the foolish arrogance of the tyrants.", "p12 Praises 3", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
      ],
      praises_glory: mm2("Adorned with the vesture of purity * and illumined by divine prayer, * bearing within you Christ who was born of the Virgin, * you were not captivated by love for this world * nor did you partake in fleshly delights, * but fervently acquiring the fire of divine grace * you consumed the fire of the passions; * wherefore we beseech you, O blessed venerable Martyrs, * to ever intercede that we may also be delivered ** from the all-destructive and eternal fire.", "p12 Praises Glory", { sourceLabel: "Glory ..., in Tone IV", tone: 4, label: "glory" }),
      // "incarnate FROM thee" — one preposition off Heirarch's byte-sibling
      // ("incarnate of thee") at ITS post-Ode-III closer. Registered.
      praises_closer: mm2("The Word of the Father, Christ our God, * Who was incarnate from thee, * we have come to know, O Virgin Theotokos, * who alone art pure, who alone art blessed. ** Wherefore, we unceasingly hymn and magnify thee.", "p12-p13 Praises Both now", { sourceLabel: "Both now ..., Theotokion in Tone IV", tone: 4, type: "theotokion", label: ["both_now", "theotokion"] }),
      praises_stavrotheotokion: mm2("Thy pure Virgin Mother, * beholding the most iniquitous people * who unjustly nailed Thee to the Tree, ** was wounded within, as Symeon foretold.", "p13 Praises Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      great_doxology_rubric: mm1("The great Doxology: If a small Doxology is read, and a Doxasticon is appointed, the following is chanted after the Aposticha:", "p12 great Doxology rubric"),
      doxology_glory: mm2("Blessed are ye, O venerable martyrs of Christ our God; * for as venerable ones, you have loved the truth and received divine grace, * and as martyrs, the sword could not separate you from the love of Christ, * wherefore ye now rejoice, for great is your reward in the heavens.", "p13 Doxology Glory", { sourceLabel: "Glory ..., in Tone VI", tone: 6, label: "glory" }),
      doxology_closer_rubric: mm1("Both now ..., Theotokion or Stavrotheotokion:", "p13 Doxology Both now"),
      troparion_rubric: mm1("After Our Father ..., the Troparion of the venerable martyrs, in Tone IV:", "p13 after Our Father"),
      closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8)." },
      closing_rubric: mm1("The Dismissal:", "p13 Dismissal"),
    },

    liturgy: {
      order: ['beatitudes_rubric', 'beatitudes', 'propers_rubric', 'troparion',
              'kontakion', 'prokeimenon', 'prokeimenon_verse', 'epistle',
              'alleluia', 'alleluia_verse', 'gospel', 'communion_verse'],
      beatitudes_rubric: mm1("Typika and Beatitudes.", "p14 Typika and Beatitudes"),
      // All seven byte-identical to the canon — EIGHT files identical, two
      // variant — and NO (Twice) anywhere: the first file that does not
      // double the first Beatitude.
      beatitudes: [
        mm1("Having pleased God with the contrition of your hearts, O blessed ones you shattered the proud boasting of your adversaries, while being cut asunder with the sword and slain.", "p14 Beatitude 1", { label: "plain" }),
        mm1("Meditating on the everlasting nature of the future life, O wise ones, you rejected the fleeting and corruptible things of this life, wherefore we bless you, O venerable martyrs.", "p14 Beatitude 2", { label: "plain" }),
        mm1("Glorifying Thy power, the god-bearing ones mightily vanquished the armies of the destroyer, and having been slain for Thee, O Savior, were revealed doubly great in their exploits, wherefore they received double crowns.", "p14 Beatitude 3", { label: "plain" }),
        mm1("Casting aside the fetters of the passions with abstinence, and freeing yourselves from the bonds of the body by a savage death, you have been called unto the immutable blessedness of the Master.", "p14 Beatitude 4", { label: "plain" }),
        mm1("Appearing like mountains by your exalted lives, ye have trampled under feet by the might of Christ, he who strives to destroy the spiritual mountains and the whole of creation.", "p14 Beatitude 5", { label: "plain" }),
        mm1("Through abstinence and labors, O venerable fathers, ye have subdued your bodies and nobly offered your blood unto Christ wherefore you were rightly crowned.", "p14 Beatitude 6", { label: "plain" }),
        mm1("Assuage the voracious tempest of my passions by thine unceasing prayers, O Virgin, I implore thee, and permit not the heavy slumber of sin to overcome me.", "p14 Beatitude 7", { label: "theotokion", sourceLabel: "Theotokion", label_inline: true }),
      ],
      // An EIGHTH wording — "; if there be none," drops the "but".
      propers_rubric: mm1("The Troparion and Kontakion from the Typicon; if there be none, chant the following:", "p14 propers rubric"),
      // "The saints shall boast in glory" — a DIFFERENT text from the Matins
      // prokeimenon: first file in ten. §7.4 surfaces the inequality as a
      // finding, which is its design. And the verse ends "His saints?." — a
      // question mark before the stop (sic).
      prokeimenon: mm2("The saints shall boast in glory * and they shall rejoice upon their beds.", "p14 Liturgy Prokeimenon", { sourceLabel: "Prokeimenon, in Tone VIII", tone: 8, label_inline: true }),
      prokeimenon_verse: mm1("Sing unto the Lord a new song, His praise is in the Church of His saints?.", "p14 Liturgy Prokeimenon verse", { sourceLabel: "Verse", label: "refrain" }),
      // THE SECOND citation_disputed. The heading prints "(5: 4-10)"; the
      // body reconstructs against public/bible as ROMANS 8:28-39 at 1.000
      // (0.31 against the printed span). Right book, wrong chapter — the
      // Unmercenaries class one level down. The dispute IS the declaration;
      // no link is offered; confirm against the physical book.
      epistle: { heading: 'THE EPISTLE OF ST. PAUL TO THE ROMANS',
        src: { file: MM, locus: 'p15 Epistle' },
        citation_verbatim: '(5: 4-10)',
        citation_disputed: { printed_as: 'Romans 5:4-10', body_is: 'Romans 8:28-39', reconstruction: 1.0, printed_reconstruction: 0.31,
          note: 'The body printed under this heading opens "And we know that all things work together for good" (Rom 8:28) and closes "shall be able to separate us from the love of God … our Lord" (Rom 8:39, with a doubled full stop). Right epistle, wrong chapter — following the printed reference would send a reader to Romans 5. Measured against public/bible; confirm against the physical book.' } },
      // Unpointed — the pointed form is this file's own aposticha verse 2
      // (registered as the pointing-variant pair, the Heirarchs class).
      alleluia: mm1("Blessed is the man that feareth the Lord, in His commandments shall he greatly delight.", "p15 Alleluia", { sourceLabel: "Alleluia, in Tone VI", tone: 6, label_inline: true }),
      alleluia_verse: mm1("His seed shall be mighty upon the earth; the generation of the upright shall be blessed.", "p15 Alleluia verse", { sourceLabel: "Verse", label: "refrain" }),
      gospel: { heading: 'THE GOSPEL ACCORDING TO ST. LUKE',
        src: { file: MM, locus: 'p15 Liturgy Gospel' },
        citation_verbatim: '(12:8-12)',
        citation: { book: 'Luke', chapter: 12, verses: '8-12' },
        citation_basis: 'printed' },
      // "O ye righteous" — lowercase r, where Martyrs/Unmercenaries print
      // "O ye Righteous" capitalised: the martyric communion verse in a
      // third setting (registered as a variant).
      communion_verse: mm1("Rejoice in the Lord, O ye righteous; praise is meet for the upright.", "p15 Communion Verse", { sourceLabel: "Communion Verse", label_inline: true }),
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Martyress.pdf — 14pp. (name) ×36, no plural token. Extraction proven by
  // NINE byte-matches; no doubled runs, no homoglyphs; page markers stripped
  // at flatten (the shipped-node lesson, now in the pipeline).
  //
  // AN EIGHTH CENSUS ABSENCE THAT WAS A SPELLING — this one in the ANALYSIS
  // itself: §5 lists Martyress as "Isaiah only, 1 lesson". The page prints
  // THREE — Isaiah, then Wisdom ×2 under BARE-NAME headings ("THE WISDOM OF
  // SOLOMON") that no READING-keyed scan can see. The lesson-set census was
  // a heading census, and the heading vocabulary is not uniform (its own
  // warning, now biting its own table).
  //
  // WHAT ELSE THIS FILE ADDS:
  //  • ONE HYMN, TWO RENDERINGS, TWICE OVER — the Idiomelon Glory reprints
  //    as the post-Psalm-50 sessional with case/pointing changes ("O
  //    all-powerful Savior ** send" → "O All-powerful Savior * send"), and
  //    the dogmatic-slot stavrotheotokion (byte-identical to Heirarchs'
  //    PRAISES stav) has a second rendering at THIS file's praises ("how is
  //    it that Thou sufferest such a shameful death" / "how dost Thou endure
  //    this shameful suffering"). Both registered.
  //  • THE RUBRIC-THEN-LABEL INVERSION: at the aposticha closer the Polyeleos
  //    conditional prints BEFORE the "Both now ..." label — every prior file
  //    prints label first. The order array records the page; nothing else
  //    needed.
  //  • "cru-cified" — the SECOND line-break hyphen, and this one sits inside
  //    the PROPER TROPARION at all four of its byte-identical print sites.
  //    The pas-sions ruling now governs a canonical field.
  //  • The Beatitudes: seven of seven byte-identical, no (Twice) — NINE files
  //    identical, two variant.
  Martyress: {
    title: ms1("THE VIGIL SERVICE TO A FEMALE MARTYR.", "p1 title"),
    // "Thy ewe-lamb (name)" — the classic female-martyr troparion, FOUR
    // byte-identical sites INCLUDING the line-break hyphen "cru-cified" in
    // each (sic register; the pas-sions ruling applies to a canonical field
    // now).
    troparion: ms2("Thy ewe-lamb (name), O Jesus crieth out with a loud voice: * “Thee do I love, O my Bridegroom, * and, seeking Thee, I endure suffering. * In Thy baptism I am cru-cified and buried with Thee. * I suffer for Thy sake, that I may reign with Thee; * I die for Thee, that I may live with Thee. * Accept me, who with love sacrifice myself for Thee, * as an unblemished offering!” ** By her supplications, in that Thou art merciful, save Thou our souls.", "p4 Troparion", { sourceLabel: "Troparion, in Tone IV", tone: 4, verified_sites: [{"locus": "p4 Vespers dismissal", "tone": 4}, {"locus": "p5 God is the Lord", "tone": 4, "repeat": 2}, {"locus": "p12 after Our Father", "tone": 4}, {"locus": "p13 AT THE LITURGY", "tone": 4}] }),
    kontakion: ms2("Finding thine all-revered temple * to be a source of healing for our souls, * we the faithful with a loud voice cry unto thee, * O greatly renowned maiden-Martyr (name), ** entreat Christ God unceasingly on behalf of us all.", "p9 Kontakion after Ode VI", { sourceLabel: "Kontakion, in Tone II", spec_mel: "Seeking the highest ...", tone: 2, verified_sites: [{"locus": "p9 after Ode VI", "tone": 2}, {"locus": "p13 AT THE LITURGY", "tone": 2}] }),
    // "our souls and bodies be may delivered" — inverted auxiliaries (sic).
    ikos: ms1("Having gathered together today let us worthily honor the Martyr of Christ (name), that by her intercessions, our souls and bodies be may delivered from all pestilence, earthquake and plague, and that we may pass our lives in humility, and thereby be granted to praise God together with all the saints that pleased Him in ages past, and to walk in the un-waning light. For Thou, O Savior, hast bedewed with Thy mercies all those who in faith praise her. Wherefore we cry unto her, unceasingly pray for us all.", "p9 Ikos", { sourceLabel: "The Ikos", label_inline: true }),

    vespers: {
      order: ['lic_rubric', 'lic', 'lic_closer', 'lic_stavrotheotokion',
              'idiomelon_rubric', 'lic_glory', 'dogmatikon_rubric', 'dogmatikon',
              'dogmatikon_alternate', 'dogmatikon_stavrotheotokion',
              'entrance_rubric', 'readings', 'aposticha_rubric', 'aposticha',
              'aposticha_glory', 'aposticha_closer_rubric', 'aposticha_closer_label',
              'aposticha_closer', 'aposticha_alternate', 'aposticha_stavrotheotokion',
              'troparion_rubric', 'troparion', 'closer', 'closing_rubric'],
      lic_rubric: ms1("On “Lord, I have cried ...,” the Stichera, in Tone IV:", "p1 LIC rubric"),
      lic: [
        ms2("Having adorned thy soul with the beauty of virginity * and the blood of martyrdom, * O glorious martyr (name), * thou hast handed thyself over unto thy Creator * Who indeed for ever preserveth thee incorrupt; * wherefore, O all-praised one, * thou hast been deemed worthy * to dwell together with the hosts of Angels and Archangels, ** and with the choirs of Apostles, Prophets and Martyrs.", "p1 LIC 1", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
        ms2("Tied to wheels of torture, * torn by ferocious beasts, * tortured both by fire and water, * thou didst illumine thy mind with the Divine Spirit, * and by the gushing forth of thy blood, manfully overcome the prince of darkness, * wherefore having reposed, * thou now dwellest in the noetic palaces, * bringing thy Martyrdom as a precious dowry ** unto thy Bridegroom, O martyr (name).", "p1 LIC 2", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
        ms2("Sanctified with the blood of Christ thy Bridegroom, * O all-famed martyr, * thou hast adorned the garment of thy flesh with thine own blood; * purifying both the inner and the outer man, * wherefore O most praiseworthy (name), * thou wast deemed worthy to dwell in Christ’s effulgent palaces; * beseech Him that those who in faith * celebrate thine all-honored memory ** may be delivered from corruption and every evil circumstance.", "p1 LIC 3", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
      ],
      lic_closer: ms2("Thy supplications unto the Lord, O most pure one, * are inexhaustible * and thine intercessions ceaseless, * wherefore I pray thee, overcome the attacks of the adversary * and subdue the passions of my wretched soul; * I implore thee O Maiden, * grant consolation unto my sorrowing heart * and grace to my soul ** that I may worthily glorify thee.", "p1 LIC closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone IV", tone: 4, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      // A THIRD RENDERING of the Apostle-family stavrotheotokion ("the
      // ewe-lamb who GAVE BIRTH TO Thee" for "who bore Thee") — and its
      // closing quotation mark is NEVER PRINTED: opened at "O my Son most
      // desired" and left open at "O Master?" (sic; the Martyr unclosed-
      // quotation class). Registered as a variant.
      lic_stavrotheotokion: ms2("Upon beholding Thee, the Lamb and Shepherd, upon the Tree, * the ewe-lamb who gave birth to Thee * lamented and maternally cried aloud to Thee: * “O my Son most desired, * How is it that Thou art suspended upon the Tree of the Cross, O Long-suffering One? * How have Thy hands and feet * been pierced with nails by the iniquitous, O Word! ** And how hast Thou shed Thy blood, O Master?", "p1 LIC Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      idiomelon_rubric: ms1("If an Idiomelon be appointed, Glory ..., in Tone VI:", "p1 idiomelon rubric"),
      // Reprinted as the post-Psalm-50 sessional (p7) in a SECOND SETTING —
      // martyr/Martyr, all-powerful/All-powerful, and the final break demoted
      // ** → *. One hymn, two positions, two settings (registered).
      lic_glory: ms2("At the right hand of the Savior standeth a virgin, * the great sufferer and martyr (name), * arrayed in unconquerable virtues, * adorned with purity and the blood of martyrdom, * joyfully holding her lamp and exclaiming unto Him: * “I have directed my steps according to Thy will, O Christ God, * since I was smitten with love for Thee; * send me not away, O Heavenly Bridegroom!” * Through her intercessions O all-powerful Savior ** send down upon us Thy great mercies.", "p1 Glory idiomelon", { sourceLabel: "If an Idiomelon be appointed, Glory ..., in Tone VI", tone: 6, label: "glory" }),
      // "the following Dogmatic OF Tone VI" — "of" where ten files print
      // "in". With the travelling "service ):" (sic).
      dogmatikon_rubric: ms1("If the Celebration be with a Polyeleos, and not a Resurrection Service, sing the following Dogmatic of Tone VI (If the service is a Resurrection service sing the Dogmatic of the Tone for that service ):", "p2 dogmatikon rubric"),
      // SEVENTH print site of the Tone VI dogmatic — six byte-identical
      // ("most blessed") against Apostle's lone divergence.
      dogmatikon: ms2("Who doth not call thee blessed, O most holy Virgin? * Who will not hymn thy most pure birthgiving? * For the only-begotten Son Who hath shone forth timelessly from the Father, * came forth, ineffably incarnate, from thee, O pure one; * By nature he is God, by nature for our sakes, he hath become a man * not divided into two Hypostases, * but known in two natures without commingling. * Him do thou beseech, O pure and most blessed one, ** that our souls find mercy!", "p2 Both now dogmatic", { sourceLabel: "Both now ..., in Tone VI", tone: 6, type: "dogmatic_theotokion", label: "both_now" }),
      dogmatikon_alternate: ms2("No one that fleeth unto thee, O most pure Virgin Theotokos, * departeth from thee ashamed; * for those that asketh grace of thee, ** ever receiveth a gift for their profitable petition.", "p2 Otherwise Theotokion", { sourceLabel: "Otherwise, Theotokion", type: "theotokion", label: "theotokion", label_inline: true }),
      // BYTE-IDENTICAL to Heirarchs' PRAISES stavrotheotokion — at the
      // dogmatic slot here. And THIS file's own praises print the same hymn
      // in a SECOND RENDERING (p12). Both registered.
      dogmatikon_stavrotheotokion: ms2("The most pure one seeing Thee hanging upon the cross * with maternal tears cried aloud to Thee: * “O my Son and God, * O my sweetest Child, * how is it that Thou sufferest ** such a shameful death?”", "p2 Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      entrance_rubric: ms1("The Entrance. The Prokeimenon of the day. The Three Lessons, if appointed.", "p2 entrance rubric"),
      // THREE lessons where the analysis census said ONE — Isaiah, then
      // Wisdom ×2 under BARE-NAME headings ("THE WISDOM OF SOLOMON") no
      // READING-keyed scan can see. The eighth census absence that was a
      // spelling, and this one was in the analysis's own lesson table.
      // Lesson 3 prints a THIRD RENDERING of the Wisdom 5 lesson ("The
      // righteous live unto the ages" against MonasticMartyrs' "for
      // evermore"; "instead of an helmet" where MM has no helmet clause).
      readings: [
        { heading: 'THE READING IS FROM ISAIAH',
          src: { file: MS, locus: 'p2 Lesson 1' },
          citation: { book: 'Isaiah', chapter: 43, verses: '9-14' },
          citation_basis: 'identified',
          provenance_note: 'No reference printed. The body is the Isaiah lesson Unmercenaries prints WITH the reference "(43, 9-14; )". Identified from that cross-file correspondence; the corpus round-trip refuses Isaiah (translation divergence, 0.11). Confirm against the page. Body ends "Thus saith the Lord. The Holy One of Israel" with no final stop.' },
        { heading: 'THE WISDOM OF SOLOMON',
          src: { file: MS, locus: 'p2-p3 Lesson 2' },
          citation: { book: 'Wisdom of Solomon', chapter: 3, verses: '3:1-3:9' },
          citation_basis: 'identified',
          provenance_note: 'BARE-NAME heading — no "READING" word for a scan to find. The body is the "souls of the righteous" lesson, derived at 3:1-9 in Monastic. Identified; confirm against the page.' },
        { heading: 'THE WISDOM OF SOLOMON',
          src: { file: MS, locus: 'p3 Lesson 3' },
          citation: { book: 'Wisdom of Solomon', chapter: 5, verses: '5:15-6:3' },
          citation_basis: 'identified',
          provenance_note: 'The "righteous live" lesson in a rendering DIFFERENT from MonasticMartyrs\' printing of the same pericope ("unto the ages" / "for evermore"; "true judgment instead of an helmet. He shall take holiness for an invincible shield" where MM reads "true judgment for an invincible shield"; "right-arming" for MM\'s "right-aiming"). R-4 stores no bodies; recorded here so the third rendering is not lost. Identified; confirm against the page.' },
      ],
      aposticha_rubric: ms1("On the Aposticha, these Stichera, in Tone IV:", "p3 Aposticha rubric"),
      aposticha: [
        ms2("Having manfully and wisely withstood * the raging of the tormentor * and his brazen cruelty, * thou, O divinely-wise one, * didst foresee the never-ending delights of the life to come; * which thou, O glorious one, hast worthily received, * having passed from earth * to the heavenly habitations, ** and into the everlasting heavenly choirs.", "p3 Aposticha 1", { spec_mel: "As one valiant among the martyrs ...", tone: 4, label: "plain" }),
        ms2("Wondrous is God in His saints, * the God of Israel.", "p3 Aposticha verse 1", { sourceLabel: "Verse", label: "refrain" }),
        ms2("Thou hast been deemed worthy * to behold the magnificence of the Kingdom * and the handsome comeliness of thy Bridegroom Christ, * for adorned with the wounds * of thine uncompromising martyrdom, * thou didst worthily approach the Source of all blessedness; * from Whom thou, O blessed one, * hast been richly rewarded ** with the fruits of divine joy and everlasting glory.", "p3 Aposticha 2", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
        ms2("In the Congregations bless ye God, the Lord, * from the wellsprings of Israel.", "p3 Aposticha verse 2", { sourceLabel: "Verse", label: "refrain" }),
        ms2("Neither the yoke of hard labor, * nor feminine weakness, * neither starvation nor painful wounds * could withhold thee, O all-praised one, * from exhibiting thy firm resolve in martyrdom, * and having joyfully suffered torments with thy fervent soul, * thou hast been adorned with a crown of grace, * ever abiding in the heavenly dwelling places, ** standing before thy Creator.", "p4 Aposticha 3", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
      ],
      // Reprinted byte-for-byte as the Doxasticon (p12) — sixth file with
      // the pattern.
      aposticha_glory: ms2("From thy youth thou hast loved Christ the King of glory, * wherefore He betrothed thee as a virgin bride unto Himself * in a pure unblemished union; * for of His own will He granted thee strength against adversaries and the passions, * and revealed thee to be invincible * in thine endurance of the most painful wounds and grievous torments, * adorning thee with a twofold crown * and placing thee on His right hand like a resplendent queen. * Pray Him, O thou honorable and long-suffering martyr (name), * that those who hymn thee be granted salvation, ** eternal life and great mercy.", "p4 Aposticha Glory", { sourceLabel: "Glory ..., in Tone V", tone: 5, label: "glory" }),
      // THE RUBRIC-THEN-LABEL INVERSION: the Polyeleos conditional prints
      // BEFORE the "Both now ..." label here — ten files print label first.
      // The order array records the page.
      aposticha_closer_rubric: ms1("If the Celebration be with a Polyeleos, chant the Resurrection Theotokion:", "p4 aposticha closer rubric"),
      aposticha_closer_label: ms1("Both now ..., in Tone V:", "p4 Both now label"),
      aposticha_closer: ms2("Thou art the temple and portal, * the palace and throne of the King, * O most honored Virgin, * through whom Christ the Lord, my Redeemer, * Who is the Sun of righteousness, * hath revealed Himself unto those who sleep in darkness, * deigning to enlighten those * whom He hath fashioned in His image by His own hand. * Wherefore, O all-hymned one, * as thou hast acquired a mother’s boldness before Him, ** entreat Him without ceasing, that our souls be saved.", "p4 Resurrection Theotokion", { tone: 5, type: "theotokion", label: "theotokion" }),
      // Byte-identical to Angels' PRAISES Both-now — another theotokion
      // migrating between slots (registered).
      aposticha_alternate: ms2("We bless thee, O Virgin Theotokos, * and we, the faithful, glorify thee as is meet, * thou unassailable city, * impregnable rampart, ** and steadfast intercession and refuge of our souls.", "p4 Otherwise Theotokion", { sourceLabel: "Otherwise, Theotokion", type: "theotokion", label: "theotokion", label_inline: true }),
      // "O my Son * How canst Thou die" — the missing-stop-after-Son class
      // (sic).
      aposticha_stavrotheotokion: ms2("Beholding her Lamb lifted up upon the Cross, * the Virgin and Maiden blessed by all, * cried aloud with tears: * “Woe is me, O my Son * How canst Thou die, being God, ** and immortal by nature?”", "p4 Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      // "; if there be none," — the drop-the-but form, second file.
      troparion_rubric: ms1("The Troparion from the Typicon; if there be none, chant the following:", "p4 troparion rubric"),
      closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8)." },
      closing_rubric: ms1("The Dismissal:", "p4 Dismissal"),
    },

    matins: {
      order: ['god_is_lord_rubric', 'troparion', 'troparion_closer',
              'sessional_1_rubric', 'sessional_1', 'sessional_1_closer',
              'sessional_2_rubric', 'sessional_2', 'sessional_2_closer',
              'megalynarion_rubric', 'megalynarion', 'megalynarion_verse',
              'sessional_polyeleos_rubric', 'sessional_polyeleos',
              'sessional_polyeleos_closer', 'anabathmoi_rubric', 'anabathmoi_intro',
              'anabathmoi', 'anabathmoi_closer', 'prokeimenon_rubric', 'prokeimenon',
              'prokeimenon_verse', 'gospel_rubric', 'gospel', 'psalm50_rubric',
              'psalm50_sticheron', 'psalm50_closer', 'psalm50_verse',
              'sessional_post50_rubric', 'sessional_post50', 'canon_rubric', 'canons',
              'sessional_ode3_rubric', 'sessional_ode3', 'sessional_ode3_closer',
              'sessional_ode3_stavrotheotokion', 'kontakion_rubric', 'kontakion', 'ikos',
              'exapostilarion_rubric', 'exapostilarion', 'exapostilarion_closer',
              'praises_rubric', 'praises', 'praises_glory', 'praises_closer',
              'praises_stavrotheotokion', 'great_doxology_rubric',
              'doxology_glory', 'doxology_closer_rubric', 'troparion_rubric',
              'troparion', 'closer', 'closing_rubric'],
      god_is_lord_rubric: ms1("On “God is the Lord ...,” the Troparion in Tone IV:", "p5 God is the Lord rubric"),
      troparion_closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8)." },
      sessional_1_rubric: ms1("After the 1st chanting of the Psalter, the Sessional Hymn, in Tone V:", "p5 sessional 1 rubric"),
      sessional_1: ms2("Piously giving thyself to the Almighty, * thou, O honored one, did not yield thyself to the will of the impious tyrant, * but firmly endured dark confinement and wounds from fire, * wherefore thou hast ascended unto God, O Divinely-wise Martyr (name). ** Pray for us who celebrate thy holy memory.", "p5 Sessional 1", { spec_mel: "The Co-beginningless Word ...", tone: 5, label: "plain", repeat: 2 }),
      sessional_1_closer: ms2("O fervent and invincible intercessor, * diligent and unashamed hope, * rampart, protection and haven * of those who have recourse to thee, * O pure Ever-virgin do thou, together with the angels, * entreat thy Son and God, ** that He grant peace, salvation and great mercy to the world.", "p5 Sessional 1 closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone V", tone: 5, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      // Spec. Mel. "Thy Tomb, O Savior ..." — a THIRD form of this melody's
      // name (Heirarch: "Thy Tomb O Savior"; Apostles: "Thy sepulcher O
      // Savior"). The melody-name drift, third instance.
      sessional_2_rubric: ms1("After the 2nd chanting of the Psalter, the Sessional Hymn, in Tone I:", "p5 sessional 2 rubric"),
      sessional_2: ms2("Thou, O honored one, * hast extinguished the fire of torments with the dew of the spirit, * and having now departed unto the divine and immaterial light * thou, O (name), dost besprinkle the faithful with drops of healing, * extinguishing the flame of the passions * by the power of the Spirit.", "p5 Sessional 2", { spec_mel: "Thy Tomb, O Savior ...", tone: 1, label: "plain", repeat: 2 }),
      sessional_2_closer: ms2("Do thou accept, O Theotokos, * the entreaties of thy servants, * and deliver us from every difficulty, * since thou hast given birth unto the Savior Christ, ** the Redeemer of our souls.", "p5 Sessional 2 closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone I", tone: 1, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      megalynarion_rubric: ms1("After the Polyeleos, the Megalynarion:", "p5 megalynarion rubric"),
      megalynarion: ms1("We magnify thee, O holy Martyr (name), and honor thy precious sufferings which thou didst endure for the sake of Christ.", "p5 Megalynarion", { label_inline: true }),
      // A FOURTH distinct megalynarion verse ("Our God is refuge and
      // strength").
      megalynarion_verse: ms1("Our God is refuge and strength, a helper in afflictions which mightily befall us.", "p5 Megalynarion verse", { sourceLabel: "Verse", label: "refrain" }),
      sessional_polyeleos_rubric: ms1("After the Polyeleos the Sessional Hymn, in Tone IV:", "p5 post-Polyeleos sessional rubric"),
      // "having adorning her heart" — doubled participle (sic). Spec. Mel.
      // cited long: "Having been lifted up upon the Cross ..." where
      // MonasticMartyrs cites "Having been lifted up ..." — melody-name
      // drift, fourth instance.
      sessional_polyeleos: ms2("Let us the multitude of the faithful with grace hymn (name), * who willingly came unto Christ * and having adorning her heart with virtues, * shamed the insolent tormentors, * shining forth like a sun in the midst of the lawless, * and after her repose appearing unto those on earth, ** confirming her sanctity and the power of God.", "p5-p6 post-Polyeleos Sessional", { spec_mel: "Having been lifted up upon the Cross ...", tone: 4, label: "plain", repeat: 2 }),
      sessional_polyeleos_closer: ms2("Having heard from the Angel the good-tidings * and having received in thy womb the Word * thou didst give birth to Emmanuel, * God Incarnate, ** do thou, O Theotokos, ever pray that our souls be saved.", "p6 post-Polyeleos Sessional closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone IV", tone: 4, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      anabathmoi_rubric: ms1("If of Polyeleos rank, and not a Resurrection Service, chant the following:", "p6 anabathmoi rubric"),
      anabathmoi_intro: ms1("The Song of Ascents: The first antiphon, in Tone IV:", "p6 anabathmoi heading"),
      anabathmoi: [
        ms2("From my youth * do many passions war against me; * but do Thou Thyself defend ** and save me, O my Savior.", "p6 Anabathmoi 1", { label: "plain" }),
        ms2("Ye haters of Zion * shall be shamed by the Lord; * for like grass, by the fire ** shall ye be withered.", "p6 Anabathmoi 2", { label: "plain" }),
      ],
      anabathmoi_closer: ms2("In the Holy Spirit, * every soul is quickened, * and, through cleansing, is exalted ** and made radiant by the Triple Unity in a hidden sacred manner.", "p6 Anabathmoi closer", { sourceLabel: "Glory ..., Both now ...,", type: "plain", label: ["glory", "both_now"] }),
      prokeimenon_rubric: ms1("Prokeimenon, in Tone IV:", "p6 prokeimenon rubric"),
      // Same text AND tone at both prokeimena (matins/liturgy) — §7.4
      // stays silent, correctly.
      prokeimenon: ms2("Wondrous is God in His saints, * the God of Israel.", "p6 Prokeimenon", { sourceLabel: "The Prokeimenon", tone: 4, label_inline: true }),
      prokeimenon_verse: ms1("In the Congregations bless ye God, the Lord, from the wellsprings of Israel.", "p6 Prokeimenon verse", { sourceLabel: "Verse", label: "refrain" }),
      gospel_rubric: ms1("Let every breath.", "p6 Let every breath"),
      gospel: { heading: 'THE GOSPEL ACCORDING TO ST. MATTHEW',
        src: { file: MS, locus: 'p6 Matins Gospel' },
        citation_verbatim: '(15: 21-28)',
        citation: { book: 'Matthew', chapter: 15, verses: '21-28' },
        citation_basis: 'printed',
        provenance_note: 'The body prints "their masters” table" — a closing curly quote for an apostrophe, the Moses”/demons” class, in unstored reading text.' },
      psalm50_rubric: ms1("After the 50th Psalm:", "p6 After the 50th Psalm"),
      psalm50_sticheron: ms2("Through the prayers of the Holy Martyr (name), * O Merciful One, ** blot out the multitude of our transgressions.", "p6 Psalm 50 Glory", { sourceLabel: "Glory ..., in Tone VI", tone: 6, label: "glory" }),
      psalm50_closer: ms2("Through the prayers of the Theotokos, * O Merciful One, ** blot out the multitude of our transgressions.", "p7 Psalm 50 Both now", { sourceLabel: "Both now ...,", type: "theotokion", label: "both_now" }),
      psalm50_verse: ms2("Have mercy on me, O God, * according to Thy great mercy; * and according to the multitude of Thy compassions, ** blot out my transgressions.", "p7 Psalm 50 verse", { label: "refrain" }),
      sessional_post50_rubric: ms1("Then the Sessional Hymn, in Tone VI:", "p7 post-Psalm-50 sessional rubric"),
      // THE IDIOMELON GLORY IN A SECOND SETTING — martyr/Martyr,
      // martyrdom/Martyrdom, "O all-powerful ** send" → "O All-powerful *
      // send". One hymn, two positions, two settings within one file
      // (registered as a variant).
      sessional_post50: ms2("At the right hand of the Savior standeth a virgin, * the great sufferer and Martyr (name), * arrayed in unconquerable virtues, * adorned with purity and the blood of Martyrdom, * joyfully holding her lamp and exclaiming unto Him: * “I have directed my steps according to Thy will, O Christ God, * since I was smitten with love for Thee; * send me not away, O Heavenly Bridegroom!” * Through her intercessions O All-powerful Savior * send down upon us Thy great mercies.", "p7 post-Psalm-50 Sessional", { tone: 6, label: "plain" }),
      canon_rubric: ms1("The Canon, in Tone VIII:", "p7 Canon rubric"),
      canons: [{
        title: "The Canon, in Tone VIII:", tone: 8,
        odes: {
          1: {
            irmos: ms2("Let us sing unto the Lord, * who led His people through the Red Sea: * for He alone hath gloriously been glorified.", "p7 Ode 1 irmos", { sourceLabel: "Irmos", label_inline: true }),
            refrain: ms1("Holy Martyr (name) pray to God for us", "p7 Ode 1 refrain", { sourceLabel: "Refrain", label_inline: true }),
            items: [
              ms1("By her wondrous actions the all-praised maiden (name) inspires the choirs of heavenly hosts above and those of us here on Earth below to hymn her holy deeds.", "p7 Ode 1 troparion 1", { label: "plain" }),
              ms1("The Master of all loved the beauty of thy most fair heart, O all-praised one, wherefore He hath made thee worthy to dwell in the heavenly dwellings.", "p7 Ode 1 troparion 2", { label: "plain" }),
              ms1("Thou, O Martyr, without fear underwent suffering, manifold wounds, and execution, taking with thee the sustaining grace of the Savior which helped thee to endure.", "p7 Ode 1 troparion 3", { label: "plain" }),
              ms1("We ever hymn thee, O most pure Theotokos, who above nature hast given birth unto the pre-eternal Incarnate and supremely divine Word.", "p7 Ode 1 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          3: {
            irmos: ms2("O Lord, thou art the confirmation of those who flee to Thee, * Thou art the Light of those in darkness, * and my spirit doth hymn Thee.", "p7 Ode 3 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              ms1("Thou O all-praised (name), didst appear before thy judges with a courageous soul, vanquishing the cowardly enemy.", "p7 Ode 3 troparion 1", { label: "plain" }),
              ms1("Sporting neither blemish in thy beauty, nor any failing in thy soul, Christ received thee as a fair bride in His incorruptible palaces.", "p7 Ode 3 troparion 2", { label: "plain" }),
              ms1("O all-praised Martyr of Christ (name), heal the scars of my soul, and by thine intercessions still the stormy seas of my life.", "p7 Ode 3 troparion 3", { label: "plain" }),
              ms1("All Orthodox Christians have acquired in thee a refuge and an unshakable rampart, wherefore we unceasingly magnify thee, O thou who knewest not wedlock.", "p8 Ode 3 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          4: {
            irmos: ms2("O Lord, I have heard the mystery of Thy dispensation; * I have considered Thy works, * and I have glorified Thy Divinity.", "p8 Ode 4 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              ms1("Presenting thyself as an unstained mirror of divine understanding, thou, O Martyr, doth shine forth in the midst of women sufferers like a golden lamp of priceless beauty.", "p8 Ode 4 troparion 1", { label: "plain" }),
              ms1("Thou didst not offer sacrifice unto the dumb demons, O invincible Martyr (name), but rather with love desired to receive a life-bestowing death for thy piety.", "p8 Ode 4 troparion 2", { label: "plain" }),
              ms1("With the other passion-bearers, O unblemished (name), thou didst bear upon thy body countless wounds, and yet remained without pangs through the manifestation of divine love.", "p8 Ode 4 troparion 3", { label: "plain" }),
              ms1("As the only Sinless One, grant deliverance from ignorance unto us, and peace to Thy world, O God, through the intercession of her who gave birth to Thee.", "p9 Ode 4 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          5: {
            irmos: ms2("Rising early we cry to Thee, O Lord; * save us, for Thou art our God, * and we know none other besides Thee.", "p9 Ode 5 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              ms1("Having learned the difference between the spiritual day and the darkness of the world, thou didst rebuke the contentious spirit.", "p9 Ode 5 troparion 1", { label: "plain" }),
              ms1("Imagining he would be able to weaken thy divine strength, O Martyr (name), the most cunning enemy hath only made himself a subject of derision.", "p9 Ode 5 troparion 2", { label: "plain" }),
              ms1("Grant unto me, O all-praised one, enlightenment and peace, and by thine intercessions disperse the great agitation and confusion that afflicts my soul.", "p9 Ode 5 troparion 3", { label: "plain" }),
              ms1("We hymn thee as a Virgin, O Theotokos, even after child-birth, for thou hast brought forth into the world God the Word in the flesh.", "p9 Ode 5 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          6: {
            irmos: ms2("O Thou that puttest on light as a garment * grant me also a robe of light, * O All-merciful Christ, our God.", "p9 Ode 6 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              ms1("Bearing valiant wisdom of mind while in thy feminine body, thou, O glorious one, didst not fear beasts of land and sea.", "p9 Ode 6 troparion 1", { label: "plain" }),
              ms1("Vanquishing the pride of thy tormentors, thy soul remained unharmed, O invincible Martyr, wherefore thou didst receive a crown of victory.", "p9 Ode 6 troparion 2", { label: "plain" }),
              ms1("As righteous and beautiful, as honorable and resplendent with the radiance of virginity, the Bridegroom, even the Lord, hath brought thee to Himself, O most glorious martyr.", "p9 Ode 6 troparion 3", { label: "plain" }),
              ms1("As the only one who hath given birth in the flesh unto the Word, we beseech thee to deliver our souls from the snares of the enemy.", "p9 Ode 6 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          7: {
            irmos: ms2("The Children of Judaea, * who of old came to dwell in Babylon, * trampled underfoot the flame of the furnace * through their faith in the Trinity, * as they sang: “O God of our fathers, blessed art Thou.”", "p10 Ode 7 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              ms1("The manly-courage of the divine Martyrs is beyond understanding, for the Creator of maketh His creation subject to those who in the midst of their suffering cry out: “O God of our Fathers, blessed art Thou.”", "p10 Ode 7 troparion 1", { label: "plain" }),
              ms1("The glorious maiden hath silenced the wicked mouths of her tormentors and subdued the pride of the lawless, while in the Holy Spirit she divinely sang: “O God of our Fathers, blessed art Thou.”", "p10 Ode 7 troparion 2", { label: "plain" }),
              ms1("Of old, the trio of devout youths burned those who superheated the fiery furnace; and now, as then, the Divinely-wise maiden, hymning the Trinity, inspires us to sing: “O God of our Fathers, blessed art Thou.”", "p10 Ode 7 troparion 3", { label: "plain" }),
              ms1("O Savior, when thou didst deign to accomplish our salvation; Thou didst enter the womb of the Virgin and reveal her to be a sure intercessor for all the world: “O God of our Fathers, blessed art Thou.”", "p10 Ode 7 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          8: {
            irmos: ms2("The King of heaven, * Who is glorified by the hosts of angels, * let us praise and supremely exalt throughout all ages.", "p10 Ode 8 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              ms1("The exceedingly blessed among women (name), having been rewarded with grace from the Most High, now hymneth, praising Christ throughout all ages.", "p10 Ode 8 troparion 1", { label: "plain" }),
              ms1("Strengthened by the thought of the Bridegroom and caring for things spiritual, thou didst give up thy body, even unto death, and inherited eternal life.", "p10 Ode 8 troparion 2", { label: "plain" }),
              ms1("The Bridegroom, mysteriously descending unto the most pure maiden in the furnace, hath, by the dew of the Holy Spirit, and in accordance with the good pleasure of the Father, saved her who hymneth Christ throughout all ages.", "p10 Ode 8 troparion 3", { label: "plain" }),
              ms1("Despise not, O pure Virgin; those that seek thine aid, and who chant and extol thee throughout all ages.", "p10 Ode 8 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          9: {
            irmos: ms2("With never ceasing praises we magnify thee, * the Mother of God Most High, * who art higher than the most pure hosts, * and who beyond comprehension knew not wedlock, * yet hath truly given birth to God.", "p10 Ode 9 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              ms1("From on high thou wast granted to understand that the flow of thy blood was a token of thy future incorruptible life, O all-praised martyr, wherefore thou hast appeared unto all who draw nigh to thee, to be an inexhaustible treasury of healings.", "p10 Ode 9 troparion 1", { label: "plain" }),
              ms1("In accordance with the law of nature, O divinely-wise one, thou didst suffer death, which thou didst willingly endure; and upon death, which was witnessed to by the flow of thine own blood, thine all-precious body was laid to rest remaining incorrupt.", "p10 Ode 9 troparion 2", { label: "plain" }),
              ms1("As the fairest bride of Christ and an illumining sun, as a truly chosen turtle-dove and as a fertile olive tree more comely than the cedars of Lebanon we all praise thee, O godly-revered (name).", "p11 Ode 9 troparion 3", { label: "plain" }),
              ms1("O bride who knewest not wedlock, receptacle of sweet fragrance, the true and immaculate Virgin and Mother who received in thy womb the heavenly rain descending from the cloud of light, thee do we magnify.", "p11 Ode 9 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
        },
      }],
      sessional_ode3_rubric: ms1("The Sessional Hymn, in Tone VIII:", "p8 post-Ode-III sessional rubric"),
      sessional_ode3: ms2("With the streams of thy blood * thou hast drowned the wicked, O all-praised Martyr of Christ, * and from joyous clouds of grace thou dost ever water the spiritual meadows, * rearing up therein the fruits of faith; * wherefore after thy repose thou hast appeared lustrously as a luminous cloud, * shedding forth the testimony of thy life. * O all-praised spiritual athlete (name), * pray to Christ God that those whom with love honor thy holy memory * be granted the remission of their sins.", "p8 post-Ode-III Sessional", { spec_mel: "Of the wisdom ...", tone: 8, label: "plain" }),
      // "All we, the generations" — FIFTH site (registered, chained); and
      // the ode-3 stav is byte-identical to Apostles' — the closer+stav pair
      // travels again.
      sessional_ode3_closer: ms2("All we, the generations of mankind, * call thee blessed, * in that thou art the Virgin who alone among women * hast given birth without seed unto God in the flesh; * for the fire of the Godhead made its abode within thee, * and thou didst feed the Creator and Lord * with milk as an infant. * Wherefore, we, the race of mankind and of angels, * worthily glorify thine all-holy birthgiving, * and together we cry out to thee: * Entreat Christ God to grant forgiveness of sins ** unto those who with faith worship thine all-holy Offspring.", "p8 post-Ode-III Sessional closer", { sourceLabel: "Glory ..., Both now ..., Theotokion in Tone VIII", tone: 8, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      sessional_ode3_stavrotheotokion: ms2("Upon beholding the Lamb, Shepherd and Redeemer * upon the Cross, * the ewe-lamb exclaimed weeping, bitterly lamenting, and crying aloud: * “The world rejoiceth, having received deliverance through Thee, * but my womb doth burn, beholding Thy crucifixion, * which Thou hast endured in Thy merciful loving-kindness. * O long-suffering Lord, * Thou abyss and inexhaustible well-spring of mercy, * take pity, and grant forgiveness of sins ** unto those who hymn Thy divine sufferings with faith!”", "p8 post-Ode-III Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      kontakion_rubric: ms1("The Kontakion from the Typicon; if there be none, chant the following:", "p9 kontakion rubric"),
      exapostilarion_rubric: ms1("Exapostilarion in Tone III:", "p11 exapostilarion rubric"),
      exapostilarion: ms2("As a bride betrothed to the Bridegroom * thou wast adorned with the virtuous desires of thy heart, * and as one chosen thou hast entered into the resplendent palaces on high, * as a maiden carrying the lamp of her virtues, O (name) * thou dost reign ever rejoicing with Him Who exists throughout all ages.", "p11 Exapostilarion", { tone: 3, label: "plain" }),
      exapostilarion_closer: ms2("Thee do we sinners have as our aid * O most pure Virgin. * By thy maternal supplications ** render thy Son reconciled with us.", "p11 Exapostilarion closer", { sourceLabel: "Glory ..., Both now ..., Theotokion in Tone III", tone: 3, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      // NO Spec. Mel. at the Praises — first file without one there.
      praises_rubric: ms1("On the Praises, these Stichera, in Tone III:", "p11 Praises rubric"),
      praises: [
        ms2("Beholding the God-pleasing celebration * of the martyr (name), * let us the faithful sing a hymn of thanksgiving unto our God * Who is wondrous in His saints. * For He hath vanquished the might of the enemy * with a weaker vessel, * and hath shown forth His divine power in the frailty of a virtuous woman, * for by her intercessions He saveth our souls.", "p11 Praises 1", { tone: 3, label: "plain", repeat: 2 }),
        // "proclaming" — dropped i (sic).
        ms2("Having mingled the cup of truth with the blood of martyrdom, * the all-praised Martyr of Christ (name), * doth ever offer words of wisdom to those who are wisely gathered by her, proclaming: * “Draw from the nectar of martyrdom, * given to you as a pledge of the Resurrection”, * for it driveth away unbelievers and purifieth the passions, * and preserveth the souls of the devout who call upon the Savior exclaiming: * “Thou Who hast filled us with the sweet streams of the grace of the Spirit, save our souls.”", "p11 Praises 2", { label: "plain" }),
        // The closing quote of "O Lord, who art glorified …" is NEVER
        // printed (sic — the unclosed-quotation class, second site in this
        // file).
        ms2("Let us, whose souls have been sealed by the blood of Christ’s redemption, * with joy draw spiritual inspiration from the holy well-spring of martyrdom, * which prefigureth both the life-bearing passion of our Savior * and eternal glory; * let us cry out unto Him; * “O Lord, who art glorified in thy saints, * through the intercessions of Thy most glorious passion-bearer (name) save our souls.", "p11-p12 Praises 3", { label: "plain" }),
      ],
      // "flesh. * by thine intercessions" — lowercase after a full stop
      // (sic, the Apostle class).
      praises_glory: ms2("Proceeding along the path of martyrdom, * thou, O all-honored (name), * hast escaped the counsels of the tyrant; * for, as a wise maiden, thou hast entered into the courts of thy Lord * carrying the lamp of thy virtues, * and since thou art a valiant Martyr * thou hast been granted the grace to cure the passions of the flesh. * by thine intercessions before God, * also cure us who hymn thee, of spiritual infirmities.", "p12 Praises Glory", { sourceLabel: "Glory ..., in Tone VI", tone: 6, label: "glory" }),
      praises_closer: ms2("We have come to know God * Who was incarnate of thee, * O Virgin Theotokos. ** Him do thou entreat for the salvation of our souls.", "p12 Praises Both now", { sourceLabel: "Both now ..., Theotokion in Tone VI", tone: 6, type: "theotokion", label: ["both_now", "theotokion"] }),
      // A SECOND RENDERING of the hymn this file prints at the dogmatic
      // slot (byte-identical there to Heirarchs' praises stav): "how dost
      // Thou endure this shameful suffering" against "how is it that Thou
      // sufferest such a shameful death". One hymn, two renderings, one file
      // (registered).
      praises_stavrotheotokion: ms2("Upon seeing Thee hanging upon the Cross * the most pure one weeping, cried aloud with a mother’s grief: * “O my Son and my God, O my sweetest Child, ** how dost Thou endure this shameful suffering?”", "p12 Praises Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      great_doxology_rubric: ms1("The great Doxology: If a small Doxology is read, and a Doxasticon is appointed, the following is chanted after the Aposticha:", "p12 great Doxology rubric"),
      doxology_glory: ms2("From thy youth thou hast loved Christ the King of glory, * wherefore He betrothed thee as a virgin bride unto Himself * in a pure unblemished union; * for of His own will He granted thee strength against adversaries and the passions, * and revealed thee to be invincible * in thine endurance of the most painful wounds and grievous torments, * adorning thee with a twofold crown * and placing thee on His right hand like a resplendent queen. * Pray Him, O thou honorable and long-suffering martyr (name), * that those who hymn thee be granted salvation, ** eternal life and great mercy.", "p12 Doxology Glory", { sourceLabel: "Glory ..., in Tone V", tone: 5, label: "glory" }),
      doxology_closer_rubric: ms1("Both now ..., Theotokion or Stavrotheotokion:", "p12 Doxology Both now"),
      troparion_rubric: ms1("After Our Father ..., the Troparion, in Tone IV:", "p12 after Our Father"),
      closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8)." },
      closing_rubric: ms1("The Dismissal:", "p12 Dismissal"),
    },

    liturgy: {
      order: ['beatitudes_rubric', 'beatitudes', 'propers_rubric', 'troparion',
              'kontakion', 'prokeimenon', 'prokeimenon_verse', 'epistle',
              'alleluia', 'alleluia_verse', 'gospel', 'communion_verse'],
      beatitudes_rubric: ms1("Typika and Beatitudes.", "p13 Typika and Beatitudes"),
      // Seven of seven byte-identical, no (Twice) — NINE files identical,
      // two variant.
      beatitudes: [
        ms1("Thou O all-praised (name), didst appear before thy judges with a courageous soul, vanquishing the cowardly enemy.", "p13 Beatitude 1", { label: "plain" }),
        ms1("Sporting neither blemish in thy beauty, nor any failing in thy soul, Christ received thee as a fair bride in His incorruptible palaces.", "p13 Beatitude 2", { label: "plain" }),
        ms1("O all-praised Martyr of Christ (name), heal the scars of my soul, and by thine intercessions still the stormy seas of my life.", "p13 Beatitude 3", { label: "plain" }),
        ms1("Bearing valiant wisdom of mind while in thy feminine body, thou, O glorious one, didst not fear beasts of land and sea.", "p13 Beatitude 4", { label: "plain" }),
        ms1("Vanquishing the pride of thy tormentors, thy soul remained unharmed, O invincible Martyr, wherefore thou didst receive a crown of victory.", "p13 Beatitude 5", { label: "plain" }),
        ms1("As righteous and beautiful, as honorable and resplendent with the radiance of virginity, the Bridegroom, even the Lord, hath brought thee to Himself, O most glorious martyr.", "p13 Beatitude 6", { label: "plain" }),
        ms1("As the only one who hath given birth in the flesh unto the Word, we beseech thee to deliver our souls from the snares of the enemy.", "p13 Beatitude 7", { label: "theotokion", sourceLabel: "Theotokion", label_inline: true }),
      ],
      // "The Troparion and THE Kontakion" — a NINTH wording of the
      // conditional.
      propers_rubric: ms1("The Troparion and the Kontakion from the Typicon; but if there be none, chant the following:", "p13 propers rubric"),
      prokeimenon: ms2("Wondrous is God in His saints, * the God of Israel.", "p13 Liturgy Prokeimenon", { sourceLabel: "The Prokeimenon", tone: 4, label_inline: true }),
      prokeimenon_verse: ms1("In the Congregations bless ye God, the Lord, from the wellsprings of Israel.", "p13 Liturgy Prokeimenon verse", { sourceLabel: "Verse", label: "refrain" }),
      // "THE 2nd EPISTLE TO THE CORINTHIANS" — no "OF ST. PAUL": a new
      // heading form.
      epistle: { heading: 'THE 2nd EPISTLE TO THE CORINTHIANS',
        src: { file: MS, locus: 'p13-p14 Epistle' },
        citation_verbatim: '(6:1-10)',
        citation: { book: '2 Corinthians', chapter: 6, verses: '1-10' },
        citation_basis: 'printed' },
      alleluia: ms2("I waited patiently for the Lord, and He was attentive unto me, * and hearkened unto my supplication.", "p14 Alleluia", { sourceLabel: "Alleluia, in Tone I", tone: 1, label_inline: true }),
      alleluia_verse: ms1("And he brought me out of the pit of misery, out of the mire of clay.", "p14 Alleluia verse", { sourceLabel: "Verse", label: "refrain" }),
      // "ST. MARK: (5:24-34)" — a COLON after the evangelist's name inside
      // the heading (sic).
      gospel: { heading: 'THE GOSPEL ACCORDING TO ST. MARK:',
        src: { file: MS, locus: 'p14 Liturgy Gospel' },
        citation_verbatim: '(5:24-34)',
        citation: { book: 'Mark', chapter: 5, verses: '24-34' },
        citation_basis: 'printed' },
      // The martyric communion verse in a THIRD form — comma for the
      // semicolon, lowercase r — and it ends with NO final stop: the page's
      // last character is "upright" (sic; registered as a variant against
      // MonasticMartyrs' form).
      communion_verse: ms1("Rejoice in the Lord, O ye righteous, praise is meet for the upright", "p14 Communion Verse", { sourceLabel: "Communion Verse", label_inline: true }),
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Martyresses.pdf — 15pp. (names) ×2, no singular token — as
  // GENERAL_TAKES_NAME attests. Extraction proven by ELEVEN byte-matches;
  // no doubled runs, no homoglyphs; page markers stripped at flatten.
  //
  // THE PAIR-FILE FINDINGS:
  //  • ONE GLORY, THREE PRINT SITES, TWO FORMS: "Setting aside as transient"
  //    prints as the aposticha Glory, byte-identically as the Doxasticon —
  //    and REORDERED as the post-Psalm-50 sessional ("you were moved by the
  //    fairness of His beauty, * to devote" → "by the fairness of His
  //    beauty, * you were moved to devote"; "passion-bearers" → "ones").
  //    The Martyress lic-glory/post-50 pattern, now with a third site.
  //  • A SESSIONAL THAT ENDS MID-FORMULA: sessional 1 closes "… and
  //    inherited eternal Glory ...," — the label formula bled into hymn text
  //    where "eternal glory." belongs (sic). The file then prints the real
  //    closer label on the next line.
  //  • "call the blessed" for "call thee blessed" — in the Ode VI Theotokion
  //    AND copied exactly to Beatitude 7: the canon-to-Beatitudes
  //    transmission carrying its defect, sixth file of evidence.
  //  • The 444-family "at Thy" form arrives BYTE-IDENTICAL at a FOURTH site
  //    (the aposticha stav here; LIC in Martyrs/Heirarchs) — while the LIC
  //    stav is byte-identical to APOSTLE's copy, closure and all. Texts
  //    migrate; defects travel; the file is assembled from circulating
  //    stock.
  //  • The DOXOLOGY block prints Glory + "Otherwise, Theotokion" with FULL
  //    TEXT (the "inextinguishable lamp", byte-identical to its p4 site) and
  //    NO conditional label — a new doxology shape (doxology_alternate).
  //  • Beatitudes seven of seven identical — TEN files identical, two
  //    variant.
  Martyresses: {
    title: mx1("THE VIGIL SERVICE COMMON TO TWO OR MORE FEMALE MARTYRS.", "p1 title"),
    troparion: mx2("As rational sheep of Christ, the Lamb and the Shepherd, * you undertook the struggle of Martyrdom, * and finishing your course ye have preserved the faith, * wherefore, O right worthy Passion-bearers, * with gladsome hearts we celebrate today ** your holy memory, magnifying Christ.", "p4 Troparion", { sourceLabel: "Troparion, in Tone I", tone: 1, verified_sites: [{"locus": "p4 Vespers dismissal", "tone": 1}, {"locus": "p5 God is the Lord", "tone": 1, "repeat": 2}, {"locus": "p13 after Our Father", "tone": 1}, {"locus": "p14 AT THE LITURGY", "tone": 1}] }),
    kontakion: mx2("We who celebrate the feast of Christ’s martyred spiritual athletes * now pray in faith that we be granted their aid, * crying out; “God, Who hath willed to glorify His maiden martyrs, is with us.”", "p10 Kontakion after Ode VI", { sourceLabel: "Kontakion, in Tone IV", spec_mel: "Thou hast appeared ...", tone: 4, verified_sites: [{"locus": "p10 after Ode VI", "tone": 4}, {"locus": "p14 AT THE LITURGY", "tone": 4}] }),
    // The Ikos is the post-Ode-III sessional in a SECOND RENDERING
    // ("valiant feats … wondrous memory crying out" against the sessional's
    // "valiant endeavors … wondrous memorial") — registered.
    ikos: mx1("Having acquired a source of miracles in you, O most praiseworthy maiden Martyrs of Christ, we have been granted an abundance of healings, wherefore we praise your sufferings and divine zeal, your wounds and valiant feats, and to the glory of our God celebrate your wondrous memory crying out: “God, Who willed to glorify His maiden Martyrs, is with us.”", "p10 Ikos", { sourceLabel: "Ikos", label_inline: true }),

    vespers: {
      order: ['lic_rubric', 'lic', 'lic_closer', 'lic_stavrotheotokion',
              'idiomelon_rubric', 'lic_glory', 'dogmatikon_rubric', 'dogmatikon',
              'dogmatikon_alternate', 'dogmatikon_stavrotheotokion',
              'entrance_rubric', 'readings', 'aposticha_rubric', 'aposticha',
              'aposticha_glory', 'aposticha_closer_label', 'aposticha_closer_rubric',
              'aposticha_closer', 'aposticha_alternate', 'aposticha_stavrotheotokion',
              'troparion_rubric', 'troparion', 'closer', 'closing_rubric'],
      lic_rubric: mx1("On “Lord, I have cried ...,” the Stichera, in Tone IV:", "p1 LIC rubric"),
      lic: [
        mx2("United by love * and sustained by devotion to their Creator * the virgin-maidens, by faith, * were freed from attachment to the flesh; * valiantly trampling the impotent enemy under their feet, * and became resplendently adorned * with the honors of victors * and now rejoice, having made their abode ** in the noetic bridal chambers.", "p1 LIC 1", { spec_mel: "Thou hast given a sign ...", label: "plain" }),
        mx2("The all-honored and comely maidens * endured fire * and a multitude of tortures, even death. * Possessing the fairest beauty * and faith in the Bridegroom, * adorned with a multitude of wounds, * they were numbered with His elect; * wherefore Jesus, the Lover of mankind and Savior of our souls, ** hath crowned them with spiritual gifts.", "p1 LIC 2", { spec_mel: "Thou hast given a sign ...", label: "plain" }),
        mx2("O virtuous maidens, * you have brought unto Christ * your most wondrous virginity, * and with manly understanding, * by the power of the Cross, * ye have overcome the deceptive allure of idolatry; * wherefore all the Churches of Christ * celebrate your holy memory, ** O radiant and most glorious Martyrs.", "p1 LIC 3", { spec_mel: "Thou hast given a sign ...", label: "plain" }),
      ],
      // Byte-identical to Martyress's LIC closer — the singular/plural pair
      // sharing its theotokion (registered).
      lic_closer: mx2("Thy supplications unto the Lord, O most pure one, * are inexhaustible * and thine intercessions ceaseless, * wherefore I pray thee, overcome the attacks of the adversary * and subdue the passions of my wretched soul; * I implore thee O Maiden, * grant consolation unto my sorrowing heart * and grace to my soul ** that I may worthily glorify thee.", "p1 LIC closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone IV", tone: 4, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      // Byte-identical to APOSTLE's LIC stavrotheotokion, closure and all —
      // where the singular Martyress prints a THIRD rendering of this hymn
      // with the quote left open. Registered.
      lic_stavrotheotokion: mx2("Upon beholding Thee, * the Lamb and Shepherd, upon the Tree, * the ewe-lamb who bore Thee lamented, * and maternally exclaimed to Thee: * “O most desired Son, * how is it that Thou art suspended upon the tree of the Cross? * How is it that Thine arms and legs are nailed * by the iniquitous ones, O long-suffering Word, ** and that Thou hast shed Thy blood, O Master?”", "p1 LIC Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      idiomelon_rubric: mx1("If an Idiomelon be appointed, Glory ..., in Tone VIII:", "p1 idiomelon rubric"),
      lic_glory: mx2("Let every tongue be moved to praise * the all-famed and meek martyrs; * let every generation, old and young, * youths and maidens, * adore the great martyrs of Christ; * for having exerted themselves lawfully and put aside the weakness of their flesh, * they crushed the tormenting enemy, * and now adorned with heavenly and divine crowns * in reward for their labors of martyrdom, ** they entreat their Bridegroom and God to grant us great mercy.", "p1 Glory idiomelon", { sourceLabel: "If an Idiomelon be appointed, Glory ..., in Tone VIII", tone: 8, label: "glory" }),
      // "service):" CLOSED UP — the Heirarchs setting of the travelling
      // defect; second file to close it.
      dogmatikon_rubric: mx1("If the Celebration be with a Polyeleos, and not a Resurrection Service, sing the following Dogmatic in Tone VIII (If the service is a Resurrection service sing the Dogmatic of the Tone for that service):", "p2 dogmatikon rubric"),
      // FOURTH byte-identical site of the Tone VIII dogmatic — the second
      // family still travelling intact.
      dogmatikon: mx2("In His love for mankind, the King of heaven appeared on earth * and dwelt among men; * for He Who received flesh from the pure Virgin * and cameth forth from her having received human nature, * is the only Son of God, * twofold in nature but not Hypostasis. * Therefore, proclaiming Him to be truly perfect God and perfect man, * we confess Christ our God. * Him do thou beseech, O unwedded Mother, ** that our souls find mercy!", "p2 Both now dogmatic", { sourceLabel: "Both now ..., in Tone VIII", tone: 8, type: "dogmatic_theotokion", label: "both_now" }),
      // Byte-identical to Heirarch's aposticha alternate ("O Sovereign
      // lady") — sixth migrating theotokion (registered).
      dogmatikon_alternate: mx2("O Sovereign lady, * accept the supplications of thy servants, ** and deliver us from all want and grief.", "p2 Otherwise Theotokion", { sourceLabel: "Otherwise, Theotokion", type: "theotokion", label: "theotokion", label_inline: true }),
      // Unpointed prose on the page — Tier 1.
      dogmatikon_stavrotheotokion: mx1("When the most pure one beheld Thee hanging on the Cross in the flesh, her heart was pierced, and with tears she cried aloud: “O Word, whence hast Thou gone, O my most beloved Son and Lord; leave me not alone who hath given birth to Thee O Christ.”", "p2 Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      entrance_rubric: mx1("The Entrance. The Prokeimenon of the day. The Three Lessons, if appointed.", "p2 entrance rubric"),
      // The Martyress lesson set with FULL "THE READING IS FROM" headings on
      // all three (where the singular file printed two bare-name headings).
      // Lesson 3's body corrupts "a stone bow" into "a sin Tone bow" —
      // unstored reading text, recorded here.
      readings: [
        { heading: 'THE READING IS FROM ISAIAH',
          src: { file: MX, locus: 'p2 Lesson 1' },
          citation: { book: 'Isaiah', chapter: 43, verses: '9-14' },
          citation_basis: 'identified',
          provenance_note: 'No reference printed. The Unmercenaries Isaiah lesson (printed there with "(43, 9-14; )"). Identified from the correspondence; the corpus round-trip refuses Isaiah. Body ends "Thus saith the Lord. The Holy One of Israel" with no final stop, as in Martyress.' },
        { heading: 'THE READING IS FROM THE WISDOM OF SOLOMON',
          src: { file: MX, locus: 'p2-p3 Lesson 2' },
          citation: { book: 'Wisdom of Solomon', chapter: 3, verses: '3:1-3:9' },
          citation_basis: 'identified',
          provenance_note: 'The "souls of the righteous" lesson, derived at 3:1-9 in Monastic. Identified; confirm against the page.' },
        { heading: 'THE READING IS FROM THE WISDOM OF SOLOMON',
          src: { file: MX, locus: 'p3 Lesson 3' },
          citation: { book: 'Wisdom of Solomon', chapter: 5, verses: '5:15-6:3' },
          citation_basis: 'identified',
          provenance_note: 'The "righteous live unto the ages" rendering, as in Martyress. The body prints "cast as out of a sin Tone bow" where the sense is "a stone bow" — the wildest body corruption yet seen, in unstored reading text (R-4). Identified; confirm against the page.' },
      ],
      aposticha_rubric: mx1("On the Aposticha, these Stichera, in Tone IV:", "p3 Aposticha rubric"),
      aposticha: [
        mx2("The choirs of Angels stood in amazement at your wholehearted zeal, * divine love and your unity in sufferings, O blessed ones, * for having manfully conquered the invisible enemy by your united struggles, * ye have worthily and readily received crowns of victory * from the life-bearing Hand of the Savior.", "p3 Aposticha 1", { spec_mel: "As one valiant among the martyrs ...", tone: 4, label: "plain" }),
        mx2("Wondrous is God in His saints, * the God of Israel.", "p3 Aposticha verse 1", { sourceLabel: "Verse", label: "refrain" }),
        mx2("By the machinations of a furious falsehood * you were put to death for the sake of Christ, * but by extinguishing the flame of vanity, * and keeping the flame of your soul’s lamps lit, * ye have entered together into the heavenly palace of Christ; * wherefore, we all, enlightened by your grace, * reverently hymn your holy memory, O great sufferers.", "p3 Aposticha 2", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
        mx2("In the Congregations bless ye God, the Lord, * from the wellsprings of Israel.", "p4 Aposticha verse 2", { sourceLabel: "Verse", label: "refrain" }),
        mx2("Enduring much suffering and a multitude of tortures, * and resolutely withstanding them O all-praised ones, * you were translated and admitted into the glory of the never-waning effulgence, * and divine and everlasting enjoyment; * wherefore we bless you and commemorate your holy memory, * most blessed and godly passion-bearers.", "p4 Aposticha 3", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
      ],
      // THREE print sites of this Glory: byte-identical as the Doxasticon
      // (p13), REORDERED as the post-Psalm-50 sessional (p7). Registered
      // both ways.
      aposticha_glory: mx2("Setting aside as transient * O all-famed martyrs, * the pleasures of temporal life, * the delight of food and the glory of prosperity, * you were moved by the fairness of His beauty, * to devote yourselves to Christ in martyrdom, * wherefore He hath received you as sweetest and most fragrant roses * and adorned you with crowns in His eternal Kingdom, * O godly-proclaimed passion-bearers.", "p4 Aposticha Glory", { sourceLabel: "Glory ..., in Tone IV", tone: 4, label: "glory" }),
      aposticha_closer_label: mx1("Both now ..., in Tone IV:", "p4 Both now label"),
      aposticha_closer_rubric: mx1("If the Celebration be with a Polyeleos, chant the Resurrection Theotokion:", "p4 aposticha closer rubric"),
      // Byte-identical to Apostles' Resurrection Theotokion ("Mercifully
      // regard") — seventh migrating theotokion (registered).
      aposticha_closer: mx2("Mercifully regard the supplications of thy servants, * O all-immaculate one, * quelling the cruel uprisings of the demons against us, * delivering us from every sorrow; * for thee alone do we have as a steadfast and sure confirmation, * and having acquired thine intercession; * let not us who call upon thee be put to shame, * O Sovereign Lady. * Hasten thou to answer the entreaties of those who cry out to thee with faith: * Rejoice, thou help, joy and protection of all, ** and the salvation of our souls!", "p4 Resurrection Theotokion", { tone: 4, type: "theotokion", label: "theotokion" }),
      // Reprinted with FULL TEXT at the Doxology block (p13) — registered as
      // the intra-file identical pair.
      aposticha_alternate: mx2("O thou inextinguishable lamp, * and throne of righteousness * most pure Sovereign Lady: ** pray thou that our souls be saved.", "p4 Otherwise Theotokion", { sourceLabel: "Otherwise, Theotokion", type: "theotokion", label: "theotokion", label_inline: true }),
      // THE 444-FAMILY "at Thy" FORM, BYTE-IDENTICAL — fourth print site
      // (Martyrs and Heirarchs print it at the LIC; here at the aposticha).
      aposticha_stavrotheotokion: mx2("Seeing Christ, the Lover of mankind, * crucified and with His side pierced with a lance, * the most pure one lamented, crying aloud: * “What is this, O my Son ? * What have the ungrateful people rendered unto Thee * in return for all the good things Thou hast rendered unto them ?” * And yet thou dost show thy tender compassion for me, * that I may endure my childlessness. ** I stand in awe, O Compassionate One, at Thy voluntary crucifixion.", "p4 Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      troparion_rubric: mx1("The Troparion from the Typicon; if there be none, chant the following:", "p4 troparion rubric"),
      closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8)." },
      closing_rubric: mx1("The Dismissal:", "p4 Dismissal"),
    },

    matins: {
      order: ['god_is_lord_rubric', 'troparion', 'troparion_closer',
              'sessional_1_rubric', 'sessional_1', 'sessional_1_closer',
              'sessional_2_rubric', 'sessional_2', 'sessional_2_closer',
              'megalynarion_rubric', 'megalynarion', 'megalynarion_verse',
              'sessional_polyeleos_rubric', 'sessional_polyeleos',
              'sessional_polyeleos_closer', 'anabathmoi_rubric', 'anabathmoi_intro',
              'anabathmoi', 'anabathmoi_closer', 'prokeimenon_rubric', 'prokeimenon',
              'prokeimenon_verse', 'gospel_rubric', 'gospel', 'psalm50_rubric',
              'psalm50_sticheron', 'psalm50_closer', 'psalm50_verse',
              'sessional_post50_rubric', 'sessional_post50', 'canon_rubric', 'canons',
              'sessional_ode3_rubric', 'sessional_ode3', 'sessional_ode3_closer',
              'sessional_ode3_stavrotheotokion', 'kontakion_rubric', 'kontakion', 'ikos',
              'exapostilarion_rubric', 'exapostilarion', 'exapostilarion_closer',
              'praises_rubric', 'praises', 'praises_glory', 'praises_closer',
              'praises_stavrotheotokion', 'great_doxology_rubric',
              'doxology_glory', 'doxology_alternate', 'troparion_rubric',
              'troparion', 'closer', 'closing_rubric'],
      god_is_lord_rubric: mx1("On “God is the Lord ...,” the Troparion, in Tone I:", "p5 God is the Lord rubric"),
      troparion_closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8)." },
      // Spec. Mel. "Thy tomb O Savior ..." — a FOURTH form of the melody's
      // name (Tomb/tomb/sepulcher, with and without comma). And the sessional
      // ENDS MID-FORMULA: "… and inherited eternal Glory ...," — the label
      // ellipsis where "eternal glory." belongs (sic).
      sessional_1_rubric: mx1("After the 1st chanting of the Psalter, the Sessional Hymn, in Tone I:", "p5 sessional 1 rubric"),
      sessional_1: mx2("Burning with the fire of divine desire, * O blessed ones, * you remained unburned by immersion in material fire, * rather, by those flames, you scorched the beguilement of idolatry, * and having suffered numerous merciless tortures, O ever-memorable Martyrs, * you attained the desire of your hearts * and inherited eternal Glory ...,", "p5 Sessional 1", { spec_mel: "Thy tomb O Savior ...", tone: 1, label: "plain", repeat: 2 }),
      sessional_1_closer: mx2("O most blessed Mary, * thou who knew not wedlock, * God’s dwelling place, and the refuge of despairing mankind, * set upon the path of repentance, * we who constantly turn to the path of self-will, ** and thereby anger the Most kind Lord.", "p5 Sessional 1 closer", { sourceLabel: "Glory ..., Both now ..., Theotokion:", type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      sessional_2_rubric: mx1("After the 2nd chanting of the Psalter, the Sessional Hymn, in Tone IV:", "p5 sessional 2 rubric"),
      sessional_2: mx2("The choirs of the bodiless powers of heaven * stood awestruck by your endurance; * For it seemed as if ye were witnessing the sufferings of others, * even though your own legs and joints were broken * and ye suffered a most bitter death, * you destroyed the apostate serpent with your fragile bodies, * O ye virgins and brides of the Giver of Life, ** champions of the faith.", "p5 Sessional 2", { spec_mel: "Joseph marveled ...", tone: 4, label: "plain", repeat: 2 }),
      sessional_2_closer: mx2("As he contemplated that which was beyond nature * Joseph was struck with wonder O Theotokos, at thy conception without seed. * He contemplated the mysterious dew upon the fleece, * the bush un-burnt by fire, * Aaron’s rod which budded. * Thus thy Betrothed and guardian bore witness and cried unto the priests saying: * A Virgin beareth a child, ** and after child-birth remaineth yet a virgin.", "p5 Sessional 2 closer", { sourceLabel: "Glory ..., Both now ..., Theotokion:", type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      megalynarion_rubric: mx1("After the Polyeleos, the Megalynarion:", "p5 megalynarion rubric"),
      megalynarion: mx1("We magnify you, O holy Martyrs, and honor your precious sufferings which you endured for the sake of Christ.", "p5 Megalynarion", { label_inline: true }),
      // Byte-identical to Martyress's verse — the pair share their
      // megalynarion psalm.
      megalynarion_verse: mx1("Our God is refuge and strength, a helper in afflictions which mightily befall us.", "p5 Megalynarion verse", { sourceLabel: "Verse", label: "refrain" }),
      sessional_polyeleos_rubric: mx1("After the Polyeleos, the Sessional Hymn, in Tone VIII:", "p6 post-Polyeleos sessional rubric"),
      // "Betrothed unto the Lord * In a right godly manner" — capitalised
      // preposition mid-phrase (sic).
      sessional_polyeleos: mx2("Betrothed unto the Lord * In a right godly manner, * ye passion-bearing maidens brought unto Him your blood and your self-sacrifice * as a most precious dowry, * with which you inherited a place in the divine palaces on high * unceasingly partaking of the most ineffable illumination; * wherefore, worthily celebrating your holy and honorable memory, * we glorify our Savior and in faith cry aloud: * “Beseech Christ God that He grant remission of sins to those who with love honor your holy memory.”", "p6 post-Polyeleos Sessional", { spec_mel: "Of the wisdom ...", tone: 8, label: "plain", repeat: 2 }),
      sessional_polyeleos_closer: mx2("By the prayers of Thy bodiless ones, O Christ, * and the Forerunner, * of the disciples, prophets and martyrs, * of all Thy saints and venerable ones, * and of Thy blessed Mother, * we beseech Thee; grant us to walk in Thy light, * and deem us worthy to receive Thy Kingdom ** for the sake of Thy compassionate mercy.", "p6 post-Polyeleos Sessional closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone VIII", tone: 8, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      anabathmoi_rubric: mx1("If of Polyeleos rank, and not a Resurrection Service, chant the following:", "p6 anabathmoi rubric"),
      anabathmoi_intro: mx1("The Song of Ascents: The first antiphon, in Tone IV:", "p6 anabathmoi heading"),
      anabathmoi: [
        mx2("From my youth * do many passions war against me; * but do Thou Thyself defend ** and save me, O my Savior.", "p6 Anabathmoi 1", { label: "plain" }),
        mx2("Ye haters of Zion * shall be shamed by the Lord; * for like grass, by the fire ** shall ye be withered.", "p6 Anabathmoi 2", { label: "plain" }),
      ],
      anabathmoi_closer: mx2("In the Holy Spirit, * every soul is quickened, * and, through cleansing, is exalted ** and made radiant by the Triple Unity in a hidden sacred manner.", "p6 Anabathmoi closer", { sourceLabel: "Glory ..., Both now ...,", type: "plain", label: ["glory", "both_now"] }),
      prokeimenon_rubric: mx1("Prokeimenon, in Tone IV:", "p6 prokeimenon rubric"),
      prokeimenon: mx2("Wondrous is God in His saints, * the God of Israel.", "p6 Prokeimenon", { sourceLabel: "The Prokeimenon", tone: 4, label_inline: true }),
      prokeimenon_verse: mx1("In the Congregations bless ye God, the Lord, from the wellsprings of Israel.", "p6 Prokeimenon verse", { sourceLabel: "Verse", label: "refrain" }),
      gospel_rubric: mx1("Let every breath ...,", "p6 Let every breath"),
      gospel: { heading: 'THE GOSPEL ACCORDING TO ST. MATTHEW',
        src: { file: MX, locus: 'p6-p7 Matins Gospel' },
        citation_verbatim: '(15: 21-28)',
        citation: { book: 'Matthew', chapter: 15, verses: '21-28' },
        citation_basis: 'printed',
        provenance_note: 'The same pericope, heading form and "masters” table" body defect as Martyress\'s Matins gospel — the pair share their gospel setting.' },
      psalm50_rubric: mx1("After the 50th Psalm:", "p7 After the 50th Psalm"),
      psalm50_sticheron: mx2("Through the prayers of the holy martyrs (names), * O Merciful One, ** blot out the multitude of our transgressions.", "p7 Psalm 50 Glory", { sourceLabel: "Glory ..., in Tone VI", tone: 6, label: "glory" }),
      psalm50_closer: mx2("Through the prayers of the Theotokos, * O Merciful One, ** blot out the multitude of our transgressions.", "p7 Psalm 50 Both now", { sourceLabel: "Both now ...,", type: "theotokion", label: "both_now" }),
      psalm50_verse: mx2("Have mercy on me, O God, * according to Thy great mercy; * and according to the multitude of Thy compassions, ** blot out my transgressions.", "p7 Psalm 50 verse", { label: "refrain" }),
      sessional_post50_rubric: mx1("Then the Sessional Hymn, in Tone IV:", "p7 post-Psalm-50 sessional rubric"),
      // THE REORDERED RENDERING of the aposticha Glory — clauses swapped,
      // "passion-bearers" reduced to "ones" (registered as a variant).
      sessional_post50: mx2("Setting aside as transient * O all-famed martyrs, * the pleasures of temporal life, * the delight of food and the glory of prosperity, * by the fairness of His beauty, * you were moved to devote yourselves to Christ in martyrdom * wherefore He received you as sweetest and most fragrant roses * and adorned you with crowns in His eternal Kingdom, ** O godly-proclaimed ones.", "p7 post-Psalm-50 Sessional", { tone: 4, label: "plain" }),
      canon_rubric: mx1("The Canon, in Tone IV:", "p7 Canon rubric"),
      canons: [{
        title: "The Canon, in Tone IV:", tone: 4,
        odes: {
          1: {
            irmos: mx2("I shall open my mouth, * and be filled with the Spirit, * and utter discourse to the Queen and Mother; * and be seen radiantly keeping festival, * joyfully praising her wonders.", "p7 Ode 1 irmos", { sourceLabel: "Irmos", label_inline: true }),
            refrain: mx1("Holy Martyrs (names) pray to God for us", "p7 Ode 1 refrain", { sourceLabel: "Refrain", label_inline: true }),
            items: [
              mx1("Ye mightily battled the enemy, O maiden martyrs, first by fasting and thereupon by the cruel shedding of your blood; wherefore in faith we honor your sacred memory.", "p7 Ode 1 troparion 1", { label: "plain" }),
              mx1("Moved by love for Him Who for our sake suffered both the Cross and death, the holy maiden martyrs following in His footsteps, disregarded the inherent weaknesses of their bodies.", "p7 Ode 1 troparion 2", { label: "plain" }),
              mx1("O most honorable maiden Martyrs, with the weapon of martyrdom ye have overthrown the sacrificial temples of the Hagarenes, with their armies of demons, and as whole burnt offerings you have been led into the heavenly Church.", "p7 Ode 1 troparion 3", { label: "plain" }),
              mx1("Strengthened by the grace of Him Who hath shone forth ineffably from thy womb, O most immaculate one, the virgin-maidens underwent the pangs of martyrdom, and following thee they rejoiced as they were led into the kingdom of heaven.", "p8 Ode 1 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          3: {
            irmos: mx2("The bow of the mighty hath been rendered impotent * and the infirm are now girded with strength; * wherefore my heart is established in the Lord.", "p8 Ode 3 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              mx1("Strengthened by God with mighty power, ye have overthrown the might of the adversary, and are famed as invincible trophy-bearers.", "p8 Ode 3 troparion 1", { label: "plain" }),
              mx1("Through Christ’s divine power the jaws of the beast gaped in vain, for ye were delivered from them unharmed, O divinely-wise ones, glorifying God.", "p8 Ode 3 troparion 2", { label: "plain" }),
              mx1("With minds enlightened with wisdom and grace, O maiden Martyrs of the Savior, and sustained by God’s strength, you remained un-frightened by the threats of your tormentors.", "p8 Ode 3 troparion 3", { label: "plain" }),
              mx1("With right worship we proclaim thee to be the true all-immaculate Mother of God, for through thee the Creator of all was pleased to be united with us.", "p8 Ode 3 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          4: {
            irmos: mx2("He who sitteth in glory upon the throne of the Godhead, * Jesus the true God, * is come in a swift cloud * and with His sinless hands he hath saved those who cry: * Glory to Thy power, O Christ.", "p8 Ode 4 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              mx1("Suffering tortures and grievous bodily wounds, the breaking of your limbs, and being thrown into fire, ye have inherited a place in the heavenly abodes, where ye unceasingly delight in the Tree of life, O right wondrous ones.", "p8 Ode 4 troparion 1", { label: "plain" }),
              mx1("The heavenly powers stood amazed at the struggles of the blessed maiden martyrs, for though possessing a feminine nature, they vanquished the enemy, strengthened by the power of Him Who hath shone forth from the Virgin.", "p9 Ode 4 troparion 2", { label: "plain" }),
              mx1("Rejecting the vanity of this world, ye have fervently devoted yourselves to God alone; wherefore ye endured the anguish of fasting and a multitude of tortures, O long-suffering brides of Christ.", "p9 Ode 4 troparion 3", { label: "plain" }),
              mx1("Into thy womb, O most immaculate one, the Lord descended like the dew upon the fleece of Gideon, as the Prophet of old described; and brought Him forth in two natures, wherefore we cry unto Him; “Glory to Thy might, O Christ!”", "p9 Ode 4 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          5: {
            irmos: mx2("The wicked will not behold Thy glory, O Christ, * but we who rise early to hymn Thee shall behold Thee, * the Only-Begotten effulgence of Thy Father’s divinity, * O Lover of mankind.", "p9 Ode 5 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              mx1("As unblemished lambs, and perfect and pleasing whole-burnt offerings, ye were brought unto Christ the True Shepherd.", "p9 Ode 5 troparion 1", { label: "plain" }),
              mx1("O maiden Martyrs, like Him Who slew the might of death by enduring the Cross, death and His voluntary passion, ye have died in the body, but been quickened in your souls.", "p9 Ode 5 troparion 2", { label: "plain" }),
              mx1("The divinely-wise ones, being of one mind while in separate bodies, ye were cut asunder in many ways, burned with fire, while confessing the only Jesus Christ, the Lord of all.", "p9 Ode 5 troparion 3", { label: "plain" }),
              mx1("Raise me up who am fallen into the pit of passions and grant me correction, O all-immaculate one, for thou hast brought forth God, the Governor, Who by grace hath joined together that which of old was separated.", "p9 Ode 5 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          6: {
            irmos: mx2("The church crieth out unto Thee O Lord, * “I will sacrifice unto Thee with a voice of praise” * having been cleansed of the blood of the demons” * by the blood that for mercy’s sake flowed from Thy side.", "p9 Ode 6 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              mx1("The first mother Eve divinely rejoiceth, seeing the serpent who had first driven her from Eden through flattery, now overthrown and trodden underfoot by the maiden Martyrs.", "p9 Ode 6 troparion 1", { label: "plain" }),
              mx1("Joining fasting with lawful pangs, you have now been united with the spiritual Bridegroom in purity, and with gladsome voices, made your abodes in the heavenly mansions.", "p9 Ode 6 troparion 2", { label: "plain" }),
              mx1("The waves of the tormentors were unable to submerge the ship-like martyrs, for the lofty arm of God protected and guided them to the divine haven.", "p9 Ode 6 troparion 3", { label: "plain" }),
              mx1("Beholding now the fulfillment of thy prophetic words, we yet more magnify thee, O Mother of God, and Him Who hath exalted thee; for truly all generations now call the blessed.", "p10 Ode 6 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          7: {
            irmos: mx2("Thou didst save the children of Abraham in the fire * and slay the Chaldeans, * who unjustly entrapped the righteous ones. * O supremely hymned Lord, God of our fathers, * blessed art Thou.", "p10 Ode 7 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              mx1("With the eyes of their hearts turned toward God the Savior and King, the ewe-lambs of Christ stood boldly before all kinds of wicked allurements and manfully vanquishing then, exclaimed: “O God of our fathers, Blessed art Thou.”", "p10 Ode 7 troparion 1", { label: "plain" }),
              mx1("Focusing all of your desire solely on the Master, O maiden Martyrs, you counted the attractions of temporal life to be but a mere dream, exclaiming: “O God of our fathers, Blessed art Thou.”", "p10 Ode 7 troparion 2", { label: "plain" }),
              mx1("While standing before the judgment seat the valiant maiden Martyrs cried aloud; “Behold, the gates to the palace are open let us not be faint-hearted, for Christ beareth our crowns, rather let us manfully confess our faith, not sparing our bodies.”", "p10 Ode 7 troparion 3", { label: "plain" }),
              mx1("Blessed is the Fruit of thy blessed womb, O pure one; bless Him, O blessed one, and ye heavenly powers and ye assemblies of mortals, bless Him also as One Who hath delivered us from the primal curse.", "p10 Ode 7 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          8: {
            irmos: mx2("The Offspring of the Theotokos * saved the holy children in the furnace. * He who was then prefigured hath now been born on earth, * and He gathereth all creation to hymn thee: * all ye works praise ye the Lord * and supremely exalt Him throughout all ages.", "p10 Ode 8 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              mx1("Through the blood of Martyrdom you have clothed yourselves in bright garments, in truth putting off the old-man corrupted by sins, while chanting: “O all ye works of the Lord, bless ye the Lord and supremely exalt Him throughout the ages.”", "p11 Ode 8 troparion 1", { label: "plain" }),
              mx1("By the bright effulgence of the divine light of the spiritual Sun, you have, O all-famed Martyrs, traversed the dark night of godlessness, singing as if with one spirit: “O all ye works of the Lord, bless ye the Lord and supremely exalt Him throughout the ages “.", "p11 Ode 8 troparion 2", { label: "plain" }),
              mx1("Like ewe-lambs and pure bullocks, and like Godly doves you offered yourselves as voluntary sacrifices, O maiden Martyrs, unto your Creator, singing with one voice: “O all ye works of the Lord, bless ye the Lord and supremely exalt Him throughout the ages “.", "p11 Ode 8 troparion 3", { label: "plain" }),
              mx1("The maiden-Martyrs followed in Thine entourage, O most pure Bride of God, yearning for the sweet-smelling Myrrh that shone forth from thy womb, even thy Son, thine only Child, and in truth they reign with thee, hymning Christ and supremely exalting Him throughout the ages.", "p11 Ode 8 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
          9: {
            irmos: mx2("Eve dwelt under the curse of sin * because of the infirmity of disobedience; * but thou, O Virgin Theotokos, * hast through the Offspring of thy pregnancy * blossomed forth blessing upon the world. * Wherefore, we all magnify thee.", "p11 Ode 9 irmos", { sourceLabel: "Irmos", label_inline: true }),
            items: [
              mx1("Like waters from a spring the most glorious maiden martyrs bestow healing upon those who seek it from them, allaying the sufferings of the diseased, driving away the armies of demons, and watering with fruitful divine activity, the hearts of those who love God.", "p11 Ode 9 troparion 1", { label: "plain" }),
              mx1("Having obtained power over your enemies, O brides of God, ye have become angelic and now freely partake of the delights of the source of all goodness from the tree of life in paradise, praying for the whole world.", "p11 Ode 9 troparion 2", { label: "plain" }),
              mx1("The celebration of your memory, O maiden Martyrs, shining with divine illuminating grace, illumineth the thoughts of those who praise you.", "p11 Ode 9 troparion 3", { label: "plain" }),
              mx1("Thou hast been revealed to be an abode of wisdom, beyond recounting, and a spiritual throne and portal, O undefiled Virgin, wherefore the pure virgins, the holy maiden martyrs who loved thee as their Queen, were ushered into heaven in thy mystical entourage.", "p11 Ode 9 Theotokion", { sourceLabel: "Theotokion", label: "theotokion", label_inline: true }),
            ],
          },
        },
      }],
      sessional_ode3_rubric: mx1("The Sessional Hymn, in Tone I:", "p8 post-Ode-III sessional rubric"),
      // Reprinted as the IKOS in a second rendering ("endeavors …
      // memorial" / "feats … memory crying out") — registered.
      sessional_ode3: mx2("Acquiring in you a source of miracles, * O all-famed martyrs, * we have been granted an abundance of healings, * wherefore we praise your sufferings and divine zeal, * your wounds and valiant endeavors, ** and to the glory of our God, we celebrate your wondrous memorial.", "p8 post-Ode-III Sessional", { tone: 1, label: "plain" }),
      // Byte-identical to Martyress's sessional-2 closer ("Do thou accept")
      // — at the post-Ode-III slot here: the pair's theotokia migrate between
      // slots too (registered).
      sessional_ode3_closer: mx2("Do thou accept, O Theotokos, * the entreaties of thy servants, * and deliver us from every difficulty, * since thou hast given birth unto the Savior Christ, ** the Redeemer of our souls.", "p8 post-Ode-III Sessional closer", { sourceLabel: "Glory ..., Both now ..., Theotokion, in Tone I", tone: 1, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      sessional_ode3_stavrotheotokion: mx2("Possessing thine intercession, O most pure one, * and delivered from evils by thy supplications, * protected wholly by the Cross of thy Son, ** we all reverently magnify thee as is meet.", "p8 post-Ode-III Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      kontakion_rubric: mx1("The Kontakion from the Typicon; if there be none, chant the following:", "p10 kontakion rubric"),
      exapostilarion_rubric: mx1("Exapostilarion in Tone III:", "p11 exapostilarion rubric"),
      exapostilarion: mx2("By all means desiring to behold the comeliness of the Bridegroom, * and having heeded His call, * ye have been granted immortality in your mortal bodies, O God-bearing ones; * wherefore ye are rightly blessed.", "p11 Exapostilarion", { tone: 3, label: "plain" }),
      exapostilarion_closer: mx2("When Thou comest in Thy glory to judge the world * O Christ, do Thou spare me, * and by the intercessions of her who bore Thee, * and of Thy honorable maiden Martyrs, ** dispel the fog of my passions, since Thou art good and abundantly merciful.", "p12 Exapostilarion closer", { sourceLabel: "Glory ..., Both now ..., Theotokion in Tone III", tone: 3, type: "theotokion", label: ["glory", "both_now", "theotokion"] }),
      praises_rubric: mx1("On the Praises, these Stichera, in Tone IV:", "p12 Praises rubric"),
      praises: [
        mx2("Adorning yourselves with the shedding of your blood * O virgin-maidens, * in a most pure manner * ye have united yourselves with the comely One, * Christ our God, * Who hath preserved your virginity undefiled, * in the eternal bridal-chambers of the heavenly tabernacle, * in the palaces not made with hands, ** O all-famed Martyrs.", "p12 Praises 1", { spec_mel: "As one valiant among the martyrs ...", tone: 4, label: "plain", repeat: 2 }),
        mx2("In imperfect bodies, * but with perfected minds O glorious ones, * ye have vanquished the ancient serpent, * the origin of all evil, * revealing the weakness of his strength * by the power of your spirit, * wherefore, O all-famed martyrs, * champions of the Trinity, ** ye have received crowns of victory.", "p12 Praises 2", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
        mx2("Neither the breaking of your limbs, * nor the burning of your bodies, * neither being torn with iron teeth, * nor being hung upon crosses * and cut asunder with swords * could make you reject Christ, * O all-famed martyrs; * wherefore ye have been granted crowns of victory, ** as champions of the Holy Trinity.", "p12 Praises 3", { spec_mel: "As one valiant among the martyrs ...", label: "plain" }),
      ],
      praises_glory: mx2("Having lived a pure life and vanquished the godless judges, * ye have been revealed as staunchly victorious, * O honorable ones; * adorned with brightness, O godly radiant flowers, * and vested with God’s strength * ye have spurned the commands of the tyrants, * and mocked the empty speeches of pagan orators, ** O divinely-wise maiden martyrs.", "p12 Praises Glory", { sourceLabel: "Glory ..., in Tone II", tone: 2, label: "glory" }),
      // "All of my hope do I place ON thee" — a SECOND RENDERING of
      // Apostle's "All my hope I place IN thee" (registered).
      praises_closer: mx2("All of my hope do I place on thee, * O Mother of God; ** keep me under thy protection.", "p12 Praises Both now", { sourceLabel: "Both now ..., Theotokion, in Tone II", tone: 2, type: "theotokion", label: ["both_now", "theotokion"] }),
      // A SECOND RENDERING of Apostle's praises stavrotheotokion ("beheld
      // her Lamb willingly led as a man to the slaughter" / "saw her
      // offspring as a man willingly dragged") — with "O Christ,?" (sic).
      praises_stavrotheotokion: mx2("When the unblemished ewe-lamb beheld her Lamb * willingly led as a man to the slaughter, * she said, weeping: * “Dost Thou now hasten to leave me childless who gave Thee birth O Christ,? * What is this that Thou hast done, O Redeemer of all? * Even so I will hymn and glorify Thine extreme goodness, * which is beyond understanding and all telling, ** O Lover of mankind!”", "p12 Praises Stavrotheotokion", { sourceLabel: "Stavrotheotokion", type: "stavrotheotokion", label: "stavrotheotokion", label_inline: true }),
      // The SHORT great-Doxology form (no Doxasticon clause) — the Angels
      // wording, second file.
      great_doxology_rubric: mx1("The great Doxology: If a small Doxology is read, the following is chanted after the Aposticha:", "p12 great Doxology rubric"),
      doxology_glory: mx2("Setting aside as transient * O all-famed martyrs, * the pleasures of temporal life, * the delight of food and the glory of prosperity, * you were moved by the fairness of His beauty, * to devote yourselves to Christ in martyrdom, * wherefore He hath received you as sweetest and most fragrant roses * and adorned you with crowns in His eternal Kingdom, * O godly-proclaimed passion-bearers.", "p13 Doxology Glory", { sourceLabel: "Glory ..., in Tone IV", tone: 4, label: "glory" }),
      // A NEW DOXOLOGY SHAPE: no conditional label — instead "Otherwise,
      // Theotokion" with FULL TEXT, byte-identical to the aposticha alternate
      // (registered). The order array records the page.
      doxology_alternate: mx2("O thou inextinguishable lamp, * and throne of righteousness * most pure Sovereign Lady: ** pray thou that our souls be saved.", "p13 Doxology Otherwise Theotokion", { sourceLabel: "Otherwise, Theotokion", type: "theotokion", label: "theotokion", label_inline: true }),
      troparion_rubric: mx1("After Our Father ..., the Troparion, in Tone I:", "p13 after Our Father"),
      closer: { absent: true, reason: "not_printed_in_source", basis: "close_reading", note: "Slot printed as “Glory ..., Both now ..., Theotokion or Stavrotheotokion:” with no text — the conditional closer (§5.8)." },
      closing_rubric: mx1("The Dismissal:", "p13 Dismissal"),
    },

    liturgy: {
      order: ['beatitudes_rubric', 'beatitudes', 'propers_rubric', 'troparion',
              'kontakion', 'prokeimenon', 'prokeimenon_verse', 'epistle',
              'alleluia', 'alleluia_verse', 'gospel', 'communion_verse'],
      beatitudes_rubric: mx1("Typika and Beatitudes.", "p14 Typika and Beatitudes"),
      // Seven of seven byte-identical — TEN files identical, two variant.
      // "now call the blessed" is copied EXACTLY from the canon (sic at both
      // sites): the transmission carrying its defect, sixth file.
      beatitudes: [
        mx1("Strengthened by God with mighty power, ye have overthrown the might of the adversary, and are famed as invincible trophy-bearers.", "p14 Beatitude 1", { label: "plain", repeat: 2 }),
        mx1("Through Christ’s divine power the jaws of the beast gaped in vain, for ye were delivered from them unharmed, O divinely-wise ones, glorifying God.", "p14 Beatitude 2", { label: "plain" }),
        mx1("With minds enlightened with wisdom and grace, O maiden Martyrs of the Savior, and sustained by God’s strength, you remained un-frightened by the threats of your tormentors.", "p14 Beatitude 3", { label: "plain" }),
        mx1("The first mother Eve divinely rejoiceth, seeing the serpent who had first driven her from Eden through flattery, now overthrown and trodden underfoot by the maiden Martyrs.", "p14 Beatitude 4", { label: "plain" }),
        mx1("Joining fasting with lawful pangs, you have now been united with the spiritual Bridegroom in purity, and with gladsome voices, made your abodes in the heavenly mansions.", "p14 Beatitude 5", { label: "plain" }),
        mx1("The waves of the tormentors were unable to submerge the ship-like martyrs, for the lofty arm of God protected and guided them to the divine haven.", "p14 Beatitude 6", { label: "plain" }),
        mx1("Beholding now the fulfillment of thy prophetic words, we yet more magnify thee, O Mother of God, and Him Who hath exalted thee; for truly all generations now call the blessed.", "p14 Beatitude 7", { label: "theotokion", sourceLabel: "Theotokion", label_inline: true }),
      ],
      propers_rubric: mx1("The Troparion and Kontakion from the Typicon. If there be none, chant the following:", "p14 propers rubric"),
      prokeimenon: mx2("Wondrous is God in His saints, * the God of Israel.", "p14 Liturgy Prokeimenon", { sourceLabel: "The Prokeimenon", tone: 4, label_inline: true }),
      prokeimenon_verse: mx1("In the Congregations bless ye God, the Lord, from the wellsprings of Israel.", "p14 Liturgy Prokeimenon verse", { sourceLabel: "Verse", label: "refrain" }),
      epistle: { heading: 'THE 2nd EPISTLE TO THE CORINTHIANS',
        src: { file: MX, locus: 'p15 Epistle' },
        citation_verbatim: '(6:1-10)',
        citation: { book: '2 Corinthians', chapter: 6, verses: '1-10' },
        citation_basis: 'printed',
        provenance_note: 'The Martyress epistle, heading form and all — its body prints "always rejoicing" where Martyress prints "alway": even shared readings differ in unstored bytes.' },
      alleluia: mx2("I waited patiently for the Lord, and He was attentive unto me, * and hearkened unto my supplication.", "p15 Alleluia", { sourceLabel: "Alleluia, in Tone I", tone: 1, label_inline: true }),
      alleluia_verse: mx1("And he brought me out of the pit of misery, out of the mire of clay.", "p15 Alleluia verse", { sourceLabel: "Verse", label: "refrain" }),
      // "ST. MARK:" — the colon-in-heading sic, SECOND file, same
      // evangelist, same reference.
      gospel: { heading: 'THE GOSPEL ACCORDING TO ST. MARK:',
        src: { file: MX, locus: 'p15 Liturgy Gospel' },
        citation_verbatim: '(5:24-34)',
        citation: { book: 'Mark', chapter: 5, verses: '24-34' },
        citation_basis: 'printed' },
      // Byte-identical to Martyress's setting INCLUDING the missing final
      // stop — "upright" ends the verse, the page and the file in both. The
      // defect travels with the pair (registered).
      communion_verse: mx1("Rejoice in the Lord, O ye righteous, praise is meet for the upright", "p15 Communion Verse", { sourceLabel: "Communion Verse", label_inline: true }),
    },
  },
};

export default GENERAL;
