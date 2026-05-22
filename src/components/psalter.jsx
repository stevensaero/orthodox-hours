import { useState, useRef, useEffect } from "react";

// ─── LITURGICAL CONSTANTS ─────────────────────────────────────────────────────
const GLORY = "Glory to the Father, and to the Son, and to the Holy Spirit; both now and ever and unto the ages of ages. Amen.";
const ALLELUIA = "Alleluia, alleluia, alleluia: Glory to Thee, O God.";
const LHM = "Lord, have mercy; Lord, have mercy; Lord, have mercy.";
const STASIS_NAMES = ["First Stasis", "Second Stasis", "Third Stasis"];

// ─── KATHISMA STRUCTURE ───────────────────────────────────────────────────────
const KATHISMA_MAP = {
  1:  { stases: [[1,2,3],[4,5,6],[7,8]] },
  2:  { stases: [[9,10],[11,12,13],[14,15,16]] },
  3:  { stases: [[17],[18,19,20],[21,22,23]] },
  4:  { stases: [[24,25,26],[27,28,29],[30,31]] },
  5:  { stases: [[32,33],[34,35],[36]] },
  6:  { stases: [[37,38,39],[40,41,42],[43,44,45]] },
  7:  { stases: [[46,47,48],[49,50],[51,52,53,54]] },
  8:  { stases: [[55,56,57],[58,59,60],[61,62,63]] },
  9:  { stases: [[64,65,66],[67],[68,69]] },
  10: { stases: [[70,71,72],[73,74,75],[76,77]] },
  11: { stases: [[78,79,80],[81,82,83],[84,85]] },
  12: { stases: [[86,87],[88],[89]] },
  13: { stases: [[90,91,92,93,94],[95,96,97,98],[99,100]] },
  14: { stases: [[101],[102],[103]] },
  15: { stases: [[104],[105],[106]] },
  16: { stases: [[107,108,109],[110,111,112],[113]] },
  17: { stases: [[118]] },
  18: { stases: [[119,120,121,122,123],[124,125,126,127,128],[129,130,131,132,133]] },
  19: { stases: [[134,135,136],[137,138,139],[140,141,142]] },
  20: { stases: [[143,144,145],[146,147,148],[149,150,151]] },
};

// ─── PSALM DATA ───────────────────────────────────────────────────────────────
// Source: Brenton Septuagint (1851), public domain.
// Via psalter.app (MIT license) — https://psalter.app
// Kathismata 1–3 fully encoded. K4–K20 encoding in progress.
const PSALMS = {
  1: {sub: '', v: [[1, "Blessed is the man who has not walked in the counsel of the ungodly, and has not stood in the way of sinners, and has not sat in the seat of evil men."], [2, "But his pleasure is in the law of the Lord; and in his law will he meditate day and night."], [3, "And he shall be as a tree planted by the brooks of waters, which shall yield its fruit in its season, and its leaf shall not fall off; and whatsoever he shall do shall be prospered."], [4, "Not so the ungodly;\u2014not so: but rather as the chaff which the wind scatters away from the face of the earth."], [5, "Therefore the ungodly shall not rise in judgment, nor sinners in the counsel of the just."], [6, "For the Lord knows the way of the righteous; but the way of the ungodly shall perish."]]},
  2: {sub: '', v: [[1, "Wherefore did the heathen rage, and the nations imagine vain things?"], [2, "The kings of the earth stood up, and the rulers gathered themselves together, against the Lord, and against his Christ;"], [3, "saying, Let us break through their bonds, and cast away their yoke from us."], [4, "He that dwells in the heavens shall laugh them to scorn, and the Lord shall mock them."], [5, "Then shall he speak to them in his anger, and trouble them in his fury."], [6, "But I have been made king by him on Sion his holy mountain,"], [7, "declaring the ordinance of the Lord: the Lord said to me, Thou art my Son, to-day have I begotten thee."], [8, "Ask of me, and I will give thee the heathen for thine inheritance, and the ends of the earth for thy possession."], [9, "Thou shalt rule them with a rod of iron; thou shalt dash them in pieces as a potter's vessel."], [10, "Now therefore understand, ye kings: be instructed, all ye that judge the earth."], [11, "Serve the Lord with fear, and rejoice in him with trembling."], [12, "Accept correction, lest at any time the Lord be angry, and ye should perish from the righteous way: whensoever his wrath shall be suddenly kindled, blessed are all they that trust in him."]]},
  3: {sub: 'A Psalm of David, when he fled from the presence of his son Abessalom.', v: [[2, "O Lord, why are they that afflict me multiplied? many rise up against me."], [3, "Many say concerning my soul, There is no deliverance for him in his God. Pause."], [4, "But thou, O Lord, art my helper: my glory, and the one that lifts up my head."], [5, "I cried to the Lord with my voice, and he heard me out of his holy mountain. Pause."], [6, "I lay down and slept; I awaked; for the Lord will help me."], [7, "I will not be afraid of ten thousands of people, who beset me round about."], [8, "Arise, Lord; deliver me, my God: for thou hast smitten all who were without cause mine enemies; thou hast broken the teeth of sinners."], [9, "Deliverance is the Lord's, and thy blessing is upon thy people."]]},
  4: {sub: 'For the end, a Song of David among the Psalms.', v: [[2, "When I called upon him, the God of my righteousness heard me: thou hast made room for me in tribulation; pity me, and hearken to my prayer."], [3, "O ye sons of men, how long will ye be slow of heart? wherefore do ye love vanity, and seek falsehood? Pause."], [4, "But know ye that the Lord has done wondrous things for his holy one: the Lord will hear me when I cry to him."], [5, "Be ye angry, and sin not; feel compunction upon your beds for what ye say in your hearts. Pause."], [6, "Offer the sacrifice of righteousness, and trust in the Lord."], [7, "Many say, Who will shew us good things? the light of thy countenance, O Lord, has been manifested towards us."], [8, "Thou hast put gladness into my heart: they have been satisfied with the fruit of their corn and wine and oil."], [9, "I will both lie down in peace and sleep: for thou, Lord, only hast caused me to dwell securely."]]},
  5: {sub: 'For the end, a Psalm of David, concerning her that inherits.', v: [[2, "Hearken to my words, O Lord, attend to my cry."], [3, "Attend to the voice of my supplication, my King, and my God: for to thee, O Lord, will I pray."], [4, "In the morning thou shalt hear my voice: in the morning will I wait upon thee, and will look up."], [5, "For thou art not a God that desires iniquity; neither shall the worker of wickedness dwell with thee."], [6, "Neither shall the transgressors continue in thy sight: thou hatest, O Lord, all them that work iniquity."], [7, "Thou wilt destroy all that speak falsehood: the Lord abhors the bloody and deceitful man."], [8, "But I will enter into thine house in the multitude of thy mercy: I will worship in thy fear toward thy holy temple."], [9, "Lead me, O Lord, in thy righteousness because of mine enemies; make my way plain before thy face."], [10, "For there is no truth in their mouth; their heart is vain; their throat is an open sepulchre; with their tongues they have used deceit."], [11, "Judge them, O God; let them fail of their counsels: cast them out according to the abundance of their ungodliness; for they have provoked thee, O Lord."], [12, "But let all that trust on thee be glad in thee: they shall exult for ever, and thou shalt dwell among them; and all that love thy name shall rejoice in thee."], [13, "For thou, Lord, shalt bless the righteous: thou hast compassed us as with a shield of favour."]]},
  6: {sub: 'For the end, a Psalm of David among the Hymns for the eighth.', v: [[2, "O Lord, rebuke me not in thy wrath, neither chasten me in thine anger."], [3, "Pity me, O Lord; for I am weak: heal me, O Lord; for my bones are vexed."], [4, "My soul also is grievously vexed: but thou, O Lord, how long?"], [5, "Return, O Lord, deliver my soul: save me for thy mercy's sake."], [6, "For in death no man remembers thee: and who will give thee thanks in Hades?"], [7, "I am wearied with my groaning; I shall wash my bed every night; I shall water my couch with my tears."], [8, "Mine eye is troubled because of my wrath; I am worn out because of all my enemies."], [9, "Depart from me, all ye that work iniquity; for the Lord has heard the voice of my weeping."], [10, "The Lord has hearkened to my petition; the Lord has accepted my prayer."], [11, "Let all mine enemies be put to shame and sore troubled: let them be turned back and grievously put to shame speedily."]]},
  7: {sub: 'A Psalm of David, which he sang to the Lord because of the words of Chusi the Benjamite.', v: [[2, "O Lord my God, in thee have I trusted: save me from all them that persecute me, and deliver me."], [3, "Lest at any time the enemy seize my soul as a lion, while there is none to ransom, nor to save."], [4, "O Lord my God, if I have done this; (if there is unrighteousness in my hands;)"], [5, "if I have requited with evil those who requited me with good; may I then perish empty by means of my enemies."], [6, "Let the enemy persecute my soul, and take it; and let him trample my life on the ground, and lay my glory in the dust. Pause."], [7, "Arise, O Lord, in thy wrath; be exalted in the utmost boundaries of mine enemies: awake, O Lord my God, according to the decree which thou didst command."], [8, "And the congregation of the nations shall compass thee: and for this cause do thou return on high."], [9, "The Lord shall judge the nations: judge me, O Lord, according to my righteousness, and according to my innocence that is in me."], [10, "Oh let the wickedness of sinners come to an end; and then thou shalt direct the righteous, O God that searchest the hearts and reins."], [11, "My help is righteous, coming from God who saves the upright in heart."], [12, "God is a righteous judge, and strong, and patient, not inflicting vengeance every day."], [13, "If ye will not repent, he will furbish his sword; he has bent his bow, and made it ready."], [14, "And on it he has fitted the instruments of death; he has completed his arrows for the raging ones."], [15, "Behold, he has travailed with unrighteousness, he has conceived trouble, and brought forth iniquity."], [16, "He has opened a pit, and dug it up, and he shall fall into the ditch which he has made."], [17, "His trouble shall return on his own head, and his unrighteousness shall come down on his own crown."], [18, "I will give thanks to the Lord according to his righteousness; I will sing to the name of the Lord most high."]]},
  8: {sub: 'For the end, concerning the wine-presses, a Psalm of David.', v: [[2, "O Lord, our Lord, how wonderful is thy name in all the earth! for thy magnificence is exalted above the heavens."], [3, "Out of the mouth of babes and sucklings hast thou perfected praise, because of thine enemies; that thou mightest put down the enemy and avenger."], [4, "For I will regard the heavens, the work of thy fingers; the moon and stars, which thou hast established."], [5, "What is man, that thou art mindful of him? or the son of man, that thou visitest him?"], [6, "Thou madest him a little less than angels, thou hast crowned him with glory and honour;"], [7, "and thou hast set him over the works of thy hands: thou hast put all things under his feet:"], [8, "sheep and all oxen, yea, and the cattle of the field;"], [9, "the birds of the sky, and the fish of the sea, the creatures passing through the paths of the sea."], [10, "O Lord our Lord, how wonderful is thy name in all the earth!"]]},
  9: {sub: 'For the end, a Psalm of David, concerning the secrets of the Son.', v: [[2, "I will give thanks to thee, O Lord, with my whole heart; I will recount all thy wonderful works."], [3, "I will be glad and exult in thee: I will sing to thy name, O thou Most High."], [4, "When mine enemies are turned back, they shall be feeble and perish at thy presence."], [5, "For thou hast maintained my cause and my right; thou satest on the throne, that judgest righteousness."], [6, "Thou hast rebuked the nations, and the ungodly one has perished; thou hast blotted out their name for ever, even for ever and ever."], [7, "The swords of the enemy have failed utterly; and thou hast destroyed cities: their memorial has been destroyed with a noise,"], [8, "but the Lord endures for ever: he has prepared his throne for judgment."], [9, "And he will judge the world in righteousness, he will judge the nations in uprightness."], [10, "The Lord also is become a refuge for the poor, a seasonable help, in affliction."], [11, "And let them that know thy name hope in thee: for thou, O Lord, hast not failed them that diligently seek thee."], [12, "Sing praises to the Lord, who dwells in Sion: declare his dealings among the nations."], [13, "For he remembered them, in making inquisition for blood: he has not forgotten the supplication of the poor."], [14, "Have mercy upon me, O Lord; look upon my affliction which I suffer of mine enemies, thou that liftest me up from the gates of death:"], [15, "that I may declare all thy praises in the gates of the daughter of Sion: I will exult in thy salvation."], [16, "The heathen are caught in the destruction which they planned: in the very snare which they hid is their foot taken."], [17, "The Lord is known as executing judgments: the sinner is taken in the works of his hands. A song of Pause."], [18, "Let sinners be driven away into Hades, even all the nations that forget God."], [19, "For the poor shall not be forgotten for ever: the patience of the needy ones shall not perish for ever."], [20, "Arise, O Lord, let not man prevail: let the heathen be judged before thee."], [21, "Appoint, O Lord, a lawgiver over them: let the heathen know that they are men. Pause."], [22, "Why standest thou afar off, O Lord? why dost thou overlook us in times of need, in affliction?"], [23, "While the ungodly one acts proudly, the poor is hotly pursued: the wicked are taken in the crafty counsels which they imagine."], [24, "Because the sinner praises himself for the desires of his heart; and the unjust one blesses himself."], [25, "The sinner has provoked the Lord: according to the abundance of his pride he will not seek after him: God is not before him."], [26, "His ways are profane at all times; thy judgments are removed from before him: he will gain the mastery over all his enemies."], [27, "For he has said in his heart, I shall not be moved, continuing without evil from generation to generation."], [28, "Whose mouth is full of cursing, and bitterness, and fraud: under his tongue are trouble and pain."], [29, "He lies in wait with rich men in secret places, in order to slay the innocent: his eyes are set against the poor."], [30, "He lies in wait in secret as a lion in his den: he lies in wait to ravish the poor, to ravish the poor when he draws him after him: he will bring him down in his snare."], [31, "He will bow down and fall when he has mastered the poor."], [32, "For he has said in his heart, God has forgotten: he has turned away his face so as never to look."], [33, "Arise, O Lord God; let thy hand be lifted up: forget not the poor."], [34, "Wherefore has the wicked provoked God? for he has said in his heart, He will not require it."], [35, "Thou seest it; for thou dost observe trouble and wrath, to deliver them into thy hands: the poor has been left to thee; thou wast a helper to the orphan."], [36, "Break thou the arm of the sinner and wicked man: his sin shall be sought for, and shall not be found."], [37, "The Lord shall reign for ever, even for ever and ever: ye Gentiles shall perish out of his land."], [38, "The Lord has heard the desire of the poor: thine ear has inclined to the preparation of their heart;"], [39, "to plead for the orphan and afflicted, that man may no more boast upon the earth."]]},
  10: {sub: 'For the end, a Psalm of David.', v: [[1, "In the Lord I have put my trust: how will ye say to my soul, Flee to the mountains as a sparrow?"], [2, "For behold the sinners have bent their bow, they have prepared their arrows for the quiver, to shoot privily at the upright in heart."], [3, "For they have pulled down what thou didst frame, but what has the righteous done?"], [4, "The Lord is in his holy temple, as for the Lord, his throne is in heaven: his eyes look upon the poor, his eyelids try the sons of men."], [5, "The Lord tries the righteous and the ungodly: and he that loves unrighteousness hates his own soul."], [6, "He shall rain upon sinners snares, fire, and brimstone, and a stormy blast shall be the portion of their cup."], [7, "For the Lord is righteous, and loves righteousness; his face beholds uprightness."]]},
  11: {sub: 'For the end, a Psalm of David, upon the eighth.', v: [[2, "Save me, O Lord; for the godly man has failed; for truth is diminished from among the children of men."], [3, "Every one has spoken vanity to his neighbour: their lips are deceitful, they have spoken with a double heart."], [4, "Let the Lord destroy all the deceitful lips, and the tongue that speaks great words:"], [5, "who have said, We will magnify our tongue; our lips are our own: who is Lord of us?"], [6, "Because of the misery of the poor, and because of the sighing of the needy, now will I arise, saith the Lord, I will set them in safety; I will speak to them thereof openly."], [7, "The oracles of the Lord are pure oracles; as silver tried in the fire, proved in a furnace of earth, purified seven times."], [8, "Thou, O Lord, shalt keep us, and shalt preserve us, from this generation, and for ever."], [9, "The ungodly walk around: according to thy greatness thou hast greatly exalted the sons of men."]]},
  12: {sub: 'For the end, a Psalm of David.', v: [[2, "How long, O Lord, wilt thou forget me? for ever? how long wilt thou turn away thy face from me?"], [3, "How long shall I take counsel in my soul, having sorrows in my heart daily? how long shall my enemy be exalted over me?"], [4, "Look on me, hearken to me, O Lord my God: lighten mine eyes, lest I sleep in death;"], [5, "lest at any time mine enemy say, I have prevailed against him: my persecutors will exult if ever I should be moved."], [6, "But I have hoped in thy mercy; my heart shall exult in thy salvation. I will sing to the Lord who has dealt bountifully with me, and I will sing psalms to the name of the Lord most high."]]},
  13: {sub: 'For the end, a Psalm of David.', v: [[1, "The fool has said in his heart, There is no God. They have corrupted themselves, and become abominable in their devices; there is none that does goodness, there is not even so much as one."], [2, "The Lord looked down from heaven upon the sons of men, to see if there were any that understood, or sought after God."], [3, "They are all gone out of the way, they are together become good for nothing, there is none that does good, no not one. Their throat is an open sepulchre; with their tongues they have used deceit; the poison of asps is under their lips: whose mouth is full of cursing and bitterness; their feet are swift to shed blood: destruction and misery are in their ways; and the way of peace they have not known: there is no fear of God before their eyes."], [4, "Will not all the workers of iniquity know, who eat up my people as they would eat bread? they have not called upon the Lord."], [5, "There were they alarmed with fear, where there was no fear; for God is in the righteous generation."], [6, "Ye have shamed the counsel of the poor, because the Lord is his hope."], [7, "Who will bring the salvation of Israel out of Sion? when the Lord brings back the captivity of his people, let Jacob exult, and Israel be glad."]]},
  14: {sub: 'A Psalm of David.', v: [[1, "O Lord, who shall sojourn in thy tabernacle? and who shall dwell in thy holy mountain?"], [2, "He that walks blameless, and works righteousness, who speaks truth in his heart."], [3, "Who has not spoken craftily with his tongue, neither has done evil to his neighbour, nor taken up a reproach against them that dwelt nearest to him."], [4, "In his sight an evil-worker is set at nought, but he honours them that fear the Lord. He swears to his neighbour, and disappoints him not."], [5, "He has not lent his money on usury, and has not received bribes against the innocent. He that does these things shall never be moved."]]},
  15: {sub: 'A writing of David.', v: [[1, "Keep me, O Lord; for I have hoped in thee."], [2, "I said to the Lord, Thou art my Lord; for thou hast no need of my goodness."], [3, "On behalf of the saints that are in his land, he has magnified all his pleasure in them."], [4, "Their weaknesses have been multiplied; afterward they hasted. I will by no means assemble their bloody meetings, neither will I make mention of their names with my lips."], [5, "The Lord is the portion of mine inheritance and of my cup: thou art he that restores my inheritance to me."], [6, "The lines have fallen to me in the best places, yea, I have a most excellent heritage."], [7, "I will bless the Lord who has instructed me; my reins too have chastened me even till night."], [8, "I foresaw the Lord always before my face; for he is on my right hand, that I should not be moved."], [9, "Therefore my heart rejoiced and my tongue exulted; moreover also my flesh shall rest in hope:"], [10, "because thou wilt not leave my soul in hell, neither wilt thou suffer thine Holy One to see corruption."], [11, "Thou hast made known to me the ways of life; thou wilt fill me with joy with thy countenance: at thy right hand there are delights for ever."]]},
  16: {sub: 'A Prayer of David.', v: [[1, "Hearken, O Lord of my righteousness, attend to my petition; give ear to my prayer not uttered with deceitful lips."], [2, "Let my judgment come forth from thy presence; let mine eyes behold righteousness."], [3, "Thou hast proved mine heart; thou hast visited me by night; thou hast tried me as with fire, and unrighteousness has not been found in me: I am purposed that my mouth shall not speak amiss."], [4, "As for the works of men, by the words of thy lips I have guarded myself from hard ways."], [5, "Direct my steps in thy paths, that my steps slip not."], [6, "I have cried, for thou heardest me, O God: incline thine ear to me, and hearken to my words."], [7, "Shew the marvels of thy mercies, thou that savest them that hope in thee."], [8, "Keep me as the apple of the eye from those that resist thy right hand: thou shalt screen me by the covering of thy wings,"], [9, "from the face of the ungodly that have afflicted me: mine enemies have compassed about my soul."], [10, "They have enclosed themselves with their own fat: their mouth has spoken pride."], [11, "They have now cast me out and compassed me round about: they have set their eyes so as to bow them down to the ground."], [12, "They laid wait for me as a lion ready for prey, and like a lion's whelp dwelling in secret places."], [13, "Arise, O Lord, prevent them, and cast them down: deliver my soul from the ungodly: draw thy sword,"], [14, "because of the enemies of thine hand: O Lord, destroy them from the earth; scatter them in their life, though their belly has been filled with thy hidden treasures: they have been satisfied with uncleanness, and have left the remnant of their possessions to their babes."], [15, "But I shall appear in righteousness before thy face: I shall be satisfied when thy glory appears."]]},
  17: {sub: 'For the end, a Psalm of David the servant of the Lord.', v: [[2, "I will love thee, O Lord, my strength."], [3, "The Lord is my firm support, and my refuge, and my deliverer; my God is my helper, I will hope in him; he is my defender, and the horn of my salvation, and my helper."], [4, "I will call upon the Lord with praises, and I shall be saved from mine enemies."], [5, "The pangs of death compassed me, and the torrents of ungodliness troubled me exceedingly."], [6, "The pangs of hell came round about me: the snares of death prevented me."], [7, "And when I was afflicted I called upon the Lord, and cried to my God: he heard my voice out of his holy temple, and my cry shall enter before him, even into his ears."], [8, "Then the earth shook and quaked, and the foundations of the mountains were disturbed, and were shaken, because God was angry with them."], [9, "There went up a smoke in his wrath, and fire burst into a flame at his presence: coals were kindled at it."], [10, "And he bowed the heaven, and came down: and thick darkness was under his feet."], [11, "And he mounted on cherubs and flew: he flew on the wings of winds."], [12, "And he made darkness his secret place: round about him was his tabernacle, even dark water in the clouds of the air."], [13, "At the brightness before him the clouds passed, hail and coals of fire."], [14, "The Lord also thundered from heaven, and the Highest uttered his voice."], [15, "And he sent forth his weapons, and scattered them; and multiplied lightnings, and routed them."], [16, "And the springs of waters appeared, and the foundations of the world were exposed, at thy rebuke, O Lord, at the blasting of the breath of thy wrath."], [17, "He sent from on high and took me, he drew me to himself out of many waters."], [18, "He will deliver me from my mighty enemies, and from them that hate me; for they are stronger than I."], [19, "They prevented me in the day of mine affliction: but the Lord was my stay against them."], [20, "And he brought me out into a wide place: he will deliver me, because he has pleasure in me."], [21, "And the Lord will recompense me according to my righteousness; even according to the purity of my hands will he recompense me."], [22, "For I have kept the ways of the Lord and have not wickedly departed from my God."], [23, "For all his judgments were before me, and his ordinances departed not from me."], [24, "And I shall be blameless with him, and shall keep myself from mine iniquity."], [25, "And the Lord shall recompense me according to my righteousness, and according to the purity of my hands before his eyes."], [26, "With the holy thou wilt be holy; and with the innocent man thou wilt be innocent."], [27, "And with the excellent man thou wilt be excellent; and with the perverse thou wilt shew frowardness."], [28, "For thou wilt save the lowly people, and wilt humble the eyes of the proud."], [29, "For thou, O Lord, wilt light my lamp: my God, thou wilt lighten my darkness."], [30, "For by thee shall I be delivered from a troop; and by my God I will pass over a wall."], [31, "As for my God, his way is perfect: the oracles of the Lord are tried in the fire; he is a protector of all them that hope in him."], [32, "For who is God but the Lord? and who is a God except our God?"], [33, "It is God that girds me with strength, and has made my way blameless:"], [34, "who strengthens my feet as hart's feet, and sets me upon high places."], [35, "He instructs my hands for war; and thou hast made my arms as a brazen bow."], [36, "And thou hast made me secure in my salvation: and thy right hand has helped me, and thy correction has upheld me to the end; yea, thy correction itself shall instruct me."], [37, "Thou hast made room for my goings under me, and my footsteps did not fail."], [38, "I will pursue mine enemies, and overtake them; and I will not turn back until they are consumed."], [39, "I will dash them to pieces and they shall not be able to stand: they shall fall under my feet."], [40, "For thou hast girded me with strength for war: thou hast beaten down under me all that rose up against me."], [41, "And thou hast made mine enemies turn their backs before me; and thou hast destroyed them that hated me."], [42, "They cried, but there was no deliverer: even to the Lord, but he hearkened not to them."], [43, "I will grind them as the mud of the streets: and I will beat them small as dust before the wind."], [44, "Deliver me from the gainsayings of the people: thou shalt make me head of the Gentiles: a people whom I knew not served me,"], [45, "at the hearing of the ear they obeyed me: the strange children lied to me."], [46, "The strange children waxed old, and fell away from their paths through lameness."], [47, "The Lord lives; and blessed be my God; and let the God of my salvation be exalted."], [48, "It is God that avenges me, and has subdued the nations under me;"], [49, "my deliverer from angry enemies: thou shalt set me on high above them that rise up against me: thou shalt deliver me from the unrighteous man."], [50, "Therefore will I confess to thee, O Lord, among the Gentiles, and sing to thy name."], [51, "God magnifies the deliverances of his king; and deals mercifully with David his anointed, and his seed, for ever."]]},
  18: {sub: 'For the end, a Psalm of David.', v: [[2, "The heavens declare the glory of God; and the firmament proclaims the work of his hands."], [3, "Day to day utters speech, and night to night proclaims knowledge."], [4, "There are no speeches or words, in which their voices are not heard."], [5, "Their voice is gone out into all the earth, and their words to the ends of the world."], [6, "In the sun he has set his tabernacle; and he comes forth as a bridegroom out of his chamber: he will exult as a giant to run his course."], [7, "His going forth is from the extremity of heaven, and his circuit to the other end of heaven: and no one shall be hidden from his heat."], [8, "The law of the Lord is perfect, converting souls: the testimony of the Lord is faithful, instructing babes."], [9, "The ordinances of the Lord are right, rejoicing the heart: the commandment of the Lord is bright, enlightening the eyes."], [10, "The fear of the Lord is pure, enduring for ever and ever: the judgments of the Lord are true, and justified altogether."], [11, "To be desired more than gold, and much precious stone: sweeter also than honey and the honey-comb."], [12, "For thy servant keeps to them: in the keeping of them there is great reward."], [13, "Who will understand his transgressions? purge thou me from my secret sins."], [14, "And spare thy servant the attack of strangers: if they do not gain the dominion over me, then shall I be blameless, and I shall be clear from great sin."], [15, "So shall the sayings of my mouth, and the meditation of my heart, be pleasing continually before thee, O Lord my helper, and my redeemer."]]},
  19: {sub: 'For the end, a Psalm of David.', v: [[2, "The Lord hear thee in the day of trouble; the name of the God of Jacob defend thee."], [3, "Send thee help from the sanctuary, and aid thee out of Sion."], [4, "Remember all thy sacrifice, and enrich thy whole-burnt-offering. Pause."], [5, "Grant thee according to thy heart, and fulfil all thy desire."], [6, "We will exult in thy salvation, and in the name of our God shall we be magnified: the Lord fulfil all thy petitions."], [7, "Now I know that the Lord has saved his Christ: he shall hear him from his holy heaven: the salvation of his right hand is mighty."], [8, "Some glory in chariots, and some in horses: but we will glory in the name of the Lord our God."], [9, "They are overthrown and fallen: but we are risen, and have been set upright."], [10, "O Lord, save the king: and hear us in whatever day we call upon thee."]]},
  20: {sub: 'For the end, a Psalm of David.', v: [[2, "O Lord, the king shall rejoice in thy strength; and in thy salvation he shall greatly exult."], [3, "Thou hast granted him the desire of his soul, and hast not withheld from him the request of his lips. Pause."], [4, "For thou hast prevented him with blessings of goodness: thou hast set upon his head a crown of precious stone."], [5, "He asked life of thee, and thou gavest him length of days for ever and ever."], [6, "His glory is great in thy salvation: thou wilt crown him with glory and majesty."], [7, "For thou wilt give him a blessing for ever and ever: thou wilt gladden him with joy with thy countenance."], [8, "For the king trusts in the Lord, and through the mercy of the Highest he shall not be moved."], [9, "Let thy hand be found by all thine enemies: let thy right hand find all that hate thee."], [10, "Thou shalt make them as a fiery oven at the time of thy presence: the Lord shall trouble them in his anger, and fire shall devour them."], [11, "Thou shalt destroy their fruit from the earth, and their seed from among the sons of men."], [12, "For they intended evils against thee; they imagined a device which they shall by no means be able to perform."], [13, "For thou shalt make them turn their back in thy latter end, thou wilt prepare their face."], [14, "Be thou exalted, O Lord, in thy strength: we will sing and praise thy mighty acts."]]},
  21: {sub: 'For the end, concerning the morning aid, a Psalm of David.', v: [[2, "O God, my God, attend to me: why hast thou forsaken me? the account of my transgressions is far from my salvation."], [3, "O my God, I will cry to thee by day, but thou wilt not hear: and by night, and it shall not be accounted for folly to me."], [4, "But thou, the praise of Israel, dwellest in a sanctuary."], [5, "Our fathers hoped in thee; they hoped, and thou didst deliver them."], [6, "They cried to thee, and were saved: they hoped in thee, and were not ashamed."], [7, "But I am a worm, and not a man; a reproach of men, and scorn of the people."], [8, "All that saw me mocked me: they spoke with their lips, they shook the head, saying,"], [9, "He hoped in the Lord: let him deliver him, let him save him, because he takes pleasure in him."], [10, "For thou art he that drew me out of the womb; my hope from my mother's breasts."], [11, "I was cast on thee from the womb: thou art my God from my mother's belly."], [12, "Stand not aloof from me; for affliction is near; for there is no helper."], [13, "Many bullocks have compassed me: fat bulls have beset me round."], [14, "They have opened their mouth against me, as a ravening and roaring lion."], [15, "I am poured out like water, and all my bones are loosened: my heart in the midst of my belly is become like melting wax."], [16, "My strength is dried up like a potsherd; and my tongue is glued to my throat; and thou hast brought me down to the dust of death."], [17, "For many dogs have compassed me: the assembly of the wicked doers has beset me round: they pierced my hands and my feet."], [18, "They counted all my bones; and they observed and looked upon me."], [19, "They parted my garments among themselves, and cast lots upon my raiment."], [20, "But thou, O Lord, remove not my help afar off: be ready for mine aid."], [21, "Deliver my soul from the sword; my only-begotten one from the power of the dog."], [22, "Save me from the lion's mouth; and regard my lowliness from the horns of the unicorns."], [23, "I will declare thy name to my brethren: in the midst of the church will I sing praise to thee."], [24, "Ye that fear the Lord, praise him; all ye seed of Jacob, glorify him: let all the seed of Israel fear him."], [25, "For he has not despised nor been angry at the supplication of the poor; nor turned away his face from me; but when I cried to him, he heard me."], [26, "My praise is of thee in the great congregation: I will pay my vows before them that fear him."], [27, "The poor shall eat and be satisfied; and they shall praise the Lord that seek him: their heart shall live for ever."], [28, "All the ends of the earth shall remember and turn to the Lord: and all the kindreds of the nations shall worship before him."], [29, "For the kingdom is the Lord's; and he is the governor of the nations."], [30, "All the fat ones of the earth have eaten and worshipped: all that go down to the earth shall fall down before him: my soul also lives to him."], [31, "And my seed shall serve him: the generation that is coming shall be reported to the Lord."], [32, "And they shall report his righteousness to the people that shall be born, whom the Lord has made."]]},
  22: {sub: 'A Psalm of David.', v: [[1, "The Lord tends me as a shepherd, and I shall want nothing."], [2, "In a place of green grass, there he has made me dwell: he has nourished me by the water of rest."], [3, "He has restored my soul: he has guided me into the paths of righteousness, for his name's sake."], [4, "Yea, even if I should walk in the midst of the shadow of death, I will not be afraid of evils: for thou art with me; thy rod and thy staff, these have comforted me."], [5, "Thou hast prepared a table before me in presence of them that afflict me: thou hast thoroughly anointed my head with oil; and thy cup cheers me like the best wine."], [6, "Thy mercy also shall follow me all the days of my life: and my dwelling shall be in the house of the Lord for a very long time."]]},
  23: {sub: 'A Psalm for David on the first day of the week.', v: [[1, "The earth is the Lord's and the fulness thereof; the world, and all that dwell in it."], [2, "He has founded it upon the seas, and prepared it upon the rivers."], [3, "Who shall go up to the mountain of the Lord, and who shall stand in his holy place?"], [4, "He that is innocent in his hands and pure in his heart; who has not lifted up his soul to vanity, nor sworn deceitfully to his neighbour."], [5, "He shall receive a blessing from the Lord, and mercy from God his Saviour."], [6, "This is the generation of them that seek him, that seek the face of the God of Jacob. Pause."], [7, "Lift up your gates, ye princes, and be ye lifted up, ye everlasting doors; and the king of glory shall come in."], [8, "Who is this king of glory? the Lord strong and mighty, the Lord mighty in battle."], [9, "Lift up your gates, ye princes; and be ye lift up, ye everlasting doors; and the king of glory shall come in."], [10, "Who is this king of glory? The Lord of hosts, he is this king of glory."]]},};

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function getPsalmRange(k) {
  const all = KATHISMA_MAP[k].stases.flat();
  return all.length === 1
    ? `Psalm ${all[0]}`
    : `Psalms ${all[0]}–${all[all.length - 1]}`;
}

// ─── COMPONENTS ───────────────────────────────────────────────────────────────
const C = {
  parchment: "#FAF6EE",
  ink: "#1C1008",
  inkMid: "#3D3020",
  inkLight: "#9A8A70",
  gold: "#8B6914",
  goldLight: "#D4C49A",
  goldFaint: "rgba(139,105,20,0.06)",
  border: "#E8DEC8",
};

function StasisDivider({ isLast }) {
  return (
    <div style={{
      margin: "1.25rem 0", padding: "0.75rem 1rem",
      borderLeft: `2px solid ${C.goldLight}`, borderRadius: "0 3px 3px 0",
      background: C.goldFaint, fontSize: "0.88rem", color: C.inkMid,
      lineHeight: "1.85", fontStyle: "italic",
    }}>
      {GLORY}<br />
      <span style={{ color: C.inkLight, fontSize: "0.83rem" }}>
        {ALLELUIA}<br />{ALLELUIA}<br />{ALLELUIA}
      </span>
      <br /><br />
      {isLast
        ? "O Lord, our hope, glory to Thee."
        : <>{LHM}<br /><br />{GLORY}</>
      }
    </div>
  );
}

function PsalmBlock({ num }) {
  const data = PSALMS[num];
  if (!data) {
    return (
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: C.inkLight, fontWeight: "bold", marginBottom: "0.4rem" }}>
          Psalm {num}
        </div>
        <div style={{ fontSize: "0.88rem", color: C.goldLight, fontStyle: "italic" }}>
          Text for Psalm {num} will be encoded in a future session. Visit{" "}
          <a href={`https://psalter.app/psalm/${num}/`} target="_blank" rel="noopener" style={{ color: C.gold }}>
            psalter.app
          </a>{" "}to read it now.
        </div>
      </div>
    );
  }
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <div style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: C.inkLight, fontWeight: "bold", marginBottom: "0.25rem" }}>
        Psalm {num}
      </div>
      {data.sub && (
        <div style={{ fontSize: "0.78rem", color: C.inkLight, fontStyle: "italic", marginBottom: "0.35rem" }}>
          {data.sub}
        </div>
      )}
      <div style={{ fontSize: "0.97rem", lineHeight: "1.9", color: C.inkMid }}>
        {data.v.map(([vn, text]) => (
          <span key={vn}>
            <sup style={{ fontSize: "0.62rem", color: C.gold, marginRight: "2px", verticalAlign: "super" }}>{vn}</sup>
            {text}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}

function KathismaView({ k, onNav }) {
  const topRef = useRef(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [k]);

  const info = KATHISMA_MAP[k];

  return (
    <div ref={topRef}>
      <div style={{ marginBottom: "1.4rem", paddingBottom: "0.75rem", borderBottom: `1px solid ${C.border}` }}>
        <div style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: C.gold, marginBottom: "0.2rem" }}>
          Kathisma {k}
        </div>
        <div style={{ fontSize: "0.75rem", color: C.inkLight, fontStyle: "italic" }}>
          {getPsalmRange(k)}
        </div>
      </div>

      <div style={{ fontSize: "0.88rem", color: C.inkMid, lineHeight: "1.8", marginBottom: "1.25rem", fontStyle: "italic" }}>
        {LHM}<br />{GLORY}
      </div>

      {info.stases.map((psalms, si) => {
        const isLast = si === info.stases.length - 1;
        return (
          <div key={si}>
            <div style={{
              fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase",
              color: C.gold, fontWeight: "bold", margin: "1.75rem 0 1rem",
              display: "flex", alignItems: "center", gap: "0.75rem",
            }}>
              {STASIS_NAMES[si]}
              <span style={{ flex: 1, height: "1px", background: C.goldLight, display: "block" }} />
            </div>
            {psalms.filter(Boolean).map(n => <PsalmBlock key={n} num={n} />)}
            <StasisDivider isLast={isLast} />
          </div>
        );
      })}

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem", paddingTop: "1rem", borderTop: `1px solid ${C.border}` }}>
        <button onClick={() => onNav(k - 1)} disabled={k <= 1}
          style={{ fontFamily: "Georgia, serif", fontSize: "0.82rem", color: C.gold, background: "none", border: `1px solid ${C.goldLight}`, borderRadius: "3px", padding: "5px 14px", cursor: k <= 1 ? "default" : "pointer", opacity: k <= 1 ? 0.3 : 1 }}>
          ← Kathisma {k - 1}
        </button>
        <button onClick={() => onNav(k + 1)} disabled={k >= 20}
          style={{ fontFamily: "Georgia, serif", fontSize: "0.82rem", color: C.gold, background: "none", border: `1px solid ${C.goldLight}`, borderRadius: "3px", padding: "5px 14px", cursor: k >= 20 ? "default" : "pointer", opacity: k >= 20 ? 0.3 : 1 }}>
          Kathisma {k + 1} →
        </button>
      </div>
    </div>
  );
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────
export default function Psalter() {
  const [currentK, setCurrentK] = useState(1);

  return (
    <div style={{ minHeight: "100vh", background: C.parchment, fontFamily: "Georgia, serif", color: C.ink }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "1.5rem 1.25rem 5rem" }}>

        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderBottom: `2px solid ${C.goldLight}`, paddingBottom: "0.6rem", marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, fontWeight: "bold" }}>Orthodox Psalter</span>
          <span style={{ fontSize: "0.72rem", color: C.inkLight, fontStyle: "italic" }}>Brenton Septuagint · Public Domain</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "1.75rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.12em", color: C.inkLight, marginRight: "0.2rem" }}>Kathisma</span>
          {Array.from({ length: 20 }, (_, i) => i + 1).map(k => (
            <button key={k} onClick={() => setCurrentK(k)} style={{
              fontFamily: "Georgia, serif", fontSize: "0.78rem",
              padding: "3px 8px", border: `1px solid ${C.goldLight}`, borderRadius: "3px",
              background: currentK === k ? C.gold : "transparent",
              color: currentK === k ? C.parchment : C.gold,
              cursor: "pointer",
            }}>
              {k}
            </button>
          ))}
        </div>

        <KathismaView key={currentK} k={currentK} onNav={setCurrentK} />

        <div style={{ marginTop: "3rem", paddingTop: "1rem", borderTop: `1px solid ${C.border}`, fontSize: "0.7rem", color: "#B8A882", fontStyle: "italic", textAlign: "center", lineHeight: "1.6" }}>
          Psalm texts from the Brenton Septuagint (1851), public domain.<br />
          Sourced from <a href="https://psalter.app" target="_blank" rel="noopener" style={{ color: C.gold }}>psalter.app</a> (MIT license).
          Kathismata 1–3 fully encoded · K4–K20 encoding in progress.
        </div>

      </div>
    </div>
  );
}
