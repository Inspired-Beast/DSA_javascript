// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Solution/link - https://leetcode.com/problems/rotate-array/solutions/5550096/video-using-remainder-with-3-solutions/

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]


// Reversing the array solution 
var rotate = function(nums, k) {
    k = k%nums.length;
    const reverse = (start, end) =>{
        while(start < end){
            [nums[start], nums[end]] = [nums[end], nums[start]]
            ++start
            --end
        }
    }

    reverse(0, nums.length-1)
    reverse(0, k-1)
    reverse(k, nums.length-1)
};

/**
 * Step by Step Algorithm
Calculate Effective Rotations:

The length of the array is n = len(nums).
The number of rotations k is updated to k % n to handle cases where k is greater than n. This ensures that rotating the array n times results in the same array, so any extra rotations beyond n can be ignored.
k %= len(nums)
Define the Reverse Function:

A helper function reverse is defined to reverse the elements of the array between indices left and right.
Within this function, a while loop swaps elements from the start (left) and end (right) of the specified segment, moving towards the center until left is no longer less than right.
def reverse(left, right):
    while left < right:
        nums[left], nums[right] = nums[right], nums[left]
        left += 1
        right -= 1
Reverse the Entire Array:

The entire array is reversed from index 0 to len(nums) - 1.
This step places the elements that need to be rotated to the front.
reverse(0, len(nums) - 1)
Reverse the First k Elements:

The first k elements of the reversed array are reversed back to their original order.
This places the rotated elements at the start of the array in their correct positions.
reverse(0, k - 1)
Reverse the Remaining n-k Elements:

The remaining elements from index k to len(nums) - 1 are reversed back to their original order.
This places the rest of the elements in their correct positions.
reverse(k, len(nums) - 1)
 */