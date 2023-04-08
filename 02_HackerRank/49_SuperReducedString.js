// Feb 2023

/*
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function superReducedString(s) {
  let removedItems = false;
  let sArr = s.split("");
  for (let i = 0; i < sArr.length - 1; i++) {
    if (sArr[i] === sArr[i + 1]) {
      sArr[i] = "";
      sArr[i + 1] = "";
      removedItems = true;
    }
  }
  s = sArr.join("");
  console.log(s);
  if (s.length === 0) return "Empty String";
  return removedItems ? superReducedString(s) : s;
}
