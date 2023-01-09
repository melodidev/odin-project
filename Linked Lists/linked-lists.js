class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class linkedList {
	constructor(head=null) {
		this.listHead = head;
	}

	size() {
		let count = 0; 
		let node = this.listHead;

		while (node) {
			count++;
			node = node.next;
		} return count;
	}

	head() {
		return this.listHead;
	}

	tail() {
		if (this.listHead == null) return this.listHead;

		let node = this.listHead;

		while (node.next) {
			node = node.next;
		}
		return node;
	}

	append(value) {
		let newNode = new Node(value);

		if (this.listHead == null) {
			this.listHead = newNode;
			return;
		}
		this.tail().next = newNode;
	}

	prepend(value) {
		let newNode = new Node(value);
		if (this.listHead == null) {
			this.listHead = newNode;
			return;
		}

		let tmp = this.listHead;
		this.listHead = newNode;
		this.listHead.next = tmp;
	}

	at(index) {
		if (this.size() <= index) return false;

		let count = 0; 
		let node = this.listHead;

		while (count < index) {
			count++;
			node = node.next;
		}
		return node;
	}

	pop() {
		if (this.listHead == null) return;
		if (this.size() == 1) {
			this.listHead = null;
			return;
		}

		let prev = this.at(this.size() - 2);
		prev.next = null;
	}

	contains(value) {
		let node = this.listHead;

		while (node) {
			if (node.value == value) return true;
			node = node.next;
		}
		return false;
	}

	find(value) {
		let index = 0; 
		let node = this.listHead;

		while (node) {
			if (node.value == value) return index;
			index++;
			node = node.next;
		}
		return false;
	}

	toString() {
		let node = this.listHead;
		let str = "";

		while (node) {
			str = str + `( ${node.value} ) -> `;
			node = node.next;

			if (!node) {
				str = str + ` null`;
			}
		}
		return str;
	}
}

let node1 = new Node("foo");
let node2 = new Node("bar");
node1.next = node2;
let list = new linkedList(node1);