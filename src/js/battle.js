export class Battle {
  constructor(character, monster) {
    this.character = character;
    this.monster = monster;
    this.endBattle = false;
  }

  attacking() {
    this.monster.hp -= this.character.attack;
    this.character.hp -= this.monster.attack;
  }

  runAway() {
    let chance =  Math.ceil(Math.random() * 10);
    if (chance >= 5) {
      this.endBattle = true;
    } else {
      this.character.hp -= this.monster.attack;
    }
  }

  getLoot() {
    this.character.loot.push(this.monster.stuff[0]);
    this.character.exp += this.monster.exp;
  }
}