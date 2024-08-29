// Your task is to write a function called removeDuplicates that takes a list of numbers or letters as input.

// This list can have some items that appear more than once.

// Your function should return a new list where each number or letter only appears once.



// Example

// Input: [1, 2, 2, 3, 4, 4, 4]

// Output: [1, 2, 3, 4]

function removeDuplicates(arr){
    let newSet = new Set(arr);
    return [...newSet]
}

