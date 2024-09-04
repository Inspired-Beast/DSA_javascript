// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2
 
// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//Solution 1 using iteration 

var maxDepth = function(root) {
    let max = 0
    if(!root){
        return 0
    }
    let queue = []
    queue.push(root)
    while(queue.length){
        let newcheck = queue.length
        for(let i=0; i<newcheck; i++){
            let current = queue.shift();
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
        max++
    }
    return max
};

//Solution 2 using recursion and dummy parameters

var maxDepth = function(root) {
    if(!root) return 0
    function traverse(current){
        if(!current){
            return  
        }
        else{
            temp++
            max = Math.max(temp, max)
            traverse(current.left)
            traverse(current.right)
            temp-- //decrementing as we want to check level by level and incase we have two or more elements
            // in a level then recursion will call traverse again for individual nodes hence for one level we want 
            //1 incrment of temp which we update using Math.max  and which will not
            //increment according to nodes present
        }
    }
    let max = 0
    let temp =0
    traverse(root)
    return max
}

// Solution 3 using recursion only

var maxDepth = function(root) {
    if(!root) return 0
    function traverse(current){
        if(!current){
            return  
        }
        return Math.max(maxDepth(current.left), maxDepth(current.right))+1 // adding 1 for each level
        //incrmenet
    }
    let max = traverse(root)
    return max
};