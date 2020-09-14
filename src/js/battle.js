export class Battle {
  constructor(character, monster) {
    this.character = character;
    this.monster = monster;
  }

  meleeAttack() {
    let message;
    let rollTotal = this.character.attack + diceRoll(1,20);
    if (rollTotal > this.monster.armorClass) {
      let damageRoll = diceRoll(this.character.damage[0],this.character.damage[1]);
      this.monster.healthPoints -= damageRoll;
      message = `You hit for ${damageRoll}<br>`;
    } else {
      message = `You missed!<br>`;
    }
    return message;
  }

  flee() {
    this.character = "";
    this.monster = "";    
  }

  endTurn() {
    let message;
    let damageRoll;
    let actionL = this.monster.actions.length;
    actionL < 1 ? actionL = 0 : false;
    let ran =  Math.floor(Math.random() * actionL);

    for (let i = 0; i < 4; i++){
      if (this.monster.actions[ran].name === "Multiattack") {
        ran = Math.round(Math.random() * actionL);
        console.log("in");
      } else {
        i = 4;
      }
    }

    let rollTotal = this.monster.actions[ran].attack_bonus + diceRoll(1,20);
    if (rollTotal > this.character.armorClass) {
      for (let i=0; i<this.monster.actions[ran].damage.length; i++) {
        let damageRollArray = sortAPIDice(this.monster.actions[ran].damage[i].damage_dice);
        damageRoll = Math.ceil((diceRoll(damageRollArray[0],damageRollArray[1]) + damageRollArray[2]) / 5);
        if (isNaN(damageRoll)) {
          damageRoll = 1;
        }
        this.character.hp -= damageRoll;
      }
      message = `The ${this.monster.name} used ${this.monster.actions[ran].name} and hit you for ${damageRoll}!<br>`;
    } else {
      message = `The ${this.monster.name} missed!<br>`;
    }
    return message;
  }
}

function sortAPIDice(dice) {
  let diceArray = dice.replace(/\D/g,'');
  diceArray = diceArray.split("");
  
  if (/[-]/g.test(dice)) {
    diceArray[2] = "-" + diceArray[2];
  }
  diceArray.forEach(function(n) {
    diceArray[n] = parseInt(n);
  });
  return diceArray;
}
