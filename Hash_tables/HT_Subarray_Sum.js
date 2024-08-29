// In this exercise, you are tasked with writing a JavaScript function named subarraySum.

// This function should take in an array of integers (nums) and another integer (target).

// Your goal is to find a contiguous subarray whose elements sum up to the given target integer. The function should return an array containing the starting and ending indices of the subarray. If no such subarray exists, return an empty array.



// Examples:

// subarraySum([1, 4, 20, 3, 10, 5], 33) should return [2, 4] because the subarray from index 2 to index 4 sums to 33.

// subarraySum([1, 2, 3], 3) should return [0, 1] because the subarray from index 0 to index 1 sums to 3.


// Solution Brute force (O(n^2)) - not optimal
function subarraySumBrute(nums, target){
    for(let i=0; i<nums.length; i++){
        if(nums[i]===target){
            return [i, i]
        }
        let temp = nums[i]
        for(let j=i+1;j<nums.length; j++){
            temp = temp + nums [j]
            if(temp===target){
                console.log(temp)
                return [i, j]
            }
        }
    }
    return []
}

// O(n) solution using Hash tables/ objects/map
function subarraySum(nums, target) {
    const sumIndex = {};
    sumIndex[0] = -1;
    let currentSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        
        if (sumIndex.hasOwnProperty(currentSum - target)) {
            console.log(sumIndex)
            return [sumIndex[currentSum - target] + 1, i];
        }
        
        sumIndex[currentSum] = i;
    }
    
    return [];
}


