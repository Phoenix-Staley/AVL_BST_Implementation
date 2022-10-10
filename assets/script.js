function AVLNode(value, leftNode, rightNode, parentNode) {
    this.value = value;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
    this.parentNode = parentNode;

    this.displayValue = () => {
        console.log(this.value);
    }

    this.insert = (insertVal) => {
        if (insertVal < this.value) {
            if (this.leftNode === null) {
                this.leftNode = new AVLNode(insertVal, null, null, this);
            } else {
                this.leftNode.insert(insertVal);
            }
        } else if (insertVal > this.value) {
            if (this.rightNode === null) {
                this.rightNode = new AVLNode(insertVal, null, null, this);
            } else {
                this.rightNode.insert(insertVal);
            }
        } else {
            return; // Do nothing if the inserted value is the value of the current node
        }
        return; // Return if the node has been inserted.
    }

    // Functions to be implemented
    // delete(value)

    // Helper functions
    // findMinNode()
    // getRootNode()
    // inorder(node)
    // preorder(node)
    // postorder(node)
    // search(node, data)
}

let treeHead = new AVLNode(6, null, null, null);

treeHead.displayValue();

treeHead.insert(4);

treeHead.insert(5);

treeHead.insert(3);

treeHead.insert(8);

treeHead.insert(7);

treeHead.insert(9);

treeHead.leftNode.rightNode.displayValue();

treeHead.leftNode.leftNode.displayValue();

// treeHead.delete(8);

console.log(treeHead.rightNode);