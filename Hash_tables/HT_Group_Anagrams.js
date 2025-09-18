// In this exercise, your task is to write a JavaScript function named groupAnagrams.

// The function will take an array of strings as its parameter. Your goal is to group anagrams from the given list of strings. An anagram is a word or phrase that forms a different word or phrase when the letters are rearranged.

// Your function should return an array of arrays, where each inner array contains a group of anagram strings.



// Examples:

// groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']) should return [ ['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat'] ].

// groupAnagrams(['abc', 'cab', 'bca', 'xyz', 'zyx']) should return [ ['abc', 'cab', 'bca'], ['xyz', 'zyx'] ].





// You can solve this problem using either of the two types of hash tables available in JavaScript:

// Map: A built-in object that lets you store key-value pairs in an organized manner.

// Object: A fundamental data structure in JavaScript that can also be used as a hash table for storing key-value pairs.


// https://leetcode.com/problems/group-anagrams/

// -------------------------
// Solution using prefilled array
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let groupObj = {}
    for(let str of strs){
        let temp = new Array(26).fill(0)
        for(let char of str){
            temp[char.charCodeAt()-97]++
        }
        if(!groupObj[temp.toString()]){
            groupObj[temp.toString()] = [str]
        }else{
            groupObj[temp.toString()].push(str)
        }
    }
    console.log(groupObj)
    return Object.values(groupObj)
};

//Solution one using object 

function groupAnagrams(arr){
    let resultObj = {};
    
    for(let i=0; i<arr.length; i++){
        let tempArr = []
        for(let j of arr[i]){
            tempArr.push(j)
        }
       tempArr.sort();
       let tempKey = tempArr.join('');
       if(!resultObj[tempKey]){
           resultObj[tempKey] = []
       }
       resultObj[tempKey].push(arr[i])
    }
    return Object.values(resultObj)
}

// Solution two using maps and Array.from
function groupAnagrams(strings) {
    const anagramGroups = new Map();
 
    for (const string of strings) {
        const chars = Array.from(string);
        chars.sort();
        const canonical = chars.join('');
 
        if (anagramGroups.has(canonical)) {
            anagramGroups.get(canonical).push(string);
        } else {
            const group = [string];
            anagramGroups.set(canonical, group);
        }
    }
 
    return Array.from(anagramGroups.values());
}


