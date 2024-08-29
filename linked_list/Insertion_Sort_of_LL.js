// Write  insertionSort() method that sorts a singly linked list in ascending order using the Insertion Sort algorithm. The method should take no input arguments.

// The insertionSort() method should sort the linked list in place by repeatedly inserting each unsorted node into its correct position in the sorted part of the list.  If the length of the linked list is less than 2, the method should simply return because the list is already sorted.  After the sort, the method should update the head and tail pointers of the linked list to point to the first and last nodes, respectively.

function insertionSort(){
    let sorted = this.head;
    let unsorted = this.head.next;
    sorted.next = null;

    while(unsorted){
        let current = unsorted
        unsorted = unsorted.next

        if(current.value<sorted.value){
            current.next = sorted
            sorted = current
        }
        else{
            let sortedPointer = sorted;
            while(sortedPointer.next && current.value>sortedPointer.next.value){
                sortedPointer = sortedPointer.next
            }
            current.next = sortedPointer.next
            sortedPointer.next = current
        }
    }
    this.head = sorted;
    let temp = sorted;
    while(temp.next){
        temp = temp.next
    }
    this.tail = temp
}

//------------------------------------------------------------------------------------------------------

// This code implements the insertion sort algorithm for a linked list.

// Here's how it works:

// if (length < 2) { return; }:

// The function immediately returns if the list has less than 2 nodes, as such a list is already sorted.

// Node sortedListHead = head;:

// Initializes sortedListHead as the head of the list. This variable marks the start of the sorted section of the list.

// Node unsortedListHead = head.next;:

// Initializes unsortedListHead to the node following the head. This marks the start of the unsorted section.

// sortedListHead.next = null;:

// Detaches the sorted list (currently only the head node) from the unsorted part.

// Outer Loop: while (unsortedListHead != null) { ... }:

// This loop runs as long as there are nodes in the unsorted section. It inserts nodes one-by-one into the sorted section.

// Inside Outer Loop:

// Node current = unsortedListHead;:

// Sets current to the first node in the unsorted section.

// unsortedListHead = unsortedListHead.next;:

// Moves the unsorted list head to the next node.

// if (current.value < sortedListHead.value) { ... }:

// Checks if current should be inserted before sortedListHead.

// current.next = sortedListHead; sortedListHead = current;:

// Inserts current at the beginning of the sorted section.

// Else Block:

// If current is not smaller than sortedListHead, this part searches for the correct position in the sorted section.

// Node searchPointer = sortedListHead;:

// Initializes searchPointer to sortedListHead for traversing the sorted section to find the correct position for current.

// while (searchPointer.next != null && current.value > searchPointer.next.value) { ... }:

// Searches the correct position for current in the sorted section.

// current.next = searchPointer.next; searchPointer.next = current;:

// Inserts current at the found position.

// head = sortedListHead;:

// Updates the head of the list to the head of the sorted section.

// Updating Tail:

// Updates the tail to be the last node in the sorted list.



// This insertionSort method uses the Insertion Sort algorithm to sort a linked list in place. It maintains a sorted section and an unsorted section of the list, inserting nodes from the unsorted section into their correct positions in the sorted section until the entire list is sorted.





// Code with inline comments:



// // This function sorts the linked list using the Insertion Sort algorithm.
// insertionSort() {
 
//     // Step 1: If the list has less than 2 nodes,
//     // it's already sorted. We return.
//     if (this.length < 2) {
//         return;
//     }
 
//     // Step 2: Initialize the head of the sorted part
//     // of the list to the first node.
//     let sortedListHead = this.head;
 
//     // Step 3: Initialize the head of the unsorted part
//     // to the second node.
//     let unsortedListHead = this.head.next;
 
//     // Step 4: Detach the sorted part from the unsorted part.
//     sortedListHead.next = null;
 
//     // Step 5: Loop through each node in the unsorted part.
//     while (unsortedListHead !== null) {
 
//         // Step 6: 'current' will be inserted into sorted part.
//         let current = unsortedListHead;
 
//         // Step 7: Update the head of the unsorted list.
//         unsortedListHead = unsortedListHead.next;
 
//         // Step 8: If 'current' is smaller than the head
//         // of the sorted list, insert 'current' before it.
//         if (current.value < sortedListHead.value) {
//             current.next = sortedListHead;
//             sortedListHead = current;
 
//         // Step 9: Otherwise, find the correct spot for 'current'.
//         } else {
//             let searchPointer = sortedListHead;
 
//             // Step 10: Traverse the sorted list to find the 
//             // insertion point for 'current'.
//             while (searchPointer.next !== null &&
//                    current.value > searchPointer.next.value) {
//                 searchPointer = searchPointer.next;
//             }
 
//             // Step 11: Insert 'current' into its correct position
//             // in the sorted list.
//             current.next = searchPointer.next;
//             searchPointer.next = current;
//         }
//     }
 
//     // Step 12: Update the head of the list to the head
//     // of the sorted list.
//     this.head = sortedListHead;
 
//     // Step 13: Update 'tail' to point to the last node
//     // in the sorted list.
//     let temp = this.head;
//     while (temp.next !== null) {
//         temp = temp.next;
//     }
//     this.tail = temp;
// }