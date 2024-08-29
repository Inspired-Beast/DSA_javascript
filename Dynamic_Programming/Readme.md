Dynamic Programming is a method used in mathematics and computer science to solve complex problems by breaking them down into simpler subproblems. By solving each subproblem only once and storing the results, it avoids redundant computations, leading to more efficient solutions for a wide range of problems.

link - https://www.geeksforgeeks.org/dynamic-programming/

How Does Dynamic Programming (DP) Work?
Identify Subproblems: Divide the main problem into smaller, independent subproblems.
Store Solutions: Solve each subproblem and store the solution in a table or array.
Build Up Solutions: Use the stored solutions to build up the solution to the main problem.
Avoid Redundancy: By storing solutions, DP ensures that each subproblem is solved only once, reducing computation time.

Lets take an exaple of common problem that is fibonacci series:
// recursion fibonacci

let process = 0
function fibonacci(n){
    process++
    if(n===0 || n===1){
        return n
    }
     return fibonacci(n-1) + fibonacci(n-2)
}

console.log(`Nth fibonacci number is ${fibonacci(40)}`)
console.log("number of function call it took",process)

// so with this we get result like - 
// Nth fibonacci number is 102334155
// number of function call it took 331160281

NOTE - As you can see for number 40 it took 331160281 function calls which is because of functions with same number n being called again and again hence we will use a memoized approach to solve this 
redundant function calling.


//memoized fibonacci recursion (top down approach)

let processtwo = 0
let memoizedArray = [] // we will use this array to mark down which functions need to be called again 
// for instancesay in this recursice call we already called function for n=5 and then again when f(n=6)
// is recursed it will call f(5) and if we have this array denoting those values then we wont need to calculate 
// f(5)
function fibonacciMemoized(n){
    processtwo++
    if(memoizedArray[n]){ // checking if function call for n is already done or not if its there
        // then returining the resulatant value
        return memoizedArray[n]
    }
    if(n===0 || n===1){
        return n
    }
     memoizedArray[n] = fibonacciMemoized(n-1) + fibonacciMemoized(n-2) // storing values index wise
     //so at repeated values are not called again the check for repition is done in above
     //if statement
    return memoizedArray[n]
}
console.log(`Nth fibonacci number is ${fibonacciMemoized(40)} `)
console.log("number of function call it took",processtwo)

This above approach reduced the function recursion call by a lot as previously it was 331160281 for normal recursion and now using top down approach it came down to 79

In this way we can reduce the computation time of our problems

-----------------------------------------------------------------------------------------------------

now there is another wasy known as bottom up approach - 
In the bottom-up approach, also known as tabulation, we start with the smallest subproblems and gradually build up to the final solution. We store the results of solved subproblems in a table to avoid redundant calculations.

lets see this for same fibonacci series.

let pro = 0
function fibonacci(n){
    let finalArray = []
    finalArray[0] = 0
    finalArray[1] = 1
    
    for(let i=2; i<=n; i++){
        pro++
        finalArray[i] = finalArray[i-1] + finalArray[i-2]
    }
    return finalArray[n]
}

console.log(fibonacci(40))
console.log(pro)

// By this we need 39 iterations to reach the value which is far better


