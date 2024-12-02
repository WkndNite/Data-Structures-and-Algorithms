/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
	const result = Array.from({ length: nums.length });
	let left = 0;
	let right = nums.length - 1;
	let index = nums.length - 1;
	while (left <= right) {
		const leftSqr = nums[left] * nums[left];
		const rightSqr = nums[right] * nums[right];
		if (leftSqr > rightSqr) {
			result[index] = leftSqr;
			left++;
		} else {
			result[index] = rightSqr;
			right--;
		}
		index--;
	}
    return result;
};
// @lc code=end
