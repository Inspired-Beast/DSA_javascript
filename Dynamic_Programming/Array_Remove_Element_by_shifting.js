// The removeElement function takes an array of integers (nums) and an integer value (val).

// The function's purpose is to remove all instances of val in the array nums in-place and return the new length of the array.
// In simpler terms, the function modifies the given array by shifting all elements that are not equal to val to the start of the array, 
// and it returns the length of the array after the removal of val.

// https://leetcode.com/problems/remove-element/submissions/1741884132/

// Constraints:

// The array could have zero or more elements.

// Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.



// Parameters:

// nums: An array of integers, possibly containing duplicates.

// val: An integer value that needs to be removed from nums.



// Returns:

// The function returns an integer representing the new length of the array nums.



// Examples

// Basic Example

// let nums = [3, 2, 2, 3];
// let val = 3;
// let len = removeElement(nums, val);
// // The array nums should be modified to [2, 2]
// // The function should return 2

function removeElement(nums, val){
    let rem = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== val){
            nums[rem] = nums[i];
            rem++
        } 
    }
    return rem
}

// ---------------------------------------------------------------------------------

// Code Walkthrough: (check code below for walkthrough)



// Initialize i to 0:
// We initialize a variable called i and set it to 0. The role of i is to keep track of the index where the next element that is not equal to val should be placed in the nums array.

// let i = 0;

// Loop through nums array:
// A for loop is used to iterate over the elements of the nums array. The loop variable j runs from 0 up to nums.length - 1.

// for (let j = 0; j < nums.length; j++) {

// Check for Value Equality:
// Within the for loop, an if statement checks whether the current element, nums[j], is different from val.

// if (nums[j] !== val) {

// Move Element:
// If the condition in the if statement is true (meaning nums[j] is not equal to val), then we copy the value at index j to index i. This effectively "saves" the value and moves it toward the front of the array, ensuring it won't be removed.

// nums[i] = nums[j];

// Increment i:
// Once we've moved the element from the j-th index to the i-th index, we increment i by 1. This sets us up for the next iteration, preparing i to be the index for the next element that is not equal to val.

// i++;

// Return New Length:
// After the loop finishes running, all elements in the array that are equal to val have been effectively "moved out" by not updating their position. We return i as it now represents the new length of the array, which excludes all instances of val.

// return i;



// This function modifies the nums array in-place and gives you the new length, allowing you to effectively ignore the unwanted elements that have been shifted to the end of the array.





// Code with inline comments:



// Define the function removeElement that takes in two parameters:
// nums (an array), and val (a value to remove).
function removeElement(nums, val) {
 
    // Initialize variable 'i' to 0.
    // We'll use 'i' to keep track of where to place elements
    // that are not equal to 'val'.
    let i = 0;
 
    // Start a for-loop that goes from 0 to the length of the array - 1.
    // The loop counter is 'j'.
    for (let j = 0; j < nums.length; j++) {
 
        // Inside the loop, check if the current element at index 'j'
        // in the array is NOT equal to 'val'.
        if (nums[j] !== val) {
 
            // If it is NOT equal to 'val', place this element at index 'i'.
            // This effectively moves all elements not equal to 'val' to the
            // beginning of the array.
            nums[i] = nums[j];
 
            // Increment 'i' to prepare for the next unique (non-'val') element.
            i++;
        }
        // If nums[j] is equal to 'val', then do nothing and proceed to the
        // next iteration of the loop.
    }
 
    // At the end, return 'i', which is the new length of the array after
    // elements equal to 'val' have been removed.
    return i;
}

