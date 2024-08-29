// Selection Sort of LL ( ** Interview Question)
// Implement the Selection Sort algorithm on a singly linked list.

// The linked list will contain integer elements.

// You are required to write a method selectionSort() within the LinkedList class. This method will sort the linked list in ascending order using the Selection Sort algorithm.

function selectionSort(){
    let current = this.head;
    while(current){
        let nextNode = current.next;
        let min = current;
        while(nextNode){
            if(min.value>nextNode.value){
                min = nextNode
            }
            nextNode = nextNode.next
        }
        if(min.value!==current.value){
            let temp = current.value;
            current.value = min.value;
            min.value = temp
        };
        current = current.next
    }
}

// -------------------------------------------------------------------------------------------------------

// This code represents a method for sorting a linked list using the Selection Sort algorithm.

// Here's a detailed step-by-step explanation:



// if (this.length < 2) return;:

// The function returns immediately if the list has less than 2 nodes. A list with 0 or 1 elements is already sorted.

// let current = this.head;:

// Initializes the variable current to the head of the list. This variable is used to traverse the list from the start.

// while (current.next !== null) { ... }:

// This is the outer loop that continues as long as current is not the last node in the list. It is used for selecting the node to be sorted in each iteration.

// Inside the Outer Loop:

// let smallest = current;:

// Sets smallest to current. This variable will hold the node with the smallest value in the unsorted section of the list.

// let innerCurrent = current.next;:

// Initializes innerCurrent to the node right after current. This variable is used to find the smallest value in the remaining unsorted list.

// Inner Loop:

// while (innerCurrent !== null) { ... }:

// This inner loop iterates over the remaining unsorted part of the list to find the smallest node.

// Inside the Inner Loop:

// if (innerCurrent.value < smallest.value) { ... }:

// Compares the value of innerCurrent with smallest. If innerCurrent is smaller, it becomes the new smallest.

// innerCurrent = innerCurrent.next;:

// Moves innerCurrent to the next node, getting ready for the next iteration of the inner loop.

// Swapping Nodes:

// if (smallest !== current) { ... }:

// If the smallest node is different from current, they are swapped.

// const temp = current.value; current.value = smallest.value; smallest.value = temp;:

// Swaps the values of current and smallest using a temporary variable temp.

// current = current.next;:

// Moves current to the next node in the list, preparing for the next iteration of the outer loop.


// This sorting method works by dividing the list into a sorted and an unsorted part. The sorted part is at the beginning of the list and is initially empty. The unsorted part is the rest of the list. The algorithm repeatedly selects the smallest element from the unsorted part and moves it to the end of the sorted part. The process continues until the unsorted part becomes empty and the list is fully sorted.





// Code with inline comments:



// // This method sorts the linked list using the Selection Sort algorithm.
// selectionSort() {
 
//     // Step 1: If the list has fewer than 2 nodes,
//     // it's already sorted, so we return.
//     if (this.length < 2)
//         return;
 
//     // Step 2: Initialize 'current' to head node of
//     // linked list to start the sorting.
//     let current = this.head;
 
//     // Step 3: Outer loop for traversing the linked list.
//     // This loop goes through each node to find the smallest
//     // value among unsorted nodes.
//     while (current.next !== null) {
 
//         // Step 4: 'smallest' initially points to 'current'
//         // as we start looking for smallest value in each pass.
//         let smallest = current;
 
//         // Step 5: 'innerCurrent' starts at the node right
//         // after 'current'. We compare each node with 'smallest'.
//         let innerCurrent = current.next;
 
//         // Step 6: Inner loop to find smallest node among unsorted
//         // nodes starting from 'innerCurrent'.
//         while (innerCurrent !== null) {
 
//             // Step 7: If value of 'innerCurrent' is less than
//             // 'smallest', then update 'smallest'.
//             if (innerCurrent.value < smallest.value) {
//                 smallest = innerCurrent;
//             }
 
//             // Step 8: Move 'innerCurrent' to next node to continue
//             // search for smallest value.
//             innerCurrent = innerCurrent.next;
//         }
 
//         // Step 9: If smallest value is different from 'current' value,
//         // then swap their values.
//         if (smallest !== current) {
//             const temp = current.value;
//             current.value = smallest.value;
//             smallest.value = temp;
//         }
 
//         // Step 10: Move 'current' to the next node to continue
//         // with the sorting process.
//         current = current.next;
//     }
 
// }

