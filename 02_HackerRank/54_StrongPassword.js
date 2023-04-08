// Feb 2023

/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
  let countDigits = 0;
  let countLowerCases = 0;
  let countUpperCases = 0;
  let countSpecChar = 0;
  let countExtra = 0;

  let numbers = "0123456789".split("").reduce((a, v) => ({ ...a, [v]: v }), {});
  let lower_case = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .reduce((a, v) => ({ ...a, [v]: v }), {});
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    .split("")
    .reduce((a, v) => ({ ...a, [v]: v }), {});
  let special_characters = "!@#$%^&*()-+"
    .split("")
    .reduce((a, v) => ({ ...a, [v]: v }), {});

  console.log("#" in special_characters);
  for (let char of password.split("")) {
    if (char in numbers) {
      countDigits++;
      continue;
    }

    if (char in lower_case) {
      countLowerCases++;
      continue;
    }

    if (char in upper_case) {
      countUpperCases++;
      continue;
    }

    if (char in special_characters) {
      countSpecChar++;
      continue;
    }
    countExtra++;
  }

  let minToAdd = 0;
  console.log(countSpecChar, countLowerCases, countUpperCases, countDigits);

  if (countDigits === 0) minToAdd++;
  if (countLowerCases === 0) minToAdd++;
  if (countUpperCases === 0) minToAdd++;
  if (countSpecChar === 0) minToAdd++;
  console.log("minadd", minToAdd);

  if (password.length + minToAdd < 6) {
    let diff = 6 - password.length;
    console.log(diff);
    if (diff > minToAdd) {
      return diff;
    } else {
      return minToAdd;
    }
  }

  return minToAdd;
}
