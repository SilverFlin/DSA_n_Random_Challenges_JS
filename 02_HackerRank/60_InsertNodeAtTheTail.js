// Mar 2023

// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
  let newNode = new SinglyLinkedListNode();
  newNode.data = data;
  if (head === null) return newNode;

  let currNode = head;
  while (currNode.next) currNode = currNode.next;
  currNode.next = newNode;
  return head;
}
