function merge(a, p, q, r) {
  let n_1 = q - p + 1;
  let n_2 = r - q;
  let left = [];
  let right = [];
  for (var i = 1; i <= n_1; i++) {
    left.push(a[p + i - 1]);
  }
  for (var j = 1; j < n_2; j++) {
    right.push(a[q + j]);
  }
  /*Sentinel*/
  left[n_1] = Infinity;
  right[n_2 - 1] = Infinity;

  i = 0;
  j = 0;

  for (var k = p; k < r; k++) {
    if (left[i] <= right[j]) {
      a[k] = left[i];
      console.log(left[i]);
      i++;
    } else {
      a[k] = right[j];
      console.log(right[j]);
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
