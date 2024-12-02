/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var myIncludes = function (nums, target) {
	let left = 0;
	let right = nums.length;
	let middle = 0;
	while (left < right) {
		middle = left + Math.floor((right - left) / 2);
		if (nums[middle] === target) {
			return { flag: true, index: middle };
		}
		nums[middle] > target ? (right = middle) : (left = middle + 1);
	}
	return { flag: false, index: -1 };
};

var searchRange = function (nums, target) {
	const index = myIncludes(nums, target).index;
	const flag = myIncludes(nums, target).flag;

	if (!flag) {
		return [index, index];
	}

	let leftBorder = index,
		rightBorder = index;

	while (nums[leftBorder] === target) {
		leftBorder--;
	}
	while (nums[rightBorder] === target) {
		rightBorder++;
	}
	return [leftBorder + 1, rightBorder - 1];
};
// @lc code=end
