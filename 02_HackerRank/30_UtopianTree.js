// Jan 2023
/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function utopianTree(n) {
  if (n === 0) return 1;
  if (n % 2 === 0) return utopianTree(n - 1) + 1;
  if (n % 2 !== 0) return utopianTree(n - 1) * 2;

  // return n + utopianTree(n - 1)

  // 0          1 // Init
  // 1          2 // Summer x 2
  // 2          3 // Summer + 1
  // 3          6 // Spring x 2
  // 4          7 // Summer + 1
  // 5          14// Srping x2
  // 6          15 //Summer +1
  // 7          30 // spinrg x2

  // (1 + (n*2) + (n + 1)) (| n / 2| )

  // (1 + 1) + ((1 + 1) * 2) + 1 + ((1 + 1) + ((1 + 1) * 2) + 1 ) * 2
}
