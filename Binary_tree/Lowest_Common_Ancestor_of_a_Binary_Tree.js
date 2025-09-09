// Lowest Common Ancestor of a Binary Tree

// LINK - https://takeuforward.org/binary-search-tree/lca-in-binary-search-tree/

// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/

// Example 1:


// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.// 

// TreeNode structure

// SOLUTION - 

class TreeNode {
    constructor(x) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    // Function to find the lowest common
    // ancestor of two nodes in a binary tree
    lowestCommonAncestor(root, p, q) {
        // Base case: if the root is null or one
        // of the nodes is found, return the current root
        if (root === null || root === p || root === q) {
            return root;
        }

        // Recursively find the lowest
        // common ancestor in the left subtree
        const left = this.lowestCommonAncestor(root.left, p, q);

        // Recursively find the lowest
        // common ancestor in the right subtree
        const right = this.lowestCommonAncestor(root.right, p, q);

        // If the left subtree doesn't contain the
        // common ancestor, return the right subtree result
        if (left === null) {
            return right;
        }
        // If the right subtree doesn't contain the
        // common ancestor, return the left subtree result
        else if (right === null) {
            return left;
        }
        // If both subtrees contain the nodes, the
        // current root is the lowest common ancestor
        else {
            return root;
        }
    }
}

// Main function
function main() {
    const root = new TreeNode(3);
    root.left = new TreeNode(5);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(6);
    root.left.right = new TreeNode(2);
    root.right.left = new TreeNode(0);
    root.right.right = new TreeNode(8);
    root.left.right.left = new TreeNode(7);
    root.left.right.right = new TreeNode(4);

    const sol = new Solution();

    // Nodes for which we want to find
    // the lowest common ancestor
    // Node with value 5
    const p = root.left.right;
    // Node with value 1
    const q = root.left.right.right;

    const lca = sol.lowestCommonAncestor(root, p, q);

    console.log("Lowest Common Ancestor of nodes with values " + p.val + " and " + q.val +
        " is node with value " + lca.val);
}

// Calling the main function
main();