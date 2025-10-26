
// Given a binary tree root and a linked list with head as the first node. 

// Return True if all the elements in the linked list starting from the head correspond to some downward path connected in the binary tree otherwise return False.

// In this context downward path means a path that starts at some node and goes downwards.

 

// Example 1:

// Input: head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
// Output: true
// Explanation: Nodes in blue form a subpath in the binary Tree.

// https://leetcode.com/problems/linked-list-in-binary-tree/

var isSubPath = function(head, root) {
    let temp = root;
    while (temp) {
      if (temp.val === head.val) {
        const res = newDFS(temp, head);
        if (res) return true; // return boolean, not value/object [web:1]
      }
      // your traversal only went down one chain; preserve style but still advance [web:5]
      if (temp.left) {
        // try left subtree as new starting region
        if (isSubPath(head, temp.left)) return true; // minimal recursion add [web:1]
        temp = temp.right; // after checking left subtree, move to right chain if any [web:5]
      } else if (temp.right) {
        if (isSubPath(head, temp.right)) return true; // minimal recursion add [web:1]
        temp = null; // exhaust
      } else {
        return false;
      }
    }
  
    function newDFS(node, list) {
      if (!list) return true; // matched full list [web:1]
      if (!node) return false; // ran out of tree [web:1]
      if (node.val !== list.val) return false; // mismatch [web:1]
      // continue down either side with next list node; ensure returns bubble up [web:1]
      return newDFS(node.left, list.next) || newDFS(node.right, list.next); // core fix [web:2]
    }
    return false;
  };
  