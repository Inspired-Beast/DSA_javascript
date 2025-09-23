// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// https://leetcode.com/problems/sort-colors/

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // return nums.sort((a,b)=>a-b) // simple sorting solution
    let numsObj = nums.reduce((accu, cumm)=>{
        accu[cumm] = (accu[cumm] || 0) + 1
        return accu
    }, {
        '0':0,
        '1':0,
        '2':0
    })
    let ind = 0
    for(let key in numsObj){
        let temp = numsObj[key]
        for(let i=0; i<temp; i++){
            nums[ind] = parseInt(key)
            ind++
        }
    }
};