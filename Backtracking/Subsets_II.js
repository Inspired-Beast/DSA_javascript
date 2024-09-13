// Given an integer array nums that may contain duplicates, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

// link - https://leetcode.com/problems/subsets-ii/description/
// solution - https://www.youtube.com/watch?v=GBKI9VSKdGg

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {

    let subsets = {}
    let temp = []
    // sorting as to make it easier for object to create hash keys later
    nums.sort((a,b)=>a-b)

    var backtrack = (nums,position) =>{
        if(position===nums.length){
            //converting temp to string to use as distinct key and only keep 
            //distinct arrays
            subsets[temp.toString()] = [...temp]
            return 
        }
        //adding number
        temp.push(nums[position])
        backtrack(nums, position+1)
        //not adding number
        temp.pop()
        backtrack(nums, position+1)
    }
    backtrack(nums,0) // started calling the recursive backtrack function

    return Object.values(subsets)
};