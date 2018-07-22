class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.magnitude = 1;
  }

  addValue(value) {
    // first we define a node
    const node = new BST(value);
    if (this.value >= node.value) {
      !this.left ? (this.left = node) : this.left.addValue(value);
    }
    if (this.value < node.value) {
      !this.right ? (this.right = node) : this.right.addValue(value);
    }
    this.magnitude++;
  }
}
