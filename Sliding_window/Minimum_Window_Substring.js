// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// link = https://leetcode.com/problems/minimum-window-substring/description/


// optimal solution (https://www.youtube.com/watch?v=z9e-tGD7Z8g)

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function(s, t) {
    if(t.length>s.length){
        return ""
    }
    let count = {} // will calculate frequency of target string

    for(let val of t){
        count[val] = (count[val] || 0) +1
    }

    let frequency = Object.keys(count).length
    
    let minResult = ""
    let minCount = Number.POSITIVE_INFINITY
    let left = 0
    let right = 0

    while(right<s.length){
        let rletter = s[right]
        if(count.hasOwnProperty(rletter)){
            count[rletter] -=1
            if(count[rletter]===0){
                frequency--
            }
        }
        right ++

        while(frequency===0){
            if(right-left< minCount){
                minResult = s.slice(left, right);
                minCount = right-left
            }

            let lletter = s[left];
            if(count.hasOwnProperty(lletter)){
                count[lletter] +=1
                if(count[lletter]>0){
                    frequency++
                }
            }
            left++
        }

    }
    return minResult
};


// non optimal solution - 

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length>s.length){
        return ""
    }
    let minimumStr = {}
    let result = null
    let minCount = Number.POSITIVE_INFINITY
    for(let i=0; i<s.length; i++){
        let j = i+1
        while(i<=j && j<=s.length){
            let temp = s.slice(i,j)
            let diff = j-i
            if(checkSubstring(temp, t)){
                if(temp.length>=t.length){
                    minimumStr[temp] = diff
                    minCount = minCount>diff ? diff: minCount
                    if(result===null){
                        result = temp
                    }
                    else if(result.length > temp.length){
                        result = temp
                    }
                }  
            }
            j++       
        }
    }
    if(minCount!==Number.POSITIVE_INFINITY){
        return result
    }
    return ""
    
};

var checkSubstring = (window, string) =>{
    for(let str of string){
        if(window.indexOf(str) === -1){
            return false
        }
        else{
            window = window.replace(str,"")
        }
    }
    return true
}


