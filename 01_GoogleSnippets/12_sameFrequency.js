function countUniqueValues(array) {
  if (array.length === 0) return 0;
  let j = 1;
  let i = 0;
  while (j < array.length) {
    if (array[i] === array[j]) {
      j++;
    } else {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
}
