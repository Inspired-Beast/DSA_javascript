// In this exercise, your task is to write a JavaScript function named firstNonRepeatingChar.

// The function will take a string as its only parameter. Your goal is to find and return the first character in the string that does not repeat. If every character in the string repeats, or if the string is empty, the function should return null.



// Examples:

// firstNonRepeatingChar("aabbcc") should return null because all the characters appear more than once.

function firstNonRepeatingChar(string){
    let charObj = {}
    
    for(let i=0; i<string.length; i++){
        charObj[string[i]] = ( charObj[string[i]] || 0) + 1
    }
    
    for(let j=0; j< Object.keys(charObj).length; j++){
        if(charObj[Object.keys(charObj)[j]]<2){
            return Object.keys(charObj)[j]
        }
    }
    return null
}
