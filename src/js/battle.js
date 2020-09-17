import { diceRoll } from './rollFunctions';
import { diceRollDMG } from './rollFunctions';

export class Battle {
  constructor(character, monster) {
    this.character = character;
    this.monster = monster;
  }

  meleeAttack() {
    let message;
    let attackRoll = this.character.attack + diceRoll(1,20);
    if (attackRoll > this.monster.armorClass) {
      let damageRoll = diceRollDMG(this.character.damage[0],this.character.damage[1],this.character.damage[2]);
      this.monster.healthPoints -= damageRoll;
      message = `You hit for ${damageRoll} damage<br>`;
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
    let actionLength = this.monster.actions.length;
    let ran =  Math.round(Math.random() * (actionLength-1));
    for (let i = 0; i < 4; i++){
      if (isNaN(parseInt(this.monster.actions[ran].attack_bonus))) {
        ran = Math.round(Math.random() * (actionLength-1));
      } else {
        i = 4;
      }
    }

    let rollTotal = this.monster.actions[ran].attack_bonus + diceRoll(1,20);
    if (rollTotal > this.character.armorClass) {
      for (let i=0; i<this.monster.actions[ran].damage.length; i++) {
        if (this.monster.actions[ran].damage[i].damage_dice) {
          let damageRollArray = sortAPIDice(this.monster.actions[ran].damage[i].damage_dice);
          if (damageRollArray.length < 3) {
            damageRollArray.push(0);
          }
          damageRoll = Math.ceil(diceRollDMG(damageRollArray[0],damageRollArray[1],damageRollArray[2]));
          if (isNaN(damageRoll)) {
            damageRoll = 1;
          }
        } else {
          break;
        }
        this.character.hp -= damageRoll;
      }
      message = `The ${this.monster.name} used ${this.monster.actions[ran].name} and hit you for ${damageRoll}!<br>`;
    } else {
      message = `The ${this.monster.name} missed!<br>`;
    }
    return message;
  }

  useHealthPotion() {
    let message;
    if (this.character.inventory[0].healthPotion > 0) {
      this.character.inventory[0].healthPotion -= 1;
      this.character.hp += 10;
      if (this.character.hp > this.character.maxHP) {
        this.character.hp = this.character.maxHP;
      }
      message = "SUSTENANCE<br>";
    } else {
      message = "You don't have any health potions to use!<br>";
    }
    return message;
  }

  getMoney() {
    this.character.money += this.monster.gold;
    let message = `${this.monster.name} dropped ${this.monster.gold} gold.<br>` ;
    return message;
  }

  secondAttack() {
    let message;
    if (this.character.actions[0].limit === 0) {
      message = `You've run out of charges!<br>`;
      return message;
    } else {
      this.character.actions[0].limit -= 1;
      let attackRoll = this.character.actions[0].attack + diceRoll(1,20);
      if (attackRoll > this.monster.armorClass) {
        let damageRoll = diceRollDMG(this.character.actions[0].damage[0],this.character.actions[0].damage[1],this.character.actions[0].damage[2]);
        this.monster.healthPoints -= damageRoll;
        message = `You hit for ${damageRoll} damage<br>`;
      } else {
        message = `You fucked up and missed!<br>`;
      }
      return message;
    }
  }
}

function sortAPIDice(dice) {
  let diceArray = dice.replace(/d/g,' ');
  diceArray = dice.replace(/\D/g,' ');
  diceArray = diceArray.split(" ");
  /[-]/g.test(dice) ? diceArray[diceArray.length-1] = "-" + diceArray[diceArray.length-1] : false;
  return diceArray;       // diceArray = [1, 6, 1] or [1, 6, -1]
}