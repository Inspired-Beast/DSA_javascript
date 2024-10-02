// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

 

// Example 1:


// Input: root = [1,2,3,null,null,4,5]
// Output: [1,2,3,null,null,4,5]
// Example 2:

// Input: root = []
// Output: []

// link - https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description

//------------------------------------------------------------------------------------------------------

//Solution using dfs approach

// 1. for serialize -
//     we used an array which will store the values and started traversing from top to bottom one by one 
//     and storing the values in array as they come in the recursed function. Note here we are converting 
//     each value to string therefore the null value pushed should be in string form, and at the end we will join 
//     the values of array and provide the result in string format as asked

// 2.  for deserialize - 
//     we again used dfs but here we will first split the string and get the array on which we will traverse
//     then we will do multiple recursion calls to build our tree , therefore we will start from creating 
//     top tree element and then go down one by one, to get the values we will use shift() method of the array
//     ,once we have the array values we will parse it into integers before creating a node instance which will store
//     left and right values using the function recursion

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const deserializedArray = []

    function dfs(node){
        if(!node){
            deserializedArray.push("null")
            return
        }
        deserializedArray.push(node.val.toString())
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return deserializedArray.join(",")
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let dataArr = data.split(",")
    function buildData(){
        let current = dataArr.shift()
        if(current==="null"){
            return null

        }
        else{
            const newNode = new TreeNode(parseInt(current))
            newNode.left = buildData()
            newNode.right = buildData()
            return newNode
        }
    }
    return buildData()

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */



// Approach 2 - start from bottom left and traversing right to left - https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/1478215/javascript-99-easy-solution-bonus-1-liner
