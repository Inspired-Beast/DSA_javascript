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


// brute force 
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if(heights.length===1){
        return heights[0]
    }
    let max = 0
    for(let i=0; i<heights.length; i++){
        let area = 0
        let minHeight = heights[i]
        for(let j=i+1; j<heights.length; j++){
            minHeight = Math.min(heights[j], minHeight)
            area = (j-i+1) * minHeight
            max = Math.max(max, area, heights[j], heights[i])
        }
    }
    return max
};

```python
class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        heightStack = []
        positionStack = []
        maxArea = 0
        
        for idx, value in enumerate(heights):
            if len(heightStack)==0 or value>heightStack[-1]:
                heightStack.append(value)
                positionStack.append(idx)
            elif value<heightStack[-1]:
                while len(heightStack) and value<heightStack[-1]:
                    lastHeight = heightStack.pop()
                    lastPosition = positionStack.pop()
                    area = lastHeight * (idx-lastPosition)
                    maxArea = max(area, maxArea)
                heightStack.append(value)
                positionStack.append(lastPosition)
        while len(heightStack):
            lastHeight = heightStack.pop()
            lastPosition = positionStack.pop()
            area = lastHeight * (len(heights)-lastPosition)
            maxArea = max(area, maxArea)
        return maxArea
```