/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
var swapPairs = function (head) {
	let dummyNode = new ListNode(0, head);
	let cur = dummyNode;
	while (cur.next && cur.next.next) {
		let first = cur.next;
		let second = cur.next.next;
		first.next = second.next;
		second.next = first;
		cur.next = second;
		cur = first;
	}
	return dummyNode.next;
};
// @lc code=end
