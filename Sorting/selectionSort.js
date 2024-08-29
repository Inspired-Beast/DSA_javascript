// Selection sort is a simple and efficient sorting algorithm that 
// works by repeatedly selecting the smallest (or largest) element from 
// the unsorted portion of the list and moving it to the sorted portion of the list. 

function selectionSort(array){
    let min // we will use min get the minimum value and if its not same as the
    // selected i then we will swap that
    // fixing i and comparing all j's till value at we have the least value index assigned to min
    for(let i=0; i<array.length-1; i++){
        min = i
        for(let j=i+1;j<array.length; j++){
            if(array[j] < array[min]){ // will continuously iterate with j
                // and change min to index with least value
                min = j
            }            
        }
        if(i !== min){
            [array[i], array[min]] = [array[min], array[i]] // this is a swapping technique of array
            // here we swap values based on the indices
        }      
    }
    return array
}

let arr = [45, 36, 21, 19, 22, 23]
console.log(selectionSort(arr))