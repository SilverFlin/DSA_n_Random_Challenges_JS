// Feb 2023

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(clouds, jumpSize) {
  let currentEnergy = 100;
  let turn = 0;
  let currentPos = 0;
  while (currentEnergy > 0) {
    console.log(currentPos, currentEnergy);
    currentPos = (currentPos + jumpSize) % clouds.length;
    if (clouds[currentPos] === 1) currentEnergy -= 2;
    currentEnergy--;
    turn++;
    if (currentPos === 0) break;
  }

  return currentEnergy;
}
