/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  let i = 0,
    j = height.length - 1;
  while (i < j) {
    if (height[i] < height[j]) {
      max = Math.max((j - i) * height[i], max);
      i++;
    } else {
      max = Math.max((j - i) * height[j], max);
      j--;
    }
  }
  return max;
};
// @lc code=end
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
