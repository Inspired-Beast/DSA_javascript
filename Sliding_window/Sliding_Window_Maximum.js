// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

 

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 
// link - https://leetcode.com/problems/sliding-window-maximum/description/

// solution - https://www.youtube.com/watch?v=kx7PSOBagFY

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let queue = []
    let result = []

    for(let i=0; i< nums.length; i++){
        if(queue.length>0 && queue[0]<= i-k){
            // shifting queue from front to accomodate the next element in fixed window of length k
            queue.shift()
        }
        // since we only want max value at index 0 and also we are storing only indices in queue , therefore will loop until our queue has max value at index 0 when compared with nums[i]
        while(queue.length>0 && nums[queue[queue.length-1]] <= nums[i]){
            queue.pop()
        }
        // will push i to queue every loop as we want to compare that with next value in the array nums
        queue.push(i)

        if(i>=k-1){
            // pushing only if we have sliding window of size k or greater
            result.push(nums[queue[0]])
        }
    }

    return result
};