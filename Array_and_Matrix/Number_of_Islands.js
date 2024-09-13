// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// link - https://leetcode.com/problems/number-of-islands/description/
// solution - https://www.youtube.com/watch?v=DS59uo8zRNc

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islands = 0

    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if(grid[i][j]==='1'){
                islands += traverse(grid, i, j) // adding 1 incase it is a island
            }
        }
    }

    function traverse(grid, row, col){
        if(row <0 || row > grid.length-1 || col < 0 || col > grid[row].length-1 || grid[row][col]==='0'){ //note check for '0' at the end incase we don't have correct index
            return
        }
        grid[row][col] = '0' // changing checked value to '0' so that we don't have to recheck it again
        traverse(grid, row+1, col) // traversing for all 4 directions
        traverse(grid, row-1, col)
        traverse(grid, row, col+1)
        traverse(grid, row, col-1)
        return 1

    }
    return islands
};