// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.


// Example 1:

// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true

// Example 2:

// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false

// link - https://leetcode.com/problems/subtree-of-another-tree/description

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(!subRoot){
        // incase subRoot is empty then its true
        return true
    }
    if(!root){ // incase we reach end of root and have found not match then we will return false
        return false;
    }
    if(isSame(root, subRoot)){ // checking every root level till we match one with subRoot
    // incase we find a level matching then  we will return out
        return true
    }
    // traversing isSubtree till we have root and subRoot matching
    // using || so that if we have even one true value returned then it gives us positve result
    return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot))
};

function isSame(parent, child){
    if(!parent && !child){ // incase we have parent and child as null then true
        return true
    }

    if((!parent && child) || (!child && parent)){
        // if either parent is null when child is not then false or vice versa, as we have reached end of either parent or child
        return false
    }

    if(parent.val !== child.val){
        // return false if even one value doesn't match
        return  false
    }
    // recursing each node starting from left and right and only returing true incase  both root , left and right value matches
    return (isSame(parent.left, child.left) && isSame(parent.right, child.right))
}