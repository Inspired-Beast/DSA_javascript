// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// link- https://leetcode.com/problems/valid-parentheses/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length<2 || s.length%2!==0){
        return false
    }
    let dict = {
        ')': '(', '}': '{', ']' : '['
    }
    let stack = [];
    let count = 0
    for(let i of s){
        if(stack.length && dict[i]===stack[stack.length-1]){
            count--
            stack.pop()
            continue
        }else if(!dict.hasOwnProperty(i)){
            stack.push(i)
        }
        count++
    }
    console.log(stack)
    if(!count && !stack.length){
        return true
    }else{
        return false
    }
};


//==================================alternate===================================
var isValid = function(s) {
    if(s.length<2 || s.length%2!==0){
        return false
    }
    let dict = {
        '(': ')', '{': '}', '[' : ']'
    }
    let stack = [];

    for(let i of s){
        if(dict[i]){
            stack.push(dict[i])
        }
        else if(i!==stack.pop()){
            return false
        }
    }

    if(!stack.length){
        return true
    }else{
        return false
    }
};