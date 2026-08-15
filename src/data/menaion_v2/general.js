// src/data/menaion_v2/general.js — HAND-ENCODED, Monastic.pdf, Vespers only.
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

const F = 'Monastic.pdf';
const t2 = (text, locus, extra = {}) => ({ text, tier: 2, src: { file: F, locus }, ...extra });
const t1 = (text, locus, extra = {}) => ({ text, tier: 1, src: { file: F, locus }, ...extra });

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
        verified_sites: ['p4 Vespers dismissal', 'p5 God is the Lord', 'p13 after Our Father', 'p14 AT LITURGY'] }),

    // Printed at TWO services — p9 (after Ode VI) and p14 (AT LITURGY) — so it
    // is stored ONCE at entry level and recycled, exactly like the troparion
    // (R-1). An earlier pass left it on `matins`, which made the Liturgy's
    // `order` name a key that existed on neither the service nor the entry.
    kontakion: t2('Having divinely armed thyself with purity of soul * and unceasing prayer, * thou didst valiantly slay legions of demons * as with a mighty sword, * wherefore we beseech thee O Father (name), * ever intercede for those ** who honor thee.',
      'p9 Kontakion of the venerable one', { sourceLabel: 'Kontakion of the venerable one, in Tone II', spec_mel: 'Seeking the highest ...', tone: 2,
        verified_sites: ['p9 after Ode VI', 'p14 AT LITURGY'] }),

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
          derived: { method: 'corpus-match', reconstruction: 0.92 } },
        { heading: 'A READING FROM THE WISDOM OF SOLOMON', src: { file: F, locus: 'p2 Lesson 2' },
          citation: { book: 'Wisdom of Solomon', chapter: 5, verses: '5:15-6:3' },
          derived: { method: 'corpus-match', reconstruction: 0.93 } },
        { heading: 'A READING FROM THE WISDOM OF SOLOMON', src: { file: F, locus: 'p3 Lesson 3' },
          citation: { book: 'Wisdom of Solomon', chapter: 4, verses: '4:7-4:14' },
          derived: { method: 'corpus-match', reconstruction: 0.89 } },
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
};

export default GENERAL;
