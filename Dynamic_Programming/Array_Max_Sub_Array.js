// The function maxSubarray takes an array of integers (nums) and returns the sum of the contiguous subarray (containing at least one number) which has the largest sum.


// Constraints:

// The input array may be empty or contain any number of elements.

// The elements in the array are integers.



// Parameters:

// nums: An array of integers.



// Returns:

// An integer representing the sum of the contiguous subarray with the largest sum.



// Examples:

// Basic Example

// const result = maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// // The function should return 6 because [4, -1, 2, 1] has the largest sum
// Single-Element Array

// const result = maxSubarray([1]);
// // The function should return 1 because the single element is the largest sum
// All Negative Numbers

// const result = maxSubarray([-1, -2, -3]);
// // The function should return -1 because it is the largest sum in the array
// Empty Array

// const result = maxSubarray([]);
// // The function should return 0 because the array is empty


function maxSubarray(nums){
    if (nums.length === 0) {
        return 0;
    }
    let maxSum = nums[0];
    let currentSum = nums[0];
    for(let i=1; i<nums.length; i++){
        currentSum = currentSum+ nums[i]
        if(currentSum> nums[i]){
            
        }
        if( nums[i]>= currentSum){
            currentSum = nums[i]
        }
        
        if(currentSum>=maxSum){
            maxSum= currentSum
        }
    }
    return maxSum
}


// Solution 2 using Math functions
function maxSubarray(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let maxSum = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
