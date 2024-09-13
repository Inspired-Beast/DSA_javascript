// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1

//link - https://leetcode.com/problems/search-in-rotated-sorted-array/description/

var search = function(nums, target) {
    if(nums.length ===1 && nums[0]===target){
        return 0
    }
    let left = 0
    let right = nums.length -1
    while(left<=right){ // this will help us find pivot where the array rotation happened
        let mid = left + Math.floor((right-left)/2)

        if(nums[0]<=nums[mid]){
            left =  mid +1
        }
        else{
            // console.log('j')
            right = mid
            if(left===right){
                break
            }
        }
    }
    let mid = right
    if(nums[mid]<=target && target<=nums[nums.length-1]){
        left = mid
        right = nums.length-1
    }
    else{
        right = mid-1;
        left = 0
    }
    console.log(left, right, nums.slice(left,right+1))

    return BinarySearch(nums, target, left, right+1)
    
};


function BinarySearch(nums, target, left, right){

    while(left<=right){
        let mid = left + Math.floor((right-left)/2)
        if(nums[mid]===target){
            return mid
        }
        else if(nums[mid]>target){
            right = mid-1
        }
        else{
            left = mid +1
        }
        
    }
    return -1}
    