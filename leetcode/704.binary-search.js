/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let left = 0;
	let right = nums.length;
	let middle = null;
	while (left < right) {
		middle = left + Math.floor((right - left) / 2);
		if (nums[middle] === target) return middle;
		nums[middle] > target ? (right = middle) : (left = middle + 1);
	}
	return -1
};
// @lc code=end