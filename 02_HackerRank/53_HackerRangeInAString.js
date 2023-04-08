// Feb 2023
/*
 * Complete the 'hackerrankInString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
function hackerrankInString(s) {
  const word = {
    1: "h",
    2: "a",
    3: "c",
    4: "k",
    5: "e",
    6: "r",
    7: "r",
    8: "a",
    9: "n",
    10: "k",
  };
  let currPos = 1;
  for (let i = 0; i < s.length; i++) {
    if (word[currPos] === s[i]) {
      currPos++;
      if (currPos === 10) return "YES";
    }
  }
  return "NO";
}
