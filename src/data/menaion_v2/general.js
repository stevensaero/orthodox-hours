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
};

export default GENERAL;