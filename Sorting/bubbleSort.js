// Bubble sort works on the repeatedly swapping of adjacent elements until they are not 
// in the intended order. It is called bubble sort because the movement of array elements 
// is just like the movement of air bubbles in the water.

// Bubble sort is O(n^2), where n is a number of items.

function bubbleSort(array){
    for(let i=array.length-1; i>0; i--){
        for(let j=0; j<i; j++){
            if(array[j+1] < array[j]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp
            }
        }
    }
    return array
}
let arr = [45, 36, 21, 19, 22, 23]
console.log(bubbleSort(arr))