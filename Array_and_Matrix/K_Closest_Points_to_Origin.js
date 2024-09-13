// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

 

// Example 1:


// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
// Example 2:

// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]
// Explanation: The answer [[-2,4],[3,3]] would also be accepted.

// link - https://leetcode.com/problems/k-closest-points-to-origin/description/

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    console.log(points.sort((a,b)=>calculateSlope(a)-calculateSlope(b)).slice(0,k))
    return points.sort((a,b)=>calculateSlope(a)-calculateSlope(b)).slice(0,k)
};

var calculateSlope =(arr) =>{
    return ((arr[0]**2 + arr[1]**2)**(1/2))
}

// NOTE - we can't use object as it may have duplicate values
// Brief solution

var kClosest = function(points, k) {
    let distanceObj = []
    for(let i of points){
        distanceObj.push([i, calculateSlope(i)])
    }
    console.log(distanceObj)
    return distanceObj.sort((a,b)=>a[1]-b[1]).slice(0,k).map((e)=>e[0])
};

var calculateSlope =(arr) =>{
    return ((arr[0]**2 + arr[1]**2)**(1/2))
}