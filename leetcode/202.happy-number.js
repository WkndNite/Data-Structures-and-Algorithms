/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	const set = new Set();
	let totalCount;
	while (totalCount !== 1) {
		let arr = ("" + (totalCount || n)).split("");
		totalCount = arr.reduce((total, num) => {
			return total + num * num;
		}, 0);
		if (set.has(totalCount)) return false;
		set.add(totalCount);
	}
	return true;
};
// @lc code=end
