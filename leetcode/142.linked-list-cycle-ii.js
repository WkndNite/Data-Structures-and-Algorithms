/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
	if (!head || !head.next) return null;
	let slow = head.next,
		fast = head.next.next;
	while (fast && fast.next && slow !== fast) {
		fast = fast.next.next;
		slow = slow.next;
	}
	if (!fast || !fast.next) return null;
	slow = head;
	while (fast !== slow) {
		slow = slow.next;
		fast = fast.next;
	}
	return slow;
};

// var detectCycle = function (head) {
// 	let ptr = head;
// 	let visited = new Set();
// 	while (ptr) {
// 		if (visited.has(ptr)) return ptr;
// 		visited.add(ptr);
// 		ptr = ptr.next;
// 	}
// 	return null;
// };
// @lc code=end
