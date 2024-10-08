// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]

// link - https://leetcode.com/problems/daily-temperatures/description/

//optimal approach(stack approach)
// solution video - https://www.youtube.com/watch?v=m2xuRJGa76E

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let i = 0
    let days = new Array(temperatures.length).fill(0)
    let indexStack = []
    while(i!==temperatures.length){
        while(indexStack.length && temperatures[i]>temperatures[indexStack[indexStack.length -1 ]]){
            let poppedInd = indexStack.pop()
            days[poppedInd] = i - poppedInd
            }
        indexStack.push(i)
        i++
    }
    return days
};



// Non optimal (brute force approach)
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let i = 0
    let days = []
    while(i!==temperatures.length){
        let j = i+1;
        while(j<temperatures.length){
            if(temperatures[i]<temperatures[j]){
                days.push(j-i)
                break
            }
            j++
        }
        if(i<temperatures.length && j==temperatures.length){
            days.push(0)
        }
        i++
    }
    return days
};
