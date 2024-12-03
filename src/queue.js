

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
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = class Queue {
  constructor() {
    this.head = null; // Points to the front of the queue
    this.tail = null; // Points to the end of the queue
  }

  getUnderlyingList() {
    return this.head; // Return the linked list starting from the head
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.tail) {
      // If the queue is empty, both head and tail point to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Add the new node to the end of the queue and update the tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      // If the queue is empty, return null
      return null;
    }
    const dequeuedValue = this.head.value; // Get the value of the head node
    this.head = this.head.next; // Move the head to the next node
    if (!this.head) {
      // If the queue becomes empty, update the tail to null
      this.tail = null;
    }
    return dequeuedValue;
  }
};

