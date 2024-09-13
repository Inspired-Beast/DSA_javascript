// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.


// Example 1:


// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0

// link - https://leetcode.com/problems/max-area-of-island/description/

solution 

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let islands = 0

    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if(grid[i][j]===1){
                // storing the area with maximum 1's
                islands  = Math.max(islands, traverse(grid, i, j))
            }
        }
    }

    function traverse(grid, row, col){
        if(row <0 || row > grid.length-1 || col < 0 || col > grid[row].length-1 || grid[row][col]===0){ //returning 0 incase we don't have adjacent 1's
            return 0
        }
        grid[row][col] = 0 // changing checked cells to 0 so that we don't have to recheck it again
         // traversing for all 4 directions and adding result to have maximum adjacent 1's   
         // now this traverse will continue getting recursed until we have all ones's in all ides
        return 1 + traverse(grid, row+1, col) + traverse(grid, row-1, col)+  traverse(grid, row, col+1) + traverse(grid, row, col-1)

    }
    return islands
};