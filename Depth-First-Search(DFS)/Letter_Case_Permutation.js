// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. Return the output in any order.

 

// Example 1:

// Input: s = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]
// Example 2:

// Input: s = "3z4"
// Output: ["3z4","3Z4"]

// https://leetcode.com/problems/letter-case-permutation/description/


// DFS and backtrack

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    // DFS approach using backtracking
    let strArr = s.split("")
    let temp = []
    let result = []
    var backtrack = function(ind){
        if(ind===strArr.length ){
            return result.push(temp.join(""))
        }
        if(strArr[ind]>= "0" && strArr[ind]<="9"){
            temp[ind] = strArr[ind]
            backtrack(ind+1)
            return
        }
        temp[ind] = strArr[ind].toUpperCase()
        backtrack(ind+1)
        temp[ind] = strArr[ind].toLowerCase()
        backtrack(ind+1)    
        }
    backtrack(0)
    return result
};