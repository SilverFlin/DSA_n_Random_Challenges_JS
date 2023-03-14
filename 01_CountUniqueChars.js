function countUniqueChars(str) {
  new Set(str.toUpperCase()).size;
}

console.log(countUniqueChars("abcc")); // 3
