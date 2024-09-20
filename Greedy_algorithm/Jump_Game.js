// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// link - https://leetcode.com/problems/jump-game/description/

// solution - https://www.youtube.com/watch?v=tZAa_jJ3SwQ

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxIndex = 0
    for(let i=0; i<nums.length; i++){
        if(i>maxIndex){ // incase the maxJump is still shorter than index we false out
            return false
        }
        if(maxIndex>=nums.length-1){ // reaching end of array by max jump
            return true
        }
        maxIndex = Math.max(maxIndex, i+ nums[i]) // will check the max jump before and the jump that can be made by the current array element
    }
    return false
};