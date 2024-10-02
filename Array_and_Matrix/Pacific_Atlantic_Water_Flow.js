// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

 
// Example 1:

// Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
// Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
// [0,4]: [0,4] -> Pacific Ocean 
//        [0,4] -> Atlantic Ocean
// [1,3]: [1,3] -> [0,3] -> Pacific Ocean 
//        [1,3] -> [1,4] -> Atlantic Ocean
// [1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean 
//        [1,4] -> Atlantic Ocean
// [2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean 
//        [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
// [3,0]: [3,0] -> Pacific Ocean 
//        [3,0] -> [4,0] -> Atlantic Ocean
// [3,1]: [3,1] -> [3,0] -> Pacific Ocean 
//        [3,1] -> [4,1] -> Atlantic Ocean
// [4,0]: [4,0] -> Pacific Ocean 
//        [4,0] -> Atlantic Ocean
// Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.

// Example 2:

// Input: heights = [[1]]
// Output: [[0,0]]
// Explanation: The water can flow from the only cell to the Pacific and Atlantic oceans.
 
// link - https://leetcode.com/problems/pacific-atlantic-water-flow/description/
// 3d representation - https://editor.p5js.org/LeweyM/full/RpAxMlZL4
// solution - https://www.youtube.com/watch?v=HuR-AQt3UQA

//-------------------------------------using BFS----------------------------------
// Solution using BFS 

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const m = heights.length
    const n = heights[0].length;

    const pacificQueue = []
    const atlanticQueue = []

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            // putting row and column adjacent to pacific
            if(i===0 || j===0){
                pacificQueue.push([i,j])
            }

            //putting row and column adjacent to atlantic
            if(i===m-1 || j===n-1){
                atlanticQueue.push([i,j])
            }
        }
    }

    function BFS(queue){
        let visitedArr = Array.from(Array(m), ()=>new Array(n).fill(false))
        while(queue.length){
            const [x,y] = queue.shift();
            visitedArr[x][y] = true;
            let directions = [[0,-1], [-1,0], [0,1], [1,0]]
            for(let direct of directions){
                let moveX = x + direct[0]
                let moveY = y + direct[1]
                if(moveX<0 || moveY<0 || moveX>=m || moveY>=n || visitedArr[moveX][moveY]){
                    continue
                }
                if(heights[moveX][moveY]>=heights[x][y]){
                    queue.push([moveX,moveY])
                }
            }
        }
        return visitedArr
    }
    let pacficCordinates = BFS(pacificQueue)
    let atlanticCordinates = BFS(atlanticQueue)

    //comparing pacific and atlantic visited Arr
    let result = []
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(pacficCordinates[i][j] && atlanticCordinates[i][j]){
                result.push([i,j])
            }
        }
    }
    return result
};

//---------------------------------------------using DFS---------------------------------------------
// Solution using DFS
var pacificAtlantic = function(heights) {
    const m = heights.length
    const n = heights[0].length;

    const pacificQueue = Array.from(Array(m), ()=>new Array(n).fill(false))
    const atlanticQueue = Array.from(Array(m), ()=>new Array(n).fill(false))

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            // putting row and column adjacent to pacific
            if(i===0 || j===0){
                DFS(i, j, pacificQueue, Infinity)
                DFS(i, j, pacificQueue, -Infinity)
            }

            //putting row and column adjacent to atlantic
            if(i===m-1 || j===n-1){
                DFS(i, j, atlanticQueue, -Infinity)
                DFS(i, j, atlanticQueue, -Infinity)
            }
        }
    }

    function DFS(i, j, queue, prevValue){
        if(i<0 || j<0 || i>=m || j>=n || queue[i][j] || prevValue > heights[i][j]){
            return
        }
        queue[i][j] = true
        DFS(i-1, j, queue, heights[i][j])
        DFS(i+1, j, queue, heights[i][j])
        DFS(i, j-1, queue, heights[i][j])
        DFS(i, j+1, queue, heights[i][j])
    }

    //comparing pacific and atlantic visited Arr
    let result = []
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(pacificQueue[i][j] && atlanticQueue[i][j]){
                result.push([i,j])
            }
        }
    }
    return result
};
