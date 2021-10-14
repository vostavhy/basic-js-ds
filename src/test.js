class Stack {
  constructor() {
    this.array = [];
  }

  push(element) {
    this.array.push(element);
  }

  pop() {
    return this.array.pop();
  }

  peek() {
    return this.array[this.array.length - 1];
  }
}

const stack = new Stack();

stack.push(1); // adds the element to the stack

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
