// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. Return the output in any order.

 

// Example 1:

// Input: s = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]
// Example 2:

// Input: s = "3z4"
// Output: ["3z4","3Z4"]

// https://leetcode.com/problems/letter-case-permutation/description/


// BFS and backtrack

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    let queue = [["", 0]]
    let result = []

    while(queue.length){
        let [temp, ind] = queue.shift()
        while(ind<s.length && s[ind]>="0" && s[ind]<="9"){
            temp += s[ind++]
        }
        if(ind===s.length){
            result.push(temp)
            continue
        }
        queue.push([temp+ s[ind].toUpperCase(), ind+1])
        queue.push([temp+ s[ind].toLowerCase(), ind+1])
    }
    return result
};