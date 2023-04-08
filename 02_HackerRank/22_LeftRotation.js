//Jan 2022
/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
  let temp;
  for (let i = 0; i < d; i++) {
    temp = arr.shift();
    arr.push(temp);
  }
  return arr;
}
