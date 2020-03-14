/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0, end = 0, max = 0;
    for(let i = 0; i < s.length; i++){
        const sub = s.substr(start, end - start);
        const dep = sub.indexOf(s[i])
        if(dep !== -1){
            max = Math.max(max, end- start);
            start = start + dep + 1;
        }
        end++;
    }
    return Math.max(max, end - start);
};
// @lc code=end
console.log(lengthOfLongestSubstring("abcabcbb"));