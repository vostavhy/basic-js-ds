const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.tail;
  }

  enqueue(value) {
    let node = new ListNode(value);

    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      //node.next = this.tail;
      //this.tail = node;
      this.head.next = node;
      this.head = node;
    }
  }

  dequeue() {
    let value = this.tail.value;
    this.tail = this.tail.next;
    return value;
  }
};

function ListNode(x) {
  this.value = x;
  this.next = null;
}
