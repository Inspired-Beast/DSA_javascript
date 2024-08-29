// question given two arrays arr1 and arr2 find the element
// common between them

// Approach 1( two loop O(n^2) method)

function compareArrA1(arr1, arr2){
    let flag = false
    arr1.forEach((element) => {
        arr2.forEach((element2) => {
            if(element===element2){
                flag = true // can't return here as inside 
                // a callback function hence need flag to 
                // assign the value to
            }
        })
    });
    return flag
}

// BUt this method is inefficient as it is O(n^2)

// Approach 2(using object or hash table O(2n) or O(n))

function compareArrA2(arr1, arr2){
    let obj = { }
    arr1.forEach(e => obj[e]= true)
    for(let i=0; i<arr2.length; i++){
        if(obj[arr2[i]]){
            return true
        }
    }
    return false
}

// alternate approach 2 using ES6 methods

const itemInCommon = (arr1, arr2)=>{
    let newMap = new Map();
    let result = false
    arr1.forEach(element=>{
        newMap.set(element, true)
    });
    
    arr2.forEach(element2=>{
        if(newMap.get(element2)){
            result = true}
    });
    
    return result
    
}