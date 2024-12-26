/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 *
 * https://leetcode.com/problems/reverse-words-in-a-string/description/
 *
 * algorithms
 * Medium (47.97%)
 * Likes:    8913
 * Dislikes: 5279
 * Total Accepted:    2M
 * Total Submissions: 4.1M
 * Testcase Example:  '"the sky is blue"'
 *
 * Given an input string s, reverse the order of the words.
 *
 * A word is defined as a sequence of non-space characters. The words in s will
 * be separated by at least one space.
 *
 * Return a string of the words in reverse order concatenated by a single
 * space.
 *
 * Note that s may contain leading or trailing spaces or multiple spaces
 * between two words. The returned string should only have a single space
 * separating the words. Do not include any extra spaces.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "the sky is blue"
 * Output: "blue is sky the"
 *
 *
 * Example 2:
 *
 *
 * Input: s = "  hello world  "
 * Output: "world hello"
 * Explanation: Your reversed string should not contain leading or trailing
 * spaces.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "a good   example"
 * Output: "example good a"
 * Explanation: You need to reduce multiple spaces between two words to a
 * single space in the reversed string.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^4
 * s contains English letters (upper-case and lower-case), digits, and spaces '
 * '.
 * There is at least one word in s.
 *
 *
 *
 * Follow-up: If the string data type is mutable in your language, can you
 * solve it in-place with O(1) extra space?
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	const arr = Array.from(s);
	function _removeSpace(arr) {
		let slowIndex = (fastIndex = 0);
		while (fastIndex < arr.length) {
			if (
				arr[fastIndex] === " " &&
				(fastIndex === 0 || arr[fastIndex - 1] === " ")
			)
				fastIndex++;
			else arr[slowIndex++] = arr[fastIndex++];
		}
		arr.length = arr[slowIndex - 1] === " " ? slowIndex - 1 : slowIndex;
	}
	function _reverse(arr, start, end) {
		let left = start,
			right = end;
		while (left < right) {
			[arr[left], arr[right]] = [arr[right], arr[left]];
			left++;
			right--;
		}
	}
	_removeSpace(arr);
	_reverse(arr, 0, arr.length - 1);
	let start = 0;
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] === " " || i === arr.length) {
			_reverse(arr, start, i - 1);
			start = i + 1;
		}
	}
	return arr.join("");
};
// @lc code=end
