// Your task is to write a function named hasUniqueChars that takes a string as input. Your function should check if all the characters in the string are unique or not. In other words, no character should appear more than once in the string.

// Example

// Input: "hello"

// Output: false

// In this example, the letter 'l' appears two times in the word "hello". So, the function should return false.

function hasUniqueChars(string){
    const newSet = new Set()
    for(let i of string){
        if(newSet.has(i)){
            return false
        }
        newSet.add(i)
    }
    return true
}