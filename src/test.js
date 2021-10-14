class Queue {
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
}

function ListNode(x) {
  this.value = x;
  this.next = null;
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log('5', queue.dequeue());
console.log('6', queue.dequeue());
