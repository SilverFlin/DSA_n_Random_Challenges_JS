// Dec 2022
/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function calcEndFruitDistance(a, fruits) {
  const endPosition = [];
  for (let fruit of fruits) {
    endPosition.push(fruit + a);
  }
  return endPosition;
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const applesEndPosition = calcEndFruitDistance(a, apples);
  const orangesEndPosition = calcEndFruitDistance(b, oranges);
  const countFruits = {
    apples: 0,
    oranges: 0,
  };

  let maxFruits =
    apples.length > oranges.length ? apples.length : oranges.length;

  for (let i = 0; i < maxFruits; i++) {
    if (applesEndPosition[i] >= s && applesEndPosition[i] <= t) {
      countFruits.apples += 1;
    }
    if (orangesEndPosition[i] >= s && orangesEndPosition[i] <= t) {
      countFruits.oranges += 1;
    }
  }

  console.log(countFruits.apples);
  console.log(countFruits.oranges);
}
