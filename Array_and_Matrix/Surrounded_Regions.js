// You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

// Connect: A cell is connected to adjacent cells horizontally or vertically.
// Region: To form a region connect every 'O' cell.
// Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
// A surrounded region is captured by replacing all 'O's with 'X's in the input matrix board.

 

// Example 1:

// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

// Explanation:


// In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.

// Example 2:

// Input: board = [["X"]]

// Output: [["X"]]

// link - https://leetcode.com/problems/surrounded-regions/description/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            // checking if 'O' is sorrounded by edges and if yes then taverse for that only
            if(board[i][j]==='O' &(i===0 || i===board.length-1 || j===0 || j===board[0].length-1)){
                traverse(board, i, j) // using DFS recursion
            }
        }
    }
    // now we have matrix with value changed to 'C' for those 'O' that are not sorrounded
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            if(board[i][j]==='O'){
                board[i][j] = 'X'
            }
            else if(board[i][j]==='C'){
                board[i][j] = 'O'
            }
        }
    }
    return board
};

function traverse(board, i, j){
    if(i<0 || j<0 || i> board.length-1 || j> board[0].length -1 || board[i][j]==='X' || board[i][j] === 'C'){
        return
    }
    board[i][j] = 'C' // change the value as this value is the one that is not surrounded completely by 'X'
    traverse(board, i+1, j)
    traverse(board, i-1, j)
    traverse(board, i, j+1)
    traverse(board, i, j-1)
    return
}