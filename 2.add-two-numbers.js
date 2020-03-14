function ListNode(val) {
  this.val = val;
  this.next = null;
}
/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const res = l1;
  let nc = 0;
  while (true) {
    const l2Val = l2 === null ?  0 : l2.val;
    let l2Next = l2 === null ? null : l2.next;
    const r = l1.val + l2Val + nc;
    nc = parseInt(r / 10);
    l1.val = r % 10;

    if (l2Next === null && nc === 0) break;
    if (l1.next === null && l2Next === null) {
      if (nc === 0) break;
      l1.next = new ListNode(nc);
      break;
    }
    if(l1.next === null && l2Next !== null) {
        l1.next = l2Next;
        l2Next = null;
    }
    l1 = l1.next;
    l2 = l2Next;
  }
  return res;
};
// @lc code=end
