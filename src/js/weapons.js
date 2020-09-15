export const weaponList = [
  {
    name: "Great Axe",
    attack: 0,
    damage: [1,12,0],
    hands: 2
  },
  {
    name: "Dagger",
    attack: 0,
    damage: [1,4,0],
    hands: 1
  },
  {
    name: "Mace",
    attack: 0,
    damage: [1,6,0],
    hands: 1
  },
  {
    name: "Long Sword",
    attack: 0,
    damage: [1,8,0],
    hands: 1
  },
  {
    name: "Short Sword",
    attack: 0,
    damage: [1,6,0],
    hands: 1
  },
  {
    name: "Quarterstaff",
    attack: 0,
    damage: [1,6,0],
    hands: 2
  },
  {
    name: "Bow",
    attack: 0,
    damage: [1,8,0],
    hands: 2
  }
];

export function equipWeapon(character) {
  character.attack += character.weapon.attack;
  character.damage[2] += character.weapon.damage[2];
}

export function upgradeWeapon(character) {
  character.attack -= character.weapon.attack;
  character.damage[2] -= character.weapon.damage[2];
  character.weapon.attack += 1;
  character.weapon.damage[2] += 1;
  equipWeapon(character);
}