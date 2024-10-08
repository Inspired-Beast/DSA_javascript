// Given an integer array nums, return the length of the longest strictly increasing 
// subsequence
// .

 

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1
 
// link - https://leetcode.com/problems/longest-increasing-subsequence/description

//solution Binary search approach (O(nlogn)

// solution video = https://www.youtube.com/watch?v=on2hvxBXJH4

/**
 * @param {number[]} nums
 * @return {number}
 */


var lengthOfLIS = function(nums) {
    if(nums.length===0){
        return 0
    }
    let temp = [nums[0]]
    for(let i=1; i< nums.length; i++){
        if(temp[temp.length-1]<nums[i]){
            temp.push(nums[i])
        }
        else{
            let left = 0
            let right = temp.length-1
            while(left<right){
                let mid = Math.floor((right+left)/2)
                if(temp[mid]<nums[i]){
                    left = mid +1
                }else{
                    right = mid
                }
            }
            temp[left] = nums[i]
        }
    }
    return temp.length
};