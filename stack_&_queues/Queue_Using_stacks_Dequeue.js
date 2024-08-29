// Implement a method called dequeue() for a MyQueue class that removes and returns the element from the front of the queue. The MyQueue class should use two Stack objects to store and manipulate the elements.

// The function should remove the front element from the queue and return its value. If the queue is empty, the function should return null.



// Constraints:

// The MyQueue class should be implemented using two Stack objects provided in the Stack class.

// You cannot use any other data structures or built-in queue manipulation methods for this task.



// Class Definition:

// class MyQueue {
//     constructor() {
//         this.stack1 = new Stack();
//         this.stack2 = new Stack();
//     }
 
//     // ... other methods ...
 
//     dequeue() {
//         // Your implementation goes here
//     }
// }




// Example 1:

// Suppose you have a MyQueue object, queue, with the following values:
// [1, 2, 3, 4]

// After calling the dequeue() function:

// let dequeuedValue = queue.dequeue();

// The queue should now have the following values:
// [2, 3, 4], and the dequeuedValue should be 1.

// Here's a step-by-step explanation of the logic:

// Check if stack1 is empty.

// If it is empty, the queue is empty, so return null as there are no elements to dequeue.

// If stack1 is not empty, pop the top element from stack1.

// Since the front of the queue is always at the bottom of stack1, popping the top element from stack1 dequeues the front element of the queue.

// By maintaining the order of elements in the queue with the front element at the bottom of stack1, the dequeue() method can efficiently remove the front element by simply popping from stack1.



// Code with inline comments:


function dequeue() {
    // If the queue is empty, return null
    if (this.isEmpty()) {
        return null;
    } else {
        // Otherwise, remove and return the front element
        // from the queue by popping from stack1
        return this.stack1.pop();
    }
}