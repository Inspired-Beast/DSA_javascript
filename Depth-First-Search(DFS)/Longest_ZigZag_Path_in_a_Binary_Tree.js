// You are given the root of a binary tree.

// A ZigZag path for a binary tree is defined as follow:

// Choose any node in the binary tree and a direction (right or left).
// If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
// Change the direction from right to left or from left to right.
// Repeat the second and third steps until you can't move in the tree.
// Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

// Return the longest ZigZag path contained in that tree.

// https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/description/

// Example 1:


// Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
// Output: 3
// Explanation: Longest ZigZag path in blue nodes (right -> left -> right).

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
var longestZigZag = function(root) {
    let maxL = 0;
    var dfs = function(node, direction, max){
        if(!node){
            return
        }
        maxL = Math.max(max, maxL)

        if(direction==="left"){
            dfs(node.right, "right", ++max)
            dfs(node.left, "left", 1)
        }
        else{
            dfs(node.left, "left", ++max)
            dfs(node.right, "right", 1)
        }
    }
    dfs(root, "left", 0)
    dfs(root, "right", 0)
    return maxL
};