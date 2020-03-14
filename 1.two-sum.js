/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();
  for(let i = 0; i < nums.length; i++){
    if(map.has(nums[i])){
      return [map.get(nums[i]), i];
    }
    map.set(target - nums[i], i);
  }
  return [];
};
// @lc code=end
console.log(twoSum([2, 7, 11, 15], 9));
