// In this exercise, you are required to write a JavaScript function called findDuplicates. This function will take an array of numbers as its only parameter. Your goal is to identify and return all the numbers that appear more than once in the array.

// The function should return a new array containing the duplicate numbers. The function should return an empty array if there are no duplicate numbers.


// Examples:

// findDuplicates([1, 2, 3, 4, 4, 5, 6, 6]) should return [4, 6] because the numbers 4 and 6 appear more than once.

// findDuplicates([1, 2, 3]) should return [] because there are no duplicate numbers.





// To solve this problem, you can use one of two types of hash tables available in JavaScript:

// Map: A built-in object that lets you store key-value pairs in an organized manner.

// Object: A fundamental data structure in JavaScript that can also be used as a hash table for storing key-value pairs.



// You are encouraged to solve this exercise using either a Map or an Object, and you can even try both approaches for extra practice!


function findDuplicates(arr){
    let checkObj = {}
    let finalArrSet = new Set()
    arr.forEach(e => {
        if(checkObj[e]) {
            finalArrSet.add(e)
        }
        checkObj[e] = true
    })
    
    return Array.from(finalArrSet)
}
