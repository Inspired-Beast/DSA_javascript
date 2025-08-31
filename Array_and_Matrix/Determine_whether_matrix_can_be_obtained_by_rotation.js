// Given two n x n binary matrices mat and target, return true if it is possible to make mat equal to target by rotating mat in 90-degree increments, or false otherwise.

// https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/description/

// Example 1:
// Input: mat = [[0,1],[1,0]], target = [[1,0],[0,1]]
// Output: true
// Explanation: We can rotate mat 90 degrees clockwise to make mat equal target.

// Example 2:
// Input: mat = [[0,1],[1,1]], target = [[1,0],[0,1]]
// Output: false
// Explanation: It is impossible to make mat equal to target by rotating mat.

/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(matr, target) {
    for(let i=0; i<4; i++){
        if(check(rotateMatrix(matr), target)){
            return true
        }
    }  
    return false
};

var rotateMatrix = function(mat) {
    for(let i=0; i<mat.length; i++){
        for(let j=i+1; j<mat[0].length; j++){
            [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]]
        }
    }

    for(let arr of mat){
        arr.reverse()
    }
    return mat
}

var check = function(orig, dup) {
    for(let i=0; i<orig.length; i++){
        for(let j=0; j<orig.length; j++){
            if(orig[i][j]!==dup[i][j]){
                return false
            }
        }
    }
    return true
}
