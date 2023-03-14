class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(arg) {
    const newNode = new Node(arg);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) return null;
    if (this.head === this.tail) {
      const oldElement = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return oldElement;
    }
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    const oldTail = this.tail;
    this.tail = current;
    this.tail.next = null;
    this.length--;
    return oldTail;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return oldHead;
  }

  unshift(arg) {
    if (!this.head) return this.push(arg);
    const newNode = new Node(arg);
    const oldHead = this.head;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(arg) {
    if (arg < 0 || arg >= this.length) return null;
    let counter = 0;
    let node = this.head;
    while (counter < arg) {
      node = node.next;
      counter++;
    }
    return node;
  }

  set(index, arg) {
    if (this.get(index) === null) {
      return false;
    } else {
      this.get(index).value = arg;
      return true;
    }
  }

  insert(index, arg) {
    if (index === this.length) return !!this.push(arg);
    if (index === 0) return !!this.shift(arg);
    if (this.get(index) === null) return false;

    let oneBefore = this.get(index - 1);
    let newNode = new Node(arg);
    newNode.next = oneBefore.next;
    oneBefore.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (this.get(index) === null) return null;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let deletedValue = this.get(index);
    let oneBefore = this.get(index - 1);
    oneBefore.next = deletedValue.next;
    this.length--;
    return deletedValue;
  }
  reverse() {
    if (this.length === 0) return undefined;

    let tail = this.tail;
    let head = this.head;
    this.tail = head;
    this.head = tail;
    if (this.length === 1) return this;
    let counter = 0;
    let leftNode = head;
    let rightNode = head.next;
    while (counter !== this.length - 1) {
      let tempLeftNode = rightNode;
      let tempRightNode = rightNode.next;
      rightNode.next = leftNode;
      leftNode = tempLeftNode;
      rightNode = tempRightNode;
      counter++;
    }
    this.tail.next = undefined;
    return this;
  }
}

const list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

list.reverse();
