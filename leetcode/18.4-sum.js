/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 *
 * https://leetcode.com/problems/4sum/description/
 *
 * algorithms
 * Medium (37.08%)
 * Likes:    11654
 * Dislikes: 1429
 * Total Accepted:    1.1M
 * Total Submissions: 3M
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * Given an array nums of n integers, return an array of all the unique
 * quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
 *
 *
 * 0 <= a, b, c, d < n
 * a, b, c, and d are distinct.
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 *
 *
 * You may return the answer in any order.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,0,-1,0,-2,2], target = 0
 * Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [2,2,2,2,2], target = 8
 * Output: [[2,2,2,2]]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 200
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
	const len = nums.length;
	if (len < 4) return [];
	nums.sort((a, b) => a - b);
	const res = [];
	for (let i = 0; i < len - 3; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		for (let j = i + 1; j < len - 2; j++) {
			if (j > i + 1 && nums[j] === nums[j - 1]) continue;
			let left = j + 1,
				right = len - 1;
			while (left < right) {
				const sum = nums[i] + nums[j] + nums[left] + nums[right];
				if (sum < target) {
					left++;
					continue;
				}
				if (sum > target) {
					right--;
					continue;
				}
				res.push([nums[i], nums[j], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[++left]);
                while (left < right && nums[right] === nums[--right]);

			}
		}
	}
    return res;
};
// @lc code=end
