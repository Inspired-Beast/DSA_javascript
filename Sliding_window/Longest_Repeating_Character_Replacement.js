// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

// link - https://leetcode.com/problems/longest-repeating-character-replacement/description

// solution - https://www.youtube.com/watch?v=yoEC3ZjYiko

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    // Setting left and right pointer from start we will move right step by step till we have exhausted k turns and then shift left to get a new element
    let left = 0
    let right = 0
    // maximum repititive string post turns will be stored here
    let maxL = 0
    // Object map which will hold maximum natural occuring character frequencies in a given string
    let map = {}
    // top freq
    let topFreq = 0
    while(right !== s.length){
        let char = s[right]
        // updating natural frequency of each distinct character
        map[char] = map[char] + 1 || 1
        // updating top frequency if the repition of characters is adjacent to each character
        topFreq = Math.max(map[char], topFreq)
        // if we have a length of strings with a character and k changes done is exhausted, then move to a new character and increase one by one 
        while((right - left +1) - topFreq > k){
            let lChar = s[left]
            map[lChar]--
            left++
        }
        // updating the max length possible for repititing characters with k changes possible
        maxL = Math.max(right - left + 1, maxL)
        right++
    }
    return maxL
};