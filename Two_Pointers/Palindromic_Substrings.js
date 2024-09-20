// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

 

// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// link - https://leetcode.com/problems/palindromic-substrings/description

/**
 * @param {string} s
 * @return {number}
 */

 //Checking from the middle of string
 var countSubstrings = function(s){
    let count = 0
    for(let i=0; i<s.length; i++){
        let left = i
        let right = i
        checkPalindrome(left, right)
        checkPalindrome(left, right+1)
    }
    function checkPalindrome(left,right){
        while(left>=0 && right<s.length && s[left]===s[right]){
                count++
                left--
                right++
        }
    }
    return count

}

//Brute Force 
// var countSubstrings = function(s) {
//     let count =0
//     for(let i=0; i<s.length; i++){
//         for(let j=i; j<s.length; j++){
//             if(checkPalindrome(s.slice(i,j+1))){
//                 count++
//             }
//         }

//     }
//     return count
// };

// let checkPalindrome = (str) => {
//     if(str.length===1){
//         return true
//     }else{
//         let i=0;
//         let j = str.length -1
//         while(i<=j){
//             if(str[i]!==str[j]){
//                 return false
//             }
//             i++
//             j--
//         }
//         return true
//     }
// }