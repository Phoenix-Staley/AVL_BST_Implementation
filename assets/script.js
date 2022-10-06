function AVLNode(value, leftNode, rightNode) {
    this.value = value;
    this.leftNode = leftNode;
    this.rightNode = rightNode;

    this.displayValue = () => {
        console.log(this.value);
    }

    this.insert = (insertVal) => {
        if (insertVal < this.value) {
            if (this.leftNode === null) {
                this.leftNode = new AVLNode(insertVal, null, null);
            } else {
                this.leftNode.insert(insertVal);
            }
        } else if (insertVal > this.value) {
            if (this.rightNode === null) {
                this.rightNode = new AVLNode(insertVal, null, null);
            } else {
                this.rightNode.insert(insertVal);
            }
        } else {
            return; // Do nothing if the inserted value is the value of the current node
        }
        return; // Return if the node has been inserted.
    }
}

let treeHead = new AVLNode(6, null, null);

treeHead.displayValue();

treeHead.insert(4);

treeHead.insert(5);

treeHead.insert(3);

treeHead.leftNode.rightNode.displayValue();

treeHead.leftNode.leftNode.displayValue();