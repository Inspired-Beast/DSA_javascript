// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

 

// Example 1:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// link - https://leetcode.com/problems/search-a-2d-matrix/description/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let i of matrix){
        if(binarySearch(i, target)){
            return true
        }
    }
    return false
};

var binarySearch = (arr, target) =>{
    let left = 0
    let right = arr.length-1
    while(left<=right){
     let mid = Math.floor((right+left)/2)   
     if(arr[mid] === target){
        return true
     }
     else if(arr[mid]<target){
        left = mid+1
     }
     else{
        right = mid -1
     }
    }
    return false
}

// solution (more optimal)

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let left = 0
    let right = matrix.length-1
    let selectedRow = -1
    while(left<=right){
        let mid = Math.floor((right+left)/2);
        if(matrix[mid][0]<=target && matrix[mid][matrix[mid].length-1]>=target){
            selectedRow = mid
            break
        }
        if(matrix[mid][0]> target){
            right = mid-1
        }
        else{
            left = mid+1
        }
    }
    if(selectedRow===-1){
        return  false}
    return binarySearch(matrix[selectedRow], target)
};

var binarySearch = (arr, target) =>{
    let left = 0
    let right = arr.length-1
    while(left<=right){
     let mid = Math.floor((right+left)/2)   
     if(arr[mid] === target){
        return true
     }
     else if(arr[mid]<target){
        left = mid+1
     }
     else{
        right = mid -1
     }
    }
    return false
}