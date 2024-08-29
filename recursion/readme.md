Recursion - its is essentially a function calling itself until it doesn't.

Recursion how it works - 

in recursion the function which are called  are pushed into a call stack and as you know once the function matches the base case it stops pushing the functions into the stack and starts popping them out hence executing them.

for instance if we take example of a function namely check and the base case is that the parameter increases by 3 then lets see how it works in stack

. 

function check(count){
    if(count>3){
        return 1
    }
    return check(count+1) 
}

once check function is called with parameter 0

then in stack it will go like this (considering stack as array)

[count(0), count(1), count(2), count(3)[top]] ---> now you can see how recursive functions are added into the call stack

once we hit the base case then first count(3) will be called then count(2) and so on as u know stack behaviour is LIFO.
