// In this exercise, you are tasked with writing a JavaScript function called twoSum.

// The function should accept an array of integers (nums) and an integer (target). Your task is to find two numbers in the array that sum up to the target integer. The function should return an array containing the indices of these two numbers. If no such numbers exist, return an empty array.



// Examples:

// twoSum([2, 7, 11, 15], 9) should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.

// twoSum([3, 2, 4], 6) should return [1, 2] because nums[1] + nums[2] = 2 + 4 = 6.


// Solution Brute force (O(n^2)) - not optimal

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; i++) {
        if (nums[i] + nums[j] === target) {
          return [i,j];
          }
        }
      }
    }

// use hash table(i.e. either map or object)

// Map approach
function twoSum(nums, target) {
    
    // Create a new Map called 'numMap'.
    // This Map will hold numbers and their positions.
    const numMap = new Map();
    
    // Loop through each number in 'nums' array.
    for (let i = 0; i < nums.length; i++) {
        
        // Get the current number from 'nums'.
        const num = nums[i];
        
        // Calculate the complement. We're looking
        // for this number in our 'numMap'.
        const complement = target - num;
        
        // Check if the complement exists in 'numMap'.
        if (numMap.has(complement)) {
            
            // If it exists, return the positions
            // of both numbers.
            return [numMap.get(complement), i];
        }
        
        // Save the number and its position
        // in the 'numMap'.
        numMap.set(num, i);
    }
    
    // If no such numbers exist, return an empty array.
    return [];
}

//object approach
function twoSum(arr, target){
    let tempObj = {}
    for(let i=0; i< arr.length; i++){
        if(tempObj[target-arr[i]]!== undefined){
            return [tempObj[target-arr[i]], i]
        }
        tempObj[arr[i]] = i
    }
    return []
}

