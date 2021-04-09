/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.top = null;
  }

  push(element) {
    const obj = {
      previous: this.top,
      value: element,
    };
    this.top = obj;
  }

  pop() {
    const delElement = this.top.value;
    this.top = this.top.previous;
    return delElement;
  }

  peek() {
    return this.top.value;
  }
}

module.exports = Stack;
