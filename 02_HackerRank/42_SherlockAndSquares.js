// Feb 2023

/*
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 */

function squares(a, b) {
  let count = 0;

  for (let i = Math.floor(Math.sqrt(a)); i <= Math.round(Math.sqrt(b)); i++) {
    let num = Math.pow(i, 2);
    if (num !== Math.floor(num)) continue;
    if (num >= a && num <= b) {
      count++;
      if (num > b) break;
      if (Math.pow(i + 10, 2) <= b) {
        count += 10;
        i += 10;
      }
    }
  }
  return count;
}
