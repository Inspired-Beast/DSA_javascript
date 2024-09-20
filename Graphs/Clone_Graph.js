// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }
 

// Test case format:

// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

 

// Example 1:


// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]
// Explanation: There are 4 nodes in the graph.
// 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

// link - https://leetcode.com/problems/clone-graph/description/

// DFS Approach for Cloning a Graph

// This approach uses a Depth-First Search (DFS) algorithm to clone a graph.
// It first creates a new node and adds it to a visited map.
// Then it iterates over the node's neighbors, creating a new node for each one if it is not already in the visited map.
// Finally, it adds the new node to the neighbors of the new node.

// Time complexity is O(V+E) where V is the number of vertices and E is the number of edges in the graph, as the algorithm iterates over all the vertices and edges once.
// Space complexity is O(V), as the visited map contains at most V amount of nodes.

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */

// Using Map instead of objects
var cloneGraph = function(node){
    if(!node){
        return node
    }
    let visit = new Map()
    function DFS(node, visit){
        if(visit.has(node)){
            return visit.get(node)
        }
        let newNode = new Node(node.val);
        visit.set(node, newNode)

        for(let edge of node.neighbors){
            newNode.neighbors.push(DFS(edge, visit))
        }

        return newNode
    }
    return DFS(node, visit)
};


//----------------------------------------------------------------------------------
//  // Using JS Object
// var cloneGraph = function(node) {
//     if(!node){
//         return node }
//     let visited = {}
//     var dfs = (node, visited) =>{
//         if(visited.hasOwnProperty(node.val)) return visited[node.val] 

//         let newNode = new Node(node.val)
//         visited[node.val] = newNode // we will need to use node.val here not node
            // as object doesn't support anything other then strings as keys
            // where as node is an instance of class

//         for(let neighbor of node.neighbors){
//             newNode.neighbors.push(dfs(neighbor, visited))
//         }
//         return newNode
//     }
//     return dfs(node, {})
// };  