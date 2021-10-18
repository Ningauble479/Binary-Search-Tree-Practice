// import {insert, remove, findMinNode, getRootNode, inorder, preorder, postorder, search} from 'sortMethods.mjs'
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor()
    {
        // root of a binary search tree
        this.root = null;
    }
    
    insert(data){
    
        //creating new node with data
        var newNode = new Node(data);
    
        //root is null then node will be added to the tree and made the root
        if(this.root === null)
            this.root = newNode;
        else
    
            //find the correct position in the tree and add the node
            this.insertNode(this.root, newNode)
    
    }

    insertNode(node, newNode){
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
    
    remove(data){
        this.root = this.removeNode(this.root, data)
    }
    
    removeNode(node, key){
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
    
    inorder(node){
        if(node !== null){
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right)
        }
    }
    
    
    preorder(node){
        if(node !== null){
            console.log(node.data);
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }
    
    postorder(node){
        if(node !== null) {
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.data)
        }
    }
    
    
    findMinNode(node){
        if(node.left === null) return node
        else return this.findMinNode(node.left)
    }
    
    getRootNode(){
        return this.root;
    }
    
    search(node, data){
        if(node === null) return null
    
        else if(data < node.data) return this.search(node.left, data)
    
        else if(data > node.data) return this.search(node.right, data)
    
        else return node
    }
    
}

// create an object for the BinarySearchTree
var BST = new BinarySearchTree();
 
let array = [25, 15, 10, 7, 22, 17, 13, 5, 9, 27]

array.map((number)=>BST.insert(number))
// Inserting nodes to the BinarySearchTree

                         
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17
 
var root = BST.getRootNode();
             
// prints 5 7 9 10 13 15 17 22 25 27
BST.inorder(root);
             
// Removing node with no children
BST.remove(5);
             
             
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17
             
                         
var root = BST.getRootNode();
             
// prints 7 9 10 13 15 17 22 25 27
BST.inorder(root);
             
// Removing node with one child
BST.remove(7);
             
//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17
             
             
var root = BST.getRootNode();
 
// prints 9 10 13 15 17 22 25 27
BST.inorder(root);
             
// Removing node with two children
BST.remove(15);
     
//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
 
var root = BST.getRootNode();
console.log("inorder traversal");
 
// prints 9 10 13 17 22 25 27
BST.inorder(root);
             
console.log("postorder traversal");
BST.postorder(root);
console.log("preorder traversal");
BST.preorder(root);