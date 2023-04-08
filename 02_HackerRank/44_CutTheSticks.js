// Feb 2023

/*
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function cutTheSticks(arr) {
  let sticks = arr.sort((a, b) => b - a);
  let result = [];
  while (sticks[0]) {
    sticks.forEach((item, i) => {
      sticks[i] -= sticks[sticks.length - 1];
    });

    result.push(sticks.length);
    while (sticks[sticks.length - 1] <= 0) {
      sticks.pop();
    }
  }

  return result;
}
