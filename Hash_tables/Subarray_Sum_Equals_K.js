// PREFIX SUM PROBLEM

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

 

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

// link - https://leetcode.com/problems/subarray-sum-equals-k/description/

// Approach - 
// Let's take an example for better understanding what this is doing and why
// nums = [3, 9, -2, 4, 1, -7, 2, 6], k = 5
// Initially sum = 0, sum will store our prefix sum or sum of elements till now
// count will store no of sub-arrays that will result to k
// we take a Hashmap and initialise it with key value pair of 0: 1

// sum = 3
// map[sum - k] = 3 - 5 = -2, is there mapping of -2, no, then map[sum] = (map[sum] || 0) + 1 will create a key value pair of 3: 1
// count = 0

// sum = 12
// map[sum - k] = 12 - 5 = 7, is there mapping of 7, no, then map[sum] = (map[sum] || 0) + 1 will create a key value pair of 12: 1
// count = 0

// sum = 10
// map[sum - k] = 10 - 5 = 5, is there mapping of 5, no, then map[sum] = (map[sum] || 0) + 1 will create a key value pair of 10: 1
// count = 0

// sum = 14
// map[sum - k] = 14 - 5 = 9, is there mapping of 9, no, then map[sum] = (map[sum] || 0) + 1 will create a key value pair of 14: 1
// count = 0

// sum = 15
// map[sum - k] = 15 - 5 = 10, is there mapping of 10, yes, then add "value" of "key - 10" into count
// why ?
// 15 - 10 = 5 which is k
// count = 1

// sum = 8
// map[sum - k] = 8 - 5 = 3, is there mapping of 3, yes, then add "value" of "key - 3" into count
// why ?
// 8 - 3 = 5 which is k
// count = 2

// sum = 10
// map[sum - k] = 10 - 5 = 5, is there mapping of 5, no, then map[sum] = (map[sum] || 0) + 1 will create a key value pair of 10: 1 but wait, we already have 10 as key in our HashMap so map[sum] = (map[sum] || 0) + 1 will see map[sum] is present which is 1 so 1 + 1 = 2 now 10 is mapped to 2
// count = 2

// sum = 16
// map[sum - k] = 16 - 5 = 11, is there mapping of 11, no, then map[sum] = (map[sum] || 0) + 1 will create a key value pair of 11: 1
// count = 2

// Now loop ends and we have our result as 2


// Solution using Map (optimal)


var subarraySum = function(nums, k){
    let subArray = new Map()
    subArray.set(0,1)

    let sum = 0
    let count = 0

    for(let num of nums){
        sum +=num

        if(subArray.has(sum-k)){
            count += subArray.get(sum-k)
        }
        if(subArray.has(sum)){
            subArray.set(sum, subArray.get(sum) + 1)
        }else{
            subArray.set(sum,1)
        }
        
    }
    return count
}

//solution using JS object
var subarraySum = function(nums, k) {
    let sub = {}
    sub[0] = 1
    let count = 0
    let sum = 0

    nums.forEach((ele)=>{
        sum += ele
        if(sub.hasOwnProperty(sum-k)){
            count+= sub[sum-k]
        }

        sub[sum] = (sub[sum]||0) +1
    })
    return count
}

// nOTE can be done using brute force