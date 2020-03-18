/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let res = nums[0] + nums[1] + nums[nums.length - 1];
  for (let i = 0; i < nums.length - 2; i++) {
    let lo = i + 1,
      hi = nums.length - 1;
    while (lo < hi) {
      let sum = nums[i] + nums[lo] + nums[hi];
      if (sum === target) return target;
      if (Math.abs(res - target) > Math.abs(sum - target)) {
        res = sum;
      }
      if (sum > target) {
        hi--;
      } else {
        lo++;
      }
    }
  }
  return res;
};
// @lc code=end
console.log(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82));
