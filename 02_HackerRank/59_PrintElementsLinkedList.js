// Mar 2023

// Complete the printLinkedList function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function printLinkedList(head) {
  while (head.next) {
    console.log(head.data);
    head = head.next;
  }
  console.log(head.data);
}
