In computer science, a heap is a tree-based data structure that satisfies the heap property: 
In a max heap, for any given node C, if P is a parent node of C, then the key (the value) of P is greater than or equal to the key of C. 
In a min heap, the key of P is less than or equal to the key of C. The node at the "top" of the heap (with no parents) is called the root node.

There is no order of nodes in a row for heaps and it can also have multiple nodes with same values. the only thing that we need to keep in mind is the heap property that if we have max heap then parent node should be greater than child node and the order of child node being on left or right doesn't matter as long it is greater than the nodes below.

this beahviour is due to implementation of heap using arrays and unlike binary trees we are not going to use Node class.

Now once heap is implemented using array then you can find the index of child nodes using some mathematical equations.

1. If you want to find child node's index in array using parent node's index:

left child index = 2 * (parent index) +1 // if we put    
                             //first node at index 0
right child index = 2 * (parent index) + 2

2. If you want to find parent node's index in array using child node's index:

Divide left and right node's index by 2 and round or floor it to the lowest whole number for both divisions done and both values will denote the parent's index.

NOTE - you can start the parent at index 0 of array or index 1 of the array.

Now how inserting works in heap:

First if you want to add anu element to a heap then make sure that the heap is always complete 

then we will push the value to end of the heap as it is basically a mapped array and then one by one we will compare the value of inserted item with it's parent to make sure it is follwoing the heap's law or rule and if it is not then we will swap out parent and the child values and will keep doing so until it is satisfied  and then we will print out the heap array.

Once we have inserting done we will finally be able to print the heap in form of array.

Removal of top node - 

if we want to remove the top level element then we have to shift either the left child or the right child to it's place but that will further leave the nodes below without a parent

hence we will make use of below methodologies

1. pop the top level element and replace that element with the last element in the heap/ array. Post this use sink down method to move the nodes to their right places.
2. the sink down will compare the node in focus with its left and right child and will swap accordingly
meaning lets say we have node with value 65 we want to sink down then we will compare with left and right
3. so if left is 72 and the right is 85 then we will swap out the parent with 85 node as we want node that is greater than 72 and 65 as parent, so will swap accordingly.
4. we will continue to do so until we make sure the value at focus reaches the end or the correct position in the heap.

