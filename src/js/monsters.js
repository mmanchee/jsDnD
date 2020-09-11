import {monsterList} from './monsterList.js';

export function getMonster(challengeRatingMin,challengeRatingMax) {
  let min = Math.ceil(challengeRatingMin);
  let max = Math.floor(challengeRatingMax);
  if (max > 28) {
    max = 28;
  }
  let chosenArray = monsterList[(Math.floor(Math.random() * (max - min + 1) + min))+4];
  return chosenArray[Math.floor(Math.random() * Math.floor(chosenArray.length))];
}

export class Monster {
  constructor(monsterObject, monsterPic) {
    this.name = monsterObject.name;
    this.challengeRating = monsterObject.challenge_rating;
    this.maxHP = monsterObject.hit_points;
    this.healthPoints = monsterObject.hit_points;
    this.armorClass = monsterObject.armor_class; 
    this.actions = monsterObject.actions;
    this.exp = monsterObject.challenge_rating * 12345;
    this.loot;
    this.img = monsterPic;
  }
}