import { diceRoll } from './roleFunctions';

export function menuCamp(character) {
  let roll = diceRoll(1,3);
  let message;
  if (character.hp == character.maxHP) {
    message = "Your player is already fully rested.";
  } else if (roll == 1) {
    message = "You ran into trouble on the way to your camp. Prepare for battle!";
  } else if (roll > 1) {
    character.hp = character.maxHP;
    message = "Your health has been restored to full.";
  }
  return message;
}