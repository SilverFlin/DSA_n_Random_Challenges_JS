// Feb 2023

/*
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

function checkKaprekar(p) {
  let sqr = Math.pow(p, 2);
  let sqrStr = sqr + "";
  let sqrArr = [
    sqrStr.substring(0, sqrStr.length / 2),
    sqrStr.substring(sqrStr.length / 2),
  ];
  let sum = +sqrArr[0] + +sqrArr[1];
  return sum === p;
}

function kaprekarNumbers(p, q) {
  if (q < p) {
    console.log("INVALID RANGE");
    return;
  }
  const result = [];
  for (let i = p; i <= q; i++) {
    if (checkKaprekar(i)) {
      result.push(i);
    }
  }
  result[0] ? console.log(result.join(" ")) : console.log("INVALID RANGE");
}
