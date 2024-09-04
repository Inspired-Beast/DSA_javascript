// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

// link - https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/


// Solution using BFS and array reverse

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
var zigzagLevelOrder = function(root) {

    if(!root){
        return []
    }
    let resultArr = []
    let queue = []
    queue.push(root)
    let check = 0
    while(queue.length){
        let dumpArr = []
        let queueLength = queue.length;
        check++
        for(let i=0; i<queueLength; i++){
            var currentVal = queue.shift()
            if(currentVal['left']){
                queue.push(currentVal['left'])
            }
            if(currentVal['right']){
                queue.push(currentVal['right'])
            }
            dumpArr.push(currentVal.val)
        }
        if(check%2===0){
            dump = dumpArr.reverse()
        }
        resultArr.push(dumpArr)
    }
    return resultArr
};

//solution using tree depth and push /unshift
var zigzagLevelOrder = function(root) {

    if(!root){
        return []
    }
    let resultArr = []
    let queue = []
    queue.push(root)
    let check = 0
    while(queue.length){
        let dumpArr = []
        let queueLength = queue.length;
        check++
        for(let i=0; i<queueLength; i++){
            
            var currentVal = queue.shift()
            if(currentVal['left']){
                queue.push(currentVal['left'])
            }
            if(currentVal['right']){
                queue.push(currentVal['right'])
            }
            if(check%2!==0){
                dumpArr.push(currentVal.val)
            }
            else{
                dumpArr.unshift(currentVal.val)
            }
        }
        resultArr.push(dumpArr)
    }
    return resultArr
};