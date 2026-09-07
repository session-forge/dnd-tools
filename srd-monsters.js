/* ---------------------------------------------------------------------------
   SRD 5.2.1 monster data
   ---------------------------------------------------------------------------
   This work includes material from the System Reference Document 5.2.1
   ("SRD 5.2.1") by Wizards of the Coast LLC, available at
   https://www.dndbeyond.com/srd. The SRD 5.2.1 is licensed under the Creative
   Commons Attribution 4.0 International License, available at
   https://creativecommons.org/licenses/by/4.0/legalcode.
   ---------------------------------------------------------------------------

   SCHEMA — every monster object:
   {
     name:    "Goblin Warrior",
     size:    "Small",
     type:    "Fey, Goblinoid",
     align:   "Chaotic Neutral",
     ac:      13,
     initMod: 2,            // the "Initiative +2 (12)" bonus
     hp:      7,
     hpDice:  "2d6",
     speed:   "30 ft.",
     abilities: {           // [score, modifier, saving throw bonus]
       str:[8,-1,-1], dex:[15,2,2], con:[10,0,0],
       int:[10,0,0], wis:[8,-1,-1], cha:[8,-1,-1]
     },
     skills:  "Stealth +6",
     resist:  "", immune:"", vuln:"",
     senses:  "Darkvision 60 ft.; Passive Perception 9",
     langs:   "Common, Goblin",
     cr:      "1/4",
     xp:      50,
     pb:      2,
     traits:  [ {name:"...", text:"..."} ],
     actions: [ {name:"...", text:"..."} ],
     bonus:   [], reactions: [], legendary: [], legendaryNote: ""
   }
--------------------------------------------------------------------------- */

const SRD_META = {
  version: "5.2.1",
  complete: false,        // flip to true once the full set is generated
  note: "Sample set — replace this file with the full parsed SRD data."
};

const SRD_MONSTERS = [
  {
    name: "Goblin Warrior", size: "Small", type: "Fey, Goblinoid", align: "Chaotic Neutral",
    ac: 13, initMod: 2, hp: 7, hpDice: "2d6", speed: "30 ft.",
    abilities: { str:[8,-1,-1], dex:[15,2,2], con:[10,0,0], int:[10,0,0], wis:[8,-1,-1], cha:[8,-1,-1] },
    skills: "Stealth +6", resist: "", immune: "", vuln: "",
    senses: "Darkvision 60 ft.; Passive Perception 9", langs: "Common, Goblin",
    cr: "1/4", xp: 50, pb: 2,
    traits: [],
    actions: [
      { name: "Scimitar", text: "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d6 + 1) Slashing damage." },
      { name: "Shortbow", text: "Ranged Attack Roll: +4, range 80/320 ft. Hit: 5 (1d6 + 2) Piercing damage." }
    ],
    bonus: [ { name: "Nimble Escape", text: "The goblin takes the Disengage or Hide action." } ],
    reactions: [], legendary: [], legendaryNote: ""
  },
  {
    name: "Goblin Boss", size: "Small", type: "Fey, Goblinoid", align: "Chaotic Neutral",
    ac: 17, initMod: 2, hp: 21, hpDice: "6d6", speed: "30 ft.",
    abilities: { str:[10,0,0], dex:[15,2,2], con:[10,0,0], int:[10,0,0], wis:[8,-1,-1], cha:[10,0,0] },
    skills: "Stealth +6", resist: "", immune: "", vuln: "",
    senses: "Darkvision 60 ft.; Passive Perception 9", langs: "Common, Goblin",
    cr: "1", xp: 200, pb: 2,
    traits: [],
    actions: [
      { name: "Multiattack", text: "The goblin makes two attacks." },
      { name: "Scimitar", text: "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Slashing damage, plus 2 (1d4) Slashing damage if the attack was made with Advantage." },
      { name: "Shortbow", text: "Ranged Attack Roll: +4, range 80/320 ft. Hit: 5 (1d6 + 2) Piercing damage, plus 2 (1d4) Piercing damage if the attack was made with Advantage." }
    ],
    bonus: [ { name: "Nimble Escape", text: "The goblin takes the Disengage or Hide action." } ],
    reactions: [ { name: "Redirect Attack", text: "Trigger: A creature the goblin can see makes an attack roll against it. Response: The goblin chooses a Small or Medium ally within 5 feet of itself. The two swap places, and the chosen ally becomes the target of the attack instead." } ],
    legendary: [], legendaryNote: ""
  },
  {
    name: "Wolf", size: "Medium", type: "Beast", align: "Unaligned",
    ac: 12, initMod: 2, hp: 11, hpDice: "2d8+2", speed: "40 ft.",
    abilities: { str:[14,2,2], dex:[15,2,2], con:[12,1,1], int:[3,-4,-4], wis:[12,1,1], cha:[6,-2,-2] },
    skills: "Perception +5, Stealth +4", resist: "", immune: "", vuln: "",
    senses: "Passive Perception 15", langs: "",
    cr: "1/4", xp: 50, pb: 2,
    traits: [ { name: "Pack Tactics", text: "The wolf has Advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition." } ],
    actions: [
      { name: "Bite", text: "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage. If the target is a Medium or smaller creature, it has the Prone condition." }
    ],
    bonus: [], reactions: [], legendary: [], legendaryNote: ""
  },
  {
    name: "Bandit", size: "Medium or Small", type: "Humanoid", align: "Neutral",
    ac: 12, initMod: 1, hp: 11, hpDice: "2d8+2", speed: "30 ft.",
    abilities: { str:[11,0,0], dex:[12,1,1], con:[12,1,1], int:[10,0,0], wis:[10,0,0], cha:[10,0,0] },
    skills: "", resist: "", immune: "", vuln: "",
    senses: "Passive Perception 10", langs: "Common, Thieves' Cant",
    cr: "1/8", xp: 25, pb: 2,
    traits: [],
    actions: [
      { name: "Scimitar", text: "Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1) Slashing damage." },
      { name: "Light Crossbow", text: "Ranged Attack Roll: +3, range 80/320 ft. Hit: 5 (1d8 + 1) Piercing damage." }
    ],
    bonus: [], reactions: [], legendary: [], legendaryNote: ""
  },
  {
    name: "Skeleton", size: "Medium", type: "Undead", align: "Lawful Evil",
    ac: 14, initMod: 3, hp: 13, hpDice: "2d8+4", speed: "30 ft.",
    abilities: { str:[10,0,0], dex:[16,3,3], con:[15,2,2], int:[6,-2,-2], wis:[8,-1,-1], cha:[5,-3,-3] },
    skills: "", resist: "", immune: "Poison; Exhaustion, Poisoned", vuln: "Bludgeoning",
    senses: "Darkvision 60 ft.; Passive Perception 9", langs: "Understands Common Plus One Other Language But Can't Speak",
    cr: "1/4", xp: 50, pb: 2,
    traits: [],
    actions: [
      { name: "Shortsword", text: "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Piercing damage." },
      { name: "Shortbow", text: "Ranged Attack Roll: +5, range 80/320 ft. Hit: 6 (1d6 + 3) Piercing damage." }
    ],
    bonus: [], reactions: [], legendary: [], legendaryNote: ""
  },
  {
    name: "Zombie", size: "Medium", type: "Undead", align: "Neutral Evil",
    ac: 8, initMod: -2, hp: 15, hpDice: "2d8+6", speed: "20 ft.",
    abilities: { str:[13,1,1], dex:[6,-2,-2], con:[16,3,3], int:[3,-4,-4], wis:[6,-2,0], cha:[5,-3,-3] },
    skills: "", resist: "", immune: "Poison; Exhaustion, Poisoned", vuln: "",
    senses: "Darkvision 60 ft.; Passive Perception 8", langs: "Understands Common Plus One Other Language But Can't Speak",
    cr: "1/4", xp: 50, pb: 2,
    traits: [ { name: "Undead Fortitude", text: "If damage reduces the zombie to 0 Hit Points, it makes a Constitution saving throw (DC 5 plus the damage taken) unless the damage is Radiant or from a Critical Hit. On a successful save, the zombie drops to 1 Hit Point instead." } ],
    actions: [
      { name: "Slam", text: "Melee Attack Roll: +3, reach 5 ft. Hit: 5 (1d8 + 1) Bludgeoning damage." }
    ],
    bonus: [], reactions: [], legendary: [], legendaryNote: ""
  },
  {
    name: "Ogre", size: "Large", type: "Giant", align: "Chaotic Evil",
    ac: 11, initMod: -1, hp: 68, hpDice: "8d10+24", speed: "40 ft.",
    abilities: { str:[19,4,4], dex:[8,-1,-1], con:[16,3,3], int:[5,-3,-3], wis:[7,-2,-2], cha:[7,-2,-2] },
    skills: "", resist: "", immune: "", vuln: "",
    senses: "Darkvision 60 ft.; Passive Perception 8", langs: "Common, Giant",
    cr: "2", xp: 450, pb: 2,
    traits: [],
    actions: [
      { name: "Greatclub", text: "Melee Attack Roll: +6, reach 5 ft. Hit: 13 (2d8 + 4) Bludgeoning damage." },
      { name: "Javelin", text: "Melee or Ranged Attack Roll: +6, reach 5 ft. or range 30/120 ft. Hit: 11 (2d6 + 4) Piercing damage." }
    ],
    bonus: [], reactions: [], legendary: [], legendaryNote: ""
  },
  {
    name: "Owlbear", size: "Large", type: "Monstrosity", align: "Unaligned",
    ac: 13, initMod: 1, hp: 59, hpDice: "7d10+21", speed: "30 ft., Climb 30 ft.",
    abilities: { str:[20,5,5], dex:[12,1,1], con:[17,3,3], int:[3,-4,-4], wis:[12,1,1], cha:[7,-2,-2] },
    skills: "Perception +5", resist: "", immune: "", vuln: "",
    senses: "Darkvision 60 ft.; Passive Perception 15", langs: "",
    cr: "3", xp: 700, pb: 2,
    traits: [],
    actions: [
      { name: "Multiattack", text: "The owlbear makes two Rend attacks." },
      { name: "Rend", text: "Melee Attack Roll: +7, reach 5 ft. Hit: 8 (1d8 + 4) Slashing damage." }
    ],
    bonus: [ { name: "Ferocious Charge (Recharge 4-6)", text: "The owlbear moves up to its Speed straight toward an enemy it can see." } ],
    reactions: [], legendary: [], legendaryNote: ""
  },
  {
    name: "Commoner", size: "Medium or Small", type: "Humanoid", align: "Neutral",
    ac: 10, initMod: 0, hp: 4, hpDice: "1d8", speed: "30 ft.",
    abilities: { str:[10,0,0], dex:[10,0,0], con:[10,0,0], int:[10,0,0], wis:[10,0,0], cha:[10,0,0] },
    skills: "", resist: "", immune: "", vuln: "",
    senses: "Passive Perception 10", langs: "Common",
    cr: "0", xp: 10, pb: 2,
    traits: [ { name: "Training", text: "The commoner has proficiency in one skill of the GM's choice and has Advantage whenever it makes an ability check using that skill." } ],
    actions: [
      { name: "Club", text: "Melee Attack Roll: +2, reach 5 ft. Hit: 2 (1d4) Bludgeoning damage." }
    ],
    bonus: [], reactions: [], legendary: [], legendaryNote: ""
  },
  {
    name: "Dire Wolf", size: "Large", type: "Beast", align: "Unaligned",
    ac: 14, initMod: 2, hp: 22, hpDice: "3d10+6", speed: "50 ft.",
    abilities: { str:[17,3,3], dex:[15,2,2], con:[15,2,2], int:[3,-4,-4], wis:[12,1,1], cha:[7,-2,-2] },
    skills: "Perception +5, Stealth +4", resist: "", immune: "", vuln: "",
    senses: "Passive Perception 15", langs: "",
    cr: "1", xp: 200, pb: 2,
    traits: [ { name: "Pack Tactics", text: "The wolf has Advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition." } ],
    actions: [
      { name: "Bite", text: "Melee Attack Roll: +5, reach 5 ft. Hit: 8 (1d10 + 3) Piercing damage. If the target is a Large or smaller creature, it has the Prone condition." }
    ],
    bonus: [], reactions: [], legendary: [], legendaryNote: ""
  }
];
