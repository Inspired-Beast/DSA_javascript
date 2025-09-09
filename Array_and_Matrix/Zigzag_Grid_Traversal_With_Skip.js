// You are given an m x n 2D array grid of positive integers.

// Your task is to traverse grid in a zigzag pattern while skipping every alternate cell.

// Zigzag pattern traversal is defined as following the below actions:

// Start at the top-left cell (0, 0).
// Move right within a row until the end of the row is reached.
// Drop down to the next row, then traverse left until the beginning of the row is reached.
// Continue alternating between right and left traversal until every row has been traversed.
// Note that you must skip every alternate cell during the traversal.

// Return an array of integers result containing, in order, the value of the cells visited during the zigzag traversal with skips.

 

// Example 1:

// Input: grid = [[1,2],[3,4]]
// Output: [1,4]



// Example 2:

// Input: grid = [[2,1],[2,1],[2,1]]
// Output: [2,1,2]


// https://leetcode.com/problems/zigzag-grid-traversal-with-skip/

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function(grid) {
    let result = []
    let temp = 0
    for(let t=0; t<grid.length;t++){
        if(t%2===0){
            arr = grid[t]
        }else{
            arr = grid[t].reverse()
        }
        for(let i=0; i<arr.length; i++){
            if(temp%2===0){
                result.push(arr[i])
            }
            temp++
        }
    }
    return result
};