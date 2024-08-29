// The findLongestString function aims to find the longest string from an array of strings (stringArray).

// The function returns the longest string present in the given array.



// Constraints:

// The array can be empty or contain any number of elements.

// Elements in the array must be strings.

// If there are multiple strings of the same longest length, the function returns the first one it encounters.



// Parameters:

// stringArray: An array of strings.



// Returns:

// The function returns the longest string from the array stringArray.

// If stringArray is empty, the function returns an empty string "".



// Examples:

// Basic Example

// let myStrings = ["apple", "banana", "pea"];
// let result = findLongestString(myStrings);
// // The function should return "banana"

function findLongestString(stringArray){
    let longestWord= ""
    for(let word of stringArray){
        if(word.length>longestWord.length){
            longestWord=word
        }
    }
    return longestWord
}