// You are given a 0-indexed array of integers nums of length n. You are initially positioned at index 0.

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at index i, you can jump to any index (i + j) where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach index n - 1. The test cases are generated such that you can reach index n - 1.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2

// https://leetcode.com/problems/jump-game-ii/submissions/1745818898/
// https://www.youtube.com/watch?v=7SBVnw7GSTk
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps =0, farthest=0, start=0, end=0;
    while(end<nums.length-1){
        for(let i=start; i<=end; i++){
            farthest = Math.max(farthest, i+nums[i])
        }
        start = end +1
        end = farthest
        jumps++
    }
    return jumps
};


// // alternate 
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var jump = function(nums) {
//     let jumps = 0
//     let max = 0
//     let steps = 0
//     for(let i=0; i<nums.length-1; i++){
//         max = Math.max(max, i+nums[i])
//         if(i==steps){
//             ++jumps
//             steps = max
//             console.log(steps, jumps, i)
//         }
//     }
//     return jumps
// };
