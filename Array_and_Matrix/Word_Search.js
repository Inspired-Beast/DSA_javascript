// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.


// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

// link - https://leetcode.com/problems/word-search/description/
//solution - https://www.youtube.com/watch?v=_bGRNR3D92s

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            if(board[i][j] === word[0]){
                if(dfs(i, j, 0)){
                    return true
                }
            }
        }
    }
    return false

   function dfs(row, col, wordInd){
        if(word.length === wordInd){
            return true
        }
        if(row<0 || col<0 || row> board.length-1 || col > board[0].length -1 || board[row][col] !== word[wordInd]){
            return false
        }
        board[row][col] = "#"
        if(dfs(row-1, col, wordInd+1) || dfs(row+1, col, wordInd+1) || dfs(row, col-1, wordInd+1) || dfs(row, col+1, wordInd+1)){
            return true
        }
        board[row][col] = word[wordInd]
    }
        
};