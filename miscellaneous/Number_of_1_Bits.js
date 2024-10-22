// Write a function that takes the binary representation of a positive integer and returns the number of 
// set bits
//  it has (also known as the Hamming weight).

 

// Example 1:

// Input: n = 11

// Output: 3

// Explanation:

// The input binary string 1011 has a total of three set bits.

// Example 2:

// Input: n = 128

// Output: 1

// Explanation:

// The input binary string 10000000 has a total of one set bit.

// Example 3:

// Input: n = 2147483645

// Output: 30

// Explanation:

// The input binary string 1111111111111111111111111111101 has a total of thirty set bits.

// link - https://leetcode.com/problems/number-of-1-bits/description

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let binaryNumber = n.toString(2)
    let count = 0
    for(let char of binaryNumber){
        if(char==='1'){
            count++
        }
    }
    return count
};


//alternate bitwise solution - 
// Converting to strings and arrays is slow. We can just manipulate the bits!
// Create a count variable with a value of 0.
// While the integer is not 0
// Check if the last bit is 1. We can use a bitwise AND to check for an odd bit (1) or an even bit (0).
// If so, add it to the count.
// Chop off the last (farthest right) bit of the integer. JavaScript has 3 bitwise shift operators.
// We can use unsigned right shift: int = int >>> 1 or unsigned right shift assignment: int >>>= 1
// Return the count
var hammingWeight = function(int) {
    let count = 0;
    while (int !== 0) {
        const bitComparison = int & 1; // 1 & 1 will return 1. 0 & 1 will return 0.
        if (bitComparison === 1) count++;
        int >>>= 1; // unsigned right shift assignment (chop off the last bit and assign it)
    }  
    return count;
};