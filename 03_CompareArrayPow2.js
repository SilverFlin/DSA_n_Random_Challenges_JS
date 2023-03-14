function comp(a, b) {
  let result = true;
  if (a.length !== b.length) result = false;

  const check = (a, b) => (a > b ? 1 : -1);
  a = a.sort(check);
  b = b.sort(check);
  console.log(a);
  console.log(b);

  for (let i = 0; i < a.length; i++) {
    if (a[i] ** 2 !== b[i]) return false;
  }
  return result;
}

let a = comp(
  [6, 10, 6, 9, 4, 1, 0, 10, 10, 10, 5, 10, 1, 9, 7],
  [16, 36, 100, 81, 36, 100, 100, 100, 25, 0, 49, 1, 1, 81, 100]
);

console.log(a);
