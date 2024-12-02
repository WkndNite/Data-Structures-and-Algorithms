/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
	let res = new Array(n).fill(0).map(() => new Array(n).fill(0));
	let startX = (startY = 0);
	let loop = Math.floor(n / 2);
	let mid = Math.floor(n / 2);
	let offset = 1;
	let cnt = 1;

	while (loop--) {
		let row = startX,
			col = startY;

		for (; col < n - offset; col++) {
			res[row][col] = cnt++;
		}
		for (; row < n - offset; row++) {
			res[row][col] = cnt++;
		}
		for (; col > startY; col--) {
			res[row][col] = cnt++;
		}
		for (; row > startX; row--) {
			res[row][col] = cnt++;
		}

		startX++;
		startY++;

		offset++;
	}

	if (n % 2 === 1) {
		res[mid][mid] = cnt;
	}
	return res;
};
// @lc code=end
