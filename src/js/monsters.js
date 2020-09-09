
let arrayMonstersCR = [arrayCR0,arrayCR0125,arrayCR025,arrayCR05,arrayCR1,arrayCR2,arrayCR3,arrayCR4,arrayCR5,arrayCR6,arrayCR7,arrayCR8,arrayCR9,arrayCR10,arrayCR11,arrayCR12,arrayCR13,arrayCR14,arrayCR15,arrayCR16,arrayCR17,arrayCR19,arrayCR20,arrayCR21,arrayCR22,arrayCR23,arrayCR24,arrayCR30];
let arrayCR0 = [];
let arrayCR0125 = [];
let arrayCR025 = [];
let arrayCR05 = [];
let arrayCR1 = [];
let arrayCR2 = [];
let arrayCR3 = [];
let arrayCR4 = [];
let arrayCR5 = [];
let arrayCR6 = [];
let arrayCR7 = [];
let arrayCR8 = [];
let arrayCR9 = [];
let arrayCR10 = [];
let arrayCR11 = [];
let arrayCR12 = [];
let arrayCR13 = [];
let arrayCR14 = [];
let arrayCR15 = [];
let arrayCR16 = [];
let arrayCR17 = [];
let arrayCR19 = [];
let arrayCR20 = [];
let arrayCR21 = [];
let arrayCR22 = [];
let arrayCR23 = [];
let arrayCR24 = [];
let arrayCR30 = [];
let cRArray = [0,.125,.25,.5,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,23,24,30];

export function sortMonsters(data) {
  data.results.forEach(function(monster) {
    let request = new XMLHttpRequest();

    const url = `https://www.dnd5eapi.co${monster.url}`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getCR(response);
      }
    };
    request.open("GET", url, true);
    request.send();
    
  });
  return arrayMonstersCR;
}


function getCR(monsterInfo) {
  for (let i = 0; i < cRArray.length; i++) {
    if (monsterInfo.challenge_rating === cRArray[i]) {
      arrayMonstersCR[i].push(monsterInfo.url);
    }
  }
}

export function getMonster(challengeRatingMin,challengeRatingMax) {
  let min = Math.ceil(challengeRatingMin);
  let max = Math.floor(challengeRatingMax);
  let chosenArray = arrayMonstersCR[(Math.floor(Math.random() * (max - min + 1) + min))+4];
  let chosenMonsterURL = chosenArray[Math.floor(Math.random() * Math.floor(chosenArray.length))];
  let monsterObject = `https://www.dnd5eapi.co${chosenMonsterURL}`;
  return monsterObject;
}

// class Monster {
//   constructor(monsterObject) {
//     this.name = monsterObject.name;
//     this.challengeRating = monsterObject.challenge_rating;
//     this.healthPoints = monsterObject.hit_points;
//     this.armorClass = monsterObject.armor_class; 
//     this.actions = monsterObject.actions;
//     this.exp;
//     this.loot;
//     this.img;
//   }
// }