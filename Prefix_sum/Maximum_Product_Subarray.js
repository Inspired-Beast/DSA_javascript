// Given an integer array nums, find a 
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// link - https://leetcode.com/problems/maximum-product-subarray/description/

// solution = https://www.youtube.com/watch?v=hnswaLJvr6g

/**
 * @param {number[]} nums
 * @return {number}
 */
//Best intuitve approach using prefix and suffix sum
var maxProduct = function(nums) {
    let max = -Infinity
    let prefix = 1
    let suffix = 1
    for(let i=0; i<nums.length; i++){
        if(prefix===0){
            prefix = 1
        }
        if(suffix===0){
            suffix = 1
        }
        prefix = prefix * nums[i]
        suffix = suffix * nums[nums.length-i-1]
        max = Math.max(max, suffix, prefix)
    }
    return max
} 

 // Brute force
// var maxProduct = function(nums) {
//     let i  =0
//     max = -Infinity
//     while(i!==nums.length){
//         let j = i+1
//         let temp = nums[i]
//         max = Math.max(max, temp) // checking for single elements
//         while(j!==nums.length){
//             temp  = temp * nums[j]
//             max = Math.max(temp, max)
//             j++
//         }
//         i++
//     }
//     return max
// };