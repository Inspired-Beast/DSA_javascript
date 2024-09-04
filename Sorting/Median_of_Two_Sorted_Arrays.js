// Hard

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

var findMedianSortedArrays = function(nums1, nums2) {
    let newArr = []
    let count1 = 0
    let count2 = 0

    while(count1<nums1.length && count2<nums2.length){
        if(nums1[count1]<=nums2[count2]){
            newArr.push(nums1[count1++])
        }
        else{
            newArr.push(nums2[count2++])
        }
    }
    if(count1<nums1.length){
        newArr = [...newArr, ...nums1.slice(count1)]
    }

    if(count2<nums2.length){
        newArr = [...newArr, ...nums2.slice(count2)]
    }
    
    if(newArr.length%2!==0){
        return newArr[parseInt(newArr.length/2)]
    }
    else{
        let temp = Math.floor(newArr.length/2)
        return (newArr[temp-1] + newArr[temp])/2
    }


};