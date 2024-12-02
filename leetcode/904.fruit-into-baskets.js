/*
 * @lc app=leetcode id=904 lang=javascript
 *
 * [904] Fruit Into Baskets
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
	let cntMap = new Map();
	let left = 0;
	let result = 0;
	for (let right = 0; right < fruits.length; right++) {
		cntMap.set(fruits[right], 1 + (cntMap.get(fruits[right]) || 0));
		while (cntMap.size > 2) {
			cntMap.set(fruits[left], cntMap.get(fruits[left]) - 1);
			if (cntMap.get(fruits[left]) === 0) cntMap.delete(fruits[left]);
			left++;
		}
		result = result > right - left + 1 ? result : right - left + 1;
	}
	return result;
};
// @lc code=end
