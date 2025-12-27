// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// https://leetcode.com/problems/contains-duplicate/description/?envType=problem-list-v2&envId=oizxjoit

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numSet = new Set()
    for(let num of nums){
        if(numSet.has(num)){
            return true
        }
        numSet.add(num)
    }
    return false
};