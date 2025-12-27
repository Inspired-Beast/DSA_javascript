// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.


// Example 1:
// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

// Example 2:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 3:
// Input: nums = [1,2,3]
// Output: 3

// https://leetcode.com/problems/house-robber-ii/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length<2){
        return nums[0]
    }
    let arr1 = nums.slice(0, nums.length-1)
    let arr2 = nums.slice(1, nums.length)
    return Math.max(robIt(arr1), robIt(arr2))
};

var robIt = function(arr){
    let dp = new Array(arr.length).fill(0)
    dp[0] = arr[0]
    dp[1] = Math.max(dp[0], arr[1])
    for(let i=2; i<arr.length; i++){
        dp[i] = Math.max(arr[i]+dp[i-2], dp[i-1])
    }
    return Math.max(dp[arr.length-1])
}