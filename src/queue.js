const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
class Queue {
  constructor() {
    this.arr = []
  }

  getUnderlyingList() {
    return this.arr.reverse().reduce((acc, value) => {
      if (acc) {
        const node = new ListNode(value);
        node.next = acc;
        return node;
      }
      return new ListNode(value);
    }, null);
  }

  enqueue(value) {
    this.arr.push(value)
  }

  dequeue() {
    let res = this.arr[0]
    this.arr.splice(0,1)
    return res
  }
}

module.exports = {
  Queue
};
