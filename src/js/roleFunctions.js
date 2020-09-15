export function diceRoll(num, side) {      // diceRoll(1, 6);
  let roll = 0;
  for (let i = 0; i < num; i++) {
    roll += Math.ceil(Math.random() * side);
  }
  return roll;                      // roll total
}

export function diceRollDMG(num, side, mod) {      // diceRoll(1, 6);
  let roll = 0;
  for (let i = 0; i < num; i++) {
    roll += Math.ceil(Math.random() * side) + mod;
  }
  return roll;                      // roll total
}