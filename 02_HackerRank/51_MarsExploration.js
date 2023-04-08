// Feb 2023

/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
  let countLettersChanged = 0;

  let msg = ["S", "O", "S"];
  let currChar = 0;
  for (let i = 0; i < s.length; i++) {
    if (currChar === 3) currChar = 0;
    if (s[i] !== msg[currChar]) {
      countLettersChanged++;
    }
    currChar++;
  }
  return countLettersChanged;
}
