/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var lc_intersection = function (nums1, nums2) {
	const set1 = new Set(nums1);
	const set2 = new Set(nums2);
	return Array.from(new Set(set1.intersection(set2)));
};

var intersection = function (nums1, nums2) {
	return Array.from(new Set(nums1.filter((item) => nums2.includes(item))));
};

var intersection = function (nums1, nums2) {
	if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
	const resSet = new Set();
	for (const item of nums2) nums1.includes(item) && resSet.add(item);
	return Array.from(resSet);
};

var intersection = function (nums1, nums2) {
	if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
	const resSet = new Set();
	for (let i = 0; i < nums2.length; i++)
		nums1.includes(nums2[i]) && resSet.add(nums2[i]);
	return Array.from(resSet);
};
// @lc code=end
// const res = intersection([4,9,5],[9,4,9,8,4])
// console.log(res)
