// Stack: Sort Stack ( ** Interview Question)
// Implement a function called sortStack() that takes a stack of integers as input and sorts the stack in ascending order (with the smallest element on top) using an additional temporary stack.

// Input:
// A Stack object stack containing integer values.

// Output:
// The function should modify the original input stack, sorting its elements in ascending order.

// Constraints:
// You must use the provided Stack class to store and manipulate the elements.
// You cannot use any other data structures or built-in sorting methods for this task.

// Example 1:

// Suppose you have a Stack object, stack, with the following values:
// [5, 3, 1, 4, 2]
// After calling the sortStack() function:
// sortStack(stack);

// The stack should now have the following values:
// [5, 4, 3, 2, 1] // here 1 is the top element of stack hence this is ascending order

// solution

// The sortStack function is designed to sort the elements of a stack (stack) in ascending order. The sorting is achieved using an additional stack, named additionalStack, as a temporary storage. Here's an explanation of how the code works:
// Initialization of Additional Stack:
// const additionalStack = new Stack();

// An additional stack, additionalStack, is created. This stack is used to temporarily hold elements from the original stack (stack) during the sorting process.
// Sorting Process:
// while (!stack.isEmpty()) { ... }
// The outer while loop runs as long as the original stack (stack) is not empty. It processes each element in the original stack for sorting.
// Pop Element from Original Stack:

// const temp = stack.pop();
// The top element of the original stack is popped and stored in a temporary variable temp. This is the element that needs to be placed in the correct position in the sorted order.
// Positioning the Element in the Additional Stack:

// while (!additionalStack.isEmpty() && additionalStack.peek() > temp) { ... }
// The inner while loop checks if the additional stack is not empty and its top element is greater than temp. If so, it means temp should be placed below the top element of additionalStack to maintain sorting order.
// stack.push(additionalStack.pop());

// This line moves elements from additionalStack back to the original stack (stack) until the correct position for temp is found in additionalStack. This process continues until a smaller element than temp is found or additionalStack is empty.
// Place the Temp Element in Additional Stack:
// additionalStack.push(temp);

// After finding the right position, temp is pushed onto additionalStack. This ensures that additionalStack maintains a sorted order with the smallest elements at the top.
// Refill the Original Stack with Sorted Elements:
// while (!additionalStack.isEmpty()) { ... }
// The final while loop runs until additionalStack is empty. In this step, elements are popped from additionalStack and pushed back into the original stack (stack).
// stack.push(additionalStack.pop());
// This transfers all elements back to stack, now in ascending order.
// The overall process effectively sorts the original stack by repeatedly taking the top element, finding its correct position in the sorted order using the additional stack, and then transferring the sorted elements back to the original stack.


// Code with inline comments:


function sortStack(stack) {
    // Initialize an additional stack to help in sorting. This stack
    // will store elements in sorted order.
    const additionalStack = new Stack();
 
    // Continue the process until the original stack is empty.
    // This loop sorts the stack one element at a time.
    while (!stack.isEmpty()) {
        // Pop the top element from the original stack. This element
        // is the one we're currently trying to place in the correct
        // position in the sorted stack.
        const temp = stack.pop();
 
        // If the additional stack is not empty and its top element is
        // greater than the element we just popped (temp), we need to
        // move the top element of additionalStack back to the original
        // stack. This loop continues until we find the correct position
        // for temp in the additional stack.
        while (!additionalStack.isEmpty() && additionalStack.peek() > temp) {
            // Pop from additionalStack and push onto the original stack.
            // This step effectively reverses the order of elements that
            // are larger than temp, ensuring they can be sorted later.
            stack.push(additionalStack.pop());
        }
 
        // Push the temp value into the additionalStack. Now, temp is in
        // the correct position relative to the already sorted elements
        // in additionalStack.
        additionalStack.push(temp);
    }
 
    // At this point, all elements from the original stack have been
    // moved to additionalStack in sorted order. We now need to move
    // them back to the original stack to maintain the stack order
    // (LIFO - Last In First Out).
    while (!additionalStack.isEmpty()) {
        // Pop from additionalStack and push onto the original stack.
        // This reverses the sorted order back to the original stack,
        // maintaining the sorted sequence.
        stack.push(additionalStack.pop());
    }
}


