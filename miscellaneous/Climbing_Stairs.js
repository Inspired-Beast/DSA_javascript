// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// link - https://leetcode.com/problems/climbing-stairs/description

// solution - https://leetcode.com/problems/climbing-stairs/solutions/2810612/4-ways-to-solve-with-detailed-diagrams-no-memoization-beats-100-time-memory

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a =0
    let b = 1
    for(let i=0; i<n; i++){ // fibonacci way
        [a, b] = [b, a+b]
    }
    return b
};