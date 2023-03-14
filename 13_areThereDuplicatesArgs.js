function areThereDuplicates(...args) {
  let left = 0;
  let right = args.length;

  while (left < right) {
    let check = args[left] === args[right];
    if (check) {
      return false;
    } else if (!check) {
      left++;
    }
  }
}
