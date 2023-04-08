// Feb 2023

/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
  if (n < s.length) {
    let countA = 0;
    for (let i = 0; i < n; i++) if (s[i] === "a") countA++;
    return countA;
  }

  let countA = 0;
  for (let char of s) if (char === "a") countA++;

  let repeats = n / s.length;

  if (Math.floor(repeats) === repeats) return countA * repeats;

  let minRepeats = s.length * Math.floor(repeats);
  let tempA = countA * Math.floor(repeats);
  let extra = n - minRepeats;
  console.log(extra);

  // let countOther = s.length - countA;
  //aba aba aba a  ba
  //101 101 101 1

  for (let i = 0; i < extra; i++) {
    console.log(s[i], "a");
    if (s[i] === "a") {
      tempA++;
    }
  }
  return tempA;

  /**
588525
 */
}
