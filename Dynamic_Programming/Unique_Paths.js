// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.


// Example 1:

// Input: m = 3, n = 7
// Output: 28

// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

// link - https://leetcode.com/problems/unique-paths

// solution - https://www.youtube.com/watch?v=W9iVpPuvJ3Q

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    let totalCells = Array.from({length:m},()=>new Array(n).fill(0))
    for(let i =0; i<m; i++){
        totalCells[i][0] = 1
    }
    for(let j =0; j<n; j++){
        totalCells[0][j] = 1
    }
    for(let k = 1; k<m; k++){
        for(let l=1; l<n; l++){
            totalCells[k][l] = totalCells[k-1][l] + totalCells[k][l-1]
        }
    }
    return totalCells[m-1][n-1]
};