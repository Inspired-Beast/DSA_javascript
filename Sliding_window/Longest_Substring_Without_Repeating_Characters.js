// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// -----------------------------------------------------------------------------------------------

// Approach: Use variable Sliding window, we can use brute force approach but using sliding window is
// optimal solution

var lengthOfLongestSubstring = function(s) {
    if(s.length<2){
        return s.length
    }

    let max = 1
    let count = 1
    let nonRepObj = {} // hash table of object to keep track of non repeating characters
    nonRepObj[s[0]] = 0 // initializing starting string element

    let left = 0
    let right = 1
    while(right!==s.length){
        if(!nonRepObj.hasOwnProperty(s[right])){
            nonRepObj[s[right]] = right // adding non repeated elements
            // incrementing right till we have valid substring
            right++ // 
        }
        else{
            delete nonRepObj[s[left]] // deleting element which is already present in object
            // and sliding left to the position where we have the repeated element 
            // this condition will keep on calling until we have the repeated element removed
            // therefore we are not incrementing right from here
            // as we want left to start a new window of string to be looked at
            left++
        }

        count = right -left // calculating the size of the sliding window
        max = Math.max(count, max)
    }
    
    return max
};



////////////////////////////////////////////////////////////
// Brute forced sliding window
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let final = 0
    for(let left=0; left<s.length; left++){
        let arr = [s[left]]
        let right = left +1
        while(right<s.length){
            if(arr.indexOf(s[right])!==-1){
                break
            }
            arr.push(s[right])
            right++
        }
        console.log(arr)
        final = Math.max(final, arr.length)
    }
    return final    
};