/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getSize = function (head) {
	let size = 0,
		cur = head;
	while (cur) {
		size++;
		cur = cur.next;
	}
	return size;
};
var getIntersectionNode = function (headA, headB) {
	let sizeA = getSize(headA),
		sizeB = getSize(headB);
	let curA = headA,
		curB = headB;
	if (sizeA < sizeB) {
		[curA, curB] = [curB, curA];
		[sizeA, sizeB] = [sizeB, sizeA];
	}

	let sizeDiff = sizeA - sizeB;
	while (sizeDiff-- > 0) {
		curA = curA.next;
	}
	while (curA && curA !== curB) {
		curA = curA.next;
		curB = curB.next;
	}
	return curA;
};
// @lc code=end
