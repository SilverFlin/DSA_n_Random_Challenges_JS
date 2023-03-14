function merge(a, indexStartArray, indexHalfArray, arrayLength) {
  let lengthLeftArray = indexHalfArray - indexStartArray + 1;
  let lengthRightArray = arrayLength - indexHalfArray - 1;
  let left = [];
  let right = [];
  for (var i = 1; i <= lengthLeftArray; i++)
    left.push(a[indexStartArray + i - 1]);
  for (var j = 1; j <= lengthRightArray; j++) right.push(a[indexHalfArray + j]);
  /*Sentinel*/
  // left[lengthLeftArray] = Infinity;
  // right[lengthRightArray-1] = Infinity;

  i = 0;
  j = 0;
  console.log(right, left);
  console.log(lengthLeftArray, lengthRightArray);
  for (var k = indexStartArray; k < arrayLength; k++) {
    if (left[i] <= right[j]) {
      if (i === lengthLeftArray - 1) {
        continue;
      }
      console.log(left[i]);
      // if(left[i]!==undefined){
      a[k] = left[i];
      i++;
      // }
    } else {
      if (j === lengthRightArray - 1) {
        continue;
      }
      console.log(right[j]);
      a[k] = right[j];
      j++;
    }
  }
  return a;
}

let a = [2, 4, 5, 7, 1, 2, 3, 6];
// p     q           r
let p = 0;
let q = 3;
let r = a.length;

console.log(merge(a, p, q, r));
// 1,2,2,3,4,5,6,7
