// Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.

// Example

// For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
// removeKFromList(l, k) = [1, 2, 4, 5];
// For l = [1, 2, 3, 4, 5, 6, 7] and k = 10, the output should be
// removeKFromList(l, k) = [1, 2, 3, 4, 5, 6, 7].

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
  // first, create a new list node
  let list = new ListNode(0);
  // set a pointer to the newly created  list
  let temp = list;

  while (l) {
    // if the current value isnt the same, then add the value to temp
    if (l.value !== k) {
      temp.next = l;
      temp = temp.next;
    }
    // if the value is the same then it wont be added, just move the pointer along
    l = l.next;
  }
  // set the final next value to be null
  temp.next = null;
  // return the next val, aka value after dummy head
  return list.next;
}
