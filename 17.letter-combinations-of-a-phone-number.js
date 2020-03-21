/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const map = {
    '1': [],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };
  const res = [];
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === '1') continue;
    if (res.length < 1) res.push('');
    let len = res.length;
    for (let j = 0; j < len; j++) {
      let temp = res[j];
      res[j] = temp + map[digits[i]][0];
      for (let k = 1; k < map[digits[i]].length; k++) {
        res.push(temp + map[digits[i]][k]);
      }
    }
  }
  return res;
};
// @lc code=end
console.log(letterCombinations('23'));
