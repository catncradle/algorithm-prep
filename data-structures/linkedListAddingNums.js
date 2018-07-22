/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  let newNode;

  newNode = new ListNode(l1.val + l2.val);

  if (l1.next && l2.next) newNode.next = addTwoNumbers(l1.next, l2.next);
  else if (l2.next) newNode.next = l2.next;
  else if (l1.next) newNode.next = l1.next;
  let node = newNode;
  while (node) {
    if (node.val >= 10) {
      if (node.next) {
        node.next.val = node.next.val + 1;
        node.val = node.val % 10;
      } else {
        node.next = new ListNode(1);
        node.val = node.val % 10;
      }
    }
    node = node.next;
  }

  return newNode;
};
