/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;
  let before = 1001;
  for (let i = 0; i < s.length; i++) {
    let temp = map[s[i]];
    if (temp > before) {
      res = res - before * 2 + temp;
      before = before;
    } else {
      res += temp;
      before = temp;
    }
  }
  return res;
};
// @lc code=end
console.log(romanToInt('MCMXCIV'));
