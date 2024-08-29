// The findMaxMin function takes an array of numbers (myArray) as its input.

// The function aims to find both the maximum and minimum values present in the array.

// It returns an array containing two elements: the first being the maximum value and the second being the minimum value found in myArray.


// Constraints:

// The array must contain at least one element.

// The array can contain integers or floating-point numbers.

// Do not use built-in Math.max or Math.min functions.

// You are not allowed to sort the array.


// Parameters:

// myArray: An array of numbers, either integers or floats.


// Returns:

// The function returns an array [maximum, minimum], where maximum is the largest number and minimum is the smallest number in myArray.



// Examples:

// Basic Example

// let myArray = [3, 2, 4, 1];
// let result = findMaxMin(myArray);
// // The function should return [4, 1]

function findMaxMin(myArray){
    if(myArray.length<1){
        return [undefined, undefined]
    }
    let result = [-Infinity, Infinity];
    for(let i of myArray){
        if(i>= result[0]){
            result[0] = i
        }
        if(i<=result[1]){
           result[1] = i 
        }
    }
    return result
}

// ---------------------------------------------------------------------------------------------

// Code Walkthrough:(check code below for this walkthrough)

// Initialize maximum and minimum:
// Two variables, maximum and minimum, are initialized to the first element of the array myArray. These variables will hold the largest and smallest numbers found in the array, respectively.

// let maximum = myArray[0]; let minimum = myArray[0];

// Loop Through myArray:
// A for loop iterates through each element in myArray using the variable num.

// for (let num of myArray) {

// Check for Maximum Value:
// Within the loop, an if statement checks whether the current element num is greater than maximum. If it is, maximum is updated to hold the value of num.

// if (num > maximum) { maximum = num; }

// Check for Minimum Value:
// Within the same loop, an else if statement checks whether num is smaller than minimum. If it is, minimum is updated to hold the value of num.

// else if (num < minimum) { minimum = num; }

// Return Maximum and Minimum Values:
// After the loop completes, the function returns an array containing maximum and minimum values, in that order.

// return [maximum, minimum];



// This function efficiently finds both the maximum and minimum values in the array myArray by traversing it only once. It returns these two values as an array.





// Code with inline comments:



// // Define the function findMaxMin that takes in a single parameter:
// // myArray (an array of numbers).
// function findMaxMin(myArray) {
 
//     // Initialize 'maximum' with the first element in the array.
//     // This will be used to keep track of the largest number.
//     let maximum = myArray[0];
 
//     // Initialize 'minimum' with the first element in the array.
//     // This will be used to keep track of the smallest number.
//     let minimum = myArray[0];
 
//     // Start a for-of loop to iterate through each number in myArray.
//     for (let num of myArray) {
 
//         // Check if the current number is greater than 'maximum'.
//         if (num > maximum) {
 
//             // If it is, update 'maximum' to the new larger number.
//             maximum = num;
//         } 
//         // Else, check if the current number is smaller than 'minimum'.
//         else if (num < minimum) {
 
//             // If it is, update 'minimum' to the new smaller number.
//             minimum = num;
//         }
//         // If neither condition is met, simply continue to the next iteration.
//     }
 
//     // After the loop, return an array containing both 'maximum' and 'minimum'.
//     return [maximum, minimum];
// }



