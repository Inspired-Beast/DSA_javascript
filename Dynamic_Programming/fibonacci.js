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


// -----------------------------------------------------------

//using bottom up approach -> not subtracting and reaching base case that is 1 or 0
//starting from 0 or 1 to the top value

let pro = 0
function fibonacciBottomUp(n){
    let finalArray = []
    finalArray[0] = 0
    finalArray[1] = 1
    
    for(let i=2; i<=n; i++){
        pro++
        finalArray[i] = finalArray[i-1] + finalArray[i-2]
    }
    return finalArray[n]
}

console.log(fibonacciBottomUp(40))
console.log(pro)

//this takes 39 itertions or repitions to give us value which is a huge improvement then the
// normal recursion function