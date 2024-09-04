// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 
// link - https://leetcode.com/problems/top-k-frequent-elements/description/

// Vanilla JS solution

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// var topKFrequent = function(nums, k) {
//     let obj = {}
//     for(let i of nums){
//         obj[i] = (obj[i] || 0) + 1
//     }

//     let newValue = Object.values(obj)
//     newValue.sort((a,b) => b-a)

//     newValue = newValue.slice(0,k)
//     let result_arr = []
//     for(let i in obj){
//         if(newValue.includes(obj[i])){
//             result_arr.push(i)
//         }
//     }
//     return result_arr
// };

// ES6 solution/

var topKFrequent = function(nums, k) {

    const numsObj = nums.reduce((cumm, accu)=>{
        cumm[accu]= (cumm[accu] || 0)+1 ;
        return cumm}, {}) 

    return Object.entries(numsObj).sort((a,b)=>b[1]-a[1]).slice(0,k).map((e)=>e[0])

};