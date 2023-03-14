function same(array1, array2) {
  if (array1.length !== array2.length) return false;

  array1 = array1.map((num) => num ** 2);

  return array1.sort().toString() === array2.sort().toString();
}

let result = same([1, 2, 3, 2], [1, 4, 9, 4]);

console.log(result);
