// Jan 2023

/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(a) {
  const tempArr = [];
  for (let i = a.length - 1; i >= 0; i--) tempArr.push(a[i]);
  return tempArr;
}
