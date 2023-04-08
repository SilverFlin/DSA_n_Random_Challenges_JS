// Feb 2023
// Feb 2023

/*
 * Complete the 'permutationEquation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY p as parameter.
 */

function permutationEquation(p) {
  const tempArr = [];

  for (let x = 1; x <= p.length; x++) {
    let p1 = p.indexOf(x) + 1;
    let y = p.indexOf(p1) + 1;
    tempArr.push(y);
  }
  return tempArr;
}
