class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    //Bubble up
    this.values.push(value);
    if (this.values.length === 0) return this;

    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (this.values[parentIndex] < this.values[index]) {
      let temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    console.log(this);
    return this;
  }
}

let maxBinHeap = new MaxBinaryHeap();

maxBinHeap
  .insert(44)
  .insert(70)
  .insert(99)
  .insert(45)
  .insert(40)
  .insert(65)
  .insert(40)
  .insert(53);

console.log(maxBinHeap.values);
