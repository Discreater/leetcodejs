/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const INT_MIN = 1 << 31;
  const INT_MAX = -(1 << 31) - 1;
  let trimStr = str.trim();
  let fix = trimStr[0] === '-' ? -1 : 1;
  if (trimStr[0] === '-' || trimStr[0] === '+') trimStr = trimStr.substr(1);
  const matchRes = trimStr.match(/^[0-9]+/);
  if (matchRes !== null) {
    let res = fix * parseInt(matchRes[0]);
    if (res < INT_MIN) {
      return INT_MIN;
    }
    if (res > INT_MAX) {
      return INT_MAX;
    }
    return res;
  }

  return 0;
};
// @lc code=end
console.log(myAtoi("-91283472332"));
