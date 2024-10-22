// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

 

// Example 1:


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:


// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// link - https://leetcode.com/problems/set-matrix-zeroes/description

// solution - https://www.youtube.com/watch?v=9-PXYWcRc_Y

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    let zeroPairs =  []
    
    for(let i=0; i< matrix.length; i++){
        for(let j=0; j< matrix[0].length; j++){
            if(matrix[i][j] ===0){
                zeroPairs.push([i,j])
            }
        }
    }

    for(let pair of zeroPairs){

        const row = pair[0]
        const col = pair[1]

        for(let i=0; i<matrix.length; i++){
            matrix[i][col] = 0
        }

        for(let j=0; j<matrix[0].length; j++){
            matrix[row][j] = 0
        }
    }

    return matrix
};

