/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	let left = 0;
	let right = nums.length;
	let middle = 0;
	while (left < right) {
		middle = left + Math.floor((right - left) / 2);
		if (nums[middle] === target) return middle;
		nums[middle] > target ? (right = middle) : (left = middle + 1);
	}
	return left;
};
// @lc code=end
