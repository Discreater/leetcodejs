function ListNode(val) {
  this.val = val;
  this.next = null;
}

/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let p = new ListNode(0);
  p.next = head;
  let first = p,
    second = p;
  for (let i = 0; i <= n; i++) {
    second = second.next;
  }
  while (second != null) {
    first = first.next;
    second = second.next;
  }
  first.next = first.next.next;
  return p.next;
};
// @lc code=end
const head = {
  val: 1,
  next: null,
};
console.log(removeNthFromEnd(head, 1));
