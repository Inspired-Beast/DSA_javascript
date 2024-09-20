// You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.

// In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.

// Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.

// Each answer[i] is calculated considering the initial state of the boxes.

 

// Example 1:

// Input: boxes = "110"
// Output: [1,1,3]
// Explanation: The answer for each box is as follows:
// 1) First box: you will have to move one ball from the second box to the first box in one operation.
// 2) Second box: you will have to move one ball from the first box to the second box in one operation.
// 3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.
// Example 2:

// Input: boxes = "001011"
// Output: [11,8,5,4,3,4]

//link - https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/description/

/**
 * @param {string} boxes
 * @return {number[]}
 */
// prefixsum and postfix sum approach
var minOperations = function(boxes) {
    let result = new Array(boxes.length).fill(0)
    // making a dummy array whose each indexed value will change depending upon iterations below
    let leftCount = 0
    let leftSum = 0
    for(let i=0; i< boxes.length; i++){ // starting from left adding the adjacenet movements it will take to move all balls to the right
        result[i] += leftSum;
        if(boxes[i]==='1'){
            leftCount += 1
        }else{
            leftCount += 0
        }
        leftSum += leftCount
    }

    let rightCount =0;
    let rightSum = 0
    for(let j=boxes.length-1; j>=0; j--){
        // starting from right adding the adjacent movements it will take to move all balls to the left
        result[j] += rightSum;
        if(boxes[j]==='1'){
            rightCount += 1
        }else{
            rightCount +=0
        }
        rightSum += rightCount
    }
    return result // giving out the resultant array
};



// Brute force approach
var minOperations = function(boxes) {
    let boxesArr = boxes.split("")
    let result = [];

    for(let i=0; i<boxes.length; i++){
        let temp =0
        for(let j=0; j<boxes.length; j++){
            if(boxes[j]==='1'){
                temp += Math.abs(j-i)
            }
        }
        result.push(temp)
    }
    return result
};