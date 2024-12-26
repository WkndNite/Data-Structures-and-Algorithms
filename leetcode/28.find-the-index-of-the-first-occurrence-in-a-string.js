/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 *
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 *
 * algorithms
 * Easy (43.85%)
 * Likes:    6221
 * Dislikes: 456
 * Total Accepted:    2.9M
 * Total Submissions: 6.6M
 * Testcase Example:  '"sadbutsad"\n"sad"'
 *
 * Given two strings needle and haystack, return the index of the first
 * occurrence of needle in haystack, or -1 if needle is not part of
 * haystack.
 *
 *
 * Example 1:
 *
 *
 * Input: haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Explanation: "sad" occurs at index 0 and 6.
 * The first occurrence is at index 0, so we return 0.
 *
 *
 * Example 2:
 *
 *
 * Input: haystack = "leetcode", needle = "leeto"
 * Output: -1
 * Explanation: "leeto" did not occur in "leetcode", so we return -1.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= haystack.length, needle.length <= 10^4
 * haystack and needle consist of only lowercase English characters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	// return haystack.indexOf(needle);

	if (!needle.length) return 0;

	const initNext = needle => {
		const next = new Array(needle.length);
		next[0] = 0;

		let j = 0;
		for (let i = 1; i < next.length; i++) {
			while (j > 0 && needle[i] !== needle[j]) j = next[j - 1];
			if (needle[i] === needle[j]) j++;
			next[i] = j;
		}
		return next;
	};

	const next = initNext(needle);
	let j = 0;
	for (let i = 0; i < haystack.length; i++) {
		while (j > 0 && haystack[i] !== needle[j]) j = next[j - 1];
		if (haystack[i] === needle[j]) j++;
		if (j === needle.length) return i - needle.length + 1;
	}

	return -1;
};
// @lc code=end
