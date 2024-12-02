/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	let result = Infinity,
		left = 0,
		sum = 0,
		subLen = 0;
	for (let right = 0; right < nums.length; right++) {
		sum += nums[right];
		while (sum >= target) {
			subLen = right - left + 1;
			result = result < subLen ? result : subLen;
			sum -= nums[left++];
		}
	}
	return result === Infinity ? 0 : result;
};
// @lc code=end
