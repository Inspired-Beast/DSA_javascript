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
    // Creating Set so that we can keep track of vertex being visited so that one can check if there is cyclic graph
    let visited = new Set()
    // Creating graph based on matrix provided, specifically using adjacencyList
    for(let arr of prerequisites){
        if(!adjacencyList.hasOwnProperty(arr[0])){
            adjacencyList[arr[0]] = []
        }
        adjacencyList[arr[0]].push(arr[1])
    }

    // Using DFS to check the edges or neighbors of each vertex and check if it a cyclic graph or not, as in case of cyclic graph the schedule is impossible, so it has to be non cyclic graph
    var dfs = function(vertex, visited){
        // Incase visited set has the vertex then it is cyclic so then we will return false
        if(visited.has(vertex)){
            return false
        }
        // Vertex having no edges/neighbors meaning there is no further traversal hence stopping and returning true
        if(!adjacencyList[vertex] || adjacencyList[vertex].length===0){
            return true
        }
        // adding vertex to set so that we can track which vertex is visited
        visited.add(vertex)
        for(let ele of adjacencyList[vertex]){
            // firstly traversing neighbors of a vertex before going down one vertex
            if(!dfs(ele, visited)){
                return false
            }
        }
        // removing the vertex already explored so that no conflict occurs once the traverse is happening
        visited.delete(vertex)
        // similarly removing neigbord or edges so that we don't traverse back 
        adjacencyList[vertex] = []
        // returining true as on traversing no cycle was found
        return true
    }

    // Looping through Graph (adjacency list vertex by vertex)
    for(let v in adjacencyList){
        if(!dfs(v, visited)){
            return false
        }
    }
    // all goes well no false , hence returning true
    return true
};