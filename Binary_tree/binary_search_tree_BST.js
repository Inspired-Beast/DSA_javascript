class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root=null // we provided null at the class constructor because we want the root to change 
        //when node is being inserted and not before Node value is inserted as tree can exist without
        // node value unlinke linked lists
    }

    insert(value){
        const newNode = new Node(value);

        if(this.root===null){
            this.root= newNode;
            return this
        }
        let temp = this.root
        while(true){

            if(newNode.value===temp.value){
                return undefined
            }

            if(newNode.value <  temp.value){
                if(temp.left===null){
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            }

            else{
                if(temp.right===null){
                    temp.right = newNode
                    return this
                }

                temp = temp.right
            }
        }
    }

    contains(value){

        if(this.root===null) return false
        let temp = this.root;
        while(temp){
            if(value<temp.value){
                temp = temp.left
            }
            else if(value > temp.value){
                temp = temp.right
            }
            else{
                return true
            }
        }
        return false
    }

    recursiveContains(value, node=this.root){ 
        // recursive method to check if binary search tree contains the given value
        if(node===null){
            return false
        }

        if(node.value===value){
            return true
        }

        if(value< node.value){
            node = node.left
            return this.recursiveContains(value, node)
        }
        if(value> node.value){
            node = node.right
            return this.recursiveContains(value, node)
        }
    }

    #rInsert(value, node=this.root){
        if(node===null){
            return new Node(value)
        }
        if(value< node.value){
            node.left = this.#rInsert(value, node.left)
        }
        if(value > node.value){
            node.right = this.#rInsert(value, node.right)
        }   
        return node
    }

    recursiveInsert(value){
        if(this.root===null){
            this.root = new Node(value)
        }
        this.#rInsert(value)
    }

    minValue(node){ // gives minimum value of the node provided, note it gives the value of leftist leaf node
        while(!node.left === null){
            node = node.left
        }
        return node.value
    }

    #deleteNode(value, currentNode){
        if(currentNode===null) return null // incase the node is not present return null or incase only root is there remove the root node

        if(value<currentNode.value){
            currentNode.left = this.#deleteNode(value, currentNode.left) // recursive call of the function till we reach the node to be removed
        }
        else if(value> currentNode.value){
            currentNode.right = this.#deleteNode(value, currentNode.right)
        }
        else{
            if(currentNode.left===null && currentNode.right===null){ // if the node that is to be removed is leaf node then simply remove it by
                return null                                          // assigning it to null
            }
            else if(currentNode.left===null){
                currentNode = currentNode.right; // swapping the node to be removed with the right child in case left child is empty
            }
            else if(currentNode.right===null){
                currentNode = currentNode.left; // swapping the node to be removed with the left child in case right child is empty
            }
            else{
                let sub = this.minValue(currentNode.right); // we now look for minimum value of node on right side
                // the reason being lets say we want to remove node 25 and it has both left and right child nodes and both are not leaf nodes.
                // in that scenario we can't traverse to left as the more left we go the most minimum value we will get hence we want to get value
                // neither the highest nor the lowest and that we will get by finding min value for right child node 

                // the min Value function provides us the value which is like that by traversing to the left of the node provided.
                currentNode.value = sub; // changing the value of node that is to be removed

                currentNode.right = this.#deleteNode(sub, currentNode.right) // since we have copied that minimum value to the node
                // that we want to removed, hence we will have two copies now available one in the original place and one we just placed
                //now, so we will remove the one in original place and for that we will start traversing and call delete node function from the
                // newly changed function
            }
        }
        return currentNode

    }

    deleteNodeRecursive(value){
        this.root = this.#deleteNode(value, this.root) // we proviede root the value in case the situation demands for removal of root node.
    }
}

const newBstTree = new BST()
newBstTree.insert(26)
newBstTree.insert(76)
newBstTree.insert(16)
newBstTree.insert(56)
newBstTree.insert(76)
newBstTree.insert(96)
newBstTree.recursiveInsert(55)
console.log(newBstTree.contains(55))
console.log(newBstTree.recursiveContains(96))
newBstTree.deleteNodeRecursive(55)
console.log(newBstTree.contains(55))

// console.log(newBstTree)