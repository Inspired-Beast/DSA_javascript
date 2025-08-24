// https://leetcode.com/problems/interleaving-string/description/
// Interleaving String

// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

// An interleaving of two strings s and t is a configuration where s and t are divided into n and m substrings respectively, such that:

// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
// Note: a + b is the concatenation of strings a and b.


//memoization + recursion solution
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let m = s1.length;
    let n = s2.length;
    let k = s3.length;
    if(m+n !== k)  return false

    const memo = {}

    var dfs = function(i,j){

        if(i===m && j===n){
            return true
        }
        const key = i +","+j
        if(key in memo){
            return memo[key]
        }
        const k = i+j
        let ans = false
        if(i<m && s1[i]===s3[k] && dfs(i+1,j)){
            ans = true
        }
        if(j<n && s2[j]===s3[k] && dfs(i,j+1)){
            ans = true
        }
        memo[key] = ans;
        return ans
    }

    return dfs(0,0)
};