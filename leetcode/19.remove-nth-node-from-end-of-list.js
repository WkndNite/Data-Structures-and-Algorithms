/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function (head, n) {
// 	let dummyHead = new ListNode(0, head);
// 	let fast = dummyHead;
// 	let slow = dummyHead;
// 	while (n--) fast = fast.next;
// 	while (fast.next !== null) {
// 		slow = slow.next;
// 		fast = fast.next;
// 	}
// 	slow.next = slow.next.next;
// 	return dummyHead.next;
// };

// var removeNthFromEnd = function(head,n){
// 	let cur = head;
// 	let size = 0;
// 	while(cur){
// 		cur = cur.next;
// 		size++
// 	}

// 	if(size===n){
// 		head = head.next;
// 	}else{
// 		cur = head;
// 		for(let i = 0;i<size-n-1;i++){
// 			cur = cur.next;
// 		}
// 		cur.next = cur.next.next;

// 	}
// 	return head;
// }

var removeNthFromEnd = function (head, n) {
	let newHead = new ListNode(0, head);
	let cnt = 0;

	function recur(node) {
		if (node === null) return;
		recur(node.next);
		cnt++;
		if (cnt === n + 1) node.next = node.next.next;
	}

	recur(newHead);
	return newHead.next;
};
// @lc code=end
