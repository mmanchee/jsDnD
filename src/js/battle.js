export class Battle {
  constructor(character, monster) {
    this.character = character;
    this.monster = monster;
    this.endBattle = false;
  }
}

//   attacking() {
//     this.monster.hp -= this.character.attack;
//     this.character.hp -= this.monster.attack;
//   }

//   runAway() {
//     let chance =  Math.ceil(Math.random() * 10);
//     if (chance >= 5) {
//       this.endBattle = true;
//     } else {
//       this.character.hp -= this.monster.attack;
//     }
//   }

//   getLoot() {
//     this.character.loot.push(this.monster.stuff[0]);
//     this.character.exp += this.monster.exp;
//   }
// }

// 
// dice = actions[0].damage[0].damage_dice;
// diceArray = dice.slice("d");
// diceArray[2] = dicArray[1].slice("+");
// diceArray[2] = dicArray[1].slice("-");
// for (let i = 0; i < diceArray.length; i++) { 
//}
// diceRoll(1, 6);

function diceRoll(num, side) {
  let roll = 0;
  for (let i = 0; i < num; i++) {
    roll += Math.ceil(Math.random() * side);
  }
  return roll;
}

let damageDice = "2d6-4"
damageDice1 = damageDice.replace(/\D/g,'');
damageDice1 = damageDice1.split("")
if (/[-]/g.test(damageDice)) {
  damageDice1 = "-" + damageDice1[2];
}