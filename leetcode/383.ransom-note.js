/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 *
 * https://leetcode.com/problems/ransom-note/description/
 *
 * algorithms
 * Easy (63.20%)
 * Likes:    5157
 * Dislikes: 513
 * Total Accepted:    1.4M
 * Total Submissions: 2.2M
 * Testcase Example:  '"a"\n"b"'
 *
 * Given two strings ransomNote and magazine, return true if ransomNote can be
 * constructed by using the letters from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 *
 *
 * Example 1:
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 * Example 2:
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 * Example 3:
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 *
 *
 * Constraints:
 *
 *
 * 1 <= ransomNote.length, magazine.length <= 10^5
 * ransomNote and magazine consist of lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	const strArr = Array.from({ length: 26 }).fill(0);
	const base = "a".charCodeAt(0);

	for (const s of magazine) {
		strArr[s.charCodeAt(0) - base]++;
	}
	for (const s of ransomNote) {
		const index = s.charCodeAt(0) - base;
		if (!strArr[index]) return false;
		strArr[index]--;
	}
	return true;
};
// @lc code=end
