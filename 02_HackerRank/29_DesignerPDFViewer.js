// Jan 2023
/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
  let currMax = 1;
  let tempHeight;
  let tempIndex;
  for (let char of word) {
    tempIndex = parseInt(char, 36) - 10;
    tempHeight = h[tempIndex];
    if (tempHeight > currMax) currMax = tempHeight;
  }
  const area = currMax * word.length;
  return area;
}
