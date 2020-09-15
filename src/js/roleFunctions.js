export function diceRoll(num, side) {      // diceRoll(1, 6);
  let roll = 0;
  for (let i = 0; i < num; i++) {
    roll += Math.ceil(Math.random() * side);
  }
  return roll;                      // roll total
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