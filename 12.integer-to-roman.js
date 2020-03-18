/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let res = '';
  let m = parseInt(num / 1000);
  res = res + 'M'.repeat(m);
  num = num % 1000;

  function getSubstr(c, ch1, ch5, ch10) {
    if (c === 9) return ch1 + ch10;
    else if (c > 4 && c < 9) return ch5 + ch1.repeat(c - 5);
    else if (c === 4) return ch1 + ch5;
    else return ch1.repeat(c);
  }
  res = res + getSubstr(parseInt(num / 100), 'C', 'D', 'M');
  num = num % 100;
  res = res + getSubstr(parseInt(num / 10), 'X', 'L', 'C');
  num = num % 10;
  res = res + getSubstr(num, 'I', 'V', 'X');
  return res;
};
// @lc code=end
console.log(intToRoman(1994));
