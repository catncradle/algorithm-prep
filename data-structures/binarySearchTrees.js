class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.magnitude = 1;
  }

  addValue(value) {
    const node = new BST(value);
    if (this.value >= node.value) {
      !this.left ? (this.left = node) : this.left.addValue(value);
    }
    if (this.value < node.value) {
      !this.right ? (this.right = node) : this.right.addValue(value);
    }
    this.magnitude++;
  }
  contains(value) {
    // base case if value is at the node return it
    if (this.value === value) {
      return true;
    }
    const direction = this.value >= value ? "left" : "right";
    if (this[direction]) return this[direction].contains(value);
    else return false;
  }
  depthFirstForEach(fn, opt = "in-order") {
    if (opt === "pre-order") fn(this.value);
    if (this.left) this.left.depthFirstForEach(fn, opt);
    if (opt === "in-order") fn(this.value);
    if (this.right) this.right.depthFirstForEach(fn, opt);
    if (opt === "post-order") fn(this.value);
  }
  breadthFirstForEach(fn) {
    const queue = [this];
    while (queue.length) {
      const current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      fn(current.value);
    }
  }
}
