// Bubble Sort of LL ( ** Interview Question)

// https://leetcode.com/problems/sort-list/

// Implement the bubble sort algorithm in a singly linked list.

// The linked list will contain integer elements.

// You need to write a method bubbleSort() within the LinkedList class. This method will sort the linked list in ascending order using the Bubble Sort algorithm.
// The Bubble Sort algorithm works by comparing each pair of adjacent elements in the list and swapping them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
// Here is a brief overview of the steps involved in implementing the bubble sort algorithm:

// Check if the length of the linked list is less than 2. If it is, the list is already sorted, so the method should return immediately.
// Initialize a Node object sortedUntil to null. This will act as a marker to the end of the sorted portion of the list.

// Set up a while loop that continues as long as sortedUntil does not equal the second node in the list (this.head.next).
// Within this loop, start from the head of the list and compare the value of the current node with the value of the next node.

// If the value of the current node is greater than the value of the next node, swap the values.
// Continue comparing and swapping until you reach the node before sortedUntil.

// At the end of each pass through the list, set sortedUntil to the last node that was examined. This marks the end of the sorted portion of the list and the start of the unsorted portion for the next pass.
// The algorithm continues until the list is fully sorted.

function bubbleSort(){
    let sortedUntil = null
    while(sortedUntil!==this.head){
        let current = this.head
        let nextNode = current.next
        while(nextNode && nextNode!==sortedUntil){
            if(current.value > nextNode.value){
                let temp = current.value;
                current.value = nextNode.value;
                nextNode.value = temp
            }
            current = nextNode;
            nextNode = nextNode.next
            
        }
        sortedUntil = current
    }
    
}

// --------------------------------------------------------------------------------------------
// Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

// Here's the detailed explanation of the code:


// let sortedUntil = null;:

// This line initializes a variable named sortedUntil and sets it to null. This variable serves as a marker to indicate how far the list is sorted.

// while (sortedUntil !== this.head.next) { ... }:

// This outer while loop runs as long as sortedUntil is not equal to the node right after the head. It ensures we keep sorting until the list is fully sorted.

// Inside the Outer Loop:

// let current = this.head;:

// current is initialized to the head of the list. This variable helps us traverse the list and represents the current node under inspection.

// Inner Loop:

// while (current.next !== sortedUntil) { ... }:

// This inner while loop runs from the head node up to the node right before sortedUntil. We focus on this part of the list in each iteration.

// Inside the Inner Loop:

// let nextNode = current.next;:

// nextNode is set to the node immediately after current.

// if (current.value > nextNode.value):

// This if statement checks if the current node's value is greater than nextNode. If so, they need to be swapped.

// Swapping Nodes:

// const temp = current.value; current.value = nextNode.value; nextNode.value = temp;:

// The values of current and nextNode are swapped using a temporary variable named temp.

// current = current.next;:

// current is moved to the next node in the list, preparing for the next iteration.

// sortedUntil = current;:

// After the inner loop finishes, sortedUntil is updated to current. This indicates that all nodes up to and including current are now sorted.



// The Bubble Sort algorithm works by repeatedly swapping adjacent elements if they are in the wrong order. The process continues until no more swaps are needed, which indicates that the list is sorted. This method in particular starts the sorting from the beginning of the list each time, bubbling the largest unsorted element to its correct place until the entire list is sorted.





// // Code with inline comments:



// // This method sorts the linked list using the Bubble Sort algorithm.
// function bubbleSort() {
 
//     // Step 1: Check if the linked list has less than 2 nodes.
//     // If it does, there's no need to sort.
//     if (this.length < 2) {
//         return;
//     }
    
//     // Step 2: Initialize a variable named 'sortedUntil'
//     // to null. This variable will act as a marker to
//     // indicate the portion of the list that is already sorted.
//     let sortedUntil = null;
 
//     // Step 3: Outer loop for Bubble Sort.
//     // It continues until sortedUntil is equal to the
//     // second node in the linked list.
//     while (sortedUntil !== this.head.next) {
 
//         // Step 4: Initialize a variable 'current' to the head node
//         // of the linked list. 'current' will be used to
//         // traverse through the list.
//         let current = this.head;
 
//         // Step 5: Inner loop for traversing the linked list
//         // from the head node up to the node just before
//         // 'sortedUntil'.
//         while (current.next !== sortedUntil) {
 
//             // Step 6: Define 'nextNode' as the node immediately
//             // after 'current'.
//             let nextNode = current.next;
 
//             // Step 7: Check if the value of 'current' node
//             // is greater than the value of 'nextNode'.
//             // If yes, they need to be swapped.
//             if (current.value > nextNode.value) {
                
//                 // Step 8: Swap the values of 'current' and 'nextNode'
//                 // by using a temporary variable named 'temp'.
//                 const temp = current.value;
//                 current.value = nextNode.value;
//                 nextNode.value = temp;
//             }
 
//             // Step 9: Move 'current' to the next node in the list
//             // to continue with the sorting process.
//             current = current.next;
//         }
 
//         // Step 10: Update 'sortedUntil' to point to 'current',
//         // indicating that all nodes from the head up to
//         // 'current' are now sorted.
//         sortedUntil = current;
//     }
// }