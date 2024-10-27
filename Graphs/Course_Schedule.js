// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.

// Example 2:
// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

// link - https://leetcode.com/problems/course-schedule/description
// solution  - https://www.youtube.com/watch?v=FN9Q9DmVH_Y

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let adjacencyList = {}
    let visited = new Set()

    for(let course of prerequisites){
        if(!adjacencyList[course[0]]){
            adjacencyList[course[0]] = [course[1]]
        }else{
            adjacencyList[course[0]].push(course[1])
        }
    }

    var DFS = (key) =>{
        if(visited.has(key)){ // meaning duplicated
            return false
        }
        if(!adjacencyList[key] || adjacencyList[key].length===0){ // checked the course
            return true
        }
        visited.add(key)
        if(adjacencyList[key]){
            for(let value of adjacencyList[key]){
                if(!DFS(value)){
                    return false
                }
            }
        }
        visited.delete(key)
        adjacencyList[key] = []

        return true
    }

    for(let key in adjacencyList){
        if(!DFS(key)){
            return false
        }
    }
    return true
};