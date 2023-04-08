// Dec 2022
/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
  const count = {
    min: -1,
    max: -1,
    currentMin: Infinity,
    currentMax: -Infinity,
  };

  for (let score of scores) {
    if (score > count.currentMax) {
      count.currentMax = score;
      count.max += 1;
    }
    if (score < count.currentMin) {
      count.currentMin = score;
      count.min += 1;
    }
  }
  return [count.max, count.min];
}
