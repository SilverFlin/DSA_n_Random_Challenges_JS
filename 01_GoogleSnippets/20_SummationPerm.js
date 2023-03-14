function factorial(nat) {
  let p = 1;
  for (let i = nat; i > 0; i--) p *= i;
  return p;
}

let res = 0;
for (let i = 1; i <= 15; i++) {
  res += (15 - i) * i;
}
console.log(res);
console.log(factorial(15) * 14);
