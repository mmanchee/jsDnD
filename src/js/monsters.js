import {monsterList} from './monsterList.js';
import {diceRoll} from './rollFunctions.js';

export class Monster {
  constructor(monsterObject, monsterPic) {
    this.name = monsterObject.name;
    this.challengeRating = monsterObject.challenge_rating;
    this.maxHP = Math.ceil(parseInt(monsterObject.hit_points) / 5);
    this.healthPoints = this.maxHP;
    this.armorClass = monsterObject.armor_class; 
    this.actions = monsterObject.actions;
    this.exp = monsterObject.challenge_rating * 12345;
    this.gold = parseInt(monsterObject.challenge_rating) * diceRoll(parseInt(monsterObject.challenge_rating), 100);
    this.img = monsterPic;
  }
}

export function getMonster(challengeRatingMin,challengeRatingMax) {   
  let min = Math.ceil(challengeRatingMin);
  let max = Math.floor(challengeRatingMax);
  if (max > 28) {
    max = 28;
  }
  let chosenArray = monsterList[(Math.floor(Math.random() * (max - min + 1) + min))+4];
  return chosenArray[Math.floor(Math.random() * Math.floor(chosenArray.length))];
}

export function displayMonsterHealth(monster) {
  let message;
  let percentHP = monster.healthPoints / monster.maxHP;
  if (percentHP > 0.75) {
    message = "Tip-top Condition";
  } else if (percentHP > 0.5) {
    message = "Wounded";
  } else if (percentHP > 0.25) {
    message = "Weak";
  } else if (percentHP > 0) {
    message = "Dying";
  } else {
    message = "OOO you know he dead";
  }
  return message;
}