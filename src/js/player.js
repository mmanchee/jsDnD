class BarbarianCharacter {
  constructor(name){
    this.name = name;
    this.hp = 12;
    this.armorClass = 10;
    this.attack = 0;
    this.damage = [1, 12];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://i.pinimg.com/736x/ca/f3/26/caf3269770ab71cf0abd3e85f14aaf86.jpg";
  }
}

class BardCharacter {
  constructor(name){
    this.name = name;
    this.hp = 8;
    this.armorClass = 10;
    this.attack = 0;
    this.damage = [1, 6];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://i.pinimg.com/originals/b7/0e/d6/b70ed6eea7b09eea2d6612ddd099f188.png";
  }
}

class ClericCharacter {
  constructor(name){
    this.name = name;
    this.hp = 8;
    this.armorClass = 10;
    this.attack = 0;
    this.damage = [1, 6];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://oldschoolroleplaying.com/wp-content/uploads/2019/05/Cleric-Two.jpg";
  }
}

class DruidCharacter {
  constructor(name){
    this.name = name;
    this.hp = 8;
    this.armorClass = 10;
    this.attack = 0;
    this.damage = [1, 4];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://i2.wp.com/nerdarchy.com/wp-content/uploads/2015/11/PZO1121-ElfDruid.jpg?resize=774%2C1000&ssl=1";
  }
}

class FighterCharacter {
  constructor(name){
    this.name = name;
    this.hp = 10;
    this.armorClass = 10;
    this.attack = 0;
    this.damage = [1, 8];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://vignette.wikia.nocookie.net/eladriells-dd/images/f/f4/Fighter.jpg/revision/latest?cb=20190324022153";
  }
}

class MonkCharacter {
  constructor(name){
    this.name = name;
    this.hp = 8;
    this.armorClass = 10;
    this.attack = 0;
    this.damage = [1, 4];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://oldschoolroleplaying.com/wp-content/uploads/2019/03/monk-five.jpg";
  }
}

class PaladinCharacter {
  constructor(name){
    this.name = name;
    this.hp = 10;
    this.armorClass = 12;
    this.attack = 0;
    this.damage = [1, 6];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://oldschoolroleplaying.com/wp-content/uploads/2019/03/Paladin-Two-569x1024.png";
  }
}

class RangerCharacter {
  constructor(name){
    this.name = name;
    this.hp = 10;
    this.armorClass = 10;
    this.attack = 0;
    this.damage = [1, 6];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://oldschoolroleplaying.com/wp-content/uploads/2019/04/ranger-two.jpg";
  }
}

class RogueCharacter {
  constructor(name){
    this.name = name;
    this.hp = 8;
    this.armorClass = 10;
    this.attack = 0;
    this.damage = [1, 4];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://i.pinimg.com/originals/21/2d/71/212d710a1ce457d541cfaa5345534851.png";
  }
}

class SorcererCharacter {
  constructor(name){
    this.name = name;
    this.hp = 6;
    this.armorClass = 10;
    this.attack = 3000;
    this.damage = [1, 4];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://i.pinimg.com/originals/b1/ce/a3/b1cea385f37b7c271c18da08b0bf574e.png";
  }
}

class WarlockCharacter {
  constructor(name){
    this.name = name;
    this.hp = 8;
    this.armorClass = 10;
    this.attack = 3000;
    this.damage = [1, 4];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://wizardofthetavern.com/wp-content/uploads/2019/05/warlock.jpg";
  }
}

class WizardCharacter {
  constructor(name){
    this.name = name;
    this.hp = 6;
    this.armorClass = 10;
    this.attack = 3000;
    this.damage = [1, 4];
    this.lvl = 1;
    this.exp = 0;
    this.inventory = [];
    this.img = "https://i.pinimg.com/originals/54/5e/cb/545ecb06834f6fe5afd5faebcae19a5a.png";
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