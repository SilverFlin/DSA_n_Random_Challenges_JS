// Feb 2023

/*
 * Complete the 'camelcase' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function camelcase(s) {
  let countWords = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      countWords++;
    }
  }
  return countWords;
}
