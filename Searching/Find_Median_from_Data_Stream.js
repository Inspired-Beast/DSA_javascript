// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
 

// Example 1:

// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0

// link - https://leetcode.com/problems/find-median-from-data-stream/description

//solution - https://www.youtube.com/watch?v=xYZHlJW3PLY


var MedianFinder = function() {
    this.nums = []
    
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let left = 0;
    let right = this.nums.length-1

    while(left<=right){
        let mid = Math.floor((left + right)/2);
        if(this.nums[mid]<num){ // if value at mid is less than the number itself we will shift left 1 step after mid
            left = mid +1
        }else{
            right = mid -1
        }
    }
    this.nums.splice(left, 0, num)

};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {

    if(this.nums.length%2!==0){
        return this.nums[Math.floor(this.nums.length/2)]
    }
    else{
        return (this.nums[Math.floor(this.nums.length/2) -1] + this.nums[Math.floor(this.nums.length/2)]) /2
    }
    
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */