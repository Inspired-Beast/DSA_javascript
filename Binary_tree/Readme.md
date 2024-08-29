Tree - A tree is a data structure that simulates a hierarchical tree, with a root value and the children as the subtrees, represented by a set of linked nodes. The children of each node could be accessed by traversing the tree until the specified value is reached.

https://www.thedshandbook.com/trees/

Types of a tree :

General trees
Binary trees
Binary Search trees
M-way trees
AVL trees

Binary tree - is a a tree data structure in which each node has at most two children, referred to as the left child and the right child

https://www.baeldung.com/cs/full-vs-complete-vs-perfect-tree

<!-- Node that doesn't have children are called leaf nodes -->

Even in binary tree we have a type of tree known as Binary Search Tree (BST) in which the left and right nodes are assigned based on if they are greater than or less then parent nodes.

If they are greater than parent node then they go on right and if less then they go to left and similarly if have a new node to be inserted it will first check with parent node and then onwards the subsequent nodes

so all nodes on the left of root nodes are less then the root node and all nodes on right are greater then root node.

Binary Search tree BST Big O 
- search = O log n ( we conclude on this as it is the most one can see , but it can be O(n) also)
- insert = O log n( same as above)
- remove = O log n( same as above) 
reason being it uses divide and conquer in all the cases as we have elements compared as assigned making it easier

Binary Search tree traversal

Tree Traversal refers to the process of visiting or accessing each node of the tree exactly once in a certain order. 

tree traversal are of two types 

1. Breadth First Search traversal (level order traversal or BFS): Here we access node breadth by breadth , meaning first we will access nodes from the top level then one level below( meaning left child and then right child) and then post that.

2. Depth First Search traversal (DFS): Traversing level by level from end of the tree.
Types of DFS - 
a. Inorder Traversal: Inorder traversal visits the node in the order: Left -> Root -> Right
b. Preorder Traversal: Preorder traversal visits the node in the order: Root -> Left -> Right
c. Postorder Traversal: Postorder traversal visits the node in the order: Left -> Right -> Root