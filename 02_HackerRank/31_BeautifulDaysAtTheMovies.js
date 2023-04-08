// Jan 2023

/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */
function diff(num1) {
  num1 += "";

  let revNum1 = "";
  for (let i = num1.length - 1; i >= 0; i--) {
    revNum1 += num1[i];
  }
  return Math.abs(+revNum1 - num1);
}
