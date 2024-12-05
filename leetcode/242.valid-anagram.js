/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length)return false;
    const res = new Map();
    for (const char of s){
        let cnt = res.get(char)||0
        res.set(char,++cnt)
    }
    for(const char of t){
        if(!res.get(char))return false;
        let cnt = res.get(char)
        res.set(char,--cnt)
    }
    return true;
};
// @lc code=end

