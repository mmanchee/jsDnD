
// export class Character {
//   constructor(class){
//     this.className = class.name;
//     this.hp = class.hit_die;
//     this.armorClass = 10;
//     this.attack = 0;
//     this.damage = 0;
//     this.lvl = `https://www.dnd5eapi.co/${class.levels};
//     this.exp = 0;
//     this.inventory = [];
//     this.img;
//   }
// }

class BarbarianCharacter {
  constructor(name){
    this.name = name;
    this.hp = 12;
    this.armorClass = 10;
    this.attack = 0;
    this.damage = 0;
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img;
  }
}

class RangerCharacter {
  constructor(name){
    this.name = name;
    this.hp = 10;
    this.armorClass = 10;
    this.attack = 0;
    this.damage = 0;
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img;
  }
}

class WizardCharacter {
  constructor(name){
    this.name = name;
    this.hp = 6;
    this.armorClass = 10;
    this.attack = 0;
    this.damage = 0;
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img;
  }
}

class BardCharacter {
  constructor(name){
    this.name = name;
    this.hp = 8;
    this.armorClass = 10;
    this.attack = 0;
    this.damage = 0;
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img;
  }
}

class ClericCharacter {
  constructor(name){
    this.name = name;
    this.hp = 8;
    this.armorClass = 10;
    this.attack = 0;
    this.damage = 0;
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img;
  }
}

class DruidCharacter {
  constructor(name){
    this.name = name;
    this.hp = 8;
    this.armorClass = 10;
    this.attack = 0;
    this.damage = 0;
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img;
  }
}

class FighterCharacter {
  constructor(name){
    this.name = name;
    this.hp = 10;
    this.armorClass = 10;
    this.attack = 0;
    this.damage = 0;
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img;
  }
}

class MonkCharacter {
  constructor(name){
    this.name = name;
    this.hp = 8;
    this.armorClass = 10;
    this.attack = 0;
    this.damage = 0;
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img;
  }
}

class PaladinCharacter {
  constructor(name){
    this.name = name;
    this.hp = 10;
    this.armorClass = 10;
    this.attack = 0;
    this.damage = 0;
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img;
  }
}

class RogueCharacter {
  constructor(name){
    this.name = name;
    this.hp = 8;
    this.armorClass = 10;
    this.attack = 0;
    this.damage = 0;
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img;
  }
}

class SorcererCharacter {
  constructor(name){
    this.name = name;
    this.hp = 6;
    this.armorClass = 10;
    this.attack = 0;
    this.damage = 0;
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img;
  }
}

class WarlockCharacter {
  constructor(name){
    this.name = name;
    this.hp = 8;
    this.armorClass = 10;
    this.attack = 0;
    this.damage = 0;
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img;
  }
}


export function getCharacter(name,charClass) {
  let character;
  switch (charClass) {
    case "barbarian":
      character = new BarbarianCharacter(name);
      break;
    case "bard":
      character = new BardCharacter(name);
      break;
    case "cleric":
      character = new ClericCharacter(name);
      break;
    case "druid":
      character = new DruidCharacter(name);
      break;
    case "fighter":
      character = new FighterCharacter(name);
      break;
    case "monk":
      character = new MonkCharacter(name);
      break;
    case "paladin":
      character = new PaladinCharacter(name);
      break;
    case "ranger":
      character = new RangerCharacter(name);
      break;
    case "rogue":
      character = new RogueCharacter(name);
      break;
    case "sorcerer":
      character = new SorcererCharacter(name);
      break;
    case "warlock":
      character = new WarlockCharacter(name);
      break;
    case "wizard":
      character = new WizardCharacter(name);
  }
  return character;
}