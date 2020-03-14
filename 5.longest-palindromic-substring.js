/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let dp = new Array(s.length).fill(false).map(_ => new Array(s.length).fill(false))
  let max = -1;
  let start = 0,
    end = 0;
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    if (i + 1 < s.length) dp[i][i + 1] = s[i] === s[i + 1];
  }
  for (let m = 2; m < s.length; m++) {
    for (let i = 0; i < s.length; i++) {
      if (i + m >= s.length) break;
      dp[i][i + m] = dp[i + 1][i + m - 1] && s[i] === s[i + m];
    }
  }
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (dp[i][j] && j - i > max) {
        max = j - i;
        start = i;
        end = j + 1;
      }
    }
  }
  return s.substr(start, end - start);
};
// @lc code=end
console.log(longestPalindrome('babad'));
