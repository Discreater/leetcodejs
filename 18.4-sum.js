/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  const res = [];
  /**
   *
   * @param {number[]} nums
   * @param {number} target
   * @param {number} N
   * @param {number[]} result
   * @param {number[][]} results
   */
  function findSum(nums, target, N, result, results) {
    if (nums.length < N || N < 2) return;
    if (N === 2) {
      let l = 0,
        h = nums.length - 1;
      while (l < h) {
        if (nums[l] + nums[h] === target) {
          results.push([...result, nums[l], nums[h]]);
          l++;
          h--;
          while (l < h && nums[l - 1] === nums[l]) l++;
          while (l < h && nums[h + 1] === nums[h]) h--;
        } else if (nums[l] + nums[h] < target) {
          l++;
        } else {
          h--;
        }
      }
    } else {
      if (nums[nums.length - 1] * N >= target) {
        for (let i = 0; i < nums.length; i++) {
          if (nums[i] * N > target) break;
          if (i === 0 || (i > 0 && nums[i - 1] != nums[i])) {
            findSum(
              nums.slice(i + 1),
              target - nums[i],
              N - 1,
              [...result, nums[i]],
              results
            );
          }
        }
      }
    }
  }
  findSum(nums, target, 4, [], res);
  return res;
};
// @lc code=end
const r = fourSum([1, 0, -1, 0, -2, 2], 0);
console.log(r);
