/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  let prefix = '';
  for (let i = 0; i < strs[0].length; i++) {
    let temp = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (temp !== strs[j][i]) return prefix;
    }
    prefix = prefix + temp;
  }
  return prefix;
};
// @lc code=end
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
