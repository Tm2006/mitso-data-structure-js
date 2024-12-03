const { NotImplementedError } = require("../extensions/index.js");

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
module.exports = class Stack {
  constructor() {
    this.stack = []; // Initialize an empty array to represent the stack
  }

  push(element) {
    this.stack.push(element); // Add the element to the end of the array
  }

  pop() {
    return this.stack.pop(); // Remove and return the last element of the array
  }

  peek() {
    return this.stack[this.stack.length - 1]; // Return the last element without removing it
  }
};
