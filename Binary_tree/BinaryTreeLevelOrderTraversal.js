// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level). 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

// link - https://leetcode.com/problems/binary-tree-level-order-traversal/description/

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
 * @return {number[][]}
 */

// note this BFS is different from one we saw in BST_tree_traversal.js because here we dont have to add 
//values all at once but instead in format of each level in an array
var levelOrder = function(root) {
    if(!root) return []
    let queue = [root]
    let result = []
    while(queue.length){
        const queueLength = queue.length // storing length for each iteration as when value
        //gets added to queue it queue.length will get modified
        let arr = []
        for(let i=0; i<queueLength; i++){
            let value = queue.shift()
            arr.push(value.val)
            if(value.left){
                queue.push(value.left)   
            }
            if(value.right){
                queue.push(value.right)
            }   
        }
    result.push(arr)

        
    }
    return result

};

