// You have a linked list where each node represents a binary digit (0 or 1). The goal of the binaryToDecimal function is to convert this binary number, represented by the linked list, into its decimal equivalent.

// How Binary to Decimal Conversion Works:
// In binary-to-decimal conversion, each position of a binary number corresponds to a specific power of 2, starting from the rightmost digit.
// The rightmost digit is multiplied by 2^0 (which equals 1).
// The next digit to the left is multiplied by 2^1 (which equals 2).
// The digit after that is multiplied by 2^2 (which equals 4). ... and so on.
// To find the decimal representation:
// Multiply each binary digit by its corresponding power of 2 value.
// Sum up all these products.


// Example Execution with Binary 101:

// Start with num = 0.
// Process 1 (from the head of the linked list): num = 0 * 2 + 1 = 1
// Process 0: num = 1 * 2 + 0 = 2
// Process 1: num = 2 * 2 + 1 = 5
// Return num, which is 5.

function binaryToDecimal(){
    let temp = this.head;
    let num = 0
    while(temp){
        num = num * 2 + temp.value
        temp = temp.next
    }
    
    return num
}