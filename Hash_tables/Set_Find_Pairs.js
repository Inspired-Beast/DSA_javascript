// Your task is to write a function named findPairs that takes in two lists of numbers (arr1 and arr2) and a target number (target).

// The function should find all pairs where one number from arr1 and one number from arr2 sum up to the target number.

// The function should return these pairs as a list.



// Example

// Input: arr1 = [1, 2, 3], arr2 = [4, 5, 6], target = 7

// Output: [[1, 6], [2, 5], [3, 4]]

function findPairs(arr1, arr2, target) {
 
    // Create an empty Set to store numbers from "arr1"
    // Sets hold unique values
    const mySet = new Set();
 
    // Create an empty array to store pairs of numbers
    // that add up to the "target"
    const pairs = [];
 
    // Loop through each number in "arr1"
    for (const num of arr1) {
 
        // Add each number to "mySet"
        mySet.add(num);
    }
 
    // Loop through each number in "arr2"
    for (const num of arr2) {
 
        // Calculate what number would be needed
        // to make the current number in "arr2" add up to "target"
        const complement = target - num;
 
        // Check if this "complement" exists in "mySet"
        if (mySet.has(complement)) {
 
            // If it does, add the pair [complement, num] to "pairs"
            pairs.push([complement, num]);
        }
    }
 
    // Return the "pairs" array
    // It contains pairs of numbers that add up to "target"
    return pairs;
}
