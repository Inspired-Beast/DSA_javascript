// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// https://leetcode.com/problems/longest-palindromic-substring/


// Optimal solution (O(n^2))
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length<=1){
        return s
    }
    let maxL = 0
    let maxStr = s[0]

    for(let i=0; i<=s.length-1; i++){
        let oddStr = expandStr(s, i,i)
        let evenStr = expandStr(s, i, i+1)

        if(oddStr.length>maxL){
            maxStr = oddStr
            maxL = oddStr.length
        }
        if(evenStr.length>maxL){
            maxStr = evenStr
            maxL = evenStr.length
        }
    }
    return maxStr
};

var expandStr = function(word, left, right){
    while(left>=0 && right <=word.length-1 && word[left]===word[right]){
        left--
        ++right
    }
    return word.slice(left+1, right)
}

// --------------------------

// Non optimal solution (O(n^3))
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(checkPalindrome(s)){
        return s
    }
    
    //sliding window indices
    //here we will use i to move one step and j to go to end of the str and
    //then reset 
    let left = 0
    let right =1
    let maxLength = 0
    let largestStr = ''
    while(left!==s.length){ // looping till left reaches to the end
        let slicedStr = s.slice(left, right)
        if(checkPalindrome(slicedStr)){ // checking palindrome in each sliding window
            if(maxLength < right-left){
                largestStr = slicedStr; // changing largest Palindrome substring incase we have one in
                //our current sliding window
                maxLength = right-left
            }
        }

        if(right===s.length){ // if right iterator reaches the end f string
        //hence we will reset it to left+1 or left ++ so that we can start sliding from
        //point left
            left++
            right = left
        }
        else{ // sliding right incase it doesn't reach end
            right++
        }

    }
    return largestStr
};

var checkPalindrome = function(str){ // function to check Palindrome
    let i = 0
    let j = str.length-1
    while(i<=j){
        if(str[i]!==str[j]){
            return false
        }
        i++
        j--
    }
    return true
}