/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	let slowPtrIndex = 0;
	const length = nums.length;
	for (let fastPtrIndex = 0; fastPtrIndex < length; fastPtrIndex++) {
		if (nums[fastPtrIndex] !== val) {
			nums[slowPtrIndex++] = nums[fastPtrIndex];
		}
	}
	return slowPtrIndex;
};
// @lc code=end
