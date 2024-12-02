/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
	if (num === 0 || num === 1) return true;
	let left = 0;
	let right = num;
	let middle = 0;
	while (left < right) {
		middle = left + Math.floor((right - left) / 2);
		if (middle * middle === num) return true;
		middle * middle > num ? (right = middle) : (left = middle + 1);
	}
	return right * right === num;
};
// @lc code=end
