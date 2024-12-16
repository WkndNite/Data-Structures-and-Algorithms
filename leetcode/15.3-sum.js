/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (35.82%)
 * Likes:    31757
 * Dislikes: 2979
 * Total Accepted:    4.2M
 * Total Submissions: 11.6M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j],
 * nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] +
 * nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation:
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 * The distinct triplets are [-1,0,1] and [-1,-1,2].
 * Notice that the order of the output and the order of the triplets does not
 * matter.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,1,1]
 * Output: []
 * Explanation: The only possible triplet does not sum up to 0.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 * Explanation: The only possible triplet sums up to 0.
 *
 *
 *
 * Constraints:
 *
 *
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
// 	const res = [],
// 		len = nums.length;
// 	nums.sort((a, b) => a - b);
// 	for (let i = 0; i < len; i++) {
// 		let left = i + 1,
// 			right = len - 1,
// 			iNum = nums[i];
// 		if (iNum > 0) return res;
// 		if (iNum === nums[i - 1]) continue;
// 		while (left < right) {
// 			let leftNum = nums[left],
// 				rightNum = nums[right],
// 				sum = iNum + leftNum + rightNum;
// 			if (sum < 0) left++;
// 			else if (sum > 0) right--;
// 			else {
// 				res.push([iNum, leftNum, rightNum]);
// 				while (left < right && nums[left] === nums[left + 1]) left++;
// 				while (left < right && nums[right] === nums[right - 1]) right--;
// 				left++;
// 				right--;
// 			}
// 		}
// 	}
// 	return res;
// };
var threeSum = function (nums) {
    // nsum通用解法核心方法
    function nSumTarget(nums, n, start, target) {
        // 前提：nums要先排序好
        let res = [];
        if (n === 2) {
            res = towSumTarget(nums, start, target);
        } else {
            for (let i = start; i < nums.length; i++) {
                // 递归求(n - 1)sum
                let subRes = nSumTarget(
                    nums,
                    n - 1,
                    i + 1,
                    target - nums[i]
                );
                for (let j = 0; j < subRes.length; j++) {
                    res.push([nums[i], ...subRes[j]]);
                }
                // 跳过相同元素
                while (nums[i] === nums[i + 1]) i++;
            }
        }
        return res;
    }

    function towSumTarget(nums, start, target) {
        // 前提：nums要先排序好
        let res = [];
        let len = nums.length;
        let left = start;
        let right = len - 1;
        while (left < right) {
            let sum = nums[left] + nums[right];
            if (sum < target) {
                while (nums[left] === nums[left + 1]) left++;
                left++;
            } else if (sum > target) {
                while (nums[right] === nums[right - 1]) right--;
                right--;
            } else {
                // 相等
                res.push([nums[left], nums[right]]);
                // 跳过相同元素
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
        }
        return res;
    }
    nums.sort((a, b) => a - b);
    // n = 3，此时求3sum之和
    return nSumTarget(nums, 3, 0, 0);
};
// @lc code=end
