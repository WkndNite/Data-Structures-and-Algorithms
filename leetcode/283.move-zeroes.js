/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let slowPtrIndex = 0;
	let length = nums.length;
	for (let fastPtrIndex = 0; fastPtrIndex < length; fastPtrIndex++) {
		if (nums[fastPtrIndex] !== 0) {
			[nums[slowPtrIndex], nums[fastPtrIndex]] = [
				nums[fastPtrIndex],
				nums[slowPtrIndex],
			];
			slowPtrIndex++;
		}
	}
};
// @lc code=end
