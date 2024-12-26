/*
 * @lc app=leetcode id=541 lang=javascript
 *
 * [541] Reverse String II
 *
 * https://leetcode.com/problems/reverse-string-ii/description/
 *
 * algorithms
 * Easy (51.39%)
 * Likes:    2055
 * Dislikes: 3959
 * Total Accepted:    277.9K
 * Total Submissions: 540.5K
 * Testcase Example:  '"abcdefg"\n2'
 *
 * Given a string s and an integer k, reverse the first k characters for every
 * 2k characters counting from the start of the string.
 *
 * If there are fewer than k characters left, reverse all of them. If there are
 * less than 2k but greater than or equal to k characters, then reverse the
 * first k characters and leave the other as original.
 *
 *
 * Example 1:
 * Input: s = "abcdefg", k = 2
 * Output: "bacdfeg"
 * Example 2:
 * Input: s = "abcd", k = 2
 * Output: "bacd"
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^4
 * s consists of only lowercase English letters.
 * 1 <= k <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
	const array = s.split("");
	const len = s.length;

	for (let i = 0; i < len; i += 2 * k) {
		let left = i - 1;
		right = i + k > len ? len : i + k;
		while (++left < --right)
			[array[left], array[right]] = [array[right], array[left]];
	}

	return array.join("");
};
// @lc code=end
