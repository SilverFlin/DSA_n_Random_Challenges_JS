//Feb 2023

/*
 * Complete the 'taumBday' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER b
 *  2. INTEGER w
 *  3. INTEGER bc
 *  4. INTEGER wc
 *  5. INTEGER z
 */

function taumBday(b, w, bc, wc, z) {
  b = BigInt(b);
  w = BigInt(w);
  bc = BigInt(bc);
  wc = BigInt(wc);
  z = BigInt(z);

  let currentBlackPrice = b * bc;
  let currentWhitePrice = w * wc;
  let currConversion = 0;

  if (bc > wc + z) {
    currConversion = b * z;
    return BigInt((b + w) * wc + currConversion);
  }
  if (wc > bc + z) {
    currConversion = w * z;
    return BigInt((b + w) * bc + currConversion);
  }

  return BigInt(currentBlackPrice + currentWhitePrice);
}
