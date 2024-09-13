// PREFIX SUM PROBLEM

// Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.

// A good subarray is a subarray where:

// its length is at least two, and
// the sum of the elements of the subarray is a multiple of k.
// Note that:

// A subarray is a contiguous part of the array.
// An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.
 

// Example 1:

// Input: nums = [23,2,4,6,7], k = 6
// Output: true
// Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
// Example 2:

// Input: nums = [23,2,6,4,7], k = 6
// Output: true
// Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
// 42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
// Example 3:

// Input: nums = [23,2,6,4,7], k = 13
// Output: false

// link - https://leetcode.com/problems/continuous-subarray-sum/description/

// Approach
// Initialize a map: Use a dictionary to store the remainder of the cumulative sum divided by ( k ) and its corresponding index. Initialize this map with a remainder of 0 at index -1 to handle cases where the subarray starts from index 0.
// Iterate through the array: Calculate the cumulative sum as you iterate through the array.
// Calculate remainder: Compute the remainder of the cumulative sum divided by ( k ).
// Check the map:
// If the remainder is already in the map and the length of the subarray (current index - stored index) is at least 2, return true.
// If the remainder is not in the map, store the current index for this remainder.
// Return false: If no such subarray is found by the end of the iteration, return false.

//SOlution using Map
var checkSubarraySum = function(nums, k) {
    let subMap = new Map()
    let sum = 0
    subMap.set(0,-1) // so that incase of whole array being sum divisible by k we can easily subtract it.

    for(let i=0; i<nums.length; i++){
        sum += nums[i]
        let temp = sum%k // getting remainder of each elements cummulative sum
        if(subMap.has(temp)){
            if(i-subMap.get(temp)>=2){
                return true
            }
        }else{
            subMap.set(temp, (subMap.get(temp) || i))
        }
        
    }
    return false
};

// Solution using Objects.
var checkSubarraySum = function(nums, k) {
    let sub = {}
    sub[0] = -1
    let sum =0
    for(let i=0; i<nums.length; i++){
        sum += nums[i]
        let temp = sum %k
        if(temp in sub){
            if(i -sub[temp]>=2){
                return true
            }
        }
        else{
            sub[temp] = i
        }
        
    }
    return false
}

//Brute Force
var checkSubarraySum = function(nums, k) {
    for(let i=0 ; i<nums.length; i++){
        sum = nums[i]
        for(let j=i+1; j<nums.length; j++){
            sum += nums[j]
            if(sum%k===0 && i!==j){
                return true
            }
        }
    }
    return false
};