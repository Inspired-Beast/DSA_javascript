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
var characterReplacement = function(s, k) {
    let left = 0
    let right = 0
    let map = {}
    let max = 0
    let topFreq = 0

    while(right<s.length){
        let temp = s[right]
        map[temp] = map[temp] + 1 || 1
        topFreq  = Math.max(topFreq, map[temp])
        while((right-left +1) - topFreq > k){
            let leftChar = s[left]
            map[leftChar]--
            left++
        }
        max = Math.max(max, right-left+1)
        right++
    }
    return max
};