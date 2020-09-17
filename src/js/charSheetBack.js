import { diceRoll } from './rollFunctions';

export function updatePlayer(strength,dexterity,intelligence,wisdom,charisma,constitution,bonusPoints, player) {
  let bonus = 0;
  let change = 0;
  player.bonusPoints = bonusPoints;
  if (player.strength < strength) {
    player.strength = strength;
    bonus = bonusCalcUpdate(strength);
    change = (bonus - player.strBonus);
    if (change > 0) {
      player.strBonus += change;
      player.attack += change;
      player.damage[2] += change;
    }
  }
  if (player.dexterity < dexterity) {
    player.dexterity = dexterity;
    bonus = bonusCalcUpdate(dexterity);
    change = (bonus - player.dexBonus);
    if (change > 0) {
      player.dexBonus += change;
      player.armorClass += change;

    }
  }
  if (player.intelligence < intelligence) {
    player.intelligence = intelligence;
    bonus = bonusCalcUpdate(intelligence);
    change = (bonus - player.intBonus);
    if (change > 0) {
      player.intBonus += change;
    }
  }
  if (player.wisdom < wisdom) {
    player.wisdom = wisdom;
    bonus = bonusCalcUpdate(wisdom);
    change = (bonus - player.wisBonus);
    if (change > 0) {
      player.wisBonus += change;
    }
  }
  if (player.charisma < charisma) {
    player.charisma = charisma;
    bonus = bonusCalcUpdate(charisma);
    change = (bonus - player.chaBonus);
    if (change > 0) {
      player.chaBonus += change;
    }
  }
  if (player.constitution < constitution) {
    player.constitution = constitution;
    bonus = bonusCalcUpdate(constitution);
    change = (bonus - player.conBonus);
    if (change > 0) {
      player.conBonus += change;
      let gain = player.lvl * change;
      player.maxHP += gain;
      player.hp += gain;
    }
  }
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