/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	let slowPtrIndex = 0;
	let length = nums.length;
	for (let fastPtrIndex = 1; fastPtrIndex < length; fastPtrIndex++) {
		if (nums[slowPtrIndex] !== nums[fastPtrIndex]) {
			nums[++slowPtrIndex] = nums[fastPtrIndex];
		}
	}
	return slowPtrIndex + 1;
};
// @lc code=end
