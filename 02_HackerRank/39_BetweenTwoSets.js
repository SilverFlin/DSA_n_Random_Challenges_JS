// Feb 2023

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
  let count = 0;

  for (let i = Math.max(...b); i >= Math.min(...a); i--) {
    let flag = true;

    for (let j = 0; j < a.length; j++) {
      if (i % a[j] !== 0) {
        flag = false;
        break;
      }
    }

    for (let j = 0; j < b.length; j++) {
      if (b[j] % i !== 0) {
        flag = false;
        break;
      }
    }
    if (flag) count++;
    if (flag && i % 2 === 0 && i > 4) i = i / 2 + 3;
  }
  return count;
}
