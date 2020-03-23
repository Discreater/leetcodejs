function ListNode(val) {
  this.val = val;
  this.next = null;
}
/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
var mergeTwoLists = function(l1, l2) {
  let head = new ListNode(0);
  let res = head;
  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val > l2.val) {
        head.next = l2;
        l2 = l2.next;
      } else {
        head.next = l1;
        l1 = l1.next;
      }
    } else if (l1) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }
    head = head.next;
  }
  return res.next;
};
// @lc code=end
