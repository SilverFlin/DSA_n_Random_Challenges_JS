// Feb 2023

/*
 * Complete the 'equalizeArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function equalizeArray(arr) {
  let countRepeated = {};

  arr = arr.sort((a, b) => a - b);

  for (let num of arr) {
    countRepeated[num] ? countRepeated[num]++ : (countRepeated[num] = 1);
  }

  let counterArr = Object.values(countRepeated).sort((a, b) => a - b);
  console.log(counterArr);
  let removed = 0;
  for (let i = 0; i < counterArr.length - 1; i++) {
    removed += counterArr[i];
    console.log(counterArr[i]);
  }
  console.log(removed);
  return removed;
}
