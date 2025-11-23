// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Example 2:
// Input: target = 4, nums = [1,4,4]
// Output: 1

// Example 3:
// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

// https://leetcode.com/problems/minimum-size-subarray-sum/description

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0
    let sum = 0
    let minLen = Infinity

    for(let right=0; right<nums.length; right++){
        // iterating one by one in nums to get sum possible
        sum += nums[right]
        // Looping if the sum if more than target so that we get minimum array length
        // for instance if some elements of array sum up to be more than target but the
        // same target can be received if less elements are involved so we will shift left pointer 
        // till we get the array with least elements that meet the target
        while(sum>=target){
            minLen = Math.min(minLen, right-left+1)
            // removing elements once we are sliding left pointer to a bit right
            sum -= nums[left]
            // incrementing or sliding left pointer
            left++
        }
    }
    
    return minLen===Infinity? 0: minLen
};


// Brute Force Approach
// var minSubArrayLen = function(target, nums) {
//     let minLen = Infinity
//     for(let i= 0; i<nums.length; i++){
//         let temp = 0
//         for(let j=i; j<nums.length; j++){
//             temp += nums[j]
//             if(temp>=target){
//                 minLen = Math.min(minLen, j-i+1)
//             }
//         }
//     }
//     return minLen===Infinity? 0: minLen
// };
