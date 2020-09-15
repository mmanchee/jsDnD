export function getLoot(monsterCR, player) {
  let message = "You got a health potion!<br>"
  let random = Math.floor(Math.random *10);
  if (monsterCR < 1 && random > 6) {
    player.inventory[0].healthPotion += 1;
    return message;
  } else if (monsterCR >= 1 && monsterCR < 6 && random > 6 ) {
    player.inventory[0].healthPotion += 1;
    return message;
  } else if (monsterCR >= 6 && monsterCR < 11 && random > 6) {
    player.inventory[0].healthPotion += 1;
    return message;
  } else if (monsterCR >= 11 && monsterCR < 16 && random > 6) {
    player.inventory[0].healthPotion += 1;
    return message;
  } else if (monsterCR >= 16 && monsterCR < 21 && random > 6)  {
    player.inventory[0].healthPotion += 1;
    return message;
  } else if (monsterCR >= 21 && monsterCR < 26 && random > 6) {
    player.inventory[0].healthPotion += 1;
    return message;
  } else if (monsterCR >= 26 && monsterCR < 31 && random > 6) {
    player.inventory[0].healthPotion += 1;
    return message;
  }
}