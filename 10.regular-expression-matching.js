/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  // 非贪心
  const dp = new Array(s.length + 1)
    .fill(false)
    .map(_ => new Array(p.length + 1).fill(false));
  dp[0][0] = true;
  for (let i = 1; i <= s.length; i++) {
    dp[i][0] = false;
  }
  for (let j = 1; j <= p.length; j++) {
    dp[0][j] = j > 1 && '*' === p[j - 1] && dp[0][j - 2];
  }

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] != '*')
        dp[i][j] =
          dp[i - 1][j - 1] && (s[i - 1] === p[j - 1] || '.' === p[j - 1]);
      else
        dp[i][j] =
          dp[i][j - 2] ||
          ((s[i - 1] === p[j - 2] || '.' === p[j - 2]) && dp[i - 1][j]);
    }
  }
  return dp[s.length][p.length];
  // if (p.length === 0) return s.length === 0;
  // const firstMatch = s.length !== 0 && (p[0] === '.' || p[0] === s[0]);
  // if (p.length >= 2 && p[1] === '*') {
  //   return isMatch(s, p.slice(2)) || (firstMatch && isMatch(s.slice(1), p));
  // }
  // return firstMatch && isMatch(s.slice(1), p.slice(1));
};
// @lc code=end
console.log(isMatch('aa', 'a*'));
