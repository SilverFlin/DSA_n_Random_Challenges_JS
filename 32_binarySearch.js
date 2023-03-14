function binarySearch(arr, val) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  while (leftPointer < rightPointer) {
    let middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    if (arr[middlePointer] === val) return middlePointer;
    if (val > arr[middlePointer]) {
      leftPointer = middlePointer;
    } else rightPointer = middlePointer;
  }
  return -1;
}

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
);
