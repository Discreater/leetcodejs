/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const fix = x < 0 ? -1 : 1;
  x = Math.abs(x);
  let s = [...x.toString()].reverse().join('');
  let res = fix * parseInt(s);
  /** 1 << 31 === -2^31 */
  if (res < 1 << 31 || res > -(1 << 31) - 1) {
    return 0;
  }
  return res;
};
// @lc code=end
console.log(reverse(1234));
