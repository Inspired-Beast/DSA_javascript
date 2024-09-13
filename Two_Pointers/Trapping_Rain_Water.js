// // Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

// link - https://leetcode.com/problems/trapping-rain-water/description/

//using sliding window  (non optimal solution)

//soltuion video = https://www.youtube.com/watch?v=iI0_Vq0ThhA&t=776s
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    let countL =0;
    let countR = height.length-1
    let trappedArea = 0;

    let leftMax = []
    leftMax[0] = height[countL] 
    let rightMax = []
    rightMax[countR] = height[countR]

    for(let i=1; i<height.length; i++){
        leftMax[i] = Math.max(leftMax[i-1], height[i]) // for each index value in array
        // we are checking the maximum value of the value itself and on the left of that index
        // and storing that in the same order
        
    }

    for(let j= countR-1; j>=0; j--){
        rightMax[j] = Math.max(rightMax[j+1], height[j])// for each index value in array
        // we are checking the maximum value of the value itself and on the right of that index
        // and storing that in the same order
        
    }

    for(let k=0; k<=height.length-1; k++){
        trappedArea += Math.min(leftMax[k], rightMax[k]) - height[k]
        // now we have arrays stating left and right max of each values at their
        // index now we will check the minimum of in both arrays for that particular index and subtract that 
        // from the value at that index
    }

    return trappedArea

};

// Optimal solution (two pointer)

// Approach
// To solve, we can use two pointers: left starting at the beginning and right 
// starting at the end of the array. Max heights to the right of the right pointer 
// and to the left of the left pointer are stored in separate variables and are initially 
// set at the height of the first and last index.

// For each iteration of the loop we can find the lower of the two max heights 
// and advance the corresponding pointer towards the middle. For example, 
// if "max height left" is lower than "max height right", we will advance the left pointer. 
// We now have enough information to calculate how much water can be held at that pointer. 
// We are unaware of any heights in between the pointers, but that's okay since the limiting factor 
// is the lower of the two max heights, and we know that the max height to the outside of the pointer 
// chosen is lower than any potential max height to its other side.

// If the height at the pointer is lower than the corresponding max height, we calculate how many 
// units of water can be held above it (max height - height[i]). If the height at the pointer is 
// higher than the corresponding max height then it can't store water, and we can update the value 
// of the corresponding max height.

var trap = function(height) {

    let maxL =height[0];
    let maxR = height[height.length-1]
    let trappedWater = 0
    let i = 0;
    let j = height.length-1

    while(i<j){
        if(maxL<maxR){
            i++; // checking adjacent height
            if(height[i]<maxL){
                trappedWater += maxL -height[i]
            }
            else{
                maxL = height[i]
            }
        }
        else{
            j--
            if(height[j]<maxR){
                trappedWater += maxR-height[j]
            }
            else{
                maxR = height[j]
            }
        }
    }
    
    return trappedWater
};