// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

// link - https://leetcode.com/problems/missing-number/description

/**
 * @param {number[]} nums
 * @return {number}
 */

 //using hash set
 var missingNumber = function(nums){
    let setNums = new Set(nums)
    for(let i=0; i<nums.length; i++){
        if(!setNums.has(i)){
            return i
        }
    }
    return nums.length
 }

 // using arithematic progression for natural numbers
var missingNumber = function(nums) {
    let sum = nums.length*(nums.length+1)/2 // calculating sum for n number of natural numbers
    let total = 0
    for(let i of nums){
        total+=i
    }
    return sum-total
};