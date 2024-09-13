// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

// Example 1:
// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.

// Example 2:
// Input: heights = [2,4]
// Output: 4

// link - https://leetcode.com/problems/largest-rectangle-in-histogram/description/
// solution - https://www.youtube.com/watch?v=VNbkzsnllsU

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let i=0;
    let positionPop, heightPop // initializing globally
    let positionStack = [];
    let heightStack = [];
    let maxArea = Number.NEGATIVE_INFINITY;

    function popAndCalculate(i){
        heightPop = heightStack.pop()
        positionPop = positionStack.pop();
        let tempArea = heightPop * (i - positionPop)
        maxArea = Math.max(tempArea, maxArea)
    }

    for(i=0; i<heights.length; i++){ // declaring i above so that while loop below can use it
        if(heightStack.length===0 || heights[i]> heightStack[heightStack.length-1]){
            heightStack.push(heights[i])
            positionStack.push(i)
        }
        else if(heights[i]< heightStack[heightStack.length-1]){
            while(heightStack.length && heights[i]< heightStack[heightStack.length-1]){
                popAndCalculate(i)
            }
            heightStack.push(heights[i])
            positionStack.push(positionPop)

        }
    }
    while(heightStack.length){ // checking remaining values in the stack
        popAndCalculate(i)
    }
    return maxArea
    
};