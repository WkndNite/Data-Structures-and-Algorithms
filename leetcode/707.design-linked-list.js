/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */

// @lc code=start

class LinkNode {
	constructor(val, next) {
		this.val = val;
		this.next = next;
	}
}

var MyLinkedList = function () {
	this._size = 0;
	this._head = this._tail = null;
};

MyLinkedList.prototype.getNode = function (index) {
	if (index < 0 || index >= this._size) return null;
	let cur = new LinkNode(0, this._head);
	while (index-- >= 0) {
		cur = cur.next;
	}
	return cur;
};

/**
 * @param {number} index
 * @return {number}
 */

MyLinkedList.prototype.get = function (index) {
	return this.getNode(index)?.val ?? -1;
};
/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
	const newNode = new LinkNode(val, this._head);
	if (this._size === 0) {
		this._tail = newNode;
	}
	this._size++;
	this._head = newNode;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
	const newNode = new LinkNode(val, null);
	if (this._size === 0) {
		this._head = newNode;
	} else {
		this._tail.next = newNode;
	}
	this._tail = newNode;
	this._size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
	// 头节点之前? 尾节点之后? 正常index?
	if (index <= 0) {
		this.addAtHead(val);
		return;
	}
	if (index > this._size) return;
	if (index === this._size) {
		this.addAtTail(val);
		return;
	}
	const preNode = this.getNode(index - 1);
	preNode.next = new LinkNode(val, preNode.next);
	this._size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
	if (index < 0 || index >= this._size) return;
	// 单节点链表 多节点链表 删除头部
	// single node
	if (this._size === 1) {
		this._head = this._tail = null;
		this._size--;
		return;
	}
	// 下面都是多节点情况处理
	// index = 0
	if (index === 0) {
		this._head = this._head.next;
		this._size--;
		return;
	} else {
		const preNode = this.getNode(index - 1);
		preNode.next = preNode.next.next;
		this._size--;
		if (index === this._size - 1) this._tail = preNode;
		return;
	}
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
	if (index < 0 || index >= this._size) return;
	// 单节点链表 多节点链表 删除头部
	// single node
	if (this._size === 1) {
		this._head = this._tail = null;
		this._size--;
		return;
	}
	// 下面都是多节点情况处理
	// index = 0
	if (index === 0) {
		this._head = this._head.next;
		this._size--;
		return;
	} else {
		const preNode = this.getNode(index - 1);
		preNode.next = preNode.next.next;
		if (index === this._size - 1) this._tail = preNode;
		this._size--;
		return;
	}
};


/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
