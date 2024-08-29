class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BST{
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.root===null){
            this.root = newNode
            return this
        }
        let temp = this.root
        while(true){
            if(newNode.value<temp.value){
                if(!temp.left){
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            }
            else if(newNode.value>temp.value){
                if(!temp.right){
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
            else{
                return undefined
            }
        }
    }

    BFS(){
        // in this we will make use of a queue and an array , the queue will hold all nodes per breadth 
        // the result will add the node values one by one depending upon items present in the queue
        // so will start with queue having the root node and the we will one by one 
        let current = this.root
        let queue = []; // will push the current node into this queue
        let results = []
        queue.push(current)
        while(queue.length){ // will run with quque as iterator so that all values pushed into the queue
                            // get pushed to the traversal array
            current = queue.shift()// will dequeue the queue and get the node pushed by if statements
            // note this shift will help traverse the node from one level to another level
            results.push(current.value)
            if(current.left){
                queue.push(current.left) // pushing left node first to queue 
            }
            if(current.right){
                queue.push(current.right)
            }
        }
        return results
    }

    DFSPreorder(){
        // Preorder starts with root then left and then right, so in nutshell after getting root we will get all
        //left side elements before touching any right nodes
        let results = []; // so in DFS Pre order first we check the root and then all the nodes on left
        // and once we have all left node values then we go one node up and then right and similarlt we go one up
        //till we have checked every node
        function traverse(current){
            results.push(current.value);
            if(current.left){
                traverse(current.left) // this recursion will help us check all left before going to right
                //nodes
            }
            if(current.right){
                traverse(current.right)
                //once we have added all left nodes for the node in focus post that we will got right
            }
        }
        traverse(this.root)
        return results
    }

    DFSPostOrder(){
        // in Postorder we go from left to right and then root so it means the root node will be last one to be
        //traversed hence here we will do recursion for left then right and at the end we will push values
        //in the array
        let results = [];
        function traverse(node){
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
            results.push(node.value)
        }
        traverse(this.root)
        return results
    }

    DFSInOrder(){
        //here we go first to left node then root and then right so we will first recurse for left and then add values
        //to array and then check for right in this way we can acheive traversing from left root to right.
        let results = []
        function traverse(currnode){
            if(currnode.left){
                traverse(currnode.left)
            }
            results.push(currnode.value)
            if(currnode.right){
                traverse(currnode.right)
            }
        }
        traverse(this.root)
        return results
    }

}

const myBST = new BST();
myBST.insert(47);
myBST.insert(21);
myBST.insert(76)
myBST.insert(18)
myBST.insert(27)
myBST.insert(52)
myBST.insert(82)

console.log(myBST.BFS())
console.log(myBST.DFSPreorder())
console.log(myBST.DFSPostOrder())
console.log(myBST.DFSInOrder())