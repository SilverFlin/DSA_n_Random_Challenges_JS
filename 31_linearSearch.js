const testArray = [1, 5, 3, 6, 7, 8, 0, 8, 5];

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
};

console.log(linearSearch(testArray, 10));
console.log(linearSearch(testArray, 5));
