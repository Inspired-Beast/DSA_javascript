// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// link - https://leetcode.com/problems/spiral-matrix/description/
 
// solution video - https://www.youtube.com/watch?v=pFk4wX9yANw

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let total = matrix.length * matrix[0].length;
    let left = 0
    let  right = matrix[0].length -1
    let top = 0
    let bottom = matrix.length -1
    let result = [] 
    while(result.length < total){
        for(let i=left; i<=right && result.length < total; i++){
            result.push(matrix[top][i])
        }
        top++

        for(let j=top; j<=bottom  && result.length < total; j++){
            result.push(matrix[j][right])
        }
        right--

        for(let k=right; k>=left && result.length < total; k--){
            result.push(matrix[bottom][k])
        }
        bottom--

        for(let l=bottom; l>=top && result.length < total; l--){
            result.push(matrix[l][left])
        }
        left++

    }
    return result
};