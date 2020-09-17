export function diceRoll(num, side) {      // diceRoll(1, 6);
  let roll = 0;
  num = parseInt(num);
  side = parseInt(side);
  for (let i = 0; i < num; i++) {
    roll += Math.ceil(Math.random() * side);
  }
  return roll;                      // roll total
}

export function diceRollDMG(num, side, mod) {      // diceRoll(1, 6);
  let roll = 0;
  num = parseInt(num);
  side = parseInt(side);
  mod = parseInt(mod);
  for (let i = 0; i < num; i++) {
    roll += Math.ceil(Math.random() * side);
  }
  roll += mod;
  return roll;                      // roll total
}

export function addExp(player, monXP) {
  player.exp += monXP;
  let newPlayer = checkPoints(player);
  return newPlayer;
}

function checkPoints(player) {
  let exp = player.exp;
  let lvl = player.lvl;
  let newLvl = 0;
  let expArray = [300,900,2700,6500,14000,23000,34000,48000,64000,85000,100000,120000,140000,165000,195000,225000,265000,305000,355000, 410000,470000,530000,600000,670000,750000,830000,920000,1010000];
  let levelArray = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
  for (let i = 0; i < expArray.length; i++) {
    if (expArray[i] < exp) {
      newLvl = levelArray[i];
    }
  }
  newLvl++;
  if (newLvl > lvl) {
    let dif = newLvl - lvl;
    player.lvl = newLvl;
    for (let i = 0; i < dif; i++) {
      player.attack++;
      let roll = (diceRoll(1,player.hpDice) + player.charStats.conBonus);
      player.maxHP += roll;
      player.hp += roll;
      player.bonusPoints++;
    }
  }
  return player;
}