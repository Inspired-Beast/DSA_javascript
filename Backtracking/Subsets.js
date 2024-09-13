// Given an integer array nums of unique elements, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

// link - https://leetcode.com/problems/subsets/description/
// solution - https://www.youtube.com/watch?v=DICBCBZn_L4

// Solution using recursive backtracking
var subsets = function(nums){
    let subsets = []
    let temp = []

    var backtrack = (nums,position) =>{
        if(position===nums.length){
            // base case of stopping recursion on one side of addition of elements in temp
            return subsets.push([...temp])
        }

        // adding the value
        temp.push(nums[position])
        backtrack(nums, position+1)

        //not adding the value
        temp.pop()
        backtrack(nums, position+1)

    }
    backtrack(nums,0) // started calling the recursive backtrack function
    return subsets
}


//Solution using iterative backtracking (not much optimal)

// var subsets = function(nums) {
//     let resultArr = []
//     resultArr.push([])

//     for(let i=0; i<nums.length; i++){
//         let subLength = resultArr.length

//         for(let j=0; j<subLength; j++){ // looping one step at a time
                // also looping based on resultArr length so as to avoid duplicates
//             let currentCombo = resultArr[j].concat(nums[i])
//             resultArr.push(currentCombo)
//             console.log(resultArr)
//         }
            
//         }
    
//     return resultArr
// };