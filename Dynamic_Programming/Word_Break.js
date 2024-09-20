// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

// link - https://leetcode.com/problems/word-break/description

// expalination - 
// The question should be reframed as; Is there a combination of words in wordDict that can be used to recreate the original string s. Notice that I mentioned the word combination, this does not mean that you will need all the words in wordDict to recreate s (Using some words from wordDict as long as they perfectly recreate the string s; is a valid solution or word break). Also note that you can use the words in wordDict more than once.

// Take this example for reference:

// Input: "bb", ["a","b","bbb","bbbb"]
// Expected: true

// Here, word "b" from wordDict can be used to perfectly to recreate the string s = "b" + "b" , which is why the expected output is True. Note that we did not use all the words in the dictionary and still found a valid word break.

// Now, let's take another example:
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

// Here, no combination of words exist in wordDict that can perfectly recreate the input string s.
// "cats" + "dog" will require "an" in wordDict in order to recreate s
// "cats" + "and" will require "og" in wordDict in order to recreate s
// "cat" + "sand" will require "og" in wordDict in order to recreate s
// ... and so on.

// The intuition is that you will have consider every combination of words in the wordDict, moreover these words can be used more than once when computing the combinations.

// solution - https://www.youtube.com/watch?v=Sx9NNgInc3A

// here we are checking each index from the last and then looping over the wordDict to see if the current 
// string index + word length is equal to any of the words if yes we set it to true and move foward to next index
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    //bottom up dynamic programming memoiztion approach
    let memoize = new Array(s.length+1).fill(false)
    memoize[s.length] = true
    for(let i=s.length-1; i>=0; i--){
        for(let word of wordDict){
            if(i+word.length<=s.length && s.slice(i, i+word.length)===word){
                memoize[i] = memoize[i+word.length]
            }
            if(memoize[i]){
                break
            }
        }
    }
    return memoize[0]
};  