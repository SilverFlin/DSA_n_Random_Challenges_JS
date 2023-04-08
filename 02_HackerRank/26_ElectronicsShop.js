// Jan 2022

/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
  let currentMax = -Infinity;
  let temp;

  for (let keyboard of keyboards) {
    if (keyboard > b) continue;
    for (let drive of drives) {
      temp = keyboard + drive;
      if (temp <= b && temp >= currentMax) currentMax = temp;
    }
  }
  return currentMax === -Infinity ? -1 : currentMax;
}
