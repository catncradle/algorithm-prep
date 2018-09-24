//we are going to implement a stack that holds a bunch of stacks that have a max capacity, we should be able to push/pop stacks as needed

class StackOfStacks {
  constructor(maxSize) {
    if (!maxSize) {
      throw new Error("you dun goofed");
    }
    this.stacks = [[]];
    this.max = maxSize;
  }
  //in our push method we the stack at the last index of the parent stack to see if it's at capacity, if it is, we put in a new stack
  push(value) {
    if (this.stacks[this.stacks.length - 1].length >= this.max) {
      this.stacks.push([]);
    }
    this.stacks[this.stacks.length - 1].push(value);
  }
  pop() {
    let value = this.stacks[this.stacks.length - 1].pop();

    return value;
  }
}

export default StackOfStacks;
