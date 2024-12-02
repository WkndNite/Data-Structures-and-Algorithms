/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	if (!head || !head.next) return head;
	let temp = null;
	let pre = null;
	let cur = head;
	while (cur) {
		temp = cur.next;
		cur.next = pre;
		pre = cur;
		cur = temp;
	}
	return pre;
};
// @lc code=end
