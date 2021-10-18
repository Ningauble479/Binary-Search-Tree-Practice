class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export const insert = (data) => {

    //creating new node with data
    var newNode = new Node(data);

    //root is null then node will be added to the tree and made the root
    if(this.root === null)
        this.root = newNode;
    else

        //find the correct position in the tree and add the node
        this.insertNode(this.root, newNode)

}



export const insertNode = (node, newNode) => {
    if(newNode.data < node.data) {
        if(node.left === null)
            node.left = newNode;
        else
            this.insertNode(node.left, newNode);
    } else {
        if(node.right === null)
            node.right = newNode;
        else
            this.insertNode(node.right, newNode)
    }
}


export const remove = (data) => {
    this.root = this.removeNode(this.root, data)
}

export const removeNode = (node, key) => {
    if(node === null) return null;

    else if(key < node.data) {
        node.left = this.removeNode(node.left, key);
        return node;
    }

    else if(key > node.data) {
        node.right = this.removeNode(node.right, key);
        return node;
    }

    else {
        if(node.left === null && node.right === null){
            node = null;
            return node
        }

        if(node.left === null){
            node = node.right;
            return node;
        } else if(node.right === null){
            node = node.left;
            return node
        }

        var aux = this.findMinNode(node.right);
        node.data = aux.data

        node.right = this.removeNode(node.right, aux.data);
        return node;
    }
}


export const inorder = (node) => {
    if(node !== null){
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right)
    }
}


export const preorder = (node) => {
    if(node !== null){
        console.log(node.data);
        this.preorder(node.left)
        this.preorder(node.right)
    }
}

export const postorder = (node) => {
    if(node !== null) {
        this.postorder(node.left)
        this.postorder(node.right)
        console.log(node.data)
    }
}


export const findMinNode = (node) => {
    if(node.left === null) return node
    else return this.findMinNode(node.left)
}

export const getRootNode = () => {
    return this.root;
}

export const search = (node, data) => {
    if(node === null) return null

    else if(data < node.data) return this.search(node.left, data)

    else if(data > node.data) return this.search(node.right, data)

    else return node
}
