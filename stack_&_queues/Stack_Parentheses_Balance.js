// Implement a function called isBalancedParentheses() that checks if a given string containing parentheses is balanced or not.

// Input:
// A string parentheses.

// Output:
// The function should return a boolean value, true if the input string contains balanced parentheses, and false if not.


// Constraints:
// You must use the provided Stack class to check if the parentheses are balanced.
// You cannot use built-in string manipulation methods for this task.

// Function Signature:
// function isBalancedParentheses(parentheses) {
//     // Your implementation goes here
// }


// Example 1:
// const input = "(()())";
// const output = isBalancedParentheses(input);
// The output should be true, as the input string contains balanced parentheses.


// Example 2:
// const input = "(()";
// const output = isBalancedParentheses(input);
// The output should be false, as the input string contains unbalanced parentheses.


// Example 3:
// const input = ")(";
// const output = isBalancedParentheses(input);

class Stack {
    constructor() {
        this.stackList = [];
    }

    getStackList() {
        return this.stackList;
    }

    printStack() {
        for (let i = this.stackList.length - 1; i >= 0; i--) {
            console.log(this.stackList[i]);
        }
    }

    isEmpty() {
        return this.stackList.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.stackList[this.stackList.length - 1];
        }
    }

    size() {
        return this.stackList.length;
    }

    push(value) {
        this.stackList.push(value);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.stackList.pop();
    }
    
}


// main function for the problem
function isBalancedParentheses(string){
    const stackString = new Stack()
    for(let i = 0; i<string.length; i++){
        if(string[i] === "("){
            stackString.push(string[i])
        }
        else{
            if(stackString.size()===0){
                return false; // returning false because if there is no ( bracket then it makes no sense to continue as ) won't make a pair
            }
            else{
                stackString.pop()
            }
        }
        
    }
    const check =  stackString.size()===0? true : false;
    return check
}
