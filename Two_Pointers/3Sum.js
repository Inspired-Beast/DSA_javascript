// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// link - https://leetcode.com/problems/3sum/description/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length<3){
        return []
    }
    nums = nums.sort((a,b)=>a-b) // sorting array to make it easier to check sum
    let result = []
    for(let i=0; i<nums.length-2; i++){
        if(nums[i]>0){ // since it is sorted and if we find one value greater than 0 then break out
            break
        }
        if(nums[i]===nums[i-1]){ // incase same value hence iterating one step over
            continue
        }
            let j = i+1// starting pointer from left side
            let k = nums.length -1 // starting from end of the array
            while(j<k){
                let sum = nums[i] + nums[j] + nums[k];
                if(sum===0){
                    result.push([nums[i], nums[j], nums[k]])
                    while(nums[k]===nums[k-1]){k--} // decrementing k incase we find duplicate values
                    //only stopping once we find distinct value
                    while(nums[j]===nums[j+1]){j++} // similarly checking for duplicates
                    k--
                    j++
                }
                else if(sum<0){
                    j++ // incrementing j if sum we are less than sum as we have sorted array and items
                    //on right will be greater than items on left which can help in reaching the target
                }
                else {
                    k--  //decrementing incase we are over the target as k starts from left hence to 
                    // meet shorter target we need to go one step left
                }
            }
        

    }
    return result
};