import { diceRoll } from './rollFunctions';

export function updatePlayer(strength,dexterity,intelligence,wisdom,charisma,constitution,bonusPoints, player) {
  let bonus = 0;
  let change = 0;
  player.bonusPoints = bonusPoints;
  if (player.charStats.strength < strength) {
    player.charStats.strength = strength;
    bonus = bonusCalcUpdate(strength);
    change = (bonus - player.charStats.strBonus);
    if (change > 0) {
      player.charStats.strBonus += change;
      player.attack += change;
      player.damage[2] += change;
    }
  }
  if (player.charStats.dexterity < dexterity) {
    player.charStats.dexterity = dexterity;
    bonus = bonusCalcUpdate(dexterity);
    change = (bonus - player.charStats.dexBonus);
    if (change > 0) {
      player.charStats.dexBonus += change;
      player.armorClass += change;

    }
  }
  if (player.charStats.intelligence < intelligence) {
    player.charStats.intelligence = intelligence;
    bonus = bonusCalcUpdate(intelligence);
    change = (bonus - player.charStats.intBonus);
    if (change > 0) {
      player.charStats.intBonus += change;
    }
  }
  if (player.charStats.wisdom < wisdom) {
    player.charStats.wisdom = wisdom;
    bonus = bonusCalcUpdate(wisdom);
    change = (bonus - player.charStats.wisBonus);
    if (change > 0) {
      player.charStats.wisBonus += change;
    }
  }
  if (player.charStats.charisma < charisma) {
    player.charStats.charisma = charisma;
    bonus = bonusCalcUpdate(charisma);
    change = (bonus - player.charStats.chaBonus);
    if (change > 0) {
      player.charStats.chaBonus += change;
    }
  }
  if (player.charStats.constitution < constitution) {
    player.charStats.constitution = constitution;
    bonus = bonusCalcUpdate(constitution);
    change = (bonus - player.charStats.conBonus);
    if (change > 0) {
      player.charStats.conBonus += change;
      let gain = player.lvl * change;
      player.maxHP += gain;
      player.hp += gain;
    }
  }

  return player;
}
  
function bonusCalcUpdate(stat) {
  let bonus = 0;
  if (stat > 17) {
    bonus = 4;
  } else if (stat > 15) {
    bonus = 3;
  } else if (stat > 13) {
    bonus = 2;
  } else if (stat > 11) {
    bonus = 1;
  } else if (stat > 9 ) {
    bonus = 0;
  } else {
    bonus = -1;
  }
  return bonus;
}
export function statRoll() {
  let rolls = [];
  let total = 0;
  for (let i = 0; i < 4; i++) {
    for (let e = 0; e < 10; e++) {
      let a = 0;
      a = diceRoll(1, 6);
      if (a > 1) {
        rolls.push(a);
        e = 10;
      } else {
        e = 0;
      }
    }
  }
  rolls.sort();
  rolls.pop();
  rolls.forEach(function(e) {
    total += e;
  });
  return total;
}