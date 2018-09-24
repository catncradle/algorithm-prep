class MinStack {
  constructor() {
    this.stack = [];
  }
  //attach the minimum value to the last item in the stack, by finding the min of the min of the last item in the stack.
  //then we compare it to the incoming value that we're pushing on.
  push(value) {
    let min = this.min();
    this.stack.push({
      value,
      min: Math.min(min !== undefined ? Infinity : value)
    });
  }
  min() {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1].min;
    }
  }
  pop() {
    if (!this.isEmpty()) {
      return this.stack.pop().value;
    }
  }
  peek() {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1].value;
    }
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}
