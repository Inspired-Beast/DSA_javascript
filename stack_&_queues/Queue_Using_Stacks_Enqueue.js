// Implement a method called enqueue() for a MyQueue class that adds a new element to the end of the queue. The MyQueue class should use two Stack objects to store and manipulate the elements.

// The method should add the given value to the end of the queue.



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
 
//     enqueue(value) {
//         // Your implementation goes here
//     }
// }




// Example 1:

// Suppose you have a MyQueue object, queue, with the following values:
// [3, 2, 1]

// After calling the enqueue() function:

// queue.enqueue(4);

// The queue should now have the following values:
// [4, 3, 2, 1]





// Example 2:

// Now suppose you have a MyQueue object, queue, with the following values:
// ['apple', 'banana', 'orange']

// After calling the enqueue() function:

// queue.enqueue('grape');

// The queue should now have the following values:
// ['grape', 'apple', 'banana', 'orange']


// Code with inline comments:



function enqueue(value) {
    // Transfer all elements from stack1 to stack2
    while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
    }
 
    // Push the new value onto stack1
    this.stack1.push(value);
 
    // Transfer all elements back from stack2 to stack1
    while (!this.stack2.isEmpty()) {
        this.stack1.push(this.stack2.pop());
    }
}