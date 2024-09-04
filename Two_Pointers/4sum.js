// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

//question - https://leetcode.com/problems/4sum/description/
// Solution - https://youtube.com/watch?v=fRJ7TitfanE

var fourSum = function(nums, target) {
    if(nums.length<4){
        return []
    }
    nums = mergeSort(nums) // sorting so that summing up of values becomes easier
    let resultArr = []
    for(let i=0; i< nums.length-3; i++){ // as we have to check for 4 values hence
    //looping till 3rd last value
        //similarly looping till nums.length-2
        for(let j=i+1; j<nums.length-2; j++){
            let k = j+1;
            let l = nums.length -1
            
            while(k<l){
                if(nums[i]+nums[j]+nums[k]+nums[l]===target){
                    resultArr.push([nums[i], nums[j], nums[k], nums[l]])
                    //avoid duplicacy and move to different index if the next value of k or prior value for l is same
                    while(nums[k]===nums[k+1]) k++
                    while(nums[l]===nums[l-1]) l--

                    //incrementing as we got result
                    k++
                    l--
                }
                else{
                    if(nums[i]+nums[j]+nums[k]+nums[l]<target){
                        k++
                    }
                    else{
                        l--
                    }
                }
                
            }
            while(nums[j]===nums[j+1]){
                j++
            }
        }
        while(nums[i]===nums[i+1]){
            i++
        }
    }
    return resultArr
};

function merge(array1, array2){
    let i1 = 0
    let i2 =0
    let mergedArr = []
    while(i1< array1.length && i2< array2.length){
        if(array1[i1]<=array2[i2]){
            mergedArr.push(array1[i1])
            i1++
        }
        else{
            mergedArr.push(array2[i2])
            i2++
        }
    }

    if(i1<array1.length){
        mergedArr = [...mergedArr, ...array1.slice(i1)]
    }
    if(i2<array2.length){
        mergedArr = [...mergedArr, ...array2.slice(i2)]
    }

    return mergedArr

}

function mergeSort(array){
    if(array.length===1){
        return array
    }
    let mid = Math.floor(array.length/2);
    let arrayLeft = mergeSort(array.slice(0,mid))
    let arrayRight = mergeSort(array.slice(mid))

    return merge(arrayLeft, arrayRight)
}