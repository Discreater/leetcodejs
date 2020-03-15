/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const sx = x.toString();
    for(let i = 0; i < sx.length / 2; i++){
      if(sx[i] !== sx[sx.length - i - 1]) return false;
    }
    return true;
};
// @lc code=end
console.log(isPalindrome(-121))

