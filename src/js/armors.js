export const armorList = [
  {
    name: "Shirt",
    armorBonus: 10,
    type: "light"
  },
  {
    name: "Padded",
    armorBonus: 11,
    type: "light"
  },
  {
    name: "Leather",
    armorBonus: 11,
    type: "light"
  },
  {
    name: "Studded Leather",
    armorBonus: 12,
    type: "light"
  },
  {
    name: "Hide",
    armorBonus: 12,
    type: "medium"
  },
  {
    name: "Chain Shirt",
    armorBonus: 11,
    type: "medium"
  },
  {
    name: "Scale Mail",
    armorBonus: 14,
    type: "medium"
  },
  {
    name: "Breastplate",
    armorBonus: 14,
    type: "medium"
  },
  {
    name: "Half Plate",
    armorBonus: 15,
    type: "medium"
  },
  {
    name: "Ring Mail",
    armorBonus: 14,
    type: "heavy"
  },
  {
    name: "Chain Mail",
    armorBonus: 16,
    type: "heavy"
  },
  {
    name: "Splint",
    armorBonus: 17,
    type: "heavy"
  },
  {
    name: "Plate",
    armorBonus: 18,
    type: "heavy"
  },
  {
    name: "Shield",
    armorBonus: 2,
    type: "shield"
  },
];

export function equipArmor(character) {
  if (character.armor.type === "heavy") {
    if (character.armorClass < 0) {
      character.armorClass += character.armor.armorBonus;
    } else {
      character.armorClass = character.armor.armorBonus;
    }
  } else if (character.armor.type === "medium") {
    if (character.armorClass <= 2) {
      character.armorClass += character.armor.armorBonus;
    } else {
      character.armorClass = character.armor.armorBonus + 2;
    }
  } else if (character.armor.type === "light") {
    character.armorClass += character.armor.armorBonus;
  }
}

export function upgradeArmor(character) {
  character.armorClass -= character.armor.armorBonus;
  character.armor.armorBonus += 1;
  equipArmor(character);
}