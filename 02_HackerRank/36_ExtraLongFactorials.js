//Feb 2023

/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
  let bigN = BigInt(n);
  function fact(n) {
    if (BigInt(n) === 1n) return 1n;
    return BigInt(n) * fact(BigInt(n) - 1n);
  }

  console.log(BigInt(fact(n)) + "");
}
