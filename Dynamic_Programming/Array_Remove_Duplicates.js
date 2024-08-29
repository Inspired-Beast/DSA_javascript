// The removeDuplicates function aims to remove duplicates from a sorted array of integers (nums) and returns the new length of the array.

// The function modifies the input array in-place such that each element appears only once and returns the new length.



// Constraints:

// The input array is sorted in ascending order.

// The array can be empty or contain any number of elements.

// Elements in the array are integers.

// The function should not allocate extra space; it must do this by modifying the input array in-place (this means you cannot use another data structure like a set).



// Parameters:

// nums: A sorted array of integers.



// Returns:

// The function returns the new length of the array after removing duplicates.

// If nums is empty, the function returns 0.



// Examples:

// Basic Example

// let nums = [1, 1, 2];
// let result = removeDuplicates(nums);
// // The function should return 2
// // The nums array should be modified to [1, 2]

// -----------------------------------------------------------------------------------------
// function that uses swap to push duplicate values to the end
function removeDuplicates(nums){
    let sortedTill = 0
    let checkObj = {}
    for(let i=0; i<nums.length; i++){
        if(!checkObj[nums[i]]){
            checkObj[nums[i]] = true
            let temp =  nums[sortedTill]
            nums[sortedTill] = nums[i]
            nums[i] = temp
            sortedTill++
        }
        
    }
    console.log(nums)
    return sortedTill
}

// ------------------------------------------------------------------------------------------------

// method to do the same without using object and with no regard of duplicate elements of the array

// NOTE this will work only if we have sorted array with duplicate items

function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    }
 
    let writePointer = 1;
 
    for (let readPointer = 1; readPointer < nums.length; readPointer++) {
        if (nums[readPointer] !== nums[readPointer - 1]) {
            nums[writePointer] = nums[readPointer];
            writePointer++;
        }
    }
 
    return writePointer;
}