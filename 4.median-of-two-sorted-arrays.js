/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const len1 = nums1.length,
    len2 = nums2.length;
  if (len1 === 0 && len2 === 0) return 0;
  const mid = parseInt((len1 + len2) / 2);
  let isOdd = (len1 + len2) % 2 === 1;
  let i = 0,
    j = 0,
    a = 0,
    b = 0;
  while (i + j <= mid) {
    a = b;
    if (i === len1) b = nums2[j++];
    else if (j === len2) b = nums1[i++];
    else if (nums1[i] < nums2[j]) b = nums1[i++];
    else b = nums2[j++];
  }
  if (isOdd) return b;
  else return (a + b) / 2;
};
// @lc code=end
