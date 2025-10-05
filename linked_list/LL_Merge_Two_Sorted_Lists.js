// LL: Merge Two Sorted Lists ( ** Interview Question)
// Description

// The merge method takes in another LinkedList as an input and merges it with the current LinkedList.

// The elements in both lists are assumed to be in ascending order, but the input lists themselves do not need to be sorted.

// link = https://leetcode.com/problems/merge-two-sorted-lists/description/

// Parameters

// otherList: the other LinkedList to merge with the current list



// Return Value

// This method does not return a value, but it modifies the current LinkedList to contain the merged list.



// Example:



// // Create the first linked list with elements 1 -> 3 -> 5 -> 7
// const l1 = new LinkedList(1);
// l1.push(3);
// l1.push(5);
// l1.push(7);
 
// // Create the second linked list with elements 2 -> 4 -> 6 -> 8
// const l2 = new LinkedList(2);
// l2.push(4);
// l2.push(6);
// l2.push(8);
 
// // Merge the second list into the first one
// l1.merge(l2);
 
// // Now, l1 should contain the merged list 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8

function merge(otherList){
    let left  = this.head;
    let right = otherList.head;
    
    let sortedListNode = new Node(0);
    let sortedList = sortedListNode 
    
    while(left && right){
        if(left.value<=right.value){
                sortedList.next = left;
                left = left.next
        }
        else if(left.value>right.value){
                sortedList.next = right;
                right = right.next
        }   
        sortedList = sortedList.next
    }
    
    if(left){
        sortedList.next = left;
    }
    if(right){
        sortedList.next = right
    }
    
    this.head = sortedListNode.next
}

// ---------------------------------------------------------------------------------------------------------

// This code defines a method merge for a LinkedList class that takes another LinkedList object as an argument and merges it with the current list.

// The method first retrieves the head node of the other list by calling the head from the otherList object. It then creates a new node dummy with a value of 0 to serve as the starting node of the merged list.

// The method then enters a while loop that continues as long as both the current list and the other list have nodes remaining. Inside the loop, it compares the values of the head nodes of the two lists, and adds the node with the smaller value to the merged list by setting the next pointer of the current node to point to that node and updating the head pointer of the corresponding list to the next node. It then moves the current pointer to the next node in the merged list.

// After the while loop terminates, it checks whether there are any remaining nodes in either list and adds them to the merged list. It then sets the head pointer of the current list to the first node in the merged list, updates the length of the list to include the nodes from the other list, and updates the tail pointer of the list to the last node in the other list, if the current list is empty, or to the last node in the current list, otherwise.



// Here it is step-by-step:

// let otherHead = otherList.head;:

// Stores the head of the otherList in the variable otherHead.

// let dummy = { value: 0, next: null };:

// Creates a "dummy" node that will be used as a placeholder to help with merging.

// let current = dummy;:

// Initializes current to the dummy node. This will move ahead as we build the merged list.

// Outer Loop: while (this.head !== null && otherHead !== null) { ... }:

// This loop runs while both lists have nodes left to merge.

// Inside Loop:

// if (this.head.value < otherHead.value) { ... }:

// Compares values from the two lists to decide which node to add next to the merged list.

// current.next = this.head; and this.head = this.head.next;:

// If the node from this.head is smaller, it gets added to the merged list, and this.head moves to the next node.

// current.next = otherHead; and otherHead = otherHead.next;:

// Otherwise, the node from otherHead gets added, and otherHead moves to the next node.

// current = current.next;:

// current moves to the newly added node, preparing for the next iteration.

// if (this.head !== null) { ... } else { ... }:

// After the loop, one list might still have nodes. This block attaches the remaining nodes to the merged list.

// current.next = this.head; or current.next = otherHead;:

// Attaches the remaining nodes from either list to the merged list.

// this.tail = otherList.tail;:

// Updates the tail of the merged list if otherList had remaining nodes.

// this.head = dummy.next;:

// Updates this.head to the actual start of the merged list, bypassing the dummy node.

// this.length += otherList.length;:

// Updates the length of the merged list by adding the lengths of the two merged lists.

// This merge method takes another linked list, otherList, and merges it with the current list (this). It assumes both lists are sorted and produces a new sorted list combining the nodes from both lists.





// Code with inline comments:



// // This function merges another list into the current list.
// // The lists are assumed to be sorted.
// merge(otherList) {
 
//     // Step 1: Initialize 'otherHead' to the head of the other list.
//     let otherHead = otherList.head;
 
//     // Step 2: Create a dummy node to serve as a placeholder for 
//     // the head of the merged list.
//     let dummy = { value: 0, next: null };
 
//     // Step 3: Initialize 'current' to point to the dummy node.
//     let current = dummy;
 
//     // Step 4: Loop through nodes in both lists as long as 
//     // neither list is empty.
//     while (this.head !== null && otherHead !== null) {
 
//         // Step 5: Compare the value of the head nodes of both lists.
//         // Append the smaller node to 'current'.
//         if (this.head.value < otherHead.value) {
//             current.next = this.head;
//             this.head = this.head.next;
//         } else {
//             current.next = otherHead;
//             otherHead = otherHead.next;
//         }
 
//         // Step 6: Move 'current' to its next node.
//         current = current.next;
//     }
 
//     // Step 7: If nodes remain in one of the lists, 
//     // append those nodes to 'current'.
//     if (this.head !== null) {
//         current.next = this.head;
//     } else {
//         current.next = otherHead;
//         this.tail = otherList.tail;
//     }
 
//     // Step 8: Update the head of the list to be the node
//     // following the dummy node.
//     this.head = dummy.next;
 
//     // Step 9: Update the length of the list to include
//     // nodes from both lists.
//     this.length += otherList.length;
// }