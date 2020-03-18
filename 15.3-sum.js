/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2 && nums[i] <= 0; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let lo = i + 1,
        hi = nums.length - 1,
        sum = 0 - nums[i];
      while (lo < hi) {
        if (nums[lo] + nums[hi] === sum) {
          res.push([nums[i], nums[lo], nums[hi]]);
          while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
          while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
          lo++;
          hi--;
        } else if (nums[lo] + nums[hi] < sum) lo++;
        else hi--;
      }
    }
  }
  return res;
};
// @lc code=end
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
