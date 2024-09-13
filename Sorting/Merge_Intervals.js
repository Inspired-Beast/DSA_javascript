// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 
// link - https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    console.log(intervals)
    let newArr = [];
    let temp = intervals[0] // taking temp as a placeholder where max and minimum values will be added and changed respectively depending upon each interval
    for(let i=0; i<intervals.length; i++){
        if(intervals[i][0]<= temp[1]){
            temp[1] = Math.max(temp[1], intervals[i][1]) // replacing temp value incase we find value at 1 greater than temp[1] as it is already sorted and only value at 1 swapping will make sense
        }
        else{
            newArr.push(temp)
            temp = intervals[i]
        }
    }
    newArr.push(temp) // since we have the greatest values in temp hence pushing it at the end
    return newArr
};