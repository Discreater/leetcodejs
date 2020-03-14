/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s;
  let len = s.length;
  let res = '';
  for (let i = 0; i < numRows; i++) {
    let j = i;
    let flip = true;
    while (j < len) {
      res += s[j];
      let sp = 2 * (numRows - i - 1);
      if (i === 0) j += sp;
      else if (i === numRows - 1) j += 2 * i;
      else j += flip ? sp : 2 * i;
      flip = !flip;
    }
  }
  return res;
};
// @lc code=end
console.log(convert('PAYPALISHIRING', 4));
