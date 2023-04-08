// Feb 2023

/*
 * Complete the 'funnyString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function funnyString(s) {
  let r = "";
  for (let i = s.length - 1; i >= 0; i--) {
    r += s[i];
  }
  console.log(r);
  for (let i = 0; i < s.length - 1; i++) {
    let diff1 = Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    let diff2 = Math.abs(r.charCodeAt(i) - r.charCodeAt(i + 1));
    if (diff1 !== diff2) return "Not Funny";
  }
  return "Funny";
}
