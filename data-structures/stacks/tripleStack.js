// Desbcribe how you could use a single array to implement three stacks

//we initialize a class that has an array that holds our three stacks

class TripleStack {
  constructor() {
    this._array = [];
    this._length = [0, 0, 0];
  }
  getLength(stack) {
    return this._length[stack - 1];
  }
  push(stack, value) {
    let idx = this.getLength(stack) * 3 + stack - 1;
    this._array[idx] = value;
    ++this._lengths[stack - 1];
  }
}

export default TripleStack;
