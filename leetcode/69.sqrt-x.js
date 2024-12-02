/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	if (x === 0 || x === 1) return x;
	let left = 0,
		right = x,
		middle = 0;
	while (left < right) {
		middle = left + Math.floor((right - left) / 2);
		if (middle * middle === x) return middle;
		middle * middle > x ? (right = middle) : (left = middle + 1);
	}
	return right - 1;
};

// @lc code=end
