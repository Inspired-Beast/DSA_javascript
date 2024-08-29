// Factorial function using recursion

function recursion(n){
    if(n===1 || n===0){
        return 1
    }
    return n * recursion(n-1)
}

console.log(recursion(5))