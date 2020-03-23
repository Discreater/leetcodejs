/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    let temp = arr.pop();
    if (s[i] === ')') {
      if (temp !== '(') return false;
    } else if (s[i] === '}') {
      if (temp !== '{') return false;
    } else if (s[i] === ']') {
      if (temp !== '[') return false;
    } else {
      if (temp) arr.push(temp);
      arr.push(s[i]);
    }
  }
  if (arr.length !== 0) return false;
  return true;
};
// @lc code=end

console.log(isValid('{[]}'));
const p = [];
console.log(p.pop());
