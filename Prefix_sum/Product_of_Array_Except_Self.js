// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// https://leetcode.com/problems/product-of-array-except-self/description/

// solution - https://youtu.be/8gerngR808w

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let preFixProd = []
    preFixProd[0] = 1
    let postFixProd = []
    postFixProd[nums.length-1] = 1
    let finalArr = []

    for(let i=1; i<nums.length; i++){ // getting values from index 1 onwards not taking index 0
        preFixProd[i] = preFixProd[i-1] * nums[i-1]
    }

    for(let j=nums.length-2; j>=0; j--){ // getting values from length-2 onwards c video for clarification
        postFixProd[j] = postFixProd[j+1] * nums[j+1]
    }

    for(let k=0; k<nums.length; k++){
        finalArr[k] = preFixProd[k] * postFixProd[k]
    }
    return finalArr
};