// Given an m x n board of characters and a list of strings words, return all words on the board.

// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.


// Example 1:

// Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]

// Example 2:

// Input: board = [["a","b"],["c","d"]], words = ["abcb"]
// Output: []

// link - https://leetcode.com/problems/word-search-ii/description/?envType=problem-list-v2&envId=oizxjoit
// solution - https://www.youtube.com/watch?v=iQuw7mID_30

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let result = []

    let root = Trie(words)
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            DFS(root, i, j, board, result)
        }
    }

    return result
};

var DFS = function(node, left, right, board, result){
    if(node.word){
        result.push(node.word)
        node.word = null
    }
    if(left<0 || right <0 || left>board.length -1 || right>board[0].length-1){
        return
    }
    if(!node[board[left][right]]){
        return
    }
    let c = board[left][right]
    board[left][right] = '#'
    DFS(node[c], left+1, right, board, result)
    DFS(node[c], left-1, right, board, result)
    DFS(node[c], left, right+1, board, result)
    DFS(node[c], left, right-1, board, result)
    board[left][right] = c

}

var Trie = function(words){
    let root = {}

    for(let word of words){
        let curr = root
        for(let char of word){
            if(!curr[char]){
                curr[char] = {}
            }
            curr = curr[char]
        }
        curr.word = word // added to the end signifying end of a word
    }
    return root
}