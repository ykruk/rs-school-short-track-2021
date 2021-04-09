const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.first = null;
    this.count = 0;
  }

  set size(val) {
    this.count = val;
  }

  get size() {
    return this.count;
  }

  enqueue(element) {
    const item = new ListNode(element);

    if (!this.first) {
      this.first = item;
    } else {
      let obj = this.first;
      while (obj.next) {
        obj = obj.next;
      }
      obj.next = item;
    }
    this.size += 1;
  }

  dequeue() {
    const delItem = this.first.value;
    this.first = this.first.next;
    this.size -= 1;
    return delItem;
  }
}

module.exports = Queue;
